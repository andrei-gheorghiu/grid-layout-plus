import { defineComponent as Z, reactive as D, ref as H, onBeforeMount as ee, onMounted as te, nextTick as y, onBeforeUnmount as ae, watch as s, provide as _, toRefs as N, openBlock as z, createElementBlock as O, normalizeStyle as oe, renderSlot as M, Fragment as ie, renderList as le, createBlock as re, mergeProps as ne, withCtx as se, withDirectives as ue, createVNode as ce, vShow as de } from "vue";
import F from "./grid-item.vue.mjs";
import { useResize as pe } from "@vexip-ui/hooks";
import { createEventEmitter as fe, debounce as ye, isNull as w } from "@vexip-ui/utils";
import { validateLayout as me, compact as B, LAYOUT_KEY as ge, EMITTER_KEY as he, bottom as ve, getLayoutItem as I, moveElement as we, getAllCollisions as Be, cloneLayout as xe } from "../helpers/common.mjs";
import { getBreakpointFromWidth as be, getColsFromBreakpoint as T, findOrGenerateResponsiveLayout as Le } from "../helpers/responsive.mjs";
const De = /* @__PURE__ */ Z({
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
  setup(W, { expose: A, emit: Y }) {
    const a = W, u = Y, t = D({
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
    }), L = /* @__PURE__ */ new Map(), i = H(a.layout), m = H(), { observeResize: j, unobserveResize: $ } = pe(), r = fe();
    r.on("resizeEvent", q), r.on("dragEvent", U), ee(() => {
      u("layout-before-mount", i.value);
    }), te(() => {
      u("layout-mounted", i.value), y(() => {
        me(i.value), t.originalLayout = i.value, y(() => {
          S(), m.value && j(m.value, ye(k, 16)), B(i.value, a.verticalCompact), u("layout-updated", i.value), g(), k();
        });
      });
    }), ae(() => {
      r.clearAll(), m.value && $(m.value);
    });
    function q(e, n, l, p, c, d) {
      E(e, n, l, p, c, d);
    }
    function U(e, n, l, p, c, d) {
      R(e, n, l, p, c, d);
    }
    s(
      () => t.width,
      (e, n) => {
        y(() => {
          r.emit("updateWidth", e), n === -1 && y(() => {
            u("layout-ready", i.value);
          }), g();
        });
      }
    ), s(
      () => [a.layout, a.layout.length],
      () => {
        i.value = a.layout, V();
      }
    ), s(
      () => a.colNum,
      (e) => {
        r.emit("setColNum", e);
      }
    ), s(
      () => a.rowHeight,
      (e) => {
        r.emit("setRowHeight", e);
      }
    ), s(
      () => a.isDraggable,
      (e) => {
        r.emit("setDraggable", e);
      }
    ), s(
      () => a.isResizable,
      (e) => {
        r.emit("setResizable", e);
      }
    ), s(
      () => a.isBounded,
      (e) => {
        r.emit("setBounded", e);
      }
    ), s(
      () => a.transformScale,
      (e) => {
        r.emit("setTransformScale", e);
      }
    ), s(
      () => a.responsive,
      (e) => {
        e || (u("update:layout", t.originalLayout), r.emit("setColNum", a.colNum)), k();
      }
    ), s(
      () => a.maxRows,
      (e) => {
        r.emit("setMaxRows", e);
      }
    ), s([() => a.margin, () => a.margin[1]], g), _(
      ge,
      D({
        ...N(a),
        ...N(t),
        increaseItem: G,
        decreaseItem: K
      })
    ), _(he, r), A({ state: t, getItem: P, resizeEvent: E, dragEvent: R });
    function G(e) {
      L.set(e.i, e);
    }
    function K(e) {
      L.delete(e.i);
    }
    function P(e) {
      return L.get(e);
    }
    function V() {
      if (!w(i.value) && !w(t.originalLayout)) {
        if (i.value.length !== t.originalLayout.length) {
          const e = Q(i.value, t.originalLayout);
          if (e.length > 0)
            if (i.value.length > t.originalLayout.length)
              t.originalLayout = t.originalLayout.concat(e);
            else {
              const n = new Set(e.map((l) => l.i));
              t.originalLayout = t.originalLayout.filter((l) => !n.has(l.i));
            }
          t.lastLayoutLength = i.value.length, S();
        }
        B(i.value, a.verticalCompact), r.emit("updateWidth", t.width), g(), u("layout-updated", i.value);
      }
    }
    function g() {
      t.mergedStyle = {
        height: X()
      };
    }
    function k() {
      m.value && (t.width = m.value.offsetWidth), r.emit("resizeEvent");
    }
    function X() {
      if (!a.autoSize) return;
      const e = parseFloat(a.margin[1]);
      return ve(i.value) * (a.rowHeight + e) + e + "px";
    }
    let C;
    function R(e, n, l, p, c, d) {
      let o = I(i.value, n);
      w(o) && (o = { h: 0, w: 0, x: 0, y: 0, i: "" }), e === "dragstart" && !a.verticalCompact && (C = i.value.reduce(
        (v, { i: x, x: f, y: h }) => ({
          ...v,
          [x]: { x: f, y: h }
        }),
        {}
      )), e === "dragmove" || e === "dragstart" ? (t.placeholder.i = n, t.placeholder.x = o.x, t.placeholder.y = o.y, t.placeholder.w = d, t.placeholder.h = c, y(() => {
        t.isDragging = !0;
      }), r.emit("updateWidth", t.width)) : y(() => {
        t.isDragging = !1;
      }), i.value = we(i.value, o, l, p, !0, a.preventCollision), a.restoreOnDrag ? (o.static = !0, B(i.value, a.verticalCompact, C), o.static = !1) : B(i.value, a.verticalCompact), r.emit("compact"), g(), e === "dragend" && (C = void 0, u("layout-updated", i.value));
    }
    function E(e, n, l, p, c, d) {
      let o = I(i.value, n);
      w(o) && (o = { h: 0, w: 0, x: 0, y: 0, i: "" });
      let v;
      if (a.preventCollision) {
        const x = Be(i.value, { ...o, w: d, h: c }).filter(
          (f) => f.i !== o.i
        );
        if (v = x.length > 0, v) {
          let f = 1 / 0, h = 1 / 0;
          x.forEach((b) => {
            b.x > o.x && (f = Math.min(f, b.x)), b.y > o.y && (h = Math.min(h, b.y));
          }), Number.isFinite(f) && (o.w = f - o.x), Number.isFinite(h) && (o.h = h - o.y);
        }
      }
      v || (o.w = d, o.h = c), e === "resizestart" || e === "resizemove" ? (t.placeholder.i = n, t.placeholder.x = l, t.placeholder.y = p, t.placeholder.w = o.w, t.placeholder.h = o.h, y(() => {
        t.isDragging = !0;
      }), r.emit("updateWidth", t.width)) : y(() => {
        t.isDragging = !1;
      }), a.responsive && J(), B(i.value, a.verticalCompact), r.emit("compact"), g(), e === "resizeend" && u("layout-updated", i.value);
    }
    function J() {
      const e = be(a.breakpoints, t.width), n = T(e, a.cols);
      !w(t.lastBreakpoint) && !t.layouts[t.lastBreakpoint] && (t.layouts[t.lastBreakpoint] = xe(i.value));
      const l = Le(
        t.originalLayout,
        t.layouts,
        a.breakpoints,
        e,
        t.lastBreakpoint,
        n,
        a.verticalCompact
      );
      t.layouts[e] = l, t.lastBreakpoint !== e && u("breakpoint-changed", e, l), u("update:layout", l), t.lastBreakpoint = e, r.emit("setColNum", T(e, a.cols));
    }
    function S() {
      t.layouts = Object.assign({}, a.responsiveLayouts);
    }
    function Q(e, n) {
      const l = new Set(n.map((o) => o.i)), p = new Set(e.map((o) => o.i)), c = e.filter((o) => !l.has(o.i)), d = n.filter((o) => !p.has(o.i));
      return c.concat(d);
    }
    return (e, n) => (z(), O("div", {
      ref_key: "wrapper",
      ref: m,
      class: "vgl-layout",
      style: oe(t.mergedStyle)
    }, [
      e.$slots.default ? M(e.$slots, "default", { key: 0 }) : (z(!0), O(ie, { key: 1 }, le(i.value, (l) => (z(), re(F, ne({
        key: l.i,
        ref_for: !0
      }, l), {
        default: se(() => [
          M(e.$slots, "item", { item: l })
        ]),
        _: 2
      }, 1040))), 128)),
      ue(ce(F, {
        class: "vgl-item--placeholder",
        x: t.placeholder.x,
        y: t.placeholder.y,
        w: t.placeholder.w,
        h: t.placeholder.h,
        i: t.placeholder.i
      }, null, 8, ["x", "y", "w", "h", "i"]), [
        [de, t.isDragging]
      ])
    ], 4));
  }
});
export {
  De as default
};
//# sourceMappingURL=grid-layout.vue.mjs.map
