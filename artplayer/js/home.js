var OriginTitile = document.title;
var titleTime;
document.addEventListener("visibilitychange", function() {
if (document.hidden) {
document.title = "o(╥﹏╥)o你去哪了？快回来！- " + OriginTitile;
clearTimeout(titleTime);
}
else {
document.title = "๑乛◡乛๑亲爱的，欢迎回来~• - " + OriginTitile;
titleTime = setTimeout(function() {
document.title = OriginTitile;
}, 1500);
}
});
! function(e) {
    function r(r) {
        for (var n, l, p = r[0], a = r[1], i = r[2], c = 0, s = []; c < p.length; c++) l = p[c], Object.prototype.hasOwnProperty.call(o, l) && o[l] && s.push(o[l][0]), o[l] = 0;
        for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        for (f && f(r); s.length;) s.shift()();
        return u.push.apply(u, i || []), t()
    }

    function t() {
        for (var e, r = 0; r < u.length; r++) {
            for (var t = u[r], n = !0, p = 1; p < t.length; p++) {
                var a = t[p];
                0 !== o[a] && (n = !1)
            }
            n && (u.splice(r--, 1), e = l(l.s = t[0]))
        }
        return e
    }
    var n = {},
        o = {
            0: 0
        },
        u = [];

    function l(r) {
        if (n[r]) return n[r].exports;
        var t = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports
    }
    l.m = e, l.c = n, l.d = function(e, r, t) {
        l.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: t
        })
    }, l.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, l.t = function(e, r) {
        if (1 & r && (e = l(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (l.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }), 2 & r && "string" != typeof e)
            for (var n in e) l.d(t, n, function(r) {
                return e[r]
            }.bind(null, n));
        return t
    }, l.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return l.d(r, "a", r), r
    }, l.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, l.p = "";
    var p = window.webpackJsonp = window.webpackJsonp || [],
        a = p.push.bind(p);
    p.push = r, p = p.slice();
    for (var i = 0; i < p.length; i++) r(p[i]);
    var f = a;
    t()
}([]);
(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        "+2Rf": function(e, t, n) {
            (function(t) {
                e.exports = t.$ = n("z2n6")
            }).call(this, n("yLpj"))
        },
        EVdn: function(e, t, n) {
            var r;
            /*!
             * jQuery JavaScript Library v3.6.0
             * https://jquery.com/
             *
             * Includes Sizzle.js
             * https://sizzlejs.com/
             *
             * Copyright OpenJS Foundation and other contributors
             * Released under the MIT license
             * https://jquery.org/license
             *
             * Date: 2021-03-02T17:08Z
             */
            ! function(t, n) {
                "use strict";
                "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return n(e)
                } : n(t)
            }("undefined" != typeof window ? window : this, (function(n, i) {
                "use strict";
                var o = [],
                    a = Object.getPrototypeOf,
                    s = o.slice,
                    u = o.flat ? function(e) {
                        return o.flat.call(e)
                    } : function(e) {
                        return o.concat.apply([], e)
                    },
                    l = o.push,
                    c = o.indexOf,
                    f = {},
                    p = f.toString,
                    d = f.hasOwnProperty,
                    h = d.toString,
                    g = h.call(Object),
                    v = {},
                    y = function(e) {
                        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                    },
                    m = function(e) {
                        return null != e && e === e.window
                    },
                    x = n.document,
                    b = {
                        type: !0,
                        src: !0,
                        nonce: !0,
                        noModule: !0
                    };

                function w(e, t, n) {
                    var r, i, o = (n = n || x).createElement("script");
                    if (o.text = e, t)
                        for (r in b)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
                    n.head.appendChild(o).parentNode.removeChild(o)
                }

                function T(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[p.call(e)] || "object" : typeof e
                }
                var C = function(e, t) {
                    return new C.fn.init(e, t)
                };

                function E(e) {
                    var t = !!e && "length" in e && e.length,
                        n = T(e);
                    return !y(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                }
                C.fn = C.prototype = {
                    jquery: "3.6.0",
                    constructor: C,
                    length: 0,
                    toArray: function() {
                        return s.call(this)
                    },
                    get: function(e) {
                        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var t = C.merge(this.constructor(), e);
                        return t.prevObject = this, t
                    },
                    each: function(e) {
                        return C.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(C.map(this, (function(t, n) {
                            return e.call(t, n, t)
                        })))
                    },
                    slice: function() {
                        return this.pushStack(s.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(C.grep(this, (function(e, t) {
                            return (t + 1) % 2
                        })))
                    },
                    odd: function() {
                        return this.pushStack(C.grep(this, (function(e, t) {
                            return t % 2
                        })))
                    },
                    eq: function(e) {
                        var t = this.length,
                            n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: l,
                    sort: o.sort,
                    splice: o.splice
                }, C.extend = C.fn.extend = function() {
                    var e, t, n, r, i, o, a = arguments[0] || {},
                        s = 1,
                        u = arguments.length,
                        l = !1;
                    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
                        if (null != (e = arguments[s]))
                            for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || C.isPlainObject(n) ? n : {}, i = !1, a[t] = C.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                    return a
                }, C.extend({
                    expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !(!e || "[object Object]" !== p.call(e)) && (!(t = a(e)) || "function" == typeof(n = d.call(t, "constructor") && t.constructor) && h.call(n) === g)
                    },
                    isEmptyObject: function(e) {
                        var t;
                        for (t in e) return !1;
                        return !0
                    },
                    globalEval: function(e, t, n) {
                        w(e, {
                            nonce: t && t.nonce
                        }, n)
                    },
                    each: function(e, t) {
                        var n, r = 0;
                        if (E(e))
                            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                        else
                            for (r in e)
                                if (!1 === t.call(e[r], r, e[r])) break; return e
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (E(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : c.call(t, e, n)
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                        return e.length = i, e
                    },
                    grep: function(e, t, n) {
                        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)!t(e[i], i) !== a && r.push(e[i]);
                        return r
                    },
                    map: function(e, t, n) {
                        var r, i, o = 0,
                            a = [];
                        if (E(e))
                            for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                        else
                            for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                        return u(a)
                    },
                    guid: 1,
                    support: v
                }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                    f["[object " + t + "]"] = t.toLowerCase()
                }));
                var S =
                    /*!
                     * Sizzle CSS Selector Engine v2.3.6
                     * https://sizzlejs.com/
                     *
                     * Copyright JS Foundation and other contributors
                     * Released under the MIT license
                     * https://js.foundation/
                     *
                     * Date: 2021-02-16
                     */
                    function(e) {
                        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, y, m, x, b = "sizzle" + 1 * new Date,
                            w = e.document,
                            T = 0,
                            C = 0,
                            E = ue(),
                            S = ue(),
                            k = ue(),
                            A = ue(),
                            N = function(e, t) {
                                return e === t && (f = !0), 0
                            },
                            j = {}.hasOwnProperty,
                            D = [],
                            L = D.pop,
                            q = D.push,
                            H = D.push,
                            O = D.slice,
                            P = function(e, t) {
                                for (var n = 0, r = e.length; n < r; n++)
                                    if (e[n] === t) return n;
                                return -1
                            },
                            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            M = "[\ \\t\\r\\n\\f]",
                            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\])+",
                            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
                            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
                            B = new RegExp(M + "+", "g"),
                            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                            _ = new RegExp("^" + M + "*," + M + "*"),
                            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                            U = new RegExp(M + "|>"),
                            X = new RegExp(F),
                            V = new RegExp("^" + I + "$"),
                            G = {
                                ID: new RegExp("^#(" + I + ")"),
                                CLASS: new RegExp("^\\.(" + I + ")"),
                                TAG: new RegExp("^(" + I + "|[*])"),
                                ATTR: new RegExp("^" + W),
                                PSEUDO: new RegExp("^" + F),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                                bool: new RegExp("^(?:" + R + ")$", "i"),
                                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                            },
                            Y = /HTML$/i,
                            Q = /^(?:input|select|textarea|button)$/i,
                            J = /^h\d$/i,
                            K = /^[^{]+\{\s*\[native \w/,
                            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ee = /[+~]/,
                            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
                            ne = function(e, t) {
                                var n = "0x" + e.slice(1) - 65536;
                                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                            },
                            re = /([\0-]|^-?\d)|^-$|[^\0--￿\w-]/g,
                            ie = function(e, t) {
                                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                            },
                            oe = function() {
                                p()
                            },
                            ae = be((function(e) {
                                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                            }), {
                                dir: "parentNode",
                                next: "legend"
                            });
                        try {
                            H.apply(D = O.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
                        } catch (e) {
                            H = {
                                apply: D.length ? function(e, t) {
                                    q.apply(e, O.call(t))
                                } : function(e, t) {
                                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                                    e.length = n - 1
                                }
                            }
                        }

                        function se(e, t, r, i) {
                            var o, s, l, c, f, h, y, m = t && t.ownerDocument,
                                w = t ? t.nodeType : 9;
                            if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                            if (!i && (p(t), t = t || d, g)) {
                                if (11 !== w && (f = Z.exec(e)))
                                    if (o = f[1]) {
                                        if (9 === w) {
                                            if (!(l = t.getElementById(o))) return r;
                                            if (l.id === o) return r.push(l), r
                                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                                    } else {
                                        if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r
                                    }
                                if (n.qsa && !A[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                    if (y = e, m = t, 1 === w && (U.test(e) || z.test(e))) {
                                        for ((m = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b)), s = (h = a(e)).length; s--;) h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                                        y = h.join(",")
                                    }
                                    try {
                                        return H.apply(r, m.querySelectorAll(y)), r
                                    } catch (t) {
                                        A(e, !0)
                                    } finally {
                                        c === b && t.removeAttribute("id")
                                    }
                                }
                            }
                            return u(e.replace($, "$1"), t, r, i)
                        }

                        function ue() {
                            var e = [];
                            return function t(n, i) {
                                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                            }
                        }

                        function le(e) {
                            return e[b] = !0, e
                        }

                        function ce(e) {
                            var t = d.createElement("fieldset");
                            try {
                                return !!e(t)
                            } catch (e) {
                                return !1
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), t = null
                            }
                        }

                        function fe(e, t) {
                            for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
                        }

                        function pe(e, t) {
                            var n = t && e,
                                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (r) return r;
                            if (n)
                                for (; n = n.nextSibling;)
                                    if (n === t) return -1;
                            return e ? 1 : -1
                        }

                        function de(e) {
                            return function(t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e
                            }
                        }

                        function he(e) {
                            return function(t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e
                            }
                        }

                        function ge(e) {
                            return function(t) {
                                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                            }
                        }

                        function ve(e) {
                            return le((function(t) {
                                return t = +t, le((function(n, r) {
                                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                                }))
                            }))
                        }

                        function ye(e) {
                            return e && void 0 !== e.getElementsByTagName && e
                        }
                        for (t in n = se.support = {}, o = se.isXML = function(e) {
                            var t = e && e.namespaceURI,
                                n = e && (e.ownerDocument || e).documentElement;
                            return !Y.test(t || n && n.nodeName || "HTML")
                        }, p = se.setDocument = function(e) {
                            var t, i, a = e ? e.ownerDocument || e : w;
                            return a != d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce((function(e) {
                                return h.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                            })), n.attributes = ce((function(e) {
                                return e.className = "i", !e.getAttribute("className")
                            })), n.getElementsByTagName = ce((function(e) {
                                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                            })), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce((function(e) {
                                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                            })), n.getById ? (r.filter.ID = function(e) {
                                var t = e.replace(te, ne);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }, r.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && g) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : []
                                }
                            }) : (r.filter.ID = function(e) {
                                var t = e.replace(te, ne);
                                return function(e) {
                                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }, r.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && g) {
                                    var n, r, i, o = t.getElementById(e);
                                    if (o) {
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                    }
                                    return []
                                }
                            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                            } : function(e, t) {
                                var n, r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                    return r
                                }
                                return o
                            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                            }, y = [], v = [], (n.qsa = K.test(d.querySelectorAll)) && (ce((function(e) {
                                var t;
                                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), (t = d.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                            })), ce((function(e) {
                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = d.createElement("input");
                                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                            }))), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", F)
                            })), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                            } : function(e, t) {
                                if (t)
                                    for (; t = t.parentNode;)
                                        if (t === e) return !0;
                                return !1
                            }, N = t ? function(e, t) {
                                if (e === t) return f = !0, 0;
                                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && x(w, e) ? -1 : t == d || t.ownerDocument == w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
                            } : function(e, t) {
                                if (e === t) return f = !0, 0;
                                var n, r = 0,
                                    i = e.parentNode,
                                    o = t.parentNode,
                                    a = [e],
                                    s = [t];
                                if (!i || !o) return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
                                if (i === o) return pe(e, t);
                                for (n = e; n = n.parentNode;) a.unshift(n);
                                for (n = t; n = n.parentNode;) s.unshift(n);
                                for (; a[r] === s[r];) r++;
                                return r ? pe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                            }, d) : d
                        }, se.matches = function(e, t) {
                            return se(e, null, null, t)
                        }, se.matchesSelector = function(e, t) {
                            if (p(e), n.matchesSelector && g && !A[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
                                var r = m.call(e, t);
                                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                            } catch (e) {
                                A(t, !0)
                            }
                            return se(t, d, null, [e]).length > 0
                        }, se.contains = function(e, t) {
                            return (e.ownerDocument || e) != d && p(e), x(e, t)
                        }, se.attr = function(e, t) {
                            (e.ownerDocument || e) != d && p(e);
                            var i = r.attrHandle[t.toLowerCase()],
                                o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                        }, se.escape = function(e) {
                            return (e + "").replace(re, ie)
                        }, se.error = function(e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }, se.uniqueSort = function(e) {
                            var t, r = [],
                                i = 0,
                                o = 0;
                            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(N), f) {
                                for (; t = e[o++];) t === e[o] && (i = r.push(o));
                                for (; i--;) e.splice(r[i], 1)
                            }
                            return c = null, e
                        }, i = se.getText = function(e) {
                            var t, n = "",
                                r = 0,
                                o = e.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                                } else if (3 === o || 4 === o) return e.nodeValue
                            } else
                                for (; t = e[r++];) n += i(t);
                            return n
                        }, (r = se.selectors = {
                            cacheLength: 50,
                            createPseudo: le,
                            match: G,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                                },
                                PSEUDO: function(e) {
                                    var t, n = !e[6] && e[2];
                                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var t = e.replace(te, ne).toLowerCase();
                                    return "*" === e ? function() {
                                        return !0
                                    } : function(e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t
                                    }
                                },
                                CLASS: function(e) {
                                    var t = E[e + " "];
                                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, (function(e) {
                                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                    }))
                                },
                                ATTR: function(e, t, n) {
                                    return function(r) {
                                        var i = se.attr(r, e);
                                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                    }
                                },
                                CHILD: function(e, t, n, r, i) {
                                    var o = "nth" !== e.slice(0, 3),
                                        a = "last" !== e.slice(-4),
                                        s = "of-type" === t;
                                    return 1 === r && 0 === i ? function(e) {
                                        return !!e.parentNode
                                    } : function(t, n, u) {
                                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                            v = t.parentNode,
                                            y = s && t.nodeName.toLowerCase(),
                                            m = !u && !s,
                                            x = !1;
                                        if (v) {
                                            if (o) {
                                                for (; g;) {
                                                    for (p = t; p = p[g];)
                                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                                    h = g = "only" === e && !h && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (h = [a ? v.firstChild : v.lastChild], a && m) {
                                                for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
                                                    if (1 === p.nodeType && ++x && p === t) {
                                                        c[e] = [T, d, x];
                                                        break
                                                    }
                                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                                for (;
                                                    (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t)););
                                            return (x -= i) === r || x % r == 0 && x / r >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(e, t) {
                                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
                                        for (var r, o = i(e, t), a = o.length; a--;) e[r = P(e, o[a])] = !(n[r] = o[a])
                                    })) : function(e) {
                                        return i(e, 0, n)
                                    }) : i
                                }
                            },
                            pseudos: {
                                not: le((function(e) {
                                    var t = [],
                                        n = [],
                                        r = s(e.replace($, "$1"));
                                    return r[b] ? le((function(e, t, n, i) {
                                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                    })) : function(e, i, o) {
                                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                                    }
                                })),
                                has: le((function(e) {
                                    return function(t) {
                                        return se(e, t).length > 0
                                    }
                                })),
                                contains: le((function(e) {
                                    return e = e.replace(te, ne),
                                        function(t) {
                                            return (t.textContent || i(t)).indexOf(e) > -1
                                        }
                                })),
                                lang: le((function(e) {
                                    return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                        function(t) {
                                            var n;
                                            do {
                                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1
                                        }
                                })),
                                target: function(t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function(e) {
                                    return e === h
                                },
                                focus: function(e) {
                                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: ge(!1),
                                disabled: ge(!0),
                                checked: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(e) {
                                    return !r.pseudos.empty(e)
                                },
                                header: function(e) {
                                    return J.test(e.nodeName)
                                },
                                input: function(e) {
                                    return Q.test(e.nodeName)
                                },
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function(e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: ve((function() {
                                    return [0]
                                })),
                                last: ve((function(e, t) {
                                    return [t - 1]
                                })),
                                eq: ve((function(e, t, n) {
                                    return [n < 0 ? n + t : n]
                                })),
                                even: ve((function(e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e
                                })),
                                odd: ve((function(e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e
                                })),
                                lt: ve((function(e, t, n) {
                                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                                    return e
                                })),
                                gt: ve((function(e, t, n) {
                                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                                    return e
                                }))
                            }
                        }).pseudos.nth = r.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) r.pseudos[t] = de(t);
                        for (t in {
                            submit: !0,
                            reset: !0
                        }) r.pseudos[t] = he(t);

                        function me() {}

                        function xe(e) {
                            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                            return r
                        }

                        function be(e, t, n) {
                            var r = t.dir,
                                i = t.next,
                                o = i || r,
                                a = n && "parentNode" === o,
                                s = C++;
                            return t.first ? function(t, n, i) {
                                for (; t = t[r];)
                                    if (1 === t.nodeType || a) return e(t, n, i);
                                return !1
                            } : function(t, n, u) {
                                var l, c, f, p = [T, s];
                                if (u) {
                                    for (; t = t[r];)
                                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                                } else
                                    for (; t = t[r];)
                                        if (1 === t.nodeType || a)
                                            if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                                            else {
                                                if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                                            } return !1
                            }
                        }

                        function we(e) {
                            return e.length > 1 ? function(t, n, r) {
                                for (var i = e.length; i--;)
                                    if (!e[i](t, n, r)) return !1;
                                return !0
                            } : e[0]
                        }

                        function Te(e, t, n, r, i) {
                            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
                            return a
                        }

                        function Ce(e, t, n, r, i, o) {
                            return r && !r[b] && (r = Ce(r)), i && !i[b] && (i = Ce(i, o)), le((function(o, a, s, u) {
                                var l, c, f, p = [],
                                    d = [],
                                    h = a.length,
                                    g = o || function(e, t, n) {
                                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                        return n
                                    }(t || "*", s.nodeType ? [s] : s, []),
                                    v = !e || !o && t ? g : Te(g, p, e, s, u),
                                    y = n ? i || (o ? e : h || r) ? [] : a : v;
                                if (n && n(v, y, s, u), r)
                                    for (l = Te(y, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
                                if (o) {
                                    if (i || e) {
                                        if (i) {
                                            for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                                            i(null, y = [], l, u)
                                        }
                                        for (c = y.length; c--;)(f = y[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                                    }
                                } else y = Te(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
                            }))
                        }

                        function Ee(e) {
                            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be((function(e) {
                                return e === t
                            }), s, !0), f = be((function(e) {
                                return P(t, e) > -1
                            }), s, !0), p = [
                                function(e, n, r) {
                                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                                    return t = null, i
                                }
                            ]; u < o; u++)
                                if (n = r.relative[e[u].type]) p = [be(we(p), n)];
                                else {
                                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                                        for (i = ++u; i < o && !r.relative[e[i].type]; i++);
                                        return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({
                                            value: " " === e[u - 2].type ? "*" : ""
                                        })).replace($, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e))
                                    }
                                    p.push(n)
                                }
                            return we(p)
                        }
                        return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = se.tokenize = function(e, t) {
                            var n, i, o, a, s, u, l, c = S[e + " "];
                            if (c) return t ? 0 : c.slice(0);
                            for (s = e, u = [], l = r.preFilter; s;) {
                                for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
                                    value: n,
                                    type: i[0].replace($, " ")
                                }), s = s.slice(n.length)), r.filter)!(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                                    value: n,
                                    type: a,
                                    matches: i
                                }), s = s.slice(n.length));
                                if (!n) break
                            }
                            return t ? s.length : s ? se.error(e) : S(e, u).slice(0)
                        }, s = se.compile = function(e, t) {
                            var n, i = [],
                                o = [],
                                s = k[e + " "];
                            if (!s) {
                                for (t || (t = a(e)), n = t.length; n--;)(s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
                                (s = k(e, function(e, t) {
                                    var n = t.length > 0,
                                        i = e.length > 0,
                                        o = function(o, a, s, u, c) {
                                            var f, h, v, y = 0,
                                                m = "0",
                                                x = o && [],
                                                b = [],
                                                w = l,
                                                C = o || i && r.find.TAG("*", c),
                                                E = T += null == w ? 1 : Math.random() || .1,
                                                S = C.length;
                                            for (c && (l = a == d || a || c); m !== S && null != (f = C[m]); m++) {
                                                if (i && f) {
                                                    for (h = 0, a || f.ownerDocument == d || (p(f), s = !g); v = e[h++];)
                                                        if (v(f, a || d, s)) {
                                                            u.push(f);
                                                            break
                                                        }
                                                    c && (T = E)
                                                }
                                                n && ((f = !v && f) && y--, o && x.push(f))
                                            }
                                            if (y += m, n && m !== y) {
                                                for (h = 0; v = t[h++];) v(x, b, a, s);
                                                if (o) {
                                                    if (y > 0)
                                                        for (; m--;) x[m] || b[m] || (b[m] = L.call(u));
                                                    b = Te(b)
                                                }
                                                H.apply(u, b), c && !o && b.length > 0 && y + t.length > 1 && se.uniqueSort(u)
                                            }
                                            return c && (T = E, l = w), x
                                        };
                                    return n ? le(o) : o
                                }(o, i))).selector = e
                            }
                            return s
                        }, u = se.select = function(e, t, n, i) {
                            var o, u, l, c, f, p = "function" == typeof e && e,
                                d = !i && a(e = p.selector || e);
                            if (n = n || [], 1 === d.length) {
                                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                                    if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                                }
                                for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);)
                                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
                                        if (u.splice(o, 1), !(e = i.length && xe(u))) return H.apply(n, i), n;
                                        break
                                    }
                            }
                            return (p || s(e, d))(i, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n
                        }, n.sortStable = b.split("").sort(N).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ce((function(e) {
                            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
                        })), ce((function(e) {
                            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                        })) || fe("type|href|height|width", (function(e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        })), n.attributes && ce((function(e) {
                            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                        })) || fe("value", (function(e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                        })), ce((function(e) {
                            return null == e.getAttribute("disabled")
                        })) || fe(R, (function(e, t, n) {
                            var r;
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                        })), se
                    }(n);
                C.find = S, C.expr = S.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = S.uniqueSort, C.text = S.getText, C.isXMLDoc = S.isXML, C.contains = S.contains, C.escapeSelector = S.escape;
                var k = function(e, t, n) {
                        for (var r = [], i = void 0 !== n;
                            (e = e[t]) && 9 !== e.nodeType;)
                            if (1 === e.nodeType) {
                                if (i && C(e).is(n)) break;
                                r.push(e)
                            }
                        return r
                    },
                    A = function(e, t) {
                        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                        return n
                    },
                    N = C.expr.match.needsContext;

                function j(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }
                var D = /^<([a-z][^\/\0>: \t\r\n\f]*)[ \t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                function L(e, t, n) {
                    return y(t) ? C.grep(e, (function(e, r) {
                        return !!t.call(e, r, e) !== n
                    })) : t.nodeType ? C.grep(e, (function(e) {
                        return e === t !== n
                    })) : "string" != typeof t ? C.grep(e, (function(e) {
                        return c.call(t, e) > -1 !== n
                    })) : C.filter(t, e, n)
                }
                C.filter = function(e, t, n) {
                    var r = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, (function(e) {
                        return 1 === e.nodeType
                    })))
                }, C.fn.extend({
                    find: function(e) {
                        var t, n, r = this.length,
                            i = this;
                        if ("string" != typeof e) return this.pushStack(C(e).filter((function() {
                            for (t = 0; t < r; t++)
                                if (C.contains(i[t], this)) return !0
                        })));
                        for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
                        return r > 1 ? C.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(L(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(L(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!L(this, "string" == typeof e && N.test(e) ? C(e) : e || [], !1).length
                    }
                });
                var q, H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (C.fn.init = function(e, t, n) {
                    var r, i;
                    if (!e) return this;
                    if (n = n || q, "string" == typeof e) {
                        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : H.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : x, !0)), D.test(r[1]) && C.isPlainObject(t))
                                for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        return (i = x.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
                }).prototype = C.fn, q = C(x);
                var O = /^(?:parents|prev(?:Until|All))/,
                    P = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };

                function R(e, t) {
                    for (;
                        (e = e[t]) && 1 !== e.nodeType;);
                    return e
                }
                C.fn.extend({
                    has: function(e) {
                        var t = C(e, this),
                            n = t.length;
                        return this.filter((function() {
                            for (var e = 0; e < n; e++)
                                if (C.contains(this, t[e])) return !0
                        }))
                    },
                    closest: function(e, t) {
                        var n, r = 0,
                            i = this.length,
                            o = [],
                            a = "string" != typeof e && C(e);
                        if (!N.test(e))
                            for (; r < i; r++)
                                for (n = this[r]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                        o.push(n);
                                        break
                                    }
                        return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? c.call(C(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }), C.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return k(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return k(e, "parentNode", n)
                    },
                    next: function(e) {
                        return R(e, "nextSibling")
                    },
                    prev: function(e) {
                        return R(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return k(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return k(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return k(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return k(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return A((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return A(e.firstChild)
                    },
                    contents: function(e) {
                        return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (j(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
                    }
                }, (function(e, t) {
                    C.fn[e] = function(n, r) {
                        var i = C.map(this, t, n);
                        return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = C.filter(r, i)), this.length > 1 && (P[e] || C.uniqueSort(i), O.test(e) && i.reverse()), this.pushStack(i)
                    }
                }));
                var M = /[^ \t\r\n\f]+/g;

                function I(e) {
                    return e
                }

                function W(e) {
                    throw e
                }

                function F(e, t, n, r) {
                    var i;
                    try {
                        e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
                    } catch (e) {
                        n.apply(void 0, [e])
                    }
                }
                C.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return C.each(e.match(M) || [], (function(e, n) {
                            t[n] = !0
                        })), t
                    }(e) : C.extend({}, e);
                    var t, n, r, i, o = [],
                        a = [],
                        s = -1,
                        u = function() {
                            for (i = i || e.once, r = t = !0; a.length; s = -1)
                                for (n = a.shift(); ++s < o.length;)!1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                            e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
                        },
                        l = {
                            add: function() {
                                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                    C.each(n, (function(n, r) {
                                        y(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== T(r) && t(r)
                                    }))
                                }(arguments), n && !t && u()), this
                            },
                            remove: function() {
                                return C.each(arguments, (function(e, t) {
                                    for (var n;
                                        (n = C.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                                })), this
                            },
                            has: function(e) {
                                return e ? C.inArray(e, o) > -1 : o.length > 0
                            },
                            empty: function() {
                                return o && (o = []), this
                            },
                            disable: function() {
                                return i = a = [], o = n = "", this
                            },
                            disabled: function() {
                                return !o
                            },
                            lock: function() {
                                return i = a = [], n || t || (o = n = ""), this
                            },
                            locked: function() {
                                return !!i
                            },
                            fireWith: function(e, n) {
                                return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                            },
                            fire: function() {
                                return l.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!r
                            }
                        };
                    return l
                }, C.extend({
                    Deferred: function(e) {
                        var t = [
                                ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                                ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                            ],
                            r = "pending",
                            i = {
                                state: function() {
                                    return r
                                },
                                always: function() {
                                    return o.done(arguments).fail(arguments), this
                                },
                                catch: function(e) {
                                    return i.then(null, e)
                                },
                                pipe: function() {
                                    var e = arguments;
                                    return C.Deferred((function(n) {
                                        C.each(t, (function(t, r) {
                                            var i = y(e[r[4]]) && e[r[4]];
                                            o[r[1]]((function() {
                                                var e = i && i.apply(this, arguments);
                                                e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                            }))
                                        })), e = null
                                    })).promise()
                                },
                                then: function(e, r, i) {
                                    var o = 0;

                                    function a(e, t, r, i) {
                                        return function() {
                                            var s = this,
                                                u = arguments,
                                                l = function() {
                                                    var n, l;
                                                    if (!(e < o)) {
                                                        if ((n = r.apply(s, u)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                        l = n && ("object" == typeof n || "function" == typeof n) && n.then, y(l) ? i ? l.call(n, a(o, t, I, i), a(o, t, W, i)) : (o++, l.call(n, a(o, t, I, i), a(o, t, W, i), a(o, t, I, t.notifyWith))) : (r !== I && (s = void 0, u = [n]), (i || t.resolveWith)(s, u))
                                                    }
                                                },
                                                c = i ? l : function() {
                                                    try {
                                                        l()
                                                    } catch (n) {
                                                        C.Deferred.exceptionHook && C.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (r !== W && (s = void 0, u = [n]), t.rejectWith(s, u))
                                                    }
                                                };
                                            e ? c() : (C.Deferred.getStackHook && (c.stackTrace = C.Deferred.getStackHook()), n.setTimeout(c))
                                        }
                                    }
                                    return C.Deferred((function(n) {
                                        t[0][3].add(a(0, n, y(i) ? i : I, n.notifyWith)), t[1][3].add(a(0, n, y(e) ? e : I)), t[2][3].add(a(0, n, y(r) ? r : W))
                                    })).promise()
                                },
                                promise: function(e) {
                                    return null != e ? C.extend(e, i) : i
                                }
                            },
                            o = {};
                        return C.each(t, (function(e, n) {
                            var a = n[2],
                                s = n[5];
                            i[n[1]] = a.add, s && a.add((function() {
                                r = s
                            }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), o[n[0]] = function() {
                                return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                            }, o[n[0] + "With"] = a.fireWith
                        })), i.promise(o), e && e.call(o, o), o
                    },
                    when: function(e) {
                        var t = arguments.length,
                            n = t,
                            r = Array(n),
                            i = s.call(arguments),
                            o = C.Deferred(),
                            a = function(e) {
                                return function(n) {
                                    r[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : n, --t || o.resolveWith(r, i)
                                }
                            };
                        if (t <= 1 && (F(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || y(i[n] && i[n].then))) return o.then();
                        for (; n--;) F(i[n], a(n), o.reject);
                        return o.promise()
                    }
                });
                var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                C.Deferred.exceptionHook = function(e, t) {
                    n.console && n.console.warn && e && B.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                }, C.readyException = function(e) {
                    n.setTimeout((function() {
                        throw e
                    }))
                };
                var $ = C.Deferred();

                function _() {
                    x.removeEventListener("DOMContentLoaded", _), n.removeEventListener("load", _), C.ready()
                }
                C.fn.ready = function(e) {
                    return $.then(e).catch((function(e) {
                        C.readyException(e)
                    })), this
                }, C.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || $.resolveWith(x, [C]))
                    }
                }), C.ready.then = $.then, "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? n.setTimeout(C.ready) : (x.addEventListener("DOMContentLoaded", _), n.addEventListener("load", _));
                var z = function(e, t, n, r, i, o, a) {
                        var s = 0,
                            u = e.length,
                            l = null == n;
                        if ("object" === T(n))
                            for (s in i = !0, n) z(e, t, s, n[s], !0, o, a);
                        else if (void 0 !== r && (i = !0, y(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                            return l.call(C(e), n)
                        })), t))
                            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
                    },
                    U = /^-ms-/,
                    X = /-([a-z])/g;

                function V(e, t) {
                    return t.toUpperCase()
                }

                function G(e) {
                    return e.replace(U, "ms-").replace(X, V)
                }
                var Y = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                };

                function Q() {
                    this.expando = C.expando + Q.uid++
                }
                Q.uid = 1, Q.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))), t
                    },
                    set: function(e, t, n) {
                        var r, i = this.cache(e);
                        if ("string" == typeof t) i[G(t)] = n;
                        else
                            for (r in t) i[G(r)] = t[r];
                        return i
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                    },
                    remove: function(e, t) {
                        var n, r = e[this.expando];
                        if (void 0 !== r) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                                for (; n--;) delete r[t[n]]
                            }(void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !C.isEmptyObject(t)
                    }
                };
                var J = new Q,
                    K = new Q,
                    Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    ee = /[A-Z]/g;

                function te(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType)
                        if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                            try {
                                n = function(e) {
                                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
                                }(n)
                            } catch (e) {}
                            K.set(e, t, n)
                        } else n = void 0;
                    return n
                }
                C.extend({
                    hasData: function(e) {
                        return K.hasData(e) || J.hasData(e)
                    },
                    data: function(e, t, n) {
                        return K.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        K.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return J.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        J.remove(e, t)
                    }
                }), C.fn.extend({
                    data: function(e, t) {
                        var n, r, i, o = this[0],
                            a = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                                for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), te(o, r, i[r]));
                                J.set(o, "hasDataAttrs", !0)
                            }
                            return i
                        }
                        return "object" == typeof e ? this.each((function() {
                            K.set(this, e)
                        })) : z(this, (function(t) {
                            var n;
                            if (o && void 0 === t) return void 0 !== (n = K.get(o, e)) || void 0 !== (n = te(o, e)) ? n : void 0;
                            this.each((function() {
                                K.set(this, e, t)
                            }))
                        }), null, t, arguments.length > 1, null, !0)
                    },
                    removeData: function(e) {
                        return this.each((function() {
                            K.remove(this, e)
                        }))
                    }
                }), C.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, C.makeArray(n)) : r.push(n)), r || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = C.queue(e, t),
                            r = n.length,
                            i = n.shift(),
                            o = C._queueHooks(e, t);
                        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, (function() {
                            C.dequeue(e, t)
                        }), o)), !r && o && o.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return J.get(e, n) || J.access(e, n, {
                            empty: C.Callbacks("once memory").add((function() {
                                J.remove(e, [t + "queue", n])
                            }))
                        })
                    }
                }), C.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                            var n = C.queue(this, e, t);
                            C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                        }))
                    },
                    dequeue: function(e) {
                        return this.each((function() {
                            C.dequeue(this, e)
                        }))
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, r = 1,
                            i = C.Deferred(),
                            o = this,
                            a = this.length,
                            s = function() {
                                --r || i.resolveWith(o, [o])
                            };
                        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                        return s(), i.promise(t)
                    }
                });
                var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
                    ie = ["Top", "Right", "Bottom", "Left"],
                    oe = x.documentElement,
                    ae = function(e) {
                        return C.contains(e.ownerDocument, e)
                    },
                    se = {
                        composed: !0
                    };
                oe.getRootNode && (ae = function(e) {
                    return C.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
                });
                var ue = function(e, t) {
                    return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === C.css(e, "display")
                };

                function le(e, t, n, r) {
                    var i, o, a = 20,
                        s = r ? function() {
                            return r.cur()
                        } : function() {
                            return C.css(e, t, "")
                        },
                        u = s(),
                        l = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                        c = e.nodeType && (C.cssNumber[t] || "px" !== l && +u) && re.exec(C.css(e, t));
                    if (c && c[3] !== l) {
                        for (u /= 2, l = l || c[3], c = +u || 1; a--;) C.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
                        c *= 2, C.style(e, t, c + l), n = n || []
                    }
                    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
                }
                var ce = {};

                function fe(e) {
                    var t, n = e.ownerDocument,
                        r = e.nodeName,
                        i = ce[r];
                    return i || (t = n.body.appendChild(n.createElement(r)), i = C.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ce[r] = i, i)
                }

                function pe(e, t) {
                    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ue(r) && (i[o] = fe(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
                    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
                    return e
                }
                C.fn.extend({
                    show: function() {
                        return pe(this, !0)
                    },
                    hide: function() {
                        return pe(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                            ue(this) ? C(this).show() : C(this).hide()
                        }))
                    }
                });
                var de, he, ge = /^(?:checkbox|radio)$/i,
                    ve = /<([a-z][^\/\0> \t\r\n\f]*)/i,
                    ye = /^$|^module$|\/(?:java|ecma)script/i;
                de = x.createDocumentFragment().appendChild(x.createElement("div")), (he = x.createElement("input")).setAttribute("type", "radio"), he.setAttribute("checked", "checked"), he.setAttribute("name", "t"), de.appendChild(he), v.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked, de.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue, de.innerHTML = "<option></option>", v.option = !!de.lastChild;
                var me = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

                function xe(e, t) {
                    var n;
                    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && j(e, t) ? C.merge([e], n) : n
                }

                function be(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
                }
                me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, v.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
                var we = /<|&#?\w+;/;

                function Te(e, t, n, r, i) {
                    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                        if ((o = e[d]) || 0 === o)
                            if ("object" === T(o)) C.merge(p, o.nodeType ? [o] : o);
                            else if (we.test(o)) {
                        for (a = a || f.appendChild(t.createElement("div")), s = (ve.exec(o) || ["", ""])[1].toLowerCase(), u = me[s] || me._default, a.innerHTML = u[1] + C.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
                        C.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
                    } else p.push(t.createTextNode(o));
                    for (f.textContent = "", d = 0; o = p[d++];)
                        if (r && C.inArray(o, r) > -1) i && i.push(o);
                        else if (l = ae(o), a = xe(f.appendChild(o), "script"), l && be(a), n)
                        for (c = 0; o = a[c++];) ye.test(o.type || "") && n.push(o);
                    return f
                }
                var Ce = /^([^.]*)(?:\.(.+)|)/;

                function Ee() {
                    return !0
                }

                function Se() {
                    return !1
                }

                function ke(e, t) {
                    return e === function() {
                        try {
                            return x.activeElement
                        } catch (e) {}
                    }() == ("focus" === t)
                }

                function Ae(e, t, n, r, i, o) {
                    var a, s;
                    if ("object" == typeof t) {
                        for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
                        return e
                    }
                    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
                    else if (!i) return e;
                    return 1 === o && (a = i, (i = function(e) {
                        return C().off(e), a.apply(this, arguments)
                    }).guid = a.guid || (a.guid = C.guid++)), e.each((function() {
                        C.event.add(this, t, i, r, n)
                    }))
                }

                function Ne(e, t, n) {
                    n ? (J.set(e, t, !1), C.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var r, i, o = J.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (o.length)(C.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (o = s.call(arguments), J.set(this, t, o), r = n(this, t), this[t](), o !== (i = J.get(this, t)) || r ? J.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i && i.value
                            } else o.length && (J.set(this, t, {
                                value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this)
                            }), e.stopImmediatePropagation())
                        }
                    })) : void 0 === J.get(e, t) && C.event.add(e, t, Ee)
                }
                C.event = {
                    global: {},
                    add: function(e, t, n, r, i) {
                        var o, a, s, u, l, c, f, p, d, h, g, v = J.get(e);
                        if (Y(e))
                            for (n.handler && (n = (o = n).handler, i = o.selector), i && C.find.matchesSelector(oe, i), n.guid || (n.guid = C.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(t) {
                                return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                            }), l = (t = (t || "").match(M) || [""]).length; l--;) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = C.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = C.event.special[d] || {}, c = C.extend({
                                type: d,
                                origType: g,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && C.expr.match.needsContext.test(i),
                                namespace: h.join(".")
                            }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), C.event.global[d] = !0)
                    },
                    remove: function(e, t, n, r, i) {
                        var o, a, s, u, l, c, f, p, d, h, g, v = J.hasData(e) && J.get(e);
                        if (v && (u = v.events)) {
                            for (l = (t = (t || "").match(M) || [""]).length; l--;)
                                if (d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                                    for (f = C.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || C.removeEvent(e, d, v.handle), delete u[d])
                                } else
                                    for (d in u) C.event.remove(e, d + t[l], n, r, !0);
                            C.isEmptyObject(u) && J.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, r, i, o, a, s = new Array(arguments.length),
                            u = C.event.fix(e),
                            l = (J.get(this, "events") || Object.create(null))[u.type] || [],
                            c = C.event.special[u.type] || {};
                        for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                        if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                            for (a = C.event.handlers.call(this, u, l), t = 0;
                                (i = a[t++]) && !u.isPropagationStopped();)
                                for (u.currentTarget = i.elem, n = 0;
                                    (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                            return c.postDispatch && c.postDispatch.call(this, u), u.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, r, i, o, a, s = [],
                            u = t.delegateCount,
                            l = e.target;
                        if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                            for (; l !== this; l = l.parentNode || this)
                                if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                    for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? C(i, this).index(l) > -1 : C.find(i, this, null, [l]).length), a[i] && o.push(r);
                                    o.length && s.push({
                                        elem: l,
                                        handlers: o
                                    })
                                }
                        return l = this, u < t.length && s.push({
                            elem: l,
                            handlers: t.slice(u)
                        }), s
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(C.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: y(t) ? function() {
                                if (this.originalEvent) return t(this.originalEvent)
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[e]
                            },
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[C.expando] ? e : new C.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return ge.test(t.type) && t.click && j(t, "input") && Ne(t, "click", Ee), !1
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return ge.test(t.type) && t.click && j(t, "input") && Ne(t, "click"), !0
                            },
                            _default: function(e) {
                                var t = e.target;
                                return ge.test(t.type) && t.click && j(t, "input") && J.get(t, "click") || j(t, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                }, C.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }, C.Event = function(e, t) {
                    if (!(this instanceof C.Event)) return new C.Event(e, t);
                    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
                }, C.Event.prototype = {
                    constructor: C.Event,
                    isDefaultPrevented: Se,
                    isPropagationStopped: Se,
                    isImmediatePropagationStopped: Se,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, C.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0
                }, C.event.addProp), C.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    C.event.special[e] = {
                        setup: function() {
                            return Ne(this, e, ke), !1
                        },
                        trigger: function() {
                            return Ne(this, e), !0
                        },
                        _default: function() {
                            return !0
                        },
                        delegateType: t
                    }
                })), C.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(e, t) {
                    C.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, r = this,
                                i = e.relatedTarget,
                                o = e.handleObj;
                            return i && (i === r || C.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                        }
                    }
                })), C.fn.extend({
                    on: function(e, t, n, r) {
                        return Ae(this, e, t, n, r)
                    },
                    one: function(e, t, n, r) {
                        return Ae(this, e, t, n, r, 1)
                    },
                    off: function(e, t, n) {
                        var r, i;
                        if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                        if ("object" == typeof e) {
                            for (i in e) this.off(i, t, e[i]);
                            return this
                        }
                        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each((function() {
                            C.event.remove(this, e, n, t)
                        }))
                    }
                });
                var je = /<script|<style|<link/i,
                    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                function qe(e, t) {
                    return j(e, "table") && j(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
                }

                function He(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                }

                function Oe(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                }

                function Pe(e, t) {
                    var n, r, i, o, a, s;
                    if (1 === t.nodeType) {
                        if (J.hasData(e) && (s = J.get(e).events))
                            for (i in J.remove(t, "handle events"), s)
                                for (n = 0, r = s[i].length; n < r; n++) C.event.add(t, i, s[i][n]);
                        K.hasData(e) && (o = K.access(e), a = C.extend({}, o), K.set(t, a))
                    }
                }

                function Re(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && ge.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }

                function Me(e, t, n, r) {
                    t = u(t);
                    var i, o, a, s, l, c, f = 0,
                        p = e.length,
                        d = p - 1,
                        h = t[0],
                        g = y(h);
                    if (g || p > 1 && "string" == typeof h && !v.checkClone && De.test(h)) return e.each((function(i) {
                        var o = e.eq(i);
                        g && (t[0] = h.call(this, i, o.html())), Me(o, t, n, r)
                    }));
                    if (p && (o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                        for (s = (a = C.map(xe(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = C.clone(l, !0, !0), s && C.merge(a, xe(l, "script"))), n.call(e[f], l, f);
                        if (s)
                            for (c = a[a.length - 1].ownerDocument, C.map(a, Oe), f = 0; f < s; f++) l = a[f], ye.test(l.type || "") && !J.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                                nonce: l.nonce || l.getAttribute("nonce")
                            }, c) : w(l.textContent.replace(Le, ""), l, c))
                    }
                    return e
                }

                function Ie(e, t, n) {
                    for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || C.cleanData(xe(r)), r.parentNode && (n && ae(r) && be(xe(r, "script")), r.parentNode.removeChild(r));
                    return e
                }
                C.extend({
                    htmlPrefilter: function(e) {
                        return e
                    },
                    clone: function(e, t, n) {
                        var r, i, o, a, s = e.cloneNode(!0),
                            u = ae(e);
                        if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                            for (a = xe(s), r = 0, i = (o = xe(e)).length; r < i; r++) Re(o[r], a[r]);
                        if (t)
                            if (n)
                                for (o = o || xe(e), a = a || xe(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                            else Pe(e, s);
                        return (a = xe(s, "script")).length > 0 && be(a, !u && xe(e, "script")), s
                    },
                    cleanData: function(e) {
                        for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                            if (Y(n)) {
                                if (t = n[J.expando]) {
                                    if (t.events)
                                        for (r in t.events) i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                                    n[J.expando] = void 0
                                }
                                n[K.expando] && (n[K.expando] = void 0)
                            }
                    }
                }), C.fn.extend({
                    detach: function(e) {
                        return Ie(this, e, !0)
                    },
                    remove: function(e) {
                        return Ie(this, e)
                    },
                    text: function(e) {
                        return z(this, (function(e) {
                            return void 0 === e ? C.text(this) : this.empty().each((function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            }))
                        }), null, e, arguments.length)
                    },
                    append: function() {
                        return Me(this, arguments, (function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
                        }))
                    },
                    prepend: function() {
                        return Me(this, arguments, (function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = qe(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        }))
                    },
                    before: function() {
                        return Me(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        }))
                    },
                    after: function() {
                        return Me(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        }))
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(xe(e, !1)), e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e, t = null == t ? e : t, this.map((function() {
                            return C.clone(this, e, t)
                        }))
                    },
                    html: function(e) {
                        return z(this, (function(e) {
                            var t = this[0] || {},
                                n = 0,
                                r = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if ("string" == typeof e && !je.test(e) && !me[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = C.htmlPrefilter(e);
                                try {
                                    for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(xe(t, !1)), t.innerHTML = e);
                                    t = 0
                                } catch (e) {}
                            }
                            t && this.empty().append(e)
                        }), null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return Me(this, arguments, (function(t) {
                            var n = this.parentNode;
                            C.inArray(this, e) < 0 && (C.cleanData(xe(this)), n && n.replaceChild(t, this))
                        }), e)
                    }
                }), C.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(e, t) {
                    C.fn[e] = function(e) {
                        for (var n, r = [], i = C(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), C(i[a])[t](n), l.apply(r, n.get());
                        return this.pushStack(r)
                    }
                }));
                var We = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
                    Fe = function(e) {
                        var t = e.ownerDocument.defaultView;
                        return t && t.opener || (t = n), t.getComputedStyle(e)
                    },
                    Be = function(e, t, n) {
                        var r, i, o = {};
                        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
                        for (i in r = n.call(e), t) e.style[i] = o[i];
                        return r
                    },
                    $e = new RegExp(ie.join("|"), "i");

                function _e(e, t, n) {
                    var r, i, o, a, s = e.style;
                    return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ae(e) || (a = C.style(e, t)), !v.pixelBoxStyles() && We.test(a) && $e.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
                }

                function ze(e, t) {
                    return {
                        get: function() {
                            if (!e()) return (this.get = t).apply(this, arguments);
                            delete this.get
                        }
                    }
                }! function() {
                    function e() {
                        if (c) {
                            l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(l).appendChild(c);
                            var e = n.getComputedStyle(c);
                            r = "1%" !== e.top, u = 12 === t(e.marginLeft), c.style.right = "60%", a = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), oe.removeChild(l), c = null
                        }
                    }

                    function t(e) {
                        return Math.round(parseFloat(e))
                    }
                    var r, i, o, a, s, u, l = x.createElement("div"),
                        c = x.createElement("div");
                    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(v, {
                        boxSizingReliable: function() {
                            return e(), i
                        },
                        pixelBoxStyles: function() {
                            return e(), a
                        },
                        pixelPosition: function() {
                            return e(), r
                        },
                        reliableMarginLeft: function() {
                            return e(), u
                        },
                        scrollboxSize: function() {
                            return e(), o
                        },
                        reliableTrDimensions: function() {
                            var e, t, r, i;
                            return null == s && (e = x.createElement("table"), t = x.createElement("tr"), r = x.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", r.style.height = "9px", r.style.display = "block", oe.appendChild(e).appendChild(t).appendChild(r), i = n.getComputedStyle(t), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight, oe.removeChild(e)), s
                        }
                    }))
                }();
                var Ue = ["Webkit", "Moz", "ms"],
                    Xe = x.createElement("div").style,
                    Ve = {};

                function Ge(e) {
                    var t = C.cssProps[e] || Ve[e];
                    return t || (e in Xe ? e : Ve[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--;)
                            if ((e = Ue[n] + t) in Xe) return e
                    }(e) || e)
                }
                var Ye = /^(none|table(?!-c[ea]).+)/,
                    Qe = /^--/,
                    Je = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    },
                    Ke = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    };

                function Ze(e, t, n) {
                    var r = re.exec(t);
                    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
                }

                function et(e, t, n, r, i, o) {
                    var a = "width" === t ? 1 : 0,
                        s = 0,
                        u = 0;
                    if (n === (r ? "border" : "content")) return 0;
                    for (; a < 4; a += 2) "margin" === n && (u += C.css(e, n + ie[a], !0, i)), r ? ("content" === n && (u -= C.css(e, "padding" + ie[a], !0, i)), "margin" !== n && (u -= C.css(e, "border" + ie[a] + "Width", !0, i))) : (u += C.css(e, "padding" + ie[a], !0, i), "padding" !== n ? u += C.css(e, "border" + ie[a] + "Width", !0, i) : s += C.css(e, "border" + ie[a] + "Width", !0, i));
                    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
                }

                function tt(e, t, n) {
                    var r = Fe(e),
                        i = (!v.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                        o = i,
                        a = _e(e, t, r),
                        s = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (We.test(a)) {
                        if (!n) return a;
                        a = "auto"
                    }
                    return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && j(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === C.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
                }

                function nt(e, t, n, r, i) {
                    return new nt.prototype.init(e, t, n, r, i)
                }
                C.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = _e(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var i, o, a, s = G(t),
                                u = Qe.test(t),
                                l = e.style;
                            if (u || (t = Ge(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                            "string" === (o = typeof n) && (i = re.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (C.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                        }
                    },
                    css: function(e, t, n, r) {
                        var i, o, a, s = G(t);
                        return Qe.test(t) || (t = Ge(s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                    }
                }), C.each(["height", "width"], (function(e, t) {
                    C.cssHooks[t] = {
                        get: function(e, n, r) {
                            if (n) return !Ye.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, r) : Be(e, Je, (function() {
                                return tt(e, t, r)
                            }))
                        },
                        set: function(e, n, r) {
                            var i, o = Fe(e),
                                a = !v.scrollboxSize() && "absolute" === o.position,
                                s = (a || r) && "border-box" === C.css(e, "boxSizing", !1, o),
                                u = r ? et(e, t, r, s, o) : 0;
                            return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - et(e, t, "border", !1, o) - .5)), u && (i = re.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = C.css(e, t)), Ze(0, n, u)
                        }
                    }
                })), C.cssHooks.marginLeft = ze(v.reliableMarginLeft, (function(e, t) {
                    if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - Be(e, {
                        marginLeft: 0
                    }, (function() {
                        return e.getBoundingClientRect().left
                    }))) + "px"
                })), C.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, t) {
                    C.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
                            return i
                        }
                    }, "margin" !== e && (C.cssHooks[e + t].set = Ze)
                })), C.fn.extend({
                    css: function(e, t) {
                        return z(this, (function(e, t, n) {
                            var r, i, o = {},
                                a = 0;
                            if (Array.isArray(t)) {
                                for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = C.css(e, t[a], !1, r);
                                return o
                            }
                            return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                        }), e, t, arguments.length > 1)
                    }
                }), C.Tween = nt, nt.prototype = {
                    constructor: nt,
                    init: function(e, t, n, r, i, o) {
                        this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = nt.propHooks[this.prop];
                        return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = nt.propHooks[this.prop];
                        return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
                    }
                }, nt.prototype.init.prototype = nt.prototype, nt.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        },
                        set: function(e) {
                            C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                }, nt.propHooks.scrollTop = nt.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                }, C.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                }, C.fx = nt.prototype.init, C.fx.step = {};
                var rt, it, ot = /^(?:toggle|show|hide)$/,
                    at = /queueHooks$/;

                function st() {
                    it && (!1 === x.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(st) : n.setTimeout(st, C.fx.interval), C.fx.tick())
                }

                function ut() {
                    return n.setTimeout((function() {
                        rt = void 0
                    })), rt = Date.now()
                }

                function lt(e, t) {
                    var n, r = 0,
                        i = {
                            height: e
                        };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ie[r])] = i["padding" + n] = e;
                    return t && (i.opacity = i.width = e), i
                }

                function ct(e, t, n) {
                    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                        if (r = i[o].call(n, t, e)) return r
                }

                function ft(e, t, n) {
                    var r, i, o = 0,
                        a = ft.prefilters.length,
                        s = C.Deferred().always((function() {
                            delete u.elem
                        })),
                        u = function() {
                            if (i) return !1;
                            for (var t = rt || ut(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                            return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
                        },
                        l = s.promise({
                            elem: e,
                            props: C.extend({}, t),
                            opts: C.extend(!0, {
                                specialEasing: {},
                                easing: C.easing._default
                            }, n),
                            originalProperties: t,
                            originalOptions: n,
                            startTime: rt || ut(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function(t, n) {
                                var r = C.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                                return l.tweens.push(r), r
                            },
                            stop: function(t) {
                                var n = 0,
                                    r = t ? l.tweens.length : 0;
                                if (i) return this;
                                for (i = !0; n < r; n++) l.tweens[n].run(1);
                                return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                            }
                        }),
                        c = l.props;
                    for (! function(e, t) {
                        var n, r, i, o, a;
                        for (n in e)
                            if (i = t[r = G(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = C.cssHooks[r]) && "expand" in a)
                                for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                            else t[r] = i
                    }(c, l.opts.specialEasing); o < a; o++)
                        if (r = ft.prefilters[o].call(l, e, c, l.opts)) return y(r.stop) && (C._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                    return C.map(c, ct, l), y(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), C.fx.timer(C.extend(u, {
                        elem: e,
                        anim: l,
                        queue: l.opts.queue
                    })), l
                }
                C.Animation = C.extend(ft, {
                        tweeners: {
                            "*": [
                                function(e, t) {
                                    var n = this.createTween(e, t);
                                    return le(n.elem, e, re.exec(t), n), n
                                }
                            ]
                        },
                        tweener: function(e, t) {
                            y(e) ? (t = e, e = ["*"]) : e = e.match(M);
                            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
                        },
                        prefilters: [
                            function(e, t, n) {
                                var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                                    p = this,
                                    d = {},
                                    h = e.style,
                                    g = e.nodeType && ue(e),
                                    v = J.get(e, "fxshow");
                                for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                                    a.unqueued || s()
                                }), a.unqueued++, p.always((function() {
                                    p.always((function() {
                                        a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
                                    }))
                                }))), t)
                                    if (i = t[r], ot.test(i)) {
                                        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                                            if ("show" !== i || !v || void 0 === v[r]) continue;
                                            g = !0
                                        }
                                        d[r] = v && v[r] || C.style(e, r)
                                    }
                                if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(d))
                                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = J.get(e, "display")), "none" === (c = C.css(e, "display")) && (l ? c = l : (pe([e], !0), l = e.style.display || l, c = C.css(e, "display"), pe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === C.css(e, "float") && (u || (p.done((function() {
                                        h.display = l
                                    })), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
                                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                    }))), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = J.access(e, "fxshow", {
                                        display: l
                                    }), o && (v.hidden = !g), g && pe([e], !0), p.done((function() {
                                        for (r in g || pe([e]), J.remove(e, "fxshow"), d) C.style(e, r, d[r])
                                    }))), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
                            }
                        ],
                        prefilter: function(e, t) {
                            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
                        }
                    }), C.speed = function(e, t, n) {
                        var r = e && "object" == typeof e ? C.extend({}, e) : {
                            complete: n || !n && t || y(e) && e,
                            duration: e,
                            easing: n && t || t && !y(t) && t
                        };
                        return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                            y(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
                        }, r
                    }, C.fn.extend({
                        fadeTo: function(e, t, n, r) {
                            return this.filter(ue).css("opacity", 0).show().end().animate({
                                opacity: t
                            }, e, n, r)
                        },
                        animate: function(e, t, n, r) {
                            var i = C.isEmptyObject(e),
                                o = C.speed(t, n, r),
                                a = function() {
                                    var t = ft(this, C.extend({}, e), o);
                                    (i || J.get(this, "finish")) && t.stop(!0)
                                };
                            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                        },
                        stop: function(e, t, n) {
                            var r = function(e) {
                                var t = e.stop;
                                delete e.stop, t(n)
                            };
                            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                                var t = !0,
                                    i = null != e && e + "queueHooks",
                                    o = C.timers,
                                    a = J.get(this);
                                if (i) a[i] && a[i].stop && r(a[i]);
                                else
                                    for (i in a) a[i] && a[i].stop && at.test(i) && r(a[i]);
                                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                                !t && n || C.dequeue(this, e)
                            }))
                        },
                        finish: function(e) {
                            return !1 !== e && (e = e || "fx"), this.each((function() {
                                var t, n = J.get(this),
                                    r = n[e + "queue"],
                                    i = n[e + "queueHooks"],
                                    o = C.timers,
                                    a = r ? r.length : 0;
                                for (n.finish = !0, C.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                delete n.finish
                            }))
                        }
                    }), C.each(["toggle", "show", "hide"], (function(e, t) {
                        var n = C.fn[t];
                        C.fn[t] = function(e, r, i) {
                            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(lt(t, !0), e, r, i)
                        }
                    })), C.each({
                        slideDown: lt("show"),
                        slideUp: lt("hide"),
                        slideToggle: lt("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    }, (function(e, t) {
                        C.fn[e] = function(e, n, r) {
                            return this.animate(t, e, n, r)
                        }
                    })), C.timers = [], C.fx.tick = function() {
                        var e, t = 0,
                            n = C.timers;
                        for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                        n.length || C.fx.stop(), rt = void 0
                    }, C.fx.timer = function(e) {
                        C.timers.push(e), C.fx.start()
                    }, C.fx.interval = 13, C.fx.start = function() {
                        it || (it = !0, st())
                    }, C.fx.stop = function() {
                        it = null
                    }, C.fx.speeds = {
                        slow: 600,
                        fast: 200,
                        _default: 400
                    }, C.fn.delay = function(e, t) {
                        return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, r) {
                            var i = n.setTimeout(t, e);
                            r.stop = function() {
                                n.clearTimeout(i)
                            }
                        }))
                    },
                    function() {
                        var e = x.createElement("input"),
                            t = x.createElement("select").appendChild(x.createElement("option"));
                        e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = x.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
                    }();
                var pt, dt = C.expr.attrHandle;
                C.fn.extend({
                    attr: function(e, t) {
                        return z(this, C.attr, e, t, arguments.length > 1)
                    },
                    removeAttr: function(e) {
                        return this.each((function() {
                            C.removeAttr(this, e)
                        }))
                    }
                }), C.extend({
                    attr: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!v.radioValue && "radio" === t && j(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, r = 0,
                            i = t && t.match(M);
                        if (i && 1 === e.nodeType)
                            for (; n = i[r++];) e.removeAttribute(n)
                    }
                }), pt = {
                    set: function(e, t, n) {
                        return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
                    }
                }, C.each(C.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                    var n = dt[t] || C.find.attr;
                    dt[t] = function(e, t, r) {
                        var i, o, a = t.toLowerCase();
                        return r || (o = dt[a], dt[a] = i, i = null != n(e, t, r) ? a : null, dt[a] = o), i
                    }
                }));
                var ht = /^(?:input|select|textarea|button)$/i,
                    gt = /^(?:a|area)$/i;

                function vt(e) {
                    return (e.match(M) || []).join(" ")
                }

                function yt(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }

                function mt(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
                }
                C.fn.extend({
                    prop: function(e, t) {
                        return z(this, C.prop, e, t, arguments.length > 1)
                    },
                    removeProp: function(e) {
                        return this.each((function() {
                            delete this[C.propFix[e] || e]
                        }))
                    }
                }), C.extend({
                    prop: function(e, t, n) {
                        var r, i, o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = C.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), v.optSelected || (C.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex, null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                    }
                }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    C.propFix[this.toLowerCase()] = this
                })), C.fn.extend({
                    addClass: function(e) {
                        var t, n, r, i, o, a, s, u = 0;
                        if (y(e)) return this.each((function(t) {
                            C(this).addClass(e.call(this, t, yt(this)))
                        }));
                        if ((t = mt(e)).length)
                            for (; n = this[u++];)
                                if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                                    for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                    i !== (s = vt(r)) && n.setAttribute("class", s)
                                }
                        return this
                    },
                    removeClass: function(e) {
                        var t, n, r, i, o, a, s, u = 0;
                        if (y(e)) return this.each((function(t) {
                            C(this).removeClass(e.call(this, t, yt(this)))
                        }));
                        if (!arguments.length) return this.attr("class", "");
                        if ((t = mt(e)).length)
                            for (; n = this[u++];)
                                if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                                    for (a = 0; o = t[a++];)
                                        for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                    i !== (s = vt(r)) && n.setAttribute("class", s)
                                }
                        return this
                    },
                    toggleClass: function(e, t) {
                        var n = typeof e,
                            r = "string" === n || Array.isArray(e);
                        return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each((function(n) {
                            C(this).toggleClass(e.call(this, n, yt(this), t), t)
                        })) : this.each((function() {
                            var t, i, o, a;
                            if (r)
                                for (i = 0, o = C(this), a = mt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                            else void 0 !== e && "boolean" !== n || ((t = yt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
                        }))
                    },
                    hasClass: function(e) {
                        var t, n, r = 0;
                        for (t = " " + e + " "; n = this[r++];)
                            if (1 === n.nodeType && (" " + vt(yt(n)) + " ").indexOf(t) > -1) return !0;
                        return !1
                    }
                });
                var xt = /\r/g;
                C.fn.extend({
                    val: function(e) {
                        var t, n, r, i = this[0];
                        return arguments.length ? (r = y(e), this.each((function(n) {
                            var i;
                            1 === this.nodeType && (null == (i = r ? e.call(this, n, C(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = C.map(i, (function(e) {
                                return null == e ? "" : e + ""
                            }))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        }))) : i ? (t = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(xt, "") : null == n ? "" : n : void 0
                    }
                }), C.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = C.find.attr(e, "value");
                                return null != t ? t : vt(C.text(e))
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, r, i = e.options,
                                    o = e.selectedIndex,
                                    a = "select-one" === e.type,
                                    s = a ? null : [],
                                    u = a ? o + 1 : i.length;
                                for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                                    if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                                        if (t = C(n).val(), a) return t;
                                        s.push(t)
                                    }
                                return s
                            },
                            set: function(e, t) {
                                for (var n, r, i = e.options, o = C.makeArray(t), a = i.length; a--;)((r = i[a]).selected = C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), o
                            }
                        }
                    }
                }), C.each(["radio", "checkbox"], (function() {
                    C.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
                        }
                    }, v.checkOn || (C.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    })
                })), v.focusin = "onfocusin" in n;
                var bt = /^(?:focusinfocus|focusoutblur)$/,
                    wt = function(e) {
                        e.stopPropagation()
                    };
                C.extend(C.event, {
                    trigger: function(e, t, r, i) {
                        var o, a, s, u, l, c, f, p, h = [r || x],
                            g = d.call(e, "type") ? e.type : e,
                            v = d.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (a = p = s = r = r || x, 3 !== r.nodeType && 8 !== r.nodeType && !bt.test(g + C.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), l = g.indexOf(":") < 0 && "on" + g, (e = e[C.expando] ? e : new C.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : C.makeArray(t, [e]), f = C.event.special[g] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, t))) {
                            if (!i && !f.noBubble && !m(r)) {
                                for (u = f.delegateType || g, bt.test(u + g) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                                s === (r.ownerDocument || x) && h.push(s.defaultView || s.parentWindow || n)
                            }
                            for (o = 0;
                                (a = h[o++]) && !e.isPropagationStopped();) p = a, e.type = o > 1 ? u : f.bindType || g, (c = (J.get(a, "events") || Object.create(null))[e.type] && J.get(a, "handle")) && c.apply(a, t), (c = l && a[l]) && c.apply && Y(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
                            return e.type = g, i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), t) || !Y(r) || l && y(r[g]) && !m(r) && ((s = r[l]) && (r[l] = null), C.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, wt), r[g](), e.isPropagationStopped() && p.removeEventListener(g, wt), C.event.triggered = void 0, s && (r[l] = s)), e.result
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = C.extend(new C.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        C.event.trigger(r, null, t)
                    }
                }), C.fn.extend({
                    trigger: function(e, t) {
                        return this.each((function() {
                            C.event.trigger(e, t, this)
                        }))
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n) return C.event.trigger(e, t, n, !0)
                    }
                }), v.focusin || C.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    var n = function(e) {
                        C.event.simulate(t, e.target, C.event.fix(e))
                    };
                    C.event.special[t] = {
                        setup: function() {
                            var r = this.ownerDocument || this.document || this,
                                i = J.access(r, t);
                            i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
                        },
                        teardown: function() {
                            var r = this.ownerDocument || this.document || this,
                                i = J.access(r, t) - 1;
                            i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
                        }
                    }
                }));
                var Tt = n.location,
                    Ct = {
                        guid: Date.now()
                    },
                    Et = /\?/;
                C.parseXML = function(e) {
                    var t, r;
                    if (!e || "string" != typeof e) return null;
                    try {
                        t = (new n.DOMParser).parseFromString(e, "text/xml")
                    } catch (e) {}
                    return r = t && t.getElementsByTagName("parsererror")[0], t && !r || C.error("Invalid XML: " + (r ? C.map(r.childNodes, (function(e) {
                        return e.textContent
                    })).join("\n") : e)), t
                };
                var St = /\[\]$/,
                    kt = /\r?\n/g,
                    At = /^(?:submit|button|image|reset|file)$/i,
                    Nt = /^(?:input|select|textarea|keygen)/i;

                function jt(e, t, n, r) {
                    var i;
                    if (Array.isArray(t)) C.each(t, (function(t, i) {
                        n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                    }));
                    else if (n || "object" !== T(t)) r(e, t);
                    else
                        for (i in t) jt(e + "[" + i + "]", t[i], n, r)
                }
                C.param = function(e, t) {
                    var n, r = [],
                        i = function(e, t) {
                            var n = y(t) ? t() : t;
                            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                        };
                    if (null == e) return "";
                    if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function() {
                        i(this.name, this.value)
                    }));
                    else
                        for (n in e) jt(n, e[n], t, i);
                    return r.join("&")
                }, C.fn.extend({
                    serialize: function() {
                        return C.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var e = C.prop(this, "elements");
                            return e ? C.makeArray(e) : this
                        })).filter((function() {
                            var e = this.type;
                            return this.name && !C(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !ge.test(e))
                        })).map((function(e, t) {
                            var n = C(this).val();
                            return null == n ? null : Array.isArray(n) ? C.map(n, (function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(kt, "\r\n")
                                }
                            })) : {
                                name: t.name,
                                value: n.replace(kt, "\r\n")
                            }
                        })).get()
                    }
                });
                var Dt = /%20/g,
                    Lt = /#.*$/,
                    qt = /([?&])_=[^&]*/,
                    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    Ot = /^(?:GET|HEAD)$/,
                    Pt = /^\/\//,
                    Rt = {},
                    Mt = {},
                    It = "*/".concat("*"),
                    Wt = x.createElement("a");

                function Ft(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t, t = "*");
                        var r, i = 0,
                            o = t.toLowerCase().match(M) || [];
                        if (y(n))
                            for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                    }
                }

                function Bt(e, t, n, r) {
                    var i = {},
                        o = e === Mt;

                    function a(s) {
                        var u;
                        return i[s] = !0, C.each(e[s] || [], (function(e, s) {
                            var l = s(t, n, r);
                            return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                        })), u
                    }
                    return a(t.dataTypes[0]) || !i["*"] && a("*")
                }

                function $t(e, t) {
                    var n, r, i = C.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && C.extend(!0, e, r), e
                }
                Wt.href = Tt.href, C.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Tt.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": It,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": C.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? $t($t(e, C.ajaxSettings), t) : $t(C.ajaxSettings, e)
                    },
                    ajaxPrefilter: Ft(Rt),
                    ajaxTransport: Ft(Mt),
                    ajax: function(e, t) {
                        "object" == typeof e && (t = e, e = void 0), t = t || {};
                        var r, i, o, a, s, u, l, c, f, p, d = C.ajaxSetup({}, t),
                            h = d.context || d,
                            g = d.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                            v = C.Deferred(),
                            y = C.Callbacks("once memory"),
                            m = d.statusCode || {},
                            b = {},
                            w = {},
                            T = "canceled",
                            E = {
                                readyState: 0,
                                getResponseHeader: function(e) {
                                    var t;
                                    if (l) {
                                        if (!a)
                                            for (a = {}; t = Ht.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = a[e.toLowerCase() + " "]
                                    }
                                    return null == t ? null : t.join(", ")
                                },
                                getAllResponseHeaders: function() {
                                    return l ? o : null
                                },
                                setRequestHeader: function(e, t) {
                                    return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
                                },
                                overrideMimeType: function(e) {
                                    return null == l && (d.mimeType = e), this
                                },
                                statusCode: function(e) {
                                    var t;
                                    if (e)
                                        if (l) E.always(e[E.status]);
                                        else
                                            for (t in e) m[t] = [m[t], e[t]];
                                    return this
                                },
                                abort: function(e) {
                                    var t = e || T;
                                    return r && r.abort(t), S(0, t), this
                                }
                            };
                        if (v.promise(E), d.url = ((e || d.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(M) || [""], null == d.crossDomain) {
                            u = x.createElement("a");
                            try {
                                u.href = d.url, u.href = u.href, d.crossDomain = Wt.protocol + "//" + Wt.host != u.protocol + "//" + u.host
                            } catch (e) {
                                d.crossDomain = !0
                            }
                        }
                        if (d.data && d.processData && "string" != typeof d.data && (d.data = C.param(d.data, d.traditional)), Bt(Rt, d, t, E), l) return E;
                        for (f in (c = C.event && d.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ot.test(d.type), i = d.url.replace(Lt, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(Dt, "+")) : (p = d.url.slice(i.length), d.data && (d.processData || "string" == typeof d.data) && (i += (Et.test(i) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (i = i.replace(qt, "$1"), p = (Et.test(i) ? "&" : "?") + "_=" + Ct.guid+++p), d.url = i + p), d.ifModified && (C.lastModified[i] && E.setRequestHeader("If-Modified-Since", C.lastModified[i]), C.etag[i] && E.setRequestHeader("If-None-Match", C.etag[i])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && E.setRequestHeader("Content-Type", d.contentType), E.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + It + "; q=0.01" : "") : d.accepts["*"]), d.headers) E.setRequestHeader(f, d.headers[f]);
                        if (d.beforeSend && (!1 === d.beforeSend.call(h, E, d) || l)) return E.abort();
                        if (T = "abort", y.add(d.complete), E.done(d.success), E.fail(d.error), r = Bt(Mt, d, t, E)) {
                            if (E.readyState = 1, c && g.trigger("ajaxSend", [E, d]), l) return E;
                            d.async && d.timeout > 0 && (s = n.setTimeout((function() {
                                E.abort("timeout")
                            }), d.timeout));
                            try {
                                l = !1, r.send(b, S)
                            } catch (e) {
                                if (l) throw e;
                                S(-1, e)
                            }
                        } else S(-1, "No Transport");

                        function S(e, t, a, u) {
                            var f, p, x, b, w, T = t;
                            l || (l = !0, s && n.clearTimeout(s), r = void 0, o = u || "", E.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || 304 === e, a && (b = function(e, t, n) {
                                for (var r, i, o, a, s = e.contents, u = e.dataTypes;
                                    "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                            o = i;
                                            break
                                        }
                                        a || (a = i)
                                    }
                                    o = o || a
                                } if (o) return o !== u[0] && u.unshift(o), n[o]
                            }(d, E, a)), !f && C.inArray("script", d.dataTypes) > -1 && C.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function() {}), b = function(e, t, n, r) {
                                var i, o, a, s, u, l = {},
                                    c = e.dataTypes.slice();
                                if (c[1])
                                    for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                                for (o = c.shift(); o;)
                                    if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                                        if ("*" === o) o = u;
                                        else if ("*" !== u && u !== o) {
                                    if (!(a = l[u + " " + o] || l["* " + o]))
                                        for (i in l)
                                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== a)
                                        if (a && e.throws) t = a(t);
                                        else try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                                }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(d, b, E, f), f ? (d.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (C.lastModified[i] = w), (w = E.getResponseHeader("etag")) && (C.etag[i] = w)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state, p = b.data, f = !(x = b.error))) : (x = T, !e && T || (T = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || T) + "", f ? v.resolveWith(h, [p, T, E]) : v.rejectWith(h, [E, T, x]), E.statusCode(m), m = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [E, d, f ? p : x]), y.fireWith(h, [E, T]), c && (g.trigger("ajaxComplete", [E, d]), --C.active || C.event.trigger("ajaxStop")))
                        }
                        return E
                    },
                    getJSON: function(e, t, n) {
                        return C.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return C.get(e, void 0, t, "script")
                    }
                }), C.each(["get", "post"], (function(e, t) {
                    C[t] = function(e, n, r, i) {
                        return y(n) && (i = i || r, r = n, n = void 0), C.ajax(C.extend({
                            url: e,
                            type: t,
                            dataType: i,
                            data: n,
                            success: r
                        }, C.isPlainObject(e) && e))
                    }
                })), C.ajaxPrefilter((function(e) {
                    var t;
                    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                })), C._evalUrl = function(e, t, n) {
                    return C.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            C.globalEval(e, t, n)
                        }
                    })
                }, C.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                            return e
                        })).append(this)), this
                    },
                    wrapInner: function(e) {
                        return y(e) ? this.each((function(t) {
                            C(this).wrapInner(e.call(this, t))
                        })) : this.each((function() {
                            var t = C(this),
                                n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        }))
                    },
                    wrap: function(e) {
                        var t = y(e);
                        return this.each((function(n) {
                            C(this).wrapAll(t ? e.call(this, n) : e)
                        }))
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each((function() {
                            C(this).replaceWith(this.childNodes)
                        })), this
                    }
                }), C.expr.pseudos.hidden = function(e) {
                    return !C.expr.pseudos.visible(e)
                }, C.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }, C.ajaxSettings.xhr = function() {
                    try {
                        return new n.XMLHttpRequest
                    } catch (e) {}
                };
                var _t = {
                        0: 200,
                        1223: 204
                    },
                    zt = C.ajaxSettings.xhr();
                v.cors = !!zt && "withCredentials" in zt, v.ajax = zt = !!zt, C.ajaxTransport((function(e) {
                    var t, r;
                    if (v.cors || zt && !e.crossDomain) return {
                        send: function(i, o) {
                            var a, s = e.xhr();
                            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (a in e.xhrFields) s[a] = e.xhrFields[a];
                            for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
                            t = function(e) {
                                return function() {
                                    t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(_t[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                        binary: s.response
                                    } : {
                                        text: s.responseText
                                    }, s.getAllResponseHeaders()))
                                }
                            }, s.onload = t(), r = s.onerror = s.ontimeout = t("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                                4 === s.readyState && n.setTimeout((function() {
                                    t && r()
                                }))
                            }, t = t("abort");
                            try {
                                s.send(e.hasContent && e.data || null)
                            } catch (e) {
                                if (t) throw e
                            }
                        },
                        abort: function() {
                            t && t()
                        }
                    }
                })), C.ajaxPrefilter((function(e) {
                    e.crossDomain && (e.contents.script = !1)
                })), C.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return C.globalEval(e), e
                        }
                    }
                }), C.ajaxPrefilter("script", (function(e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                })), C.ajaxTransport("script", (function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs) return {
                        send: function(r, i) {
                            t = C("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                            }), x.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }));
                var Ut, Xt = [],
                    Vt = /(=)\?(?=&|$)|\?\?/;
                C.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = Xt.pop() || C.expando + "_" + Ct.guid++;
                        return this[e] = !0, e
                    }
                }), C.ajaxPrefilter("json jsonp", (function(e, t, r) {
                    var i, o, a, s = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Vt, "$1" + i) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                        return a || C.error(i + " was not called"), a[0]
                    }, e.dataTypes[0] = "json", o = n[i], n[i] = function() {
                        a = arguments
                    }, r.always((function() {
                        void 0 === o ? C(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Xt.push(i)), a && y(o) && o(a[0]), a = o = void 0
                    })), "script"
                })), v.createHTMLDocument = ((Ut = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), C.parseHTML = function(e, t, n) {
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href, t.head.appendChild(r)) : t = x), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = Te([e], t, o), o && o.length && C(o).remove(), C.merge([], i.childNodes)));
                    var r, i, o
                }, C.fn.load = function(e, t, n) {
                    var r, i, o, a = this,
                        s = e.indexOf(" ");
                    return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && C.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t
                    }).done((function(e) {
                        o = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
                    })).always(n && function(e, t) {
                        a.each((function() {
                            n.apply(this, o || [e.responseText, t, e])
                        }))
                    }), this
                }, C.expr.pseudos.animated = function(e) {
                    return C.grep(C.timers, (function(t) {
                        return e === t.elem
                    })).length
                }, C.offset = {
                    setOffset: function(e, t, n) {
                        var r, i, o, a, s, u, l = C.css(e, "position"),
                            c = C(e),
                            f = {};
                        "static" === l && (e.style.position = "relative"), s = c.offset(), o = C.css(e, "top"), u = C.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), y(t) && (t = t.call(e, n, C.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
                    }
                }, C.fn.extend({
                    offset: function(e) {
                        if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                            C.offset.setOffset(this, e, t)
                        }));
                        var t, n, r = this[0];
                        return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, r = this[0],
                                i = {
                                    top: 0,
                                    left: 0
                                };
                            if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                            else {
                                for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                                e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0), i.left += C.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: t.top - i.top - C.css(r, "marginTop", !0),
                                left: t.left - i.left - C.css(r, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                            return e || oe
                        }))
                    }
                }), C.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(e, t) {
                    var n = "pageYOffset" === t;
                    C.fn[e] = function(r) {
                        return z(this, (function(e, r, i) {
                            var o;
                            if (m(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                        }), e, r, arguments.length)
                    }
                })), C.each(["top", "left"], (function(e, t) {
                    C.cssHooks[t] = ze(v.pixelPosition, (function(e, n) {
                        if (n) return n = _e(e, t), We.test(n) ? C(e).position()[t] + "px" : n
                    }))
                })), C.each({
                    Height: "height",
                    Width: "width"
                }, (function(e, t) {
                    C.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, (function(n, r) {
                        C.fn[r] = function(i, o) {
                            var a = arguments.length && (n || "boolean" != typeof i),
                                s = n || (!0 === i || !0 === o ? "margin" : "border");
                            return z(this, (function(t, n, i) {
                                var o;
                                return m(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? C.css(t, n, s) : C.style(t, n, i, s)
                            }), t, a ? i : void 0, a)
                        }
                    }))
                })), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                    C.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                })), C.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                    C.fn[t] = function(e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }));
                var Gt = /^[\s﻿ ]+|[\s﻿ ]+$/g;
                C.proxy = function(e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), (i = function() {
                        return e.apply(t || this, r.concat(s.call(arguments)))
                    }).guid = e.guid = e.guid || C.guid++, i
                }, C.holdReady = function(e) {
                    e ? C.readyWait++ : C.ready(!0)
                }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = j, C.isFunction = y, C.isWindow = m, C.camelCase = G, C.type = T, C.now = Date.now, C.isNumeric = function(e) {
                    var t = C.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                }, C.trim = function(e) {
                    return null == e ? "" : (e + "").replace(Gt, "")
                }, void 0 === (r = function() {
                    return C
                }.apply(t, [])) || (e.exports = r);
                var Yt = n.jQuery,
                    Qt = n.$;
                return C.noConflict = function(e) {
                    return n.$ === C && (n.$ = Qt), e && n.jQuery === C && (n.jQuery = Yt), C
                }, void 0 === i && (n.jQuery = n.$ = C), C
            }))
        },
        z2n6: function(e, t, n) {
            (function(t) {
                e.exports = t.jQuery = n("EVdn")
            }).call(this, n("yLpj"))
        }
    }
]);
 (window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        "+lvF": function(t, e, a) {
            t.exports = a("VTer")("native-function-to-string", Function.toString)
        },
        "+rLv": function(t, e, a) {
            var i = a("dyZX").document;
            t.exports = i && i.documentElement
        },
        0: function(t, e, a) {
            t.exports = a("A18H")
        },
        "0/R4": function(t, e) {
            t.exports = function(t) {
                return "object" == typeof t ? null !== t : "function" == typeof t
            }
        },
        "0Rmy": function(t) {
            t.exports = JSON.parse('{"v":"5.7.0","fr":25,"ip":0,"op":25,"w":58,"h":62,"nm":" icon-simple","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"路径备份","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":2,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":8}},"s":{"a":0,"k":[-15.995,-22.313],"ix":4},"e":{"a":0,"k":[15.128,21.123],"ix":5},"t":1,"lc":2,"lj":2,"bm":0,"nm":"Gradient Border 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"t":20,"s":[50]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20,"s":[50]}],"ix":2},"o":{"a":0,"k":138,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":26,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"路径","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,26.787,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-7.63,0],[-0.97,-7.35],[-0.01,-0.57],[0,0],[0,0],[-0.08,0.64]],"o":[[7.61,0],[0.07,0.55],[0,0],[0,0],[0,-0.66],[0.95,-7.37]],"v":[[0,-7.5],[14.87,5.52],[15,7.19],[15,7.5],[-15,7.5],[-14.88,5.56]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":2,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":25,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"矩形备份 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[36.648,18.047,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-1.5,-3],[1.5,-3],[1.5,3],[-1.5,3]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"圆角 1","r":{"a":0,"k":1.5,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-35,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形备份 3","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":25,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"矩形备份 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[21.648,18.047,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-2.949,-1.598],[-0.489,-3.318],[2.951,1.592],[0.491,3.322]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"圆角 1","r":{"a":0,"k":1.5,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形备份 2","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":25,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"路径","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[36,29,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.1,0],[0,-1.1],[-1.1,0],[0,1.1]],"o":[[-1.1,0],[0,1.1],[1.1,0],[0,-1.1]],"v":[[0,-2],[-2,0],[0,2],[2,0]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":25,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"路径","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[22.562,29,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.1,0],[0,-1.1],[-1.1,0],[0,1.1]],"o":[[-1.1,0],[0,1.1],[1.1,0],[0,-1.1]],"v":[[0,-2],[-2,0],[0,2],[2,0]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":25,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"android","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[28.399,42.35,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-0.59,0],[-0.41,0.38],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.5,0],[0.38,-0.43],[0,-0.65],[-0.39,-0.44]],"o":[[0.47,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.4,-0.41],[-0.58,0],[-0.39,0.43],[0,0.65],[0.38,0.43]],"v":[[-13.468,3.771],[-12.148,3.201],[-12.148,3.201],[-12.148,3.651],[-11.158,3.651],[-11.158,-0.629],[-12.148,-0.629],[-12.148,-0.129],[-13.488,-0.749],[-14.928,-0.109],[-15.508,1.501],[-14.928,3.131]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0.37,0],[0.23,0.26],[0,0.41],[-0.23,0.26],[-0.34,0],[-0.23,-0.25],[0,-0.41],[0.23,-0.26]],"o":[[-0.34,0],[-0.22,-0.26],[0,-0.38],[0.23,-0.26],[0.36,0],[0.23,0.26],[0,0.4],[-0.23,0.25]],"v":[[-13.318,2.893],[-14.168,2.503],[-14.498,1.493],[-14.158,0.533],[-13.308,0.143],[-12.428,0.523],[-12.088,1.523],[-12.428,2.513]],"c":true},"ix":2},"nm":"路径 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.14,0.22],[-0.32,0],[-0.12,-0.16],[0,-0.42],[0,0],[0,0],[0,0],[0,0],[0.24,0.27],[0.5,0],[0.35,-0.34],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,-0.53],[0.13,-0.21],[0.31,0],[0.12,0.16],[0,0],[0,0],[0,0],[0,0],[0,-0.61],[-0.28,-0.31],[-0.43,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-8.92,3.651],[-8.92,1.581],[-8.71,0.461],[-8.02,0.141],[-7.39,0.381],[-7.22,1.261],[-7.22,1.261],[-7.22,3.651],[-6.22,3.651],[-6.22,1.031],[-6.58,-0.279],[-7.75,-0.749],[-8.92,-0.239],[-8.92,-0.239],[-8.92,-0.629],[-9.91,-0.629],[-9.91,3.651]],"c":true},"ix":2},"nm":"路径 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[-0.58,0],[-0.39,0.38],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.5,0],[0.38,-0.43],[0,-0.64],[-0.39,-0.43]],"o":[[0.5,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.4,-0.41],[-0.57,0],[-0.39,0.43],[0,0.65],[0.38,0.43]],"v":[[-3.147,3.777],[-1.817,3.197],[-1.817,3.197],[-1.817,3.647],[-0.827,3.647],[-0.827,-3.773],[-1.817,-3.773],[-1.817,-0.133],[-3.167,-0.753],[-4.597,-0.103],[-5.177,1.497],[-4.597,3.127]],"c":true},"ix":2},"nm":"路径 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0.37,0],[0.23,0.26],[0,0.41],[-0.23,0.26],[-0.34,0],[-0.23,-0.25],[0,-0.41],[0.23,-0.26]],"o":[[-0.34,0],[-0.22,-0.26],[0,-0.38],[0.23,-0.26],[0.36,0],[0.23,0.26],[0,0.4],[-0.23,0.25]],"v":[[-2.986,2.893],[-3.836,2.503],[-4.166,1.493],[-3.826,0.533],[-2.976,0.143],[-2.096,0.523],[-1.756,1.523],[-2.096,2.513]],"c":true},"ix":2},"nm":"路径 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.54,0],[-0.19,-0.13],[0,0],[0,0],[0.26,0],[0.15,-0.07],[0.18,-0.19],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,-0.81],[0.18,0],[0,0],[0,0],[-0.28,-0.17],[-0.19,0],[-0.14,0.07],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[1.412,3.651],[1.412,1.431],[2.222,0.211],[2.772,0.411],[2.772,0.411],[3.222,-0.499],[2.402,-0.749],[1.892,-0.639],[1.412,-0.249],[1.412,-0.249],[1.412,-0.629],[0.422,-0.629],[0.422,3.651]],"c":true},"ix":2},"nm":"路径 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[-0.64,0],[-0.44,0.43],[0,0.64],[0.44,0.44],[0.64,0],[0.45,-0.43],[0,-0.62],[-0.43,-0.43]],"o":[[0.65,0],[0.44,-0.44],[0,-0.63],[-0.45,-0.43],[-0.63,0],[-0.44,0.43],[0,0.65],[0.43,0.44]],"v":[[5.767,3.771],[7.407,3.131],[8.077,1.511],[7.417,-0.099],[5.787,-0.749],[4.167,-0.099],[3.507,1.481],[4.157,3.111]],"c":true},"ix":2},"nm":"路径 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":0,"k":{"i":[[0.39,0],[0.24,0.25],[0,0.43],[-0.23,0.25],[-0.38,0],[-0.24,-0.25],[0,-0.42],[0.23,-0.25]],"o":[[-0.38,0],[-0.23,-0.25],[0,-0.39],[0.24,-0.25],[0.38,0],[0.23,0.25],[0,0.41],[-0.23,0.25]],"v":[[5.788,2.893],[4.858,2.513],[4.518,1.493],[4.868,0.523],[5.788,0.143],[6.718,0.523],[7.058,1.523],[6.718,2.513]],"c":true},"ix":2},"nm":"路径 8","mn":"ADBE Vector Shape - Group","hd":false},{"ind":8,"ty":"sh","ix":9,"ks":{"a":0,"k":{"i":[[-0.18,0],[-0.12,0.12],[0,0.18],[0.12,0.12],[0.18,0],[0.12,-0.13],[0,-0.18],[-0.13,-0.13]],"o":[[0.17,0],[0.12,-0.13],[0,-0.18],[-0.13,-0.13],[-0.17,0],[-0.13,0.12],[0,0.18],[0.12,0.12]],"v":[[9.619,-1.758],[10.069,-1.948],[10.259,-2.408],[10.069,-2.858],[9.609,-3.048],[9.159,-2.858],[8.969,-2.408],[9.159,-1.948]],"c":true},"ix":2},"nm":"路径 9","mn":"ADBE Vector Shape - Group","hd":false},{"ind":9,"ty":"sh","ix":10,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[10.103,3.649],[10.103,-0.631],[9.123,-0.631],[9.123,3.649]],"c":true},"ix":2},"nm":"路径 10","mn":"ADBE Vector Shape - Group","hd":false},{"ind":10,"ty":"sh","ix":11,"ks":{"a":0,"k":{"i":[[-0.58,0],[-0.39,0.38],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0.5,0],[0.38,-0.43],[0,-0.64],[-0.39,-0.43]],"o":[[0.5,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[-0.4,-0.41],[-0.57,0],[-0.39,0.43],[0,0.65],[0.38,0.43]],"v":[[13.188,3.777],[14.518,3.197],[14.518,3.197],[14.518,3.647],[15.508,3.647],[15.508,-3.773],[14.518,-3.773],[14.518,-0.133],[13.168,-0.753],[11.738,-0.103],[11.158,1.497],[11.738,3.127]],"c":true},"ix":2},"nm":"路径 11","mn":"ADBE Vector Shape - Group","hd":false},{"ind":11,"ty":"sh","ix":12,"ks":{"a":0,"k":{"i":[[0.37,0],[0.23,0.26],[0,0.41],[-0.23,0.26],[-0.34,0],[-0.23,-0.25],[0,-0.41],[0.23,-0.26]],"o":[[-0.34,0],[-0.22,-0.26],[0,-0.38],[0.23,-0.26],[0.36,0],[0.23,0.26],[0,0.4],[-0.23,0.25]],"v":[[13.348,2.893],[12.498,2.503],[12.168,1.493],[12.508,0.533],[13.358,0.143],[14.238,0.523],[14.578,1.523],[14.238,2.513]],"c":true},"ix":2},"nm":"路径 12","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"合并路径 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"android","np":14,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":25,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"路径备份 11","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":9}},"s":{"a":0,"k":[0,0],"ix":5},"e":{"a":0,"k":[100,0],"ix":6},"t":1,"nm":"渐变填充 1","mn":"ADBE Vector Graphic - G-Fill","hd":false}],"ip":11,"op":29,"st":2,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"路径备份 10","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.6,"y":1},"o":{"x":0.32,"y":0.94},"t":11,"s":[-0.5,-19.5,0],"to":[4.917,8.417,0],"ti":[-4.917,-8.417,0]},{"t":25,"s":[29,31,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-16.277,-25.107],"ix":5},"e":{"a":0,"k":[15.903,24.892],"ix":6},"t":1,"nm":"Gradient Fill 7","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":11,"op":29,"st":2,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"路径备份 5","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":9}},"s":{"a":0,"k":[0,0],"ix":5},"e":{"a":0,"k":[100,0],"ix":6},"t":1,"nm":"渐变填充 1","mn":"ADBE Vector Graphic - G-Fill","hd":false}],"ip":7,"op":26,"st":-2,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"路径备份 4","tt":1,"sr":1,"ks":{"o":{"a":0,"k":60,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.6,"y":1},"o":{"x":0.32,"y":0.94},"t":7,"s":[-0.5,-19.5,0],"to":[4.917,8.417,0],"ti":[-4.917,-8.417,0]},{"t":21,"s":[29,31,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-16.277,-25.107],"ix":5},"e":{"a":0,"k":[15.903,24.892],"ix":6},"t":1,"nm":"Gradient Fill 2","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":7,"op":26,"st":-2,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"路径备份 13","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":9}},"s":{"a":0,"k":[0,0],"ix":5},"e":{"a":0,"k":[100,0],"ix":6},"t":1,"nm":"渐变填充 8","mn":"ADBE Vector Graphic - G-Fill","hd":false}],"ip":3,"op":21,"st":-6,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"路径备份 12","tt":1,"sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.6,"y":1},"o":{"x":0.32,"y":0.94},"t":3,"s":[-0.5,-19.5,0],"to":[4.917,8.417,0],"ti":[-4.917,-8.417,0]},{"t":17,"s":[29,31,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-16.277,-25.107],"ix":5},"e":{"a":0,"k":[15.903,24.892],"ix":6},"t":1,"nm":"Gradient Fill 8","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":3,"op":21,"st":-6,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"路径备份 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,30.999,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.169,0.169,0.18,0.5,0.092,0.092,0.098,1,0.016,0.016,0.016],"ix":9}},"s":{"a":0,"k":[-14.627,-24.39],"ix":5},"e":{"a":0,"k":[14.03,24.569],"ix":6},"t":1,"nm":"Gradient Fill 5","mn":"ADBE Vector Graphic - G-Fill","hd":false}],"ip":0,"op":26,"st":0,"bm":0}],"markers":[]}')
        },
        "0aT7": function(t) {
            t.exports = JSON.parse('{"v":"5.7.0","fr":25,"ip":0,"op":21,"w":145,"h":41,"nm":"download右上角-动效","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"空 13","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[73,21,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":21,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"矩形 5","parent":1,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[144,40],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":24,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":1,"ix":10},"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":8}},"s":{"a":0,"k":[-67.606,-14.434],"ix":4},"e":{"a":0,"k":[67.359,15.458],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"渐变描边 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":9}},"s":{"a":0,"k":[-32.766,-18.403],"ix":5},"e":{"a":0,"k":[47.551,20],"ix":6},"t":1,"nm":"渐变填充 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":6,"op":21,"st":-111,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"矩形 2","parent":1,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.674,"y":0.713},"o":{"x":0.342,"y":0.382},"t":6,"s":[-151,-0.5,0],"to":[4.835,0,0],"ti":[-26.012,0,0]},{"i":{"x":0.607,"y":1},"o":{"x":0.323,"y":1},"t":8,"s":[-98.004,-0.5,0],"to":[40.458,0,0],"ti":[-7.823,0,0]},{"t":21,"s":[0,-0.5,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[144,40],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":24,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,1,0.306,0.667,0.5,0.622,0.386,0.833,1,0.243,0.467,1],"ix":9}},"s":{"a":0,"k":[-66.948,-17.694],"ix":5},"e":{"a":0,"k":[65.548,26.561],"ix":6},"t":1,"nm":"Gradient Fill 3","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":6,"op":21,"st":-111,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"矩形 7","parent":1,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[144,40],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":24,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":1,"ix":10},"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":8}},"s":{"a":0,"k":[-67.606,-14.434],"ix":4},"e":{"a":0,"k":[67.359,15.458],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"渐变描边 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":9}},"s":{"a":0,"k":[-32.766,-18.403],"ix":5},"e":{"a":0,"k":[47.551,20],"ix":6},"t":1,"nm":"渐变填充 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":3,"op":21,"st":-114,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"矩形 4","parent":1,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":60,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.675,"y":0.793},"o":{"x":0.348,"y":0.478},"t":3,"s":[-151,-0.5,0],"to":[11.918,0,0],"ti":[-40.348,0,0]},{"i":{"x":0.622,"y":1},"o":{"x":0.313,"y":1},"t":8,"s":[-43.072,-0.5,0],"to":[22.798,0,0],"ti":[-2.367,0,0]},{"t":18,"s":[0,-0.5,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[144,40],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":24,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-66.948,-17.694],"ix":5},"e":{"a":0,"k":[65.548,26.561],"ix":6},"t":1,"nm":"Gradient Fill 2","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":3,"op":21,"st":-114,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"矩形 3","parent":1,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-0.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[144,40],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":24,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":1,"ix":10},"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":8}},"s":{"a":0,"k":[-67.606,-14.434],"ix":4},"e":{"a":0,"k":[67.359,15.458],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"渐变描边 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":9}},"s":{"a":0,"k":[-32.766,-18.403],"ix":5},"e":{"a":0,"k":[47.551,20],"ix":6},"t":1,"nm":"渐变填充 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":21,"st":-117,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"矩形 6","parent":1,"tt":1,"sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.654,"y":0.87},"o":{"x":0.338,"y":0.59},"t":0,"s":[-151,0,0],"to":[9.472,0,0],"ti":[-21.013,0,0]},{"i":{"x":0.627,"y":1},"o":{"x":0.304,"y":0.89},"t":8,"s":[-15.226,-0.5,0],"to":[6.421,0,0],"ti":[-3.673,0,0]},{"t":15,"s":[0,-0.5,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[144,41],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":24,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-66.948,-17.694],"ix":5},"e":{"a":0,"k":[65.548,26.561],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":21,"st":-117,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"矩形 8","parent":1,"sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"t":15,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-0.5,-0.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[144,40],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":24,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":21,"st":-161,"bm":0}],"markers":[{"tm":3,"cm":"1","dr":0},{"tm":6,"cm":"2","dr":0}]}')
        },
        "0mN4": function(t, e, a) {
            "use strict";
            a("OGtf")("fixed", (function(t) {
                return function() {
                    return t(this, "tt", "", "")
                }
            }))
        },
        "0sh+": function(t, e, a) {
            var i = a("quPj"),
                r = a("vhPU");
            t.exports = function(t, e, a) {
                if (i(e)) throw TypeError("String#" + a + " doesn't accept regex!");
                return String(r(t))
            }
        },
        "1MBn": function(t, e, a) {
            var i = a("DVgA"),
                r = a("JiEa"),
                s = a("UqcF");
            t.exports = function(t) {
                var e = i(t),
                    a = r.f;
                if (a)
                    for (var n, o = a(t), l = s.f, h = 0; o.length > h;) l.call(t, n = o[h++]) && e.push(n);
                return e
            }
        },
        "1TsA": function(t, e) {
            t.exports = function(t, e) {
                return {
                    value: e,
                    done: !!t
                }
            }
        },
        "2OiF": function(t, e) {
            t.exports = function(t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t
            }
        },
        "4R4u": function(t, e) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
        },
        "5yfZ": function(t) {
            t.exports = JSON.parse('{"v":"5.7.0","fr":25,"ip":0,"op":25,"w":58,"h":62,"nm":" icon-compatible","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"路径备份","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":2,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":8}},"s":{"a":0,"k":[-15.995,-22.313],"ix":4},"e":{"a":0,"k":[15.128,21.123],"ix":5},"t":1,"lc":2,"lj":2,"bm":0,"nm":"Gradient Border 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"t":20,"s":[50]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20,"s":[50]}],"ix":2},"o":{"a":0,"k":138,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":26,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"路径 7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29.02,31.028,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-7.009,3.008],[-2.329,-3.012],[2.321,3.008],[7.011,-3.012]],"c":false},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径 7","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":25,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"椭圆形备份 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[41,19,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[4,4],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"椭圆形备份 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":25,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"路径","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.97,0],[-0.33,0.05],[0,0],[0,0],[0,0],[2.76,0],[0,0],[0,2.76],[0,0],[-2.76,0],[0,0]],"o":[[0.34,0],[0,0],[0,0],[0,0],[0,2.76],[0,0],[-2.76,0],[0,0],[0,-2.76],[0,0],[0.48,2.84]],"v":[[12,-6],[13,-6.08],[13,-6],[13,-6],[13,6],[8,11],[-8,11],[-13,6],[-13,-6],[-8,-11],[6.08,-11]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":25,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"路径备份 11","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":9}},"s":{"a":0,"k":[0,0],"ix":5},"e":{"a":0,"k":[100,0],"ix":6},"t":1,"nm":"渐变填充 1","mn":"ADBE Vector Graphic - G-Fill","hd":false}],"ip":11,"op":29,"st":2,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"路径备份 10","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.6,"y":1},"o":{"x":0.32,"y":0.94},"t":11,"s":[-0.5,-19.5,0],"to":[4.917,8.417,0],"ti":[-4.917,-8.417,0]},{"t":25,"s":[29,31,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-16.277,-25.107],"ix":5},"e":{"a":0,"k":[15.903,24.892],"ix":6},"t":1,"nm":"Gradient Fill 7","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":11,"op":29,"st":2,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"路径备份 5","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":9}},"s":{"a":0,"k":[0,0],"ix":5},"e":{"a":0,"k":[100,0],"ix":6},"t":1,"nm":"渐变填充 1","mn":"ADBE Vector Graphic - G-Fill","hd":false}],"ip":7,"op":26,"st":-2,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"路径备份 4","tt":1,"sr":1,"ks":{"o":{"a":0,"k":60,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.6,"y":1},"o":{"x":0.32,"y":0.94},"t":7,"s":[-0.5,-19.5,0],"to":[4.917,8.417,0],"ti":[-4.917,-8.417,0]},{"t":21,"s":[29,31,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-16.277,-25.107],"ix":5},"e":{"a":0,"k":[15.903,24.892],"ix":6},"t":1,"nm":"Gradient Fill 2","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":7,"op":26,"st":-2,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"路径备份 13","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":9}},"s":{"a":0,"k":[0,0],"ix":5},"e":{"a":0,"k":[100,0],"ix":6},"t":1,"nm":"渐变填充 8","mn":"ADBE Vector Graphic - G-Fill","hd":false}],"ip":3,"op":21,"st":-6,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"路径备份 12","tt":1,"sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.6,"y":1},"o":{"x":0.32,"y":0.94},"t":3,"s":[-0.5,-19.5,0],"to":[4.917,8.417,0],"ti":[-4.917,-8.417,0]},{"t":17,"s":[29,31,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-16.277,-25.107],"ix":5},"e":{"a":0,"k":[15.903,24.892],"ix":6},"t":1,"nm":"Gradient Fill 8","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":3,"op":21,"st":-6,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"路径备份 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.169,0.169,0.18,0.5,0.092,0.092,0.098,1,0.016,0.016,0.016],"ix":9}},"s":{"a":0,"k":[-14.627,-24.39],"ix":5},"e":{"a":0,"k":[14.03,24.569],"ix":6},"t":1,"nm":"Gradient Fill 5","mn":"ADBE Vector Graphic - G-Fill","hd":false}],"ip":0,"op":26,"st":0,"bm":0}],"markers":[]}')
        },
        "69bn": function(t, e, a) {
            var i = a("y3w9"),
                r = a("2OiF"),
                s = a("K0xU")("species");
            t.exports = function(t, e) {
                var a, n = i(t).constructor;
                return void 0 === n || null == (a = i(n)[s]) ? e : r(a)
            }
        },
        "6FMO": function(t, e, a) {
            var i = a("0/R4"),
                r = a("EWmC"),
                s = a("K0xU")("species");
            t.exports = function(t) {
                var e;
                return r(t) && ("function" != typeof(e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), i(e) && null === (e = e[s]) && (e = void 0)), void 0 === e ? Array : e
            }
        },
        "8+KV": function(t, e, a) {
            "use strict";
            var i = a("XKFU"),
                r = a("CkkT")(0),
                s = a("LyE8")([].forEach, !0);
            i(i.P + i.F * !s, "Array", {
                forEach: function(t) {
                    return r(this, t, arguments[1])
                }
            })
        },
        A18H: function(t, e, a) {
            "use strict";
            a.r(e);
            a("0mN4");
            var i = a("+2Rf"),
                r = a.n(i),
                s = (a("gCrC"), a("hKI/")),
                n = a.n(s),
                o = a("kYze");
            a("hmG0"), a("L9s1"), a("Z2Ku");
            r()((function() {
                (window.ActiveXObject || "ActiveXObject" in window || navigator.userAgent.includes("Edge/")) && r()("html").addClass("is-ie")
            }));
            a("8+KV");
            var l = a("lPHp"),
                h = a.n(l),
                p = a("0Rmy"),
                c = a("QD8t"),
                m = a("5yfZ"),
                d = !1;
            window.addEventListener("load", (function() {
                d = !0
            })), r()((function() {
                var t, e, a;
                (t = document.getElementById("js-panel-video")) && (t.addEventListener("canplay", (function() {
                    t.play(), t.classList.add("active")
                }), {
                    once: !0
                }), d ? (t.load(), t.play()) : window.addEventListener("load", (function() {
                    t.load()
                }))), e = ["#js-android-wrapper", "#js-screen-wrapper", "#js-quick-wrapper"], a = [p, c, m], ["js-icon-android", "js-icon-screen", "js-icon-quick"].forEach((function(t, i) {
                    var s = r()(e[i]),
                        n = h.a.loadAnimation({
                            container: document.getElementById(t),
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: a[i]
                        });
                    s.hover((function() {
                        n.setDirection(1), n.play()
                    }), (function() {
                        n.setDirection(-1), n.play()
                    }))
                }))
            }));
            var f = a("Spam");
            r()((function() {
                var t, e;
                r()("#js-search-btn").on("click", (function() {
                    r()(this).closest("form")[0].submit()
                })), t = r()("#js-btn-app-wrapper"), e = h.a.loadAnimation({
                    container: document.getElementById("js-btn-app"),
                    renderer: "svg",
                    loop: !1,
                    autoplay: !1,
                    animationData: f
                }), t.hover((function() {
                    e.setDirection(1), e.play()
                }), (function() {
                    e.setDirection(-1), e.play()
                }))
            }));
            a("HAE/");
            var u = a("sM/0"),
                g = a("FBMM"),
                y = a("LmFj"),
                v = {
                    swiper: void 0,
                    animMap: {},
                    activeAnim: void 0,
                    activeVideo: void 0,
                    $videoIconList: void 0,
                    $videoPageList: r()("[data-video-pagination]")
                };

            function x() {
                var t = r()("#video-list-wrapper"),
                    e = r()(window).scrollTop(),
                    a = t.offset(),
                    i = v.activeVideo;
                e > a - window.innerHeight / 2 && e <= a + t.height() / 2 ? i ? i.play() : v.swiper && (v.swiper.showVideo(), v.activeVideo.play()) : i && (i.currentTime = 0, i.pause())
            }
            Object.defineProperty(v, "currentVideoIndex", {
                set: function(t) {
                    if (t !== this.currentVideoIndex) {
                        this.$videoPageList.removeClass("active"), this.$videoPageList.get(t).classList.add("active"), this.activeAnim && (this.activeAnim.setDirection(-1), this.activeAnim.play());
                        var e = this.animMap[r()(this.$videoIconList.get(t)).data("video-icon")];
                        e.setDirection(1), e.play(), this.activeAnim = e, this.swiper.realIndex !== t && this.swiper.slideTo(t, 500)
                    }
                }
            }), window.addEventListener("load", (function() {
                x()
            })), window.addEventListener("scroll", n()(x, 100)), r()((function() {
                var t, e, a, i, s;
                t = r()("#js-btn-tutorial-wrapper"), e = h.a.loadAnimation({
                    container: document.getElementById("js-btn-tutorial"),
                    renderer: "svg",
                    loop: !1,
                    autoplay: !1,
                    animationData: f
                }), t.hover((function() {
                    e.setDirection(1), e.play()
                }), (function() {
                    e.setDirection(-1), e.play()
                })), a = {
                    keyboard: u,
                    multiple: g,
                    video: y
                }, v.$videoIconList = r()("[data-video-icon]"), v.$videoIconList.each((function(t, e) {
                    var i = r()(e),
                        s = i.data("video-icon"),
                        n = i.closest("[data-video-pagination]"),
                        o = h.a.loadAnimation({
                            container: e,
                            renderer: "svg",
                            loop: !1,
                            animationData: a[s],
                            autoplay: !1
                        });
                    v.animMap[s] = o, n.hover((function() {
                        window.track({
                            name: "video-hover",
                            content: t + 1
                        }), v.currentVideoIndex = t
                    }), (function() {}))
                })), i = r()("[data-js-video]"), s = new(0, window.Swiper)(".video-list-wrapper", {
                    centeredSlides: !0,
                    slidesPerView: "auto",
                    spaceBetween: 4,
                    runCallbacksOnInit: !1,
                    onSlideChangeStart: function() {
                        s.showVideo()
                    },
                    onSlideChangeEnd: function(t) {
                        var e = t.realIndex,
                            a = t.previousIndex,
                            r = i.get(a);
                        r.currentTime = 0, r.pause(), i.get(e).play()
                    }
                }), r()("[data-js-video]").each((function(t, e) {
                    e.onended = function() {
                        return s.isEnd ? s.slideTo(0) : s.slideNext()
                    }
                })), s.showVideo = function() {
                    var t = s.realIndex,
                        e = s.previousIndex;
                    v.currentVideoIndex = t;
                    var a = i.get(t);
                    a.load(), v.activeVideo = a;
                    try {
                        a.currentTime = 0
                    } catch (t) {
                        a.addEventListener("loadedmetadata", (function() {
                            a.currentTime = 0
                        }), !1)
                    }
                    if (r()(a).addClass("active"), e !== t) {
                        var n = i.get(e);
                        r()(n).removeClass("active")
                    }
                }, v.swiper = s, x()
            })), r()((function() {
                new(0, window.Swiper)(".evaluation-list-wrapper", {
                    centeredSlides: !0,
                    slidesPerView: "auto",
                    spaceBetween: 4,
                    loop: !0,
                    autoplayDisableOnInteraction: !1,
                    pagination: ".evaluation-swiper-pagination",
                    paginationClickable: !0,
                    slideToClickedSlide: !0,
                    runCallbacksOnInit: !1
                })
            }));
            var k = a("rTrL");
            r()((function() {
                var t, e, a, i;
                window.isAdUrl && r.a.getJSON("/api/ironsource", (function(t) {
                    t && 0 === t.code && t.dlUrl && r()("[data-download-major]").attr("href", t.dlUrl)
                })), r()("html").hasClass("is-mobile") && (r()(document).on("click", "[data-download-btn]", (function() {
                    return r()("#download-dialog").addClass("active"), !1
                })), r()("#download-dialog").on("click", "[data-dialog-close]", (function() {
                    r()("#download-dialog").removeClass("active")
                }))), t = r()("#js-major-btn-wrapper"), e = h.a.loadAnimation({
                    container: document.getElementById("js-major-btn"),
                    renderer: "svg",
                    loop: !0,
                    autoplay: !1,
                    animationData: k
                }), t.hover((function() {
                    e.play()
                }), (function() {
                    e.stop()
                })), a = r()("#js-btn-ard9-wrapper"), i = h.a.loadAnimation({
                    container: document.getElementById("js-btn-ard9"),
                    renderer: "svg",
                    loop: !1,
                    autoplay: !1,
                    animationData: f
                }), a.hover((function() {
                    i.setDirection(1), i.play()
                }), (function() {
                    i.setDirection(-1), i.play()
                }))
            })), r()("#egg-section").length && r()("#egg-section").on("click", "[data-close]", (function() {
                r()("#egg-section").remove()
            }));
            var b = function(t) {
                t >= 960 ? o.a.fixed() : o.a.unfixed()
            };

            function E() {
                var t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                b(t)
            }
            b = n()(b, 400), r()(window).scroll(E)
        },
        A5AN: function(t, e, a) {
            "use strict";
            var i = a("AvRE")(!0);
            t.exports = function(t, e, a) {
                return e + (a ? i(t, e).length : 1)
            }
        },
        Afnz: function(t, e, a) {
            "use strict";
            var i = a("LQAc"),
                r = a("XKFU"),
                s = a("KroJ"),
                n = a("Mukb"),
                o = a("hPIQ"),
                l = a("QaDb"),
                h = a("fyDq"),
                p = a("OP3Y"),
                c = a("K0xU")("iterator"),
                m = !([].keys && "next" in [].keys()),
                d = function() {
                    return this
                };
            t.exports = function(t, e, a, f, u, g, y) {
                l(a, e, f);
                var v, x, k, b = function(t) {
                        if (!m && t in P) return P[t];
                        switch (t) {
                            case "keys":
                            case "values":
                                return function() {
                                    return new a(this, t)
                                }
                        }
                        return function() {
                            return new a(this, t)
                        }
                    },
                    E = e + " Iterator",
                    S = "values" == u,
                    w = !1,
                    P = t.prototype,
                    C = P[c] || P["@@iterator"] || u && P[u],
                    A = C || b(u),
                    T = u ? S ? b("entries") : A : void 0,
                    D = "Array" == e && P.entries || C;
                if (D && (k = p(D.call(new t))) !== Object.prototype && k.next && (h(k, E, !0), i || "function" == typeof k[c] || n(k, c, d)), S && C && "values" !== C.name && (w = !0, A = function() {
                    return C.call(this)
                }), i && !y || !m && !w && P[c] || n(P, c, A), o[e] = A, o[E] = d, u)
                    if (v = {
                        values: S ? A : b("values"),
                        keys: g ? A : b("keys"),
                        entries: T
                    }, y)
                        for (x in v) x in P || s(P, x, v[x]);
                    else r(r.P + r.F * (m || w), e, v);
                return v
            }
        },
        AvRE: function(t, e, a) {
            var i = a("RYi7"),
                r = a("vhPU");
            t.exports = function(t) {
                return function(e, a) {
                    var s, n, o = String(r(e)),
                        l = i(a),
                        h = o.length;
                    return l < 0 || l >= h ? t ? "" : void 0 : (s = o.charCodeAt(l)) < 55296 || s > 56319 || l + 1 === h || (n = o.charCodeAt(l + 1)) < 56320 || n > 57343 ? t ? o.charAt(l) : s : t ? o.slice(l, l + 2) : n - 56320 + (s - 55296 << 10) + 65536
                }
            }
        },
        Btvt: function(t, e, a) {
            "use strict";
            var i = a("I8a+"),
                r = {};
            r[a("K0xU")("toStringTag")] = "z", r + "" != "[object z]" && a("KroJ")(Object.prototype, "toString", (function() {
                return "[object " + i(this) + "]"
            }), !0)
        },
        "C/va": function(t, e, a) {
            "use strict";
            var i = a("y3w9");
            t.exports = function() {
                var t = i(this),
                    e = "";
                return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
            }
        },
        CkkT: function(t, e, a) {
            var i = a("m0Pp"),
                r = a("Ymqv"),
                s = a("S/j/"),
                n = a("ne8i"),
                o = a("zRwo");
            t.exports = function(t, e) {
                var a = 1 == t,
                    l = 2 == t,
                    h = 3 == t,
                    p = 4 == t,
                    c = 6 == t,
                    m = 5 == t || c,
                    d = e || o;
                return function(e, o, f) {
                    for (var u, g, y = s(e), v = r(y), x = i(o, f, 3), k = n(v.length), b = 0, E = a ? d(e, k) : l ? d(e, 0) : void 0; k > b; b++)
                        if ((m || b in v) && (g = x(u = v[b], b, y), t))
                            if (a) E[b] = g;
                            else if (g) switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return u;
                        case 6:
                            return b;
                        case 2:
                            E.push(u)
                    } else if (p) return !1;
                    return c ? -1 : h || p ? p : E
                }
            }
        },
        DVgA: function(t, e, a) {
            var i = a("zhAb"),
                r = a("4R4u");
            t.exports = Object.keys || function(t) {
                return i(t, r)
            }
        },
        EWmC: function(t, e, a) {
            var i = a("LZWt");
            t.exports = Array.isArray || function(t) {
                return "Array" == i(t)
            }
        },
        EemH: function(t, e, a) {
            var i = a("UqcF"),
                r = a("RjD/"),
                s = a("aCFj"),
                n = a("apmT"),
                o = a("aagx"),
                l = a("xpql"),
                h = Object.getOwnPropertyDescriptor;
            e.f = a("nh4g") ? h : function(t, e) {
                if (t = s(t), e = n(e, !0), l) try {
                    return h(t, e)
                } catch (t) {}
                if (o(t, e)) return r(!i.f.call(t, e), t[e])
            }
        },
        FBMM: function(t) {
            t.exports = JSON.parse('{"v":"5.7.0","fr":25,"ip":0,"op":15,"w":96,"h":96,"nm":"images/icon_video_hover备份 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":5,"ty":3,"nm":"空 10","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[48,47.25,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.6,0.6,0.6],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[1.41,1.41,0]},"t":0,"s":[100,100,100]},{"t":15,"s":[120,120,100]}],"ix":6}},"ao":0,"ip":0,"op":15,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"矩形备份 2","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-14.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[16,3],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":1.385,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形备份","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":15,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"矩形","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-9.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[26,3],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":1.385,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":15,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"形状 2","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,5.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-3.06],[0,0],[3.06,0],[0,0],[0,3.06],[0,0],[-3.06,0]],"o":[[3.06,0],[0,0],[0,3.06],[0,0],[-3.06,0],[0,0],[0,-3.06],[0,0]],"v":[[12.46,-11.5],[18,-5.96],[18,5.96],[12.46,11.5],[-12.46,11.5],[-18,5.96],[-18,-5.96],[-12.46,-11.5]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[-0.22,0.21],[0,0],[0.42,0.51],[0,0],[0.54,-0.42],[0,0],[0,0],[0,0],[0.54,-0.41],[0,0],[0,0],[-0.42,-0.5],[0,0],[0,0],[-0.33,-0.02],[0,0],[0,0]],"o":[[0,0],[0.47,-0.48],[0,0],[-0.5,-0.49],[0,0],[0,0],[0,0],[-0.5,-0.48],[0,0],[0,0],[-0.47,0.49],[0,0],[0,0],[0.26,0.24],[0,0],[0,0],[0.28,-0.04]],"v":[[-0.995,4.533],[6.885,-3.087],[6.955,-4.837],[6.835,-4.957],[5.025,-5.057],[4.915,-4.957],[-1.955,1.673],[-4.915,-1.177],[-6.725,-1.277],[-6.855,-1.157],[-6.885,-1.127],[-6.955,0.623],[-6.855,0.733],[-2.925,4.533],[-2.025,4.923],[-1.885,4.923],[-1.755,4.903]],"c":true},"ix":2},"nm":"路径 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"合并路径 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":15,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"路径","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.609],"y":[1]},"o":{"x":[0.323],"y":[0]},"t":0,"s":[100]},{"t":15,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[48,48,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.6,0.6,0.6],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[1.41,1.41,0]},"t":0,"s":[100,100,100]},{"t":15,"s":[119,119,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-36.599],[28.95,-23.459],[35,-13.039],[35,13.041],[28.95,23.451],[5.95,36.601],[-5.95,36.601],[-28.95,23.451],[-35,13.041],[-35,-13.039],[-28.95,-23.459],[-5.95,-36.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,0.600000023842],"ix":3},"o":{"a":0,"k":60,"ix":4},"w":{"a":0,"k":0.833,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901961237,0.06274510175,0.196078434587,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":15,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"路径","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.6],"y":[1]},"o":{"x":[0.32],"y":[1.41]},"t":0,"s":[0]},{"t":15,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[48,48,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.6,0.6,0.6],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[1.41,1.41,0]},"t":0,"s":[82,82,100]},{"t":15,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.42,-2.53],[0,0],[0,-5.19],[0,0],[4.49,-2.57],[0,0],[4.42,2.53],[0,0],[0,5.19],[0,0],[-4.49,2.57],[0,0]],"o":[[0,0],[4.49,2.57],[0,0],[0,5.19],[0,0],[-4.42,2.53],[0,0],[-4.49,-2.57],[0,0],[0,-5.19],[0,0],[4.42,-2.53]],"v":[[7.14,-44.1],[34.74,-28.26],[42,-15.71],[42,15.71],[34.74,28.26],[7.14,44.1],[-7.14,44.1],[-34.74,28.26],[-42,15.71],[-42,-15.71],[-34.74,-28.26],[-7.14,-44.1]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-38.345,-31.438],"ix":5},"e":{"a":0,"k":[36.981,55.661],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":15,"st":0,"bm":0}],"markers":[]}')
        },
        FJW5: function(t, e, a) {
            var i = a("hswa"),
                r = a("y3w9"),
                s = a("DVgA");
            t.exports = a("nh4g") ? Object.defineProperties : function(t, e) {
                r(t);
                for (var a, n = s(e), o = n.length, l = 0; o > l;) i.f(t, a = n[l++], e[a]);
                return t
            }
        },
        "HAE/": function(t, e, a) {
            var i = a("XKFU");
            i(i.S + i.F * !a("nh4g"), "Object", {
                defineProperty: a("hswa").f
            })
        },
        I78e: function(t, e, a) {
            "use strict";
            var i = a("XKFU"),
                r = a("+rLv"),
                s = a("LZWt"),
                n = a("d/Gc"),
                o = a("ne8i"),
                l = [].slice;
            i(i.P + i.F * a("eeVq")((function() {
                r && l.call(r)
            })), "Array", {
                slice: function(t, e) {
                    var a = o(this.length),
                        i = s(this);
                    if (e = void 0 === e ? a : e, "Array" == i) return l.call(this, t, e);
                    for (var r = n(t, a), h = n(e, a), p = o(h - r), c = new Array(p), m = 0; m < p; m++) c[m] = "String" == i ? this.charAt(r + m) : this[r + m];
                    return c
                }
            })
        },
        "I8a+": function(t, e, a) {
            var i = a("LZWt"),
                r = a("K0xU")("toStringTag"),
                s = "Arguments" == i(function() {
                    return arguments
                }());
            t.exports = function(t) {
                var e, a, n;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(a = function(t, e) {
                    try {
                        return t[e]
                    } catch (t) {}
                }(e = Object(t), r)) ? a : s ? i(e) : "Object" == (n = i(e)) && "function" == typeof e.callee ? "Arguments" : n
            }
        },
        "IU+Z": function(t, e, a) {
            "use strict";
            a("sMXx");
            var i = a("KroJ"),
                r = a("Mukb"),
                s = a("eeVq"),
                n = a("vhPU"),
                o = a("K0xU"),
                l = a("Ugos"),
                h = o("species"),
                p = !s((function() {
                    var t = /./;
                    return t.exec = function() {
                        var t = [];
                        return t.groups = {
                            a: "7"
                        }, t
                    }, "7" !== "".replace(t, "$<a>")
                })),
                c = function() {
                    var t = /(?:)/,
                        e = t.exec;
                    t.exec = function() {
                        return e.apply(this, arguments)
                    };
                    var a = "ab".split(t);
                    return 2 === a.length && "a" === a[0] && "b" === a[1]
                }();
            t.exports = function(t, e, a) {
                var m = o(t),
                    d = !s((function() {
                        var e = {};
                        return e[m] = function() {
                            return 7
                        }, 7 != "" [t](e)
                    })),
                    f = d ? !s((function() {
                        var e = !1,
                            a = /a/;
                        return a.exec = function() {
                            return e = !0, null
                        }, "split" === t && (a.constructor = {}, a.constructor[h] = function() {
                            return a
                        }), a[m](""), !e
                    })) : void 0;
                if (!d || !f || "replace" === t && !p || "split" === t && !c) {
                    var u = /./ [m],
                        g = a(n, m, "" [t], (function(t, e, a, i, r) {
                            return e.exec === l ? d && !r ? {
                                done: !0,
                                value: u.call(e, a, i)
                            } : {
                                done: !0,
                                value: t.call(a, e, i)
                            } : {
                                done: !1
                            }
                        })),
                        y = g[0],
                        v = g[1];
                    i(String.prototype, t, y), r(RegExp.prototype, m, 2 == e ? function(t, e) {
                        return v.call(t, this, e)
                    } : function(t) {
                        return v.call(t, this)
                    })
                }
            }
        },
        Iw71: function(t, e, a) {
            var i = a("0/R4"),
                r = a("dyZX").document,
                s = i(r) && i(r.createElement);
            t.exports = function(t) {
                return s ? r.createElement(t) : {}
            }
        },
        JiEa: function(t, e) {
            e.f = Object.getOwnPropertySymbols
        },
        K0xU: function(t, e, a) {
            var i = a("VTer")("wks"),
                r = a("ylqs"),
                s = a("dyZX").Symbol,
                n = "function" == typeof s;
            (t.exports = function(t) {
                return i[t] || (i[t] = n && s[t] || (n ? s : r)("Symbol." + t))
            }).store = i
        },
        KKXr: function(t, e, a) {
            "use strict";
            var i = a("quPj"),
                r = a("y3w9"),
                s = a("69bn"),
                n = a("A5AN"),
                o = a("ne8i"),
                l = a("Xxuz"),
                h = a("Ugos"),
                p = a("eeVq"),
                c = Math.min,
                m = [].push,
                d = "length",
                f = !p((function() {
                    RegExp(4294967295, "y")
                }));
            a("IU+Z")("split", 2, (function(t, e, a, p) {
                var u;
                return u = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[d] || 2 != "ab".split(/(?:ab)*/)[d] || 4 != ".".split(/(.?)(.?)/)[d] || ".".split(/()()/)[d] > 1 || "".split(/.?/)[d] ? function(t, e) {
                    var r = String(this);
                    if (void 0 === t && 0 === e) return [];
                    if (!i(t)) return a.call(r, t, e);
                    for (var s, n, o, l = [], p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), c = 0, f = void 0 === e ? 4294967295 : e >>> 0, u = new RegExp(t.source, p + "g");
                        (s = h.call(u, r)) && !((n = u.lastIndex) > c && (l.push(r.slice(c, s.index)), s[d] > 1 && s.index < r[d] && m.apply(l, s.slice(1)), o = s[0][d], c = n, l[d] >= f));) u.lastIndex === s.index && u.lastIndex++;
                    return c === r[d] ? !o && u.test("") || l.push("") : l.push(r.slice(c)), l[d] > f ? l.slice(0, f) : l
                } : "0".split(void 0, 0)[d] ? function(t, e) {
                    return void 0 === t && 0 === e ? [] : a.call(this, t, e)
                } : a, [
                    function(a, i) {
                        var r = t(this),
                            s = null == a ? void 0 : a[e];
                        return void 0 !== s ? s.call(a, r, i) : u.call(String(r), a, i)
                    },
                    function(t, e) {
                        var i = p(u, t, this, e, u !== a);
                        if (i.done) return i.value;
                        var h = r(t),
                            m = String(this),
                            d = s(h, RegExp),
                            g = h.unicode,
                            y = (h.ignoreCase ? "i" : "") + (h.multiline ? "m" : "") + (h.unicode ? "u" : "") + (f ? "y" : "g"),
                            v = new d(f ? h : "^(?:" + h.source + ")", y),
                            x = void 0 === e ? 4294967295 : e >>> 0;
                        if (0 === x) return [];
                        if (0 === m.length) return null === l(v, m) ? [m] : [];
                        for (var k = 0, b = 0, E = []; b < m.length;) {
                            v.lastIndex = f ? b : 0;
                            var S, w = l(v, f ? m : m.slice(b));
                            if (null === w || (S = c(o(v.lastIndex + (f ? 0 : b)), m.length)) === k) b = n(m, b, g);
                            else {
                                if (E.push(m.slice(k, b)), E.length === x) return E;
                                for (var P = 1; P <= w.length - 1; P++)
                                    if (E.push(w[P]), E.length === x) return E;
                                b = k = S
                            }
                        }
                        return E.push(m.slice(k)), E
                    }
                ]
            }))
        },
        KroJ: function(t, e, a) {
            var i = a("dyZX"),
                r = a("Mukb"),
                s = a("aagx"),
                n = a("ylqs")("src"),
                o = a("+lvF"),
                l = ("" + o).split("toString");
            a("g3g5").inspectSource = function(t) {
                return o.call(t)
            }, (t.exports = function(t, e, a, o) {
                var h = "function" == typeof a;
                h && (s(a, "name") || r(a, "name", e)), t[e] !== a && (h && (s(a, n) || r(a, n, t[e] ? "" + t[e] : l.join(String(e)))), t === i ? t[e] = a : o ? t[e] ? t[e] = a : r(t, e, a) : (delete t[e], r(t, e, a)))
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && this[n] || o.call(this)
            }))
        },
        Kuth: function(t, e, a) {
            var i = a("y3w9"),
                r = a("FJW5"),
                s = a("4R4u"),
                n = a("YTvA")("IE_PROTO"),
                o = function() {},
                l = function() {
                    var t, e = a("Iw71")("iframe"),
                        i = s.length;
                    for (e.style.display = "none", a("+rLv").appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; i--;) delete l.prototype[s[i]];
                    return l()
                };
            t.exports = Object.create || function(t, e) {
                var a;
                return null !== t ? (o.prototype = i(t), a = new o, o.prototype = null, a[n] = t) : a = l(), void 0 === e ? a : r(a, e)
            }
        },
        L9s1: function(t, e, a) {
            "use strict";
            var i = a("XKFU"),
                r = a("0sh+");
            i(i.P + i.F * a("UUeW")("includes"), "String", {
                includes: function(t) {
                    return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        LK8F: function(t, e, a) {
            var i = a("XKFU");
            i(i.S, "Array", {
                isArray: a("EWmC")
            })
        },
        LQAc: function(t, e) {
            t.exports = !1
        },
        LZWt: function(t, e) {
            var a = {}.toString;
            t.exports = function(t) {
                return a.call(t).slice(8, -1)
            }
        },
        LmFj: function(t) {
            t.exports = JSON.parse('{"v":"5.7.0","fr":25,"ip":0,"op":15,"w":96,"h":96,"nm":"images/icon_video_hover备份 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"空 12","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[48,48,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.6,0.6,0.6],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[1.41,1.41,0]},"t":0,"s":[100,100,100]},{"t":15,"s":[120,120,100]}],"ix":6}},"ao":0,"ip":0,"op":15,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"矩形备份 4","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[15,0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-4,-3.94],[4,-10],[4,10],[-4,4.02]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形备份","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"形状 5","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-4,0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-2.47],[0,0],[2.47,0],[0,0],[0,2.47],[0,0],[-2.47,0]],"o":[[2.47,0],[0,0],[0,2.47],[0,0],[-2.47,0],[0,0],[0,-2.47],[0,0]],"v":[[10.53,-13],[15,-8.53],[15,8.53],[10.53,13],[-10.53,13],[-15,8.53],[-15,-8.53],[-10.53,-13]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[1.66,0],[0,-1.66],[-1.66,0],[0,1.66]],"o":[[-1.66,0],[0,1.66],[1.66,0],[0,-1.66]],"v":[[-7,-8],[-10,-5],[-7,-2],[-4,-5]],"c":true},"ix":2},"nm":"路径 2","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"合并路径 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"路径","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.609],"y":[1]},"o":{"x":[0.323],"y":[0]},"t":0,"s":[100]},{"t":15,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[48,48,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.6,0.6,0.6],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[1.41,1.41,0]},"t":0,"s":[100,100,100]},{"t":15,"s":[119,119,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-36.599],[28.95,-23.459],[35,-13.039],[35,13.041],[28.95,23.451],[5.95,36.601],[-5.95,36.601],[-28.95,23.451],[-35,13.041],[-35,-13.039],[-28.95,-23.459],[-5.95,-36.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,0.600000023842],"ix":3},"o":{"a":0,"k":60,"ix":4},"w":{"a":0,"k":0.833,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901961237,0.06274510175,0.196078434587,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":15,"st":0,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"路径","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.6],"y":[1]},"o":{"x":[0.32],"y":[1.41]},"t":0,"s":[0]},{"t":15,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[48,48,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.6,0.6,0.6],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[1.41,1.41,0]},"t":0,"s":[82,82,100]},{"t":15,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.42,-2.53],[0,0],[0,-5.19],[0,0],[4.49,-2.57],[0,0],[4.42,2.53],[0,0],[0,5.19],[0,0],[-4.49,2.57],[0,0]],"o":[[0,0],[4.49,2.57],[0,0],[0,5.19],[0,0],[-4.42,2.53],[0,0],[-4.49,-2.57],[0,0],[0,-5.19],[0,0],[4.42,-2.53]],"v":[[7.14,-44.1],[34.74,-28.26],[42,-15.71],[42,15.71],[34.74,28.26],[7.14,44.1],[-7.14,44.1],[-34.74,28.26],[-42,15.71],[-42,-15.71],[-34.74,-28.26],[-7.14,-44.1]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-38.345,-31.438],"ix":5},"e":{"a":0,"k":[36.981,55.661],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":15,"st":0,"bm":0}],"markers":[]}')
        },
        LyE8: function(t, e, a) {
            "use strict";
            var i = a("eeVq");
            t.exports = function(t, e) {
                return !!t && i((function() {
                    e ? t.call(null, (function() {}), 1) : t.call(null)
                }))
            }
        },
        Mukb: function(t, e, a) {
            var i = a("hswa"),
                r = a("RjD/");
            t.exports = a("nh4g") ? function(t, e, a) {
                return i.f(t, e, r(1, a))
            } : function(t, e, a) {
                return t[e] = a, t
            }
        },
        N8g3: function(t, e, a) {
            e.f = a("K0xU")
        },
        OEbY: function(t, e, a) {
            a("nh4g") && "g" != /./g.flags && a("hswa").f(RegExp.prototype, "flags", {
                configurable: !0,
                get: a("C/va")
            })
        },
        OGtf: function(t, e, a) {
            var i = a("XKFU"),
                r = a("eeVq"),
                s = a("vhPU"),
                n = /"/g,
                o = function(t, e, a, i) {
                    var r = String(s(t)),
                        o = "<" + e;
                    return "" !== a && (o += " " + a + '="' + String(i).replace(n, "&quot;") + '"'), o + ">" + r + "</" + e + ">"
                };
            t.exports = function(t, e) {
                var a = {};
                a[t] = e(o), i(i.P + i.F * r((function() {
                    var e = "" [t]('"');
                    return e !== e.toLowerCase() || e.split('"').length > 3
                })), "String", a)
            }
        },
        OP3Y: function(t, e, a) {
            var i = a("aagx"),
                r = a("S/j/"),
                s = a("YTvA")("IE_PROTO"),
                n = Object.prototype;
            t.exports = Object.getPrototypeOf || function(t) {
                return t = r(t), i(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? n : null
            }
        },
        OnI7: function(t, e, a) {
            var i = a("dyZX"),
                r = a("g3g5"),
                s = a("LQAc"),
                n = a("N8g3"),
                o = a("hswa").f;
            t.exports = function(t) {
                var e = r.Symbol || (r.Symbol = s ? {} : i.Symbol || {});
                "_" == t.charAt(0) || t in e || o(e, t, {
                    value: n.f(t)
                })
            }
        },
        QD8t: function(t) {
            t.exports = JSON.parse('{"v":"5.7.0","fr":25,"ip":0,"op":25,"w":58,"h":62,"nm":" icon-hd 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"路径备份","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":2,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":8}},"s":{"a":0,"k":[-15.995,-22.313],"ix":4},"e":{"a":0,"k":[15.128,21.123],"ix":5},"t":1,"lc":2,"lj":2,"bm":0,"nm":"Gradient Border 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"t":20,"s":[50]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":20,"s":[50]}],"ix":2},"o":{"a":0,"k":138,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":26,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"路径 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,44,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-6.5,0],[6.5,0]],"c":false},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径 6","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":26,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"三角形","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[30.123,30,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[0,-4.123],[5,4.127],[-5,4.127]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"圆角 1","r":{"a":0,"k":1.7,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-270,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"三角形","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":26,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"矩形","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,30,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.76,0],[0,0],[0,-2.76],[0,0],[2.76,0],[0,0],[0,2.76],[0,0]],"o":[[0,0],[2.76,0],[0,0],[0,2.76],[0,0],[-2.76,0],[0,0],[0,-2.76]],"v":[[-8,-10],[8,-10],[13,-5],[13,5],[8,10],[-8,10],[-13,5],[-13,-5]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":2,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":26,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"路径备份 11","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":9}},"s":{"a":0,"k":[0,0],"ix":5},"e":{"a":0,"k":[100,0],"ix":6},"t":1,"nm":"渐变填充 1","mn":"ADBE Vector Graphic - G-Fill","hd":false}],"ip":11,"op":29,"st":2,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"路径备份 10","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.6,"y":1},"o":{"x":0.32,"y":0.94},"t":11,"s":[-0.5,-19.5,0],"to":[4.917,8.417,0],"ti":[-4.917,-8.417,0]},{"t":25,"s":[29,31,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-16.277,-25.107],"ix":5},"e":{"a":0,"k":[15.903,24.892],"ix":6},"t":1,"nm":"Gradient Fill 7","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":11,"op":29,"st":2,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"路径备份 5","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":9}},"s":{"a":0,"k":[0,0],"ix":5},"e":{"a":0,"k":[100,0],"ix":6},"t":1,"nm":"渐变填充 1","mn":"ADBE Vector Graphic - G-Fill","hd":false}],"ip":7,"op":26,"st":-2,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"路径备份 4","tt":1,"sr":1,"ks":{"o":{"a":0,"k":60,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.6,"y":1},"o":{"x":0.32,"y":0.94},"t":7,"s":[-0.5,-19.5,0],"to":[4.917,8.417,0],"ti":[-4.917,-8.417,0]},{"t":21,"s":[29,31,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-16.277,-25.107],"ix":5},"e":{"a":0,"k":[15.903,24.892],"ix":6},"t":1,"nm":"Gradient Fill 2","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":7,"op":26,"st":-2,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"路径备份 13","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":9}},"s":{"a":0,"k":[0,0],"ix":5},"e":{"a":0,"k":[100,0],"ix":6},"t":1,"nm":"渐变填充 8","mn":"ADBE Vector Graphic - G-Fill","hd":false}],"ip":3,"op":21,"st":-6,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"路径备份 12","tt":1,"sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.6,"y":1},"o":{"x":0.32,"y":0.94},"t":3,"s":[-0.5,-19.5,0],"to":[4.917,8.417,0],"ti":[-4.917,-8.417,0]},{"t":17,"s":[29,31,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-16.277,-25.107],"ix":5},"e":{"a":0,"k":[15.903,24.892],"ix":6},"t":1,"nm":"Gradient Fill 8","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":3,"op":21,"st":-6,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"路径备份 9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[29,31,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-28.599],[21.95,-19.459],[28,-9.039],[28,9.041],[21.95,19.451],[5.95,28.601],[-5.95,28.601],[-21.95,19.451],[-28,9.041],[-28,-9.039],[-21.95,-19.459],[-5.95,-28.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径备份","np":1,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.169,0.169,0.18,0.5,0.092,0.092,0.098,1,0.016,0.016,0.016],"ix":9}},"s":{"a":0,"k":[-14.627,-24.39],"ix":5},"e":{"a":0,"k":[14.03,24.569],"ix":6},"t":1,"nm":"Gradient Fill 5","mn":"ADBE Vector Graphic - G-Fill","hd":false}],"ip":0,"op":26,"st":0,"bm":0}],"markers":[]}')
        },
        QaDb: function(t, e, a) {
            "use strict";
            var i = a("Kuth"),
                r = a("RjD/"),
                s = a("fyDq"),
                n = {};
            a("Mukb")(n, a("K0xU")("iterator"), (function() {
                return this
            })), t.exports = function(t, e, a) {
                t.prototype = i(n, {
                    next: r(1, a)
                }), s(t, e + " Iterator")
            }
        },
        RYi7: function(t, e) {
            var a = Math.ceil,
                i = Math.floor;
            t.exports = function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? i : a)(t)
            }
        },
        "RjD/": function(t, e) {
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        },
        "S/j/": function(t, e, a) {
            var i = a("vhPU");
            t.exports = function(t) {
                return Object(i(t))
            }
        },
        SRfc: function(t, e, a) {
            "use strict";
            var i = a("y3w9"),
                r = a("ne8i"),
                s = a("A5AN"),
                n = a("Xxuz");
            a("IU+Z")("match", 1, (function(t, e, a, o) {
                return [
                    function(a) {
                        var i = t(this),
                            r = null == a ? void 0 : a[e];
                        return void 0 !== r ? r.call(a, i) : new RegExp(a)[e](String(i))
                    },
                    function(t) {
                        var e = o(a, t, this);
                        if (e.done) return e.value;
                        var l = i(t),
                            h = String(this);
                        if (!l.global) return n(l, h);
                        var p = l.unicode;
                        l.lastIndex = 0;
                        for (var c, m = [], d = 0; null !== (c = n(l, h));) {
                            var f = String(c[0]);
                            m[d] = f, "" === f && (l.lastIndex = s(h, r(l.lastIndex), p)), d++
                        }
                        return 0 === d ? null : m
                    }
                ]
            }))
        },
        Spam: function(t) {
            t.exports = JSON.parse('{"v":"5.7.0","fr":25,"ip":0,"op":27,"w":270,"h":49,"nm":"seemoretutorials-动效","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":2,"ty":4,"nm":"路径 7","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[134.498,24.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-125.808,24],[-135.448,7.37],[-117.378,-24],[125.812,-24],[135.452,-7.37],[117.382,24]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"圆角 1","r":{"a":0,"k":4,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false}],"ip":6,"op":28,"st":-319,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"形状图层 3","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.6,"y":1},"o":{"x":0.32,"y":0.94},"t":6,"s":[-145,24.515,0],"to":[47.848,0,0],"ti":[-48.939,0,0]},{"t":27,"s":[134.655,24.515,0]}],"ix":2},"a":{"a":0,"k":[-3.959,0.015,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[292.082,48.029],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":39,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-145.549,-23.201],"ix":5},"e":{"a":0,"k":[146.773,24.037],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-3.959,0.015],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":6,"op":28,"st":6,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"路径 6","td":1,"sr":1,"ks":{"o":{"a":0,"k":60,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[134.498,24.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-125.808,24],[-135.448,7.37],[-117.378,-24],[125.812,-24],[135.452,-7.37],[117.382,24]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"圆角 1","r":{"a":0,"k":4,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":3,"op":28,"st":-322,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"形状图层 2","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.6,"y":1},"o":{"x":0.32,"y":0.94},"t":3,"s":[-153.5,24.515,0],"to":[34.344,0,0],"ti":[-75.841,0,0]},{"t":24,"s":[133.807,24.515,0]}],"ix":2},"a":{"a":0,"k":[-3.959,0.015,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[292.082,48.029],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":39,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-145.549,-23.201],"ix":5},"e":{"a":0,"k":[146.773,24.037],"ix":6},"t":1,"nm":"Gradient Fill 2","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-3.959,0.015],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":3,"op":28,"st":3,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"路径 5","td":1,"sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[134.498,24.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-125.808,24],[-135.448,7.37],[-117.378,-24],[125.812,-24],[135.452,-7.37],[117.382,24]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"圆角 1","r":{"a":0,"k":4,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":28,"st":-325,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"形状图层 1","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.6,"y":1},"o":{"x":0.32,"y":0.94},"t":0,"s":[-145,24.515,0],"to":[46.667,0,0],"ti":[-46.667,0,0]},{"t":21,"s":[135,24.515,0]}],"ix":2},"a":{"a":0,"k":[-3.959,0.015,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[292.082,48.029],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":39,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-145.549,-23.201],"ix":5},"e":{"a":0,"k":[146.773,24.037],"ix":6},"t":1,"nm":"Gradient Fill 2","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-3.959,0.015],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"矩形 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":28,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"路径 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[134.998,24.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-125.808,24],[-135.448,7.37],[-117.378,-24],[125.812,-24],[135.452,-7.37],[117.382,24]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"圆角 1","r":{"a":0,"k":4,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":0,"k":1,"ix":10},"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":8}},"s":{"a":0,"k":[-123.662,-16.402],"ix":4},"e":{"a":0,"k":[119.263,29.04],"ix":5},"t":1,"lc":1,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":13},"bm":0,"nm":"Gradient Border 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":28,"st":-278,"bm":0}],"markers":[]}')
        },
        UUeW: function(t, e, a) {
            var i = a("K0xU")("match");
            t.exports = function(t) {
                var e = /./;
                try {
                    "/./" [t](e)
                } catch (a) {
                    try {
                        return e[i] = !1, !"/./" [t](e)
                    } catch (t) {}
                }
                return !0
            }
        },
        Ugos: function(t, e, a) {
            "use strict";
            var i, r, s = a("C/va"),
                n = RegExp.prototype.exec,
                o = String.prototype.replace,
                l = n,
                h = (i = /a/, r = /b*/g, n.call(i, "a"), n.call(r, "a"), 0 !== i.lastIndex || 0 !== r.lastIndex),
                p = void 0 !== /()??/.exec("")[1];
            (h || p) && (l = function(t) {
                var e, a, i, r, l = this;
                return p && (a = new RegExp("^" + l.source + "$(?!\\s)", s.call(l))), h && (e = l.lastIndex), i = n.call(l, t), h && i && (l.lastIndex = l.global ? i.index + i[0].length : e), p && i && i.length > 1 && o.call(i[0], a, (function() {
                    for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0)
                })), i
            }), t.exports = l
        },
        UqcF: function(t, e) {
            e.f = {}.propertyIsEnumerable
        },
        "V+eJ": function(t, e, a) {
            "use strict";
            var i = a("XKFU"),
                r = a("w2a5")(!1),
                s = [].indexOf,
                n = !!s && 1 / [1].indexOf(1, -0) < 0;
            i(i.P + i.F * (n || !a("LyE8")(s)), "Array", {
                indexOf: function(t) {
                    return n ? s.apply(this, arguments) || 0 : r(this, t, arguments[1])
                }
            })
        },
        VTer: function(t, e, a) {
            var i = a("g3g5"),
                r = a("dyZX"),
                s = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
            (t.exports = function(t, e) {
                return s[t] || (s[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: i.version,
                mode: a("LQAc") ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        },
        Vd3H: function(t, e, a) {
            "use strict";
            var i = a("XKFU"),
                r = a("2OiF"),
                s = a("S/j/"),
                n = a("eeVq"),
                o = [].sort,
                l = [1, 2, 3];
            i(i.P + i.F * (n((function() {
                l.sort(void 0)
            })) || !n((function() {
                l.sort(null)
            })) || !a("LyE8")(o)), "Array", {
                sort: function(t) {
                    return void 0 === t ? o.call(s(this)) : o.call(s(this), r(t))
                }
            })
        },
        XKFU: function(t, e, a) {
            var i = a("dyZX"),
                r = a("g3g5"),
                s = a("Mukb"),
                n = a("KroJ"),
                o = a("m0Pp"),
                l = function(t, e, a) {
                    var h, p, c, m, d = t & l.F,
                        f = t & l.G,
                        u = t & l.S,
                        g = t & l.P,
                        y = t & l.B,
                        v = f ? i : u ? i[e] || (i[e] = {}) : (i[e] || {}).prototype,
                        x = f ? r : r[e] || (r[e] = {}),
                        k = x.prototype || (x.prototype = {});
                    for (h in f && (a = e), a) c = ((p = !d && v && void 0 !== v[h]) ? v : a)[h], m = y && p ? o(c, i) : g && "function" == typeof c ? o(Function.call, c) : c, v && n(v, h, c, t & l.U), x[h] != c && s(x, h, m), g && k[h] != c && (k[h] = c)
                };
            i.core = r, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, t.exports = l
        },
        XfO3: function(t, e, a) {
            "use strict";
            var i = a("AvRE")(!0);
            a("Afnz")(String, "String", (function(t) {
                this._t = String(t), this._i = 0
            }), (function() {
                var t, e = this._t,
                    a = this._i;
                return a >= e.length ? {
                    value: void 0,
                    done: !0
                } : (t = i(e, a), this._i += t.length, {
                    value: t,
                    done: !1
                })
            }))
        },
        Xxuz: function(t, e, a) {
            "use strict";
            var i = a("I8a+"),
                r = RegExp.prototype.exec;
            t.exports = function(t, e) {
                var a = t.exec;
                if ("function" == typeof a) {
                    var s = a.call(t, e);
                    if ("object" != typeof s) throw new TypeError("RegExp exec method returned something other than an Object or null");
                    return s
                }
                if ("RegExp" !== i(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
                return r.call(t, e)
            }
        },
        YTvA: function(t, e, a) {
            var i = a("VTer")("keys"),
                r = a("ylqs");
            t.exports = function(t) {
                return i[t] || (i[t] = r(t))
            }
        },
        Ymqv: function(t, e, a) {
            var i = a("LZWt");
            t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
                return "String" == i(t) ? t.split("") : Object(t)
            }
        },
        Z2Ku: function(t, e, a) {
            "use strict";
            var i = a("XKFU"),
                r = a("w2a5")(!0);
            i(i.P, "Array", {
                includes: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), a("nGyu")("includes")
        },
        Z6vF: function(t, e, a) {
            var i = a("ylqs")("meta"),
                r = a("0/R4"),
                s = a("aagx"),
                n = a("hswa").f,
                o = 0,
                l = Object.isExtensible || function() {
                    return !0
                },
                h = !a("eeVq")((function() {
                    return l(Object.preventExtensions({}))
                })),
                p = function(t) {
                    n(t, i, {
                        value: {
                            i: "O" + ++o,
                            w: {}
                        }
                    })
                },
                c = t.exports = {
                    KEY: i,
                    NEED: !1,
                    fastKey: function(t, e) {
                        if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!s(t, i)) {
                            if (!l(t)) return "F";
                            if (!e) return "E";
                            p(t)
                        }
                        return t[i].i
                    },
                    getWeak: function(t, e) {
                        if (!s(t, i)) {
                            if (!l(t)) return !0;
                            if (!e) return !1;
                            p(t)
                        }
                        return t[i].w
                    },
                    onFreeze: function(t) {
                        return h && c.NEED && l(t) && !s(t, i) && p(t), t
                    }
                }
        },
        a1Th: function(t, e, a) {
            "use strict";
            a("OEbY");
            var i = a("y3w9"),
                r = a("C/va"),
                s = a("nh4g"),
                n = /./.toString,
                o = function(t) {
                    a("KroJ")(RegExp.prototype, "toString", t, !0)
                };
            a("eeVq")((function() {
                return "/a/b" != n.call({
                    source: "a",
                    flags: "b"
                })
            })) ? o((function() {
                var t = i(this);
                return "/".concat(t.source, "/", "flags" in t ? t.flags : !s && t instanceof RegExp ? r.call(t) : void 0)
            })) : "toString" != n.name && o((function() {
                return n.call(this)
            }))
        },
        aCFj: function(t, e, a) {
            var i = a("Ymqv"),
                r = a("vhPU");
            t.exports = function(t) {
                return i(r(t))
            }
        },
        aagx: function(t, e) {
            var a = {}.hasOwnProperty;
            t.exports = function(t, e) {
                return a.call(t, e)
            }
        },
        apmT: function(t, e, a) {
            var i = a("0/R4");
            t.exports = function(t, e) {
                if (!i(t)) return t;
                var a, r;
                if (e && "function" == typeof(a = t.toString) && !i(r = a.call(t))) return r;
                if ("function" == typeof(a = t.valueOf) && !i(r = a.call(t))) return r;
                if (!e && "function" == typeof(a = t.toString) && !i(r = a.call(t))) return r;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        bWfx: function(t, e, a) {
            "use strict";
            var i = a("XKFU"),
                r = a("CkkT")(1);
            i(i.P + i.F * !a("LyE8")([].map, !0), "Array", {
                map: function(t) {
                    return r(this, t, arguments[1])
                }
            })
        },
        "d/Gc": function(t, e, a) {
            var i = a("RYi7"),
                r = Math.max,
                s = Math.min;
            t.exports = function(t, e) {
                return (t = i(t)) < 0 ? r(t + e, 0) : s(t, e)
            }
        },
        dRSK: function(t, e, a) {
            "use strict";
            var i = a("XKFU"),
                r = a("CkkT")(5),
                s = !0;
            "find" in [] && Array(1).find((function() {
                s = !1
            })), i(i.P + i.F * s, "Array", {
                find: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), a("nGyu")("find")
        },
        dyZX: function(t, e) {
            var a = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = a)
        },
        e7yV: function(t, e, a) {
            var i = a("aCFj"),
                r = a("kJMx").f,
                s = {}.toString,
                n = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t.exports.f = function(t) {
                return n && "[object Window]" == s.call(t) ? function(t) {
                    try {
                        return r(t)
                    } catch (t) {
                        return n.slice()
                    }
                }(t) : r(i(t))
            }
        },
        eM6i: function(t, e, a) {
            var i = a("XKFU");
            i(i.S, "Date", {
                now: function() {
                    return (new Date).getTime()
                }
            })
        },
        eeVq: function(t, e) {
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        },
        fyDq: function(t, e, a) {
            var i = a("hswa").f,
                r = a("aagx"),
                s = a("K0xU")("toStringTag");
            t.exports = function(t, e, a) {
                t && !r(t = a ? t : t.prototype, s) && i(t, s, {
                    configurable: !0,
                    value: e
                })
            }
        },
        g3g5: function(t, e) {
            var a = t.exports = {
                version: "2.6.12"
            };
            "number" == typeof __e && (__e = a)
        },
        gCrC: function(t, e, a) {
            "use strict";
            (function(t, e) {
                a("Vd3H"), a("V+eJ"), a("dRSK"), a("pIFo"), a("eM6i"), a("KKXr"), a("bWfx"), a("Btvt"), a("h7Nl"), a("a1Th"), a("8+KV"), a("LK8F"), a("I78e"), a("L9s1"), a("Z2Ku"), a("SRfc"), a("HAE/"), a("ioFf"), a("XfO3"), a("yt8O"), a("rGqo");

                function i(t) {
                    return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }! function() {
                    var a, r, s, n = function r(s, n) {
                        if (!(this instanceof r)) return new r(s, n);
                        var o = {
                                direction: "horizontal",
                                touchEventsTarget: "container",
                                initialSlide: 0,
                                speed: 300,
                                autoplay: !1,
                                autoplayDisableOnInteraction: !0,
                                autoplayStopOnLast: !1,
                                iOSEdgeSwipeDetection: !1,
                                iOSEdgeSwipeThreshold: 20,
                                freeMode: !1,
                                freeModeMomentum: !0,
                                freeModeMomentumRatio: 1,
                                freeModeMomentumBounce: !0,
                                freeModeMomentumBounceRatio: 1,
                                freeModeMomentumVelocityRatio: 1,
                                freeModeSticky: !1,
                                freeModeMinimumVelocity: .02,
                                autoHeight: !1,
                                setWrapperSize: !1,
                                virtualTranslate: !1,
                                effect: "slide",
                                coverflow: {
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: !0
                                },
                                flip: {
                                    slideShadows: !0,
                                    limitRotation: !0
                                },
                                cube: {
                                    slideShadows: !0,
                                    shadow: !0,
                                    shadowOffset: 20,
                                    shadowScale: .94
                                },
                                fade: {
                                    crossFade: !1
                                },
                                parallax: !1,
                                zoom: !1,
                                zoomMax: 3,
                                zoomMin: 1,
                                zoomToggle: !0,
                                scrollbar: null,
                                scrollbarHide: !0,
                                scrollbarDraggable: !1,
                                scrollbarSnapOnRelease: !1,
                                keyboardControl: !1,
                                mousewheelControl: !1,
                                mousewheelReleaseOnEdges: !1,
                                mousewheelInvert: !1,
                                mousewheelForceToAxis: !1,
                                mousewheelSensitivity: 1,
                                mousewheelEventsTarged: "container",
                                hashnav: !1,
                                hashnavWatchState: !1,
                                history: !1,
                                replaceState: !1,
                                breakpoints: void 0,
                                spaceBetween: 0,
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                slidesPerColumnFill: "column",
                                slidesPerGroup: 1,
                                centeredSlides: !1,
                                slidesOffsetBefore: 0,
                                slidesOffsetAfter: 0,
                                roundLengths: !1,
                                touchRatio: 1,
                                touchAngle: 45,
                                simulateTouch: !0,
                                shortSwipes: !0,
                                longSwipes: !0,
                                longSwipesRatio: .5,
                                longSwipesMs: 300,
                                followFinger: !0,
                                onlyExternal: !1,
                                threshold: 0,
                                touchMoveStopPropagation: !0,
                                touchReleaseOnEdges: !1,
                                uniqueNavElements: !0,
                                pagination: null,
                                paginationElement: "span",
                                paginationClickable: !1,
                                paginationHide: !1,
                                paginationBulletRender: null,
                                paginationProgressRender: null,
                                paginationFractionRender: null,
                                paginationCustomRender: null,
                                paginationType: "bullets",
                                resistance: !0,
                                resistanceRatio: .85,
                                nextButton: null,
                                prevButton: null,
                                watchSlidesProgress: !1,
                                watchSlidesVisibility: !1,
                                grabCursor: !1,
                                preventClicks: !0,
                                preventClicksPropagation: !0,
                                slideToClickedSlide: !1,
                                lazyLoading: !1,
                                lazyLoadingInPrevNext: !1,
                                lazyLoadingInPrevNextAmount: 1,
                                lazyLoadingOnTransitionStart: !1,
                                preloadImages: !0,
                                updateOnImagesReady: !0,
                                loop: !1,
                                loopAdditionalSlides: 0,
                                loopedSlides: null,
                                control: void 0,
                                controlInverse: !1,
                                controlBy: "slide",
                                normalizeSlideIndex: !0,
                                allowSwipeToPrev: !0,
                                allowSwipeToNext: !0,
                                swipeHandler: null,
                                noSwiping: !0,
                                noSwipingClass: "swiper-no-swiping",
                                passiveListeners: !0,
                                containerModifierClass: "swiper-container-",
                                slideClass: "swiper-slide",
                                slideActiveClass: "swiper-slide-active",
                                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                                slideVisibleClass: "swiper-slide-visible",
                                slideDuplicateClass: "swiper-slide-duplicate",
                                slideNextClass: "swiper-slide-next",
                                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                                slidePrevClass: "swiper-slide-prev",
                                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                                wrapperClass: "swiper-wrapper",
                                bulletClass: "swiper-pagination-bullet",
                                bulletActiveClass: "swiper-pagination-bullet-active",
                                buttonDisabledClass: "swiper-button-disabled",
                                paginationCurrentClass: "swiper-pagination-current",
                                paginationTotalClass: "swiper-pagination-total",
                                paginationHiddenClass: "swiper-pagination-hidden",
                                paginationProgressbarClass: "swiper-pagination-progressbar",
                                paginationClickableClass: "swiper-pagination-clickable",
                                paginationModifierClass: "swiper-pagination-",
                                lazyLoadingClass: "swiper-lazy",
                                lazyStatusLoadingClass: "swiper-lazy-loading",
                                lazyStatusLoadedClass: "swiper-lazy-loaded",
                                lazyPreloaderClass: "swiper-lazy-preloader",
                                notificationClass: "swiper-notification",
                                preloaderClass: "preloader",
                                zoomContainerClass: "swiper-zoom-container",
                                observer: !1,
                                observeParents: !1,
                                a11y: !1,
                                prevSlideMessage: "Previous slide",
                                nextSlideMessage: "Next slide",
                                firstSlideMessage: "This is the first slide",
                                lastSlideMessage: "This is the last slide",
                                paginationBulletMessage: "Go to slide {{index}}",
                                runCallbacksOnInit: !0
                            },
                            l = n && n.virtualTranslate;
                        n = n || {};
                        var h = {};
                        for (var p in n)
                            if ("object" !== i(n[p]) || null === n[p] || (n[p].nodeType || n[p] === window || n[p] === document || "undefined" != typeof Dom7 && n[p] instanceof Dom7 || void 0 !== t && n[p] instanceof t)) h[p] = n[p];
                            else
                                for (var c in h[p] = {}, n[p]) h[p][c] = n[p][c];
                        for (var m in o)
                            if (void 0 === n[m]) n[m] = o[m];
                            else if ("object" === i(n[m]))
                            for (var d in o[m]) void 0 === n[m][d] && (n[m][d] = o[m][d]);
                        var f = this;
                        if (f.params = n, f.originalParams = h, f.classNames = [], void 0 !== a && "undefined" != typeof Dom7 && (a = Dom7), (void 0 !== a || (a = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || e : Dom7)) && (f.$ = a, f.currentBreakpoint = void 0, f.getActiveBreakpoint = function() {
                            if (!f.params.breakpoints) return !1;
                            var t, e = !1,
                                a = [];
                            for (t in f.params.breakpoints) f.params.breakpoints.hasOwnProperty(t) && a.push(t);
                            a.sort((function(t, e) {
                                return parseInt(t, 10) > parseInt(e, 10)
                            }));
                            for (var i = 0; i < a.length; i++)(t = a[i]) >= window.innerWidth && !e && (e = t);
                            return e || "max"
                        }, f.setBreakpoint = function() {
                            var t = f.getActiveBreakpoint();
                            if (t && f.currentBreakpoint !== t) {
                                var e = t in f.params.breakpoints ? f.params.breakpoints[t] : f.originalParams,
                                    a = f.params.loop && e.slidesPerView !== f.params.slidesPerView;
                                for (var i in e) f.params[i] = e[i];
                                f.currentBreakpoint = t, a && f.destroyLoop && f.reLoop(!0)
                            }
                        }, f.params.breakpoints && f.setBreakpoint(), f.container = a(s), 0 !== f.container.length)) {
                            if (f.container.length > 1) {
                                var u = [];
                                return f.container.each((function() {
                                    u.push(new r(this, n))
                                })), u
                            }
                            var g, y, v, x, k, b, E, S;
                            f.container[0].swiper = f, f.container.data("swiper", f), f.classNames.push(f.params.containerModifierClass + f.params.direction), f.params.freeMode && f.classNames.push("".concat(f.params.containerModifierClass, "free-mode")), f.support.flexbox || (f.classNames.push("".concat(f.params.containerModifierClass, "no-flexbox")), f.params.slidesPerColumn = 1), f.params.autoHeight && f.classNames.push("".concat(f.params.containerModifierClass, "autoheight")), (f.params.parallax || f.params.watchSlidesVisibility) && (f.params.watchSlidesProgress = !0), f.params.touchReleaseOnEdges && (f.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(f.params.effect) >= 0 && (f.support.transforms3d ? (f.params.watchSlidesProgress = !0, f.classNames.push("".concat(f.params.containerModifierClass, "3d"))) : f.params.effect = "slide"), "slide" !== f.params.effect && f.classNames.push(f.params.containerModifierClass + f.params.effect), "cube" === f.params.effect && (f.params.resistanceRatio = 0, f.params.slidesPerView = 1, f.params.slidesPerColumn = 1, f.params.slidesPerGroup = 1, f.params.centeredSlides = !1, f.params.spaceBetween = 0, f.params.virtualTranslate = !0), "fade" !== f.params.effect && "flip" !== f.params.effect || (f.params.slidesPerView = 1, f.params.slidesPerColumn = 1, f.params.slidesPerGroup = 1, f.params.watchSlidesProgress = !0, f.params.spaceBetween = 0, void 0 === l && (f.params.virtualTranslate = !0)), f.params.grabCursor && f.support.touch && (f.params.grabCursor = !1), f.wrapper = f.container.children(".".concat(f.params.wrapperClass)), f.params.pagination && (f.paginationContainer = a(f.params.pagination), f.params.uniqueNavElements && "string" == typeof f.params.pagination && f.paginationContainer.length > 1 && 1 === f.container.find(f.params.pagination).length && (f.paginationContainer = f.container.find(f.params.pagination)), "bullets" === f.params.paginationType && f.params.paginationClickable ? f.paginationContainer.addClass("".concat(f.params.paginationModifierClass, "clickable")) : f.params.paginationClickable = !1, f.paginationContainer.addClass(f.params.paginationModifierClass + f.params.paginationType)), (f.params.nextButton || f.params.prevButton) && (f.params.nextButton && (f.nextButton = a(f.params.nextButton), f.params.uniqueNavElements && "string" == typeof f.params.nextButton && f.nextButton.length > 1 && 1 === f.container.find(f.params.nextButton).length && (f.nextButton = f.container.find(f.params.nextButton))), f.params.prevButton && (f.prevButton = a(f.params.prevButton), f.params.uniqueNavElements && "string" == typeof f.params.prevButton && f.prevButton.length > 1 && 1 === f.container.find(f.params.prevButton).length && (f.prevButton = f.container.find(f.params.prevButton)))), f.isHorizontal = function() {
                                return "horizontal" === f.params.direction
                            }, f.rtl = f.isHorizontal() && ("rtl" === f.container[0].dir.toLowerCase() || "rtl" === f.container.css("direction")), f.rtl && f.classNames.push("".concat(f.params.containerModifierClass, "rtl")), f.rtl && (f.wrongRTL = "-webkit-box" === f.wrapper.css("display")), f.params.slidesPerColumn > 1 && f.classNames.push("".concat(f.params.containerModifierClass, "multirow")), f.device.android && f.classNames.push("".concat(f.params.containerModifierClass, "android")), f.container.addClass(f.classNames.join(" ")), f.translate = 0, f.progress = 0, f.velocity = 0, f.lockSwipeToNext = function() {
                                f.params.allowSwipeToNext = !1, !1 === f.params.allowSwipeToPrev && f.params.grabCursor && f.unsetGrabCursor()
                            }, f.lockSwipeToPrev = function() {
                                f.params.allowSwipeToPrev = !1, !1 === f.params.allowSwipeToNext && f.params.grabCursor && f.unsetGrabCursor()
                            }, f.lockSwipes = function() {
                                f.params.allowSwipeToNext = f.params.allowSwipeToPrev = !1, f.params.grabCursor && f.unsetGrabCursor()
                            }, f.unlockSwipeToNext = function() {
                                f.params.allowSwipeToNext = !0, !0 === f.params.allowSwipeToPrev && f.params.grabCursor && f.setGrabCursor()
                            }, f.unlockSwipeToPrev = function() {
                                f.params.allowSwipeToPrev = !0, !0 === f.params.allowSwipeToNext && f.params.grabCursor && f.setGrabCursor()
                            }, f.unlockSwipes = function() {
                                f.params.allowSwipeToNext = f.params.allowSwipeToPrev = !0, f.params.grabCursor && f.setGrabCursor()
                            }, f.setGrabCursor = function(t) {
                                f.container[0].style.cursor = "move", f.container[0].style.cursor = t ? "-webkit-grabbing" : "-webkit-grab", f.container[0].style.cursor = t ? "-moz-grabbin" : "-moz-grab", f.container[0].style.cursor = t ? "grabbing" : "grab"
                            }, f.unsetGrabCursor = function() {
                                f.container[0].style.cursor = ""
                            }, f.params.grabCursor && f.setGrabCursor(), f.imagesToLoad = [], f.imagesLoaded = 0, f.loadImage = function(t, e, a, i, r, s) {
                                var n;

                                function o() {
                                    s && s()
                                }
                                t.complete && r ? o() : e ? ((n = new window.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), e && (n.src = e)) : o()
                            }, f.preloadImages = function() {
                                function t() {
                                    null != f && f && (void 0 !== f.imagesLoaded && f.imagesLoaded++, f.imagesLoaded === f.imagesToLoad.length && (f.params.updateOnImagesReady && f.update(), f.emit("onImagesReady", f)))
                                }
                                f.imagesToLoad = f.container.find("img");
                                for (var e = 0; e < f.imagesToLoad.length; e++) f.loadImage(f.imagesToLoad[e], f.imagesToLoad[e].currentSrc || f.imagesToLoad[e].getAttribute("src"), f.imagesToLoad[e].srcset || f.imagesToLoad[e].getAttribute("srcset"), f.imagesToLoad[e].sizes || f.imagesToLoad[e].getAttribute("sizes"), !0, t)
                            }, f.autoplayTimeoutId = void 0, f.autoplaying = !1, f.autoplayPaused = !1, f.startAutoplay = function() {
                                return void 0 === f.autoplayTimeoutId && (!!f.params.autoplay && (!f.autoplaying && (f.autoplaying = !0, f.emit("onAutoplayStart", f), void B())))
                            }, f.stopAutoplay = function(t) {
                                f.autoplayTimeoutId && (f.autoplayTimeoutId && clearTimeout(f.autoplayTimeoutId), f.autoplaying = !1, f.autoplayTimeoutId = void 0, f.emit("onAutoplayStop", f))
                            }, f.pauseAutoplay = function(t) {
                                f.autoplayPaused || (f.autoplayTimeoutId && clearTimeout(f.autoplayTimeoutId), f.autoplayPaused = !0, 0 === t ? (f.autoplayPaused = !1, B()) : f.wrapper.transitionEnd((function() {
                                    f && (f.autoplayPaused = !1, f.autoplaying ? B() : f.stopAutoplay())
                                })))
                            }, f.minTranslate = function() {
                                return -f.snapGrid[0]
                            }, f.maxTranslate = function() {
                                return -f.snapGrid[f.snapGrid.length - 1]
                            }, f.updateAutoHeight = function() {
                                var t, e = [],
                                    a = 0;
                                if ("auto" !== f.params.slidesPerView && f.params.slidesPerView > 1)
                                    for (t = 0; t < Math.ceil(f.params.slidesPerView); t++) {
                                        var i = f.activeIndex + t;
                                        if (i > f.slides.length) break;
                                        e.push(f.slides.eq(i)[0])
                                    } else e.push(f.slides.eq(f.activeIndex)[0]);
                                for (t = 0; t < e.length; t++)
                                    if (void 0 !== e[t]) {
                                        var r = e[t].offsetHeight;
                                        a = r > a ? r : a
                                    }
                                a && f.wrapper.css("height", "".concat(a, "px"))
                            }, f.updateContainerSize = function() {
                                var t, e;
                                t = void 0 !== f.params.width ? f.params.width : f.container[0].clientWidth, e = void 0 !== f.params.height ? f.params.height : f.container[0].clientHeight, 0 === t && f.isHorizontal() || 0 === e && !f.isHorizontal() || (t = t - parseInt(f.container.css("padding-left"), 10) - parseInt(f.container.css("padding-right"), 10), e = e - parseInt(f.container.css("padding-top"), 10) - parseInt(f.container.css("padding-bottom"), 10), f.width = t, f.height = e, f.size = f.isHorizontal() ? f.width : f.height)
                            }, f.updateSlidesSize = function() {
                                f.slides = f.wrapper.children(".".concat(f.params.slideClass)), f.snapGrid = [], f.slidesGrid = [], f.slidesSizesGrid = [];
                                var t, e = f.params.spaceBetween,
                                    a = -f.params.slidesOffsetBefore,
                                    i = 0,
                                    r = 0;
                                if (void 0 !== f.size) {
                                    var s, n;
                                    "string" == typeof e && e.indexOf("%") >= 0 && (e = parseFloat(e.replace("%", "")) / 100 * f.size), f.virtualSize = -e, f.rtl ? f.slides.css({
                                        marginLeft: "",
                                        marginTop: ""
                                    }) : f.slides.css({
                                        marginRight: "",
                                        marginBottom: ""
                                    }), f.params.slidesPerColumn > 1 && (s = Math.floor(f.slides.length / f.params.slidesPerColumn) === f.slides.length / f.params.slidesPerColumn ? f.slides.length : Math.ceil(f.slides.length / f.params.slidesPerColumn) * f.params.slidesPerColumn, "auto" !== f.params.slidesPerView && "row" === f.params.slidesPerColumnFill && (s = Math.max(s, f.params.slidesPerView * f.params.slidesPerColumn)));
                                    var o, l = f.params.slidesPerColumn,
                                        h = s / l,
                                        p = h - (f.params.slidesPerColumn * h - f.slides.length);
                                    for (t = 0; t < f.slides.length; t++) {
                                        n = 0;
                                        var c, m, d, u = f.slides.eq(t);
                                        if (f.params.slidesPerColumn > 1) "column" === f.params.slidesPerColumnFill ? (d = t - (m = Math.floor(t / l)) * l, (m > p || m === p && d === l - 1) && ++d >= l && (d = 0, m++), c = m + d * s / l, u.css({
                                            "-webkit-box-ordinal-group": c,
                                            "-moz-box-ordinal-group": c,
                                            "-ms-flex-order": c,
                                            "-webkit-order": c,
                                            order: c
                                        })) : m = t - (d = Math.floor(t / h)) * h, u.css("margin-".concat(f.isHorizontal() ? "top" : "left"), 0 !== d && f.params.spaceBetween && "".concat(f.params.spaceBetween, "px")).attr("data-swiper-column", m).attr("data-swiper-row", d);
                                        "none" !== u.css("display") && ("auto" === f.params.slidesPerView ? (n = f.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), f.params.roundLengths && (n = I(n))) : (n = (f.size - (f.params.slidesPerView - 1) * e) / f.params.slidesPerView, f.params.roundLengths && (n = I(n)), f.isHorizontal() ? f.slides[t].style.width = "".concat(n, "px") : f.slides[t].style.height = "".concat(n, "px")), f.slides[t].swiperSlideSize = n, f.slidesSizesGrid.push(n), f.params.centeredSlides ? (a = a + n / 2 + i / 2 + e, 0 === i && 0 !== t && (a = a - f.size / 2 - e), 0 === t && (a = a - f.size / 2 - e), Math.abs(a) < .001 && (a = 0), r % f.params.slidesPerGroup == 0 && f.snapGrid.push(a), f.slidesGrid.push(a)) : (r % f.params.slidesPerGroup == 0 && f.snapGrid.push(a), f.slidesGrid.push(a), a = a + n + e), f.virtualSize += n + e, i = n, r++)
                                    }
                                    if (f.virtualSize = Math.max(f.virtualSize, f.size) + f.params.slidesOffsetAfter, f.rtl && f.wrongRTL && ("slide" === f.params.effect || "coverflow" === f.params.effect) && f.wrapper.css({
                                        width: "".concat(f.virtualSize + f.params.spaceBetween, "px")
                                    }), f.support.flexbox && !f.params.setWrapperSize || (f.isHorizontal() ? f.wrapper.css({
                                        width: "".concat(f.virtualSize + f.params.spaceBetween, "px")
                                    }) : f.wrapper.css({
                                        height: "".concat(f.virtualSize + f.params.spaceBetween, "px")
                                    })), f.params.slidesPerColumn > 1 && (f.virtualSize = (n + f.params.spaceBetween) * s, f.virtualSize = Math.ceil(f.virtualSize / f.params.slidesPerColumn) - f.params.spaceBetween, f.isHorizontal() ? f.wrapper.css({
                                        width: "".concat(f.virtualSize + f.params.spaceBetween, "px")
                                    }) : f.wrapper.css({
                                        height: "".concat(f.virtualSize + f.params.spaceBetween, "px")
                                    }), f.params.centeredSlides)) {
                                        for (o = [], t = 0; t < f.snapGrid.length; t++) f.snapGrid[t] < f.virtualSize + f.snapGrid[0] && o.push(f.snapGrid[t]);
                                        f.snapGrid = o
                                    }
                                    if (!f.params.centeredSlides) {
                                        for (o = [], t = 0; t < f.snapGrid.length; t++) f.snapGrid[t] <= f.virtualSize - f.size && o.push(f.snapGrid[t]);
                                        f.snapGrid = o, Math.floor(f.virtualSize - f.size) - Math.floor(f.snapGrid[f.snapGrid.length - 1]) > 1 && f.snapGrid.push(f.virtualSize - f.size)
                                    }
                                    0 === f.snapGrid.length && (f.snapGrid = [0]), 0 !== f.params.spaceBetween && (f.isHorizontal() ? f.rtl ? f.slides.css({
                                        marginLeft: "".concat(e, "px")
                                    }) : f.slides.css({
                                        marginRight: "".concat(e, "px")
                                    }) : f.slides.css({
                                        marginBottom: "".concat(e, "px")
                                    })), f.params.watchSlidesProgress && f.updateSlidesOffset()
                                }
                            }, f.updateSlidesOffset = function() {
                                for (var t = 0; t < f.slides.length; t++) f.slides[t].swiperSlideOffset = f.isHorizontal() ? f.slides[t].offsetLeft : f.slides[t].offsetTop
                            }, f.currentSlidesPerView = function() {
                                var t, e, a = 1;
                                if (f.params.centeredSlides) {
                                    var i, r = f.slides[f.activeIndex].swiperSlideSize;
                                    for (t = f.activeIndex + 1; t < f.slides.length; t++) f.slides[t] && !i && (a++, (r += f.slides[t].swiperSlideSize) > f.size && (i = !0));
                                    for (e = f.activeIndex - 1; e >= 0; e--) f.slides[e] && !i && (a++, (r += f.slides[e].swiperSlideSize) > f.size && (i = !0))
                                } else
                                    for (t = f.activeIndex + 1; t < f.slides.length; t++) f.slidesGrid[t] - f.slidesGrid[f.activeIndex] < f.size && a++;
                                return a
                            }, f.updateSlidesProgress = function(t) {
                                if (void 0 === t && (t = f.translate || 0), 0 !== f.slides.length) {
                                    void 0 === f.slides[0].swiperSlideOffset && f.updateSlidesOffset();
                                    var e = -t;
                                    f.rtl && (e = t), f.slides.removeClass(f.params.slideVisibleClass);
                                    for (var a = 0; a < f.slides.length; a++) {
                                        var i = f.slides[a],
                                            r = (e + (f.params.centeredSlides ? f.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + f.params.spaceBetween);
                                        if (f.params.watchSlidesVisibility) {
                                            var s = -(e - i.swiperSlideOffset),
                                                n = s + f.slidesSizesGrid[a];
                                            (s >= 0 && s < f.size || n > 0 && n <= f.size || s <= 0 && n >= f.size) && f.slides.eq(a).addClass(f.params.slideVisibleClass)
                                        }
                                        i.progress = f.rtl ? -r : r
                                    }
                                }
                            }, f.updateProgress = function(t) {
                                void 0 === t && (t = f.translate || 0);
                                var e = f.maxTranslate() - f.minTranslate(),
                                    a = f.isBeginning,
                                    i = f.isEnd;
                                0 === e ? (f.progress = 0, f.isBeginning = f.isEnd = !0) : (f.progress = (t - f.minTranslate()) / e, f.isBeginning = f.progress <= 0, f.isEnd = f.progress >= 1), f.isBeginning && !a && f.emit("onReachBeginning", f), f.isEnd && !i && f.emit("onReachEnd", f), f.params.watchSlidesProgress && f.updateSlidesProgress(t), f.emit("onProgress", f, f.progress)
                            }, f.updateActiveIndex = function() {
                                var t, e, a, i = f.rtl ? f.translate : -f.translate;
                                for (e = 0; e < f.slidesGrid.length; e++) void 0 !== f.slidesGrid[e + 1] ? i >= f.slidesGrid[e] && i < f.slidesGrid[e + 1] - (f.slidesGrid[e + 1] - f.slidesGrid[e]) / 2 ? t = e : i >= f.slidesGrid[e] && i < f.slidesGrid[e + 1] && (t = e + 1) : i >= f.slidesGrid[e] && (t = e);
                                f.params.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), (a = Math.floor(t / f.params.slidesPerGroup)) >= f.snapGrid.length && (a = f.snapGrid.length - 1), t !== f.activeIndex && (f.snapIndex = a, f.previousIndex = f.activeIndex, f.activeIndex = t, f.updateClasses(), f.updateRealIndex())
                            }, f.updateRealIndex = function() {
                                f.realIndex = parseInt(f.slides.eq(f.activeIndex).attr("data-swiper-slide-index") || f.activeIndex, 10)
                            }, f.updateClasses = function() {
                                f.slides.removeClass("".concat(f.params.slideActiveClass, " ").concat(f.params.slideNextClass, " ").concat(f.params.slidePrevClass, " ").concat(f.params.slideDuplicateActiveClass, " ").concat(f.params.slideDuplicateNextClass, " ").concat(f.params.slideDuplicatePrevClass));
                                var t = f.slides.eq(f.activeIndex);
                                t.addClass(f.params.slideActiveClass), n.loop && (t.hasClass(f.params.slideDuplicateClass) ? f.wrapper.children(".".concat(f.params.slideClass, ":not(.").concat(f.params.slideDuplicateClass, ')[data-swiper-slide-index="').concat(f.realIndex, '"]')).addClass(f.params.slideDuplicateActiveClass) : f.wrapper.children(".".concat(f.params.slideClass, ".").concat(f.params.slideDuplicateClass, '[data-swiper-slide-index="').concat(f.realIndex, '"]')).addClass(f.params.slideDuplicateActiveClass));
                                var e = t.next(".".concat(f.params.slideClass)).addClass(f.params.slideNextClass);
                                f.params.loop && 0 === e.length && (e = f.slides.eq(0)).addClass(f.params.slideNextClass);
                                var i = t.prev(".".concat(f.params.slideClass)).addClass(f.params.slidePrevClass);
                                if (f.params.loop && 0 === i.length && (i = f.slides.eq(-1)).addClass(f.params.slidePrevClass), n.loop && (e.hasClass(f.params.slideDuplicateClass) ? f.wrapper.children(".".concat(f.params.slideClass, ":not(.").concat(f.params.slideDuplicateClass, ')[data-swiper-slide-index="').concat(e.attr("data-swiper-slide-index"), '"]')).addClass(f.params.slideDuplicateNextClass) : f.wrapper.children(".".concat(f.params.slideClass, ".").concat(f.params.slideDuplicateClass, '[data-swiper-slide-index="').concat(e.attr("data-swiper-slide-index"), '"]')).addClass(f.params.slideDuplicateNextClass), i.hasClass(f.params.slideDuplicateClass) ? f.wrapper.children(".".concat(f.params.slideClass, ":not(.").concat(f.params.slideDuplicateClass, ')[data-swiper-slide-index="').concat(i.attr("data-swiper-slide-index"), '"]')).addClass(f.params.slideDuplicatePrevClass) : f.wrapper.children(".".concat(f.params.slideClass, ".").concat(f.params.slideDuplicateClass, '[data-swiper-slide-index="').concat(i.attr("data-swiper-slide-index"), '"]')).addClass(f.params.slideDuplicatePrevClass)), f.paginationContainer && f.paginationContainer.length > 0) {
                                    var r, s = f.params.loop ? Math.ceil((f.slides.length - 2 * f.loopedSlides) / f.params.slidesPerGroup) : f.snapGrid.length;
                                    if (f.params.loop ? ((r = Math.ceil((f.activeIndex - f.loopedSlides) / f.params.slidesPerGroup)) > f.slides.length - 1 - 2 * f.loopedSlides && (r -= f.slides.length - 2 * f.loopedSlides), r > s - 1 && (r -= s), r < 0 && "bullets" !== f.params.paginationType && (r = s + r)) : r = void 0 !== f.snapIndex ? f.snapIndex : f.activeIndex || 0, "bullets" === f.params.paginationType && f.bullets && f.bullets.length > 0 && (f.bullets.removeClass(f.params.bulletActiveClass), f.paginationContainer.length > 1 ? f.bullets.each((function() {
                                        a(this).index() === r && a(this).addClass(f.params.bulletActiveClass)
                                    })) : f.bullets.eq(r).addClass(f.params.bulletActiveClass)), "fraction" === f.params.paginationType && (f.paginationContainer.find(".".concat(f.params.paginationCurrentClass)).text(r + 1), f.paginationContainer.find(".".concat(f.params.paginationTotalClass)).text(s)), "progress" === f.params.paginationType) {
                                        var o = (r + 1) / s,
                                            l = o,
                                            h = 1;
                                        f.isHorizontal() || (h = o, l = 1), f.paginationContainer.find(".".concat(f.params.paginationProgressbarClass)).transform("translate3d(0,0,0) scaleX(".concat(l, ") scaleY(").concat(h, ")")).transition(f.params.speed)
                                    }
                                    "custom" === f.params.paginationType && f.params.paginationCustomRender && (f.paginationContainer.html(f.params.paginationCustomRender(f, r + 1, s)), f.emit("onPaginationRendered", f, f.paginationContainer[0]))
                                }
                                f.params.loop || (f.params.prevButton && f.prevButton && f.prevButton.length > 0 && (f.isBeginning ? (f.prevButton.addClass(f.params.buttonDisabledClass), f.params.a11y && f.a11y && f.a11y.disable(f.prevButton)) : (f.prevButton.removeClass(f.params.buttonDisabledClass), f.params.a11y && f.a11y && f.a11y.enable(f.prevButton))), f.params.nextButton && f.nextButton && f.nextButton.length > 0 && (f.isEnd ? (f.nextButton.addClass(f.params.buttonDisabledClass), f.params.a11y && f.a11y && f.a11y.disable(f.nextButton)) : (f.nextButton.removeClass(f.params.buttonDisabledClass), f.params.a11y && f.a11y && f.a11y.enable(f.nextButton))))
                            }, f.updatePagination = function() {
                                if (f.params.pagination && f.paginationContainer && f.paginationContainer.length > 0) {
                                    var t = "";
                                    if ("bullets" === f.params.paginationType) {
                                        for (var e = f.params.loop ? Math.ceil((f.slides.length - 2 * f.loopedSlides) / f.params.slidesPerGroup) : f.snapGrid.length, a = 0; a < e; a++) f.params.paginationBulletRender ? t += f.params.paginationBulletRender(f, a, f.params.bulletClass) : t += "<".concat(f.params.paginationElement, ' class="').concat(f.params.bulletClass, '"></').concat(f.params.paginationElement, ">");
                                        f.paginationContainer.html(t), f.bullets = f.paginationContainer.find(".".concat(f.params.bulletClass)), f.params.paginationClickable && f.params.a11y && f.a11y && f.a11y.initPagination()
                                    }
                                    "fraction" === f.params.paginationType && (t = f.params.paginationFractionRender ? f.params.paginationFractionRender(f, f.params.paginationCurrentClass, f.params.paginationTotalClass) : '<span class="'.concat(f.params.paginationCurrentClass, '"></span>') + " / " + '<span class="'.concat(f.params.paginationTotalClass, '"></span>'), f.paginationContainer.html(t)), "progress" === f.params.paginationType && (t = f.params.paginationProgressRender ? f.params.paginationProgressRender(f, f.params.paginationProgressbarClass) : '<span class="'.concat(f.params.paginationProgressbarClass, '"></span>'), f.paginationContainer.html(t)), "custom" !== f.params.paginationType && f.emit("onPaginationRendered", f, f.paginationContainer[0])
                                }
                            }, f.update = function(t) {
                                var e;
                                f && (f.updateContainerSize(), f.updateSlidesSize(), f.updateProgress(), f.updatePagination(), f.updateClasses(), f.params.scrollbar && f.scrollbar && f.scrollbar.set(), t ? (f.controller && f.controller.spline && (f.controller.spline = void 0), f.params.freeMode ? (a(), f.params.autoHeight && f.updateAutoHeight()) : (("auto" === f.params.slidesPerView || f.params.slidesPerView > 1) && f.isEnd && !f.params.centeredSlides ? f.slideTo(f.slides.length - 1, 0, !1, !0) : f.slideTo(f.activeIndex, 0, !1, !0)) || a()) : f.params.autoHeight && f.updateAutoHeight());

                                function a() {
                                    f.rtl, f.translate;
                                    e = Math.min(Math.max(f.translate, f.maxTranslate()), f.minTranslate()), f.setWrapperTranslate(e), f.updateActiveIndex(), f.updateClasses()
                                }
                            }, f.onResize = function(t) {
                                f.params.onBeforeResize && f.params.onBeforeResize(f), f.params.breakpoints && f.setBreakpoint();
                                var e = f.params.allowSwipeToPrev,
                                    a = f.params.allowSwipeToNext;
                                f.params.allowSwipeToPrev = f.params.allowSwipeToNext = !0, f.updateContainerSize(), f.updateSlidesSize(), ("auto" === f.params.slidesPerView || f.params.freeMode || t) && f.updatePagination(), f.params.scrollbar && f.scrollbar && f.scrollbar.set(), f.controller && f.controller.spline && (f.controller.spline = void 0);
                                var i = !1;
                                if (f.params.freeMode) {
                                    var r = Math.min(Math.max(f.translate, f.maxTranslate()), f.minTranslate());
                                    f.setWrapperTranslate(r), f.updateActiveIndex(), f.updateClasses(), f.params.autoHeight && f.updateAutoHeight()
                                } else f.updateClasses(), i = ("auto" === f.params.slidesPerView || f.params.slidesPerView > 1) && f.isEnd && !f.params.centeredSlides ? f.slideTo(f.slides.length - 1, 0, !1, !0) : f.slideTo(f.activeIndex, 0, !1, !0);
                                f.params.lazyLoading && !i && f.lazy && f.lazy.load(), f.params.allowSwipeToPrev = e, f.params.allowSwipeToNext = a, f.params.onAfterResize && f.params.onAfterResize(f)
                            }, f.touchEventsDesktop = {
                                start: "mousedown",
                                move: "mousemove",
                                end: "mouseup"
                            }, window.navigator.pointerEnabled ? f.touchEventsDesktop = {
                                start: "pointerdown",
                                move: "pointermove",
                                end: "pointerup"
                            } : window.navigator.msPointerEnabled && (f.touchEventsDesktop = {
                                start: "MSPointerDown",
                                move: "MSPointerMove",
                                end: "MSPointerUp"
                            }), f.touchEvents = {
                                start: f.support.touch || !f.params.simulateTouch ? "touchstart" : f.touchEventsDesktop.start,
                                move: f.support.touch || !f.params.simulateTouch ? "touchmove" : f.touchEventsDesktop.move,
                                end: f.support.touch || !f.params.simulateTouch ? "touchend" : f.touchEventsDesktop.end
                            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === f.params.touchEventsTarget ? f.container : f.wrapper).addClass("swiper-wp8-".concat(f.params.direction)), f.initEvents = function(t) {
                                var e = t ? "off" : "on",
                                    a = t ? "removeEventListener" : "addEventListener",
                                    i = "container" === f.params.touchEventsTarget ? f.container[0] : f.wrapper[0],
                                    r = f.support.touch ? i : document,
                                    s = !!f.params.nested;
                                if (f.browser.ie) i[a](f.touchEvents.start, f.onTouchStart, !1), r[a](f.touchEvents.move, f.onTouchMove, s), r[a](f.touchEvents.end, f.onTouchEnd, !1);
                                else {
                                    if (f.support.touch) {
                                        var o = !("touchstart" !== f.touchEvents.start || !f.support.passiveListener || !f.params.passiveListeners) && {
                                            passive: !0,
                                            capture: !1
                                        };
                                        i[a](f.touchEvents.start, f.onTouchStart, o), i[a](f.touchEvents.move, f.onTouchMove, s), i[a](f.touchEvents.end, f.onTouchEnd, o)
                                    }(n.simulateTouch && !f.device.ios && !f.device.android || n.simulateTouch && !f.support.touch && f.device.ios) && (i[a]("mousedown", f.onTouchStart, !1), document[a]("mousemove", f.onTouchMove, s), document[a]("mouseup", f.onTouchEnd, !1))
                                }
                                window[a]("resize", f.onResize), f.params.nextButton && f.nextButton && f.nextButton.length > 0 && (f.nextButton[e]("click", f.onClickNext), f.params.a11y && f.a11y && f.nextButton[e]("keydown", f.a11y.onEnterKey)), f.params.prevButton && f.prevButton && f.prevButton.length > 0 && (f.prevButton[e]("click", f.onClickPrev), f.params.a11y && f.a11y && f.prevButton[e]("keydown", f.a11y.onEnterKey)), f.params.pagination && f.params.paginationClickable && (f.paginationContainer[e]("click", ".".concat(f.params.bulletClass), f.onClickIndex), f.params.a11y && f.a11y && f.paginationContainer[e]("keydown", ".".concat(f.params.bulletClass), f.a11y.onEnterKey)), (f.params.preventClicks || f.params.preventClicksPropagation) && i[a]("click", f.preventClicks, !0)
                            }, f.attachEvents = function() {
                                f.initEvents()
                            }, f.detachEvents = function() {
                                f.initEvents(!0)
                            }, f.allowClick = !0, f.preventClicks = function(t) {
                                f.allowClick || (f.params.preventClicks && t.preventDefault(), f.params.preventClicksPropagation && f.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
                            }, f.onClickNext = function(t) {
                                t.preventDefault(), f.isEnd && !f.params.loop || f.slideNext()
                            }, f.onClickPrev = function(t) {
                                t.preventDefault(), f.isBeginning && !f.params.loop || f.slidePrev()
                            }, f.onClickIndex = function(t) {
                                t.preventDefault();
                                var e = a(this).index() * f.params.slidesPerGroup;
                                f.params.loop && (e += f.loopedSlides), f.slideTo(e)
                            }, f.updateClickedSlide = function(t) {
                                var e = V(t, ".".concat(f.params.slideClass)),
                                    i = !1;
                                if (e)
                                    for (var r = 0; r < f.slides.length; r++) f.slides[r] === e && (i = !0);
                                if (!e || !i) return f.clickedSlide = void 0, void(f.clickedIndex = void 0);
                                if (f.clickedSlide = e, f.clickedIndex = a(e).index(), f.params.slideToClickedSlide && void 0 !== f.clickedIndex && f.clickedIndex !== f.activeIndex) {
                                    var s, n = f.clickedIndex,
                                        o = "auto" === f.params.slidesPerView ? f.currentSlidesPerView() : f.params.slidesPerView;
                                    if (f.params.loop) {
                                        if (f.animating) return;
                                        s = parseInt(a(f.clickedSlide).attr("data-swiper-slide-index"), 10), f.params.centeredSlides ? n < f.loopedSlides - o / 2 || n > f.slides.length - f.loopedSlides + o / 2 ? (f.fixLoop(), n = f.wrapper.children(".".concat(f.params.slideClass, '[data-swiper-slide-index="').concat(s, '"]:not(.').concat(f.params.slideDuplicateClass, ")")).eq(0).index(), setTimeout((function() {
                                            f.slideTo(n)
                                        }), 0)) : f.slideTo(n) : n > f.slides.length - o ? (f.fixLoop(), n = f.wrapper.children(".".concat(f.params.slideClass, '[data-swiper-slide-index="').concat(s, '"]:not(.').concat(f.params.slideDuplicateClass, ")")).eq(0).index(), setTimeout((function() {
                                            f.slideTo(n)
                                        }), 0)) : f.slideTo(n)
                                    } else f.slideTo(n)
                                }
                            };
                            var w, P, C, A, T = "input, select, textarea, button, video",
                                D = Date.now(),
                                M = [];
                            for (var _ in f.animating = !1, f.touches = {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            }, f.onTouchStart = function(t) {
                                if (t.originalEvent && (t = t.originalEvent), (C = "touchstart" === t.type) || !("which" in t) || 3 !== t.which)
                                    if (f.params.noSwiping && V(t, ".".concat(f.params.noSwipingClass))) f.allowClick = !0;
                                    else if (!f.params.swipeHandler || V(t, f.params.swipeHandler)) {
                                    var e = f.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                                        i = f.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                                    if (!(f.device.ios && f.params.iOSEdgeSwipeDetection && e <= f.params.iOSEdgeSwipeThreshold)) {
                                        if (g = !0, y = !1, v = !0, k = void 0, A = void 0, f.touches.startX = e, f.touches.startY = i, x = Date.now(), f.allowClick = !0, f.updateContainerSize(), f.swipeDirection = void 0, f.params.threshold > 0 && (S = !1), "touchstart" !== t.type) {
                                            var r = !0;
                                            a(t.target).is(T) && (r = !1), document.activeElement && a(document.activeElement).is(T) && document.activeElement.blur(), r && t.preventDefault()
                                        }
                                        f.emit("onTouchStart", f, t)
                                    }
                                }
                            }, f.onTouchMove = function(t) {
                                if (t.originalEvent && (t = t.originalEvent), !C || "mousemove" !== t.type) {
                                    if (t.preventedByNestedSwiper) return f.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void(f.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                                    if (f.params.onlyExternal) return f.allowClick = !1, void(g && (f.touches.startX = f.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, f.touches.startY = f.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, x = Date.now()));
                                    if (C && f.params.touchReleaseOnEdges && !f.params.loop)
                                        if (f.isHorizontal()) {
                                            if (f.touches.currentX < f.touches.startX && f.translate <= f.maxTranslate() || f.touches.currentX > f.touches.startX && f.translate >= f.minTranslate()) return
                                        } else if (f.touches.currentY < f.touches.startY && f.translate <= f.maxTranslate() || f.touches.currentY > f.touches.startY && f.translate >= f.minTranslate()) return;
                                    if (C && document.activeElement && t.target === document.activeElement && a(t.target).is(T)) return y = !0, void(f.allowClick = !1);
                                    if (v && f.emit("onTouchMove", f, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                                        var e;
                                        if (f.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, f.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, void 0 === k) f.isHorizontal() && f.touches.currentY === f.touches.startY || !f.isHorizontal() && f.touches.currentX === f.touches.startX ? k = !1 : (e = 180 * Math.atan2(Math.abs(f.touches.currentY - f.touches.startY), Math.abs(f.touches.currentX - f.touches.startX)) / Math.PI, k = f.isHorizontal() ? e > f.params.touchAngle : 90 - e > f.params.touchAngle);
                                        if (k && f.emit("onTouchMoveOpposite", f, t), void 0 === A && (f.touches.currentX === f.touches.startX && f.touches.currentY === f.touches.startY || (A = !0)), g)
                                            if (k) g = !1;
                                            else if (A) {
                                            f.allowClick = !1, f.emit("onSliderMove", f, t), t.preventDefault(), f.params.touchMoveStopPropagation && !f.params.nested && t.stopPropagation(), y || (n.loop && f.fixLoop(), E = f.getWrapperTranslate(), f.setWrapperTransition(0), f.animating && f.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), f.params.autoplay && f.autoplaying && (f.params.autoplayDisableOnInteraction ? f.stopAutoplay() : f.pauseAutoplay()), P = !1, !f.params.grabCursor || !0 !== f.params.allowSwipeToNext && !0 !== f.params.allowSwipeToPrev || f.setGrabCursor(!0)), y = !0;
                                            var i = f.touches.diff = f.isHorizontal() ? f.touches.currentX - f.touches.startX : f.touches.currentY - f.touches.startY;
                                            i *= f.params.touchRatio, f.rtl && (i = -i), f.swipeDirection = i > 0 ? "prev" : "next", b = i + E;
                                            var r = !0;
                                            if (i > 0 && b > f.minTranslate() ? (r = !1, f.params.resistance && (b = f.minTranslate() - 1 + Math.pow(-f.minTranslate() + E + i, f.params.resistanceRatio))) : i < 0 && b < f.maxTranslate() && (r = !1, f.params.resistance && (b = f.maxTranslate() + 1 - Math.pow(f.maxTranslate() - E - i, f.params.resistanceRatio))), r && (t.preventedByNestedSwiper = !0), !f.params.allowSwipeToNext && "next" === f.swipeDirection && b < E && (b = E), !f.params.allowSwipeToPrev && "prev" === f.swipeDirection && b > E && (b = E), f.params.threshold > 0) {
                                                if (!(Math.abs(i) > f.params.threshold || S)) return void(b = E);
                                                if (!S) return S = !0, f.touches.startX = f.touches.currentX, f.touches.startY = f.touches.currentY, b = E, void(f.touches.diff = f.isHorizontal() ? f.touches.currentX - f.touches.startX : f.touches.currentY - f.touches.startY)
                                            }
                                            f.params.followFinger && ((f.params.freeMode || f.params.watchSlidesProgress) && f.updateActiveIndex(), f.params.freeMode && (0 === M.length && M.push({
                                                position: f.touches[f.isHorizontal() ? "startX" : "startY"],
                                                time: x
                                            }), M.push({
                                                position: f.touches[f.isHorizontal() ? "currentX" : "currentY"],
                                                time: (new window.Date).getTime()
                                            })), f.updateProgress(b), f.setWrapperTranslate(b))
                                        }
                                    }
                                }
                            }, f.onTouchEnd = function(t) {
                                if (t.originalEvent && (t = t.originalEvent), v && f.emit("onTouchEnd", f, t), v = !1, g) {
                                    f.params.grabCursor && y && g && (!0 === f.params.allowSwipeToNext || !0 === f.params.allowSwipeToPrev) && f.setGrabCursor(!1);
                                    var e, i = Date.now(),
                                        r = i - x;
                                    if (f.allowClick && (f.updateClickedSlide(t), f.emit("onTap", f, t), r < 300 && i - D > 300 && (w && clearTimeout(w), w = setTimeout((function() {
                                        f && (f.params.paginationHide && f.paginationContainer.length > 0 && !a(t.target).hasClass(f.params.bulletClass) && f.paginationContainer.toggleClass(f.params.paginationHiddenClass), f.emit("onClick", f, t))
                                    }), 300)), r < 300 && i - D < 300 && (w && clearTimeout(w), f.emit("onDoubleTap", f, t))), D = Date.now(), setTimeout((function() {
                                        f && (f.allowClick = !0)
                                    }), 0), g && y && f.swipeDirection && 0 !== f.touches.diff && b !== E)
                                        if (g = y = !1, e = f.params.followFinger ? f.rtl ? f.translate : -f.translate : -b, f.params.freeMode) {
                                            if (e < -f.minTranslate()) return void f.slideTo(f.activeIndex);
                                            if (e > -f.maxTranslate()) return void(f.slides.length < f.snapGrid.length ? f.slideTo(f.snapGrid.length - 1) : f.slideTo(f.slides.length - 1));
                                            if (f.params.freeModeMomentum) {
                                                if (M.length > 1) {
                                                    var s = M.pop(),
                                                        n = M.pop(),
                                                        o = s.position - n.position,
                                                        l = s.time - n.time;
                                                    f.velocity = o / l, f.velocity /= 2, Math.abs(f.velocity) < f.params.freeModeMinimumVelocity && (f.velocity = 0), (l > 150 || (new window.Date).getTime() - s.time > 300) && (f.velocity = 0)
                                                } else f.velocity = 0;
                                                f.velocity *= f.params.freeModeMomentumVelocityRatio, M.length = 0;
                                                var h = 1e3 * f.params.freeModeMomentumRatio,
                                                    p = f.velocity * h,
                                                    c = f.translate + p;
                                                f.rtl && (c = -c);
                                                var m, d = !1,
                                                    u = 20 * Math.abs(f.velocity) * f.params.freeModeMomentumBounceRatio;
                                                if (c < f.maxTranslate()) f.params.freeModeMomentumBounce ? (c + f.maxTranslate() < -u && (c = f.maxTranslate() - u), m = f.maxTranslate(), d = !0, P = !0) : c = f.maxTranslate();
                                                else if (c > f.minTranslate()) f.params.freeModeMomentumBounce ? (c - f.minTranslate() > u && (c = f.minTranslate() + u), m = f.minTranslate(), d = !0, P = !0) : c = f.minTranslate();
                                                else if (f.params.freeModeSticky) {
                                                    var k, S = 0;
                                                    for (S = 0; S < f.snapGrid.length; S += 1)
                                                        if (f.snapGrid[S] > -c) {
                                                            k = S;
                                                            break
                                                        }
                                                    c = Math.abs(f.snapGrid[k] - c) < Math.abs(f.snapGrid[k - 1] - c) || "next" === f.swipeDirection ? f.snapGrid[k] : f.snapGrid[k - 1], f.rtl || (c = -c)
                                                }
                                                if (0 !== f.velocity) h = f.rtl ? Math.abs((-c - f.translate) / f.velocity) : Math.abs((c - f.translate) / f.velocity);
                                                else if (f.params.freeModeSticky) return void f.slideReset();
                                                f.params.freeModeMomentumBounce && d ? (f.updateProgress(m), f.setWrapperTransition(h), f.setWrapperTranslate(c), f.onTransitionStart(), f.animating = !0, f.wrapper.transitionEnd((function() {
                                                    f && P && (f.emit("onMomentumBounce", f), f.setWrapperTransition(f.params.speed), f.setWrapperTranslate(m), f.wrapper.transitionEnd((function() {
                                                        f && f.onTransitionEnd()
                                                    })))
                                                }))) : f.velocity ? (f.updateProgress(c), f.setWrapperTransition(h), f.setWrapperTranslate(c), f.onTransitionStart(), f.animating || (f.animating = !0, f.wrapper.transitionEnd((function() {
                                                    f && f.onTransitionEnd()
                                                })))) : f.updateProgress(c), f.updateActiveIndex()
                                            }(!f.params.freeModeMomentum || r >= f.params.longSwipesMs) && (f.updateProgress(), f.updateActiveIndex())
                                        } else {
                                            var C, A = 0,
                                                T = f.slidesSizesGrid[0];
                                            for (C = 0; C < f.slidesGrid.length; C += f.params.slidesPerGroup) void 0 !== f.slidesGrid[C + f.params.slidesPerGroup] ? e >= f.slidesGrid[C] && e < f.slidesGrid[C + f.params.slidesPerGroup] && (A = C, T = f.slidesGrid[C + f.params.slidesPerGroup] - f.slidesGrid[C]) : e >= f.slidesGrid[C] && (A = C, T = f.slidesGrid[f.slidesGrid.length - 1] - f.slidesGrid[f.slidesGrid.length - 2]);
                                            var _ = (e - f.slidesGrid[A]) / T;
                                            if (r > f.params.longSwipesMs) {
                                                if (!f.params.longSwipes) return void f.slideTo(f.activeIndex);
                                                "next" === f.swipeDirection && (_ >= f.params.longSwipesRatio ? f.slideTo(A + f.params.slidesPerGroup) : f.slideTo(A)), "prev" === f.swipeDirection && (_ > 1 - f.params.longSwipesRatio ? f.slideTo(A + f.params.slidesPerGroup) : f.slideTo(A))
                                            } else {
                                                if (!f.params.shortSwipes) return void f.slideTo(f.activeIndex);
                                                "next" === f.swipeDirection && f.slideTo(A + f.params.slidesPerGroup), "prev" === f.swipeDirection && f.slideTo(A)
                                            }
                                        } else g = y = !1
                                }
                            }, f._slideTo = function(t, e) {
                                return f.slideTo(t, e, !0, !0)
                            }, f.slideTo = function(t, e, a, i) {
                                void 0 === a && (a = !0), void 0 === t && (t = 0), t < 0 && (t = 0), f.snapIndex = Math.floor(t / f.params.slidesPerGroup), f.snapIndex >= f.snapGrid.length && (f.snapIndex = f.snapGrid.length - 1);
                                var r = -f.snapGrid[f.snapIndex];
                                if (f.params.autoplay && f.autoplaying && (i || !f.params.autoplayDisableOnInteraction ? f.pauseAutoplay(e) : f.stopAutoplay()), f.updateProgress(r), f.params.normalizeSlideIndex)
                                    for (var s = 0; s < f.slidesGrid.length; s++) - Math.floor(100 * r) >= Math.floor(100 * f.slidesGrid[s]) && (t = s);
                                return !(!f.params.allowSwipeToNext && r < f.translate && r < f.minTranslate()) && (!(!f.params.allowSwipeToPrev && r > f.translate && r > f.maxTranslate() && (f.activeIndex || 0) !== t) && (void 0 === e && (e = f.params.speed), f.previousIndex = f.activeIndex || 0, f.activeIndex = t, f.updateRealIndex(), f.rtl && -r === f.translate || !f.rtl && r === f.translate ? (f.params.autoHeight && f.updateAutoHeight(), f.updateClasses(), "slide" !== f.params.effect && f.setWrapperTranslate(r), !1) : (f.updateClasses(), f.onTransitionStart(a), 0 === e || f.browser.lteIE9 ? (f.setWrapperTranslate(r), f.setWrapperTransition(0), f.onTransitionEnd(a)) : (f.setWrapperTranslate(r), f.setWrapperTransition(e), f.animating || (f.animating = !0, f.wrapper.transitionEnd((function() {
                                    f && f.onTransitionEnd(a)
                                })))), !0)))
                            }, f.onTransitionStart = function(t) {
                                void 0 === t && (t = !0), f.params.autoHeight && f.updateAutoHeight(), f.lazy && f.lazy.onTransitionStart(), t && (f.emit("onTransitionStart", f), f.activeIndex !== f.previousIndex && (f.emit("onSlideChangeStart", f), f.activeIndex > f.previousIndex ? f.emit("onSlideNextStart", f) : f.emit("onSlidePrevStart", f)))
                            }, f.onTransitionEnd = function(t) {
                                f.animating = !1, f.setWrapperTransition(0), void 0 === t && (t = !0), f.lazy && f.lazy.onTransitionEnd(), t && (f.emit("onTransitionEnd", f), f.activeIndex !== f.previousIndex && (f.emit("onSlideChangeEnd", f), f.activeIndex > f.previousIndex ? f.emit("onSlideNextEnd", f) : f.emit("onSlidePrevEnd", f))), f.params.history && f.history && f.history.setHistory(f.params.history, f.activeIndex), f.params.hashnav && f.hashnav && f.hashnav.setHash()
                            }, f.slideNext = function(t, e, a) {
                                if (f.params.loop) {
                                    if (f.animating) return !1;
                                    f.fixLoop();
                                    f.container[0].clientLeft;
                                    return f.slideTo(f.activeIndex + f.params.slidesPerGroup, e, t, a)
                                }
                                return f.slideTo(f.activeIndex + f.params.slidesPerGroup, e, t, a)
                            }, f._slideNext = function(t) {
                                return f.slideNext(!0, t, !0)
                            }, f.slidePrev = function(t, e, a) {
                                if (f.params.loop) {
                                    if (f.animating) return !1;
                                    f.fixLoop();
                                    f.container[0].clientLeft;
                                    return f.slideTo(f.activeIndex - 1, e, t, a)
                                }
                                return f.slideTo(f.activeIndex - 1, e, t, a)
                            }, f._slidePrev = function(t) {
                                return f.slidePrev(!0, t, !0)
                            }, f.slideReset = function(t, e, a) {
                                return f.slideTo(f.activeIndex, e, t)
                            }, f.disableTouchControl = function() {
                                return f.params.onlyExternal = !0, !0
                            }, f.enableTouchControl = function() {
                                return f.params.onlyExternal = !1, !0
                            }, f.setWrapperTransition = function(t, e) {
                                f.wrapper.transition(t), "slide" !== f.params.effect && f.effects[f.params.effect] && f.effects[f.params.effect].setTransition(t), f.params.parallax && f.parallax && f.parallax.setTransition(t), f.params.scrollbar && f.scrollbar && f.scrollbar.setTransition(t), f.params.control && f.controller && f.controller.setTransition(t, e), f.emit("onSetTransition", f, t)
                            }, f.setWrapperTranslate = function(t, e, a) {
                                var i = 0,
                                    r = 0;
                                f.isHorizontal() ? i = f.rtl ? -t : t : r = t, f.params.roundLengths && (i = I(i), r = I(r)), f.params.virtualTranslate || (f.support.transforms3d ? f.wrapper.transform("translate3d(".concat(i, "px, ").concat(r, "px, ").concat(0, "px)")) : f.wrapper.transform("translate(".concat(i, "px, ").concat(r, "px)"))), f.translate = f.isHorizontal() ? i : r;
                                var s = f.maxTranslate() - f.minTranslate();
                                (0 === s ? 0 : (t - f.minTranslate()) / s) !== f.progress && f.updateProgress(t), e && f.updateActiveIndex(), "slide" !== f.params.effect && f.effects[f.params.effect] && f.effects[f.params.effect].setTranslate(f.translate), f.params.parallax && f.parallax && f.parallax.setTranslate(f.translate), f.params.scrollbar && f.scrollbar && f.scrollbar.setTranslate(f.translate), f.params.control && f.controller && f.controller.setTranslate(f.translate, a), f.emit("onSetTranslate", f, f.translate)
                            }, f.getTranslate = function(t, e) {
                                var a, i, r, s;
                                return void 0 === e && (e = "x"), f.params.virtualTranslate ? f.rtl ? -f.translate : f.translate : (r = window.getComputedStyle(t, null), window.WebKitCSSMatrix ? ((i = r.transform || r.webkitTransform).split(",").length > 6 && (i = i.split(", ").map((function(t) {
                                    return t.replace(",", ".")
                                })).join(", ")), s = new window.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === e && (i = window.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === e && (i = window.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), f.rtl && i && (i = -i), i || 0)
                            }, f.getWrapperTranslate = function(t) {
                                return void 0 === t && (t = f.isHorizontal() ? "x" : "y"), f.getTranslate(f.wrapper[0], t)
                            }, f.observers = [], f.initObservers = function() {
                                if (f.params.observeParents)
                                    for (var t = f.container.parents(), e = 0; e < t.length; e++) G(t[e]);
                                G(f.container[0], {
                                    childList: !1
                                }), G(f.wrapper[0], {
                                    attributes: !1
                                })
                            }, f.disconnectObservers = function() {
                                for (var t = 0; t < f.observers.length; t++) f.observers[t].disconnect();
                                f.observers = []
                            }, f.createLoop = function() {
                                f.wrapper.children(".".concat(f.params.slideClass, ".").concat(f.params.slideDuplicateClass)).remove();
                                var t = f.wrapper.children(".".concat(f.params.slideClass));
                                "auto" !== f.params.slidesPerView || f.params.loopedSlides || (f.params.loopedSlides = t.length), f.loopedSlides = parseInt(f.params.loopedSlides || f.params.slidesPerView, 10), f.loopedSlides += f.params.loopAdditionalSlides, f.loopedSlides > t.length && (f.loopedSlides = t.length);
                                var e, i = [],
                                    r = [];
                                for (t.each((function(e, s) {
                                    var n = a(this);
                                    e < f.loopedSlides && r.push(s), e < t.length && e >= t.length - f.loopedSlides && i.push(s), n.attr("data-swiper-slide-index", e)
                                })), e = 0; e < r.length; e++) f.wrapper.append(a(r[e].cloneNode(!0)).addClass(f.params.slideDuplicateClass));
                                for (e = i.length - 1; e >= 0; e--) f.wrapper.prepend(a(i[e].cloneNode(!0)).addClass(f.params.slideDuplicateClass))
                            }, f.destroyLoop = function() {
                                f.wrapper.children(".".concat(f.params.slideClass, ".").concat(f.params.slideDuplicateClass)).remove(), f.slides.removeAttr("data-swiper-slide-index")
                            }, f.reLoop = function(t) {
                                var e = f.activeIndex - f.loopedSlides;
                                f.destroyLoop(), f.createLoop(), f.updateSlidesSize(), t && f.slideTo(e + f.loopedSlides, 0, !1)
                            }, f.fixLoop = function() {
                                var t;
                                f.activeIndex < f.loopedSlides ? (t = f.slides.length - 3 * f.loopedSlides + f.activeIndex, t += f.loopedSlides, f.slideTo(t, 0, !1, !0)) : ("auto" === f.params.slidesPerView && f.activeIndex >= 2 * f.loopedSlides || f.activeIndex > f.slides.length - 2 * f.params.slidesPerView) && (t = -f.slides.length + f.activeIndex + f.loopedSlides, t += f.loopedSlides, f.slideTo(t, 0, !1, !0))
                            }, f.appendSlide = function(t) {
                                if (f.params.loop && f.destroyLoop(), "object" === i(t) && t.length)
                                    for (var e = 0; e < t.length; e++) t[e] && f.wrapper.append(t[e]);
                                else f.wrapper.append(t);
                                f.params.loop && f.createLoop(), f.params.observer && f.support.observer || f.update(!0)
                            }, f.prependSlide = function(t) {
                                f.params.loop && f.destroyLoop();
                                var e = f.activeIndex + 1;
                                if ("object" === i(t) && t.length) {
                                    for (var a = 0; a < t.length; a++) t[a] && f.wrapper.prepend(t[a]);
                                    e = f.activeIndex + t.length
                                } else f.wrapper.prepend(t);
                                f.params.loop && f.createLoop(), f.params.observer && f.support.observer || f.update(!0), f.slideTo(e, 0, !1)
                            }, f.removeSlide = function(t) {
                                f.params.loop && (f.destroyLoop(), f.slides = f.wrapper.children(".".concat(f.params.slideClass)));
                                var e, a = f.activeIndex;
                                if ("object" === i(t) && t.length) {
                                    for (var r = 0; r < t.length; r++) e = t[r], f.slides[e] && f.slides.eq(e).remove(), e < a && a--;
                                    a = Math.max(a, 0)
                                } else e = t, f.slides[e] && f.slides.eq(e).remove(), e < a && a--, a = Math.max(a, 0);
                                f.params.loop && f.createLoop(), f.params.observer && f.support.observer || f.update(!0), f.params.loop ? f.slideTo(a + f.loopedSlides, 0, !1) : f.slideTo(a, 0, !1)
                            }, f.removeAllSlides = function() {
                                for (var t = [], e = 0; e < f.slides.length; e++) t.push(e);
                                f.removeSlide(t)
                            }, f.effects = {
                                fade: {
                                    setTranslate: function() {
                                        for (var t = 0; t < f.slides.length; t++) {
                                            var e = f.slides.eq(t),
                                                a = -e[0].swiperSlideOffset;
                                            f.params.virtualTranslate || (a -= f.translate);
                                            var i = 0;
                                            f.isHorizontal() || (i = a, a = 0);
                                            var r = f.params.fade.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                                            e.css({
                                                opacity: r
                                            }).transform("translate3d(".concat(a, "px, ").concat(i, "px, 0px)"))
                                        }
                                    },
                                    setTransition: function(t) {
                                        if (f.slides.transition(t), f.params.virtualTranslate && 0 !== t) {
                                            var e = !1;
                                            f.slides.transitionEnd((function() {
                                                if (!e && f) {
                                                    e = !0, f.animating = !1;
                                                    for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = 0; a < t.length; a++) f.wrapper.trigger(t[a])
                                                }
                                            }))
                                        }
                                    }
                                },
                                flip: {
                                    setTranslate: function() {
                                        for (var t = 0; t < f.slides.length; t++) {
                                            var e = f.slides.eq(t),
                                                i = e[0].progress;
                                            f.params.flip.limitRotation && (i = Math.max(Math.min(e[0].progress, 1), -1));
                                            var r = -180 * i,
                                                s = 0,
                                                n = -e[0].swiperSlideOffset,
                                                o = 0;
                                            if (f.isHorizontal() ? f.rtl && (r = -r) : (o = n, n = 0, s = -r, r = 0), e[0].style.zIndex = -Math.abs(Math.round(i)) + f.slides.length, f.params.flip.slideShadows) {
                                                var l = f.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                                                    h = f.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                                                0 === l.length && (l = a('<div class="swiper-slide-shadow-'.concat(f.isHorizontal() ? "left" : "top", '"></div>')), e.append(l)), 0 === h.length && (h = a('<div class="swiper-slide-shadow-'.concat(f.isHorizontal() ? "right" : "bottom", '"></div>')), e.append(h)), l.length && (l[0].style.opacity = Math.max(-i, 0)), h.length && (h[0].style.opacity = Math.max(i, 0))
                                            }
                                            e.transform("translate3d(".concat(n, "px, ").concat(o, "px, 0px) rotateX(").concat(s, "deg) rotateY(").concat(r, "deg)"))
                                        }
                                    },
                                    setTransition: function(t) {
                                        if (f.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), f.params.virtualTranslate && 0 !== t) {
                                            var e = !1;
                                            f.slides.eq(f.activeIndex).transitionEnd((function() {
                                                if (!e && f && a(this).hasClass(f.params.slideActiveClass)) {
                                                    e = !0, f.animating = !1;
                                                    for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < t.length; i++) f.wrapper.trigger(t[i])
                                                }
                                            }))
                                        }
                                    }
                                },
                                cube: {
                                    setTranslate: function() {
                                        var t, e = 0;
                                        f.params.cube.shadow && (f.isHorizontal() ? (0 === (t = f.wrapper.find(".swiper-cube-shadow")).length && (t = a('<div class="swiper-cube-shadow"></div>'), f.wrapper.append(t)), t.css({
                                            height: "".concat(f.width, "px")
                                        })) : 0 === (t = f.container.find(".swiper-cube-shadow")).length && (t = a('<div class="swiper-cube-shadow"></div>'), f.container.append(t)));
                                        for (var i = 0; i < f.slides.length; i++) {
                                            var r = f.slides.eq(i),
                                                s = 90 * i,
                                                n = Math.floor(s / 360);
                                            f.rtl && (s = -s, n = Math.floor(-s / 360));
                                            var o = Math.max(Math.min(r[0].progress, 1), -1),
                                                l = 0,
                                                h = 0,
                                                p = 0;
                                            i % 4 == 0 ? (l = 4 * -n * f.size, p = 0) : (i - 1) % 4 == 0 ? (l = 0, p = 4 * -n * f.size) : (i - 2) % 4 == 0 ? (l = f.size + 4 * n * f.size, p = f.size) : (i - 3) % 4 == 0 && (l = -f.size, p = 3 * f.size + 4 * f.size * n), f.rtl && (l = -l), f.isHorizontal() || (h = l, l = 0);
                                            var c = "rotateX(".concat(f.isHorizontal() ? 0 : -s, "deg) rotateY(").concat(f.isHorizontal() ? s : 0, "deg) translate3d(").concat(l, "px, ").concat(h, "px, ").concat(p, "px)");
                                            if (o <= 1 && o > -1 && (e = 90 * i + 90 * o, f.rtl && (e = 90 * -i - 90 * o)), r.transform(c), f.params.cube.slideShadows) {
                                                var m = f.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                                    d = f.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                                0 === m.length && (m = a('<div class="swiper-slide-shadow-'.concat(f.isHorizontal() ? "left" : "top", '"></div>')), r.append(m)), 0 === d.length && (d = a('<div class="swiper-slide-shadow-'.concat(f.isHorizontal() ? "right" : "bottom", '"></div>')), r.append(d)), m.length && (m[0].style.opacity = Math.max(-o, 0)), d.length && (d[0].style.opacity = Math.max(o, 0))
                                            }
                                        }
                                        if (f.wrapper.css({
                                            "-webkit-transform-origin": "50% 50% -".concat(f.size / 2, "px"),
                                            "-moz-transform-origin": "50% 50% -".concat(f.size / 2, "px"),
                                            "-ms-transform-origin": "50% 50% -".concat(f.size / 2, "px"),
                                            "transform-origin": "50% 50% -".concat(f.size / 2, "px")
                                        }), f.params.cube.shadow)
                                            if (f.isHorizontal()) t.transform("translate3d(0px, ".concat(f.width / 2 + f.params.cube.shadowOffset, "px, ").concat(-f.width / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(f.params.cube.shadowScale, ")"));
                                            else {
                                                var u = Math.abs(e) - 90 * Math.floor(Math.abs(e) / 90),
                                                    g = 1.5 - (Math.sin(2 * u * Math.PI / 360) / 2 + Math.cos(2 * u * Math.PI / 360) / 2),
                                                    y = f.params.cube.shadowScale,
                                                    v = f.params.cube.shadowScale / g,
                                                    x = f.params.cube.shadowOffset;
                                                t.transform("scale3d(".concat(y, ", 1, ").concat(v, ") translate3d(0px, ").concat(f.height / 2 + x, "px, ").concat(-f.height / 2 / v, "px) rotateX(-90deg)"))
                                            }
                                        var k = f.isSafari || f.isUiWebView ? -f.size / 2 : 0;
                                        f.wrapper.transform("translate3d(0px,0,".concat(k, "px) rotateX(").concat(f.isHorizontal() ? 0 : e, "deg) rotateY(").concat(f.isHorizontal() ? -e : 0, "deg)"))
                                    },
                                    setTransition: function(t) {
                                        f.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), f.params.cube.shadow && !f.isHorizontal() && f.container.find(".swiper-cube-shadow").transition(t)
                                    }
                                },
                                coverflow: {
                                    setTranslate: function() {
                                        for (var t = f.translate, e = f.isHorizontal() ? -t + f.width / 2 : -t + f.height / 2, i = f.isHorizontal() ? f.params.coverflow.rotate : -f.params.coverflow.rotate, r = f.params.coverflow.depth, s = 0, n = f.slides.length; s < n; s++) {
                                            var o = f.slides.eq(s),
                                                l = f.slidesSizesGrid[s],
                                                h = (e - o[0].swiperSlideOffset - l / 2) / l * f.params.coverflow.modifier,
                                                p = f.isHorizontal() ? i * h : 0,
                                                c = f.isHorizontal() ? 0 : i * h,
                                                m = -r * Math.abs(h),
                                                d = f.isHorizontal() ? 0 : f.params.coverflow.stretch * h,
                                                u = f.isHorizontal() ? f.params.coverflow.stretch * h : 0;
                                            Math.abs(u) < .001 && (u = 0), Math.abs(d) < .001 && (d = 0), Math.abs(m) < .001 && (m = 0), Math.abs(p) < .001 && (p = 0), Math.abs(c) < .001 && (c = 0);
                                            var g = "translate3d(".concat(u, "px,").concat(d, "px,").concat(m, "px)  rotateX(").concat(c, "deg) rotateY(").concat(p, "deg)");
                                            if (o.transform(g), o[0].style.zIndex = 1 - Math.abs(Math.round(h)), f.params.coverflow.slideShadows) {
                                                var y = f.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                                    v = f.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                                0 === y.length && (y = a('<div class="swiper-slide-shadow-'.concat(f.isHorizontal() ? "left" : "top", '"></div>')), o.append(y)), 0 === v.length && (v = a('<div class="swiper-slide-shadow-'.concat(f.isHorizontal() ? "right" : "bottom", '"></div>')), o.append(v)), y.length && (y[0].style.opacity = h > 0 ? h : 0), v.length && (v[0].style.opacity = -h > 0 ? -h : 0)
                                            }
                                        }
                                        f.browser.ie && (f.wrapper[0].style.perspectiveOrigin = "".concat(e, "px 50%"))
                                    },
                                    setTransition: function(t) {
                                        f.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
                                    }
                                }
                            }, f.lazy = {
                                initialImageLoaded: !1,
                                loadImageInSlide: function(t, e) {
                                    if (void 0 !== t && (void 0 === e && (e = !0), 0 !== f.slides.length)) {
                                        var i = f.slides.eq(t),
                                            r = i.find(".".concat(f.params.lazyLoadingClass, ":not(.").concat(f.params.lazyStatusLoadedClass, "):not(.").concat(f.params.lazyStatusLoadingClass, ")"));
                                        !i.hasClass(f.params.lazyLoadingClass) || i.hasClass(f.params.lazyStatusLoadedClass) || i.hasClass(f.params.lazyStatusLoadingClass) || (r = r.add(i[0])), 0 !== r.length && r.each((function() {
                                            var t = a(this);
                                            t.addClass(f.params.lazyStatusLoadingClass);
                                            var r = t.attr("data-background"),
                                                s = t.attr("data-src"),
                                                n = t.attr("data-srcset"),
                                                o = t.attr("data-sizes");
                                            f.loadImage(t[0], s || r, n, o, !1, (function() {
                                                if (null != f && f) {
                                                    if (r ? (t.css("background-image", 'url("'.concat(r, '")')), t.removeAttr("data-background")) : (n && (t.attr("srcset", n), t.removeAttr("data-srcset")), o && (t.attr("sizes", o), t.removeAttr("data-sizes")), s && (t.attr("src", s), t.removeAttr("data-src"))), t.addClass(f.params.lazyStatusLoadedClass).removeClass(f.params.lazyStatusLoadingClass), i.find(".".concat(f.params.lazyPreloaderClass, ", .").concat(f.params.preloaderClass)).remove(), f.params.loop && e) {
                                                        var a = i.attr("data-swiper-slide-index");
                                                        if (i.hasClass(f.params.slideDuplicateClass)) {
                                                            var l = f.wrapper.children('[data-swiper-slide-index="'.concat(a, '"]:not(.').concat(f.params.slideDuplicateClass, ")"));
                                                            f.lazy.loadImageInSlide(l.index(), !1)
                                                        } else {
                                                            var h = f.wrapper.children(".".concat(f.params.slideDuplicateClass, '[data-swiper-slide-index="').concat(a, '"]'));
                                                            f.lazy.loadImageInSlide(h.index(), !1)
                                                        }
                                                    }
                                                    f.emit("onLazyImageReady", f, i[0], t[0])
                                                }
                                            })), f.emit("onLazyImageLoad", f, i[0], t[0])
                                        }))
                                    }
                                },
                                load: function() {
                                    var t, e = f.params.slidesPerView;
                                    if ("auto" === e && (e = 0), f.lazy.initialImageLoaded || (f.lazy.initialImageLoaded = !0), f.params.watchSlidesVisibility) f.wrapper.children(".".concat(f.params.slideVisibleClass)).each((function() {
                                        f.lazy.loadImageInSlide(a(this).index())
                                    }));
                                    else if (e > 1)
                                        for (t = f.activeIndex; t < f.activeIndex + e; t++) f.slides[t] && f.lazy.loadImageInSlide(t);
                                    else f.lazy.loadImageInSlide(f.activeIndex); if (f.params.lazyLoadingInPrevNext)
                                        if (e > 1 || f.params.lazyLoadingInPrevNextAmount && f.params.lazyLoadingInPrevNextAmount > 1) {
                                            var i = f.params.lazyLoadingInPrevNextAmount,
                                                r = e,
                                                s = Math.min(f.activeIndex + r + Math.max(i, r), f.slides.length),
                                                n = Math.max(f.activeIndex - Math.max(r, i), 0);
                                            for (t = f.activeIndex + e; t < s; t++) f.slides[t] && f.lazy.loadImageInSlide(t);
                                            for (t = n; t < f.activeIndex; t++) f.slides[t] && f.lazy.loadImageInSlide(t)
                                        } else {
                                            var o = f.wrapper.children(".".concat(f.params.slideNextClass));
                                            o.length > 0 && f.lazy.loadImageInSlide(o.index());
                                            var l = f.wrapper.children(".".concat(f.params.slidePrevClass));
                                            l.length > 0 && f.lazy.loadImageInSlide(l.index())
                                        }
                                },
                                onTransitionStart: function() {
                                    f.params.lazyLoading && (f.params.lazyLoadingOnTransitionStart || !f.params.lazyLoadingOnTransitionStart && !f.lazy.initialImageLoaded) && f.lazy.load()
                                },
                                onTransitionEnd: function() {
                                    f.params.lazyLoading && !f.params.lazyLoadingOnTransitionStart && f.lazy.load()
                                }
                            }, f.scrollbar = {
                                isTouched: !1,
                                setDragPosition: function(t) {
                                    var e = f.scrollbar,
                                        a = (f.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX || t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY || t.clientY) - e.track.offset()[f.isHorizontal() ? "left" : "top"] - e.dragSize / 2,
                                        i = -f.minTranslate() * e.moveDivider,
                                        r = -f.maxTranslate() * e.moveDivider;
                                    a < i ? a = i : a > r && (a = r), a = -a / e.moveDivider, f.updateProgress(a), f.setWrapperTranslate(a, !0)
                                },
                                dragStart: function(t) {
                                    var e = f.scrollbar;
                                    e.isTouched = !0, t.preventDefault(), t.stopPropagation(), e.setDragPosition(t), clearTimeout(e.dragTimeout), e.track.transition(0), f.params.scrollbarHide && e.track.css("opacity", 1), f.wrapper.transition(100), e.drag.transition(100), f.emit("onScrollbarDragStart", f)
                                },
                                dragMove: function(t) {
                                    var e = f.scrollbar;
                                    e.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), f.wrapper.transition(0), e.track.transition(0), e.drag.transition(0), f.emit("onScrollbarDragMove", f))
                                },
                                dragEnd: function(t) {
                                    var e = f.scrollbar;
                                    e.isTouched && (e.isTouched = !1, f.params.scrollbarHide && (clearTimeout(e.dragTimeout), e.dragTimeout = setTimeout((function() {
                                        e.track.css("opacity", 0), e.track.transition(400)
                                    }), 1e3)), f.emit("onScrollbarDragEnd", f), f.params.scrollbarSnapOnRelease && f.slideReset())
                                },
                                draggableEvents: !1 !== f.params.simulateTouch || f.support.touch ? f.touchEvents : f.touchEventsDesktop,
                                enableDraggable: function() {
                                    var t = f.scrollbar,
                                        e = f.support.touch ? t.track : document;
                                    a(t.track).on(t.draggableEvents.start, t.dragStart), a(e).on(t.draggableEvents.move, t.dragMove), a(e).on(t.draggableEvents.end, t.dragEnd)
                                },
                                disableDraggable: function() {
                                    var t = f.scrollbar,
                                        e = f.support.touch ? t.track : document;
                                    a(t.track).off(t.draggableEvents.start, t.dragStart), a(e).off(t.draggableEvents.move, t.dragMove), a(e).off(t.draggableEvents.end, t.dragEnd)
                                },
                                set: function() {
                                    if (f.params.scrollbar) {
                                        var t = f.scrollbar;
                                        t.track = a(f.params.scrollbar), f.params.uniqueNavElements && "string" == typeof f.params.scrollbar && t.track.length > 1 && 1 === f.container.find(f.params.scrollbar).length && (t.track = f.container.find(f.params.scrollbar)), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = a('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = f.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = f.size / f.virtualSize, t.moveDivider = t.divider * (t.trackSize / f.size), t.dragSize = t.trackSize * t.divider, f.isHorizontal() ? t.drag[0].style.width = "".concat(t.dragSize, "px") : t.drag[0].style.height = "".concat(t.dragSize, "px"), t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", f.params.scrollbarHide && (t.track[0].style.opacity = 0)
                                    }
                                },
                                setTranslate: function() {
                                    if (f.params.scrollbar) {
                                        var t, e = f.scrollbar,
                                            a = (f.translate, e.dragSize);
                                        t = (e.trackSize - e.dragSize) * f.progress, f.rtl && f.isHorizontal() ? (t = -t) > 0 ? (a = e.dragSize - t, t = 0) : -t + e.dragSize > e.trackSize && (a = e.trackSize + t) : t < 0 ? (a = e.dragSize + t, t = 0) : t + e.dragSize > e.trackSize && (a = e.trackSize - t), f.isHorizontal() ? (f.support.transforms3d ? e.drag.transform("translate3d(".concat(t, "px, 0, 0)")) : e.drag.transform("translateX(".concat(t, "px)")), e.drag[0].style.width = "".concat(a, "px")) : (f.support.transforms3d ? e.drag.transform("translate3d(0px, ".concat(t, "px, 0)")) : e.drag.transform("translateY(".concat(t, "px)")), e.drag[0].style.height = "".concat(a, "px")), f.params.scrollbarHide && (clearTimeout(e.timeout), e.track[0].style.opacity = 1, e.timeout = setTimeout((function() {
                                            e.track[0].style.opacity = 0, e.track.transition(400)
                                        }), 1e3))
                                    }
                                },
                                setTransition: function(t) {
                                    f.params.scrollbar && f.scrollbar.drag.transition(t)
                                }
                            }, f.controller = {
                                LinearSpline: function(t, e) {
                                    var a, i, r, s, n, o = function(t, e) {
                                        for (i = -1, a = t.length; a - i > 1;) t[r = a + i >> 1] <= e ? i = r : a = r;
                                        return a
                                    };
                                    this.x = t, this.y = e, this.lastIndex = t.length - 1;
                                    this.x.length;
                                    this.interpolate = function(t) {
                                        return t ? (n = o(this.x, t), s = n - 1, (t - this.x[s]) * (this.y[n] - this.y[s]) / (this.x[n] - this.x[s]) + this.y[s]) : 0
                                    }
                                },
                                getInterpolateFunction: function(t) {
                                    f.controller.spline || (f.controller.spline = f.params.loop ? new f.controller.LinearSpline(f.slidesGrid, t.slidesGrid) : new f.controller.LinearSpline(f.snapGrid, t.snapGrid))
                                },
                                setTranslate: function(t, e) {
                                    var a, i, s = f.params.control;

                                    function n(e) {
                                        t = e.rtl && "horizontal" === e.params.direction ? -f.translate : f.translate, "slide" === f.params.controlBy && (f.controller.getInterpolateFunction(e), i = -f.controller.spline.interpolate(-t)), i && "container" !== f.params.controlBy || (a = (e.maxTranslate() - e.minTranslate()) / (f.maxTranslate() - f.minTranslate()), i = (t - f.minTranslate()) * a + e.minTranslate()), f.params.controlInverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setWrapperTranslate(i, !1, f), e.updateActiveIndex()
                                    }
                                    if (Array.isArray(s))
                                        for (var o = 0; o < s.length; o++) s[o] !== e && s[o] instanceof r && n(s[o]);
                                    else s instanceof r && e !== s && n(s)
                                },
                                setTransition: function(t, e) {
                                    var a, i = f.params.control;

                                    function s(e) {
                                        e.setWrapperTransition(t, f), 0 !== t && (e.onTransitionStart(), e.wrapper.transitionEnd((function() {
                                            i && (e.params.loop && "slide" === f.params.controlBy && e.fixLoop(), e.onTransitionEnd())
                                        })))
                                    }
                                    if (Array.isArray(i))
                                        for (a = 0; a < i.length; a++) i[a] !== e && i[a] instanceof r && s(i[a]);
                                    else i instanceof r && e !== i && s(i)
                                }
                            }, f.hashnav = {
                                onHashCange: function(t, e) {
                                    var a = document.location.hash.replace("#", "");
                                    a !== f.slides.eq(f.activeIndex).attr("data-hash") && f.slideTo(f.wrapper.children(".".concat(f.params.slideClass, '[data-hash="').concat(a, '"]')).index())
                                },
                                attachEvents: function(t) {
                                    var e = t ? "off" : "on";
                                    a(window)[e]("hashchange", f.hashnav.onHashCange)
                                },
                                setHash: function() {
                                    if (f.hashnav.initialized && f.params.hashnav)
                                        if (f.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#".concat(f.slides.eq(f.activeIndex).attr("data-hash")) || !1);
                                        else {
                                            var t = f.slides.eq(f.activeIndex),
                                                e = t.attr("data-hash") || t.attr("data-history");
                                            document.location.hash = e || ""
                                        }
                                },
                                init: function() {
                                    if (f.params.hashnav && !f.params.history) {
                                        f.hashnav.initialized = !0;
                                        var t = document.location.hash.replace("#", "");
                                        if (t)
                                            for (var e = 0, a = f.slides.length; e < a; e++) {
                                                var i = f.slides.eq(e);
                                                if ((i.attr("data-hash") || i.attr("data-history")) === t && !i.hasClass(f.params.slideDuplicateClass)) {
                                                    var r = i.index();
                                                    f.slideTo(r, 0, f.params.runCallbacksOnInit, !0)
                                                }
                                            }
                                        f.params.hashnavWatchState && f.hashnav.attachEvents()
                                    }
                                },
                                destroy: function() {
                                    f.params.hashnavWatchState && f.hashnav.attachEvents(!0)
                                }
                            }, f.history = {
                                init: function() {
                                    if (f.params.history) {
                                        if (!window.history || !window.history.pushState) return f.params.history = !1, void(f.params.hashnav = !0);
                                        f.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, f.params.runCallbacksOnInit), f.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                                    }
                                },
                                setHistoryPopState: function() {
                                    f.history.paths = f.history.getPathValues(), f.history.scrollToSlide(f.params.speed, f.history.paths.value, !1)
                                },
                                getPathValues: function() {
                                    var t = window.location.pathname.slice(1).split("/"),
                                        e = t.length;
                                    return {
                                        key: t[e - 2],
                                        value: t[e - 1]
                                    }
                                },
                                setHistory: function(t, e) {
                                    if (f.history.initialized && f.params.history) {
                                        var a = f.slides.eq(e),
                                            i = this.slugify(a.attr("data-history"));
                                        window.location.pathname.includes(t) || (i = "".concat(t, "/").concat(i)), f.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i)
                                    }
                                },
                                slugify: function(t) {
                                    return t.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                                },
                                scrollToSlide: function(t, e, a) {
                                    if (e)
                                        for (var i = 0, r = f.slides.length; i < r; i++) {
                                            var s = f.slides.eq(i);
                                            if (this.slugify(s.attr("data-history")) === e && !s.hasClass(f.params.slideDuplicateClass)) {
                                                var n = s.index();
                                                f.slideTo(n, t, a)
                                            }
                                        } else f.slideTo(0, t, a)
                                }
                            }, f.disableKeyboardControl = function() {
                                f.params.keyboardControl = !1, a(document).off("keydown", z)
                            }, f.enableKeyboardControl = function() {
                                f.params.keyboardControl = !0, a(document).on("keydown", z)
                            }, f.mousewheel = {
                                event: !1,
                                lastScrollTime: (new window.Date).getTime()
                            }, f.params.mousewheelControl && (f.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                                var t = "onwheel" in document;
                                if (!t) {
                                    var e = document.createElement("div");
                                    e.setAttribute("onwheel", "return;"), t = "function" == typeof e.onwheel
                                }
                                return !t && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (t = document.implementation.hasFeature("Events.wheel", "3.0")), t
                            }() ? "wheel" : "mousewheel"), f.disableMousewheelControl = function() {
                                if (!f.mousewheel.event) return !1;
                                var t = f.container;
                                return "container" !== f.params.mousewheelEventsTarged && (t = a(f.params.mousewheelEventsTarged)), t.off(f.mousewheel.event, R), f.params.mousewheelControl = !1, !0
                            }, f.enableMousewheelControl = function() {
                                if (!f.mousewheel.event) return !1;
                                var t = f.container;
                                return "container" !== f.params.mousewheelEventsTarged && (t = a(f.params.mousewheelEventsTarged)), t.on(f.mousewheel.event, R), f.params.mousewheelControl = !0, !0
                            }, f.parallax = {
                                setTranslate: function() {
                                    f.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function() {
                                        L(this, f.progress)
                                    })), f.slides.each((function() {
                                        var t = a(this);
                                        t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function() {
                                            L(this, Math.min(Math.max(t[0].progress, -1), 1))
                                        }))
                                    }))
                                },
                                setTransition: function(t) {
                                    void 0 === t && (t = f.params.speed), f.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each((function() {
                                        var e = a(this),
                                            i = parseInt(e.attr("data-swiper-parallax-duration"), 10) || t;
                                        0 === t && (i = 0), e.transition(i)
                                    }))
                                }
                            }, f.zoom = {
                                scale: 1,
                                currentScale: 1,
                                isScaling: !1,
                                gesture: {
                                    slide: void 0,
                                    slideWidth: void 0,
                                    slideHeight: void 0,
                                    image: void 0,
                                    imageWrap: void 0,
                                    zoomMax: f.params.zoomMax
                                },
                                image: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    currentX: void 0,
                                    currentY: void 0,
                                    minX: void 0,
                                    minY: void 0,
                                    maxX: void 0,
                                    maxY: void 0,
                                    width: void 0,
                                    height: void 0,
                                    startX: void 0,
                                    startY: void 0,
                                    touchesStart: {},
                                    touchesCurrent: {}
                                },
                                velocity: {
                                    x: void 0,
                                    y: void 0,
                                    prevPositionX: void 0,
                                    prevPositionY: void 0,
                                    prevTime: void 0
                                },
                                getDistanceBetweenTouches: function(t) {
                                    if (t.targetTouches.length < 2) return 1;
                                    var e = t.targetTouches[0].pageX,
                                        a = t.targetTouches[0].pageY,
                                        i = t.targetTouches[1].pageX,
                                        r = t.targetTouches[1].pageY;
                                    return Math.sqrt(Math.pow(i - e, 2) + Math.pow(r - a, 2))
                                },
                                onGestureStart: function(t) {
                                    var e = f.zoom;
                                    if (!f.support.gestures) {
                                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                                        e.gesture.scaleStart = e.getDistanceBetweenTouches(t)
                                    }
                                    e.gesture.slide && e.gesture.slide.length || (e.gesture.slide = a(this), 0 === e.gesture.slide.length && (e.gesture.slide = f.slides.eq(f.activeIndex)), e.gesture.image = e.gesture.slide.find("img, svg, canvas"), e.gesture.imageWrap = e.gesture.image.parent(".".concat(f.params.zoomContainerClass)), e.gesture.zoomMax = e.gesture.imageWrap.attr("data-swiper-zoom") || f.params.zoomMax, 0 !== e.gesture.imageWrap.length) ? (e.gesture.image.transition(0), e.isScaling = !0) : e.gesture.image = void 0
                                },
                                onGestureChange: function(t) {
                                    var e = f.zoom;
                                    if (!f.support.gestures) {
                                        if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                                        e.gesture.scaleMove = e.getDistanceBetweenTouches(t)
                                    }
                                    e.gesture.image && 0 !== e.gesture.image.length && (f.support.gestures ? e.scale = t.scale * e.currentScale : e.scale = e.gesture.scaleMove / e.gesture.scaleStart * e.currentScale, e.scale > e.gesture.zoomMax && (e.scale = e.gesture.zoomMax - 1 + Math.pow(e.scale - e.gesture.zoomMax + 1, .5)), e.scale < f.params.zoomMin && (e.scale = f.params.zoomMin + 1 - Math.pow(f.params.zoomMin - e.scale + 1, .5)), e.gesture.image.transform("translate3d(0,0,0) scale(".concat(e.scale, ")")))
                                },
                                onGestureEnd: function(t) {
                                    var e = f.zoom;
                                    !f.support.gestures && ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2) || e.gesture.image && 0 !== e.gesture.image.length && (e.scale = Math.max(Math.min(e.scale, e.gesture.zoomMax), f.params.zoomMin), e.gesture.image.transition(f.params.speed).transform("translate3d(0,0,0) scale(".concat(e.scale, ")")), e.currentScale = e.scale, e.isScaling = !1, 1 === e.scale && (e.gesture.slide = void 0))
                                },
                                onTouchStart: function(t, e) {
                                    var a = t.zoom;
                                    a.gesture.image && 0 !== a.gesture.image.length && (a.image.isTouched || ("android" === t.device.os && e.preventDefault(), a.image.isTouched = !0, a.image.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, a.image.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                                },
                                onTouchMove: function(t) {
                                    var e = f.zoom;
                                    if (e.gesture.image && 0 !== e.gesture.image.length && (f.allowClick = !1, e.image.isTouched && e.gesture.slide)) {
                                        e.image.isMoved || (e.image.width = e.gesture.image[0].offsetWidth, e.image.height = e.gesture.image[0].offsetHeight, e.image.startX = f.getTranslate(e.gesture.imageWrap[0], "x") || 0, e.image.startY = f.getTranslate(e.gesture.imageWrap[0], "y") || 0, e.gesture.slideWidth = e.gesture.slide[0].offsetWidth, e.gesture.slideHeight = e.gesture.slide[0].offsetHeight, e.gesture.imageWrap.transition(0), f.rtl && (e.image.startX = -e.image.startX), f.rtl && (e.image.startY = -e.image.startY));
                                        var a = e.image.width * e.scale,
                                            i = e.image.height * e.scale;
                                        if (!(a < e.gesture.slideWidth && i < e.gesture.slideHeight)) {
                                            if (e.image.minX = Math.min(e.gesture.slideWidth / 2 - a / 2, 0), e.image.maxX = -e.image.minX, e.image.minY = Math.min(e.gesture.slideHeight / 2 - i / 2, 0), e.image.maxY = -e.image.minY, e.image.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, e.image.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !e.image.isMoved && !e.isScaling) {
                                                if (f.isHorizontal() && Math.floor(e.image.minX) === Math.floor(e.image.startX) && e.image.touchesCurrent.x < e.image.touchesStart.x || Math.floor(e.image.maxX) === Math.floor(e.image.startX) && e.image.touchesCurrent.x > e.image.touchesStart.x) return void(e.image.isTouched = !1);
                                                if (!f.isHorizontal() && Math.floor(e.image.minY) === Math.floor(e.image.startY) && e.image.touchesCurrent.y < e.image.touchesStart.y || Math.floor(e.image.maxY) === Math.floor(e.image.startY) && e.image.touchesCurrent.y > e.image.touchesStart.y) return void(e.image.isTouched = !1)
                                            }
                                            t.preventDefault(), t.stopPropagation(), e.image.isMoved = !0, e.image.currentX = e.image.touchesCurrent.x - e.image.touchesStart.x + e.image.startX, e.image.currentY = e.image.touchesCurrent.y - e.image.touchesStart.y + e.image.startY, e.image.currentX < e.image.minX && (e.image.currentX = e.image.minX + 1 - Math.pow(e.image.minX - e.image.currentX + 1, .8)), e.image.currentX > e.image.maxX && (e.image.currentX = e.image.maxX - 1 + Math.pow(e.image.currentX - e.image.maxX + 1, .8)), e.image.currentY < e.image.minY && (e.image.currentY = e.image.minY + 1 - Math.pow(e.image.minY - e.image.currentY + 1, .8)), e.image.currentY > e.image.maxY && (e.image.currentY = e.image.maxY - 1 + Math.pow(e.image.currentY - e.image.maxY + 1, .8)), e.velocity.prevPositionX || (e.velocity.prevPositionX = e.image.touchesCurrent.x), e.velocity.prevPositionY || (e.velocity.prevPositionY = e.image.touchesCurrent.y), e.velocity.prevTime || (e.velocity.prevTime = Date.now()), e.velocity.x = (e.image.touchesCurrent.x - e.velocity.prevPositionX) / (Date.now() - e.velocity.prevTime) / 2, e.velocity.y = (e.image.touchesCurrent.y - e.velocity.prevPositionY) / (Date.now() - e.velocity.prevTime) / 2, Math.abs(e.image.touchesCurrent.x - e.velocity.prevPositionX) < 2 && (e.velocity.x = 0), Math.abs(e.image.touchesCurrent.y - e.velocity.prevPositionY) < 2 && (e.velocity.y = 0), e.velocity.prevPositionX = e.image.touchesCurrent.x, e.velocity.prevPositionY = e.image.touchesCurrent.y, e.velocity.prevTime = Date.now(), e.gesture.imageWrap.transform("translate3d(".concat(e.image.currentX, "px, ").concat(e.image.currentY, "px,0)"))
                                        }
                                    }
                                },
                                onTouchEnd: function(t, e) {
                                    var a = t.zoom;
                                    if (a.gesture.image && 0 !== a.gesture.image.length) {
                                        if (!a.image.isTouched || !a.image.isMoved) return a.image.isTouched = !1, void(a.image.isMoved = !1);
                                        a.image.isTouched = !1, a.image.isMoved = !1;
                                        var i = 300,
                                            r = 300,
                                            s = a.velocity.x * i,
                                            n = a.image.currentX + s,
                                            o = a.velocity.y * r,
                                            l = a.image.currentY + o;
                                        0 !== a.velocity.x && (i = Math.abs((n - a.image.currentX) / a.velocity.x)), 0 !== a.velocity.y && (r = Math.abs((l - a.image.currentY) / a.velocity.y));
                                        var h = Math.max(i, r);
                                        a.image.currentX = n, a.image.currentY = l;
                                        var p = a.image.width * a.scale,
                                            c = a.image.height * a.scale;
                                        a.image.minX = Math.min(a.gesture.slideWidth / 2 - p / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - c / 2, 0), a.image.maxY = -a.image.minY, a.image.currentX = Math.max(Math.min(a.image.currentX, a.image.maxX), a.image.minX), a.image.currentY = Math.max(Math.min(a.image.currentY, a.image.maxY), a.image.minY), a.gesture.imageWrap.transition(h).transform("translate3d(".concat(a.image.currentX, "px, ").concat(a.image.currentY, "px,0)"))
                                    }
                                },
                                onTransitionEnd: function(t) {
                                    var e = t.zoom;
                                    e.gesture.slide && t.previousIndex !== t.activeIndex && (e.gesture.image.transform("translate3d(0,0,0) scale(1)"), e.gesture.imageWrap.transform("translate3d(0,0,0)"), e.gesture.slide = e.gesture.image = e.gesture.imageWrap = void 0, e.scale = e.currentScale = 1)
                                },
                                toggleZoom: function(t, e) {
                                    var i, r, s, n, o, l, h, p, c, m, d, f, u, g, y, v, x = t.zoom;
                                    (x.gesture.slide || (x.gesture.slide = t.clickedSlide ? a(t.clickedSlide) : t.slides.eq(t.activeIndex), x.gesture.image = x.gesture.slide.find("img, svg, canvas"), x.gesture.imageWrap = x.gesture.image.parent(".".concat(t.params.zoomContainerClass))), x.gesture.image && 0 !== x.gesture.image.length) && (void 0 === x.image.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = x.image.touchesStart.x, r = x.image.touchesStart.y), x.scale && 1 !== x.scale ? (x.scale = x.currentScale = 1, x.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), x.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), x.gesture.slide = void 0) : (x.scale = x.currentScale = x.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax, e ? (y = x.gesture.slide[0].offsetWidth, v = x.gesture.slide[0].offsetHeight, s = x.gesture.slide.offset().left + y / 2 - i, n = x.gesture.slide.offset().top + v / 2 - r, h = x.gesture.image[0].offsetWidth, p = x.gesture.image[0].offsetHeight, c = h * x.scale, m = p * x.scale, u = -(d = Math.min(y / 2 - c / 2, 0)), g = -(f = Math.min(v / 2 - m / 2, 0)), (o = s * x.scale) < d && (o = d), o > u && (o = u), (l = n * x.scale) < f && (l = f), l > g && (l = g)) : (o = 0, l = 0), x.gesture.imageWrap.transition(300).transform("translate3d(".concat(o, "px, ").concat(l, "px,0)")), x.gesture.image.transition(300).transform("translate3d(0,0,0) scale(".concat(x.scale, ")"))))
                                },
                                attachEvents: function(t) {
                                    var e = t ? "off" : "on";
                                    if (f.params.zoom) {
                                        f.slides;
                                        var i = !("touchstart" !== f.touchEvents.start || !f.support.passiveListener || !f.params.passiveListeners) && {
                                            passive: !0,
                                            capture: !1
                                        };
                                        f.support.gestures ? (f.slides[e]("gesturestart", f.zoom.onGestureStart, i), f.slides[e]("gesturechange", f.zoom.onGestureChange, i), f.slides[e]("gestureend", f.zoom.onGestureEnd, i)) : "touchstart" === f.touchEvents.start && (f.slides[e](f.touchEvents.start, f.zoom.onGestureStart, i), f.slides[e](f.touchEvents.move, f.zoom.onGestureChange, i), f.slides[e](f.touchEvents.end, f.zoom.onGestureEnd, i)), f[e]("touchStart", f.zoom.onTouchStart), f.slides.each((function(t, i) {
                                            a(i).find(".".concat(f.params.zoomContainerClass)).length > 0 && a(i)[e](f.touchEvents.move, f.zoom.onTouchMove)
                                        })), f[e]("touchEnd", f.zoom.onTouchEnd), f[e]("transitionEnd", f.zoom.onTransitionEnd), f.params.zoomToggle && f.on("doubleTap", f.zoom.toggleZoom)
                                    }
                                },
                                init: function() {
                                    f.zoom.attachEvents()
                                },
                                destroy: function() {
                                    f.zoom.attachEvents(!0)
                                }
                            }, f._plugins = [], f.plugins) {
                                var F = f.plugins[_](f, f.params[_]);
                                F && f._plugins.push(F)
                            }
                            return f.callPlugins = function(t) {
                                for (var e = 0; e < f._plugins.length; e++) t in f._plugins[e] && f._plugins[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                            }, f.emitterEventListeners = {}, f.emit = function(t) {
                                var e;
                                if (f.params[t] && f.params[t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), f.emitterEventListeners[t])
                                    for (e = 0; e < f.emitterEventListeners[t].length; e++) f.emitterEventListeners[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                                f.callPlugins && f.callPlugins(t, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                            }, f.on = function(t, e) {
                                return t = O(t), f.emitterEventListeners[t] || (f.emitterEventListeners[t] = []), f.emitterEventListeners[t].push(e), f
                            }, f.off = function(t, e) {
                                var a;
                                if (t = O(t), void 0 === e) return f.emitterEventListeners[t] = [], f;
                                if (f.emitterEventListeners[t] && 0 !== f.emitterEventListeners[t].length) {
                                    for (a = 0; a < f.emitterEventListeners[t].length; a++) f.emitterEventListeners[t][a] === e && f.emitterEventListeners[t].splice(a, 1);
                                    return f
                                }
                            }, f.once = function(t, e) {
                                t = O(t);
                                return f.on(t, (function a() {
                                    e(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), f.off(t, a)
                                })), f
                            }, f.a11y = {
                                makeFocusable: function(t) {
                                    return t.attr("tabIndex", "0"), t
                                },
                                addRole: function(t, e) {
                                    return t.attr("role", e), t
                                },
                                addLabel: function(t, e) {
                                    return t.attr("aria-label", e), t
                                },
                                disable: function(t) {
                                    return t.attr("aria-disabled", !0), t
                                },
                                enable: function(t) {
                                    return t.attr("aria-disabled", !1), t
                                },
                                onEnterKey: function(t) {
                                    13 === t.keyCode && (a(t.target).is(f.params.nextButton) ? (f.onClickNext(t), f.isEnd ? f.a11y.notify(f.params.lastSlideMessage) : f.a11y.notify(f.params.nextSlideMessage)) : a(t.target).is(f.params.prevButton) && (f.onClickPrev(t), f.isBeginning ? f.a11y.notify(f.params.firstSlideMessage) : f.a11y.notify(f.params.prevSlideMessage)), a(t.target).is(".".concat(f.params.bulletClass)) && a(t.target)[0].click())
                                },
                                liveRegion: a('<span class="'.concat(f.params.notificationClass, '" aria-live="assertive" aria-atomic="true"></span>')),
                                notify: function(t) {
                                    var e = f.a11y.liveRegion;
                                    0 !== e.length && (e.html(""), e.html(t))
                                },
                                init: function() {
                                    f.params.nextButton && f.nextButton && f.nextButton.length > 0 && (f.a11y.makeFocusable(f.nextButton), f.a11y.addRole(f.nextButton, "button"), f.a11y.addLabel(f.nextButton, f.params.nextSlideMessage)), f.params.prevButton && f.prevButton && f.prevButton.length > 0 && (f.a11y.makeFocusable(f.prevButton), f.a11y.addRole(f.prevButton, "button"), f.a11y.addLabel(f.prevButton, f.params.prevSlideMessage)), a(f.container).append(f.a11y.liveRegion)
                                },
                                initPagination: function() {
                                    f.params.pagination && f.params.paginationClickable && f.bullets && f.bullets.length && f.bullets.each((function() {
                                        var t = a(this);
                                        f.a11y.makeFocusable(t), f.a11y.addRole(t, "button"), f.a11y.addLabel(t, f.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                                    }))
                                },
                                destroy: function() {
                                    f.a11y.liveRegion && f.a11y.liveRegion.length > 0 && f.a11y.liveRegion.remove()
                                }
                            }, f.init = function() {
                                f.params.loop && f.createLoop(), f.updateContainerSize(), f.updateSlidesSize(), f.updatePagination(), f.params.scrollbar && f.scrollbar && (f.scrollbar.set(), f.params.scrollbarDraggable && f.scrollbar.enableDraggable()), "slide" !== f.params.effect && f.effects[f.params.effect] && (f.params.loop || f.updateProgress(), f.effects[f.params.effect].setTranslate()), f.params.loop ? f.slideTo(f.params.initialSlide + f.loopedSlides, 0, f.params.runCallbacksOnInit) : (f.slideTo(f.params.initialSlide, 0, f.params.runCallbacksOnInit), 0 === f.params.initialSlide && (f.parallax && f.params.parallax && f.parallax.setTranslate(), f.lazy && f.params.lazyLoading && (f.lazy.load(), f.lazy.initialImageLoaded = !0))), f.attachEvents(), f.params.observer && f.support.observer && f.initObservers(), f.params.preloadImages && !f.params.lazyLoading && f.preloadImages(), f.params.zoom && f.zoom && f.zoom.init(), f.params.autoplay && f.startAutoplay(), f.params.keyboardControl && f.enableKeyboardControl && f.enableKeyboardControl(), f.params.mousewheelControl && f.enableMousewheelControl && f.enableMousewheelControl(), f.params.hashnavReplaceState && (f.params.replaceState = f.params.hashnavReplaceState), f.params.history && f.history && f.history.init(), f.params.hashnav && f.hashnav && f.hashnav.init(), f.params.a11y && f.a11y && f.a11y.init(), f.emit("onInit", f)
                            }, f.cleanupStyles = function() {
                                f.container.removeClass(f.classNames.join(" ")).removeAttr("style"), f.wrapper.removeAttr("style"), f.slides && f.slides.length && f.slides.removeClass([f.params.slideVisibleClass, f.params.slideActiveClass, f.params.slideNextClass, f.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), f.paginationContainer && f.paginationContainer.length && f.paginationContainer.removeClass(f.params.paginationHiddenClass), f.bullets && f.bullets.length && f.bullets.removeClass(f.params.bulletActiveClass), f.params.prevButton && a(f.params.prevButton).removeClass(f.params.buttonDisabledClass), f.params.nextButton && a(f.params.nextButton).removeClass(f.params.buttonDisabledClass), f.params.scrollbar && f.scrollbar && (f.scrollbar.track && f.scrollbar.track.length && f.scrollbar.track.removeAttr("style"), f.scrollbar.drag && f.scrollbar.drag.length && f.scrollbar.drag.removeAttr("style"))
                            }, f.destroy = function(t, e) {
                                f.detachEvents(), f.stopAutoplay(), f.params.scrollbar && f.scrollbar && f.params.scrollbarDraggable && f.scrollbar.disableDraggable(), f.params.loop && f.destroyLoop(), e && f.cleanupStyles(), f.disconnectObservers(), f.params.zoom && f.zoom && f.zoom.destroy(), f.params.keyboardControl && f.disableKeyboardControl && f.disableKeyboardControl(), f.params.mousewheelControl && f.disableMousewheelControl && f.disableMousewheelControl(), f.params.a11y && f.a11y && f.a11y.destroy(), f.params.history && !f.params.replaceState && window.removeEventListener("popstate", f.history.setHistoryPopState), f.params.hashnav && f.hashnav && f.hashnav.destroy(), f.emit("onDestroy"), !1 !== t && (f = null)
                            }, f.init(), f
                        }

                        function I(t) {
                            return Math.floor(t)
                        }

                        function B() {
                            var t = f.params.autoplay,
                                e = f.slides.eq(f.activeIndex);
                            e.attr("data-swiper-autoplay") && (t = e.attr("data-swiper-autoplay") || f.params.autoplay), f.autoplayTimeoutId = setTimeout((function() {
                                f.params.loop ? (f.fixLoop(), f._slideNext(), f.emit("onAutoplay", f)) : f.isEnd ? n.autoplayStopOnLast ? f.stopAutoplay() : (f._slideTo(0), f.emit("onAutoplay", f)) : (f._slideNext(), f.emit("onAutoplay", f))
                            }), t)
                        }

                        function V(t, e) {
                            var i = a(t.target);
                            if (!i.is(e))
                                if ("string" == typeof e) i = i.parents(e);
                                else if (e.nodeType) {
                                var r;
                                if (i.parents().each((function(t, a) {
                                    a === e && (r = e)
                                })), !r) return;
                                return e
                            }
                            if (0 !== i.length) return i[0]
                        }

                        function G(t, e) {
                            e = e || {};
                            var a = new(window.MutationObserver || window.WebkitMutationObserver)((function(t) {
                                t.forEach((function(t) {
                                    f.onResize(!0), f.emit("onObserverUpdate", f, t)
                                }))
                            }));
                            a.observe(t, {
                                attributes: void 0 === e.attributes || e.attributes,
                                childList: void 0 === e.childList || e.childList,
                                characterData: void 0 === e.characterData || e.characterData
                            }), f.observers.push(a)
                        }

                        function z(t) {
                            t.originalEvent && (t = t.originalEvent);
                            var e = t.keyCode || t.charCode;
                            if (!f.params.allowSwipeToNext && (f.isHorizontal() && 39 === e || !f.isHorizontal() && 40 === e)) return !1;
                            if (!f.params.allowSwipeToPrev && (f.isHorizontal() && 37 === e || !f.isHorizontal() && 38 === e)) return !1;
                            if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                                if (37 === e || 39 === e || 38 === e || 40 === e) {
                                    var a = !1;
                                    if (f.container.parents(".".concat(f.params.slideClass)).length > 0 && 0 === f.container.parents(".".concat(f.params.slideActiveClass)).length) return;
                                    var i = {
                                            left: window.pageXOffset,
                                            top: window.pageYOffset
                                        },
                                        r = window.innerWidth,
                                        s = window.innerHeight,
                                        n = f.container.offset();
                                    f.rtl && (n.left -= f.container[0].scrollLeft);
                                    for (var o = [
                                        [n.left, n.top],
                                        [n.left + f.width, n.top],
                                        [n.left, n.top + f.height],
                                        [n.left + f.width, n.top + f.height]
                                    ], l = 0; l < o.length; l++) {
                                        var h = o[l];
                                        h[0] >= i.left && h[0] <= i.left + r && h[1] >= i.top && h[1] <= i.top + s && (a = !0)
                                    }
                                    if (!a) return
                                }
                                f.isHorizontal() ? (37 !== e && 39 !== e || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), (39 === e && !f.rtl || 37 === e && f.rtl) && f.slideNext(), (37 === e && !f.rtl || 39 === e && f.rtl) && f.slidePrev()) : (38 !== e && 40 !== e || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), 40 === e && f.slideNext(), 38 === e && f.slidePrev()), f.emit("onKeyPress", f, e)
                            }
                        }

                        function R(t) {
                            t.originalEvent && (t = t.originalEvent);
                            var e, a, i, r, s, n = 0,
                                o = f.rtl ? -1 : 1,
                                l = (a = 0, i = 0, r = 0, s = 0, "detail" in (e = t) && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (a = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (a = i, i = 0), r = 10 * a, s = 10 * i, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || s) && e.deltaMode && (1 === e.deltaMode ? (r *= 40, s *= 40) : (r *= 800, s *= 800)), r && !a && (a = r < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
                                    spinX: a,
                                    spinY: i,
                                    pixelX: r,
                                    pixelY: s
                                });
                            if (f.params.mousewheelForceToAxis)
                                if (f.isHorizontal()) {
                                    if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return;
                                    n = l.pixelX * o
                                } else {
                                    if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return;
                                    n = l.pixelY
                                } else n = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY; if (0 !== n) {
                                if (f.params.mousewheelInvert && (n = -n), f.params.freeMode) {
                                    var h = f.getWrapperTranslate() + n * f.params.mousewheelSensitivity,
                                        p = f.isBeginning,
                                        c = f.isEnd;
                                    if (h >= f.minTranslate() && (h = f.minTranslate()), h <= f.maxTranslate() && (h = f.maxTranslate()), f.setWrapperTransition(0), f.setWrapperTranslate(h), f.updateProgress(), f.updateActiveIndex(), (!p && f.isBeginning || !c && f.isEnd) && f.updateClasses(), f.params.freeModeSticky ? (clearTimeout(f.mousewheel.timeout), f.mousewheel.timeout = setTimeout((function() {
                                        f.slideReset()
                                    }), 300)) : f.params.lazyLoading && f.lazy && f.lazy.load(), f.emit("onScroll", f, t), f.params.autoplay && f.params.autoplayDisableOnInteraction && f.stopAutoplay(), 0 === h || h === f.maxTranslate()) return
                                } else {
                                    if ((new window.Date).getTime() - f.mousewheel.lastScrollTime > 60)
                                        if (n < 0)
                                            if (f.isEnd && !f.params.loop || f.animating) {
                                                if (f.params.mousewheelReleaseOnEdges) return !0
                                            } else f.slideNext(), f.emit("onScroll", f, t);
                                    else if (f.isBeginning && !f.params.loop || f.animating) {
                                        if (f.params.mousewheelReleaseOnEdges) return !0
                                    } else f.slidePrev(), f.emit("onScroll", f, t);
                                    f.mousewheel.lastScrollTime = (new window.Date).getTime()
                                }
                                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                            }
                        }

                        function L(t, e) {
                            var i, r, s;
                            t = a(t);
                            var n = f.rtl ? -1 : 1;
                            i = t.attr("data-swiper-parallax") || "0", r = t.attr("data-swiper-parallax-x"), s = t.attr("data-swiper-parallax-y"), r || s ? (r = r || "0", s = s || "0") : f.isHorizontal() ? (r = i, s = "0") : (s = i, r = "0"), r = r.indexOf("%") >= 0 ? "".concat(parseInt(r, 10) * e * n, "%") : "".concat(r * e * n, "px"), s = s.indexOf("%") >= 0 ? "".concat(parseInt(s, 10) * e, "%") : "".concat(s * e, "px"), t.transform("translate3d(".concat(r, ", ").concat(s, ",0px)"))
                        }

                        function O(t) {
                            return 0 !== t.indexOf("on") && (t = t[0] !== t[0].toUpperCase() ? "on".concat(t[0].toUpperCase()).concat(t.substring(1)) : "on".concat(t)), t
                        }
                    };
                    n.prototype = {
                        isSafari: (s = window.navigator.userAgent.toLowerCase(), s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0),
                        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
                        isArray: function(t) {
                            return "[object Array]" === Object.prototype.toString.apply(t)
                        },
                        browser: {
                            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
                            lteIE9: (r = document.createElement("div"), r.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === r.getElementsByTagName("i").length)
                        },
                        device: function() {
                            var t = window.navigator.userAgent,
                                e = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                                a = t.match(/(iPad).*OS\s([\d_]+)/),
                                i = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                                r = !a && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
                            return {
                                ios: a || r || i,
                                android: e
                            }
                        }(),
                        support: {
                            touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch),
                            transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
                                var t = document.createElement("div").style;
                                return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
                            }(),
                            flexbox: function() {
                                for (var t = document.createElement("div").style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < e.length; a++)
                                    if (e[a] in t) return !0
                            }(),
                            observer: "MutationObserver" in window || "WebkitMutationObserver" in window,
                            passiveListener: function() {
                                var t = !1;
                                try {
                                    var e = Object.defineProperty({}, "passive", {
                                        get: function() {
                                            t = !0
                                        }
                                    });
                                    window.addEventListener("testPassiveListener", null, e)
                                } catch (t) {}
                                return t
                            }(),
                            gestures: "ongesturestart" in window
                        },
                        plugins: {}
                    };
                    for (var o, l = ["jQuery", "Zepto", "Dom7"], h = 0; h < l.length; h++) window[l[h]] && p(window[l[h]]);

                    function p(t) {
                        t.fn.swiper = function(e) {
                            var a;
                            return t(this).each((function() {
                                var t = new n(this, e);
                                a || (a = t)
                            })), a
                        }
                    }(o = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || e : Dom7) && ("transitionEnd" in o.fn || (o.fn.transitionEnd = function(t) {
                        var e, a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                            i = this;

                        function r(s) {
                            if (s.target === this)
                                for (t.call(this, s), e = 0; e < a.length; e++) i.off(a[e], r)
                        }
                        if (t)
                            for (e = 0; e < a.length; e++) i.on(a[e], r);
                        return this
                    }), "transform" in o.fn || (o.fn.transform = function(t) {
                        for (var e = 0; e < this.length; e++) {
                            var a = this[e].style;
                            a.webkitTransform = a.MsTransform = a.msTransform = a.MozTransform = a.OTransform = a.transform = t
                        }
                        return this
                    }), "transition" in o.fn || (o.fn.transition = function(t) {
                        "string" != typeof t && (t += "ms");
                        for (var e = 0; e < this.length; e++) {
                            var a = this[e].style;
                            a.webkitTransitionDuration = a.MsTransitionDuration = a.msTransitionDuration = a.MozTransitionDuration = a.OTransitionDuration = a.transitionDuration = t
                        }
                        return this
                    }), "outerWidth" in o.fn || (o.fn.outerWidth = function(t) {
                        return this.length > 0 ? t ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                    })), window.Swiper = n
                }()
            }).call(this, a("+2Rf"), a("+2Rf"))
        },
        h7Nl: function(t, e, a) {
            var i = Date.prototype,
                r = i.toString,
                s = i.getTime;
            new Date(NaN) + "" != "Invalid Date" && a("KroJ")(i, "toString", (function() {
                var t = s.call(this);
                return t == t ? r.call(this) : "Invalid Date"
            }))
        },
        "hKI/": function(t, e, a) {
            (function(e) {
                var a = /^\s+|\s+$/g,
                    i = /^[-+]0x[0-9a-f]+$/i,
                    r = /^0b[01]+$/i,
                    s = /^0o[0-7]+$/i,
                    n = parseInt,
                    o = "object" == typeof e && e && e.Object === Object && e,
                    l = "object" == typeof self && self && self.Object === Object && self,
                    h = o || l || Function("return this")(),
                    p = Object.prototype.toString,
                    c = Math.max,
                    m = Math.min,
                    d = function() {
                        return h.Date.now()
                    };

                function f(t, e, a) {
                    var i, r, s, n, o, l, h = 0,
                        p = !1,
                        f = !1,
                        y = !0;
                    if ("function" != typeof t) throw new TypeError("Expected a function");

                    function v(e) {
                        var a = i,
                            s = r;
                        return i = r = void 0, h = e, n = t.apply(s, a)
                    }

                    function x(t) {
                        return h = t, o = setTimeout(b, e), p ? v(t) : n
                    }

                    function k(t) {
                        var a = t - l;
                        return void 0 === l || a >= e || a < 0 || f && t - h >= s
                    }

                    function b() {
                        var t = d();
                        if (k(t)) return E(t);
                        o = setTimeout(b, function(t) {
                            var a = e - (t - l);
                            return f ? m(a, s - (t - h)) : a
                        }(t))
                    }

                    function E(t) {
                        return o = void 0, y && i ? v(t) : (i = r = void 0, n)
                    }

                    function S() {
                        var t = d(),
                            a = k(t);
                        if (i = arguments, r = this, l = t, a) {
                            if (void 0 === o) return x(l);
                            if (f) return o = setTimeout(b, e), v(l)
                        }
                        return void 0 === o && (o = setTimeout(b, e)), n
                    }
                    return e = g(e) || 0, u(a) && (p = !!a.leading, s = (f = "maxWait" in a) ? c(g(a.maxWait) || 0, e) : s, y = "trailing" in a ? !!a.trailing : y), S.cancel = function() {
                        void 0 !== o && clearTimeout(o), h = 0, i = l = r = o = void 0
                    }, S.flush = function() {
                        return void 0 === o ? n : E(d())
                    }, S
                }

                function u(t) {
                    var e = typeof t;
                    return !!t && ("object" == e || "function" == e)
                }

                function g(t) {
                    if ("number" == typeof t) return t;
                    if (function(t) {
                        return "symbol" == typeof t || function(t) {
                            return !!t && "object" == typeof t
                        }(t) && "[object Symbol]" == p.call(t)
                    }(t)) return NaN;
                    if (u(t)) {
                        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = u(e) ? e + "" : e
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(a, "");
                    var o = r.test(t);
                    return o || s.test(t) ? n(t.slice(2), o ? 2 : 8) : i.test(t) ? NaN : +t
                }
                t.exports = function(t, e, a) {
                    var i = !0,
                        r = !0;
                    if ("function" != typeof t) throw new TypeError("Expected a function");
                    return u(a) && (i = "leading" in a ? !!a.leading : i, r = "trailing" in a ? !!a.trailing : r), f(t, e, {
                        leading: i,
                        maxWait: e,
                        trailing: r
                    })
                }
            }).call(this, a("yLpj"))
        },
        hPIQ: function(t, e) {
            t.exports = {}
        },
        hmG0: function(t, e) {},
        hswa: function(t, e, a) {
            var i = a("y3w9"),
                r = a("xpql"),
                s = a("apmT"),
                n = Object.defineProperty;
            e.f = a("nh4g") ? Object.defineProperty : function(t, e, a) {
                if (i(t), e = s(e, !0), i(a), r) try {
                    return n(t, e, a)
                } catch (t) {}
                if ("get" in a || "set" in a) throw TypeError("Accessors not supported!");
                return "value" in a && (t[e] = a.value), t
            }
        },
        ioFf: function(t, e, a) {
            "use strict";
            var i = a("dyZX"),
                r = a("aagx"),
                s = a("nh4g"),
                n = a("XKFU"),
                o = a("KroJ"),
                l = a("Z6vF").KEY,
                h = a("eeVq"),
                p = a("VTer"),
                c = a("fyDq"),
                m = a("ylqs"),
                d = a("K0xU"),
                f = a("N8g3"),
                u = a("OnI7"),
                g = a("1MBn"),
                y = a("EWmC"),
                v = a("y3w9"),
                x = a("0/R4"),
                k = a("S/j/"),
                b = a("aCFj"),
                E = a("apmT"),
                S = a("RjD/"),
                w = a("Kuth"),
                P = a("e7yV"),
                C = a("EemH"),
                A = a("JiEa"),
                T = a("hswa"),
                D = a("DVgA"),
                M = C.f,
                _ = T.f,
                F = P.f,
                I = i.Symbol,
                B = i.JSON,
                V = B && B.stringify,
                G = d("_hidden"),
                z = d("toPrimitive"),
                R = {}.propertyIsEnumerable,
                L = p("symbol-registry"),
                O = p("symbols"),
                N = p("op-symbols"),
                H = Object.prototype,
                j = "function" == typeof I && !!A.f,
                X = i.QObject,
                q = !X || !X.prototype || !X.prototype.findChild,
                Y = s && h((function() {
                    return 7 != w(_({}, "a", {
                        get: function() {
                            return _(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                })) ? function(t, e, a) {
                    var i = M(H, e);
                    i && delete H[e], _(t, e, a), i && t !== H && _(H, e, i)
                } : _,
                W = function(t) {
                    var e = O[t] = w(I.prototype);
                    return e._k = t, e
                },
                K = j && "symbol" == typeof I.iterator ? function(t) {
                    return "symbol" == typeof t
                } : function(t) {
                    return t instanceof I
                },
                U = function(t, e, a) {
                    return t === H && U(N, e, a), v(t), e = E(e, !0), v(a), r(O, e) ? (a.enumerable ? (r(t, G) && t[G][e] && (t[G][e] = !1), a = w(a, {
                        enumerable: S(0, !1)
                    })) : (r(t, G) || _(t, G, S(1, {})), t[G][e] = !0), Y(t, e, a)) : _(t, e, a)
                },
                $ = function(t, e) {
                    v(t);
                    for (var a, i = g(e = b(e)), r = 0, s = i.length; s > r;) U(t, a = i[r++], e[a]);
                    return t
                },
                J = function(t) {
                    var e = R.call(this, t = E(t, !0));
                    return !(this === H && r(O, t) && !r(N, t)) && (!(e || !r(this, t) || !r(O, t) || r(this, G) && this[G][t]) || e)
                },
                Z = function(t, e) {
                    if (t = b(t), e = E(e, !0), t !== H || !r(O, e) || r(N, e)) {
                        var a = M(t, e);
                        return !a || !r(O, e) || r(t, G) && t[G][e] || (a.enumerable = !0), a
                    }
                },
                Q = function(t) {
                    for (var e, a = F(b(t)), i = [], s = 0; a.length > s;) r(O, e = a[s++]) || e == G || e == l || i.push(e);
                    return i
                },
                tt = function(t) {
                    for (var e, a = t === H, i = F(a ? N : b(t)), s = [], n = 0; i.length > n;)!r(O, e = i[n++]) || a && !r(H, e) || s.push(O[e]);
                    return s
                };
            j || (o((I = function() {
                if (this instanceof I) throw TypeError("Symbol is not a constructor!");
                var t = m(arguments.length > 0 ? arguments[0] : void 0),
                    e = function(a) {
                        this === H && e.call(N, a), r(this, G) && r(this[G], t) && (this[G][t] = !1), Y(this, t, S(1, a))
                    };
                return s && q && Y(H, t, {
                    configurable: !0,
                    set: e
                }), W(t)
            }).prototype, "toString", (function() {
                return this._k
            })), C.f = Z, T.f = U, a("kJMx").f = P.f = Q, a("UqcF").f = J, A.f = tt, s && !a("LQAc") && o(H, "propertyIsEnumerable", J, !0), f.f = function(t) {
                return W(d(t))
            }), n(n.G + n.W + n.F * !j, {
                Symbol: I
            });
            for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), at = 0; et.length > at;) d(et[at++]);
            for (var it = D(d.store), rt = 0; it.length > rt;) u(it[rt++]);
            n(n.S + n.F * !j, "Symbol", {
                for: function(t) {
                    return r(L, t += "") ? L[t] : L[t] = I(t)
                },
                keyFor: function(t) {
                    if (!K(t)) throw TypeError(t + " is not a symbol!");
                    for (var e in L)
                        if (L[e] === t) return e
                },
                useSetter: function() {
                    q = !0
                },
                useSimple: function() {
                    q = !1
                }
            }), n(n.S + n.F * !j, "Object", {
                create: function(t, e) {
                    return void 0 === e ? w(t) : $(w(t), e)
                },
                defineProperty: U,
                defineProperties: $,
                getOwnPropertyDescriptor: Z,
                getOwnPropertyNames: Q,
                getOwnPropertySymbols: tt
            });
            var st = h((function() {
                A.f(1)
            }));
            n(n.S + n.F * st, "Object", {
                getOwnPropertySymbols: function(t) {
                    return A.f(k(t))
                }
            }), B && n(n.S + n.F * (!j || h((function() {
                var t = I();
                return "[null]" != V([t]) || "{}" != V({
                    a: t
                }) || "{}" != V(Object(t))
            }))), "JSON", {
                stringify: function(t) {
                    for (var e, a, i = [t], r = 1; arguments.length > r;) i.push(arguments[r++]);
                    if (a = e = i[1], (x(e) || void 0 !== t) && !K(t)) return y(e) || (e = function(t, e) {
                        if ("function" == typeof a && (e = a.call(this, t, e)), !K(e)) return e
                    }), i[1] = e, V.apply(B, i)
                }
            }), I.prototype[z] || a("Mukb")(I.prototype, z, I.prototype.valueOf), c(I, "Symbol"), c(Math, "Math", !0), c(i.JSON, "JSON", !0)
        },
        kJMx: function(t, e, a) {
            var i = a("zhAb"),
                r = a("4R4u").concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(t) {
                return i(t, r)
            }
        },
        kYze: function(t, e, a) {
            "use strict";
            a("HAE/");
            var i = a("+2Rf"),
                r = a.n(i),
                s = a("lPHp"),
                n = a.n(s),
                o = a("0aT7");

            function l(t, e) {
                for (var a = 0; a < e.length; a++) {
                    var i = e[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            var h = 0,
                p = 1,
                c = new(function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.$root = r()("#header"), this.state = p, this.headerBtnAnimation = void 0, this.initHeaderDownloadBtn()
                    }
                    var e, a, i;
                    return e = t, (a = [{
                        key: "initHeaderDownloadBtn",
                        value: function() {
                            var t = this,
                                e = r()("#js-header-download-wrapper");
                            this.headerBtnAnimation = n.a.loadAnimation({
                                container: document.getElementById("js-header-download-btn"),
                                renderer: "svg",
                                loop: !1,
                                autoplay: !1,
                                animationData: o
                            }), e.hover((function() {
                                t.headerBtnAnimation.setDirection(1), t.headerBtnAnimation.play()
                            }), (function() {
                                t.state === p && (t.headerBtnAnimation.setDirection(-1), t.headerBtnAnimation.play())
                            }))
                        }
                    }, {
                        key: "btnPlay",
                        value: function() {
                            this.headerBtnAnimation.setDirection(1), this.headerBtnAnimation.play()
                        }
                    }, {
                        key: "btnStop",
                        value: function() {
                            this.headerBtnAnimation.setDirection(-1), this.headerBtnAnimation.play()
                        }
                    }, {
                        key: "toggleMenu",
                        value: function() {
                            r()(document.body).toggleClass("overflow-hidden"), this.$root.toggleClass("theme-full-screen")
                        }
                    }, {
                        key: "fixed",
                        value: function() {
                            var t = this;
                            this.state === p && this.$root && (this.state = h, this.$root.addClass("theme-dark"), this.btnPlay(), setTimeout((function() {
                                t.$root.addClass("changing"), t.$root.addClass("in")
                            }), 20))
                        }
                    }, {
                        key: "unfixed",
                        value: function() {
                            var t = this;
                            this.state === h && this.$root && (this.state = p, this.$root.removeClass("in"), this.btnStop(), setTimeout((function() {
                                t.$root.removeClass("theme-dark"), t.$root.removeClass("changing")
                            }), 400))
                        }
                    }]) && l(e.prototype, a), i && l(e, i), t
                }());
            e.a = c
        },
        lPHp: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__;
            "undefined" != typeof navigator && function(t, e) {
                void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return e(t)
                }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
            }(window || {}, (function(window) {
                "use strict";
                var svgNS = "http://www.w3.org/2000/svg",
                    locationHref = "",
                    initialDefaultFrame = -999999,
                    subframeEnabled = !0,
                    idPrefix = "",
                    expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                    cachedColors = {},
                    bmRnd, bmPow = Math.pow,
                    bmSqrt = Math.sqrt,
                    bmFloor = Math.floor,
                    bmMax = Math.max,
                    bmMin = Math.min,
                    BMMath = {};

                function ProjectInterface() {
                    return {}
                }! function() {
                    var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                        a = e.length;
                    for (t = 0; t < a; t += 1) BMMath[e[t]] = Math[e[t]]
                }(), BMMath.random = Math.random, BMMath.abs = function(t) {
                    if ("object" === typeof t && t.length) {
                        var e, a = createSizedArray(t.length),
                            i = t.length;
                        for (e = 0; e < i; e += 1) a[e] = Math.abs(t[e]);
                        return a
                    }
                    return Math.abs(t)
                };
                var defaultCurveSegments = 150,
                    degToRads = Math.PI / 180,
                    roundCorner = .5519;

                function roundValues(t) {
                    bmRnd = t ? Math.round : function(t) {
                        return t
                    }
                }

                function styleDiv(t) {
                    t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
                }

                function BMEnterFrameEvent(t, e, a, i) {
                    this.type = t, this.currentTime = e, this.totalTime = a, this.direction = i < 0 ? -1 : 1
                }

                function BMCompleteEvent(t, e) {
                    this.type = t, this.direction = e < 0 ? -1 : 1
                }

                function BMCompleteLoopEvent(t, e, a, i) {
                    this.type = t, this.currentLoop = a, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
                }

                function BMSegmentStartEvent(t, e, a) {
                    this.type = t, this.firstFrame = e, this.totalFrames = a
                }

                function BMDestroyEvent(t, e) {
                    this.type = t, this.target = e
                }

                function BMRenderFrameErrorEvent(t, e) {
                    this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                }

                function BMConfigErrorEvent(t) {
                    this.type = "configError", this.nativeError = t
                }

                function BMAnimationConfigErrorEvent(t, e) {
                    this.type = t, this.nativeError = e
                }
                roundValues(!1);
                var createElementID = (_count = 0, function() {
                        return idPrefix + "__lottie_element_" + (_count += 1)
                    }),
                    _count;

                function HSVtoRGB(t, e, a) {
                    var i, r, s, n, o, l, h, p;
                    switch (l = a * (1 - e), h = a * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = a * (1 - (1 - o) * e), n % 6) {
                        case 0:
                            i = a, r = p, s = l;
                            break;
                        case 1:
                            i = h, r = a, s = l;
                            break;
                        case 2:
                            i = l, r = a, s = p;
                            break;
                        case 3:
                            i = l, r = h, s = a;
                            break;
                        case 4:
                            i = p, r = l, s = a;
                            break;
                        case 5:
                            i = a, r = l, s = h
                    }
                    return [i, r, s]
                }

                function RGBtoHSV(t, e, a) {
                    var i, r = Math.max(t, e, a),
                        s = Math.min(t, e, a),
                        n = r - s,
                        o = 0 === r ? 0 : n / r,
                        l = r / 255;
                    switch (r) {
                        case s:
                            i = 0;
                            break;
                        case t:
                            i = e - a + n * (e < a ? 6 : 0), i /= 6 * n;
                            break;
                        case e:
                            i = a - t + 2 * n, i /= 6 * n;
                            break;
                        case a:
                            i = t - e + 4 * n, i /= 6 * n
                    }
                    return [i, o, l]
                }

                function addSaturationToRGB(t, e) {
                    var a = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return a[1] += e, a[1] > 1 ? a[1] = 1 : a[1] <= 0 && (a[1] = 0), HSVtoRGB(a[0], a[1], a[2])
                }

                function addBrightnessToRGB(t, e) {
                    var a = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return a[2] += e, a[2] > 1 ? a[2] = 1 : a[2] < 0 && (a[2] = 0), HSVtoRGB(a[0], a[1], a[2])
                }

                function addHueToRGB(t, e) {
                    var a = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return a[0] += e / 360, a[0] > 1 ? a[0] -= 1 : a[0] < 0 && (a[0] += 1), HSVtoRGB(a[0], a[1], a[2])
                }
                var rgbToHex = function() {
                    var t, e, a = [];
                    for (t = 0; t < 256; t += 1) e = t.toString(16), a[t] = 1 === e.length ? "0" + e : e;
                    return function(t, e, i) {
                        return t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), "#" + a[t] + a[e] + a[i]
                    }
                }();

                function BaseEvent() {}
                BaseEvent.prototype = {
                    triggerEvent: function(t, e) {
                        if (this._cbs[t])
                            for (var a = this._cbs[t].length, i = 0; i < a; i += 1) this._cbs[t][i](e)
                    },
                    addEventListener: function(t, e) {
                        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                            function() {
                                this.removeEventListener(t, e)
                            }.bind(this)
                    },
                    removeEventListener: function(t, e) {
                        if (e) {
                            if (this._cbs[t]) {
                                for (var a = 0, i = this._cbs[t].length; a < i;) this._cbs[t][a] === e && (this._cbs[t].splice(a, 1), a -= 1, i -= 1), a += 1;
                                this._cbs[t].length || (this._cbs[t] = null)
                            }
                        } else this._cbs[t] = null
                    }
                };
                var createTypedArray = function() {
                    function t(t, e) {
                        var a, i = 0,
                            r = [];
                        switch (t) {
                            case "int16":
                            case "uint8c":
                                a = 1;
                                break;
                            default:
                                a = 1.1
                        }
                        for (i = 0; i < e; i += 1) r.push(a);
                        return r
                    }
                    return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, a) {
                        return "float32" === e ? new Float32Array(a) : "int16" === e ? new Int16Array(a) : "uint8c" === e ? new Uint8ClampedArray(a) : t(e, a)
                    } : t
                }();

                function createSizedArray(t) {
                    return Array.apply(null, {
                        length: t
                    })
                }

                function createNS(t) {
                    return document.createElementNS(svgNS, t)
                }

                function createTag(t) {
                    return document.createElement(t)
                }

                function DynamicPropertyContainer() {}
                DynamicPropertyContainer.prototype = {
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                    },
                    iterateDynamicProperties: function() {
                        var t;
                        this._mdf = !1;
                        var e = this.dynamicProperties.length;
                        for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                    },
                    initDynamicPropertyContainer: function(t) {
                        this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                    }
                };
                var getBlendMode = (blendModeEnums = {
                        0: "source-over",
                        1: "multiply",
                        2: "screen",
                        3: "overlay",
                        4: "darken",
                        5: "lighten",
                        6: "color-dodge",
                        7: "color-burn",
                        8: "hard-light",
                        9: "soft-light",
                        10: "difference",
                        11: "exclusion",
                        12: "hue",
                        13: "saturation",
                        14: "color",
                        15: "luminosity"
                    }, function(t) {
                        return blendModeEnums[t] || ""
                    }),
                    blendModeEnums, Matrix = function() {
                        var t = Math.cos,
                            e = Math.sin,
                            a = Math.tan,
                            i = Math.round;

                        function r() {
                            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                        }

                        function s(a) {
                            if (0 === a) return this;
                            var i = t(a),
                                r = e(a);
                            return this._t(i, -r, 0, 0, r, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function n(a) {
                            if (0 === a) return this;
                            var i = t(a),
                                r = e(a);
                            return this._t(1, 0, 0, 0, 0, i, -r, 0, 0, r, i, 0, 0, 0, 0, 1)
                        }

                        function o(a) {
                            if (0 === a) return this;
                            var i = t(a),
                                r = e(a);
                            return this._t(i, 0, r, 0, 0, 1, 0, 0, -r, 0, i, 0, 0, 0, 0, 1)
                        }

                        function l(a) {
                            if (0 === a) return this;
                            var i = t(a),
                                r = e(a);
                            return this._t(i, -r, 0, 0, r, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function h(t, e) {
                            return this._t(1, e, t, 1, 0, 0)
                        }

                        function p(t, e) {
                            return this.shear(a(t), a(e))
                        }

                        function c(i, r) {
                            var s = t(r),
                                n = e(r);
                            return this._t(s, n, 0, 0, -n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, a(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -n, 0, 0, n, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function m(t, e, a) {
                            return a || 0 === a || (a = 1), 1 === t && 1 === e && 1 === a ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, a, 0, 0, 0, 0, 1)
                        }

                        function d(t, e, a, i, r, s, n, o, l, h, p, c, m, d, f, u) {
                            return this.props[0] = t, this.props[1] = e, this.props[2] = a, this.props[3] = i, this.props[4] = r, this.props[5] = s, this.props[6] = n, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = p, this.props[11] = c, this.props[12] = m, this.props[13] = d, this.props[14] = f, this.props[15] = u, this
                        }

                        function f(t, e, a) {
                            return a = a || 0, 0 !== t || 0 !== e || 0 !== a ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, a, 1) : this
                        }

                        function u(t, e, a, i, r, s, n, o, l, h, p, c, m, d, f, u) {
                            var g = this.props;
                            if (1 === t && 0 === e && 0 === a && 0 === i && 0 === r && 1 === s && 0 === n && 0 === o && 0 === l && 0 === h && 1 === p && 0 === c) return g[12] = g[12] * t + g[15] * m, g[13] = g[13] * s + g[15] * d, g[14] = g[14] * p + g[15] * f, g[15] *= u, this._identityCalculated = !1, this;
                            var y = g[0],
                                v = g[1],
                                x = g[2],
                                k = g[3],
                                b = g[4],
                                E = g[5],
                                S = g[6],
                                w = g[7],
                                P = g[8],
                                C = g[9],
                                A = g[10],
                                T = g[11],
                                D = g[12],
                                M = g[13],
                                _ = g[14],
                                F = g[15];
                            return g[0] = y * t + v * r + x * l + k * m, g[1] = y * e + v * s + x * h + k * d, g[2] = y * a + v * n + x * p + k * f, g[3] = y * i + v * o + x * c + k * u, g[4] = b * t + E * r + S * l + w * m, g[5] = b * e + E * s + S * h + w * d, g[6] = b * a + E * n + S * p + w * f, g[7] = b * i + E * o + S * c + w * u, g[8] = P * t + C * r + A * l + T * m, g[9] = P * e + C * s + A * h + T * d, g[10] = P * a + C * n + A * p + T * f, g[11] = P * i + C * o + A * c + T * u, g[12] = D * t + M * r + _ * l + F * m, g[13] = D * e + M * s + _ * h + F * d, g[14] = D * a + M * n + _ * p + F * f, g[15] = D * i + M * o + _ * c + F * u, this._identityCalculated = !1, this
                        }

                        function g() {
                            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                        }

                        function y(t) {
                            for (var e = 0; e < 16;) {
                                if (t.props[e] !== this.props[e]) return !1;
                                e += 1
                            }
                            return !0
                        }

                        function v(t) {
                            var e;
                            for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                            return t
                        }

                        function x(t) {
                            var e;
                            for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                        }

                        function k(t, e, a) {
                            return {
                                x: t * this.props[0] + e * this.props[4] + a * this.props[8] + this.props[12],
                                y: t * this.props[1] + e * this.props[5] + a * this.props[9] + this.props[13],
                                z: t * this.props[2] + e * this.props[6] + a * this.props[10] + this.props[14]
                            }
                        }

                        function b(t, e, a) {
                            return t * this.props[0] + e * this.props[4] + a * this.props[8] + this.props[12]
                        }

                        function E(t, e, a) {
                            return t * this.props[1] + e * this.props[5] + a * this.props[9] + this.props[13]
                        }

                        function S(t, e, a) {
                            return t * this.props[2] + e * this.props[6] + a * this.props[10] + this.props[14]
                        }

                        function w() {
                            var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                e = this.props[5] / t,
                                a = -this.props[1] / t,
                                i = -this.props[4] / t,
                                r = this.props[0] / t,
                                s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                                o = new Matrix;
                            return o.props[0] = e, o.props[1] = a, o.props[4] = i, o.props[5] = r, o.props[12] = s, o.props[13] = n, o
                        }

                        function P(t) {
                            return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                        }

                        function C(t) {
                            var e, a = t.length,
                                i = [];
                            for (e = 0; e < a; e += 1) i[e] = P(t[e]);
                            return i
                        }

                        function A(t, e, a) {
                            var i = createTypedArray("float32", 6);
                            if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = a[0], i[5] = a[1];
                            else {
                                var r = this.props[0],
                                    s = this.props[1],
                                    n = this.props[4],
                                    o = this.props[5],
                                    l = this.props[12],
                                    h = this.props[13];
                                i[0] = t[0] * r + t[1] * n + l, i[1] = t[0] * s + t[1] * o + h, i[2] = e[0] * r + e[1] * n + l, i[3] = e[0] * s + e[1] * o + h, i[4] = a[0] * r + a[1] * n + l, i[5] = a[0] * s + a[1] * o + h
                            }
                            return i
                        }

                        function T(t, e, a) {
                            return this.isIdentity() ? [t, e, a] : [t * this.props[0] + e * this.props[4] + a * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + a * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + a * this.props[10] + this.props[14]]
                        }

                        function D(t, e) {
                            if (this.isIdentity()) return t + "," + e;
                            var a = this.props;
                            return Math.round(100 * (t * a[0] + e * a[4] + a[12])) / 100 + "," + Math.round(100 * (t * a[1] + e * a[5] + a[13])) / 100
                        }

                        function M() {
                            for (var t = 0, e = this.props, a = "matrix3d("; t < 16;) a += i(1e4 * e[t]) / 1e4, a += 15 === t ? ")" : ",", t += 1;
                            return a
                        }

                        function _(t) {
                            return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? i(1e4 * t) / 1e4 : t
                        }

                        function F() {
                            var t = this.props;
                            return "matrix(" + _(t[0]) + "," + _(t[1]) + "," + _(t[4]) + "," + _(t[5]) + "," + _(t[12]) + "," + _(t[13]) + ")"
                        }
                        return function() {
                            this.reset = r, this.rotate = s, this.rotateX = n, this.rotateY = o, this.rotateZ = l, this.skew = p, this.skewFromAxis = c, this.shear = h, this.scale = m, this.setTransform = d, this.translate = f, this.transform = u, this.applyToPoint = k, this.applyToX = b, this.applyToY = E, this.applyToZ = S, this.applyToPointArray = T, this.applyToTriplePoints = A, this.applyToPointStringified = D, this.toCSS = M, this.to2dCSS = F, this.clone = v, this.cloneFromProps = x, this.equals = y, this.inversePoints = C, this.inversePoint = P, this.getInverseMatrix = w, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                        }
                    }();
                /*!
                 Transformation Matrix v2.0
                 (c) Epistemex 2014-2015
                 www.epistemex.com
                 By Ken Fyrstenberg
                 Contributions by leeoniya.
                 License: MIT, header required.
                 */
                ! function(t, e) {
                    var a = this,
                        i = e.pow(256, 6),
                        r = e.pow(2, 52),
                        s = 2 * r;

                    function n(t) {
                        var e, a = t.length,
                            i = this,
                            r = 0,
                            s = i.i = i.j = 0,
                            n = i.S = [];
                        for (a || (t = [a++]); r < 256;) n[r] = r++;
                        for (r = 0; r < 256; r++) n[r] = n[s = 255 & s + t[r % a] + (e = n[r])], n[s] = e;
                        i.g = function(t) {
                            for (var e, a = 0, r = i.i, s = i.j, n = i.S; t--;) e = n[r = 255 & r + 1], a = 256 * a + n[255 & (n[r] = n[s = 255 & s + e]) + (n[s] = e)];
                            return i.i = r, i.j = s, a
                        }
                    }

                    function o(t, e) {
                        return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                    }

                    function l(t, e) {
                        for (var a, i = t + "", r = 0; r < i.length;) e[255 & r] = 255 & (a ^= 19 * e[255 & r]) + i.charCodeAt(r++);
                        return h(e)
                    }

                    function h(t) {
                        return String.fromCharCode.apply(0, t)
                    }
                    e.seedrandom = function(p, c, m) {
                        var d = [],
                            f = l(function t(e, a) {
                                var i, r = [],
                                    s = typeof e;
                                if (a && "object" == s)
                                    for (i in e) try {
                                        r.push(t(e[i], a - 1))
                                    } catch (t) {}
                                return r.length ? r : "string" == s ? e : e + "\0"
                            }((c = !0 === c ? {
                                entropy: !0
                            } : c || {}).entropy ? [p, h(t)] : null === p ? function() {
                                try {
                                    void 0;
                                    var e = new Uint8Array(256);
                                    return (a.crypto || a.msCrypto).getRandomValues(e), h(e)
                                } catch (e) {
                                    var i = a.navigator,
                                        r = i && i.plugins;
                                    return [+new Date, a, r, a.screen, h(t)]
                                }
                            }() : p, 3), d),
                            u = new n(d),
                            g = function() {
                                for (var t = u.g(6), e = i, a = 0; t < r;) t = 256 * (t + a), e *= 256, a = u.g(1);
                                for (; t >= s;) t /= 2, e /= 2, a >>>= 1;
                                return (t + a) / e
                            };
                        return g.int32 = function() {
                            return 0 | u.g(4)
                        }, g.quick = function() {
                            return u.g(4) / 4294967296
                        }, g.double = g, l(h(u.S), t), (c.pass || m || function(t, a, i, r) {
                            return r && (r.S && o(r, u), t.state = function() {
                                return o(u, {})
                            }), i ? (e.random = t, a) : t
                        })(g, f, "global" in c ? c.global : this == e, c.state)
                    }, l(e.random(), t)
                }([], BMMath);
                var BezierFactory = function() {
                    var t = {
                            getBezierEasing: function(t, a, i, r, s) {
                                var n = s || ("bez_" + t + "_" + a + "_" + i + "_" + r).replace(/\./g, "p");
                                if (e[n]) return e[n];
                                var o = new l([t, a, i, r]);
                                return e[n] = o, o
                            }
                        },
                        e = {};
                    var a = "function" == typeof Float32Array;

                    function i(t, e) {
                        return 1 - 3 * e + 3 * t
                    }

                    function r(t, e) {
                        return 3 * e - 6 * t
                    }

                    function s(t) {
                        return 3 * t
                    }

                    function n(t, e, a) {
                        return ((i(e, a) * t + r(e, a)) * t + s(e)) * t
                    }

                    function o(t, e, a) {
                        return 3 * i(e, a) * t * t + 2 * r(e, a) * t + s(e)
                    }

                    function l(t) {
                        this._p = t, this._mSampleValues = a ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                    }
                    return l.prototype = {
                        get: function(t) {
                            var e = this._p[0],
                                a = this._p[1],
                                i = this._p[2],
                                r = this._p[3];
                            return this._precomputed || this._precompute(), e === a && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : n(this._getTForX(t), a, r)
                        },
                        _precompute: function() {
                            var t = this._p[0],
                                e = this._p[1],
                                a = this._p[2],
                                i = this._p[3];
                            this._precomputed = !0, t === e && a === i || this._calcSampleValues()
                        },
                        _calcSampleValues: function() {
                            for (var t = this._p[0], e = this._p[2], a = 0; a < 11; ++a) this._mSampleValues[a] = n(.1 * a, t, e)
                        },
                        _getTForX: function(t) {
                            for (var e = this._p[0], a = this._p[2], i = this._mSampleValues, r = 0, s = 1; 10 !== s && i[s] <= t; ++s) r += .1;
                            var l = r + .1 * ((t - i[--s]) / (i[s + 1] - i[s])),
                                h = o(l, e, a);
                            return h >= .001 ? function(t, e, a, i) {
                                for (var r = 0; r < 4; ++r) {
                                    var s = o(e, a, i);
                                    if (0 === s) return e;
                                    e -= (n(e, a, i) - t) / s
                                }
                                return e
                            }(t, l, e, a) : 0 === h ? l : function(t, e, a, i, r) {
                                var s, o, l = 0;
                                do {
                                    (s = n(o = e + (a - e) / 2, i, r) - t) > 0 ? a = o : e = o
                                } while (Math.abs(s) > 1e-7 && ++l < 10);
                                return o
                            }(t, r, r + .1, e, a)
                        }
                    }, t
                }();

                function extendPrototype(t, e) {
                    var a, i, r = t.length;
                    for (a = 0; a < r; a += 1)
                        for (var s in i = t[a].prototype) Object.prototype.hasOwnProperty.call(i, s) && (e.prototype[s] = i[s])
                }

                function getDescriptor(t, e) {
                    return Object.getOwnPropertyDescriptor(t, e)
                }

                function createProxyFunction(t) {
                    function e() {}
                    return e.prototype = t, e
                }

                function bezFunction() {
                    var t = Math;

                    function e(t, e, a, i, r, s) {
                        var n = t * i + e * r + a * s - r * i - s * t - a * e;
                        return n > -.001 && n < .001
                    }
                    var a = function(t, e, a, i) {
                        var r, s, n, o, l, h, p = defaultCurveSegments,
                            c = 0,
                            m = [],
                            d = [],
                            f = bezierLengthPool.newElement();
                        for (n = a.length, r = 0; r < p; r += 1) {
                            for (l = r / (p - 1), h = 0, s = 0; s < n; s += 1) o = bmPow(1 - l, 3) * t[s] + 3 * bmPow(1 - l, 2) * l * a[s] + 3 * (1 - l) * bmPow(l, 2) * i[s] + bmPow(l, 3) * e[s], m[s] = o, null !== d[s] && (h += bmPow(m[s] - d[s], 2)), d[s] = m[s];
                            h && (c += h = bmSqrt(h)), f.percents[r] = l, f.lengths[r] = c
                        }
                        return f.addedLength = c, f
                    };

                    function i(t) {
                        this.segmentLength = 0, this.points = new Array(t)
                    }

                    function r(t, e) {
                        this.partialLength = t, this.point = e
                    }
                    var s, n = (s = {}, function(t, a, n, o) {
                        var l = (t[0] + "_" + t[1] + "_" + a[0] + "_" + a[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                        if (!s[l]) {
                            var h, p, c, m, d, f, u, g = defaultCurveSegments,
                                y = 0,
                                v = null;
                            2 === t.length && (t[0] !== a[0] || t[1] !== a[1]) && e(t[0], t[1], a[0], a[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], a[0], a[1], a[0] + o[0], a[1] + o[1]) && (g = 2);
                            var x = new i(g);
                            for (c = n.length, h = 0; h < g; h += 1) {
                                for (u = createSizedArray(c), d = h / (g - 1), f = 0, p = 0; p < c; p += 1) m = bmPow(1 - d, 3) * t[p] + 3 * bmPow(1 - d, 2) * d * (t[p] + n[p]) + 3 * (1 - d) * bmPow(d, 2) * (a[p] + o[p]) + bmPow(d, 3) * a[p], u[p] = m, null !== v && (f += bmPow(u[p] - v[p], 2));
                                y += f = bmSqrt(f), x.points[h] = new r(f, u), v = u
                            }
                            x.segmentLength = y, s[l] = x
                        }
                        return s[l]
                    });

                    function o(t, e) {
                        var a = e.percents,
                            i = e.lengths,
                            r = a.length,
                            s = bmFloor((r - 1) * t),
                            n = t * e.addedLength,
                            o = 0;
                        if (s === r - 1 || 0 === s || n === i[s]) return a[s];
                        for (var l = i[s] > n ? -1 : 1, h = !0; h;)
                            if (i[s] <= n && i[s + 1] > n ? (o = (n - i[s]) / (i[s + 1] - i[s]), h = !1) : s += l, s < 0 || s >= r - 1) {
                                if (s === r - 1) return a[s];
                                h = !1
                            }
                        return a[s] + (a[s + 1] - a[s]) * o
                    }
                    var l = createTypedArray("float32", 8);
                    return {
                        getSegmentsLength: function(t) {
                            var e, i = segmentsLengthPool.newElement(),
                                r = t.c,
                                s = t.v,
                                n = t.o,
                                o = t.i,
                                l = t._length,
                                h = i.lengths,
                                p = 0;
                            for (e = 0; e < l - 1; e += 1) h[e] = a(s[e], s[e + 1], n[e], o[e + 1]), p += h[e].addedLength;
                            return r && l && (h[e] = a(s[e], s[0], n[e], o[0]), p += h[e].addedLength), i.totalLength = p, i
                        },
                        getNewSegment: function(e, a, i, r, s, n, h) {
                            s < 0 ? s = 0 : s > 1 && (s = 1);
                            var p, c = o(s, h),
                                m = o(n = n > 1 ? 1 : n, h),
                                d = e.length,
                                f = 1 - c,
                                u = 1 - m,
                                g = f * f * f,
                                y = c * f * f * 3,
                                v = c * c * f * 3,
                                x = c * c * c,
                                k = f * f * u,
                                b = c * f * u + f * c * u + f * f * m,
                                E = c * c * u + f * c * m + c * f * m,
                                S = c * c * m,
                                w = f * u * u,
                                P = c * u * u + f * m * u + f * u * m,
                                C = c * m * u + f * m * m + c * u * m,
                                A = c * m * m,
                                T = u * u * u,
                                D = m * u * u + u * m * u + u * u * m,
                                M = m * m * u + u * m * m + m * u * m,
                                _ = m * m * m;
                            for (p = 0; p < d; p += 1) l[4 * p] = t.round(1e3 * (g * e[p] + y * i[p] + v * r[p] + x * a[p])) / 1e3, l[4 * p + 1] = t.round(1e3 * (k * e[p] + b * i[p] + E * r[p] + S * a[p])) / 1e3, l[4 * p + 2] = t.round(1e3 * (w * e[p] + P * i[p] + C * r[p] + A * a[p])) / 1e3, l[4 * p + 3] = t.round(1e3 * (T * e[p] + D * i[p] + M * r[p] + _ * a[p])) / 1e3;
                            return l
                        },
                        getPointInSegment: function(e, a, i, r, s, n) {
                            var l = o(s, n),
                                h = 1 - l;
                            return [t.round(1e3 * (h * h * h * e[0] + (l * h * h + h * l * h + h * h * l) * i[0] + (l * l * h + h * l * l + l * h * l) * r[0] + l * l * l * a[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (l * h * h + h * l * h + h * h * l) * i[1] + (l * l * h + h * l * l + l * h * l) * r[1] + l * l * l * a[1])) / 1e3]
                        },
                        buildBezierData: n,
                        pointOnLine2D: e,
                        pointOnLine3D: function(a, i, r, s, n, o, l, h, p) {
                            if (0 === r && 0 === o && 0 === p) return e(a, i, s, n, l, h);
                            var c, m = t.sqrt(t.pow(s - a, 2) + t.pow(n - i, 2) + t.pow(o - r, 2)),
                                d = t.sqrt(t.pow(l - a, 2) + t.pow(h - i, 2) + t.pow(p - r, 2)),
                                f = t.sqrt(t.pow(l - s, 2) + t.pow(h - n, 2) + t.pow(p - o, 2));
                            return (c = m > d ? m > f ? m - d - f : f - d - m : f > d ? f - d - m : d - m - f) > -1e-4 && c < 1e-4
                        }
                    }
                }! function() {
                    for (var t = 0, e = ["ms", "moz", "webkit", "o"], a = 0; a < e.length && !window.requestAnimationFrame; ++a) window.requestAnimationFrame = window[e[a] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[a] + "CancelAnimationFrame"] || window[e[a] + "CancelRequestAnimationFrame"];
                    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
                        var a = (new Date).getTime(),
                            i = Math.max(0, 16 - (a - t)),
                            r = setTimeout((function() {
                                e(a + i)
                            }), i);
                        return t = a + i, r
                    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                        clearTimeout(t)
                    })
                }();
                var bez = bezFunction();

                function dataFunctionManager() {
                    function t(r, s, n) {
                        var o, l, h, c, m, d, f = r.length;
                        for (l = 0; l < f; l += 1)
                            if ("ks" in (o = r[l]) && !o.completed) {
                                if (o.completed = !0, o.tt && (r[l - 1].td = o.tt), o.hasMask) {
                                    var u = o.masksProperties;
                                    for (c = u.length, h = 0; h < c; h += 1)
                                        if (u[h].pt.k.i) i(u[h].pt.k);
                                        else
                                            for (d = u[h].pt.k.length, m = 0; m < d; m += 1) u[h].pt.k[m].s && i(u[h].pt.k[m].s[0]), u[h].pt.k[m].e && i(u[h].pt.k[m].e[0])
                                }
                                0 === o.ty ? (o.layers = e(o.refId, s), t(o.layers, s, n)) : 4 === o.ty ? a(o.shapes) : 5 === o.ty && p(o)
                            }
                    }

                    function e(t, e) {
                        for (var a = 0, i = e.length; a < i;) {
                            if (e[a].id === t) return e[a].layers.__used ? JSON.parse(JSON.stringify(e[a].layers)) : (e[a].layers.__used = !0, e[a].layers);
                            a += 1
                        }
                        return null
                    }

                    function a(t) {
                        var e, r, s;
                        for (e = t.length - 1; e >= 0; e -= 1)
                            if ("sh" === t[e].ty)
                                if (t[e].ks.k.i) i(t[e].ks.k);
                                else
                                    for (s = t[e].ks.k.length, r = 0; r < s; r += 1) t[e].ks.k[r].s && i(t[e].ks.k[r].s[0]), t[e].ks.k[r].e && i(t[e].ks.k[r].e[0]);
                        else "gr" === t[e].ty && a(t[e].it)
                    }

                    function i(t) {
                        var e, a = t.i.length;
                        for (e = 0; e < a; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                    }

                    function r(t, e) {
                        var a = e ? e.split(".") : [100, 100, 100];
                        return t[0] > a[0] || !(a[0] > t[0]) && (t[1] > a[1] || !(a[1] > t[1]) && (t[2] > a[2] || !(a[2] > t[2]) && null))
                    }
                    var s, n = function() {
                            var t = [4, 4, 14];

                            function e(t) {
                                var e, a, i, r = t.length;
                                for (e = 0; e < r; e += 1) 5 === t[e].ty && (a = t[e], i = void 0, i = a.t.d, a.t.d = {
                                    k: [{
                                        s: i,
                                        t: 0
                                    }]
                                })
                            }
                            return function(a) {
                                if (r(t, a.v) && (e(a.layers), a.assets)) {
                                    var i, s = a.assets.length;
                                    for (i = 0; i < s; i += 1) a.assets[i].layers && e(a.assets[i].layers)
                                }
                            }
                        }(),
                        o = (s = [4, 7, 99], function(t) {
                            if (t.chars && !r(s, t.v)) {
                                var e, a, n, o, l, h = t.chars.length;
                                for (e = 0; e < h; e += 1)
                                    if (t.chars[e].data && t.chars[e].data.shapes)
                                        for (n = (l = t.chars[e].data.shapes[0].it).length, a = 0; a < n; a += 1)(o = l[a].ks.k).__converted || (i(l[a].ks.k), o.__converted = !0)
                            }
                        }),
                        l = function() {
                            var t = [4, 1, 9];

                            function e(t) {
                                var a, i, r, s = t.length;
                                for (a = 0; a < s; a += 1)
                                    if ("gr" === t[a].ty) e(t[a].it);
                                    else if ("fl" === t[a].ty || "st" === t[a].ty)
                                    if (t[a].c.k && t[a].c.k[0].i)
                                        for (r = t[a].c.k.length, i = 0; i < r; i += 1) t[a].c.k[i].s && (t[a].c.k[i].s[0] /= 255, t[a].c.k[i].s[1] /= 255, t[a].c.k[i].s[2] /= 255, t[a].c.k[i].s[3] /= 255), t[a].c.k[i].e && (t[a].c.k[i].e[0] /= 255, t[a].c.k[i].e[1] /= 255, t[a].c.k[i].e[2] /= 255, t[a].c.k[i].e[3] /= 255);
                                    else t[a].c.k[0] /= 255, t[a].c.k[1] /= 255, t[a].c.k[2] /= 255, t[a].c.k[3] /= 255
                            }

                            function a(t) {
                                var a, i = t.length;
                                for (a = 0; a < i; a += 1) 4 === t[a].ty && e(t[a].shapes)
                            }
                            return function(e) {
                                if (r(t, e.v) && (a(e.layers), e.assets)) {
                                    var i, s = e.assets.length;
                                    for (i = 0; i < s; i += 1) e.assets[i].layers && a(e.assets[i].layers)
                                }
                            }
                        }(),
                        h = function() {
                            var t = [4, 4, 18];

                            function e(t) {
                                var a, i, r;
                                for (a = t.length - 1; a >= 0; a -= 1)
                                    if ("sh" === t[a].ty)
                                        if (t[a].ks.k.i) t[a].ks.k.c = t[a].closed;
                                        else
                                            for (r = t[a].ks.k.length, i = 0; i < r; i += 1) t[a].ks.k[i].s && (t[a].ks.k[i].s[0].c = t[a].closed), t[a].ks.k[i].e && (t[a].ks.k[i].e[0].c = t[a].closed);
                                else "gr" === t[a].ty && e(t[a].it)
                            }

                            function a(t) {
                                var a, i, r, s, n, o, l = t.length;
                                for (i = 0; i < l; i += 1) {
                                    if ((a = t[i]).hasMask) {
                                        var h = a.masksProperties;
                                        for (s = h.length, r = 0; r < s; r += 1)
                                            if (h[r].pt.k.i) h[r].pt.k.c = h[r].cl;
                                            else
                                                for (o = h[r].pt.k.length, n = 0; n < o; n += 1) h[r].pt.k[n].s && (h[r].pt.k[n].s[0].c = h[r].cl), h[r].pt.k[n].e && (h[r].pt.k[n].e[0].c = h[r].cl)
                                    }
                                    4 === a.ty && e(a.shapes)
                                }
                            }
                            return function(e) {
                                if (r(t, e.v) && (a(e.layers), e.assets)) {
                                    var i, s = e.assets.length;
                                    for (i = 0; i < s; i += 1) e.assets[i].layers && a(e.assets[i].layers)
                                }
                            }
                        }();

                    function p(t) {
                        0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0)
                    }
                    var c = {
                        completeData: function(e, a) {
                            e.__complete || (l(e), n(e), o(e), h(e), t(e.layers, e.assets, a), e.__complete = !0)
                        }
                    };
                    return c.checkColors = l, c.checkChars = o, c.checkShapes = h, c.completeLayers = t, c
                }
                var dataManager = dataFunctionManager();

                function getFontProperties(t) {
                    for (var e = t.fStyle ? t.fStyle.split(" ") : [], a = "normal", i = "normal", r = e.length, s = 0; s < r; s += 1) switch (e[s].toLowerCase()) {
                        case "italic":
                            i = "italic";
                            break;
                        case "bold":
                            a = "700";
                            break;
                        case "black":
                            a = "900";
                            break;
                        case "medium":
                            a = "500";
                            break;
                        case "regular":
                        case "normal":
                            a = "400";
                            break;
                        case "light":
                        case "thin":
                            a = "200"
                    }
                    return {
                        style: i,
                        weight: t.fWeight || a
                    }
                }
                var FontManager = function() {
                        var t = {
                                w: 0,
                                size: 0,
                                shapes: []
                            },
                            e = [];

                        function a(t, e) {
                            var a = createTag("span");
                            a.setAttribute("aria-hidden", !0), a.style.fontFamily = e;
                            var i = createTag("span");
                            i.innerText = "giItT1WQy@!-/#", a.style.position = "absolute", a.style.left = "-10000px", a.style.top = "-10000px", a.style.fontSize = "300px", a.style.fontVariant = "normal", a.style.fontStyle = "normal", a.style.fontWeight = "normal", a.style.letterSpacing = "0", a.appendChild(i), document.body.appendChild(a);
                            var r = i.offsetWidth;
                            return i.style.fontFamily = function(t) {
                                var e, a = t.split(","),
                                    i = a.length,
                                    r = [];
                                for (e = 0; e < i; e += 1) "sans-serif" !== a[e] && "monospace" !== a[e] && r.push(a[e]);
                                return r.join(",")
                            }(t) + ", " + e, {
                                node: i,
                                w: r,
                                parent: a
                            }
                        }

                        function i(t, e) {
                            var a = createNS("text");
                            a.style.fontSize = "100px";
                            var i = getFontProperties(e);
                            return a.setAttribute("font-family", e.fFamily), a.setAttribute("font-style", i.style), a.setAttribute("font-weight", i.weight), a.textContent = "1", e.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", e.fClass)) : a.style.fontFamily = e.fFamily, t.appendChild(a), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, a
                        }
                        e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                        var r = function() {
                            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                        };
                        return r.getCombinedCharacterCodes = function() {
                            return e
                        }, r.prototype = {
                            addChars: function(t) {
                                if (t) {
                                    var e;
                                    this.chars || (this.chars = []);
                                    var a, i, r = t.length,
                                        s = this.chars.length;
                                    for (e = 0; e < r; e += 1) {
                                        for (a = 0, i = !1; a < s;) this.chars[a].style === t[e].style && this.chars[a].fFamily === t[e].fFamily && this.chars[a].ch === t[e].ch && (i = !0), a += 1;
                                        i || (this.chars.push(t[e]), s += 1)
                                    }
                                }
                            },
                            addFonts: function(t, e) {
                                if (t) {
                                    if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                                    var r, s = t.list,
                                        n = s.length,
                                        o = n;
                                    for (r = 0; r < n; r += 1) {
                                        var l, h, p = !0;
                                        if (s[r].loaded = !1, s[r].monoCase = a(s[r].fFamily, "monospace"), s[r].sansCase = a(s[r].fFamily, "sans-serif"), s[r].fPath) {
                                            if ("p" === s[r].fOrigin || 3 === s[r].origin) {
                                                if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + s[r].fFamily + '"], style[f-origin="3"][f-family="' + s[r].fFamily + '"]')).length > 0 && (p = !1), p) {
                                                    var c = createTag("style");
                                                    c.setAttribute("f-forigin", s[r].fOrigin), c.setAttribute("f-origin", s[r].origin), c.setAttribute("f-family", s[r].fFamily), c.type = "text/css", c.innerText = "@font-face {font-family: " + s[r].fFamily + "; font-style: normal; src: url('" + s[r].fPath + "');}", e.appendChild(c)
                                                }
                                            } else if ("g" === s[r].fOrigin || 1 === s[r].origin) {
                                                for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h += 1) - 1 !== l[h].href.indexOf(s[r].fPath) && (p = !1);
                                                if (p) {
                                                    var m = createTag("link");
                                                    m.setAttribute("f-forigin", s[r].fOrigin), m.setAttribute("f-origin", s[r].origin), m.type = "text/css", m.rel = "stylesheet", m.href = s[r].fPath, document.body.appendChild(m)
                                                }
                                            } else if ("t" === s[r].fOrigin || 2 === s[r].origin) {
                                                for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h += 1) s[r].fPath === l[h].src && (p = !1);
                                                if (p) {
                                                    var d = createTag("link");
                                                    d.setAttribute("f-forigin", s[r].fOrigin), d.setAttribute("f-origin", s[r].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", s[r].fPath), e.appendChild(d)
                                                }
                                            }
                                        } else s[r].loaded = !0, o -= 1;
                                        s[r].helper = i(e, s[r]), s[r].cache = {}, this.fonts.push(s[r])
                                    }
                                    0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                                } else this.isLoaded = !0
                            },
                            getCharData: function(e, a, i) {
                                for (var r = 0, s = this.chars.length; r < s;) {
                                    if (this.chars[r].ch === e && this.chars[r].style === a && this.chars[r].fFamily === i) return this.chars[r];
                                    r += 1
                                }
                                return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0), t
                            },
                            getFontByName: function(t) {
                                for (var e = 0, a = this.fonts.length; e < a;) {
                                    if (this.fonts[e].fName === t) return this.fonts[e];
                                    e += 1
                                }
                                return this.fonts[0]
                            },
                            measureText: function(t, e, a) {
                                var i = this.getFontByName(e),
                                    r = t.charCodeAt(0);
                                if (!i.cache[r + 1]) {
                                    var s = i.helper;
                                    if (" " === t) {
                                        s.textContent = "|" + t + "|";
                                        var n = s.getComputedTextLength();
                                        s.textContent = "||";
                                        var o = s.getComputedTextLength();
                                        i.cache[r + 1] = (n - o) / 100
                                    } else s.textContent = t, i.cache[r + 1] = s.getComputedTextLength() / 100
                                }
                                return i.cache[r + 1] * a
                            },
                            checkLoadedFonts: function() {
                                var t, e, a, i = this.fonts.length,
                                    r = i;
                                for (t = 0; t < i; t += 1) this.fonts[t].loaded ? r -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, a = this.fonts[t].monoCase.w, e.offsetWidth !== a ? (r -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, a = this.fonts[t].sansCase.w, e.offsetWidth !== a && (r -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                                0 !== r && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                            },
                            setIsLoaded: function() {
                                this.isLoaded = !0
                            }
                        }, r
                    }(),
                    PropertyFactory = function() {
                        var t = initialDefaultFrame,
                            e = Math.abs;

                        function a(t, e) {
                            var a, r = this.offsetTime;
                            "multidimensional" === this.propType && (a = createTypedArray("float32", this.pv.length));
                            for (var s, n, o, l, h, p, c, m, d = e.lastIndex, f = d, u = this.keyframes.length - 1, g = !0; g;) {
                                if (s = this.keyframes[f], n = this.keyframes[f + 1], f === u - 1 && t >= n.t - r) {
                                    s.h && (s = n), d = 0;
                                    break
                                }
                                if (n.t - r > t) {
                                    d = f;
                                    break
                                }
                                f < u - 1 ? f += 1 : (d = 0, g = !1)
                            }
                            var y, v = n.t - r,
                                x = s.t - r;
                            if (s.to) {
                                s.bezierData || (s.bezierData = bez.buildBezierData(s.s, n.s || s.e, s.to, s.ti));
                                var k = s.bezierData;
                                if (t >= v || t < x) {
                                    var b = t >= v ? k.points.length - 1 : 0;
                                    for (l = k.points[b].point.length, o = 0; o < l; o += 1) a[o] = k.points[b].point[o]
                                } else {
                                    s.__fnct ? m = s.__fnct : (m = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, s.__fnct = m), h = m((t - x) / (v - x));
                                    var E, S = k.segmentLength * h,
                                        w = e.lastFrame < t && e._lastKeyframeIndex === f ? e._lastAddedLength : 0;
                                    for (c = e.lastFrame < t && e._lastKeyframeIndex === f ? e._lastPoint : 0, g = !0, p = k.points.length; g;) {
                                        if (w += k.points[c].partialLength, 0 === S || 0 === h || c === k.points.length - 1) {
                                            for (l = k.points[c].point.length, o = 0; o < l; o += 1) a[o] = k.points[c].point[o];
                                            break
                                        }
                                        if (S >= w && S < w + k.points[c + 1].partialLength) {
                                            for (E = (S - w) / k.points[c + 1].partialLength, l = k.points[c].point.length, o = 0; o < l; o += 1) a[o] = k.points[c].point[o] + (k.points[c + 1].point[o] - k.points[c].point[o]) * E;
                                            break
                                        }
                                        c < p - 1 ? c += 1 : g = !1
                                    }
                                    e._lastPoint = c, e._lastAddedLength = w - k.points[c].partialLength, e._lastKeyframeIndex = f
                                }
                            } else {
                                var P, C, A, T, D;
                                if (u = s.s.length, y = n.s || s.e, this.sh && 1 !== s.h)
                                    if (t >= v) a[0] = y[0], a[1] = y[1], a[2] = y[2];
                                    else if (t <= x) a[0] = s.s[0], a[1] = s.s[1], a[2] = s.s[2];
                                else {
                                    ! function(t, e) {
                                        var a = e[0],
                                            i = e[1],
                                            r = e[2],
                                            s = e[3],
                                            n = Math.atan2(2 * i * s - 2 * a * r, 1 - 2 * i * i - 2 * r * r),
                                            o = Math.asin(2 * a * i + 2 * r * s),
                                            l = Math.atan2(2 * a * s - 2 * i * r, 1 - 2 * a * a - 2 * r * r);
                                        t[0] = n / degToRads, t[1] = o / degToRads, t[2] = l / degToRads
                                    }(a, function(t, e, a) {
                                        var i, r, s, n, o, l = [],
                                            h = t[0],
                                            p = t[1],
                                            c = t[2],
                                            m = t[3],
                                            d = e[0],
                                            f = e[1],
                                            u = e[2],
                                            g = e[3];
                                        (r = h * d + p * f + c * u + m * g) < 0 && (r = -r, d = -d, f = -f, u = -u, g = -g);
                                        1 - r > 1e-6 ? (i = Math.acos(r), s = Math.sin(i), n = Math.sin((1 - a) * i) / s, o = Math.sin(a * i) / s) : (n = 1 - a, o = a);
                                        return l[0] = n * h + o * d, l[1] = n * p + o * f, l[2] = n * c + o * u, l[3] = n * m + o * g, l
                                    }(i(s.s), i(y), (t - x) / (v - x)))
                                } else
                                    for (f = 0; f < u; f += 1) 1 !== s.h && (t >= v ? h = 1 : t < x ? h = 0 : (s.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[f] ? m = s.__fnct[f] : (P = void 0 === s.o.x[f] ? s.o.x[0] : s.o.x[f], C = void 0 === s.o.y[f] ? s.o.y[0] : s.o.y[f], A = void 0 === s.i.x[f] ? s.i.x[0] : s.i.x[f], T = void 0 === s.i.y[f] ? s.i.y[0] : s.i.y[f], m = BezierFactory.getBezierEasing(P, C, A, T).get, s.__fnct[f] = m)) : s.__fnct ? m = s.__fnct : (P = s.o.x, C = s.o.y, A = s.i.x, T = s.i.y, m = BezierFactory.getBezierEasing(P, C, A, T).get, s.__fnct = m), h = m((t - x) / (v - x)))), y = n.s || s.e, D = 1 === s.h ? s.s[f] : s.s[f] + (y[f] - s.s[f]) * h, "multidimensional" === this.propType ? a[f] = D : a = D
                            }
                            return e.lastIndex = d, a
                        }

                        function i(t) {
                            var e = t[0] * degToRads,
                                a = t[1] * degToRads,
                                i = t[2] * degToRads,
                                r = Math.cos(e / 2),
                                s = Math.cos(a / 2),
                                n = Math.cos(i / 2),
                                o = Math.sin(e / 2),
                                l = Math.sin(a / 2),
                                h = Math.sin(i / 2);
                            return [o * l * n + r * s * h, o * s * n + r * l * h, r * l * n - o * s * h, r * s * n - o * l * h]
                        }

                        function r() {
                            var e = this.comp.renderedFrame - this.offsetTime,
                                a = this.keyframes[0].t - this.offsetTime,
                                i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                            if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= i && e >= i || this._caching.lastFrame < a && e < a))) {
                                this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                                var r = this.interpolateValue(e, this._caching);
                                this.pv = r
                            }
                            return this._caching.lastFrame = e, this.pv
                        }

                        function s(t) {
                            var a;
                            if ("unidimensional" === this.propType) a = t * this.mult, e(this.v - a) > 1e-5 && (this.v = a, this._mdf = !0);
                            else
                                for (var i = 0, r = this.v.length; i < r;) a = t[i] * this.mult, e(this.v[i] - a) > 1e-5 && (this.v[i] = a, this._mdf = !0), i += 1
                        }

                        function n() {
                            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                                if (this.lock) this.setVValue(this.pv);
                                else {
                                    var t;
                                    this.lock = !0, this._mdf = this._isFirstFrame;
                                    var e = this.effectsSequence.length,
                                        a = this.kf ? this.pv : this.data.k;
                                    for (t = 0; t < e; t += 1) a = this.effectsSequence[t](a);
                                    this.setVValue(a), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                        }

                        function o(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                        }

                        function l(t, e, a, i) {
                            this.propType = "unidimensional", this.mult = a || 1, this.data = e, this.v = a ? e.k * a : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = n, this.setVValue = s, this.addEffect = o
                        }

                        function h(t, e, a, i) {
                            var r;
                            this.propType = "multidimensional", this.mult = a || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                            var l = e.k.length;
                            for (this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l), this.vel = createTypedArray("float32", l), r = 0; r < l; r += 1) this.v[r] = e.k[r] * this.mult, this.pv[r] = e.k[r];
                            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = n, this.setVValue = s, this.addEffect = o
                        }

                        function p(e, i, l, h) {
                            this.propType = "unidimensional", this.keyframes = i.k, this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                                lastFrame: t,
                                lastIndex: 0,
                                value: 0,
                                _lastKeyframeIndex: -1
                            }, this.k = !0, this.kf = !0, this.data = i, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = n, this.setVValue = s, this.interpolateValue = a, this.effectsSequence = [r.bind(this)], this.addEffect = o
                        }

                        function c(e, i, l, h) {
                            var p;
                            this.propType = "multidimensional";
                            var c, m, d, f, u = i.k.length;
                            for (p = 0; p < u - 1; p += 1) i.k[p].to && i.k[p].s && i.k[p + 1] && i.k[p + 1].s && (c = i.k[p].s, m = i.k[p + 1].s, d = i.k[p].to, f = i.k[p].ti, (2 === c.length && (c[0] !== m[0] || c[1] !== m[1]) && bez.pointOnLine2D(c[0], c[1], m[0], m[1], c[0] + d[0], c[1] + d[1]) && bez.pointOnLine2D(c[0], c[1], m[0], m[1], m[0] + f[0], m[1] + f[1]) || 3 === c.length && (c[0] !== m[0] || c[1] !== m[1] || c[2] !== m[2]) && bez.pointOnLine3D(c[0], c[1], c[2], m[0], m[1], m[2], c[0] + d[0], c[1] + d[1], c[2] + d[2]) && bez.pointOnLine3D(c[0], c[1], c[2], m[0], m[1], m[2], m[0] + f[0], m[1] + f[1], m[2] + f[2])) && (i.k[p].to = null, i.k[p].ti = null), c[0] === m[0] && c[1] === m[1] && 0 === d[0] && 0 === d[1] && 0 === f[0] && 0 === f[1] && (2 === c.length || c[2] === m[2] && 0 === d[2] && 0 === f[2]) && (i.k[p].to = null, i.k[p].ti = null));
                            this.effectsSequence = [r.bind(this)], this.data = i, this.keyframes = i.k, this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.getValue = n, this.setVValue = s, this.interpolateValue = a, this.frameId = -1;
                            var g = i.k[0].s.length;
                            for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), p = 0; p < g; p += 1) this.v[p] = t, this.pv[p] = t;
                            this._caching = {
                                lastFrame: t,
                                lastIndex: 0,
                                value: createTypedArray("float32", g)
                            }, this.addEffect = o
                        }
                        return {
                            getProp: function(t, e, a, i, r) {
                                var s;
                                if (e.k.length)
                                    if ("number" == typeof e.k[0]) s = new h(t, e, i, r);
                                    else switch (a) {
                                        case 0:
                                            s = new p(t, e, i, r);
                                            break;
                                        case 1:
                                            s = new c(t, e, i, r)
                                    } else s = new l(t, e, i, r);
                                return s.effectsSequence.length && r.addDynamicProperty(s), s
                            }
                        }
                    }(),
                    TransformPropertyFactory = function() {
                        var t = [0, 0];

                        function e(t, e, a) {
                            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(a || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                                k: [0, 0, 0]
                            }, 1, 0, this), e.rx) {
                                if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                                    var i, r = e.or.k.length;
                                    for (i = 0; i < r; i += 1) e.or.k[i].to = null, e.or.k[i].ti = null
                                }
                                this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                            } else this.r = PropertyFactory.getProp(t, e.r || {
                                k: 0
                            }, 0, degToRads, this);
                            e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                                k: [0, 0, 0]
                            }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                                k: [100, 100, 100]
                            }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                                _mdf: !1,
                                v: 1
                            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                        }
                        return e.prototype = {
                            applyToMatrix: function(t) {
                                var e = this._mdf;
                                this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            },
                            getValue: function(e) {
                                if (this.elem.globalData.frameId !== this.frameId) {
                                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                        var a;
                                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                            var i, r;
                                            if (a = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / a, 0), r = this.p.getValueAtTime(this.p.keyframes[0].t / a, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / a, 0), r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / a, 0)) : (i = this.p.pv, r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / a, this.p.offsetTime));
                                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                                i = [], r = [];
                                                var s = this.px,
                                                    n = this.py;
                                                s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (i[0] = s.getValueAtTime((s.keyframes[0].t + .01) / a, 0), i[1] = n.getValueAtTime((n.keyframes[0].t + .01) / a, 0), r[0] = s.getValueAtTime(s.keyframes[0].t / a, 0), r[1] = n.getValueAtTime(n.keyframes[0].t / a, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (i[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / a, 0), i[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / a, 0), r[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / a, 0), r[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / a, 0)) : (i = [s.pv, n.pv], r[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / a, s.offsetTime), r[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / a, n.offsetTime))
                                            } else i = r = t;
                                            this.v.rotate(-Math.atan2(i[1] - r[1], i[0] - r[0]))
                                        }
                                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                    }
                                    this.frameId = this.elem.globalData.frameId
                                }
                            },
                            precalculateMatrix: function() {
                                if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                    if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                        if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                        this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                    }
                                    this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                                }
                            },
                            autoOrient: function() {}
                        }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
                            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                        }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                            getTransformProperty: function(t, a, i) {
                                return new e(t, a, i)
                            }
                        }
                    }();

                function ShapePath() {
                    this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                }
                ShapePath.prototype.setPathData = function(t, e) {
                    this.c = t, this.setLength(e);
                    for (var a = 0; a < e;) this.v[a] = pointPool.newElement(), this.o[a] = pointPool.newElement(), this.i[a] = pointPool.newElement(), a += 1
                }, ShapePath.prototype.setLength = function(t) {
                    for (; this._maxLength < t;) this.doubleArrayLength();
                    this._length = t
                }, ShapePath.prototype.doubleArrayLength = function() {
                    this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                }, ShapePath.prototype.setXYAt = function(t, e, a, i, r) {
                    var s;
                    switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), a) {
                        case "v":
                            s = this.v;
                            break;
                        case "i":
                            s = this.i;
                            break;
                        case "o":
                            s = this.o;
                            break;
                        default:
                            s = []
                    }(!s[i] || s[i] && !r) && (s[i] = pointPool.newElement()), s[i][0] = t, s[i][1] = e
                }, ShapePath.prototype.setTripleAt = function(t, e, a, i, r, s, n, o) {
                    this.setXYAt(t, e, "v", n, o), this.setXYAt(a, i, "o", n, o), this.setXYAt(r, s, "i", n, o)
                }, ShapePath.prototype.reverse = function() {
                    var t = new ShapePath;
                    t.setPathData(this.c, this._length);
                    var e = this.v,
                        a = this.o,
                        i = this.i,
                        r = 0;
                    this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], a[0][0], a[0][1], 0, !1), r = 1);
                    var s, n = this._length - 1,
                        o = this._length;
                    for (s = r; s < o; s += 1) t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], a[n][0], a[n][1], s, !1), n -= 1;
                    return t
                };
                var ShapePropertyFactory = function() {
                        function t(t, e, a) {
                            var i, r, s, n, o, l, h, p, c, m = a.lastIndex,
                                d = this.keyframes;
                            if (t < d[0].t - this.offsetTime) i = d[0].s[0], s = !0, m = 0;
                            else if (t >= d[d.length - 1].t - this.offsetTime) i = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], s = !0;
                            else {
                                for (var f, u, g = m, y = d.length - 1, v = !0; v && (f = d[g], !((u = d[g + 1]).t - this.offsetTime > t));) g < y - 1 ? g += 1 : v = !1;
                                if (m = g, !(s = 1 === f.h)) {
                                    if (t >= u.t - this.offsetTime) p = 1;
                                    else if (t < f.t - this.offsetTime) p = 0;
                                    else {
                                        var x;
                                        f.__fnct ? x = f.__fnct : (x = BezierFactory.getBezierEasing(f.o.x, f.o.y, f.i.x, f.i.y).get, f.__fnct = x), p = x((t - (f.t - this.offsetTime)) / (u.t - this.offsetTime - (f.t - this.offsetTime)))
                                    }
                                    r = u.s ? u.s[0] : f.e[0]
                                }
                                i = f.s[0]
                            }
                            for (l = e._length, h = i.i[0].length, a.lastIndex = m, n = 0; n < l; n += 1)
                                for (o = 0; o < h; o += 1) c = s ? i.i[n][o] : i.i[n][o] + (r.i[n][o] - i.i[n][o]) * p, e.i[n][o] = c, c = s ? i.o[n][o] : i.o[n][o] + (r.o[n][o] - i.o[n][o]) * p, e.o[n][o] = c, c = s ? i.v[n][o] : i.v[n][o] + (r.v[n][o] - i.v[n][o]) * p, e.v[n][o] = c
                        }

                        function e() {
                            var t = this.comp.renderedFrame - this.offsetTime,
                                e = this.keyframes[0].t - this.offsetTime,
                                a = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                i = this._caching.lastFrame;
                            return -999999 !== i && (i < e && t < e || i > a && t > a) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
                        }

                        function a() {
                            this.paths = this.localShapeCollection
                        }

                        function i(t) {
                            (function(t, e) {
                                if (t._length !== e._length || t.c !== e.c) return !1;
                                var a, i = t._length;
                                for (a = 0; a < i; a += 1)
                                    if (t.v[a][0] !== e.v[a][0] || t.v[a][1] !== e.v[a][1] || t.o[a][0] !== e.o[a][0] || t.o[a][1] !== e.o[a][1] || t.i[a][0] !== e.i[a][0] || t.i[a][1] !== e.i[a][1]) return !1;
                                return !0
                            })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                        }

                        function r() {
                            if (this.elem.globalData.frameId !== this.frameId)
                                if (this.effectsSequence.length)
                                    if (this.lock) this.setVValue(this.pv);
                                    else {
                                        var t, e;
                                        this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                        var a = this.effectsSequence.length;
                                        for (e = 0; e < a; e += 1) t = this.effectsSequence[e](t);
                                        this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                    } else this._mdf = !1
                        }

                        function s(t, e, i) {
                            this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                            var r = 3 === i ? e.pt.k : e.ks.k;
                            this.v = shapePool.clone(r), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = a, this.effectsSequence = []
                        }

                        function n(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                        }

                        function o(t, i, r) {
                            this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === r ? i.pt.k : i.ks.k, this.k = !0, this.kf = !0;
                            var s = this.keyframes[0].s[0].i.length;
                            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = a, this._caching = {
                                lastFrame: -999999,
                                lastIndex: 0
                            }, this.effectsSequence = [e.bind(this)]
                        }
                        s.prototype.interpolateShape = t, s.prototype.getValue = r, s.prototype.setVValue = i, s.prototype.addEffect = n, o.prototype.getValue = r, o.prototype.interpolateShape = t, o.prototype.setVValue = i, o.prototype.addEffect = n;
                        var l = function() {
                                var t = roundCorner;

                                function e(t, e) {
                                    this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                }
                                return e.prototype = {
                                    reset: a,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                    },
                                    convertEllToPath: function() {
                                        var e = this.p.v[0],
                                            a = this.p.v[1],
                                            i = this.s.v[0] / 2,
                                            r = this.s.v[1] / 2,
                                            s = 3 !== this.d,
                                            n = this.v;
                                        n.v[0][0] = e, n.v[0][1] = a - r, n.v[1][0] = s ? e + i : e - i, n.v[1][1] = a, n.v[2][0] = e, n.v[2][1] = a + r, n.v[3][0] = s ? e - i : e + i, n.v[3][1] = a, n.i[0][0] = s ? e - i * t : e + i * t, n.i[0][1] = a - r, n.i[1][0] = s ? e + i : e - i, n.i[1][1] = a - r * t, n.i[2][0] = s ? e + i * t : e - i * t, n.i[2][1] = a + r, n.i[3][0] = s ? e - i : e + i, n.i[3][1] = a + r * t, n.o[0][0] = s ? e + i * t : e - i * t, n.o[0][1] = a - r, n.o[1][0] = s ? e + i : e - i, n.o[1][1] = a + r * t, n.o[2][0] = s ? e - i * t : e + i * t, n.o[2][1] = a + r, n.o[3][0] = s ? e - i : e + i, n.o[3][1] = a - r * t
                                    }
                                }, extendPrototype([DynamicPropertyContainer], e), e
                            }(),
                            h = function() {
                                function t(t, e) {
                                    this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                }
                                return t.prototype = {
                                    reset: a,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                    },
                                    convertStarToPath: function() {
                                        var t, e, a, i, r = 2 * Math.floor(this.pt.v),
                                            s = 2 * Math.PI / r,
                                            n = !0,
                                            o = this.or.v,
                                            l = this.ir.v,
                                            h = this.os.v,
                                            p = this.is.v,
                                            c = 2 * Math.PI * o / (2 * r),
                                            m = 2 * Math.PI * l / (2 * r),
                                            d = -Math.PI / 2;
                                        d += this.r.v;
                                        var f = 3 === this.data.d ? -1 : 1;
                                        for (this.v._length = 0, t = 0; t < r; t += 1) {
                                            a = n ? h : p, i = n ? c : m;
                                            var u = (e = n ? o : l) * Math.cos(d),
                                                g = e * Math.sin(d),
                                                y = 0 === u && 0 === g ? 0 : g / Math.sqrt(u * u + g * g),
                                                v = 0 === u && 0 === g ? 0 : -u / Math.sqrt(u * u + g * g);
                                            u += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(u, g, u - y * i * a * f, g - v * i * a * f, u + y * i * a * f, g + v * i * a * f, t, !0), n = !n, d += s * f
                                        }
                                    },
                                    convertPolygonToPath: function() {
                                        var t, e = Math.floor(this.pt.v),
                                            a = 2 * Math.PI / e,
                                            i = this.or.v,
                                            r = this.os.v,
                                            s = 2 * Math.PI * i / (4 * e),
                                            n = .5 * -Math.PI,
                                            o = 3 === this.data.d ? -1 : 1;
                                        for (n += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                            var l = i * Math.cos(n),
                                                h = i * Math.sin(n),
                                                p = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                                                c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                                            l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - p * s * r * o, h - c * s * r * o, l + p * s * r * o, h + c * s * r * o, t, !0), n += a * o
                                        }
                                        this.paths.length = 0, this.paths[0] = this.v
                                    }
                                }, extendPrototype([DynamicPropertyContainer], t), t
                            }(),
                            p = function() {
                                function t(t, e) {
                                    this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                }
                                return t.prototype = {
                                    convertRectToPath: function() {
                                        var t = this.p.v[0],
                                            e = this.p.v[1],
                                            a = this.s.v[0] / 2,
                                            i = this.s.v[1] / 2,
                                            r = bmMin(a, i, this.r.v),
                                            s = r * (1 - roundCorner);
                                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + a, e - i + r, t + a, e - i + r, t + a, e - i + s, 0, !0), this.v.setTripleAt(t + a, e + i - r, t + a, e + i - s, t + a, e + i - r, 1, !0), 0 !== r ? (this.v.setTripleAt(t + a - r, e + i, t + a - r, e + i, t + a - s, e + i, 2, !0), this.v.setTripleAt(t - a + r, e + i, t - a + s, e + i, t - a + r, e + i, 3, !0), this.v.setTripleAt(t - a, e + i - r, t - a, e + i - r, t - a, e + i - s, 4, !0), this.v.setTripleAt(t - a, e - i + r, t - a, e - i + s, t - a, e - i + r, 5, !0), this.v.setTripleAt(t - a + r, e - i, t - a + r, e - i, t - a + s, e - i, 6, !0), this.v.setTripleAt(t + a - r, e - i, t + a - s, e - i, t + a - r, e - i, 7, !0)) : (this.v.setTripleAt(t - a, e + i, t - a + s, e + i, t - a, e + i, 2), this.v.setTripleAt(t - a, e - i, t - a, e - i + s, t - a, e - i, 3))) : (this.v.setTripleAt(t + a, e - i + r, t + a, e - i + s, t + a, e - i + r, 0, !0), 0 !== r ? (this.v.setTripleAt(t + a - r, e - i, t + a - r, e - i, t + a - s, e - i, 1, !0), this.v.setTripleAt(t - a + r, e - i, t - a + s, e - i, t - a + r, e - i, 2, !0), this.v.setTripleAt(t - a, e - i + r, t - a, e - i + r, t - a, e - i + s, 3, !0), this.v.setTripleAt(t - a, e + i - r, t - a, e + i - s, t - a, e + i - r, 4, !0), this.v.setTripleAt(t - a + r, e + i, t - a + r, e + i, t - a + s, e + i, 5, !0), this.v.setTripleAt(t + a - r, e + i, t + a - s, e + i, t + a - r, e + i, 6, !0), this.v.setTripleAt(t + a, e + i - r, t + a, e + i - r, t + a, e + i - s, 7, !0)) : (this.v.setTripleAt(t - a, e - i, t - a + s, e - i, t - a, e - i, 1, !0), this.v.setTripleAt(t - a, e + i, t - a, e + i - s, t - a, e + i, 2, !0), this.v.setTripleAt(t + a, e + i, t + a - s, e + i, t + a, e + i, 3, !0)))
                                    },
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                    },
                                    reset: a
                                }, extendPrototype([DynamicPropertyContainer], t), t
                            }();
                        var c = {
                            getShapeProp: function(t, e, a) {
                                var i;
                                return 3 === a || 4 === a ? i = (3 === a ? e.pt : e.ks).k.length ? new o(t, e, a) : new s(t, e, a) : 5 === a ? i = new p(t, e) : 6 === a ? i = new l(t, e) : 7 === a && (i = new h(t, e)), i.k && t.addDynamicProperty(i), i
                            },
                            getConstructorFunction: function() {
                                return s
                            },
                            getKeyframedConstructorFunction: function() {
                                return o
                            }
                        };
                        return c
                    }(),
                    ShapeModifiers = (ob = {}, modifiers = {}, ob.registerModifier = function(t, e) {
                        modifiers[t] || (modifiers[t] = e)
                    }, ob.getModifier = function(t, e, a) {
                        return new modifiers[t](e, a)
                    }, ob),
                    ob, modifiers;

                function ShapeModifier() {}

                function TrimModifier() {}

                function RoundCornersModifier() {}

                function PuckerAndBloatModifier() {}

                function RepeaterModifier() {}

                function ShapeCollection() {
                    this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                }

                function DashProperty(t, e, a, i) {
                    var r;
                    this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = a, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
                    var s, n = e.length || 0;
                    for (r = 0; r < n; r += 1) s = PropertyFactory.getProp(t, e[r].v, 0, 0, this), this.k = s.k || this.k, this.dataProps[r] = {
                        n: e[r].n,
                        p: s
                    };
                    this.k || this.getValue(!0), this._isAnimated = this.k
                }

                function GradientProperty(t, e, a) {
                    this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                    var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                    this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(a), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                }
                ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                    if (!this.closed) {
                        t.sh.container.addDynamicProperty(t.sh);
                        var e = {
                            shape: t.sh,
                            data: t,
                            localShapeCollection: shapeCollectionPool.newShapeCollection()
                        };
                        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                    }
                }, ShapeModifier.prototype.init = function(t, e) {
                    this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, ShapeModifier.prototype.processKeys = function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
                    this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                }, TrimModifier.prototype.addShapeToModifier = function(t) {
                    t.pathsData = []
                }, TrimModifier.prototype.calculateShapeEdges = function(t, e, a, i, r) {
                    var s = [];
                    e <= 1 ? s.push({
                        s: t,
                        e: e
                    }) : t >= 1 ? s.push({
                        s: t - 1,
                        e: e - 1
                    }) : (s.push({
                        s: t,
                        e: 1
                    }), s.push({
                        s: 0,
                        e: e - 1
                    }));
                    var n, o, l = [],
                        h = s.length;
                    for (n = 0; n < h; n += 1) {
                        var p, c;
                        if (!((o = s[n]).e * r < i || o.s * r > i + a)) p = o.s * r <= i ? 0 : (o.s * r - i) / a, c = o.e * r >= i + a ? 1 : (o.e * r - i) / a, l.push([p, c])
                    }
                    return l.length || l.push([0, 0]), l
                }, TrimModifier.prototype.releasePathsData = function(t) {
                    var e, a = t.length;
                    for (e = 0; e < a; e += 1) segmentsLengthPool.release(t[e]);
                    return t.length = 0, t
                }, TrimModifier.prototype.processShapes = function(t) {
                    var e, a, i, r;
                    if (this._mdf || t) {
                        var s = this.o.v % 360 / 360;
                        if (s < 0 && (s += 1), (e = this.s.v > 1 ? 1 + s : this.s.v < 0 ? 0 + s : this.s.v + s) > (a = this.e.v > 1 ? 1 + s : this.e.v < 0 ? 0 + s : this.e.v + s)) {
                            var n = e;
                            e = a, a = n
                        }
                        e = 1e-4 * Math.round(1e4 * e), a = 1e-4 * Math.round(1e4 * a), this.sValue = e, this.eValue = a
                    } else e = this.sValue, a = this.eValue;
                    var o, l, h, p, c, m = this.shapes.length,
                        d = 0;
                    if (a === e)
                        for (r = 0; r < m; r += 1) this.shapes[r].localShapeCollection.releaseShapes(), this.shapes[r].shape._mdf = !0, this.shapes[r].shape.paths = this.shapes[r].localShapeCollection, this._mdf && (this.shapes[r].pathsData.length = 0);
                    else if (1 === a && 0 === e || 0 === a && 1 === e) {
                        if (this._mdf)
                            for (r = 0; r < m; r += 1) this.shapes[r].pathsData.length = 0, this.shapes[r].shape._mdf = !0
                    } else {
                        var f, u, g = [];
                        for (r = 0; r < m; r += 1)
                            if ((f = this.shapes[r]).shape._mdf || this._mdf || t || 2 === this.m) {
                                if (l = (i = f.shape.paths)._length, c = 0, !f.shape._mdf && f.pathsData.length) c = f.totalShapeLength;
                                else {
                                    for (h = this.releasePathsData(f.pathsData), o = 0; o < l; o += 1) p = bez.getSegmentsLength(i.shapes[o]), h.push(p), c += p.totalLength;
                                    f.totalShapeLength = c, f.pathsData = h
                                }
                                d += c, f.shape._mdf = !0
                            } else f.shape.paths = f.localShapeCollection;
                        var y, v = e,
                            x = a,
                            k = 0;
                        for (r = m - 1; r >= 0; r -= 1)
                            if ((f = this.shapes[r]).shape._mdf) {
                                for ((u = f.localShapeCollection).releaseShapes(), 2 === this.m && m > 1 ? (y = this.calculateShapeEdges(e, a, f.totalShapeLength, k, d), k += f.totalShapeLength) : y = [
                                    [v, x]
                                ], l = y.length, o = 0; o < l; o += 1) {
                                    v = y[o][0], x = y[o][1], g.length = 0, x <= 1 ? g.push({
                                        s: f.totalShapeLength * v,
                                        e: f.totalShapeLength * x
                                    }) : v >= 1 ? g.push({
                                        s: f.totalShapeLength * (v - 1),
                                        e: f.totalShapeLength * (x - 1)
                                    }) : (g.push({
                                        s: f.totalShapeLength * v,
                                        e: f.totalShapeLength
                                    }), g.push({
                                        s: 0,
                                        e: f.totalShapeLength * (x - 1)
                                    }));
                                    var b = this.addShapes(f, g[0]);
                                    if (g[0].s !== g[0].e) {
                                        if (g.length > 1)
                                            if (f.shape.paths.shapes[f.shape.paths._length - 1].c) {
                                                var E = b.pop();
                                                this.addPaths(b, u), b = this.addShapes(f, g[1], E)
                                            } else this.addPaths(b, u), b = this.addShapes(f, g[1]);
                                        this.addPaths(b, u)
                                    }
                                }
                                f.shape.paths = u
                            }
                    }
                }, TrimModifier.prototype.addPaths = function(t, e) {
                    var a, i = t.length;
                    for (a = 0; a < i; a += 1) e.addShape(t[a])
                }, TrimModifier.prototype.addSegment = function(t, e, a, i, r, s, n) {
                    r.setXYAt(e[0], e[1], "o", s), r.setXYAt(a[0], a[1], "i", s + 1), n && r.setXYAt(t[0], t[1], "v", s), r.setXYAt(i[0], i[1], "v", s + 1)
                }, TrimModifier.prototype.addSegmentFromArray = function(t, e, a, i) {
                    e.setXYAt(t[1], t[5], "o", a), e.setXYAt(t[2], t[6], "i", a + 1), i && e.setXYAt(t[0], t[4], "v", a), e.setXYAt(t[3], t[7], "v", a + 1)
                }, TrimModifier.prototype.addShapes = function(t, e, a) {
                    var i, r, s, n, o, l, h, p, c = t.pathsData,
                        m = t.shape.paths.shapes,
                        d = t.shape.paths._length,
                        f = 0,
                        u = [],
                        g = !0;
                    for (a ? (o = a._length, p = a._length) : (a = shapePool.newElement(), o = 0, p = 0), u.push(a), i = 0; i < d; i += 1) {
                        for (l = c[i].lengths, a.c = m[i].c, s = m[i].c ? l.length : l.length + 1, r = 1; r < s; r += 1)
                            if (f + (n = l[r - 1]).addedLength < e.s) f += n.addedLength, a.c = !1;
                            else {
                                if (f > e.e) {
                                    a.c = !1;
                                    break
                                }
                                e.s <= f && e.e >= f + n.addedLength ? (this.addSegment(m[i].v[r - 1], m[i].o[r - 1], m[i].i[r], m[i].v[r], a, o, g), g = !1) : (h = bez.getNewSegment(m[i].v[r - 1], m[i].v[r], m[i].o[r - 1], m[i].i[r], (e.s - f) / n.addedLength, (e.e - f) / n.addedLength, l[r - 1]), this.addSegmentFromArray(h, a, o, g), g = !1, a.c = !1), f += n.addedLength, o += 1
                            }
                        if (m[i].c && l.length) {
                            if (n = l[r - 1], f <= e.e) {
                                var y = l[r - 1].addedLength;
                                e.s <= f && e.e >= f + y ? (this.addSegment(m[i].v[r - 1], m[i].o[r - 1], m[i].i[0], m[i].v[0], a, o, g), g = !1) : (h = bez.getNewSegment(m[i].v[r - 1], m[i].v[0], m[i].o[r - 1], m[i].i[0], (e.s - f) / y, (e.e - f) / y, l[r - 1]), this.addSegmentFromArray(h, a, o, g), g = !1, a.c = !1)
                            } else a.c = !1;
                            f += n.addedLength, o += 1
                        }
                        if (a._length && (a.setXYAt(a.v[p][0], a.v[p][1], "i", p), a.setXYAt(a.v[a._length - 1][0], a.v[a._length - 1][1], "o", a._length - 1)), f > e.e) break;
                        i < d - 1 && (a = shapePool.newElement(), g = !0, u.push(a), o = 0)
                    }
                    return u
                }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                }, RoundCornersModifier.prototype.processPath = function(t, e) {
                    var a, i = shapePool.newElement();
                    i.c = t.c;
                    var r, s, n, o, l, h, p, c, m, d, f, u, g = t._length,
                        y = 0;
                    for (a = 0; a < g; a += 1) r = t.v[a], n = t.o[a], s = t.i[a], r[0] === n[0] && r[1] === n[1] && r[0] === s[0] && r[1] === s[1] ? 0 !== a && a !== g - 1 || t.c ? (o = 0 === a ? t.v[g - 1] : t.v[a - 1], h = (l = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, p = f = r[0] + (o[0] - r[0]) * h, c = u = r[1] - (r[1] - o[1]) * h, m = p - (p - r[0]) * roundCorner, d = c - (c - r[1]) * roundCorner, i.setTripleAt(p, c, m, d, f, u, y), y += 1, o = a === g - 1 ? t.v[0] : t.v[a + 1], h = (l = Math.sqrt(Math.pow(r[0] - o[0], 2) + Math.pow(r[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, p = m = r[0] + (o[0] - r[0]) * h, c = d = r[1] + (o[1] - r[1]) * h, f = p - (p - r[0]) * roundCorner, u = c - (c - r[1]) * roundCorner, i.setTripleAt(p, c, m, d, f, u, y), y += 1) : (i.setTripleAt(r[0], r[1], n[0], n[1], s[0], s[1], y), y += 1) : (i.setTripleAt(t.v[a][0], t.v[a][1], t.o[a][0], t.o[a][1], t.i[a][0], t.i[a][1], y), y += 1);
                    return i
                }, RoundCornersModifier.prototype.processShapes = function(t) {
                    var e, a, i, r, s, n, o = this.shapes.length,
                        l = this.rd.v;
                    if (0 !== l)
                        for (a = 0; a < o; a += 1) {
                            if (n = (s = this.shapes[a]).localShapeCollection, s.shape._mdf || this._mdf || t)
                                for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, r = s.shape.paths._length, i = 0; i < r; i += 1) n.addShape(this.processPath(e[i], l));
                            s.shape.paths = s.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                    var a = e / 100,
                        i = [0, 0],
                        r = t._length,
                        s = 0;
                    for (s = 0; s < r; s += 1) i[0] += t.v[s][0], i[1] += t.v[s][1];
                    i[0] /= r, i[1] /= r;
                    var n, o, l, h, p, c, m = shapePool.newElement();
                    for (m.c = t.c, s = 0; s < r; s += 1) n = t.v[s][0] + (i[0] - t.v[s][0]) * a, o = t.v[s][1] + (i[1] - t.v[s][1]) * a, l = t.o[s][0] + (i[0] - t.o[s][0]) * -a, h = t.o[s][1] + (i[1] - t.o[s][1]) * -a, p = t.i[s][0] + (i[0] - t.i[s][0]) * -a, c = t.i[s][1] + (i[1] - t.i[s][1]) * -a, m.setTripleAt(n, o, l, h, p, c, s);
                    return m
                }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
                    var e, a, i, r, s, n, o = this.shapes.length,
                        l = this.amount.v;
                    if (0 !== l)
                        for (a = 0; a < o; a += 1) {
                            if (n = (s = this.shapes[a]).localShapeCollection, s.shape._mdf || this._mdf || t)
                                for (n.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, r = s.shape.paths._length, i = 0; i < r; i += 1) n.addShape(this.processPath(e[i], l));
                            s.shape.paths = s.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                }, RepeaterModifier.prototype.applyTransforms = function(t, e, a, i, r, s) {
                    var n = s ? -1 : 1,
                        o = i.s.v[0] + (1 - i.s.v[0]) * (1 - r),
                        l = i.s.v[1] + (1 - i.s.v[1]) * (1 - r);
                    t.translate(i.p.v[0] * n * r, i.p.v[1] * n * r, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * r), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), a.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), a.scale(s ? 1 / o : o, s ? 1 / l : l), a.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                }, RepeaterModifier.prototype.init = function(t, e, a, i) {
                    for (this.elem = t, this.arr = e, this.pos = a, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[a]); a > 0;) a -= 1, this._elements.unshift(e[a]);
                    this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, RepeaterModifier.prototype.resetElements = function(t) {
                    var e, a = t.length;
                    for (e = 0; e < a; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                }, RepeaterModifier.prototype.cloneElements = function(t) {
                    var e = JSON.parse(JSON.stringify(t));
                    return this.resetElements(e), e
                }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                    var a, i = t.length;
                    for (a = 0; a < i; a += 1) t[a]._render = e, "gr" === t[a].ty && this.changeGroupRender(t[a].it, e)
                }, RepeaterModifier.prototype.processShapes = function(t) {
                    var e, a, i, r, s, n = !1;
                    if (this._mdf || t) {
                        var o, l = Math.ceil(this.c.v);
                        if (this._groups.length < l) {
                            for (; this._groups.length < l;) {
                                var h = {
                                    it: this.cloneElements(this._elements),
                                    ty: "gr"
                                };
                                h.it.push({
                                    a: {
                                        a: 0,
                                        ix: 1,
                                        k: [0, 0]
                                    },
                                    nm: "Transform",
                                    o: {
                                        a: 0,
                                        ix: 7,
                                        k: 100
                                    },
                                    p: {
                                        a: 0,
                                        ix: 2,
                                        k: [0, 0]
                                    },
                                    r: {
                                        a: 1,
                                        ix: 6,
                                        k: [{
                                            s: 0,
                                            e: 0,
                                            t: 0
                                        }, {
                                            s: 0,
                                            e: 0,
                                            t: 1
                                        }]
                                    },
                                    s: {
                                        a: 0,
                                        ix: 3,
                                        k: [100, 100]
                                    },
                                    sa: {
                                        a: 0,
                                        ix: 5,
                                        k: 0
                                    },
                                    sk: {
                                        a: 0,
                                        ix: 4,
                                        k: 0
                                    },
                                    ty: "tr"
                                }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
                            }
                            this.elem.reloadShapes(), n = !0
                        }
                        for (s = 0, i = 0; i <= this._groups.length - 1; i += 1) {
                            if (o = s < l, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
                                var p = this.elemsData[i].it,
                                    c = p[p.length - 1];
                                0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
                            }
                            s += 1
                        }
                        this._currentCopies = l;
                        var m = this.o.v,
                            d = m % 1,
                            f = m > 0 ? Math.floor(m) : Math.ceil(m),
                            u = this.pMatrix.props,
                            g = this.rMatrix.props,
                            y = this.sMatrix.props;
                        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                        var v, x, k = 0;
                        if (m > 0) {
                            for (; k < f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), k += 1;
                            d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), k += d)
                        } else if (m < 0) {
                            for (; k > f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), k -= 1;
                            d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), k -= d)
                        }
                        for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, r = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
                            if (x = (a = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== k) {
                                for ((0 !== i && 1 === r || i !== this._currentCopies - 1 && -1 === r) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), v = 0; v < x; v += 1) a[v] = this.matrix.props[v];
                                this.matrix.reset()
                            } else
                                for (this.matrix.reset(), v = 0; v < x; v += 1) a[v] = this.matrix.props[v];
                            k += 1, s -= 1, i += r
                        }
                    } else
                        for (s = this._currentCopies, i = 0, r = 1; s;) a = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, s -= 1, i += r;
                    return n
                }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
                    this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                }, ShapeCollection.prototype.releaseShapes = function() {
                    var t;
                    for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
                    this._length = 0
                }, DashProperty.prototype.getValue = function(t) {
                    if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                        var e = 0,
                            a = this.dataProps.length;
                        for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < a; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                    }
                }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
                    for (var a = 0, i = this.o.length / 2; a < i;) {
                        if (Math.abs(t[4 * a] - t[4 * e + 2 * a]) > .01) return !1;
                        a += 1
                    }
                    return !0
                }, GradientProperty.prototype.checkCollapsable = function() {
                    if (this.o.length / 2 != this.c.length / 4) return !1;
                    if (this.data.k.k[0].s)
                        for (var t = 0, e = this.data.k.k.length; t < e;) {
                            if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                            t += 1
                        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                    return !0
                }, GradientProperty.prototype.getValue = function(t) {
                    if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                        var e, a, i, r = 4 * this.data.p;
                        for (e = 0; e < r; e += 1) a = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * a), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
                        if (this.o.length)
                            for (r = this.prop.v.length, e = 4 * this.data.p; e < r; e += 1) a = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
                        this._mdf = !t
                    }
                }, extendPrototype([DynamicPropertyContainer], GradientProperty);
                var buildShapeString = function(t, e, a, i) {
                        if (0 === e) return "";
                        var r, s = t.o,
                            n = t.i,
                            o = t.v,
                            l = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
                        for (r = 1; r < e; r += 1) l += " C" + i.applyToPointStringified(s[r - 1][0], s[r - 1][1]) + " " + i.applyToPointStringified(n[r][0], n[r][1]) + " " + i.applyToPointStringified(o[r][0], o[r][1]);
                        return a && e && (l += " C" + i.applyToPointStringified(s[r - 1][0], s[r - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
                    },
                    audioControllerFactory = function() {
                        function t(t) {
                            this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                        }
                        return t.prototype = {
                                addAudio: function(t) {
                                    this.audios.push(t)
                                },
                                pause: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].pause()
                                },
                                resume: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].resume()
                                },
                                setRate: function(t) {
                                    var e, a = this.audios.length;
                                    for (e = 0; e < a; e += 1) this.audios[e].setRate(t)
                                },
                                createAudio: function(t) {
                                    return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
                                        src: [t]
                                    }) : {
                                        isPlaying: !1,
                                        play: function() {
                                            this.isPlaying = !0
                                        },
                                        seek: function() {
                                            this.isPlaying = !1
                                        },
                                        playing: function() {},
                                        rate: function() {},
                                        setVolume: function() {}
                                    }
                                },
                                setAudioFactory: function(t) {
                                    this.audioFactory = t
                                },
                                setVolume: function(t) {
                                    this._volume = t, this._updateVolume()
                                },
                                mute: function() {
                                    this._isMuted = !0, this._updateVolume()
                                },
                                unmute: function() {
                                    this._isMuted = !1, this._updateVolume()
                                },
                                getVolume: function() {
                                    return this._volume
                                },
                                _updateVolume: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                                }
                            },
                            function() {
                                return new t
                            }
                    }(),
                    ImagePreloader = function() {
                        var t = function() {
                            var t = createTag("canvas");
                            t.width = 1, t.height = 1;
                            var e = t.getContext("2d");
                            return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                        }();

                        function e() {
                            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function a() {
                            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function i(t, e, a) {
                            var i = "";
                            if (t.e) i = t.p;
                            else if (e) {
                                var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), i = e + r
                            } else i = a, i += t.u ? t.u : "", i += t.p;
                            return i
                        }

                        function r(t) {
                            var e = 0,
                                a = setInterval(function() {
                                    (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(a)), e += 1
                                }.bind(this), 50)
                        }

                        function s(t) {
                            var e = {
                                    assetData: t
                                },
                                a = i(t, this.assetsPath, this.path);
                            return assetLoader.load(a, function(t) {
                                e.img = t, this._footageLoaded()
                            }.bind(this), function() {
                                e.img = {}, this._footageLoaded()
                            }.bind(this)), e
                        }

                        function n() {
                            this._imageLoaded = e.bind(this), this._footageLoaded = a.bind(this), this.testImageLoaded = r.bind(this), this.createFootageData = s.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                        }
                        return n.prototype = {
                            loadAssets: function(t, e) {
                                var a;
                                this.imagesLoadedCb = e;
                                var i = t.length;
                                for (a = 0; a < i; a += 1) t[a].layers || (t[a].t && "seq" !== t[a].t ? 3 === t[a].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[a]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[a]))))
                            },
                            setAssetsPath: function(t) {
                                this.assetsPath = t || ""
                            },
                            setPath: function(t) {
                                this.path = t || ""
                            },
                            loadedImages: function() {
                                return this.totalImages === this.loadedAssets
                            },
                            loadedFootages: function() {
                                return this.totalFootages === this.loadedFootagesCount
                            },
                            destroy: function() {
                                this.imagesLoadedCb = null, this.images.length = 0
                            },
                            getAsset: function(t) {
                                for (var e = 0, a = this.images.length; e < a;) {
                                    if (this.images[e].assetData === t) return this.images[e].img;
                                    e += 1
                                }
                                return null
                            },
                            createImgData: function(e) {
                                var a = i(e, this.assetsPath, this.path),
                                    r = createTag("img");
                                r.crossOrigin = "anonymous", r.addEventListener("load", this._imageLoaded, !1), r.addEventListener("error", function() {
                                    s.img = t, this._imageLoaded()
                                }.bind(this), !1), r.src = a;
                                var s = {
                                    img: r,
                                    assetData: e
                                };
                                return s
                            },
                            createImageData: function(e) {
                                var a = i(e, this.assetsPath, this.path),
                                    r = createNS("image");
                                isSafari ? this.testImageLoaded(r) : r.addEventListener("load", this._imageLoaded, !1), r.addEventListener("error", function() {
                                    s.img = t, this._imageLoaded()
                                }.bind(this), !1), r.setAttributeNS("http://www.w3.org/1999/xlink", "href", a), this._elementHelper.append ? this._elementHelper.append(r) : this._elementHelper.appendChild(r);
                                var s = {
                                    img: r,
                                    assetData: e
                                };
                                return s
                            },
                            imageLoaded: e,
                            footageLoaded: a,
                            setCacheType: function(t, e) {
                                "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                            }
                        }, n
                    }(),
                    featureSupport = function() {
                        var t = {
                            maskType: !0
                        };
                        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
                    }(),
                    filtersFactory = function() {
                        var t = {};
                        return t.createFilter = function(t, e) {
                            var a = createNS("filter");
                            a.setAttribute("id", t), !0 !== e && (a.setAttribute("filterUnits", "objectBoundingBox"), a.setAttribute("x", "0%"), a.setAttribute("y", "0%"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"));
                            return a
                        }, t.createAlphaToLuminanceFilter = function() {
                            var t = createNS("feColorMatrix");
                            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                        }, t
                    }(),
                    assetLoader = function() {
                        function t(t) {
                            return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                        }
                        return {
                            load: function(e, a, i) {
                                var r, s = new XMLHttpRequest;
                                try {
                                    s.responseType = "json"
                                } catch (t) {}
                                s.onreadystatechange = function() {
                                    if (4 === s.readyState)
                                        if (200 === s.status) r = t(s), a(r);
                                        else try {
                                            r = t(s), a(r)
                                        } catch (t) {
                                            i && i(t)
                                        }
                                }, s.open("GET", e, !0), s.send()
                            }
                        }
                    }();

                function TextAnimatorProperty(t, e, a) {
                    this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = a, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                        alignment: {}
                    }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(a)
                }

                function TextAnimatorDataProperty(t, e, a) {
                    var i = {
                            propType: !1
                        },
                        r = PropertyFactory.getProp,
                        s = e.a;
                    this.a = {
                        r: s.r ? r(t, s.r, 0, degToRads, a) : i,
                        rx: s.rx ? r(t, s.rx, 0, degToRads, a) : i,
                        ry: s.ry ? r(t, s.ry, 0, degToRads, a) : i,
                        sk: s.sk ? r(t, s.sk, 0, degToRads, a) : i,
                        sa: s.sa ? r(t, s.sa, 0, degToRads, a) : i,
                        s: s.s ? r(t, s.s, 1, .01, a) : i,
                        a: s.a ? r(t, s.a, 1, 0, a) : i,
                        o: s.o ? r(t, s.o, 0, .01, a) : i,
                        p: s.p ? r(t, s.p, 1, 0, a) : i,
                        sw: s.sw ? r(t, s.sw, 0, 0, a) : i,
                        sc: s.sc ? r(t, s.sc, 1, 0, a) : i,
                        fc: s.fc ? r(t, s.fc, 1, 0, a) : i,
                        fh: s.fh ? r(t, s.fh, 0, 0, a) : i,
                        fs: s.fs ? r(t, s.fs, 0, .01, a) : i,
                        fb: s.fb ? r(t, s.fb, 0, .01, a) : i,
                        t: s.t ? r(t, s.t, 0, 0, a) : i
                    }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, a), this.s.t = e.s.t
                }

                function LetterProps(t, e, a, i, r, s) {
                    this.o = t, this.sw = e, this.sc = a, this.fc = i, this.m = r, this.p = s, this._mdf = {
                        o: !0,
                        sw: !!e,
                        sc: !!a,
                        fc: !!i,
                        m: !0,
                        p: !0
                    }
                }

                function TextProperty(t, e) {
                    this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                        ascent: 0,
                        boxWidth: this.defaultBoxWidth,
                        f: "",
                        fStyle: "",
                        fWeight: "",
                        fc: "",
                        j: "",
                        justifyOffset: "",
                        l: [],
                        lh: 0,
                        lineWidths: [],
                        ls: "",
                        of: "",
                        s: "",
                        sc: "",
                        sw: 0,
                        t: 0,
                        tr: 0,
                        sz: 0,
                        ps: null,
                        fillColorAnim: !1,
                        strokeColorAnim: !1,
                        strokeWidthAnim: !1,
                        yOffset: 0,
                        finalSize: 0,
                        finalText: [],
                        finalLineHeight: 0,
                        __complete: !1
                    }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                }
                TextAnimatorProperty.prototype.searchProperties = function() {
                    var t, e, a = this._textData.a.length,
                        i = PropertyFactory.getProp;
                    for (t = 0; t < a; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
                    this._textData.p && "m" in this._textData.p ? (this._pathData = {
                        f: i(this._elem, this._textData.p.f, 0, 0, this),
                        l: i(this._elem, this._textData.p.l, 0, 0, this),
                        r: this._textData.p.r,
                        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                    }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
                }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                    if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                        this._isFirstFrame = !1;
                        var a, i, r, s, n, o, l, h, p, c, m, d, f, u, g, y, v, x, k, b = this._moreOptions.alignment.v,
                            E = this._animatorsData,
                            S = this._textData,
                            w = this.mHelper,
                            P = this._renderType,
                            C = this.renderedLetters.length,
                            A = t.l;
                        if (this._hasMaskedPath) {
                            if (k = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                var T, D = k.v;
                                for (this._pathData.r && (D = D.reverse()), n = {
                                    tLength: 0,
                                    segments: []
                                }, s = D._length - 1, y = 0, r = 0; r < s; r += 1) T = bez.buildBezierData(D.v[r], D.v[r + 1], [D.o[r][0] - D.v[r][0], D.o[r][1] - D.v[r][1]], [D.i[r + 1][0] - D.v[r + 1][0], D.i[r + 1][1] - D.v[r + 1][1]]), n.tLength += T.segmentLength, n.segments.push(T), y += T.segmentLength;
                                r = s, k.v.c && (T = bez.buildBezierData(D.v[r], D.v[0], [D.o[r][0] - D.v[r][0], D.o[r][1] - D.v[r][1]], [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]), n.tLength += T.segmentLength, n.segments.push(T), y += T.segmentLength), this._pathData.pi = n
                            }
                            if (n = this._pathData.pi, o = this._pathData.f.v, m = 0, c = 1, h = 0, p = !0, u = n.segments, o < 0 && k.v.c)
                                for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), c = (f = u[m = u.length - 1].points).length - 1; o < 0;) o += f[c].partialLength, (c -= 1) < 0 && (c = (f = u[m -= 1].points).length - 1);
                            d = (f = u[m].points)[c - 1], g = (l = f[c]).partialLength
                        }
                        s = A.length, a = 0, i = 0;
                        var M, _, F, I, B, V = 1.2 * t.finalSize * .714,
                            G = !0;
                        F = E.length;
                        var z, R, L, O, N, H, j, X, q, Y, W, K, U = -1,
                            $ = o,
                            J = m,
                            Z = c,
                            Q = -1,
                            tt = "",
                            et = this.defaultPropsArray;
                        if (2 === t.j || 1 === t.j) {
                            var at = 0,
                                it = 0,
                                rt = 2 === t.j ? -.5 : -1,
                                st = 0,
                                nt = !0;
                            for (r = 0; r < s; r += 1)
                                if (A[r].n) {
                                    for (at && (at += it); st < r;) A[st].animatorJustifyOffset = at, st += 1;
                                    at = 0, nt = !0
                                } else {
                                    for (_ = 0; _ < F; _ += 1)(M = E[_].a).t.propType && (nt && 2 === t.j && (it += M.t.v * rt), (B = E[_].s.getMult(A[r].anIndexes[_], S.a[_].s.totalChars)).length ? at += M.t.v * B[0] * rt : at += M.t.v * B * rt);
                                    nt = !1
                                }
                            for (at && (at += it); st < r;) A[st].animatorJustifyOffset = at, st += 1
                        }
                        for (r = 0; r < s; r += 1) {
                            if (w.reset(), O = 1, A[r].n) a = 0, i += t.yOffset, i += G ? 1 : 0, o = $, G = !1, this._hasMaskedPath && (c = Z, d = (f = u[m = J].points)[c - 1], g = (l = f[c]).partialLength, h = 0), tt = "", W = "", q = "", K = "", et = this.defaultPropsArray;
                            else {
                                if (this._hasMaskedPath) {
                                    if (Q !== A[r].line) {
                                        switch (t.j) {
                                            case 1:
                                                o += y - t.lineWidths[A[r].line];
                                                break;
                                            case 2:
                                                o += (y - t.lineWidths[A[r].line]) / 2
                                        }
                                        Q = A[r].line
                                    }
                                    U !== A[r].ind && (A[U] && (o += A[U].extra), o += A[r].an / 2, U = A[r].ind), o += b[0] * A[r].an * .005;
                                    var ot = 0;
                                    for (_ = 0; _ < F; _ += 1)(M = E[_].a).p.propType && ((B = E[_].s.getMult(A[r].anIndexes[_], S.a[_].s.totalChars)).length ? ot += M.p.v[0] * B[0] : ot += M.p.v[0] * B), M.a.propType && ((B = E[_].s.getMult(A[r].anIndexes[_], S.a[_].s.totalChars)).length ? ot += M.a.v[0] * B[0] : ot += M.a.v[0] * B);
                                    for (p = !0; p;) h + g >= o + ot || !f ? (v = (o + ot - h) / l.partialLength, R = d.point[0] + (l.point[0] - d.point[0]) * v, L = d.point[1] + (l.point[1] - d.point[1]) * v, w.translate(-b[0] * A[r].an * .005, -b[1] * V * .01), p = !1) : f && (h += l.partialLength, (c += 1) >= f.length && (c = 0, u[m += 1] ? f = u[m].points : k.v.c ? (c = 0, f = u[m = 0].points) : (h -= l.partialLength, f = null)), f && (d = l, g = (l = f[c]).partialLength));
                                    z = A[r].an / 2 - A[r].add, w.translate(-z, 0, 0)
                                } else z = A[r].an / 2 - A[r].add, w.translate(-z, 0, 0), w.translate(-b[0] * A[r].an * .005, -b[1] * V * .01, 0);
                                for (_ = 0; _ < F; _ += 1)(M = E[_].a).t.propType && (B = E[_].s.getMult(A[r].anIndexes[_], S.a[_].s.totalChars), 0 === a && 0 === t.j || (this._hasMaskedPath ? B.length ? o += M.t.v * B[0] : o += M.t.v * B : B.length ? a += M.t.v * B[0] : a += M.t.v * B));
                                for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (N = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]), _ = 0; _ < F; _ += 1)(M = E[_].a).a.propType && ((B = E[_].s.getMult(A[r].anIndexes[_], S.a[_].s.totalChars)).length ? w.translate(-M.a.v[0] * B[0], -M.a.v[1] * B[1], M.a.v[2] * B[2]) : w.translate(-M.a.v[0] * B, -M.a.v[1] * B, M.a.v[2] * B));
                                for (_ = 0; _ < F; _ += 1)(M = E[_].a).s.propType && ((B = E[_].s.getMult(A[r].anIndexes[_], S.a[_].s.totalChars)).length ? w.scale(1 + (M.s.v[0] - 1) * B[0], 1 + (M.s.v[1] - 1) * B[1], 1) : w.scale(1 + (M.s.v[0] - 1) * B, 1 + (M.s.v[1] - 1) * B, 1));
                                for (_ = 0; _ < F; _ += 1) {
                                    if (M = E[_].a, B = E[_].s.getMult(A[r].anIndexes[_], S.a[_].s.totalChars), M.sk.propType && (B.length ? w.skewFromAxis(-M.sk.v * B[0], M.sa.v * B[1]) : w.skewFromAxis(-M.sk.v * B, M.sa.v * B)), M.r.propType && (B.length ? w.rotateZ(-M.r.v * B[2]) : w.rotateZ(-M.r.v * B)), M.ry.propType && (B.length ? w.rotateY(M.ry.v * B[1]) : w.rotateY(M.ry.v * B)), M.rx.propType && (B.length ? w.rotateX(M.rx.v * B[0]) : w.rotateX(M.rx.v * B)), M.o.propType && (B.length ? O += (M.o.v * B[0] - O) * B[0] : O += (M.o.v * B - O) * B), t.strokeWidthAnim && M.sw.propType && (B.length ? H += M.sw.v * B[0] : H += M.sw.v * B), t.strokeColorAnim && M.sc.propType)
                                        for (X = 0; X < 3; X += 1) B.length ? N[X] += (M.sc.v[X] - N[X]) * B[0] : N[X] += (M.sc.v[X] - N[X]) * B;
                                    if (t.fillColorAnim && t.fc) {
                                        if (M.fc.propType)
                                            for (X = 0; X < 3; X += 1) B.length ? j[X] += (M.fc.v[X] - j[X]) * B[0] : j[X] += (M.fc.v[X] - j[X]) * B;
                                        M.fh.propType && (j = B.length ? addHueToRGB(j, M.fh.v * B[0]) : addHueToRGB(j, M.fh.v * B)), M.fs.propType && (j = B.length ? addSaturationToRGB(j, M.fs.v * B[0]) : addSaturationToRGB(j, M.fs.v * B)), M.fb.propType && (j = B.length ? addBrightnessToRGB(j, M.fb.v * B[0]) : addBrightnessToRGB(j, M.fb.v * B))
                                    }
                                }
                                for (_ = 0; _ < F; _ += 1)(M = E[_].a).p.propType && (B = E[_].s.getMult(A[r].anIndexes[_], S.a[_].s.totalChars), this._hasMaskedPath ? B.length ? w.translate(0, M.p.v[1] * B[0], -M.p.v[2] * B[1]) : w.translate(0, M.p.v[1] * B, -M.p.v[2] * B) : B.length ? w.translate(M.p.v[0] * B[0], M.p.v[1] * B[1], -M.p.v[2] * B[2]) : w.translate(M.p.v[0] * B, M.p.v[1] * B, -M.p.v[2] * B));
                                if (t.strokeWidthAnim && (q = H < 0 ? 0 : H), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * N[0]) + "," + Math.round(255 * N[1]) + "," + Math.round(255 * N[2]) + ")"), t.fillColorAnim && t.fc && (W = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), this._hasMaskedPath) {
                                    if (w.translate(0, -t.ls), w.translate(0, b[1] * V * .01 + i, 0), S.p.p) {
                                        x = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0]);
                                        var lt = 180 * Math.atan(x) / Math.PI;
                                        l.point[0] < d.point[0] && (lt += 180), w.rotate(-lt * Math.PI / 180)
                                    }
                                    w.translate(R, L, 0), o -= b[0] * A[r].an * .005, A[r + 1] && U !== A[r + 1].ind && (o += A[r].an / 2, o += .001 * t.tr * t.finalSize)
                                } else {
                                    switch (w.translate(a, i, 0), t.ps && w.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                        case 1:
                                            w.translate(A[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[A[r].line]), 0, 0);
                                            break;
                                        case 2:
                                            w.translate(A[r].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[A[r].line]) / 2, 0, 0)
                                    }
                                    w.translate(0, -t.ls), w.translate(z, 0, 0), w.translate(b[0] * A[r].an * .005, b[1] * V * .01, 0), a += A[r].l + .001 * t.tr * t.finalSize
                                }
                                "html" === P ? tt = w.toCSS() : "svg" === P ? tt = w.to2dCSS() : et = [w.props[0], w.props[1], w.props[2], w.props[3], w.props[4], w.props[5], w.props[6], w.props[7], w.props[8], w.props[9], w.props[10], w.props[11], w.props[12], w.props[13], w.props[14], w.props[15]], K = O
                            }
                            C <= r ? (I = new LetterProps(K, q, Y, W, tt, et), this.renderedLetters.push(I), C += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[r], this.lettersChangedFlag = I.update(K, q, Y, W, tt, et) || this.lettersChangedFlag)
                        }
                    }
                }, TextAnimatorProperty.prototype.getValue = function() {
                    this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, a, i, r, s) {
                    this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                    var n = !1;
                    return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== a && (this.sc = a, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== r && (this.m = r, this._mdf.m = !0, n = !0), !s.length || this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13] || (this.p = s, this._mdf.p = !0, n = !0), n
                }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
                    for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
                    return t
                }, TextProperty.prototype.setCurrentData = function(t) {
                    t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                }, TextProperty.prototype.searchProperty = function() {
                    return this.searchKeyframes()
                }, TextProperty.prototype.searchKeyframes = function() {
                    return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                }, TextProperty.prototype.addEffect = function(t) {
                    this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.getValue = function(t) {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                        var e = this.currentData,
                            a = this.keysIndex;
                        if (this.lock) this.setCurrentData(this.currentData);
                        else {
                            var i;
                            this.lock = !0, this._mdf = !1;
                            var r = this.effectsSequence.length,
                                s = t || this.data.d.k[this.keysIndex].s;
                            for (i = 0; i < r; i += 1) s = a !== this.keysIndex ? this.effectsSequence[i](s, s.t) : this.effectsSequence[i](this.currentData, s.t);
                            e !== s && this.setCurrentData(s), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    }
                }, TextProperty.prototype.getKeyframeValue = function() {
                    for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, a = 0, i = t.length; a <= i - 1 && !(a === i - 1 || t[a + 1].t > e);) a += 1;
                    return this.keysIndex !== a && (this.keysIndex = a), this.data.d.k[this.keysIndex].s
                }, TextProperty.prototype.buildFinalText = function(t) {
                    for (var e, a = FontManager.getCombinedCharacterCodes(), i = [], r = 0, s = t.length; r < s;) e = t.charCodeAt(r), -1 !== a.indexOf(e) ? i[i.length - 1] += t.charAt(r) : e >= 55296 && e <= 56319 && (e = t.charCodeAt(r + 1)) >= 56320 && e <= 57343 ? (i.push(t.substr(r, 2)), r += 1) : i.push(t.charAt(r)), r += 1;
                    return i
                }, TextProperty.prototype.completeTextData = function(t) {
                    t.__complete = !0;
                    var e, a, i, r, s, n, o, l = this.elem.globalData.fontManager,
                        h = this.data,
                        p = [],
                        c = 0,
                        m = h.m.g,
                        d = 0,
                        f = 0,
                        u = 0,
                        g = [],
                        y = 0,
                        v = 0,
                        x = l.getFontByName(t.f),
                        k = 0,
                        b = getFontProperties(x);
                    t.fWeight = b.weight, t.fStyle = b.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), a = t.finalText.length, t.finalLineHeight = t.lh;
                    var E, S = t.tr / 1e3 * t.finalSize;
                    if (t.sz)
                        for (var w, P, C = !0, A = t.sz[0], T = t.sz[1]; C;) {
                            w = 0, y = 0, a = (P = this.buildFinalText(t.t)).length, S = t.tr / 1e3 * t.finalSize;
                            var D = -1;
                            for (e = 0; e < a; e += 1) E = P[e].charCodeAt(0), i = !1, " " === P[e] ? D = e : 13 !== E && 3 !== E || (y = 0, i = !0, w += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(P[e], x.fStyle, x.fFamily), k = i ? 0 : o.w * t.finalSize / 100) : k = l.measureText(P[e], t.f, t.finalSize), y + k > A && " " !== P[e] ? (-1 === D ? a += 1 : e = D, w += t.finalLineHeight || 1.2 * t.finalSize, P.splice(e, D === e ? 1 : 0, "\r"), D = -1, y = 0) : (y += k, y += S);
                            w += x.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && T < w ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = P, a = t.finalText.length, C = !1)
                        }
                    y = -S, k = 0;
                    var M, _ = 0;
                    for (e = 0; e < a; e += 1)
                        if (i = !1, 13 === (E = (M = t.finalText[e]).charCodeAt(0)) || 3 === E ? (_ = 0, g.push(y), v = y > v ? y : v, y = -2 * S, r = "", i = !0, u += 1) : r = M, l.chars ? (o = l.getCharData(M, x.fStyle, l.getFontByName(t.f).fFamily), k = i ? 0 : o.w * t.finalSize / 100) : k = l.measureText(r, t.f, t.finalSize), " " === M ? _ += k + S : (y += k + S + _, _ = 0), p.push({
                            l: k,
                            an: k,
                            add: d,
                            n: i,
                            anIndexes: [],
                            val: r,
                            line: u,
                            animatorJustifyOffset: 0
                        }), 2 == m) {
                            if (d += k, "" === r || " " === r || e === a - 1) {
                                for ("" !== r && " " !== r || (d -= k); f <= e;) p[f].an = d, p[f].ind = c, p[f].extra = k, f += 1;
                                c += 1, d = 0
                            }
                        } else if (3 == m) {
                        if (d += k, "" === r || e === a - 1) {
                            for ("" === r && (d -= k); f <= e;) p[f].an = d, p[f].ind = c, p[f].extra = k, f += 1;
                            d = 0, c += 1
                        }
                    } else p[c].ind = c, p[c].extra = 0, c += 1; if (t.l = p, v = y > v ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                    else switch (t.boxWidth = v, t.j) {
                        case 1:
                            t.justifyOffset = -t.boxWidth;
                            break;
                        case 2:
                            t.justifyOffset = -t.boxWidth / 2;
                            break;
                        default:
                            t.justifyOffset = 0
                    }
                    t.lineWidths = g;
                    var F, I, B, V, G = h.a;
                    n = G.length;
                    var z = [];
                    for (s = 0; s < n; s += 1) {
                        for ((F = G[s]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), V = 0, B = F.s.b, e = 0; e < a; e += 1)(I = p[e]).anIndexes[s] = V, (1 == B && "" !== I.val || 2 == B && "" !== I.val && " " !== I.val || 3 == B && (I.n || " " == I.val || e == a - 1) || 4 == B && (I.n || e == a - 1)) && (1 === F.s.rn && z.push(V), V += 1);
                        h.a[s].s.totalChars = V;
                        var R, L = -1;
                        if (1 === F.s.rn)
                            for (e = 0; e < a; e += 1) L != (I = p[e]).anIndexes[s] && (L = I.anIndexes[s], R = z.splice(Math.floor(Math.random() * z.length), 1)[0]), I.anIndexes[s] = R
                    }
                    t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = x.ascent * t.finalSize / 100
                }, TextProperty.prototype.updateDocumentData = function(t, e) {
                    e = void 0 === e ? this.keysIndex : e;
                    var a = this.copyData({}, this.data.d.k[e].s);
                    a = this.copyData(a, t), this.data.d.k[e].s = a, this.recalculate(e), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.recalculate = function(t) {
                    var e = this.data.d.k[t].s;
                    e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                }, TextProperty.prototype.canResizeFont = function(t) {
                    this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.setMinimumFontSize = function(t) {
                    this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                };
                var TextSelectorProp = function() {
                        var t = Math.max,
                            e = Math.min,
                            a = Math.floor;

                        function i(t, e) {
                            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                                k: 0
                            }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                                v: 100
                            }, this.o = PropertyFactory.getProp(t, e.o || {
                                k: 0
                            }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                                k: 0
                            }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                                k: 0
                            }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                        }
                        return i.prototype = {
                            getMult: function(i) {
                                this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                var r = 0,
                                    s = 0,
                                    n = 1,
                                    o = 1;
                                this.ne.v > 0 ? r = this.ne.v / 100 : s = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                                var l = BezierFactory.getBezierEasing(r, s, n, o).get,
                                    h = 0,
                                    p = this.finalS,
                                    c = this.finalE,
                                    m = this.data.sh;
                                if (2 === m) h = l(h = c === p ? i >= c ? 1 : 0 : t(0, e(.5 / (c - p) + (i - p) / (c - p), 1)));
                                else if (3 === m) h = l(h = c === p ? i >= c ? 0 : 1 : 1 - t(0, e(.5 / (c - p) + (i - p) / (c - p), 1)));
                                else if (4 === m) c === p ? h = 0 : (h = t(0, e(.5 / (c - p) + (i - p) / (c - p), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h);
                                else if (5 === m) {
                                    if (c === p) h = 0;
                                    else {
                                        var d = c - p,
                                            f = -d / 2 + (i = e(t(0, i + .5 - p), c - p)),
                                            u = d / 2;
                                        h = Math.sqrt(1 - f * f / (u * u))
                                    }
                                    h = l(h)
                                } else 6 === m ? (c === p ? h = 0 : (i = e(t(0, i + .5 - p), c - p), h = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (c - p))) / 2), h = l(h)) : (i >= a(p) && (h = t(0, e(i - p < 0 ? e(c, 1) - (p - i) : c - i, 1))), h = l(h));
                                return h * this.a.v
                            },
                            getValue: function(t) {
                                this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                                var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                    a = this.o.v / e,
                                    i = this.s.v / e + a,
                                    r = this.e.v / e + a;
                                if (i > r) {
                                    var s = i;
                                    i = r, r = s
                                }
                                this.finalS = i, this.finalE = r
                            }
                        }, extendPrototype([DynamicPropertyContainer], i), {
                            getTextSelectorProp: function(t, e, a) {
                                return new i(t, e, a)
                            }
                        }
                    }(),
                    poolFactory = function(t, e, a) {
                        var i = 0,
                            r = t,
                            s = createSizedArray(r);
                        return {
                            newElement: function() {
                                return i ? s[i -= 1] : e()
                            },
                            release: function(t) {
                                i === r && (s = pooling.double(s), r *= 2), a && a(t), s[i] = t, i += 1
                            }
                        }
                    },
                    pooling = {
                        double: function(t) {
                            return t.concat(createSizedArray(t.length))
                        }
                    },
                    pointPool = poolFactory(8, (function() {
                        return createTypedArray("float32", 2)
                    })),
                    shapePool = (factory = poolFactory(4, (function() {
                        return new ShapePath
                    }), (function(t) {
                        var e, a = t._length;
                        for (e = 0; e < a; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                        t._length = 0, t.c = !1
                    })), factory.clone = function(t) {
                        var e, a = factory.newElement(),
                            i = void 0 === t._length ? t.v.length : t._length;
                        for (a.setLength(i), a.c = t.c, e = 0; e < i; e += 1) a.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                        return a
                    }, factory),
                    factory, shapeCollectionPool = function() {
                        var t = {
                                newShapeCollection: function() {
                                    var t;
                                    t = e ? i[e -= 1] : new ShapeCollection;
                                    return t
                                },
                                release: function(t) {
                                    var r, s = t._length;
                                    for (r = 0; r < s; r += 1) shapePool.release(t.shapes[r]);
                                    t._length = 0, e === a && (i = pooling.double(i), a *= 2);
                                    i[e] = t, e += 1
                                }
                            },
                            e = 0,
                            a = 4,
                            i = createSizedArray(a);
                        return t
                    }(),
                    segmentsLengthPool = poolFactory(8, (function() {
                        return {
                            lengths: [],
                            totalLength: 0
                        }
                    }), (function(t) {
                        var e, a = t.lengths.length;
                        for (e = 0; e < a; e += 1) bezierLengthPool.release(t.lengths[e]);
                        t.lengths.length = 0
                    })),
                    bezierLengthPool = poolFactory(8, (function() {
                        return {
                            addedLength: 0,
                            percents: createTypedArray("float32", defaultCurveSegments),
                            lengths: createTypedArray("float32", defaultCurveSegments)
                        }
                    })),
                    markerParser = function() {
                        function t(t) {
                            for (var e, a = t.split("\r\n"), i = {}, r = 0, s = 0; s < a.length; s += 1) 2 === (e = a[s].split(":")).length && (i[e[0]] = e[1].trim(), r += 1);
                            if (0 === r) throw new Error;
                            return i
                        }
                        return function(e) {
                            for (var a = [], i = 0; i < e.length; i += 1) {
                                var r = e[i],
                                    s = {
                                        time: r.tm,
                                        duration: r.dr
                                    };
                                try {
                                    s.payload = JSON.parse(e[i].cm)
                                } catch (a) {
                                    try {
                                        s.payload = t(e[i].cm)
                                    } catch (t) {
                                        s.payload = {
                                            name: e[i]
                                        }
                                    }
                                }
                                a.push(s)
                            }
                            return a
                        }
                    }();

                function BaseRenderer() {}

                function SVGRenderer(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                    var a = "";
                    if (e && e.title) {
                        var i = createNS("title"),
                            r = createElementID();
                        i.setAttribute("id", r), i.textContent = e.title, this.svgElement.appendChild(i), a += r
                    }
                    if (e && e.description) {
                        var s = createNS("desc"),
                            n = createElementID();
                        s.setAttribute("id", n), s.textContent = e.description, this.svgElement.appendChild(s), a += " " + n
                    }
                    a && this.svgElement.setAttribute("aria-labelledby", a);
                    var o = createNS("defs");
                    this.svgElement.appendChild(o);
                    var l = createNS("g");
                    this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        progressiveLoad: e && e.progressiveLoad || !1,
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        viewBoxOnly: e && e.viewBoxOnly || !1,
                        viewBoxSize: e && e.viewBoxSize || !1,
                        className: e && e.className || "",
                        id: e && e.id || "",
                        focusable: e && e.focusable,
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "100%",
                            height: e && e.filterSize && e.filterSize.height || "100%",
                            x: e && e.filterSize && e.filterSize.x || "0%",
                            y: e && e.filterSize && e.filterSize.y || "0%"
                        }
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        defs: o,
                        renderConfig: this.renderConfig
                    }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                }

                function CanvasRenderer(t, e) {
                    this.animationItem = t, this.renderConfig = {
                        clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                        context: e && e.context || null,
                        progressiveLoad: e && e.progressiveLoad || !1,
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        className: e && e.className || "",
                        id: e && e.id || ""
                    }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                        frameNum: -1,
                        _mdf: !1,
                        renderConfig: this.renderConfig,
                        currentGlobalAlpha: -1
                    }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                }

                function HybridRenderer(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                        className: e && e.className || "",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "400%",
                            height: e && e.filterSize && e.filterSize.height || "400%",
                            x: e && e.filterSize && e.filterSize.x || "-100%",
                            y: e && e.filterSize && e.filterSize.y || "-100%"
                        }
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        renderConfig: this.renderConfig
                    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                }

                function MaskElement(t, e, a) {
                    this.data = t, this.element = e, this.globalData = a, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                    var i, r, s = this.globalData.defs,
                        n = this.masksProperties ? this.masksProperties.length : 0;
                    this.viewData = createSizedArray(n), this.solidPath = "";
                    var o, l, h, p, c, m, d = this.masksProperties,
                        f = 0,
                        u = [],
                        g = createElementID(),
                        y = "clipPath",
                        v = "clip-path";
                    for (i = 0; i < n; i += 1)
                        if (("a" !== d[i].mode && "n" !== d[i].mode || d[i].inv || 100 !== d[i].o.k || d[i].o.x) && (y = "mask", v = "mask"), "s" !== d[i].mode && "i" !== d[i].mode || 0 !== f ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), u.push(h)), r = createNS("path"), "n" === d[i].mode) this.viewData[i] = {
                            op: PropertyFactory.getProp(this.element, d[i].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, d[i], 3),
                            elem: r,
                            lastPath: ""
                        }, s.appendChild(r);
                        else {
                            var x;
                            if (f += 1, r.setAttribute("fill", "s" === d[i].mode ? "#000000" : "#ffffff"), r.setAttribute("clip-rule", "nonzero"), 0 !== d[i].x.k ? (y = "mask", v = "mask", m = PropertyFactory.getProp(this.element, d[i].x, 0, null, this.element), x = createElementID(), (p = createNS("filter")).setAttribute("id", x), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), p.appendChild(c), s.appendChild(p), r.setAttribute("stroke", "s" === d[i].mode ? "#000000" : "#ffffff")) : (c = null, m = null), this.storedData[i] = {
                                elem: r,
                                x: m,
                                expan: c,
                                lastPath: "",
                                lastOperator: "",
                                filterId: x,
                                lastRadius: 0
                            }, "i" === d[i].mode) {
                                l = u.length;
                                var k = createNS("g");
                                for (o = 0; o < l; o += 1) k.appendChild(u[o]);
                                var b = createNS("mask");
                                b.setAttribute("mask-type", "alpha"), b.setAttribute("id", g + "_" + f), b.appendChild(r), s.appendChild(b), k.setAttribute("mask", "url(" + locationHref + "#" + g + "_" + f + ")"), u.length = 0, u.push(k)
                            } else u.push(r);
                            d[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                                elem: r,
                                lastPath: "",
                                op: PropertyFactory.getProp(this.element, d[i].o, 0, .01, this.element),
                                prop: ShapePropertyFactory.getShapeProp(this.element, d[i], 3),
                                invRect: h
                            }, this.viewData[i].prop.k || this.drawPath(d[i], this.viewData[i].prop.v, this.viewData[i])
                        }
                    for (this.maskElement = createNS(y), n = u.length, i = 0; i < n; i += 1) this.maskElement.appendChild(u[i]);
                    f > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + g + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                }

                function HierarchyElement() {}

                function FrameElement() {}

                function TransformElement() {}

                function RenderableElement() {}

                function RenderableDOMElement() {}

                function ProcessedElement(t, e) {
                    this.elem = t, this.pos = e
                }

                function SVGStyleData(t, e) {
                    this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
                }

                function SVGShapeData(t, e, a) {
                    this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = a, this.lvl = e, this._isAnimated = !!a.k;
                    for (var i = 0, r = t.length; i < r;) {
                        if (t[i].mProps.dynamicProperties.length) {
                            this._isAnimated = !0;
                            break
                        }
                        i += 1
                    }
                }

                function SVGTransformData(t, e, a) {
                    this.transform = {
                        mProps: t,
                        op: e,
                        container: a
                    }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                }

                function SVGStrokeStyleData(t, e, a) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = a, this._isAnimated = !!this._isAnimated
                }

                function SVGFillStyleData(t, e, a) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = a
                }

                function SVGGradientFillStyleData(t, e, a) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, a)
                }

                function SVGGradientStrokeStyleData(t, e, a) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, a), this._isAnimated = !!this._isAnimated
                }

                function ShapeGroupData() {
                    this.it = [], this.prevViewData = [], this.gr = createNS("g")
                }
                BaseRenderer.prototype.checkLayers = function(t) {
                    var e, a, i = this.layers.length;
                    for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1) this.elements[e] || (a = this.layers[e]).ip - a.st <= t - this.layers[e].st && a.op - a.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                    this.checkPendingElements()
                }, BaseRenderer.prototype.createItem = function(t) {
                    switch (t.ty) {
                        case 2:
                            return this.createImage(t);
                        case 0:
                            return this.createComp(t);
                        case 1:
                            return this.createSolid(t);
                        case 3:
                            return this.createNull(t);
                        case 4:
                            return this.createShape(t);
                        case 5:
                            return this.createText(t);
                        case 6:
                            return this.createAudio(t);
                        case 13:
                            return this.createCamera(t);
                        case 15:
                            return this.createFootage(t);
                        default:
                            return this.createNull(t)
                    }
                }, BaseRenderer.prototype.createCamera = function() {
                    throw new Error("You're using a 3d camera. Try the html renderer.")
                }, BaseRenderer.prototype.createAudio = function(t) {
                    return new AudioElement(t, this.globalData, this)
                }, BaseRenderer.prototype.createFootage = function(t) {
                    return new FootageElement(t, this.globalData, this)
                }, BaseRenderer.prototype.buildAllItems = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.buildItem(t);
                    this.checkPendingElements()
                }, BaseRenderer.prototype.includeLayers = function(t) {
                    var e;
                    this.completeLayers = !1;
                    var a, i = t.length,
                        r = this.layers.length;
                    for (e = 0; e < i; e += 1)
                        for (a = 0; a < r;) {
                            if (this.layers[a].id === t[e].id) {
                                this.layers[a] = t[e];
                                break
                            }
                            a += 1
                        }
                }, BaseRenderer.prototype.setProjectInterface = function(t) {
                    this.globalData.projectInterface = t
                }, BaseRenderer.prototype.initItems = function() {
                    this.globalData.progressiveLoad || this.buildAllItems()
                }, BaseRenderer.prototype.buildElementParenting = function(t, e, a) {
                    for (var i = this.elements, r = this.layers, s = 0, n = r.length; s < n;) r[s].ind == e && (i[s] && !0 !== i[s] ? (a.push(i[s]), i[s].setAsParent(), void 0 !== r[s].parent ? this.buildElementParenting(t, r[s].parent, a) : t.setHierarchy(a)) : (this.buildItem(s), this.addPendingElement(t))), s += 1
                }, BaseRenderer.prototype.addPendingElement = function(t) {
                    this.pendingElements.push(t)
                }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                    var e, a = t.length;
                    for (e = 0; e < a; e += 1)
                        if (t[e].xt) {
                            var i = this.createComp(t[e]);
                            i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                        }
                }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                    this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                        w: t.w,
                        h: t.h
                    }
                }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
                    return new NullElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createShape = function(t) {
                    return new SVGShapeElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createText = function(t) {
                    return new SVGTextLottieElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createImage = function(t) {
                    return new IImageElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createComp = function(t) {
                    return new SVGCompElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createSolid = function(t) {
                    return new ISolidElement(t, this.globalData, this)
                }, SVGRenderer.prototype.configAnimation = function(t) {
                    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                    var e = this.globalData.defs;
                    this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                    var a = createNS("clipPath"),
                        i = createNS("rect");
                    i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
                    var r = createElementID();
                    a.setAttribute("id", r), a.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + r + ")"), e.appendChild(a), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
                }, SVGRenderer.prototype.destroy = function() {
                    var t;
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                    var e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 !== this.layers[t].ty) {
                        e[t] = !0;
                        var a = this.createItem(this.layers[t]);
                        e[t] = a, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(a), a.initExpressions()), this.appendElementInPos(a, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? a.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(a)))
                    }
                }, SVGRenderer.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) {
                        var t = this.pendingElements.pop();
                        if (t.checkParenting(), t.data.tt)
                            for (var e = 0, a = this.elements.length; e < a;) {
                                if (this.elements[e] === t) {
                                    t.setMatte(this.elements[e - 1].layerId);
                                    break
                                }
                                e += 1
                            }
                    }
                }, SVGRenderer.prototype.renderFrame = function(t) {
                    if (this.renderedFrame !== t && !this.destroyed) {
                        var e;
                        null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                        var a = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), e = a - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                        if (this.globalData._mdf)
                            for (e = 0; e < a; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                    }
                }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
                    var a = t.getBaseElement();
                    if (a) {
                        for (var i, r = 0; r < e;) this.elements[r] && !0 !== this.elements[r] && this.elements[r].getBaseElement() && (i = this.elements[r].getBaseElement()), r += 1;
                        i ? this.layerElement.insertBefore(a, i) : this.layerElement.appendChild(a)
                    }
                }, SVGRenderer.prototype.hide = function() {
                    this.layerElement.style.display = "none"
                }, SVGRenderer.prototype.show = function() {
                    this.layerElement.style.display = "block"
                }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
                    return new CVShapeElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createText = function(t) {
                    return new CVTextElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createImage = function(t) {
                    return new CVImageElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createComp = function(t) {
                    return new CVCompElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createSolid = function(t) {
                    return new CVSolidElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
                    if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                        if (this.renderConfig.clearCanvas) {
                            this.transformMat.cloneFromProps(t);
                            var e = this.contextData.cTr.props;
                            this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                            var a = this.contextData.cTr.props;
                            this.canvasContext.setTransform(a[0], a[1], a[4], a[5], a[12], a[13])
                        } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
                }, CanvasRenderer.prototype.ctxOpacity = function(t) {
                    if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
                    this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
                }, CanvasRenderer.prototype.reset = function() {
                    this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
                }, CanvasRenderer.prototype.save = function(t) {
                    if (this.renderConfig.clearCanvas) {
                        t && this.canvasContext.save();
                        var e, a = this.contextData.cTr.props;
                        this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                        var i = this.contextData.saved[this.contextData.cArrPos];
                        for (e = 0; e < 16; e += 1) i[e] = a[e];
                        this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
                    } else this.canvasContext.save()
                }, CanvasRenderer.prototype.restore = function(t) {
                    if (this.renderConfig.clearCanvas) {
                        t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                        var e, a = this.contextData.saved[this.contextData.cArrPos],
                            i = this.contextData.cTr.props;
                        for (e = 0; e < 16; e += 1) i[e] = a[e];
                        this.canvasContext.setTransform(a[0], a[1], a[4], a[5], a[12], a[13]), a = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = a, this.globalData.currentGlobalAlpha !== a && (this.canvasContext.globalAlpha = a, this.globalData.currentGlobalAlpha = a)
                    } else this.canvasContext.restore()
                }, CanvasRenderer.prototype.configAnimation = function(t) {
                    if (this.animationItem.wrapper) {
                        this.animationItem.container = createTag("canvas");
                        var e = this.animationItem.container.style;
                        e.width = "100%", e.height = "100%";
                        var a = "0px 0px 0px";
                        e.transformOrigin = a, e.mozTransformOrigin = a, e.webkitTransformOrigin = a, e["-webkit-transform"] = a, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                    } else this.canvasContext = this.renderConfig.context;
                    this.data = t, this.layers = t.layers, this.transformCanvas = {
                        w: t.w,
                        h: t.h,
                        sx: 0,
                        sy: 0,
                        tx: 0,
                        ty: 0
                    }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
                }, CanvasRenderer.prototype.updateContainerSize = function() {
                    var t, e, a, i;
                    if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                        var r = this.renderConfig.preserveAspectRatio.split(" "),
                            s = r[1] || "meet",
                            n = r[0] || "xMidYMid",
                            o = n.substr(0, 4),
                            l = n.substr(4);
                        a = t / e, (i = this.transformCanvas.w / this.transformCanvas.h) > a && "meet" === s || i < a && "slice" === s ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (i < a && "meet" === s || i > a && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (i < a && "meet" === s || i > a && "slice" === s) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === l && (i > a && "meet" === s || i < a && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (i > a && "meet" === s || i < a && "slice" === s) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                    } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                }, CanvasRenderer.prototype.destroy = function() {
                    var t;
                    for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                    this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                }, CanvasRenderer.prototype.renderFrame = function(t, e) {
                    if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                        var a;
                        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                        var i = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), a = 0; a < i; a += 1)(this.completeLayers || this.elements[a]) && this.elements[a].prepareFrame(t - this.layers[a].st);
                        if (this.globalData._mdf) {
                            for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), a = i - 1; a >= 0; a -= 1)(this.completeLayers || this.elements[a]) && this.elements[a].renderFrame();
                            !0 !== this.renderConfig.clearCanvas && this.restore()
                        }
                    }
                }, CanvasRenderer.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 !== this.layers[t].ty) {
                        var a = this.createItem(this.layers[t], this, this.globalData);
                        e[t] = a, a.initExpressions()
                    }
                }, CanvasRenderer.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) {
                        this.pendingElements.pop().checkParenting()
                    }
                }, CanvasRenderer.prototype.hide = function() {
                    this.animationItem.container.style.display = "none"
                }, CanvasRenderer.prototype.show = function() {
                    this.animationItem.container.style.display = "block"
                }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) {
                        this.pendingElements.pop().checkParenting()
                    }
                }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
                    var a = t.getBaseElement();
                    if (a) {
                        var i = this.layers[e];
                        if (i.ddd && this.supports3d) this.addTo3dContainer(a, e);
                        else if (this.threeDElements) this.addTo3dContainer(a, e);
                        else {
                            for (var r, s, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (s = this.elements[n], r = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : s.getBaseElement()) || r), n += 1;
                            r ? i.ddd && this.supports3d || this.layerElement.insertBefore(a, r) : i.ddd && this.supports3d || this.layerElement.appendChild(a)
                        }
                    }
                }, HybridRenderer.prototype.createShape = function(t) {
                    return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createText = function(t) {
                    return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createCamera = function(t) {
                    return this.camera = new HCameraElement(t, this.globalData, this), this.camera
                }, HybridRenderer.prototype.createImage = function(t) {
                    return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createComp = function(t) {
                    return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createSolid = function(t) {
                    return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
                    for (var e = 0, a = this.threeDElements.length; e < a;) {
                        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                        e += 1
                    }
                    return null
                }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
                    var a, i, r = createTag("div");
                    styleDiv(r);
                    var s = createTag("div");
                    if (styleDiv(s), "3d" === e) {
                        (a = r.style).width = this.globalData.compSize.w + "px", a.height = this.globalData.compSize.h + "px";
                        a.webkitTransformOrigin = "50% 50%", a.mozTransformOrigin = "50% 50%", a.transformOrigin = "50% 50%";
                        var n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        (i = s.style).transform = n, i.webkitTransform = n
                    }
                    r.appendChild(s);
                    var o = {
                        container: s,
                        perspectiveElem: r,
                        startPos: t,
                        endPos: t,
                        type: e
                    };
                    return this.threeDElements.push(o), o
                }, HybridRenderer.prototype.build3dContainers = function() {
                    var t, e, a = this.layers.length,
                        i = "";
                    for (t = 0; t < a; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
                    for (t = (a = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
                }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
                    for (var a = 0, i = this.threeDElements.length; a < i;) {
                        if (e <= this.threeDElements[a].endPos) {
                            for (var r, s = this.threeDElements[a].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (r = this.elements[s].getBaseElement()), s += 1;
                            r ? this.threeDElements[a].container.insertBefore(t, r) : this.threeDElements[a].container.appendChild(t);
                            break
                        }
                        a += 1
                    }
                }, HybridRenderer.prototype.configAnimation = function(t) {
                    var e = createTag("div"),
                        a = this.animationItem.wrapper,
                        i = e.style;
                    i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), a.appendChild(e), i.overflow = "hidden";
                    var r = createNS("svg");
                    r.setAttribute("width", "1"), r.setAttribute("height", "1"), styleDiv(r), this.resizerElem.appendChild(r);
                    var s = createNS("defs");
                    r.appendChild(s), this.data = t, this.setupGlobalData(t, r), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                }, HybridRenderer.prototype.destroy = function() {
                    var t;
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                    var e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t += 1) this.elements[t].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, HybridRenderer.prototype.updateContainerSize = function() {
                    var t, e, a, i, r = this.animationItem.wrapper.offsetWidth,
                        s = this.animationItem.wrapper.offsetHeight,
                        n = r / s;
                    this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = r / this.globalData.compSize.w, e = r / this.globalData.compSize.w, a = 0, i = (s - this.globalData.compSize.h * (r / this.globalData.compSize.w)) / 2) : (t = s / this.globalData.compSize.h, e = s / this.globalData.compSize.h, a = (r - this.globalData.compSize.w * (s / this.globalData.compSize.h)) / 2, i = 0);
                    var o = this.resizerElem.style;
                    o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + a + "," + i + ",0,1)", o.transform = o.webkitTransform
                }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
                    this.resizerElem.style.display = "none"
                }, HybridRenderer.prototype.show = function() {
                    this.resizerElem.style.display = "block"
                }, HybridRenderer.prototype.initItems = function() {
                    if (this.buildAllItems(), this.camera) this.camera.setup();
                    else {
                        var t, e = this.globalData.compSize.w,
                            a = this.globalData.compSize.h,
                            i = this.threeDElements.length;
                        for (t = 0; t < i; t += 1) {
                            var r = this.threeDElements[t].perspectiveElem.style;
                            r.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(a, 2)) + "px", r.perspective = r.webkitPerspective
                        }
                    }
                }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
                    var e, a = t.length,
                        i = createTag("div");
                    for (e = 0; e < a; e += 1)
                        if (t[e].xt) {
                            var r = this.createComp(t[e], i, this.globalData.comp, null);
                            r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
                        }
                }, MaskElement.prototype.getMaskProperty = function(t) {
                    return this.viewData[t].prop
                }, MaskElement.prototype.renderFrame = function(t) {
                    var e, a = this.element.finalTransform.mat,
                        i = this.masksProperties.length;
                    for (e = 0; e < i; e += 1)
                        if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", a.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                            var r = this.storedData[e].expan;
                            this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), r.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                        }
                }, MaskElement.prototype.getMaskelement = function() {
                    return this.maskElement
                }, MaskElement.prototype.createLayerSolidPath = function() {
                    var t = "M0,0 ";
                    return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
                }, MaskElement.prototype.drawPath = function(t, e, a) {
                    var i, r, s = " M" + e.v[0][0] + "," + e.v[0][1];
                    for (r = e._length, i = 1; i < r; i += 1) s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
                    if (e.c && r > 1 && (s += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), a.lastPath !== s) {
                        var n = "";
                        a.elem && (e.c && (n = t.inv ? this.solidPath + s : s), a.elem.setAttribute("d", n)), a.lastPath = s
                    }
                }, MaskElement.prototype.destroy = function() {
                    this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                }, HierarchyElement.prototype = {
                    initHierarchy: function() {
                        this.hierarchy = [], this._isParent = !1, this.checkParenting()
                    },
                    setHierarchy: function(t) {
                        this.hierarchy = t
                    },
                    setAsParent: function() {
                        this._isParent = !0
                    },
                    checkParenting: function() {
                        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                    }
                }, FrameElement.prototype = {
                    initFrame: function() {
                        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                    },
                    prepareProperties: function(t, e) {
                        var a, i = this.dynamicProperties.length;
                        for (a = 0; a < i; a += 1)(e || this._isParent && "transform" === this.dynamicProperties[a].propType) && (this.dynamicProperties[a].getValue(), this.dynamicProperties[a]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                    },
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                    }
                }, TransformElement.prototype = {
                    initTransform: function() {
                        this.finalTransform = {
                            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                o: 0
                            },
                            _matMdf: !1,
                            _opMdf: !1,
                            mat: new Matrix
                        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                    },
                    renderTransform: function() {
                        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                            var t, e = this.finalTransform.mat,
                                a = 0,
                                i = this.hierarchy.length;
                            if (!this.finalTransform._matMdf)
                                for (; a < i;) {
                                    if (this.hierarchy[a].finalTransform.mProp._mdf) {
                                        this.finalTransform._matMdf = !0;
                                        break
                                    }
                                    a += 1
                                }
                            if (this.finalTransform._matMdf)
                                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), a = 0; a < i; a += 1) t = this.hierarchy[a].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                        }
                    },
                    globalToLocal: function(t) {
                        var e = [];
                        e.push(this.finalTransform);
                        for (var a, i = !0, r = this.comp; i;) r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), r = r.comp) : i = !1;
                        var s, n = e.length;
                        for (a = 0; a < n; a += 1) s = e[a].mat.applyToPointArray(0, 0, 0), t = [t[0] - s[0], t[1] - s[1], 0];
                        return t
                    },
                    mHelper: new Matrix
                }, RenderableElement.prototype = {
                    initRenderable: function() {
                        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                    },
                    addRenderableComponent: function(t) {
                        -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                    },
                    removeRenderableComponent: function(t) {
                        -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                    },
                    prepareRenderableFrame: function(t) {
                        this.checkLayerLimits(t)
                    },
                    checkTransparency: function() {
                        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                    },
                    checkLayerLimits: function(t) {
                        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                    },
                    renderRenderable: function() {
                        var t, e = this.renderableComponents.length;
                        for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                    },
                    sourceRectAtTime: function() {
                        return {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    },
                    getLayerSize: function() {
                        return 5 === this.data.ty ? {
                            w: this.data.textData.width,
                            h: this.data.textData.height
                        } : {
                            w: this.data.width,
                            h: this.data.height
                        }
                    }
                }, extendPrototype([RenderableElement, createProxyFunction({
                    initElement: function(t, e, a) {
                        this.initFrame(), this.initBaseData(t, e, a), this.initTransform(t, e, a), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                    },
                    hide: function() {
                        this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                    },
                    show: function() {
                        this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    renderInnerContent: function() {},
                    prepareFrame: function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                    },
                    destroy: function() {
                        this.innerElem = null, this.destroyBaseElement()
                    }
                })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
                    this.d = "", this._mdf = !1
                }, SVGShapeData.prototype.setAsAnimated = function() {
                    this._isAnimated = !0
                }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, a) {
                    this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                        k: 0
                    }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                        k: 0
                    }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = a, this.stops = [], this.setGradientData(a.pElem, e), this.setGradientOpacity(e, a), this._isAnimated = !!this._isAnimated
                }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                    var a = createElementID(),
                        i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                    i.setAttribute("id", a), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
                    var r, s, n, o = [];
                    for (n = 4 * e.g.p, s = 0; s < n; s += 4) r = createNS("stop"), i.appendChild(r), o.push(r);
                    t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + a + ")"), this.gf = i, this.cst = o
                }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                    if (this.g._hasOpacity && !this.g._collapsable) {
                        var a, i, r, s = createNS("mask"),
                            n = createNS("path");
                        s.appendChild(n);
                        var o = createElementID(),
                            l = createElementID();
                        s.setAttribute("id", l);
                        var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                        h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), r = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                        var p = this.stops;
                        for (i = 4 * t.g.p; i < r; i += 2)(a = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(a), p.push(a);
                        n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = h, this.ms = s, this.ost = p, this.maskId = l, e.msElem = n
                    }
                }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
                var SVGElementsRenderer = function() {
                    var t = new Matrix,
                        e = new Matrix;

                    function a(t, e, a) {
                        (a || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (a || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                    }

                    function i(a, i, r) {
                        var s, n, o, l, h, p, c, m, d, f, u, g = i.styles.length,
                            y = i.lvl;
                        for (p = 0; p < g; p += 1) {
                            if (l = i.sh._mdf || r, i.styles[p].lvl < y) {
                                for (m = e.reset(), f = y - i.styles[p].lvl, u = i.transformers.length - 1; !l && f > 0;) l = i.transformers[u].mProps._mdf || l, f -= 1, u -= 1;
                                if (l)
                                    for (f = y - i.styles[p].lvl, u = i.transformers.length - 1; f > 0;) d = i.transformers[u].mProps.v.props, m.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), f -= 1, u -= 1
                            } else m = t; if (n = (c = i.sh.paths)._length, l) {
                                for (o = "", s = 0; s < n; s += 1)(h = c.shapes[s]) && h._length && (o += buildShapeString(h, h._length, h.c, m));
                                i.caches[p] = o
                            } else o = i.caches[p];
                            i.styles[p].d += !0 === a.hd ? "" : o, i.styles[p]._mdf = l || i.styles[p]._mdf
                        }
                    }

                    function r(t, e, a) {
                        var i = e.style;
                        (e.c._mdf || a) && i.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || a) && i.pElem.setAttribute("fill-opacity", e.o.v)
                    }

                    function s(t, e, a) {
                        n(t, e, a), o(t, e, a)
                    }

                    function n(t, e, a) {
                        var i, r, s, n, o, l = e.gf,
                            h = e.g._hasOpacity,
                            p = e.s.v,
                            c = e.e.v;
                        if (e.o._mdf || a) {
                            var m = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                            e.style.pElem.setAttribute(m, e.o.v)
                        }
                        if (e.s._mdf || a) {
                            var d = 1 === t.t ? "x1" : "cx",
                                f = "x1" === d ? "y1" : "cy";
                            l.setAttribute(d, p[0]), l.setAttribute(f, p[1]), h && !e.g._collapsable && (e.of.setAttribute(d, p[0]), e.of.setAttribute(f, p[1]))
                        }
                        if (e.g._cmdf || a) {
                            i = e.cst;
                            var u = e.g.c;
                            for (s = i.length, r = 0; r < s; r += 1)(n = i[r]).setAttribute("offset", u[4 * r] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * r + 1] + "," + u[4 * r + 2] + "," + u[4 * r + 3] + ")")
                        }
                        if (h && (e.g._omdf || a)) {
                            var g = e.g.o;
                            for (s = (i = e.g._collapsable ? e.cst : e.ost).length, r = 0; r < s; r += 1) n = i[r], e.g._collapsable || n.setAttribute("offset", g[2 * r] + "%"), n.setAttribute("stop-opacity", g[2 * r + 1])
                        }
                        if (1 === t.t)(e.e._mdf || a) && (l.setAttribute("x2", c[0]), l.setAttribute("y2", c[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
                        else if ((e.s._mdf || e.e._mdf || a) && (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)), l.setAttribute("r", o), h && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || a) {
                            o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)));
                            var y = Math.atan2(c[1] - p[1], c[0] - p[0]),
                                v = e.h.v;
                            v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                            var x = o * v,
                                k = Math.cos(y + e.a.v) * x + p[0],
                                b = Math.sin(y + e.a.v) * x + p[1];
                            l.setAttribute("fx", k), l.setAttribute("fy", b), h && !e.g._collapsable && (e.of.setAttribute("fx", k), e.of.setAttribute("fy", b))
                        }
                    }

                    function o(t, e, a) {
                        var i = e.style,
                            r = e.d;
                        r && (r._mdf || a) && r.dashStr && (i.pElem.setAttribute("stroke-dasharray", r.dashStr), i.pElem.setAttribute("stroke-dashoffset", r.dashoffset[0])), e.c && (e.c._mdf || a) && i.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || a) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || a) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
                    }
                    return {
                        createRenderFunction: function(t) {
                            switch (t.ty) {
                                case "fl":
                                    return r;
                                case "gf":
                                    return n;
                                case "gs":
                                    return s;
                                case "st":
                                    return o;
                                case "sh":
                                case "el":
                                case "rc":
                                case "sr":
                                    return i;
                                case "tr":
                                    return a;
                                default:
                                    return null
                            }
                        }
                    }
                }();

                function ShapeTransformManager() {
                    this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                }

                function CVShapeData(t, e, a, i) {
                    this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                    var r, s = 4;
                    "rc" === e.ty ? s = 5 : "el" === e.ty ? s = 6 : "sr" === e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
                    var n, o = a.length;
                    for (r = 0; r < o; r += 1) a[r].closed || (n = {
                        transforms: i.addTransformSequence(a[r].transforms),
                        trNodes: []
                    }, this.styledShapes.push(n), a[r].elements.push(n))
                }

                function BaseElement() {}

                function NullElement(t, e, a) {
                    this.initFrame(), this.initBaseData(t, e, a), this.initFrame(), this.initTransform(t, e, a), this.initHierarchy()
                }

                function SVGBaseElement() {}

                function IShapeElement() {}

                function ITextElement() {}

                function ICompElement() {}

                function IImageElement(t, e, a) {
                    this.assetData = e.getAssetData(t.refId), this.initElement(t, e, a), this.sourceRect = {
                        top: 0,
                        left: 0,
                        width: this.assetData.w,
                        height: this.assetData.h
                    }
                }

                function ISolidElement(t, e, a) {
                    this.initElement(t, e, a)
                }

                function AudioElement(t, e, a) {
                    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, a), this._isPlaying = !1, this._canPlay = !1;
                    var i = this.globalData.getAssetsPath(this.assetData);
                    this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function FootageElement(t, e, a) {
                    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, a)
                }

                function SVGCompElement(t, e, a) {
                    this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, a), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function SVGTextLottieElement(t, e, a) {
                    this.textSpans = [], this.renderType = "svg", this.initElement(t, e, a)
                }

                function SVGShapeElement(t, e, a) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, a), this.prevViewData = []
                }

                function SVGTintFilter(t, e) {
                    this.filterManager = e;
                    var a = createNS("feColorMatrix");
                    if (a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), a.setAttribute("result", "f1"), t.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", "f2"), t.appendChild(a), this.matrixFilter = a, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                        var i, r = createNS("feMerge");
                        t.appendChild(r), (i = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), r.appendChild(i), (i = createNS("feMergeNode")).setAttribute("in", "f2"), r.appendChild(i)
                    }
                }

                function SVGFillFilter(t, e) {
                    this.filterManager = e;
                    var a = createNS("feColorMatrix");
                    a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(a), this.matrixFilter = a
                }

                function SVGGaussianBlurEffect(t, e) {
                    t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                    var a = createNS("feGaussianBlur");
                    t.appendChild(a), this.feGaussianBlur = a
                }

                function SVGStrokeEffect(t, e) {
                    this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
                }

                function SVGTritoneFilter(t, e) {
                    this.filterManager = e;
                    var a = createNS("feColorMatrix");
                    a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), a.setAttribute("result", "f1"), t.appendChild(a);
                    var i = createNS("feComponentTransfer");
                    i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.matrixFilter = i;
                    var r = createNS("feFuncR");
                    r.setAttribute("type", "table"), i.appendChild(r), this.feFuncR = r;
                    var s = createNS("feFuncG");
                    s.setAttribute("type", "table"), i.appendChild(s), this.feFuncG = s;
                    var n = createNS("feFuncB");
                    n.setAttribute("type", "table"), i.appendChild(n), this.feFuncB = n
                }

                function SVGProLevelsFilter(t, e) {
                    this.filterManager = e;
                    var a = this.filterManager.effectElements,
                        i = createNS("feComponentTransfer");
                    (a[10].p.k || 0 !== a[10].p.v || a[11].p.k || 1 !== a[11].p.v || a[12].p.k || 1 !== a[12].p.v || a[13].p.k || 0 !== a[13].p.v || a[14].p.k || 1 !== a[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)), (a[17].p.k || 0 !== a[17].p.v || a[18].p.k || 1 !== a[18].p.v || a[19].p.k || 1 !== a[19].p.v || a[20].p.k || 0 !== a[20].p.v || a[21].p.k || 1 !== a[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)), (a[24].p.k || 0 !== a[24].p.v || a[25].p.k || 1 !== a[25].p.v || a[26].p.k || 1 !== a[26].p.v || a[27].p.k || 0 !== a[27].p.v || a[28].p.k || 1 !== a[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)), (a[31].p.k || 0 !== a[31].p.v || a[32].p.k || 1 !== a[32].p.v || a[33].p.k || 1 !== a[33].p.v || a[34].p.k || 0 !== a[34].p.v || a[35].p.k || 1 !== a[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), i = createNS("feComponentTransfer")), (a[3].p.k || 0 !== a[3].p.v || a[4].p.k || 1 !== a[4].p.v || a[5].p.k || 1 !== a[5].p.v || a[6].p.k || 0 !== a[6].p.v || a[7].p.k || 1 !== a[7].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.feFuncRComposed = this.createFeFunc("feFuncR", i), this.feFuncGComposed = this.createFeFunc("feFuncG", i), this.feFuncBComposed = this.createFeFunc("feFuncB", i))
                }

                function SVGDropShadowEffect(t, e) {
                    var a = e.container.globalData.renderConfig.filterSize;
                    t.setAttribute("x", a.x), t.setAttribute("y", a.y), t.setAttribute("width", a.width), t.setAttribute("height", a.height), this.filterManager = e;
                    var i = createNS("feGaussianBlur");
                    i.setAttribute("in", "SourceAlpha"), i.setAttribute("result", "drop_shadow_1"), i.setAttribute("stdDeviation", "0"), this.feGaussianBlur = i, t.appendChild(i);
                    var r = createNS("feOffset");
                    r.setAttribute("dx", "25"), r.setAttribute("dy", "0"), r.setAttribute("in", "drop_shadow_1"), r.setAttribute("result", "drop_shadow_2"), this.feOffset = r, t.appendChild(r);
                    var s = createNS("feFlood");
                    s.setAttribute("flood-color", "#00ff00"), s.setAttribute("flood-opacity", "1"), s.setAttribute("result", "drop_shadow_3"), this.feFlood = s, t.appendChild(s);
                    var n = createNS("feComposite");
                    n.setAttribute("in", "drop_shadow_3"), n.setAttribute("in2", "drop_shadow_2"), n.setAttribute("operator", "in"), n.setAttribute("result", "drop_shadow_4"), t.appendChild(n);
                    var o, l = createNS("feMerge");
                    t.appendChild(l), o = createNS("feMergeNode"), l.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = l, this.originalNodeAdded = !1, l.appendChild(o)
                }
                ShapeTransformManager.prototype = {
                    addTransformSequence: function(t) {
                        var e, a = t.length,
                            i = "_";
                        for (e = 0; e < a; e += 1) i += t[e].transform.key + "_";
                        var r = this.sequences[i];
                        return r || (r = {
                            transforms: [].concat(t),
                            finalTransform: new Matrix,
                            _mdf: !1
                        }, this.sequences[i] = r, this.sequenceList.push(r)), r
                    },
                    processSequence: function(t, e) {
                        for (var a, i = 0, r = t.transforms.length, s = e; i < r && !e;) {
                            if (t.transforms[i].transform.mProps._mdf) {
                                s = !0;
                                break
                            }
                            i += 1
                        }
                        if (s)
                            for (t.finalTransform.reset(), i = r - 1; i >= 0; i -= 1) a = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
                        t._mdf = s
                    },
                    processSequences: function(t) {
                        var e, a = this.sequenceList.length;
                        for (e = 0; e < a; e += 1) this.processSequence(this.sequenceList[e], t)
                    },
                    getNewKey: function() {
                        return this.transform_key_count += 1, "_" + this.transform_key_count
                    }
                }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
                    checkMasks: function() {
                        if (!this.data.hasMask) return !1;
                        for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                            if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                            t += 1
                        }
                        return !1
                    },
                    initExpressions: function() {
                        this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                        var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                        this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
                    },
                    setBlendMode: function() {
                        var t = getBlendMode(this.data.bm);
                        (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                    },
                    initBaseData: function(t, e, a) {
                        this.globalData = e, this.comp = a, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                    },
                    getType: function() {
                        return this.type
                    },
                    sourceRectAtTime: function() {}
                }, NullElement.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                    return null
                }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
                    initRendererElement: function() {
                        this.layerElement = createNS("g")
                    },
                    createContainerElements: function() {
                        this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                        var t, e, a, i = null;
                        if (this.data.td) {
                            if (3 == this.data.td || 1 == this.data.td) {
                                var r = createNS("mask");
                                r.setAttribute("id", this.layerId), r.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), r.appendChild(this.layerElement), i = r, this.globalData.defs.appendChild(r), featureSupport.maskType || 1 != this.data.td || (r.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (a = createNS("g")).appendChild(this.layerElement), i = a, r.appendChild(a), a.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                            } else if (2 == this.data.td) {
                                var s = createNS("mask");
                                s.setAttribute("id", this.layerId), s.setAttribute("mask-type", "alpha");
                                var n = createNS("g");
                                s.appendChild(n), t = createElementID(), e = filtersFactory.createFilter(t);
                                var o = createNS("feComponentTransfer");
                                o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                                var l = createNS("feFuncA");
                                l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), o.appendChild(l), this.globalData.defs.appendChild(e);
                                var h = createNS("rect");
                                h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), n.appendChild(h), n.appendChild(this.layerElement), i = n, featureSupport.maskType || (s.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), n.appendChild(h), a.appendChild(this.layerElement), i = a, n.appendChild(a)), this.globalData.defs.appendChild(s)
                            }
                        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), i = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement; if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                            var p = createNS("clipPath"),
                                c = createNS("path");
                            c.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                            var m = createElementID();
                            if (p.setAttribute("id", m), p.appendChild(c), this.globalData.defs.appendChild(p), this.checkMasks()) {
                                var d = createNS("g");
                                d.setAttribute("clip-path", "url(" + locationHref + "#" + m + ")"), d.appendChild(this.layerElement), this.transformedElement = d, i ? i.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                            } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + m + ")")
                        }
                        0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                    },
                    destroyBaseElement: function() {
                        this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                    },
                    getBaseElement: function() {
                        return this.data.hd ? null : this.baseElement
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                    },
                    setMatte: function(t) {
                        this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
                    }
                }, IShapeElement.prototype = {
                    addShapeToModifiers: function(t) {
                        var e, a = this.shapeModifiers.length;
                        for (e = 0; e < a; e += 1) this.shapeModifiers[e].addShape(t)
                    },
                    isShapeInAnimatedModifiers: function(t) {
                        for (var e = this.shapeModifiers.length; 0 < e;)
                            if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                        return !1
                    },
                    renderModifiers: function() {
                        if (this.shapeModifiers.length) {
                            var t, e = this.shapes.length;
                            for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                            for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                        }
                    },
                    lcEnum: {
                        1: "butt",
                        2: "round",
                        3: "square"
                    },
                    ljEnum: {
                        1: "miter",
                        2: "round",
                        3: "bevel"
                    },
                    searchProcessedElement: function(t) {
                        for (var e = this.processedElements, a = 0, i = e.length; a < i;) {
                            if (e[a].elem === t) return e[a].pos;
                            a += 1
                        }
                        return 0
                    },
                    addProcessedElement: function(t, e) {
                        for (var a = this.processedElements, i = a.length; i;)
                            if (a[i -= 1].elem === t) return void(a[i].pos = e);
                        a.push(new ProcessedElement(t, e))
                    },
                    prepareFrame: function(t) {
                        this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                    }
                }, ITextElement.prototype.initElement = function(t, e, a) {
                    this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, a), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, a), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                }, ITextElement.prototype.prepareFrame = function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                }, ITextElement.prototype.createPathShape = function(t, e) {
                    var a, i, r = e.length,
                        s = "";
                    for (a = 0; a < r; a += 1) i = e[a].ks.k, s += buildShapeString(i, i.i.length, !0, t);
                    return s
                }, ITextElement.prototype.updateDocumentData = function(t, e) {
                    this.textProperty.updateDocumentData(t, e)
                }, ITextElement.prototype.canResizeFont = function(t) {
                    this.textProperty.canResizeFont(t)
                }, ITextElement.prototype.setMinimumFontSize = function(t) {
                    this.textProperty.setMinimumFontSize(t)
                }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, a, i, r) {
                    switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                        case 1:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[a]), 0, 0);
                            break;
                        case 2:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[a]) / 2, 0, 0)
                    }
                    e.translate(i, r, 0)
                }, ITextElement.prototype.buildColor = function(t) {
                    return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, a) {
                    this.initFrame(), this.initBaseData(t, e, a), this.initTransform(t, e, a), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
                }, ICompElement.prototype.prepareFrame = function(t) {
                    if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                        }
                        var a, i = this.elements.length;
                        for (this.completeLayers || this.checkLayers(this.renderedFrame), a = i - 1; a >= 0; a -= 1)(this.completeLayers || this.elements[a]) && (this.elements[a].prepareFrame(this.renderedFrame - this.layers[a].st), this.elements[a]._mdf && (this._mdf = !0))
                    }
                }, ICompElement.prototype.renderInnerContent = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }, ICompElement.prototype.setElements = function(t) {
                    this.elements = t
                }, ICompElement.prototype.getElements = function() {
                    return this.elements
                }, ICompElement.prototype.destroyElements = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                }, ICompElement.prototype.destroy = function() {
                    this.destroyElements(), this.destroyBaseElement()
                }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                    var t = this.globalData.getAssetsPath(this.assetData);
                    this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                }, IImageElement.prototype.sourceRectAtTime = function() {
                    return this.sourceRect
                }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                    var t = createNS("rect");
                    t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                }, AudioElement.prototype.prepareFrame = function(t) {
                    if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        this._currentTime = e
                    }
                }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                    this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                    this.audio.pause(), this._isPlaying = !1
                }, AudioElement.prototype.pause = function() {
                    this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                }, AudioElement.prototype.resume = function() {
                    this._canPlay = !0
                }, AudioElement.prototype.setRate = function(t) {
                    this.audio.rate(t)
                }, AudioElement.prototype.volume = function(t) {
                    this.audio.volume(t)
                }, AudioElement.prototype.getBaseElement = function() {
                    return null
                }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
                    return null
                }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                    this.layerInterface = FootageInterface(this)
                }, FootageElement.prototype.getFootageData = function() {
                    return this.footageData
                }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                    this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
                }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
                    for (var e = 0, a = t.length, i = [], r = ""; e < a;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(r), r = "") : r += t[e], e += 1;
                    return i.push(r), i
                }, SVGTextLottieElement.prototype.buildNewText = function() {
                    var t, e, a = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(a ? a.l.length : 0), a.fc ? this.layerElement.setAttribute("fill", this.buildColor(a.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), a.sc && (this.layerElement.setAttribute("stroke", this.buildColor(a.sc)), this.layerElement.setAttribute("stroke-width", a.sw)), this.layerElement.setAttribute("font-size", a.finalSize);
                    var i = this.globalData.fontManager.getFontByName(a.f);
                    if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
                    else {
                        this.layerElement.setAttribute("font-family", i.fFamily);
                        var r = a.fWeight,
                            s = a.fStyle;
                        this.layerElement.setAttribute("font-style", s), this.layerElement.setAttribute("font-weight", r)
                    }
                    this.layerElement.setAttribute("aria-label", a.t);
                    var n, o = a.l || [],
                        l = !!this.globalData.fontManager.chars;
                    e = o.length;
                    var h, p = this.mHelper,
                        c = "",
                        m = this.data.singleShape,
                        d = 0,
                        f = 0,
                        u = !0,
                        g = .001 * a.tr * a.finalSize;
                    if (!m || l || a.sz) {
                        var y, v, x = this.textSpans.length;
                        for (t = 0; t < e; t += 1) l && m && 0 !== t || (n = x > t ? this.textSpans[t] : createNS(l ? "path" : "text"), x <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = n, this.layerElement.appendChild(n)), n.style.display = "inherit"), p.reset(), p.scale(a.finalSize / 100, a.finalSize / 100), m && (o[t].n && (d = -g, f += a.yOffset, f += u ? 1 : 0, u = !1), this.applyTextPropertiesToMatrix(a, p, o[t].line, d, f), d += o[t].l || 0, d += g), l ? (h = (y = (v = this.globalData.fontManager.getCharData(a.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(a.f).fFamily)) && v.data || {}).shapes ? y.shapes[0].it : [], m ? c += this.createPathShape(p, h) : n.setAttribute("d", this.createPathShape(p, h))) : (m && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                        m && n && n.setAttribute("d", c)
                    } else {
                        var k = this.textContainer,
                            b = "start";
                        switch (a.j) {
                            case 1:
                                b = "end";
                                break;
                            case 2:
                                b = "middle";
                                break;
                            default:
                                b = "start"
                        }
                        k.setAttribute("text-anchor", b), k.setAttribute("letter-spacing", g);
                        var E = this.buildTextContents(a.finalText);
                        for (e = E.length, f = a.ps ? a.ps[1] + a.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t] || createNS("tspan")).textContent = E[t], n.setAttribute("x", 0), n.setAttribute("y", f), n.style.display = "inherit", k.appendChild(n), this.textSpans[t] = n, f += a.finalLineHeight;
                        this.layerElement.appendChild(k)
                    }
                    for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
                    this._sizeChanged = !0
                }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                    if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                        this._sizeChanged = !1;
                        var t = this.layerElement.getBBox();
                        this.bbox = {
                            top: t.y,
                            left: t.x,
                            width: t.width,
                            height: t.height
                        }
                    }
                    return this.bbox
                }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                    if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                        var t, e;
                        this._sizeChanged = !0;
                        var a, i, r = this.textAnimator.renderedLetters,
                            s = this.textProperty.currentData.l;
                        for (e = s.length, t = 0; t < e; t += 1) s[t].n || (a = r[t], i = this.textSpans[t], a._mdf.m && i.setAttribute("transform", a.m), a._mdf.o && i.setAttribute("opacity", a.o), a._mdf.sw && i.setAttribute("stroke-width", a.sw), a._mdf.sc && i.setAttribute("stroke", a.sc), a._mdf.fc && i.setAttribute("fill", a.fc))
                    }
                }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                    var t, e, a, i, r = this.shapes.length,
                        s = this.stylesList.length,
                        n = [],
                        o = !1;
                    for (a = 0; a < s; a += 1) {
                        for (i = this.stylesList[a], o = !1, n.length = 0, t = 0; t < r; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), o = e._isAnimated || o);
                        n.length > 1 && o && this.setShapesAsAnimated(n)
                    }
                }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                    var e, a = t.length;
                    for (e = 0; e < a; e += 1) t[e].setAsAnimated()
                }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                    var a, i = new SVGStyleData(t, e),
                        r = i.pElem;
                    if ("st" === t.ty) a = new SVGStrokeStyleData(this, t, i);
                    else if ("fl" === t.ty) a = new SVGFillStyleData(this, t, i);
                    else if ("gf" === t.ty || "gs" === t.ty) {
                        a = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(a.gf), a.maskId && (this.globalData.defs.appendChild(a.ms), this.globalData.defs.appendChild(a.of), r.setAttribute("mask", "url(" + locationHref + "#" + a.maskId + ")"))
                    }
                    return "st" !== t.ty && "gs" !== t.ty || (r.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), r.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), r.setAttribute("fill-opacity", "0"), 1 === t.lj && r.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && r.setAttribute("fill-rule", "evenodd"), t.ln && r.setAttribute("id", t.ln), t.cl && r.setAttribute("class", t.cl), t.bm && (r.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, a), a
                }, SVGShapeElement.prototype.createGroupElement = function(t) {
                    var e = new ShapeGroupData;
                    return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
                }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                    var a = TransformPropertyFactory.getTransformProperty(this, t, this),
                        i = new SVGTransformData(a, a.o, e);
                    return this.addToAnimatedContents(t, i), i
                }, SVGShapeElement.prototype.createShapeElement = function(t, e, a) {
                    var i = 4;
                    "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
                    var r = new SVGShapeData(e, a, ShapePropertyFactory.getShapeProp(this, t, i, this));
                    return this.shapes.push(r), this.addShapeToModifiers(r), this.addToAnimatedContents(t, r), r
                }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                    for (var a = 0, i = this.animatedContents.length; a < i;) {
                        if (this.animatedContents[a].element === e) return;
                        a += 1
                    }
                    this.animatedContents.push({
                        fn: SVGElementsRenderer.createRenderFunction(t),
                        element: e,
                        data: t
                    })
                }, SVGShapeElement.prototype.setElementStyles = function(t) {
                    var e, a = t.styles,
                        i = this.stylesList.length;
                    for (e = 0; e < i; e += 1) this.stylesList[e].closed || a.push(this.stylesList[e])
                }, SVGShapeElement.prototype.reloadShapes = function() {
                    var t;
                    this._isFirstFrame = !0;
                    var e = this.itemsData.length;
                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                    this.renderModifiers()
                }, SVGShapeElement.prototype.searchShapes = function(t, e, a, i, r, s, n) {
                    var o, l, h, p, c, m, d = [].concat(s),
                        f = t.length - 1,
                        u = [],
                        g = [];
                    for (o = f; o >= 0; o -= 1) {
                        if ((m = this.searchProcessedElement(t[o])) ? e[o] = a[m - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty) m ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], r), t[o]._render && i.appendChild(e[o].style.pElem), u.push(e[o].style);
                        else if ("gr" === t[o].ty) {
                            if (m)
                                for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l];
                            else e[o] = this.createGroupElement(t[o]);
                            this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, r + 1, d, n), t[o]._render && i.appendChild(e[o].gr)
                        } else "tr" === t[o].ty ? (m || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, d.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (m || (e[o] = this.createShapeElement(t[o], d, r)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty ? (m ? (c = e[o]).closed = !1 : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), g.push(c)) : "rp" === t[o].ty && (m ? (c = e[o]).closed = !0 : (c = ShapeModifiers.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), n = !1), g.push(c));
                        this.addProcessedElement(t[o], o + 1)
                    }
                    for (f = u.length, o = 0; o < f; o += 1) u[o].closed = !0;
                    for (f = g.length, o = 0; o < f; o += 1) g[o].closed = !0
                }, SVGShapeElement.prototype.renderInnerContent = function() {
                    var t;
                    this.renderModifiers();
                    var e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                    for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                }, SVGShapeElement.prototype.renderShape = function() {
                    var t, e, a = this.animatedContents.length;
                    for (t = 0; t < a; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
                }, SVGShapeElement.prototype.destroy = function() {
                    this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                }, SVGTintFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[0].p.v,
                            a = this.filterManager.effectElements[1].p.v,
                            i = this.filterManager.effectElements[2].p.v / 100;
                        this.matrixFilter.setAttribute("values", a[0] - e[0] + " 0 0 0 " + e[0] + " " + (a[1] - e[1]) + " 0 0 0 " + e[1] + " " + (a[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
                    }
                }, SVGFillFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[2].p.v,
                            a = this.filterManager.effectElements[6].p.v;
                        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + a + " 0")
                    }
                }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = .3 * this.filterManager.effectElements[0].p.v,
                            a = this.filterManager.effectElements[1].p.v,
                            i = 3 == a ? 0 : e,
                            r = 2 == a ? 0 : e;
                        this.feGaussianBlur.setAttribute("stdDeviation", i + " " + r);
                        var s = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                        this.feGaussianBlur.setAttribute("edgeMode", s)
                    }
                }, SVGStrokeEffect.prototype.initialize = function() {
                    var t, e, a, i, r = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                    for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, a = 0) : i = (a = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); a < i; a += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                        p: t,
                        m: a
                    });
                    if (3 === this.filterManager.effectElements[10].p.v) {
                        var s = createNS("mask"),
                            n = createElementID();
                        s.setAttribute("id", n), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
                        var o = createNS("g");
                        for (o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); r[0];) o.appendChild(r[0]);
                        this.elem.layerElement.appendChild(o), this.masker = s, e.setAttribute("stroke", "#fff")
                    } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                        if (2 === this.filterManager.effectElements[10].p.v)
                            for (r = this.elem.layerElement.children || this.elem.layerElement.childNodes; r.length;) this.elem.layerElement.removeChild(r[0]);
                        this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
                    }
                    this.initialized = !0, this.pathMasker = e
                }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                    var e;
                    this.initialized || this.initialize();
                    var a, i, r = this.paths.length;
                    for (e = 0; e < r; e += 1)
                        if (-1 !== this.paths[e].m && (a = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || a.prop._mdf) && i.setAttribute("d", a.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || a.prop._mdf)) {
                            var s;
                            if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                var n = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                    o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                    l = i.getTotalLength();
                                s = "0 0 0 " + l * n + " ";
                                var h, p = l * (o - n),
                                    c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                                    m = Math.floor(p / c);
                                for (h = 0; h < m; h += 1) s += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                                s += "0 " + 10 * l + " 0 0"
                            } else s = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                            i.setAttribute("stroke-dasharray", s)
                        }
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                        var d = this.filterManager.effectElements[3].p.v;
                        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
                    }
                }, SVGTritoneFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[0].p.v,
                            a = this.filterManager.effectElements[1].p.v,
                            i = this.filterManager.effectElements[2].p.v,
                            r = i[0] + " " + a[0] + " " + e[0],
                            s = i[1] + " " + a[1] + " " + e[1],
                            n = i[2] + " " + a[2] + " " + e[2];
                        this.feFuncR.setAttribute("tableValues", r), this.feFuncG.setAttribute("tableValues", s), this.feFuncB.setAttribute("tableValues", n)
                    }
                }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                    var a = createNS(t);
                    return a.setAttribute("type", "table"), e.appendChild(a), a
                }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, a, i, r) {
                    for (var s, n, o = 0, l = Math.min(t, e), h = Math.max(t, e), p = Array.call(null, {
                        length: 256
                    }), c = 0, m = r - i, d = e - t; o <= 256;) n = (s = o / 256) <= l ? d < 0 ? r : i : s >= h ? d < 0 ? i : r : i + m * Math.pow((s - t) / d, 1 / a), p[c] = n, c += 1, o += 256 / 255;
                    return p.join(" ")
                }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e, a = this.filterManager.effectElements;
                        this.feFuncRComposed && (t || a[3].p._mdf || a[4].p._mdf || a[5].p._mdf || a[6].p._mdf || a[7].p._mdf) && (e = this.getTableValue(a[3].p.v, a[4].p.v, a[5].p.v, a[6].p.v, a[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || a[10].p._mdf || a[11].p._mdf || a[12].p._mdf || a[13].p._mdf || a[14].p._mdf) && (e = this.getTableValue(a[10].p.v, a[11].p.v, a[12].p.v, a[13].p.v, a[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || a[17].p._mdf || a[18].p._mdf || a[19].p._mdf || a[20].p._mdf || a[21].p._mdf) && (e = this.getTableValue(a[17].p.v, a[18].p.v, a[19].p.v, a[20].p.v, a[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || a[24].p._mdf || a[25].p._mdf || a[26].p._mdf || a[27].p._mdf || a[28].p._mdf) && (e = this.getTableValue(a[24].p.v, a[25].p.v, a[26].p.v, a[27].p.v, a[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || a[31].p._mdf || a[32].p._mdf || a[33].p._mdf || a[34].p._mdf || a[35].p._mdf) && (e = this.getTableValue(a[31].p.v, a[32].p.v, a[33].p.v, a[34].p.v, a[35].p.v), this.feFuncA.setAttribute("tableValues", e))
                    }
                }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                            var e = this.filterManager.effectElements[0].p.v;
                            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                        }
                        if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                            var a = this.filterManager.effectElements[3].p.v,
                                i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                                r = a * Math.cos(i),
                                s = a * Math.sin(i);
                            this.feOffset.setAttribute("dx", r), this.feOffset.setAttribute("dy", s)
                        }
                    }
                };
                var _svgMatteSymbols = [];

                function SVGMatte3Effect(t, e, a) {
                    this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = a, a.matteElement = createNS("g"), a.matteElement.appendChild(a.layerElement), a.matteElement.appendChild(a.transformedElement), a.baseElement = a.matteElement
                }

                function SVGEffects(t) {
                    var e, a, i = t.data.ef ? t.data.ef.length : 0,
                        r = createElementID(),
                        s = filtersFactory.createFilter(r, !0),
                        n = 0;
                    for (this.filters = [], e = 0; e < i; e += 1) a = null, 20 === t.data.ef[e].ty ? (n += 1, a = new SVGTintFilter(s, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1, a = new SVGFillFilter(s, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? a = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1, a = new SVGTritoneFilter(s, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1, a = new SVGProLevelsFilter(s, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1, a = new SVGDropShadowEffect(s, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? a = new SVGMatte3Effect(s, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (n += 1, a = new SVGGaussianBlurEffect(s, t.effectsManager.effectElements[e])), a && this.filters.push(a);
                    n && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + r + ")")), this.filters.length && t.addRenderableComponent(this)
                }

                function CVContextData() {
                    var t;
                    this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1;
                    for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
                    this._length = 15
                }

                function CVBaseElement() {}

                function CVImageElement(t, e, a) {
                    this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, a)
                }

                function CVCompElement(t, e, a) {
                    this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, a), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function CVMaskElement(t, e) {
                    var a;
                    this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                    var i = this.masksProperties.length,
                        r = !1;
                    for (a = 0; a < i; a += 1) "n" !== this.masksProperties[a].mode && (r = !0), this.viewData[a] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[a], 3);
                    this.hasMasks = r, r && this.element.addRenderableComponent(this)
                }

                function CVShapeElement(t, e, a) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, a)
                }

                function CVSolidElement(t, e, a) {
                    this.initElement(t, e, a)
                }

                function CVTextElement(t, e, a) {
                    this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                        fill: "rgba(0,0,0,0)",
                        stroke: "rgba(0,0,0,0)",
                        sWidth: 0,
                        fValue: ""
                    }, this.initElement(t, e, a)
                }

                function CVEffects() {}

                function HBaseElement() {}

                function HSolidElement(t, e, a) {
                    this.initElement(t, e, a)
                }

                function HCompElement(t, e, a) {
                    this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, a), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function HShapeElement(t, e, a) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, a), this.prevViewData = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }
                }

                function HTextElement(t, e, a) {
                    this.textSpans = [], this.textPaths = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, a)
                }

                function HImageElement(t, e, a) {
                    this.assetData = e.getAssetData(t.refId), this.initElement(t, e, a)
                }

                function HCameraElement(t, e, a) {
                    this.initFrame(), this.initBaseData(t, e, a), this.initHierarchy();
                    var i = PropertyFactory.getProp;
                    if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                        var r, s = t.ks.or.k.length;
                        for (r = 0; r < s; r += 1) t.ks.or.k[r].to = null, t.ks.or.k[r].ti = null
                    }
                    this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                        mProp: this
                    }
                }

                function HEffects() {}
                SVGMatte3Effect.prototype.findSymbol = function(t) {
                    for (var e = 0, a = _svgMatteSymbols.length; e < a;) {
                        if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                        e += 1
                    }
                    return null
                }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                    var a = t.layerElement.parentNode;
                    if (a) {
                        for (var i, r = a.children, s = 0, n = r.length; s < n && r[s] !== t.layerElement;) s += 1;
                        s <= n - 2 && (i = r[s + 1]);
                        var o = createNS("use");
                        o.setAttribute("href", "#" + e), i ? a.insertBefore(o, i) : a.appendChild(o)
                    }
                }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                    if (!this.findSymbol(e)) {
                        var a = createElementID(),
                            i = createNS("mask");
                        i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                        var r = t.globalData.defs;
                        r.appendChild(i);
                        var s = createNS("symbol");
                        s.setAttribute("id", a), this.replaceInParent(e, a), s.appendChild(e.layerElement), r.appendChild(s);
                        var n = createNS("use");
                        n.setAttribute("href", "#" + a), i.appendChild(n), e.data.hd = !1, e.show()
                    }
                    t.setMatte(e.layerId)
                }, SVGMatte3Effect.prototype.initialize = function() {
                    for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, a = 0, i = e.length; a < i;) e[a] && e[a].data.ind === t && this.setElementAsMask(this.elem, e[a]), a += 1;
                    this.initialized = !0
                }, SVGMatte3Effect.prototype.renderFrame = function() {
                    this.initialized || this.initialize()
                }, SVGEffects.prototype.renderFrame = function(t) {
                    var e, a = this.filters.length;
                    for (e = 0; e < a; e += 1) this.filters[e].renderFrame(t)
                }, CVContextData.prototype.duplicate = function() {
                    var t = 2 * this._length,
                        e = this.savedOp;
                    this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
                    var a = 0;
                    for (a = this._length; a < t; a += 1) this.saved[a] = createTypedArray("float32", 16);
                    this._length = t
                }, CVContextData.prototype.reset = function() {
                    this.cArrPos = 0, this.cTr.reset(), this.cO = 1
                }, CVBaseElement.prototype = {
                    createElements: function() {},
                    initRendererElement: function() {},
                    createContainerElements: function() {
                        this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
                    },
                    createContent: function() {},
                    setBlendMode: function() {
                        var t = this.globalData;
                        if (t.blendMode !== this.data.bm) {
                            t.blendMode = this.data.bm;
                            var e = getBlendMode(this.data.bm);
                            t.canvasContext.globalCompositeOperation = e
                        }
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new CVMaskElement(this.data, this)
                    },
                    hideElement: function() {
                        this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                    },
                    showElement: function() {
                        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                    },
                    renderFrame: function() {
                        if (!this.hidden && !this.data.hd) {
                            this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                            var t = 0 === this.data.ty;
                            this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                        }
                    },
                    destroy: function() {
                        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                    },
                    mHelper: new Matrix
                }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                    if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                        var t = createTag("canvas");
                        t.width = this.assetData.w, t.height = this.assetData.h;
                        var e, a, i = t.getContext("2d"),
                            r = this.img.width,
                            s = this.img.height,
                            n = r / s,
                            o = this.assetData.w / this.assetData.h,
                            l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                        n > o && "xMidYMid slice" === l || n < o && "xMidYMid slice" !== l ? e = (a = s) * o : a = (e = r) / o, i.drawImage(this.img, (r - e) / 2, (s - a) / 2, e, a, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                    }
                }, CVImageElement.prototype.renderInnerContent = function() {
                    this.canvasContext.drawImage(this.img, 0, 0)
                }, CVImageElement.prototype.destroy = function() {
                    this.img = null
                }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                    var t, e = this.canvasContext;
                    for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }, CVCompElement.prototype.destroy = function() {
                    var t;
                    for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                    this.layers = null, this.elements = null
                }, CVMaskElement.prototype.renderFrame = function() {
                    if (this.hasMasks) {
                        var t, e, a, i, r = this.element.finalTransform.mat,
                            s = this.element.canvasContext,
                            n = this.masksProperties.length;
                        for (s.beginPath(), t = 0; t < n; t += 1)
                            if ("n" !== this.masksProperties[t].mode) {
                                var o;
                                this.masksProperties[t].inv && (s.moveTo(0, 0), s.lineTo(this.element.globalData.compSize.w, 0), s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), s.lineTo(0, this.element.globalData.compSize.h), s.lineTo(0, 0)), i = this.viewData[t].v, e = r.applyToPointArray(i.v[0][0], i.v[0][1], 0), s.moveTo(e[0], e[1]);
                                var l = i._length;
                                for (o = 1; o < l; o += 1) a = r.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), s.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
                                a = r.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), s.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5])
                            }
                        this.element.globalData.renderer.save(!0), s.clip()
                    }
                }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                    this.element = null
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                    opacity: 1,
                    _opMdf: !1
                }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                    var a = {
                            data: t,
                            type: t.ty,
                            preTransforms: this.transformsManager.addTransformSequence(e),
                            transforms: [],
                            elements: [],
                            closed: !0 === t.hd
                        },
                        i = {};
                    if ("fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (a.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
                        k: 0
                    }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
                        k: 0
                    }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
                        if (a.lc = this.lcEnum[t.lc] || "round", a.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (a.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (a.wi = i.w.v), t.d) {
                            var r = new DashProperty(this, t.d, "canvas", this);
                            i.d = r, i.d.k || (a.da = i.d.dashArray, a.do = i.d.dashoffset[0])
                        }
                    } else a.r = 2 === t.r ? "evenodd" : "nonzero";
                    return this.stylesList.push(a), i.style = a, i
                }, CVShapeElement.prototype.createGroupElement = function() {
                    return {
                        it: [],
                        prevViewData: []
                    }
                }, CVShapeElement.prototype.createTransformElement = function(t) {
                    return {
                        transform: {
                            opacity: 1,
                            _opMdf: !1,
                            key: this.transformsManager.getNewKey(),
                            op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                            mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                        }
                    }
                }, CVShapeElement.prototype.createShapeElement = function(t) {
                    var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                    return this.shapes.push(e), this.addShapeToModifiers(e), e
                }, CVShapeElement.prototype.reloadShapes = function() {
                    var t;
                    this._isFirstFrame = !0;
                    var e = this.itemsData.length;
                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                    this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                    var e, a = this.stylesList.length;
                    for (e = 0; e < a; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
                }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                    var t, e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
                }, CVShapeElement.prototype.closeStyles = function(t) {
                    var e, a = t.length;
                    for (e = 0; e < a; e += 1) t[e].closed = !0
                }, CVShapeElement.prototype.searchShapes = function(t, e, a, i, r) {
                    var s, n, o, l, h, p, c = t.length - 1,
                        m = [],
                        d = [],
                        f = [].concat(r);
                    for (s = c; s >= 0; s -= 1) {
                        if ((l = this.searchProcessedElement(t[s])) ? e[s] = a[l - 1] : t[s]._shouldRender = i, "fl" === t[s].ty || "st" === t[s].ty || "gf" === t[s].ty || "gs" === t[s].ty) l ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], f), m.push(e[s].style);
                        else if ("gr" === t[s].ty) {
                            if (l)
                                for (o = e[s].it.length, n = 0; n < o; n += 1) e[s].prevViewData[n] = e[s].it[n];
                            else e[s] = this.createGroupElement(t[s]);
                            this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, i, f)
                        } else "tr" === t[s].ty ? (l || (p = this.createTransformElement(t[s]), e[s] = p), f.push(e[s]), this.addTransformToStyleList(e[s])) : "sh" === t[s].ty || "rc" === t[s].ty || "el" === t[s].ty || "sr" === t[s].ty ? l || (e[s] = this.createShapeElement(t[s])) : "tm" === t[s].ty || "rd" === t[s].ty || "pb" === t[s].ty ? (l ? (h = e[s]).closed = !1 : ((h = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = h, this.shapeModifiers.push(h)), d.push(h)) : "rp" === t[s].ty && (l ? (h = e[s]).closed = !0 : (h = ShapeModifiers.getModifier(t[s].ty), e[s] = h, h.init(this, t, s, e), this.shapeModifiers.push(h), i = !1), d.push(h));
                        this.addProcessedElement(t[s], s + 1)
                    }
                    for (this.removeTransformFromStyleList(), this.closeStyles(m), c = d.length, s = 0; s < c; s += 1) d[s].closed = !0
                }, CVShapeElement.prototype.renderInnerContent = function() {
                    this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                    (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
                }, CVShapeElement.prototype.drawLayer = function() {
                    var t, e, a, i, r, s, n, o, l, h = this.stylesList.length,
                        p = this.globalData.renderer,
                        c = this.globalData.canvasContext;
                    for (t = 0; t < h; t += 1)
                        if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                            for (p.save(), s = l.elements, "st" === o || "gs" === o ? (c.strokeStyle = "st" === o ? l.co : l.grd, c.lineWidth = l.wi, c.lineCap = l.lc, c.lineJoin = l.lj, c.miterLimit = l.ml || 0) : c.fillStyle = "fl" === o ? l.co : l.grd, p.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && c.beginPath(), p.ctxTransform(l.preTransforms.finalTransform.props), a = s.length, e = 0; e < a; e += 1) {
                                for ("st" !== o && "gs" !== o || (c.beginPath(), l.da && (c.setLineDash(l.da), c.lineDashOffset = l.do)), r = (n = s[e].trNodes).length, i = 0; i < r; i += 1) "m" === n[i].t ? c.moveTo(n[i].p[0], n[i].p[1]) : "c" === n[i].t ? c.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : c.closePath();
                                "st" !== o && "gs" !== o || (c.stroke(), l.da && c.setLineDash(this.dashResetter))
                            }
                            "st" !== o && "gs" !== o && c.fill(l.r), p.restore()
                        }
                }, CVShapeElement.prototype.renderShape = function(t, e, a, i) {
                    var r, s;
                    for (s = t, r = e.length - 1; r >= 0; r -= 1) "tr" === e[r].ty ? (s = a[r].transform, this.renderShapeTransform(t, s)) : "sh" === e[r].ty || "el" === e[r].ty || "rc" === e[r].ty || "sr" === e[r].ty ? this.renderPath(e[r], a[r]) : "fl" === e[r].ty ? this.renderFill(e[r], a[r], s) : "st" === e[r].ty ? this.renderStroke(e[r], a[r], s) : "gf" === e[r].ty || "gs" === e[r].ty ? this.renderGradientFill(e[r], a[r], s) : "gr" === e[r].ty ? this.renderShape(s, e[r].it, a[r].it) : e[r].ty;
                    i && this.drawLayer()
                }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                    if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                        var a, i, r, s = t.trNodes,
                            n = e.paths,
                            o = n._length;
                        s.length = 0;
                        var l = t.transforms.finalTransform;
                        for (r = 0; r < o; r += 1) {
                            var h = n.shapes[r];
                            if (h && h.v) {
                                for (i = h._length, a = 1; a < i; a += 1) 1 === a && s.push({
                                    t: "m",
                                    p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                                }), s.push({
                                    t: "c",
                                    pts: l.applyToTriplePoints(h.o[a - 1], h.i[a], h.v[a])
                                });
                                1 === i && s.push({
                                    t: "m",
                                    p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                                }), h.c && i && (s.push({
                                    t: "c",
                                    pts: l.applyToTriplePoints(h.o[a - 1], h.i[0], h.v[0])
                                }), s.push({
                                    t: "z"
                                }))
                            }
                        }
                        t.trNodes = s
                    }
                }, CVShapeElement.prototype.renderPath = function(t, e) {
                    if (!0 !== t.hd && t._shouldRender) {
                        var a, i = e.styledShapes.length;
                        for (a = 0; a < i; a += 1) this.renderStyledShape(e.styledShapes[a], e.sh)
                    }
                }, CVShapeElement.prototype.renderFill = function(t, e, a) {
                    var i = e.style;
                    (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || a._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * a.opacity)
                }, CVShapeElement.prototype.renderGradientFill = function(t, e, a) {
                    var i, r = e.style;
                    if (!r.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                        var s, n = this.globalData.canvasContext,
                            o = e.s.v,
                            l = e.e.v;
                        if (1 === t.t) i = n.createLinearGradient(o[0], o[1], l[0], l[1]);
                        else {
                            var h = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                                p = Math.atan2(l[1] - o[1], l[0] - o[0]),
                                c = e.h.v;
                            c >= 1 ? c = .99 : c <= -1 && (c = -.99);
                            var m = h * c,
                                d = Math.cos(p + e.a.v) * m + o[0],
                                f = Math.sin(p + e.a.v) * m + o[1];
                            i = n.createRadialGradient(d, f, 0, o[0], o[1], h)
                        }
                        var u = t.g.p,
                            g = e.g.c,
                            y = 1;
                        for (s = 0; s < u; s += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * s + 1]), i.addColorStop(g[4 * s] / 100, "rgba(" + g[4 * s + 1] + "," + g[4 * s + 2] + "," + g[4 * s + 3] + "," + y + ")");
                        r.grd = i
                    }
                    r.coOp = e.o.v * a.opacity
                }, CVShapeElement.prototype.renderStroke = function(t, e, a) {
                    var i = e.style,
                        r = e.d;
                    r && (r._mdf || this._isFirstFrame) && (i.da = r.dashArray, i.do = r.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || a._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * a.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
                }, CVShapeElement.prototype.destroy = function() {
                    this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                    var t = this.canvasContext;
                    t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                    var t = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                    var e = !1;
                    t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                    var a = !1;
                    t.sc && (a = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                    var i, r, s, n, o, l, h, p, c, m, d, f, u = this.globalData.fontManager.getFontByName(t.f),
                        g = t.l,
                        y = this.mHelper;
                    this.stroke = a, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, r = t.finalText.length;
                    var v = this.data.singleShape,
                        x = .001 * t.tr * t.finalSize,
                        k = 0,
                        b = 0,
                        E = !0,
                        S = 0;
                    for (i = 0; i < r; i += 1) {
                        for (n = (s = this.globalData.fontManager.getCharData(t.finalText[i], u.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && s.data || {}, y.reset(), v && g[i].n && (k = -x, b += t.yOffset, b += E ? 1 : 0, E = !1), c = (h = n.shapes ? n.shapes[0].it : []).length, y.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, y, g[i].line, k, b), d = createSizedArray(c), p = 0; p < c; p += 1) {
                            for (l = h[p].ks.k.i.length, m = h[p].ks.k, f = [], o = 1; o < l; o += 1) 1 === o && f.push(y.applyToX(m.v[0][0], m.v[0][1], 0), y.applyToY(m.v[0][0], m.v[0][1], 0)), f.push(y.applyToX(m.o[o - 1][0], m.o[o - 1][1], 0), y.applyToY(m.o[o - 1][0], m.o[o - 1][1], 0), y.applyToX(m.i[o][0], m.i[o][1], 0), y.applyToY(m.i[o][0], m.i[o][1], 0), y.applyToX(m.v[o][0], m.v[o][1], 0), y.applyToY(m.v[o][0], m.v[o][1], 0));
                            f.push(y.applyToX(m.o[o - 1][0], m.o[o - 1][1], 0), y.applyToY(m.o[o - 1][0], m.o[o - 1][1], 0), y.applyToX(m.i[0][0], m.i[0][1], 0), y.applyToY(m.i[0][0], m.i[0][1], 0), y.applyToX(m.v[0][0], m.v[0][1], 0), y.applyToY(m.v[0][0], m.v[0][1], 0)), d[p] = f
                        }
                        v && (k += g[i].l, k += x), this.textSpans[S] ? this.textSpans[S].elem = d : this.textSpans[S] = {
                            elem: d
                        }, S += 1
                    }
                }, CVTextElement.prototype.renderInnerContent = function() {
                    var t, e, a, i, r, s, n = this.canvasContext;
                    n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                    var o, l = this.textAnimator.renderedLetters,
                        h = this.textProperty.currentData.l;
                    e = h.length;
                    var p, c, m = null,
                        d = null,
                        f = null;
                    for (t = 0; t < e; t += 1)
                        if (!h[t].n) {
                            if ((o = l[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                                for (o && o.fc ? m !== o.fc && (m = o.fc, n.fillStyle = o.fc) : m !== this.values.fill && (m = this.values.fill, n.fillStyle = this.values.fill), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), a = 0; a < i; a += 1)
                                    for (s = (c = p[a]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), r = 2; r < s; r += 6) this.globalData.canvasContext.bezierCurveTo(c[r], c[r + 1], c[r + 2], c[r + 3], c[r + 4], c[r + 5]);
                                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                            }
                            if (this.stroke) {
                                for (o && o.sw ? f !== o.sw && (f = o.sw, n.lineWidth = o.sw) : f !== this.values.sWidth && (f = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? d !== o.sc && (d = o.sc, n.strokeStyle = o.sc) : d !== this.values.stroke && (d = this.values.stroke, n.strokeStyle = this.values.stroke), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), a = 0; a < i; a += 1)
                                    for (s = (c = p[a]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), r = 2; r < s; r += 6) this.globalData.canvasContext.bezierCurveTo(c[r], c[r + 1], c[r + 2], c[r + 3], c[r + 4], c[r + 5]);
                                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                            }
                            o && this.globalData.renderer.restore()
                        }
                }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
                    checkBlendMode: function() {},
                    initRendererElement: function() {
                        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                    },
                    createContainerElements: function() {
                        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        var t = this.transformedElement ? this.transformedElement.style : {};
                        if (this.finalTransform._matMdf) {
                            var e = this.finalTransform.mat.toCSS();
                            t.transform = e, t.webkitTransform = e
                        }
                        this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    destroy: function() {
                        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new MaskElement(this.data, this, this.globalData)
                    },
                    addEffects: function() {},
                    setMatte: function() {}
                }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                    var t;
                    this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
                }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                    this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                    for (var a, i = 0; i < e;) this.elements[i] && this.elements[i].getBaseElement && (a = this.elements[i].getBaseElement()), i += 1;
                    a ? this.layerElement.insertBefore(t, a) : this.layerElement.appendChild(t)
                }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                    var t;
                    if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                    else {
                        t = createNS("svg");
                        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
                    }
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
                }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
                    var a, i = t.length;
                    for (a = 0; a < i; a += 1) e = t[a].mProps.v.applyToPointArray(e[0], e[1], 0);
                    return e
                }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                    var a, i, r, s, n, o = t.sh.v,
                        l = t.transformers,
                        h = o._length;
                    if (!(h <= 1)) {
                        for (a = 0; a < h - 1; a += 1) i = this.getTransformedPoint(l, o.v[a]), r = this.getTransformedPoint(l, o.o[a]), s = this.getTransformedPoint(l, o.i[a + 1]), n = this.getTransformedPoint(l, o.v[a + 1]), this.checkBounds(i, r, s, n, e);
                        o.c && (i = this.getTransformedPoint(l, o.v[a]), r = this.getTransformedPoint(l, o.o[a]), s = this.getTransformedPoint(l, o.i[0]), n = this.getTransformedPoint(l, o.v[0]), this.checkBounds(i, r, s, n, e))
                    }
                }, HShapeElement.prototype.checkBounds = function(t, e, a, i, r) {
                    this.getBoundsOfCurve(t, e, a, i);
                    var s = this.shapeBoundingBox;
                    r.x = bmMin(s.left, r.x), r.xMax = bmMax(s.right, r.xMax), r.y = bmMin(s.top, r.y), r.yMax = bmMax(s.bottom, r.yMax)
                }, HShapeElement.prototype.shapeBoundingBox = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, HShapeElement.prototype.tempBoundingBox = {
                    x: 0,
                    xMax: 0,
                    y: 0,
                    yMax: 0,
                    width: 0,
                    height: 0
                }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, a, i) {
                    for (var r, s, n, o, l, h, p, c = [
                        [t[0], i[0]],
                        [t[1], i[1]]
                    ], m = 0; m < 2; ++m) s = 6 * t[m] - 12 * e[m] + 6 * a[m], r = -3 * t[m] + 9 * e[m] - 9 * a[m] + 3 * i[m], n = 3 * e[m] - 3 * t[m], s |= 0, n |= 0, 0 === (r |= 0) && 0 === s || (0 === r ? (o = -n / s) > 0 && o < 1 && c[m].push(this.calculateF(o, t, e, a, i, m)) : (l = s * s - 4 * n * r) >= 0 && ((h = (-s + bmSqrt(l)) / (2 * r)) > 0 && h < 1 && c[m].push(this.calculateF(h, t, e, a, i, m)), (p = (-s - bmSqrt(l)) / (2 * r)) > 0 && p < 1 && c[m].push(this.calculateF(p, t, e, a, i, m))));
                    this.shapeBoundingBox.left = bmMin.apply(null, c[0]), this.shapeBoundingBox.top = bmMin.apply(null, c[1]), this.shapeBoundingBox.right = bmMax.apply(null, c[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, c[1])
                }, HShapeElement.prototype.calculateF = function(t, e, a, i, r, s) {
                    return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * a[s] + 3 * (1 - t) * bmPow(t, 2) * i[s] + bmPow(t, 3) * r[s]
                }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                    var a, i = t.length;
                    for (a = 0; a < i; a += 1) t[a] && t[a].sh ? this.calculateShapeBoundingBox(t[a], e) : t[a] && t[a].it && this.calculateBoundingBox(t[a].it, e)
                }, HShapeElement.prototype.currentBoxContains = function(t) {
                    return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
                }, HShapeElement.prototype.renderInnerContent = function() {
                    if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var t = this.tempBoundingBox,
                            e = 999999;
                        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                        var a = !1;
                        if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), a = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), a = !0), a || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                            this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                            var i = this.shapeCont.style,
                                r = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            i.transform = r, i.webkitTransform = r
                        }
                    }
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                    if (this.isMasked = this.checkMasks(), this.isMasked) {
                        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                        var t = createNS("g");
                        this.maskedElement.appendChild(t), this.innerElem = t
                    } else this.renderType = "html", this.innerElem = this.layerElement;
                    this.checkParenting()
                }, HTextElement.prototype.buildNewText = function() {
                    var t = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                    var e = this.innerElem.style,
                        a = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                    e.fill = a, e.color = a, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                    var i, r, s = this.globalData.fontManager.getFontByName(t.f);
                    if (!this.globalData.fontManager.chars)
                        if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
                        else {
                            e.fontFamily = s.fFamily;
                            var n = t.fWeight,
                                o = t.fStyle;
                            e.fontStyle = o, e.fontWeight = n
                        }
                    var l, h, p, c = t.l;
                    r = c.length;
                    var m, d = this.mHelper,
                        f = "",
                        u = 0;
                    for (i = 0; i < r; i += 1) {
                        if (this.globalData.fontManager.chars ? (this.textPaths[u] ? l = this.textPaths[u] : ((l = createNS("path")).setAttribute("stroke-linecap", "butt"), l.setAttribute("stroke-linejoin", "round"), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[u] ? p = (h = this.textSpans[u]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(l), styleDiv(h)))) : this.isMasked ? l = this.textPaths[u] ? this.textPaths[u] : createNS("text") : this.textSpans[u] ? (h = this.textSpans[u], l = this.textPaths[u]) : (styleDiv(h = createTag("span")), styleDiv(l = createTag("span")), h.appendChild(l)), this.globalData.fontManager.chars) {
                            var g, y = this.globalData.fontManager.getCharData(t.finalText[i], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                            if (g = y ? y.data : null, d.reset(), g && g.shapes && (m = g.shapes[0].it, d.scale(t.finalSize / 100, t.finalSize / 100), f = this.createPathShape(d, m), l.setAttribute("d", f)), this.isMasked) this.innerElem.appendChild(l);
                            else {
                                if (this.innerElem.appendChild(h), g && g.shapes) {
                                    document.body.appendChild(p);
                                    var v = p.getBBox();
                                    p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                                    var x = p.style,
                                        k = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                                    x.transform = k, x.webkitTransform = k, c[i].yOffset = v.y - 1
                                } else p.setAttribute("width", 1), p.setAttribute("height", 1);
                                h.appendChild(p)
                            }
                        } else if (l.textContent = c[i].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
                        else {
                            this.innerElem.appendChild(h);
                            var b = l.style,
                                E = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                            b.transform = E, b.webkitTransform = E
                        }
                        this.isMasked ? this.textSpans[u] = l : this.textSpans[u] = h, this.textSpans[u].style.display = "block", this.textPaths[u] = l, u += 1
                    }
                    for (; u < this.textSpans.length;) this.textSpans[u].style.display = "none", u += 1
                }, HTextElement.prototype.renderInnerContent = function() {
                    var t;
                    if (this.data.singleShape) {
                        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                        if (this.isMasked && this.finalTransform._matMdf) {
                            this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                            var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                            t.transform = e, t.webkitTransform = e
                        }
                    }
                    if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                        var a, i, r, s, n, o = 0,
                            l = this.textAnimator.renderedLetters,
                            h = this.textProperty.currentData.l;
                        for (i = h.length, a = 0; a < i; a += 1) h[a].n ? o += 1 : (s = this.textSpans[a], n = this.textPaths[a], r = l[o], o += 1, r._mdf.m && (this.isMasked ? s.setAttribute("transform", r.m) : (s.style.webkitTransform = r.m, s.style.transform = r.m)), s.style.opacity = r.o, r.sw && r._mdf.sw && n.setAttribute("stroke-width", r.sw), r.sc && r._mdf.sc && n.setAttribute("stroke", r.sc), r.fc && r._mdf.fc && (n.setAttribute("fill", r.fc), n.style.color = r.fc));
                        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                            var p = this.innerElem.getBBox();
                            this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height));
                            if (this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                                this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                                var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                t.transform = c, t.webkitTransform = c
                            }
                        }
                    }
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                    var t = this.globalData.getAssetsPath(this.assetData),
                        e = new Image;
                    this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                    var t, e, a, i, r = this.comp.threeDElements.length;
                    for (t = 0; t < r; t += 1)
                        if ("3d" === (e = this.comp.threeDElements[t]).type) {
                            a = e.perspectiveElem.style, i = e.container.style;
                            var s = this.pe.v + "px",
                                n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                            a.perspective = s, a.webkitPerspective = s, i.transformOrigin = "0px 0px 0px", i.mozTransformOrigin = "0px 0px 0px", i.webkitTransformOrigin = "0px 0px 0px", a.transform = n, a.webkitTransform = n
                        }
                }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                    var t, e, a = this._isFirstFrame;
                    if (this.hierarchy)
                        for (e = this.hierarchy.length, t = 0; t < e; t += 1) a = this.hierarchy[t].finalTransform.mProp._mdf || a;
                    if (a || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                        if (this.mat.reset(), this.hierarchy)
                            for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                                var i = this.hierarchy[t].finalTransform.mProp;
                                this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                            }
                        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                            var r;
                            r = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                            var s = Math.sqrt(Math.pow(r[0], 2) + Math.pow(r[1], 2) + Math.pow(r[2], 2)),
                                n = [r[0] / s, r[1] / s, r[2] / s],
                                o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                                l = Math.atan2(n[1], o),
                                h = Math.atan2(n[0], -n[2]);
                            this.mat.rotateY(h).rotateX(-l)
                        }
                        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                        var p = !this._prevMat.equals(this.mat);
                        if ((p || this.pe._mdf) && this.comp.threeDElements) {
                            var c, m, d;
                            for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                                if ("3d" === (c = this.comp.threeDElements[t]).type) {
                                    if (p) {
                                        var f = this.mat.toCSS();
                                        (d = c.container.style).transform = f, d.webkitTransform = f
                                    }
                                    this.pe._mdf && ((m = c.perspectiveElem.style).perspective = this.pe.v + "px", m.webkitPerspective = this.pe.v + "px")
                                }
                            this.mat.clone(this._prevMat)
                        }
                    }
                    this._isFirstFrame = !1
                }, HCameraElement.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                    return null
                }, HEffects.prototype.renderFrame = function() {};
                var animationManager = function() {
                        var t = {},
                            e = [],
                            a = 0,
                            i = 0,
                            r = 0,
                            s = !0,
                            n = !1;

                        function o(t) {
                            for (var a = 0, r = t.target; a < i;) e[a].animation === r && (e.splice(a, 1), a -= 1, i -= 1, r.isPaused || p()), a += 1
                        }

                        function l(t, a) {
                            if (!t) return null;
                            for (var r = 0; r < i;) {
                                if (e[r].elem === t && null !== e[r].elem) return e[r].animation;
                                r += 1
                            }
                            var s = new AnimationItem;
                            return c(s, t), s.setData(t, a), s
                        }

                        function h() {
                            r += 1, f()
                        }

                        function p() {
                            r -= 1
                        }

                        function c(t, a) {
                            t.addEventListener("destroy", o), t.addEventListener("_active", h), t.addEventListener("_idle", p), e.push({
                                elem: a,
                                animation: t
                            }), i += 1
                        }

                        function m(t) {
                            var o, l = t - a;
                            for (o = 0; o < i; o += 1) e[o].animation.advanceTime(l);
                            a = t, r && !n ? window.requestAnimationFrame(m) : s = !0
                        }

                        function d(t) {
                            a = t, window.requestAnimationFrame(m)
                        }

                        function f() {
                            !n && r && s && (window.requestAnimationFrame(d), s = !1)
                        }
                        return t.registerAnimation = l, t.loadAnimation = function(t) {
                            var e = new AnimationItem;
                            return c(e, null), e.setParams(t), e
                        }, t.setSpeed = function(t, a) {
                            var r;
                            for (r = 0; r < i; r += 1) e[r].animation.setSpeed(t, a)
                        }, t.setDirection = function(t, a) {
                            var r;
                            for (r = 0; r < i; r += 1) e[r].animation.setDirection(t, a)
                        }, t.play = function(t) {
                            var a;
                            for (a = 0; a < i; a += 1) e[a].animation.play(t)
                        }, t.pause = function(t) {
                            var a;
                            for (a = 0; a < i; a += 1) e[a].animation.pause(t)
                        }, t.stop = function(t) {
                            var a;
                            for (a = 0; a < i; a += 1) e[a].animation.stop(t)
                        }, t.togglePause = function(t) {
                            var a;
                            for (a = 0; a < i; a += 1) e[a].animation.togglePause(t)
                        }, t.searchAnimations = function(t, e, a) {
                            var i, r = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                s = r.length;
                            for (i = 0; i < s; i += 1) a && r[i].setAttribute("data-bm-type", a), l(r[i], t);
                            if (e && 0 === s) {
                                a || (a = "svg");
                                var n = document.getElementsByTagName("body")[0];
                                n.innerText = "";
                                var o = createTag("div");
                                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", a), n.appendChild(o), l(o, t)
                            }
                        }, t.resize = function() {
                            var t;
                            for (t = 0; t < i; t += 1) e[t].animation.resize()
                        }, t.goToAndStop = function(t, a, r) {
                            var s;
                            for (s = 0; s < i; s += 1) e[s].animation.goToAndStop(t, a, r)
                        }, t.destroy = function(t) {
                            var a;
                            for (a = i - 1; a >= 0; a -= 1) e[a].animation.destroy(t)
                        }, t.freeze = function() {
                            n = !0
                        }, t.unfreeze = function() {
                            n = !1, f()
                        }, t.setVolume = function(t, a) {
                            var r;
                            for (r = 0; r < i; r += 1) e[r].animation.setVolume(t, a)
                        }, t.mute = function(t) {
                            var a;
                            for (a = 0; a < i; a += 1) e[a].animation.mute(t)
                        }, t.unmute = function(t) {
                            var a;
                            for (a = 0; a < i; a += 1) e[a].animation.unmute(t)
                        }, t.getRegisteredAnimations = function() {
                            var t, a = e.length,
                                i = [];
                            for (t = 0; t < a; t += 1) i.push(e[t].animation);
                            return i
                        }, t
                    }(),
                    AnimationItem = function() {
                        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = []
                    };
                extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                    (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                    var e = "svg";
                    switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
                        case "canvas":
                            this.renderer = new CanvasRenderer(this, t.rendererSettings);
                            break;
                        case "svg":
                            this.renderer = new SVGRenderer(this, t.rendererSettings);
                            break;
                        default:
                            this.renderer = new HybridRenderer(this, t.rendererSettings)
                    }
                    this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() {
                        this.trigger("data_failed")
                    }.bind(this)))
                }, AnimationItem.prototype.setData = function(t, e) {
                    e && "object" != typeof e && (e = JSON.parse(e));
                    var a = {
                            wrapper: t,
                            animationData: e
                        },
                        i = t.attributes;
                    a.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", a.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
                    var r = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
                    "false" === r ? a.loop = !1 : "true" === r ? a.loop = !0 : "" !== r && (a.loop = parseInt(r, 10));
                    var s = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
                    a.autoplay = "false" !== s, a.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (a.prerender = !1), this.setParams(a)
                }, AnimationItem.prototype.includeLayers = function(t) {
                    t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                    var e, a, i = this.animationData.layers,
                        r = i.length,
                        s = t.layers,
                        n = s.length;
                    for (a = 0; a < n; a += 1)
                        for (e = 0; e < r;) {
                            if (i[e].id === s[a].id) {
                                i[e] = s[a];
                                break
                            }
                            e += 1
                        }
                    if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                        for (r = t.assets.length, e = 0; e < r; e += 1) this.animationData.assets.push(t.assets[e]);
                    this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
                }, AnimationItem.prototype.loadNextSegment = function() {
                    var t = this.animationData.segments;
                    if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                    var e = t.shift();
                    this.timeCompleted = e.time * this.frameRate;
                    var a = this.path + this.fileName + "_" + this.segmentPos + ".json";
                    this.segmentPos += 1, assetLoader.load(a, this.includeLayers.bind(this), function() {
                        this.trigger("data_failed")
                    }.bind(this))
                }, AnimationItem.prototype.loadSegments = function() {
                    this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                }, AnimationItem.prototype.imagesLoaded = function() {
                    this.trigger("loaded_images"), this.checkLoaded()
                }, AnimationItem.prototype.preloadImages = function() {
                    this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                }, AnimationItem.prototype.configAnimation = function(t) {
                    if (this.renderer) try {
                        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                    } catch (t) {
                        this.triggerConfigError(t)
                    }
                }, AnimationItem.prototype.waitForFontsLoaded = function() {
                    this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                }, AnimationItem.prototype.checkLoaded = function() {
                    !this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                        this.trigger("DOMLoaded")
                    }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
                }, AnimationItem.prototype.resize = function() {
                    this.renderer.updateContainerSize()
                }, AnimationItem.prototype.setSubframe = function(t) {
                    this.isSubframeEnabled = !!t
                }, AnimationItem.prototype.gotoFrame = function() {
                    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
                }, AnimationItem.prototype.renderFrame = function() {
                    if (!1 !== this.isLoaded && this.renderer) try {
                        this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (t) {
                        this.triggerRenderFrameError(t)
                    }
                }, AnimationItem.prototype.play = function(t) {
                    t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                }, AnimationItem.prototype.pause = function(t) {
                    t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                }, AnimationItem.prototype.togglePause = function(t) {
                    t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
                }, AnimationItem.prototype.stop = function(t) {
                    t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                }, AnimationItem.prototype.getMarkerData = function(t) {
                    for (var e, a = 0; a < this.markers.length; a += 1)
                        if ((e = this.markers[a]).payload && e.payload.name === t) return e;
                    return null
                }, AnimationItem.prototype.goToAndStop = function(t, e, a) {
                    if (!a || this.name === a) {
                        var i = Number(t);
                        if (isNaN(i)) {
                            var r = this.getMarkerData(t);
                            r && this.goToAndStop(r.time, !0)
                        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                        this.pause()
                    }
                }, AnimationItem.prototype.goToAndPlay = function(t, e, a) {
                    if (!a || this.name === a) {
                        var i = Number(t);
                        if (isNaN(i)) {
                            var r = this.getMarkerData(t);
                            r && (r.duration ? this.playSegments([r.time, r.time + r.duration], !0) : this.goToAndStop(r.time, !0))
                        } else this.goToAndStop(i, e, a);
                        this.play()
                    }
                }, AnimationItem.prototype.advanceTime = function(t) {
                    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                        var e = this.currentRawFrame + t * this.frameModifier,
                            a = !1;
                        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (a = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (a = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), a && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                    }
                }, AnimationItem.prototype.adjustSegment = function(t, e) {
                    this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                }, AnimationItem.prototype.setSegment = function(t, e) {
                    var a = -1;
                    this.isPaused && (this.currentRawFrame + this.firstFrame < t ? a = t : this.currentRawFrame + this.firstFrame > e && (a = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== a && this.goToAndStop(a, !0)
                }, AnimationItem.prototype.playSegments = function(t, e) {
                    if (e && (this.segments.length = 0), "object" == typeof t[0]) {
                        var a, i = t.length;
                        for (a = 0; a < i; a += 1) this.segments.push(t[a])
                    } else this.segments.push(t);
                    this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                }, AnimationItem.prototype.resetSegments = function(t) {
                    this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                }, AnimationItem.prototype.checkSegments = function(t) {
                    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                }, AnimationItem.prototype.destroy = function(t) {
                    t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
                }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                    this.currentRawFrame = t, this.gotoFrame()
                }, AnimationItem.prototype.setSpeed = function(t) {
                    this.playSpeed = t, this.updaFrameModifier()
                }, AnimationItem.prototype.setDirection = function(t) {
                    this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                }, AnimationItem.prototype.setVolume = function(t, e) {
                    e && this.name !== e || this.audioController.setVolume(t)
                }, AnimationItem.prototype.getVolume = function() {
                    return this.audioController.getVolume()
                }, AnimationItem.prototype.mute = function(t) {
                    t && this.name !== t || this.audioController.mute()
                }, AnimationItem.prototype.unmute = function(t) {
                    t && this.name !== t || this.audioController.unmute()
                }, AnimationItem.prototype.updaFrameModifier = function() {
                    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                }, AnimationItem.prototype.getPath = function() {
                    return this.path
                }, AnimationItem.prototype.getAssetsPath = function(t) {
                    var e = "";
                    if (t.e) e = t.p;
                    else if (this.assetsPath) {
                        var a = t.p; - 1 !== a.indexOf("images/") && (a = a.split("/")[1]), e = this.assetsPath + a
                    } else e = this.path, e += t.u ? t.u : "", e += t.p;
                    return e
                }, AnimationItem.prototype.getAssetData = function(t) {
                    for (var e = 0, a = this.assets.length; e < a;) {
                        if (t === this.assets[e].id) return this.assets[e];
                        e += 1
                    }
                    return null
                }, AnimationItem.prototype.hide = function() {
                    this.renderer.hide()
                }, AnimationItem.prototype.show = function() {
                    this.renderer.show()
                }, AnimationItem.prototype.getDuration = function(t) {
                    return t ? this.totalFrames : this.totalFrames / this.frameRate
                }, AnimationItem.prototype.trigger = function(t) {
                    if (this._cbs && this._cbs[t]) switch (t) {
                        case "enterFrame":
                            this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                            break;
                        case "loopComplete":
                            this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                            break;
                        case "complete":
                            this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                            break;
                        case "segmentStart":
                            this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                            break;
                        case "destroy":
                            this.triggerEvent(t, new BMDestroyEvent(t, this));
                            break;
                        default:
                            this.triggerEvent(t)
                    }
                    "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
                }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
                    var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                }, AnimationItem.prototype.triggerConfigError = function(t) {
                    var e = new BMConfigErrorEvent(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                };
                var Expressions = function() {
                    var t = {};
                    return t.initExpressions = function(t) {
                        var e = 0,
                            a = [];
                        t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                            e += 1
                        }, t.renderer.globalData.popExpression = function() {
                            0 === (e -= 1) && function() {
                                var t, e = a.length;
                                for (t = 0; t < e; t += 1) a[t].release();
                                a.length = 0
                            }()
                        }, t.renderer.globalData.registerExpressionProperty = function(t) {
                            -1 === a.indexOf(t) && a.push(t)
                        }
                    }, t
                }();
                expressionsPlugin = Expressions;
                var ExpressionManager = function() {
                        var ob = {},
                            Math = BMMath,
                            window = null,
                            document = null,
                            XMLHttpRequest = null,
                            fetch = null;

                        function $bm_isInstanceOfArray(t) {
                            return t.constructor === Array || t.constructor === Float32Array
                        }

                        function isNumerable(t, e) {
                            return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                        }

                        function $bm_neg(t) {
                            var e = typeof t;
                            if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                            if ($bm_isInstanceOfArray(t)) {
                                var a, i = t.length,
                                    r = [];
                                for (a = 0; a < i; a += 1) r[a] = -t[a];
                                return r
                            }
                            return t.propType ? t.v : -t
                        }
                        var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                            easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                            easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                        function sum(t, e) {
                            var a = typeof t,
                                i = typeof e;
                            if ("string" === a || "string" === i) return t + e;
                            if (isNumerable(a, t) && isNumerable(i, e)) return t + e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] += e, t;
                            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                for (var r = 0, s = t.length, n = e.length, o = []; r < s || r < n;)("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? o[r] = t[r] + e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r], r += 1;
                                return o
                            }
                            return 0
                        }
                        var add = sum;

                        function sub(t, e) {
                            var a = typeof t,
                                i = typeof e;
                            if (isNumerable(a, t) && isNumerable(i, e)) return "string" === a && (t = parseInt(t, 10)), "string" === i && (e = parseInt(e, 10)), t - e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] -= e, t;
                            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                for (var r = 0, s = t.length, n = e.length, o = []; r < s || r < n;)("number" == typeof t[r] || t[r] instanceof Number) && ("number" == typeof e[r] || e[r] instanceof Number) ? o[r] = t[r] - e[r] : o[r] = void 0 === e[r] ? t[r] : t[r] || e[r], r += 1;
                                return o
                            }
                            return 0
                        }

                        function mul(t, e) {
                            var a, i, r, s = typeof t,
                                n = typeof e;
                            if (isNumerable(s, t) && isNumerable(n, e)) return t * e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                                for (r = t.length, a = createTypedArray("float32", r), i = 0; i < r; i += 1) a[i] = t[i] * e;
                                return a
                            }
                            if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                                for (r = e.length, a = createTypedArray("float32", r), i = 0; i < r; i += 1) a[i] = t * e[i];
                                return a
                            }
                            return 0
                        }

                        function div(t, e) {
                            var a, i, r, s = typeof t,
                                n = typeof e;
                            if (isNumerable(s, t) && isNumerable(n, e)) return t / e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                                for (r = t.length, a = createTypedArray("float32", r), i = 0; i < r; i += 1) a[i] = t[i] / e;
                                return a
                            }
                            if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                                for (r = e.length, a = createTypedArray("float32", r), i = 0; i < r; i += 1) a[i] = t / e[i];
                                return a
                            }
                            return 0
                        }

                        function mod(t, e) {
                            return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
                        }
                        var $bm_sum = sum,
                            $bm_sub = sub,
                            $bm_mul = mul,
                            $bm_div = div,
                            $bm_mod = mod;

                        function clamp(t, e, a) {
                            if (e > a) {
                                var i = a;
                                a = e, e = i
                            }
                            return Math.min(Math.max(t, e), a)
                        }

                        function radiansToDegrees(t) {
                            return t / degToRads
                        }
                        var radians_to_degrees = radiansToDegrees;

                        function degreesToRadians(t) {
                            return t * degToRads
                        }
                        var degrees_to_radians = radiansToDegrees,
                            helperLengthArray = [0, 0, 0, 0, 0, 0];

                        function length(t, e) {
                            if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                            var a;
                            e || (e = helperLengthArray);
                            var i = Math.min(t.length, e.length),
                                r = 0;
                            for (a = 0; a < i; a += 1) r += Math.pow(e[a] - t[a], 2);
                            return Math.sqrt(r)
                        }

                        function normalize(t) {
                            return div(t, length(t))
                        }

                        function rgbToHsl(t) {
                            var e, a, i = t[0],
                                r = t[1],
                                s = t[2],
                                n = Math.max(i, r, s),
                                o = Math.min(i, r, s),
                                l = (n + o) / 2;
                            if (n === o) e = 0, a = 0;
                            else {
                                var h = n - o;
                                switch (a = l > .5 ? h / (2 - n - o) : h / (n + o), n) {
                                    case i:
                                        e = (r - s) / h + (r < s ? 6 : 0);
                                        break;
                                    case r:
                                        e = (s - i) / h + 2;
                                        break;
                                    case s:
                                        e = (i - r) / h + 4
                                }
                                e /= 6
                            }
                            return [e, a, l, t[3]]
                        }

                        function hue2rgb(t, e, a) {
                            return a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6 ? t + 6 * (e - t) * a : a < .5 ? e : a < 2 / 3 ? t + (e - t) * (2 / 3 - a) * 6 : t
                        }

                        function hslToRgb(t) {
                            var e, a, i, r = t[0],
                                s = t[1],
                                n = t[2];
                            if (0 === s) e = n, i = n, a = n;
                            else {
                                var o = n < .5 ? n * (1 + s) : n + s - n * s,
                                    l = 2 * n - o;
                                e = hue2rgb(l, o, r + 1 / 3), a = hue2rgb(l, o, r), i = hue2rgb(l, o, r - 1 / 3)
                            }
                            return [e, a, i, t[3]]
                        }

                        function linear(t, e, a, i, r) {
                            if (void 0 !== i && void 0 !== r || (i = e, r = a, e = 0, a = 1), a < e) {
                                var s = a;
                                a = e, e = s
                            }
                            if (t <= e) return i;
                            if (t >= a) return r;
                            var n, o = a === e ? 0 : (t - e) / (a - e);
                            if (!i.length) return i + (r - i) * o;
                            var l = i.length,
                                h = createTypedArray("float32", l);
                            for (n = 0; n < l; n += 1) h[n] = i[n] + (r[n] - i[n]) * o;
                            return h
                        }

                        function random(t, e) {
                            if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                                var a, i = e.length;
                                t || (t = createTypedArray("float32", i));
                                var r = createTypedArray("float32", i),
                                    s = BMMath.random();
                                for (a = 0; a < i; a += 1) r[a] = t[a] + s * (e[a] - t[a]);
                                return r
                            }
                            return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                        }

                        function createPath(t, e, a, i) {
                            var r, s = t.length,
                                n = shapePool.newElement();
                            n.setPathData(!!i, s);
                            var o, l, h = [0, 0];
                            for (r = 0; r < s; r += 1) o = e && e[r] ? e[r] : h, l = a && a[r] ? a[r] : h, n.setTripleAt(t[r][0], t[r][1], l[0] + t[r][0], l[1] + t[r][1], o[0] + t[r][0], o[1] + t[r][1], r, !0);
                            return n
                        }

                        function initiateExpression(elem, data, property) {
                            var val = data.x,
                                needsVelocity = /velocity(?![\w\d])/.test(val),
                                _needsRandom = -1 !== val.indexOf("random"),
                                elemType = elem.data.ty,
                                transform, $bm_transform, content, effect, thisProperty = property;
                            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                get: function() {
                                    return thisProperty.v
                                }
                            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                                width = elem.data.sw ? elem.data.sw : 0,
                                height = elem.data.sh ? elem.data.sh : 0,
                                name = elem.data.nm,
                                loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                                numKeys = property.kf ? data.k.length : 0,
                                active = !this.data || !0 !== this.data.hd,
                                wiggle = function(t, e) {
                                    var a, i, r = this.pv.length ? this.pv.length : 1,
                                        s = createTypedArray("float32", r);
                                    var n = Math.floor(5 * time);
                                    for (a = 0, i = 0; a < n;) {
                                        for (i = 0; i < r; i += 1) s[i] += -e + 2 * e * BMMath.random();
                                        a += 1
                                    }
                                    var o = 5 * time,
                                        l = o - Math.floor(o),
                                        h = createTypedArray("float32", r);
                                    if (r > 1) {
                                        for (i = 0; i < r; i += 1) h[i] = this.pv[i] + s[i] + (-e + 2 * e * BMMath.random()) * l;
                                        return h
                                    }
                                    return this.pv + s[0] + (-e + 2 * e * BMMath.random()) * l
                                }.bind(this);

                            function loopInDuration(t, e) {
                                return loopIn(t, e, !0)
                            }

                            function loopOutDuration(t, e) {
                                return loopOut(t, e, !0)
                            }
                            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                                time, velocity, value, text, textIndex, textTotal, selectorValue;

                            function lookAt(t, e) {
                                var a = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                                    i = Math.atan2(a[0], Math.sqrt(a[1] * a[1] + a[2] * a[2])) / degToRads;
                                return [-Math.atan2(a[1], a[2]) / degToRads, i, 0]
                            }

                            function easeOut(t, e, a, i, r) {
                                return applyEase(easeOutBez, t, e, a, i, r)
                            }

                            function easeIn(t, e, a, i, r) {
                                return applyEase(easeInBez, t, e, a, i, r)
                            }

                            function ease(t, e, a, i, r) {
                                return applyEase(easeInOutBez, t, e, a, i, r)
                            }

                            function applyEase(t, e, a, i, r, s) {
                                void 0 === r ? (r = a, s = i) : e = (e - a) / (i - a), e > 1 ? e = 1 : e < 0 && (e = 0);
                                var n = t(e);
                                if ($bm_isInstanceOfArray(r)) {
                                    var o, l = r.length,
                                        h = createTypedArray("float32", l);
                                    for (o = 0; o < l; o += 1) h[o] = (s[o] - r[o]) * n + r[o];
                                    return h
                                }
                                return (s - r) * n + r
                            }

                            function nearestKey(t) {
                                var e, a, i, r = data.k.length;
                                if (data.k.length && "number" != typeof data.k[0])
                                    if (a = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) a = 1, i = data.k[0].t;
                                    else {
                                        for (e = 0; e < r - 1; e += 1) {
                                            if (t === data.k[e].t) {
                                                a = e + 1, i = data.k[e].t;
                                                break
                                            }
                                            if (t > data.k[e].t && t < data.k[e + 1].t) {
                                                t - data.k[e].t > data.k[e + 1].t - t ? (a = e + 2, i = data.k[e + 1].t) : (a = e + 1, i = data.k[e].t);
                                                break
                                            }
                                        } - 1 === a && (a = e + 1, i = data.k[e].t)
                                    } else a = 0, i = 0;
                                var s = {};
                                return s.index = a, s.time = i / elem.comp.globalData.frameRate, s
                            }

                            function key(t) {
                                var e, a, i;
                                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                                t -= 1, e = {
                                    time: data.k[t].t / elem.comp.globalData.frameRate,
                                    value: []
                                };
                                var r = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                                for (i = r.length, a = 0; a < i; a += 1) e[a] = r[a], e.value[a] = r[a];
                                return e
                            }

                            function framesToTime(t, e) {
                                return e || (e = elem.comp.globalData.frameRate), t / e
                            }

                            function timeToFrames(t, e) {
                                return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                            }

                            function seedRandom(t) {
                                BMMath.seedrandom(randSeed + t)
                            }

                            function sourceRectAtTime() {
                                return elem.sourceRectAtTime()
                            }

                            function substring(t, e) {
                                return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                            }

                            function substr(t, e) {
                                return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                            }

                            function posterizeTime(t) {
                                time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                            }
                            var index = elem.data.ind,
                                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                                parent, randSeed = Math.floor(1e6 * Math.random()),
                                globalData = elem.globalData;

                            function executeExpression(t) {
                                return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
                            }
                            return executeExpression
                        }
                        return ob.initiateExpression = initiateExpression, ob
                    }(),
                    expressionHelpers = {
                        searchExpressions: function(t, e, a) {
                            e.x && (a.k = !0, a.x = !0, a.initiateExpression = ExpressionManager.initiateExpression, a.effectsSequence.push(a.initiateExpression(t, e, a).bind(a)))
                        },
                        getSpeedAtTime: function(t) {
                            var e = this.getValueAtTime(t),
                                a = this.getValueAtTime(t + -.01),
                                i = 0;
                            if (e.length) {
                                var r;
                                for (r = 0; r < e.length; r += 1) i += Math.pow(a[r] - e[r], 2);
                                i = 100 * Math.sqrt(i)
                            } else i = 0;
                            return i
                        },
                        getVelocityAtTime: function(t) {
                            if (void 0 !== this.vel) return this.vel;
                            var e, a, i = this.getValueAtTime(t),
                                r = this.getValueAtTime(t + -.001);
                            if (i.length)
                                for (e = createTypedArray("float32", i.length), a = 0; a < i.length; a += 1) e[a] = (r[a] - i[a]) / -.001;
                            else e = (r - i) / -.001;
                            return e
                        },
                        getValueAtTime: function(t) {
                            return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                        },
                        getStaticValueAtTime: function() {
                            return this.pv
                        },
                        setGroupProperty: function(t) {
                            this.propertyGroup = t
                        }
                    };
                ! function() {
                    function t(t, e, a) {
                        if (!this.k || !this.keyframes) return this.pv;
                        t = t ? t.toLowerCase() : "";
                        var i, r, s, n, o, l = this.comp.renderedFrame,
                            h = this.keyframes,
                            p = h[h.length - 1].t;
                        if (l <= p) return this.pv;
                        if (a ? r = p - (i = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1), i = p - (r = h[h.length - 1 - e].t)), "pingpong" === t) {
                            if (Math.floor((l - r) / i) % 2 != 0) return this.getValueAtTime((i - (l - r) % i + r) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === t) {
                                var c = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                                    m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    d = this.getValueAtTime(((l - r) % i + r) / this.comp.globalData.frameRate, 0),
                                    f = Math.floor((l - r) / i);
                                if (this.pv.length) {
                                    for (n = (o = new Array(c.length)).length, s = 0; s < n; s += 1) o[s] = (m[s] - c[s]) * f + d[s];
                                    return o
                                }
                                return (m - c) * f + d
                            }
                            if ("continue" === t) {
                                var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    g = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (n = (o = new Array(u.length)).length, s = 0; s < n; s += 1) o[s] = u[s] + (u[s] - g[s]) * ((l - p) / this.comp.globalData.frameRate) / 5e-4;
                                    return o
                                }
                                return u + (l - p) / .001 * (u - g)
                            }
                        }
                        return this.getValueAtTime(((l - r) % i + r) / this.comp.globalData.frameRate, 0)
                    }

                    function e(t, e, a) {
                        if (!this.k) return this.pv;
                        t = t ? t.toLowerCase() : "";
                        var i, r, s, n, o, l = this.comp.renderedFrame,
                            h = this.keyframes,
                            p = h[0].t;
                        if (l >= p) return this.pv;
                        if (a ? r = p + (i = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > h.length - 1) && (e = h.length - 1), i = (r = h[e].t) - p), "pingpong" === t) {
                            if (Math.floor((p - l) / i) % 2 == 0) return this.getValueAtTime(((p - l) % i + p) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === t) {
                                var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    m = this.getValueAtTime(r / this.comp.globalData.frameRate, 0),
                                    d = this.getValueAtTime((i - (p - l) % i + p) / this.comp.globalData.frameRate, 0),
                                    f = Math.floor((p - l) / i) + 1;
                                if (this.pv.length) {
                                    for (n = (o = new Array(c.length)).length, s = 0; s < n; s += 1) o[s] = d[s] - (m[s] - c[s]) * f;
                                    return o
                                }
                                return d - (m - c) * f
                            }
                            if ("continue" === t) {
                                var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    g = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (n = (o = new Array(u.length)).length, s = 0; s < n; s += 1) o[s] = u[s] + (u[s] - g[s]) * (p - l) / .001;
                                    return o
                                }
                                return u + (u - g) * (p - l) / .001
                            }
                        }
                        return this.getValueAtTime((i - ((p - l) % i + p)) / this.comp.globalData.frameRate, 0)
                    }

                    function a(t, e) {
                        if (!this.k) return this.pv;
                        if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                        var a, i, r = this.comp.renderedFrame / this.comp.globalData.frameRate,
                            s = r - t,
                            n = e > 1 ? (r + t - s) / (e - 1) : 1,
                            o = 0,
                            l = 0;
                        for (a = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                            if (i = this.getValueAtTime(s + o * n), this.pv.length)
                                for (l = 0; l < this.pv.length; l += 1) a[l] += i[l];
                            else a += i;
                            o += 1
                        }
                        if (this.pv.length)
                            for (l = 0; l < this.pv.length; l += 1) a[l] /= e;
                        else a /= e;
                        return a
                    }

                    function i(t) {
                        this._transformCachingAtTime || (this._transformCachingAtTime = {
                            v: new Matrix
                        });
                        var e = this._transformCachingAtTime.v;
                        if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                            var a = this.a.getValueAtTime(t);
                            e.translate(-a[0] * this.a.mult, -a[1] * this.a.mult, a[2] * this.a.mult)
                        }
                        if (this.appliedTransformations < 2) {
                            var i = this.s.getValueAtTime(t);
                            e.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult)
                        }
                        if (this.sk && this.appliedTransformations < 3) {
                            var r = this.sk.getValueAtTime(t),
                                s = this.sa.getValueAtTime(t);
                            e.skewFromAxis(-r * this.sk.mult, s * this.sa.mult)
                        }
                        if (this.r && this.appliedTransformations < 4) {
                            var n = this.r.getValueAtTime(t);
                            e.rotate(-n * this.r.mult)
                        } else if (!this.r && this.appliedTransformations < 4) {
                            var o = this.rz.getValueAtTime(t),
                                l = this.ry.getValueAtTime(t),
                                h = this.rx.getValueAtTime(t),
                                p = this.or.getValueAtTime(t);
                            e.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
                        }
                        if (this.data.p && this.data.p.s) {
                            var c = this.px.getValueAtTime(t),
                                m = this.py.getValueAtTime(t);
                            if (this.data.p.z) {
                                var d = this.pz.getValueAtTime(t);
                                e.translate(c * this.px.mult, m * this.py.mult, -d * this.pz.mult)
                            } else e.translate(c * this.px.mult, m * this.py.mult, 0)
                        } else {
                            var f = this.p.getValueAtTime(t);
                            e.translate(f[0] * this.p.mult, f[1] * this.p.mult, -f[2] * this.p.mult)
                        }
                        return e
                    }

                    function r() {
                        return this.v.clone(new Matrix)
                    }
                    var s = TransformPropertyFactory.getTransformProperty;
                    TransformPropertyFactory.getTransformProperty = function(t, e, a) {
                        var n = s(t, e, a);
                        return n.dynamicProperties.length ? n.getValueAtTime = i.bind(n) : n.getValueAtTime = r.bind(n), n.setGroupProperty = expressionHelpers.setGroupProperty, n
                    };
                    var n = PropertyFactory.getProp;
                    PropertyFactory.getProp = function(i, r, s, o, l) {
                        var h = n(i, r, s, o, l);
                        h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = t, h.loopIn = e, h.smooth = a, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === r.a ? r.k.length : 0, h.propertyIndex = r.ix;
                        var p = 0;
                        return 0 !== s && (p = createTypedArray("float32", 1 === r.a ? r.k[0].s.length : r.k.length)), h._cachingAtTime = {
                            lastFrame: initialDefaultFrame,
                            lastIndex: 0,
                            value: p
                        }, expressionHelpers.searchExpressions(i, r, h), h.k && l.addDynamicProperty(h), h
                    };
                    var o = ShapePropertyFactory.getConstructorFunction(),
                        l = ShapePropertyFactory.getKeyframedConstructorFunction();

                    function h() {}
                    h.prototype = {
                        vertices: function(t, e) {
                            this.k && this.getValue();
                            var a, i = this.v;
                            void 0 !== e && (i = this.getValueAtTime(e, 0));
                            var r = i._length,
                                s = i[t],
                                n = i.v,
                                o = createSizedArray(r);
                            for (a = 0; a < r; a += 1) o[a] = "i" === t || "o" === t ? [s[a][0] - n[a][0], s[a][1] - n[a][1]] : [s[a][0], s[a][1]];
                            return o
                        },
                        points: function(t) {
                            return this.vertices("v", t)
                        },
                        inTangents: function(t) {
                            return this.vertices("i", t)
                        },
                        outTangents: function(t) {
                            return this.vertices("o", t)
                        },
                        isClosed: function() {
                            return this.v.c
                        },
                        pointOnPath: function(t, e) {
                            var a = this.v;
                            void 0 !== e && (a = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(a));
                            for (var i, r = this._segmentsLength, s = r.lengths, n = r.totalLength * t, o = 0, l = s.length, h = 0; o < l;) {
                                if (h + s[o].addedLength > n) {
                                    var p = o,
                                        c = a.c && o === l - 1 ? 0 : o + 1,
                                        m = (n - h) / s[o].addedLength;
                                    i = bez.getPointInSegment(a.v[p], a.v[c], a.o[p], a.i[c], m, s[o]);
                                    break
                                }
                                h += s[o].addedLength, o += 1
                            }
                            return i || (i = a.c ? [a.v[0][0], a.v[0][1]] : [a.v[a._length - 1][0], a.v[a._length - 1][1]]), i
                        },
                        vectorOnPath: function(t, e, a) {
                            1 == t ? t = this.v.c : 0 == t && (t = .999);
                            var i = this.pointOnPath(t, e),
                                r = this.pointOnPath(t + .001, e),
                                s = r[0] - i[0],
                                n = r[1] - i[1],
                                o = Math.sqrt(Math.pow(s, 2) + Math.pow(n, 2));
                            return 0 === o ? [0, 0] : "tangent" === a ? [s / o, n / o] : [-n / o, s / o]
                        },
                        tangentOnPath: function(t, e) {
                            return this.vectorOnPath(t, e, "tangent")
                        },
                        normalOnPath: function(t, e) {
                            return this.vectorOnPath(t, e, "normal")
                        },
                        setGroupProperty: expressionHelpers.setGroupProperty,
                        getValueAtTime: expressionHelpers.getStaticValueAtTime
                    }, extendPrototype([h], o), extendPrototype([h], l), l.prototype.getValueAtTime = function(t) {
                        return this._cachingAtTime || (this._cachingAtTime = {
                            shapeValue: shapePool.clone(this.pv),
                            lastIndex: 0,
                            lastTime: initialDefaultFrame
                        }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                    }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
                    var p = ShapePropertyFactory.getShapeProp;
                    ShapePropertyFactory.getShapeProp = function(t, e, a, i, r) {
                        var s = p(t, e, a, i, r);
                        return s.propertyIndex = e.ix, s.lock = !1, 3 === a ? expressionHelpers.searchExpressions(t, e.pt, s) : 4 === a && expressionHelpers.searchExpressions(t, e.ks, s), s.k && t.addDynamicProperty(s), s
                    }
                }(), TextProperty.prototype.getExpressionValue = function(t, e) {
                    var a = this.calculateExpression(e);
                    if (t.t !== a) {
                        var i = {};
                        return this.copyData(i, t), i.t = a.toString(), i.__complete = !1, i
                    }
                    return t
                }, TextProperty.prototype.searchProperty = function() {
                    var t = this.searchKeyframes(),
                        e = this.searchExpressions();
                    return this.kf = t || e, this.kf
                }, TextProperty.prototype.searchExpressions = function() {
                    return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                };
                var ShapePathInterface = function(t, e, a) {
                        var i = e.sh;

                        function r(t) {
                            return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? r.path : null
                        }
                        var s = propertyGroupFactory(r, a);
                        return i.setGroupProperty(PropertyInterface("Path", s)), Object.defineProperties(r, {
                            path: {
                                get: function() {
                                    return i.k && i.getValue(), i
                                }
                            },
                            shape: {
                                get: function() {
                                    return i.k && i.getValue(), i
                                }
                            },
                            _name: {
                                value: t.nm
                            },
                            ix: {
                                value: t.ix
                            },
                            propertyIndex: {
                                value: t.ix
                            },
                            mn: {
                                value: t.mn
                            },
                            propertyGroup: {
                                value: a
                            }
                        }), r
                    },
                    propertyGroupFactory = function(t, e) {
                        return function(a) {
                            return (a = void 0 === a ? 1 : a) <= 0 ? t : e(a - 1)
                        }
                    },
                    PropertyInterface = function(t, e) {
                        var a = {
                            _name: t
                        };
                        return function(t) {
                            return (t = void 0 === t ? 1 : t) <= 0 ? a : e(t - 1)
                        }
                    },
                    ShapeExpressionInterface = function() {
                        function t(t, o, d) {
                            var f, u = [],
                                g = t ? t.length : 0;
                            for (f = 0; f < g; f += 1) "gr" === t[f].ty ? u.push(e(t[f], o[f], d)) : "fl" === t[f].ty ? u.push(a(t[f], o[f], d)) : "st" === t[f].ty ? u.push(s(t[f], o[f], d)) : "tm" === t[f].ty ? u.push(n(t[f], o[f], d)) : "tr" === t[f].ty || ("el" === t[f].ty ? u.push(l(t[f], o[f], d)) : "sr" === t[f].ty ? u.push(h(t[f], o[f], d)) : "sh" === t[f].ty ? u.push(ShapePathInterface(t[f], o[f], d)) : "rc" === t[f].ty ? u.push(p(t[f], o[f], d)) : "rd" === t[f].ty ? u.push(c(t[f], o[f], d)) : "rp" === t[f].ty ? u.push(m(t[f], o[f], d)) : "gf" === t[f].ty ? u.push(i(t[f], o[f], d)) : u.push(r(t[f], o[f])));
                            return u
                        }

                        function e(e, a, i) {
                            var r = function(t) {
                                switch (t) {
                                    case "ADBE Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return r.content;
                                    default:
                                        return r.transform
                                }
                            };
                            r.propertyGroup = propertyGroupFactory(r, i);
                            var s = function(e, a, i) {
                                    var r, s = function(t) {
                                        for (var e = 0, a = r.length; e < a;) {
                                            if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t) return r[e];
                                            e += 1
                                        }
                                        return "number" == typeof t ? r[t - 1] : null
                                    };
                                    s.propertyGroup = propertyGroupFactory(s, i), r = t(e.it, a.it, s.propertyGroup), s.numProperties = r.length;
                                    var n = o(e.it[e.it.length - 1], a.it[a.it.length - 1], s.propertyGroup);
                                    return s.transform = n, s.propertyIndex = e.cix, s._name = e.nm, s
                                }(e, a, r.propertyGroup),
                                n = o(e.it[e.it.length - 1], a.it[a.it.length - 1], r.propertyGroup);
                            return r.content = s, r.transform = n, Object.defineProperty(r, "_name", {
                                get: function() {
                                    return e.nm
                                }
                            }), r.numProperties = e.np, r.propertyIndex = e.ix, r.nm = e.nm, r.mn = e.mn, r
                        }

                        function a(t, e, a) {
                            function i(t) {
                                return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : null
                            }
                            return Object.defineProperties(i, {
                                color: {
                                    get: ExpressionPropertyInterface(e.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                _name: {
                                    value: t.nm
                                },
                                mn: {
                                    value: t.mn
                                }
                            }), e.c.setGroupProperty(PropertyInterface("Color", a)), e.o.setGroupProperty(PropertyInterface("Opacity", a)), i
                        }

                        function i(t, e, a) {
                            function i(t) {
                                return "Start Point" === t || "start point" === t ? i.startPoint : "End Point" === t || "end point" === t ? i.endPoint : "Opacity" === t || "opacity" === t ? i.opacity : null
                            }
                            return Object.defineProperties(i, {
                                startPoint: {
                                    get: ExpressionPropertyInterface(e.s)
                                },
                                endPoint: {
                                    get: ExpressionPropertyInterface(e.e)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                type: {
                                    get: function() {
                                        return "a"
                                    }
                                },
                                _name: {
                                    value: t.nm
                                },
                                mn: {
                                    value: t.mn
                                }
                            }), e.s.setGroupProperty(PropertyInterface("Start Point", a)), e.e.setGroupProperty(PropertyInterface("End Point", a)), e.o.setGroupProperty(PropertyInterface("Opacity", a)), i
                        }

                        function r() {
                            return function() {
                                return null
                            }
                        }

                        function s(t, e, a) {
                            var i, r = propertyGroupFactory(h, a),
                                s = propertyGroupFactory(l, r);

                            function n(a) {
                                Object.defineProperty(l, t.d[a].nm, {
                                    get: ExpressionPropertyInterface(e.d.dataProps[a].p)
                                })
                            }
                            var o = t.d ? t.d.length : 0,
                                l = {};
                            for (i = 0; i < o; i += 1) n(i), e.d.dataProps[i].p.setGroupProperty(s);

                            function h(t) {
                                return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : null
                            }
                            return Object.defineProperties(h, {
                                color: {
                                    get: ExpressionPropertyInterface(e.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                strokeWidth: {
                                    get: ExpressionPropertyInterface(e.w)
                                },
                                dash: {
                                    get: function() {
                                        return l
                                    }
                                },
                                _name: {
                                    value: t.nm
                                },
                                mn: {
                                    value: t.mn
                                }
                            }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), e.w.setGroupProperty(PropertyInterface("Stroke Width", r)), h
                        }

                        function n(t, e, a) {
                            function i(e) {
                                return e === t.e.ix || "End" === e || "end" === e ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : null
                            }
                            var r = propertyGroupFactory(i, a);
                            return i.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", r)), e.e.setGroupProperty(PropertyInterface("End", r)), e.o.setGroupProperty(PropertyInterface("Offset", r)), i.propertyIndex = t.ix, i.propertyGroup = a, Object.defineProperties(i, {
                                start: {
                                    get: ExpressionPropertyInterface(e.s)
                                },
                                end: {
                                    get: ExpressionPropertyInterface(e.e)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), i.mn = t.mn, i
                        }

                        function o(t, e, a) {
                            function i(e) {
                                return t.a.ix === e || "Anchor Point" === e ? i.anchorPoint : t.o.ix === e || "Opacity" === e ? i.opacity : t.p.ix === e || "Position" === e ? i.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? i.rotation : t.s.ix === e || "Scale" === e ? i.scale : t.sk && t.sk.ix === e || "Skew" === e ? i.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? i.skewAxis : null
                            }
                            var r = propertyGroupFactory(i, a);
                            return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", r)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", r)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", r)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", r)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", r)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", r)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", r))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", r)), Object.defineProperties(i, {
                                opacity: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.o)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.p)
                                },
                                anchorPoint: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.a)
                                },
                                scale: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.s)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.r)
                                },
                                skew: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.sk)
                                },
                                skewAxis: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.sa)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), i.ty = "tr", i.mn = t.mn, i.propertyGroup = a, i
                        }

                        function l(t, e, a) {
                            function i(e) {
                                return t.p.ix === e ? i.position : t.s.ix === e ? i.size : null
                            }
                            var r = propertyGroupFactory(i, a);
                            i.propertyIndex = t.ix;
                            var s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                            return s.s.setGroupProperty(PropertyInterface("Size", r)), s.p.setGroupProperty(PropertyInterface("Position", r)), Object.defineProperties(i, {
                                size: {
                                    get: ExpressionPropertyInterface(s.s)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(s.p)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), i.mn = t.mn, i
                        }

                        function h(t, e, a) {
                            function i(e) {
                                return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? i.innerRoundness : null : i.innerRadius
                            }
                            var r = propertyGroupFactory(i, a),
                                s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                            return i.propertyIndex = t.ix, s.or.setGroupProperty(PropertyInterface("Outer Radius", r)), s.os.setGroupProperty(PropertyInterface("Outer Roundness", r)), s.pt.setGroupProperty(PropertyInterface("Points", r)), s.p.setGroupProperty(PropertyInterface("Position", r)), s.r.setGroupProperty(PropertyInterface("Rotation", r)), t.ir && (s.ir.setGroupProperty(PropertyInterface("Inner Radius", r)), s.is.setGroupProperty(PropertyInterface("Inner Roundness", r))), Object.defineProperties(i, {
                                position: {
                                    get: ExpressionPropertyInterface(s.p)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(s.r)
                                },
                                points: {
                                    get: ExpressionPropertyInterface(s.pt)
                                },
                                outerRadius: {
                                    get: ExpressionPropertyInterface(s.or)
                                },
                                outerRoundness: {
                                    get: ExpressionPropertyInterface(s.os)
                                },
                                innerRadius: {
                                    get: ExpressionPropertyInterface(s.ir)
                                },
                                innerRoundness: {
                                    get: ExpressionPropertyInterface(s.is)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), i.mn = t.mn, i
                        }

                        function p(t, e, a) {
                            function i(e) {
                                return t.p.ix === e ? i.position : t.r.ix === e ? i.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? i.size : null
                            }
                            var r = propertyGroupFactory(i, a),
                                s = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                            return i.propertyIndex = t.ix, s.p.setGroupProperty(PropertyInterface("Position", r)), s.s.setGroupProperty(PropertyInterface("Size", r)), s.r.setGroupProperty(PropertyInterface("Rotation", r)), Object.defineProperties(i, {
                                position: {
                                    get: ExpressionPropertyInterface(s.p)
                                },
                                roundness: {
                                    get: ExpressionPropertyInterface(s.r)
                                },
                                size: {
                                    get: ExpressionPropertyInterface(s.s)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), i.mn = t.mn, i
                        }

                        function c(t, e, a) {
                            function i(e) {
                                return t.r.ix === e || "Round Corners 1" === e ? i.radius : null
                            }
                            var r = propertyGroupFactory(i, a),
                                s = e;
                            return i.propertyIndex = t.ix, s.rd.setGroupProperty(PropertyInterface("Radius", r)), Object.defineProperties(i, {
                                radius: {
                                    get: ExpressionPropertyInterface(s.rd)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), i.mn = t.mn, i
                        }

                        function m(t, e, a) {
                            function i(e) {
                                return t.c.ix === e || "Copies" === e ? i.copies : t.o.ix === e || "Offset" === e ? i.offset : null
                            }
                            var r = propertyGroupFactory(i, a),
                                s = e;
                            return i.propertyIndex = t.ix, s.c.setGroupProperty(PropertyInterface("Copies", r)), s.o.setGroupProperty(PropertyInterface("Offset", r)), Object.defineProperties(i, {
                                copies: {
                                    get: ExpressionPropertyInterface(s.c)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(s.o)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), i.mn = t.mn, i
                        }
                        return function(e, a, i) {
                            var r;

                            function s(t) {
                                if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? i : r[t - 1];
                                for (var e = 0, a = r.length; e < a;) {
                                    if (r[e]._name === t) return r[e];
                                    e += 1
                                }
                                return null
                            }
                            return s.propertyGroup = propertyGroupFactory(s, (function() {
                                return i
                            })), r = t(e, a, s.propertyGroup), s.numProperties = r.length, s._name = "Contents", s
                        }
                    }(),
                    TextExpressionInterface = function(t) {
                        var e;

                        function a(t) {
                            switch (t) {
                                case "ADBE Text Document":
                                    return a.sourceText;
                                default:
                                    return null
                            }
                        }
                        return Object.defineProperty(a, "sourceText", {
                            get: function() {
                                t.textProperty.getValue();
                                var a = t.textProperty.currentData.t;
                                return void 0 !== a && (t.textProperty.currentData.t = void 0, (e = new String(a)).value = a || new String(a)), e
                            }
                        }), a
                    },
                    LayerExpressionInterface = function() {
                        function t(t) {
                            var e = new Matrix;
                            void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e);
                            return e
                        }

                        function e(t, e) {
                            var a = this.getMatrix(e);
                            return a.props[12] = 0, a.props[13] = 0, a.props[14] = 0, this.applyPoint(a, t)
                        }

                        function a(t, e) {
                            var a = this.getMatrix(e);
                            return this.applyPoint(a, t)
                        }

                        function i(t, e) {
                            var a = this.getMatrix(e);
                            return a.props[12] = 0, a.props[13] = 0, a.props[14] = 0, this.invertPoint(a, t)
                        }

                        function r(t, e) {
                            var a = this.getMatrix(e);
                            return this.invertPoint(a, t)
                        }

                        function s(t, e) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var a, i = this._elem.hierarchy.length;
                                for (a = 0; a < i; a += 1) this._elem.hierarchy[a].finalTransform.mProp.applyToMatrix(t)
                            }
                            return t.applyToPointArray(e[0], e[1], e[2] || 0)
                        }

                        function n(t, e) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var a, i = this._elem.hierarchy.length;
                                for (a = 0; a < i; a += 1) this._elem.hierarchy[a].finalTransform.mProp.applyToMatrix(t)
                            }
                            return t.inversePoint(e)
                        }

                        function o(t) {
                            var e = new Matrix;
                            if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                                var a, i = this._elem.hierarchy.length;
                                for (a = 0; a < i; a += 1) this._elem.hierarchy[a].finalTransform.mProp.applyToMatrix(e);
                                return e.inversePoint(t)
                            }
                            return e.inversePoint(t)
                        }

                        function l() {
                            return [1, 1, 1, 1]
                        }
                        return function(h) {
                            var p;

                            function c(t) {
                                switch (t) {
                                    case "ADBE Root Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return c.shapeInterface;
                                    case 1:
                                    case 6:
                                    case "Transform":
                                    case "transform":
                                    case "ADBE Transform Group":
                                        return p;
                                    case 4:
                                    case "ADBE Effect Parade":
                                    case "effects":
                                    case "Effects":
                                        return c.effect;
                                    case "ADBE Text Properties":
                                        return c.textInterface;
                                    default:
                                        return null
                                }
                            }
                            c.getMatrix = t, c.invertPoint = n, c.applyPoint = s, c.toWorld = a, c.toWorldVec = e, c.fromWorld = r, c.fromWorldVec = i, c.toComp = a, c.fromComp = o, c.sampleImage = l, c.sourceRectAtTime = h.sourceRectAtTime.bind(h), c._elem = h;
                            var m = getDescriptor(p = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
                            return Object.defineProperties(c, {
                                hasParent: {
                                    get: function() {
                                        return h.hierarchy.length
                                    }
                                },
                                parent: {
                                    get: function() {
                                        return h.hierarchy[0].layerInterface
                                    }
                                },
                                rotation: getDescriptor(p, "rotation"),
                                scale: getDescriptor(p, "scale"),
                                position: getDescriptor(p, "position"),
                                opacity: getDescriptor(p, "opacity"),
                                anchorPoint: m,
                                anchor_point: m,
                                transform: {
                                    get: function() {
                                        return p
                                    }
                                },
                                active: {
                                    get: function() {
                                        return h.isInRange
                                    }
                                }
                            }), c.startTime = h.data.st, c.index = h.data.ind, c.source = h.data.refId, c.height = 0 === h.data.ty ? h.data.h : 100, c.width = 0 === h.data.ty ? h.data.w : 100, c.inPoint = h.data.ip / h.comp.globalData.frameRate, c.outPoint = h.data.op / h.comp.globalData.frameRate, c._name = h.data.nm, c.registerMaskInterface = function(t) {
                                c.mask = new MaskManagerInterface(t, h)
                            }, c.registerEffectsInterface = function(t) {
                                c.effect = t
                            }, c
                        }
                    }(),
                    FootageInterface = (dataInterfaceFactory = function(t) {
                        function e(t) {
                            return "Outline" === t ? e.outlineInterface() : null
                        }
                        return e._name = "Outline", e.outlineInterface = function(t) {
                            var e = "",
                                a = t.getFootageData();

                            function i(t) {
                                if (a[t]) return e = t, "object" == typeof(a = a[t]) ? i : a;
                                var r = t.indexOf(e);
                                if (-1 !== r) {
                                    var s = parseInt(t.substr(r + e.length), 10);
                                    return "object" == typeof(a = a[s]) ? i : a
                                }
                                return ""
                            }
                            return function() {
                                return e = "", a = t.getFootageData(), i
                            }
                        }(t), e
                    }, function(t) {
                        function e(t) {
                            return "Data" === t ? e.dataInterface : null
                        }
                        return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
                    }),
                    dataInterfaceFactory, CompExpressionInterface = function(t) {
                        function e(e) {
                            for (var a = 0, i = t.layers.length; a < i;) {
                                if (t.layers[a].nm === e || t.layers[a].ind === e) return t.elements[a].layerInterface;
                                a += 1
                            }
                            return null
                        }
                        return Object.defineProperty(e, "_name", {
                            value: t.data.nm
                        }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
                    },
                    TransformExpressionInterface = function(t) {
                        function e(t) {
                            switch (t) {
                                case "scale":
                                case "Scale":
                                case "ADBE Scale":
                                case 6:
                                    return e.scale;
                                case "rotation":
                                case "Rotation":
                                case "ADBE Rotation":
                                case "ADBE Rotate Z":
                                case 10:
                                    return e.rotation;
                                case "ADBE Rotate X":
                                    return e.xRotation;
                                case "ADBE Rotate Y":
                                    return e.yRotation;
                                case "position":
                                case "Position":
                                case "ADBE Position":
                                case 2:
                                    return e.position;
                                case "ADBE Position_0":
                                    return e.xPosition;
                                case "ADBE Position_1":
                                    return e.yPosition;
                                case "ADBE Position_2":
                                    return e.zPosition;
                                case "anchorPoint":
                                case "AnchorPoint":
                                case "Anchor Point":
                                case "ADBE AnchorPoint":
                                case 1:
                                    return e.anchorPoint;
                                case "opacity":
                                case "Opacity":
                                case 11:
                                    return e.opacity;
                                default:
                                    return null
                            }
                        }
                        var a, i, r, s;
                        return Object.defineProperty(e, "rotation", {
                            get: ExpressionPropertyInterface(t.r || t.rz)
                        }), Object.defineProperty(e, "zRotation", {
                            get: ExpressionPropertyInterface(t.rz || t.r)
                        }), Object.defineProperty(e, "xRotation", {
                            get: ExpressionPropertyInterface(t.rx)
                        }), Object.defineProperty(e, "yRotation", {
                            get: ExpressionPropertyInterface(t.ry)
                        }), Object.defineProperty(e, "scale", {
                            get: ExpressionPropertyInterface(t.s)
                        }), t.p ? s = ExpressionPropertyInterface(t.p) : (a = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (r = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                            get: function() {
                                return t.p ? s() : [a(), i(), r ? r() : 0]
                            }
                        }), Object.defineProperty(e, "xPosition", {
                            get: ExpressionPropertyInterface(t.px)
                        }), Object.defineProperty(e, "yPosition", {
                            get: ExpressionPropertyInterface(t.py)
                        }), Object.defineProperty(e, "zPosition", {
                            get: ExpressionPropertyInterface(t.pz)
                        }), Object.defineProperty(e, "anchorPoint", {
                            get: ExpressionPropertyInterface(t.a)
                        }), Object.defineProperty(e, "opacity", {
                            get: ExpressionPropertyInterface(t.o)
                        }), Object.defineProperty(e, "skew", {
                            get: ExpressionPropertyInterface(t.sk)
                        }), Object.defineProperty(e, "skewAxis", {
                            get: ExpressionPropertyInterface(t.sa)
                        }), Object.defineProperty(e, "orientation", {
                            get: ExpressionPropertyInterface(t.or)
                        }), e
                    },
                    ProjectInterface = function() {
                        function t(t) {
                            this.compositions.push(t)
                        }
                        return function() {
                            function e(t) {
                                for (var e = 0, a = this.compositions.length; e < a;) {
                                    if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                    e += 1
                                }
                                return null
                            }
                            return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                        }
                    }(),
                    EffectsExpressionInterface = function() {
                        function t(a, i, r, s) {
                            function n(t) {
                                for (var e = a.ef, i = 0, r = e.length; i < r;) {
                                    if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? h[i] : h[i]();
                                    i += 1
                                }
                                throw new Error
                            }
                            var o, l = propertyGroupFactory(n, r),
                                h = [],
                                p = a.ef.length;
                            for (o = 0; o < p; o += 1) 5 === a.ef[o].ty ? h.push(t(a.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, s)) : h.push(e(i.effectElements[o], a.ef[o].ty, s, l));
                            return "ADBE Color Control" === a.mn && Object.defineProperty(n, "color", {
                                get: function() {
                                    return h[0]()
                                }
                            }), Object.defineProperties(n, {
                                numProperties: {
                                    get: function() {
                                        return a.np
                                    }
                                },
                                _name: {
                                    value: a.nm
                                },
                                propertyGroup: {
                                    value: l
                                }
                            }), n.enabled = 0 !== a.en, n.active = n.enabled, n
                        }

                        function e(t, e, a, i) {
                            var r = ExpressionPropertyInterface(t.p);
                            return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", i)),
                                function() {
                                    return 10 === e ? a.comp.compInterface(t.p.v) : r()
                                }
                        }
                        return {
                            createEffectsInterface: function(e, a) {
                                if (e.effectsManager) {
                                    var i, r = [],
                                        s = e.data.ef,
                                        n = e.effectsManager.effectElements.length;
                                    for (i = 0; i < n; i += 1) r.push(t(s[i], e.effectsManager.effectElements[i], a, e));
                                    var o = e.data.ef || [],
                                        l = function(t) {
                                            for (i = 0, n = o.length; i < n;) {
                                                if (t === o[i].nm || t === o[i].mn || t === o[i].ix) return r[i];
                                                i += 1
                                            }
                                            return null
                                        };
                                    return Object.defineProperty(l, "numProperties", {
                                        get: function() {
                                            return o.length
                                        }
                                    }), l
                                }
                                return null
                            }
                        }
                    }(),
                    MaskManagerInterface = function() {
                        function t(t, e) {
                            this._mask = t, this._data = e
                        }
                        Object.defineProperty(t.prototype, "maskPath", {
                            get: function() {
                                return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                            }
                        }), Object.defineProperty(t.prototype, "maskOpacity", {
                            get: function() {
                                return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                            }
                        });
                        return function(e) {
                            var a, i = createSizedArray(e.viewData.length),
                                r = e.viewData.length;
                            for (a = 0; a < r; a += 1) i[a] = new t(e.viewData[a], e.masksProperties[a]);
                            return function(t) {
                                for (a = 0; a < r;) {
                                    if (e.masksProperties[a].nm === t) return i[a];
                                    a += 1
                                }
                                return null
                            }
                        }
                    }(),
                    ExpressionPropertyInterface = function() {
                        var t = {
                                pv: 0,
                                v: 0,
                                mult: 1
                            },
                            e = {
                                pv: [0, 0, 0],
                                v: [0, 0, 0],
                                mult: 1
                            };

                        function a(t, e, a) {
                            Object.defineProperty(t, "velocity", {
                                get: function() {
                                    return e.getVelocityAtTime(e.comp.currentFrame)
                                }
                            }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(i) {
                                if (!t.numKeys) return 0;
                                var r = "";
                                r = "s" in e.keyframes[i - 1] ? e.keyframes[i - 1].s : "e" in e.keyframes[i - 2] ? e.keyframes[i - 2].e : e.keyframes[i - 2].s;
                                var s = "unidimensional" === a ? new Number(r) : Object.assign({}, r);
                                return s.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate, s.value = "unidimensional" === a ? r[0] : r, s
                            }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                        }

                        function i() {
                            return t
                        }
                        return function(r) {
                            return r ? "unidimensional" === r.propType ? function(e) {
                                e && "pv" in e || (e = t);
                                var i = 1 / e.mult,
                                    r = e.pv * i,
                                    s = new Number(r);
                                return s.value = r, a(s, e, "unidimensional"),
                                    function() {
                                        return e.k && e.getValue(), r = e.v * i, s.value !== r && ((s = new Number(r)).value = r, a(s, e, "unidimensional")), s
                                    }
                            }(r) : function(t) {
                                t && "pv" in t || (t = e);
                                var i = 1 / t.mult,
                                    r = t.data && t.data.l || t.pv.length,
                                    s = createTypedArray("float32", r),
                                    n = createTypedArray("float32", r);
                                return s.value = n, a(s, t, "multidimensional"),
                                    function() {
                                        t.k && t.getValue();
                                        for (var e = 0; e < r; e += 1) n[e] = t.v[e] * i, s[e] = n[e];
                                        return s
                                    }
                            }(r) : i
                        }
                    }();

                function SliderEffect(t, e, a) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, a)
                }

                function AngleEffect(t, e, a) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, a)
                }

                function ColorEffect(t, e, a) {
                    this.p = PropertyFactory.getProp(e, t.v, 1, 0, a)
                }

                function PointEffect(t, e, a) {
                    this.p = PropertyFactory.getProp(e, t.v, 1, 0, a)
                }

                function LayerIndexEffect(t, e, a) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, a)
                }

                function MaskIndexEffect(t, e, a) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, a)
                }

                function CheckboxEffect(t, e, a) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, a)
                }

                function NoValueEffect() {
                    this.p = {}
                }

                function EffectsManager(t, e) {
                    var a, i = t.ef || [];
                    this.effectElements = [];
                    var r, s = i.length;
                    for (a = 0; a < s; a += 1) r = new GroupEffect(i[a], e), this.effectElements.push(r)
                }

                function GroupEffect(t, e) {
                    this.init(t, e)
                }! function() {
                    ! function() {
                        function t(t, e) {
                            return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v
                        }
                    }();
                    var t = TextSelectorProp.getTextSelectorProp;
                    TextSelectorProp.getTextSelectorProp = function(e, a, i) {
                        return 1 === a.t ? new TextExpressionSelectorPropFactory(e, a, i) : t(e, a, i)
                    }
                }(), extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                    var a;
                    this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                    var i, r = this.data.ef.length,
                        s = this.data.ef;
                    for (a = 0; a < r; a += 1) {
                        switch (i = null, s[a].ty) {
                            case 0:
                                i = new SliderEffect(s[a], e, this);
                                break;
                            case 1:
                                i = new AngleEffect(s[a], e, this);
                                break;
                            case 2:
                                i = new ColorEffect(s[a], e, this);
                                break;
                            case 3:
                                i = new PointEffect(s[a], e, this);
                                break;
                            case 4:
                            case 7:
                                i = new CheckboxEffect(s[a], e, this);
                                break;
                            case 10:
                                i = new LayerIndexEffect(s[a], e, this);
                                break;
                            case 11:
                                i = new MaskIndexEffect(s[a], e, this);
                                break;
                            case 5:
                                i = new EffectsManager(s[a], e, this);
                                break;
                            default:
                                i = new NoValueEffect(s[a], e, this)
                        }
                        i && this.effectElements.push(i)
                    }
                };
                var lottie = {};

                function setLocationHref(t) {
                    locationHref = t
                }

                function searchAnimations() {
                    !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
                }

                function setSubframeRendering(t) {
                    subframeEnabled = t
                }

                function setIDPrefix(t) {
                    idPrefix = t
                }

                function loadAnimation(t) {
                    return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
                }

                function setQuality(t) {
                    if ("string" == typeof t) switch (t) {
                        case "high":
                            defaultCurveSegments = 200;
                            break;
                        default:
                        case "medium":
                            defaultCurveSegments = 50;
                            break;
                        case "low":
                            defaultCurveSegments = 10
                    } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
                    roundValues(!(defaultCurveSegments >= 50))
                }

                function inBrowser() {
                    return "undefined" != typeof navigator
                }

                function installPlugin(t, e) {
                    "expressions" === t && (expressionsPlugin = e)
                }

                function getFactory(t) {
                    switch (t) {
                        case "propertyFactory":
                            return PropertyFactory;
                        case "shapePropertyFactory":
                            return ShapePropertyFactory;
                        case "matrix":
                            return Matrix;
                        default:
                            return null
                    }
                }

                function checkReady() {
                    "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                }

                function getQueryVariable(t) {
                    for (var e = queryString.split("&"), a = 0; a < e.length; a += 1) {
                        var i = e[a].split("=");
                        if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
                    }
                    return null
                }
                lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.setIDPrefix = setIDPrefix, lottie.__getFactory = getFactory, lottie.version = "5.7.11";
                var standalone = "__[STANDALONE]__",
                    animationData = "__[ANIMATIONDATA]__",
                    renderer = "",
                    queryString;
                if (standalone) {
                    var scripts = document.getElementsByTagName("script"),
                        index = scripts.length - 1,
                        myScript = scripts[index] || {
                            src: ""
                        };
                    queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer")
                }
                var readyStateCheckInterval = setInterval(checkReady, 100);
                return lottie
            }))
        },
        m0Pp: function(t, e, a) {
            var i = a("2OiF");
            t.exports = function(t, e, a) {
                if (i(t), void 0 === e) return t;
                switch (a) {
                    case 1:
                        return function(a) {
                            return t.call(e, a)
                        };
                    case 2:
                        return function(a, i) {
                            return t.call(e, a, i)
                        };
                    case 3:
                        return function(a, i, r) {
                            return t.call(e, a, i, r)
                        }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            }
        },
        nGyu: function(t, e, a) {
            var i = a("K0xU")("unscopables"),
                r = Array.prototype;
            null == r[i] && a("Mukb")(r, i, {}), t.exports = function(t) {
                r[i][t] = !0
            }
        },
        ne8i: function(t, e, a) {
            var i = a("RYi7"),
                r = Math.min;
            t.exports = function(t) {
                return t > 0 ? r(i(t), 9007199254740991) : 0
            }
        },
        nh4g: function(t, e, a) {
            t.exports = !a("eeVq")((function() {
                return 7 != Object.defineProperty({}, "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        pIFo: function(t, e, a) {
            "use strict";
            var i = a("y3w9"),
                r = a("S/j/"),
                s = a("ne8i"),
                n = a("RYi7"),
                o = a("A5AN"),
                l = a("Xxuz"),
                h = Math.max,
                p = Math.min,
                c = Math.floor,
                m = /\$([$&`']|\d\d?|<[^>]*>)/g,
                d = /\$([$&`']|\d\d?)/g;
            a("IU+Z")("replace", 2, (function(t, e, a, f) {
                return [
                    function(i, r) {
                        var s = t(this),
                            n = null == i ? void 0 : i[e];
                        return void 0 !== n ? n.call(i, s, r) : a.call(String(s), i, r)
                    },
                    function(t, e) {
                        var r = f(a, t, this, e);
                        if (r.done) return r.value;
                        var c = i(t),
                            m = String(this),
                            d = "function" == typeof e;
                        d || (e = String(e));
                        var g = c.global;
                        if (g) {
                            var y = c.unicode;
                            c.lastIndex = 0
                        }
                        for (var v = [];;) {
                            var x = l(c, m);
                            if (null === x) break;
                            if (v.push(x), !g) break;
                            "" === String(x[0]) && (c.lastIndex = o(m, s(c.lastIndex), y))
                        }
                        for (var k, b = "", E = 0, S = 0; S < v.length; S++) {
                            x = v[S];
                            for (var w = String(x[0]), P = h(p(n(x.index), m.length), 0), C = [], A = 1; A < x.length; A++) C.push(void 0 === (k = x[A]) ? k : String(k));
                            var T = x.groups;
                            if (d) {
                                var D = [w].concat(C, P, m);
                                void 0 !== T && D.push(T);
                                var M = String(e.apply(void 0, D))
                            } else M = u(w, m, P, C, T, e);
                            P >= E && (b += m.slice(E, P) + M, E = P + w.length)
                        }
                        return b + m.slice(E)
                    }
                ];

                function u(t, e, i, s, n, o) {
                    var l = i + t.length,
                        h = s.length,
                        p = d;
                    return void 0 !== n && (n = r(n), p = m), a.call(o, p, (function(a, r) {
                        var o;
                        switch (r.charAt(0)) {
                            case "$":
                                return "$";
                            case "&":
                                return t;
                            case "`":
                                return e.slice(0, i);
                            case "'":
                                return e.slice(l);
                            case "<":
                                o = n[r.slice(1, -1)];
                                break;
                            default:
                                var p = +r;
                                if (0 === p) return a;
                                if (p > h) {
                                    var m = c(p / 10);
                                    return 0 === m ? a : m <= h ? void 0 === s[m - 1] ? r.charAt(1) : s[m - 1] + r.charAt(1) : a
                                }
                                o = s[p - 1]
                        }
                        return void 0 === o ? "" : o
                    }))
                }
            }))
        },
        quPj: function(t, e, a) {
            var i = a("0/R4"),
                r = a("LZWt"),
                s = a("K0xU")("match");
            t.exports = function(t) {
                var e;
                return i(t) && (void 0 !== (e = t[s]) ? !!e : "RegExp" == r(t))
            }
        },
        rGqo: function(t, e, a) {
            for (var i = a("yt8O"), r = a("DVgA"), s = a("KroJ"), n = a("dyZX"), o = a("Mukb"), l = a("hPIQ"), h = a("K0xU"), p = h("iterator"), c = h("toStringTag"), m = l.Array, d = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, f = r(d), u = 0; u < f.length; u++) {
                var g, y = f[u],
                    v = d[y],
                    x = n[y],
                    k = x && x.prototype;
                if (k && (k[p] || o(k, p, m), k[c] || o(k, c, y), l[y] = m, v))
                    for (g in i) k[g] || s(k, g, i[g], !0)
            }
        },
        rTrL: function(t) {
            t.exports = JSON.parse('{"v":"5.7.0","fr":25,"ip":0,"op":33,"w":364,"h":88,"nm":"download-button-动效","ddd":0,"assets":[{"id":"image_0","w":261,"h":260,"u":"https://res06.bignox.com/s3group/player/launch/2020/07/13/","p":"43dd2dc53c4d4df79fdcf5a106fab15e.png","e":0}],"layers":[{"ddd":0,"ind":3,"ty":4,"nm":"路径 3","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[181.773,44,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":25,"nm":"投影","np":8,"mn":"ADBE Drop Shadow","ix":1,"en":1,"ef":[{"ty":2,"nm":"阴影颜色","mn":"ADBE Drop Shadow-0001","ix":1,"v":{"a":0,"k":[0,0,0,0.10000000149],"ix":1}},{"ty":0,"nm":"不透明度","mn":"ADBE Drop Shadow-0002","ix":2,"v":{"a":0,"k":25.5,"ix":2}},{"ty":0,"nm":"方向","mn":"ADBE Drop Shadow-0003","ix":3,"v":{"a":0,"k":180,"ix":3}},{"ty":0,"nm":"距离","mn":"ADBE Drop Shadow-0004","ix":4,"v":{"a":0,"k":2,"ix":4}},{"ty":0,"nm":"柔和度","mn":"ADBE Drop Shadow-0005","ix":5,"v":{"a":0,"k":6,"ix":5}},{"ty":7,"nm":"仅阴影","mn":"ADBE Drop Shadow-0006","ix":6,"v":{"a":0,"k":0,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-166.28,44],[-184,13.36],[-150.78,-44],[166.28,-44],[184,-13.41],[150.78,44]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"圆角 1","r":{"a":0,"k":8,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":2,"k":{"a":0,"k":[0,1,1,1,1,0,0,0],"ix":9}},"s":{"a":0,"k":[-167.989,-30.071],"ix":5},"e":{"a":0,"k":[162.014,53.241],"ix":6},"t":1,"nm":"渐变填充 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":33,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"矩形@1x.png","cl":"png","tt":1,"refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.6,"y":1},"o":{"x":0.32,"y":0.94},"t":0,"s":[-135.997,41.26,0],"to":[81.328,0,0],"ti":[-130.763,0,0]},{"t":33,"s":[504.497,41.26,0]}],"ix":2},"a":{"a":0,"k":[130.5,130,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":33,"st":-19,"bm":3},{"ddd":0,"ind":5,"ty":4,"nm":"路径 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[182,44,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],"v":[[-166.28,44],[-184,13.36],[-150.78,-44],[166.28,-44],[184,-13.41],[150.78,44]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"rd","nm":"圆角 1","r":{"a":0,"k":8,"ix":1},"ix":2,"mn":"ADBE Vector Filter - RC","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-167.989,-30.071],"ix":5},"e":{"a":0,"k":[162.014,53.241],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":33,"st":0,"bm":0}],"markers":[{"tm":31,"cm":"1","dr":0}]}')
        },
        "sM/0": function(t) {
            t.exports = JSON.parse('{"v":"5.7.0","fr":25,"ip":0,"op":15,"w":96,"h":96,"nm":"images/icon_video_hover备份 2","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":4,"ty":4,"nm":"形状 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[48,48.5,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.6,0.6,0.6],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[1.41,1.41,0]},"t":0,"s":[100,100,100]},{"t":15,"s":[120,120,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-3.31],[0,0],[3.31,0],[0,0],[0,3.31],[0,0],[-3.31,0]],"o":[[3.31,0],[0,0],[0,3.31],[0,0],[-3.31,0],[0,0],[0,-3.31],[0,0]],"v":[[12,-13.5],[18,-7.5],[18,7.5],[12,13.5],[-12,13.5],[-18,7.5],[-18,-7.5],[-12,-13.5]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-0.83],[-0.77,-0.07],[0,0],[0,0],[0,0.83],[0.77,0.07]],"o":[[0,0],[-0.83,0],[0,0.78],[0,0],[0,0],[0.83,0],[0,-0.78],[0,0]],"v":[[6.5,5.5],[-6.5,5.5],[-8,7],[-6.64,8.49],[-6.5,8.5],[6.5,8.5],[8,7],[6.64,5.51]],"c":true},"ix":2},"nm":"路径 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-0.83],[-0.77,-0.07],[0,0],[0,0],[0,0.83],[0.77,0.07]],"o":[[0,0],[-0.83,0],[0,0.78],[0,0],[0,0],[0.83,0],[0,-0.78],[0,0]],"v":[[1.5,-1.5],[-1.5,-1.5],[-3,0],[-1.64,1.49],[-1.5,1.5],[1.5,1.5],[3,0],[1.64,-1.49]],"c":true},"ix":2},"nm":"路径 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-0.83],[-0.77,-0.07],[0,0],[0,0],[0,0.83],[0.77,0.07]],"o":[[0,0],[-0.83,0],[0,0.78],[0,0],[0,0],[0.83,0],[0,-0.78],[0,0]],"v":[[10.5,-1.5],[7.5,-1.5],[6,0],[7.36,1.49],[7.5,1.5],[10.5,1.5],[12,0],[10.64,-1.49]],"c":true},"ix":2},"nm":"路径 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-0.83],[-0.77,-0.07],[0,0],[0,0],[0,0.83],[0.77,0.07]],"o":[[0,0],[-0.83,0],[0,0.78],[0,0],[0,0],[0.83,0],[0,-0.78],[0,0]],"v":[[-7.5,-1.5],[-10.5,-1.5],[-12,0],[-10.64,1.49],[-10.5,1.5],[-7.5,1.5],[-6,0],[-7.36,-1.49]],"c":true},"ix":2},"nm":"路径 5","mn":"ADBE Vector Shape - Group","hd":false},{"ind":5,"ty":"sh","ix":6,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-0.83],[-0.77,-0.07],[0,0],[0,0],[0,0.83],[0.77,0.07]],"o":[[0,0],[-0.83,0],[0,0.78],[0,0],[0,0],[0.83,0],[0,-0.78],[0,0]],"v":[[1.5,-8.5],[-1.5,-8.5],[-3,-7],[-1.64,-5.51],[-1.5,-5.5],[1.5,-5.5],[3,-7],[1.64,-8.49]],"c":true},"ix":2},"nm":"路径 6","mn":"ADBE Vector Shape - Group","hd":false},{"ind":6,"ty":"sh","ix":7,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-0.83],[-0.77,-0.07],[0,0],[0,0],[0,0.83],[0.77,0.07]],"o":[[0,0],[-0.83,0],[0,0.78],[0,0],[0,0],[0.83,0],[0,-0.78],[0,0]],"v":[[10.5,-8.5],[7.5,-8.5],[6,-7],[7.36,-5.51],[7.5,-5.5],[10.5,-5.5],[12,-7],[10.64,-8.49]],"c":true},"ix":2},"nm":"路径 7","mn":"ADBE Vector Shape - Group","hd":false},{"ind":7,"ty":"sh","ix":8,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,-0.83],[-0.77,-0.07],[0,0],[0,0],[0,0.83],[0.77,0.07]],"o":[[0,0],[-0.83,0],[0,0.78],[0,0],[0,0],[0.83,0],[0,-0.78],[0,0]],"v":[[-7.5,-8.5],[-10.5,-8.5],[-12,-7],[-10.64,-5.51],[-10.5,-5.5],[-7.5,-5.5],[-6,-7],[-7.36,-8.49]],"c":true},"ix":2},"nm":"路径 8","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"合并路径 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状","np":10,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":15,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"路径","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.609],"y":[1]},"o":{"x":[0.323],"y":[0]},"t":0,"s":[100]},{"t":15,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[48,48,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.6,0.6,0.6],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[1.41,1.41,0]},"t":0,"s":[100,100,100]},{"t":15,"s":[119,119,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-3.69,-2.11],[0,0],[0,-4.3],[0,0],[3.74,-2.13],[0,0],[3.69,2.11],[0,0],[0,4.3],[0,0],[-3.74,2.14],[0,0]],"o":[[0,0],[3.74,2.14],[0,0],[0,4.3],[0,0],[-3.69,2.11],[0,0],[-3.74,-2.13],[0,0],[0,-4.3],[0,0],[3.69,-2.11]],"v":[[5.95,-36.599],[28.95,-23.459],[35,-13.039],[35,13.041],[28.95,23.451],[5.95,36.601],[-5.95,36.601],[-28.95,23.451],[-35,13.041],[-35,-13.039],[-28.95,-23.459],[-5.95,-36.599]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,0.600000023842],"ix":3},"o":{"a":0,"k":60,"ix":4},"w":{"a":0,"k":0.833,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.054901961237,0.06274510175,0.196078434587,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":15,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"路径","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.6],"y":[1]},"o":{"x":[0.32],"y":[1.41]},"t":0,"s":[0]},{"t":15,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[48,48,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.6,0.6,0.6],"y":[1,1,1]},"o":{"x":[0.32,0.32,0.32],"y":[1.41,1.41,0]},"t":0,"s":[82,82,100]},{"t":15,"s":[100,100,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-4.42,-2.53],[0,0],[0,-5.19],[0,0],[4.49,-2.57],[0,0],[4.42,2.53],[0,0],[0,5.19],[0,0],[-4.49,2.57],[0,0]],"o":[[0,0],[4.49,2.57],[0,0],[0,5.19],[0,0],[-4.42,2.53],[0,0],[-4.49,-2.57],[0,0],[0,-5.19],[0,0],[4.42,-2.53]],"v":[[7.14,-44.1],[34.74,-28.26],[42,-15.71],[42,15.71],[34.74,28.26],[7.14,44.1],[-7.14,44.1],[-34.74,28.26],[-42,15.71],[-42,-15.71],[-34.74,-28.26],[-7.14,-44.1]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"gf","o":{"a":0,"k":100,"ix":10},"r":1,"bm":0,"g":{"p":3,"k":{"a":0,"k":[0,0.243,0.467,1,0.5,0.622,0.386,0.833,1,1,0.306,0.667],"ix":9}},"s":{"a":0,"k":[-38.345,-31.438],"ix":5},"e":{"a":0,"k":[36.981,55.661],"ix":6},"t":1,"nm":"Gradient Fill 1","mn":"ADBE Vector Graphic - G-Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"路径","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":15,"st":0,"bm":0}],"markers":[]}')
        },
        sMXx: function(t, e, a) {
            "use strict";
            var i = a("Ugos");
            a("XKFU")({
                target: "RegExp",
                proto: !0,
                forced: i !== /./.exec
            }, {
                exec: i
            })
        },
        vhPU: function(t, e) {
            t.exports = function(t) {
                if (null == t) throw TypeError("Can't call method on  " + t);
                return t
            }
        },
        w2a5: function(t, e, a) {
            var i = a("aCFj"),
                r = a("ne8i"),
                s = a("d/Gc");
            t.exports = function(t) {
                return function(e, a, n) {
                    var o, l = i(e),
                        h = r(l.length),
                        p = s(n, h);
                    if (t && a != a) {
                        for (; h > p;)
                            if ((o = l[p++]) != o) return !0
                    } else
                        for (; h > p; p++)
                            if ((t || p in l) && l[p] === a) return t || p || 0; return !t && -1
                }
            }
        },
        xpql: function(t, e, a) {
            t.exports = !a("nh4g") && !a("eeVq")((function() {
                return 7 != Object.defineProperty(a("Iw71")("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        y3w9: function(t, e, a) {
            var i = a("0/R4");
            t.exports = function(t) {
                if (!i(t)) throw TypeError(t + " is not an object!");
                return t
            }
        },
        yLpj: function(t, e) {
            var a;
            a = function() {
                return this
            }();
            try {
                a = a || new Function("return this")()
            } catch (t) {
                "object" == typeof window && (a = window)
            }
            t.exports = a
        },
        ylqs: function(t, e) {
            var a = 0,
                i = Math.random();
            t.exports = function(t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++a + i).toString(36))
            }
        },
        yt8O: function(t, e, a) {
            "use strict";
            var i = a("nGyu"),
                r = a("1TsA"),
                s = a("hPIQ"),
                n = a("aCFj");
            t.exports = a("Afnz")(Array, "Array", (function(t, e) {
                this._t = n(t), this._i = 0, this._k = e
            }), (function() {
                var t = this._t,
                    e = this._k,
                    a = this._i++;
                return !t || a >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? a : "values" == e ? t[a] : [a, t[a]])
            }), "values"), s.Arguments = s.Array, i("keys"), i("values"), i("entries")
        },
        zRwo: function(t, e, a) {
            var i = a("6FMO");
            t.exports = function(t, e) {
                return new(i(t))(e)
            }
        },
        zhAb: function(t, e, a) {
            var i = a("aagx"),
                r = a("aCFj"),
                s = a("w2a5")(!1),
                n = a("YTvA")("IE_PROTO");
            t.exports = function(t, e) {
                var a, o = r(t),
                    l = 0,
                    h = [];
                for (a in o) a != n && i(o, a) && h.push(a);
                for (; e.length > l;) i(o, a = e[l++]) && (~s(h, a) || h.push(a));
                return h
            }
        }
    },
    [
        [0, 0, 1]
    ]
]);