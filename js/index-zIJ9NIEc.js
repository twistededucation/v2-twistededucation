(function() {
    const ol = document.createElement("link").relList;
    if (ol && ol.supports && ol.supports("modulepreload"))
        return;
    for (const G of document.querySelectorAll('link[rel="modulepreload"]'))
        h(G);
    new MutationObserver(G => {
        for (const I of G)
            if (I.type === "childList")
                for (const _l of I.addedNodes)
                    _l.tagName === "LINK" && _l.rel === "modulepreload" && h(_l)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function P(G) {
        const I = {};
        return G.integrity && (I.integrity = G.integrity),
        G.referrerPolicy && (I.referrerPolicy = G.referrerPolicy),
        G.crossOrigin === "use-credentials" ? I.credentials = "include" : G.crossOrigin === "anonymous" ? I.credentials = "omit" : I.credentials = "same-origin",
        I
    }
    function h(G) {
        if (G.ep)
            return;
        G.ep = !0;
        const I = P(G);
        fetch(G.href, I)
    }
}
)();
function Yr(z) {
    return z && z.__esModule && Object.prototype.hasOwnProperty.call(z, "default") ? z.default : z
}
var Of = {
    exports: {}
}
  , wu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function Pd() {
    if (Nr)
        return wu;
    Nr = 1;
    var z = Symbol.for("react.transitional.element")
      , ol = Symbol.for("react.fragment");
    function P(h, G, I) {
        var _l = null;
        if (I !== void 0 && (_l = "" + I),
        G.key !== void 0 && (_l = "" + G.key),
        "key"in G) {
            I = {};
            for (var Yl in G)
                Yl !== "key" && (I[Yl] = G[Yl])
        } else
            I = G;
        return G = I.ref,
        {
            $$typeof: z,
            type: h,
            key: _l,
            ref: G !== void 0 ? G : null,
            props: I
        }
    }
    return wu.Fragment = ol,
    wu.jsx = P,
    wu.jsxs = P,
    wu
}
var Dr;
function lv() {
    return Dr || (Dr = 1,
    Of.exports = Pd()),
    Of.exports
}
var b = lv()
  , Nf = {
    exports: {}
}
  , L = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function tv() {
    if (Rr)
        return L;
    Rr = 1;
    var z = Symbol.for("react.transitional.element")
      , ol = Symbol.for("react.portal")
      , P = Symbol.for("react.fragment")
      , h = Symbol.for("react.strict_mode")
      , G = Symbol.for("react.profiler")
      , I = Symbol.for("react.consumer")
      , _l = Symbol.for("react.context")
      , Yl = Symbol.for("react.forward_ref")
      , H = Symbol.for("react.suspense")
      , _ = Symbol.for("react.memo")
      , ll = Symbol.for("react.lazy")
      , B = Symbol.for("react.activity")
      , vl = Symbol.iterator;
    function lt(o) {
        return o === null || typeof o != "object" ? null : (o = vl && o[vl] || o["@@iterator"],
        typeof o == "function" ? o : null)
    }
    var yl = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , Xl = Object.assign
      , Fl = {};
    function Zl(o, p, M) {
        this.props = o,
        this.context = p,
        this.refs = Fl,
        this.updater = M || yl
    }
    Zl.prototype.isReactComponent = {},
    Zl.prototype.setState = function(o, p) {
        if (typeof o != "object" && typeof o != "function" && o != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, o, p, "setState")
    }
    ,
    Zl.prototype.forceUpdate = function(o) {
        this.updater.enqueueForceUpdate(this, o, "forceUpdate")
    }
    ;
    function Bt() {}
    Bt.prototype = Zl.prototype;
    function ql(o, p, M) {
        this.props = o,
        this.context = p,
        this.refs = Fl,
        this.updater = M || yl
    }
    var El = ql.prototype = new Bt;
    El.constructor = ql,
    Xl(El, Zl.prototype),
    El.isPureReactComponent = !0;
    var tt = Array.isArray;
    function Kl() {}
    var K = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , Gl = Object.prototype.hasOwnProperty;
    function ut(o, p, M) {
        var D = M.ref;
        return {
            $$typeof: z,
            type: o,
            key: p,
            ref: D !== void 0 ? D : null,
            props: M
        }
    }
    function re(o, p) {
        return ut(o.type, p, o.props)
    }
    function vt(o) {
        return typeof o == "object" && o !== null && o.$$typeof === z
    }
    function pl(o) {
        var p = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + o.replace(/[=:]/g, function(M) {
            return p[M]
        })
    }
    var Jt = /\/+/g;
    function pt(o, p) {
        return typeof o == "object" && o !== null && o.key != null ? pl("" + o.key) : p.toString(36)
    }
    function nt(o) {
        switch (o.status) {
        case "fulfilled":
            return o.value;
        case "rejected":
            throw o.reason;
        default:
            switch (typeof o.status == "string" ? o.then(Kl, Kl) : (o.status = "pending",
            o.then(function(p) {
                o.status === "pending" && (o.status = "fulfilled",
                o.value = p)
            }, function(p) {
                o.status === "pending" && (o.status = "rejected",
                o.reason = p)
            })),
            o.status) {
            case "fulfilled":
                return o.value;
            case "rejected":
                throw o.reason
            }
        }
        throw o
    }
    function T(o, p, M, D, Y) {
        var Q = typeof o;
        (Q === "undefined" || Q === "boolean") && (o = null);
        var J = !1;
        if (o === null)
            J = !0;
        else
            switch (Q) {
            case "bigint":
            case "string":
            case "number":
                J = !0;
                break;
            case "object":
                switch (o.$$typeof) {
                case z:
                case ol:
                    J = !0;
                    break;
                case ll:
                    return J = o._init,
                    T(J(o._payload), p, M, D, Y)
                }
            }
        if (J)
            return Y = Y(o),
            J = D === "" ? "." + pt(o, 0) : D,
            tt(Y) ? (M = "",
            J != null && (M = J.replace(Jt, "$&/") + "/"),
            T(Y, p, M, "", function(me) {
                return me
            })) : Y != null && (vt(Y) && (Y = re(Y, M + (Y.key == null || o && o.key === Y.key ? "" : ("" + Y.key).replace(Jt, "$&/") + "/") + J)),
            p.push(Y)),
            1;
        J = 0;
        var Tl = D === "" ? "." : D + ":";
        if (tt(o))
            for (var hl = 0; hl < o.length; hl++)
                D = o[hl],
                Q = Tl + pt(D, hl),
                J += T(D, p, M, Q, Y);
        else if (hl = lt(o),
        typeof hl == "function")
            for (o = hl.call(o),
            hl = 0; !(D = o.next()).done; )
                D = D.value,
                Q = Tl + pt(D, hl++),
                J += T(D, p, M, Q, Y);
        else if (Q === "object") {
            if (typeof o.then == "function")
                return T(nt(o), p, M, D, Y);
            throw p = String(o),
            Error("Objects are not valid as a React child (found: " + (p === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : p) + "). If you meant to render a collection of children, use an array instead.")
        }
        return J
    }
    function x(o, p, M) {
        if (o == null)
            return o;
        var D = []
          , Y = 0;
        return T(o, D, "", "", function(Q) {
            return p.call(M, Q, Y++)
        }),
        D
    }
    function C(o) {
        if (o._status === -1) {
            var p = o._result;
            p = p(),
            p.then(function(M) {
                (o._status === 0 || o._status === -1) && (o._status = 1,
                o._result = M)
            }, function(M) {
                (o._status === 0 || o._status === -1) && (o._status = 2,
                o._result = M)
            }),
            o._status === -1 && (o._status = 0,
            o._result = p)
        }
        if (o._status === 1)
            return o._result.default;
        throw o._result
    }
    var ul = typeof reportError == "function" ? reportError : function(o) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var p = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
                error: o
            });
            if (!window.dispatchEvent(p))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", o);
            return
        }
        console.error(o)
    }
      , il = {
        map: x,
        forEach: function(o, p, M) {
            x(o, function() {
                p.apply(this, arguments)
            }, M)
        },
        count: function(o) {
            var p = 0;
            return x(o, function() {
                p++
            }),
            p
        },
        toArray: function(o) {
            return x(o, function(p) {
                return p
            }) || []
        },
        only: function(o) {
            if (!vt(o))
                throw Error("React.Children.only expected to receive a single React element child.");
            return o
        }
    };
    return L.Activity = B,
    L.Children = il,
    L.Component = Zl,
    L.Fragment = P,
    L.Profiler = G,
    L.PureComponent = ql,
    L.StrictMode = h,
    L.Suspense = H,
    L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K,
    L.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(o) {
            return K.H.useMemoCache(o)
        }
    },
    L.cache = function(o) {
        return function() {
            return o.apply(null, arguments)
        }
    }
    ,
    L.cacheSignal = function() {
        return null
    }
    ,
    L.cloneElement = function(o, p, M) {
        if (o == null)
            throw Error("The argument must be a React element, but you passed " + o + ".");
        var D = Xl({}, o.props)
          , Y = o.key;
        if (p != null)
            for (Q in p.key !== void 0 && (Y = "" + p.key),
            p)
                !Gl.call(p, Q) || Q === "key" || Q === "__self" || Q === "__source" || Q === "ref" && p.ref === void 0 || (D[Q] = p[Q]);
        var Q = arguments.length - 2;
        if (Q === 1)
            D.children = M;
        else if (1 < Q) {
            for (var J = Array(Q), Tl = 0; Tl < Q; Tl++)
                J[Tl] = arguments[Tl + 2];
            D.children = J
        }
        return ut(o.type, Y, D)
    }
    ,
    L.createContext = function(o) {
        return o = {
            $$typeof: _l,
            _currentValue: o,
            _currentValue2: o,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        o.Provider = o,
        o.Consumer = {
            $$typeof: I,
            _context: o
        },
        o
    }
    ,
    L.createElement = function(o, p, M) {
        var D, Y = {}, Q = null;
        if (p != null)
            for (D in p.key !== void 0 && (Q = "" + p.key),
            p)
                Gl.call(p, D) && D !== "key" && D !== "__self" && D !== "__source" && (Y[D] = p[D]);
        var J = arguments.length - 2;
        if (J === 1)
            Y.children = M;
        else if (1 < J) {
            for (var Tl = Array(J), hl = 0; hl < J; hl++)
                Tl[hl] = arguments[hl + 2];
            Y.children = Tl
        }
        if (o && o.defaultProps)
            for (D in J = o.defaultProps,
            J)
                Y[D] === void 0 && (Y[D] = J[D]);
        return ut(o, Q, Y)
    }
    ,
    L.createRef = function() {
        return {
            current: null
        }
    }
    ,
    L.forwardRef = function(o) {
        return {
            $$typeof: Yl,
            render: o
        }
    }
    ,
    L.isValidElement = vt,
    L.lazy = function(o) {
        return {
            $$typeof: ll,
            _payload: {
                _status: -1,
                _result: o
            },
            _init: C
        }
    }
    ,
    L.memo = function(o, p) {
        return {
            $$typeof: _,
            type: o,
            compare: p === void 0 ? null : p
        }
    }
    ,
    L.startTransition = function(o) {
        var p = K.T
          , M = {};
        K.T = M;
        try {
            var D = o()
              , Y = K.S;
            Y !== null && Y(M, D),
            typeof D == "object" && D !== null && typeof D.then == "function" && D.then(Kl, ul)
        } catch (Q) {
            ul(Q)
        } finally {
            p !== null && M.types !== null && (p.types = M.types),
            K.T = p
        }
    }
    ,
    L.unstable_useCacheRefresh = function() {
        return K.H.useCacheRefresh()
    }
    ,
    L.use = function(o) {
        return K.H.use(o)
    }
    ,
    L.useActionState = function(o, p, M) {
        return K.H.useActionState(o, p, M)
    }
    ,
    L.useCallback = function(o, p) {
        return K.H.useCallback(o, p)
    }
    ,
    L.useContext = function(o) {
        return K.H.useContext(o)
    }
    ,
    L.useDebugValue = function() {}
    ,
    L.useDeferredValue = function(o, p) {
        return K.H.useDeferredValue(o, p)
    }
    ,
    L.useEffect = function(o, p) {
        return K.H.useEffect(o, p)
    }
    ,
    L.useEffectEvent = function(o) {
        return K.H.useEffectEvent(o)
    }
    ,
    L.useId = function() {
        return K.H.useId()
    }
    ,
    L.useImperativeHandle = function(o, p, M) {
        return K.H.useImperativeHandle(o, p, M)
    }
    ,
    L.useInsertionEffect = function(o, p) {
        return K.H.useInsertionEffect(o, p)
    }
    ,
    L.useLayoutEffect = function(o, p) {
        return K.H.useLayoutEffect(o, p)
    }
    ,
    L.useMemo = function(o, p) {
        return K.H.useMemo(o, p)
    }
    ,
    L.useOptimistic = function(o, p) {
        return K.H.useOptimistic(o, p)
    }
    ,
    L.useReducer = function(o, p, M) {
        return K.H.useReducer(o, p, M)
    }
    ,
    L.useRef = function(o) {
        return K.H.useRef(o)
    }
    ,
    L.useState = function(o) {
        return K.H.useState(o)
    }
    ,
    L.useSyncExternalStore = function(o, p, M) {
        return K.H.useSyncExternalStore(o, p, M)
    }
    ,
    L.useTransition = function() {
        return K.H.useTransition()
    }
    ,
    L.version = "19.2.4",
    L
}
var Ur;
function Bf() {
    return Ur || (Ur = 1,
    Nf.exports = tv()),
    Nf.exports
}
var Z = Bf();
const ev = Yr(Z);
var Df = {
    exports: {}
}
  , Wu = {}
  , Rf = {
    exports: {}
}
  , Uf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr;
function av() {
    return Hr || (Hr = 1,
    (function(z) {
        function ol(T, x) {
            var C = T.length;
            T.push(x);
            l: for (; 0 < C; ) {
                var ul = C - 1 >>> 1
                  , il = T[ul];
                if (0 < G(il, x))
                    T[ul] = x,
                    T[C] = il,
                    C = ul;
                else
                    break l
            }
        }
        function P(T) {
            return T.length === 0 ? null : T[0]
        }
        function h(T) {
            if (T.length === 0)
                return null;
            var x = T[0]
              , C = T.pop();
            if (C !== x) {
                T[0] = C;
                l: for (var ul = 0, il = T.length, o = il >>> 1; ul < o; ) {
                    var p = 2 * (ul + 1) - 1
                      , M = T[p]
                      , D = p + 1
                      , Y = T[D];
                    if (0 > G(M, C))
                        D < il && 0 > G(Y, M) ? (T[ul] = Y,
                        T[D] = C,
                        ul = D) : (T[ul] = M,
                        T[p] = C,
                        ul = p);
                    else if (D < il && 0 > G(Y, C))
                        T[ul] = Y,
                        T[D] = C,
                        ul = D;
                    else
                        break l
                }
            }
            return x
        }
        function G(T, x) {
            var C = T.sortIndex - x.sortIndex;
            return C !== 0 ? C : T.id - x.id
        }
        if (z.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var I = performance;
            z.unstable_now = function() {
                return I.now()
            }
        } else {
            var _l = Date
              , Yl = _l.now();
            z.unstable_now = function() {
                return _l.now() - Yl
            }
        }
        var H = []
          , _ = []
          , ll = 1
          , B = null
          , vl = 3
          , lt = !1
          , yl = !1
          , Xl = !1
          , Fl = !1
          , Zl = typeof setTimeout == "function" ? setTimeout : null
          , Bt = typeof clearTimeout == "function" ? clearTimeout : null
          , ql = typeof setImmediate < "u" ? setImmediate : null;
        function El(T) {
            for (var x = P(_); x !== null; ) {
                if (x.callback === null)
                    h(_);
                else if (x.startTime <= T)
                    h(_),
                    x.sortIndex = x.expirationTime,
                    ol(H, x);
                else
                    break;
                x = P(_)
            }
        }
        function tt(T) {
            if (Xl = !1,
            El(T),
            !yl)
                if (P(H) !== null)
                    yl = !0,
                    Kl || (Kl = !0,
                    pl());
                else {
                    var x = P(_);
                    x !== null && nt(tt, x.startTime - T)
                }
        }
        var Kl = !1
          , K = -1
          , Gl = 5
          , ut = -1;
        function re() {
            return Fl ? !0 : !(z.unstable_now() - ut < Gl)
        }
        function vt() {
            if (Fl = !1,
            Kl) {
                var T = z.unstable_now();
                ut = T;
                var x = !0;
                try {
                    l: {
                        yl = !1,
                        Xl && (Xl = !1,
                        Bt(K),
                        K = -1),
                        lt = !0;
                        var C = vl;
                        try {
                            t: {
                                for (El(T),
                                B = P(H); B !== null && !(B.expirationTime > T && re()); ) {
                                    var ul = B.callback;
                                    if (typeof ul == "function") {
                                        B.callback = null,
                                        vl = B.priorityLevel;
                                        var il = ul(B.expirationTime <= T);
                                        if (T = z.unstable_now(),
                                        typeof il == "function") {
                                            B.callback = il,
                                            El(T),
                                            x = !0;
                                            break t
                                        }
                                        B === P(H) && h(H),
                                        El(T)
                                    } else
                                        h(H);
                                    B = P(H)
                                }
                                if (B !== null)
                                    x = !0;
                                else {
                                    var o = P(_);
                                    o !== null && nt(tt, o.startTime - T),
                                    x = !1
                                }
                            }
                            break l
                        } finally {
                            B = null,
                            vl = C,
                            lt = !1
                        }
                        x = void 0
                    }
                } finally {
                    x ? pl() : Kl = !1
                }
            }
        }
        var pl;
        if (typeof ql == "function")
            pl = function() {
                ql(vt)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Jt = new MessageChannel
              , pt = Jt.port2;
            Jt.port1.onmessage = vt,
            pl = function() {
                pt.postMessage(null)
            }
        } else
            pl = function() {
                Zl(vt, 0)
            }
            ;
        function nt(T, x) {
            K = Zl(function() {
                T(z.unstable_now())
            }, x)
        }
        z.unstable_IdlePriority = 5,
        z.unstable_ImmediatePriority = 1,
        z.unstable_LowPriority = 4,
        z.unstable_NormalPriority = 3,
        z.unstable_Profiling = null,
        z.unstable_UserBlockingPriority = 2,
        z.unstable_cancelCallback = function(T) {
            T.callback = null
        }
        ,
        z.unstable_forceFrameRate = function(T) {
            0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Gl = 0 < T ? Math.floor(1e3 / T) : 5
        }
        ,
        z.unstable_getCurrentPriorityLevel = function() {
            return vl
        }
        ,
        z.unstable_next = function(T) {
            switch (vl) {
            case 1:
            case 2:
            case 3:
                var x = 3;
                break;
            default:
                x = vl
            }
            var C = vl;
            vl = x;
            try {
                return T()
            } finally {
                vl = C
            }
        }
        ,
        z.unstable_requestPaint = function() {
            Fl = !0
        }
        ,
        z.unstable_runWithPriority = function(T, x) {
            switch (T) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                T = 3
            }
            var C = vl;
            vl = T;
            try {
                return x()
            } finally {
                vl = C
            }
        }
        ,
        z.unstable_scheduleCallback = function(T, x, C) {
            var ul = z.unstable_now();
            switch (typeof C == "object" && C !== null ? (C = C.delay,
            C = typeof C == "number" && 0 < C ? ul + C : ul) : C = ul,
            T) {
            case 1:
                var il = -1;
                break;
            case 2:
                il = 250;
                break;
            case 5:
                il = 1073741823;
                break;
            case 4:
                il = 1e4;
                break;
            default:
                il = 5e3
            }
            return il = C + il,
            T = {
                id: ll++,
                callback: x,
                priorityLevel: T,
                startTime: C,
                expirationTime: il,
                sortIndex: -1
            },
            C > ul ? (T.sortIndex = C,
            ol(_, T),
            P(H) === null && T === P(_) && (Xl ? (Bt(K),
            K = -1) : Xl = !0,
            nt(tt, C - ul))) : (T.sortIndex = il,
            ol(H, T),
            yl || lt || (yl = !0,
            Kl || (Kl = !0,
            pl()))),
            T
        }
        ,
        z.unstable_shouldYield = re,
        z.unstable_wrapCallback = function(T) {
            var x = vl;
            return function() {
                var C = vl;
                vl = x;
                try {
                    return T.apply(this, arguments)
                } finally {
                    vl = C
                }
            }
        }
    }
    )(Uf)),
    Uf
}
var jr;
function uv() {
    return jr || (jr = 1,
    Rf.exports = av()),
    Rf.exports
}
var Hf = {
    exports: {}
}
  , Pl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr;
function nv() {
    if (Cr)
        return Pl;
    Cr = 1;
    var z = Bf();
    function ol(H) {
        var _ = "https://react.dev/errors/" + H;
        if (1 < arguments.length) {
            _ += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var ll = 2; ll < arguments.length; ll++)
                _ += "&args[]=" + encodeURIComponent(arguments[ll])
        }
        return "Minified React error #" + H + "; visit " + _ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function P() {}
    var h = {
        d: {
            f: P,
            r: function() {
                throw Error(ol(522))
            },
            D: P,
            C: P,
            L: P,
            m: P,
            X: P,
            S: P,
            M: P
        },
        p: 0,
        findDOMNode: null
    }
      , G = Symbol.for("react.portal");
    function I(H, _, ll) {
        var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: G,
            key: B == null ? null : "" + B,
            children: H,
            containerInfo: _,
            implementation: ll
        }
    }
    var _l = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function Yl(H, _) {
        if (H === "font")
            return "";
        if (typeof _ == "string")
            return _ === "use-credentials" ? _ : ""
    }
    return Pl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h,
    Pl.createPortal = function(H, _) {
        var ll = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!_ || _.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11)
            throw Error(ol(299));
        return I(H, _, null, ll)
    }
    ,
    Pl.flushSync = function(H) {
        var _ = _l.T
          , ll = h.p;
        try {
            if (_l.T = null,
            h.p = 2,
            H)
                return H()
        } finally {
            _l.T = _,
            h.p = ll,
            h.d.f()
        }
    }
    ,
    Pl.preconnect = function(H, _) {
        typeof H == "string" && (_ ? (_ = _.crossOrigin,
        _ = typeof _ == "string" ? _ === "use-credentials" ? _ : "" : void 0) : _ = null,
        h.d.C(H, _))
    }
    ,
    Pl.prefetchDNS = function(H) {
        typeof H == "string" && h.d.D(H)
    }
    ,
    Pl.preinit = function(H, _) {
        if (typeof H == "string" && _ && typeof _.as == "string") {
            var ll = _.as
              , B = Yl(ll, _.crossOrigin)
              , vl = typeof _.integrity == "string" ? _.integrity : void 0
              , lt = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
            ll === "style" ? h.d.S(H, typeof _.precedence == "string" ? _.precedence : void 0, {
                crossOrigin: B,
                integrity: vl,
                fetchPriority: lt
            }) : ll === "script" && h.d.X(H, {
                crossOrigin: B,
                integrity: vl,
                fetchPriority: lt,
                nonce: typeof _.nonce == "string" ? _.nonce : void 0
            })
        }
    }
    ,
    Pl.preinitModule = function(H, _) {
        if (typeof H == "string")
            if (typeof _ == "object" && _ !== null) {
                if (_.as == null || _.as === "script") {
                    var ll = Yl(_.as, _.crossOrigin);
                    h.d.M(H, {
                        crossOrigin: ll,
                        integrity: typeof _.integrity == "string" ? _.integrity : void 0,
                        nonce: typeof _.nonce == "string" ? _.nonce : void 0
                    })
                }
            } else
                _ == null && h.d.M(H)
    }
    ,
    Pl.preload = function(H, _) {
        if (typeof H == "string" && typeof _ == "object" && _ !== null && typeof _.as == "string") {
            var ll = _.as
              , B = Yl(ll, _.crossOrigin);
            h.d.L(H, ll, {
                crossOrigin: B,
                integrity: typeof _.integrity == "string" ? _.integrity : void 0,
                nonce: typeof _.nonce == "string" ? _.nonce : void 0,
                type: typeof _.type == "string" ? _.type : void 0,
                fetchPriority: typeof _.fetchPriority == "string" ? _.fetchPriority : void 0,
                referrerPolicy: typeof _.referrerPolicy == "string" ? _.referrerPolicy : void 0,
                imageSrcSet: typeof _.imageSrcSet == "string" ? _.imageSrcSet : void 0,
                imageSizes: typeof _.imageSizes == "string" ? _.imageSizes : void 0,
                media: typeof _.media == "string" ? _.media : void 0
            })
        }
    }
    ,
    Pl.preloadModule = function(H, _) {
        if (typeof H == "string")
            if (_) {
                var ll = Yl(_.as, _.crossOrigin);
                h.d.m(H, {
                    as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
                    crossOrigin: ll,
                    integrity: typeof _.integrity == "string" ? _.integrity : void 0
                })
            } else
                h.d.m(H)
    }
    ,
    Pl.requestFormReset = function(H) {
        h.d.r(H)
    }
    ,
    Pl.unstable_batchedUpdates = function(H, _) {
        return H(_)
    }
    ,
    Pl.useFormState = function(H, _, ll) {
        return _l.H.useFormState(H, _, ll)
    }
    ,
    Pl.useFormStatus = function() {
        return _l.H.useHostTransitionStatus()
    }
    ,
    Pl.version = "19.2.4",
    Pl
}
var Br;
function cv() {
    if (Br)
        return Hf.exports;
    Br = 1;
    function z() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)
            } catch (ol) {
                console.error(ol)
            }
    }
    return z(),
    Hf.exports = nv(),
    Hf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qr;
