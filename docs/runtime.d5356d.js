(() => {
  'use strict';
  var r,
    e = {},
    t = {};
  function o(r) {
    var n = t[r];
    if (void 0 !== n) return n.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, o), i.exports;
  }
  (o.m = e),
    (r = []),
    (o.O = (e, t, n, i) => {
      if (!t) {
        var a = 1 / 0;
        for (s = 0; s < r.length; s++) {
          for (var [t, n, i] = r[s], u = !0, l = 0; l < t.length; l++)
            (!1 & i || a >= i) && Object.keys(o.O).every((r) => o.O[r](t[l]))
              ? t.splice(l--, 1)
              : ((u = !1), i < a && (a = i));
          if (u) {
            r.splice(s--, 1);
            var f = n();
            void 0 !== f && (e = f);
          }
        }
        return e;
      }
      i = i || 0;
      for (var s = r.length; s > 0 && r[s - 1][2] > i; s--) r[s] = r[s - 1];
      r[s] = [t, n, i];
    }),
    (o.n = (r) => {
      var e = r && r.__esModule ? () => r.default : () => r;
      return o.d(e, { a: e }), e;
    }),
    (o.d = (r, e) => {
      for (var t in e)
        o.o(e, t) && !o.o(r, t) && Object.defineProperty(r, t, { enumerable: !0, get: e[t] });
    }),
    (o.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (r) {
        if ('object' == typeof window) return window;
      }
    })()),
    (o.o = (r, e) => Object.prototype.hasOwnProperty.call(r, e)),
    (o.p = ''),
    (() => {
      var r = { 666: 0 };
      o.O.j = (e) => 0 === r[e];
      var e = (e, t) => {
          var n,
            i,
            [a, u, l] = t,
            f = 0;
          if (a.some((e) => 0 !== r[e])) {
            for (n in u) o.o(u, n) && (o.m[n] = u[n]);
            if (l) var s = l(o);
          }
          for (e && e(t); f < a.length; f++) (i = a[f]), o.o(r, i) && r[i] && r[i][0](), (r[i] = 0);
          return o.O(s);
        },
        t = (self.webpackChunkw_touch = self.webpackChunkw_touch || []);
      t.forEach(e.bind(null, 0)), (t.push = e.bind(null, t.push.bind(t)));
    })();
})();
