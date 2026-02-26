// ================== GLOBAL VARIABLES ==================
let currentChannel = 'general';
let currentMessageRef = null;
let currentMessageCallback = null;
const SPECIAL_ADMINS = ["sunibun", "sunibuni", "mcthug", "trusty", "enzo", "asthma", "viper", "yoshi", "zoinkers1", "sigmatuffmango24s"];
const AVAILABLE_REACTIONS = ["😭", "👍", "❤️", "😂", "🔥", "👋", "📌", "🎉", "🤔", "👀", "💀", "🥶", "😱", "🤣", "😡", "🥳"];
let notificationPermission = false;
let loadedMessageIds = new Set(); // Track loaded messages to prevent duplicates

// ================== SPECIAL USER ROLES ==================
const SPECIAL_USER_ROLES = {
  'sunibun': { role: 'OWNER', color: '#1E90FF' },
  'mcthug': { role: 'CO-OWNER', color: '#a62be3' },
  'trusty': { role: 'DEVELOPER', color: '#7d7d7d' },
  'enzo': { role: 'MANAGER', color: '#7700ff' },
  'asthma': { role: 'HEAD ADMIN', color: '#2deb9c' },
  'viper': { role: 'MODERATOR', color: '#2dcbeb' },
  'yoshi': { role: 'AURA FARMER', color: '#3d0000' },
  'zoinkers1': { role: 'ADMIN', color: '#ff0000' },
  'sigmatuffmangos101': { role: 'COOL', color: '#ff0000' }
};

const SPECIAL_USER_GIFS = {
  'sunibun': 'https://i.pinimg.com/736x/cf/84/7b/cf847b9988ad16898b73d622392bf813.jpg',
  'mcthug': 'https://i.pinimg.com/originals/b9/dd/d5/b9ddd52e623f5b9960f89c98b7ae1d73.gif',
  'trusty': 'https://i.pinimg.com/originals/78/e6/77/78e677384a1b99ad26af270b756dde17.gif',
  'enzo': 'https://i.pinimg.com/736x/95/22/4a/95224a572380e8333f8dbc93fdb7b09b.jpg',
  'asthma': 'https://cdn.pfps.gg/banners/2526-shooting-stars.gif',
  'viper': 'https://i.pinimg.com/1200x/92/6a/67/926a672cf499c0c1168d2689d7e8f310.jpg',
  'yoshi': 'https://i.pinimg.com/originals/18/59/2e/18592ef1c7d488453b80cdfd948ce62a.gif',
  'sigmatuffmangos101': 'https://cdn.discordapp.com/attachments/1103813186613940325/1468788986901430365/2D20F60A-2E9C-4843-AF31-C24550E5C25B.gif',
  'zoinkers1': 'https://i.pinimg.com/1200x/8a/dd/bf/8addbf181e195f54c5a8d8ed7a8c6ef1.jpg',
};

// ================== HELPER FUNCTIONS ==================
function escapeHtml(str) {
  return str.replace(/[&<>"'`=\/]/g, s => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  }[s]));
}

function isUserNearBottom(container) {
  const threshold = 120; // Pixels from bottom to trigger auto-scroll
  return container.scrollHeight - container.scrollTop - container.clientHeight < threshold;
}

// ================== NOTIFICATION SYSTEM ==================
function requestNotificationPermission() {
  if (!("Notification" in window)) {
    console.log("This browser doesn't support notifications");
    return;
  }
  
  if (Notification.permission === "granted") {
    notificationPermission = true;
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      notificationPermission = permission === "granted";
    });
  }
}

function sendNotification(title, body, username) {
  if (!notificationPermission) return;
  
  const currentUser = (localStorage.getItem('username') || '').toLowerCase();
  if (username === currentUser) return;
  
  if (body.includes(`@${currentUser}`)) {
    new Notification(`🔔 Mention from ${username}`, {
      body: body,
      icon: 'https://cdn.jsdelivr.net/gh/nevapaid/twisted-assets/logo.png',
      silent: false
    });
  }
}

// ================== NICKNAME SYSTEM ==================
function getNicknames() { 
  return JSON.parse(localStorage.getItem('chatNicknames') || '{}'); 
}

