(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.vgl-layout{--vgl-placeholder-bg: red;--vgl-placeholder-opacity: 20%;--vgl-placeholder-z-index: 2;--vgl-item-resizing-z-index: 3;--vgl-item-resizing-opacity: 60%;--vgl-item-dragging-z-index: 3;--vgl-item-dragging-opacity: 100%;--vgl-resizer-size: 10px;--vgl-resizer-border-color: #444;--vgl-resizer-border-width: 2px;position:relative;box-sizing:border-box;transition:height .2s ease}.vgl-item{position:absolute;box-sizing:border-box;transition:.2s ease;transition-property:left,top,right}.vgl-item--placeholder{z-index:var(--vgl-placeholder-z-index, 2);-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--vgl-placeholder-bg, red);opacity:var(--vgl-placeholder-opacity, 20%);transition-duration:.1s}.vgl-item--no-touch{touch-action:none}.vgl-item--transform{right:auto;left:0;transition-property:transform}.vgl-item--transform.vgl-item--rtl{right:0;left:auto}.vgl-item--resizing{z-index:var(--vgl-item-resizing-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-resizing-opacity, 60%)}.vgl-item--dragging{z-index:var(--vgl-item-dragging-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-dragging-opacity, 100%);transition:none}.vgl-item__resizer{position:absolute;right:0;bottom:0;box-sizing:border-box;width:var(--vgl-resizer-size);height:var(--vgl-resizer-size);cursor:se-resize}.vgl-item__resizer:before{position:absolute;top:0;right:3px;bottom:3px;left:0;content:"";border:0 solid var(--vgl-resizer-border-color);border-right-width:var(--vgl-resizer-border-width);border-bottom-width:var(--vgl-resizer-border-width)}.vgl-item__resizer--rtl{right:auto;left:0;cursor:sw-resize}.vgl-item__resizer--rtl:before{top:0;right:0;bottom:3px;left:3px;border-right-width:0;border-bottom-width:var(--vgl-resizer-border-width);border-left-width:var(--vgl-resizer-border-width)}')),document.head.appendChild(e)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { defineComponent as Ir, inject as or, ref as Pt, reactive as Mt, toRef as ho, onBeforeMount as Cr, onMounted as Ar, watchEffect as go, onBeforeUnmount as Br, computed as tt, watch as ee, openBlock as St, createElementBlock as $t, normalizeClass as ar, normalizeStyle as Fr, renderSlot as yn, createCommentVNode as vo, nextTick as Ge, provide as sr, toRefs as cr, Fragment as mo, renderList as yo, createBlock as bo, mergeProps as wo, withCtx as xo, withDirectives as Eo, createVNode as ko, vShow as So } from "vue";
const To = typeof window < "u";
var lr;
To && ((lr = window == null ? void 0 : window.navigator) != null && lr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function we(c) {
  return c == null;
}
function jr() {
}
const zo = Object.freeze({
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
});
Object.freeze(new Set(Object.keys(zo)));
function _o() {
  const c = /* @__PURE__ */ new Map();
  return {
    on(d, h) {
      const f = c.get(d);
      f != null && f.add(h) || c.set(d, /* @__PURE__ */ new Set([h]));
    },
    off(d, h) {
      const f = c.get(d);
      f && f.delete(h);
    },
    clear(d) {
      const h = c.get(d);
      h && h.clear();
    },
    clearAll() {
      c.clear();
    },
    emit(d, ...h) {
      const f = c.get(d);
      f && f.forEach((w) => {
        w(...h);
      });
    }
  };
}
function ur(c, d = 16) {
  if (typeof c != "function")
    return jr;
  const h = (...m) => {
    c(...m);
  };
  if (d <= 0)
    return Lr(h);
  let f = 0, w;
  return function(...m) {
    const z = Date.now(), S = z - f;
    clearTimeout(w), S >= d ? (f = z, h(...m)) : w = setTimeout(
      () => {
        f = Date.now(), h(...m);
      },
      Math.max(0, d - S)
    );
  };
}
function Oo(c, d = 100) {
  if (typeof c != "function")
    return jr;
  const h = (...w) => {
    c(...w);
  };
  if (d <= 0)
    return Lr(h);
  let f;
  return function(...w) {
    clearTimeout(f), f = setTimeout(() => {
      h(...w);
    }, d);
  };
}
function Lr(c) {
  if (typeof c != "function")
    return c;
  let d = !1, h, f;
  return function(...w) {
    return h = w, d || (d = !0, f = Promise.resolve().then(() => (d = !1, f = void 0, c(...h)))), f;
  };
}
const Tt = /* @__PURE__ */ new Set(), Wr = /* @__PURE__ */ new WeakMap();
function Po() {
  Tt.forEach((c) => {
    c(...Wr.get(c));
  }), Tt.clear();
}
function he(c, ...d) {
  if (typeof c != "function")
    return c;
  Wr.set(c, d), !Tt.has(c) && (Tt.add(c), Tt.size === 1 && Promise.resolve().then(Po));
}
const Hr = Symbol("LAYOUT_KEY"), Nr = Symbol("EMITTER_KEY");
function Mo(c) {
  let d = 0, h;
  for (let f = 0, w = c.length; f < w; f++)
    h = c[f].y + c[f].h, h > d && (d = h);
  return d;
}
function bn(c) {
  const d = Array(c.length);
  for (let h = 0, f = c.length; h < f; h++)
    d[h] = Do(c[h]);
  return d;
}
function Do(c) {
  return { ...c };
}
function qr(c, d) {
  return !(c === d || c.x + c.w <= d.x || c.x >= d.x + d.w || c.y + c.h <= d.y || c.y >= d.y + d.h);
}
function dt(c, d, h) {
  const f = Yr(c), w = $r(c), m = Array(c.length);
  for (let z = 0, S = w.length; z < S; z++) {
    let v = w[z];
    v.static || (v = Ro(f, v, d, h), f.push(v)), m[c.indexOf(v)] = v, v.moved = !1;
  }
  return m;
}
function Ro(c, d, h, f) {
  if (h)
    for (; d.y > 0 && !zt(c, d); )
      d.y--;
  else if (f) {
    const m = f[d.i].y;
    for (; d.y > m && !zt(c, d); )
      d.y--;
  }
  let w;
  for (; w = zt(c, d); )
    d.y = w.y + w.h;
  return d;
}
function Io(c, d) {
  const h = Yr(c);
  for (let f = 0, w = c.length; f < w; f++) {
    const m = c[f];
    if (m.x + m.w > d.cols && (m.x = d.cols - m.w), m.x < 0 && (m.x = 0, m.w = d.cols), !m.static) h.push(m);
    else
      for (; zt(h, m); )
        m.y++;
  }
  return c;
}
function fr(c, d) {
  for (let h = 0, f = c.length; h < f; h++)
    if (c[h].i === d) return c[h];
}
function zt(c, d) {
  for (let h = 0, f = c.length; h < f; h++)
    if (qr(c[h], d)) return c[h];
}
function Xr(c, d) {
  return c.filter((h) => qr(h, d));
}
function Yr(c) {
  return c.filter((d) => d.static);
}
function wn(c, d, h, f, w = !1, m = !1) {
  if (d.static) return c;
  const z = d.x, S = d.y, v = f && d.y > f;
  typeof h == "number" && (d.x = h), typeof f == "number" && (d.y = f), d.moved = !0;
  let U = $r(c);
  v && (U = U.reverse());
  const te = Xr(U, d);
  if (m && te.length)
    return d.x = z, d.y = S, d.moved = !1, c;
  for (let W = 0, le = te.length; W < le; W++) {
    const re = te[W];
    re.moved || d.y > re.y && d.y - re.y > re.h / 4 || (re.static ? c = dr(c, re, d, w) : c = dr(c, d, re, w));
  }
  return c;
}
function dr(c, d, h, f) {
  if (f) {
    const m = {
      x: h.x,
      y: h.y,
      w: h.w,
      h: h.h,
      i: "-1"
    };
    if (m.y = Math.max(d.y - h.h, 0), !zt(c, m))
      return wn(c, h, void 0, m.y, !1);
  }
  return wn(c, h, void 0, h.y + 1, !1);
}
function Co(c, d, h, f) {
  const w = "translate3d(" + d + "px," + c + "px, 0)";
  return {
    transform: w,
    WebkitTransform: w,
    MozTransform: w,
    msTransform: w,
    OTransform: w,
    width: h + "px",
    height: f + "px",
    position: "absolute"
  };
}
function Ao(c, d, h, f) {
  const w = "translate3d(" + d * -1 + "px," + c + "px, 0)";
  return {
    transform: w,
    WebkitTransform: w,
    MozTransform: w,
    msTransform: w,
    OTransform: w,
    width: h + "px",
    height: f + "px",
    position: "absolute"
  };
}
function Bo(c, d, h, f) {
  return {
    top: c + "px",
    left: d + "px",
    width: h + "px",
    height: f + "px",
    position: "absolute"
  };
}
function Fo(c, d, h, f) {
  return {
    top: c + "px",
    right: d + "px",
    width: h + "px",
    height: f + "px",
    position: "absolute"
  };
}
function $r(c) {
  return Array.from(c).sort(function(d, h) {
    return d.y === h.y && d.x === h.x ? 0 : d.y > h.y || d.y === h.y && d.x > h.x ? 1 : -1;
  });
}
function jo(c, d) {
  d = d || "Layout";
  const h = ["x", "y", "w", "h"], f = [];
  if (!Array.isArray(c)) throw new Error(d + " must be an array!");
  for (let w = 0, m = c.length; w < m; w++) {
    const z = c[w];
    for (let S = 0; S < h.length; S++)
      if (typeof z[h[S]] != "number")
        throw new Error(
          "VueGridLayout: " + d + "[" + w + "]." + h[S] + " must be a number!"
        );
    if (z.i === void 0 || z.i === null)
      throw new Error("VueGridLayout: " + d + "[" + w + "].i cannot be null!");
    if (typeof z.i != "number" && typeof z.i != "string")
      throw new Error("VueGridLayout: " + d + "[" + w + "].i must be a string or number!");
    if (f.indexOf(z.i) >= 0)
      throw new Error("VueGridLayout: " + d + "[" + w + "].i must be unique!");
    if (f.push(z.i), z.static !== void 0 && typeof z.static != "boolean")
      throw new Error("VueGridLayout: " + d + "[" + w + "].static must be a boolean!");
  }
}
function Lo(c, d = "vgl") {
  const h = () => `${d}-${c}`;
  return {
    b: h,
    be: (z) => `${h()}__${z}`,
    bm: (z) => `${h()}--${z}`,
    bem: (z, S) => `${h()}__${z}--${S}`
  };
}
function pr(c) {
  return Wo(c);
}
function Wo(c) {
  var m;
  const d = ((m = c.target) == null ? void 0 : m.offsetParent) || document.body, h = c.offsetParent === document.body ? { left: 0, top: 0 } : d.getBoundingClientRect(), f = c.clientX + d.scrollLeft - h.left, w = c.clientY + d.scrollTop - h.top;
  return { x: f, y: w };
}
function hr(c, d, h, f) {
  return Ho(c) ? {
    deltaX: h - c,
    deltaY: f - d,
    lastX: c,
    lastY: d,
    x: h,
    y: f
  } : {
    deltaX: 0,
    deltaY: 0,
    lastX: h,
    lastY: f,
    x: h,
    y: f
  };
}
function Ho(c) {
  return typeof c == "number" && !Number.isNaN(c);
}
function No(c, d) {
  const h = Vr(c);
  let f = h[0];
  for (let w = 1, m = h.length; w < m; w++) {
    const z = h[w];
    d > c[z] && (f = z);
  }
  return f;
}
function xn(c, d) {
  if (!d[c])
    throw new Error(
      "ResponsiveGridLayout: `cols` entry for breakpoint " + c + " is missing!"
    );
  return d[c];
}
function qo(c, d, h, f, w, m, z) {
  if (d[f]) return bn(d[f]);
  let S = c;
  const v = Vr(h), U = v.slice(v.indexOf(f));
  for (let te = 0, W = U.length; te < W; te++) {
    const le = U[te];
    if (d[le]) {
      S = d[le];
      break;
    }
  }
  return S = bn(S || []), dt(Io(S, { cols: m }), z);
}
function Vr(c) {
  return Object.keys(c).sort((h, f) => c[h] - c[f]);
}
let Xo = "auto";
function Yo() {
  return typeof document < "u";
}
function gr() {
  return Yo() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : Xo;
}
function $o(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var kt = { exports: {} }, Vo = kt.exports, vr;
function Go() {
  return vr || (vr = 1, function(c, d) {
    (function(h, f) {
      c.exports = f();
    })(Vo, function() {
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(t, i).enumerable;
          })), n.push.apply(n, r);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e] != null ? arguments[e] : {};
          e % 2 ? h(Object(n), !0).forEach(function(r) {
            v(t, r, n[r]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach(function(r) {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
        }
        return t;
      }
      function w(t) {
        return w = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, w(t);
      }
      function m(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function z(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, Pe(r.key), r);
        }
      }
      function S(t, e, n) {
        return e && z(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
      }
      function v(t, e, n) {
        return (e = Pe(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
      }
      function U(t, e) {
        if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && W(t, e);
      }
      function te(t) {
        return te = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, te(t);
      }
      function W(t, e) {
        return W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
          return n.__proto__ = r, n;
        }, W(t, e);
      }
      function le(t) {
        if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function re(t) {
        var e = function() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
          if (typeof Proxy == "function") return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), !0;
          } catch {
            return !1;
          }
        }();
        return function() {
          var n, r = te(t);
          if (e) {
            var i = te(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return function(o, a) {
            if (a && (typeof a == "object" || typeof a == "function")) return a;
            if (a !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
            return le(o);
          }(this, n);
        };
      }
      function xe() {
        return xe = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
          var r = function(o, a) {
            for (; !Object.prototype.hasOwnProperty.call(o, a) && (o = te(o)) !== null; ) ;
            return o;
          }(t, e);
          if (r) {
            var i = Object.getOwnPropertyDescriptor(r, e);
            return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
          }
        }, xe.apply(this, arguments);
      }
      function Pe(t) {
        var e = function(n, r) {
          if (typeof n != "object" || n === null) return n;
          var i = n[Symbol.toPrimitive];
          if (i !== void 0) {
            var o = i.call(n, r);
            if (typeof o != "object") return o;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(n);
        }(t, "string");
        return typeof e == "symbol" ? e : e + "";
      }
      var Te = function(t) {
        return !(!t || !t.Window) && t instanceof t.Window;
      }, ze = void 0, ie = void 0;
      function ne(t) {
        ze = t;
        var e = t.document.createTextNode("");
        e.ownerDocument !== t.document && typeof t.wrap == "function" && t.wrap(e) === e && (t = t.wrap(t)), ie = t;
      }
      function K(t) {
        return Te(t) ? t : (t.ownerDocument || t).defaultView || ie.window;
      }
      typeof window < "u" && window && ne(window);
      var Q = function(t) {
        return !!t && w(t) === "object";
      }, ce = function(t) {
        return typeof t == "function";
      }, b = { window: function(t) {
        return t === ie || Te(t);
      }, docFrag: function(t) {
        return Q(t) && t.nodeType === 11;
      }, object: Q, func: ce, number: function(t) {
        return typeof t == "number";
      }, bool: function(t) {
        return typeof t == "boolean";
      }, string: function(t) {
        return typeof t == "string";
      }, element: function(t) {
        if (!t || w(t) !== "object") return !1;
        var e = K(t) || ie;
        return /object|function/.test(typeof Element > "u" ? "undefined" : w(Element)) ? t instanceof Element || t instanceof e.Element : t.nodeType === 1 && typeof t.nodeName == "string";
      }, plainObject: function(t) {
        return Q(t) && !!t.constructor && /function Object\b/.test(t.constructor.toString());
      }, array: function(t) {
        return Q(t) && t.length !== void 0 && ce(t.splice);
      } };
      function ve(t) {
        var e = t.interaction;
        if (e.prepared.name === "drag") {
          var n = e.prepared.axis;
          n === "x" ? (e.coords.cur.page.y = e.coords.start.page.y, e.coords.cur.client.y = e.coords.start.client.y, e.coords.velocity.client.y = 0, e.coords.velocity.page.y = 0) : n === "y" && (e.coords.cur.page.x = e.coords.start.page.x, e.coords.cur.client.x = e.coords.start.client.x, e.coords.velocity.client.x = 0, e.coords.velocity.page.x = 0);
        }
      }
      function me(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "drag") {
          var r = n.prepared.axis;
          if (r === "x" || r === "y") {
            var i = r === "x" ? "y" : "x";
            e.page[i] = n.coords.start.page[i], e.client[i] = n.coords.start.client[i], e.delta[i] = 0;
          }
        }
      }
      var Ee = { id: "actions/drag", install: function(t) {
        var e = t.actions, n = t.Interactable, r = t.defaults;
        n.prototype.draggable = Ee.draggable, e.map.drag = Ee, e.methodDict.drag = "draggable", r.actions.drag = Ee.defaults;
      }, listeners: { "interactions:before-action-move": ve, "interactions:action-resume": ve, "interactions:action-move": me, "auto-start:check": function(t) {
        var e = t.interaction, n = t.interactable, r = t.buttons, i = n.options.drag;
        if (i && i.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || r & n.options.drag.mouseButtons)) return t.action = { name: "drag", axis: i.lockAxis === "start" ? i.startAxis : i.lockAxis }, !1;
      } }, draggable: function(t) {
        return b.object(t) ? (this.options.drag.enabled = t.enabled !== !1, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : b.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag;
      }, beforeMove: ve, move: me, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
        return "move";
      }, filterEventType: function(t) {
        return t.search("drag") === 0;
      } }, O = Ee, L = { init: function(t) {
        var e = t;
        L.document = e.document, L.DocumentFragment = e.DocumentFragment || X, L.SVGElement = e.SVGElement || X, L.SVGSVGElement = e.SVGSVGElement || X, L.SVGElementInstance = e.SVGElementInstance || X, L.Element = e.Element || X, L.HTMLElement = e.HTMLElement || L.Element, L.Event = e.Event, L.Touch = e.Touch || X, L.PointerEvent = e.PointerEvent || e.MSPointerEvent;
      }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
      function X() {
      }
      var Y = L, V = { init: function(t) {
        var e = Y.Element, n = t.navigator || {};
        V.supportsTouch = "ontouchstart" in t || b.func(t.DocumentTouch) && Y.document instanceof t.DocumentTouch, V.supportsPointerEvent = n.pointerEnabled !== !1 && !!Y.PointerEvent, V.isIOS = /iP(hone|od|ad)/.test(n.platform), V.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), V.isIe9 = /MSIE 9/.test(n.userAgent), V.isOperaMobile = n.appName === "Opera" && V.supportsTouch && /Presto/.test(n.userAgent), V.prefixedMatchesSelector = "matches" in e.prototype ? "matches" : "webkitMatchesSelector" in e.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e.prototype ? "oMatchesSelector" : "msMatchesSelector", V.pEventTypes = V.supportsPointerEvent ? Y.PointerEvent === t.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, V.wheelEvent = Y.document && "onmousewheel" in Y.document ? "mousewheel" : "wheel";
      }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, G = V;
      function F(t, e) {
        if (t.contains) return t.contains(e);
        for (; e; ) {
          if (e === t) return !0;
          e = e.parentNode;
        }
        return !1;
      }
      function ke(t, e) {
        for (; b.element(t); ) {
          if (ae(t, e)) return t;
          t = ue(t);
        }
        return null;
      }
      function ue(t) {
        var e = t.parentNode;
        if (b.docFrag(e)) {
          for (; (e = e.host) && b.docFrag(e); ) ;
          return e;
        }
        return e;
      }
      function ae(t, e) {
        return ie !== ze && (e = e.replace(/\/deep\//g, " ")), t[G.prefixedMatchesSelector](e);
      }
      var Z = function(t) {
        return t.parentNode || t.host;
      };
      function Me(t, e) {
        for (var n, r = [], i = t; (n = Z(i)) && i !== e && n !== i.ownerDocument; ) r.unshift(i), i = n;
        return r;
      }
      function ge(t, e, n) {
        for (; b.element(t); ) {
          if (ae(t, e)) return !0;
          if ((t = ue(t)) === n) return ae(t, e);
        }
        return !1;
      }
      function Rt(t) {
        return t.correspondingUseElement || t;
      }
      function Ue(t) {
        var e = t instanceof Y.SVGElement ? t.getBoundingClientRect() : t.getClientRects()[0];
        return e && { left: e.left, right: e.right, top: e.top, bottom: e.bottom, width: e.width || e.right - e.left, height: e.height || e.bottom - e.top };
      }
      function _e(t) {
        var e, n = Ue(t);
        if (!G.isIOS7 && n) {
          var r = { x: (e = (e = K(t)) || ie).scrollX || e.document.documentElement.scrollLeft, y: e.scrollY || e.document.documentElement.scrollTop };
          n.left += r.x, n.right += r.x, n.top += r.y, n.bottom += r.y;
        }
        return n;
      }
      function ot(t) {
        for (var e = []; t; ) e.push(t), t = ue(t);
        return e;
      }
      function ht(t) {
        return !!b.string(t) && (Y.document.querySelector(t), !0);
      }
      function M(t, e) {
        for (var n in e) t[n] = e[n];
        return t;
      }
      function Le(t, e, n) {
        return t === "parent" ? ue(n) : t === "self" ? e.getRect(n) : ke(n, t);
      }
      function De(t, e, n, r) {
        var i = t;
        return b.string(i) ? i = Le(i, e, n) : b.func(i) && (i = i.apply(void 0, r)), b.element(i) && (i = _e(i)), i;
      }
      function Re(t) {
        return t && { x: "x" in t ? t.x : t.left, y: "y" in t ? t.y : t.top };
      }
      function at(t) {
        return !t || "x" in t && "y" in t || ((t = M({}, t)).x = t.left || 0, t.y = t.top || 0, t.width = t.width || (t.right || 0) - t.x, t.height = t.height || (t.bottom || 0) - t.y), t;
      }
      function Ke(t, e, n) {
        t.left && (e.left += n.x), t.right && (e.right += n.x), t.top && (e.top += n.y), t.bottom && (e.bottom += n.y), e.width = e.right - e.left, e.height = e.bottom - e.top;
      }
      function Je(t, e, n) {
        var r = n && t.options[n];
        return Re(De(r && r.origin || t.options.origin, t, e, [t && e])) || { x: 0, y: 0 };
      }
      function Ie(t, e) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(l) {
          return !0;
        }, r = arguments.length > 3 ? arguments[3] : void 0;
        if (r = r || {}, b.string(t) && t.search(" ") !== -1 && (t = gt(t)), b.array(t)) return t.forEach(function(l) {
          return Ie(l, e, n, r);
        }), r;
        if (b.object(t) && (e = t, t = ""), b.func(e) && n(t)) r[t] = r[t] || [], r[t].push(e);
        else if (b.array(e)) for (var i = 0, o = e; i < o.length; i++) {
          var a = o[i];
          Ie(t, a, n, r);
        }
        else if (b.object(e)) for (var s in e)
          Ie(gt(s).map(function(l) {
            return "".concat(t).concat(l);
          }), e[s], n, r);
        return r;
      }
      function gt(t) {
        return t.trim().split(/ +/);
      }
      var We = function(t, e) {
        return Math.sqrt(t * t + e * e);
      }, Gt = ["webkit", "moz"];
      function Qe(t, e) {
        t.__set || (t.__set = {});
        var n = function(i) {
          if (Gt.some(function(o) {
            return i.indexOf(o) === 0;
          })) return 1;
          typeof t[i] != "function" && i !== "__set" && Object.defineProperty(t, i, { get: function() {
            return i in t.__set ? t.__set[i] : t.__set[i] = e[i];
          }, set: function(o) {
            t.__set[i] = o;
          }, configurable: !0 });
        };
        for (var r in e) n(r);
        return t;
      }
      function st(t, e) {
        t.page = t.page || {}, t.page.x = e.page.x, t.page.y = e.page.y, t.client = t.client || {}, t.client.x = e.client.x, t.client.y = e.client.y, t.timeStamp = e.timeStamp;
      }
      function Ce(t) {
        t.page.x = 0, t.page.y = 0, t.client.x = 0, t.client.y = 0;
      }
      function k(t) {
        return t instanceof Y.Event || t instanceof Y.Touch;
      }
      function A(t, e, n) {
        return t = t || "page", (n = n || {}).x = e[t + "X"], n.y = e[t + "Y"], n;
      }
      function $(t, e) {
        return e = e || { x: 0, y: 0 }, G.isOperaMobile && k(t) ? (A("screen", t, e), e.x += window.scrollX, e.y += window.scrollY) : A("page", t, e), e;
      }
      function q(t) {
        return b.number(t.pointerId) ? t.pointerId : t.identifier;
      }
      function oe(t, e, n) {
        var r = e.length > 1 ? R(e) : e[0];
        $(r, t.page), function(i, o) {
          o = o || {}, G.isOperaMobile && k(i) ? A("screen", i, o) : A("client", i, o);
        }(r, t.client), t.timeStamp = n;
      }
      function H(t) {
        var e = [];
        return b.array(t) ? (e[0] = t[0], e[1] = t[1]) : t.type === "touchend" ? t.touches.length === 1 ? (e[0] = t.touches[0], e[1] = t.changedTouches[0]) : t.touches.length === 0 && (e[0] = t.changedTouches[0], e[1] = t.changedTouches[1]) : (e[0] = t.touches[0], e[1] = t.touches[1]), e;
      }
      function R(t) {
        for (var e = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n = 0; n < t.length; n++) {
          var r = t[n];
          for (var i in e) e[i] += r[i];
        }
        for (var o in e) e[o] /= t.length;
        return e;
      }
      function se(t) {
        if (!t.length) return null;
        var e = H(t), n = Math.min(e[0].pageX, e[1].pageX), r = Math.min(e[0].pageY, e[1].pageY), i = Math.max(e[0].pageX, e[1].pageX), o = Math.max(e[0].pageY, e[1].pageY);
        return { x: n, y: r, left: n, top: r, right: i, bottom: o, width: i - n, height: o - r };
      }
      function fe(t, e) {
        var n = e + "X", r = e + "Y", i = H(t), o = i[0][n] - i[1][n], a = i[0][r] - i[1][r];
        return We(o, a);
      }
      function ye(t, e) {
        var n = e + "X", r = e + "Y", i = H(t), o = i[1][n] - i[0][n], a = i[1][r] - i[0][r];
        return 180 * Math.atan2(a, o) / Math.PI;
      }
      function He(t) {
        return b.string(t.pointerType) ? t.pointerType : b.number(t.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t.pointerType] : /touch/.test(t.type || "") || t instanceof Y.Touch ? "touch" : "mouse";
      }
      function Ne(t) {
        var e = b.func(t.composedPath) ? t.composedPath() : t.path;
        return [Rt(e ? e[0] : t.target), Rt(t.currentTarget)];
      }
      var qe = function() {
        function t(e) {
          m(this, t), this.immediatePropagationStopped = !1, this.propagationStopped = !1, this._interaction = e;
        }
        return S(t, [{ key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }]), t;
      }();
      Object.defineProperty(qe.prototype, "interaction", { get: function() {
        return this._interaction._proxy;
      }, set: function() {
      } });
      var ct = function(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          t.push(r);
        }
        return t;
      }, lt = function(t) {
        return ct([], t);
      }, Ae = function(t, e) {
        for (var n = 0; n < t.length; n++) if (e(t[n], n, t)) return n;
        return -1;
      }, vt = function(t, e) {
        return t[Ae(t, e)];
      }, ut = function(t) {
        U(n, t);
        var e = re(n);
        function n(r, i, o) {
          var a;
          m(this, n), (a = e.call(this, i._interaction)).dropzone = void 0, a.dragEvent = void 0, a.relatedTarget = void 0, a.draggable = void 0, a.propagationStopped = !1, a.immediatePropagationStopped = !1;
          var s = o === "dragleave" ? r.prev : r.cur, l = s.element, p = s.dropzone;
          return a.type = o, a.target = l, a.currentTarget = l, a.dropzone = p, a.dragEvent = i, a.relatedTarget = i.target, a.draggable = i.interactable, a.timeStamp = i.timeStamp, a;
        }
        return S(n, [{ key: "reject", value: function() {
          var r = this, i = this._interaction.dropState;
          if (this.type === "dropactivate" || this.dropzone && i.cur.dropzone === this.dropzone && i.cur.element === this.target) if (i.prev.dropzone = this.dropzone, i.prev.element = this.target, i.rejected = !0, i.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
            var o = i.activeDrops, a = Ae(o, function(l) {
              var p = l.dropzone, u = l.element;
              return p === r.dropzone && u === r.target;
            });
            i.activeDrops.splice(a, 1);
            var s = new n(i, this.dragEvent, "dropdeactivate");
            s.dropzone = this.dropzone, s.target = this.target, this.dropzone.fire(s);
          } else this.dropzone.fire(new n(i, this.dragEvent, "dragleave"));
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }]), n;
      }(qe);
      function Sn(t, e) {
        for (var n = 0, r = t.slice(); n < r.length; n++) {
          var i = r[n], o = i.dropzone, a = i.element;
          e.dropzone = o, e.target = a, o.fire(e), e.propagationStopped = e.immediatePropagationStopped = !1;
        }
      }
      function Ut(t, e) {
        for (var n = function(o, a) {
          for (var s = [], l = 0, p = o.interactables.list; l < p.length; l++) {
            var u = p[l];
            if (u.options.drop.enabled) {
              var g = u.options.drop.accept;
              if (!(b.element(g) && g !== a || b.string(g) && !ae(a, g) || b.func(g) && !g({ dropzone: u, draggableElement: a }))) for (var y = 0, E = u.getAllElements(); y < E.length; y++) {
                var x = E[y];
                x !== a && s.push({ dropzone: u, element: x, rect: u.getRect(x) });
              }
            }
          }
          return s;
        }(t, e), r = 0; r < n.length; r++) {
          var i = n[r];
          i.rect = i.dropzone.getRect(i.element);
        }
        return n;
      }
      function Tn(t, e, n) {
        for (var r = t.dropState, i = t.interactable, o = t.element, a = [], s = 0, l = r.activeDrops; s < l.length; s++) {
          var p = l[s], u = p.dropzone, g = p.element, y = p.rect, E = u.dropCheck(e, n, i, o, g, y);
          a.push(E ? g : null);
        }
        var x = function(T) {
          for (var P, _, D, B = [], N = 0; N < T.length; N++) {
            var I = T[N], j = T[P];
            if (I && N !== P) if (j) {
              var pe = Z(I), J = Z(j);
              if (pe !== I.ownerDocument) if (J !== I.ownerDocument) if (pe !== J) {
                B = B.length ? B : Me(j);
                var be = void 0;
                if (j instanceof Y.HTMLElement && I instanceof Y.SVGElement && !(I instanceof Y.SVGSVGElement)) {
                  if (I === J) continue;
                  be = I.ownerSVGElement;
                } else be = I;
                for (var Se = Me(be, j.ownerDocument), je = 0; Se[je] && Se[je] === B[je]; ) je++;
                var Ht = [Se[je - 1], Se[je], B[je]];
                if (Ht[0]) for (var Et = Ht[0].lastChild; Et; ) {
                  if (Et === Ht[1]) {
                    P = N, B = Se;
                    break;
                  }
                  if (Et === Ht[2]) break;
                  Et = Et.previousSibling;
                }
              } else D = j, (parseInt(K(_ = I).getComputedStyle(_).zIndex, 10) || 0) >= (parseInt(K(D).getComputedStyle(D).zIndex, 10) || 0) && (P = N);
              else P = N;
            } else P = N;
          }
          return P;
        }(a);
        return r.activeDrops[x] || null;
      }
      function Kt(t, e, n) {
        var r = t.dropState, i = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
        return n.type === "dragstart" && (i.activate = new ut(r, n, "dropactivate"), i.activate.target = null, i.activate.dropzone = null), n.type === "dragend" && (i.deactivate = new ut(r, n, "dropdeactivate"), i.deactivate.target = null, i.deactivate.dropzone = null), r.rejected || (r.cur.element !== r.prev.element && (r.prev.dropzone && (i.leave = new ut(r, n, "dragleave"), n.dragLeave = i.leave.target = r.prev.element, n.prevDropzone = i.leave.dropzone = r.prev.dropzone), r.cur.dropzone && (i.enter = new ut(r, n, "dragenter"), n.dragEnter = r.cur.element, n.dropzone = r.cur.dropzone)), n.type === "dragend" && r.cur.dropzone && (i.drop = new ut(r, n, "drop"), n.dropzone = r.cur.dropzone, n.relatedTarget = r.cur.element), n.type === "dragmove" && r.cur.dropzone && (i.move = new ut(r, n, "dropmove"), n.dropzone = r.cur.dropzone)), i;
      }
      function Jt(t, e) {
        var n = t.dropState, r = n.activeDrops, i = n.cur, o = n.prev;
        e.leave && o.dropzone.fire(e.leave), e.enter && i.dropzone.fire(e.enter), e.move && i.dropzone.fire(e.move), e.drop && i.dropzone.fire(e.drop), e.deactivate && Sn(r, e.deactivate), n.prev.dropzone = i.dropzone, n.prev.element = i.element;
      }
      function zn(t, e) {
        var n = t.interaction, r = t.iEvent, i = t.event;
        if (r.type === "dragmove" || r.type === "dragend") {
          var o = n.dropState;
          e.dynamicDrop && (o.activeDrops = Ut(e, n.element));
          var a = r, s = Tn(n, a, i);
          o.rejected = o.rejected && !!s && s.dropzone === o.cur.dropzone && s.element === o.cur.element, o.cur.dropzone = s && s.dropzone, o.cur.element = s && s.element, o.events = Kt(n, 0, a);
        }
      }
      var _n = { id: "actions/drop", install: function(t) {
        var e = t.actions, n = t.interactStatic, r = t.Interactable, i = t.defaults;
        t.usePlugin(O), r.prototype.dropzone = function(o) {
          return function(a, s) {
            if (b.object(s)) {
              if (a.options.drop.enabled = s.enabled !== !1, s.listeners) {
                var l = Ie(s.listeners), p = Object.keys(l).reduce(function(g, y) {
                  return g[/^(enter|leave)/.test(y) ? "drag".concat(y) : /^(activate|deactivate|move)/.test(y) ? "drop".concat(y) : y] = l[y], g;
                }, {}), u = a.options.drop.listeners;
                u && a.off(u), a.on(p), a.options.drop.listeners = p;
              }
              return b.func(s.ondrop) && a.on("drop", s.ondrop), b.func(s.ondropactivate) && a.on("dropactivate", s.ondropactivate), b.func(s.ondropdeactivate) && a.on("dropdeactivate", s.ondropdeactivate), b.func(s.ondragenter) && a.on("dragenter", s.ondragenter), b.func(s.ondragleave) && a.on("dragleave", s.ondragleave), b.func(s.ondropmove) && a.on("dropmove", s.ondropmove), /^(pointer|center)$/.test(s.overlap) ? a.options.drop.overlap = s.overlap : b.number(s.overlap) && (a.options.drop.overlap = Math.max(Math.min(1, s.overlap), 0)), "accept" in s && (a.options.drop.accept = s.accept), "checker" in s && (a.options.drop.checker = s.checker), a;
            }
            return b.bool(s) ? (a.options.drop.enabled = s, a) : a.options.drop;
          }(this, o);
        }, r.prototype.dropCheck = function(o, a, s, l, p, u) {
          return function(g, y, E, x, T, P, _) {
            var D = !1;
            if (!(_ = _ || g.getRect(P))) return !!g.options.drop.checker && g.options.drop.checker(y, E, D, g, P, x, T);
            var B = g.options.drop.overlap;
            if (B === "pointer") {
              var N = Je(x, T, "drag"), I = $(y);
              I.x += N.x, I.y += N.y;
              var j = I.x > _.left && I.x < _.right, pe = I.y > _.top && I.y < _.bottom;
              D = j && pe;
            }
            var J = x.getRect(T);
            if (J && B === "center") {
              var be = J.left + J.width / 2, Se = J.top + J.height / 2;
              D = be >= _.left && be <= _.right && Se >= _.top && Se <= _.bottom;
            }
            return J && b.number(B) && (D = Math.max(0, Math.min(_.right, J.right) - Math.max(_.left, J.left)) * Math.max(0, Math.min(_.bottom, J.bottom) - Math.max(_.top, J.top)) / (J.width * J.height) >= B), g.options.drop.checker && (D = g.options.drop.checker(y, E, D, g, P, x, T)), D;
          }(this, o, a, s, l, p, u);
        }, n.dynamicDrop = function(o) {
          return b.bool(o) ? (t.dynamicDrop = o, n) : t.dynamicDrop;
        }, M(e.phaselessTypes, { dragenter: !0, dragleave: !0, dropactivate: !0, dropdeactivate: !0, dropmove: !0, drop: !0 }), e.methodDict.drop = "dropzone", t.dynamicDrop = !1, i.actions.drop = _n.defaults;
      }, listeners: { "interactions:before-action-start": function(t) {
        var e = t.interaction;
        e.prepared.name === "drag" && (e.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
      }, "interactions:after-action-start": function(t, e) {
        var n = t.interaction, r = (t.event, t.iEvent);
        if (n.prepared.name === "drag") {
          var i = n.dropState;
          i.activeDrops = [], i.events = {}, i.activeDrops = Ut(e, n.element), i.events = Kt(n, 0, r), i.events.activate && (Sn(i.activeDrops, i.events.activate), e.fire("actions/drop:start", { interaction: n, dragEvent: r }));
        }
      }, "interactions:action-move": zn, "interactions:after-action-move": function(t, e) {
        var n = t.interaction, r = t.iEvent;
        if (n.prepared.name === "drag") {
          var i = n.dropState;
          Jt(n, i.events), e.fire("actions/drop:move", { interaction: n, dragEvent: r }), i.events = {};
        }
      }, "interactions:action-end": function(t, e) {
        if (t.interaction.prepared.name === "drag") {
          var n = t.interaction, r = t.iEvent;
          zn(t, e), Jt(n, n.dropState.events), e.fire("actions/drop:end", { interaction: n, dragEvent: r });
        }
      }, "interactions:stop": function(t) {
        var e = t.interaction;
        if (e.prepared.name === "drag") {
          var n = e.dropState;
          n && (n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element = null, n.prev.dropzone = null, n.prev.element = null, n.rejected = !1);
        }
      } }, getActiveDrops: Ut, getDrop: Tn, getDropEvents: Kt, fireDropEvents: Jt, filterEventType: function(t) {
        return t.search("drag") === 0 || t.search("drop") === 0;
      }, defaults: { enabled: !1, accept: null, overlap: "pointer" } }, ni = _n;
      function Qt(t) {
        var e = t.interaction, n = t.iEvent, r = t.phase;
        if (e.prepared.name === "gesture") {
          var i = e.pointers.map(function(p) {
            return p.pointer;
          }), o = r === "start", a = r === "end", s = e.interactable.options.deltaSource;
          if (n.touches = [i[0], i[1]], o) n.distance = fe(i, s), n.box = se(i), n.scale = 1, n.ds = 0, n.angle = ye(i, s), n.da = 0, e.gesture.startDistance = n.distance, e.gesture.startAngle = n.angle;
          else if (a || e.pointers.length < 2) {
            var l = e.prevEvent;
            n.distance = l.distance, n.box = l.box, n.scale = l.scale, n.ds = 0, n.angle = l.angle, n.da = 0;
          } else n.distance = fe(i, s), n.box = se(i), n.scale = n.distance / e.gesture.startDistance, n.angle = ye(i, s), n.ds = n.scale - e.gesture.scale, n.da = n.angle - e.gesture.angle;
          e.gesture.distance = n.distance, e.gesture.angle = n.angle, b.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (e.gesture.scale = n.scale);
        }
      }
      var Zt = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t) {
        var e = t.actions, n = t.Interactable, r = t.defaults;
        n.prototype.gesturable = function(i) {
          return b.object(i) ? (this.options.gesture.enabled = i.enabled !== !1, this.setPerAction("gesture", i), this.setOnEvents("gesture", i), this) : b.bool(i) ? (this.options.gesture.enabled = i, this) : this.options.gesture;
        }, e.map.gesture = Zt, e.methodDict.gesture = "gesturable", r.actions.gesture = Zt.defaults;
      }, listeners: { "interactions:action-start": Qt, "interactions:action-move": Qt, "interactions:action-end": Qt, "interactions:new": function(t) {
        t.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
      }, "auto-start:check": function(t) {
        if (!(t.interaction.pointers.length < 2)) {
          var e = t.interactable.options.gesture;
          if (e && e.enabled) return t.action = { name: "gesture" }, !1;
        }
      } }, defaults: {}, getCursor: function() {
        return "";
      }, filterEventType: function(t) {
        return t.search("gesture") === 0;
      } }, ri = Zt;
      function ii(t, e, n, r, i, o, a) {
        if (!e) return !1;
        if (e === !0) {
          var s = b.number(o.width) ? o.width : o.right - o.left, l = b.number(o.height) ? o.height : o.bottom - o.top;
          if (a = Math.min(a, Math.abs((t === "left" || t === "right" ? s : l) / 2)), s < 0 && (t === "left" ? t = "right" : t === "right" && (t = "left")), l < 0 && (t === "top" ? t = "bottom" : t === "bottom" && (t = "top")), t === "left") {
            var p = s >= 0 ? o.left : o.right;
            return n.x < p + a;
          }
          if (t === "top") {
            var u = l >= 0 ? o.top : o.bottom;
            return n.y < u + a;
          }
          if (t === "right") return n.x > (s >= 0 ? o.right : o.left) - a;
          if (t === "bottom") return n.y > (l >= 0 ? o.bottom : o.top) - a;
        }
        return !!b.element(r) && (b.element(e) ? e === r : ge(r, e, i));
      }
      function On(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "resize" && n.resizeAxes) {
          var r = e;
          n.interactable.options.resize.square ? (n.resizeAxes === "y" ? r.delta.x = r.delta.y : r.delta.y = r.delta.x, r.axes = "xy") : (r.axes = n.resizeAxes, n.resizeAxes === "x" ? r.delta.y = 0 : n.resizeAxes === "y" && (r.delta.x = 0));
        }
      }
      var Be, Ze, Fe = { id: "actions/resize", before: ["actions/drag"], install: function(t) {
        var e = t.actions, n = t.browser, r = t.Interactable, i = t.defaults;
        Fe.cursors = function(o) {
          return o.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
        }(n), Fe.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, r.prototype.resizable = function(o) {
          return function(a, s, l) {
            return b.object(s) ? (a.options.resize.enabled = s.enabled !== !1, a.setPerAction("resize", s), a.setOnEvents("resize", s), b.string(s.axis) && /^x$|^y$|^xy$/.test(s.axis) ? a.options.resize.axis = s.axis : s.axis === null && (a.options.resize.axis = l.defaults.actions.resize.axis), b.bool(s.preserveAspectRatio) ? a.options.resize.preserveAspectRatio = s.preserveAspectRatio : b.bool(s.square) && (a.options.resize.square = s.square), a) : b.bool(s) ? (a.options.resize.enabled = s, a) : a.options.resize;
          }(this, o, t);
        }, e.map.resize = Fe, e.methodDict.resize = "resizable", i.actions.resize = Fe.defaults;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.resizeAxes = "xy";
      }, "interactions:action-start": function(t) {
        (function(e) {
          var n = e.iEvent, r = e.interaction;
          if (r.prepared.name === "resize" && r.prepared.edges) {
            var i = n, o = r.rect;
            r._rects = { start: M({}, o), corrected: M({}, o), previous: M({}, o), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, i.edges = r.prepared.edges, i.rect = r._rects.corrected, i.deltaRect = r._rects.delta;
          }
        })(t), On(t);
      }, "interactions:action-move": function(t) {
        (function(e) {
          var n = e.iEvent, r = e.interaction;
          if (r.prepared.name === "resize" && r.prepared.edges) {
            var i = n, o = r.interactable.options.resize.invert, a = o === "reposition" || o === "negate", s = r.rect, l = r._rects, p = l.start, u = l.corrected, g = l.delta, y = l.previous;
            if (M(y, u), a) {
              if (M(u, s), o === "reposition") {
                if (u.top > u.bottom) {
                  var E = u.top;
                  u.top = u.bottom, u.bottom = E;
                }
                if (u.left > u.right) {
                  var x = u.left;
                  u.left = u.right, u.right = x;
                }
              }
            } else u.top = Math.min(s.top, p.bottom), u.bottom = Math.max(s.bottom, p.top), u.left = Math.min(s.left, p.right), u.right = Math.max(s.right, p.left);
            for (var T in u.width = u.right - u.left, u.height = u.bottom - u.top, u) g[T] = u[T] - y[T];
            i.edges = r.prepared.edges, i.rect = u, i.deltaRect = g;
          }
        })(t), On(t);
      }, "interactions:action-end": function(t) {
        var e = t.iEvent, n = t.interaction;
        if (n.prepared.name === "resize" && n.prepared.edges) {
          var r = e;
          r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta;
        }
      }, "auto-start:check": function(t) {
        var e = t.interaction, n = t.interactable, r = t.element, i = t.rect, o = t.buttons;
        if (i) {
          var a = M({}, e.coords.cur.page), s = n.options.resize;
          if (s && s.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || o & s.mouseButtons)) {
            if (b.object(s.edges)) {
              var l = { left: !1, right: !1, top: !1, bottom: !1 };
              for (var p in l) l[p] = ii(p, s.edges[p], a, e._latestPointer.eventTarget, r, i, s.margin || Fe.defaultMargin);
              l.left = l.left && !l.right, l.top = l.top && !l.bottom, (l.left || l.right || l.top || l.bottom) && (t.action = { name: "resize", edges: l });
            } else {
              var u = s.axis !== "y" && a.x > i.right - Fe.defaultMargin, g = s.axis !== "x" && a.y > i.bottom - Fe.defaultMargin;
              (u || g) && (t.action = { name: "resize", axes: (u ? "x" : "") + (g ? "y" : "") });
            }
            return !t.action && void 0;
          }
        }
      } }, defaults: { square: !1, preserveAspectRatio: !1, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(t) {
        var e = t.edges, n = t.axis, r = t.name, i = Fe.cursors, o = null;
        if (n) o = i[r + n];
        else if (e) {
          for (var a = "", s = 0, l = ["top", "bottom", "left", "right"]; s < l.length; s++) {
            var p = l[s];
            e[p] && (a += p);
          }
          o = i[a];
        }
        return o;
      }, filterEventType: function(t) {
        return t.search("resize") === 0;
      }, defaultMargin: null }, oi = Fe, ai = { id: "actions", install: function(t) {
        t.usePlugin(ri), t.usePlugin(oi), t.usePlugin(O), t.usePlugin(ni);
      } }, Pn = 0, Xe = { request: function(t) {
        return Be(t);
      }, cancel: function(t) {
        return Ze(t);
      }, init: function(t) {
        if (Be = t.requestAnimationFrame, Ze = t.cancelAnimationFrame, !Be) for (var e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length; n++) {
          var r = e[n];
          Be = t["".concat(r, "RequestAnimationFrame")], Ze = t["".concat(r, "CancelAnimationFrame")] || t["".concat(r, "CancelRequestAnimationFrame")];
        }
        Be = Be && Be.bind(t), Ze = Ze && Ze.bind(t), Be || (Be = function(i) {
          var o = Date.now(), a = Math.max(0, 16 - (o - Pn)), s = t.setTimeout(function() {
            i(o + a);
          }, a);
          return Pn = o + a, s;
        }, Ze = function(i) {
          return clearTimeout(i);
        });
      } }, C = { defaults: { enabled: !1, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: !1, prevTime: 0, margin: 0, speed: 0, start: function(t) {
        C.isScrolling = !0, Xe.cancel(C.i), t.autoScroll = C, C.interaction = t, C.prevTime = C.now(), C.i = Xe.request(C.scroll);
      }, stop: function() {
        C.isScrolling = !1, C.interaction && (C.interaction.autoScroll = null), Xe.cancel(C.i);
      }, scroll: function() {
        var t = C.interaction, e = t.interactable, n = t.element, r = t.prepared.name, i = e.options[r].autoScroll, o = Mn(i.container, e, n), a = C.now(), s = (a - C.prevTime) / 1e3, l = i.speed * s;
        if (l >= 1) {
          var p = { x: C.x * l, y: C.y * l };
          if (p.x || p.y) {
            var u = Dn(o);
            b.window(o) ? o.scrollBy(p.x, p.y) : o && (o.scrollLeft += p.x, o.scrollTop += p.y);
            var g = Dn(o), y = { x: g.x - u.x, y: g.y - u.y };
            (y.x || y.y) && e.fire({ type: "autoscroll", target: n, interactable: e, delta: y, interaction: t, container: o });
          }
          C.prevTime = a;
        }
        C.isScrolling && (Xe.cancel(C.i), C.i = Xe.request(C.scroll));
      }, check: function(t, e) {
        var n;
        return (n = t.options[e].autoScroll) == null ? void 0 : n.enabled;
      }, onInteractionMove: function(t) {
        var e = t.interaction, n = t.pointer;
        if (e.interacting() && C.check(e.interactable, e.prepared.name)) if (e.simulation) C.x = C.y = 0;
        else {
          var r, i, o, a, s = e.interactable, l = e.element, p = e.prepared.name, u = s.options[p].autoScroll, g = Mn(u.container, s, l);
          if (b.window(g)) a = n.clientX < C.margin, r = n.clientY < C.margin, i = n.clientX > g.innerWidth - C.margin, o = n.clientY > g.innerHeight - C.margin;
          else {
            var y = Ue(g);
            a = n.clientX < y.left + C.margin, r = n.clientY < y.top + C.margin, i = n.clientX > y.right - C.margin, o = n.clientY > y.bottom - C.margin;
          }
          C.x = i ? 1 : a ? -1 : 0, C.y = o ? 1 : r ? -1 : 0, C.isScrolling || (C.margin = u.margin, C.speed = u.speed, C.start(e));
        }
      } };
      function Mn(t, e, n) {
        return (b.string(t) ? Le(t, e, n) : t) || K(n);
      }
      function Dn(t) {
        return b.window(t) && (t = window.document.body), { x: t.scrollLeft, y: t.scrollTop };
      }
      var si = { id: "auto-scroll", install: function(t) {
        var e = t.defaults, n = t.actions;
        t.autoScroll = C, C.now = function() {
          return t.now();
        }, n.phaselessTypes.autoscroll = !0, e.perAction.autoScroll = C.defaults;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.autoScroll = null;
      }, "interactions:destroy": function(t) {
        t.interaction.autoScroll = null, C.stop(), C.interaction && (C.interaction = null);
      }, "interactions:stop": C.stop, "interactions:action-move": function(t) {
        return C.onInteractionMove(t);
      } } }, ci = si;
      function mt(t, e) {
        var n = !1;
        return function() {
          return n || (ie.console.warn(e), n = !0), t.apply(this, arguments);
        };
      }
      function en(t, e) {
        return t.name = e.name, t.axis = e.axis, t.edges = e.edges, t;
      }
      function li(t) {
        return b.bool(t) ? (this.options.styleCursor = t, this) : t === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
      }
      function ui(t) {
        return b.func(t) ? (this.options.actionChecker = t, this) : t === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
      }
      var fi = { id: "auto-start/interactableMethods", install: function(t) {
        var e = t.Interactable;
        e.prototype.getAction = function(n, r, i, o) {
          var a = function(s, l, p, u, g) {
            var y = s.getRect(u), E = l.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[l.button], x = { action: null, interactable: s, interaction: p, element: u, rect: y, buttons: E };
            return g.fire("auto-start:check", x), x.action;
          }(this, r, i, o, t);
          return this.options.actionChecker ? this.options.actionChecker(n, r, a, this, o, i) : a;
        }, e.prototype.ignoreFrom = mt(function(n) {
          return this._backCompatOption("ignoreFrom", n);
        }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e.prototype.allowFrom = mt(function(n) {
          return this._backCompatOption("allowFrom", n);
        }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e.prototype.actionChecker = ui, e.prototype.styleCursor = li;
      } };
      function Rn(t, e, n, r, i) {
        return e.testIgnoreAllow(e.options[t.name], n, r) && e.options[t.name].enabled && It(e, n, t, i) ? t : null;
      }
      function di(t, e, n, r, i, o, a) {
        for (var s = 0, l = r.length; s < l; s++) {
          var p = r[s], u = i[s], g = p.getAction(e, n, t, u);
          if (g) {
            var y = Rn(g, p, u, o, a);
            if (y) return { action: y, interactable: p, element: u };
          }
        }
        return { action: null, interactable: null, element: null };
      }
      function In(t, e, n, r, i) {
        var o = [], a = [], s = r;
        function l(u) {
          o.push(u), a.push(s);
        }
        for (; b.element(s); ) {
          o = [], a = [], i.interactables.forEachMatch(s, l);
          var p = di(t, e, n, o, a, r, i);
          if (p.action && !p.interactable.options[p.action.name].manualStart) return p;
          s = ue(s);
        }
        return { action: null, interactable: null, element: null };
      }
      function Cn(t, e, n) {
        var r = e.action, i = e.interactable, o = e.element;
        r = r || { name: null }, t.interactable = i, t.element = o, en(t.prepared, r), t.rect = i && r.name ? i.getRect(o) : null, Bn(t, n), n.fire("autoStart:prepared", { interaction: t });
      }
      function It(t, e, n, r) {
        var i = t.options, o = i[n.name].max, a = i[n.name].maxPerElement, s = r.autoStart.maxInteractions, l = 0, p = 0, u = 0;
        if (!(o && a && s)) return !1;
        for (var g = 0, y = r.interactions.list; g < y.length; g++) {
          var E = y[g], x = E.prepared.name;
          if (E.interacting() && (++l >= s || E.interactable === t && ((p += x === n.name ? 1 : 0) >= o || E.element === e && (u++, x === n.name && u >= a))))
            return !1;
        }
        return s > 0;
      }
      function An(t, e) {
        return b.number(t) ? (e.autoStart.maxInteractions = t, this) : e.autoStart.maxInteractions;
      }
      function tn(t, e, n) {
        var r = n.autoStart.cursorElement;
        r && r !== t && (r.style.cursor = ""), t.ownerDocument.documentElement.style.cursor = e, t.style.cursor = e, n.autoStart.cursorElement = e ? t : null;
      }
      function Bn(t, e) {
        var n = t.interactable, r = t.element, i = t.prepared;
        if (t.pointerType === "mouse" && n && n.options.styleCursor) {
          var o = "";
          if (i.name) {
            var a = n.options[i.name].cursorChecker;
            o = b.func(a) ? a(i, n, r, t._interacting) : e.actions.map[i.name].getCursor(i);
          }
          tn(t.element, o || "", e);
        } else e.autoStart.cursorElement && tn(e.autoStart.cursorElement, "", e);
      }
      var pi = { id: "auto-start/base", before: ["actions"], install: function(t) {
        var e = t.interactStatic, n = t.defaults;
        t.usePlugin(fi), n.base.actionChecker = null, n.base.styleCursor = !0, M(n.perAction, { manualStart: !1, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e.maxInteractions = function(r) {
          return An(r, t);
        }, t.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: It, cursorElement: null };
      }, listeners: { "interactions:down": function(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget;
        n.interacting() || Cn(n, In(n, r, i, o, e), e);
      }, "interactions:move": function(t, e) {
        (function(n, r) {
          var i = n.interaction, o = n.pointer, a = n.event, s = n.eventTarget;
          i.pointerType !== "mouse" || i.pointerIsDown || i.interacting() || Cn(i, In(i, o, a, s, r), r);
        })(t, e), function(n, r) {
          var i = n.interaction;
          if (i.pointerIsDown && !i.interacting() && i.pointerWasMoved && i.prepared.name) {
            r.fire("autoStart:before-start", n);
            var o = i.interactable, a = i.prepared.name;
            a && o && (o.options[a].manualStart || !It(o, i.element, i.prepared, r) ? i.stop() : (i.start(i.prepared, o, i.element), Bn(i, r)));
          }
        }(t, e);
      }, "interactions:stop": function(t, e) {
        var n = t.interaction, r = n.interactable;
        r && r.options.styleCursor && tn(n.element, "", e);
      } }, maxInteractions: An, withinInteractionLimit: It, validateAction: Rn }, nn = pi, hi = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t, e) {
        var n = t.interaction, r = t.eventTarget, i = t.dx, o = t.dy;
        if (n.prepared.name === "drag") {
          var a = Math.abs(i), s = Math.abs(o), l = n.interactable.options.drag, p = l.startAxis, u = a > s ? "x" : a < s ? "y" : "xy";
          if (n.prepared.axis = l.lockAxis === "start" ? u[0] : l.lockAxis, u !== "xy" && p !== "xy" && p !== u) {
            n.prepared.name = null;
            for (var g = r, y = function(x) {
              if (x !== n.interactable) {
                var T = n.interactable.options.drag;
                if (!T.manualStart && x.testIgnoreAllow(T, g, r)) {
                  var P = x.getAction(n.downPointer, n.downEvent, n, g);
                  if (P && P.name === "drag" && function(_, D) {
                    if (!D) return !1;
                    var B = D.options.drag.startAxis;
                    return _ === "xy" || B === "xy" || B === _;
                  }(u, x) && nn.validateAction(P, x, g, r, e)) return x;
                }
              }
            }; b.element(g); ) {
              var E = e.interactables.forEachMatch(g, y);
              if (E) {
                n.prepared.name = "drag", n.interactable = E, n.element = g;
                break;
              }
              g = ue(g);
            }
          }
        }
      } } };
      function rn(t) {
        var e = t.prepared && t.prepared.name;
        if (!e) return null;
        var n = t.interactable.options;
        return n[e].hold || n[e].delay;
      }
      var gi = { id: "auto-start/hold", install: function(t) {
        var e = t.defaults;
        t.usePlugin(nn), e.perAction.hold = 0, e.perAction.delay = 0;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.autoStartHoldTimer = null;
      }, "autoStart:prepared": function(t) {
        var e = t.interaction, n = rn(e);
        n > 0 && (e.autoStartHoldTimer = setTimeout(function() {
          e.start(e.prepared, e.interactable, e.element);
        }, n));
      }, "interactions:move": function(t) {
        var e = t.interaction, n = t.duplicate;
        e.autoStartHoldTimer && e.pointerWasMoved && !n && (clearTimeout(e.autoStartHoldTimer), e.autoStartHoldTimer = null);
      }, "autoStart:before-start": function(t) {
        var e = t.interaction;
        rn(e) > 0 && (e.prepared.name = null);
      } }, getHoldDuration: rn }, vi = gi, mi = { id: "auto-start", install: function(t) {
        t.usePlugin(nn), t.usePlugin(vi), t.usePlugin(hi);
      } }, yi = function(t) {
        return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : b.bool(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault;
      };
      function bi(t) {
        var e = t.interaction, n = t.event;
        e.interactable && e.interactable.checkAndPreventDefault(n);
      }
      var Fn = { id: "core/interactablePreventDefault", install: function(t) {
        var e = t.Interactable;
        e.prototype.preventDefault = yi, e.prototype.checkAndPreventDefault = function(n) {
          return function(r, i, o) {
            var a = r.options.preventDefault;
            if (a !== "never") if (a !== "always") {
              if (i.events.supportsPassive && /^touch(start|move)$/.test(o.type)) {
                var s = K(o.target).document, l = i.getDocOptions(s);
                if (!l || !l.events || l.events.passive !== !1) return;
              }
              /^(mouse|pointer|touch)*(down|start)/i.test(o.type) || b.element(o.target) && ae(o.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || o.preventDefault();
            } else o.preventDefault();
          }(this, t, n);
        }, t.interactions.docEvents.push({ type: "dragstart", listener: function(n) {
          for (var r = 0, i = t.interactions.list; r < i.length; r++) {
            var o = i[r];
            if (o.element && (o.element === n.target || F(o.element, n.target))) return void o.interactable.checkAndPreventDefault(n);
          }
        } });
      }, listeners: ["down", "move", "up", "cancel"].reduce(function(t, e) {
        return t["interactions:".concat(e)] = bi, t;
      }, {}) };
      function Ct(t, e) {
        if (e.phaselessTypes[t]) return !0;
        for (var n in e.map) if (t.indexOf(n) === 0 && t.substr(n.length) in e.phases) return !0;
        return !1;
      }
      function ft(t) {
        var e = {};
        for (var n in t) {
          var r = t[n];
          b.plainObject(r) ? e[n] = ft(r) : b.array(r) ? e[n] = lt(r) : e[n] = r;
        }
        return e;
      }
      var on = function() {
        function t(e) {
          m(this, t), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = e, this.result = At(), this.edges = { left: !1, right: !1, top: !1, bottom: !1 };
        }
        return S(t, [{ key: "start", value: function(e, n) {
          var r, i, o = e.phase, a = this.interaction, s = function(p) {
            var u = p.interactable.options[p.prepared.name], g = u.modifiers;
            return g && g.length ? g : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(y) {
              var E = u[y];
              return E && E.enabled && { options: E, methods: E._methods };
            }).filter(function(y) {
              return !!y;
            });
          }(a);
          this.prepareStates(s), this.startEdges = M({}, a.edges), this.edges = M({}, this.startEdges), this.startOffset = (r = a.rect, i = n, r ? { left: i.x - r.left, top: i.y - r.top, right: r.right - i.x, bottom: r.bottom - i.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
          var l = this.fillArg({ phase: o, pageCoords: n, preEnd: !1 });
          return this.result = At(), this.startAll(l), this.result = this.setAll(l);
        } }, { key: "fillArg", value: function(e) {
          var n = this.interaction;
          return e.interaction = n, e.interactable = n.interactable, e.element = n.element, e.rect || (e.rect = n.rect), e.edges || (e.edges = this.startEdges), e.startOffset = this.startOffset, e;
        } }, { key: "startAll", value: function(e) {
          for (var n = 0, r = this.states; n < r.length; n++) {
            var i = r[n];
            i.methods.start && (e.state = i, i.methods.start(e));
          }
        } }, { key: "setAll", value: function(e) {
          var n = e.phase, r = e.preEnd, i = e.skipModifiers, o = e.rect, a = e.edges;
          e.coords = M({}, e.pageCoords), e.rect = M({}, o), e.edges = M({}, a);
          for (var s = i ? this.states.slice(i) : this.states, l = At(e.coords, e.rect), p = 0; p < s.length; p++) {
            var u, g = s[p], y = g.options, E = M({}, e.coords), x = null;
            (u = g.methods) != null && u.set && this.shouldDo(y, r, n) && (e.state = g, x = g.methods.set(e), Ke(e.edges, e.rect, { x: e.coords.x - E.x, y: e.coords.y - E.y })), l.eventProps.push(x);
          }
          M(this.edges, e.edges), l.delta.x = e.coords.x - e.pageCoords.x, l.delta.y = e.coords.y - e.pageCoords.y, l.rectDelta.left = e.rect.left - o.left, l.rectDelta.right = e.rect.right - o.right, l.rectDelta.top = e.rect.top - o.top, l.rectDelta.bottom = e.rect.bottom - o.bottom;
          var T = this.result.coords, P = this.result.rect;
          if (T && P) {
            var _ = l.rect.left !== P.left || l.rect.right !== P.right || l.rect.top !== P.top || l.rect.bottom !== P.bottom;
            l.changed = _ || T.x !== l.coords.x || T.y !== l.coords.y;
          }
          return l;
        } }, { key: "applyToInteraction", value: function(e) {
          var n = this.interaction, r = e.phase, i = n.coords.cur, o = n.coords.start, a = this.result, s = this.startDelta, l = a.delta;
          r === "start" && M(this.startDelta, a.delta);
          for (var p = 0, u = [[o, s], [i, l]]; p < u.length; p++) {
            var g = u[p], y = g[0], E = g[1];
            y.page.x += E.x, y.page.y += E.y, y.client.x += E.x, y.client.y += E.y;
          }
          var x = this.result.rectDelta, T = e.rect || n.rect;
          T.left += x.left, T.right += x.right, T.top += x.top, T.bottom += x.bottom, T.width = T.right - T.left, T.height = T.bottom - T.top;
        } }, { key: "setAndApply", value: function(e) {
          var n = this.interaction, r = e.phase, i = e.preEnd, o = e.skipModifiers, a = this.setAll(this.fillArg({ preEnd: i, phase: r, pageCoords: e.modifiedCoords || n.coords.cur.page }));
          if (this.result = a, !a.changed && (!o || o < this.states.length) && n.interacting()) return !1;
          if (e.modifiedCoords) {
            var s = n.coords.cur.page, l = { x: e.modifiedCoords.x - s.x, y: e.modifiedCoords.y - s.y };
            a.coords.x += l.x, a.coords.y += l.y, a.delta.x += l.x, a.delta.y += l.y;
          }
          this.applyToInteraction(e);
        } }, { key: "beforeEnd", value: function(e) {
          var n = e.interaction, r = e.event, i = this.states;
          if (i && i.length) {
            for (var o = !1, a = 0; a < i.length; a++) {
              var s = i[a];
              e.state = s;
              var l = s.options, p = s.methods, u = p.beforeEnd && p.beforeEnd(e);
              if (u) return this.endResult = u, !1;
              o = o || !o && this.shouldDo(l, !0, e.phase, !0);
            }
            o && n.move({ event: r, preEnd: !0 });
          }
        } }, { key: "stop", value: function(e) {
          var n = e.interaction;
          if (this.states && this.states.length) {
            var r = M({ states: this.states, interactable: n.interactable, element: n.element, rect: null }, e);
            this.fillArg(r);
            for (var i = 0, o = this.states; i < o.length; i++) {
              var a = o[i];
              r.state = a, a.methods.stop && a.methods.stop(r);
            }
            this.states = null, this.endResult = null;
          }
        } }, { key: "prepareStates", value: function(e) {
          this.states = [];
          for (var n = 0; n < e.length; n++) {
            var r = e[n], i = r.options, o = r.methods, a = r.name;
            this.states.push({ options: i, methods: o, index: n, name: a });
          }
          return this.states;
        } }, { key: "restoreInteractionCoords", value: function(e) {
          var n = e.interaction, r = n.coords, i = n.rect, o = n.modification;
          if (o.result) {
            for (var a = o.startDelta, s = o.result, l = s.delta, p = s.rectDelta, u = 0, g = [[r.start, a], [r.cur, l]]; u < g.length; u++) {
              var y = g[u], E = y[0], x = y[1];
              E.page.x -= x.x, E.page.y -= x.y, E.client.x -= x.x, E.client.y -= x.y;
            }
            i.left -= p.left, i.right -= p.right, i.top -= p.top, i.bottom -= p.bottom;
          }
        } }, { key: "shouldDo", value: function(e, n, r, i) {
          return !(!e || e.enabled === !1 || i && !e.endOnly || e.endOnly && !n || r === "start" && !e.setStart);
        } }, { key: "copyFrom", value: function(e) {
          this.startOffset = e.startOffset, this.startDelta = e.startDelta, this.startEdges = e.startEdges, this.edges = e.edges, this.states = e.states.map(function(n) {
            return ft(n);
          }), this.result = At(M({}, e.result.coords), M({}, e.result.rect));
        } }, { key: "destroy", value: function() {
          for (var e in this) this[e] = null;
        } }]), t;
      }();
      function At(t, e) {
        return { rect: e, coords: t, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: !0 };
      }
      function Ye(t, e) {
        var n = t.defaults, r = { start: t.start, set: t.set, beforeEnd: t.beforeEnd, stop: t.stop }, i = function(o) {
          var a = o || {};
          for (var s in a.enabled = a.enabled !== !1, n) s in a || (a[s] = n[s]);
          var l = { options: a, methods: r, name: e, enable: function() {
            return a.enabled = !0, l;
          }, disable: function() {
            return a.enabled = !1, l;
          } };
          return l;
        };
        return e && typeof e == "string" && (i._defaults = n, i._methods = r), i;
      }
      function yt(t) {
        var e = t.iEvent, n = t.interaction.modification.result;
        n && (e.modifiers = n.eventProps);
      }
      var wi = { id: "modifiers/base", before: ["actions"], install: function(t) {
        t.defaults.perAction.modifiers = [];
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.modification = new on(e);
      }, "interactions:before-action-start": function(t) {
        var e = t.interaction, n = t.interaction.modification;
        n.start(t, e.coords.start.page), e.edges = n.edges, n.applyToInteraction(t);
      }, "interactions:before-action-move": function(t) {
        var e = t.interaction, n = e.modification, r = n.setAndApply(t);
        return e.edges = n.edges, r;
      }, "interactions:before-action-end": function(t) {
        var e = t.interaction, n = e.modification, r = n.beforeEnd(t);
        return e.edges = n.startEdges, r;
      }, "interactions:action-start": yt, "interactions:action-move": yt, "interactions:action-end": yt, "interactions:after-action-start": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:after-action-move": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:stop": function(t) {
        return t.interaction.modification.stop(t);
      } } }, jn = wi, Ln = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: !1, origin: { x: 0, y: 0 } }, actions: {} }, an = function(t) {
        U(n, t);
        var e = re(n);
        function n(r, i, o, a, s, l, p) {
          var u;
          m(this, n), (u = e.call(this, r)).relatedTarget = null, u.screenX = void 0, u.screenY = void 0, u.button = void 0, u.buttons = void 0, u.ctrlKey = void 0, u.shiftKey = void 0, u.altKey = void 0, u.metaKey = void 0, u.page = void 0, u.client = void 0, u.delta = void 0, u.rect = void 0, u.x0 = void 0, u.y0 = void 0, u.t0 = void 0, u.dt = void 0, u.duration = void 0, u.clientX0 = void 0, u.clientY0 = void 0, u.velocity = void 0, u.speed = void 0, u.swipe = void 0, u.axes = void 0, u.preEnd = void 0, s = s || r.element;
          var g = r.interactable, y = (g && g.options || Ln).deltaSource, E = Je(g, s, o), x = a === "start", T = a === "end", P = x ? le(u) : r.prevEvent, _ = x ? r.coords.start : T ? { page: P.page, client: P.client, timeStamp: r.coords.cur.timeStamp } : r.coords.cur;
          return u.page = M({}, _.page), u.client = M({}, _.client), u.rect = M({}, r.rect), u.timeStamp = _.timeStamp, T || (u.page.x -= E.x, u.page.y -= E.y, u.client.x -= E.x, u.client.y -= E.y), u.ctrlKey = i.ctrlKey, u.altKey = i.altKey, u.shiftKey = i.shiftKey, u.metaKey = i.metaKey, u.button = i.button, u.buttons = i.buttons, u.target = s, u.currentTarget = s, u.preEnd = l, u.type = p || o + (a || ""), u.interactable = g, u.t0 = x ? r.pointers[r.pointers.length - 1].downTime : P.t0, u.x0 = r.coords.start.page.x - E.x, u.y0 = r.coords.start.page.y - E.y, u.clientX0 = r.coords.start.client.x - E.x, u.clientY0 = r.coords.start.client.y - E.y, u.delta = x || T ? { x: 0, y: 0 } : { x: u[y].x - P[y].x, y: u[y].y - P[y].y }, u.dt = r.coords.delta.timeStamp, u.duration = u.timeStamp - u.t0, u.velocity = M({}, r.coords.velocity[y]), u.speed = We(u.velocity.x, u.velocity.y), u.swipe = T || a === "inertiastart" ? u.getSwipe() : null, u;
        }
        return S(n, [{ key: "getSwipe", value: function() {
          var r = this._interaction;
          if (r.prevEvent.speed < 600 || this.timeStamp - r.prevEvent.timeStamp > 150) return null;
          var i = 180 * Math.atan2(r.prevEvent.velocityY, r.prevEvent.velocityX) / Math.PI;
          i < 0 && (i += 360);
          var o = 112.5 <= i && i < 247.5, a = 202.5 <= i && i < 337.5;
          return { up: a, down: !a && 22.5 <= i && i < 157.5, left: o, right: !o && (292.5 <= i || i < 67.5), angle: i, speed: r.prevEvent.speed, velocity: { x: r.prevEvent.velocityX, y: r.prevEvent.velocityY } };
        } }, { key: "preventDefault", value: function() {
        } }, { key: "stopImmediatePropagation", value: function() {
          this.immediatePropagationStopped = this.propagationStopped = !0;
        } }, { key: "stopPropagation", value: function() {
          this.propagationStopped = !0;
        } }]), n;
      }(qe);
      Object.defineProperties(an.prototype, { pageX: { get: function() {
        return this.page.x;
      }, set: function(t) {
        this.page.x = t;
      } }, pageY: { get: function() {
        return this.page.y;
      }, set: function(t) {
        this.page.y = t;
      } }, clientX: { get: function() {
        return this.client.x;
      }, set: function(t) {
        this.client.x = t;
      } }, clientY: { get: function() {
        return this.client.y;
      }, set: function(t) {
        this.client.y = t;
      } }, dx: { get: function() {
        return this.delta.x;
      }, set: function(t) {
        this.delta.x = t;
      } }, dy: { get: function() {
        return this.delta.y;
      }, set: function(t) {
        this.delta.y = t;
      } }, velocityX: { get: function() {
        return this.velocity.x;
      }, set: function(t) {
        this.velocity.x = t;
      } }, velocityY: { get: function() {
        return this.velocity.y;
      }, set: function(t) {
        this.velocity.y = t;
      } } });
      var xi = S(function t(e, n, r, i, o) {
        m(this, t), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = e, this.pointer = n, this.event = r, this.downTime = i, this.downTarget = o;
      }), Ei = function(t) {
        return t.interactable = "", t.element = "", t.prepared = "", t.pointerIsDown = "", t.pointerWasMoved = "", t._proxy = "", t;
      }({}), Wn = function(t) {
        return t.start = "", t.move = "", t.end = "", t.stop = "", t.interacting = "", t;
      }({}), ki = 0, Si = function() {
        function t(e) {
          var n = this, r = e.pointerType, i = e.scopeFire;
          m(this, t), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = !1, this.pointerWasMoved = !1, this._interacting = !1, this._ending = !1, this._stopped = !0, this._proxy = void 0, this.simulation = null, this.doMove = mt(function(u) {
            this.move(u);
          }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = ki++, this._scopeFire = i, this.pointerType = r;
          var o = this;
          this._proxy = {};
          var a = function(u) {
            Object.defineProperty(n._proxy, u, { get: function() {
              return o[u];
            } });
          };
          for (var s in Ei) a(s);
          var l = function(u) {
            Object.defineProperty(n._proxy, u, { value: function() {
              return o[u].apply(o, arguments);
            } });
          };
          for (var p in Wn) l(p);
          this._scopeFire("interactions:new", { interaction: this });
        }
        return S(t, [{ key: "pointerMoveTolerance", get: function() {
          return 1;
        } }, { key: "pointerDown", value: function(e, n, r) {
          var i = this.updatePointer(e, n, r, !0), o = this.pointers[i];
          this._scopeFire("interactions:down", { pointer: e, event: n, eventTarget: r, pointerIndex: i, pointerInfo: o, type: "down", interaction: this });
        } }, { key: "start", value: function(e, n, r) {
          return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (e.name === "gesture" ? 2 : 1) || !n.options[e.name].enabled) && (en(this.prepared, e), this.interactable = n, this.element = r, this.rect = n.getRect(r), this.edges = this.prepared.edges ? M({}, this.prepared.edges) : { left: !0, right: !0, top: !0, bottom: !0 }, this._stopped = !1, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
        } }, { key: "pointerMove", value: function(e, n, r) {
          this.simulation || this.modification && this.modification.endResult || this.updatePointer(e, n, r, !1);
          var i, o, a = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
          this.pointerIsDown && !this.pointerWasMoved && (i = this.coords.cur.client.x - this.coords.start.client.x, o = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = We(i, o) > this.pointerMoveTolerance);
          var s, l, p, u = this.getPointerIndex(e), g = { pointer: e, pointerIndex: u, pointerInfo: this.pointers[u], event: n, type: "move", eventTarget: r, dx: i, dy: o, duplicate: a, interaction: this };
          a || (s = this.coords.velocity, l = this.coords.delta, p = Math.max(l.timeStamp / 1e3, 1e-3), s.page.x = l.page.x / p, s.page.y = l.page.y / p, s.client.x = l.client.x / p, s.client.y = l.client.y / p, s.timeStamp = p), this._scopeFire("interactions:move", g), a || this.simulation || (this.interacting() && (g.type = null, this.move(g)), this.pointerWasMoved && st(this.coords.prev, this.coords.cur));
        } }, { key: "move", value: function(e) {
          e && e.event || Ce(this.coords.delta), (e = M({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, e || {})).phase = "move", this._doPhase(e);
        } }, { key: "pointerUp", value: function(e, n, r, i) {
          var o = this.getPointerIndex(e);
          o === -1 && (o = this.updatePointer(e, n, r, !1));
          var a = /cancel$/i.test(n.type) ? "cancel" : "up";
          this._scopeFire("interactions:".concat(a), { pointer: e, pointerIndex: o, pointerInfo: this.pointers[o], event: n, eventTarget: r, type: a, curEventTarget: i, interaction: this }), this.simulation || this.end(n), this.removePointer(e, n);
        } }, { key: "documentBlur", value: function(e) {
          this.end(e), this._scopeFire("interactions:blur", { event: e, type: "blur", interaction: this });
        } }, { key: "end", value: function(e) {
          var n;
          this._ending = !0, e = e || this._latestPointer.event, this.interacting() && (n = this._doPhase({ event: e, interaction: this, phase: "end" })), this._ending = !1, n === !0 && this.stop();
        } }, { key: "currentAction", value: function() {
          return this._interacting ? this.prepared.name : null;
        } }, { key: "interacting", value: function() {
          return this._interacting;
        } }, { key: "stop", value: function() {
          this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
        } }, { key: "getPointerIndex", value: function(e) {
          var n = q(e);
          return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Ae(this.pointers, function(r) {
            return r.id === n;
          });
        } }, { key: "getPointerInfo", value: function(e) {
          return this.pointers[this.getPointerIndex(e)];
        } }, { key: "updatePointer", value: function(e, n, r, i) {
          var o, a, s, l = q(e), p = this.getPointerIndex(e), u = this.pointers[p];
          return i = i !== !1 && (i || /(down|start)$/i.test(n.type)), u ? u.pointer = e : (u = new xi(l, e, n, null, null), p = this.pointers.length, this.pointers.push(u)), oe(this.coords.cur, this.pointers.map(function(g) {
            return g.pointer;
          }), this._now()), o = this.coords.delta, a = this.coords.prev, s = this.coords.cur, o.page.x = s.page.x - a.page.x, o.page.y = s.page.y - a.page.y, o.client.x = s.client.x - a.client.x, o.client.y = s.client.y - a.client.y, o.timeStamp = s.timeStamp - a.timeStamp, i && (this.pointerIsDown = !0, u.downTime = this.coords.cur.timeStamp, u.downTarget = r, Qe(this.downPointer, e), this.interacting() || (st(this.coords.start, this.coords.cur), st(this.coords.prev, this.coords.cur), this.downEvent = n, this.pointerWasMoved = !1)), this._updateLatestPointer(e, n, r), this._scopeFire("interactions:update-pointer", { pointer: e, event: n, eventTarget: r, down: i, pointerInfo: u, pointerIndex: p, interaction: this }), p;
        } }, { key: "removePointer", value: function(e, n) {
          var r = this.getPointerIndex(e);
          if (r !== -1) {
            var i = this.pointers[r];
            this._scopeFire("interactions:remove-pointer", { pointer: e, event: n, eventTarget: null, pointerIndex: r, pointerInfo: i, interaction: this }), this.pointers.splice(r, 1), this.pointerIsDown = !1;
          }
        } }, { key: "_updateLatestPointer", value: function(e, n, r) {
          this._latestPointer.pointer = e, this._latestPointer.event = n, this._latestPointer.eventTarget = r;
        } }, { key: "destroy", value: function() {
          this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
        } }, { key: "_createPreparedEvent", value: function(e, n, r, i) {
          return new an(this, e, this.prepared.name, n, this.element, r, i);
        } }, { key: "_fireEvent", value: function(e) {
          var n;
          (n = this.interactable) == null || n.fire(e), (!this.prevEvent || e.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = e);
        } }, { key: "_doPhase", value: function(e) {
          var n = e.event, r = e.phase, i = e.preEnd, o = e.type, a = this.rect;
          if (a && r === "move" && (Ke(this.edges, a, this.coords.delta[this.interactable.options.deltaSource]), a.width = a.right - a.left, a.height = a.bottom - a.top), this._scopeFire("interactions:before-action-".concat(r), e) === !1) return !1;
          var s = e.iEvent = this._createPreparedEvent(n, r, i, o);
          return this._scopeFire("interactions:action-".concat(r), e), r === "start" && (this.prevEvent = s), this._fireEvent(s), this._scopeFire("interactions:after-action-".concat(r), e), !0;
        } }, { key: "_now", value: function() {
          return Date.now();
        } }]), t;
      }();
      function Hn(t) {
        Nn(t.interaction);
      }
      function Nn(t) {
        if (!function(n) {
          return !(!n.offset.pending.x && !n.offset.pending.y);
        }(t)) return !1;
        var e = t.offset.pending;
        return sn(t.coords.cur, e), sn(t.coords.delta, e), Ke(t.edges, t.rect, e), e.x = 0, e.y = 0, !0;
      }
      function Ti(t) {
        var e = t.x, n = t.y;
        this.offset.pending.x += e, this.offset.pending.y += n, this.offset.total.x += e, this.offset.total.y += n;
      }
      function sn(t, e) {
        var n = t.page, r = t.client, i = e.x, o = e.y;
        n.x += i, n.y += o, r.x += i, r.y += o;
      }
      Wn.offsetBy = "";
      var zi = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(t) {
        t.Interaction.prototype.offsetBy = Ti;
      }, listeners: { "interactions:new": function(t) {
        t.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
      }, "interactions:update-pointer": function(t) {
        return function(e) {
          e.pointerIsDown && (sn(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y = 0);
        }(t.interaction);
      }, "interactions:before-action-start": Hn, "interactions:before-action-move": Hn, "interactions:before-action-end": function(t) {
        var e = t.interaction;
        if (Nn(e)) return e.move({ offset: !0 }), e.end(), !1;
      }, "interactions:stop": function(t) {
        var e = t.interaction;
        e.offset.total.x = 0, e.offset.total.y = 0, e.offset.pending.x = 0, e.offset.pending.y = 0;
      } } }, qn = zi, _i = function() {
        function t(e) {
          m(this, t), this.active = !1, this.isModified = !1, this.smoothEnd = !1, this.allowResume = !1, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = e;
        }
        return S(t, [{ key: "start", value: function(e) {
          var n = this.interaction, r = Bt(n);
          if (!r || !r.enabled) return !1;
          var i = n.coords.velocity.client, o = We(i.x, i.y), a = this.modification || (this.modification = new on(n));
          if (a.copyFrom(n.modification), this.t0 = n._now(), this.allowResume = r.allowResume, this.v0 = o, this.currentOffset = { x: 0, y: 0 }, this.startCoords = n.coords.cur.page, this.modifierArg = a.fillArg({ pageCoords: this.startCoords, preEnd: !0, phase: "inertiastart" }), this.t0 - n.coords.cur.timeStamp < 50 && o > r.minSpeed && o > r.endSpeed) this.startInertia();
          else {
            if (a.result = a.setAll(this.modifierArg), !a.result.changed) return !1;
            this.startSmoothEnd();
          }
          return n.modification.result.rect = null, n.offsetBy(this.targetOffset), n._doPhase({ interaction: n, event: e, phase: "inertiastart" }), n.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), n.modification.result.rect = null, this.active = !0, n.simulation = this, !0;
        } }, { key: "startInertia", value: function() {
          var e = this, n = this.interaction.coords.velocity.client, r = Bt(this.interaction), i = r.resistance, o = -Math.log(r.endSpeed / this.v0) / i;
          this.targetOffset = { x: (n.x - o) / i, y: (n.y - o) / i }, this.te = o, this.lambda_v0 = i / this.v0, this.one_ve_v0 = 1 - r.endSpeed / this.v0;
          var a = this.modification, s = this.modifierArg;
          s.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, a.result = a.setAll(s), a.result.changed && (this.isModified = !0, this.modifiedOffset = { x: this.targetOffset.x + a.result.delta.x, y: this.targetOffset.y + a.result.delta.y }), this.onNextFrame(function() {
            return e.inertiaTick();
          });
        } }, { key: "startSmoothEnd", value: function() {
          var e = this;
          this.smoothEnd = !0, this.isModified = !0, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
            return e.smoothEndTick();
          });
        } }, { key: "onNextFrame", value: function(e) {
          var n = this;
          this.timeout = Xe.request(function() {
            n.active && e();
          });
        } }, { key: "inertiaTick", value: function() {
          var e, n, r, i, o, a, s, l = this, p = this.interaction, u = Bt(p).resistance, g = (p._now() - this.t0) / 1e3;
          if (g < this.te) {
            var y, E = 1 - (Math.exp(-u * g) - this.lambda_v0) / this.one_ve_v0;
            this.isModified ? (e = 0, n = 0, r = this.targetOffset.x, i = this.targetOffset.y, o = this.modifiedOffset.x, a = this.modifiedOffset.y, y = { x: Xn(s = E, e, r, o), y: Xn(s, n, i, a) }) : y = { x: this.targetOffset.x * E, y: this.targetOffset.y * E };
            var x = { x: y.x - this.currentOffset.x, y: y.y - this.currentOffset.y };
            this.currentOffset.x += x.x, this.currentOffset.y += x.y, p.offsetBy(x), p.move(), this.onNextFrame(function() {
              return l.inertiaTick();
            });
          } else p.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "smoothEndTick", value: function() {
          var e = this, n = this.interaction, r = n._now() - this.t0, i = Bt(n).smoothEndDuration;
          if (r < i) {
            var o = { x: Yn(r, 0, this.targetOffset.x, i), y: Yn(r, 0, this.targetOffset.y, i) }, a = { x: o.x - this.currentOffset.x, y: o.y - this.currentOffset.y };
            this.currentOffset.x += a.x, this.currentOffset.y += a.y, n.offsetBy(a), n.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
              return e.smoothEndTick();
            });
          } else n.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
        } }, { key: "resume", value: function(e) {
          var n = e.pointer, r = e.event, i = e.eventTarget, o = this.interaction;
          o.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), o.updatePointer(n, r, i, !0), o._doPhase({ interaction: o, event: r, phase: "resume" }), st(o.coords.prev, o.coords.cur), this.stop();
        } }, { key: "end", value: function() {
          this.interaction.move(), this.interaction.end(), this.stop();
        } }, { key: "stop", value: function() {
          this.active = this.smoothEnd = !1, this.interaction.simulation = null, Xe.cancel(this.timeout);
        } }]), t;
      }();
      function Bt(t) {
        var e = t.interactable, n = t.prepared;
        return e && e.options && n.name && e.options[n.name].inertia;
      }
      var Oi = { id: "inertia", before: ["modifiers", "actions"], install: function(t) {
        var e = t.defaults;
        t.usePlugin(qn), t.usePlugin(jn), t.actions.phases.inertiastart = !0, t.actions.phases.resume = !0, e.perAction.inertia = { enabled: !1, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: !0, smoothEndDuration: 300 };
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.inertia = new _i(e);
      }, "interactions:before-action-end": function(t) {
        var e = t.interaction, n = t.event;
        return (!e._interacting || e.simulation || !e.inertia.start(n)) && null;
      }, "interactions:down": function(t) {
        var e = t.interaction, n = t.eventTarget, r = e.inertia;
        if (r.active) for (var i = n; b.element(i); ) {
          if (i === e.element) {
            r.resume(t);
            break;
          }
          i = ue(i);
        }
      }, "interactions:stop": function(t) {
        var e = t.interaction.inertia;
        e.active && e.stop();
      }, "interactions:before-action-resume": function(t) {
        var e = t.interaction.modification;
        e.stop(t), e.start(t, t.interaction.coords.cur.page), e.applyToInteraction(t);
      }, "interactions:before-action-inertiastart": function(t) {
        return t.interaction.modification.setAndApply(t);
      }, "interactions:action-resume": yt, "interactions:action-inertiastart": yt, "interactions:after-action-inertiastart": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      }, "interactions:after-action-resume": function(t) {
        return t.interaction.modification.restoreInteractionCoords(t);
      } } };
      function Xn(t, e, n, r) {
        var i = 1 - t;
        return i * i * e + 2 * i * t * n + t * t * r;
      }
      function Yn(t, e, n, r) {
        return -n * (t /= r) * (t - 2) + e;
      }
      var Pi = Oi;
      function $n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          if (t.immediatePropagationStopped) break;
          r(t);
        }
      }
      var Vn = function() {
        function t(e) {
          m(this, t), this.options = void 0, this.types = {}, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.global = void 0, this.options = M({}, e || {});
        }
        return S(t, [{ key: "fire", value: function(e) {
          var n, r = this.global;
          (n = this.types[e.type]) && $n(e, n), !e.propagationStopped && r && (n = r[e.type]) && $n(e, n);
        } }, { key: "on", value: function(e, n) {
          var r = Ie(e, n);
          for (e in r) this.types[e] = ct(this.types[e] || [], r[e]);
        } }, { key: "off", value: function(e, n) {
          var r = Ie(e, n);
          for (e in r) {
            var i = this.types[e];
            if (i && i.length) for (var o = 0, a = r[e]; o < a.length; o++) {
              var s = a[o], l = i.indexOf(s);
              l !== -1 && i.splice(l, 1);
            }
          }
        } }, { key: "getRect", value: function(e) {
          return null;
        } }]), t;
      }(), Mi = function() {
        function t(e) {
          m(this, t), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = e, Qe(this, e);
        }
        return S(t, [{ key: "preventOriginalDefault", value: function() {
          this.originalEvent.preventDefault();
        } }, { key: "stopPropagation", value: function() {
          this.originalEvent.stopPropagation();
        } }, { key: "stopImmediatePropagation", value: function() {
          this.originalEvent.stopImmediatePropagation();
        } }]), t;
      }();
      function bt(t) {
        return b.object(t) ? { capture: !!t.capture, passive: !!t.passive } : { capture: !!t, passive: !1 };
      }
      function Ft(t, e) {
        return t === e || (typeof t == "boolean" ? !!e.capture === t && !e.passive : !!t.capture == !!e.capture && !!t.passive == !!e.passive);
      }
      var Di = { id: "events", install: function(t) {
        var e, n = [], r = {}, i = [], o = { add: a, remove: s, addDelegate: function(u, g, y, E, x) {
          var T = bt(x);
          if (!r[y]) {
            r[y] = [];
            for (var P = 0; P < i.length; P++) {
              var _ = i[P];
              a(_, y, l), a(_, y, p, !0);
            }
          }
          var D = r[y], B = vt(D, function(N) {
            return N.selector === u && N.context === g;
          });
          B || (B = { selector: u, context: g, listeners: [] }, D.push(B)), B.listeners.push({ func: E, options: T });
        }, removeDelegate: function(u, g, y, E, x) {
          var T, P = bt(x), _ = r[y], D = !1;
          if (_)
            for (T = _.length - 1; T >= 0; T--) {
              var B = _[T];
              if (B.selector === u && B.context === g) {
                for (var N = B.listeners, I = N.length - 1; I >= 0; I--) {
                  var j = N[I];
                  if (j.func === E && Ft(j.options, P)) {
                    N.splice(I, 1), N.length || (_.splice(T, 1), s(g, y, l), s(g, y, p, !0)), D = !0;
                    break;
                  }
                }
                if (D) break;
              }
            }
        }, delegateListener: l, delegateUseCapture: p, delegatedEvents: r, documents: i, targets: n, supportsOptions: !1, supportsPassive: !1 };
        function a(u, g, y, E) {
          if (u.addEventListener) {
            var x = bt(E), T = vt(n, function(P) {
              return P.eventTarget === u;
            });
            T || (T = { eventTarget: u, events: {} }, n.push(T)), T.events[g] || (T.events[g] = []), vt(T.events[g], function(P) {
              return P.func === y && Ft(P.options, x);
            }) || (u.addEventListener(g, y, o.supportsOptions ? x : x.capture), T.events[g].push({ func: y, options: x }));
          }
        }
        function s(u, g, y, E) {
          if (u.addEventListener && u.removeEventListener) {
            var x = Ae(n, function(pe) {
              return pe.eventTarget === u;
            }), T = n[x];
            if (T && T.events) if (g !== "all") {
              var P = !1, _ = T.events[g];
              if (_) {
                if (y === "all") {
                  for (var D = _.length - 1; D >= 0; D--) {
                    var B = _[D];
                    s(u, g, B.func, B.options);
                  }
                  return;
                }
                for (var N = bt(E), I = 0; I < _.length; I++) {
                  var j = _[I];
                  if (j.func === y && Ft(j.options, N)) {
                    u.removeEventListener(g, y, o.supportsOptions ? N : N.capture), _.splice(I, 1), _.length === 0 && (delete T.events[g], P = !0);
                    break;
                  }
                }
              }
              P && !Object.keys(T.events).length && n.splice(x, 1);
            } else for (g in T.events) T.events.hasOwnProperty(g) && s(u, g, "all");
          }
        }
        function l(u, g) {
          for (var y = bt(g), E = new Mi(u), x = r[u.type], T = Ne(u)[0], P = T; b.element(P); ) {
            for (var _ = 0; _ < x.length; _++) {
              var D = x[_], B = D.selector, N = D.context;
              if (ae(P, B) && F(N, T) && F(N, P)) {
                var I = D.listeners;
                E.currentTarget = P;
                for (var j = 0; j < I.length; j++) {
                  var pe = I[j];
                  Ft(pe.options, y) && pe.func(E);
                }
              }
            }
            P = ue(P);
          }
        }
        function p(u) {
          return l(u, !0);
        }
        return (e = t.document) == null || e.createElement("div").addEventListener("test", null, { get capture() {
          return o.supportsOptions = !0;
        }, get passive() {
          return o.supportsPassive = !0;
        } }), t.events = o, o;
      } }, cn = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(t) {
        for (var e = 0, n = cn.methodOrder; e < n.length; e++) {
          var r = n[e], i = cn[r](t);
          if (i) return i;
        }
        return null;
      }, simulationResume: function(t) {
        var e = t.pointerType, n = t.eventType, r = t.eventTarget, i = t.scope;
        if (!/down|start/i.test(n)) return null;
        for (var o = 0, a = i.interactions.list; o < a.length; o++) {
          var s = a[o], l = r;
          if (s.simulation && s.simulation.allowResume && s.pointerType === e) for (; l; ) {
            if (l === s.element) return s;
            l = ue(l);
          }
        }
        return null;
      }, mouseOrPen: function(t) {
        var e, n = t.pointerId, r = t.pointerType, i = t.eventType, o = t.scope;
        if (r !== "mouse" && r !== "pen") return null;
        for (var a = 0, s = o.interactions.list; a < s.length; a++) {
          var l = s[a];
          if (l.pointerType === r) {
            if (l.simulation && !Gn(l, n)) continue;
            if (l.interacting()) return l;
            e || (e = l);
          }
        }
        if (e) return e;
        for (var p = 0, u = o.interactions.list; p < u.length; p++) {
          var g = u[p];
          if (!(g.pointerType !== r || /down/i.test(i) && g.simulation)) return g;
        }
        return null;
      }, hasPointer: function(t) {
        for (var e = t.pointerId, n = 0, r = t.scope.interactions.list; n < r.length; n++) {
          var i = r[n];
          if (Gn(i, e)) return i;
        }
        return null;
      }, idle: function(t) {
        for (var e = t.pointerType, n = 0, r = t.scope.interactions.list; n < r.length; n++) {
          var i = r[n];
          if (i.pointers.length === 1) {
            var o = i.interactable;
            if (o && (!o.options.gesture || !o.options.gesture.enabled)) continue;
          } else if (i.pointers.length >= 2) continue;
          if (!i.interacting() && e === i.pointerType) return i;
        }
        return null;
      } };
      function Gn(t, e) {
        return t.pointers.some(function(n) {
          return n.id === e;
        });
      }
      var Ri = cn, ln = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
      function Un(t, e) {
        return function(n) {
          var r = e.interactions.list, i = He(n), o = Ne(n), a = o[0], s = o[1], l = [];
          if (/^touch/.test(n.type)) {
            e.prevTouchTime = e.now();
            for (var p = 0, u = n.changedTouches; p < u.length; p++) {
              var g = u[p], y = { pointer: g, pointerId: q(g), pointerType: i, eventType: n.type, eventTarget: a, curEventTarget: s, scope: e }, E = Kn(y);
              l.push([y.pointer, y.eventTarget, y.curEventTarget, E]);
            }
          } else {
            var x = !1;
            if (!G.supportsPointerEvent && /mouse/.test(n.type)) {
              for (var T = 0; T < r.length && !x; T++) x = r[T].pointerType !== "mouse" && r[T].pointerIsDown;
              x = x || e.now() - e.prevTouchTime < 500 || n.timeStamp === 0;
            }
            if (!x) {
              var P = { pointer: n, pointerId: q(n), pointerType: i, eventType: n.type, curEventTarget: s, eventTarget: a, scope: e }, _ = Kn(P);
              l.push([P.pointer, P.eventTarget, P.curEventTarget, _]);
            }
          }
          for (var D = 0; D < l.length; D++) {
            var B = l[D], N = B[0], I = B[1], j = B[2];
            B[3][t](N, n, I, j);
          }
        };
      }
      function Kn(t) {
        var e = t.pointerType, n = t.scope, r = { interaction: Ri.search(t), searchDetails: t };
        return n.fire("interactions:find", r), r.interaction || n.interactions.new({ pointerType: e });
      }
      function un(t, e) {
        var n = t.doc, r = t.scope, i = t.options, o = r.interactions.docEvents, a = r.events, s = a[e];
        for (var l in r.browser.isIOS && !i.events && (i.events = { passive: !1 }), a.delegatedEvents) s(n, l, a.delegateListener), s(n, l, a.delegateUseCapture, !0);
        for (var p = i && i.events, u = 0; u < o.length; u++) {
          var g = o[u];
          s(n, g.type, g.listener, p);
        }
      }
      var Ii = { id: "core/interactions", install: function(t) {
        for (var e = {}, n = 0; n < ln.length; n++) {
          var r = ln[n];
          e[r] = Un(r, t);
        }
        var i, o = G.pEventTypes;
        function a() {
          for (var s = 0, l = t.interactions.list; s < l.length; s++) {
            var p = l[s];
            if (p.pointerIsDown && p.pointerType === "touch" && !p._interacting) for (var u = function() {
              var E = y[g];
              t.documents.some(function(x) {
                return F(x.doc, E.downTarget);
              }) || p.removePointer(E.pointer, E.event);
            }, g = 0, y = p.pointers; g < y.length; g++) u();
          }
        }
        (i = Y.PointerEvent ? [{ type: o.down, listener: a }, { type: o.down, listener: e.pointerDown }, { type: o.move, listener: e.pointerMove }, { type: o.up, listener: e.pointerUp }, { type: o.cancel, listener: e.pointerUp }] : [{ type: "mousedown", listener: e.pointerDown }, { type: "mousemove", listener: e.pointerMove }, { type: "mouseup", listener: e.pointerUp }, { type: "touchstart", listener: a }, { type: "touchstart", listener: e.pointerDown }, { type: "touchmove", listener: e.pointerMove }, { type: "touchend", listener: e.pointerUp }, { type: "touchcancel", listener: e.pointerUp }]).push({ type: "blur", listener: function(s) {
          for (var l = 0, p = t.interactions.list; l < p.length; l++)
            p[l].documentBlur(s);
        } }), t.prevTouchTime = 0, t.Interaction = function(s) {
          U(p, s);
          var l = re(p);
          function p() {
            return m(this, p), l.apply(this, arguments);
          }
          return S(p, [{ key: "pointerMoveTolerance", get: function() {
            return t.interactions.pointerMoveTolerance;
          }, set: function(u) {
            t.interactions.pointerMoveTolerance = u;
          } }, { key: "_now", value: function() {
            return t.now();
          } }]), p;
        }(Si), t.interactions = { list: [], new: function(s) {
          s.scopeFire = function(p, u) {
            return t.fire(p, u);
          };
          var l = new t.Interaction(s);
          return t.interactions.list.push(l), l;
        }, listeners: e, docEvents: i, pointerMoveTolerance: 1 }, t.usePlugin(Fn);
      }, listeners: { "scope:add-document": function(t) {
        return un(t, "add");
      }, "scope:remove-document": function(t) {
        return un(t, "remove");
      }, "interactable:unset": function(t, e) {
        for (var n = t.interactable, r = e.interactions.list.length - 1; r >= 0; r--) {
          var i = e.interactions.list[r];
          i.interactable === n && (i.stop(), e.fire("interactions:destroy", { interaction: i }), i.destroy(), e.interactions.list.length > 2 && e.interactions.list.splice(r, 1));
        }
      } }, onDocSignal: un, doOnInteractions: Un, methodNames: ln }, Ci = Ii, $e = function(t) {
        return t[t.On = 0] = "On", t[t.Off = 1] = "Off", t;
      }($e || {}), Ai = function() {
        function t(e, n, r, i) {
          m(this, t), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new Vn(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = n.actions, this.target = e, this._context = n.context || r, this._win = K(ht(e) ? this._context : e), this._doc = this._win.document, this._scopeEvents = i, this.set(n);
        }
        return S(t, [{ key: "_defaults", get: function() {
          return { base: {}, perAction: {}, actions: {} };
        } }, { key: "setOnEvents", value: function(e, n) {
          return b.func(n.onstart) && this.on("".concat(e, "start"), n.onstart), b.func(n.onmove) && this.on("".concat(e, "move"), n.onmove), b.func(n.onend) && this.on("".concat(e, "end"), n.onend), b.func(n.oninertiastart) && this.on("".concat(e, "inertiastart"), n.oninertiastart), this;
        } }, { key: "updatePerActionListeners", value: function(e, n, r) {
          var i, o = this, a = (i = this._actions.map[e]) == null ? void 0 : i.filterEventType, s = function(l) {
            return (a == null || a(l)) && Ct(l, o._actions);
          };
          (b.array(n) || b.object(n)) && this._onOff($e.Off, e, n, void 0, s), (b.array(r) || b.object(r)) && this._onOff($e.On, e, r, void 0, s);
        } }, { key: "setPerAction", value: function(e, n) {
          var r = this._defaults;
          for (var i in n) {
            var o = i, a = this.options[e], s = n[o];
            o === "listeners" && this.updatePerActionListeners(e, a.listeners, s), b.array(s) ? a[o] = lt(s) : b.plainObject(s) ? (a[o] = M(a[o] || {}, ft(s)), b.object(r.perAction[o]) && "enabled" in r.perAction[o] && (a[o].enabled = s.enabled !== !1)) : b.bool(s) && b.object(r.perAction[o]) ? a[o].enabled = s : a[o] = s;
          }
        } }, { key: "getRect", value: function(e) {
          return e = e || (b.element(this.target) ? this.target : null), b.string(this.target) && (e = e || this._context.querySelector(this.target)), _e(e);
        } }, { key: "rectChecker", value: function(e) {
          var n = this;
          return b.func(e) ? (this.getRect = function(r) {
            var i = M({}, e.apply(n, r));
            return "width" in i || (i.width = i.right - i.left, i.height = i.bottom - i.top), i;
          }, this) : e === null ? (delete this.getRect, this) : this.getRect;
        } }, { key: "_backCompatOption", value: function(e, n) {
          if (ht(n) || b.object(n)) {
            for (var r in this.options[e] = n, this._actions.map) this.options[r][e] = n;
            return this;
          }
          return this.options[e];
        } }, { key: "origin", value: function(e) {
          return this._backCompatOption("origin", e);
        } }, { key: "deltaSource", value: function(e) {
          return e === "page" || e === "client" ? (this.options.deltaSource = e, this) : this.options.deltaSource;
        } }, { key: "getAllElements", value: function() {
          var e = this.target;
          return b.string(e) ? Array.from(this._context.querySelectorAll(e)) : b.func(e) && e.getAllElements ? e.getAllElements() : b.element(e) ? [e] : [];
        } }, { key: "context", value: function() {
          return this._context;
        } }, { key: "inContext", value: function(e) {
          return this._context === e.ownerDocument || F(this._context, e);
        } }, { key: "testIgnoreAllow", value: function(e, n, r) {
          return !this.testIgnore(e.ignoreFrom, n, r) && this.testAllow(e.allowFrom, n, r);
        } }, { key: "testAllow", value: function(e, n, r) {
          return !e || !!b.element(r) && (b.string(e) ? ge(r, e, n) : !!b.element(e) && F(e, r));
        } }, { key: "testIgnore", value: function(e, n, r) {
          return !(!e || !b.element(r)) && (b.string(e) ? ge(r, e, n) : !!b.element(e) && F(e, r));
        } }, { key: "fire", value: function(e) {
          return this.events.fire(e), this;
        } }, { key: "_onOff", value: function(e, n, r, i, o) {
          b.object(n) && !b.array(n) && (i = r, r = null);
          var a = Ie(n, r, o);
          for (var s in a) {
            s === "wheel" && (s = G.wheelEvent);
            for (var l = 0, p = a[s]; l < p.length; l++) {
              var u = p[l];
              Ct(s, this._actions) ? this.events[e === $e.On ? "on" : "off"](s, u) : b.string(this.target) ? this._scopeEvents[e === $e.On ? "addDelegate" : "removeDelegate"](this.target, this._context, s, u, i) : this._scopeEvents[e === $e.On ? "add" : "remove"](this.target, s, u, i);
            }
          }
          return this;
        } }, { key: "on", value: function(e, n, r) {
          return this._onOff($e.On, e, n, r);
        } }, { key: "off", value: function(e, n, r) {
          return this._onOff($e.Off, e, n, r);
        } }, { key: "set", value: function(e) {
          var n = this._defaults;
          for (var r in b.object(e) || (e = {}), this.options = ft(n.base), this._actions.methodDict) {
            var i = r, o = this._actions.methodDict[i];
            this.options[i] = {}, this.setPerAction(i, M(M({}, n.perAction), n.actions[i])), this[o](e[i]);
          }
          for (var a in e) a !== "getRect" ? b.func(this[a]) && this[a](e[a]) : this.rectChecker(e.getRect);
          return this;
        } }, { key: "unset", value: function() {
          if (b.string(this.target)) for (var e in this._scopeEvents.delegatedEvents) for (var n = this._scopeEvents.delegatedEvents[e], r = n.length - 1; r >= 0; r--) {
            var i = n[r], o = i.selector, a = i.context, s = i.listeners;
            o === this.target && a === this._context && n.splice(r, 1);
            for (var l = s.length - 1; l >= 0; l--) this._scopeEvents.removeDelegate(this.target, this._context, e, s[l][0], s[l][1]);
          }
          else this._scopeEvents.remove(this.target, "all");
        } }]), t;
      }(), Bi = function() {
        function t(e) {
          var n = this;
          m(this, t), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = e, e.addListeners({ "interactable:unset": function(r) {
            var i = r.interactable, o = i.target, a = b.string(o) ? n.selectorMap[o] : o[n.scope.id], s = Ae(a, function(l) {
              return l === i;
            });
            a.splice(s, 1);
          } });
        }
        return S(t, [{ key: "new", value: function(e, n) {
          n = M(n || {}, { actions: this.scope.actions });
          var r = new this.scope.Interactable(e, n, this.scope.document, this.scope.events);
          return this.scope.addDocument(r._doc), this.list.push(r), b.string(e) ? (this.selectorMap[e] || (this.selectorMap[e] = []), this.selectorMap[e].push(r)) : (r.target[this.scope.id] || Object.defineProperty(e, this.scope.id, { value: [], configurable: !0 }), e[this.scope.id].push(r)), this.scope.fire("interactable:new", { target: e, options: n, interactable: r, win: this.scope._win }), r;
        } }, { key: "getExisting", value: function(e, n) {
          var r = n && n.context || this.scope.document, i = b.string(e), o = i ? this.selectorMap[e] : e[this.scope.id];
          if (o) return vt(o, function(a) {
            return a._context === r && (i || a.inContext(e));
          });
        } }, { key: "forEachMatch", value: function(e, n) {
          for (var r = 0, i = this.list; r < i.length; r++) {
            var o = i[r], a = void 0;
            if ((b.string(o.target) ? b.element(e) && ae(e, o.target) : e === o.target) && o.inContext(e) && (a = n(o)), a !== void 0) return a;
          }
        } }]), t;
      }(), Fi = function() {
        function t() {
          var e = this;
          m(this, t), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = !1, this.listenerMaps = [], this.browser = G, this.defaults = ft(Ln), this.Eventable = Vn, this.actions = { map: {}, phases: { start: !0, move: !0, end: !0 }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = function(r) {
            var i = function o(a, s) {
              var l = r.interactables.getExisting(a, s);
              return l || ((l = r.interactables.new(a, s)).events.global = o.globalEvents), l;
            };
            return i.getPointerAverage = R, i.getTouchBBox = se, i.getTouchDistance = fe, i.getTouchAngle = ye, i.getElementRect = _e, i.getElementClientRect = Ue, i.matchesSelector = ae, i.closest = ke, i.globalEvents = {}, i.version = "1.10.27", i.scope = r, i.use = function(o, a) {
              return this.scope.usePlugin(o, a), this;
            }, i.isSet = function(o, a) {
              return !!this.scope.interactables.get(o, a && a.context);
            }, i.on = mt(function(o, a, s) {
              if (b.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), b.array(o)) {
                for (var l = 0, p = o; l < p.length; l++) {
                  var u = p[l];
                  this.on(u, a, s);
                }
                return this;
              }
              if (b.object(o)) {
                for (var g in o) this.on(g, o[g], a);
                return this;
              }
              return Ct(o, this.scope.actions) ? this.globalEvents[o] ? this.globalEvents[o].push(a) : this.globalEvents[o] = [a] : this.scope.events.add(this.scope.document, o, a, { options: s }), this;
            }, "The interact.on() method is being deprecated"), i.off = mt(function(o, a, s) {
              if (b.string(o) && o.search(" ") !== -1 && (o = o.trim().split(/ +/)), b.array(o)) {
                for (var l = 0, p = o; l < p.length; l++) {
                  var u = p[l];
                  this.off(u, a, s);
                }
                return this;
              }
              if (b.object(o)) {
                for (var g in o) this.off(g, o[g], a);
                return this;
              }
              var y;
              return Ct(o, this.scope.actions) ? o in this.globalEvents && (y = this.globalEvents[o].indexOf(a)) !== -1 && this.globalEvents[o].splice(y, 1) : this.scope.events.remove(this.scope.document, o, a, s), this;
            }, "The interact.off() method is being deprecated"), i.debug = function() {
              return this.scope;
            }, i.supportsTouch = function() {
              return G.supportsTouch;
            }, i.supportsPointerEvent = function() {
              return G.supportsPointerEvent;
            }, i.stop = function() {
              for (var o = 0, a = this.scope.interactions.list; o < a.length; o++) a[o].stop();
              return this;
            }, i.pointerMoveTolerance = function(o) {
              return b.number(o) ? (this.scope.interactions.pointerMoveTolerance = o, this) : this.scope.interactions.pointerMoveTolerance;
            }, i.addDocument = function(o, a) {
              this.scope.addDocument(o, a);
            }, i.removeDocument = function(o) {
              this.scope.removeDocument(o);
            }, i;
          }(this), this.InteractEvent = an, this.Interactable = void 0, this.interactables = new Bi(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(r) {
            return e.removeDocument(r.target);
          };
          var n = this;
          this.Interactable = function(r) {
            U(o, r);
            var i = re(o);
            function o() {
              return m(this, o), i.apply(this, arguments);
            }
            return S(o, [{ key: "_defaults", get: function() {
              return n.defaults;
            } }, { key: "set", value: function(a) {
              return xe(te(o.prototype), "set", this).call(this, a), n.fire("interactable:set", { options: a, interactable: this }), this;
            } }, { key: "unset", value: function() {
              xe(te(o.prototype), "unset", this).call(this);
              var a = n.interactables.list.indexOf(this);
              a < 0 || (n.interactables.list.splice(a, 1), n.fire("interactable:unset", { interactable: this }));
            } }]), o;
          }(Ai);
        }
        return S(t, [{ key: "addListeners", value: function(e, n) {
          this.listenerMaps.push({ id: n, map: e });
        } }, { key: "fire", value: function(e, n) {
          for (var r = 0, i = this.listenerMaps; r < i.length; r++) {
            var o = i[r].map[e];
            if (o && o(n, this, e) === !1) return !1;
          }
        } }, { key: "init", value: function(e) {
          return this.isInitialized ? this : function(n, r) {
            return n.isInitialized = !0, b.window(r) && ne(r), Y.init(r), G.init(r), Xe.init(r), n.window = r, n.document = r.document, n.usePlugin(Ci), n.usePlugin(Di), n;
          }(this, e);
        } }, { key: "pluginIsInstalled", value: function(e) {
          var n = e.id;
          return n ? !!this._plugins.map[n] : this._plugins.list.indexOf(e) !== -1;
        } }, { key: "usePlugin", value: function(e, n) {
          if (!this.isInitialized) return this;
          if (this.pluginIsInstalled(e)) return this;
          if (e.id && (this._plugins.map[e.id] = e), this._plugins.list.push(e), e.install && e.install(this, n), e.listeners && e.before) {
            for (var r = 0, i = this.listenerMaps.length, o = e.before.reduce(function(s, l) {
              return s[l] = !0, s[Jn(l)] = !0, s;
            }, {}); r < i; r++) {
              var a = this.listenerMaps[r].id;
              if (a && (o[a] || o[Jn(a)])) break;
            }
            this.listenerMaps.splice(r, 0, { id: e.id, map: e.listeners });
          } else e.listeners && this.listenerMaps.push({ id: e.id, map: e.listeners });
          return this;
        } }, { key: "addDocument", value: function(e, n) {
          if (this.getDocIndex(e) !== -1) return !1;
          var r = K(e);
          n = n ? M({}, n) : {}, this.documents.push({ doc: e, options: n }), this.events.documents.push(e), e !== this.document && this.events.add(r, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: e, window: r, scope: this, options: n });
        } }, { key: "removeDocument", value: function(e) {
          var n = this.getDocIndex(e), r = K(e), i = this.documents[n].options;
          this.events.remove(r, "unload", this.onWindowUnload), this.documents.splice(n, 1), this.events.documents.splice(n, 1), this.fire("scope:remove-document", { doc: e, window: r, scope: this, options: i });
        } }, { key: "getDocIndex", value: function(e) {
          for (var n = 0; n < this.documents.length; n++) if (this.documents[n].doc === e) return n;
          return -1;
        } }, { key: "getDocOptions", value: function(e) {
          var n = this.getDocIndex(e);
          return n === -1 ? null : this.documents[n].options;
        } }, { key: "now", value: function() {
          return (this.window.Date || Date).now();
        } }]), t;
      }();
      function Jn(t) {
        return t && t.replace(/\/.*$/, "");
      }
      var Qn = new Fi(), de = Qn.interactStatic, ji = typeof globalThis < "u" ? globalThis : window;
      Qn.init(ji);
      var Li = Object.freeze({ __proto__: null, edgeTarget: function() {
      }, elements: function() {
      }, grid: function(t) {
        var e = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(r) {
          var i = r[0], o = r[1];
          return i in t || o in t;
        }), n = function(r, i) {
          for (var o = t.range, a = t.limits, s = a === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : a, l = t.offset, p = l === void 0 ? { x: 0, y: 0 } : l, u = { range: o, grid: t, x: null, y: null }, g = 0; g < e.length; g++) {
            var y = e[g], E = y[0], x = y[1], T = Math.round((r - p.x) / t[E]), P = Math.round((i - p.y) / t[x]);
            u[E] = Math.max(s.left, Math.min(s.right, T * t[E] + p.x)), u[x] = Math.max(s.top, Math.min(s.bottom, P * t[x] + p.y));
          }
          return u;
        };
        return n.grid = t, n.coordFields = e, n;
      } }), Wi = { id: "snappers", install: function(t) {
        var e = t.interactStatic;
        e.snappers = M(e.snappers || {}, Li), e.createSnapGrid = e.snappers.grid;
      } }, Hi = Wi, Ni = { start: function(t) {
        var e = t.state, n = t.rect, r = t.edges, i = t.pageCoords, o = e.options, a = o.ratio, s = o.enabled, l = e.options, p = l.equalDelta, u = l.modifiers;
        a === "preserve" && (a = n.width / n.height), e.startCoords = M({}, i), e.startRect = M({}, n), e.ratio = a, e.equalDelta = p;
        var g = e.linkedEdges = { top: r.top || r.left && !r.bottom, left: r.left || r.top && !r.right, bottom: r.bottom || r.right && !r.top, right: r.right || r.bottom && !r.left };
        if (e.xIsPrimaryAxis = !(!r.left && !r.right), e.equalDelta) {
          var y = (g.left ? 1 : -1) * (g.top ? 1 : -1);
          e.edgeSign = { x: y, y };
        } else e.edgeSign = { x: g.left ? -1 : 1, y: g.top ? -1 : 1 };
        if (s !== !1 && M(r, g), u != null && u.length) {
          var E = new on(t.interaction);
          E.copyFrom(t.interaction.modification), E.prepareStates(u), e.subModification = E, E.startAll(f({}, t));
        }
      }, set: function(t) {
        var e = t.state, n = t.rect, r = t.coords, i = e.linkedEdges, o = M({}, r), a = e.equalDelta ? qi : Xi;
        if (M(t.edges, i), a(e, e.xIsPrimaryAxis, r, n), !e.subModification) return null;
        var s = M({}, n);
        Ke(i, s, { x: r.x - o.x, y: r.y - o.y });
        var l = e.subModification.setAll(f(f({}, t), {}, { rect: s, edges: i, pageCoords: r, prevCoords: r, prevRect: s })), p = l.delta;
        return l.changed && (a(e, Math.abs(p.x) > Math.abs(p.y), l.coords, l.rect), M(r, l.coords)), l.eventProps;
      }, defaults: { ratio: "preserve", equalDelta: !1, modifiers: [], enabled: !1 } };
      function qi(t, e, n) {
        var r = t.startCoords, i = t.edgeSign;
        e ? n.y = r.y + (n.x - r.x) * i.y : n.x = r.x + (n.y - r.y) * i.x;
      }
      function Xi(t, e, n, r) {
        var i = t.startRect, o = t.startCoords, a = t.ratio, s = t.edgeSign;
        if (e) {
          var l = r.width / a;
          n.y = o.y + (l - i.height) * s.y;
        } else {
          var p = r.height * a;
          n.x = o.x + (p - i.width) * s.x;
        }
      }
      var Yi = Ye(Ni, "aspectRatio"), Zn = function() {
      };
      Zn._defaults = {};
      var jt = Zn;
      function et(t, e, n) {
        return b.func(t) ? De(t, e.interactable, e.element, [n.x, n.y, e]) : De(t, e.interactable, e.element);
      }
      var Lt = { start: function(t) {
        var e = t.rect, n = t.startOffset, r = t.state, i = t.interaction, o = t.pageCoords, a = r.options, s = a.elementRect, l = M({ left: 0, top: 0, right: 0, bottom: 0 }, a.offset || {});
        if (e && s) {
          var p = et(a.restriction, i, o);
          if (p) {
            var u = p.right - p.left - e.width, g = p.bottom - p.top - e.height;
            u < 0 && (l.left += u, l.right += u), g < 0 && (l.top += g, l.bottom += g);
          }
          l.left += n.left - e.width * s.left, l.top += n.top - e.height * s.top, l.right += n.right - e.width * (1 - s.right), l.bottom += n.bottom - e.height * (1 - s.bottom);
        }
        r.offset = l;
      }, set: function(t) {
        var e = t.coords, n = t.interaction, r = t.state, i = r.options, o = r.offset, a = et(i.restriction, n, e);
        if (a) {
          var s = function(l) {
            return !l || "left" in l && "top" in l || ((l = M({}, l)).left = l.x || 0, l.top = l.y || 0, l.right = l.right || l.left + l.width, l.bottom = l.bottom || l.top + l.height), l;
          }(a);
          e.x = Math.max(Math.min(s.right - o.right, e.x), s.left + o.left), e.y = Math.max(Math.min(s.bottom - o.bottom, e.y), s.top + o.top);
        }
      }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: !1, enabled: !1 } }, $i = Ye(Lt, "restrict"), er = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, tr = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
      function nr(t, e) {
        for (var n = 0, r = ["top", "left", "bottom", "right"]; n < r.length; n++) {
          var i = r[n];
          i in t || (t[i] = e[i]);
        }
        return t;
      }
      var wt = { noInner: er, noOuter: tr, start: function(t) {
        var e, n = t.interaction, r = t.startOffset, i = t.state, o = i.options;
        o && (e = Re(et(o.offset, n, n.coords.start.page))), e = e || { x: 0, y: 0 }, i.offset = { top: e.y + r.top, left: e.x + r.left, bottom: e.y - r.bottom, right: e.x - r.right };
      }, set: function(t) {
        var e = t.coords, n = t.edges, r = t.interaction, i = t.state, o = i.offset, a = i.options;
        if (n) {
          var s = M({}, e), l = et(a.inner, r, s) || {}, p = et(a.outer, r, s) || {};
          nr(l, er), nr(p, tr), n.top ? e.y = Math.min(Math.max(p.top + o.top, s.y), l.top + o.top) : n.bottom && (e.y = Math.max(Math.min(p.bottom + o.bottom, s.y), l.bottom + o.bottom)), n.left ? e.x = Math.min(Math.max(p.left + o.left, s.x), l.left + o.left) : n.right && (e.x = Math.max(Math.min(p.right + o.right, s.x), l.right + o.right));
        }
      }, defaults: { inner: null, outer: null, offset: null, endOnly: !1, enabled: !1 } }, Vi = Ye(wt, "restrictEdges"), Gi = M({ get elementRect() {
        return { top: 0, left: 0, bottom: 1, right: 1 };
      }, set elementRect(t) {
      } }, Lt.defaults), Ui = Ye({ start: Lt.start, set: Lt.set, defaults: Gi }, "restrictRect"), Ki = { width: -1 / 0, height: -1 / 0 }, Ji = { width: 1 / 0, height: 1 / 0 }, Qi = Ye({ start: function(t) {
        return wt.start(t);
      }, set: function(t) {
        var e = t.interaction, n = t.state, r = t.rect, i = t.edges, o = n.options;
        if (i) {
          var a = at(et(o.min, e, t.coords)) || Ki, s = at(et(o.max, e, t.coords)) || Ji;
          n.options = { endOnly: o.endOnly, inner: M({}, wt.noInner), outer: M({}, wt.noOuter) }, i.top ? (n.options.inner.top = r.bottom - a.height, n.options.outer.top = r.bottom - s.height) : i.bottom && (n.options.inner.bottom = r.top + a.height, n.options.outer.bottom = r.top + s.height), i.left ? (n.options.inner.left = r.right - a.width, n.options.outer.left = r.right - s.width) : i.right && (n.options.inner.right = r.left + a.width, n.options.outer.right = r.left + s.width), wt.set(t), n.options = o;
        }
      }, defaults: { min: null, max: null, endOnly: !1, enabled: !1 } }, "restrictSize"), fn = { start: function(t) {
        var e, n = t.interaction, r = t.interactable, i = t.element, o = t.rect, a = t.state, s = t.startOffset, l = a.options, p = l.offsetWithOrigin ? function(y) {
          var E = y.interaction.element, x = Re(De(y.state.options.origin, null, null, [E])), T = x || Je(y.interactable, E, y.interaction.prepared.name);
          return T;
        }(t) : { x: 0, y: 0 };
        if (l.offset === "startCoords") e = { x: n.coords.start.page.x, y: n.coords.start.page.y };
        else {
          var u = De(l.offset, r, i, [n]);
          (e = Re(u) || { x: 0, y: 0 }).x += p.x, e.y += p.y;
        }
        var g = l.relativePoints;
        a.offsets = o && g && g.length ? g.map(function(y, E) {
          return { index: E, relativePoint: y, x: s.left - o.width * y.x + e.x, y: s.top - o.height * y.y + e.y };
        }) : [{ index: 0, relativePoint: null, x: e.x, y: e.y }];
      }, set: function(t) {
        var e = t.interaction, n = t.coords, r = t.state, i = r.options, o = r.offsets, a = Je(e.interactable, e.element, e.prepared.name), s = M({}, n), l = [];
        i.offsetWithOrigin || (s.x -= a.x, s.y -= a.y);
        for (var p = 0, u = o; p < u.length; p++) for (var g = u[p], y = s.x - g.x, E = s.y - g.y, x = 0, T = i.targets.length; x < T; x++) {
          var P = i.targets[x], _ = void 0;
          (_ = b.func(P) ? P(y, E, e._proxy, g, x) : P) && l.push({ x: (b.number(_.x) ? _.x : y) + g.x, y: (b.number(_.y) ? _.y : E) + g.y, range: b.number(_.range) ? _.range : i.range, source: P, index: x, offset: g });
        }
        for (var D = { target: null, inRange: !1, distance: 0, range: 0, delta: { x: 0, y: 0 } }, B = 0; B < l.length; B++) {
          var N = l[B], I = N.range, j = N.x - s.x, pe = N.y - s.y, J = We(j, pe), be = J <= I;
          I === 1 / 0 && D.inRange && D.range !== 1 / 0 && (be = !1), D.target && !(be ? D.inRange && I !== 1 / 0 ? J / I < D.distance / D.range : I === 1 / 0 && D.range !== 1 / 0 || J < D.distance : !D.inRange && J < D.distance) || (D.target = N, D.distance = J, D.range = I, D.inRange = be, D.delta.x = j, D.delta.y = pe);
        }
        return D.inRange && (n.x = D.target.x, n.y = D.target.y), r.closest = D, D;
      }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: !0, origin: null, relativePoints: null, endOnly: !1, enabled: !1 } }, Zi = Ye(fn, "snap"), Wt = { start: function(t) {
        var e = t.state, n = t.edges, r = e.options;
        if (!n) return null;
        t.state = { options: { targets: null, relativePoints: [{ x: n.left ? 0 : 1, y: n.top ? 0 : 1 }], offset: r.offset || "self", origin: { x: 0, y: 0 }, range: r.range } }, e.targetFields = e.targetFields || [["width", "height"], ["x", "y"]], fn.start(t), e.offsets = t.state.offsets, t.state = e;
      }, set: function(t) {
        var e = t.interaction, n = t.state, r = t.coords, i = n.options, o = n.offsets, a = { x: r.x - o[0].x, y: r.y - o[0].y };
        n.options = M({}, i), n.options.targets = [];
        for (var s = 0, l = i.targets || []; s < l.length; s++) {
          var p = l[s], u = void 0;
          if (u = b.func(p) ? p(a.x, a.y, e) : p) {
            for (var g = 0, y = n.targetFields; g < y.length; g++) {
              var E = y[g], x = E[0], T = E[1];
              if (x in u || T in u) {
                u.x = u[x], u.y = u[T];
                break;
              }
            }
            n.options.targets.push(u);
          }
        }
        var P = fn.set(t);
        return n.options = i, P;
      }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: !1, enabled: !1 } }, eo = Ye(Wt, "snapSize"), dn = { aspectRatio: Yi, restrictEdges: Vi, restrict: $i, restrictRect: Ui, restrictSize: Qi, snapEdges: Ye({ start: function(t) {
        var e = t.edges;
        return e ? (t.state.targetFields = t.state.targetFields || [[e.left ? "left" : "right", e.top ? "top" : "bottom"]], Wt.start(t)) : null;
      }, set: Wt.set, defaults: M(ft(Wt.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: Zi, snapSize: eo, spring: jt, avoid: jt, transform: jt, rubberband: jt }, to = { id: "modifiers", install: function(t) {
        var e = t.interactStatic;
        for (var n in t.usePlugin(jn), t.usePlugin(Hi), e.modifiers = dn, dn) {
          var r = dn[n], i = r._defaults, o = r._methods;
          i._methods = o, t.defaults.perAction[n] = i;
        }
      } }, no = to, rr = function(t) {
        U(n, t);
        var e = re(n);
        function n(r, i, o, a, s, l) {
          var p;
          if (m(this, n), Qe(le(p = e.call(this, s)), o), o !== i && Qe(le(p), i), p.timeStamp = l, p.originalEvent = o, p.type = r, p.pointerId = q(i), p.pointerType = He(i), p.target = a, p.currentTarget = null, r === "tap") {
            var u = s.getPointerIndex(i);
            p.dt = p.timeStamp - s.pointers[u].downTime;
            var g = p.timeStamp - s.tapTime;
            p.double = !!s.prevTap && s.prevTap.type !== "doubletap" && s.prevTap.target === p.target && g < 500;
          } else r === "doubletap" && (p.dt = i.timeStamp - s.tapTime, p.double = !0);
          return p;
        }
        return S(n, [{ key: "_subtractOrigin", value: function(r) {
          var i = r.x, o = r.y;
          return this.pageX -= i, this.pageY -= o, this.clientX -= i, this.clientY -= o, this;
        } }, { key: "_addOrigin", value: function(r) {
          var i = r.x, o = r.y;
          return this.pageX += i, this.pageY += o, this.clientX += i, this.clientY += o, this;
        } }, { key: "preventDefault", value: function() {
          this.originalEvent.preventDefault();
        } }]), n;
      }(qe), xt = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t) {
        t.pointerEvents = xt, t.defaults.actions.pointerEvents = xt.defaults, M(t.actions.phaselessTypes, xt.types);
      }, listeners: { "interactions:new": function(t) {
        var e = t.interaction;
        e.prevTap = null, e.tapTime = 0;
      }, "interactions:update-pointer": function(t) {
        var e = t.down, n = t.pointerInfo;
        !e && n.hold || (n.hold = { duration: 1 / 0, timeout: null });
      }, "interactions:move": function(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget;
        t.duplicate || n.pointerIsDown && !n.pointerWasMoved || (n.pointerIsDown && pn(t), Ve({ interaction: n, pointer: r, event: i, eventTarget: o, type: "move" }, e));
      }, "interactions:down": function(t, e) {
        (function(n, r) {
          for (var i = n.interaction, o = n.pointer, a = n.event, s = n.eventTarget, l = n.pointerIndex, p = i.pointers[l].hold, u = ot(s), g = { interaction: i, pointer: o, event: a, eventTarget: s, type: "hold", targets: [], path: u, node: null }, y = 0; y < u.length; y++) {
            var E = u[y];
            g.node = E, r.fire("pointerEvents:collect-targets", g);
          }
          if (g.targets.length) {
            for (var x = 1 / 0, T = 0, P = g.targets; T < P.length; T++) {
              var _ = P[T].eventable.options.holdDuration;
              _ < x && (x = _);
            }
            p.duration = x, p.timeout = setTimeout(function() {
              Ve({ interaction: i, eventTarget: s, pointer: o, event: a, type: "hold" }, r);
            }, x);
          }
        })(t, e), Ve(t, e);
      }, "interactions:up": function(t, e) {
        pn(t), Ve(t, e), function(n, r) {
          var i = n.interaction, o = n.pointer, a = n.event, s = n.eventTarget;
          i.pointerWasMoved || Ve({ interaction: i, eventTarget: s, pointer: o, event: a, type: "tap" }, r);
        }(t, e);
      }, "interactions:cancel": function(t, e) {
        pn(t), Ve(t, e);
      } }, PointerEvent: rr, fire: Ve, collectEventTargets: ir, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: !0, move: !0, up: !0, cancel: !0, tap: !0, doubletap: !0, hold: !0 } };
      function Ve(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget, a = t.type, s = t.targets, l = s === void 0 ? ir(t, e) : s, p = new rr(a, r, i, o, n, e.now());
        e.fire("pointerEvents:new", { pointerEvent: p });
        for (var u = { interaction: n, pointer: r, event: i, eventTarget: o, targets: l, type: a, pointerEvent: p }, g = 0; g < l.length; g++) {
          var y = l[g];
          for (var E in y.props || {}) p[E] = y.props[E];
          var x = Je(y.eventable, y.node);
          if (p._subtractOrigin(x), p.eventable = y.eventable, p.currentTarget = y.node, y.eventable.fire(p), p._addOrigin(x), p.immediatePropagationStopped || p.propagationStopped && g + 1 < l.length && l[g + 1].node !== p.currentTarget) break;
        }
        if (e.fire("pointerEvents:fired", u), a === "tap") {
          var T = p.double ? Ve({ interaction: n, pointer: r, event: i, eventTarget: o, type: "doubletap" }, e) : p;
          n.prevTap = T, n.tapTime = T.timeStamp;
        }
        return p;
      }
      function ir(t, e) {
        var n = t.interaction, r = t.pointer, i = t.event, o = t.eventTarget, a = t.type, s = n.getPointerIndex(r), l = n.pointers[s];
        if (a === "tap" && (n.pointerWasMoved || !l || l.downTarget !== o)) return [];
        for (var p = ot(o), u = { interaction: n, pointer: r, event: i, eventTarget: o, type: a, path: p, targets: [], node: null }, g = 0; g < p.length; g++) {
          var y = p[g];
          u.node = y, e.fire("pointerEvents:collect-targets", u);
        }
        return a === "hold" && (u.targets = u.targets.filter(function(E) {
          var x, T;
          return E.eventable.options.holdDuration === ((x = n.pointers[s]) == null || (T = x.hold) == null ? void 0 : T.duration);
        })), u.targets;
      }
      function pn(t) {
        var e = t.interaction, n = t.pointerIndex, r = e.pointers[n].hold;
        r && r.timeout && (clearTimeout(r.timeout), r.timeout = null);
      }
      var ro = Object.freeze({ __proto__: null, default: xt });
      function io(t) {
        var e = t.interaction;
        e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), e.holdIntervalHandle = null);
      }
      var oo = { id: "pointer-events/holdRepeat", install: function(t) {
        t.usePlugin(xt);
        var e = t.pointerEvents;
        e.defaults.holdRepeatInterval = 0, e.types.holdrepeat = t.actions.phaselessTypes.holdrepeat = !0;
      }, listeners: ["move", "up", "cancel", "endall"].reduce(function(t, e) {
        return t["pointerEvents:".concat(e)] = io, t;
      }, { "pointerEvents:new": function(t) {
        var e = t.pointerEvent;
        e.type === "hold" && (e.count = (e.count || 0) + 1);
      }, "pointerEvents:fired": function(t, e) {
        var n = t.interaction, r = t.pointerEvent, i = t.eventTarget, o = t.targets;
        if (r.type === "hold" && o.length) {
          var a = o[0].eventable.options.holdRepeatInterval;
          a <= 0 || (n.holdIntervalHandle = setTimeout(function() {
            e.pointerEvents.fire({ interaction: n, eventTarget: i, type: "hold", pointer: r, event: r }, e);
          }, a));
        }
      } }) }, ao = oo, so = { id: "pointer-events/interactableTargets", install: function(t) {
        var e = t.Interactable;
        e.prototype.pointerEvents = function(r) {
          return M(this.events.options, r), this;
        };
        var n = e.prototype._backCompatOption;
        e.prototype._backCompatOption = function(r, i) {
          var o = n.call(this, r, i);
          return o === this && (this.events.options[r] = i), o;
        };
      }, listeners: { "pointerEvents:collect-targets": function(t, e) {
        var n = t.targets, r = t.node, i = t.type, o = t.eventTarget;
        e.interactables.forEachMatch(r, function(a) {
          var s = a.events, l = s.options;
          s.types[i] && s.types[i].length && a.testIgnoreAllow(l, r, o) && n.push({ node: r, eventable: s, props: { interactable: a } });
        });
      }, "interactable:new": function(t) {
        var e = t.interactable;
        e.events.getRect = function(n) {
          return e.getRect(n);
        };
      }, "interactable:set": function(t, e) {
        var n = t.interactable, r = t.options;
        M(n.events.options, e.pointerEvents.defaults), M(n.events.options, r.pointerEvents || {});
      } } }, co = so, lo = { id: "pointer-events", install: function(t) {
        t.usePlugin(ro), t.usePlugin(ao), t.usePlugin(co);
      } }, uo = lo, fo = { id: "reflow", install: function(t) {
        var e = t.Interactable;
        t.actions.phases.reflow = !0, e.prototype.reflow = function(n) {
          return function(r, i, o) {
            for (var a = r.getAllElements(), s = o.window.Promise, l = s ? [] : null, p = function() {
              var g = a[u], y = r.getRect(g);
              if (!y) return 1;
              var E, x = vt(o.interactions.list, function(_) {
                return _.interacting() && _.interactable === r && _.element === g && _.prepared.name === i.name;
              });
              if (x) x.move(), l && (E = x._reflowPromise || new s(function(_) {
                x._reflowResolve = _;
              }));
              else {
                var T = at(y), P = /* @__PURE__ */ function(_) {
                  return { coords: _, get page() {
                    return this.coords.page;
                  }, get client() {
                    return this.coords.client;
                  }, get timeStamp() {
                    return this.coords.timeStamp;
                  }, get pageX() {
                    return this.coords.page.x;
                  }, get pageY() {
                    return this.coords.page.y;
                  }, get clientX() {
                    return this.coords.client.x;
                  }, get clientY() {
                    return this.coords.client.y;
                  }, get pointerId() {
                    return this.coords.pointerId;
                  }, get target() {
                    return this.coords.target;
                  }, get type() {
                    return this.coords.type;
                  }, get pointerType() {
                    return this.coords.pointerType;
                  }, get buttons() {
                    return this.coords.buttons;
                  }, preventDefault: function() {
                  } };
                }({ page: { x: T.x, y: T.y }, client: { x: T.x, y: T.y }, timeStamp: o.now() });
                E = function(_, D, B, N, I) {
                  var j = _.interactions.new({ pointerType: "reflow" }), pe = { interaction: j, event: I, pointer: I, eventTarget: B, phase: "reflow" };
                  j.interactable = D, j.element = B, j.prevEvent = I, j.updatePointer(I, I, B, !0), Ce(j.coords.delta), en(j.prepared, N), j._doPhase(pe);
                  var J = _.window, be = J.Promise, Se = be ? new be(function(je) {
                    j._reflowResolve = je;
                  }) : void 0;
                  return j._reflowPromise = Se, j.start(N, D, B), j._interacting ? (j.move(pe), j.end(I)) : (j.stop(), j._reflowResolve()), j.removePointer(I, I), Se;
                }(o, r, g, i, P);
              }
              l && l.push(E);
            }, u = 0; u < a.length && !p(); u++) ;
            return l && s.all(l).then(function() {
              return r;
            });
          }(this, n, t);
        };
      }, listeners: { "interactions:stop": function(t, e) {
        var n = t.interaction;
        n.pointerType === "reflow" && (n._reflowResolve && n._reflowResolve(), function(r, i) {
          r.splice(r.indexOf(i), 1);
        }(e.interactions.list, n));
      } } }, po = fo;
      if (de.use(Fn), de.use(qn), de.use(uo), de.use(Pi), de.use(no), de.use(mi), de.use(ai), de.use(ci), de.use(po), de.default = de, w(c) === "object" && c) try {
        c.exports = de;
      } catch {
      }
      return de.default = de, de;
    });
  }(kt, kt.exports)), kt.exports;
}
var Uo = /* @__PURE__ */ Go();
const mr = /* @__PURE__ */ $o(Uo), yr = /* @__PURE__ */ Ir({
  __name: "grid-item",
  props: {
    isDraggable: {
      type: Boolean,
      default: null
    },
    isResizable: {
      type: Boolean,
      default: null
    },
    isBounded: {
      type: Boolean,
      default: null
    },
    static: {
      type: Boolean,
      default: !1
    },
    minH: {
      type: Number,
      default: 1
    },
    minW: {
      type: Number,
      default: 1
    },
    maxH: {
      type: Number,
      default: 1 / 0
    },
    maxW: {
      type: Number,
      default: 1 / 0
    },
    x: {
      type: Number,
      required: !0
    },
    y: {
      type: Number,
      required: !0
    },
    w: {
      type: Number,
      required: !0
    },
    h: {
      type: Number,
      required: !0
    },
    i: {
      type: [Number, String],
      required: !0
    },
    dragIgnoreFrom: {
      type: String,
      default: "a, button"
    },
    dragAllowFrom: {
      type: String,
      default: null
    },
    resizeIgnoreFrom: {
      type: String,
      default: "a, button"
    },
    preserveAspectRatio: {
      type: Boolean,
      default: !1
    },
    dragOption: {
      type: Object,
      default: () => ({})
    },
    resizeOption: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["container-resized", "resize", "resized", "move", "moved"],
  setup(c, { expose: d, emit: h }) {
    const f = c, w = h, m = or(Hr), z = or(Nr);
    if (!m)
      throw new Error("[grid-layout-plus]: missing layout store, GridItem must under a GridLayout.");
    const S = Pt(null), v = Mt({
      cols: 1,
      containerWidth: 100,
      rowHeight: 30,
      margin: [10, 10],
      maxRows: 1 / 0,
      draggable: null,
      resizable: null,
      bounded: null,
      transformScale: 1,
      useCssTransforms: !0,
      useStyleCursor: !0,
      isDragging: !1,
      dragging: {
        top: -1,
        left: -1
      },
      isResizing: !1,
      resizing: {
        width: -1,
        height: -1
      },
      style: {},
      rtl: !1
    });
    let U = !1, te = !1, W = NaN, le = NaN, re = NaN, xe = NaN, Pe = -1, Te = -1, ze = -1, ie = -1, ne = f.x, K = f.y, Q = f.w, ce = f.h;
    const b = Pt(), ve = Mt({
      i: ho(f, "i"),
      state: v,
      wrapper: b,
      calcXY: De
    });
    function me(k) {
      Ie(k);
    }
    function Ee() {
      gt();
    }
    function O(k) {
      we(f.isDraggable) && (v.draggable = k);
    }
    function L(k) {
      we(f.isResizable) && (v.resizable = k);
    }
    function X(k) {
      we(f.isBounded) && (v.bounded = k);
    }
    function Y(k) {
      v.transformScale = k;
    }
    function V(k) {
      v.rowHeight = k;
    }
    function G(k) {
      v.maxRows = k;
    }
    function F() {
      v.rtl = gr() === "rtl", gt();
    }
    function ke(k) {
      v.cols = Math.floor(k);
    }
    m.increaseItem(ve), Cr(() => {
      v.rtl = gr() === "rtl";
    }), Ar(() => {
      m.responsive && m.lastBreakpoint ? v.cols = xn(m.lastBreakpoint, m.cols) : v.cols = m.colNum, v.rowHeight = m.rowHeight, v.containerWidth = m.width !== null ? m.width : 100, v.margin = m.margin !== void 0 ? m.margin.map(Number) : [10, 10], v.maxRows = m.maxRows, we(f.isDraggable) ? v.draggable = m.isDraggable : v.draggable = f.isDraggable, we(f.isResizable) ? v.resizable = m.isResizable : v.resizable = f.isResizable, we(f.isBounded) ? v.bounded = m.isBounded : v.bounded = f.isBounded, v.transformScale = m.transformScale, v.useCssTransforms = m.useCssTransforms, v.useStyleCursor = m.useStyleCursor, go(() => {
        ne = f.x, K = f.y, ce = f.h, Q = f.w, he(_e);
      }), z.on("updateWidth", me), z.on("compact", Ee), z.on("setDraggable", O), z.on("setResizable", L), z.on("setBounded", X), z.on("setTransformScale", Y), z.on("setRowHeight", V), z.on("setMaxRows", G), z.on("directionchange", F), z.on("setColNum", ke);
    }), Br(() => {
      z.off("updateWidth", me), z.off("compact", Ee), z.off("setDraggable", O), z.off("setResizable", L), z.off("setBounded", X), z.off("setTransformScale", Y), z.off("setRowHeight", V), z.off("setMaxRows", G), z.off("directionchange", F), z.off("setColNum", ke), S.value && (S.value.unset(), S.value = null), m.decreaseItem(ve);
    }), d({ state: v, wrapper: b });
    const ue = typeof navigator < "u" ? navigator.userAgent.toLowerCase().includes("android") : !1, ae = tt(() => v.resizable && !f.static), Z = tt(() => m.isMirrored ? !v.rtl : v.rtl), Me = tt(() => (v.draggable || v.resizable) && !f.static), ge = Lo("item"), Rt = tt(() => ({
      [ge.b()]: !0,
      [ge.bm("resizable")]: ae.value,
      [ge.bm("static")]: f.static,
      [ge.bm("resizing")]: v.isResizing,
      [ge.bm("dragging")]: v.isDragging,
      [ge.bm("transform")]: v.useCssTransforms,
      [ge.bm("rtl")]: Z.value,
      [ge.bm("no-touch")]: ue && Me.value
    })), Ue = tt(() => [ge.be("resizer"), Z.value && ge.bem("resizer", "rtl")].filter(Boolean));
    ee(
      () => f.isDraggable,
      (k) => {
        v.draggable = k;
      }
    ), ee(
      () => f.static,
      () => {
        he(Qe), he(Ce);
      }
    ), ee(
      () => v.draggable,
      () => {
        he(Qe);
      }
    ), ee(
      () => f.isResizable,
      (k) => {
        v.resizable = k;
      }
    ), ee(
      () => f.isBounded,
      (k) => {
        v.bounded = k;
      }
    ), ee(
      () => v.resizable,
      () => {
        he(Ce);
      }
    ), ee(
      () => v.rowHeight,
      () => {
        he(_e), he(ot);
      }
    ), ee([() => v.cols, () => v.containerWidth], () => {
      he(Ce), he(_e), he(ot);
    }), ee([() => f.minH, () => f.maxH, () => f.minW, () => f.maxW], () => {
      he(Ce);
    }), ee(Z, () => {
      he(Ce), he(_e);
    }), ee([() => m.margin, () => m.margin[0], () => m.margin[1]], () => {
      const k = m.margin;
      !k || k[0] === v.margin[0] && k[1] === v.margin[1] || (v.margin = k.map(Number), he(_e), he(ot));
    });
    function _e() {
      f.x + f.w > v.cols ? (ne = 0, Q = f.w > v.cols ? v.cols : f.w) : (ne = f.x, Q = f.w);
      const k = Le(ne, K, Q, ce);
      v.isDragging && (k.top = v.dragging.top, Z.value ? k.right = v.dragging.left : k.left = v.dragging.left), v.isResizing && (k.width = v.resizing.width, k.height = v.resizing.height);
      let A;
      v.useCssTransforms ? Z.value ? A = Ao(k.top, k.right, k.width, k.height) : A = Co(k.top, k.left, k.width, k.height) : Z.value ? A = Fo(k.top, k.right, k.width, k.height) : A = Bo(k.top, k.left, k.width, k.height), v.style = A;
    }
    function ot() {
      const k = {};
      for (const A of ["width", "height"]) {
        const q = v.style[A].match(/^(\d+)px$/);
        if (!q)
          return;
        k[A] = q[1];
      }
      w("container-resized", f.i, f.h, f.w, k.height, k.width);
    }
    function ht(k) {
      if (f.static) return;
      const A = k.type;
      if (A === "resizestart" && v.isResizing || A !== "resizestart" && !v.isResizing)
        return;
      const $ = pr(k);
      if (we($)) return;
      const { x: q, y: oe } = $, H = { width: 0, height: 0 };
      let R;
      switch (A) {
        case "resizestart": {
          Ce(), Pe = Q, Te = ce, R = Le(ne, K, Q, ce), H.width = R.width, H.height = R.height, v.resizing = H, v.isResizing = !0;
          break;
        }
        case "resizemove": {
          !k.edges.right && !k.edges.left && (re = q), !k.edges.top && !k.edges.bottom && (xe = oe);
          const se = hr(re, xe, q, oe);
          Z.value ? H.width = v.resizing.width - se.deltaX / v.transformScale : H.width = v.resizing.width + se.deltaX / v.transformScale, H.height = v.resizing.height + se.deltaY / v.transformScale, v.resizing = H;
          break;
        }
        case "resizeend": {
          R = Le(ne, K, Q, ce), H.width = R.width, H.height = R.height, v.resizing = { width: -1, height: -1 }, v.isResizing = !1;
          break;
        }
      }
      R = Je(H.height, H.width), R.w < f.minW && (R.w = f.minW), R.w > f.maxW && (R.w = f.maxW), R.h < f.minH && (R.h = f.minH), R.h > f.maxH && (R.h = f.maxH), R.h < 1 && (R.h = 1), R.w < 1 && (R.w = 1), re = q, xe = oe, (Q !== R.w || ce !== R.h) && w("resize", f.i, R.h, R.w, H.height, H.width), k.type === "resizeend" && (Pe !== Q || Te !== ce) && w("resized", f.i, R.h, R.w, H.height, H.width), z.emit("resizeEvent", k.type, f.i, ne, K, R.h, R.w);
    }
    function M(k) {
      if (f.static || v.isResizing) return;
      const A = k.type;
      if (A === "dragstart" && v.isDragging || A !== "dragstart" && !v.isDragging)
        return;
      const $ = pr(k);
      if (we($)) return;
      const { x: q, y: oe } = $, H = k.target;
      if (!H.offsetParent) return;
      const R = { top: 0, left: 0 };
      switch (A) {
        case "dragstart": {
          ze = ne, ie = K;
          const fe = H.offsetParent.getBoundingClientRect(), ye = H.getBoundingClientRect(), He = ye.left / v.transformScale, Ne = fe.left / v.transformScale, qe = ye.right / v.transformScale, ct = fe.right / v.transformScale, lt = ye.top / v.transformScale, Ae = fe.top / v.transformScale;
          Z.value ? R.left = (qe - ct) * -1 : R.left = He - Ne, R.top = lt - Ae, v.dragging = R, v.isDragging = !0;
          break;
        }
        case "dragmove": {
          const fe = hr(W, le, q, oe);
          if (Z.value ? R.left = v.dragging.left - fe.deltaX / v.transformScale : R.left = v.dragging.left + fe.deltaX / v.transformScale, R.top = v.dragging.top + fe.deltaY / v.transformScale, v.bounded) {
            const ye = H.offsetParent.clientHeight - at(f.h, v.rowHeight, v.margin[1]);
            R.top = Ke(R.top, 0, ye);
            const He = Re(), Ne = v.containerWidth - at(f.w, He, v.margin[0]);
            R.left = Ke(R.left, 0, Ne);
          }
          v.dragging = R;
          break;
        }
        case "dragend": {
          const fe = H.offsetParent.getBoundingClientRect(), ye = H.getBoundingClientRect(), He = ye.left / v.transformScale, Ne = fe.left / v.transformScale, qe = ye.right / v.transformScale, ct = fe.right / v.transformScale, lt = ye.top / v.transformScale, Ae = fe.top / v.transformScale;
          Z.value ? R.left = (qe - ct) * -1 : R.left = He - Ne, R.top = lt - Ae, v.dragging = { top: -1, left: -1 }, v.isDragging = !1;
          break;
        }
      }
      let se;
      Z.value, se = De(R.top, R.left), W = q, le = oe, (ne !== se.x || K !== se.y) && w("move", f.i, se.x, se.y), k.type === "dragend" && (ze !== ne || ie !== K) && w("moved", f.i, se.x, se.y), z.emit("dragEvent", k.type, f.i, se.x, se.y, ce, Q);
    }
    function Le(k, A, $, q) {
      const oe = Re();
      let H;
      return Z.value ? H = {
        right: Math.round(oe * k + (k + 1) * v.margin[0]),
        top: Math.round(v.rowHeight * A + (A + 1) * v.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: $ === 1 / 0 ? $ : Math.round(oe * $ + Math.max(0, $ - 1) * v.margin[0]),
        height: q === 1 / 0 ? q : Math.round(v.rowHeight * q + Math.max(0, q - 1) * v.margin[1])
      } : H = {
        left: Math.round(oe * k + (k + 1) * v.margin[0]),
        top: Math.round(v.rowHeight * A + (A + 1) * v.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constraints;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes depot
        width: $ === 1 / 0 ? $ : Math.round(oe * $ + Math.max(0, $ - 1) * v.margin[0]),
        height: q === 1 / 0 ? q : Math.round(v.rowHeight * q + Math.max(0, q - 1) * v.margin[1])
      }, H;
    }
    function De(k, A) {
      const $ = Re();
      let q = Math.round((A - v.margin[0]) / ($ + v.margin[0])), oe = Math.round((k - v.margin[1]) / (v.rowHeight + v.margin[1]));
      return q = Math.max(Math.min(q, v.cols - Q), 0), oe = Math.max(Math.min(oe, v.maxRows - ce), 0), { x: q, y: oe };
    }
    function Re() {
      return (v.containerWidth - v.margin[0] * (v.cols + 1)) / v.cols;
    }
    function at(k, A, $) {
      return Number.isFinite(k) ? Math.round(A * k + Math.max(0, k - 1) * $) : k;
    }
    function Ke(k, A, $) {
      return Math.max(Math.min(k, $), A);
    }
    function Je(k, A, $ = !1) {
      const q = Re();
      let oe = Math.round((A + v.margin[0]) / (q + v.margin[0])), H = 0;
      return $ ? H = Math.ceil((k + v.margin[1]) / (v.rowHeight + v.margin[1])) : H = Math.round((k + v.margin[1]) / (v.rowHeight + v.margin[1])), oe = Math.max(Math.min(oe, v.cols - ne), 0), H = Math.max(Math.min(H, v.maxRows - K), 0), { w: oe, h: H };
    }
    function Ie(k, A) {
      v.containerWidth = k;
    }
    function gt() {
      _e();
    }
    function We() {
      !S.value && b.value && (S.value = mr(b.value), v.useStyleCursor || S.value.styleCursor(!1));
    }
    const Gt = ur(M);
    function Qe() {
      if (We(), !!S.value)
        if (v.draggable && !f.static) {
          const k = {
            ignoreFrom: f.dragIgnoreFrom,
            allowFrom: f.dragAllowFrom,
            ...f.dragOption
          };
          S.value.draggable(k), U || (U = !0, S.value.on("dragstart dragmove dragend", (A) => {
            A.type === "dragmove" ? Gt(A) : M(A);
          }));
        } else
          S.value.draggable({ enabled: !1 });
    }
    const st = ur(ht);
    function Ce() {
      if (We(), !!S.value)
        if (v.resizable && !f.static) {
          const k = Le(0, 0, f.maxW, f.maxH), A = Le(0, 0, f.minW, f.minH), $ = {
            edges: {
              left: !1,
              right: `.${Ue.value[0]}`,
              bottom: `.${Ue.value[0]}`,
              top: !1
            },
            ignoreFrom: f.resizeIgnoreFrom,
            restrictSize: {
              min: {
                height: A.height * v.transformScale,
                width: A.width * v.transformScale
              },
              max: {
                height: k.height * v.transformScale,
                width: k.width * v.transformScale
              }
            },
            ...f.resizeOption
          };
          f.preserveAspectRatio && ($.modifiers = [mr.modifiers.aspectRatio({ ratio: "preserve" })]), S.value.resizable($), te || (te = !0, S.value.on("resizestart resizemove resizeend", (q) => {
            q.type === "resizemove" ? st(q) : ht(q);
          }));
        } else
          S.value.resizable({ enabled: !1 });
    }
    return (k, A) => (St(), $t("section", {
      ref_key: "wrapper",
      ref: b,
      class: ar(Rt.value),
      style: Fr(v.style)
    }, [
      yn(k.$slots, "default"),
      ae.value ? (St(), $t("span", {
        key: 0,
        class: ar(Ue.value)
      }, null, 2)) : vo("", !0)
    ], 6));
  }
}), it = typeof window < "u";
var br;
it && (br = window == null ? void 0 : window.navigator) != null && br.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function wr(c) {
  return c != null;
}
function hn() {
}
const Ko = Object.freeze({
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
});
Object.freeze(new Set(Object.keys(Ko)));
const Jo = it && ("ontouchstart" in window || Zo() > 0), Qo = Jo ? "pointerdown" : "click";
function Zo() {
  return typeof navigator < "u" && (navigator.maxTouchPoints || navigator.msMaxTouchPoints) || 0;
}
function ea(c, d, h = window.Event) {
  const { type: f, bubbles: w = !1, cancelable: m = !1, ...z } = d;
  if (!wr(f) || f === "") return !1;
  let S;
  return wr(h) ? S = new h(f, { bubbles: w, cancelable: m }) : (S = document.createEvent("HTMLEvents"), S.initEvent(f, w, m)), Object.assign(S, z), c.dispatchEvent(S);
}
const ta = "clickoutside", na = /* @__PURE__ */ new Set();
it && document.addEventListener(
  Qo,
  (c) => {
    const d = c.target, h = c.composedPath && c.composedPath();
    na.forEach((f) => {
      f !== d && (h ? !h.includes(f) : !f.contains(d)) && (!f.__transferElement || f.__transferElement !== d && !f.__transferElement.contains(d)) && ea(f, { type: ta });
    });
  },
  !0
);
const ra = [
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  // New WebKit
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  // Old WebKit
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
];
let _t;
if (it) {
  for (const c of ra)
    if (c[1] in document) {
      _t = c;
      break;
    }
}
const ia = !!_t;
tt(() => !1);
const oa = /* @__PURE__ */ new Set(), aa = /* @__PURE__ */ new WeakMap();
if (it && _t) {
  const c = _t[2], d = _t[4];
  document.addEventListener(
    d,
    () => {
      if (oa.forEach((h) => {
        h.value = !1;
      }), document[c]) {
        const h = aa.get(document[c]);
        h && (h.value = !0);
      }
    },
    !1
  );
}
const Gr = /* @__PURE__ */ new Map();
Gr.set("x", 0);
Gr.set("y", 0);
var nt = [], sa = function() {
  return nt.some(function(c) {
    return c.activeTargets.length > 0;
  });
}, ca = function() {
  return nt.some(function(c) {
    return c.skippedTargets.length > 0;
  });
}, xr = "ResizeObserver loop completed with undelivered notifications.", la = function() {
  var c;
  typeof ErrorEvent == "function" ? c = new ErrorEvent("error", {
    message: xr
  }) : (c = document.createEvent("Event"), c.initEvent("error", !1, !1), c.message = xr), window.dispatchEvent(c);
}, Dt;
(function(c) {
  c.BORDER_BOX = "border-box", c.CONTENT_BOX = "content-box", c.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Dt || (Dt = {}));
var rt = function(c) {
  return Object.freeze(c);
}, ua = /* @__PURE__ */ function() {
  function c(d, h) {
    this.inlineSize = d, this.blockSize = h, rt(this);
  }
  return c;
}(), Ur = function() {
  function c(d, h, f, w) {
    return this.x = d, this.y = h, this.width = f, this.height = w, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, rt(this);
  }
  return c.prototype.toJSON = function() {
    var d = this, h = d.x, f = d.y, w = d.top, m = d.right, z = d.bottom, S = d.left, v = d.width, U = d.height;
    return { x: h, y: f, top: w, right: m, bottom: z, left: S, width: v, height: U };
  }, c.fromRect = function(d) {
    return new c(d.x, d.y, d.width, d.height);
  }, c;
}(), kn = function(c) {
  return c instanceof SVGElement && "getBBox" in c;
}, Kr = function(c) {
  if (kn(c)) {
    var d = c.getBBox(), h = d.width, f = d.height;
    return !h && !f;
  }
  var w = c, m = w.offsetWidth, z = w.offsetHeight;
  return !(m || z || c.getClientRects().length);
}, Er = function(c) {
  var d;
  if (c instanceof Element)
    return !0;
  var h = (d = c == null ? void 0 : c.ownerDocument) === null || d === void 0 ? void 0 : d.defaultView;
  return !!(h && c instanceof h.Element);
}, fa = function(c) {
  switch (c.tagName) {
    case "INPUT":
      if (c.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, Ot = typeof window < "u" ? window : {}, Nt = /* @__PURE__ */ new WeakMap(), kr = /auto|scroll/, da = /^tb|vertical/, pa = /msie|trident/i.test(Ot.navigator && Ot.navigator.userAgent), Oe = function(c) {
  return parseFloat(c || "0");
}, pt = function(c, d, h) {
  return c === void 0 && (c = 0), d === void 0 && (d = 0), h === void 0 && (h = !1), new ua((h ? d : c) || 0, (h ? c : d) || 0);
}, Sr = rt({
  devicePixelContentBoxSize: pt(),
  borderBoxSize: pt(),
  contentBoxSize: pt(),
  contentRect: new Ur(0, 0, 0, 0)
}), Jr = function(c, d) {
  if (d === void 0 && (d = !1), Nt.has(c) && !d)
    return Nt.get(c);
  if (Kr(c))
    return Nt.set(c, Sr), Sr;
  var h = getComputedStyle(c), f = kn(c) && c.ownerSVGElement && c.getBBox(), w = !pa && h.boxSizing === "border-box", m = da.test(h.writingMode || ""), z = !f && kr.test(h.overflowY || ""), S = !f && kr.test(h.overflowX || ""), v = f ? 0 : Oe(h.paddingTop), U = f ? 0 : Oe(h.paddingRight), te = f ? 0 : Oe(h.paddingBottom), W = f ? 0 : Oe(h.paddingLeft), le = f ? 0 : Oe(h.borderTopWidth), re = f ? 0 : Oe(h.borderRightWidth), xe = f ? 0 : Oe(h.borderBottomWidth), Pe = f ? 0 : Oe(h.borderLeftWidth), Te = W + U, ze = v + te, ie = Pe + re, ne = le + xe, K = S ? c.offsetHeight - ne - c.clientHeight : 0, Q = z ? c.offsetWidth - ie - c.clientWidth : 0, ce = w ? Te + ie : 0, b = w ? ze + ne : 0, ve = f ? f.width : Oe(h.width) - ce - Q, me = f ? f.height : Oe(h.height) - b - K, Ee = ve + Te + Q + ie, O = me + ze + K + ne, L = rt({
    devicePixelContentBoxSize: pt(Math.round(ve * devicePixelRatio), Math.round(me * devicePixelRatio), m),
    borderBoxSize: pt(Ee, O, m),
    contentBoxSize: pt(ve, me, m),
    contentRect: new Ur(W, v, ve, me)
  });
  return Nt.set(c, L), L;
}, Qr = function(c, d, h) {
  var f = Jr(c, h), w = f.borderBoxSize, m = f.contentBoxSize, z = f.devicePixelContentBoxSize;
  switch (d) {
    case Dt.DEVICE_PIXEL_CONTENT_BOX:
      return z;
    case Dt.BORDER_BOX:
      return w;
    default:
      return m;
  }
}, ha = /* @__PURE__ */ function() {
  function c(d) {
    var h = Jr(d);
    this.target = d, this.contentRect = h.contentRect, this.borderBoxSize = rt([h.borderBoxSize]), this.contentBoxSize = rt([h.contentBoxSize]), this.devicePixelContentBoxSize = rt([h.devicePixelContentBoxSize]);
  }
  return c;
}(), Zr = function(c) {
  if (Kr(c))
    return 1 / 0;
  for (var d = 0, h = c.parentNode; h; )
    d += 1, h = h.parentNode;
  return d;
}, ga = function() {
  var c = 1 / 0, d = [];
  nt.forEach(function(m) {
    if (m.activeTargets.length !== 0) {
      var z = [];
      m.activeTargets.forEach(function(S) {
        var v = new ha(S.target), U = Zr(S.target);
        z.push(v), S.lastReportedSize = Qr(S.target, S.observedBox), U < c && (c = U);
      }), d.push(function() {
        m.callback.call(m.observer, z, m.observer);
      }), m.activeTargets.splice(0, m.activeTargets.length);
    }
  });
  for (var h = 0, f = d; h < f.length; h++) {
    var w = f[h];
    w();
  }
  return c;
}, Tr = function(c) {
  nt.forEach(function(d) {
    d.activeTargets.splice(0, d.activeTargets.length), d.skippedTargets.splice(0, d.skippedTargets.length), d.observationTargets.forEach(function(h) {
      h.isActive() && (Zr(h.target) > c ? d.activeTargets.push(h) : d.skippedTargets.push(h));
    });
  });
}, va = function() {
  var c = 0;
  for (Tr(c); sa(); )
    c = ga(), Tr(c);
  return ca() && la(), c > 0;
}, gn, ei = [], ma = function() {
  return ei.splice(0).forEach(function(c) {
    return c();
  });
}, ya = function(c) {
  if (!gn) {
    var d = 0, h = document.createTextNode(""), f = { characterData: !0 };
    new MutationObserver(function() {
      return ma();
    }).observe(h, f), gn = function() {
      h.textContent = "".concat(d ? d-- : d++);
    };
  }
  ei.push(c), gn();
}, ba = function(c) {
  ya(function() {
    requestAnimationFrame(c);
  });
}, Yt = 0, wa = function() {
  return !!Yt;
}, xa = 250, Ea = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, zr = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], _r = function(c) {
  return c === void 0 && (c = 0), Date.now() + c;
}, vn = !1, ka = function() {
  function c() {
    var d = this;
    this.stopped = !0, this.listener = function() {
      return d.schedule();
    };
  }
  return c.prototype.run = function(d) {
    var h = this;
    if (d === void 0 && (d = xa), !vn) {
      vn = !0;
      var f = _r(d);
      ba(function() {
        var w = !1;
        try {
          w = va();
        } finally {
          if (vn = !1, d = f - _r(), !wa())
            return;
          w ? h.run(1e3) : d > 0 ? h.run(d) : h.start();
        }
      });
    }
  }, c.prototype.schedule = function() {
    this.stop(), this.run();
  }, c.prototype.observe = function() {
    var d = this, h = function() {
      return d.observer && d.observer.observe(document.body, Ea);
    };
    document.body ? h() : Ot.addEventListener("DOMContentLoaded", h);
  }, c.prototype.start = function() {
    var d = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), zr.forEach(function(h) {
      return Ot.addEventListener(h, d.listener, !0);
    }));
  }, c.prototype.stop = function() {
    var d = this;
    this.stopped || (this.observer && this.observer.disconnect(), zr.forEach(function(h) {
      return Ot.removeEventListener(h, d.listener, !0);
    }), this.stopped = !0);
  }, c;
}(), En = new ka(), Or = function(c) {
  !Yt && c > 0 && En.start(), Yt += c, !Yt && En.stop();
}, Sa = function(c) {
  return !kn(c) && !fa(c) && getComputedStyle(c).display === "inline";
}, Ta = function() {
  function c(d, h) {
    this.target = d, this.observedBox = h || Dt.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return c.prototype.isActive = function() {
    var d = Qr(this.target, this.observedBox, !0);
    return Sa(this.target) && (this.lastReportedSize = d), this.lastReportedSize.inlineSize !== d.inlineSize || this.lastReportedSize.blockSize !== d.blockSize;
  }, c;
}(), za = /* @__PURE__ */ function() {
  function c(d, h) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = d, this.callback = h;
  }
  return c;
}(), qt = /* @__PURE__ */ new WeakMap(), Pr = function(c, d) {
  for (var h = 0; h < c.length; h += 1)
    if (c[h].target === d)
      return h;
  return -1;
}, Xt = function() {
  function c() {
  }
  return c.connect = function(d, h) {
    var f = new za(d, h);
    qt.set(d, f);
  }, c.observe = function(d, h, f) {
    var w = qt.get(d), m = w.observationTargets.length === 0;
    Pr(w.observationTargets, h) < 0 && (m && nt.push(w), w.observationTargets.push(new Ta(h, f && f.box)), Or(1), En.schedule());
  }, c.unobserve = function(d, h) {
    var f = qt.get(d), w = Pr(f.observationTargets, h), m = f.observationTargets.length === 1;
    w >= 0 && (m && nt.splice(nt.indexOf(f), 1), f.observationTargets.splice(w, 1), Or(-1));
  }, c.disconnect = function(d) {
    var h = this, f = qt.get(d);
    f.observationTargets.slice().forEach(function(w) {
      return h.unobserve(d, w.target);
    }), f.activeTargets.splice(0, f.activeTargets.length);
  }, c;
}(), _a = function() {
  function c(d) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof d != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Xt.connect(this, d);
  }
  return c.prototype.observe = function(d, h) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Er(d))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Xt.observe(this, d, h);
  }, c.prototype.unobserve = function(d) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Er(d))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Xt.unobserve(this, d);
  }, c.prototype.disconnect = function() {
    Xt.disconnect(this);
  }, c.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, c;
}();
const Vt = /* @__PURE__ */ new WeakMap();
function Oa(c) {
  for (let d = 0, h = c.length; d < h; ++d) {
    const f = c[d], w = Vt.get(f.target);
    typeof w == "function" && w(f);
  }
}
const ti = new (it && window.ResizeObserver || _a)(
  Oa
);
function Pa(c, d) {
  Vt.set(c, d), ti.observe(c);
}
function Ma(c) {
  Vt.has(c) && (ti.unobserve(c), Vt.delete(c));
}
function Da() {
  return {
    observeResize: Pa,
    unobserveResize: Ma
  };
}
const Ra = Pt(!1);
tt(() => Ra.value);
const Mr = "__theme_style__", mn = "__theme_observer__", Dr = Mt(/* @__PURE__ */ new Map()), Rr = /* @__PURE__ */ new Map();
ee(Dr, () => {
  if (!it) return;
  Rr.clear();
  const c = document.head.querySelector(`#${Mr}`);
  c && document.head.removeChild(c);
  const d = document.createElement("style");
  let h = `.${mn} { width: 1px }`, f = 1;
  for (const [w, [m, z]] of Dr.entries())
    h += ` html.${m} .${mn}, .${z} .${mn} { width: ${++f}px }`, Rr.set(f, w);
  d.textContent = h, d.id = Mr, document.head.appendChild(d);
});
const Ca = /* @__PURE__ */ Ir({
  __name: "grid-layout",
  props: {
    autoSize: {
      type: Boolean,
      default: !0
    },
    colNum: {
      type: Number,
      default: 12
    },
    rowHeight: {
      type: Number,
      default: 150
    },
    maxRows: {
      type: Number,
      default: 1 / 0
    },
    margin: {
      type: Array,
      default: () => [10, 10]
    },
    isDraggable: {
      type: Boolean,
      default: !0
    },
    isResizable: {
      type: Boolean,
      default: !0
    },
    isMirrored: {
      type: Boolean,
      default: !1
    },
    isBounded: {
      type: Boolean,
      default: !1
    },
    useCssTransforms: {
      type: Boolean,
      default: !0
    },
    verticalCompact: {
      type: Boolean,
      default: !0
    },
    restoreOnDrag: {
      type: Boolean,
      default: !1
    },
    layout: {
      type: Array,
      required: !0
    },
    responsive: {
      type: Boolean,
      default: !1
    },
    responsiveLayouts: {
      type: Object,
      default: () => ({})
    },
    transformScale: {
      type: Number,
      default: 1
    },
    breakpoints: {
      type: Object,
      default: () => ({ xxl: 1400, xl: 1200, lg: 992, md: 768, sm: 576, xs: 0 })
    },
    cols: {
      type: Object,
      default: () => ({ xxl: 12, xl: 12, lg: 8, md: 6, sm: 4, xs: 2 })
    },
    preventCollision: {
      type: Boolean,
      default: !1
    },
    useStyleCursor: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "layout-before-mount",
    "layout-mounted",
    "layout-updated",
    "breakpoint-changed",
    "update:layout",
    "layout-ready"
  ],
  setup(c, { expose: d, emit: h }) {
    const f = c, w = h, m = Mt({
      width: -1,
      mergedStyle: {},
      lastLayoutLength: 0,
      isDragging: !1,
      placeholder: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        i: ""
      },
      layouts: {},
      // array to store all layouts from different breakpoints
      lastBreakpoint: null,
      // store last active breakpoint
      originalLayout: null
      // store original Layout
    }), z = /* @__PURE__ */ new Map(), S = Pt(f.layout), v = Pt(), { observeResize: U, unobserveResize: te } = Da(), W = _o();
    W.on("resizeEvent", le), W.on("dragEvent", re), Cr(() => {
      w("layout-before-mount", S.value);
    }), Ar(() => {
      w("layout-mounted", S.value), Ge(() => {
        jo(S.value), m.originalLayout = S.value, Ge(() => {
          me(), v.value && U(v.value, Oo(ne, 16)), dt(S.value, f.verticalCompact), w("layout-updated", S.value), ie(), ne();
        });
      });
    }), Br(() => {
      W.clearAll(), v.value && te(v.value);
    });
    function le(O, L, X, Y, V, G) {
      b(O, L, X, Y, V, G);
    }
    function re(O, L, X, Y, V, G) {
      ce(O, L, X, Y, V, G);
    }
    ee(
      () => m.width,
      (O, L) => {
        Ge(() => {
          W.emit("updateWidth", O), L === -1 && Ge(() => {
            w("layout-ready", S.value);
          }), ie();
        });
      }
    ), ee(
      () => [f.layout, f.layout.length],
      () => {
        S.value = f.layout, ze();
      }
    ), ee(
      () => f.colNum,
      (O) => {
        W.emit("setColNum", O);
      }
    ), ee(
      () => f.rowHeight,
      (O) => {
        W.emit("setRowHeight", O);
      }
    ), ee(
      () => f.isDraggable,
      (O) => {
        W.emit("setDraggable", O);
      }
    ), ee(
      () => f.isResizable,
      (O) => {
        W.emit("setResizable", O);
      }
    ), ee(
      () => f.isBounded,
      (O) => {
        W.emit("setBounded", O);
      }
    ), ee(
      () => f.transformScale,
      (O) => {
        W.emit("setTransformScale", O);
      }
    ), ee(
      () => f.responsive,
      (O) => {
        O || (w("update:layout", m.originalLayout), W.emit("setColNum", f.colNum)), ne();
      }
    ), ee(
      () => f.maxRows,
      (O) => {
        W.emit("setMaxRows", O);
      }
    ), ee([() => f.margin, () => f.margin[1]], ie), sr(
      Hr,
      Mt({
        ...cr(f),
        ...cr(m),
        increaseItem: xe,
        decreaseItem: Pe
      })
    ), sr(Nr, W), d({ state: m, getItem: Te, resizeEvent: b, dragEvent: ce });
    function xe(O) {
      z.set(O.i, O);
    }
    function Pe(O) {
      z.delete(O.i);
    }
    function Te(O) {
      return z.get(O);
    }
    function ze() {
      if (!we(S.value) && !we(m.originalLayout)) {
        if (S.value.length !== m.originalLayout.length) {
          const O = Ee(S.value, m.originalLayout);
          if (O.length > 0)
            if (S.value.length > m.originalLayout.length)
              m.originalLayout = m.originalLayout.concat(O);
            else {
              const L = new Set(O.map((X) => X.i));
              m.originalLayout = m.originalLayout.filter((X) => !L.has(X.i));
            }
          m.lastLayoutLength = S.value.length, me();
        }
        dt(S.value, f.verticalCompact), W.emit("updateWidth", m.width), ie(), w("layout-updated", S.value);
      }
    }
    function ie() {
      m.mergedStyle = {
        height: K()
      };
    }
    function ne() {
      v.value && (m.width = v.value.offsetWidth), W.emit("resizeEvent");
    }
    function K() {
      if (!f.autoSize) return;
      const O = parseFloat(f.margin[1]);
      return Mo(S.value) * (f.rowHeight + O) + O + "px";
    }
    let Q;
    function ce(O, L, X, Y, V, G) {
      let F = fr(S.value, L);
      we(F) && (F = { h: 0, w: 0, x: 0, y: 0, i: "" }), O === "dragstart" && !f.verticalCompact && (Q = S.value.reduce(
        (ke, { i: ue, x: ae, y: Z }) => ({
          ...ke,
          [ue]: { x: ae, y: Z }
        }),
        {}
      )), O === "dragmove" || O === "dragstart" ? (m.placeholder.i = L, m.placeholder.x = F.x, m.placeholder.y = F.y, m.placeholder.w = G, m.placeholder.h = V, Ge(() => {
        m.isDragging = !0;
      }), W.emit("updateWidth", m.width)) : Ge(() => {
        m.isDragging = !1;
      }), S.value = wn(S.value, F, X, Y, !0, f.preventCollision), f.restoreOnDrag ? (F.static = !0, dt(S.value, f.verticalCompact, Q), F.static = !1) : dt(S.value, f.verticalCompact), W.emit("compact"), ie(), O === "dragend" && (Q = void 0, w("layout-updated", S.value));
    }
    function b(O, L, X, Y, V, G) {
      let F = fr(S.value, L);
      we(F) && (F = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let ke;
      if (f.preventCollision) {
        const ue = Xr(S.value, { ...F, w: G, h: V }).filter(
          (ae) => ae.i !== F.i
        );
        if (ke = ue.length > 0, ke) {
          let ae = 1 / 0, Z = 1 / 0;
          ue.forEach((Me) => {
            Me.x > F.x && (ae = Math.min(ae, Me.x)), Me.y > F.y && (Z = Math.min(Z, Me.y));
          }), Number.isFinite(ae) && (F.w = ae - F.x), Number.isFinite(Z) && (F.h = Z - F.y);
        }
      }
      ke || (F.w = G, F.h = V), O === "resizestart" || O === "resizemove" ? (m.placeholder.i = L, m.placeholder.x = X, m.placeholder.y = Y, m.placeholder.w = F.w, m.placeholder.h = F.h, Ge(() => {
        m.isDragging = !0;
      }), W.emit("updateWidth", m.width)) : Ge(() => {
        m.isDragging = !1;
      }), f.responsive && ve(), dt(S.value, f.verticalCompact), W.emit("compact"), ie(), O === "resizeend" && w("layout-updated", S.value);
    }
    function ve() {
      const O = No(f.breakpoints, m.width), L = xn(O, f.cols);
      !we(m.lastBreakpoint) && !m.layouts[m.lastBreakpoint] && (m.layouts[m.lastBreakpoint] = bn(S.value));
      const X = qo(
        m.originalLayout,
        m.layouts,
        f.breakpoints,
        O,
        m.lastBreakpoint,
        L,
        f.verticalCompact
      );
      m.layouts[O] = X, m.lastBreakpoint !== O && w("breakpoint-changed", O, X), w("update:layout", X), m.lastBreakpoint = O, W.emit("setColNum", xn(O, f.cols));
    }
    function me() {
      m.layouts = Object.assign({}, f.responsiveLayouts);
    }
    function Ee(O, L) {
      const X = new Set(L.map((F) => F.i)), Y = new Set(O.map((F) => F.i)), V = O.filter((F) => !X.has(F.i)), G = L.filter((F) => !Y.has(F.i));
      return V.concat(G);
    }
    return (O, L) => (St(), $t("div", {
      ref_key: "wrapper",
      ref: v,
      class: "vgl-layout",
      style: Fr(m.mergedStyle)
    }, [
      O.$slots.default ? yn(O.$slots, "default", { key: 0 }) : (St(!0), $t(mo, { key: 1 }, yo(S.value, (X) => (St(), bo(yr, wo({
        key: X.i,
        ref_for: !0
      }, X), {
        default: xo(() => [
          yn(O.$slots, "item", { item: X })
        ]),
        _: 2
      }, 1040))), 128)),
      Eo(ko(yr, {
        class: "vgl-item--placeholder",
        x: m.placeholder.x,
        y: m.placeholder.y,
        w: m.placeholder.w,
        h: m.placeholder.h,
        i: m.placeholder.i
      }, null, 8, ["x", "y", "w", "h", "i"]), [
        [So, m.isDragging]
      ])
    ], 4));
  }
});
export {
  yr as GridItem,
  Ca as GridLayout
};
//# sourceMappingURL=grid-layout-plus.mjs.map