function iv() {
    if (qr)
        return Wu;
    qr = 1;
    var z = uv()
      , ol = Bf()
      , P = cv();
    function h(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++)
                t += "&args[]=" + encodeURIComponent(arguments[e])
        }
        return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function G(l) {
        return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
    }
    function I(l) {
        var t = l
          , e = l;
        if (l.alternate)
            for (; t.return; )
                t = t.return;
        else {
            l = t;
            do
                t = l,
                (t.flags & 4098) !== 0 && (e = t.return),
                l = t.return;
            while (l)
        }
        return t.tag === 3 ? e : null
    }
    function _l(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate,
            l !== null && (t = l.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function Yl(l) {
        if (l.tag === 31) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate,
            l !== null && (t = l.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function H(l) {
        if (I(l) !== l)
            throw Error(h(188))
    }
    function _(l) {
        var t = l.alternate;
        if (!t) {
            if (t = I(l),
            t === null)
                throw Error(h(188));
            return t !== l ? null : l
        }
        for (var e = l, a = t; ; ) {
            var u = e.return;
            if (u === null)
                break;
            var n = u.alternate;
            if (n === null) {
                if (a = u.return,
                a !== null) {
                    e = a;
                    continue
                }
                break
            }
            if (u.child === n.child) {
                for (n = u.child; n; ) {
                    if (n === e)
                        return H(u),
                        l;
                    if (n === a)
                        return H(u),
                        t;
                    n = n.sibling
                }
                throw Error(h(188))
            }
            if (e.return !== a.return)
                e = u,
                a = n;
            else {
                for (var c = !1, i = u.child; i; ) {
                    if (i === e) {
                        c = !0,
                        e = u,
                        a = n;
                        break
                    }
                    if (i === a) {
                        c = !0,
                        a = u,
                        e = n;
                        break
                    }
                    i = i.sibling
                }
                if (!c) {
                    for (i = n.child; i; ) {
                        if (i === e) {
                            c = !0,
                            e = n,
                            a = u;
                            break
                        }
                        if (i === a) {
                            c = !0,
                            a = n,
                            e = u;
                            break
                        }
                        i = i.sibling
                    }
                    if (!c)
                        throw Error(h(189))
                }
            }
            if (e.alternate !== a)
                throw Error(h(190))
        }
        if (e.tag !== 3)
            throw Error(h(188));
        return e.stateNode.current === e ? l : t
    }
    function ll(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l;
        for (l = l.child; l !== null; ) {
            if (t = ll(l),
            t !== null)
                return t;
            l = l.sibling
        }
        return null
    }
    var B = Object.assign
      , vl = Symbol.for("react.element")
      , lt = Symbol.for("react.transitional.element")
      , yl = Symbol.for("react.portal")
      , Xl = Symbol.for("react.fragment")
      , Fl = Symbol.for("react.strict_mode")
      , Zl = Symbol.for("react.profiler")
      , Bt = Symbol.for("react.consumer")
      , ql = Symbol.for("react.context")
      , El = Symbol.for("react.forward_ref")
      , tt = Symbol.for("react.suspense")
      , Kl = Symbol.for("react.suspense_list")
      , K = Symbol.for("react.memo")
      , Gl = Symbol.for("react.lazy")
      , ut = Symbol.for("react.activity")
      , re = Symbol.for("react.memo_cache_sentinel")
      , vt = Symbol.iterator;
    function pl(l) {
        return l === null || typeof l != "object" ? null : (l = vt && l[vt] || l["@@iterator"],
        typeof l == "function" ? l : null)
    }
    var Jt = Symbol.for("react.client.reference");
    function pt(l) {
        if (l == null)
            return null;
        if (typeof l == "function")
            return l.$$typeof === Jt ? null : l.displayName || l.name || null;
        if (typeof l == "string")
            return l;
        switch (l) {
        case Xl:
            return "Fragment";
        case Zl:
            return "Profiler";
        case Fl:
            return "StrictMode";
        case tt:
            return "Suspense";
        case Kl:
            return "SuspenseList";
        case ut:
            return "Activity"
        }
        if (typeof l == "object")
            switch (l.$$typeof) {
            case yl:
                return "Portal";
            case ql:
                return l.displayName || "Context";
            case Bt:
                return (l._context.displayName || "Context") + ".Consumer";
            case El:
                var t = l.render;
                return l = l.displayName,
                l || (l = t.displayName || t.name || "",
                l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"),
                l;
            case K:
                return t = l.displayName || null,
                t !== null ? t : pt(l.type) || "Memo";
            case Gl:
                t = l._payload,
                l = l._init;
                try {
                    return pt(l(t))
                } catch {}
            }
        return null
    }
    var nt = Array.isArray
      , T = ol.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , x = P.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , C = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ul = []
      , il = -1;
    function o(l) {
        return {
            current: l
        }
    }
    function p(l) {
        0 > il || (l.current = ul[il],
        ul[il] = null,
        il--)
    }
    function M(l, t) {
        il++,
        ul[il] = l.current,
        l.current = t
    }
    var D = o(null)
      , Y = o(null)
      , Q = o(null)
      , J = o(null);
    function Tl(l, t) {
        switch (M(Q, t),
        M(Y, l),
        M(D, null),
        t.nodeType) {
        case 9:
        case 11:
            l = (l = t.documentElement) && (l = l.namespaceURI) ? Io(l) : 0;
            break;
        default:
            if (l = t.tagName,
            t = t.namespaceURI)
                t = Io(t),
                l = Po(t, l);
            else
                switch (l) {
                case "svg":
                    l = 1;
                    break;
                case "math":
                    l = 2;
                    break;
                default:
                    l = 0
                }
        }
        p(D),
        M(D, l)
    }
    function hl() {
        p(D),
        p(Y),
        p(Q)
    }
    function me(l) {
        l.memoizedState !== null && M(J, l);
        var t = D.current
          , e = Po(t, l.type);
        t !== e && (M(Y, l),
        M(D, e))
    }
    function de(l) {
        Y.current === l && (p(D),
        p(Y)),
        J.current === l && (p(J),
        Vu._currentValue = C)
    }
    var fa, $u;
    function _t(l) {
        if (fa === void 0)
            try {
                throw Error()
            } catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                fa = t && t[1] || "",
                $u = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + fa + l + $u
    }
    var ve = !1;
    function ka(l, t) {
        if (!l || ve)
            return "";
        ve = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var E = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(E.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(E, [])
                                } catch (g) {
                                    var y = g
                                }
                                Reflect.construct(l, [], E)
                            } else {
                                try {
                                    E.call()
                                } catch (g) {
                                    y = g
                                }
                                l.call(E.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (g) {
                                y = g
                            }
                            (E = l()) && typeof E.catch == "function" && E.catch(function() {})
                        }
                    } catch (g) {
                        if (g && y && typeof g.stack == "string")
                            return [g.stack, y.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var n = a.DetermineComponentFrameRoot()
              , c = n[0]
              , i = n[1];
            if (c && i) {
                var f = c.split(`
`)
                  , v = i.split(`
`);
                for (u = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; u < v.length && !v[u].includes("DetermineComponentFrameRoot"); )
                    u++;
                if (a === f.length || u === v.length)
                    for (a = f.length - 1,
                    u = v.length - 1; 1 <= a && 0 <= u && f[a] !== v[u]; )
                        u--;
                for (; 1 <= a && 0 <= u; a--,
                u--)
                    if (f[a] !== v[u]) {
                        if (a !== 1 || u !== 1)
                            do
                                if (a--,
                                u--,
                                0 > u || f[a] !== v[u]) {
                                    var S = `
` + f[a].replace(" at new ", " at ");
                                    return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)),
                                    S
                                }
                            while (1 <= a && 0 <= u);
                        break
                    }
            }
        } finally {
            ve = !1,
            Error.prepareStackTrace = e
        }
        return (e = l ? l.displayName || l.name : "") ? _t(e) : ""
    }
    function Xe(l, t) {
        switch (l.tag) {
        case 26:
        case 27:
        case 5:
            return _t(l.type);
        case 16:
            return _t("Lazy");
        case 13:
            return l.child !== t && t !== null ? _t("Suspense Fallback") : _t("Suspense");
        case 19:
            return _t("SuspenseList");
        case 0:
        case 15:
            return ka(l.type, !1);
        case 11:
            return ka(l.type.render, !1);
        case 1:
            return ka(l.type, !0);
        case 31:
            return _t("Activity");
        default:
            return ""
        }
    }
    function Nl(l) {
        try {
            var t = ""
              , e = null;
            do
                t += Xe(l, e),
                e = l,
                l = l.return;
            while (l);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    var zt = Object.prototype.hasOwnProperty
      , ye = z.unstable_scheduleCallback
      , $a = z.unstable_cancelCallback
      , Fu = z.unstable_shouldYield
      , Fa = z.unstable_requestPaint
      , Dl = z.unstable_now
      , vc = z.unstable_getCurrentPriorityLevel
      , Iu = z.unstable_ImmediatePriority
      , Ia = z.unstable_UserBlockingPriority
      , sa = z.unstable_NormalPriority
      , yc = z.unstable_LowPriority
      , Pa = z.unstable_IdlePriority
      , hc = z.log
      , gc = z.unstable_setDisableYieldValue
      , Qe = null
      , et = null;
    function Xt(l) {
        if (typeof hc == "function" && gc(l),
        et && typeof et.setStrictMode == "function")
            try {
                et.setStrictMode(Qe, l)
            } catch {}
    }
    var Il = Math.clz32 ? Math.clz32 : m
      , Pu = Math.log
      , ln = Math.LN2;
    function m(l) {
        return l >>>= 0,
        l === 0 ? 32 : 31 - (Pu(l) / ln | 0) | 0
    }
    var O = 256
      , U = 262144
      , tl = 4194304;
    function cl(l) {
        var t = l & 42;
        if (t !== 0)
            return t;
        switch (l & -l) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return l & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return l & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return l & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return l
        }
    }
    function zl(l, t, e) {
        var a = l.pendingLanes;
        if (a === 0)
            return 0;
        var u = 0
          , n = l.suspendedLanes
          , c = l.pingedLanes;
        l = l.warmLanes;
        var i = a & 134217727;
        return i !== 0 ? (a = i & ~n,
        a !== 0 ? u = cl(a) : (c &= i,
        c !== 0 ? u = cl(c) : e || (e = i & ~l,
        e !== 0 && (u = cl(e))))) : (i = a & ~n,
        i !== 0 ? u = cl(i) : c !== 0 ? u = cl(c) : e || (e = a & ~l,
        e !== 0 && (u = cl(e)))),
        u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u,
        e = t & -t,
        n >= e || n === 32 && (e & 4194048) !== 0) ? t : u
    }
    function xl(l, t) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
    }
    function ct(l, t) {
        switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function yt() {
        var l = tl;
        return tl <<= 1,
        (tl & 62914560) === 0 && (tl = 4194304),
        l
    }
    function qt(l) {
        for (var t = [], e = 0; 31 > e; e++)
            t.push(l);
        return t
    }
    function Ve(l, t) {
        l.pendingLanes |= t,
        t !== 268435456 && (l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0)
    }
    function Ze(l, t, e, a, u, n) {
        var c = l.pendingLanes;
        l.pendingLanes = e,
        l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0,
        l.expiredLanes &= e,
        l.entangledLanes &= e,
        l.errorRecoveryDisabledLanes &= e,
        l.shellSuspendCounter = 0;
        var i = l.entanglements
          , f = l.expirationTimes
          , v = l.hiddenUpdates;
        for (e = c & ~e; 0 < e; ) {
            var S = 31 - Il(e)
              , E = 1 << S;
            i[S] = 0,
            f[S] = -1;
            var y = v[S];
            if (y !== null)
                for (v[S] = null,
                S = 0; S < y.length; S++) {
                    var g = y[S];
                    g !== null && (g.lane &= -536870913)
                }
            e &= ~E
        }
        a !== 0 && lu(l, a, 0),
        n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t))
    }
    function lu(l, t, e) {
        l.pendingLanes |= t,
        l.suspendedLanes &= ~t;
        var a = 31 - Il(t);
        l.entangledLanes |= t,
        l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930
    }
    function oa(l, t) {
        var e = l.entangledLanes |= t;
        for (l = l.entanglements; e; ) {
            var a = 31 - Il(e)
              , u = 1 << a;
            u & t | l[a] & t && (l[a] |= t),
            e &= ~u
        }
    }
    function tu(l, t) {
        var e = t & -t;
        return e = (e & 42) !== 0 ? 1 : eu(e),
        (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
    }
    function eu(l) {
        switch (l) {
        case 2:
            l = 1;
            break;
        case 8:
            l = 4;
            break;
        case 32:
            l = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            l = 128;
            break;
        case 268435456:
            l = 134217728;
            break;
        default:
            l = 0
        }
        return l
    }
    function he(l) {
        return l &= -l,
        2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function au() {
        var l = x.p;
        return l !== 0 ? l : (l = window.event,
        l === void 0 ? 32 : Er(l.type))
    }
    function qf(l, t) {
        var e = x.p;
        try {
            return x.p = l,
            t()
        } finally {
            x.p = e
        }
    }
    var ge = Math.random().toString(36).slice(2)
      , Jl = "__reactFiber$" + ge
      , it = "__reactProps$" + ge
      , ra = "__reactContainer$" + ge
      , bc = "__reactEvents$" + ge
      , Qr = "__reactListeners$" + ge
      , Vr = "__reactHandles$" + ge
      , Gf = "__reactResources$" + ge
      , uu = "__reactMarker$" + ge;
    function Sc(l) {
        delete l[Jl],
        delete l[it],
        delete l[bc],
        delete l[Qr],
        delete l[Vr]
    }
    function ma(l) {
        var t = l[Jl];
        if (t)
            return t;
        for (var e = l.parentNode; e; ) {
            if (t = e[ra] || e[Jl]) {
                if (e = t.alternate,
                t.child !== null || e !== null && e.child !== null)
                    for (l = cr(l); l !== null; ) {
                        if (e = l[Jl])
                            return e;
                        l = cr(l)
                    }
                return t
            }
            l = e,
            e = l.parentNode
        }
        return null
    }
    function da(l) {
        if (l = l[Jl] || l[ra]) {
            var t = l.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return l
        }
        return null
    }
    function nu(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l.stateNode;
        throw Error(h(33))
    }
    function va(l) {
        var t = l[Gf];
        return t || (t = l[Gf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Ql(l) {
        l[uu] = !0
    }
    var Lf = new Set
      , Yf = {};
    function Ke(l, t) {
        ya(l, t),
        ya(l + "Capture", t)
    }
    function ya(l, t) {
        for (Yf[l] = t,
        l = 0; l < t.length; l++)
            Lf.add(t[l])
    }
    var Zr = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Xf = {}
      , Qf = {};
    function Kr(l) {
        return zt.call(Qf, l) ? !0 : zt.call(Xf, l) ? !1 : Zr.test(l) ? Qf[l] = !0 : (Xf[l] = !0,
        !1)
    }
    function tn(l, t, e) {
        if (Kr(t))
            if (e === null)
                l.removeAttribute(t);
            else {
                switch (typeof e) {
                case "undefined":
                case "function":
                case "symbol":
                    l.removeAttribute(t);
                    return;
                case "boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        l.removeAttribute(t);
                        return
                    }
                }
                l.setAttribute(t, "" + e)
            }
    }
    function en(l, t, e) {
        if (e === null)
            l.removeAttribute(t);
        else {
            switch (typeof e) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(t);
                return
            }
            l.setAttribute(t, "" + e)
        }
    }
    function wt(l, t, e, a) {
        if (a === null)
            l.removeAttribute(e);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(e);
                return
            }
            l.setAttributeNS(t, e, "" + a)
        }
    }
    function xt(l) {
        switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return l;
        case "object":
            return l;
        default:
            return ""
        }
    }
    function Vf(l) {
        var t = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Jr(l, t, e) {
        var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
        if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var u = a.get
              , n = a.set;
            return Object.defineProperty(l, t, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(c) {
                    e = "" + c,
                    n.call(this, c)
                }
            }),
            Object.defineProperty(l, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return e
                },
                setValue: function(c) {
                    e = "" + c
                },
                stopTracking: function() {
                    l._valueTracker = null,
                    delete l[t]
                }
            }
        }
    }
    function Tc(l) {
        if (!l._valueTracker) {
            var t = Vf(l) ? "checked" : "value";
            l._valueTracker = Jr(l, t, "" + l[t])
        }
    }
    function Zf(l) {
        if (!l)
            return !1;
        var t = l._valueTracker;
        if (!t)
            return !0;
        var e = t.getValue()
          , a = "";
        return l && (a = Vf(l) ? l.checked ? "true" : "false" : l.value),
        l = a,
        l !== e ? (t.setValue(l),
        !0) : !1
    }
    function an(l) {
        if (l = l || (typeof document < "u" ? document : void 0),
        typeof l > "u")
            return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }
    var wr = /[\n"\\]/g;
    function Mt(l) {
        return l.replace(wr, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function Ac(l, t, e, a, u, n, c, i) {
        l.name = "",
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"),
        t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + xt(t)) : l.value !== "" + xt(t) && (l.value = "" + xt(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"),
        t != null ? Ec(l, c, xt(t)) : e != null ? Ec(l, c, xt(e)) : a != null && l.removeAttribute("value"),
        u == null && n != null && (l.defaultChecked = !!n),
        u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"),
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + xt(i) : l.removeAttribute("name")
    }
    function Kf(l, t, e, a, u, n, c, i) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n),
        t != null || e != null) {
            if (!(n !== "submit" && n !== "reset" || t != null)) {
                Tc(l);
                return
            }
            e = e != null ? "" + xt(e) : "",
            t = t != null ? "" + xt(t) : e,
            i || t === l.value || (l.value = t),
            l.defaultValue = t
        }
        a = a ?? u,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        l.checked = i ? l.checked : !!a,
        l.defaultChecked = !!a,
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c),
        Tc(l)
    }
    function Ec(l, t, e) {
        t === "number" && an(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e)
    }
    function ha(l, t, e, a) {
        if (l = l.options,
        t) {
            t = {};
            for (var u = 0; u < e.length; u++)
                t["$" + e[u]] = !0;
            for (e = 0; e < l.length; e++)
                u = t.hasOwnProperty("$" + l[e].value),
                l[e].selected !== u && (l[e].selected = u),
                u && a && (l[e].defaultSelected = !0)
        } else {
            for (e = "" + xt(e),
            t = null,
            u = 0; u < l.length; u++) {
                if (l[u].value === e) {
                    l[u].selected = !0,
                    a && (l[u].defaultSelected = !0);
                    return
                }
                t !== null || l[u].disabled || (t = l[u])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Jf(l, t, e) {
        if (t != null && (t = "" + xt(t),
        t !== l.value && (l.value = t),
        e == null)) {
            l.defaultValue !== t && (l.defaultValue = t);
            return
        }
        l.defaultValue = e != null ? "" + xt(e) : ""
    }
    function wf(l, t, e, a) {
        if (t == null) {
            if (a != null) {
                if (e != null)
                    throw Error(h(92));
                if (nt(a)) {
                    if (1 < a.length)
                        throw Error(h(93));
                    a = a[0]
                }
                e = a
            }
            e == null && (e = ""),
            t = e
        }
        e = xt(t),
        l.defaultValue = e,
        a = l.textContent,
        a === e && a !== "" && a !== null && (l.value = a),
        Tc(l)
    }
    function ga(l, t) {
        if (t) {
            var e = l.firstChild;
            if (e && e === l.lastChild && e.nodeType === 3) {
                e.nodeValue = t;
                return
            }
        }
        l.textContent = t
    }
    var Wr = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Wf(l, t, e) {
        var a = t.indexOf("--") === 0;
        e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || Wr.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px"
    }
    function kf(l, t, e) {
        if (t != null && typeof t != "object")
            throw Error(h(62));
        if (l = l.style,
        e != null) {
            for (var a in e)
                !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
            for (var u in t)
                a = t[u],
                t.hasOwnProperty(u) && e[u] !== a && Wf(l, u, a)
        } else
            for (var n in t)
                t.hasOwnProperty(n) && Wf(l, n, t[n])
    }
    function pc(l) {
        if (l.indexOf("-") === -1)
            return !1;
        switch (l) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var kr = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , $r = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function un(l) {
        return $r.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }
    function Wt() {}
    var _c = null;
    function zc(l) {
        return l = l.target || l.srcElement || window,
        l.correspondingUseElement && (l = l.correspondingUseElement),
        l.nodeType === 3 ? l.parentNode : l
    }
    var ba = null
      , Sa = null;
    function $f(l) {
        var t = da(l);
        if (t && (l = t.stateNode)) {
            var e = l[it] || null;
            l: switch (l = t.stateNode,
            t.type) {
            case "input":
                if (Ac(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name),
                t = e.name,
                e.type === "radio" && t != null) {
                    for (e = l; e.parentNode; )
                        e = e.parentNode;
                    for (e = e.querySelectorAll('input[name="' + Mt("" + t) + '"][type="radio"]'),
                    t = 0; t < e.length; t++) {
                        var a = e[t];
                        if (a !== l && a.form === l.form) {
                            var u = a[it] || null;
                            if (!u)
                                throw Error(h(90));
                            Ac(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                        }
                    }
                    for (t = 0; t < e.length; t++)
                        a = e[t],
                        a.form === l.form && Zf(a)
                }
                break l;
            case "textarea":
                Jf(l, e.value, e.defaultValue);
                break l;
            case "select":
                t = e.value,
                t != null && ha(l, !!e.multiple, t, !1)
            }
        }
    }
    var xc = !1;
    function Ff(l, t, e) {
        if (xc)
            return l(t, e);
        xc = !0;
        try {
            var a = l(t);
            return a
        } finally {
            if (xc = !1,
            (ba !== null || Sa !== null) && (Jn(),
            ba && (t = ba,
            l = Sa,
            Sa = ba = null,
            $f(t),
            l)))
                for (t = 0; t < l.length; t++)
                    $f(l[t])
        }
    }
    function cu(l, t) {
        var e = l.stateNode;
        if (e === null)
            return null;
        var a = e[it] || null;
        if (a === null)
            return null;
        e = a[t];
        l: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (a = !a.disabled) || (l = l.type,
            a = !(l === "button" || l === "input" || l === "select" || l === "textarea")),
            l = !a;
            break l;
        default:
            l = !1
        }
        if (l)
            return null;
        if (e && typeof e != "function")
            throw Error(h(231, t, typeof e));
        return e
    }
    var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Mc = !1;
    if (kt)
        try {
            var iu = {};
            Object.defineProperty(iu, "passive", {
                get: function() {
                    Mc = !0
                }
            }),
            window.addEventListener("test", iu, iu),
            window.removeEventListener("test", iu, iu)
        } catch {
            Mc = !1
        }
    var be = null
      , Oc = null
      , nn = null;
    function If() {
        if (nn)
            return nn;
        var l, t = Oc, e = t.length, a, u = "value"in be ? be.value : be.textContent, n = u.length;
        for (l = 0; l < e && t[l] === u[l]; l++)
            ;
        var c = e - l;
        for (a = 1; a <= c && t[e - a] === u[n - a]; a++)
            ;
        return nn = u.slice(l, 1 < a ? 1 - a : void 0)
    }
    function cn(l) {
        var t = l.keyCode;
        return "charCode"in l ? (l = l.charCode,
        l === 0 && t === 13 && (l = 13)) : l = t,
        l === 10 && (l = 13),
        32 <= l || l === 13 ? l : 0
    }
    function fn() {
        return !0
    }
    function Pf() {
        return !1
    }
    function ft(l) {
        function t(e, a, u, n, c) {
            this._reactName = e,
            this._targetInst = u,
            this.type = a,
            this.nativeEvent = n,
            this.target = c,
            this.currentTarget = null;
            for (var i in l)
                l.hasOwnProperty(i) && (e = l[i],
                this[i] = e ? e(n) : n[i]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? fn : Pf,
            this.isPropagationStopped = Pf,
            this
        }
        return B(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1),
                this.isDefaultPrevented = fn)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
                this.isPropagationStopped = fn)
            },
            persist: function() {},
            isPersistent: fn
        }),
        t
    }
    var Je = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(l) {
            return l.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, sn = ft(Je), fu = B({}, Je, {
        view: 0,
        detail: 0
    }), Fr = ft(fu), Nc, Dc, su, on = B({}, fu, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Uc,
        button: 0,
        buttons: 0,
        relatedTarget: function(l) {
            return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
        },
        movementX: function(l) {
            return "movementX"in l ? l.movementX : (l !== su && (su && l.type === "mousemove" ? (Nc = l.screenX - su.screenX,
            Dc = l.screenY - su.screenY) : Dc = Nc = 0,
            su = l),
            Nc)
        },
        movementY: function(l) {
            return "movementY"in l ? l.movementY : Dc
        }
    }), ls = ft(on), Ir = B({}, on, {
        dataTransfer: 0
    }), Pr = ft(Ir), lm = B({}, fu, {
        relatedTarget: 0
    }), Rc = ft(lm), tm = B({}, Je, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), em = ft(tm), am = B({}, Je, {
        clipboardData: function(l) {
            return "clipboardData"in l ? l.clipboardData : window.clipboardData
        }
    }), um = ft(am), nm = B({}, Je, {
        data: 0
    }), ts = ft(nm), cm = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, im = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, fm = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function sm(l) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(l) : (l = fm[l]) ? !!t[l] : !1
    }
    function Uc() {
        return sm
    }
    var om = B({}, fu, {
        key: function(l) {
            if (l.key) {
                var t = cm[l.key] || l.key;
                if (t !== "Unidentified")
                    return t
            }
            return l.type === "keypress" ? (l = cn(l),
            l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? im[l.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Uc,
        charCode: function(l) {
            return l.type === "keypress" ? cn(l) : 0
        },
        keyCode: function(l) {
            return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
        },
        which: function(l) {
            return l.type === "keypress" ? cn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
        }
    })
      , rm = ft(om)
      , mm = B({}, on, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , es = ft(mm)
      , dm = B({}, fu, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Uc
    })
      , vm = ft(dm)
      , ym = B({}, Je, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , hm = ft(ym)
      , gm = B({}, on, {
        deltaX: function(l) {
            return "deltaX"in l ? l.deltaX : "wheelDeltaX"in l ? -l.wheelDeltaX : 0
        },
        deltaY: function(l) {
            return "deltaY"in l ? l.deltaY : "wheelDeltaY"in l ? -l.wheelDeltaY : "wheelDelta"in l ? -l.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , bm = ft(gm)
      , Sm = B({}, Je, {
        newState: 0,
        oldState: 0
    })
      , Tm = ft(Sm)
      , Am = [9, 13, 27, 32]
      , Hc = kt && "CompositionEvent"in window
      , ou = null;
    kt && "documentMode"in document && (ou = document.documentMode);
    var Em = kt && "TextEvent"in window && !ou
      , as = kt && (!Hc || ou && 8 < ou && 11 >= ou)
      , us = " "
      , ns = !1;
    function cs(l, t) {
        switch (l) {
        case "keyup":
            return Am.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function is(l) {
        return l = l.detail,
        typeof l == "object" && "data"in l ? l.data : null
    }
    var Ta = !1;
    function pm(l, t) {
        switch (l) {
        case "compositionend":
            return is(t);
        case "keypress":
            return t.which !== 32 ? null : (ns = !0,
            us);
        case "textInput":
            return l = t.data,
            l === us && ns ? null : l;
        default:
            return null
        }
    }
    function _m(l, t) {
        if (Ta)
            return l === "compositionend" || !Hc && cs(l, t) ? (l = If(),
            nn = Oc = be = null,
            Ta = !1,
            l) : null;
        switch (l) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return as && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var zm = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function fs(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!zm[l.type] : t === "textarea"
    }
    function ss(l, t, e, a) {
        ba ? Sa ? Sa.push(a) : Sa = [a] : ba = a,
        t = Pn(t, "onChange"),
        0 < t.length && (e = new sn("onChange","change",null,e,a),
        l.push({
            event: e,
            listeners: t
        }))
    }
    var ru = null
      , mu = null;
    function xm(l) {
        Jo(l, 0)
    }
    function rn(l) {
        var t = nu(l);
        if (Zf(t))
            return l
    }
    function os(l, t) {
        if (l === "change")
            return t
    }
    var rs = !1;
    if (kt) {
        var jc;
        if (kt) {
            var Cc = "oninput"in document;
            if (!Cc) {
                var ms = document.createElement("div");
                ms.setAttribute("oninput", "return;"),
                Cc = typeof ms.oninput == "function"
            }
            jc = Cc
        } else
            jc = !1;
        rs = jc && (!document.documentMode || 9 < document.documentMode)
    }
    function ds() {
        ru && (ru.detachEvent("onpropertychange", vs),
        mu = ru = null)
    }
    function vs(l) {
        if (l.propertyName === "value" && rn(mu)) {
            var t = [];
            ss(t, mu, l, zc(l)),
            Ff(xm, t)
        }
    }
    function Mm(l, t, e) {
        l === "focusin" ? (ds(),
        ru = t,
        mu = e,
        ru.attachEvent("onpropertychange", vs)) : l === "focusout" && ds()
    }
    function Om(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown")
            return rn(mu)
    }
    function Nm(l, t) {
        if (l === "click")
            return rn(t)
    }
    function Dm(l, t) {
        if (l === "input" || l === "change")
            return rn(t)
    }
    function Rm(l, t) {
        return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
    }
    var ht = typeof Object.is == "function" ? Object.is : Rm;
    function du(l, t) {
        if (ht(l, t))
            return !0;
        if (typeof l != "object" || l === null || typeof t != "object" || t === null)
            return !1;
        var e = Object.keys(l)
          , a = Object.keys(t);
        if (e.length !== a.length)
            return !1;
        for (a = 0; a < e.length; a++) {
            var u = e[a];
            if (!zt.call(t, u) || !ht(l[u], t[u]))
                return !1
        }
        return !0
    }
    function ys(l) {
        for (; l && l.firstChild; )
            l = l.firstChild;
        return l
    }
    function hs(l, t) {
        var e = ys(l);
        l = 0;
        for (var a; e; ) {
            if (e.nodeType === 3) {
                if (a = l + e.textContent.length,
                l <= t && a >= t)
                    return {
                        node: e,
                        offset: t - l
                    };
                l = a
            }
            l: {
                for (; e; ) {
                    if (e.nextSibling) {
                        e = e.nextSibling;
                        break l
                    }
                    e = e.parentNode
                }
                e = void 0
            }
            e = ys(e)
        }
    }
    function gs(l, t) {
        return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? gs(l, t.parentNode) : "contains"in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function bs(l) {
        l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
        for (var t = an(l.document); t instanceof l.HTMLIFrameElement; ) {
            try {
                var e = typeof t.contentWindow.location.href == "string"
            } catch {
                e = !1
            }
            if (e)
                l = t.contentWindow;
            else
                break;
            t = an(l.document)
        }
        return t
    }
    function Bc(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
    }
    var Um = kt && "documentMode"in document && 11 >= document.documentMode
      , Aa = null
      , qc = null
      , vu = null
      , Gc = !1;
    function Ss(l, t, e) {
        var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
        Gc || Aa == null || Aa !== an(a) || (a = Aa,
        "selectionStart"in a && Bc(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        vu && du(vu, a) || (vu = a,
        a = Pn(qc, "onSelect"),
        0 < a.length && (t = new sn("onSelect","select",null,t,e),
        l.push({
            event: t,
            listeners: a
        }),
        t.target = Aa)))
    }
    function we(l, t) {
        var e = {};
        return e[l.toLowerCase()] = t.toLowerCase(),
        e["Webkit" + l] = "webkit" + t,
        e["Moz" + l] = "moz" + t,
        e
    }
    var Ea = {
        animationend: we("Animation", "AnimationEnd"),
        animationiteration: we("Animation", "AnimationIteration"),
        animationstart: we("Animation", "AnimationStart"),
        transitionrun: we("Transition", "TransitionRun"),
        transitionstart: we("Transition", "TransitionStart"),
        transitioncancel: we("Transition", "TransitionCancel"),
        transitionend: we("Transition", "TransitionEnd")
    }
      , Lc = {}
      , Ts = {};
    kt && (Ts = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ea.animationend.animation,
    delete Ea.animationiteration.animation,
    delete Ea.animationstart.animation),
    "TransitionEvent"in window || delete Ea.transitionend.transition);
    function We(l) {
        if (Lc[l])
            return Lc[l];
        if (!Ea[l])
            return l;
        var t = Ea[l], e;
        for (e in t)
            if (t.hasOwnProperty(e) && e in Ts)
                return Lc[l] = t[e];
        return l
    }
    var As = We("animationend")
      , Es = We("animationiteration")
      , ps = We("animationstart")
      , Hm = We("transitionrun")
      , jm = We("transitionstart")
      , Cm = We("transitioncancel")
      , _s = We("transitionend")
      , zs = new Map
      , Yc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Yc.push("scrollEnd");
    function Gt(l, t) {
        zs.set(l, t),
        Ke(t, [l])
    }
    var mn = typeof reportError == "function" ? reportError : function(l) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                error: l
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", l);
            return
        }
        console.error(l)
    }
      , Ot = []
      , pa = 0
      , Xc = 0;
    function dn() {
        for (var l = pa, t = Xc = pa = 0; t < l; ) {
            var e = Ot[t];
            Ot[t++] = null;
            var a = Ot[t];
            Ot[t++] = null;
            var u = Ot[t];
            Ot[t++] = null;
            var n = Ot[t];
            if (Ot[t++] = null,
            a !== null && u !== null) {
                var c = a.pending;
                c === null ? u.next = u : (u.next = c.next,
                c.next = u),
                a.pending = u
            }
            n !== 0 && xs(e, u, n)
        }
    }
    function vn(l, t, e, a) {
        Ot[pa++] = l,
        Ot[pa++] = t,
        Ot[pa++] = e,
        Ot[pa++] = a,
        Xc |= a,
        l.lanes |= a,
        l = l.alternate,
        l !== null && (l.lanes |= a)
    }
    function Qc(l, t, e, a) {
        return vn(l, t, e, a),
        yn(l)
    }
    function ke(l, t) {
        return vn(l, null, null, t),
        yn(l)
    }
    function xs(l, t, e) {
        l.lanes |= e;
        var a = l.alternate;
        a !== null && (a.lanes |= e);
        for (var u = !1, n = l.return; n !== null; )
            n.childLanes |= e,
            a = n.alternate,
            a !== null && (a.childLanes |= e),
            n.tag === 22 && (l = n.stateNode,
            l === null || l._visibility & 1 || (u = !0)),
            l = n,
            n = n.return;
        return l.tag === 3 ? (n = l.stateNode,
        u && t !== null && (u = 31 - Il(e),
        l = n.hiddenUpdates,
        a = l[u],
        a === null ? l[u] = [t] : a.push(t),
        t.lane = e | 536870912),
        n) : null
    }
    function yn(l) {
        if (50 < Bu)
            throw Bu = 0,
            Fi = null,
            Error(h(185));
        for (var t = l.return; t !== null; )
            l = t,
            t = l.return;
        return l.tag === 3 ? l.stateNode : null
    }
    var _a = {};
    function Bm(l, t, e, a) {
        this.tag = l,
        this.key = e,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function gt(l, t, e, a) {
        return new Bm(l,t,e,a)
    }
    function Vc(l) {
        return l = l.prototype,
        !(!l || !l.isReactComponent)
    }
    function $t(l, t) {
        var e = l.alternate;
        return e === null ? (e = gt(l.tag, t, l.key, l.mode),
        e.elementType = l.elementType,
        e.type = l.type,
        e.stateNode = l.stateNode,
        e.alternate = l,
        l.alternate = e) : (e.pendingProps = t,
        e.type = l.type,
        e.flags = 0,
        e.subtreeFlags = 0,
        e.deletions = null),
        e.flags = l.flags & 65011712,
        e.childLanes = l.childLanes,
        e.lanes = l.lanes,
        e.child = l.child,
        e.memoizedProps = l.memoizedProps,
        e.memoizedState = l.memoizedState,
        e.updateQueue = l.updateQueue,
        t = l.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        e.sibling = l.sibling,
        e.index = l.index,
        e.ref = l.ref,
        e.refCleanup = l.refCleanup,
        e
    }
    function Ms(l, t) {
        l.flags &= 65011714;
        var e = l.alternate;
        return e === null ? (l.childLanes = 0,
        l.lanes = t,
        l.child = null,
        l.subtreeFlags = 0,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.updateQueue = null,
        l.dependencies = null,
        l.stateNode = null) : (l.childLanes = e.childLanes,
        l.lanes = e.lanes,
        l.child = e.child,
        l.subtreeFlags = 0,
        l.deletions = null,
        l.memoizedProps = e.memoizedProps,
        l.memoizedState = e.memoizedState,
        l.updateQueue = e.updateQueue,
        l.type = e.type,
        t = e.dependencies,
        l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        l
    }
    function hn(l, t, e, a, u, n) {
        var c = 0;
        if (a = l,
        typeof l == "function")
            Vc(l) && (c = 1);
        else if (typeof l == "string")
            c = Xd(l, e, D.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
        else
            l: switch (l) {
            case ut:
                return l = gt(31, e, t, u),
                l.elementType = ut,
                l.lanes = n,
                l;
            case Xl:
                return $e(e.children, u, n, t);
            case Fl:
                c = 8,
                u |= 24;
                break;
            case Zl:
                return l = gt(12, e, t, u | 2),
                l.elementType = Zl,
                l.lanes = n,
                l;
            case tt:
                return l = gt(13, e, t, u),
                l.elementType = tt,
                l.lanes = n,
                l;
            case Kl:
                return l = gt(19, e, t, u),
                l.elementType = Kl,
                l.lanes = n,
                l;
            default:
                if (typeof l == "object" && l !== null)
                    switch (l.$$typeof) {
                    case ql:
                        c = 10;
                        break l;
                    case Bt:
                        c = 9;
                        break l;
                    case El:
                        c = 11;
                        break l;
                    case K:
                        c = 14;
                        break l;
                    case Gl:
                        c = 16,
                        a = null;
                        break l
                    }
                c = 29,
                e = Error(h(130, l === null ? "null" : typeof l, "")),
                a = null
            }
        return t = gt(c, e, t, u),
        t.elementType = l,
        t.type = a,
        t.lanes = n,
        t
    }
    function $e(l, t, e, a) {
        return l = gt(7, l, a, t),
        l.lanes = e,
        l
    }
    function Zc(l, t, e) {
        return l = gt(6, l, null, t),
        l.lanes = e,
        l
    }
    function Os(l) {
        var t = gt(18, null, null, 0);
        return t.stateNode = l,
        t
    }
    function Kc(l, t, e) {
        return t = gt(4, l.children !== null ? l.children : [], l.key, t),
        t.lanes = e,
        t.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        },
        t
    }
    var Ns = new WeakMap;
    function Nt(l, t) {
        if (typeof l == "object" && l !== null) {
            var e = Ns.get(l);
            return e !== void 0 ? e : (t = {
                value: l,
                source: t,
                stack: Nl(t)
            },
            Ns.set(l, t),
            t)
        }
        return {
            value: l,
            source: t,
            stack: Nl(t)
        }
    }
    var za = []
      , xa = 0
      , gn = null
      , yu = 0
      , Dt = []
      , Rt = 0
      , Se = null
      , Qt = 1
      , Vt = "";
    function Ft(l, t) {
        za[xa++] = yu,
        za[xa++] = gn,
        gn = l,
        yu = t
    }
    function Ds(l, t, e) {
        Dt[Rt++] = Qt,
        Dt[Rt++] = Vt,
        Dt[Rt++] = Se,
        Se = l;
        var a = Qt;
        l = Vt;
        var u = 32 - Il(a) - 1;
        a &= ~(1 << u),
        e += 1;
        var n = 32 - Il(t) + u;
        if (30 < n) {
            var c = u - u % 5;
            n = (a & (1 << c) - 1).toString(32),
            a >>= c,
            u -= c,
            Qt = 1 << 32 - Il(t) + u | e << u | a,
            Vt = n + l
        } else
            Qt = 1 << n | e << u | a,
            Vt = l
    }
    function Jc(l) {
        l.return !== null && (Ft(l, 1),
        Ds(l, 1, 0))
    }
    function wc(l) {
        for (; l === gn; )
            gn = za[--xa],
            za[xa] = null,
            yu = za[--xa],
            za[xa] = null;
        for (; l === Se; )
            Se = Dt[--Rt],
            Dt[Rt] = null,
            Vt = Dt[--Rt],
            Dt[Rt] = null,
            Qt = Dt[--Rt],
            Dt[Rt] = null
    }
    function Rs(l, t) {
        Dt[Rt++] = Qt,
        Dt[Rt++] = Vt,
        Dt[Rt++] = Se,
        Qt = t.id,
        Vt = t.overflow,
        Se = l
    }
    var wl = null
      , bl = null
      , F = !1
      , Te = null
      , Ut = !1
      , Wc = Error(h(519));
    function Ae(l) {
        var t = Error(h(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw hu(Nt(t, l)),
        Wc
    }
    function Us(l) {
        var t = l.stateNode
          , e = l.type
          , a = l.memoizedProps;
        switch (t[Jl] = l,
        t[it] = a,
        e) {
        case "dialog":
            W("cancel", t),
            W("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            W("load", t);
            break;
        case "video":
        case "audio":
            for (e = 0; e < Gu.length; e++)
                W(Gu[e], t);
            break;
        case "source":
            W("error", t);
            break;
        case "img":
        case "image":
        case "link":
            W("error", t),
            W("load", t);
            break;
        case "details":
            W("toggle", t);
            break;
        case "input":
            W("invalid", t),
            Kf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
            break;
        case "select":
            W("invalid", t);
            break;
        case "textarea":
            W("invalid", t),
            wf(t, a.value, a.defaultValue, a.children)
        }
        e = a.children,
        typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || $o(t.textContent, e) ? (a.popover != null && (W("beforetoggle", t),
        W("toggle", t)),
        a.onScroll != null && W("scroll", t),
        a.onScrollEnd != null && W("scrollend", t),
        a.onClick != null && (t.onclick = Wt),
        t = !0) : t = !1,
        t || Ae(l, !0)
    }
    function Hs(l) {
        for (wl = l.return; wl; )
            switch (wl.tag) {
            case 5:
            case 31:
            case 13:
                Ut = !1;
                return;
            case 27:
            case 3:
                Ut = !0;
                return;
            default:
                wl = wl.return
            }
    }
    function Ma(l) {
        if (l !== wl)
            return !1;
        if (!F)
            return Hs(l),
            F = !0,
            !1;
        var t = l.tag, e;
        if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type,
        e = !(e !== "form" && e !== "button") || df(l.type, l.memoizedProps)),
        e = !e),
        e && bl && Ae(l),
        Hs(l),
        t === 13) {
            if (l = l.memoizedState,
            l = l !== null ? l.dehydrated : null,
            !l)
                throw Error(h(317));
            bl = nr(l)
        } else if (t === 31) {
            if (l = l.memoizedState,
            l = l !== null ? l.dehydrated : null,
            !l)
                throw Error(h(317));
            bl = nr(l)
        } else
            t === 27 ? (t = bl,
            Ce(l.type) ? (l = bf,
            bf = null,
            bl = l) : bl = t) : bl = wl ? jt(l.stateNode.nextSibling) : null;
        return !0
    }
    function Fe() {
        bl = wl = null,
        F = !1
    }
    function kc() {
        var l = Te;
        return l !== null && (mt === null ? mt = l : mt.push.apply(mt, l),
        Te = null),
        l
    }
    function hu(l) {
        Te === null ? Te = [l] : Te.push(l)
    }
    var $c = o(null)
      , Ie = null
      , It = null;
    function Ee(l, t, e) {
        M($c, t._currentValue),
        t._currentValue = e
    }
    function Pt(l) {
        l._currentValue = $c.current,
        p($c)
    }
    function Fc(l, t, e) {
        for (; l !== null; ) {
            var a = l.alternate;
            if ((l.childLanes & t) !== t ? (l.childLanes |= t,
            a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            l === e)
                break;
            l = l.return
        }
    }
    function Ic(l, t, e, a) {
        var u = l.child;
        for (u !== null && (u.return = l); u !== null; ) {
            var n = u.dependencies;
            if (n !== null) {
                var c = u.child;
                n = n.firstContext;
                l: for (; n !== null; ) {
                    var i = n;
                    n = u;
                    for (var f = 0; f < t.length; f++)
                        if (i.context === t[f]) {
                            n.lanes |= e,
                            i = n.alternate,
                            i !== null && (i.lanes |= e),
                            Fc(n.return, e, l),
                            a || (c = null);
                            break l
                        }
                    n = i.next
                }
            } else if (u.tag === 18) {
                if (c = u.return,
                c === null)
                    throw Error(h(341));
                c.lanes |= e,
                n = c.alternate,
                n !== null && (n.lanes |= e),
                Fc(c, e, l),
                c = null
            } else
                c = u.child;
            if (c !== null)
                c.return = u;
            else
                for (c = u; c !== null; ) {
                    if (c === l) {
                        c = null;
                        break
                    }
                    if (u = c.sibling,
                    u !== null) {
                        u.return = c.return,
                        c = u;
                        break
                    }
                    c = c.return
                }
            u = c
        }
    }
    function Oa(l, t, e, a) {
        l = null;
        for (var u = t, n = !1; u !== null; ) {
            if (!n) {
                if ((u.flags & 524288) !== 0)
                    n = !0;
                else if ((u.flags & 262144) !== 0)
                    break
            }
            if (u.tag === 10) {
                var c = u.alternate;
                if (c === null)
                    throw Error(h(387));
                if (c = c.memoizedProps,
                c !== null) {
                    var i = u.type;
                    ht(u.pendingProps.value, c.value) || (l !== null ? l.push(i) : l = [i])
                }
            } else if (u === J.current) {
                if (c = u.alternate,
                c === null)
                    throw Error(h(387));
                c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Vu) : l = [Vu])
            }
            u = u.return
        }
        l !== null && Ic(t, l, e, a),
        t.flags |= 262144
    }
    function bn(l) {
        for (l = l.firstContext; l !== null; ) {
            if (!ht(l.context._currentValue, l.memoizedValue))
                return !0;
            l = l.next
        }
        return !1
    }
    function Pe(l) {
        Ie = l,
        It = null,
        l = l.dependencies,
        l !== null && (l.firstContext = null)
    }
    function Wl(l) {
        return js(Ie, l)
    }
    function Sn(l, t) {
        return Ie === null && Pe(l),
        js(l, t)
    }
    function js(l, t) {
        var e = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        It === null) {
            if (l === null)
                throw Error(h(308));
            It = t,
            l.dependencies = {
                lanes: 0,
                firstContext: t
            },
            l.flags |= 524288
        } else
            It = It.next = t;
        return e
    }
    var qm = typeof AbortController < "u" ? AbortController : function() {
        var l = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(e, a) {
                l.push(a)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            l.forEach(function(e) {
                return e()
            })
        }
    }
      , Gm = z.unstable_scheduleCallback
      , Lm = z.unstable_NormalPriority
      , Hl = {
        $$typeof: ql,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Pc() {
        return {
            controller: new qm,
            data: new Map,
            refCount: 0
        }
    }
    function gu(l) {
        l.refCount--,
        l.refCount === 0 && Gm(Lm, function() {
            l.controller.abort()
        })
    }
    var bu = null
      , li = 0
      , Na = 0
      , Da = null;
    function Ym(l, t) {
        if (bu === null) {
            var e = bu = [];
            li = 0,
            Na = af(),
            Da = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    e.push(a)
                }
            }
        }
        return li++,
        t.then(Cs, Cs),
        t
    }
    function Cs() {
        if (--li === 0 && bu !== null) {
            Da !== null && (Da.status = "fulfilled");
            var l = bu;
            bu = null,
            Na = 0,
            Da = null;
            for (var t = 0; t < l.length; t++)
                (0,
                l[t])()
        }
    }
    function Xm(l, t) {
        var e = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(u) {
                e.push(u)
            }
        };
        return l.then(function() {
            a.status = "fulfilled",
            a.value = t;
            for (var u = 0; u < e.length; u++)
                (0,
                e[u])(t)
        }, function(u) {
            for (a.status = "rejected",
            a.reason = u,
            u = 0; u < e.length; u++)
                (0,
                e[u])(void 0)
        }),
        a
    }
    var Bs = T.S;
    T.S = function(l, t) {
        To = Dl(),
        typeof t == "object" && t !== null && typeof t.then == "function" && Ym(l, t),
        Bs !== null && Bs(l, t)
    }
    ;
    var la = o(null);
    function ti() {
        var l = la.current;
        return l !== null ? l : gl.pooledCache
    }
    function Tn(l, t) {
        t === null ? M(la, la.current) : M(la, t.pool)
    }
    function qs() {
        var l = ti();
        return l === null ? null : {
            parent: Hl._currentValue,
            pool: l
        }
    }
    var Ra = Error(h(460))
      , ei = Error(h(474))
      , An = Error(h(542))
      , En = {
        then: function() {}
    };
    function Gs(l) {
        return l = l.status,
        l === "fulfilled" || l === "rejected"
    }
    function Ls(l, t, e) {
        switch (e = l[e],
        e === void 0 ? l.push(t) : e !== t && (t.then(Wt, Wt),
        t = e),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw l = t.reason,
            Xs(l),
            l;
        default:
            if (typeof t.status == "string")
                t.then(Wt, Wt);
            else {
                if (l = gl,
                l !== null && 100 < l.shellSuspendCounter)
                    throw Error(h(482));
                l = t,
                l.status = "pending",
                l.then(function(a) {
                    if (t.status === "pending") {
                        var u = t;
                        u.status = "fulfilled",
                        u.value = a
                    }
                }, function(a) {
                    if (t.status === "pending") {
                        var u = t;
                        u.status = "rejected",
                        u.reason = a
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw l = t.reason,
                Xs(l),
                l
            }
            throw ea = t,
            Ra
        }
    }
    function ta(l) {
        try {
            var t = l._init;
            return t(l._payload)
        } catch (e) {
            throw e !== null && typeof e == "object" && typeof e.then == "function" ? (ea = e,
            Ra) : e
        }
    }
    var ea = null;
    function Ys() {
        if (ea === null)
            throw Error(h(459));
        var l = ea;
        return ea = null,
        l
    }
    function Xs(l) {
        if (l === Ra || l === An)
            throw Error(h(483))
    }
    var Ua = null
      , Su = 0;
    function pn(l) {
        var t = Su;
        return Su += 1,
        Ua === null && (Ua = []),
        Ls(Ua, l, t)
    }
    function Tu(l, t) {
        t = t.props.ref,
        l.ref = t !== void 0 ? t : null
    }
    function _n(l, t) {
        throw t.$$typeof === vl ? Error(h(525)) : (l = Object.prototype.toString.call(t),
        Error(h(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
    }
    function Qs(l) {
        function t(r, s) {
            if (l) {
                var d = r.deletions;
                d === null ? (r.deletions = [s],
                r.flags |= 16) : d.push(s)
            }
        }
        function e(r, s) {
            if (!l)
                return null;
            for (; s !== null; )
                t(r, s),
                s = s.sibling;
            return null
        }
        function a(r) {
            for (var s = new Map; r !== null; )
                r.key !== null ? s.set(r.key, r) : s.set(r.index, r),
                r = r.sibling;
            return s
        }
        function u(r, s) {
            return r = $t(r, s),
            r.index = 0,
            r.sibling = null,
            r
        }
        function n(r, s, d) {
            return r.index = d,
            l ? (d = r.alternate,
            d !== null ? (d = d.index,
            d < s ? (r.flags |= 67108866,
            s) : d) : (r.flags |= 67108866,
            s)) : (r.flags |= 1048576,
            s)
        }
        function c(r) {
            return l && r.alternate === null && (r.flags |= 67108866),
            r
        }
        function i(r, s, d, A) {
            return s === null || s.tag !== 6 ? (s = Zc(d, r.mode, A),
            s.return = r,
            s) : (s = u(s, d),
            s.return = r,
            s)
        }
        function f(r, s, d, A) {
            var j = d.type;
            return j === Xl ? S(r, s, d.props.children, A, d.key) : s !== null && (s.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Gl && ta(j) === s.type) ? (s = u(s, d.props),
            Tu(s, d),
            s.return = r,
            s) : (s = hn(d.type, d.key, d.props, null, r.mode, A),
            Tu(s, d),
            s.return = r,
            s)
        }
        function v(r, s, d, A) {
            return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = Kc(d, r.mode, A),
            s.return = r,
            s) : (s = u(s, d.children || []),
            s.return = r,
            s)
        }
        function S(r, s, d, A, j) {
            return s === null || s.tag !== 7 ? (s = $e(d, r.mode, A, j),
            s.return = r,
            s) : (s = u(s, d),
            s.return = r,
            s)
        }
        function E(r, s, d) {
            if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
                return s = Zc("" + s, r.mode, d),
                s.return = r,
                s;
            if (typeof s == "object" && s !== null) {
                switch (s.$$typeof) {
                case lt:
                    return d = hn(s.type, s.key, s.props, null, r.mode, d),
                    Tu(d, s),
                    d.return = r,
                    d;
                case yl:
                    return s = Kc(s, r.mode, d),
                    s.return = r,
                    s;
                case Gl:
                    return s = ta(s),
                    E(r, s, d)
                }
                if (nt(s) || pl(s))
                    return s = $e(s, r.mode, d, null),
                    s.return = r,
                    s;
                if (typeof s.then == "function")
                    return E(r, pn(s), d);
                if (s.$$typeof === ql)
                    return E(r, Sn(r, s), d);
                _n(r, s)
            }
            return null
        }
        function y(r, s, d, A) {
            var j = s !== null ? s.key : null;
            if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
                return j !== null ? null : i(r, s, "" + d, A);
            if (typeof d == "object" && d !== null) {
                switch (d.$$typeof) {
                case lt:
                    return d.key === j ? f(r, s, d, A) : null;
                case yl:
                    return d.key === j ? v(r, s, d, A) : null;
                case Gl:
                    return d = ta(d),
                    y(r, s, d, A)
                }
                if (nt(d) || pl(d))
                    return j !== null ? null : S(r, s, d, A, null);
                if (typeof d.then == "function")
                    return y(r, s, pn(d), A);
                if (d.$$typeof === ql)
                    return y(r, s, Sn(r, d), A);
                _n(r, d)
            }
            return null
        }
        function g(r, s, d, A, j) {
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
                return r = r.get(d) || null,
                i(s, r, "" + A, j);
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case lt:
                    return r = r.get(A.key === null ? d : A.key) || null,
                    f(s, r, A, j);
                case yl:
                    return r = r.get(A.key === null ? d : A.key) || null,
                    v(s, r, A, j);
                case Gl:
                    return A = ta(A),
                    g(r, s, d, A, j)
                }
                if (nt(A) || pl(A))
                    return r = r.get(d) || null,
                    S(s, r, A, j, null);
                if (typeof A.then == "function")
                    return g(r, s, d, pn(A), j);
                if (A.$$typeof === ql)
                    return g(r, s, d, Sn(s, A), j);
                _n(s, A)
            }
            return null
        }
        function N(r, s, d, A) {
            for (var j = null, el = null, R = s, V = s = 0, $ = null; R !== null && V < d.length; V++) {
                R.index > V ? ($ = R,
                R = null) : $ = R.sibling;
                var al = y(r, R, d[V], A);
                if (al === null) {
                    R === null && (R = $);
                    break
                }
                l && R && al.alternate === null && t(r, R),
                s = n(al, s, V),
                el === null ? j = al : el.sibling = al,
                el = al,
                R = $
            }
            if (V === d.length)
                return e(r, R),
                F && Ft(r, V),
                j;
            if (R === null) {
                for (; V < d.length; V++)
                    R = E(r, d[V], A),
                    R !== null && (s = n(R, s, V),
                    el === null ? j = R : el.sibling = R,
                    el = R);
                return F && Ft(r, V),
                j
            }
            for (R = a(R); V < d.length; V++)
                $ = g(R, r, V, d[V], A),
                $ !== null && (l && $.alternate !== null && R.delete($.key === null ? V : $.key),
                s = n($, s, V),
                el === null ? j = $ : el.sibling = $,
                el = $);
            return l && R.forEach(function(Ye) {
                return t(r, Ye)
            }),
            F && Ft(r, V),
            j
        }
        function q(r, s, d, A) {
            if (d == null)
                throw Error(h(151));
            for (var j = null, el = null, R = s, V = s = 0, $ = null, al = d.next(); R !== null && !al.done; V++,
            al = d.next()) {
                R.index > V ? ($ = R,
                R = null) : $ = R.sibling;
                var Ye = y(r, R, al.value, A);
                if (Ye === null) {
                    R === null && (R = $);
                    break
                }
                l && R && Ye.alternate === null && t(r, R),
                s = n(Ye, s, V),
                el === null ? j = Ye : el.sibling = Ye,
                el = Ye,
                R = $
            }
            if (al.done)
                return e(r, R),
                F && Ft(r, V),
                j;
            if (R === null) {
                for (; !al.done; V++,
                al = d.next())
                    al = E(r, al.value, A),
                    al !== null && (s = n(al, s, V),
                    el === null ? j = al : el.sibling = al,
                    el = al);
                return F && Ft(r, V),
                j
            }
            for (R = a(R); !al.done; V++,
            al = d.next())
                al = g(R, r, V, al.value, A),
                al !== null && (l && al.alternate !== null && R.delete(al.key === null ? V : al.key),
                s = n(al, s, V),
                el === null ? j = al : el.sibling = al,
                el = al);
            return l && R.forEach(function(Id) {
                return t(r, Id)
            }),
            F && Ft(r, V),
            j
        }
        function dl(r, s, d, A) {
            if (typeof d == "object" && d !== null && d.type === Xl && d.key === null && (d = d.props.children),
            typeof d == "object" && d !== null) {
                switch (d.$$typeof) {
                case lt:
                    l: {
                        for (var j = d.key; s !== null; ) {
                            if (s.key === j) {
                                if (j = d.type,
                                j === Xl) {
                                    if (s.tag === 7) {
                                        e(r, s.sibling),
                                        A = u(s, d.props.children),
                                        A.return = r,
                                        r = A;
                                        break l
                                    }
                                } else if (s.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Gl && ta(j) === s.type) {
                                    e(r, s.sibling),
                                    A = u(s, d.props),
                                    Tu(A, d),
                                    A.return = r,
                                    r = A;
                                    break l
                                }
                                e(r, s);
                                break
                            } else
                                t(r, s);
                            s = s.sibling
                        }
                        d.type === Xl ? (A = $e(d.props.children, r.mode, A, d.key),
                        A.return = r,
                        r = A) : (A = hn(d.type, d.key, d.props, null, r.mode, A),
                        Tu(A, d),
                        A.return = r,
                        r = A)
                    }
                    return c(r);
                case yl:
                    l: {
                        for (j = d.key; s !== null; ) {
                            if (s.key === j)
                                if (s.tag === 4 && s.stateNode.containerInfo === d.containerInfo && s.stateNode.implementation === d.implementation) {
                                    e(r, s.sibling),
                                    A = u(s, d.children || []),
                                    A.return = r,
                                    r = A;
                                    break l
                                } else {
                                    e(r, s);
                                    break
                                }
                            else
                                t(r, s);
                            s = s.sibling
                        }
                        A = Kc(d, r.mode, A),
                        A.return = r,
                        r = A
                    }
                    return c(r);
                case Gl:
                    return d = ta(d),
                    dl(r, s, d, A)
                }
                if (nt(d))
                    return N(r, s, d, A);
                if (pl(d)) {
                    if (j = pl(d),
                    typeof j != "function")
                        throw Error(h(150));
                    return d = j.call(d),
                    q(r, s, d, A)
                }
                if (typeof d.then == "function")
                    return dl(r, s, pn(d), A);
                if (d.$$typeof === ql)
                    return dl(r, s, Sn(r, d), A);
                _n(r, d)
            }
            return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d,
            s !== null && s.tag === 6 ? (e(r, s.sibling),
            A = u(s, d),
            A.return = r,
            r = A) : (e(r, s),
            A = Zc(d, r.mode, A),
            A.return = r,
            r = A),
            c(r)) : e(r, s)
        }
        return function(r, s, d, A) {
            try {
                Su = 0;
                var j = dl(r, s, d, A);
                return Ua = null,
                j
            } catch (R) {
                if (R === Ra || R === An)
                    throw R;
                var el = gt(29, R, null, r.mode);
                return el.lanes = A,
                el.return = r,
                el
            } finally {}
        }
    }
    var aa = Qs(!0)
      , Vs = Qs(!1)
      , pe = !1;
    function ai(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function ui(l, t) {
        l = l.updateQueue,
        t.updateQueue === l && (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }
    function _e(l) {
        return {
            lane: l,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function ze(l, t, e) {
        var a = l.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (nl & 2) !== 0) {
            var u = a.pending;
            return u === null ? t.next = t : (t.next = u.next,
            u.next = t),
            a.pending = t,
            t = yn(l),
            xs(l, null, e),
            t
        }
        return vn(l, a, t, e),
        yn(l)
    }
    function Au(l, t, e) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (e & 4194048) !== 0)) {
            var a = t.lanes;
            a &= l.pendingLanes,
            e |= a,
            t.lanes = e,
            oa(l, e)
        }
    }
    function ni(l, t) {
        var e = l.updateQueue
          , a = l.alternate;
        if (a !== null && (a = a.updateQueue,
        e === a)) {
            var u = null
              , n = null;
            if (e = e.firstBaseUpdate,
            e !== null) {
                do {
                    var c = {
                        lane: e.lane,
                        tag: e.tag,
                        payload: e.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? u = n = c : n = n.next = c,
                    e = e.next
                } while (e !== null);
                n === null ? u = n = t : n = n.next = t
            } else
                u = n = t;
            e = {
                baseState: a.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: n,
                shared: a.shared,
                callbacks: a.callbacks
            },
            l.updateQueue = e;
            return
        }
        l = e.lastBaseUpdate,
        l === null ? e.firstBaseUpdate = t : l.next = t,
        e.lastBaseUpdate = t
    }
    var ci = !1;
    function Eu() {
        if (ci) {
            var l = Da;
            if (l !== null)
                throw l
        }
    }
    function pu(l, t, e, a) {
        ci = !1;
        var u = l.updateQueue;
        pe = !1;
        var n = u.firstBaseUpdate
          , c = u.lastBaseUpdate
          , i = u.shared.pending;
        if (i !== null) {
            u.shared.pending = null;
            var f = i
              , v = f.next;
            f.next = null,
            c === null ? n = v : c.next = v,
            c = f;
            var S = l.alternate;
            S !== null && (S = S.updateQueue,
            i = S.lastBaseUpdate,
            i !== c && (i === null ? S.firstBaseUpdate = v : i.next = v,
            S.lastBaseUpdate = f))
        }
        if (n !== null) {
            var E = u.baseState;
            c = 0,
            S = v = f = null,
            i = n;
            do {
                var y = i.lane & -536870913
                  , g = y !== i.lane;
                if (g ? (k & y) === y : (a & y) === y) {
                    y !== 0 && y === Na && (ci = !0),
                    S !== null && (S = S.next = {
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null
                    });
                    l: {
                        var N = l
                          , q = i;
                        y = t;
                        var dl = e;
                        switch (q.tag) {
                        case 1:
                            if (N = q.payload,
                            typeof N == "function") {
                                E = N.call(dl, E, y);
                                break l
                            }
                            E = N;
                            break l;
                        case 3:
                            N.flags = N.flags & -65537 | 128;
                        case 0:
                            if (N = q.payload,
                            y = typeof N == "function" ? N.call(dl, E, y) : N,
                            y == null)
                                break l;
                            E = B({}, E, y);
                            break l;
                        case 2:
                            pe = !0
                        }
                    }
                    y = i.callback,
                    y !== null && (l.flags |= 64,
                    g && (l.flags |= 8192),
                    g = u.callbacks,
                    g === null ? u.callbacks = [y] : g.push(y))
                } else
                    g = {
                        lane: y,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    },
                    S === null ? (v = S = g,
                    f = E) : S = S.next = g,
                    c |= y;
                if (i = i.next,
                i === null) {
                    if (i = u.shared.pending,
                    i === null)
                        break;
                    g = i,
                    i = g.next,
                    g.next = null,
                    u.lastBaseUpdate = g,
                    u.shared.pending = null
                }
            } while (!0);
            S === null && (f = E),
            u.baseState = f,
            u.firstBaseUpdate = v,
            u.lastBaseUpdate = S,
            n === null && (u.shared.lanes = 0),
            De |= c,
            l.lanes = c,
            l.memoizedState = E
        }
    }
    function Zs(l, t) {
        if (typeof l != "function")
            throw Error(h(191, l));
        l.call(t)
    }
    function Ks(l, t) {
        var e = l.callbacks;
        if (e !== null)
            for (l.callbacks = null,
            l = 0; l < e.length; l++)
                Zs(e[l], t)
    }
    var Ha = o(null)
      , zn = o(0);
    function Js(l, t) {
        l = fe,
        M(zn, l),
        M(Ha, t),
        fe = l | t.baseLanes
    }
    function ii() {
        M(zn, fe),
        M(Ha, Ha.current)
    }
    function fi() {
        fe = zn.current,
        p(Ha),
        p(zn)
    }
    var bt = o(null)
      , Ht = null;
    function xe(l) {
        var t = l.alternate;
        M(Rl, Rl.current & 1),
        M(bt, l),
        Ht === null && (t === null || Ha.current !== null || t.memoizedState !== null) && (Ht = l)
    }
    function si(l) {
        M(Rl, Rl.current),
        M(bt, l),
        Ht === null && (Ht = l)
    }
    function ws(l) {
        l.tag === 22 ? (M(Rl, Rl.current),
        M(bt, l),
        Ht === null && (Ht = l)) : Me()
    }
    function Me() {
        M(Rl, Rl.current),
        M(bt, bt.current)
    }
    function St(l) {
        p(bt),
        Ht === l && (Ht = null),
        p(Rl)
    }
    var Rl = o(0);
    function xn(l) {
        for (var t = l; t !== null; ) {
            if (t.tag === 13) {
                var e = t.memoizedState;
                if (e !== null && (e = e.dehydrated,
                e === null || hf(e) || gf(e)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === l)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === l)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var le = 0
      , X = null
      , rl = null
      , jl = null
      , Mn = !1
      , ja = !1
      , ua = !1
      , On = 0
      , _u = 0
      , Ca = null
      , Qm = 0;
    function Ml() {
        throw Error(h(321))
    }
    function oi(l, t) {
        if (t === null)
            return !1;
        for (var e = 0; e < t.length && e < l.length; e++)
            if (!ht(l[e], t[e]))
                return !1;
        return !0
    }
    function ri(l, t, e, a, u, n) {
        return le = n,
        X = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        T.H = l === null || l.memoizedState === null ? D0 : xi,
        ua = !1,
        n = e(a, u),
        ua = !1,
        ja && (n = ks(t, e, a, u)),
        Ws(l),
        n
    }
    function Ws(l) {
        T.H = Mu;
        var t = rl !== null && rl.next !== null;
        if (le = 0,
        jl = rl = X = null,
        Mn = !1,
        _u = 0,
        Ca = null,
        t)
            throw Error(h(300));
        l === null || Cl || (l = l.dependencies,
        l !== null && bn(l) && (Cl = !0))
    }
    function ks(l, t, e, a) {
        X = l;
        var u = 0;
        do {
            if (ja && (Ca = null),
            _u = 0,
            ja = !1,
            25 <= u)
                throw Error(h(301));
            if (u += 1,
            jl = rl = null,
            l.updateQueue != null) {
                var n = l.updateQueue;
                n.lastEffect = null,
                n.events = null,
                n.stores = null,
                n.memoCache != null && (n.memoCache.index = 0)
            }
            T.H = R0,
            n = t(e, a)
        } while (ja);
        return n
    }
    function Vm() {
        var l = T.H
          , t = l.useState()[0];
        return t = typeof t.then == "function" ? zu(t) : t,
        l = l.useState()[0],
        (rl !== null ? rl.memoizedState : null) !== l && (X.flags |= 1024),
        t
    }
    function mi() {
        var l = On !== 0;
        return On = 0,
        l
    }
    function di(l, t, e) {
        t.updateQueue = l.updateQueue,
        t.flags &= -2053,
        l.lanes &= ~e
    }
    function vi(l) {
        if (Mn) {
            for (l = l.memoizedState; l !== null; ) {
                var t = l.queue;
                t !== null && (t.pending = null),
                l = l.next
            }
            Mn = !1
        }
        le = 0,
        jl = rl = X = null,
        ja = !1,
        _u = On = 0,
        Ca = null
    }
    function at() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return jl === null ? X.memoizedState = jl = l : jl = jl.next = l,
        jl
    }
    function Ul() {
        if (rl === null) {
            var l = X.alternate;
            l = l !== null ? l.memoizedState : null
        } else
            l = rl.next;
        var t = jl === null ? X.memoizedState : jl.next;
        if (t !== null)
            jl = t,
            rl = l;
        else {
            if (l === null)
                throw X.alternate === null ? Error(h(467)) : Error(h(310));
            rl = l,
            l = {
                memoizedState: rl.memoizedState,
                baseState: rl.baseState,
                baseQueue: rl.baseQueue,
                queue: rl.queue,
                next: null
            },
            jl === null ? X.memoizedState = jl = l : jl = jl.next = l
        }
        return jl
    }
    function Nn() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function zu(l) {
        var t = _u;
        return _u += 1,
        Ca === null && (Ca = []),
        l = Ls(Ca, l, t),
        t = X,
        (jl === null ? t.memoizedState : jl.next) === null && (t = t.alternate,
        T.H = t === null || t.memoizedState === null ? D0 : xi),
        l
    }
    function Dn(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function")
                return zu(l);
            if (l.$$typeof === ql)
                return Wl(l)
        }
        throw Error(h(438, String(l)))
    }
    function yi(l) {
        var t = null
          , e = X.updateQueue;
        if (e !== null && (t = e.memoCache),
        t == null) {
            var a = X.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (t = {
                data: a.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        e === null && (e = Nn(),
        X.updateQueue = e),
        e.memoCache = t,
        e = t.data[t.index],
        e === void 0)
            for (e = t.data[t.index] = Array(l),
            a = 0; a < l; a++)
                e[a] = re;
        return t.index++,
        e
    }
    function te(l, t) {
        return typeof t == "function" ? t(l) : t
    }
    function Rn(l) {
        var t = Ul();
        return hi(t, rl, l)
    }
    function hi(l, t, e) {
        var a = l.queue;
        if (a === null)
            throw Error(h(311));
        a.lastRenderedReducer = e;
        var u = l.baseQueue
          , n = a.pending;
        if (n !== null) {
            if (u !== null) {
                var c = u.next;
                u.next = n.next,
                n.next = c
            }
            t.baseQueue = u = n,
            a.pending = null
        }
        if (n = l.baseState,
        u === null)
            l.memoizedState = n;
        else {
            t = u.next;
            var i = c = null
              , f = null
              , v = t
              , S = !1;
            do {
                var E = v.lane & -536870913;
                if (E !== v.lane ? (k & E) === E : (le & E) === E) {
                    var y = v.revertLane;
                    if (y === 0)
                        f !== null && (f = f.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: v.action,
                            hasEagerState: v.hasEagerState,
                            eagerState: v.eagerState,
                            next: null
                        }),
                        E === Na && (S = !0);
                    else if ((le & y) === y) {
                        v = v.next,
                        y === Na && (S = !0);
                        continue
                    } else
                        E = {
                            lane: 0,
                            revertLane: v.revertLane,
                            gesture: null,
                            action: v.action,
                            hasEagerState: v.hasEagerState,
                            eagerState: v.eagerState,
                            next: null
                        },
                        f === null ? (i = f = E,
                        c = n) : f = f.next = E,
                        X.lanes |= y,
                        De |= y;
                    E = v.action,
                    ua && e(n, E),
                    n = v.hasEagerState ? v.eagerState : e(n, E)
                } else
                    y = {
                        lane: E,
                        revertLane: v.revertLane,
                        gesture: v.gesture,
                        action: v.action,
                        hasEagerState: v.hasEagerState,
                        eagerState: v.eagerState,
                        next: null
                    },
                    f === null ? (i = f = y,
                    c = n) : f = f.next = y,
                    X.lanes |= E,
                    De |= E;
                v = v.next
            } while (v !== null && v !== t);
            if (f === null ? c = n : f.next = i,
            !ht(n, l.memoizedState) && (Cl = !0,
            S && (e = Da,
            e !== null)))
                throw e;
            l.memoizedState = n,
            l.baseState = c,
            l.baseQueue = f,
            a.lastRenderedState = n
        }
        return u === null && (a.lanes = 0),
        [l.memoizedState, a.dispatch]
    }
    function gi(l) {
        var t = Ul()
          , e = t.queue;
        if (e === null)
            throw Error(h(311));
        e.lastRenderedReducer = l;
        var a = e.dispatch
          , u = e.pending
          , n = t.memoizedState;
        if (u !== null) {
            e.pending = null;
            var c = u = u.next;
            do
                n = l(n, c.action),
                c = c.next;
            while (c !== u);
            ht(n, t.memoizedState) || (Cl = !0),
            t.memoizedState = n,
            t.baseQueue === null && (t.baseState = n),
            e.lastRenderedState = n
        }
        return [n, a]
    }
    function $s(l, t, e) {
        var a = X
          , u = Ul()
          , n = F;
        if (n) {
            if (e === void 0)
                throw Error(h(407));
            e = e()
        } else
            e = t();
        var c = !ht((rl || u).memoizedState, e);
        if (c && (u.memoizedState = e,
        Cl = !0),
        u = u.queue,
        Ti(Ps.bind(null, a, u, l), [l]),
        u.getSnapshot !== t || c || jl !== null && jl.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            Ba(9, {
                destroy: void 0
            }, Is.bind(null, a, u, e, t), null),
            gl === null)
                throw Error(h(349));
            n || (le & 127) !== 0 || Fs(a, t, e)
        }
        return e
    }
    function Fs(l, t, e) {
        l.flags |= 16384,
        l = {
            getSnapshot: t,
            value: e
        },
        t = X.updateQueue,
        t === null ? (t = Nn(),
        X.updateQueue = t,
        t.stores = [l]) : (e = t.stores,
        e === null ? t.stores = [l] : e.push(l))
    }
    function Is(l, t, e, a) {
        t.value = e,
        t.getSnapshot = a,
        l0(t) && t0(l)
    }
    function Ps(l, t, e) {
        return e(function() {
            l0(t) && t0(l)
        })
    }
    function l0(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var e = t();
            return !ht(l, e)
        } catch {
            return !0
        }
    }
    function t0(l) {
        var t = ke(l, 2);
        t !== null && dt(t, l, 2)
    }
    function bi(l) {
        var t = at();
        if (typeof l == "function") {
            var e = l;
            if (l = e(),
            ua) {
                Xt(!0);
                try {
                    e()
                } finally {
                    Xt(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = l,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: te,
            lastRenderedState: l
        },
        t
    }
    function e0(l, t, e, a) {
        return l.baseState = e,
        hi(l, rl, typeof a == "function" ? a : te)
    }
    function Zm(l, t, e, a, u) {
        if (jn(l))
            throw Error(h(485));
        if (l = t.action,
        l !== null) {
            var n = {
                payload: u,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(c) {
                    n.listeners.push(c)
                }
            };
            T.T !== null ? e(!0) : n.isTransition = !1,
            a(n),
            e = t.pending,
            e === null ? (n.next = t.pending = n,
            a0(t, n)) : (n.next = e.next,
            t.pending = e.next = n)
        }
    }
    function a0(l, t) {
        var e = t.action
          , a = t.payload
          , u = l.state;
        if (t.isTransition) {
            var n = T.T
              , c = {};
            T.T = c;
            try {
                var i = e(u, a)
                  , f = T.S;
                f !== null && f(c, i),
                u0(l, t, i)
            } catch (v) {
                Si(l, t, v)
            } finally {
                n !== null && c.types !== null && (n.types = c.types),
                T.T = n
            }
        } else
            try {
                n = e(u, a),
                u0(l, t, n)
            } catch (v) {
                Si(l, t, v)
            }
    }
    function u0(l, t, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
            n0(l, t, a)
        }, function(a) {
            return Si(l, t, a)
        }) : n0(l, t, e)
    }
    function n0(l, t, e) {
        t.status = "fulfilled",
        t.value = e,
        c0(t),
        l.state = e,
        t = l.pending,
        t !== null && (e = t.next,
        e === t ? l.pending = null : (e = e.next,
        t.next = e,
        a0(l, e)))
    }
    function Si(l, t, e) {
        var a = l.pending;
        if (l.pending = null,
        a !== null) {
            a = a.next;
            do
                t.status = "rejected",
                t.reason = e,
                c0(t),
                t = t.next;
            while (t !== a)
        }
        l.action = null
    }
    function c0(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++)
            (0,
            l[t])()
    }
    function i0(l, t) {
        return t
    }
    function f0(l, t) {
        if (F) {
            var e = gl.formState;
            if (e !== null) {
                l: {
                    var a = X;
                    if (F) {
                        if (bl) {
                            t: {
                                for (var u = bl, n = Ut; u.nodeType !== 8; ) {
                                    if (!n) {
                                        u = null;
                                        break t
                                    }
                                    if (u = jt(u.nextSibling),
                                    u === null) {
                                        u = null;
                                        break t
                                    }
                                }
                                n = u.data,
                                u = n === "F!" || n === "F" ? u : null
                            }
                            if (u) {
                                bl = jt(u.nextSibling),
                                a = u.data === "F!";
                                break l
                            }
                        }
                        Ae(a)
                    }
                    a = !1
                }
                a && (t = e[0])
            }
        }
        return e = at(),
        e.memoizedState = e.baseState = t,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: i0,
            lastRenderedState: t
        },
        e.queue = a,
        e = M0.bind(null, X, a),
        a.dispatch = e,
        a = bi(!1),
        n = zi.bind(null, X, !1, a.queue),
        a = at(),
        u = {
            state: t,
            dispatch: null,
            action: l,
            pending: null
        },
        a.queue = u,
        e = Zm.bind(null, X, u, n, e),
        u.dispatch = e,
        a.memoizedState = l,
        [t, e, !1]
    }
    function s0(l) {
        var t = Ul();
        return o0(t, rl, l)
    }
    function o0(l, t, e) {
        if (t = hi(l, t, i0)[0],
        l = Rn(te)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var a = zu(t)
            } catch (c) {
                throw c === Ra ? An : c
            }
        else
            a = t;
        t = Ul();
        var u = t.queue
          , n = u.dispatch;
        return e !== t.memoizedState && (X.flags |= 2048,
        Ba(9, {
            destroy: void 0
        }, Km.bind(null, u, e), null)),
        [a, n, l]
    }
    function Km(l, t) {
        l.action = t
    }
    function r0(l) {
        var t = Ul()
          , e = rl;
        if (e !== null)
            return o0(t, e, l);
        Ul(),
        t = t.memoizedState,
        e = Ul();
        var a = e.queue.dispatch;
        return e.memoizedState = l,
        [t, a, !1]
    }
    function Ba(l, t, e, a) {
        return l = {
            tag: l,
            create: e,
            deps: a,
            inst: t,
            next: null
        },
        t = X.updateQueue,
        t === null && (t = Nn(),
        X.updateQueue = t),
        e = t.lastEffect,
        e === null ? t.lastEffect = l.next = l : (a = e.next,
        e.next = l,
        l.next = a,
        t.lastEffect = l),
        l
    }
    function m0() {
        return Ul().memoizedState
    }
    function Un(l, t, e, a) {
        var u = at();
        X.flags |= l,
        u.memoizedState = Ba(1 | t, {
            destroy: void 0
        }, e, a === void 0 ? null : a)
    }
    function Hn(l, t, e, a) {
        var u = Ul();
        a = a === void 0 ? null : a;
        var n = u.memoizedState.inst;
        rl !== null && a !== null && oi(a, rl.memoizedState.deps) ? u.memoizedState = Ba(t, n, e, a) : (X.flags |= l,
        u.memoizedState = Ba(1 | t, n, e, a))
    }
    function d0(l, t) {
        Un(8390656, 8, l, t)
    }
    function Ti(l, t) {
        Hn(2048, 8, l, t)
    }
    function Jm(l) {
        X.flags |= 4;
        var t = X.updateQueue;
        if (t === null)
            t = Nn(),
            X.updateQueue = t,
            t.events = [l];
        else {
            var e = t.events;
            e === null ? t.events = [l] : e.push(l)
        }
    }
    function v0(l) {
        var t = Ul().memoizedState;
        return Jm({
            ref: t,
            nextImpl: l
        }),
        function() {
            if ((nl & 2) !== 0)
                throw Error(h(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function y0(l, t) {
        return Hn(4, 2, l, t)
    }
    function h0(l, t) {
        return Hn(4, 4, l, t)
    }
    function g0(l, t) {
        if (typeof t == "function") {
            l = l();
            var e = t(l);
            return function() {
                typeof e == "function" ? e() : t(null)
            }
        }
        if (t != null)
            return l = l(),
            t.current = l,
            function() {
                t.current = null
            }
    }
    function b0(l, t, e) {
        e = e != null ? e.concat([l]) : null,
        Hn(4, 4, g0.bind(null, t, l), e)
    }
    function Ai() {}
    function S0(l, t) {
        var e = Ul();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        return t !== null && oi(t, a[1]) ? a[0] : (e.memoizedState = [l, t],
        l)
    }
    function T0(l, t) {
        var e = Ul();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        if (t !== null && oi(t, a[1]))
            return a[0];
        if (a = l(),
        ua) {
            Xt(!0);
            try {
                l()
            } finally {
                Xt(!1)
            }
        }
        return e.memoizedState = [a, t],
        a
    }
    function Ei(l, t, e) {
        return e === void 0 || (le & 1073741824) !== 0 && (k & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e,
        l = Eo(),
        X.lanes |= l,
        De |= l,
        e)
    }
    function A0(l, t, e, a) {
        return ht(e, t) ? e : Ha.current !== null ? (l = Ei(l, e, a),
        ht(l, t) || (Cl = !0),
        l) : (le & 42) === 0 || (le & 1073741824) !== 0 && (k & 261930) === 0 ? (Cl = !0,
        l.memoizedState = e) : (l = Eo(),
        X.lanes |= l,
        De |= l,
        t)
    }
    function E0(l, t, e, a, u) {
        var n = x.p;
        x.p = n !== 0 && 8 > n ? n : 8;
        var c = T.T
          , i = {};
        T.T = i,
        zi(l, !1, t, e);
        try {
            var f = u()
              , v = T.S;
            if (v !== null && v(i, f),
            f !== null && typeof f == "object" && typeof f.then == "function") {
                var S = Xm(f, a);
                xu(l, t, S, Et(l))
            } else
                xu(l, t, a, Et(l))
        } catch (E) {
            xu(l, t, {
                then: function() {},
                status: "rejected",
                reason: E
            }, Et())
        } finally {
            x.p = n,
            c !== null && i.types !== null && (c.types = i.types),
            T.T = c
        }
    }
    function wm() {}
    function pi(l, t, e, a) {
        if (l.tag !== 5)
            throw Error(h(476));
        var u = p0(l).queue;
        E0(l, u, t, C, e === null ? wm : function() {
            return _0(l),
            e(a)
        }
        )
    }
    function p0(l) {
        var t = l.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: C,
            baseState: C,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: te,
                lastRenderedState: C
            },
            next: null
        };
        var e = {};
        return t.next = {
            memoizedState: e,
            baseState: e,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: te,
                lastRenderedState: e
            },
            next: null
        },
        l.memoizedState = t,
        l = l.alternate,
        l !== null && (l.memoizedState = t),
        t
    }
    function _0(l) {
        var t = p0(l);
        t.next === null && (t = l.alternate.memoizedState),
        xu(l, t.next.queue, {}, Et())
    }
    function _i() {
        return Wl(Vu)
    }
    function z0() {
        return Ul().memoizedState
    }
    function x0() {
        return Ul().memoizedState
    }
    function Wm(l) {
        for (var t = l.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var e = Et();
                l = _e(e);
                var a = ze(t, l, e);
                a !== null && (dt(a, t, e),
                Au(a, t, e)),
                t = {
                    cache: Pc()
                },
                l.payload = t;
                return
            }
            t = t.return
        }
    }
    function km(l, t, e) {
        var a = Et();
        e = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        jn(l) ? O0(t, e) : (e = Qc(l, t, e, a),
        e !== null && (dt(e, l, a),
        N0(e, t, a)))
    }
    function M0(l, t, e) {
        var a = Et();
        xu(l, t, e, a)
    }
    function xu(l, t, e, a) {
        var u = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (jn(l))
            O0(t, u);
        else {
            var n = l.alternate;
            if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer,
            n !== null))
                try {
                    var c = t.lastRenderedState
                      , i = n(c, e);
                    if (u.hasEagerState = !0,
                    u.eagerState = i,
                    ht(i, c))
                        return vn(l, t, u, 0),
                        gl === null && dn(),
                        !1
                } catch {} finally {}
            if (e = Qc(l, t, u, a),
            e !== null)
                return dt(e, l, a),
                N0(e, t, a),
                !0
        }
        return !1
    }
    function zi(l, t, e, a) {
        if (a = {
            lane: 2,
            revertLane: af(),
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        jn(l)) {
            if (t)
                throw Error(h(479))
        } else
            t = Qc(l, e, a, 2),
            t !== null && dt(t, l, 2)
    }
    function jn(l) {
        var t = l.alternate;
        return l === X || t !== null && t === X
    }
    function O0(l, t) {
        ja = Mn = !0;
        var e = l.pending;
        e === null ? t.next = t : (t.next = e.next,
        e.next = t),
        l.pending = t
    }
    function N0(l, t, e) {
        if ((e & 4194048) !== 0) {
            var a = t.lanes;
            a &= l.pendingLanes,
            e |= a,
            t.lanes = e,
            oa(l, e)
        }
    }
    var Mu = {
        readContext: Wl,
        use: Dn,
        useCallback: Ml,
        useContext: Ml,
        useEffect: Ml,
        useImperativeHandle: Ml,
        useLayoutEffect: Ml,
        useInsertionEffect: Ml,
        useMemo: Ml,
        useReducer: Ml,
        useRef: Ml,
        useState: Ml,
        useDebugValue: Ml,
        useDeferredValue: Ml,
        useTransition: Ml,
        useSyncExternalStore: Ml,
        useId: Ml,
        useHostTransitionStatus: Ml,
        useFormState: Ml,
        useActionState: Ml,
        useOptimistic: Ml,
        useMemoCache: Ml,
        useCacheRefresh: Ml
    };
    Mu.useEffectEvent = Ml;
    var D0 = {
        readContext: Wl,
        use: Dn,
        useCallback: function(l, t) {
            return at().memoizedState = [l, t === void 0 ? null : t],
            l
        },
        useContext: Wl,
        useEffect: d0,
        useImperativeHandle: function(l, t, e) {
            e = e != null ? e.concat([l]) : null,
            Un(4194308, 4, g0.bind(null, t, l), e)
        },
        useLayoutEffect: function(l, t) {
            return Un(4194308, 4, l, t)
        },
        useInsertionEffect: function(l, t) {
            Un(4, 2, l, t)
        },
        useMemo: function(l, t) {
            var e = at();
            t = t === void 0 ? null : t;
            var a = l();
            if (ua) {
                Xt(!0);
                try {
                    l()
                } finally {
                    Xt(!1)
                }
            }
            return e.memoizedState = [a, t],
            a
        },
        useReducer: function(l, t, e) {
            var a = at();
            if (e !== void 0) {
                var u = e(t);
                if (ua) {
                    Xt(!0);
                    try {
                        e(t)
                    } finally {
                        Xt(!1)
                    }
                }
            } else
                u = t;
            return a.memoizedState = a.baseState = u,
            l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: l,
                lastRenderedState: u
            },
            a.queue = l,
            l = l.dispatch = km.bind(null, X, l),
            [a.memoizedState, l]
        },
        useRef: function(l) {
            var t = at();
            return l = {
                current: l
            },
            t.memoizedState = l
        },
        useState: function(l) {
            l = bi(l);
            var t = l.queue
              , e = M0.bind(null, X, t);
            return t.dispatch = e,
            [l.memoizedState, e]
        },
        useDebugValue: Ai,
        useDeferredValue: function(l, t) {
            var e = at();
            return Ei(e, l, t)
        },
        useTransition: function() {
            var l = bi(!1);
            return l = E0.bind(null, X, l.queue, !0, !1),
            at().memoizedState = l,
            [!1, l]
        },
        useSyncExternalStore: function(l, t, e) {
            var a = X
              , u = at();
            if (F) {
                if (e === void 0)
                    throw Error(h(407));
                e = e()
            } else {
                if (e = t(),
                gl === null)
                    throw Error(h(349));
                (k & 127) !== 0 || Fs(a, t, e)
            }
            u.memoizedState = e;
            var n = {
                value: e,
                getSnapshot: t
            };
            return u.queue = n,
            d0(Ps.bind(null, a, n, l), [l]),
            a.flags |= 2048,
            Ba(9, {
                destroy: void 0
            }, Is.bind(null, a, n, e, t), null),
            e
        },
        useId: function() {
            var l = at()
              , t = gl.identifierPrefix;
            if (F) {
                var e = Vt
                  , a = Qt;
                e = (a & ~(1 << 32 - Il(a) - 1)).toString(32) + e,
                t = "_" + t + "R_" + e,
                e = On++,
                0 < e && (t += "H" + e.toString(32)),
                t += "_"
            } else
                e = Qm++,
                t = "_" + t + "r_" + e.toString(32) + "_";
            return l.memoizedState = t
        },
        useHostTransitionStatus: _i,
        useFormState: f0,
        useActionState: f0,
        useOptimistic: function(l) {
            var t = at();
            t.memoizedState = t.baseState = l;
            var e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = e,
            t = zi.bind(null, X, !0, e),
            e.dispatch = t,
            [l, t]
        },
        useMemoCache: yi,
        useCacheRefresh: function() {
            return at().memoizedState = Wm.bind(null, X)
        },
        useEffectEvent: function(l) {
            var t = at()
              , e = {
                impl: l
            };
            return t.memoizedState = e,
            function() {
                if ((nl & 2) !== 0)
                    throw Error(h(440));
                return e.impl.apply(void 0, arguments)
            }
        }
    }
      , xi = {
        readContext: Wl,
        use: Dn,
        useCallback: S0,
        useContext: Wl,
        useEffect: Ti,
        useImperativeHandle: b0,
        useInsertionEffect: y0,
        useLayoutEffect: h0,
        useMemo: T0,
        useReducer: Rn,
        useRef: m0,
        useState: function() {
            return Rn(te)
        },
        useDebugValue: Ai,
        useDeferredValue: function(l, t) {
            var e = Ul();
            return A0(e, rl.memoizedState, l, t)
        },
        useTransition: function() {
            var l = Rn(te)[0]
              , t = Ul().memoizedState;
            return [typeof l == "boolean" ? l : zu(l), t]
        },
        useSyncExternalStore: $s,
        useId: z0,
        useHostTransitionStatus: _i,
        useFormState: s0,
        useActionState: s0,
        useOptimistic: function(l, t) {
            var e = Ul();
            return e0(e, rl, l, t)
        },
        useMemoCache: yi,
        useCacheRefresh: x0
    };
    xi.useEffectEvent = v0;
    var R0 = {
        readContext: Wl,
        use: Dn,
        useCallback: S0,
        useContext: Wl,
        useEffect: Ti,
        useImperativeHandle: b0,
        useInsertionEffect: y0,
        useLayoutEffect: h0,
        useMemo: T0,
        useReducer: gi,
        useRef: m0,
        useState: function() {
            return gi(te)
        },
        useDebugValue: Ai,
        useDeferredValue: function(l, t) {
            var e = Ul();
            return rl === null ? Ei(e, l, t) : A0(e, rl.memoizedState, l, t)
        },
        useTransition: function() {
            var l = gi(te)[0]
              , t = Ul().memoizedState;
            return [typeof l == "boolean" ? l : zu(l), t]
        },
        useSyncExternalStore: $s,
        useId: z0,
        useHostTransitionStatus: _i,
        useFormState: r0,
        useActionState: r0,
        useOptimistic: function(l, t) {
            var e = Ul();
            return rl !== null ? e0(e, rl, l, t) : (e.baseState = l,
            [l, e.queue.dispatch])
        },
        useMemoCache: yi,
        useCacheRefresh: x0
    };
    R0.useEffectEvent = v0;
    function Mi(l, t, e, a) {
        t = l.memoizedState,
        e = e(a, t),
        e = e == null ? t : B({}, t, e),
        l.memoizedState = e,
        l.lanes === 0 && (l.updateQueue.baseState = e)
    }
    var Oi = {
        enqueueSetState: function(l, t, e) {
            l = l._reactInternals;
            var a = Et()
              , u = _e(a);
            u.payload = t,
            e != null && (u.callback = e),
            t = ze(l, u, a),
            t !== null && (dt(t, l, a),
            Au(t, l, a))
        },
        enqueueReplaceState: function(l, t, e) {
            l = l._reactInternals;
            var a = Et()
              , u = _e(a);
            u.tag = 1,
            u.payload = t,
            e != null && (u.callback = e),
            t = ze(l, u, a),
            t !== null && (dt(t, l, a),
            Au(t, l, a))
        },
        enqueueForceUpdate: function(l, t) {
            l = l._reactInternals;
            var e = Et()
              , a = _e(e);
            a.tag = 2,
            t != null && (a.callback = t),
            t = ze(l, a, e),
            t !== null && (dt(t, l, e),
            Au(t, l, e))
        }
    };
    function U0(l, t, e, a, u, n, c) {
        return l = l.stateNode,
        typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, c) : t.prototype && t.prototype.isPureReactComponent ? !du(e, a) || !du(u, n) : !0
    }
    function H0(l, t, e, a) {
        l = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a),
        t.state !== l && Oi.enqueueReplaceState(t, t.state, null)
    }
    function na(l, t) {
        var e = t;
        if ("ref"in t) {
            e = {};
            for (var a in t)
                a !== "ref" && (e[a] = t[a])
        }
        if (l = l.defaultProps) {
            e === t && (e = B({}, e));
            for (var u in l)
                e[u] === void 0 && (e[u] = l[u])
        }
        return e
    }
    function j0(l) {
        mn(l)
    }
    function C0(l) {
        console.error(l)
    }
    function B0(l) {
        mn(l)
    }
    function Cn(l, t) {
        try {
            var e = l.onUncaughtError;
            e(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function q0(l, t, e) {
        try {
            var a = l.onCaughtError;
            a(e.value, {
                componentStack: e.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }
    function Ni(l, t, e) {
        return e = _e(e),
        e.tag = 3,
        e.payload = {
            element: null
        },
        e.callback = function() {
            Cn(l, t)
        }
        ,
        e
    }
    function G0(l) {
        return l = _e(l),
        l.tag = 3,
        l
    }
    function L0(l, t, e, a) {
        var u = e.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var n = a.value;
            l.payload = function() {
                return u(n)
            }
            ,
            l.callback = function() {
                q0(t, e, a)
            }
        }
        var c = e.stateNode;
        c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
            q0(t, e, a),
            typeof u != "function" && (Re === null ? Re = new Set([this]) : Re.add(this));
            var i = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: i !== null ? i : ""
            })
        }
        )
    }
    function $m(l, t, e, a, u) {
        if (e.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = e.alternate,
            t !== null && Oa(t, e, u, !0),
            e = bt.current,
            e !== null) {
                switch (e.tag) {
                case 31:
                case 13:
                    return Ht === null ? wn() : e.alternate === null && Ol === 0 && (Ol = 3),
                    e.flags &= -257,
                    e.flags |= 65536,
                    e.lanes = u,
                    a === En ? e.flags |= 16384 : (t = e.updateQueue,
                    t === null ? e.updateQueue = new Set([a]) : t.add(a),
                    lf(l, a, u)),
                    !1;
                case 22:
                    return e.flags |= 65536,
                    a === En ? e.flags |= 16384 : (t = e.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    e.updateQueue = t) : (e = t.retryQueue,
                    e === null ? t.retryQueue = new Set([a]) : e.add(a)),
                    lf(l, a, u)),
                    !1
                }
                throw Error(h(435, e.tag))
            }
            return lf(l, a, u),
            wn(),
            !1
        }
        if (F)
            return t = bt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = u,
            a !== Wc && (l = Error(h(422), {
                cause: a
            }),
            hu(Nt(l, e)))) : (a !== Wc && (t = Error(h(423), {
                cause: a
            }),
            hu(Nt(t, e))),
            l = l.current.alternate,
            l.flags |= 65536,
            u &= -u,
            l.lanes |= u,
            a = Nt(a, e),
            u = Ni(l.stateNode, a, u),
            ni(l, u),
            Ol !== 4 && (Ol = 2)),
            !1;
        var n = Error(h(520), {
            cause: a
        });
        if (n = Nt(n, e),
        Cu === null ? Cu = [n] : Cu.push(n),
        Ol !== 4 && (Ol = 2),
        t === null)
            return !0;
        a = Nt(a, e),
        e = t;
        do {
            switch (e.tag) {
            case 3:
                return e.flags |= 65536,
                l = u & -u,
                e.lanes |= l,
                l = Ni(e.stateNode, a, l),
                ni(e, l),
                !1;
            case 1:
                if (t = e.type,
                n = e.stateNode,
                (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Re === null || !Re.has(n))))
                    return e.flags |= 65536,
                    u &= -u,
                    e.lanes |= u,
                    u = G0(u),
                    L0(u, l, e, a),
                    ni(e, u),
                    !1
            }
            e = e.return
        } while (e !== null);
        return !1
    }
    var Di = Error(h(461))
      , Cl = !1;
    function kl(l, t, e, a) {
        t.child = l === null ? Vs(t, null, e, a) : aa(t, l.child, e, a)
    }
    function Y0(l, t, e, a, u) {
        e = e.render;
        var n = t.ref;
        if ("ref"in a) {
            var c = {};
            for (var i in a)
                i !== "ref" && (c[i] = a[i])
        } else
            c = a;
        return Pe(t),
        a = ri(l, t, e, c, n, u),
        i = mi(),
        l !== null && !Cl ? (di(l, t, u),
        ee(l, t, u)) : (F && i && Jc(t),
        t.flags |= 1,
        kl(l, t, a, u),
        t.child)
    }
    function X0(l, t, e, a, u) {
        if (l === null) {
            var n = e.type;
            return typeof n == "function" && !Vc(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15,
            t.type = n,
            Q0(l, t, n, a, u)) : (l = hn(e.type, null, a, t, t.mode, u),
            l.ref = t.ref,
            l.return = t,
            t.child = l)
        }
        if (n = l.child,
        !Gi(l, u)) {
            var c = n.memoizedProps;
            if (e = e.compare,
            e = e !== null ? e : du,
            e(c, a) && l.ref === t.ref)
                return ee(l, t, u)
        }
        return t.flags |= 1,
        l = $t(n, a),
        l.ref = t.ref,
        l.return = t,
        t.child = l
    }
    function Q0(l, t, e, a, u) {
        if (l !== null) {
            var n = l.memoizedProps;
            if (du(n, a) && l.ref === t.ref)
                if (Cl = !1,
                t.pendingProps = a = n,
                Gi(l, u))
                    (l.flags & 131072) !== 0 && (Cl = !0);
                else
                    return t.lanes = l.lanes,
                    ee(l, t, u)
        }
        return Ri(l, t, e, a, u)
    }
    function V0(l, t, e, a) {
        var u = a.children
          , n = l !== null ? l.memoizedState : null;
        if (l === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (n = n !== null ? n.baseLanes | e : e,
                l !== null) {
                    for (a = t.child = l.child,
                    u = 0; a !== null; )
                        u = u | a.lanes | a.childLanes,
                        a = a.sibling;
                    a = u & ~n
                } else
                    a = 0,
                    t.child = null;
                return Z0(l, t, n, e, a)
            }
            if ((e & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                l !== null && Tn(t, n !== null ? n.cachePool : null),
                n !== null ? Js(t, n) : ii(),
                ws(t);
            else
                return a = t.lanes = 536870912,
                Z0(l, t, n !== null ? n.baseLanes | e : e, e, a)
        } else
            n !== null ? (Tn(t, n.cachePool),
            Js(t, n),
            Me(),
            t.memoizedState = null) : (l !== null && Tn(t, null),
            ii(),
            Me());
        return kl(l, t, u, e),
        t.child
    }
    function Ou(l, t) {
        return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function Z0(l, t, e, a, u) {
        var n = ti();
        return n = n === null ? null : {
            parent: Hl._currentValue,
            pool: n
        },
        t.memoizedState = {
            baseLanes: e,
            cachePool: n
        },
        l !== null && Tn(t, null),
        ii(),
        ws(t),
        l !== null && Oa(l, t, a, !0),
        t.childLanes = u,
        null
    }
    function Bn(l, t) {
        return t = Gn({
            mode: t.mode,
            children: t.children
        }, l.mode),
        t.ref = l.ref,
        l.child = t,
        t.return = l,
        t
    }
    function K0(l, t, e) {
        return aa(t, l.child, null, e),
        l = Bn(t, t.pendingProps),
        l.flags |= 2,
        St(t),
        t.memoizedState = null,
        l
    }
    function Fm(l, t, e) {
        var a = t.pendingProps
          , u = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        l === null) {
            if (F) {
                if (a.mode === "hidden")
                    return l = Bn(t, a),
                    t.lanes = 536870912,
                    Ou(null, l);
                if (si(t),
                (l = bl) ? (l = ur(l, Ut),
                l = l !== null && l.data === "&" ? l : null,
                l !== null && (t.memoizedState = {
                    dehydrated: l,
                    treeContext: Se !== null ? {
                        id: Qt,
                        overflow: Vt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                e = Os(l),
                e.return = t,
                t.child = e,
                wl = t,
                bl = null)) : l = null,
                l === null)
                    throw Ae(t);
                return t.lanes = 536870912,
                null
            }
            return Bn(t, a)
        }
        var n = l.memoizedState;
        if (n !== null) {
            var c = n.dehydrated;
            if (si(t),
            u)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = K0(l, t, e);
                else if (t.memoizedState !== null)
                    t.child = l.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(h(558));
            else if (Cl || Oa(l, t, e, !1),
            u = (e & l.childLanes) !== 0,
            Cl || u) {
                if (a = gl,
                a !== null && (c = tu(a, e),
                c !== 0 && c !== n.retryLane))
                    throw n.retryLane = c,
                    ke(l, c),
                    dt(a, l, c),
                    Di;
                wn(),
                t = K0(l, t, e)
            } else
                l = n.treeContext,
                bl = jt(c.nextSibling),
                wl = t,
                F = !0,
                Te = null,
                Ut = !1,
                l !== null && Rs(t, l),
                t = Bn(t, a),
                t.flags |= 4096;
            return t
        }
        return l = $t(l.child, {
            mode: a.mode,
            children: a.children
        }),
        l.ref = t.ref,
        t.child = l,
        l.return = t,
        l
    }
    function qn(l, t) {
        var e = t.ref;
        if (e === null)
            l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof e != "function" && typeof e != "object")
                throw Error(h(284));
            (l === null || l.ref !== e) && (t.flags |= 4194816)
        }
    }
    function Ri(l, t, e, a, u) {
        return Pe(t),
        e = ri(l, t, e, a, void 0, u),
        a = mi(),
        l !== null && !Cl ? (di(l, t, u),
        ee(l, t, u)) : (F && a && Jc(t),
        t.flags |= 1,
        kl(l, t, e, u),
        t.child)
    }
    function J0(l, t, e, a, u, n) {
        return Pe(t),
        t.updateQueue = null,
        e = ks(t, a, e, u),
        Ws(l),
        a = mi(),
        l !== null && !Cl ? (di(l, t, n),
        ee(l, t, n)) : (F && a && Jc(t),
        t.flags |= 1,
        kl(l, t, e, n),
        t.child)
    }
    function w0(l, t, e, a, u) {
        if (Pe(t),
        t.stateNode === null) {
            var n = _a
              , c = e.contextType;
            typeof c == "object" && c !== null && (n = Wl(c)),
            n = new e(a,n),
            t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
            n.updater = Oi,
            t.stateNode = n,
            n._reactInternals = t,
            n = t.stateNode,
            n.props = a,
            n.state = t.memoizedState,
            n.refs = {},
            ai(t),
            c = e.contextType,
            n.context = typeof c == "object" && c !== null ? Wl(c) : _a,
            n.state = t.memoizedState,
            c = e.getDerivedStateFromProps,
            typeof c == "function" && (Mi(t, e, c, a),
            n.state = t.memoizedState),
            typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state,
            typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
            c !== n.state && Oi.enqueueReplaceState(n, n.state, null),
            pu(t, a, n, u),
            Eu(),
            n.state = t.memoizedState),
            typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            a = !0
        } else if (l === null) {
            n = t.stateNode;
            var i = t.memoizedProps
              , f = na(e, i);
            n.props = f;
            var v = n.context
              , S = e.contextType;
            c = _a,
            typeof S == "object" && S !== null && (c = Wl(S));
            var E = e.getDerivedStateFromProps;
            S = typeof E == "function" || typeof n.getSnapshotBeforeUpdate == "function",
            i = t.pendingProps !== i,
            S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || v !== c) && H0(t, n, a, c),
            pe = !1;
            var y = t.memoizedState;
            n.state = y,
            pu(t, a, n, u),
            Eu(),
            v = t.memoizedState,
            i || y !== v || pe ? (typeof E == "function" && (Mi(t, e, E, a),
            v = t.memoizedState),
            (f = pe || U0(t, e, f, a, y, v, c)) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()),
            typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = a,
            t.memoizedState = v),
            n.props = a,
            n.state = v,
            n.context = c,
            a = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            a = !1)
        } else {
            n = t.stateNode,
            ui(l, t),
            c = t.memoizedProps,
            S = na(e, c),
            n.props = S,
            E = t.pendingProps,
            y = n.context,
            v = e.contextType,
            f = _a,
            typeof v == "object" && v !== null && (f = Wl(v)),
            i = e.getDerivedStateFromProps,
            (v = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== E || y !== f) && H0(t, n, a, f),
            pe = !1,
            y = t.memoizedState,
            n.state = y,
            pu(t, a, n, u),
            Eu();
            var g = t.memoizedState;
            c !== E || y !== g || pe || l !== null && l.dependencies !== null && bn(l.dependencies) ? (typeof i == "function" && (Mi(t, e, i, a),
            g = t.memoizedState),
            (S = pe || U0(t, e, S, a, y, g, f) || l !== null && l.dependencies !== null && bn(l.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, g, f),
            typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, g, f)),
            typeof n.componentDidUpdate == "function" && (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024),
            t.memoizedProps = a,
            t.memoizedState = g),
            n.props = a,
            n.state = g,
            n.context = f,
            a = S) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024),
            a = !1)
        }
        return n = a,
        qn(l, t),
        a = (t.flags & 128) !== 0,
        n || a ? (n = t.stateNode,
        e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(),
        t.flags |= 1,
        l !== null && a ? (t.child = aa(t, l.child, null, u),
        t.child = aa(t, null, e, u)) : kl(l, t, e, u),
        t.memoizedState = n.state,
        l = t.child) : l = ee(l, t, u),
        l
    }
    function W0(l, t, e, a) {
        return Fe(),
        t.flags |= 256,
        kl(l, t, e, a),
        t.child
    }
    var Ui = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Hi(l) {
        return {
            baseLanes: l,
            cachePool: qs()
        }
    }
    function ji(l, t, e) {
        return l = l !== null ? l.childLanes & ~e : 0,
        t && (l |= At),
        l
    }
    function k0(l, t, e) {
        var a = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, c;
        if ((c = n) || (c = l !== null && l.memoizedState === null ? !1 : (Rl.current & 2) !== 0),
        c && (u = !0,
        t.flags &= -129),
        c = (t.flags & 32) !== 0,
        t.flags &= -33,
        l === null) {
            if (F) {
                if (u ? xe(t) : Me(),
                (l = bl) ? (l = ur(l, Ut),
                l = l !== null && l.data !== "&" ? l : null,
                l !== null && (t.memoizedState = {
                    dehydrated: l,
                    treeContext: Se !== null ? {
                        id: Qt,
                        overflow: Vt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                e = Os(l),
                e.return = t,
                t.child = e,
                wl = t,
                bl = null)) : l = null,
                l === null)
                    throw Ae(t);
                return gf(l) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var i = a.children;
            return a = a.fallback,
            u ? (Me(),
            u = t.mode,
            i = Gn({
                mode: "hidden",
                children: i
            }, u),
            a = $e(a, u, e, null),
            i.return = t,
            a.return = t,
            i.sibling = a,
            t.child = i,
            a = t.child,
            a.memoizedState = Hi(e),
            a.childLanes = ji(l, c, e),
            t.memoizedState = Ui,
            Ou(null, a)) : (xe(t),
            Ci(t, i))
        }
        var f = l.memoizedState;
        if (f !== null && (i = f.dehydrated,
        i !== null)) {
            if (n)
                t.flags & 256 ? (xe(t),
                t.flags &= -257,
                t = Bi(l, t, e)) : t.memoizedState !== null ? (Me(),
                t.child = l.child,
                t.flags |= 128,
                t = null) : (Me(),
                i = a.fallback,
                u = t.mode,
                a = Gn({
                    mode: "visible",
                    children: a.children
                }, u),
                i = $e(i, u, e, null),
                i.flags |= 2,
                a.return = t,
                i.return = t,
                a.sibling = i,
                t.child = a,
                aa(t, l.child, null, e),
                a = t.child,
                a.memoizedState = Hi(e),
                a.childLanes = ji(l, c, e),
                t.memoizedState = Ui,
                t = Ou(null, a));
            else if (xe(t),
            gf(i)) {
                if (c = i.nextSibling && i.nextSibling.dataset,
                c)
                    var v = c.dgst;
                c = v,
                a = Error(h(419)),
                a.stack = "",
                a.digest = c,
                hu({
                    value: a,
                    source: null,
                    stack: null
                }),
                t = Bi(l, t, e)
            } else if (Cl || Oa(l, t, e, !1),
            c = (e & l.childLanes) !== 0,
            Cl || c) {
                if (c = gl,
                c !== null && (a = tu(c, e),
                a !== 0 && a !== f.retryLane))
                    throw f.retryLane = a,
                    ke(l, a),
                    dt(c, l, a),
                    Di;
                hf(i) || wn(),
                t = Bi(l, t, e)
            } else
                hf(i) ? (t.flags |= 192,
                t.child = l.child,
                t = null) : (l = f.treeContext,
                bl = jt(i.nextSibling),
                wl = t,
                F = !0,
                Te = null,
                Ut = !1,
                l !== null && Rs(t, l),
                t = Ci(t, a.children),
                t.flags |= 4096);
            return t
        }
        return u ? (Me(),
        i = a.fallback,
        u = t.mode,
        f = l.child,
        v = f.sibling,
        a = $t(f, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = f.subtreeFlags & 65011712,
        v !== null ? i = $t(v, i) : (i = $e(i, u, e, null),
        i.flags |= 2),
        i.return = t,
        a.return = t,
        a.sibling = i,
        t.child = a,
        Ou(null, a),
        a = t.child,
        i = l.child.memoizedState,
        i === null ? i = Hi(e) : (u = i.cachePool,
        u !== null ? (f = Hl._currentValue,
        u = u.parent !== f ? {
            parent: f,
            pool: f
        } : u) : u = qs(),
        i = {
            baseLanes: i.baseLanes | e,
            cachePool: u
        }),
        a.memoizedState = i,
        a.childLanes = ji(l, c, e),
        t.memoizedState = Ui,
        Ou(l.child, a)) : (xe(t),
        e = l.child,
        l = e.sibling,
        e = $t(e, {
            mode: "visible",
            children: a.children
        }),
        e.return = t,
        e.sibling = null,
        l !== null && (c = t.deletions,
        c === null ? (t.deletions = [l],
        t.flags |= 16) : c.push(l)),
        t.child = e,
        t.memoizedState = null,
        e)
    }
    function Ci(l, t) {
        return t = Gn({
            mode: "visible",
            children: t
        }, l.mode),
        t.return = l,
        l.child = t
    }
    function Gn(l, t) {
        return l = gt(22, l, null, t),
        l.lanes = 0,
        l
    }
    function Bi(l, t, e) {
        return aa(t, l.child, null, e),
        l = Ci(t, t.pendingProps.children),
        l.flags |= 2,
        t.memoizedState = null,
        l
    }
    function $0(l, t, e) {
        l.lanes |= t;
        var a = l.alternate;
        a !== null && (a.lanes |= t),
        Fc(l.return, t, e)
    }
    function qi(l, t, e, a, u, n) {
        var c = l.memoizedState;
        c === null ? l.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: e,
            tailMode: u,
            treeForkCount: n
        } : (c.isBackwards = t,
        c.rendering = null,
        c.renderingStartTime = 0,
        c.last = a,
        c.tail = e,
        c.tailMode = u,
        c.treeForkCount = n)
    }
    function F0(l, t, e) {
        var a = t.pendingProps
          , u = a.revealOrder
          , n = a.tail;
        a = a.children;
        var c = Rl.current
          , i = (c & 2) !== 0;
        if (i ? (c = c & 1 | 2,
        t.flags |= 128) : c &= 1,
        M(Rl, c),
        kl(l, t, a, e),
        a = F ? yu : 0,
        !i && l !== null && (l.flags & 128) !== 0)
            l: for (l = t.child; l !== null; ) {
                if (l.tag === 13)
                    l.memoizedState !== null && $0(l, e, t);
                else if (l.tag === 19)
                    $0(l, e, t);
                else if (l.child !== null) {
                    l.child.return = l,
                    l = l.child;
                    continue
                }
                if (l === t)
                    break l;
                for (; l.sibling === null; ) {
                    if (l.return === null || l.return === t)
                        break l;
                    l = l.return
                }
                l.sibling.return = l.return,
                l = l.sibling
            }
        switch (u) {
        case "forwards":
            for (e = t.child,
            u = null; e !== null; )
                l = e.alternate,
                l !== null && xn(l) === null && (u = e),
                e = e.sibling;
            e = u,
            e === null ? (u = t.child,
            t.child = null) : (u = e.sibling,
            e.sibling = null),
            qi(t, !1, u, e, n, a);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (e = null,
            u = t.child,
            t.child = null; u !== null; ) {
                if (l = u.alternate,
                l !== null && xn(l) === null) {
                    t.child = u;
                    break
                }
                l = u.sibling,
                u.sibling = e,
                e = u,
                u = l
            }
            qi(t, !0, e, null, n, a);
            break;
        case "together":
            qi(t, !1, null, null, void 0, a);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function ee(l, t, e) {
        if (l !== null && (t.dependencies = l.dependencies),
        De |= t.lanes,
        (e & t.childLanes) === 0)
            if (l !== null) {
                if (Oa(l, t, e, !1),
                (e & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (l !== null && t.child !== l.child)
            throw Error(h(153));
        if (t.child !== null) {
            for (l = t.child,
            e = $t(l, l.pendingProps),
            t.child = e,
            e.return = t; l.sibling !== null; )
                l = l.sibling,
                e = e.sibling = $t(l, l.pendingProps),
                e.return = t;
            e.sibling = null
        }
        return t.child
    }
    function Gi(l, t) {
        return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies,
        !!(l !== null && bn(l)))
    }
    function Im(l, t, e) {
        switch (t.tag) {
        case 3:
            Tl(t, t.stateNode.containerInfo),
            Ee(t, Hl, l.memoizedState.cache),
            Fe();
            break;
        case 27:
        case 5:
            me(t);
            break;
        case 4:
            Tl(t, t.stateNode.containerInfo);
            break;
        case 10:
            Ee(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                si(t),
                null;
            break;
        case 13:
            var a = t.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (xe(t),
                t.flags |= 128,
                null) : (e & t.child.childLanes) !== 0 ? k0(l, t, e) : (xe(t),
                l = ee(l, t, e),
                l !== null ? l.sibling : null);
            xe(t);
            break;
        case 19:
            var u = (l.flags & 128) !== 0;
            if (a = (e & t.childLanes) !== 0,
            a || (Oa(l, t, e, !1),
            a = (e & t.childLanes) !== 0),
            u) {
                if (a)
                    return F0(l, t, e);
                t.flags |= 128
            }
            if (u = t.memoizedState,
            u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
            M(Rl, Rl.current),
            a)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            V0(l, t, e, t.pendingProps);
        case 24:
            Ee(t, Hl, l.memoizedState.cache)
        }
        return ee(l, t, e)
    }
    function I0(l, t, e) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps)
                Cl = !0;
            else {
                if (!Gi(l, e) && (t.flags & 128) === 0)
                    return Cl = !1,
                    Im(l, t, e);
                Cl = (l.flags & 131072) !== 0
            }
        else
            Cl = !1,
            F && (t.flags & 1048576) !== 0 && Ds(t, yu, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            l: {
                var a = t.pendingProps;
                if (l = ta(t.elementType),
                t.type = l,
                typeof l == "function")
                    Vc(l) ? (a = na(l, a),
                    t.tag = 1,
                    t = w0(null, t, l, a, e)) : (t.tag = 0,
                    t = Ri(null, t, l, a, e));
                else {
                    if (l != null) {
                        var u = l.$$typeof;
                        if (u === El) {
                            t.tag = 11,
                            t = Y0(null, t, l, a, e);
                            break l
                        } else if (u === K) {
                            t.tag = 14,
                            t = X0(null, t, l, a, e);
                            break l
                        }
                    }
                    throw t = pt(l) || l,
                    Error(h(306, t, ""))
                }
            }
            return t;
        case 0:
            return Ri(l, t, t.type, t.pendingProps, e);
        case 1:
            return a = t.type,
            u = na(a, t.pendingProps),
            w0(l, t, a, u, e);
        case 3:
            l: {
                if (Tl(t, t.stateNode.containerInfo),
                l === null)
                    throw Error(h(387));
                a = t.pendingProps;
                var n = t.memoizedState;
                u = n.element,
                ui(l, t),
                pu(t, a, null, e);
                var c = t.memoizedState;
                if (a = c.cache,
                Ee(t, Hl, a),
                a !== n.cache && Ic(t, [Hl], e, !0),
                Eu(),
                a = c.element,
                n.isDehydrated)
                    if (n = {
                        element: a,
                        isDehydrated: !1,
                        cache: c.cache
                    },
                    t.updateQueue.baseState = n,
                    t.memoizedState = n,
                    t.flags & 256) {
                        t = W0(l, t, a, e);
                        break l
                    } else if (a !== u) {
                        u = Nt(Error(h(424)), t),
                        hu(u),
                        t = W0(l, t, a, e);
                        break l
                    } else {
                        switch (l = t.stateNode.containerInfo,
                        l.nodeType) {
                        case 9:
                            l = l.body;
                            break;
                        default:
                            l = l.nodeName === "HTML" ? l.ownerDocument.body : l
                        }
                        for (bl = jt(l.firstChild),
                        wl = t,
                        F = !0,
                        Te = null,
                        Ut = !0,
                        e = Vs(t, null, a, e),
                        t.child = e; e; )
                            e.flags = e.flags & -3 | 4096,
                            e = e.sibling
                    }
                else {
                    if (Fe(),
                    a === u) {
                        t = ee(l, t, e);
                        break l
                    }
                    kl(l, t, a, e)
                }
                t = t.child
            }
            return t;
        case 26:
            return qn(l, t),
            l === null ? (e = or(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : F || (e = t.type,
            l = t.pendingProps,
            a = lc(Q.current).createElement(e),
            a[Jl] = t,
            a[it] = l,
            $l(a, e, l),
            Ql(a),
            t.stateNode = a) : t.memoizedState = or(t.type, l.memoizedProps, t.pendingProps, l.memoizedState),
            null;
        case 27:
            return me(t),
            l === null && F && (a = t.stateNode = ir(t.type, t.pendingProps, Q.current),
            wl = t,
            Ut = !0,
            u = bl,
            Ce(t.type) ? (bf = u,
            bl = jt(a.firstChild)) : bl = u),
            kl(l, t, t.pendingProps.children, e),
            qn(l, t),
            l === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return l === null && F && ((u = a = bl) && (a = Od(a, t.type, t.pendingProps, Ut),
            a !== null ? (t.stateNode = a,
            wl = t,
            bl = jt(a.firstChild),
            Ut = !1,
            u = !0) : u = !1),
            u || Ae(t)),
            me(t),
            u = t.type,
            n = t.pendingProps,
            c = l !== null ? l.memoizedProps : null,
            a = n.children,
            df(u, n) ? a = null : c !== null && df(u, c) && (t.flags |= 32),
            t.memoizedState !== null && (u = ri(l, t, Vm, null, null, e),
            Vu._currentValue = u),
            qn(l, t),
            kl(l, t, a, e),
            t.child;
        case 6:
            return l === null && F && ((l = e = bl) && (e = Nd(e, t.pendingProps, Ut),
            e !== null ? (t.stateNode = e,
            wl = t,
            bl = null,
            l = !0) : l = !1),
            l || Ae(t)),
            null;
        case 13:
            return k0(l, t, e);
        case 4:
            return Tl(t, t.stateNode.containerInfo),
            a = t.pendingProps,
            l === null ? t.child = aa(t, null, a, e) : kl(l, t, a, e),
            t.child;
        case 11:
            return Y0(l, t, t.type, t.pendingProps, e);
        case 7:
            return kl(l, t, t.pendingProps, e),
            t.child;
        case 8:
            return kl(l, t, t.pendingProps.children, e),
            t.child;
        case 12:
            return kl(l, t, t.pendingProps.children, e),
            t.child;
        case 10:
            return a = t.pendingProps,
            Ee(t, t.type, a.value),
            kl(l, t, a.children, e),
            t.child;
        case 9:
            return u = t.type._context,
            a = t.pendingProps.children,
            Pe(t),
            u = Wl(u),
            a = a(u),
            t.flags |= 1,
            kl(l, t, a, e),
            t.child;
        case 14:
            return X0(l, t, t.type, t.pendingProps, e);
        case 15:
            return Q0(l, t, t.type, t.pendingProps, e);
        case 19:
            return F0(l, t, e);
        case 31:
            return Fm(l, t, e);
        case 22:
            return V0(l, t, e, t.pendingProps);
        case 24:
            return Pe(t),
            a = Wl(Hl),
            l === null ? (u = ti(),
            u === null && (u = gl,
            n = Pc(),
            u.pooledCache = n,
            n.refCount++,
            n !== null && (u.pooledCacheLanes |= e),
            u = n),
            t.memoizedState = {
                parent: a,
                cache: u
            },
            ai(t),
            Ee(t, Hl, u)) : ((l.lanes & e) !== 0 && (ui(l, t),
            pu(t, null, null, e),
            Eu()),
            u = l.memoizedState,
            n = t.memoizedState,
            u.parent !== a ? (u = {
                parent: a,
                cache: a
            },
            t.memoizedState = u,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
            Ee(t, Hl, a)) : (a = n.cache,
            Ee(t, Hl, a),
            a !== u.cache && Ic(t, [Hl], e, !0))),
            kl(l, t, t.pendingProps.children, e),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(h(156, t.tag))
    }
    function ae(l) {
        l.flags |= 4
    }
    function Li(l, t, e, a, u) {
        if ((t = (l.mode & 32) !== 0) && (t = !1),
        t) {
            if (l.flags |= 16777216,
            (u & 335544128) === u)
                if (l.stateNode.complete)
                    l.flags |= 8192;
                else if (xo())
                    l.flags |= 8192;
                else
                    throw ea = En,
                    ei
        } else
            l.flags &= -16777217
    }
    function P0(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            l.flags &= -16777217;
        else if (l.flags |= 16777216,
        !yr(t))
            if (xo())
                l.flags |= 8192;
            else
                throw ea = En,
                ei
    }
    function Ln(l, t) {
        t !== null && (l.flags |= 4),
        l.flags & 16384 && (t = l.tag !== 22 ? yt() : 536870912,
        l.lanes |= t,
        Ya |= t)
    }
    function Nu(l, t) {
        if (!F)
            switch (l.tailMode) {
            case "hidden":
                t = l.tail;
                for (var e = null; t !== null; )
                    t.alternate !== null && (e = t),
                    t = t.sibling;
                e === null ? l.tail = null : e.sibling = null;
                break;
            case "collapsed":
                e = l.tail;
                for (var a = null; e !== null; )
                    e.alternate !== null && (a = e),
                    e = e.sibling;
                a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null
            }
    }
    function Sl(l) {
        var t = l.alternate !== null && l.alternate.child === l.child
          , e = 0
          , a = 0;
        if (t)
            for (var u = l.child; u !== null; )
                e |= u.lanes | u.childLanes,
                a |= u.subtreeFlags & 65011712,
                a |= u.flags & 65011712,
                u.return = l,
                u = u.sibling;
        else
            for (u = l.child; u !== null; )
                e |= u.lanes | u.childLanes,
                a |= u.subtreeFlags,
                a |= u.flags,
                u.return = l,
                u = u.sibling;
        return l.subtreeFlags |= a,
        l.childLanes = e,
        t
    }
    function Pm(l, t, e) {
        var a = t.pendingProps;
        switch (wc(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Sl(t),
            null;
        case 1:
            return Sl(t),
            null;
        case 3:
            return e = t.stateNode,
            a = null,
            l !== null && (a = l.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Pt(Hl),
            hl(),
            e.pendingContext && (e.context = e.pendingContext,
            e.pendingContext = null),
            (l === null || l.child === null) && (Ma(t) ? ae(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            kc())),
            Sl(t),
            null;
        case 26:
            var u = t.type
              , n = t.memoizedState;
            return l === null ? (ae(t),
            n !== null ? (Sl(t),
            P0(t, n)) : (Sl(t),
            Li(t, u, null, a, e))) : n ? n !== l.memoizedState ? (ae(t),
            Sl(t),
            P0(t, n)) : (Sl(t),
            t.flags &= -16777217) : (l = l.memoizedProps,
            l !== a && ae(t),
            Sl(t),
            Li(t, u, l, a, e)),
            null;
        case 27:
            if (de(t),
            e = Q.current,
            u = t.type,
            l !== null && t.stateNode != null)
                l.memoizedProps !== a && ae(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(h(166));
                    return Sl(t),
                    null
                }
                l = D.current,
                Ma(t) ? Us(t) : (l = ir(u, a, e),
                t.stateNode = l,
                ae(t))
            }
            return Sl(t),
            null;
        case 5:
            if (de(t),
            u = t.type,
            l !== null && t.stateNode != null)
                l.memoizedProps !== a && ae(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(h(166));
                    return Sl(t),
                    null
                }
                if (n = D.current,
                Ma(t))
                    Us(t);
                else {
                    var c = lc(Q.current);
                    switch (n) {
                    case 1:
                        n = c.createElementNS("http://www.w3.org/2000/svg", u);
                        break;
                    case 2:
                        n = c.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                        break;
                    default:
                        switch (u) {
                        case "svg":
                            n = c.createElementNS("http://www.w3.org/2000/svg", u);
                            break;
                        case "math":
                            n = c.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                            break;
                        case "script":
                            n = c.createElement("div"),
                            n.innerHTML = "<script><\/script>",
                            n = n.removeChild(n.firstChild);
                            break;
                        case "select":
                            n = typeof a.is == "string" ? c.createElement("select", {
                                is: a.is
                            }) : c.createElement("select"),
                            a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                            break;
                        default:
                            n = typeof a.is == "string" ? c.createElement(u, {
                                is: a.is
                            }) : c.createElement(u)
                        }
                    }
                    n[Jl] = t,
                    n[it] = a;
                    l: for (c = t.child; c !== null; ) {
                        if (c.tag === 5 || c.tag === 6)
                            n.appendChild(c.stateNode);
                        else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                            c.child.return = c,
                            c = c.child;
                            continue
                        }
                        if (c === t)
                            break l;
                        for (; c.sibling === null; ) {
                            if (c.return === null || c.return === t)
                                break l;
                            c = c.return
                        }
                        c.sibling.return = c.return,
                        c = c.sibling
                    }
                    t.stateNode = n;
                    l: switch ($l(n, u, a),
                    u) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a = !!a.autoFocus;
                        break l;
                    case "img":
                        a = !0;
                        break l;
                    default:
                        a = !1
                    }
                    a && ae(t)
                }
            }
            return Sl(t),
            Li(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e),
            null;
        case 6:
            if (l && t.stateNode != null)
                l.memoizedProps !== a && ae(t);
            else {
                if (typeof a != "string" && t.stateNode === null)
                    throw Error(h(166));
                if (l = Q.current,
                Ma(t)) {
                    if (l = t.stateNode,
                    e = t.memoizedProps,
                    a = null,
                    u = wl,
                    u !== null)
                        switch (u.tag) {
                        case 27:
                        case 5:
                            a = u.memoizedProps
                        }
                    l[Jl] = t,
                    l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || $o(l.nodeValue, e)),
                    l || Ae(t, !0)
                } else
                    l = lc(l).createTextNode(a),
                    l[Jl] = t,
                    t.stateNode = l
            }
            return Sl(t),
            null;
        case 31:
            if (e = t.memoizedState,
            l === null || l.memoizedState !== null) {
                if (a = Ma(t),
                e !== null) {
                    if (l === null) {
                        if (!a)
                            throw Error(h(318));
                        if (l = t.memoizedState,
                        l = l !== null ? l.dehydrated : null,
                        !l)
                            throw Error(h(557));
                        l[Jl] = t
                    } else
                        Fe(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Sl(t),
                    l = !1
                } else
                    e = kc(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e),
                    l = !0;
                if (!l)
                    return t.flags & 256 ? (St(t),
                    t) : (St(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(h(558))
            }
            return Sl(t),
            null;
        case 13:
            if (a = t.memoizedState,
            l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                if (u = Ma(t),
                a !== null && a.dehydrated !== null) {
                    if (l === null) {
                        if (!u)
                            throw Error(h(318));
                        if (u = t.memoizedState,
                        u = u !== null ? u.dehydrated : null,
                        !u)
                            throw Error(h(317));
                        u[Jl] = t
                    } else
                        Fe(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Sl(t),
                    u = !1
                } else
                    u = kc(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u),
                    u = !0;
                if (!u)
                    return t.flags & 256 ? (St(t),
                    t) : (St(t),
                    null)
            }
            return St(t),
            (t.flags & 128) !== 0 ? (t.lanes = e,
            t) : (e = a !== null,
            l = l !== null && l.memoizedState !== null,
            e && (a = t.child,
            u = null,
            a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool),
            n = null,
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048)),
            e !== l && e && (t.child.flags |= 8192),
            Ln(t, t.updateQueue),
            Sl(t),
            null);
        case 4:
            return hl(),
            l === null && ff(t.stateNode.containerInfo),
            Sl(t),
            null;
        case 10:
            return Pt(t.type),
            Sl(t),
            null;
        case 19:
            if (p(Rl),
            a = t.memoizedState,
            a === null)
                return Sl(t),
                null;
            if (u = (t.flags & 128) !== 0,
            n = a.rendering,
            n === null)
                if (u)
                    Nu(a, !1);
                else {
                    if (Ol !== 0 || l !== null && (l.flags & 128) !== 0)
                        for (l = t.child; l !== null; ) {
                            if (n = xn(l),
                            n !== null) {
                                for (t.flags |= 128,
                                Nu(a, !1),
                                l = n.updateQueue,
                                t.updateQueue = l,
                                Ln(t, l),
                                t.subtreeFlags = 0,
                                l = e,
                                e = t.child; e !== null; )
                                    Ms(e, l),
                                    e = e.sibling;
                                return M(Rl, Rl.current & 1 | 2),
                                F && Ft(t, a.treeForkCount),
                                t.child
                            }
                            l = l.sibling
                        }
                    a.tail !== null && Dl() > Zn && (t.flags |= 128,
                    u = !0,
                    Nu(a, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!u)
                    if (l = xn(n),
                    l !== null) {
                        if (t.flags |= 128,
                        u = !0,
                        l = l.updateQueue,
                        t.updateQueue = l,
                        Ln(t, l),
                        Nu(a, !0),
                        a.tail === null && a.tailMode === "hidden" && !n.alternate && !F)
                            return Sl(t),
                            null
                    } else
                        2 * Dl() - a.renderingStartTime > Zn && e !== 536870912 && (t.flags |= 128,
                        u = !0,
                        Nu(a, !1),
                        t.lanes = 4194304);
                a.isBackwards ? (n.sibling = t.child,
                t.child = n) : (l = a.last,
                l !== null ? l.sibling = n : t.child = n,
                a.last = n)
            }
            return a.tail !== null ? (l = a.tail,
            a.rendering = l,
            a.tail = l.sibling,
            a.renderingStartTime = Dl(),
            l.sibling = null,
            e = Rl.current,
            M(Rl, u ? e & 1 | 2 : e & 1),
            F && Ft(t, a.treeForkCount),
            l) : (Sl(t),
            null);
        case 22:
        case 23:
            return St(t),
            fi(),
            a = t.memoizedState !== null,
            l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
            a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (Sl(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Sl(t),
            e = t.updateQueue,
            e !== null && Ln(t, e.retryQueue),
            e = null,
            l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
            a = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            a !== e && (t.flags |= 2048),
            l !== null && p(la),
            null;
        case 24:
            return e = null,
            l !== null && (e = l.memoizedState.cache),
            t.memoizedState.cache !== e && (t.flags |= 2048),
            Pt(Hl),
            Sl(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(h(156, t.tag))
    }
    function ld(l, t) {
        switch (wc(t),
        t.tag) {
        case 1:
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 3:
            return Pt(Hl),
            hl(),
            l = t.flags,
            (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return de(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (St(t),
                t.alternate === null)
                    throw Error(h(340));
                Fe()
            }
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 13:
            if (St(t),
            l = t.memoizedState,
            l !== null && l.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(h(340));
                Fe()
            }
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 19:
            return p(Rl),
            null;
        case 4:
            return hl(),
            null;
        case 10:
            return Pt(t.type),
            null;
        case 22:
        case 23:
            return St(t),
            fi(),
            l !== null && p(la),
            l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 24:
            return Pt(Hl),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function lo(l, t) {
        switch (wc(t),
        t.tag) {
        case 3:
            Pt(Hl),
            hl();
            break;
        case 26:
        case 27:
        case 5:
            de(t);
            break;
        case 4:
            hl();
            break;
        case 31:
            t.memoizedState !== null && St(t);
            break;
        case 13:
            St(t);
            break;
        case 19:
            p(Rl);
            break;
        case 10:
            Pt(t.type);
            break;
        case 22:
        case 23:
            St(t),
            fi(),
            l !== null && p(la);
            break;
        case 24:
            Pt(Hl)
        }
    }
    function Du(l, t) {
        try {
            var e = t.updateQueue
              , a = e !== null ? e.lastEffect : null;
            if (a !== null) {
                var u = a.next;
                e = u;
                do {
                    if ((e.tag & l) === l) {
                        a = void 0;
                        var n = e.create
                          , c = e.inst;
                        a = n(),
                        c.destroy = a
                    }
                    e = e.next
                } while (e !== u)
            }
        } catch (i) {
            sl(t, t.return, i)
        }
    }
    function Oe(l, t, e) {
        try {
            var a = t.updateQueue
              , u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var n = u.next;
                a = n;
                do {
                    if ((a.tag & l) === l) {
                        var c = a.inst
                          , i = c.destroy;
                        if (i !== void 0) {
                            c.destroy = void 0,
                            u = t;
                            var f = e
                              , v = i;
                            try {
                                v()
                            } catch (S) {
                                sl(u, f, S)
                            }
                        }
                    }
                    a = a.next
                } while (a !== n)
            }
        } catch (S) {
            sl(t, t.return, S)
        }
    }
    function to(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var e = l.stateNode;
            try {
                Ks(t, e)
            } catch (a) {
                sl(l, l.return, a)
            }
        }
    }
    function eo(l, t, e) {
        e.props = na(l.type, l.memoizedProps),
        e.state = l.memoizedState;
        try {
            e.componentWillUnmount()
        } catch (a) {
            sl(l, t, a)
        }
    }
    function Ru(l, t) {
        try {
            var e = l.ref;
            if (e !== null) {
                switch (l.tag) {
                case 26:
                case 27:
                case 5:
                    var a = l.stateNode;
                    break;
                case 30:
                    a = l.stateNode;
                    break;
                default:
                    a = l.stateNode
                }
                typeof e == "function" ? l.refCleanup = e(a) : e.current = a
            }
        } catch (u) {
            sl(l, t, u)
        }
    }
    function Zt(l, t) {
        var e = l.ref
          , a = l.refCleanup;
        if (e !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (u) {
                    sl(l, t, u)
                } finally {
                    l.refCleanup = null,
                    l = l.alternate,
                    l != null && (l.refCleanup = null)
                }
            else if (typeof e == "function")
                try {
                    e(null)
                } catch (u) {
                    sl(l, t, u)
                }
            else
                e.current = null
    }
    function ao(l) {
        var t = l.type
          , e = l.memoizedProps
          , a = l.stateNode;
        try {
            l: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                e.autoFocus && a.focus();
                break l;
            case "img":
                e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet)
            }
        } catch (u) {
            sl(l, l.return, u)
        }
    }
    function Yi(l, t, e) {
        try {
            var a = l.stateNode;
            Ed(a, l.type, e, t),
            a[it] = t
        } catch (u) {
            sl(l, l.return, u)
        }
    }
    function uo(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Ce(l.type) || l.tag === 4
    }
    function Xi(l) {
        l: for (; ; ) {
            for (; l.sibling === null; ) {
                if (l.return === null || uo(l.return))
                    return null;
                l = l.return
            }
            for (l.sibling.return = l.return,
            l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
                if (l.tag === 27 && Ce(l.type) || l.flags & 2 || l.child === null || l.tag === 4)
                    continue l;
                l.child.return = l,
                l = l.child
            }
            if (!(l.flags & 2))
                return l.stateNode
        }
    }
    function Qi(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6)
            l = l.stateNode,
            t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            t.appendChild(l),
            e = e._reactRootContainer,
            e != null || t.onclick !== null || (t.onclick = Wt));
        else if (a !== 4 && (a === 27 && Ce(l.type) && (e = l.stateNode,
        t = null),
        l = l.child,
        l !== null))
            for (Qi(l, t, e),
            l = l.sibling; l !== null; )
                Qi(l, t, e),
                l = l.sibling
    }
    function Yn(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6)
            l = l.stateNode,
            t ? e.insertBefore(l, t) : e.appendChild(l);
        else if (a !== 4 && (a === 27 && Ce(l.type) && (e = l.stateNode),
        l = l.child,
        l !== null))
            for (Yn(l, t, e),
            l = l.sibling; l !== null; )
                Yn(l, t, e),
                l = l.sibling
    }
    function no(l) {
        var t = l.stateNode
          , e = l.memoizedProps;
        try {
            for (var a = l.type, u = t.attributes; u.length; )
                t.removeAttributeNode(u[0]);
            $l(t, a, e),
            t[Jl] = l,
            t[it] = e
        } catch (n) {
            sl(l, l.return, n)
        }
    }
    var ue = !1
      , Bl = !1
      , Vi = !1
      , co = typeof WeakSet == "function" ? WeakSet : Set
      , Vl = null;
    function td(l, t) {
        if (l = l.containerInfo,
        rf = ic,
        l = bs(l),
        Bc(l)) {
            if ("selectionStart"in l)
                var e = {
                    start: l.selectionStart,
                    end: l.selectionEnd
                };
            else
                l: {
                    e = (e = l.ownerDocument) && e.defaultView || window;
                    var a = e.getSelection && e.getSelection();
                    if (a && a.rangeCount !== 0) {
                        e = a.anchorNode;
                        var u = a.anchorOffset
                          , n = a.focusNode;
                        a = a.focusOffset;
                        try {
                            e.nodeType,
                            n.nodeType
                        } catch {
                            e = null;
                            break l
                        }
                        var c = 0
                          , i = -1
                          , f = -1
                          , v = 0
                          , S = 0
                          , E = l
                          , y = null;
                        t: for (; ; ) {
                            for (var g; E !== e || u !== 0 && E.nodeType !== 3 || (i = c + u),
                            E !== n || a !== 0 && E.nodeType !== 3 || (f = c + a),
                            E.nodeType === 3 && (c += E.nodeValue.length),
                            (g = E.firstChild) !== null; )
                                y = E,
                                E = g;
                            for (; ; ) {
                                if (E === l)
                                    break t;
                                if (y === e && ++v === u && (i = c),
                                y === n && ++S === a && (f = c),
                                (g = E.nextSibling) !== null)
                                    break;
                                E = y,
                                y = E.parentNode
                            }
                            E = g
                        }
                        e = i === -1 || f === -1 ? null : {
                            start: i,
                            end: f
                        }
                    } else
                        e = null
                }
            e = e || {
                start: 0,
                end: 0
            }
        } else
            e = null;
        for (mf = {
            focusedElem: l,
            selectionRange: e
        },
        ic = !1,
        Vl = t; Vl !== null; )
            if (t = Vl,
            l = t.child,
            (t.subtreeFlags & 1028) !== 0 && l !== null)
                l.return = t,
                Vl = l;
            else
                for (; Vl !== null; ) {
                    switch (t = Vl,
                    n = t.alternate,
                    l = t.flags,
                    t.tag) {
                    case 0:
                        if ((l & 4) !== 0 && (l = t.updateQueue,
                        l = l !== null ? l.events : null,
                        l !== null))
                            for (e = 0; e < l.length; e++)
                                u = l[e],
                                u.ref.impl = u.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((l & 1024) !== 0 && n !== null) {
                            l = void 0,
                            e = t,
                            u = n.memoizedProps,
                            n = n.memoizedState,
                            a = e.stateNode;
                            try {
                                var N = na(e.type, u);
                                l = a.getSnapshotBeforeUpdate(N, n),
                                a.__reactInternalSnapshotBeforeUpdate = l
                            } catch (q) {
                                sl(e, e.return, q)
                            }
                        }
                        break;
                    case 3:
                        if ((l & 1024) !== 0) {
                            if (l = t.stateNode.containerInfo,
                            e = l.nodeType,
                            e === 9)
                                yf(l);
                            else if (e === 1)
                                switch (l.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    yf(l);
                                    break;
                                default:
                                    l.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((l & 1024) !== 0)
                            throw Error(h(163))
                    }
                    if (l = t.sibling,
                    l !== null) {
                        l.return = t.return,
                        Vl = l;
                        break
                    }
                    Vl = t.return
                }
    }
    function io(l, t, e) {
        var a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            ce(l, e),
            a & 4 && Du(5, e);
            break;
        case 1:
            if (ce(l, e),
            a & 4)
                if (l = e.stateNode,
                t === null)
                    try {
                        l.componentDidMount()
                    } catch (c) {
                        sl(e, e.return, c)
                    }
                else {
                    var u = na(e.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate)
                    } catch (c) {
                        sl(e, e.return, c)
                    }
                }
            a & 64 && to(e),
            a & 512 && Ru(e, e.return);
            break;
        case 3:
            if (ce(l, e),
            a & 64 && (l = e.updateQueue,
            l !== null)) {
                if (t = null,
                e.child !== null)
                    switch (e.child.tag) {
                    case 27:
                    case 5:
                        t = e.child.stateNode;
                        break;
                    case 1:
                        t = e.child.stateNode
                    }
                try {
                    Ks(l, t)
                } catch (c) {
                    sl(e, e.return, c)
                }
            }
            break;
        case 27:
            t === null && a & 4 && no(e);
        case 26:
        case 5:
            ce(l, e),
            t === null && a & 4 && ao(e),
            a & 512 && Ru(e, e.return);
            break;
        case 12:
            ce(l, e);
            break;
        case 31:
            ce(l, e),
            a & 4 && oo(l, e);
            break;
        case 13:
            ce(l, e),
            a & 4 && ro(l, e),
            a & 64 && (l = e.memoizedState,
            l !== null && (l = l.dehydrated,
            l !== null && (e = od.bind(null, e),
            Dd(l, e))));
            break;
        case 22:
            if (a = e.memoizedState !== null || ue,
            !a) {
                t = t !== null && t.memoizedState !== null || Bl,
                u = ue;
                var n = Bl;
                ue = a,
                (Bl = t) && !n ? ie(l, e, (e.subtreeFlags & 8772) !== 0) : ce(l, e),
                ue = u,
                Bl = n
            }
            break;
        case 30:
            break;
        default:
            ce(l, e)
        }
    }
    function fo(l) {
        var t = l.alternate;
        t !== null && (l.alternate = null,
        fo(t)),
        l.child = null,
        l.deletions = null,
        l.sibling = null,
        l.tag === 5 && (t = l.stateNode,
        t !== null && Sc(t)),
        l.stateNode = null,
        l.return = null,
        l.dependencies = null,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.pendingProps = null,
        l.stateNode = null,
        l.updateQueue = null
    }
    var Al = null
      , st = !1;
    function ne(l, t, e) {
        for (e = e.child; e !== null; )
            so(l, t, e),
            e = e.sibling
    }
    function so(l, t, e) {
        if (et && typeof et.onCommitFiberUnmount == "function")
            try {
                et.onCommitFiberUnmount(Qe, e)
            } catch {}
        switch (e.tag) {
        case 26:
            Bl || Zt(e, t),
            ne(l, t, e),
            e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode,
            e.parentNode.removeChild(e));
            break;
        case 27:
            Bl || Zt(e, t);
            var a = Al
              , u = st;
            Ce(e.type) && (Al = e.stateNode,
            st = !1),
            ne(l, t, e),
            Yu(e.stateNode),
            Al = a,
            st = u;
            break;
        case 5:
            Bl || Zt(e, t);
        case 6:
            if (a = Al,
            u = st,
            Al = null,
            ne(l, t, e),
            Al = a,
            st = u,
            Al !== null)
                if (st)
                    try {
                        (Al.nodeType === 9 ? Al.body : Al.nodeName === "HTML" ? Al.ownerDocument.body : Al).removeChild(e.stateNode)
                    } catch (n) {
                        sl(e, t, n)
                    }
                else
                    try {
                        Al.removeChild(e.stateNode)
                    } catch (n) {
                        sl(e, t, n)
                    }
            break;
        case 18:
            Al !== null && (st ? (l = Al,
            er(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode),
            Wa(l)) : er(Al, e.stateNode));
            break;
        case 4:
            a = Al,
            u = st,
            Al = e.stateNode.containerInfo,
            st = !0,
            ne(l, t, e),
            Al = a,
            st = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Oe(2, e, t),
            Bl || Oe(4, e, t),
            ne(l, t, e);
            break;
        case 1:
            Bl || (Zt(e, t),
            a = e.stateNode,
            typeof a.componentWillUnmount == "function" && eo(e, t, a)),
            ne(l, t, e);
            break;
        case 21:
            ne(l, t, e);
            break;
        case 22:
            Bl = (a = Bl) || e.memoizedState !== null,
            ne(l, t, e),
            Bl = a;
            break;
        default:
            ne(l, t, e)
        }
    }
    function oo(l, t) {
        if (t.memoizedState === null && (l = t.alternate,
        l !== null && (l = l.memoizedState,
        l !== null))) {
            l = l.dehydrated;
            try {
                Wa(l)
            } catch (e) {
                sl(t, t.return, e)
            }
        }
    }
    function ro(l, t) {
        if (t.memoizedState === null && (l = t.alternate,
        l !== null && (l = l.memoizedState,
        l !== null && (l = l.dehydrated,
        l !== null))))
            try {
                Wa(l)
            } catch (e) {
                sl(t, t.return, e)
            }
    }
    function ed(l) {
        switch (l.tag) {
        case 31:
        case 13:
        case 19:
            var t = l.stateNode;
            return t === null && (t = l.stateNode = new co),
            t;
        case 22:
            return l = l.stateNode,
            t = l._retryCache,
            t === null && (t = l._retryCache = new co),
            t;
        default:
            throw Error(h(435, l.tag))
        }
    }
    function Xn(l, t) {
        var e = ed(l);
        t.forEach(function(a) {
            if (!e.has(a)) {
                e.add(a);
                var u = rd.bind(null, l, a);
                a.then(u, u)
            }
        })
    }
    function ot(l, t) {
        var e = t.deletions;
        if (e !== null)
            for (var a = 0; a < e.length; a++) {
                var u = e[a]
                  , n = l
                  , c = t
                  , i = c;
                l: for (; i !== null; ) {
                    switch (i.tag) {
                    case 27:
                        if (Ce(i.type)) {
                            Al = i.stateNode,
                            st = !1;
                            break l
                        }
                        break;
                    case 5:
                        Al = i.stateNode,
                        st = !1;
                        break l;
                    case 3:
                    case 4:
                        Al = i.stateNode.containerInfo,
                        st = !0;
                        break l
                    }
                    i = i.return
                }
                if (Al === null)
                    throw Error(h(160));
                so(n, c, u),
                Al = null,
                st = !1,
                n = u.alternate,
                n !== null && (n.return = null),
                u.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                mo(t, l),
                t = t.sibling
    }
    var Lt = null;
    function mo(l, t) {
        var e = l.alternate
          , a = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ot(t, l),
            rt(l),
            a & 4 && (Oe(3, l, l.return),
            Du(3, l),
            Oe(5, l, l.return));
            break;
        case 1:
            ot(t, l),
            rt(l),
            a & 512 && (Bl || e === null || Zt(e, e.return)),
            a & 64 && ue && (l = l.updateQueue,
            l !== null && (a = l.callbacks,
            a !== null && (e = l.shared.hiddenCallbacks,
            l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
            break;
        case 26:
            var u = Lt;
            if (ot(t, l),
            rt(l),
            a & 512 && (Bl || e === null || Zt(e, e.return)),
            a & 4) {
                var n = e !== null ? e.memoizedState : null;
                if (a = l.memoizedState,
                e === null)
                    if (a === null)
                        if (l.stateNode === null) {
                            l: {
                                a = l.type,
                                e = l.memoizedProps,
                                u = u.ownerDocument || u;
                                t: switch (a) {
                                case "title":
                                    n = u.getElementsByTagName("title")[0],
                                    (!n || n[uu] || n[Jl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a),
                                    u.head.insertBefore(n, u.querySelector("head > title"))),
                                    $l(n, a, e),
                                    n[Jl] = l,
                                    Ql(n),
                                    a = n;
                                    break l;
                                case "link":
                                    var c = dr("link", "href", u).get(a + (e.href || ""));
                                    if (c) {
                                        for (var i = 0; i < c.length; i++)
                                            if (n = c[i],
                                            n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                                c.splice(i, 1);
                                                break t
                                            }
                                    }
                                    n = u.createElement(a),
                                    $l(n, a, e),
                                    u.head.appendChild(n);
                                    break;
                                case "meta":
                                    if (c = dr("meta", "content", u).get(a + (e.content || ""))) {
                                        for (i = 0; i < c.length; i++)
                                            if (n = c[i],
                                            n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                                c.splice(i, 1);
                                                break t
                                            }
                                    }
                                    n = u.createElement(a),
                                    $l(n, a, e),
                                    u.head.appendChild(n);
                                    break;
                                default:
                                    throw Error(h(468, a))
                                }
                                n[Jl] = l,
                                Ql(n),
                                a = n
                            }
                            l.stateNode = a
                        } else
                            vr(u, l.type, l.stateNode);
                    else
                        l.stateNode = mr(u, a, l.memoizedProps);
                else
                    n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode,
                    e.parentNode.removeChild(e)) : n.count--,
                    a === null ? vr(u, l.type, l.stateNode) : mr(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && Yi(l, l.memoizedProps, e.memoizedProps)
            }
            break;
        case 27:
            ot(t, l),
            rt(l),
            a & 512 && (Bl || e === null || Zt(e, e.return)),
            e !== null && a & 4 && Yi(l, l.memoizedProps, e.memoizedProps);
            break;
        case 5:
            if (ot(t, l),
            rt(l),
            a & 512 && (Bl || e === null || Zt(e, e.return)),
            l.flags & 32) {
                u = l.stateNode;
                try {
                    ga(u, "")
                } catch (N) {
                    sl(l, l.return, N)
                }
            }
            a & 4 && l.stateNode != null && (u = l.memoizedProps,
            Yi(l, u, e !== null ? e.memoizedProps : u)),
            a & 1024 && (Vi = !0);
            break;
        case 6:
            if (ot(t, l),
            rt(l),
            a & 4) {
                if (l.stateNode === null)
                    throw Error(h(162));
                a = l.memoizedProps,
                e = l.stateNode;
                try {
                    e.nodeValue = a
                } catch (N) {
                    sl(l, l.return, N)
                }
            }
            break;
        case 3:
            if (ac = null,
            u = Lt,
            Lt = tc(t.containerInfo),
            ot(t, l),
            Lt = u,
            rt(l),
            a & 4 && e !== null && e.memoizedState.isDehydrated)
                try {
                    Wa(t.containerInfo)
                } catch (N) {
                    sl(l, l.return, N)
                }
            Vi && (Vi = !1,
            vo(l));
            break;
        case 4:
            a = Lt,
            Lt = tc(l.stateNode.containerInfo),
            ot(t, l),
            rt(l),
            Lt = a;
            break;
        case 12:
            ot(t, l),
            rt(l);
            break;
        case 31:
            ot(t, l),
            rt(l),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            Xn(l, a)));
            break;
        case 13:
            ot(t, l),
            rt(l),
            l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Vn = Dl()),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            Xn(l, a)));
            break;
        case 22:
            u = l.memoizedState !== null;
            var f = e !== null && e.memoizedState !== null
              , v = ue
              , S = Bl;
            if (ue = v || u,
            Bl = S || f,
            ot(t, l),
            Bl = S,
            ue = v,
            rt(l),
            a & 8192)
                l: for (t = l.stateNode,
                t._visibility = u ? t._visibility & -2 : t._visibility | 1,
                u && (e === null || f || ue || Bl || ca(l)),
                e = null,
                t = l; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (e === null) {
                            f = e = t;
                            try {
                                if (n = f.stateNode,
                                u)
                                    c = n.style,
                                    typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                else {
                                    i = f.stateNode;
                                    var E = f.memoizedProps.style
                                      , y = E != null && E.hasOwnProperty("display") ? E.display : null;
                                    i.style.display = y == null || typeof y == "boolean" ? "" : ("" + y).trim()
                                }
                            } catch (N) {
                                sl(f, f.return, N)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (e === null) {
                            f = t;
                            try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps
                            } catch (N) {
                                sl(f, f.return, N)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (e === null) {
                            f = t;
                            try {
                                var g = f.stateNode;
                                u ? ar(g, !0) : ar(f.stateNode, !1)
                            } catch (N) {
                                sl(f, f.return, N)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === l)
                        break l;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === l)
                            break l;
                        e === t && (e = null),
                        t = t.return
                    }
                    e === t && (e = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a & 4 && (a = l.updateQueue,
            a !== null && (e = a.retryQueue,
            e !== null && (a.retryQueue = null,
            Xn(l, e))));
            break;
        case 19:
            ot(t, l),
            rt(l),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            Xn(l, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ot(t, l),
            rt(l)
        }
    }
    function rt(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var e, a = l.return; a !== null; ) {
                    if (uo(a)) {
                        e = a;
                        break
                    }
                    a = a.return
                }
                if (e == null)
                    throw Error(h(160));
                switch (e.tag) {
                case 27:
                    var u = e.stateNode
                      , n = Xi(l);
                    Yn(l, n, u);
                    break;
                case 5:
                    var c = e.stateNode;
                    e.flags & 32 && (ga(c, ""),
                    e.flags &= -33);
                    var i = Xi(l);
                    Yn(l, i, c);
                    break;
                case 3:
                case 4:
                    var f = e.stateNode.containerInfo
                      , v = Xi(l);
                    Qi(l, v, f);
                    break;
                default:
                    throw Error(h(161))
                }
            } catch (S) {
                sl(l, l.return, S)
            }
            l.flags &= -3
        }
        t & 4096 && (l.flags &= -4097)
    }
    function vo(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null; ) {
                var t = l;
                vo(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                l = l.sibling
            }
    }
    function ce(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                io(l, t.alternate, t),
                t = t.sibling
    }
    function ca(l) {
        for (l = l.child; l !== null; ) {
            var t = l;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Oe(4, t, t.return),
                ca(t);
                break;
            case 1:
                Zt(t, t.return);
                var e = t.stateNode;
                typeof e.componentWillUnmount == "function" && eo(t, t.return, e),
                ca(t);
                break;
            case 27:
                Yu(t.stateNode);
            case 26:
            case 5:
                Zt(t, t.return),
                ca(t);
                break;
            case 22:
                t.memoizedState === null && ca(t);
                break;
            case 30:
                ca(t);
                break;
            default:
                ca(t)
            }
            l = l.sibling
        }
    }
    function ie(l, t, e) {
        for (e = e && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var a = t.alternate
              , u = l
              , n = t
              , c = n.flags;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                ie(u, n, e),
                Du(4, n);
                break;
            case 1:
                if (ie(u, n, e),
                a = n,
                u = a.stateNode,
                typeof u.componentDidMount == "function")
                    try {
                        u.componentDidMount()
                    } catch (v) {
                        sl(a, a.return, v)
                    }
                if (a = n,
                u = a.updateQueue,
                u !== null) {
                    var i = a.stateNode;
                    try {
                        var f = u.shared.hiddenCallbacks;
                        if (f !== null)
                            for (u.shared.hiddenCallbacks = null,
                            u = 0; u < f.length; u++)
                                Zs(f[u], i)
                    } catch (v) {
                        sl(a, a.return, v)
                    }
                }
                e && c & 64 && to(n),
                Ru(n, n.return);
                break;
            case 27:
                no(n);
            case 26:
            case 5:
                ie(u, n, e),
                e && a === null && c & 4 && ao(n),
                Ru(n, n.return);
                break;
            case 12:
                ie(u, n, e);
                break;
            case 31:
                ie(u, n, e),
                e && c & 4 && oo(u, n);
                break;
            case 13:
                ie(u, n, e),
                e && c & 4 && ro(u, n);
                break;
            case 22:
                n.memoizedState === null && ie(u, n, e),
                Ru(n, n.return);
                break;
            case 30:
                break;
            default:
                ie(u, n, e)
            }
            t = t.sibling
        }
    }
    function Zi(l, t) {
        var e = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
        l = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
        l !== e && (l != null && l.refCount++,
        e != null && gu(e))
    }
    function Ki(l, t) {
        l = null,
        t.alternate !== null && (l = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== l && (t.refCount++,
        l != null && gu(l))
    }
    function Yt(l, t, e, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                yo(l, t, e, a),
                t = t.sibling
    }
    function yo(l, t, e, a) {
        var u = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Yt(l, t, e, a),
            u & 2048 && Du(9, t);
            break;
        case 1:
            Yt(l, t, e, a);
            break;
        case 3:
            Yt(l, t, e, a),
            u & 2048 && (l = null,
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== l && (t.refCount++,
            l != null && gu(l)));
            break;
        case 12:
            if (u & 2048) {
                Yt(l, t, e, a),
                l = t.stateNode;
                try {
                    var n = t.memoizedProps
                      , c = n.id
                      , i = n.onPostCommit;
                    typeof i == "function" && i(c, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                } catch (f) {
                    sl(t, t.return, f)
                }
            } else
                Yt(l, t, e, a);
            break;
        case 31:
            Yt(l, t, e, a);
            break;
        case 13:
            Yt(l, t, e, a);
            break;
        case 23:
            break;
        case 22:
            n = t.stateNode,
            c = t.alternate,
            t.memoizedState !== null ? n._visibility & 2 ? Yt(l, t, e, a) : Uu(l, t) : n._visibility & 2 ? Yt(l, t, e, a) : (n._visibility |= 2,
            qa(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
            u & 2048 && Zi(c, t);
            break;
        case 24:
            Yt(l, t, e, a),
            u & 2048 && Ki(t.alternate, t);
            break;
        default:
            Yt(l, t, e, a)
        }
    }
    function qa(l, t, e, a, u) {
        for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var n = l
              , c = t
              , i = e
              , f = a
              , v = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                qa(n, c, i, f, u),
                Du(8, c);
                break;
            case 23:
                break;
            case 22:
                var S = c.stateNode;
                c.memoizedState !== null ? S._visibility & 2 ? qa(n, c, i, f, u) : Uu(n, c) : (S._visibility |= 2,
                qa(n, c, i, f, u)),
                u && v & 2048 && Zi(c.alternate, c);
                break;
            case 24:
                qa(n, c, i, f, u),
                u && v & 2048 && Ki(c.alternate, c);
                break;
            default:
                qa(n, c, i, f, u)
            }
            t = t.sibling
        }
    }
    function Uu(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var e = l
                  , a = t
                  , u = a.flags;
                switch (a.tag) {
                case 22:
                    Uu(e, a),
                    u & 2048 && Zi(a.alternate, a);
                    break;
                case 24:
                    Uu(e, a),
                    u & 2048 && Ki(a.alternate, a);
                    break;
                default:
                    Uu(e, a)
                }
                t = t.sibling
            }
    }
    var Hu = 8192;
    function Ga(l, t, e) {
        if (l.subtreeFlags & Hu)
            for (l = l.child; l !== null; )
                ho(l, t, e),
                l = l.sibling
    }
    function ho(l, t, e) {
        switch (l.tag) {
        case 26:
            Ga(l, t, e),
            l.flags & Hu && l.memoizedState !== null && Qd(e, Lt, l.memoizedState, l.memoizedProps);
            break;
        case 5:
            Ga(l, t, e);
            break;
        case 3:
        case 4:
            var a = Lt;
            Lt = tc(l.stateNode.containerInfo),
            Ga(l, t, e),
            Lt = a;
            break;
        case 22:
            l.memoizedState === null && (a = l.alternate,
            a !== null && a.memoizedState !== null ? (a = Hu,
            Hu = 16777216,
            Ga(l, t, e),
            Hu = a) : Ga(l, t, e));
            break;
        default:
            Ga(l, t, e)
        }
    }
    function go(l) {
        var t = l.alternate;
        if (t !== null && (l = t.child,
        l !== null)) {
            t.child = null;
            do
                t = l.sibling,
                l.sibling = null,
                l = t;
            while (l !== null)
        }
    }
    function ju(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    Vl = a,
                    So(a, l)
                }
            go(l)
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null; )
                bo(l),
                l = l.sibling
    }
    function bo(l) {
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            ju(l),
            l.flags & 2048 && Oe(9, l, l.return);
            break;
        case 3:
            ju(l);
            break;
        case 12:
            ju(l);
            break;
        case 22:
            var t = l.stateNode;
            l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3,
            Qn(l)) : ju(l);
            break;
        default:
            ju(l)
        }
    }
    function Qn(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    Vl = a,
                    So(a, l)
                }
            go(l)
        }
        for (l = l.child; l !== null; ) {
            switch (t = l,
            t.tag) {
            case 0:
            case 11:
            case 15:
                Oe(8, t, t.return),
                Qn(t);
                break;
            case 22:
                e = t.stateNode,
                e._visibility & 2 && (e._visibility &= -3,
                Qn(t));
                break;
            default:
                Qn(t)
            }
            l = l.sibling
        }
    }
    function So(l, t) {
        for (; Vl !== null; ) {
            var e = Vl;
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Oe(8, e, t);
                break;
            case 23:
            case 22:
                if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                    var a = e.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                gu(e.memoizedState.cache)
            }
            if (a = e.child,
            a !== null)
                a.return = e,
                Vl = a;
            else
                l: for (e = l; Vl !== null; ) {
                    a = Vl;
                    var u = a.sibling
                      , n = a.return;
                    if (fo(a),
                    a === e) {
                        Vl = null;
                        break l
                    }
                    if (u !== null) {
                        u.return = n,
                        Vl = u;
                        break l
                    }
                    Vl = n
                }
        }
    }
    var ad = {
        getCacheForType: function(l) {
            var t = Wl(Hl)
              , e = t.data.get(l);
            return e === void 0 && (e = l(),
            t.data.set(l, e)),
            e
        },
        cacheSignal: function() {
            return Wl(Hl).controller.signal
        }
    }
      , ud = typeof WeakMap == "function" ? WeakMap : Map
      , nl = 0
      , gl = null
      , w = null
      , k = 0
      , fl = 0
      , Tt = null
      , Ne = !1
      , La = !1
      , Ji = !1
      , fe = 0
      , Ol = 0
      , De = 0
      , ia = 0
      , wi = 0
      , At = 0
      , Ya = 0
      , Cu = null
      , mt = null
      , Wi = !1
      , Vn = 0
      , To = 0
      , Zn = 1 / 0
      , Kn = null
      , Re = null
      , Ll = 0
      , Ue = null
      , Xa = null
      , se = 0
      , ki = 0
      , $i = null
      , Ao = null
      , Bu = 0
      , Fi = null;
    function Et() {
        return (nl & 2) !== 0 && k !== 0 ? k & -k : T.T !== null ? af() : au()
    }
    function Eo() {
        if (At === 0)
            if ((k & 536870912) === 0 || F) {
                var l = U;
                U <<= 1,
                (U & 3932160) === 0 && (U = 262144),
                At = l
            } else
                At = 536870912;
        return l = bt.current,
        l !== null && (l.flags |= 32),
        At
    }
    function dt(l, t, e) {
        (l === gl && (fl === 2 || fl === 9) || l.cancelPendingCommit !== null) && (Qa(l, 0),
        He(l, k, At, !1)),
        Ve(l, e),
        ((nl & 2) === 0 || l !== gl) && (l === gl && ((nl & 2) === 0 && (ia |= e),
        Ol === 4 && He(l, k, At, !1)),
        Kt(l))
    }
    function po(l, t, e) {
        if ((nl & 6) !== 0)
            throw Error(h(327));
        var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || xl(l, t)
          , u = a ? id(l, t) : Pi(l, t, !0)
          , n = a;
        do {
            if (u === 0) {
                La && !a && He(l, t, 0, !1);
                break
            } else {
                if (e = l.current.alternate,
                n && !nd(e)) {
                    u = Pi(l, t, !1),
                    n = !1;
                    continue
                }
                if (u === 2) {
                    if (n = t,
                    l.errorRecoveryDisabledLanes & n)
                        var c = 0;
                    else
                        c = l.pendingLanes & -536870913,
                        c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
                    if (c !== 0) {
                        t = c;
                        l: {
                            var i = l;
                            u = Cu;
                            var f = i.current.memoizedState.isDehydrated;
                            if (f && (Qa(i, c).flags |= 256),
                            c = Pi(i, c, !1),
                            c !== 2) {
                                if (Ji && !f) {
                                    i.errorRecoveryDisabledLanes |= n,
                                    ia |= n,
                                    u = 4;
                                    break l
                                }
                                n = mt,
                                mt = u,
                                n !== null && (mt === null ? mt = n : mt.push.apply(mt, n))
                            }
                            u = c
                        }
                        if (n = !1,
                        u !== 2)
                            continue
                    }
                }
                if (u === 1) {
                    Qa(l, 0),
                    He(l, t, 0, !0);
                    break
                }
                l: {
                    switch (a = l,
                    n = u,
                    n) {
                    case 0:
                    case 1:
                        throw Error(h(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        He(a, t, At, !Ne);
                        break l;
                    case 2:
                        mt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(h(329))
                    }
                    if ((t & 62914560) === t && (u = Vn + 300 - Dl(),
                    10 < u)) {
                        if (He(a, t, At, !Ne),
                        zl(a, 0, !0) !== 0)
                            break l;
                        se = t,
                        a.timeoutHandle = lr(_o.bind(null, a, e, mt, Kn, Wi, t, At, ia, Ya, Ne, n, "Throttled", -0, 0), u);
                        break l
                    }
                    _o(a, e, mt, Kn, Wi, t, At, ia, Ya, Ne, n, null, -0, 0)
                }
            }
            break
        } while (!0);
        Kt(l)
    }
    function _o(l, t, e, a, u, n, c, i, f, v, S, E, y, g) {
        if (l.timeoutHandle = -1,
        E = t.subtreeFlags,
        E & 8192 || (E & 16785408) === 16785408) {
            E = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Wt
            },
            ho(t, n, E);
            var N = (n & 62914560) === n ? Vn - Dl() : (n & 4194048) === n ? To - Dl() : 0;
            if (N = Vd(E, N),
            N !== null) {
                se = n,
                l.cancelPendingCommit = N(Uo.bind(null, l, t, n, e, a, u, c, i, f, S, E, null, y, g)),
                He(l, n, c, !v);
                return
            }
        }
        Uo(l, t, n, e, a, u, c, i, f)
    }
    function nd(l) {
        for (var t = l; ; ) {
            var e = t.tag;
            if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue,
            e !== null && (e = e.stores,
            e !== null)))
                for (var a = 0; a < e.length; a++) {
                    var u = e[a]
                      , n = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!ht(n(), u))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (e = t.child,
            t.subtreeFlags & 16384 && e !== null)
                e.return = t,
                t = e;
            else {
                if (t === l)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === l)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function He(l, t, e, a) {
        t &= ~wi,
        t &= ~ia,
        l.suspendedLanes |= t,
        l.pingedLanes &= ~t,
        a && (l.warmLanes |= t),
        a = l.expirationTimes;
        for (var u = t; 0 < u; ) {
            var n = 31 - Il(u)
              , c = 1 << n;
            a[n] = -1,
            u &= ~c
        }
        e !== 0 && lu(l, e, t)
    }
    function Jn() {
        return (nl & 6) === 0 ? (qu(0),
        !1) : !0
    }
    function Ii() {
        if (w !== null) {
            if (fl === 0)
                var l = w.return;
            else
                l = w,
                It = Ie = null,
                vi(l),
                Ua = null,
                Su = 0,
                l = w;
            for (; l !== null; )
                lo(l.alternate, l),
                l = l.return;
            w = null
        }
    }
    function Qa(l, t) {
        var e = l.timeoutHandle;
        e !== -1 && (l.timeoutHandle = -1,
        zd(e)),
        e = l.cancelPendingCommit,
        e !== null && (l.cancelPendingCommit = null,
        e()),
        se = 0,
        Ii(),
        gl = l,
        w = e = $t(l.current, null),
        k = t,
        fl = 0,
        Tt = null,
        Ne = !1,
        La = xl(l, t),
        Ji = !1,
        Ya = At = wi = ia = De = Ol = 0,
        mt = Cu = null,
        Wi = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var a = l.entangledLanes;
        if (a !== 0)
            for (l = l.entanglements,
            a &= t; 0 < a; ) {
                var u = 31 - Il(a)
                  , n = 1 << u;
                t |= l[u],
                a &= ~n
            }
        return fe = t,
        dn(),
        e
    }
    function zo(l, t) {
        X = null,
        T.H = Mu,
        t === Ra || t === An ? (t = Ys(),
        fl = 3) : t === ei ? (t = Ys(),
        fl = 4) : fl = t === Di ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        Tt = t,
        w === null && (Ol = 1,
        Cn(l, Nt(t, l.current)))
    }
    function xo() {
        var l = bt.current;
        return l === null ? !0 : (k & 4194048) === k ? Ht === null : (k & 62914560) === k || (k & 536870912) !== 0 ? l === Ht : !1
    }
    function Mo() {
        var l = T.H;
        return T.H = Mu,
        l === null ? Mu : l
    }
    function Oo() {
        var l = T.A;
        return T.A = ad,
        l
    }
    function wn() {
        Ol = 4,
        Ne || (k & 4194048) !== k && bt.current !== null || (La = !0),
        (De & 134217727) === 0 && (ia & 134217727) === 0 || gl === null || He(gl, k, At, !1)
    }
    function Pi(l, t, e) {
        var a = nl;
        nl |= 2;
        var u = Mo()
          , n = Oo();
        (gl !== l || k !== t) && (Kn = null,
        Qa(l, t)),
        t = !1;
        var c = Ol;
        l: do
            try {
                if (fl !== 0 && w !== null) {
                    var i = w
                      , f = Tt;
                    switch (fl) {
                    case 8:
                        Ii(),
                        c = 6;
                        break l;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        bt.current === null && (t = !0);
                        var v = fl;
                        if (fl = 0,
                        Tt = null,
                        Va(l, i, f, v),
                        e && La) {
                            c = 0;
                            break l
                        }
                        break;
                    default:
                        v = fl,
                        fl = 0,
                        Tt = null,
                        Va(l, i, f, v)
                    }
                }
                cd(),
                c = Ol;
                break
            } catch (S) {
                zo(l, S)
            }
        while (!0);
        return t && l.shellSuspendCounter++,
        It = Ie = null,
        nl = a,
        T.H = u,
        T.A = n,
        w === null && (gl = null,
        k = 0,
        dn()),
        c
    }
    function cd() {
        for (; w !== null; )
            No(w)
    }
    function id(l, t) {
        var e = nl;
        nl |= 2;
        var a = Mo()
          , u = Oo();
        gl !== l || k !== t ? (Kn = null,
        Zn = Dl() + 500,
        Qa(l, t)) : La = xl(l, t);
        l: do
            try {
                if (fl !== 0 && w !== null) {
                    t = w;
                    var n = Tt;
                    t: switch (fl) {
                    case 1:
                        fl = 0,
                        Tt = null,
                        Va(l, t, n, 1);
                        break;
                    case 2:
                    case 9:
                        if (Gs(n)) {
                            fl = 0,
                            Tt = null,
                            Do(t);
                            break
                        }
                        t = function() {
                            fl !== 2 && fl !== 9 || gl !== l || (fl = 7),
                            Kt(l)
                        }
                        ,
                        n.then(t, t);
                        break l;
                    case 3:
                        fl = 7;
                        break l;
                    case 4:
                        fl = 5;
                        break l;
                    case 7:
                        Gs(n) ? (fl = 0,
                        Tt = null,
                        Do(t)) : (fl = 0,
                        Tt = null,
                        Va(l, t, n, 7));
                        break;
                    case 5:
                        var c = null;
                        switch (w.tag) {
                        case 26:
                            c = w.memoizedState;
                        case 5:
                        case 27:
                            var i = w;
                            if (c ? yr(c) : i.stateNode.complete) {
                                fl = 0,
                                Tt = null;
                                var f = i.sibling;
                                if (f !== null)
                                    w = f;
                                else {
                                    var v = i.return;
                                    v !== null ? (w = v,
                                    Wn(v)) : w = null
                                }
                                break t
                            }
                        }
                        fl = 0,
                        Tt = null,
                        Va(l, t, n, 5);
                        break;
                    case 6:
                        fl = 0,
                        Tt = null,
                        Va(l, t, n, 6);
                        break;
                    case 8:
                        Ii(),
                        Ol = 6;
                        break l;
                    default:
                        throw Error(h(462))
                    }
                }
                fd();
                break
            } catch (S) {
                zo(l, S)
            }
        while (!0);
        return It = Ie = null,
        T.H = a,
        T.A = u,
        nl = e,
        w !== null ? 0 : (gl = null,
        k = 0,
        dn(),
        Ol)
    }
    function fd() {
        for (; w !== null && !Fu(); )
            No(w)
    }
    function No(l) {
        var t = I0(l.alternate, l, fe);
        l.memoizedProps = l.pendingProps,
        t === null ? Wn(l) : w = t
    }
    function Do(l) {
        var t = l
          , e = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = J0(e, t, t.pendingProps, t.type, void 0, k);
            break;
        case 11:
            t = J0(e, t, t.pendingProps, t.type.render, t.ref, k);
            break;
        case 5:
            vi(t);
        default:
            lo(e, t),
            t = w = Ms(t, fe),
            t = I0(e, t, fe)
        }
        l.memoizedProps = l.pendingProps,
        t === null ? Wn(l) : w = t
    }
    function Va(l, t, e, a) {
        It = Ie = null,
        vi(t),
        Ua = null,
        Su = 0;
        var u = t.return;
        try {
            if ($m(l, u, t, e, k)) {
                Ol = 1,
                Cn(l, Nt(e, l.current)),
                w = null;
                return
            }
        } catch (n) {
            if (u !== null)
                throw w = u,
                n;
            Ol = 1,
            Cn(l, Nt(e, l.current)),
            w = null;
            return
        }
        t.flags & 32768 ? (F || a === 1 ? l = !0 : La || (k & 536870912) !== 0 ? l = !1 : (Ne = l = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = bt.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        Ro(t, l)) : Wn(t)
    }
    function Wn(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                Ro(t, Ne);
                return
            }
            l = t.return;
            var e = Pm(t.alternate, t, fe);
            if (e !== null) {
                w = e;
                return
            }
            if (t = t.sibling,
            t !== null) {
                w = t;
                return
            }
            w = t = l
        } while (t !== null);
        Ol === 0 && (Ol = 5)
    }
    function Ro(l, t) {
        do {
            var e = ld(l.alternate, l);
            if (e !== null) {
                e.flags &= 32767,
                w = e;
                return
            }
            if (e = l.return,
            e !== null && (e.flags |= 32768,
            e.subtreeFlags = 0,
            e.deletions = null),
            !t && (l = l.sibling,
            l !== null)) {
                w = l;
                return
            }
            w = l = e
        } while (l !== null);
        Ol = 6,
        w = null
    }
    function Uo(l, t, e, a, u, n, c, i, f) {
        l.cancelPendingCommit = null;
        do
            kn();
        while (Ll !== 0);
        if ((nl & 6) !== 0)
            throw Error(h(327));
        if (t !== null) {
            if (t === l.current)
                throw Error(h(177));
            if (n = t.lanes | t.childLanes,
            n |= Xc,
            Ze(l, e, n, c, i, f),
            l === gl && (w = gl = null,
            k = 0),
            Xa = t,
            Ue = l,
            se = e,
            ki = n,
            $i = u,
            Ao = a,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null,
            l.callbackPriority = 0,
            md(sa, function() {
                return qo(),
                null
            })) : (l.callbackNode = null,
            l.callbackPriority = 0),
            a = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || a) {
                a = T.T,
                T.T = null,
                u = x.p,
                x.p = 2,
                c = nl,
                nl |= 4;
                try {
                    td(l, t, e)
                } finally {
                    nl = c,
                    x.p = u,
                    T.T = a
                }
            }
            Ll = 1,
            Ho(),
            jo(),
            Co()
        }
    }
    function Ho() {
        if (Ll === 1) {
            Ll = 0;
            var l = Ue
              , t = Xa
              , e = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || e) {
                e = T.T,
                T.T = null;
                var a = x.p;
                x.p = 2;
                var u = nl;
                nl |= 4;
                try {
                    mo(t, l);
                    var n = mf
                      , c = bs(l.containerInfo)
                      , i = n.focusedElem
                      , f = n.selectionRange;
                    if (c !== i && i && i.ownerDocument && gs(i.ownerDocument.documentElement, i)) {
                        if (f !== null && Bc(i)) {
                            var v = f.start
                              , S = f.end;
                            if (S === void 0 && (S = v),
                            "selectionStart"in i)
                                i.selectionStart = v,
                                i.selectionEnd = Math.min(S, i.value.length);
                            else {
                                var E = i.ownerDocument || document
                                  , y = E && E.defaultView || window;
                                if (y.getSelection) {
                                    var g = y.getSelection()
                                      , N = i.textContent.length
                                      , q = Math.min(f.start, N)
                                      , dl = f.end === void 0 ? q : Math.min(f.end, N);
                                    !g.extend && q > dl && (c = dl,
                                    dl = q,
                                    q = c);
                                    var r = hs(i, q)
                                      , s = hs(i, dl);
                                    if (r && s && (g.rangeCount !== 1 || g.anchorNode !== r.node || g.anchorOffset !== r.offset || g.focusNode !== s.node || g.focusOffset !== s.offset)) {
                                        var d = E.createRange();
                                        d.setStart(r.node, r.offset),
                                        g.removeAllRanges(),
                                        q > dl ? (g.addRange(d),
                                        g.extend(s.node, s.offset)) : (d.setEnd(s.node, s.offset),
                                        g.addRange(d))
                                    }
                                }
                            }
                        }
                        for (E = [],
                        g = i; g = g.parentNode; )
                            g.nodeType === 1 && E.push({
                                element: g,
                                left: g.scrollLeft,
                                top: g.scrollTop
                            });
                        for (typeof i.focus == "function" && i.focus(),
                        i = 0; i < E.length; i++) {
                            var A = E[i];
                            A.element.scrollLeft = A.left,
                            A.element.scrollTop = A.top
                        }
                    }
                    ic = !!rf,
                    mf = rf = null
                } finally {
                    nl = u,
                    x.p = a,
                    T.T = e
                }
            }
            l.current = t,
            Ll = 2
        }
    }
    function jo() {
        if (Ll === 2) {
            Ll = 0;
            var l = Ue
              , t = Xa
              , e = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || e) {
                e = T.T,
                T.T = null;
                var a = x.p;
                x.p = 2;
                var u = nl;
                nl |= 4;
                try {
                    io(l, t.alternate, t)
                } finally {
                    nl = u,
                    x.p = a,
                    T.T = e
                }
            }
            Ll = 3
        }
    }
    function Co() {
        if (Ll === 4 || Ll === 3) {
            Ll = 0,
            Fa();
            var l = Ue
              , t = Xa
              , e = se
              , a = Ao;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ll = 5 : (Ll = 0,
            Xa = Ue = null,
            Bo(l, l.pendingLanes));
            var u = l.pendingLanes;
            if (u === 0 && (Re = null),
            he(e),
            t = t.stateNode,
            et && typeof et.onCommitFiberRoot == "function")
                try {
                    et.onCommitFiberRoot(Qe, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                t = T.T,
                u = x.p,
                x.p = 2,
                T.T = null;
                try {
                    for (var n = l.onRecoverableError, c = 0; c < a.length; c++) {
                        var i = a[c];
                        n(i.value, {
                            componentStack: i.stack
                        })
                    }
                } finally {
                    T.T = t,
                    x.p = u
                }
            }
            (se & 3) !== 0 && kn(),
            Kt(l),
            u = l.pendingLanes,
            (e & 261930) !== 0 && (u & 42) !== 0 ? l === Fi ? Bu++ : (Bu = 0,
            Fi = l) : Bu = 0,
            qu(0)
        }
    }
    function Bo(l, t) {
        (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache,
        t != null && (l.pooledCache = null,
        gu(t)))
    }
    function kn() {
        return Ho(),
        jo(),
        Co(),
        qo()
    }
    function qo() {
        if (Ll !== 5)
            return !1;
        var l = Ue
          , t = ki;
        ki = 0;
        var e = he(se)
          , a = T.T
          , u = x.p;
        try {
            x.p = 32 > e ? 32 : e,
            T.T = null,
            e = $i,
            $i = null;
            var n = Ue
              , c = se;
            if (Ll = 0,
            Xa = Ue = null,
            se = 0,
            (nl & 6) !== 0)
                throw Error(h(331));
            var i = nl;
            if (nl |= 4,
            bo(n.current),
            yo(n, n.current, c, e),
            nl = i,
            qu(0, !1),
            et && typeof et.onPostCommitFiberRoot == "function")
                try {
                    et.onPostCommitFiberRoot(Qe, n)
                } catch {}
            return !0
        } finally {
            x.p = u,
            T.T = a,
            Bo(l, t)
        }
    }
    function Go(l, t, e) {
        t = Nt(e, t),
        t = Ni(l.stateNode, t, 2),
        l = ze(l, t, 2),
        l !== null && (Ve(l, 2),
        Kt(l))
    }
    function sl(l, t, e) {
        if (l.tag === 3)
            Go(l, l, e);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Go(t, l, e);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Re === null || !Re.has(a))) {
                        l = Nt(e, l),
                        e = G0(2),
                        a = ze(t, e, 2),
                        a !== null && (L0(e, a, t, l),
                        Ve(a, 2),
                        Kt(a));
                        break
                    }
                }
                t = t.return
            }
    }
    function lf(l, t, e) {
        var a = l.pingCache;
        if (a === null) {
            a = l.pingCache = new ud;
            var u = new Set;
            a.set(t, u)
        } else
            u = a.get(t),
            u === void 0 && (u = new Set,
            a.set(t, u));
        u.has(e) || (Ji = !0,
        u.add(e),
        l = sd.bind(null, l, t, e),
        t.then(l, l))
    }
    function sd(l, t, e) {
        var a = l.pingCache;
        a !== null && a.delete(t),
        l.pingedLanes |= l.suspendedLanes & e,
        l.warmLanes &= ~e,
        gl === l && (k & e) === e && (Ol === 4 || Ol === 3 && (k & 62914560) === k && 300 > Dl() - Vn ? (nl & 2) === 0 && Qa(l, 0) : wi |= e,
        Ya === k && (Ya = 0)),
        Kt(l)
    }
    function Lo(l, t) {
        t === 0 && (t = yt()),
        l = ke(l, t),
        l !== null && (Ve(l, t),
        Kt(l))
    }
    function od(l) {
        var t = l.memoizedState
          , e = 0;
        t !== null && (e = t.retryLane),
        Lo(l, e)
    }
    function rd(l, t) {
        var e = 0;
        switch (l.tag) {
        case 31:
        case 13:
            var a = l.stateNode
              , u = l.memoizedState;
            u !== null && (e = u.retryLane);
            break;
        case 19:
            a = l.stateNode;
            break;
        case 22:
            a = l.stateNode._retryCache;
            break;
        default:
            throw Error(h(314))
        }
        a !== null && a.delete(t),
        Lo(l, e)
    }
    function md(l, t) {
        return ye(l, t)
    }
    var $n = null
      , Za = null
      , tf = !1
      , Fn = !1
      , ef = !1
      , je = 0;
    function Kt(l) {
        l !== Za && l.next === null && (Za === null ? $n = Za = l : Za = Za.next = l),
        Fn = !0,
        tf || (tf = !0,
        vd())
    }
    function qu(l, t) {
        if (!ef && Fn) {
            ef = !0;
            do
                for (var e = !1, a = $n; a !== null; ) {
                    if (l !== 0) {
                        var u = a.pendingLanes;
                        if (u === 0)
                            var n = 0;
                        else {
                            var c = a.suspendedLanes
                              , i = a.pingedLanes;
                            n = (1 << 31 - Il(42 | l) + 1) - 1,
                            n &= u & ~(c & ~i),
                            n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                        }
                        n !== 0 && (e = !0,
                        Vo(a, n))
                    } else
                        n = k,
                        n = zl(a, a === gl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (n & 3) === 0 || xl(a, n) || (e = !0,
                        Vo(a, n));
                    a = a.next
                }
            while (e);
            ef = !1
        }
    }
    function dd() {
        Yo()
    }
    function Yo() {
        Fn = tf = !1;
        var l = 0;
        je !== 0 && _d() && (l = je);
        for (var t = Dl(), e = null, a = $n; a !== null; ) {
            var u = a.next
              , n = Xo(a, t);
            n === 0 ? (a.next = null,
            e === null ? $n = u : e.next = u,
            u === null && (Za = e)) : (e = a,
            (l !== 0 || (n & 3) !== 0) && (Fn = !0)),
            a = u
        }
        Ll !== 0 && Ll !== 5 || qu(l),
        je !== 0 && (je = 0)
    }
    function Xo(l, t) {
        for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
            var c = 31 - Il(n)
              , i = 1 << c
              , f = u[c];
            f === -1 ? ((i & e) === 0 || (i & a) !== 0) && (u[c] = ct(i, t)) : f <= t && (l.expiredLanes |= i),
            n &= ~i
        }
        if (t = gl,
        e = k,
        e = zl(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
        a = l.callbackNode,
        e === 0 || l === t && (fl === 2 || fl === 9) || l.cancelPendingCommit !== null)
            return a !== null && a !== null && $a(a),
            l.callbackNode = null,
            l.callbackPriority = 0;
        if ((e & 3) === 0 || xl(l, e)) {
            if (t = e & -e,
            t === l.callbackPriority)
                return t;
            switch (a !== null && $a(a),
            he(e)) {
            case 2:
            case 8:
                e = Ia;
                break;
            case 32:
                e = sa;
                break;
            case 268435456:
                e = Pa;
                break;
            default:
                e = sa
            }
            return a = Qo.bind(null, l),
            e = ye(e, a),
            l.callbackPriority = t,
            l.callbackNode = e,
            t
        }
        return a !== null && a !== null && $a(a),
        l.callbackPriority = 2,
        l.callbackNode = null,
        2
    }
    function Qo(l, t) {
        if (Ll !== 0 && Ll !== 5)
            return l.callbackNode = null,
            l.callbackPriority = 0,
            null;
        var e = l.callbackNode;
        if (kn() && l.callbackNode !== e)
            return null;
        var a = k;
        return a = zl(l, l === gl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
        a === 0 ? null : (po(l, a, t),
        Xo(l, Dl()),
        l.callbackNode != null && l.callbackNode === e ? Qo.bind(null, l) : null)
    }
    function Vo(l, t) {
        if (kn())
            return null;
        po(l, t, !0)
    }
    function vd() {
        xd(function() {
            (nl & 6) !== 0 ? ye(Iu, dd) : Yo()
        })
    }
    function af() {
        if (je === 0) {
            var l = Na;
            l === 0 && (l = O,
            O <<= 1,
            (O & 261888) === 0 && (O = 256)),
            je = l
        }
        return je
    }
    function Zo(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : un("" + l)
    }
    function Ko(l, t) {
        var e = t.ownerDocument.createElement("input");
        return e.name = t.name,
        e.value = t.value,
        l.id && e.setAttribute("form", l.id),
        t.parentNode.insertBefore(e, t),
        l = new FormData(l),
        e.parentNode.removeChild(e),
        l
    }
    function yd(l, t, e, a, u) {
        if (t === "submit" && e && e.stateNode === u) {
            var n = Zo((u[it] || null).action)
              , c = a.submitter;
            c && (t = (t = c[it] || null) ? Zo(t.formAction) : c.getAttribute("formAction"),
            t !== null && (n = t,
            c = null));
            var i = new sn("action","action",null,a,u);
            l.push({
                event: i,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (je !== 0) {
                                var f = c ? Ko(u, c) : new FormData(u);
                                pi(e, {
                                    pending: !0,
                                    data: f,
                                    method: u.method,
                                    action: n
                                }, null, f)
                            }
                        } else
                            typeof n == "function" && (i.preventDefault(),
                            f = c ? Ko(u, c) : new FormData(u),
                            pi(e, {
                                pending: !0,
                                data: f,
                                method: u.method,
                                action: n
                            }, n, f))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var uf = 0; uf < Yc.length; uf++) {
        var nf = Yc[uf]
          , hd = nf.toLowerCase()
          , gd = nf[0].toUpperCase() + nf.slice(1);
        Gt(hd, "on" + gd)
    }
    Gt(As, "onAnimationEnd"),
    Gt(Es, "onAnimationIteration"),
    Gt(ps, "onAnimationStart"),
    Gt("dblclick", "onDoubleClick"),
    Gt("focusin", "onFocus"),
    Gt("focusout", "onBlur"),
    Gt(Hm, "onTransitionRun"),
    Gt(jm, "onTransitionStart"),
    Gt(Cm, "onTransitionCancel"),
    Gt(_s, "onTransitionEnd"),
    ya("onMouseEnter", ["mouseout", "mouseover"]),
    ya("onMouseLeave", ["mouseout", "mouseover"]),
    ya("onPointerEnter", ["pointerout", "pointerover"]),
    ya("onPointerLeave", ["pointerout", "pointerover"]),
    Ke("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ke("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Ke("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ke("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ke("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Ke("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Gu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , bd = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gu));
    function Jo(l, t) {
        t = (t & 4) !== 0;
        for (var e = 0; e < l.length; e++) {
            var a = l[e]
              , u = a.event;
            a = a.listeners;
            l: {
                var n = void 0;
                if (t)
                    for (var c = a.length - 1; 0 <= c; c--) {
                        var i = a[c]
                          , f = i.instance
                          , v = i.currentTarget;
                        if (i = i.listener,
                        f !== n && u.isPropagationStopped())
                            break l;
                        n = i,
                        u.currentTarget = v;
                        try {
                            n(u)
                        } catch (S) {
                            mn(S)
                        }
                        u.currentTarget = null,
                        n = f
                    }
                else
                    for (c = 0; c < a.length; c++) {
                        if (i = a[c],
                        f = i.instance,
                        v = i.currentTarget,
                        i = i.listener,
                        f !== n && u.isPropagationStopped())
                            break l;
                        n = i,
                        u.currentTarget = v;
                        try {
                            n(u)
                        } catch (S) {
                            mn(S)
                        }
                        u.currentTarget = null,
                        n = f
                    }
            }
        }
    }
    function W(l, t) {
        var e = t[bc];
        e === void 0 && (e = t[bc] = new Set);
        var a = l + "__bubble";
        e.has(a) || (wo(t, l, 2, !1),
        e.add(a))
    }
    function cf(l, t, e) {
        var a = 0;
        t && (a |= 4),
        wo(e, l, a, t)
    }
    var In = "_reactListening" + Math.random().toString(36).slice(2);
    function ff(l) {
        if (!l[In]) {
            l[In] = !0,
            Lf.forEach(function(e) {
                e !== "selectionchange" && (bd.has(e) || cf(e, !1, l),
                cf(e, !0, l))
            });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[In] || (t[In] = !0,
            cf("selectionchange", !1, t))
        }
    }
    function wo(l, t, e, a) {
        switch (Er(t)) {
        case 2:
            var u = Jd;
            break;
        case 8:
            u = wd;
            break;
        default:
            u = pf
        }
        e = u.bind(null, t, e, l),
        u = void 0,
        !Mc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0),
        a ? u !== void 0 ? l.addEventListener(t, e, {
            capture: !0,
            passive: u
        }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, {
            passive: u
        }) : l.addEventListener(t, e, !1)
    }
    function sf(l, t, e, a, u) {
        var n = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            l: for (; ; ) {
                if (a === null)
                    return;
                var c = a.tag;
                if (c === 3 || c === 4) {
                    var i = a.stateNode.containerInfo;
                    if (i === u)
                        break;
                    if (c === 4)
                        for (c = a.return; c !== null; ) {
                            var f = c.tag;
                            if ((f === 3 || f === 4) && c.stateNode.containerInfo === u)
                                return;
                            c = c.return
                        }
                    for (; i !== null; ) {
                        if (c = ma(i),
                        c === null)
                            return;
                        if (f = c.tag,
                        f === 5 || f === 6 || f === 26 || f === 27) {
                            a = n = c;
                            continue l
                        }
                        i = i.parentNode
                    }
                }
                a = a.return
            }
        Ff(function() {
            var v = n
              , S = zc(e)
              , E = [];
            l: {
                var y = zs.get(l);
                if (y !== void 0) {
                    var g = sn
                      , N = l;
                    switch (l) {
                    case "keypress":
                        if (cn(e) === 0)
                            break l;
                    case "keydown":
                    case "keyup":
                        g = rm;
                        break;
                    case "focusin":
                        N = "focus",
                        g = Rc;
                        break;
                    case "focusout":
                        N = "blur",
                        g = Rc;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = Rc;
                        break;
                    case "click":
                        if (e.button === 2)
                            break l;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = ls;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = Pr;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = vm;
                        break;
                    case As:
                    case Es:
                    case ps:
                        g = em;
                        break;
                    case _s:
                        g = hm;
                        break;
                    case "scroll":
                    case "scrollend":
                        g = Fr;
                        break;
                    case "wheel":
                        g = bm;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = um;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = es;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        g = Tm
                    }
                    var q = (t & 4) !== 0
                      , dl = !q && (l === "scroll" || l === "scrollend")
                      , r = q ? y !== null ? y + "Capture" : null : y;
                    q = [];
                    for (var s = v, d; s !== null; ) {
                        var A = s;
                        if (d = A.stateNode,
                        A = A.tag,
                        A !== 5 && A !== 26 && A !== 27 || d === null || r === null || (A = cu(s, r),
                        A != null && q.push(Lu(s, A, d))),
                        dl)
                            break;
                        s = s.return
                    }
                    0 < q.length && (y = new g(y,N,null,e,S),
                    E.push({
                        event: y,
                        listeners: q
                    }))
                }
            }
            if ((t & 7) === 0) {
                l: {
                    if (y = l === "mouseover" || l === "pointerover",
                    g = l === "mouseout" || l === "pointerout",
                    y && e !== _c && (N = e.relatedTarget || e.fromElement) && (ma(N) || N[ra]))
                        break l;
                    if ((g || y) && (y = S.window === S ? S : (y = S.ownerDocument) ? y.defaultView || y.parentWindow : window,
                    g ? (N = e.relatedTarget || e.toElement,
                    g = v,
                    N = N ? ma(N) : null,
                    N !== null && (dl = I(N),
                    q = N.tag,
                    N !== dl || q !== 5 && q !== 27 && q !== 6) && (N = null)) : (g = null,
                    N = v),
                    g !== N)) {
                        if (q = ls,
                        A = "onMouseLeave",
                        r = "onMouseEnter",
                        s = "mouse",
                        (l === "pointerout" || l === "pointerover") && (q = es,
                        A = "onPointerLeave",
                        r = "onPointerEnter",
                        s = "pointer"),
                        dl = g == null ? y : nu(g),
                        d = N == null ? y : nu(N),
                        y = new q(A,s + "leave",g,e,S),
                        y.target = dl,
                        y.relatedTarget = d,
                        A = null,
                        ma(S) === v && (q = new q(r,s + "enter",N,e,S),
                        q.target = d,
                        q.relatedTarget = dl,
                        A = q),
                        dl = A,
                        g && N)
                            t: {
                                for (q = Sd,
                                r = g,
                                s = N,
                                d = 0,
                                A = r; A; A = q(A))
                                    d++;
                                A = 0;
                                for (var j = s; j; j = q(j))
                                    A++;
                                for (; 0 < d - A; )
                                    r = q(r),
                                    d--;
                                for (; 0 < A - d; )
                                    s = q(s),
                                    A--;
                                for (; d--; ) {
                                    if (r === s || s !== null && r === s.alternate) {
                                        q = r;
                                        break t
                                    }
                                    r = q(r),
                                    s = q(s)
                                }
                                q = null
                            }
                        else
                            q = null;
                        g !== null && Wo(E, y, g, q, !1),
                        N !== null && dl !== null && Wo(E, dl, N, q, !0)
                    }
                }
                l: {
                    if (y = v ? nu(v) : window,
                    g = y.nodeName && y.nodeName.toLowerCase(),
                    g === "select" || g === "input" && y.type === "file")
                        var el = os;
                    else if (fs(y))
                        if (rs)
                            el = Dm;
                        else {
                            el = Om;
                            var R = Mm
                        }
                    else
                        g = y.nodeName,
                        !g || g.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? v && pc(v.elementType) && (el = os) : el = Nm;
                    if (el && (el = el(l, v))) {
                        ss(E, el, e, S);
                        break l
                    }
                    R && R(l, y, v),
                    l === "focusout" && v && y.type === "number" && v.memoizedProps.value != null && Ec(y, "number", y.value)
                }
                switch (R = v ? nu(v) : window,
                l) {
                case "focusin":
                    (fs(R) || R.contentEditable === "true") && (Aa = R,
                    qc = v,
                    vu = null);
                    break;
                case "focusout":
                    vu = qc = Aa = null;
                    break;
                case "mousedown":
                    Gc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Gc = !1,
                    Ss(E, e, S);
                    break;
                case "selectionchange":
                    if (Um)
                        break;
                case "keydown":
                case "keyup":
                    Ss(E, e, S)
                }
                var V;
                if (Hc)
                    l: {
                        switch (l) {
                        case "compositionstart":
                            var $ = "onCompositionStart";
                            break l;
                        case "compositionend":
                            $ = "onCompositionEnd";
                            break l;
                        case "compositionupdate":
                            $ = "onCompositionUpdate";
                            break l
                        }
                        $ = void 0
                    }
                else
                    Ta ? cs(l, e) && ($ = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && ($ = "onCompositionStart");
                $ && (as && e.locale !== "ko" && (Ta || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && Ta && (V = If()) : (be = S,
                Oc = "value"in be ? be.value : be.textContent,
                Ta = !0)),
                R = Pn(v, $),
                0 < R.length && ($ = new ts($,l,null,e,S),
                E.push({
                    event: $,
                    listeners: R
                }),
                V ? $.data = V : (V = is(e),
                V !== null && ($.data = V)))),
                (V = Em ? pm(l, e) : _m(l, e)) && ($ = Pn(v, "onBeforeInput"),
                0 < $.length && (R = new ts("onBeforeInput","beforeinput",null,e,S),
                E.push({
                    event: R,
                    listeners: $
                }),
                R.data = V)),
                yd(E, l, v, e, S)
            }
            Jo(E, t)
        })
    }
    function Lu(l, t, e) {
        return {
            instance: l,
            listener: t,
            currentTarget: e
        }
    }
    function Pn(l, t) {
        for (var e = t + "Capture", a = []; l !== null; ) {
            var u = l
              , n = u.stateNode;
            if (u = u.tag,
            u !== 5 && u !== 26 && u !== 27 || n === null || (u = cu(l, e),
            u != null && a.unshift(Lu(l, u, n)),
            u = cu(l, t),
            u != null && a.push(Lu(l, u, n))),
            l.tag === 3)
                return a;
            l = l.return
        }
        return []
    }
    function Sd(l) {
        if (l === null)
            return null;
        do
            l = l.return;
        while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }
    function Wo(l, t, e, a, u) {
        for (var n = t._reactName, c = []; e !== null && e !== a; ) {
            var i = e
              , f = i.alternate
              , v = i.stateNode;
            if (i = i.tag,
            f !== null && f === a)
                break;
            i !== 5 && i !== 26 && i !== 27 || v === null || (f = v,
            u ? (v = cu(e, n),
            v != null && c.unshift(Lu(e, v, f))) : u || (v = cu(e, n),
            v != null && c.push(Lu(e, v, f)))),
            e = e.return
        }
        c.length !== 0 && l.push({
            event: t,
            listeners: c
        })
    }
    var Td = /\r\n?/g
      , Ad = /\u0000|\uFFFD/g;
    function ko(l) {
        return (typeof l == "string" ? l : "" + l).replace(Td, `
`).replace(Ad, "")
    }
    function $o(l, t) {
        return t = ko(t),
        ko(l) === t
    }
    function ml(l, t, e, a, u, n) {
        switch (e) {
        case "children":
            typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ga(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ga(l, "" + a);
            break;
        case "className":
            en(l, "class", a);
            break;
        case "tabIndex":
            en(l, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            en(l, e, a);
            break;
        case "style":
            kf(l, a, n);
            break;
        case "data":
            if (t !== "object") {
                en(l, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (t !== "a" || e !== "href")) {
                l.removeAttribute(e);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                l.removeAttribute(e);
                break
            }
            a = un("" + a),
            l.setAttribute(e, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof n == "function" && (e === "formAction" ? (t !== "input" && ml(l, t, "name", u.name, u, null),
                ml(l, t, "formEncType", u.formEncType, u, null),
                ml(l, t, "formMethod", u.formMethod, u, null),
                ml(l, t, "formTarget", u.formTarget, u, null)) : (ml(l, t, "encType", u.encType, u, null),
                ml(l, t, "method", u.method, u, null),
                ml(l, t, "target", u.target, u, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                l.removeAttribute(e);
                break
            }
            a = un("" + a),
            l.setAttribute(e, a);
            break;
        case "onClick":
            a != null && (l.onclick = Wt);
            break;
        case "onScroll":
            a != null && W("scroll", l);
            break;
        case "onScrollEnd":
            a != null && W("scrollend", l);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(h(61));
                if (e = a.__html,
                e != null) {
                    if (u.children != null)
                        throw Error(h(60));
                    l.innerHTML = e
                }
            }
            break;
        case "multiple":
            l.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            l.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                l.removeAttribute("xlink:href");
                break
            }
            e = un("" + a),
            l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
            break;
        case "capture":
        case "download":
            a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
            break;
        case "popover":
            W("beforetoggle", l),
            W("toggle", l),
            tn(l, "popover", a);
            break;
        case "xlinkActuate":
            wt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            wt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            wt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            wt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            wt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            wt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            wt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            wt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            wt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            tn(l, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = kr.get(e) || e,
            tn(l, e, a))
        }
    }
    function of(l, t, e, a, u, n) {
        switch (e) {
        case "style":
            kf(l, a, n);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(h(61));
                if (e = a.__html,
                e != null) {
                    if (u.children != null)
                        throw Error(h(60));
                    l.innerHTML = e
                }
            }
            break;
        case "children":
            typeof a == "string" ? ga(l, a) : (typeof a == "number" || typeof a == "bigint") && ga(l, "" + a);
            break;
        case "onScroll":
            a != null && W("scroll", l);
            break;
        case "onScrollEnd":
            a != null && W("scrollend", l);
            break;
        case "onClick":
            a != null && (l.onclick = Wt);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Yf.hasOwnProperty(e))
                l: {
                    if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"),
                    t = e.slice(2, u ? e.length - 7 : void 0),
                    n = l[it] || null,
                    n = n != null ? n[e] : null,
                    typeof n == "function" && l.removeEventListener(t, n, u),
                    typeof a == "function")) {
                        typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)),
                        l.addEventListener(t, a, u);
                        break l
                    }
                    e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : tn(l, e, a)
                }
        }
    }
    function $l(l, t, e) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            W("error", l),
            W("load", l);
            var a = !1, u = !1, n;
            for (n in e)
                if (e.hasOwnProperty(n)) {
                    var c = e[n];
                    if (c != null)
                        switch (n) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            u = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(h(137, t));
                        default:
                            ml(l, t, n, c, e, null)
                        }
                }
            u && ml(l, t, "srcSet", e.srcSet, e, null),
            a && ml(l, t, "src", e.src, e, null);
            return;
        case "input":
            W("invalid", l);
            var i = n = c = u = null
              , f = null
              , v = null;
            for (a in e)
                if (e.hasOwnProperty(a)) {
                    var S = e[a];
                    if (S != null)
                        switch (a) {
                        case "name":
                            u = S;
                            break;
                        case "type":
                            c = S;
                            break;
                        case "checked":
                            f = S;
                            break;
                        case "defaultChecked":
                            v = S;
                            break;
                        case "value":
                            n = S;
                            break;
                        case "defaultValue":
                            i = S;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (S != null)
                                throw Error(h(137, t));
                            break;
                        default:
                            ml(l, t, a, S, e, null)
                        }
                }
            Kf(l, n, i, f, v, c, u, !1);
            return;
        case "select":
            W("invalid", l),
            a = c = n = null;
            for (u in e)
                if (e.hasOwnProperty(u) && (i = e[u],
                i != null))
                    switch (u) {
                    case "value":
                        n = i;
                        break;
                    case "defaultValue":
                        c = i;
                        break;
                    case "multiple":
                        a = i;
                    default:
                        ml(l, t, u, i, e, null)
                    }
            t = n,
            e = c,
            l.multiple = !!a,
            t != null ? ha(l, !!a, t, !1) : e != null && ha(l, !!a, e, !0);
            return;
        case "textarea":
            W("invalid", l),
            n = u = a = null;
            for (c in e)
                if (e.hasOwnProperty(c) && (i = e[c],
                i != null))
                    switch (c) {
                    case "value":
                        a = i;
                        break;
                    case "defaultValue":
                        u = i;
                        break;
                    case "children":
                        n = i;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (i != null)
                            throw Error(h(91));
                        break;
                    default:
                        ml(l, t, c, i, e, null)
                    }
            wf(l, a, u, n);
            return;
        case "option":
            for (f in e)
                if (e.hasOwnProperty(f) && (a = e[f],
                a != null))
                    switch (f) {
                    case "selected":
                        l.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        ml(l, t, f, a, e, null)
                    }
            return;
        case "dialog":
            W("beforetoggle", l),
            W("toggle", l),
            W("cancel", l),
            W("close", l);
            break;
        case "iframe":
        case "object":
            W("load", l);
            break;
        case "video":
        case "audio":
            for (a = 0; a < Gu.length; a++)
                W(Gu[a], l);
            break;
        case "image":
            W("error", l),
            W("load", l);
            break;
        case "details":
            W("toggle", l);
            break;
        case "embed":
        case "source":
        case "link":
            W("error", l),
            W("load", l);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (v in e)
                if (e.hasOwnProperty(v) && (a = e[v],
                a != null))
                    switch (v) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(h(137, t));
                    default:
                        ml(l, t, v, a, e, null)
                    }
            return;
        default:
            if (pc(t)) {
                for (S in e)
                    e.hasOwnProperty(S) && (a = e[S],
                    a !== void 0 && of(l, t, S, a, e, void 0));
                return
            }
        }
        for (i in e)
            e.hasOwnProperty(i) && (a = e[i],
            a != null && ml(l, t, i, a, e, null))
    }
    function Ed(l, t, e, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var u = null
              , n = null
              , c = null
              , i = null
              , f = null
              , v = null
              , S = null;
            for (g in e) {
                var E = e[g];
                if (e.hasOwnProperty(g) && E != null)
                    switch (g) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        f = E;
                    default:
                        a.hasOwnProperty(g) || ml(l, t, g, null, a, E)
                    }
            }
            for (var y in a) {
                var g = a[y];
                if (E = e[y],
                a.hasOwnProperty(y) && (g != null || E != null))
                    switch (y) {
                    case "type":
                        n = g;
                        break;
                    case "name":
                        u = g;
                        break;
                    case "checked":
                        v = g;
                        break;
                    case "defaultChecked":
                        S = g;
                        break;
                    case "value":
                        c = g;
                        break;
                    case "defaultValue":
                        i = g;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (g != null)
                            throw Error(h(137, t));
                        break;
                    default:
                        g !== E && ml(l, t, y, g, a, E)
                    }
            }
            Ac(l, c, i, f, v, S, n, u);
            return;
        case "select":
            g = c = i = y = null;
            for (n in e)
                if (f = e[n],
                e.hasOwnProperty(n) && f != null)
                    switch (n) {
                    case "value":
                        break;
                    case "multiple":
                        g = f;
                    default:
                        a.hasOwnProperty(n) || ml(l, t, n, null, a, f)
                    }
            for (u in a)
                if (n = a[u],
                f = e[u],
                a.hasOwnProperty(u) && (n != null || f != null))
                    switch (u) {
                    case "value":
                        y = n;
                        break;
                    case "defaultValue":
                        i = n;
                        break;
                    case "multiple":
                        c = n;
                    default:
                        n !== f && ml(l, t, u, n, a, f)
                    }
            t = i,
            e = c,
            a = g,
            y != null ? ha(l, !!e, y, !1) : !!a != !!e && (t != null ? ha(l, !!e, t, !0) : ha(l, !!e, e ? [] : "", !1));
            return;
        case "textarea":
            g = y = null;
            for (i in e)
                if (u = e[i],
                e.hasOwnProperty(i) && u != null && !a.hasOwnProperty(i))
                    switch (i) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        ml(l, t, i, null, a, u)
                    }
            for (c in a)
                if (u = a[c],
                n = e[c],
                a.hasOwnProperty(c) && (u != null || n != null))
                    switch (c) {
                    case "value":
                        y = u;
                        break;
                    case "defaultValue":
                        g = u;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (u != null)
                            throw Error(h(91));
                        break;
                    default:
                        u !== n && ml(l, t, c, u, a, n)
                    }
            Jf(l, y, g);
            return;
        case "option":
            for (var N in e)
                if (y = e[N],
                e.hasOwnProperty(N) && y != null && !a.hasOwnProperty(N))
                    switch (N) {
                    case "selected":
                        l.selected = !1;
                        break;
                    default:
                        ml(l, t, N, null, a, y)
                    }
            for (f in a)
                if (y = a[f],
                g = e[f],
                a.hasOwnProperty(f) && y !== g && (y != null || g != null))
                    switch (f) {
                    case "selected":
                        l.selected = y && typeof y != "function" && typeof y != "symbol";
                        break;
                    default:
                        ml(l, t, f, y, a, g)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var q in e)
                y = e[q],
                e.hasOwnProperty(q) && y != null && !a.hasOwnProperty(q) && ml(l, t, q, null, a, y);
            for (v in a)
                if (y = a[v],
                g = e[v],
                a.hasOwnProperty(v) && y !== g && (y != null || g != null))
                    switch (v) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (y != null)
                            throw Error(h(137, t));
                        break;
                    default:
                        ml(l, t, v, y, a, g)
                    }
            return;
        default:
            if (pc(t)) {
                for (var dl in e)
                    y = e[dl],
                    e.hasOwnProperty(dl) && y !== void 0 && !a.hasOwnProperty(dl) && of(l, t, dl, void 0, a, y);
                for (S in a)
                    y = a[S],
                    g = e[S],
                    !a.hasOwnProperty(S) || y === g || y === void 0 && g === void 0 || of(l, t, S, y, a, g);
                return
            }
        }
        for (var r in e)
            y = e[r],
            e.hasOwnProperty(r) && y != null && !a.hasOwnProperty(r) && ml(l, t, r, null, a, y);
        for (E in a)
            y = a[E],
            g = e[E],
            !a.hasOwnProperty(E) || y === g || y == null && g == null || ml(l, t, E, y, a, g)
    }
    function Fo(l) {
        switch (l) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function pd() {
        if (typeof performance.getEntriesByType == "function") {
            for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
                var u = e[a]
                  , n = u.transferSize
                  , c = u.initiatorType
                  , i = u.duration;
                if (n && i && Fo(c)) {
                    for (c = 0,
                    i = u.responseEnd,
                    a += 1; a < e.length; a++) {
                        var f = e[a]
                          , v = f.startTime;
                        if (v > i)
                            break;
                        var S = f.transferSize
                          , E = f.initiatorType;
                        S && Fo(E) && (f = f.responseEnd,
                        c += S * (f < i ? 1 : (i - v) / (f - v)))
                    }
                    if (--a,
                    t += 8 * (n + c) / (u.duration / 1e3),
                    l++,
                    10 < l)
                        break
                }
            }
            if (0 < l)
                return t / l / 1e6
        }
        return navigator.connection && (l = navigator.connection.downlink,
        typeof l == "number") ? l : 5
    }
    var rf = null
      , mf = null;
    function lc(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }
    function Io(l) {
        switch (l) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Po(l, t) {
        if (l === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return l === 1 && t === "foreignObject" ? 0 : l
    }
    function df(l, t) {
        return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var vf = null;
    function _d() {
        var l = window.event;
        return l && l.type === "popstate" ? l === vf ? !1 : (vf = l,
        !0) : (vf = null,
        !1)
    }
    var lr = typeof setTimeout == "function" ? setTimeout : void 0
      , zd = typeof clearTimeout == "function" ? clearTimeout : void 0
      , tr = typeof Promise == "function" ? Promise : void 0
      , xd = typeof queueMicrotask == "function" ? queueMicrotask : typeof tr < "u" ? function(l) {
        return tr.resolve(null).then(l).catch(Md)
    }
    : lr;
    function Md(l) {
        setTimeout(function() {
            throw l
        })
    }
    function Ce(l) {
        return l === "head"
    }
    function er(l, t) {
        var e = t
          , a = 0;
        do {
            var u = e.nextSibling;
            if (l.removeChild(e),
            u && u.nodeType === 8)
                if (e = u.data,
                e === "/$" || e === "/&") {
                    if (a === 0) {
                        l.removeChild(u),
                        Wa(t);
                        return
                    }
                    a--
                } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
                    a++;
                else if (e === "html")
                    Yu(l.ownerDocument.documentElement);
                else if (e === "head") {
                    e = l.ownerDocument.head,
                    Yu(e);
                    for (var n = e.firstChild; n; ) {
                        var c = n.nextSibling
                          , i = n.nodeName;
                        n[uu] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n),
                        n = c
                    }
                } else
                    e === "body" && Yu(l.ownerDocument.body);
            e = u
        } while (e);
        Wa(t)
    }
    function ar(l, t) {
        var e = l;
        l = 0;
        do {
            var a = e.nextSibling;
            if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display,
            e.style.display = "none") : (e.style.display = e._stashedDisplay || "",
            e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue,
            e.nodeValue = "") : e.nodeValue = e._stashedText || ""),
            a && a.nodeType === 8)
                if (e = a.data,
                e === "/$") {
                    if (l === 0)
                        break;
                    l--
                } else
                    e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
            e = a
        } while (e)
    }
    function yf(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var e = t;
            switch (t = t.nextSibling,
            e.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                yf(e),
                Sc(e);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (e.rel.toLowerCase() === "stylesheet")
                    continue
            }
            l.removeChild(e)
        }
    }
    function Od(l, t, e, a) {
        for (; l.nodeType === 1; ) {
            var u = e;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
                    break
            } else if (a) {
                if (!l[uu])
                    switch (t) {
                    case "meta":
                        if (!l.hasAttribute("itemprop"))
                            break;
                        return l;
                    case "link":
                        if (n = l.getAttribute("rel"),
                        n === "stylesheet" && l.hasAttribute("data-precedence"))
                            break;
                        if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                            break;
                        return l;
                    case "style":
                        if (l.hasAttribute("data-precedence"))
                            break;
                        return l;
                    case "script":
                        if (n = l.getAttribute("src"),
                        (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                            break;
                        return l;
                    default:
                        return l
                    }
            } else if (t === "input" && l.type === "hidden") {
                var n = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && l.getAttribute("name") === n)
                    return l
            } else
                return l;
            if (l = jt(l.nextSibling),
            l === null)
                break
        }
        return null
    }
    function Nd(l, t, e) {
        if (t === "")
            return null;
        for (; l.nodeType !== 3; )
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = jt(l.nextSibling),
            l === null))
                return null;
        return l
    }
    function ur(l, t) {
        for (; l.nodeType !== 8; )
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = jt(l.nextSibling),
            l === null))
                return null;
        return l
    }
    function hf(l) {
        return l.data === "$?" || l.data === "$~"
    }
    function gf(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading"
    }
    function Dd(l, t) {
        var e = l.ownerDocument;
        if (l.data === "$~")
            l._reactRetry = t;
        else if (l.data !== "$?" || e.readyState !== "loading")
            t();
        else {
            var a = function() {
                t(),
                e.removeEventListener("DOMContentLoaded", a)
            };
            e.addEventListener("DOMContentLoaded", a),
            l._reactRetry = a
        }
    }
    function jt(l) {
        for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = l.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return l
    }
    var bf = null;
    function nr(l) {
        l = l.nextSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (e === "/$" || e === "/&") {
                    if (t === 0)
                        return jt(l.nextSibling);
                    t--
                } else
                    e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++
            }
            l = l.nextSibling
        }
        return null
    }
    function cr(l) {
        l = l.previousSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
                    if (t === 0)
                        return l;
                    t--
                } else
                    e !== "/$" && e !== "/&" || t++
            }
            l = l.previousSibling
        }
        return null
    }
    function ir(l, t, e) {
        switch (t = lc(e),
        l) {
        case "html":
            if (l = t.documentElement,
            !l)
                throw Error(h(452));
            return l;
        case "head":
            if (l = t.head,
            !l)
                throw Error(h(453));
            return l;
        case "body":
            if (l = t.body,
            !l)
                throw Error(h(454));
            return l;
        default:
            throw Error(h(451))
        }
    }
    function Yu(l) {
        for (var t = l.attributes; t.length; )
            l.removeAttributeNode(t[0]);
        Sc(l)
    }
    var Ct = new Map
      , fr = new Set;
    function tc(l) {
        return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
    }
    var oe = x.d;
    x.d = {
        f: Rd,
        r: Ud,
        D: Hd,
        C: jd,
        L: Cd,
        m: Bd,
        X: Gd,
        S: qd,
        M: Ld
    };
    function Rd() {
        var l = oe.f()
          , t = Jn();
        return l || t
    }
    function Ud(l) {
        var t = da(l);
        t !== null && t.tag === 5 && t.type === "form" ? _0(t) : oe.r(l)
    }
    var Ka = typeof document > "u" ? null : document;
    function sr(l, t, e) {
        var a = Ka;
        if (a && typeof t == "string" && t) {
            var u = Mt(t);
            u = 'link[rel="' + l + '"][href="' + u + '"]',
            typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
            fr.has(u) || (fr.add(u),
            l = {
                rel: l,
                crossOrigin: e,
                href: t
            },
            a.querySelector(u) === null && (t = a.createElement("link"),
            $l(t, "link", l),
            Ql(t),
            a.head.appendChild(t)))
        }
    }
    function Hd(l) {
        oe.D(l),
        sr("dns-prefetch", l, null)
    }
    function jd(l, t) {
        oe.C(l, t),
        sr("preconnect", l, t)
    }
    function Cd(l, t, e) {
        oe.L(l, t, e);
        var a = Ka;
        if (a && l && t) {
            var u = 'link[rel="preload"][as="' + Mt(t) + '"]';
            t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + Mt(e.imageSrcSet) + '"]',
            typeof e.imageSizes == "string" && (u += '[imagesizes="' + Mt(e.imageSizes) + '"]')) : u += '[href="' + Mt(l) + '"]';
            var n = u;
            switch (t) {
            case "style":
                n = Ja(l);
                break;
            case "script":
                n = wa(l)
            }
            Ct.has(n) || (l = B({
                rel: "preload",
                href: t === "image" && e && e.imageSrcSet ? void 0 : l,
                as: t
            }, e),
            Ct.set(n, l),
            a.querySelector(u) !== null || t === "style" && a.querySelector(Xu(n)) || t === "script" && a.querySelector(Qu(n)) || (t = a.createElement("link"),
            $l(t, "link", l),
            Ql(t),
            a.head.appendChild(t)))
        }
    }
    function Bd(l, t) {
        oe.m(l, t);
        var e = Ka;
        if (e && l) {
            var a = t && typeof t.as == "string" ? t.as : "script"
              , u = 'link[rel="modulepreload"][as="' + Mt(a) + '"][href="' + Mt(l) + '"]'
              , n = u;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                n = wa(l)
            }
            if (!Ct.has(n) && (l = B({
                rel: "modulepreload",
                href: l
            }, t),
            Ct.set(n, l),
            e.querySelector(u) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (e.querySelector(Qu(n)))
                        return
                }
                a = e.createElement("link"),
                $l(a, "link", l),
                Ql(a),
                e.head.appendChild(a)
            }
        }
    }
    function qd(l, t, e) {
        oe.S(l, t, e);
        var a = Ka;
        if (a && l) {
            var u = va(a).hoistableStyles
              , n = Ja(l);
            t = t || "default";
            var c = u.get(n);
            if (!c) {
                var i = {
                    loading: 0,
                    preload: null
                };
                if (c = a.querySelector(Xu(n)))
                    i.loading = 5;
                else {
                    l = B({
                        rel: "stylesheet",
                        href: l,
                        "data-precedence": t
                    }, e),
                    (e = Ct.get(n)) && Sf(l, e);
                    var f = c = a.createElement("link");
                    Ql(f),
                    $l(f, "link", l),
                    f._p = new Promise(function(v, S) {
                        f.onload = v,
                        f.onerror = S
                    }
                    ),
                    f.addEventListener("load", function() {
                        i.loading |= 1
                    }),
                    f.addEventListener("error", function() {
                        i.loading |= 2
                    }),
                    i.loading |= 4,
                    ec(c, t, a)
                }
                c = {
                    type: "stylesheet",
                    instance: c,
                    count: 1,
                    state: i
                },
                u.set(n, c)
            }
        }
    }
    function Gd(l, t) {
        oe.X(l, t);
        var e = Ka;
        if (e && l) {
            var a = va(e).hoistableScripts
              , u = wa(l)
              , n = a.get(u);
            n || (n = e.querySelector(Qu(u)),
            n || (l = B({
                src: l,
                async: !0
            }, t),
            (t = Ct.get(u)) && Tf(l, t),
            n = e.createElement("script"),
            Ql(n),
            $l(n, "link", l),
            e.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            a.set(u, n))
        }
    }
    function Ld(l, t) {
        oe.M(l, t);
        var e = Ka;
        if (e && l) {
            var a = va(e).hoistableScripts
              , u = wa(l)
              , n = a.get(u);
            n || (n = e.querySelector(Qu(u)),
            n || (l = B({
                src: l,
                async: !0,
                type: "module"
            }, t),
            (t = Ct.get(u)) && Tf(l, t),
            n = e.createElement("script"),
            Ql(n),
            $l(n, "link", l),
            e.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            a.set(u, n))
        }
    }
    function or(l, t, e, a) {
        var u = (u = Q.current) ? tc(u) : null;
        if (!u)
            throw Error(h(446));
        switch (l) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Ja(e.href),
            e = va(u).hoistableStyles,
            a = e.get(t),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            e.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                l = Ja(e.href);
                var n = va(u).hoistableStyles
                  , c = n.get(l);
                if (c || (u = u.ownerDocument || u,
                c = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                n.set(l, c),
                (n = u.querySelector(Xu(l))) && !n._p && (c.instance = n,
                c.state.loading = 5),
                Ct.has(l) || (e = {
                    rel: "preload",
                    as: "style",
                    href: e.href,
                    crossOrigin: e.crossOrigin,
                    integrity: e.integrity,
                    media: e.media,
                    hrefLang: e.hrefLang,
                    referrerPolicy: e.referrerPolicy
                },
                Ct.set(l, e),
                n || Yd(u, l, e, c.state))),
                t && a === null)
                    throw Error(h(528, ""));
                return c
            }
            if (t && a !== null)
                throw Error(h(529, ""));
            return null;
        case "script":
            return t = e.async,
            e = e.src,
            typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = wa(e),
            e = va(u).hoistableScripts,
            a = e.get(t),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            e.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(h(444, l))
        }
    }
    function Ja(l) {
        return 'href="' + Mt(l) + '"'
    }
    function Xu(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }
    function rr(l) {
        return B({}, l, {
            "data-precedence": l.precedence,
            precedence: null
        })
    }
    function Yd(l, t, e, a) {
        l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"),
        a.preload = t,
        t.addEventListener("load", function() {
            return a.loading |= 1
        }),
        t.addEventListener("error", function() {
            return a.loading |= 2
        }),
        $l(t, "link", e),
        Ql(t),
        l.head.appendChild(t))
    }
    function wa(l) {
        return '[src="' + Mt(l) + '"]'
    }
    function Qu(l) {
        return "script[async]" + l
    }
    function mr(l, t, e) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var a = l.querySelector('style[data-href~="' + Mt(e.href) + '"]');
                if (a)
                    return t.instance = a,
                    Ql(a),
                    a;
                var u = B({}, e, {
                    "data-href": e.href,
                    "data-precedence": e.precedence,
                    href: null,
                    precedence: null
                });
                return a = (l.ownerDocument || l).createElement("style"),
                Ql(a),
                $l(a, "style", u),
                ec(a, e.precedence, l),
                t.instance = a;
            case "stylesheet":
                u = Ja(e.href);
                var n = l.querySelector(Xu(u));
                if (n)
                    return t.state.loading |= 4,
                    t.instance = n,
                    Ql(n),
                    n;
                a = rr(e),
                (u = Ct.get(u)) && Sf(a, u),
                n = (l.ownerDocument || l).createElement("link"),
                Ql(n);
                var c = n;
                return c._p = new Promise(function(i, f) {
                    c.onload = i,
                    c.onerror = f
                }
                ),
                $l(n, "link", a),
                t.state.loading |= 4,
                ec(n, e.precedence, l),
                t.instance = n;
            case "script":
                return n = wa(e.src),
                (u = l.querySelector(Qu(n))) ? (t.instance = u,
                Ql(u),
                u) : (a = e,
                (u = Ct.get(n)) && (a = B({}, e),
                Tf(a, u)),
                l = l.ownerDocument || l,
                u = l.createElement("script"),
                Ql(u),
                $l(u, "link", a),
                l.head.appendChild(u),
                t.instance = u);
            case "void":
                return null;
            default:
                throw Error(h(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance,
            t.state.loading |= 4,
            ec(a, e.precedence, l));
        return t.instance
    }
    function ec(l, t, e) {
        for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, c = 0; c < a.length; c++) {
            var i = a[c];
            if (i.dataset.precedence === t)
                n = i;
            else if (n !== u)
                break
        }
        n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e,
        t.insertBefore(l, t.firstChild))
    }
    function Sf(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.title == null && (l.title = t.title)
    }
    function Tf(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.integrity == null && (l.integrity = t.integrity)
    }
    var ac = null;
    function dr(l, t, e) {
        if (ac === null) {
            var a = new Map
              , u = ac = new Map;
            u.set(e, a)
        } else
            u = ac,
            a = u.get(e),
            a || (a = new Map,
            u.set(e, a));
        if (a.has(l))
            return a;
        for (a.set(l, null),
        e = e.getElementsByTagName(l),
        u = 0; u < e.length; u++) {
            var n = e[u];
            if (!(n[uu] || n[Jl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var c = n.getAttribute(t) || "";
                c = l + c;
                var i = a.get(c);
                i ? i.push(n) : a.set(c, [n])
            }
        }
        return a
    }
    function vr(l, t, e) {
        l = l.ownerDocument || l,
        l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null)
    }
    function Xd(l, t, e) {
        if (e === 1 || t.itemProp != null)
            return !1;
        switch (l) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return l = t.disabled,
                typeof t.precedence == "string" && l == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function yr(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }
    function Qd(l, t, e, a) {
        if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var u = Ja(a.href)
                  , n = t.querySelector(Xu(u));
                if (n) {
                    t = n._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++,
                    l = uc.bind(l),
                    t.then(l, l)),
                    e.state.loading |= 4,
                    e.instance = n,
                    Ql(n);
                    return
                }
                n = t.ownerDocument || t,
                a = rr(a),
                (u = Ct.get(u)) && Sf(a, u),
                n = n.createElement("link"),
                Ql(n);
                var c = n;
                c._p = new Promise(function(i, f) {
                    c.onload = i,
                    c.onerror = f
                }
                ),
                $l(n, "link", a),
                e.instance = n
            }
            l.stylesheets === null && (l.stylesheets = new Map),
            l.stylesheets.set(e, t),
            (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++,
            e = uc.bind(l),
            t.addEventListener("load", e),
            t.addEventListener("error", e))
        }
    }
    var Af = 0;
    function Vd(l, t) {
        return l.stylesheets && l.count === 0 && cc(l, l.stylesheets),
        0 < l.count || 0 < l.imgCount ? function(e) {
            var a = setTimeout(function() {
                if (l.stylesheets && cc(l, l.stylesheets),
                l.unsuspend) {
                    var n = l.unsuspend;
                    l.unsuspend = null,
                    n()
                }
            }, 6e4 + t);
            0 < l.imgBytes && Af === 0 && (Af = 62500 * pd());
            var u = setTimeout(function() {
                if (l.waitingForImages = !1,
                l.count === 0 && (l.stylesheets && cc(l, l.stylesheets),
                l.unsuspend)) {
                    var n = l.unsuspend;
                    l.unsuspend = null,
                    n()
                }
            }, (l.imgBytes > Af ? 50 : 800) + t);
            return l.unsuspend = e,
            function() {
                l.unsuspend = null,
                clearTimeout(a),
                clearTimeout(u)
            }
        }
        : null
    }
    function uc() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                cc(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                this.unsuspend = null,
                l()
            }
        }
    }
    var nc = null;
    function cc(l, t) {
        l.stylesheets = null,
        l.unsuspend !== null && (l.count++,
        nc = new Map,
        t.forEach(Zd, l),
        nc = null,
        uc.call(l))
    }
    function Zd(l, t) {
        if (!(t.state.loading & 4)) {
            var e = nc.get(l);
            if (e)
                var a = e.get(null);
            else {
                e = new Map,
                nc.set(l, e);
                for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
                    var c = u[n];
                    (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c),
                    a = c)
                }
                a && e.set(null, a)
            }
            u = t.instance,
            c = u.getAttribute("data-precedence"),
            n = e.get(c) || a,
            n === a && e.set(null, u),
            e.set(c, u),
            this.count++,
            a = uc.bind(this),
            u.addEventListener("load", a),
            u.addEventListener("error", a),
            n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l,
            l.insertBefore(u, l.firstChild)),
            t.state.loading |= 4
        }
    }
    var Vu = {
        $$typeof: ql,
        Provider: null,
        Consumer: null,
        _currentValue: C,
        _currentValue2: C,
        _threadCount: 0
    };
    function Kd(l, t, e, a, u, n, c, i, f) {
        this.tag = 1,
        this.containerInfo = l,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = qt(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = qt(0),
        this.hiddenUpdates = qt(null),
        this.identifierPrefix = a,
        this.onUncaughtError = u,
        this.onCaughtError = n,
        this.onRecoverableError = c,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = f,
        this.incompleteTransitions = new Map
    }
    function hr(l, t, e, a, u, n, c, i, f, v, S, E) {
        return l = new Kd(l,t,e,c,f,v,S,E,i),
        t = 1,
        n === !0 && (t |= 24),
        n = gt(3, null, null, t),
        l.current = n,
        n.stateNode = l,
        t = Pc(),
        t.refCount++,
        l.pooledCache = t,
        t.refCount++,
        n.memoizedState = {
            element: a,
            isDehydrated: e,
            cache: t
        },
        ai(n),
        l
    }
    function gr(l) {
        return l ? (l = _a,
        l) : _a
    }
    function br(l, t, e, a, u, n) {
        u = gr(u),
        a.context === null ? a.context = u : a.pendingContext = u,
        a = _e(t),
        a.payload = {
            element: e
        },
        n = n === void 0 ? null : n,
        n !== null && (a.callback = n),
        e = ze(l, a, t),
        e !== null && (dt(e, l, t),
        Au(e, l, t))
    }
    function Sr(l, t) {
        if (l = l.memoizedState,
        l !== null && l.dehydrated !== null) {
            var e = l.retryLane;
            l.retryLane = e !== 0 && e < t ? e : t
        }
    }
    function Ef(l, t) {
        Sr(l, t),
        (l = l.alternate) && Sr(l, t)
    }
    function Tr(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = ke(l, 67108864);
            t !== null && dt(t, l, 67108864),
            Ef(l, 67108864)
        }
    }
    function Ar(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = Et();
            t = eu(t);
            var e = ke(l, t);
            e !== null && dt(e, l, t),
            Ef(l, t)
        }
    }
    var ic = !0;
    function Jd(l, t, e, a) {
        var u = T.T;
        T.T = null;
        var n = x.p;
        try {
            x.p = 2,
            pf(l, t, e, a)
        } finally {
            x.p = n,
            T.T = u
        }
    }
    function wd(l, t, e, a) {
        var u = T.T;
        T.T = null;
        var n = x.p;
        try {
            x.p = 8,
            pf(l, t, e, a)
        } finally {
            x.p = n,
            T.T = u
        }
    }
    function pf(l, t, e, a) {
        if (ic) {
            var u = _f(a);
            if (u === null)
                sf(l, t, a, fc, e),
                pr(l, a);
            else if (kd(u, l, t, e, a))
                a.stopPropagation();
            else if (pr(l, a),
            t & 4 && -1 < Wd.indexOf(l)) {
                for (; u !== null; ) {
                    var n = da(u);
                    if (n !== null)
                        switch (n.tag) {
                        case 3:
                            if (n = n.stateNode,
                            n.current.memoizedState.isDehydrated) {
                                var c = cl(n.pendingLanes);
                                if (c !== 0) {
                                    var i = n;
                                    for (i.pendingLanes |= 2,
                                    i.entangledLanes |= 2; c; ) {
                                        var f = 1 << 31 - Il(c);
                                        i.entanglements[1] |= f,
                                        c &= ~f
                                    }
                                    Kt(n),
                                    (nl & 6) === 0 && (Zn = Dl() + 500,
                                    qu(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            i = ke(n, 2),
                            i !== null && dt(i, n, 2),
                            Jn(),
                            Ef(n, 2)
                        }
                    if (n = _f(a),
                    n === null && sf(l, t, a, fc, e),
                    n === u)
                        break;
                    u = n
                }
                u !== null && a.stopPropagation()
            } else
                sf(l, t, a, null, e)
        }
    }
    function _f(l) {
        return l = zc(l),
        zf(l)
    }
    var fc = null;
    function zf(l) {
        if (fc = null,
        l = ma(l),
        l !== null) {
            var t = I(l);
            if (t === null)
                l = null;
            else {
                var e = t.tag;
                if (e === 13) {
                    if (l = _l(t),
                    l !== null)
                        return l;
                    l = null
                } else if (e === 31) {
                    if (l = Yl(t),
                    l !== null)
                        return l;
                    l = null
                } else if (e === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null
                } else
                    t !== l && (l = null)
            }
        }
        return fc = l,
        null
    }
    function Er(l) {
        switch (l) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (vc()) {
            case Iu:
                return 2;
            case Ia:
                return 8;
            case sa:
            case yc:
                return 32;
            case Pa:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var xf = !1
      , Be = null
      , qe = null
      , Ge = null
      , Zu = new Map
      , Ku = new Map
      , Le = []
      , Wd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function pr(l, t) {
        switch (l) {
        case "focusin":
        case "focusout":
            Be = null;
            break;
        case "dragenter":
        case "dragleave":
            qe = null;
            break;
        case "mouseover":
        case "mouseout":
            Ge = null;
            break;
        case "pointerover":
        case "pointerout":
            Zu.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Ku.delete(t.pointerId)
        }
    }
    function Ju(l, t, e, a, u, n) {
        return l === null || l.nativeEvent !== n ? (l = {
            blockedOn: t,
            domEventName: e,
            eventSystemFlags: a,
            nativeEvent: n,
            targetContainers: [u]
        },
        t !== null && (t = da(t),
        t !== null && Tr(t)),
        l) : (l.eventSystemFlags |= a,
        t = l.targetContainers,
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l)
    }
    function kd(l, t, e, a, u) {
        switch (t) {
        case "focusin":
            return Be = Ju(Be, l, t, e, a, u),
            !0;
        case "dragenter":
            return qe = Ju(qe, l, t, e, a, u),
            !0;
        case "mouseover":
            return Ge = Ju(Ge, l, t, e, a, u),
            !0;
        case "pointerover":
            var n = u.pointerId;
            return Zu.set(n, Ju(Zu.get(n) || null, l, t, e, a, u)),
            !0;
        case "gotpointercapture":
            return n = u.pointerId,
            Ku.set(n, Ju(Ku.get(n) || null, l, t, e, a, u)),
            !0
        }
        return !1
    }
    function _r(l) {
        var t = ma(l.target);
        if (t !== null) {
            var e = I(t);
            if (e !== null) {
                if (t = e.tag,
                t === 13) {
                    if (t = _l(e),
                    t !== null) {
                        l.blockedOn = t,
                        qf(l.priority, function() {
                            Ar(e)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = Yl(e),
                    t !== null) {
                        l.blockedOn = t,
                        qf(l.priority, function() {
                            Ar(e)
                        });
                        return
                    }
                } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                    l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                    return
                }
            }
        }
        l.blockedOn = null
    }
    function sc(l) {
        if (l.blockedOn !== null)
            return !1;
        for (var t = l.targetContainers; 0 < t.length; ) {
            var e = _f(l.nativeEvent);
            if (e === null) {
                e = l.nativeEvent;
                var a = new e.constructor(e.type,e);
                _c = a,
                e.target.dispatchEvent(a),
                _c = null
            } else
                return t = da(e),
                t !== null && Tr(t),
                l.blockedOn = e,
                !1;
            t.shift()
        }
        return !0
    }
    function zr(l, t, e) {
        sc(l) && e.delete(t)
    }
    function $d() {
        xf = !1,
        Be !== null && sc(Be) && (Be = null),
        qe !== null && sc(qe) && (qe = null),
        Ge !== null && sc(Ge) && (Ge = null),
        Zu.forEach(zr),
        Ku.forEach(zr)
    }
    function oc(l, t) {
        l.blockedOn === t && (l.blockedOn = null,
        xf || (xf = !0,
        z.unstable_scheduleCallback(z.unstable_NormalPriority, $d)))
    }
    var rc = null;
    function xr(l) {
        rc !== l && (rc = l,
        z.unstable_scheduleCallback(z.unstable_NormalPriority, function() {
            rc === l && (rc = null);
            for (var t = 0; t < l.length; t += 3) {
                var e = l[t]
                  , a = l[t + 1]
                  , u = l[t + 2];
                if (typeof a != "function") {
                    if (zf(a || e) === null)
                        continue;
                    break
                }
                var n = da(e);
                n !== null && (l.splice(t, 3),
                t -= 3,
                pi(n, {
                    pending: !0,
                    data: u,
                    method: e.method,
                    action: a
                }, a, u))
            }
        }))
    }
    function Wa(l) {
        function t(f) {
            return oc(f, l)
        }
        Be !== null && oc(Be, l),
        qe !== null && oc(qe, l),
        Ge !== null && oc(Ge, l),
        Zu.forEach(t),
        Ku.forEach(t);
        for (var e = 0; e < Le.length; e++) {
            var a = Le[e];
            a.blockedOn === l && (a.blockedOn = null)
        }
        for (; 0 < Le.length && (e = Le[0],
        e.blockedOn === null); )
            _r(e),
            e.blockedOn === null && Le.shift();
        if (e = (l.ownerDocument || l).$$reactFormReplay,
        e != null)
            for (a = 0; a < e.length; a += 3) {
                var u = e[a]
                  , n = e[a + 1]
                  , c = u[it] || null;
                if (typeof n == "function")
                    c || xr(e);
                else if (c) {
                    var i = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (u = n,
                        c = n[it] || null)
                            i = c.formAction;
                        else if (zf(u) !== null)
                            continue
                    } else
                        i = c.action;
                    typeof i == "function" ? e[a + 1] = i : (e.splice(a, 3),
                    a -= 3),
                    xr(e)
                }
            }
    }
    function Mr() {
        function l(n) {
            n.canIntercept && n.info === "react-transition" && n.intercept({
                handler: function() {
                    return new Promise(function(c) {
                        return u = c
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            u !== null && (u(),
            u = null),
            a || setTimeout(e, 20)
        }
        function e() {
            if (!a && !navigation.transition) {
                var n = navigation.currentEntry;
                n && n.url != null && navigation.navigate(n.url, {
                    state: n.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var a = !1
              , u = null;
            return navigation.addEventListener("navigate", l),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(e, 100),
            function() {
                a = !0,
                navigation.removeEventListener("navigate", l),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                u !== null && (u(),
                u = null)
            }
        }
    }
    function Mf(l) {
        this._internalRoot = l
    }
    mc.prototype.render = Mf.prototype.render = function(l) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(h(409));
        var e = t.current
          , a = Et();
        br(e, a, l, t, null, null)
    }
    ,
    mc.prototype.unmount = Mf.prototype.unmount = function() {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            br(l.current, 2, null, l, null, null),
            Jn(),
            t[ra] = null
        }
    }
    ;
    function mc(l) {
        this._internalRoot = l
    }
    mc.prototype.unstable_scheduleHydration = function(l) {
        if (l) {
            var t = au();
            l = {
                blockedOn: null,
                target: l,
                priority: t
            };
            for (var e = 0; e < Le.length && t !== 0 && t < Le[e].priority; e++)
                ;
            Le.splice(e, 0, l),
            e === 0 && _r(l)
        }
    }
    ;
    var Or = ol.version;
    if (Or !== "19.2.4")
        throw Error(h(527, Or, "19.2.4"));
    x.findDOMNode = function(l) {
        var t = l._reactInternals;
        if (t === void 0)
            throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","),
            Error(h(268, l)));
        return l = _(t),
        l = l !== null ? ll(l) : null,
        l = l === null ? null : l.stateNode,
        l
    }
    ;
    var Fd = {
        bundleType: 0,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: T,
        reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var dc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!dc.isDisabled && dc.supportsFiber)
            try {
                Qe = dc.inject(Fd),
                et = dc
            } catch {}
    }
    return Wu.createRoot = function(l, t) {
        if (!G(l))
            throw Error(h(299));
        var e = !1
          , a = ""
          , u = j0
          , n = C0
          , c = B0;
        return t != null && (t.unstable_strictMode === !0 && (e = !0),
        t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
        t.onCaughtError !== void 0 && (n = t.onCaughtError),
        t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        t = hr(l, 1, !1, null, null, e, a, null, u, n, c, Mr),
        l[ra] = t.current,
        ff(l),
        new Mf(t)
    }
    ,
    Wu.hydrateRoot = function(l, t, e) {
        if (!G(l))
            throw Error(h(299));
        var a = !1
          , u = ""
          , n = j0
          , c = C0
          , i = B0
          , f = null;
        return e != null && (e.unstable_strictMode === !0 && (a = !0),
        e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
        e.onCaughtError !== void 0 && (c = e.onCaughtError),
        e.onRecoverableError !== void 0 && (i = e.onRecoverableError),
        e.formState !== void 0 && (f = e.formState)),
        t = hr(l, 1, !0, t, e ?? null, a, u, f, n, c, i, Mr),
        t.context = gr(null),
        e = t.current,
        a = Et(),
        a = eu(a),
        u = _e(a),
        u.callback = null,
        ze(e, u, a),
        e = a,
        t.current.lanes = e,
        Ve(t, e),
        Kt(t),
        l[ra] = t.current,
        ff(l),
        new mc(t)
    }
    ,
    Wu.version = "19.2.4",
    Wu
}
var Gr;
function fv() {
    if (Gr)
        return Df.exports;
    Gr = 1;
    function z() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z)
            } catch (ol) {
                console.error(ol)
            }
    }
    return z(),
    Df.exports = iv(),
    Df.exports
}
var sv = fv();
const ov = Yr(sv);
var jf = (z => (z.MAIN = "MAIN",
z.NEW_GAME = "NEW_GAME",
z.CONTINUE = "CONTINUE",
z.OPTIONS = "OPTIONS",
z))(jf || {});
const Cf = {
    GUEST_BEDROOM: {
        id: "GUEST_BEDROOM",
        name: "Guest Bedroom",
        x: 70,
        y: 320,
        connections: ["HALL_GB_H"]
    },
    HALL_GB_H: {
        id: "HALL_GB_H",
        name: "Main Hall A",
        x: 70,
        y: 220,
        connections: ["GUEST_BEDROOM", "HALLWAY", "HALL_GB_B"]
    },
    HALL_GB_B: {
        id: "HALL_GB_B",
        name: "Bathroom Hall",
        x: 200,
        y: 220,
        connections: ["HALL_GB_H", "BATHROOM"]
    },
    BATHROOM: {
        id: "BATHROOM",
        name: "Bathroom",
        x: 330,
        y: 220,
        connections: ["HALL_GB_B"]
    },
    HALLWAY: {
        id: "HALLWAY",
        name: "Hallway",
        x: 70,
        y: 120,
        connections: ["HALL_GB_H", "HALL_H_LR"]
    },
    HALL_H_LR: {
        id: "HALL_H_LR",
        name: "Main Hall B",
        x: 200,
        y: 120,
        connections: ["HALLWAY", "LIVING_ROOM"]
    },
    LIVING_ROOM: {
        id: "LIVING_ROOM",
        name: "Living Room",
        x: 330,
        y: 120,
        connections: ["HALL_H_LR", "HALL_LR_K", "HALL_LR_MB"]
    },
    HALL_LR_K: {
        id: "HALL_LR_K",
        name: "Kitchen Hall",
        x: 330,
        y: 60,
        connections: ["LIVING_ROOM", "KITCHEN"]
    },
    KITCHEN: {
        id: "KITCHEN",
        name: "Kitchen",
        x: 420,
        y: 60,
        connections: ["HALL_LR_K"]
    },
    HALL_LR_MB: {
        id: "HALL_LR_MB",
        name: "Suite Hall",
        x: 420,
        y: 120,
        connections: ["LIVING_ROOM", "MAIN_BEDROOM"]
    },
    MAIN_BEDROOM: {
        id: "MAIN_BEDROOM",
        name: "Main Bedroom",
        x: 420,
        y: 210,
        connections: ["HALL_LR_MB"]
    }
}
  , ku = Cf
  , Lr = ["sunibun shoved you in a locker", "sunibun deleted twisted", "sunibun kissed you with a brick", "sunibun banned you from existence", "sunibun forgot how to code and you glitched out"]
  , rv = () => {
    var Pu, ln;
    const [z,ol] = Z.useState("MENU")
      , [P,h] = Z.useState({
        x: .5,
        y: .5
    })
      , [G,I] = Z.useState(!1)
      , [_l,Yl] = Z.useState(!1)
      , [H,_] = Z.useState("")
      , [ll,B] = Z.useState(!1)
      , [vl,lt] = Z.useState(50)
      , [yl,Xl] = Z.useState(0)
      , [Fl,Zl] = Z.useState("MAIN_BEDROOM")
      , [Bt,ql] = Z.useState(0)
      , [El,tt] = Z.useState(null)
      , [Kl,K] = Z.useState(0)
      , [Gl,ut] = Z.useState(!1)
      , [re,vt] = Z.useState(0)
      , [pl,Jt] = Z.useState("MAIN_BEDROOM")
      , [pt,nt] = Z.useState(!1)
      , [T,x] = Z.useState(0)
      , [C,ul] = Z.useState(null)
      , [il,o] = Z.useState(null)
      , [p,M] = Z.useState(0)
      , [D,Y] = Z.useState(0)
      , [Q,J] = Z.useState(!1)
      , [Tl,hl] = Z.useState(0)
      , [me,de] = Z.useState("")
      , [fa,$u] = Z.useState("")
      , [_t,ve] = Z.useState(!1)
      , ka = (.5 - P.x) * 20
      , Xe = Fl === "HALL_GB_H" ? 2 : (Pu = ku.HALL_GB_H) != null && Pu.connections.includes(Fl) ? 1 : 0
      , Nl = Z.useRef(null)
      , zt = Z.useRef(null)
      , ye = Z.useRef(null)
      , $a = () => {
        Nl.current || (Nl.current = new (window.AudioContext || window.webkitAudioContext))
    }
      , Fu = () => {
        ol("MENU"),
        I(!1),
        Xl(0),
        Zl("MAIN_BEDROOM"),
        ql(0),
        K(0),
        ut(!1),
        J(!1),
        hl(0),
        tt(null),
        Pa(),
        zt.current || Ia()
    }
      , Fa = () => {
        if (!Nl.current)
            return;
        const m = Nl.current
          , O = m.createOscillator()
          , U = m.createGain();
        O.type = "square",
        O.frequency.setValueAtTime(150, m.currentTime),
        O.frequency.exponentialRampToValueAtTime(40, m.currentTime + .1),
        U.gain.setValueAtTime(.05, m.currentTime),
        U.gain.exponentialRampToValueAtTime(.001, m.currentTime + .1),
        O.connect(U),
        U.connect(m.destination),
        O.start(),
        O.stop(m.currentTime + .1)
    }
      , Dl = () => {
        if (!Nl.current)
            return;
        const m = Nl.current
          , O = m.createOscillator()
          , U = m.createGain();
        O.type = "sawtooth",
        O.frequency.setValueAtTime(80, m.currentTime),
        O.frequency.linearRampToValueAtTime(20, m.currentTime + .2),
        U.gain.setValueAtTime(.3, m.currentTime),
        U.gain.exponentialRampToValueAtTime(.001, m.currentTime + .2),
        O.connect(U),
        U.connect(m.destination),
        O.start(),
        O.stop(m.currentTime + .2)
    }
      , vc = () => {
        if (!Nl.current)
            return;
        const m = Nl.current
          , O = m.createOscillator()
          , U = m.createGain();
        O.type = "sawtooth",
        O.frequency.setValueAtTime(120, m.currentTime),
        O.frequency.setValueAtTime(90, m.currentTime + .1),
        O.frequency.setValueAtTime(60, m.currentTime + .2),
        U.gain.setValueAtTime(.2, m.currentTime),
        U.gain.linearRampToValueAtTime(.001, m.currentTime + .5),
        O.connect(U),
        U.connect(m.destination),
        O.start(),
        O.stop(m.currentTime + .5)
    }
      , Iu = () => {
        if (!Nl.current)
            return;
        const m = Nl.current
          , O = 1.5
          , U = m.createGain()
          , tl = m.createOscillator();
        tl.type = "sine",
        tl.frequency.setValueAtTime(45, m.currentTime);
        const cl = m.createOscillator()
          , zl = m.createGain();
        cl.frequency.value = 12,
        zl.gain.value = .5,
        U.gain.setValueAtTime(0, m.currentTime),
        U.gain.linearRampToValueAtTime(.08, m.currentTime + .1),
        U.gain.linearRampToValueAtTime(0, m.currentTime + O),
        cl.connect(zl),
        zl.connect(U.gain),
        tl.connect(U),
        U.connect(m.destination),
        tl.start(),
        cl.start(),
        tl.stop(m.currentTime + O),
        cl.stop(m.currentTime + O)
    }
      , Ia = () => {
        if (!Nl.current)
            return;
        const m = Nl.current
          , O = m.createGain();
        O.gain.setValueAtTime(0, m.currentTime),
        O.gain.linearRampToValueAtTime(.15, m.currentTime + 2);
        const U = m.createOscillator();
        U.type = "sawtooth",
        U.frequency.setValueAtTime(55, m.currentTime);
        const tl = m.createOscillator();
        tl.type = "square",
        tl.frequency.setValueAtTime(55.5, m.currentTime);
        const cl = m.createBiquadFilter();
        cl.type = "lowpass",
        cl.frequency.setValueAtTime(200, m.currentTime);
        const zl = m.createOscillator()
          , xl = m.createGain();
        zl.frequency.value = .1,
        xl.gain.value = 100,
        zl.connect(xl),
        xl.connect(cl.frequency),
        zl.start(),
        U.connect(cl),
        tl.connect(cl),
        cl.connect(O),
        O.connect(m.destination),
        U.start(),
        tl.start(),
        zt.current = O
    }
      , sa = () => {
        zt.current && (zt.current.gain.exponentialRampToValueAtTime(.001, Nl.current.currentTime + 1),
        setTimeout( () => {
            zt.current && (zt.current.disconnect(),
            zt.current = null)
        }
        , 1100))
    }
      , yc = () => {
        if (!Nl.current)
            return;
        const m = Nl.current
          , O = m.createGain();
        O.gain.setValueAtTime(0, m.currentTime),
        O.gain.linearRampToValueAtTime(.1, m.currentTime + 3);
        const U = m.sampleRate * 2
          , tl = m.createBuffer(1, U, m.sampleRate)
          , cl = tl.getChannelData(0);
        for (let qt = 0; qt < U; qt++)
            cl[qt] = Math.random() * 2 - 1;
        const zl = m.createBufferSource();
        zl.buffer = tl,
        zl.loop = !0;
        const xl = m.createBiquadFilter();
        xl.type = "bandpass",
        xl.frequency.value = 400,
        xl.Q.value = 1;
        const ct = m.createOscillator();
        ct.type = "sine",
        ct.frequency.value = 60;
        const yt = m.createGain();
        yt.gain.value = .05,
        zl.connect(xl),
        xl.connect(O),
        ct.connect(yt),
        yt.connect(O),
        O.connect(m.destination),
        zl.start(),
        ct.start(),
        ye.current = O
    }
      , Pa = () => {
        ye.current && (ye.current.gain.linearRampToValueAtTime(0, Nl.current.currentTime + .5),
        ye.current = null)
    }
      , hc = () => {
        if (!Nl.current)
            return;
        const m = Nl.current
          , O = 1.2
          , U = m.createOscillator()
          , tl = m.createGain();
        U.type = "sawtooth",
        U.frequency.setValueAtTime(100, m.currentTime),
        U.frequency.exponentialRampToValueAtTime(1200, m.currentTime + .1),
        U.frequency.exponentialRampToValueAtTime(50, m.currentTime + O),
        tl.gain.setValueAtTime(.5, m.currentTime),
        tl.gain.exponentialRampToValueAtTime(.01, m.currentTime + O);
        const cl = m.sampleRate * O
          , zl = m.createBuffer(1, cl, m.sampleRate)
          , xl = zl.getChannelData(0);
        for (let Ze = 0; Ze < cl; Ze++)
            xl[Ze] = Math.random() * 2 - 1;
        const ct = m.createBufferSource();
        ct.buffer = zl;
        const yt = m.createGain();
        yt.gain.setValueAtTime(.3, m.currentTime),
        yt.gain.exponentialRampToValueAtTime(.01, m.currentTime + O);
        const qt = m.createWaveShaper()
          , Ve = Ze => {
            const lu = Ze
              , oa = 44100
              , tu = new Float32Array(oa)
              , eu = Math.PI / 180;
            for (let he = 0; he < oa; ++he) {
                const au = he * 2 / oa - 1;
                tu[he] = (3 + lu) * au * 20 * eu / (Math.PI + lu * Math.abs(au))
            }
            return tu
        }
        ;
        qt.curve = Ve(400),
        U.connect(qt),
        qt.connect(tl),
        ct.connect(yt),
        tl.connect(m.destination),
        yt.connect(m.destination),
        U.start(),
        ct.start(),
        U.stop(m.currentTime + O),
        ct.stop(m.currentTime + O)
    }
    ;
    Z.useEffect( () => {
        if (z !== "GAME_SCREEN" || !G)
            return;
        const m = setInterval( () => {
            Xl(O => {
                const U = O + 1;
                return U >= 6 ? (ol("WIN"),
                6) : (J(!0),
                hl(0),
                de(""),
                $u(Math.random().toString(36).substring(7).toUpperCase()),
                U)
            }
            )
        }
        , 6e4);
        return () => clearInterval(m)
    }
    , [z, G]),
    Z.useEffect( () => {
        if (!Q)
            return;
        let m;
        return _t && yl <= 2 && (m = window.setInterval( () => {
            hl(O => {
                const U = O + 1.8;
                return U >= 100 ? (J(!1),
                ve(!1),
                100) : U
            }
            )
        }
        , 50)),
        () => clearInterval(m)
    }
    , [Q, _t, yl]),
    Z.useEffect( () => {
        if (El !== "CAM") {
            x(0);
            return
        }
        const m = setInterval( () => {
            var cl;
            const O = Fl === pl
              , U = (cl = ku[pl]) == null ? void 0 : cl.connections.includes(Fl)
              , tl = Math.random();
            x(O ? tl > .15 ? 2 : 1 : U ? tl > .6 ? 1 : 0 : tl > .98 ? 1 : 0)
        }
        , 150);
        return () => clearInterval(m)
    }
    , [El, pl, Fl]),
    Z.useEffect( () => {
        if (z === "GAMEOVER") {
            Pa();
            const m = Lr[Math.floor(Math.random() * Lr.length)];
            _(m)
        }
    }
    , [z]),
    Z.useEffect( () => {
        if (z === "JUMPSCARE") {
            hc();
            const m = setTimeout( () => ol("GAMEOVER"), 1200);
            return () => clearTimeout(m)
        }
    }
    , [z]),
    Z.useEffect( () => {
        if (z === "GAME_SCREEN" && G) {
            Yl(!0),
            yc();
            const m = setTimeout( () => Yl(!1), 5e3);
            return () => clearTimeout(m)
        }
    }
    , [z, G]),
    Z.useEffect( () => {
        const m = () => {
            $a(),
            z === "MENU" && !zt.current && Ia(),
            window.removeEventListener("click", m),
            window.removeEventListener("keydown", m)
        }
        ;
        return window.addEventListener("click", m),
        window.addEventListener("keydown", m),
        () => {
            window.removeEventListener("click", m),
            window.removeEventListener("keydown", m)
        }
    }
    , [z]),
    Z.useEffect( () => {
        if (z !== "GAME_SCREEN" || !G)
            return;
        const O = Math.max(3e3, 1e4 - yl * 1400)
          , U = setInterval( () => {
            Zl(tl => {
                var ct;
                if (yl === 0 && Bt >= 1)
                    return tl;
                const cl = (ct = ku[tl]) == null ? void 0 : ct.connections
                  , zl = Math.random();
                let xl;
                return zl < .75 ? xl = gc(tl) : xl = cl[Math.floor(Math.random() * cl.length)],
                xl === "GUEST_BEDROOM" ? (ol("JUMPSCARE"),
                tl) : (ql(yt => yt + 1),
                xl)
            }
            )
        }
        , O);
        return () => clearInterval(U)
    }
    , [z, G, yl, Bt]);
    const gc = m => m === "MAIN_BEDROOM" ? "HALL_LR_MB" : m === "HALL_LR_MB" ? "LIVING_ROOM" : m === "KITCHEN" ? "HALL_LR_K" : m === "HALL_LR_K" ? "LIVING_ROOM" : m === "LIVING_ROOM" ? "HALL_H_LR" : m === "HALL_H_LR" ? "HALLWAY" : m === "HALLWAY" ? "HALL_GB_H" : m === "BATHROOM" ? "HALL_GB_B" : m === "HALL_GB_B" ? "HALL_GB_H" : m === "HALL_GB_H" ? "GUEST_BEDROOM" : m;
    Z.useEffect( () => {
        if (Gl) {
            const m = setInterval( () => {
                vt(O => O >= 100 ? (clearInterval(m),
                ut(!1),
                K(0),
                100) : O + 1)
            }
            , 300);
            return () => clearInterval(m)
        }
    }
    , [Gl]);
    const Qe = m => {
        Dl(),
        m === jf.NEW_GAME && (ol("FADING_OUT"),
        sa(),
        setTimeout( () => {
            ol("GAME_SCREEN"),
            setTimeout( () => I(!0), 2500)
        }
        , 1e3))
    }
      , et = m => {
        pl !== m && (Fa(),
        nt(!0),
        Jt(m),
        setTimeout( () => nt(!1), 250))
    }
      , Xt = m => {
        if (Gl || Kl >= 3 || C)
            return;
        ul(m),
        Dl(),
        setTimeout( () => {
            ul(null),
            o(m),
            Iu(),
            setTimeout( () => o(null), 1500),
            Zl(U => Math.random() < .9 ? m : U)
        }
        , 3e3);
        const O = Kl + 1;
        K(O),
        O >= 3 && (ut(!0),
        vc(),
        vt(0))
    }
      , Il = () => {
        me.toUpperCase() === fa ? J(!1) : de("")
    }
    ;
    return Z.useEffect( () => {
        const m = O => {
            h({
                x: O.clientX / window.innerWidth,
                y: O.clientY / window.innerHeight
            })
        }
        ;
        return window.addEventListener("mousemove", m),
        () => window.removeEventListener("mousemove", m)
    }
    , []),
    z === "GAMEOVER" ? b.jsxs("div", {
        className: "w-screen h-screen bg-black flex flex-col items-center justify-center overflow-hidden",
        children: [b.jsx("div", {
            className: "animate-[pulse_0.1s_infinite] text-red-700 font-game-title text-7xl md:text-9xl mb-8 select-none",
            children: "YOU DIED"
        }), b.jsx("div", {
            className: "text-white font-game-menu text-xl md:text-2xl tracking-widest opacity-80 text-center px-4",
            dangerouslySetInnerHTML: {
                __html: H
            }
        }), b.jsx("button", {
            onClick: Fu,
            className: "mt-20 text-white/30 hover:text-white transition-all font-game-menu uppercase tracking-[0.4em] text-sm",
            children: "[ Retry Session ]"
        })]
    }) : z === "WIN" ? b.jsxs("div", {
        className: "w-screen h-screen bg-black flex flex-col items-center justify-center text-green-500 font-game-title p-12 text-center",
        children: [b.jsx("h1", {
            className: "text-8xl animate-bounce mb-4",
            children: "6:00 AM"
        }), b.jsx("p", {
            className: "text-2xl mb-12 tracking-widest text-white/60 uppercase",
            children: "Night Completed"
        }), b.jsx("button", {
            onClick: Fu,
            className: "text-white hover:underline uppercase tracking-widest",
            children: "[ Return ]"
        })]
    }) : b.jsxs("div", {
        className: `w-screen h-screen bg-black relative overflow-hidden select-none transition-opacity duration-[1000ms] ${z === "FADING_OUT" ? "opacity-0" : "opacity-100"}`,
        children: [b.jsxs("div", {
            className: "distortion-wrapper absolute inset-0 pointer-events-none z-20",
            children: [b.jsx("div", {
                className: "noise-container"
            }), b.jsx("div", {
                className: "grain-overlay"
            }), b.jsx("div", {
                className: "crt-overlay"
            }), b.jsx("div", {
                className: "scanline-effect"
            }), b.jsx("div", {
                className: "vignette-overlay"
            })]
        }),z === "MENU" ? b.jsxs("div", {
    className: "relative w-full h-full",
    children: [b.jsx("div", {
        className: "strobe-effect"
    }), b.jsxs("main", {
        className: "relative z-10 w-full h-full flex flex-col justify-between p-12 md:p-24",
        children: [b.jsxs("div", {
            style: {
                transform: `translate(${(P.x - .5) * 20}px, ${(P.y - .5) * 20}px)`
            },
            children: [
                b.jsxs("h1", {
                    className: "text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white leading-none glitch-text font-game-title",
                    children: [
                        "Five Nights",
                        b.jsx("br", {}),
                        "At ",
                        b.jsx("span", {
                            className: "text-[#f39c12]",
                            children: "Sunibuns"
                        })
                    ]
                }),
                b.jsx("p", {
                    className: "mt-2 text-xs text-white/70",
                    children: "made by freakycai"
                })
            ]
        }), b.jsxs("div", {


                }), b.jsxs("div", {
                    className: "flex flex-col items-start gap-8 mt-12 font-game-menu",
                    children: [b.jsx("button", {
                        onMouseEnter: Fa,
                        onClick: () => Qe(jf.NEW_GAME),
                        className: "menu-item w-fit text-3xl md:text-4xl text-left text-gray-400 font-bold",
                        children: "New Game"
                    }), b.jsx("button", {
                        className: "menu-item w-fit text-3xl md:text-4xl text-left text-gray-400 font-bold transition-all duration-300 opacity-50 cursor-not-allowed",
                        children: "Continue"
                    }), b.jsx("button", {
                        onMouseEnter: Fa,
                        onClick: () => {
                            Dl(),
                            B(!0)
                        }
                        ,
                        className: "menu-item w-fit text-3xl md:text-4xl text-left text-gray-400 font-bold",
                        children: "Settings"
                    })]
                }), b.jsx("div", {
                    className: "flex justify-between items-end mt-auto text-[10px] text-gray-600 font-mono tracking-widest uppercase opacity-40",
                    children: b.jsxs("div", {
                        children: [b.jsx("p", {
                            children: "© 2026 Eren Aura / Sunibun Media"
                        }), b.jsx("p", {
                            children: "Hardware ID: SRV_7749"
                        })]
                    })
                })]
            }), b.jsxs("div", {
                className: "absolute right-0 bottom-0 md:right-20 md:top-20 w-1/2 h-3/4 md:w-1/2 md:h-1/2 z-0 overflow-hidden pointer-events-none",
                children: [b.jsx("img", {
                    src: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1000&auto=format&fit=crop",
                    alt: "Anima",
                    className: "w-full h-full object-contain opacity-50",
                    style: {
                        filter: "grayscale(0.6) brightness(0.6) contrast(1.4) drop-shadow(0 0 60px rgba(0,0,0,1))"
                    }
                }), b.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-l from-transparent to-black"
                })]
            })]
        }) : b.jsxs("div", {
            className: "w-full h-full flex items-center justify-center relative",
            children: [b.jsxs("div", {
                className: `absolute inset-0 w-full h-full flex items-center justify-center transition-transform duration-[1500ms] ease-out pointer-events-none ${z === "JUMPSCARE" ? "jumpscare-animation scale-[2] brightness-[3] contrast-[2]" : ""}`,
                style: {
                    transform: z === "JUMPSCARE" ? void 0 : `translateX(${ka}%) scale(1.3)`
                },
                children: [b.jsx("img", {
                    src: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2000&auto=format&fit=crop",
                    alt: "Office",
                    className: "w-full h-full object-cover brightness-[0.22] contrast-[1.3]"
                }), z === "JUMPSCARE" && b.jsx("img", {
                    src: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1000&auto=format&fit=crop",
                    className: "absolute inset-0 w-full h-full object-contain scale-150 mix-blend-difference",
                    style: {
                        filter: "invert(1) saturate(50) brightness(1.5)"
                    }
                }), b.jsx("div", {
                    className: `absolute inset-0 bg-red-600/15 transition-opacity duration-[2000ms] ${Xe >= 1 ? "opacity-100 animate-pulse" : "opacity-0"}`
                }), b.jsx("div", {
                    className: `absolute inset-0 bg-red-900/25 transition-opacity duration-500 ${Xe >= 2 ? "opacity-100" : "opacity-0"}`
                }), b.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"
                })]
            }), Q && z === "GAME_SCREEN" && b.jsx("div", {
                className: "fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm",
                children: b.jsxs("div", {
                    className: "bg-gray-950 border-2 border-orange-500/50 p-8 max-w-sm w-full text-center space-y-6 shadow-[0_0_200px_rgba(249,115,22,0.25)] flex flex-col",
                    children: [b.jsxs("div", {
                        className: "border-b border-white/10 pb-4 shrink-0",
                        children: [b.jsxs("h4", {
                            className: "text-orange-500 font-game-title text-xl uppercase tracking-widest",
                            children: ["MAINTENANCE_H", yl]
                        }), b.jsx("p", {
                            className: "text-white/40 font-game-menu text-[10px] mt-2 tracking-widest uppercase",
                            children: "System stabilization required."
                        })]
                    }), b.jsxs("div", {
                        className: "space-y-6",
                        children: [yl <= 2 && b.jsxs("div", {
                            className: "space-y-4",
                            children: [b.jsx("p", {
                                className: "text-white/70 font-game-menu text-[10px] uppercase",
                                children: "Reset core frequency trigger."
                            }), b.jsx("div", {
                                className: "h-4 w-full bg-gray-900 border border-white/10 rounded-full overflow-hidden p-0.5",
                                children: b.jsx("div", {
                                    className: "h-full bg-orange-600 transition-all duration-150 rounded-full",
                                    style: {
                                        width: `${Tl}%`
                                    }
                                })
                            }), b.jsx("button", {
                                onMouseDown: () => ve(!0),
                                onMouseUp: () => ve(!1),
                                onMouseLeave: () => ve(!1),
                                className: `w-full py-6 text-white font-bold uppercase tracking-[0.4em] transition-all rounded shadow-2xl border-2 text-[10px] ${_t ? "bg-orange-700 border-white" : "bg-gray-900 border-orange-500/30"}`,
                                children: _t ? "STABILIZING..." : "HOLD TO RESET"
                            })]
                        }), yl === 3 && b.jsxs("div", {
                            className: "space-y-4",
                            children: [b.jsx("p", {
                                className: "text-white/70 font-game-menu text-[10px] uppercase",
                                children: "Authentication code required:"
                            }), b.jsx("div", {
                                className: "bg-black border border-white/20 p-4 text-orange-500 font-game-title text-3xl tracking-[0.4em]",
                                children: fa
                            }), b.jsx("input", {
                                type: "text",
                                autoFocus: !0,
                                value: me,
                                onChange: m => de(m.target.value.toUpperCase()),
                                onKeyDown: m => m.key === "Enter" && Il(),
                                className: "w-full bg-gray-900 border-2 border-orange-500/50 text-white p-3 text-center font-game-title tracking-widest outline-none",
                                placeholder: "CODE"
                            }), b.jsx("button", {
                                onClick: Il,
                                className: "w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold uppercase tracking-[0.2em] rounded text-[10px]",
                                children: "Authorize"
                            })]
                        }), yl === 4 && b.jsxs("div", {
                            className: "space-y-4",
                            children: [b.jsx("p", {
                                className: "text-white/70 font-game-menu text-[10px] uppercase",
                                children: "Sync signal to 85%."
                            }), b.jsxs("div", {
                                className: "flex flex-col items-center bg-black/50 p-4 rounded border border-white/5",
                                children: [b.jsx("input", {
                                    type: "range",
                                    min: "0",
                                    max: "100",
                                    value: Tl,
                                    onChange: m => hl(parseInt(m.target.value)),
                                    className: "w-full h-1.5 bg-gray-800 accent-orange-600 appearance-none cursor-pointer rounded-full"
                                }), b.jsxs("div", {
                                    className: "mt-4 text-white font-game-title text-4xl",
                                    children: [Tl, "%"]
                                })]
                            }), b.jsx("button", {
                                onClick: () => Tl >= 84 && Tl <= 86 && J(!1),
                                className: `w-full py-4 text-white font-bold uppercase tracking-[0.2em] border-2 rounded ${Tl >= 84 && Tl <= 86 ? "bg-green-600 border-white" : "bg-gray-900 border-white/20 opacity-40 cursor-not-allowed"} text-[10px]`,
                                children: "Confirm Sync"
                            })]
                        }), yl === 5 && b.jsxs("div", {
                            className: "space-y-4",
                            children: [b.jsx("p", {
                                className: "text-white/70 font-game-menu text-[10px] uppercase",
                                children: "Manual reset pulse."
                            }), b.jsx("div", {
                                className: "h-4 w-full bg-gray-900 border border-white/10 rounded-full overflow-hidden p-0.5",
                                children: b.jsx("div", {
                                    className: "h-full bg-red-600 transition-all duration-75 rounded-full",
                                    style: {
                                        width: `${Tl}%`
                                    }
                                })
                            }), b.jsx("button", {
                                onClick: () => hl(m => {
                                    const O = m + 10;
                                    return O >= 100 ? (J(!1),
                                    100) : O
                                }
                                ),
                                className: "w-full py-8 bg-red-800 hover:bg-red-700 text-white font-bold uppercase tracking-[0.4em] border-4 border-white animate-bounce shadow-2xl text-xs",
                                children: "PULSE"
                            })]
                        })]
                    })]
                })
            }), G && z === "GAME_SCREEN" && b.jsxs(b.Fragment, {
                children: [b.jsxs("div", {
                    className: "absolute top-12 left-12 z-40 bg-black/80 px-6 py-4 border border-white/20 font-game-menu",
                    children: [b.jsxs("p", {
                        className: "text-white text-5xl font-bold",
                        children: [yl === 0 ? "12" : yl, ":00 ", b.jsx("span", {
                            className: "text-xl",
                            children: "AM"
                        })]
                    }), b.jsxs("div", {
                        className: `mt-2 flex items-center text-[10px] tracking-widest uppercase ${Xe >= 2 ? "text-red-500 animate-pulse" : "text-green-500"}`,
                        children: [b.jsx("div", {
                            className: `w-2 h-2 rounded-full mr-2 ${Xe >= 2 ? "bg-red-500" : "bg-green-500"}`
                        }), Xe >= 2 ? "BREACH" : "STABLE"]
                    })]
                }), b.jsxs("div", {
                    className: "absolute bottom-12 inset-x-0 flex justify-between px-12 z-40",
                    children: [b.jsxs("button", {
                        onClick: () => {
                            Dl(),
                            tt("CAM")
                        }
                        ,
                        className: "w-24 h-24 bg-black/90 border-2 border-white/10 hover:border-blue-500 flex flex-col items-center justify-center rounded transition-all",
                        children: [b.jsx("div", {
                            className: `w-10 h-1 mb-2 ${El === "CAM" ? "bg-blue-500" : "bg-white/40"}`
                        }), b.jsx("span", {
                            className: "text-[10px] uppercase text-white/50 tracking-widest",
                            children: "Cams"
                        })]
                    }), b.jsxs("button", {
                        onClick: () => {
                            Dl(),
                            tt("SOUND")
                        }
                        ,
                        className: "w-24 h-24 bg-black/90 border-2 border-white/10 hover:border-orange-500 flex flex-col items-center justify-center rounded transition-all",
                        children: [b.jsx("div", {
                            className: `w-10 h-1 mb-2 ${El === "SOUND" ? "bg-orange-500" : "bg-white/40"}`
                        }), b.jsx("span", {
                            className: "text-[10px] uppercase text-white/50 tracking-widest",
                            children: "Audio"
                        })]
                    })]
                })]
            }), !G && z === "GAME_SCREEN" && b.jsxs("div", {
                className: "absolute inset-0 z-50 bg-black flex flex-col items-center justify-center font-game-menu animate-out fade-out duration-[2000ms] fill-mode-forwards",
                children: [b.jsx("h2", {
                    className: "text-6xl text-white font-bold tracking-widest animate-pulse",
                    children: "12:00 AM"
                }), b.jsx("p", {
                    className: "text-gray-400 mt-2 uppercase tracking-[0.5em]",
                    children: "Night 1"
                })]
            }), El && z === "GAME_SCREEN" && b.jsxs("div", {
                className: "absolute inset-10 z-[100] bg-black border-2 border-white/20 flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-300",
                children: [b.jsxs("div", {
                    className: "bg-white/5 border-b border-white/10 p-4 flex justify-between items-center",
                    children: [b.jsxs("h3", {
                        className: "text-sm font-game-title tracking-widest uppercase flex items-center",
                        children: [b.jsx("span", {
                            className: `w-2 h-2 rounded-full mr-2 ${El === "CAM" ? "bg-blue-500" : "bg-orange-500"}`
                        }), El === "CAM" ? `CAM_FEED: ${(ln = ku[pl]) == null ? void 0 : ln.name}` : "AUDIO_LURE_INTERFACE"]
                    }), b.jsx("button", {
                        onClick: () => {
                            Dl(),
                            tt(null)
                        }
                        ,
                        className: "text-[10px] border border-white/10 px-4 py-2 hover:bg-red-900/40 uppercase",
                        children: "Shutdown"
                    })]
                        
                }), b.jsxs("div", {
                    className: "flex-1 flex overflow-hidden",
                    children: [b.jsx("div", {
                        className: "flex-[3] relative bg-gray-950",
                        children: El === "CAM" ? b.jsxs("div", {
                            className: "w-full h-full flex flex-col items-center justify-center relative",
                            children: [(T > 0 || pt) && b.jsx("div", {
                                className: `absolute inset-0 cam-static-overlay ${pt ? "opacity-100" : "opacity-40"}`
                            }), b.jsx("p", {
                                className: "text-white/10 text-8xl font-black select-none tracking-tighter uppercase",
                                children: pl
                            }), Fl === pl && b.jsx("div", {
                                className: "absolute bg-red-800 text-white px-10 py-5 font-bold animate-pulse border-2 border-white shadow-2xl",
                                children: "HAZARD DETECTED"
                            }), b.jsxs("div", {
                                className: "absolute top-4 left-4 text-red-600 font-bold flex items-center animate-pulse",
                                children: [b.jsx("div", {
                                    className: "w-3 h-3 bg-red-600 rounded-full mr-2"
                                }), " REC"]
                            })]
                        }) : b.jsx("div", {
                            className: "w-full h-full flex items-center justify-center p-12",
                            children: Gl ? b.jsxs("div", {
                                className: "w-full max-w-md text-center",
                                children: [b.jsx("h4", {
                                    className: "text-orange-500 font-game-title mb-6 animate-pulse",
                                    children: "REBOOTING_AUDIO_SYSTEMS"
                                }), b.jsx("div", {
                                    className: "h-2 w-full bg-gray-900 border border-white/10 rounded-full overflow-hidden",
                                    children: b.jsx("div", {
                                        className: "h-full bg-orange-600 transition-all duration-300",
                                        style: {
                                            width: `${re}%`
                                        }
                                    })
                                })]
                            }) : b.jsx("div", {
                                className: "text-center",
                                children: b.jsxs("div", {
                                    className: "inline-block p-12 border-2 border-green-500/20 bg-green-500/5 rounded",
                                    children: [b.jsx("p", {
                                        className: `text-3xl font-bold uppercase tracking-widest ${C ? "text-orange-500 animate-pulse" : "text-green-500"}`,
                                        children: C ? "TRANSMITTING_SIGNAL" : "READY_TO_LURE"
                                    }), b.jsx("p", {
                                        className: "mt-4 text-[10px] text-white/30 uppercase",
                                        children: "Select sector on map to deploy audio distraction."
                                    })]
                                })
                            })
                        })
                    }), b.jsxs("div", {
                        className: "flex-[2] bg-black p-6 border-l border-white/10 flex flex-col",
                        children: [b.jsx("h4", {
                            className: "text-white/40 text-[10px] uppercase tracking-widest mb-6",
                            children: "Facility Navigation"
                        }), b.jsx("div", {
                            className: "flex-1 relative bg-gray-900/50 rounded overflow-hidden",
                            children: b.jsxs("div", {
                                className: "absolute inset-0",
                                style: {
                                    transform: `translate(${p}px, ${D}px)`
                                },
                                children: [b.jsx("svg", {
                                    className: "absolute inset-0 w-full h-full",
                                    children: Object.values(Cf).map(m => m.connections.map(O => {
                                        const U = ku[O];
                                        return U ? b.jsx("line", {
                                            x1: `${m.x / 450 * 100}%`,
                                            y1: `${m.y / 350 * 100}%`,
                                            x2: `${U.x / 450 * 100}%`,
                                            y2: `${U.y / 350 * 100}%`,
                                            stroke: "white",
                                            strokeOpacity: "0.1"
                                        }, `${m.id}-${O}`) : null
                                    }
                                    ))
                                }), Object.values(Cf).map(m => b.jsxs("div", {
                                    className: "absolute",
                                    style: {
                                        left: `${m.x / 450 * 100}%`,
                                        top: `${m.y / 350 * 100}%`,
                                        transform: "translate(-50%, -50%)"
                                    },
                                    children: [il === m.id && b.jsx("div", {
                                        className: "sonar-effect w-20 h-20 -ml-10 -mt-10"
                                    }), b.jsx("button", {
                                        onClick: () => El === "CAM" ? et(m.id) : Xt(m.id),
                                        className: `px-3 py-1.5 border text-[9px] font-bold uppercase transition-all rounded-sm
                                    ${pl === m.id && El === "CAM" ? "bg-blue-600 border-white text-white" : "bg-black/80 border-white/20 text-white/40 hover:border-white"}
                                    ${C === m.id ? "bg-orange-600 border-white text-white animate-pulse" : ""}
                                  `,
                                        children: m.name
                                    })]
                                }, m.id))]
                            })
                        })]
                    })]
                })]
            })]
        }), ll && b.jsx("div", {
            className: "fixed inset-0 z-[500] bg-black/95 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-300",
            children: b.jsxs("div", {
                className: "max-w-md w-full border border-gray-800 p-12 bg-black font-game-menu",
                children: [b.jsx("h2", {
                    className: "text-3xl text-white font-bold mb-12 uppercase tracking-widest border-b border-gray-900 pb-8",
                    children: "Hardware Setup"
                }), b.jsx("div", {
                    className: "space-y-10",
                    children: b.jsxs("div", {
                        className: "flex flex-col gap-6",
                        children: [b.jsxs("div", {
                            className: "flex justify-between text-xs text-gray-400 uppercase tracking-widest",
                            children: [b.jsx("span", {
                                children: "Barrel Intensity"
                            }), b.jsxs("span", {
                                children: [vl, "%"]
                            })]
                        }), b.jsx("input", {
                            type: "range",
                            min: "0",
                            max: "100",
                            value: vl,
                            onChange: m => lt(parseInt(m.target.value)),
                            className: "accent-[#f39c12] cursor-pointer h-1 bg-gray-800 rounded-lg appearance-none"
                        })]
                    })
                }), b.jsx("button", {
                    onClick: () => {
                        Dl(),
                        B(!1)
                    }
                    ,
                    className: "mt-16 w-full py-4 border border-gray-700 hover:bg-white/5 text-white uppercase font-bold tracking-widest text-xs",
                    children: "Return"
                })]
            })
        })]
    })
}
  , Xr = document.getElementById("root");
if (!Xr)
    throw new Error("Could not find root element to mount to");
const mv = ov.createRoot(Xr);
mv.render(b.jsx(ev.StrictMode, {
    children: b.jsx(rv, {})
}));