function setNickname(username, nickname) {
  const nicknames = getNicknames();
  if (!nickname || nickname.trim() === '') {
    delete nicknames[username];
  } else {
    nicknames[username] = nickname.trim();
  }
  localStorage.setItem('chatNicknames', JSON.stringify(nicknames));
}

function getNickname(username) { 
  return getNicknames()[username]; 
}

function promptNickname(username) {
  const currentNick = getNickname(username) || '';
  const newNick = prompt(`Set nickname for ${username}:`, currentNick);
  if (newNick !== null) {
    setNickname(username, newNick.trim());
    // Reload channel to show updated nicknames
    loadChannelMessages(currentChannel);
  }
}

// ================== CHANNEL MANAGEMENT ==================
function switchChannel(channelId) {
  currentChannel = channelId;
  
  document.querySelectorAll('.channel-icon').forEach(el => {
    el.classList.remove('active');
    if (el.dataset.channel === channelId) {
      el.classList.add('active');
    }
  });
  
  const header = document.getElementById('currentChannelName');
  if (header) {
    header.textContent = channelId === 'general' ? 'General Chat' : '📢 Announcements';
  }
  
  // Update upload button visibility
  updateUploadButton();
  
  // Clear loaded messages set and container when switching channels
  loadedMessageIds.clear();
  
  const container = document.getElementById('chatMessages');
  if (container) {
    container.innerHTML = '';
  }
  
  loadChannelMessages(channelId);
}

function loadChannelMessages(channelId) {
  if (!window.database) {
    setTimeout(() => loadChannelMessages(channelId), 1000);
    return;
  }
  
  // Clean up previous listener
  if (currentMessageRef && currentMessageCallback) {
    currentMessageRef.off('child_added', currentMessageCallback);
  }
  
  const container = document.getElementById('chatMessages');
  if (!container) return;
  
  // Set up new listener for incremental messages
  currentMessageRef = window.database.ref(`globalChat/channels/${channelId}/messages`)
    .orderByChild('timestamp')
    .limitToLast(50);
  
  // Load existing messages first
  currentMessageRef.once('value', (snapshot) => {
    const messages = [];
    snapshot.forEach((childSnapshot) => {
      messages.push({
        id: childSnapshot.key,
        data: childSnapshot.val()
      });
    });
    
    // Sort by timestamp
    messages.sort((a, b) => (a.data.timestamp || 0) - (b.data.timestamp || 0));
    
    // Render all messages at once for initial load
    messages.forEach(({ id, data }) => {
      if (!loadedMessageIds.has(id)) {
        renderSingleMessage(id, data, channelId);
      }
    });
    
    // Scroll to bottom on initial load
    requestAnimationFrame(() => {
      container.scrollTop = container.scrollHeight;
    });
  });
  
  // Listen for new messages
  currentMessageCallback = function(snapshot) {
    const msg = snapshot.val();
    if (!msg) return;
    
    // Use the incremental renderer - it will handle duplicates via loadedMessageIds
    renderSingleMessage(snapshot.key, msg, channelId);
  };
  
  currentMessageRef.on('child_added', currentMessageCallback);
}

