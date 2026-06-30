import { WBDataViewer as i } from "@wbc-ui2/dataviewer";
function l(n, t, e, o, s, v, y, x) {
  var r = typeof n == "function" ? n.options : n;
  return t && (r.render = t, r.staticRenderFns = e, r._compiled = !0), {
    exports: n,
    options: r
  };
}
function d() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}
function u(n = 0, t) {
  return Math.floor(Math.random() * (t - n) + n);
}
function c(n, t = 60) {
  const e = typeof n == "string" ? n : JSON.stringify(n);
  return e.length <= t ? e : e.slice(0, t) + "…";
}
const f = {
  name: "WBAlert",
  components: {
    WBDataViewer: i
  },
  props: {
    /** Title shown in the toolbar. */
    title: {
      type: String,
      default: "WBC Alert"
    },
    /** Items to display — each rendered inside a WBDataViewer. */
    items: {
      type: Array,
      default: () => []
    },
    /** Custom layout overrides for the floating drawer. */
    layout: {
      type: Object,
      default: () => null
    },
    /** Operating mode — 'prod' or 'wiki'. */
    mode: {
      type: String,
      default: "prod"
    }
  },
  data() {
    return {
      isClosed: !1,
      isExpanded: !0,
      float: !0,
      rColor: d()
    };
  },
  computed: {
    resolvedItems() {
      return Array.isArray(this.items) ? this.items : this.items != null ? [this.items] : [];
    },
    drawerProps() {
      const n = {
        permanent: !0,
        right: !0,
        floating: !0,
        app: !1,
        absolute: !0,
        fixed: !0,
        scrollable: !0,
        style: {
          position: "fixed",
          top: "0%",
          left: u(0, 10) + "%",
          zIndex: 10,
          height: this.isExpanded ? "60%" : "15%",
          width: "auto",
          maxWidth: "520px",
          padding: "0",
          transition: "height 0.25s ease"
        }
      };
      return this.layout && typeof this.layout == "object" ? { ...n, ...this.layout } : n;
    }
  },
  methods: {
    handleClose() {
      this.isClosed = !0, this.$emit("close");
    },
    shouldRenderItem(n) {
      return !(typeof n == "string" && n.startsWith("%c"));
    },
    truncateLabel: c
  }
};
var p = function() {
  var t = this, e = t._self._c;
  return !t.isClosed && t.resolvedItems.length > 0 ? e(t.float ? "VNavigationDrawer" : "VCard", t._b({ tag: "component", attrs: { color: t.rColor } }, "component", t.float ? t.drawerProps : {}, !1), [e("VToolbar", { attrs: { dense: "", color: t.rColor, dark: "", flat: "" } }, [e("VToolbarTitle", { staticClass: "text-subtitle-2" }, [t._v(t._s(t.title))]), e("VSpacer"), e("VTooltip", { attrs: { bottom: "" }, scopedSlots: t._u([{ key: "activator", fn: function({ on: o }) {
    return [e("VBtn", t._g({ attrs: { icon: "", small: "" }, on: { click: function(s) {
      t.float = !t.float;
    } } }, o), [e("VIcon", [t._v("mdi-drag-variant")])], 1)];
  } }], null, !1, 1443705360) }, [e("span", [t._v(t._s(t.float ? "Switch to Fixed" : "Switch to Float"))])]), e("VBtn", { attrs: { icon: "", small: "" }, on: { click: t.handleClose } }, [e("VIcon", [t._v("mdi-close")])], 1)], 1), e("VContainer", { staticClass: "pa-2", attrs: { fluid: "" } }, [e("VExpandTransition", [t.isExpanded ? e("div", t._l(t.resolvedItems, function(o, s) {
    return e("VListGroup", { key: "alert-item-" + s, attrs: { value: !0 }, scopedSlots: t._u([{ key: "activator", fn: function() {
      return [e("VListItemTitle", { staticClass: "text-caption font-weight-medium text-truncate" }, [t._v(" " + t._s(t.truncateLabel(o, 60)) + " ")])];
    }, proxy: !0 }], null, !0) }, [t.shouldRenderItem(o) ? e("WBDataViewer", { attrs: { value: o } }) : t._e()], 1);
  }), 1) : t._e()]), e("VBtn", { attrs: { text: "", small: "", block: "" }, on: { click: function(o) {
    t.isExpanded = !t.isExpanded;
  } } }, [e("VIcon", { attrs: { small: "" } }, [t._v(t._s(t.isExpanded ? "mdi-chevron-up" : "mdi-chevron-down"))]), t._v(" " + t._s(t.isExpanded ? "Collapse" : "Expand") + " ")], 1)], 1)], 1) : t._e();
}, m = [], h = /* @__PURE__ */ l(
  f,
  p,
  m
);
const _ = h.exports, a = function(n, t = {}) {
  a.installed || (a.installed = !0, n.component("WBAlert", _));
};
typeof window < "u" && window.Vue && a(window.Vue);
const g = { install: a };
export {
  _ as WBAlert,
  g as default
};
