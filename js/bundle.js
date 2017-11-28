!(function(e) {
  function o(t) {
    if (n[t]) return n[t].exports;
    var d = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(d.exports, d, d.exports, o), (d.l = !0), d.exports;
  }
  var n = {};
  (o.m = e),
    (o.c = n),
    (o.d = function(e, n, t) {
      o.o(e, n) ||
        Object.defineProperty(e, n, {
          configurable: !1,
          enumerable: !0,
          get: t,
        });
    }),
    (o.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(n, 'a', n), n;
    }),
    (o.o = function(e, o) {
      return Object.prototype.hasOwnProperty.call(e, o);
    }),
    (o.p = ''),
    o((o.s = 0));
})([
  function(e, o, n) {
    'use strict';
    (0,
    (function(e) {
      return e && e.__esModule ? e : { default: e };
    })(n(1)).default)();
  },
  function(e, o, n) {
    'use strict';
    Object.defineProperty(o, '__esModule', { value: !0 }),
      (o.default = function() {
        $(document).ready(function() {
          var e = $(window),
            o = e.height() / e.width(),
            n = $('#top-bar'),
            t = $('#top-bar-logo'),
            d = $('#left-bar-logo'),
            s = o > 1.2 ? 150 : 800;
          $(window).resize(function() {
            (o = e.height() / e.width()), (s = o > 1.2 ? 150 : 800);
          }),
            $(window).scroll(function() {
              $(window).scrollTop() >= s
                ? (t.hasClass('logo-hidden') || t.addClass('logo-hidden'),
                  d.hasClass('logo-hidden') && d.removeClass('logo-hidden'),
                  n.hasClass('hidden') && n.removeClass('hidden'))
                : (t.hasClass('logo-hidden') && t.removeClass('logo-hidden'),
                  d.hasClass('logo-hidden') || d.addClass('logo-hidden'),
                  n.hasClass('hidden') || n.addClass('hidden'));
            });
        });
      });
  },
]);