// ================== INCREMENTAL MESSAGE RENDERER ==================
function renderSingleMessage(id, msg, channelId) {
  const container = document.getElementById('chatMessages');
  if (!container || !msg || !msg.user) return;
  
  // Prevent duplicates from Firebase replay
  if (loadedMessageIds.has(id)) return;
  loadedMessageIds.add(id);
  
  // Check if user is near bottom BEFORE appending
  const shouldAutoScroll = isUserNearBottom(container);
  
  // Create message elements
  const messageContainer = document.createElement('div');
  messageContainer.className = 'message-container';
  messageContainer.dataset.messageId = id;
  
  const userLower = msg.user.toLowerCase();
  const firstLetter = msg.user.charAt(0).toUpperCase();
  
  // Avatar
  const avatarDiv = document.createElement('div');
  avatarDiv.className = 'message-avatar';
  if (SPECIAL_USER_GIFS[userLower]) {
    avatarDiv.style.backgroundImage = `url('${SPECIAL_USER_GIFS[userLower]}')`;
    avatarDiv.style.backgroundSize = 'cover';
    avatarDiv.textContent = '';
  } else {
    avatarDiv.style.background = '#2a2a2a';
    avatarDiv.textContent = firstLetter;
  }
  
  // Content wrapper
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'message-content-wrapper';
  
  // Get nickname and role
  const nickname = getNickname(msg.user);
  const role = SPECIAL_USER_ROLES[userLower] || null;
  
  // Check if muted
  window.database.ref('globalChat/config/mutedUsers').once('value', function(snap) {
    const mutedUsers = snap.val() || [];
    const isMuted = mutedUsers.includes(msg.user.toLowerCase());
    
    const date = new Date(msg.timestamp || Date.now());
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Build header
    let headerHtml = `<div class="message-header">`;
    
    if (nickname) {
      headerHtml += `
        <span class="chat-username" onclick="promptNickname('${msg.user}')">
          <span class="chat-nickname">${escapeHtml(nickname)}</span>
          <span class="chat-realname">(@${escapeHtml(msg.user)})</span>
        </span>
      `;
    } else {
      headerHtml += `<span class="message-username" onclick="promptNickname('${msg.user}')" style="color: ${role ? role.color : '#fff'}">${escapeHtml(msg.user)}</span>`;
    }
    
    if (role) {
      headerHtml += `<span class="user-role-badge" style="background-color: ${role.color}20; border-color: ${role.color}40; color: ${role.color}">${role.role}</span>`;
    }
    
    headerHtml += `<span class="message-timestamp">${timeString}</span>`;
    headerHtml += `</div>`;
    
    // Handle reply indicator
    if (msg.replyTo) {
      headerHtml = `<div class="reply-indicator">↪️ Replying to someone</div>` + headerHtml;
    }
    
    // Handle message content based on type
    let contentHtml = '';
    if (msg.type === 'image') {
      contentHtml = `
        <div class="message-content ${isMuted ? 'muted' : ''}">
          <div class="image-message">
            <img src="${msg.fileData}" alt="${escapeHtml(msg.fileName || 'Image')}" 
                 style="max-width:300px; max-height:300px; border-radius:8px; cursor:pointer;" 
                 onclick="openImageModal('${msg.fileData}', '${escapeHtml(msg.fileName || 'Image')}')">
            ${msg.fileName ? `<div style="font-size:12px; color:#888; margin-top:4px;">📷 ${escapeHtml(msg.fileName)}</div>` : ''}
          </div>
        </div>
      `;
    } else {
      if (!msg.text) return;
      
      let messageText = escapeHtml(msg.text);
      const currentUser = (localStorage.getItem('username') || '').toLowerCase();
      const mentionRegex = new RegExp(`@${currentUser}\\b`, 'gi');
      if (messageText.match(mentionRegex)) {
        messageText = messageText.replace(mentionRegex, `<span style="background: #5865f2; color: #fff; padding: 2px 6px; border-radius: 12px; font-weight: bold;">@${currentUser}</span>`);
      }
      
      contentHtml = `
        <div class="message-content ${isMuted ? 'muted' : ''}">
          ${messageText}
        </div>
      `;
    }
    
    // Add reactions if any
    if (msg.reactions && Object.keys(msg.reactions).length > 0) {
      contentHtml += `<div class="reactions-container">`;
      Object.entries(msg.reactions).forEach(function([emoji, users]) {
        const count = users.length;
        const active = users.includes(currentUser) ? 'active' : '';
        contentHtml += `
          <button class="reaction-badge ${active}" onclick="toggleReaction('${id}', '${channelId}', '${emoji}')">
            ${emoji} ${count}
          </button>
        `;
      });
      contentHtml += `</div>`;
    }
    
    contentWrapper.innerHTML = headerHtml + contentHtml;
    
    // Actions
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'message-actions';
    
    const reactBtn = document.createElement('button');
    reactBtn.className = 'message-action-btn';
    reactBtn.innerHTML = '😊 Add Reaction';
    reactBtn.onclick = (e) => {
      e.stopPropagation();
      showReactionPicker(id, channelId);
    };
    actionsDiv.appendChild(reactBtn);
    
    if (channelId === 'general') {
      const replyBtn = document.createElement('button');
      replyBtn.className = 'message-action-btn';
      replyBtn.innerHTML = '💬 Reply';
      replyBtn.onclick = () => replyToMessage(id, channelId, msg.user, msg.text);
      actionsDiv.appendChild(replyBtn);
    }
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'message-action-btn';
    if (msg.type === 'image') {
      copyBtn.innerHTML = '🔗 Copy Image URL';
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(msg.fileData);
        alert('Image URL copied to clipboard!');
      };
    } else {
      copyBtn.innerHTML = '📋 Copy Text';
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(msg.text);
        alert('Copied to clipboard!');
      };
    }
    actionsDiv.appendChild(copyBtn);
    
    const currentUser = (localStorage.getItem('username') || '').toLowerCase();
    if (SPECIAL_ADMINS.includes(currentUser)) {
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'message-action-btn';
      deleteBtn.innerHTML = '🗑️ Delete';
      deleteBtn.onclick = () => deleteMessage(channelId, id);
      actionsDiv.appendChild(deleteBtn);
      
      const muteBtn = document.createElement('button');
      muteBtn.className = 'message-action-btn';
      muteBtn.innerHTML = mutedUsers.includes(msg.user.toLowerCase()) ? '🔊 Unmute' : '🔇 Mute';
      muteBtn.onclick = () => toggleMute(msg.user);
      actionsDiv.appendChild(muteBtn);
    }
    
    // Assemble message
    messageContainer.appendChild(avatarDiv);
    messageContainer.appendChild(contentWrapper);
    messageContainer.appendChild(actionsDiv);
    
    // Append to container
    container.appendChild(messageContainer);
    
    // Smooth auto-scroll only if user was near bottom
    if (shouldAutoScroll) {
      requestAnimationFrame(() => {
        container.scrollTop = container.scrollHeight;
      });
    }
  });
}

