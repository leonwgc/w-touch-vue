import { defineComponent as x, ref as b, onMounted as M, onUnmounted as E, openBlock as L, createElementBlock as S, renderSlot as _ } from "vue";
function y(s, i) {
  if (!(s instanceof i))
    throw new TypeError("Cannot call a class as a function");
}
function g(s, i) {
  for (var t = 0; i.length > t; t++) {
    var e = i[t];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(s, w(e.key), e);
  }
}
function f(s, i, t) {
  return i && g(s.prototype, i), t && g(s, t), Object.defineProperty(s, "prototype", { writable: !1 }), s;
}
function n(s, i, t) {
  return (i = w(i)) in s ? Object.defineProperty(s, i, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : s[i] = t, s;
}
function w(s) {
  var i = function(t, e) {
    if (typeof t != "object" || t === null)
      return t;
    var h = t[Symbol.toPrimitive];
    if (h !== void 0) {
      var o = h.call(t, e || "default");
      if (typeof o != "object")
        return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(t);
  }(s, "string");
  return typeof i == "symbol" ? i : i + "";
}
var m = function(s) {
  var i = { pageX: s.pageX, pageY: s.pageY, touches: s.touches };
  return s.touches || (i.touches = s.touches || [], i.touches[0] = { pageX: s.pageX, pageY: s.pageY }), i;
}, c = typeof window < "u" && window.ontouchstart !== void 0, l = function() {
}, v = function(s) {
  return Math.sqrt(s.x * s.x + s.y * s.y);
};
function P(s, i) {
  var t = function(e, h) {
    var o = v(e) * v(h);
    if (o === 0)
      return 0;
    var u = function(r, p) {
      return r.x * p.x + r.y * p.y;
    }(e, h) / o;
    return u > 1 && (u = 1), Math.acos(u);
  }(s, i);
  return function(e, h) {
    return e.x * h.y - h.x * e.y;
  }(s, i) > 0 && (t *= -1), 180 * t;
}
var k = function() {
  function s(i) {
    y(this, s), n(this, "handlers", void 0), n(this, "el", void 0), this.handlers = [], this.el = i;
  }
  return f(s, [{ key: "add", value: function(i) {
    this.handlers.push(i);
  } }, { key: "del", value: function(i) {
    i || (this.handlers = []);
    for (var t = this.handlers.length; t >= 0; t--)
      this.handlers[t] === i && this.handlers.splice(t, 1);
  } }, { key: "dispatch", value: function() {
    for (var i = arguments.length, t = Array(i), e = 0; i > e; e++)
      t[e] = arguments[e];
    for (var h = 0, o = this.handlers.length; o > h; h++) {
      var u, r = this.handlers[h];
      (u = r.apply) === null || u === void 0 || u.call(r, this.el, t);
    }
  } }]), s;
}();
function a(s, i) {
  var t = new k(s);
  return t.add(i), t;
}
var X = function() {
  function s(i, t) {
    y(this, s), n(this, "element", void 0), n(this, "preV", void 0), n(this, "pinchStartLen", void 0), n(this, "scale", void 0), n(this, "isDoubleTap", void 0), n(this, "rotate", void 0), n(this, "touchStart", void 0), n(this, "touchMove", void 0), n(this, "touchEnd", void 0), n(this, "touchCancel", void 0), n(this, "isMoving", void 0), n(this, "multipointStart", void 0), n(this, "multipointEnd", void 0), n(this, "pinch", void 0), n(this, "swipe", void 0), n(this, "doubleTap", void 0), n(this, "longTap", void 0), n(this, "singleTap", void 0), n(this, "pressMove", void 0), n(this, "twoFingerPressMove", void 0), n(this, "_cancelAllHandler", void 0), n(this, "delta", void 0), n(this, "last", void 0), n(this, "now", void 0), n(this, "tapTimeout", void 0), n(this, "singleTapTimeout", void 0), n(this, "longTapTimeout", void 0), n(this, "swipeTimeout", void 0), n(this, "x1", void 0), n(this, "x2", void 0), n(this, "y1", void 0), n(this, "y2", void 0), n(this, "preTapPosition", void 0), n(this, "_preventTap", void 0), n(this, "sx2", void 0), n(this, "sy2", void 0), this.element = i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener(c ? "touchstart" : "mousedown", this.start), c ? (this.element.addEventListener("touchmove", this.move), this.element.addEventListener("touchend", this.end), this.element.addEventListener("touchcancel", this.cancel)) : (document.addEventListener("mousemove", this.move), document.addEventListener("mouseup", this.end)), this.preV = { x: null, y: null }, this.pinchStartLen = null, this.scale = 1, this.isDoubleTap = !1, this.rotate = a(this.element, t.onRotate || l), this.touchStart = a(this.element, t.onTouchStart || l), this.touchMove = a(this.element, t.onTouchMove || l), this.touchEnd = a(this.element, t.onTouchEnd || l), this.touchCancel = a(this.element, t.onTouchCancel || l), this.isMoving = !1, this.multipointStart = a(this.element, t.onMultipointStart || l), this.multipointEnd = a(this.element, t.onMultipointEnd || l), this.pinch = a(this.element, t.onPinch || l), this.swipe = a(this.element, t.onSwipe || l), this.doubleTap = a(this.element, t.onDoubleTap || l), this.longTap = a(this.element, t.onLongTap || l), this.singleTap = a(this.element, t.onSingleTap || l), this.pressMove = a(this.element, t.onPressMove || l), this.twoFingerPressMove = a(this.element, t.onTwoFingerPressMove || l), this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = { x: null, y: null };
  }
  return f(s, [{ key: "start", value: function(i) {
    var t = m(i);
    this.isMoving || (this.isMoving = !0), this.now = Date.now(), this.x1 = t.touches[0].pageX, this.y1 = t.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(t, this.element), this.preTapPosition.x !== null && (this.isDoubleTap = this.delta > 0 && 250 >= this.delta && 30 > Math.abs(this.preTapPosition.x - this.x1) && 30 > Math.abs(this.preTapPosition.y - this.y1), this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
    var e = this.preV;
    if (t.touches.length > 1) {
      this._cancelLongTap(), this._cancelSingleTap();
      var h = { x: t.touches[1].pageX - this.x1, y: t.touches[1].pageY - this.y1 };
      e.x = h.x, e.y = h.y, this.pinchStartLen = v(e), this.multipointStart.dispatch(t, this.element);
    }
    this._preventTap = !1, this.longTapTimeout = window.setTimeout(function() {
      this.longTap.dispatch(t, this.element), this._preventTap = !0;
    }.bind(this), 750);
  } }, { key: "move", value: function(i) {
    var t;
    if (this.isMoving) {
      var e = m(i), h = this.preV, o = e.touches.length, u = e.touches[0].pageX, r = e.touches[0].pageY;
      if (this.isDoubleTap = !1, o > 1) {
        var p = e.touches[1].pageX, T = e.touches[1].pageY, d = { x: e.touches[1].pageX - u, y: e.touches[1].pageY - r };
        h.x !== null && (this.pinchStartLen > 0 && (e.scale = v(d) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = P(d, h), this.rotate.dispatch(e, this.element)), h.x = d.x, h.y = d.y, this.x2 !== null && this.sx2 !== null ? (e.deltaX = (u - this.x2 + p - this.sx2) / 2, e.deltaY = (r - this.y2 + T - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = p, this.sy2 = T;
      } else
        this.x2 !== null ? (e.deltaX = u - this.x2, e.deltaY = r - this.y2, (Math.abs(this.x1 - this.x2) > 10 || Math.abs(this.y1 - this.y2) > 10) && (this._preventTap = !0)) : (e.deltaX = 0, e.deltaY = 0), this.pressMove.dispatch(e, this.element);
      (t = this.touchMove) === null || t === void 0 || t.dispatch(e, this.element), this._cancelLongTap(), this.x2 = u, this.y2 = r, o > 1 && i.preventDefault();
    }
  } }, { key: "end", value: function(i) {
    var t, e = m(i);
    if (this.isMoving && (this.isMoving = !1), !c || i.changedTouches) {
      e.touches || (e.touches = i.touches || [], e.touches[0] = { pageX: i.pageX, pageY: i.pageY }), this._cancelLongTap();
      var h = this;
      c && 2 > e.touches.length && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = window.setTimeout(function() {
        h.swipe.dispatch(e, h.element);
      }, 0)) : (this.tapTimeout = window.setTimeout(function() {
        var o;
        h.isDoubleTap && ((o = h.doubleTap) === null || o === void 0 || o.dispatch(e, h.element), h.isDoubleTap = !1);
      }, 0), h.isDoubleTap || (h.singleTapTimeout = window.setTimeout(function() {
        var o;
        h._preventTap || (o = h.singleTap) === null || o === void 0 || o.dispatch(e, h.element);
      }, 250))), (t = this.touchEnd) === null || t === void 0 || t.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.scale = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null;
    }
  } }, { key: "cancelAll", value: function() {
    this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout);
  } }, { key: "cancel", value: function(i) {
    this.cancelAll(), this.touchCancel.dispatch(i, this.element);
  } }, { key: "_cancelLongTap", value: function() {
    clearTimeout(this.longTapTimeout);
  } }, { key: "_cancelSingleTap", value: function() {
    clearTimeout(this.singleTapTimeout);
  } }, { key: "_swipeDirection", value: function(i, t, e, h) {
    return Math.abs(e - h) > Math.abs(i - t) ? e - h > 0 ? "up" : "down" : i - t > 0 ? "left" : "right";
  } }, { key: "on", value: function(i, t) {
    this[i] && this[i].add(t);
  } }, { key: "off", value: function(i, t) {
    this[i] && this[i].del(t);
  } }, { key: "destroy", value: function() {
    return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener(c ? "touchstart" : "mousedown", this.start), c ? (this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel)) : (document.removeEventListener("mousemove", this.move), document.removeEventListener("mouseup", this.end)), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = { x: null, y: null }, this.isMoving = this.pinchStartLen = this.scale = this.isDoubleTap = this.delta = this.last = this.now = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null;
  } }]), s;
}();
const D = /* @__PURE__ */ x({
  __name: "TouchElement",
  props: {
    options: null
  },
  setup(s) {
    const i = s;
    let t;
    const e = b();
    return M(() => {
      t = new X(e.value, i.options);
    }), E(() => {
      t.destroy();
    }), (h, o) => (L(), S("div", {
      ref_key: "el",
      ref: e
    }, [
      _(h.$slots, "default")
    ], 512));
  }
});
export {
  D as default
};
