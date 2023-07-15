/*! npm.im/object-fit-images 3.2.4 */ var objectFitImages = function() {
    "use strict";
    var t = function t(t1, e) {
        return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t1 + "' height='" + e + "'%3E%3C/svg%3E";
    };
    var e = function e(t) {
        if (t.srcset && !p && window.picturefill) {
            var e1 = window.picturefill._;
            t[e1.ns] && t[e1.ns].evaled || e1.fillImg(t, {
                reselect: !0
            }), t[e1.ns].curSrc || (t[e1.ns].supported = !1, e1.fillImg(t, {
                reselect: !0
            })), t.currentSrc = t[e1.ns].curSrc || t.src;
        }
    };
    var i = function i(t) {
        for(var e, i1 = getComputedStyle(t).fontFamily, r = {}; null !== (e = u.exec(i1));)r[e[1]] = e[2];
        return r;
    };
    var r = function r(e, i, r1) {
        var n = t(i || 1, r1 || 0);
        b.call(e, "src") !== n && h.call(e, "src", n);
    };
    var c = function c(t) {
        var c1 = i(t), o = t[l];
        if (c1["object-fit"] = c1["object-fit"] || "fill", !o.img) {
            if ("fill" === c1["object-fit"]) return;
            if (!o.skipTest && f && !c1["object-position"]) return;
        }
        if (!o.img) {
            o.img = new Image(t.width, t.height), o.img.srcset = b.call(t, "data-ofi-srcset") || t.srcset, o.img.src = b.call(t, "data-ofi-src") || t.src, h.call(t, "data-ofi-src", t.src), t.srcset && h.call(t, "data-ofi-srcset", t.srcset), r(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
            try {
                s(t);
            } catch (t1) {
                window.console && console.warn("https://bit.ly/ofi-old-browser");
            }
        }
        e(o.img), t.style.backgroundImage = 'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = c1["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(c1["object-fit"]) ? n(o.img, function() {
            o.img.naturalWidth > t.width || o.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto";
        }) : t.style.backgroundSize = c1["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), n(o.img, function(e) {
            r(t, e.naturalWidth, e.naturalHeight);
        });
    };
    var s = function s(t) {
        var e = {
            get: function get(e) {
                return t[l].img[e ? e : "src"];
            },
            set: function set(e, i) {
                return t[l].img[i ? i : "src"] = e, h.call(t, "data-ofi-" + i, e), c(t), e;
            }
        };
        Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
            get: function get() {
                return e.get("currentSrc");
            }
        }), Object.defineProperty(t, "srcset", {
            get: function get() {
                return e.get("srcset");
            },
            set: function set(t) {
                return e.set(t, "srcset");
            }
        });
    };
    var o = function o() {
        function t(t, e) {
            return t[l] && t[l].img && ("src" === e || "srcset" === e) ? t[l].img : t;
        }
        d || (HTMLImageElement.prototype.getAttribute = function(e) {
            return b.call(t(this, e), e);
        }, HTMLImageElement.prototype.setAttribute = function(e, i) {
            return h.call(t(this, e), e, String(i));
        });
    };
    function n(t, e) {
        t.naturalWidth ? e(t) : setTimeout(n, 100, t, e);
    }
    function a(t, e) {
        var i = !y && !t;
        if (e = e || {}, t = t || "img", d && !e.skipTest || !m) return !1;
        "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [
            t
        ]);
        for(var r = 0; r < t.length; r++)t[r][l] = t[r][l] || {
            skipTest: e.skipTest
        }, c(t[r]);
        i && (document.body.addEventListener("load", function(t) {
            "IMG" === t.target.tagName && a(t.target, {
                skipTest: e.skipTest
            });
        }, !0), y = !0, t = "img"), e.watchMQ && window.addEventListener("resize", a.bind(null, t, {
            skipTest: e.skipTest
        }));
    }
    var l = "fregante:object-fit-images", u = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g, g = "undefined" == typeof Image ? {
        style: {
            "object-position": 1
        }
    } : new Image, f = "object-fit" in g.style, d = "object-position" in g.style, m = "background-size" in g.style, p = "string" == typeof g.currentSrc, b = g.getAttribute, h = g.setAttribute, y = !1;
    return a.supportsObjectFit = f, a.supportsObjectPosition = d, o(), a;
}();

//# sourceMappingURL=index.41bafcc3.js.map