// ================== IMAGE UPLOAD SYSTEM ==================
function isOwner() {
  const username = (localStorage.getItem('username') || '').toLowerCase();
  return username === 'sunibun' || username === 'trusty';
}

function updateUploadButton() {
  const uploadBtn = document.getElementById('fileUploadBtn');
  if (!uploadBtn) return;
  
  if (currentChannel === 'announcements' && isOwner()) {
    uploadBtn.style.display = 'inline-block';
  } else {
    uploadBtn.style.display = 'none';
  }
}

function handleImageUpload(file) {
  return new Promise((resolve, reject) => {
    if (!isOwner()) {
      reject('❌ Only sunibun can upload images in announcements');
      return;
    }
    
    if (currentChannel !== 'announcements') {
      reject('❌ Images can only be uploaded in announcements');
      return;
    }
    
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      reject('❌ Only PNG, JPG, GIF, and WEBP images are allowed');
      return;
    }
    
    const maxSize = 3 * 1024 * 1024;
    if (file.size > maxSize) {
      reject('❌ Image must be less than 3MB');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
      const username = (localStorage.getItem('username') || '').toLowerCase();
      
      const imageMessage = {
        user: username,
        type: 'image',
        fileName: file.name,
        fileData: e.target.result,
        timestamp: Date.now(),
        reactions: {}
      };
      
      window.database.ref(`globalChat/channels/${currentChannel}/messages`).push(imageMessage)
        .then(() => {
          resolve('Image uploaded successfully');
        })
        .catch((error) => {
          reject('Failed to upload image: ' + error.message);
        });
    };
    
    reader.onerror = function() {
      reject('❌ Failed to read image file');
    };
    
    reader.readAsDataURL(file);
  });
}

// ================== SEND MESSAGE ==================
function sendMessage() {
  const input = document.getElementById('chatInput');
  let text = input.value.trim();
  if (!text) return;

  let username = (localStorage.getItem('username') || '').trim();
  
  if (!username || username.toLowerCase() === 'guest') {
    const newName = prompt("You must set a username before chatting:");
    if (!newName || !newName.trim()) {
      alert("You cannot send messages without a username!");
      return;
    }
    username = newName.trim();
    localStorage.setItem('username', username);
  }

  username = username.toLowerCase();

  if (currentChannel === 'announcements') {
    if (username !== 'sunibun' && username !== 'trusty') {
      alert("❌ Only sunibun can post in announcements!");
      input.value = '';
      return;
    }
  }

  window.database.ref('globalChat/config/mutedUsers').once('value', function(snap) {
    const mutedUsers = snap.val() || [];
    if (mutedUsers.includes(username)) {
      alert("You are muted and cannot send messages.");
      input.value = '';
      return;
    }

    const messageData = {
      user: username,
      text: text,
      timestamp: Date.now(),
      reactions: {}
    };

    if (window.currentReply && window.currentReply.channelId === currentChannel) {
      messageData.replyTo = window.currentReply.messageId;
      window.currentReply = null;
    }

    window.database.ref(`globalChat/channels/${currentChannel}/messages`).push(messageData)
      .then(() => {
        input.value = '';
      });
  });
}

// ================== REACTION SYSTEM ==================
function toggleReaction(messageId, channelId, emoji) {
  const username = (localStorage.getItem('username') || '').toLowerCase();
  if (!username) return;

  const reactionRef = window.database.ref(`globalChat/channels/${channelId}/messages/${messageId}/reactions/${emoji}`);
  
  reactionRef.transaction(function(current) {
    if (!current) return [username];
    if (current.includes(username)) {
      return current.filter(u => u !== username);
    } else {
      return [...current, username];
    }
  });
}

function showReactionPicker(messageId, channelId) {
  const existingPicker = document.querySelector('.reaction-picker');
  if (existingPicker) existingPicker.remove();
  
  const picker = document.createElement('div');
  picker.className = 'reaction-picker';
  
  AVAILABLE_REACTIONS.forEach(emoji => {
    const btn = document.createElement('button');
    btn.textContent = emoji;
    btn.onclick = (e) => {
      e.stopPropagation();
      toggleReaction(messageId, channelId, emoji);
      picker.remove();
    };
    picker.appendChild(btn);
  });
  
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.className = 'close-picker';
  closeBtn.onclick = () => picker.remove();
  picker.appendChild(closeBtn);
  
  document.body.appendChild(picker);
  
  const x = window.event?.clientX || window.innerWidth / 2;
  const y = window.event?.clientY || window.innerHeight / 2;
  
  picker.style.top = (y - 100) + 'px';
  picker.style.left = (x - 200) + 'px';
}

// ================== REPLY SYSTEM ==================
function replyToMessage(messageId, channelId, username, originalText) {
  const input = document.getElementById('chatInput');
  input.value = `@${username} `;
  input.focus();
  
  window.currentReply = {
    messageId: messageId,
    channelId: channelId,
    username: username
  };
}

// ================== MUTE SYSTEM ==================
function toggleMute(username) {
  const currentUser = (localStorage.getItem('username') || '').toLowerCase();
  if (!SPECIAL_ADMINS.includes(currentUser)) return;

  window.database.ref('globalChat/config/mutedUsers').once('value', function(snap) {
    let mutedUsers = snap.val() || [];
    
    if (mutedUsers.includes(username)) {
      mutedUsers = mutedUsers.filter(u => u !== username);
    } else {
      mutedUsers.push(username);
    }
    
    window.database.ref('globalChat/config/mutedUsers').set(mutedUsers);
    // Reload to show mute status
    loadChannelMessages(currentChannel);
  });
}

function showMutedUsersList() {
  const popup = document.getElementById('mutedUsersPopup');
  const listDisplay = document.getElementById('mutedUsersListDisplay');
  
  window.database.ref('globalChat/config/mutedUsers').once('value', function(snap) {
    const mutedUsers = snap.val() || [];
    listDisplay.innerHTML = '';

    if (mutedUsers.length === 0) {
      listDisplay.innerHTML = '<p style="color: #888; text-align: center;">No muted users</p>';
    } else {
      mutedUsers.forEach(function(username) {
        const userDiv = document.createElement('div');
        userDiv.className = 'muted-user';
        userDiv.innerHTML = `
          <span>${username}</span>
          <button onclick="toggleMute('${username}')">Unmute</button>
        `;
        listDisplay.appendChild(userDiv);
      });
    }

    popup.classList.add('show');
  });
}

// ================== IMAGE MODAL SYSTEM ==================
function openImageModal(imageSrc, imageName) {
  const existingModal = document.getElementById('imageModal');
  if (existingModal) {
    existingModal.remove();
  }
  
  const modal = document.createElement('div');
  modal.id = 'imageModal';
  modal.className = 'image-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.95);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    cursor: zoom-out;
  `;
  
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '✕';
  closeBtn.style.cssText = `
    position: absolute;
    top: 20px;
    right: 30px;
    background: none;
    border: none;
    color: white;
    font-size: 40px;
    cursor: pointer;
    z-index: 10001;
    padding: 10px;
  `;
  closeBtn.onclick = function(e) {
    e.stopPropagation();
    modal.remove();
  };
  
  const imgContainer = document.createElement('div');
  imgContainer.style.cssText = `
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = imageName;
  img.style.cssText = `
    max-width: 90vw;
    max-height: 80vh;
    object-fit: contain;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
    cursor: default;
  `;
  
  const filename = document.createElement('div');
  filename.textContent = imageName;
  filename.style.cssText = `
    color: white;
    margin-top: 15px;
    font-size: 14px;
    opacity: 0.8;
  `;
  
  const zoomControls = document.createElement('div');
  zoomControls.style.cssText = `
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 20px;
    background: rgba(0,0,0,0.7);
    padding: 10px 20px;
    border-radius: 30px;
  `;
  
  const zoomIn = document.createElement('button');
  zoomIn.innerHTML = '🔍+';
  zoomIn.onclick = (e) => {
    e.stopPropagation();
    currentZoom = Math.min(currentZoom + 0.25, 3);
    img.style.transform = `scale(${currentZoom})`;
  };
  
  const zoomOut = document.createElement('button');
  zoomOut.innerHTML = '🔍-';
  zoomOut.onclick = (e) => {
    e.stopPropagation();
    currentZoom = Math.max(currentZoom - 0.25, 0.5);
    img.style.transform = `scale(${currentZoom})`;
  };
  
  const resetZoom = document.createElement('button');
  resetZoom.innerHTML = '⟲';
  resetZoom.onclick = (e) => {
    e.stopPropagation();
    currentZoom = 1;
    img.style.transform = 'scale(1)';
  };
  
  const downloadBtn = document.createElement('button');
  downloadBtn.innerHTML = '📥';
  downloadBtn.onclick = (e) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageName || 'image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  let currentZoom = 1;
  
  zoomControls.appendChild(zoomOut);
  zoomControls.appendChild(resetZoom);
  zoomControls.appendChild(zoomIn);
  zoomControls.appendChild(downloadBtn);
  
  imgContainer.appendChild(img);
  imgContainer.appendChild(filename);
  imgContainer.appendChild(zoomControls);
  
  modal.appendChild(closeBtn);
  modal.appendChild(imgContainer);
  
  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.remove();
    }
  };
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && document.getElementById('imageModal')) {
      modal.remove();
    }
  }, { once: true });
  
  document.body.appendChild(modal);
}

// ================== DELETE MESSAGE ==================
function deleteMessage(channelId, messageId) {
  if (!confirm('Delete this message?')) return;
  window.database.ref(`globalChat/channels/${channelId}/messages/${messageId}`).remove();
}

// ================== DELETE ALL ANNOUNCEMENTS ==================
function deleteAllAnnouncements() {
  const currentUser = (localStorage.getItem('username') || '').toLowerCase();
  if (currentUser !== 'sunibun' && currentUser !== 'trusty') {
    alert('Only sunibun can delete announcements');
    return;
  }
  
  if (!confirm('Delete ALL announcements?')) return;
  
  window.database.ref('globalChat/channels/announcements/messages').remove()
    .then(() => {
      alert('All announcements deleted');
      loadChannelMessages('announcements');
    });
}

// ================== CHECK USERNAME ==================
function checkUsername() {
  const username = localStorage.getItem('username');
  const modal = document.getElementById('usernameModal');
  if (!username || username.toLowerCase() === 'guest') {
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

function saveUsername() {
  const input = document.getElementById('usernameInput');
  const username = input.value.trim();
  const error = document.getElementById('usernameError');
  
  if (!username) {
    error.textContent = 'Please enter a username';
    return;
  }
  
  if (username.length > 20) {
    error.textContent = 'Username too long (max 20 characters)';
    return;
  }
  
  localStorage.setItem('username', username);
  document.getElementById('usernameModal').classList.add('hidden');
  location.reload();
}

// ================== INITIALIZATION ==================
document.addEventListener('DOMContentLoaded', function() {
  checkUsername();
  requestNotificationPermission();
  
  // Set up image upload button
  const uploadBtn = document.getElementById('fileUploadBtn');
  const fileInput = document.getElementById('fileUploadInput');
  
  if (uploadBtn && fileInput) {
    uploadBtn.addEventListener('click', function() {
      if (currentChannel !== 'announcements') {
        alert('❌ Images can only be uploaded in announcements');
        return;
      }
      if (!isOwner()) {
        alert('❌ Only sunibun can upload images in announcements');
        return;
      }
      fileInput.click();
    });
    
    fileInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (!file) return;
      
      handleImageUpload(file)
        .then((message) => {
          alert('✅ Image uploaded successfully!');
          fileInput.value = '';
        })
        .catch((error) => {
          alert(error);
          fileInput.value = '';
        });
    });
  }
  
  function init() {
    if (window.database) {
      // Clean up announcements if needed
      const currentUser = (localStorage.getItem('username') || '').toLowerCase();
      if (currentUser === 'sunibun' || currentUser === 'trusty') {
        window.database.ref('globalChat/channels/announcements/messages').once('value', function(snap) {
          const msgs = snap.val() || {};
          const updates = {};
          Object.entries(msgs).forEach(([id, msg]) => {
            if (msg.user && msg.user.toLowerCase() !== 'sunibun' && msg.user.toLowerCase() !== 'trusty') {
              updates[id] = null;
            }
          });
          if (Object.keys(updates).length > 0) {
            window.database.ref('globalChat/channels/announcements/messages').update(updates);
          }
        });
      }
      
      updateUploadButton();
      loadChannelMessages('general');
      
      // Set up notification listener
      window.database.ref('globalChat/channels/general/messages')
        .orderByChild('timestamp')
        .limitToLast(1)
        .on('child_added', function(snapshot) {
          const msg = snapshot.val();
          if (msg && msg.user && msg.text) {
            sendNotification(msg.user, msg.text, msg.user);
          }
        });
    } else {
      setTimeout(init, 1000);
    }
  }
  
  setTimeout(init, 1500);
});

// Add CSS for smooth scrolling
const style = document.createElement('style');
style.textContent = `
  #chatMessages {
    scroll-behavior: smooth;
    overflow-y: auto;
  }
  
  .image-modal img {
    transition: transform 0.2s;
  }
  
  .image-modal button:hover {
    opacity: 0.7;
    background: rgba(255,255,255,0.1) !important;
    border-radius: 5px;
  }
  
  body.modal-open {
    overflow: hidden;
  }
`;
document.head.appendChild(style);

// Make functions global
window.switchChannel = switchChannel;
window.toggleReaction = toggleReaction;
window.replyToMessage = replyToMessage;
window.showReactionPicker = showReactionPicker;
window.toggleMute = toggleMute;
window.showMutedUsersList = showMutedUsersList;
window.sendMessage = sendMessage;
window.promptNickname = promptNickname;
window.deleteMessage = deleteMessage;
window.saveUsername = saveUsername;
window.checkUsername = checkUsername;
window.deleteAllAnnouncements = deleteAllAnnouncements;
window.isOwner = isOwner;
window.updateUploadButton = updateUploadButton;
window.handleImageUpload = handleImageUpload;
window.openImageModal = openImageModal;