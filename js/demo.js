"object" == typeof navigator &&
  (function () {
    "use strict";
    const e = document.getElementById("container"),
      t = "tab-focus";
    document.addEventListener("focusout", (n) => {
      n.target.classList &&
        !e.contains(n.target) &&
        n.target.classList.remove(t);
    }),
      document.addEventListener("keydown", (n) => {
        "Tab" === n.key &&
          setTimeout(() => {
            const n = document.activeElement;
            n && n.classList && !e.contains(n) && n.classList.add(t);
          }, 10);
      }),
      (function () {
        if ("undefined" != typeof window)
          try {
            var e = new window.CustomEvent("test", { cancelable: !0 });
            if ((e.preventDefault(), !0 !== e.defaultPrevented))
              throw new Error("Could not prevent default");
          } catch (e) {
            var t = function (e, t) {
              var n, i;
              return (
                ((t = t || {}).bubbles = !!t.bubbles),
                (t.cancelable = !!t.cancelable),
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  e,
                  t.bubbles,
                  t.cancelable,
                  t.detail
                ),
                (i = n.preventDefault),
                (n.preventDefault = function () {
                  i.call(this);
                  try {
                    Object.defineProperty(this, "defaultPrevented", {
                      get: function () {
                        return !0;
                      },
                    });
                  } catch (e) {
                    this.defaultPrevented = !0;
                  }
                }),
                n
              );
            };
            (t.prototype = window.Event.prototype), (window.CustomEvent = t);
          }
      })();
    var n =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
    function i(e, t) {
      return e((t = { exports: {} }), t.exports), t.exports;
    }
    !(function (e) {
      var t = (function () {
          try {
            return !!Symbol.iterator;
          } catch (e) {
            return !1;
          }
        })(),
        n = function (e) {
          var n = {
            next: function () {
              var t = e.shift();
              return { done: void 0 === t, value: t };
            },
          };
          return (
            t &&
              (n[Symbol.iterator] = function () {
                return n;
              }),
            n
          );
        },
        i = function (e) {
          return encodeURIComponent(e).replace(/%20/g, "+");
        },
        r = function (e) {
          return decodeURIComponent(String(e).replace(/\+/g, " "));
        };
      (function () {
        try {
          var t = e.URLSearchParams;
          return (
            "a=1" === new t("?a=1").toString() &&
            "function" == typeof t.prototype.set &&
            "function" == typeof t.prototype.entries
          );
        } catch (e) {
          return !1;
        }
      })() ||
        (function () {
          var r = function (e) {
              Object.defineProperty(this, "_entries", {
                writable: !0,
                value: {},
              });
              var t = typeof e;
              if ("undefined" === t);
              else if ("string" === t) "" !== e && this._fromString(e);
              else if (e instanceof r) {
                var n = this;
                e.forEach(function (e, t) {
                  n.append(t, e);
                });
              } else {
                if (null === e || "object" !== t)
                  throw new TypeError(
                    "Unsupported input's type for URLSearchParams"
                  );
                if ("[object Array]" === Object.prototype.toString.call(e))
                  for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    if (
                      "[object Array]" !== Object.prototype.toString.call(s) &&
                      2 === s.length
                    )
                      throw new TypeError(
                        "Expected [string, any] as entry at index " +
                          i +
                          " of URLSearchParams's input"
                      );
                    this.append(s[0], s[1]);
                  }
                else
                  for (var o in e) e.hasOwnProperty(o) && this.append(o, e[o]);
              }
            },
            s = r.prototype;
          (s.append = function (e, t) {
            e in this._entries
              ? this._entries[e].push(String(t))
              : (this._entries[e] = [String(t)]);
          }),
            (s.delete = function (e) {
              delete this._entries[e];
            }),
            (s.get = function (e) {
              return e in this._entries ? this._entries[e][0] : null;
            }),
            (s.getAll = function (e) {
              return e in this._entries ? this._entries[e].slice(0) : [];
            }),
            (s.has = function (e) {
              return e in this._entries;
            }),
            (s.set = function (e, t) {
              this._entries[e] = [String(t)];
            }),
            (s.forEach = function (e, t) {
              var n;
              for (var i in this._entries)
                if (this._entries.hasOwnProperty(i)) {
                  n = this._entries[i];
                  for (var r = 0; r < n.length; r++) e.call(t, n[r], i, this);
                }
            }),
            (s.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push(n);
                }),
                n(e)
              );
            }),
            (s.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                n(e)
              );
            }),
            (s.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push([n, t]);
                }),
                n(e)
              );
            }),
            t && (s[Symbol.iterator] = s.entries),
            (s.toString = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push(i(n) + "=" + i(t));
                }),
                e.join("&")
              );
            }),
            (e.URLSearchParams = r);
        })();
      var s = e.URLSearchParams.prototype;
      "function" != typeof s.sort &&
        (s.sort = function () {
          var e = this,
            t = [];
          this.forEach(function (n, i) {
            t.push([i, n]), e._entries || e.delete(i);
          }),
            t.sort(function (e, t) {
              return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0;
            }),
            e._entries && (e._entries = {});
          for (var n = 0; n < t.length; n++) this.append(t[n][0], t[n][1]);
        }),
        "function" != typeof s._fromString &&
          Object.defineProperty(s, "_fromString", {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: function (e) {
              if (this._entries) this._entries = {};
              else {
                var t = [];
                this.forEach(function (e, n) {
                  t.push(n);
                });
                for (var n = 0; n < t.length; n++) this.delete(t[n]);
              }
              var i,
                s = (e = e.replace(/^\?/, "")).split("&");
              for (n = 0; n < s.length; n++)
                (i = s[n].split("=")),
                  this.append(r(i[0]), i.length > 1 ? r(i[1]) : "");
            },
          });
    })(
      void 0 !== n
        ? n
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof self
        ? self
        : n
    ),
      (function (e) {
        if (
          ((function () {
            try {
              var t = new e.URL("b", "http://a");
              return (
                (t.pathname = "c d"),
                "http://a/c%20d" === t.href && t.searchParams
              );
            } catch (e) {
              return !1;
            }
          })() ||
            (function () {
              var t = e.URL,
                n = function (t, n) {
                  "string" != typeof t && (t = String(t));
                  var i,
                    r = document;
                  if (n && (void 0 === e.location || n !== e.location.href)) {
                    ((i = (r =
                      document.implementation.createHTMLDocument(
                        ""
                      )).createElement("base")).href = n),
                      r.head.appendChild(i);
                    try {
                      if (0 !== i.href.indexOf(n)) throw new Error(i.href);
                    } catch (e) {
                      throw new Error(
                        "URL unable to set base " + n + " due to " + e
                      );
                    }
                  }
                  var s = r.createElement("a");
                  (s.href = t), i && (r.body.appendChild(s), (s.href = s.href));
                  var o = r.createElement("input");
                  if (
                    ((o.type = "url"),
                    (o.value = t),
                    ":" === s.protocol ||
                      !/:/.test(s.href) ||
                      (!o.checkValidity() && !n))
                  )
                    throw new TypeError("Invalid URL");
                  Object.defineProperty(this, "_anchorElement", { value: s });
                  var a = new e.URLSearchParams(this.search),
                    l = !0,
                    c = !0,
                    u = this;
                  ["append", "delete", "set"].forEach(function (e) {
                    var t = a[e];
                    a[e] = function () {
                      t.apply(a, arguments),
                        l && ((c = !1), (u.search = a.toString()), (c = !0));
                    };
                  }),
                    Object.defineProperty(this, "searchParams", {
                      value: a,
                      enumerable: !0,
                    });
                  var h = void 0;
                  Object.defineProperty(this, "_updateSearchParams", {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: function () {
                      this.search !== h &&
                        ((h = this.search),
                        c &&
                          ((l = !1),
                          this.searchParams._fromString(this.search),
                          (l = !0)));
                    },
                  });
                },
                i = n.prototype;
              ["hash", "host", "hostname", "port", "protocol"].forEach(
                function (e) {
                  !(function (e) {
                    Object.defineProperty(i, e, {
                      get: function () {
                        return this._anchorElement[e];
                      },
                      set: function (t) {
                        this._anchorElement[e] = t;
                      },
                      enumerable: !0,
                    });
                  })(e);
                }
              ),
                Object.defineProperty(i, "search", {
                  get: function () {
                    return this._anchorElement.search;
                  },
                  set: function (e) {
                    (this._anchorElement.search = e),
                      this._updateSearchParams();
                  },
                  enumerable: !0,
                }),
                Object.defineProperties(i, {
                  toString: {
                    get: function () {
                      var e = this;
                      return function () {
                        return e.href;
                      };
                    },
                  },
                  href: {
                    get: function () {
                      return this._anchorElement.href.replace(/\?$/, "");
                    },
                    set: function (e) {
                      (this._anchorElement.href = e),
                        this._updateSearchParams();
                    },
                    enumerable: !0,
                  },
                  pathname: {
                    get: function () {
                      return this._anchorElement.pathname.replace(
                        /(^\/?)/,
                        "/"
                      );
                    },
                    set: function (e) {
                      this._anchorElement.pathname = e;
                    },
                    enumerable: !0,
                  },
                  origin: {
                    get: function () {
                      var e = { "http:": 80, "https:": 443, "ftp:": 21 }[
                          this._anchorElement.protocol
                        ],
                        t =
                          this._anchorElement.port != e &&
                          "" !== this._anchorElement.port;
                      return (
                        this._anchorElement.protocol +
                        "//" +
                        this._anchorElement.hostname +
                        (t ? ":" + this._anchorElement.port : "")
                      );
                    },
                    enumerable: !0,
                  },
                  password: {
                    get: function () {
                      return "";
                    },
                    set: function (e) {},
                    enumerable: !0,
                  },
                  username: {
                    get: function () {
                      return "";
                    },
                    set: function (e) {},
                    enumerable: !0,
                  },
                }),
                (n.createObjectURL = function (e) {
                  return t.createObjectURL.apply(t, arguments);
                }),
                (n.revokeObjectURL = function (e) {
                  return t.revokeObjectURL.apply(t, arguments);
                }),
                (e.URL = n);
            })(),
          void 0 !== e.location && !("origin" in e.location))
        ) {
          var t = function () {
            return (
              e.location.protocol +
              "//" +
              e.location.hostname +
              (e.location.port ? ":" + e.location.port : "")
            );
          };
          try {
            Object.defineProperty(e.location, "origin", {
              get: t,
              enumerable: !0,
            });
          } catch (n) {
            setInterval(function () {
              e.location.origin = t();
            }, 100);
          }
        }
      })(
        void 0 !== n
          ? n
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : n
      );
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var r =
      function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            }),
          r(e, t)
        );
      };
    function s(e, t) {
      function n() {
        this.constructor = e;
      }
      r(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    }
    var o,
      a,
      l = function () {
        return (
          (l =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }),
          l.apply(this, arguments)
        );
      };
    function c(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var i,
        r,
        s = n.call(e),
        o = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(i = s.next()).done; )
          o.push(i.value);
      } catch (e) {
        r = { error: e };
      } finally {
        try {
          i && !i.done && (n = s.return) && n.call(s);
        } finally {
          if (r) throw r.error;
        }
      }
      return o;
    }
    function u() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e = e.concat(c(arguments[t]));
      return e;
    }
    !(function (e) {
      (e.Fatal = "fatal"),
        (e.Error = "error"),
        (e.Warning = "warning"),
        (e.Log = "log"),
        (e.Info = "info"),
        (e.Debug = "debug"),
        (e.Critical = "critical");
    })(o || (o = {})),
      (function (e) {
        e.fromString = function (t) {
          switch (t) {
            case "debug":
              return e.Debug;
            case "info":
              return e.Info;
            case "warn":
            case "warning":
              return e.Warning;
            case "error":
              return e.Error;
            case "fatal":
              return e.Fatal;
            case "critical":
              return e.Critical;
            default:
              return e.Log;
          }
        };
      })(o || (o = {})),
      (function (e) {
        (e.Unknown = "unknown"),
          (e.Skipped = "skipped"),
          (e.Success = "success"),
          (e.RateLimit = "rate_limit"),
          (e.Invalid = "invalid"),
          (e.Failed = "failed");
      })(a || (a = {})),
      (function (e) {
        e.fromHttpCode = function (t) {
          return t >= 200 && t < 300
            ? e.Success
            : 429 === t
            ? e.RateLimit
            : t >= 400 && t < 500
            ? e.Invalid
            : t >= 500
            ? e.Failed
            : e.Unknown;
        };
      })(a || (a = {}));
    var h =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array
        ? function (e, t) {
            return (e.__proto__ = t), e;
          }
        : function (e, t) {
            for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
            return e;
          });
    var d = (function (e) {
      function t(t) {
        var n = this.constructor,
          i = e.call(this, t) || this;
        return (
          (i.message = t),
          (i.name = n.prototype.constructor.name),
          h(i, n.prototype),
          i
        );
      }
      return s(t, e), t;
    })(Error);
    function p(e) {
      switch (Object.prototype.toString.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return !0;
        default:
          return k(e, Error);
      }
    }
    function f(e) {
      return "[object ErrorEvent]" === Object.prototype.toString.call(e);
    }
    function m(e) {
      return "[object DOMError]" === Object.prototype.toString.call(e);
    }
    function g(e) {
      return "[object String]" === Object.prototype.toString.call(e);
    }
    function y(e) {
      return null === e || ("object" != typeof e && "function" != typeof e);
    }
    function b(e) {
      return "[object Object]" === Object.prototype.toString.call(e);
    }
    function v(e) {
      return "undefined" != typeof Event && k(e, Event);
    }
    function w(e) {
      return "undefined" != typeof Element && k(e, Element);
    }
    function _(e) {
      return Boolean(e && e.then && "function" == typeof e.then);
    }
    function k(e, t) {
      try {
        return e instanceof t;
      } catch (e) {
        return !1;
      }
    }
    var E = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
      T = function (e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      },
      S = !T(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      }),
      x = function (e) {
        return e && e.Math == Math && e;
      },
      C =
        x("object" == typeof globalThis && globalThis) ||
        x("object" == typeof window && window) ||
        x("object" == typeof self && self) ||
        x("object" == typeof n && n) ||
        Function("return this")(),
      A = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      },
      P = {}.hasOwnProperty,
      O = function (e, t) {
        return P.call(e, t);
      },
      j = C.document,
      I = A(j) && A(j.createElement),
      N =
        !S &&
        !T(function () {
          return (
            7 !=
            Object.defineProperty(
              ((e = "div"), I ? j.createElement(e) : {}),
              "a",
              {
                get: function () {
                  return 7;
                },
              }
            ).a
          );
          var e;
        }),
      L = function (e) {
        if (!A(e)) throw TypeError(String(e) + " is not an object");
        return e;
      },
      M = Object.defineProperty,
      R = {
        f: S
          ? M
          : function (e, t, n) {
              if (
                (L(e),
                (t = (function (e, t) {
                  if (!A(e)) return e;
                  var n, i;
                  if (
                    t &&
                    "function" == typeof (n = e.toString) &&
                    !A((i = n.call(e)))
                  )
                    return i;
                  if (
                    "function" == typeof (n = e.valueOf) &&
                    !A((i = n.call(e)))
                  )
                    return i;
                  if (
                    !t &&
                    "function" == typeof (n = e.toString) &&
                    !A((i = n.call(e)))
                  )
                    return i;
                  throw TypeError("Can't convert object to primitive value");
                })(t, !0)),
                L(n),
                N)
              )
                try {
                  return M(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported");
              return "value" in n && (e[t] = n.value), e;
            },
      },
      D = S
        ? function (e, t, n) {
            return R.f(
              e,
              t,
              (function (e, t) {
                return {
                  enumerable: !(1 & e),
                  configurable: !(2 & e),
                  writable: !(4 & e),
                  value: t,
                };
              })(1, n)
            );
          }
        : function (e, t, n) {
            return (e[t] = n), e;
          },
      U = function (e, t) {
        try {
          D(C, e, t);
        } catch (n) {
          C[e] = t;
        }
        return t;
      },
      F = "__core-js_shared__",
      $ = C[F] || U(F, {}),
      q = i(function (e) {
        (e.exports = function (e, t) {
          return $[e] || ($[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: "3.6.5",
          mode: "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
        });
      }),
      H = 0,
      B = Math.random(),
      V = function (e) {
        return (
          "Symbol(" +
          String(void 0 === e ? "" : e) +
          ")_" +
          (++H + B).toString(36)
        );
      },
      W =
        !!Object.getOwnPropertySymbols &&
        !T(function () {
          return !String(Symbol());
        }),
      z = W && !Symbol.sham && "symbol" == typeof Symbol.iterator,
      Y = q("wks"),
      K = C.Symbol,
      J = z ? K : (K && K.withoutSetter) || V,
      X = function (e) {
        return (
          O(Y, e) || (W && O(K, e) ? (Y[e] = K[e]) : (Y[e] = J("Symbol." + e))),
          Y[e]
        );
      },
      G = {};
    G[X("toStringTag")] = "z";
    var Q = "[object z]" === String(G),
      Z = {}.toString,
      ee = function (e) {
        return Z.call(e).slice(8, -1);
      },
      te = X("toStringTag"),
      ne =
        "Arguments" ==
        ee(
          (function () {
            return arguments;
          })()
        ),
      ie = Q
        ? ee
        : function (e) {
            var t, n, i;
            return void 0 === e
              ? "Undefined"
              : null === e
              ? "Null"
              : "string" ==
                typeof (n = (function (e, t) {
                  try {
                    return e[t];
                  } catch (e) {}
                })((t = Object(e)), te))
              ? n
              : ne
              ? ee(t)
              : "Object" == (i = ee(t)) && "function" == typeof t.callee
              ? "Arguments"
              : i;
          },
      re = Function.toString;
    "function" != typeof $.inspectSource &&
      ($.inspectSource = function (e) {
        return re.call(e);
      });
    var se,
      oe,
      ae,
      le = $.inspectSource,
      ce = C.WeakMap,
      ue = "function" == typeof ce && /native code/.test(le(ce)),
      he = q("keys"),
      de = function (e) {
        return he[e] || (he[e] = V(e));
      },
      pe = C.WeakMap;
    if (ue) {
      var fe = new pe(),
        me = fe.get,
        ge = fe.has,
        ye = fe.set;
      (se = function (e, t) {
        return ye.call(fe, e, t), t;
      }),
        (oe = function (e) {
          return me.call(fe, e) || {};
        }),
        (ae = function (e) {
          return ge.call(fe, e);
        });
    } else {
      var be = de("state");
      (se = function (e, t) {
        return D(e, be, t), t;
      }),
        (oe = function (e) {
          return O(e, be) ? e[be] : {};
        }),
        (ae = function (e) {
          return O(e, be);
        });
    }
    var ve,
      we = {
        set: se,
        get: oe,
        has: ae,
        enforce: function (e) {
          return ae(e) ? oe(e) : se(e, {});
        },
        getterFor: function (e) {
          return function (t) {
            var n;
            if (!A(t) || (n = oe(t)).type !== e)
              throw TypeError("Incompatible receiver, " + e + " required");
            return n;
          };
        },
      },
      _e = i(function (e) {
        var t = we.get,
          n = we.enforce,
          i = String(String).split("String");
        (e.exports = function (e, t, r, s) {
          var o = !!s && !!s.unsafe,
            a = !!s && !!s.enumerable,
            l = !!s && !!s.noTargetGet;
          "function" == typeof r &&
            ("string" != typeof t || O(r, "name") || D(r, "name", t),
            (n(r).source = i.join("string" == typeof t ? t : ""))),
            e !== C
              ? (o ? !l && e[t] && (a = !0) : delete e[t],
                a ? (e[t] = r) : D(e, t, r))
              : a
              ? (e[t] = r)
              : U(t, r);
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && t(this).source) || le(this);
        });
      }),
      ke = function (e) {
        return Object(
          (function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e;
          })(e)
        );
      },
      Ee = !T(function () {
        function e() {}
        return (
          (e.prototype.constructor = null),
          Object.getPrototypeOf(new e()) !== e.prototype
        );
      }),
      Te = de("IE_PROTO"),
      Se = Object.prototype,
      xe = Ee
        ? Object.getPrototypeOf
        : function (e) {
            return (
              (e = ke(e)),
              O(e, Te)
                ? e[Te]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? Se
                : null
            );
          },
      Ce =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var e,
                t = !1,
                n = {};
              try {
                (e = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set).call(n, []),
                  (t = n instanceof Array);
              } catch (e) {}
              return function (n, i) {
                return (
                  L(n),
                  (function (e) {
                    if (!A(e) && null !== e)
                      throw TypeError(
                        "Can't set " + String(e) + " as a prototype"
                      );
                  })(i),
                  t ? e.call(n, i) : (n.__proto__ = i),
                  n
                );
              };
            })()
          : void 0),
      Ae = R.f,
      Pe = C.Int8Array,
      Oe = Pe && Pe.prototype,
      je = C.Uint8ClampedArray,
      Ie = je && je.prototype,
      Ne = Pe && xe(Pe),
      Le = Oe && xe(Oe),
      Me = Object.prototype,
      Re = (Me.isPrototypeOf, X("toStringTag")),
      De = V("TYPED_ARRAY_TAG"),
      Ue = E && !!Ce && "Opera" !== ie(C.opera),
      Fe = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8,
      },
      $e = function (e) {
        return A(e) && O(Fe, ie(e));
      };
    for (ve in Fe) C[ve] || (Ue = !1);
    if (
      (!Ue || "function" != typeof Ne || Ne === Function.prototype) &&
      ((Ne = function () {
        throw TypeError("Incorrect invocation");
      }),
      Ue)
    )
      for (ve in Fe) C[ve] && Ce(C[ve], Ne);
    if ((!Ue || !Le || Le === Me) && ((Le = Ne.prototype), Ue))
      for (ve in Fe) C[ve] && Ce(C[ve].prototype, Le);
    if ((Ue && xe(Ie) !== Le && Ce(Ie, Le), S && !O(Le, Re)))
      for (ve in (!0,
      Ae(Le, Re, {
        get: function () {
          return A(this) ? this[De] : void 0;
        },
      }),
      Fe))
        C[ve] && D(C[ve], De, ve);
    var qe = function (e) {
        if ($e(e)) return e;
        throw TypeError("Target is not a typed array");
      },
      He = function (e, t, n) {
        if (S) {
          if (n)
            for (var i in Fe) {
              var r = C[i];
              r && O(r.prototype, e) && delete r.prototype[e];
            }
          (Le[e] && !n) || _e(Le, e, n ? t : (Ue && Oe[e]) || t);
        }
      },
      Be = Math.ceil,
      Ve = Math.floor,
      We = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? Ve : Be)(e);
      },
      ze = Math.min,
      Ye = function (e) {
        return e > 0 ? ze(We(e), 9007199254740991) : 0;
      },
      Ke = function (e, t) {
        var n = (function (e) {
          var t = We(e);
          if (t < 0) throw RangeError("The argument can't be less than 0");
          return t;
        })(e);
        if (n % t) throw RangeError("Wrong offset");
        return n;
      },
      Je = qe;
    function Xe(e, t) {
      return (
        void 0 === t && (t = 0),
        "string" != typeof e || 0 === t || e.length <= t
          ? e
          : e.substr(0, t) + "..."
      );
    }
    function Ge(e, t) {
      if (!Array.isArray(e)) return "";
      for (var n = [], i = 0; i < e.length; i++) {
        var r = e[i];
        try {
          n.push(String(r));
        } catch (e) {
          n.push("[value cannot be serialized]");
        }
      }
      return n.join(t);
    }
    function Qe(e, t) {
      return (
        !!g(e) &&
        ((n = t),
        "[object RegExp]" === Object.prototype.toString.call(n)
          ? t.test(e)
          : "string" == typeof t && -1 !== e.indexOf(t))
      );
      var n;
    }
    function Ze() {
      return (
        "[object process]" ===
        Object.prototype.toString.call(
          "undefined" != typeof process ? process : 0
        )
      );
    }
    He(
      "set",
      function (e) {
        Je(this);
        var t = Ke(arguments.length > 1 ? arguments[1] : void 0, 1),
          n = this.length,
          i = ke(e),
          r = Ye(i.length),
          s = 0;
        if (r + t > n) throw RangeError("Wrong length");
        for (; s < r; ) this[t + s] = i[s++];
      },
      T(function () {
        new Int8Array(1).set({});
      })
    );
    var et = {};
    function tt() {
      return Ze()
        ? global
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof self
        ? self
        : et;
    }
    function nt() {
      var e = tt(),
        t = e.crypto || e.msCrypto;
      if (void 0 !== t && t.getRandomValues) {
        var n = new Uint16Array(8);
        t.getRandomValues(n),
          (n[3] = (4095 & n[3]) | 16384),
          (n[4] = (16383 & n[4]) | 32768);
        var i = function (e) {
          for (var t = e.toString(16); t.length < 4; ) t = "0" + t;
          return t;
        };
        return (
          i(n[0]) +
          i(n[1]) +
          i(n[2]) +
          i(n[3]) +
          i(n[4]) +
          i(n[5]) +
          i(n[6]) +
          i(n[7])
        );
      }
      return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = (16 * Math.random()) | 0;
        return ("x" === e ? t : (3 & t) | 8).toString(16);
      });
    }
    function it(e) {
      if (!e) return {};
      var t = e.match(
        /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
      );
      if (!t) return {};
      var n = t[6] || "",
        i = t[8] || "";
      return { host: t[4], path: t[5], protocol: t[2], relative: t[5] + n + i };
    }
    function rt(e) {
      if (e.message) return e.message;
      if (e.exception && e.exception.values && e.exception.values[0]) {
        var t = e.exception.values[0];
        return t.type && t.value
          ? t.type + ": " + t.value
          : t.type || t.value || e.event_id || "<unknown>";
      }
      return e.event_id || "<unknown>";
    }
    function st(e) {
      var t = tt();
      if (!("console" in t)) return e();
      var n = t.console,
        i = {};
      ["debug", "info", "warn", "error", "log", "assert"].forEach(function (e) {
        e in t.console &&
          n[e].__sentry_original__ &&
          ((i[e] = n[e]), (n[e] = n[e].__sentry_original__));
      });
      var r = e();
      return (
        Object.keys(i).forEach(function (e) {
          n[e] = i[e];
        }),
        r
      );
    }
    function ot(e, t, n) {
      (e.exception = e.exception || {}),
        (e.exception.values = e.exception.values || []),
        (e.exception.values[0] = e.exception.values[0] || {}),
        (e.exception.values[0].value = e.exception.values[0].value || t || ""),
        (e.exception.values[0].type =
          e.exception.values[0].type || n || "Error");
    }
    function at(e, t) {
      void 0 === t && (t = {});
      try {
        (e.exception.values[0].mechanism =
          e.exception.values[0].mechanism || {}),
          Object.keys(t).forEach(function (n) {
            e.exception.values[0].mechanism[n] = t[n];
          });
      } catch (e) {}
    }
    function lt(e) {
      try {
        for (
          var t = e, n = [], i = 0, r = 0, s = " > ".length, o = void 0;
          t &&
          i++ < 5 &&
          !(
            "html" === (o = ct(t)) ||
            (i > 1 && r + n.length * s + o.length >= 80)
          );

        )
          n.push(o), (r += o.length), (t = t.parentNode);
        return n.reverse().join(" > ");
      } catch (e) {
        return "<unknown>";
      }
    }
    function ct(e) {
      var t,
        n,
        i,
        r,
        s,
        o = e,
        a = [];
      if (!o || !o.tagName) return "";
      if (
        (a.push(o.tagName.toLowerCase()),
        o.id && a.push("#" + o.id),
        (t = o.className) && g(t))
      )
        for (n = t.split(/\s+/), s = 0; s < n.length; s++) a.push("." + n[s]);
      var l = ["type", "name", "title", "alt"];
      for (s = 0; s < l.length; s++)
        (i = l[s]),
          (r = o.getAttribute(i)) && a.push("[" + i + '="' + r + '"]');
      return a.join("");
    }
    var ut = Date.now(),
      ht = 0,
      dt = {
        now: function () {
          var e = Date.now() - ut;
          return e < ht && (e = ht), (ht = e), e;
        },
        timeOrigin: ut,
      },
      pt = (function () {
        if (Ze())
          try {
            return ((e = module), (t = "perf_hooks"), e.require(t)).performance;
          } catch (e) {
            return dt;
          }
        var e,
          t,
          n = tt().performance;
        return n && n.now
          ? (void 0 === n.timeOrigin &&
              (n.timeOrigin = (n.timing && n.timing.navigationStart) || ut),
            n)
          : dt;
      })();
    function ft() {
      return (pt.timeOrigin + pt.now()) / 1e3;
    }
    function mt(e, t) {
      if (!t) return 6e4;
      var n = parseInt("" + t, 10);
      if (!isNaN(n)) return 1e3 * n;
      var i = Date.parse("" + t);
      return isNaN(i) ? 6e4 : i - e;
    }
    var gt = "<anonymous>";
    function yt(e) {
      try {
        return (e && "function" == typeof e && e.name) || gt;
      } catch (e) {
        return gt;
      }
    }
    var bt = tt(),
      vt = "Sentry Logger ",
      wt = (function () {
        function e() {
          this._enabled = !1;
        }
        return (
          (e.prototype.disable = function () {
            this._enabled = !1;
          }),
          (e.prototype.enable = function () {
            this._enabled = !0;
          }),
          (e.prototype.log = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._enabled &&
              st(function () {
                bt.console.log(vt + "[Log]: " + e.join(" "));
              });
          }),
          (e.prototype.warn = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._enabled &&
              st(function () {
                bt.console.warn(vt + "[Warn]: " + e.join(" "));
              });
          }),
          (e.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            this._enabled &&
              st(function () {
                bt.console.error(vt + "[Error]: " + e.join(" "));
              });
          }),
          e
        );
      })();
    bt.__SENTRY__ = bt.__SENTRY__ || {};
    var _t,
      kt = bt.__SENTRY__.logger || (bt.__SENTRY__.logger = new wt()),
      Et = (function () {
        function e() {
          (this._hasWeakSet = "function" == typeof WeakSet),
            (this._inner = this._hasWeakSet ? new WeakSet() : []);
        }
        return (
          (e.prototype.memoize = function (e) {
            if (this._hasWeakSet)
              return !!this._inner.has(e) || (this._inner.add(e), !1);
            for (var t = 0; t < this._inner.length; t++) {
              if (this._inner[t] === e) return !0;
            }
            return this._inner.push(e), !1;
          }),
          (e.prototype.unmemoize = function (e) {
            if (this._hasWeakSet) this._inner.delete(e);
            else
              for (var t = 0; t < this._inner.length; t++)
                if (this._inner[t] === e) {
                  this._inner.splice(t, 1);
                  break;
                }
          }),
          e
        );
      })();
    function Tt(e, t, n) {
      if (t in e) {
        var i = e[t],
          r = n(i);
        if ("function" == typeof r)
          try {
            (r.prototype = r.prototype || {}),
              Object.defineProperties(r, {
                __sentry_original__: { enumerable: !1, value: i },
              });
          } catch (e) {}
        e[t] = r;
      }
    }
    function St(e) {
      if (p(e)) {
        var t = e,
          n = { message: t.message, name: t.name, stack: t.stack };
        for (var i in t)
          Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
        return n;
      }
      if (v(e)) {
        var r = e,
          s = {};
        s.type = r.type;
        try {
          s.target = w(r.target)
            ? lt(r.target)
            : Object.prototype.toString.call(r.target);
        } catch (e) {
          s.target = "<unknown>";
        }
        try {
          s.currentTarget = w(r.currentTarget)
            ? lt(r.currentTarget)
            : Object.prototype.toString.call(r.currentTarget);
        } catch (e) {
          s.currentTarget = "<unknown>";
        }
        for (var i in ("undefined" != typeof CustomEvent &&
          k(e, CustomEvent) &&
          (s.detail = r.detail),
        r))
          Object.prototype.hasOwnProperty.call(r, i) && (s[i] = r);
        return s;
      }
      return e;
    }
    function xt(e) {
      return (function (e) {
        return ~-encodeURI(e).split(/%..|./).length;
      })(JSON.stringify(e));
    }
    function Ct(e, t, n) {
      void 0 === t && (t = 3), void 0 === n && (n = 102400);
      var i = Ot(e, t);
      return xt(i) > n ? Ct(e, t - 1, n) : i;
    }
    function At(e, t) {
      return "domain" === t && e && "object" == typeof e && e._events
        ? "[Domain]"
        : "domainEmitter" === t
        ? "[DomainEmitter]"
        : "undefined" != typeof global && e === global
        ? "[Global]"
        : "undefined" != typeof window && e === window
        ? "[Window]"
        : "undefined" != typeof document && e === document
        ? "[Document]"
        : b((n = e)) &&
          "nativeEvent" in n &&
          "preventDefault" in n &&
          "stopPropagation" in n
        ? "[SyntheticEvent]"
        : "number" == typeof e && e != e
        ? "[NaN]"
        : void 0 === e
        ? "[undefined]"
        : "function" == typeof e
        ? "[Function: " + yt(e) + "]"
        : e;
      var n;
    }
    function Pt(e, t, n, i) {
      if (
        (void 0 === n && (n = 1 / 0), void 0 === i && (i = new Et()), 0 === n)
      )
        return (function (e) {
          var t = Object.prototype.toString.call(e);
          if ("string" == typeof e) return e;
          if ("[object Object]" === t) return "[Object]";
          if ("[object Array]" === t) return "[Array]";
          var n = At(e);
          return y(n) ? n : t;
        })(t);
      if (null != t && "function" == typeof t.toJSON) return t.toJSON();
      var r = At(t, e);
      if (y(r)) return r;
      var s = St(t),
        o = Array.isArray(t) ? [] : {};
      if (i.memoize(t)) return "[Circular ~]";
      for (var a in s)
        Object.prototype.hasOwnProperty.call(s, a) &&
          (o[a] = Pt(a, s[a], n - 1, i));
      return i.unmemoize(t), o;
    }
    function Ot(e, t) {
      try {
        return JSON.parse(
          JSON.stringify(e, function (e, n) {
            return Pt(e, n, t);
          })
        );
      } catch (e) {
        return "**non-serializable**";
      }
    }
    function jt(e, t) {
      void 0 === t && (t = 40);
      var n = Object.keys(St(e));
      if ((n.sort(), !n.length)) return "[object has no keys]";
      if (n[0].length >= t) return Xe(n[0], t);
      for (var i = n.length; i > 0; i--) {
        var r = n.slice(0, i).join(", ");
        if (!(r.length > t)) return i === n.length ? r : Xe(r, t);
      }
      return "";
    }
    !(function (e) {
      (e.PENDING = "PENDING"),
        (e.RESOLVED = "RESOLVED"),
        (e.REJECTED = "REJECTED");
    })(_t || (_t = {}));
    var It = (function () {
        function e(e) {
          var t = this;
          (this._state = _t.PENDING),
            (this._handlers = []),
            (this._resolve = function (e) {
              t._setResult(_t.RESOLVED, e);
            }),
            (this._reject = function (e) {
              t._setResult(_t.REJECTED, e);
            }),
            (this._setResult = function (e, n) {
              t._state === _t.PENDING &&
                (_(n)
                  ? n.then(t._resolve, t._reject)
                  : ((t._state = e), (t._value = n), t._executeHandlers()));
            }),
            (this._attachHandler = function (e) {
              (t._handlers = t._handlers.concat(e)), t._executeHandlers();
            }),
            (this._executeHandlers = function () {
              if (t._state !== _t.PENDING) {
                var e = t._handlers.slice();
                (t._handlers = []),
                  e.forEach(function (e) {
                    e.done ||
                      (t._state === _t.RESOLVED &&
                        e.onfulfilled &&
                        e.onfulfilled(t._value),
                      t._state === _t.REJECTED &&
                        e.onrejected &&
                        e.onrejected(t._value),
                      (e.done = !0));
                  });
              }
            });
          try {
            e(this._resolve, this._reject);
          } catch (e) {
            this._reject(e);
          }
        }
        return (
          (e.resolve = function (t) {
            return new e(function (e) {
              e(t);
            });
          }),
          (e.reject = function (t) {
            return new e(function (e, n) {
              n(t);
            });
          }),
          (e.all = function (t) {
            return new e(function (n, i) {
              if (Array.isArray(t))
                if (0 !== t.length) {
                  var r = t.length,
                    s = [];
                  t.forEach(function (t, o) {
                    e.resolve(t)
                      .then(function (e) {
                        (s[o] = e), 0 === (r -= 1) && n(s);
                      })
                      .then(null, i);
                  });
                } else n([]);
              else i(new TypeError("Promise.all requires an array as input."));
            });
          }),
          (e.prototype.then = function (t, n) {
            var i = this;
            return new e(function (e, r) {
              i._attachHandler({
                done: !1,
                onfulfilled: function (n) {
                  if (t)
                    try {
                      return void e(t(n));
                    } catch (e) {
                      return void r(e);
                    }
                  else e(n);
                },
                onrejected: function (t) {
                  if (n)
                    try {
                      return void e(n(t));
                    } catch (e) {
                      return void r(e);
                    }
                  else r(t);
                },
              });
            });
          }),
          (e.prototype.catch = function (e) {
            return this.then(function (e) {
              return e;
            }, e);
          }),
          (e.prototype.finally = function (t) {
            var n = this;
            return new e(function (e, i) {
              var r, s;
              return n
                .then(
                  function (e) {
                    (s = !1), (r = e), t && t();
                  },
                  function (e) {
                    (s = !0), (r = e), t && t();
                  }
                )
                .then(function () {
                  s ? i(r) : e(r);
                });
            });
          }),
          (e.prototype.toString = function () {
            return "[object SyncPromise]";
          }),
          e
        );
      })(),
      Nt = (function () {
        function e(e) {
          (this._limit = e), (this._buffer = []);
        }
        return (
          (e.prototype.isReady = function () {
            return void 0 === this._limit || this.length() < this._limit;
          }),
          (e.prototype.add = function (e) {
            var t = this;
            return this.isReady()
              ? (-1 === this._buffer.indexOf(e) && this._buffer.push(e),
                e
                  .then(function () {
                    return t.remove(e);
                  })
                  .then(null, function () {
                    return t.remove(e).then(null, function () {});
                  }),
                e)
              : It.reject(
                  new d("Not adding Promise due to buffer limit reached.")
                );
          }),
          (e.prototype.remove = function (e) {
            return this._buffer.splice(this._buffer.indexOf(e), 1)[0];
          }),
          (e.prototype.length = function () {
            return this._buffer.length;
          }),
          (e.prototype.drain = function (e) {
            var t = this;
            return new It(function (n) {
              var i = setTimeout(function () {
                e && e > 0 && n(!1);
              }, e);
              It.all(t._buffer)
                .then(function () {
                  clearTimeout(i), n(!0);
                })
                .then(null, function () {
                  n(!0);
                });
            });
          }),
          e
        );
      })();
    function Lt() {
      if (!("fetch" in tt())) return !1;
      try {
        return new Headers(), new Request(""), new Response(), !0;
      } catch (e) {
        return !1;
      }
    }
    function Mt(e) {
      return (
        e &&
        /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
      );
    }
    function Rt() {
      if (!Lt()) return !1;
      try {
        return new Request("_", { referrerPolicy: "origin" }), !0;
      } catch (e) {
        return !1;
      }
    }
    var Dt,
      Ut = tt(),
      Ft = {},
      $t = {};
    function qt(e) {
      if (!$t[e])
        switch ((($t[e] = !0), e)) {
          case "console":
            !(function () {
              if (!("console" in Ut)) return;
              ["debug", "info", "warn", "error", "log", "assert"].forEach(
                function (e) {
                  e in Ut.console &&
                    Tt(Ut.console, e, function (t) {
                      return function () {
                        for (var n = [], i = 0; i < arguments.length; i++)
                          n[i] = arguments[i];
                        Bt("console", { args: n, level: e }),
                          t && Function.prototype.apply.call(t, Ut.console, n);
                      };
                    });
                }
              );
            })();
            break;
          case "dom":
            !(function () {
              if (!("document" in Ut)) return;
              Ut.document.addEventListener(
                "click",
                Jt("click", Bt.bind(null, "dom")),
                !1
              ),
                Ut.document.addEventListener(
                  "keypress",
                  Xt(Bt.bind(null, "dom")),
                  !1
                ),
                ["EventTarget", "Node"].forEach(function (e) {
                  var t = Ut[e] && Ut[e].prototype;
                  t &&
                    t.hasOwnProperty &&
                    t.hasOwnProperty("addEventListener") &&
                    (Tt(t, "addEventListener", function (e) {
                      return function (t, n, i) {
                        return (
                          n && n.handleEvent
                            ? ("click" === t &&
                                Tt(n, "handleEvent", function (e) {
                                  return function (t) {
                                    return (
                                      Jt("click", Bt.bind(null, "dom"))(t),
                                      e.call(this, t)
                                    );
                                  };
                                }),
                              "keypress" === t &&
                                Tt(n, "handleEvent", function (e) {
                                  return function (t) {
                                    return (
                                      Xt(Bt.bind(null, "dom"))(t),
                                      e.call(this, t)
                                    );
                                  };
                                }))
                            : ("click" === t &&
                                Jt("click", Bt.bind(null, "dom"), !0)(this),
                              "keypress" === t &&
                                Xt(Bt.bind(null, "dom"))(this)),
                          e.call(this, t, n, i)
                        );
                      };
                    }),
                    Tt(t, "removeEventListener", function (e) {
                      return function (t, n, i) {
                        try {
                          e.call(this, t, n.__sentry_wrapped__, i);
                        } catch (e) {}
                        return e.call(this, t, n, i);
                      };
                    }));
                });
            })();
            break;
          case "xhr":
            !(function () {
              if (!("XMLHttpRequest" in Ut)) return;
              var e = XMLHttpRequest.prototype;
              Tt(e, "open", function (e) {
                return function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  var i = this,
                    r = t[1];
                  (i.__sentry_xhr__ = {
                    method: g(t[0]) ? t[0].toUpperCase() : t[0],
                    url: t[1],
                  }),
                    g(r) &&
                      "POST" === i.__sentry_xhr__.method &&
                      r.match(/sentry_key/) &&
                      (i.__sentry_own_request__ = !0);
                  var s = function () {
                    if (4 === i.readyState) {
                      try {
                        i.__sentry_xhr__ &&
                          (i.__sentry_xhr__.status_code = i.status);
                      } catch (e) {}
                      Bt("xhr", {
                        args: t,
                        endTimestamp: Date.now(),
                        startTimestamp: Date.now(),
                        xhr: i,
                      });
                    }
                  };
                  return (
                    "onreadystatechange" in i &&
                    "function" == typeof i.onreadystatechange
                      ? Tt(i, "onreadystatechange", function (e) {
                          return function () {
                            for (var t = [], n = 0; n < arguments.length; n++)
                              t[n] = arguments[n];
                            return s(), e.apply(i, t);
                          };
                        })
                      : i.addEventListener("readystatechange", s),
                    e.apply(i, t)
                  );
                };
              }),
                Tt(e, "send", function (e) {
                  return function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    return (
                      Bt("xhr", {
                        args: t,
                        startTimestamp: Date.now(),
                        xhr: this,
                      }),
                      e.apply(this, t)
                    );
                  };
                });
            })();
            break;
          case "fetch":
            !(function () {
              if (
                !(function () {
                  if (!Lt()) return !1;
                  var e = tt();
                  if (Mt(e.fetch)) return !0;
                  var t = !1,
                    n = e.document;
                  if (n && "function" == typeof n.createElement)
                    try {
                      var i = n.createElement("iframe");
                      (i.hidden = !0),
                        n.head.appendChild(i),
                        i.contentWindow &&
                          i.contentWindow.fetch &&
                          (t = Mt(i.contentWindow.fetch)),
                        n.head.removeChild(i);
                    } catch (e) {
                      kt.warn(
                        "Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",
                        e
                      );
                    }
                  return t;
                })()
              )
                return;
              Tt(Ut, "fetch", function (e) {
                return function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  var i = {
                    args: t,
                    fetchData: { method: Vt(t), url: Wt(t) },
                    startTimestamp: Date.now(),
                  };
                  return (
                    Bt("fetch", l({}, i)),
                    e.apply(Ut, t).then(
                      function (e) {
                        return (
                          Bt(
                            "fetch",
                            l(l({}, i), {
                              endTimestamp: Date.now(),
                              response: e,
                            })
                          ),
                          e
                        );
                      },
                      function (e) {
                        throw (
                          (Bt(
                            "fetch",
                            l(l({}, i), { endTimestamp: Date.now(), error: e })
                          ),
                          e)
                        );
                      }
                    )
                  );
                };
              });
            })();
            break;
          case "history":
            !(function () {
              if (
                !(function () {
                  var e = tt(),
                    t = e.chrome,
                    n = t && t.app && t.app.runtime,
                    i =
                      "history" in e &&
                      !!e.history.pushState &&
                      !!e.history.replaceState;
                  return !n && i;
                })()
              )
                return;
              var e = Ut.onpopstate;
              function t(e) {
                return function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  var i = t.length > 2 ? t[2] : void 0;
                  if (i) {
                    var r = Dt,
                      s = String(i);
                    (Dt = s), Bt("history", { from: r, to: s });
                  }
                  return e.apply(this, t);
                };
              }
              (Ut.onpopstate = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n];
                var i = Ut.location.href,
                  r = Dt;
                if (((Dt = i), Bt("history", { from: r, to: i }), e))
                  return e.apply(this, t);
              }),
                Tt(Ut.history, "pushState", t),
                Tt(Ut.history, "replaceState", t);
            })();
            break;
          case "error":
            (Gt = Ut.onerror),
              (Ut.onerror = function (e, t, n, i, r) {
                return (
                  Bt("error", { column: i, error: r, line: n, msg: e, url: t }),
                  !!Gt && Gt.apply(this, arguments)
                );
              });
            break;
          case "unhandledrejection":
            (Qt = Ut.onunhandledrejection),
              (Ut.onunhandledrejection = function (e) {
                return (
                  Bt("unhandledrejection", e), !Qt || Qt.apply(this, arguments)
                );
              });
            break;
          default:
            kt.warn("unknown instrumentation type:", e);
        }
    }
    function Ht(e) {
      e &&
        "string" == typeof e.type &&
        "function" == typeof e.callback &&
        ((Ft[e.type] = Ft[e.type] || []),
        Ft[e.type].push(e.callback),
        qt(e.type));
    }
    function Bt(e, t) {
      var n, i;
      if (e && Ft[e])
        try {
          for (
            var r = (function (e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  n = t && e[t],
                  i = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length)
                  return {
                    next: function () {
                      return (
                        e && i >= e.length && (e = void 0),
                        { value: e && e[i++], done: !e }
                      );
                    },
                  };
                throw new TypeError(
                  t
                    ? "Object is not iterable."
                    : "Symbol.iterator is not defined."
                );
              })(Ft[e] || []),
              s = r.next();
            !s.done;
            s = r.next()
          ) {
            var o = s.value;
            try {
              o(t);
            } catch (t) {
              kt.error(
                "Error while triggering instrumentation handler.\nType: " +
                  e +
                  "\nName: " +
                  yt(o) +
                  "\nError: " +
                  t
              );
            }
          }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            s && !s.done && (i = r.return) && i.call(r);
          } finally {
            if (n) throw n.error;
          }
        }
    }
    function Vt(e) {
      return (
        void 0 === e && (e = []),
        "Request" in Ut && k(e[0], Request) && e[0].method
          ? String(e[0].method).toUpperCase()
          : e[1] && e[1].method
          ? String(e[1].method).toUpperCase()
          : "GET"
      );
    }
    function Wt(e) {
      return (
        void 0 === e && (e = []),
        "string" == typeof e[0]
          ? e[0]
          : "Request" in Ut && k(e[0], Request)
          ? e[0].url
          : String(e[0])
      );
    }
    var zt,
      Yt,
      Kt = 0;
    function Jt(e, t, n) {
      return (
        void 0 === n && (n = !1),
        function (i) {
          (zt = void 0),
            i &&
              Yt !== i &&
              ((Yt = i),
              Kt && clearTimeout(Kt),
              n
                ? (Kt = setTimeout(function () {
                    t({ event: i, name: e });
                  }))
                : t({ event: i, name: e }));
        }
      );
    }
    function Xt(e) {
      return function (t) {
        var n;
        try {
          n = t.target;
        } catch (e) {
          return;
        }
        var i = n && n.tagName;
        i &&
          ("INPUT" === i || "TEXTAREA" === i || n.isContentEditable) &&
          (zt || Jt("input", e)(t),
          clearTimeout(zt),
          (zt = setTimeout(function () {
            zt = void 0;
          }, 1e3)));
      };
    }
    var Gt = null;
    var Qt = null;
    var Zt = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
      en = "Invalid Dsn",
      tn = (function () {
        function e(e) {
          "string" == typeof e ? this._fromString(e) : this._fromComponents(e),
            this._validate();
        }
        return (
          (e.prototype.toString = function (e) {
            void 0 === e && (e = !1);
            var t = this,
              n = t.host,
              i = t.path,
              r = t.pass,
              s = t.port,
              o = t.projectId;
            return (
              t.protocol +
              "://" +
              t.user +
              (e && r ? ":" + r : "") +
              "@" +
              n +
              (s ? ":" + s : "") +
              "/" +
              (i ? i + "/" : i) +
              o
            );
          }),
          (e.prototype._fromString = function (e) {
            var t = Zt.exec(e);
            if (!t) throw new d(en);
            var n = c(t.slice(1), 6),
              i = n[0],
              r = n[1],
              s = n[2],
              o = void 0 === s ? "" : s,
              a = n[3],
              l = n[4],
              u = void 0 === l ? "" : l,
              h = "",
              p = n[5],
              f = p.split("/");
            if (
              (f.length > 1 && ((h = f.slice(0, -1).join("/")), (p = f.pop())),
              p)
            ) {
              var m = p.match(/^\d+/);
              m && (p = m[0]);
            }
            this._fromComponents({
              host: a,
              pass: o,
              path: h,
              projectId: p,
              port: u,
              protocol: i,
              user: r,
            });
          }),
          (e.prototype._fromComponents = function (e) {
            (this.protocol = e.protocol),
              (this.user = e.user),
              (this.pass = e.pass || ""),
              (this.host = e.host),
              (this.port = e.port || ""),
              (this.path = e.path || ""),
              (this.projectId = e.projectId);
          }),
          (e.prototype._validate = function () {
            var e = this;
            if (
              (["protocol", "user", "host", "projectId"].forEach(function (t) {
                if (!e[t]) throw new d("Invalid Dsn: " + t + " missing");
              }),
              !this.projectId.match(/^\d+$/))
            )
              throw new d("Invalid Dsn: Invalid projectId " + this.projectId);
            if ("http" !== this.protocol && "https" !== this.protocol)
              throw new d("Invalid Dsn: Invalid protocol " + this.protocol);
            if (this.port && isNaN(parseInt(this.port, 10)))
              throw new d("Invalid Dsn: Invalid port " + this.port);
          }),
          e
        );
      })(),
      nn = (function () {
        function e() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {});
        }
        return (
          (e.clone = function (t) {
            var n = new e();
            return (
              t &&
                ((n._breadcrumbs = u(t._breadcrumbs)),
                (n._tags = l({}, t._tags)),
                (n._extra = l({}, t._extra)),
                (n._contexts = l({}, t._contexts)),
                (n._user = t._user),
                (n._level = t._level),
                (n._span = t._span),
                (n._transactionName = t._transactionName),
                (n._fingerprint = t._fingerprint),
                (n._eventProcessors = u(t._eventProcessors))),
              n
            );
          }),
          (e.prototype.addScopeListener = function (e) {
            this._scopeListeners.push(e);
          }),
          (e.prototype.addEventProcessor = function (e) {
            return this._eventProcessors.push(e), this;
          }),
          (e.prototype.setUser = function (e) {
            return (this._user = e || {}), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setTags = function (e) {
            return (
              (this._tags = l(l({}, this._tags), e)),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.setTag = function (e, t) {
            var n;
            return (
              (this._tags = l(l({}, this._tags), (((n = {})[e] = t), n))),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.setExtras = function (e) {
            return (
              (this._extra = l(l({}, this._extra), e)),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.setExtra = function (e, t) {
            var n;
            return (
              (this._extra = l(l({}, this._extra), (((n = {})[e] = t), n))),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.setFingerprint = function (e) {
            return (this._fingerprint = e), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setLevel = function (e) {
            return (this._level = e), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setTransactionName = function (e) {
            return (
              (this._transactionName = e), this._notifyScopeListeners(), this
            );
          }),
          (e.prototype.setTransaction = function (e) {
            return this.setTransactionName(e);
          }),
          (e.prototype.setContext = function (e, t) {
            var n;
            return (
              (this._contexts = l(
                l({}, this._contexts),
                (((n = {})[e] = t), n)
              )),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.setSpan = function (e) {
            return (this._span = e), this._notifyScopeListeners(), this;
          }),
          (e.prototype.getSpan = function () {
            return this._span;
          }),
          (e.prototype.getTransaction = function () {
            var e = this.getSpan();
            if (e && e.spanRecorder && e.spanRecorder.spans[0])
              return e.spanRecorder.spans[0];
          }),
          (e.prototype.update = function (t) {
            if (!t) return this;
            if ("function" == typeof t) {
              var n = t(this);
              return n instanceof e ? n : this;
            }
            return (
              t instanceof e
                ? ((this._tags = l(l({}, this._tags), t._tags)),
                  (this._extra = l(l({}, this._extra), t._extra)),
                  (this._contexts = l(l({}, this._contexts), t._contexts)),
                  t._user && (this._user = t._user),
                  t._level && (this._level = t._level),
                  t._fingerprint && (this._fingerprint = t._fingerprint))
                : b(t) &&
                  ((t = t),
                  (this._tags = l(l({}, this._tags), t.tags)),
                  (this._extra = l(l({}, this._extra), t.extra)),
                  (this._contexts = l(l({}, this._contexts), t.contexts)),
                  t.user && (this._user = t.user),
                  t.level && (this._level = t.level),
                  t.fingerprint && (this._fingerprint = t.fingerprint)),
              this
            );
          }),
          (e.prototype.clear = function () {
            return (
              (this._breadcrumbs = []),
              (this._tags = {}),
              (this._extra = {}),
              (this._user = {}),
              (this._contexts = {}),
              (this._level = void 0),
              (this._transactionName = void 0),
              (this._fingerprint = void 0),
              (this._span = void 0),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.addBreadcrumb = function (e, t) {
            var n = l({ timestamp: ft() }, e);
            return (
              (this._breadcrumbs =
                void 0 !== t && t >= 0
                  ? u(this._breadcrumbs, [n]).slice(-t)
                  : u(this._breadcrumbs, [n])),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.clearBreadcrumbs = function () {
            return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
          }),
          (e.prototype.applyToEvent = function (e, t) {
            return (
              this._extra &&
                Object.keys(this._extra).length &&
                (e.extra = l(l({}, this._extra), e.extra)),
              this._tags &&
                Object.keys(this._tags).length &&
                (e.tags = l(l({}, this._tags), e.tags)),
              this._user &&
                Object.keys(this._user).length &&
                (e.user = l(l({}, this._user), e.user)),
              this._contexts &&
                Object.keys(this._contexts).length &&
                (e.contexts = l(l({}, this._contexts), e.contexts)),
              this._level && (e.level = this._level),
              this._transactionName && (e.transaction = this._transactionName),
              this._span &&
                (e.contexts = l(
                  { trace: this._span.getTraceContext() },
                  e.contexts
                )),
              this._applyFingerprint(e),
              (e.breadcrumbs = u(e.breadcrumbs || [], this._breadcrumbs)),
              (e.breadcrumbs =
                e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0),
              this._notifyEventProcessors(u(rn(), this._eventProcessors), e, t)
            );
          }),
          (e.prototype._notifyEventProcessors = function (e, t, n, i) {
            var r = this;
            return (
              void 0 === i && (i = 0),
              new It(function (s, o) {
                var a = e[i];
                if (null === t || "function" != typeof a) s(t);
                else {
                  var c = a(l({}, t), n);
                  _(c)
                    ? c
                        .then(function (t) {
                          return r
                            ._notifyEventProcessors(e, t, n, i + 1)
                            .then(s);
                        })
                        .then(null, o)
                    : r
                        ._notifyEventProcessors(e, c, n, i + 1)
                        .then(s)
                        .then(null, o);
                }
              })
            );
          }),
          (e.prototype._notifyScopeListeners = function () {
            var e = this;
            this._notifyingListeners ||
              ((this._notifyingListeners = !0),
              setTimeout(function () {
                e._scopeListeners.forEach(function (t) {
                  t(e);
                }),
                  (e._notifyingListeners = !1);
              }));
          }),
          (e.prototype._applyFingerprint = function (e) {
            (e.fingerprint = e.fingerprint
              ? Array.isArray(e.fingerprint)
                ? e.fingerprint
                : [e.fingerprint]
              : []),
              this._fingerprint &&
                (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
              e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
          }),
          e
        );
      })();
    function rn() {
      var e = tt();
      return (
        (e.__SENTRY__ = e.__SENTRY__ || {}),
        (e.__SENTRY__.globalEventProcessors =
          e.__SENTRY__.globalEventProcessors || []),
        e.__SENTRY__.globalEventProcessors
      );
    }
    function sn(e) {
      rn().push(e);
    }
    var on = (function () {
      function e(e, t, n) {
        void 0 === t && (t = new nn()),
          void 0 === n && (n = 3),
          (this._version = n),
          (this._stack = []),
          this._stack.push({ client: e, scope: t }),
          this.bindClient(e);
      }
      return (
        (e.prototype.isOlderThan = function (e) {
          return this._version < e;
        }),
        (e.prototype.bindClient = function (e) {
          (this.getStackTop().client = e),
            e && e.setupIntegrations && e.setupIntegrations();
        }),
        (e.prototype.pushScope = function () {
          var e = this.getStack(),
            t = e.length > 0 ? e[e.length - 1].scope : void 0,
            n = nn.clone(t);
          return (
            this.getStack().push({ client: this.getClient(), scope: n }), n
          );
        }),
        (e.prototype.popScope = function () {
          return void 0 !== this.getStack().pop();
        }),
        (e.prototype.withScope = function (e) {
          var t = this.pushScope();
          try {
            e(t);
          } finally {
            this.popScope();
          }
        }),
        (e.prototype.getClient = function () {
          return this.getStackTop().client;
        }),
        (e.prototype.getScope = function () {
          return this.getStackTop().scope;
        }),
        (e.prototype.getStack = function () {
          return this._stack;
        }),
        (e.prototype.getStackTop = function () {
          return this._stack[this._stack.length - 1];
        }),
        (e.prototype.captureException = function (e, t) {
          var n = (this._lastEventId = nt()),
            i = t;
          if (!t) {
            var r = void 0;
            try {
              throw new Error("Sentry syntheticException");
            } catch (e) {
              r = e;
            }
            i = { originalException: e, syntheticException: r };
          }
          return (
            this._invokeClient(
              "captureException",
              e,
              l(l({}, i), { event_id: n })
            ),
            n
          );
        }),
        (e.prototype.captureMessage = function (e, t, n) {
          var i = (this._lastEventId = nt()),
            r = n;
          if (!n) {
            var s = void 0;
            try {
              throw new Error(e);
            } catch (e) {
              s = e;
            }
            r = { originalException: e, syntheticException: s };
          }
          return (
            this._invokeClient(
              "captureMessage",
              e,
              t,
              l(l({}, r), { event_id: i })
            ),
            i
          );
        }),
        (e.prototype.captureEvent = function (e, t) {
          var n = (this._lastEventId = nt());
          return (
            this._invokeClient("captureEvent", e, l(l({}, t), { event_id: n })),
            n
          );
        }),
        (e.prototype.lastEventId = function () {
          return this._lastEventId;
        }),
        (e.prototype.addBreadcrumb = function (e, t) {
          var n = this.getStackTop();
          if (n.scope && n.client) {
            var i = (n.client.getOptions && n.client.getOptions()) || {},
              r = i.beforeBreadcrumb,
              s = void 0 === r ? null : r,
              o = i.maxBreadcrumbs,
              a = void 0 === o ? 100 : o;
            if (!(a <= 0)) {
              var c = ft(),
                u = l({ timestamp: c }, e),
                h = s
                  ? st(function () {
                      return s(u, t);
                    })
                  : u;
              null !== h && n.scope.addBreadcrumb(h, Math.min(a, 100));
            }
          }
        }),
        (e.prototype.setUser = function (e) {
          var t = this.getStackTop();
          t.scope && t.scope.setUser(e);
        }),
        (e.prototype.setTags = function (e) {
          var t = this.getStackTop();
          t.scope && t.scope.setTags(e);
        }),
        (e.prototype.setExtras = function (e) {
          var t = this.getStackTop();
          t.scope && t.scope.setExtras(e);
        }),
        (e.prototype.setTag = function (e, t) {
          var n = this.getStackTop();
          n.scope && n.scope.setTag(e, t);
        }),
        (e.prototype.setExtra = function (e, t) {
          var n = this.getStackTop();
          n.scope && n.scope.setExtra(e, t);
        }),
        (e.prototype.setContext = function (e, t) {
          var n = this.getStackTop();
          n.scope && n.scope.setContext(e, t);
        }),
        (e.prototype.configureScope = function (e) {
          var t = this.getStackTop();
          t.scope && t.client && e(t.scope);
        }),
        (e.prototype.run = function (e) {
          var t = ln(this);
          try {
            e(this);
          } finally {
            ln(t);
          }
        }),
        (e.prototype.getIntegration = function (e) {
          var t = this.getClient();
          if (!t) return null;
          try {
            return t.getIntegration(e);
          } catch (t) {
            return (
              kt.warn(
                "Cannot retrieve integration " + e.id + " from the current Hub"
              ),
              null
            );
          }
        }),
        (e.prototype.startSpan = function (e) {
          return this._callExtensionMethod("startSpan", e);
        }),
        (e.prototype.startTransaction = function (e) {
          return this._callExtensionMethod("startTransaction", e);
        }),
        (e.prototype.traceHeaders = function () {
          return this._callExtensionMethod("traceHeaders");
        }),
        (e.prototype._invokeClient = function (e) {
          for (var t, n = [], i = 1; i < arguments.length; i++)
            n[i - 1] = arguments[i];
          var r = this.getStackTop();
          r &&
            r.client &&
            r.client[e] &&
            (t = r.client)[e].apply(t, u(n, [r.scope]));
        }),
        (e.prototype._callExtensionMethod = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          var i = an(),
            r = i.__SENTRY__;
          if (r && r.extensions && "function" == typeof r.extensions[e])
            return r.extensions[e].apply(this, t);
          kt.warn(
            "Extension method " + e + " couldn't be found, doing nothing."
          );
        }),
        e
      );
    })();
    function an() {
      var e = tt();
      return (
        (e.__SENTRY__ = e.__SENTRY__ || { extensions: {}, hub: void 0 }), e
      );
    }
    function ln(e) {
      var t = an(),
        n = hn(t);
      return dn(t, e), n;
    }
    function cn() {
      var e = an();
      return (
        (un(e) && !hn(e).isOlderThan(3)) || dn(e, new on()),
        Ze()
          ? (function (e) {
              try {
                var t = "domain",
                  n = an().__SENTRY__;
                if (!n || !n.extensions || !n.extensions[t]) return hn(e);
                var i = n.extensions[t].active;
                if (!i) return hn(e);
                if (!un(i) || hn(i).isOlderThan(3)) {
                  var r = hn(e).getStackTop();
                  dn(i, new on(r.client, nn.clone(r.scope)));
                }
                return hn(i);
              } catch (t) {
                return hn(e);
              }
            })(e)
          : hn(e)
      );
    }
    function un(e) {
      return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
    }
    function hn(e) {
      return (
        (e && e.__SENTRY__ && e.__SENTRY__.hub) ||
          ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = new on())),
        e.__SENTRY__.hub
      );
    }
    function dn(e, t) {
      return (
        !!e && ((e.__SENTRY__ = e.__SENTRY__ || {}), (e.__SENTRY__.hub = t), !0)
      );
    }
    function pn(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var i = cn();
      if (i && i[e]) return i[e].apply(i, u(t));
      throw new Error(
        "No hub defined or " +
          e +
          " was not found on the hub, please open a bug report."
      );
    }
    function fn(e, t) {
      var n;
      try {
        throw new Error("Sentry syntheticException");
      } catch (e) {
        n = e;
      }
      return pn("captureException", e, {
        captureContext: t,
        originalException: e,
        syntheticException: n,
      });
    }
    function mn(e) {
      pn("withScope", e);
    }
    var gn = (function () {
        function e(e) {
          (this.dsn = e), (this._dsnObject = new tn(e));
        }
        return (
          (e.prototype.getDsn = function () {
            return this._dsnObject;
          }),
          (e.prototype.getBaseApiEndpoint = function () {
            var e = this._dsnObject,
              t = e.protocol ? e.protocol + ":" : "",
              n = e.port ? ":" + e.port : "";
            return (
              t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
            );
          }),
          (e.prototype.getStoreEndpoint = function () {
            return this._getIngestEndpoint("store");
          }),
          (e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
            return this.getStoreEndpoint() + "?" + this._encodedAuth();
          }),
          (e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
            return this._getEnvelopeEndpoint() + "?" + this._encodedAuth();
          }),
          (e.prototype.getStoreEndpointPath = function () {
            var e = this._dsnObject;
            return (
              (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
            );
          }),
          (e.prototype.getRequestHeaders = function (e, t) {
            var n = this._dsnObject,
              i = ["Sentry sentry_version=7"];
            return (
              i.push("sentry_client=" + e + "/" + t),
              i.push("sentry_key=" + n.user),
              n.pass && i.push("sentry_secret=" + n.pass),
              {
                "Content-Type": "application/json",
                "X-Sentry-Auth": i.join(", "),
              }
            );
          }),
          (e.prototype.getReportDialogEndpoint = function (e) {
            void 0 === e && (e = {});
            var t = this._dsnObject,
              n = this.getBaseApiEndpoint() + "embed/error-page/",
              i = [];
            for (var r in (i.push("dsn=" + t.toString()), e))
              if ("user" === r) {
                if (!e.user) continue;
                e.user.name &&
                  i.push("name=" + encodeURIComponent(e.user.name)),
                  e.user.email &&
                    i.push("email=" + encodeURIComponent(e.user.email));
              } else
                i.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
            return i.length ? n + "?" + i.join("&") : n;
          }),
          (e.prototype._getEnvelopeEndpoint = function () {
            return this._getIngestEndpoint("envelope");
          }),
          (e.prototype._getIngestEndpoint = function (e) {
            return (
              "" +
              this.getBaseApiEndpoint() +
              this._dsnObject.projectId +
              "/" +
              e +
              "/"
            );
          }),
          (e.prototype._encodedAuth = function () {
            var e,
              t = { sentry_key: this._dsnObject.user, sentry_version: "7" };
            return (
              (e = t),
              Object.keys(e)
                .map(function (t) {
                  return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
                })
                .join("&")
            );
          }),
          e
        );
      })(),
      yn = [];
    function bn(e) {
      var t = {};
      return (
        (function (e) {
          var t = (e.defaultIntegrations && u(e.defaultIntegrations)) || [],
            n = e.integrations,
            i = [];
          if (Array.isArray(n)) {
            var r = n.map(function (e) {
                return e.name;
              }),
              s = [];
            t.forEach(function (e) {
              -1 === r.indexOf(e.name) &&
                -1 === s.indexOf(e.name) &&
                (i.push(e), s.push(e.name));
            }),
              n.forEach(function (e) {
                -1 === s.indexOf(e.name) && (i.push(e), s.push(e.name));
              });
          } else
            "function" == typeof n
              ? ((i = n(t)), (i = Array.isArray(i) ? i : [i]))
              : (i = u(t));
          var o = i.map(function (e) {
              return e.name;
            }),
            a = "Debug";
          return (
            -1 !== o.indexOf(a) &&
              i.push.apply(i, u(i.splice(o.indexOf(a), 1))),
            i
          );
        })(e).forEach(function (e) {
          (t[e.name] = e),
            (function (e) {
              -1 === yn.indexOf(e.name) &&
                (e.setupOnce(sn, cn),
                yn.push(e.name),
                kt.log("Integration installed: " + e.name));
            })(e);
        }),
        t
      );
    }
    var vn,
      wn = (function () {
        function e(e, t) {
          (this._integrations = {}),
            (this._processing = !1),
            (this._backend = new e(t)),
            (this._options = t),
            t.dsn && (this._dsn = new tn(t.dsn));
        }
        return (
          (e.prototype.captureException = function (e, t, n) {
            var i = this,
              r = t && t.event_id;
            return (
              (this._processing = !0),
              this._getBackend()
                .eventFromException(e, t)
                .then(function (e) {
                  r = i.captureEvent(e, t, n);
                }),
              r
            );
          }),
          (e.prototype.captureMessage = function (e, t, n, i) {
            var r = this,
              s = n && n.event_id;
            return (
              (this._processing = !0),
              (y(e)
                ? this._getBackend().eventFromMessage("" + e, t, n)
                : this._getBackend().eventFromException(e, n)
              ).then(function (e) {
                s = r.captureEvent(e, n, i);
              }),
              s
            );
          }),
          (e.prototype.captureEvent = function (e, t, n) {
            var i = this,
              r = t && t.event_id;
            return (
              (this._processing = !0),
              this._processEvent(e, t, n)
                .then(function (e) {
                  (r = e && e.event_id), (i._processing = !1);
                })
                .then(null, function (e) {
                  kt.error(e), (i._processing = !1);
                }),
              r
            );
          }),
          (e.prototype.getDsn = function () {
            return this._dsn;
          }),
          (e.prototype.getOptions = function () {
            return this._options;
          }),
          (e.prototype.flush = function (e) {
            var t = this;
            return this._isClientProcessing(e).then(function (n) {
              return (
                clearInterval(n.interval),
                t
                  ._getBackend()
                  .getTransport()
                  .close(e)
                  .then(function (e) {
                    return n.ready && e;
                  })
              );
            });
          }),
          (e.prototype.close = function (e) {
            var t = this;
            return this.flush(e).then(function (e) {
              return (t.getOptions().enabled = !1), e;
            });
          }),
          (e.prototype.setupIntegrations = function () {
            this._isEnabled() && (this._integrations = bn(this._options));
          }),
          (e.prototype.getIntegration = function (e) {
            try {
              return this._integrations[e.id] || null;
            } catch (t) {
              return (
                kt.warn(
                  "Cannot retrieve integration " +
                    e.id +
                    " from the current Client"
                ),
                null
              );
            }
          }),
          (e.prototype._isClientProcessing = function (e) {
            var t = this;
            return new It(function (n) {
              var i = 0,
                r = 0;
              clearInterval(r),
                (r = setInterval(function () {
                  t._processing
                    ? ((i += 1), e && i >= e && n({ interval: r, ready: !1 }))
                    : n({ interval: r, ready: !0 });
                }, 1));
            });
          }),
          (e.prototype._getBackend = function () {
            return this._backend;
          }),
          (e.prototype._isEnabled = function () {
            return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
          }),
          (e.prototype._prepareEvent = function (e, t, n) {
            var i = this,
              r = this.getOptions().normalizeDepth,
              s = void 0 === r ? 3 : r,
              o = l(l({}, e), {
                event_id: e.event_id || (n && n.event_id ? n.event_id : nt()),
                timestamp: e.timestamp || ft(),
              });
            this._applyClientOptions(o), this._applyIntegrationsMetadata(o);
            var a = t;
            n && n.captureContext && (a = nn.clone(a).update(n.captureContext));
            var c = It.resolve(o);
            return (
              a && (c = a.applyToEvent(o, n)),
              c.then(function (e) {
                return "number" == typeof s && s > 0
                  ? i._normalizeEvent(e, s)
                  : e;
              })
            );
          }),
          (e.prototype._normalizeEvent = function (e, t) {
            if (!e) return null;
            var n = l(
              l(
                l(
                  l(
                    l({}, e),
                    e.breadcrumbs && {
                      breadcrumbs: e.breadcrumbs.map(function (e) {
                        return l(l({}, e), e.data && { data: Ot(e.data, t) });
                      }),
                    }
                  ),
                  e.user && { user: Ot(e.user, t) }
                ),
                e.contexts && { contexts: Ot(e.contexts, t) }
              ),
              e.extra && { extra: Ot(e.extra, t) }
            );
            return (
              e.contexts &&
                e.contexts.trace &&
                (n.contexts.trace = e.contexts.trace),
              n
            );
          }),
          (e.prototype._applyClientOptions = function (e) {
            var t = this.getOptions(),
              n = t.environment,
              i = t.release,
              r = t.dist,
              s = t.maxValueLength,
              o = void 0 === s ? 250 : s;
            void 0 === e.environment && void 0 !== n && (e.environment = n),
              void 0 === e.release && void 0 !== i && (e.release = i),
              void 0 === e.dist && void 0 !== r && (e.dist = r),
              e.message && (e.message = Xe(e.message, o));
            var a = e.exception && e.exception.values && e.exception.values[0];
            a && a.value && (a.value = Xe(a.value, o));
            var l = e.request;
            l && l.url && (l.url = Xe(l.url, o));
          }),
          (e.prototype._applyIntegrationsMetadata = function (e) {
            var t = e.sdk,
              n = Object.keys(this._integrations);
            t && n.length > 0 && (t.integrations = n);
          }),
          (e.prototype._sendEvent = function (e) {
            this._getBackend().sendEvent(e);
          }),
          (e.prototype._processEvent = function (e, t, n) {
            var i = this,
              r = this.getOptions(),
              s = r.beforeSend,
              o = r.sampleRate;
            if (!this._isEnabled())
              return It.reject("SDK not enabled, will not send event.");
            var a = "transaction" === e.type;
            return !a && "number" == typeof o && Math.random() > o
              ? It.reject("This event has been sampled, will not send event.")
              : new It(function (r, o) {
                  i._prepareEvent(e, n, t)
                    .then(function (e) {
                      if (null !== e) {
                        var n = e;
                        if (
                          (t && t.data && !0 === t.data.__sentry__) ||
                          !s ||
                          a
                        )
                          return i._sendEvent(n), void r(n);
                        var l = s(e, t);
                        if (void 0 === l)
                          kt.error(
                            "`beforeSend` method has to return `null` or a valid event."
                          );
                        else if (_(l)) i._handleAsyncBeforeSend(l, r, o);
                        else {
                          if (null === (n = l))
                            return (
                              kt.log(
                                "`beforeSend` returned `null`, will not send event."
                              ),
                              void r(null)
                            );
                          i._sendEvent(n), r(n);
                        }
                      } else o("An event processor returned null, will not send event.");
                    })
                    .then(null, function (e) {
                      i.captureException(e, {
                        data: { __sentry__: !0 },
                        originalException: e,
                      }),
                        o(
                          "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " +
                            e
                        );
                    });
                });
          }),
          (e.prototype._handleAsyncBeforeSend = function (e, t, n) {
            var i = this;
            e.then(function (e) {
              null !== e
                ? (i._sendEvent(e), t(e))
                : n("`beforeSend` returned `null`, will not send event.");
            }).then(null, function (e) {
              n("beforeSend rejected with " + e);
            });
          }),
          e
        );
      })(),
      _n = (function () {
        function e() {}
        return (
          (e.prototype.sendEvent = function (e) {
            return It.resolve({
              reason:
                "NoopTransport: Event has been skipped because no Dsn is configured.",
              status: a.Skipped,
            });
          }),
          (e.prototype.close = function (e) {
            return It.resolve(!0);
          }),
          e
        );
      })(),
      kn = (function () {
        function e(e) {
          (this._options = e),
            this._options.dsn ||
              kt.warn("No DSN provided, backend will not do anything."),
            (this._transport = this._setupTransport());
        }
        return (
          (e.prototype.eventFromException = function (e, t) {
            throw new d("Backend has to implement `eventFromException` method");
          }),
          (e.prototype.eventFromMessage = function (e, t, n) {
            throw new d("Backend has to implement `eventFromMessage` method");
          }),
          (e.prototype.sendEvent = function (e) {
            this._transport.sendEvent(e).then(null, function (e) {
              kt.error("Error while sending event: " + e);
            });
          }),
          (e.prototype.getTransport = function () {
            return this._transport;
          }),
          (e.prototype._setupTransport = function () {
            return new _n();
          }),
          e
        );
      })();
    function En(e, t) {
      var n = "transaction" === e.type,
        i = {
          body: JSON.stringify(e),
          url: n
            ? t.getEnvelopeEndpointWithUrlEncodedAuth()
            : t.getStoreEndpointWithUrlEncodedAuth(),
        };
      if (n) {
        var r =
          JSON.stringify({
            event_id: e.event_id,
            sent_at: new Date(1e3 * ft()).toISOString(),
          }) +
          "\n" +
          JSON.stringify({ type: e.type }) +
          "\n" +
          i.body;
        i.body = r;
      }
      return i;
    }
    var Tn = (function () {
        function e() {
          this.name = e.id;
        }
        return (
          (e.prototype.setupOnce = function () {
            (vn = Function.prototype.toString),
              (Function.prototype.toString = function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                var n = this.__sentry_original__ || this;
                return vn.apply(n, e);
              });
          }),
          (e.id = "FunctionToString"),
          e
        );
      })(),
      Sn = [
        /^Script error\.?$/,
        /^Javascript error: Script error\.? on line 0$/,
      ],
      xn = (function () {
        function e(t) {
          void 0 === t && (t = {}), (this._options = t), (this.name = e.id);
        }
        return (
          (e.prototype.setupOnce = function () {
            sn(function (t) {
              var n = cn();
              if (!n) return t;
              var i = n.getIntegration(e);
              if (i) {
                var r = n.getClient(),
                  s = r ? r.getOptions() : {},
                  o = i._mergeOptions(s);
                if (i._shouldDropEvent(t, o)) return null;
              }
              return t;
            });
          }),
          (e.prototype._shouldDropEvent = function (e, t) {
            return this._isSentryError(e, t)
              ? (kt.warn(
                  "Event dropped due to being internal Sentry Error.\nEvent: " +
                    rt(e)
                ),
                !0)
              : this._isIgnoredError(e, t)
              ? (kt.warn(
                  "Event dropped due to being matched by `ignoreErrors` option.\nEvent: " +
                    rt(e)
                ),
                !0)
              : this._isDeniedUrl(e, t)
              ? (kt.warn(
                  "Event dropped due to being matched by `denyUrls` option.\nEvent: " +
                    rt(e) +
                    ".\nUrl: " +
                    this._getEventFilterUrl(e)
                ),
                !0)
              : !this._isAllowedUrl(e, t) &&
                (kt.warn(
                  "Event dropped due to not being matched by `allowUrls` option.\nEvent: " +
                    rt(e) +
                    ".\nUrl: " +
                    this._getEventFilterUrl(e)
                ),
                !0);
          }),
          (e.prototype._isSentryError = function (e, t) {
            if (!t.ignoreInternal) return !1;
            try {
              return (
                (e &&
                  e.exception &&
                  e.exception.values &&
                  e.exception.values[0] &&
                  "SentryError" === e.exception.values[0].type) ||
                !1
              );
            } catch (e) {
              return !1;
            }
          }),
          (e.prototype._isIgnoredError = function (e, t) {
            return (
              !(!t.ignoreErrors || !t.ignoreErrors.length) &&
              this._getPossibleEventMessages(e).some(function (e) {
                return t.ignoreErrors.some(function (t) {
                  return Qe(e, t);
                });
              })
            );
          }),
          (e.prototype._isDeniedUrl = function (e, t) {
            if (!t.denyUrls || !t.denyUrls.length) return !1;
            var n = this._getEventFilterUrl(e);
            return (
              !!n &&
              t.denyUrls.some(function (e) {
                return Qe(n, e);
              })
            );
          }),
          (e.prototype._isAllowedUrl = function (e, t) {
            if (!t.allowUrls || !t.allowUrls.length) return !0;
            var n = this._getEventFilterUrl(e);
            return (
              !n ||
              t.allowUrls.some(function (e) {
                return Qe(n, e);
              })
            );
          }),
          (e.prototype._mergeOptions = function (e) {
            return (
              void 0 === e && (e = {}),
              {
                allowUrls: u(
                  this._options.whitelistUrls || [],
                  this._options.allowUrls || [],
                  e.whitelistUrls || [],
                  e.allowUrls || []
                ),
                denyUrls: u(
                  this._options.blacklistUrls || [],
                  this._options.denyUrls || [],
                  e.blacklistUrls || [],
                  e.denyUrls || []
                ),
                ignoreErrors: u(
                  this._options.ignoreErrors || [],
                  e.ignoreErrors || [],
                  Sn
                ),
                ignoreInternal:
                  void 0 === this._options.ignoreInternal ||
                  this._options.ignoreInternal,
              }
            );
          }),
          (e.prototype._getPossibleEventMessages = function (e) {
            if (e.message) return [e.message];
            if (e.exception)
              try {
                var t = (e.exception.values && e.exception.values[0]) || {},
                  n = t.type,
                  i = void 0 === n ? "" : n,
                  r = t.value,
                  s = void 0 === r ? "" : r;
                return ["" + s, i + ": " + s];
              } catch (t) {
                return (
                  kt.error("Cannot extract message for event " + rt(e)), []
                );
              }
            return [];
          }),
          (e.prototype._getEventFilterUrl = function (e) {
            try {
              if (e.stacktrace) {
                var t = e.stacktrace.frames;
                return (t && t[t.length - 1].filename) || null;
              }
              if (e.exception) {
                var n =
                  e.exception.values &&
                  e.exception.values[0].stacktrace &&
                  e.exception.values[0].stacktrace.frames;
                return (n && n[n.length - 1].filename) || null;
              }
              return null;
            } catch (t) {
              return kt.error("Cannot extract url for event " + rt(e)), null;
            }
          }),
          (e.id = "InboundFilters"),
          e
        );
      })(),
      Cn = "?",
      An =
        /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      Pn =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
      On =
        /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
      jn = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      In = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Nn = /Minified React error #\d+;/i;
    function Ln(e) {
      var t = null,
        n = 0;
      e &&
        ("number" == typeof e.framesToPop
          ? (n = e.framesToPop)
          : Nn.test(e.message) && (n = 1));
      try {
        if (
          ((t = (function (e) {
            if (!e || !e.stacktrace) return null;
            for (
              var t,
                n = e.stacktrace,
                i =
                  / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
                r =
                  / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,
                s = n.split("\n"),
                o = [],
                a = 0;
              a < s.length;
              a += 2
            ) {
              var l = null;
              (t = i.exec(s[a]))
                ? (l = {
                    url: t[2],
                    func: t[3],
                    args: [],
                    line: +t[1],
                    column: null,
                  })
                : (t = r.exec(s[a])) &&
                  (l = {
                    url: t[6],
                    func: t[3] || t[4],
                    args: t[5] ? t[5].split(",") : [],
                    line: +t[1],
                    column: +t[2],
                  }),
                l && (!l.func && l.line && (l.func = Cn), o.push(l));
            }
            if (!o.length) return null;
            return { message: Rn(e), name: e.name, stack: o };
          })(e)),
          t)
        )
          return Mn(t, n);
      } catch (e) {}
      try {
        if (
          ((t = (function (e) {
            if (!e || !e.stack) return null;
            for (
              var t, n, i, r = [], s = e.stack.split("\n"), o = 0;
              o < s.length;
              ++o
            ) {
              if ((n = An.exec(s[o]))) {
                var a = n[2] && 0 === n[2].indexOf("native");
                n[2] &&
                  0 === n[2].indexOf("eval") &&
                  (t = In.exec(n[2])) &&
                  ((n[2] = t[1]), (n[3] = t[2]), (n[4] = t[3])),
                  (i = {
                    url:
                      n[2] && 0 === n[2].indexOf("address at ")
                        ? n[2].substr("address at ".length)
                        : n[2],
                    func: n[1] || Cn,
                    args: a ? [n[2]] : [],
                    line: n[3] ? +n[3] : null,
                    column: n[4] ? +n[4] : null,
                  });
              } else if ((n = On.exec(s[o])))
                i = {
                  url: n[2],
                  func: n[1] || Cn,
                  args: [],
                  line: +n[3],
                  column: n[4] ? +n[4] : null,
                };
              else {
                if (!(n = Pn.exec(s[o]))) continue;
                n[3] && n[3].indexOf(" > eval") > -1 && (t = jn.exec(n[3]))
                  ? ((n[1] = n[1] || "eval"),
                    (n[3] = t[1]),
                    (n[4] = t[2]),
                    (n[5] = ""))
                  : 0 !== o ||
                    n[5] ||
                    void 0 === e.columnNumber ||
                    (r[0].column = e.columnNumber + 1),
                  (i = {
                    url: n[3],
                    func: n[1] || Cn,
                    args: n[2] ? n[2].split(",") : [],
                    line: n[4] ? +n[4] : null,
                    column: n[5] ? +n[5] : null,
                  });
              }
              !i.func && i.line && (i.func = Cn), r.push(i);
            }
            if (!r.length) return null;
            return { message: Rn(e), name: e.name, stack: r };
          })(e)),
          t)
        )
          return Mn(t, n);
      } catch (e) {}
      return { message: Rn(e), name: e && e.name, stack: [], failed: !0 };
    }
    function Mn(e, t) {
      try {
        return l(l({}, e), { stack: e.stack.slice(t) });
      } catch (t) {
        return e;
      }
    }
    function Rn(e) {
      var t = e && e.message;
      return t
        ? t.error && "string" == typeof t.error.message
          ? t.error.message
          : t
        : "No error message";
    }
    function Dn(e) {
      var t = Fn(e.stack),
        n = { type: e.name, value: e.message };
      return (
        t && t.length && (n.stacktrace = { frames: t }),
        void 0 === n.type &&
          "" === n.value &&
          (n.value = "Unrecoverable error caught"),
        n
      );
    }
    function Un(e) {
      return { exception: { values: [Dn(e)] } };
    }
    function Fn(e) {
      if (!e || !e.length) return [];
      var t = e,
        n = t[0].func || "",
        i = t[t.length - 1].func || "";
      return (
        (-1 === n.indexOf("captureMessage") &&
          -1 === n.indexOf("captureException")) ||
          (t = t.slice(1)),
        -1 !== i.indexOf("sentryWrapped") && (t = t.slice(0, -1)),
        t
          .slice(0, 50)
          .map(function (e) {
            return {
              colno: null === e.column ? void 0 : e.column,
              filename: e.url || t[0].url,
              function: e.func || "?",
              in_app: !0,
              lineno: null === e.line ? void 0 : e.line,
            };
          })
          .reverse()
      );
    }
    function $n(e, t, n) {
      var i, r;
      if ((void 0 === n && (n = {}), f(e) && e.error))
        return (i = Un(Ln((e = e.error))));
      if (
        m(e) ||
        ((r = e), "[object DOMException]" === Object.prototype.toString.call(r))
      ) {
        var s = e,
          o = s.name || (m(s) ? "DOMError" : "DOMException"),
          a = s.message ? o + ": " + s.message : o;
        return ot((i = qn(a, t, n)), a), i;
      }
      return p(e)
        ? (i = Un(Ln(e)))
        : b(e) || v(e)
        ? ((i = (function (e, t, n) {
            var i = {
              exception: {
                values: [
                  {
                    type: v(e)
                      ? e.constructor.name
                      : n
                      ? "UnhandledRejection"
                      : "Error",
                    value:
                      "Non-Error " +
                      (n ? "promise rejection" : "exception") +
                      " captured with keys: " +
                      jt(e),
                  },
                ],
              },
              extra: { __serialized__: Ct(e) },
            };
            if (t) {
              var r = Fn(Ln(t).stack);
              i.stacktrace = { frames: r };
            }
            return i;
          })(e, t, n.rejection)),
          at(i, { synthetic: !0 }),
          i)
        : (ot((i = qn(e, t, n)), "" + e, void 0), at(i, { synthetic: !0 }), i);
    }
    function qn(e, t, n) {
      void 0 === n && (n = {});
      var i = { message: e };
      if (n.attachStacktrace && t) {
        var r = Fn(Ln(t).stack);
        i.stacktrace = { frames: r };
      }
      return i;
    }
    var Hn = (function () {
        function e(e) {
          (this.options = e),
            (this._buffer = new Nt(30)),
            (this._api = new gn(this.options.dsn)),
            (this.url = this._api.getStoreEndpointWithUrlEncodedAuth());
        }
        return (
          (e.prototype.sendEvent = function (e) {
            throw new d("Transport Class has to implement `sendEvent` method");
          }),
          (e.prototype.close = function (e) {
            return this._buffer.drain(e);
          }),
          e
        );
      })(),
      Bn = tt(),
      Vn = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t._disabledUntil = new Date(Date.now())), t;
        }
        return (
          s(t, e),
          (t.prototype.sendEvent = function (e) {
            var t = this;
            if (new Date(Date.now()) < this._disabledUntil)
              return Promise.reject({
                event: e,
                reason:
                  "Transport locked till " +
                  this._disabledUntil +
                  " due to too many requests.",
                status: 429,
              });
            var n = En(e, this._api),
              i = {
                body: n.body,
                method: "POST",
                referrerPolicy: Rt() ? "origin" : "",
              };
            return (
              void 0 !== this.options.fetchParameters &&
                Object.assign(i, this.options.fetchParameters),
              void 0 !== this.options.headers &&
                (i.headers = this.options.headers),
              this._buffer.add(
                new It(function (e, r) {
                  Bn.fetch(n.url, i)
                    .then(function (n) {
                      var i = a.fromHttpCode(n.status);
                      if (i !== a.Success) {
                        if (i === a.RateLimit) {
                          var s = Date.now(),
                            o = n.headers.get("Retry-After");
                          (t._disabledUntil = new Date(s + mt(s, o))),
                            kt.warn(
                              "Too many requests, backing off till: " +
                                t._disabledUntil
                            );
                        }
                        r(n);
                      } else e({ status: i });
                    })
                    .catch(r);
                })
              )
            );
          }),
          t
        );
      })(Hn),
      Wn = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t._disabledUntil = new Date(Date.now())), t;
        }
        return (
          s(t, e),
          (t.prototype.sendEvent = function (e) {
            var t = this;
            if (new Date(Date.now()) < this._disabledUntil)
              return Promise.reject({
                event: e,
                reason:
                  "Transport locked till " +
                  this._disabledUntil +
                  " due to too many requests.",
                status: 429,
              });
            var n = En(e, this._api);
            return this._buffer.add(
              new It(function (e, i) {
                var r = new XMLHttpRequest();
                for (var s in ((r.onreadystatechange = function () {
                  if (4 === r.readyState) {
                    var n = a.fromHttpCode(r.status);
                    if (n !== a.Success) {
                      if (n === a.RateLimit) {
                        var s = Date.now(),
                          o = r.getResponseHeader("Retry-After");
                        (t._disabledUntil = new Date(s + mt(s, o))),
                          kt.warn(
                            "Too many requests, backing off till: " +
                              t._disabledUntil
                          );
                      }
                      i(r);
                    } else e({ status: n });
                  }
                }),
                r.open("POST", n.url),
                t.options.headers))
                  t.options.headers.hasOwnProperty(s) &&
                    r.setRequestHeader(s, t.options.headers[s]);
                r.send(n.body);
              })
            );
          }),
          t
        );
      })(Hn),
      zn = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          s(t, e),
          (t.prototype.eventFromException = function (e, t) {
            return (function (e, t, n) {
              var i = $n(t, (n && n.syntheticException) || void 0, {
                attachStacktrace: e.attachStacktrace,
              });
              return (
                at(i, { handled: !0, type: "generic" }),
                (i.level = o.Error),
                n && n.event_id && (i.event_id = n.event_id),
                It.resolve(i)
              );
            })(this._options, e, t);
          }),
          (t.prototype.eventFromMessage = function (e, t, n) {
            return (
              void 0 === t && (t = o.Info),
              (function (e, t, n, i) {
                void 0 === n && (n = o.Info);
                var r = qn(t, (i && i.syntheticException) || void 0, {
                  attachStacktrace: e.attachStacktrace,
                });
                return (
                  (r.level = n),
                  i && i.event_id && (r.event_id = i.event_id),
                  It.resolve(r)
                );
              })(this._options, e, t, n)
            );
          }),
          (t.prototype._setupTransport = function () {
            if (!this._options.dsn)
              return e.prototype._setupTransport.call(this);
            var t = l(l({}, this._options.transportOptions), {
              dsn: this._options.dsn,
            });
            return this._options.transport
              ? new this._options.transport(t)
              : Lt()
              ? new Vn(t)
              : new Wn(t);
          }),
          t
        );
      })(kn),
      Yn = 0;
    function Kn() {
      return Yn > 0;
    }
    function Jn() {
      (Yn += 1),
        setTimeout(function () {
          Yn -= 1;
        });
    }
    function Xn(e, t, n) {
      if ((void 0 === t && (t = {}), "function" != typeof e)) return e;
      try {
        if (e.__sentry__) return e;
        if (e.__sentry_wrapped__) return e.__sentry_wrapped__;
      } catch (t) {
        return e;
      }
      var i = function () {
        var i = Array.prototype.slice.call(arguments);
        try {
          n && "function" == typeof n && n.apply(this, arguments);
          var r = i.map(function (e) {
            return Xn(e, t);
          });
          return e.handleEvent
            ? e.handleEvent.apply(this, r)
            : e.apply(this, r);
        } catch (e) {
          throw (
            (Jn(),
            mn(function (n) {
              n.addEventProcessor(function (e) {
                var n = l({}, e);
                return (
                  t.mechanism && (ot(n, void 0, void 0), at(n, t.mechanism)),
                  (n.extra = l(l({}, n.extra), { arguments: i })),
                  n
                );
              }),
                fn(e);
            }),
            e)
          );
        }
      };
      try {
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
      } catch (e) {}
      (e.prototype = e.prototype || {}),
        (i.prototype = e.prototype),
        Object.defineProperty(e, "__sentry_wrapped__", {
          enumerable: !1,
          value: i,
        }),
        Object.defineProperties(i, {
          __sentry__: { enumerable: !1, value: !0 },
          __sentry_original__: { enumerable: !1, value: e },
        });
      try {
        Object.getOwnPropertyDescriptor(i, "name").configurable &&
          Object.defineProperty(i, "name", {
            get: function () {
              return e.name;
            },
          });
      } catch (e) {}
      return i;
    }
    function Gn(e) {
      if ((void 0 === e && (e = {}), e.eventId))
        if (e.dsn) {
          var t = document.createElement("script");
          (t.async = !0),
            (t.src = new gn(e.dsn).getReportDialogEndpoint(e)),
            e.onLoad && (t.onload = e.onLoad),
            (document.head || document.body).appendChild(t);
        } else kt.error("Missing dsn option in showReportDialog call");
      else kt.error("Missing eventId option in showReportDialog call");
    }
    var Qn = (function () {
        function e(t) {
          (this.name = e.id),
            (this._onErrorHandlerInstalled = !1),
            (this._onUnhandledRejectionHandlerInstalled = !1),
            (this._options = l({ onerror: !0, onunhandledrejection: !0 }, t));
        }
        return (
          (e.prototype.setupOnce = function () {
            (Error.stackTraceLimit = 50),
              this._options.onerror &&
                (kt.log("Global Handler attached: onerror"),
                this._installGlobalOnErrorHandler()),
              this._options.onunhandledrejection &&
                (kt.log("Global Handler attached: onunhandledrejection"),
                this._installGlobalOnUnhandledRejectionHandler());
          }),
          (e.prototype._installGlobalOnErrorHandler = function () {
            var t = this;
            this._onErrorHandlerInstalled ||
              (Ht({
                callback: function (n) {
                  var i = n.error,
                    r = cn(),
                    s = r.getIntegration(e),
                    o = i && !0 === i.__sentry_own_request__;
                  if (s && !Kn() && !o) {
                    var a = r.getClient(),
                      l = y(i)
                        ? t._eventFromIncompleteOnError(
                            n.msg,
                            n.url,
                            n.line,
                            n.column
                          )
                        : t._enhanceEventWithInitialFrame(
                            $n(i, void 0, {
                              attachStacktrace:
                                a && a.getOptions().attachStacktrace,
                              rejection: !1,
                            }),
                            n.url,
                            n.line,
                            n.column
                          );
                    at(l, { handled: !1, type: "onerror" }),
                      r.captureEvent(l, { originalException: i });
                  }
                },
                type: "error",
              }),
              (this._onErrorHandlerInstalled = !0));
          }),
          (e.prototype._installGlobalOnUnhandledRejectionHandler = function () {
            var t = this;
            this._onUnhandledRejectionHandlerInstalled ||
              (Ht({
                callback: function (n) {
                  var i = n;
                  try {
                    "reason" in n
                      ? (i = n.reason)
                      : "detail" in n &&
                        "reason" in n.detail &&
                        (i = n.detail.reason);
                  } catch (e) {}
                  var r = cn(),
                    s = r.getIntegration(e),
                    a = i && !0 === i.__sentry_own_request__;
                  if (!s || Kn() || a) return !0;
                  var l = r.getClient(),
                    c = y(i)
                      ? t._eventFromIncompleteRejection(i)
                      : $n(i, void 0, {
                          attachStacktrace:
                            l && l.getOptions().attachStacktrace,
                          rejection: !0,
                        });
                  (c.level = o.Error),
                    at(c, { handled: !1, type: "onunhandledrejection" }),
                    r.captureEvent(c, { originalException: i });
                },
                type: "unhandledrejection",
              }),
              (this._onUnhandledRejectionHandlerInstalled = !0));
          }),
          (e.prototype._eventFromIncompleteOnError = function (e, t, n, i) {
            var r,
              s = f(e) ? e.message : e;
            if (g(s)) {
              var o = s.match(
                /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
              );
              o && ((r = o[1]), (s = o[2]));
            }
            var a = {
              exception: { values: [{ type: r || "Error", value: s }] },
            };
            return this._enhanceEventWithInitialFrame(a, t, n, i);
          }),
          (e.prototype._eventFromIncompleteRejection = function (e) {
            return {
              exception: {
                values: [
                  {
                    type: "UnhandledRejection",
                    value:
                      "Non-Error promise rejection captured with value: " + e,
                  },
                ],
              },
            };
          }),
          (e.prototype._enhanceEventWithInitialFrame = function (e, t, n, i) {
            (e.exception = e.exception || {}),
              (e.exception.values = e.exception.values || []),
              (e.exception.values[0] = e.exception.values[0] || {}),
              (e.exception.values[0].stacktrace =
                e.exception.values[0].stacktrace || {}),
              (e.exception.values[0].stacktrace.frames =
                e.exception.values[0].stacktrace.frames || []);
            var r = isNaN(parseInt(i, 10)) ? void 0 : i,
              s = isNaN(parseInt(n, 10)) ? void 0 : n,
              o =
                g(t) && t.length > 0
                  ? t
                  : (function () {
                      try {
                        return document.location.href;
                      } catch (e) {
                        return "";
                      }
                    })();
            return (
              0 === e.exception.values[0].stacktrace.frames.length &&
                e.exception.values[0].stacktrace.frames.push({
                  colno: r,
                  filename: o,
                  function: "?",
                  in_app: !0,
                  lineno: s,
                }),
              e
            );
          }),
          (e.id = "GlobalHandlers"),
          e
        );
      })(),
      Zn = [
        "EventTarget",
        "Window",
        "Node",
        "ApplicationCache",
        "AudioTrackList",
        "ChannelMergerNode",
        "CryptoOperation",
        "EventSource",
        "FileReader",
        "HTMLUnknownElement",
        "IDBDatabase",
        "IDBRequest",
        "IDBTransaction",
        "KeyOperation",
        "MediaController",
        "MessagePort",
        "ModalWindow",
        "Notification",
        "SVGElementInstance",
        "Screen",
        "TextTrack",
        "TextTrackCue",
        "TextTrackList",
        "WebSocket",
        "WebSocketWorker",
        "Worker",
        "XMLHttpRequest",
        "XMLHttpRequestEventTarget",
        "XMLHttpRequestUpload",
      ],
      ei = (function () {
        function e(t) {
          (this.name = e.id),
            (this._options = l(
              {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
              },
              t
            ));
        }
        return (
          (e.prototype.setupOnce = function () {
            var e = tt();
            (this._options.setTimeout &&
              Tt(e, "setTimeout", this._wrapTimeFunction.bind(this)),
            this._options.setInterval &&
              Tt(e, "setInterval", this._wrapTimeFunction.bind(this)),
            this._options.requestAnimationFrame &&
              Tt(e, "requestAnimationFrame", this._wrapRAF.bind(this)),
            this._options.XMLHttpRequest &&
              "XMLHttpRequest" in e &&
              Tt(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)),
            this._options.eventTarget) &&
              (Array.isArray(this._options.eventTarget)
                ? this._options.eventTarget
                : Zn
              ).forEach(this._wrapEventTarget.bind(this));
          }),
          (e.prototype._wrapTimeFunction = function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              var i = t[0];
              return (
                (t[0] = Xn(i, {
                  mechanism: {
                    data: { function: yt(e) },
                    handled: !0,
                    type: "instrument",
                  },
                })),
                e.apply(this, t)
              );
            };
          }),
          (e.prototype._wrapRAF = function (e) {
            return function (t) {
              return e.call(
                this,
                Xn(t, {
                  mechanism: {
                    data: { function: "requestAnimationFrame", handler: yt(e) },
                    handled: !0,
                    type: "instrument",
                  },
                })
              );
            };
          }),
          (e.prototype._wrapEventTarget = function (e) {
            var t = tt(),
              n = t[e] && t[e].prototype;
            n &&
              n.hasOwnProperty &&
              n.hasOwnProperty("addEventListener") &&
              (Tt(n, "addEventListener", function (t) {
                return function (n, i, r) {
                  try {
                    "function" == typeof i.handleEvent &&
                      (i.handleEvent = Xn(i.handleEvent.bind(i), {
                        mechanism: {
                          data: {
                            function: "handleEvent",
                            handler: yt(i),
                            target: e,
                          },
                          handled: !0,
                          type: "instrument",
                        },
                      }));
                  } catch (e) {}
                  return t.call(
                    this,
                    n,
                    Xn(i, {
                      mechanism: {
                        data: {
                          function: "addEventListener",
                          handler: yt(i),
                          target: e,
                        },
                        handled: !0,
                        type: "instrument",
                      },
                    }),
                    r
                  );
                };
              }),
              Tt(n, "removeEventListener", function (e) {
                return function (t, n, i) {
                  try {
                    e.call(this, t, n.__sentry_wrapped__, i);
                  } catch (e) {}
                  return e.call(this, t, n, i);
                };
              }));
          }),
          (e.prototype._wrapXHR = function (e) {
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              var i = this,
                r = ["onload", "onerror", "onprogress", "onreadystatechange"];
              return (
                r.forEach(function (e) {
                  e in i &&
                    "function" == typeof i[e] &&
                    Tt(i, e, function (t) {
                      var n = {
                        mechanism: {
                          data: { function: e, handler: yt(t) },
                          handled: !0,
                          type: "instrument",
                        },
                      };
                      return (
                        t.__sentry_original__ &&
                          (n.mechanism.data.handler = yt(
                            t.__sentry_original__
                          )),
                        Xn(t, n)
                      );
                    });
                }),
                e.apply(this, t)
              );
            };
          }),
          (e.id = "TryCatch"),
          e
        );
      })(),
      ti = (function () {
        function e(t) {
          (this.name = e.id),
            (this._options = l(
              {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
              },
              t
            ));
        }
        return (
          (e.prototype.addSentryBreadcrumb = function (e) {
            this._options.sentry &&
              cn().addBreadcrumb(
                {
                  category:
                    "sentry." +
                    ("transaction" === e.type ? "transaction" : "event"),
                  event_id: e.event_id,
                  level: e.level,
                  message: rt(e),
                },
                { event: e }
              );
          }),
          (e.prototype.setupOnce = function () {
            var e = this;
            this._options.console &&
              Ht({
                callback: function () {
                  for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                  e._consoleBreadcrumb.apply(e, u(t));
                },
                type: "console",
              }),
              this._options.dom &&
                Ht({
                  callback: function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    e._domBreadcrumb.apply(e, u(t));
                  },
                  type: "dom",
                }),
              this._options.xhr &&
                Ht({
                  callback: function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    e._xhrBreadcrumb.apply(e, u(t));
                  },
                  type: "xhr",
                }),
              this._options.fetch &&
                Ht({
                  callback: function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    e._fetchBreadcrumb.apply(e, u(t));
                  },
                  type: "fetch",
                }),
              this._options.history &&
                Ht({
                  callback: function () {
                    for (var t = [], n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    e._historyBreadcrumb.apply(e, u(t));
                  },
                  type: "history",
                });
          }),
          (e.prototype._consoleBreadcrumb = function (e) {
            var t = {
              category: "console",
              data: { arguments: e.args, logger: "console" },
              level: o.fromString(e.level),
              message: Ge(e.args, " "),
            };
            if ("assert" === e.level) {
              if (!1 !== e.args[0]) return;
              (t.message =
                "Assertion failed: " +
                (Ge(e.args.slice(1), " ") || "console.assert")),
                (t.data.arguments = e.args.slice(1));
            }
            cn().addBreadcrumb(t, { input: e.args, level: e.level });
          }),
          (e.prototype._domBreadcrumb = function (e) {
            var t;
            try {
              t = e.event.target ? lt(e.event.target) : lt(e.event);
            } catch (e) {
              t = "<unknown>";
            }
            0 !== t.length &&
              cn().addBreadcrumb(
                { category: "ui." + e.name, message: t },
                { event: e.event, name: e.name }
              );
          }),
          (e.prototype._xhrBreadcrumb = function (e) {
            if (e.endTimestamp) {
              if (e.xhr.__sentry_own_request__) return;
              cn().addBreadcrumb(
                { category: "xhr", data: e.xhr.__sentry_xhr__, type: "http" },
                { xhr: e.xhr }
              );
            } else;
          }),
          (e.prototype._fetchBreadcrumb = function (e) {
            e.endTimestamp &&
              ((e.fetchData.url.match(/sentry_key/) &&
                "POST" === e.fetchData.method) ||
                (e.error
                  ? cn().addBreadcrumb(
                      {
                        category: "fetch",
                        data: e.fetchData,
                        level: o.Error,
                        type: "http",
                      },
                      { data: e.error, input: e.args }
                    )
                  : cn().addBreadcrumb(
                      {
                        category: "fetch",
                        data: l(l({}, e.fetchData), {
                          status_code: e.response.status,
                        }),
                        type: "http",
                      },
                      { input: e.args, response: e.response }
                    )));
          }),
          (e.prototype._historyBreadcrumb = function (e) {
            var t = tt(),
              n = e.from,
              i = e.to,
              r = it(t.location.href),
              s = it(n),
              o = it(i);
            s.path || (s = r),
              r.protocol === o.protocol &&
                r.host === o.host &&
                (i = o.relative),
              r.protocol === s.protocol &&
                r.host === s.host &&
                (n = s.relative),
              cn().addBreadcrumb({
                category: "navigation",
                data: { from: n, to: i },
              });
          }),
          (e.id = "Breadcrumbs"),
          e
        );
      })(),
      ni = (function () {
        function e(t) {
          void 0 === t && (t = {}),
            (this.name = e.id),
            (this._key = t.key || "cause"),
            (this._limit = t.limit || 5);
        }
        return (
          (e.prototype.setupOnce = function () {
            sn(function (t, n) {
              var i = cn().getIntegration(e);
              return i ? i._handler(t, n) : t;
            });
          }),
          (e.prototype._handler = function (e, t) {
            if (
              !(
                e.exception &&
                e.exception.values &&
                t &&
                k(t.originalException, Error)
              )
            )
              return e;
            var n = this._walkErrorTree(t.originalException, this._key);
            return (e.exception.values = u(n, e.exception.values)), e;
          }),
          (e.prototype._walkErrorTree = function (e, t, n) {
            if (
              (void 0 === n && (n = []),
              !k(e[t], Error) || n.length + 1 >= this._limit)
            )
              return n;
            var i = Dn(Ln(e[t]));
            return this._walkErrorTree(e[t], t, u([i], n));
          }),
          (e.id = "LinkedErrors"),
          e
        );
      })(),
      ii = tt(),
      ri = (function () {
        function e() {
          this.name = e.id;
        }
        return (
          (e.prototype.setupOnce = function () {
            sn(function (t) {
              if (cn().getIntegration(e)) {
                if (!ii.navigator || !ii.location) return t;
                var n = t.request || {};
                return (
                  (n.url = n.url || ii.location.href),
                  (n.headers = n.headers || {}),
                  (n.headers["User-Agent"] = ii.navigator.userAgent),
                  l(l({}, t), { request: n })
                );
              }
              return t;
            });
          }),
          (e.id = "UserAgent"),
          e
        );
      })(),
      si = "5.22.3",
      oi = (function (e) {
        function t(t) {
          return void 0 === t && (t = {}), e.call(this, zn, t) || this;
        }
        return (
          s(t, e),
          (t.prototype.showReportDialog = function (e) {
            void 0 === e && (e = {}),
              tt().document &&
                (this._isEnabled()
                  ? Gn(l(l({}, e), { dsn: e.dsn || this.getDsn() }))
                  : kt.error(
                      "Trying to call showReportDialog with Sentry Client disabled"
                    ));
          }),
          (t.prototype._prepareEvent = function (t, n, i) {
            return (
              (t.platform = t.platform || "javascript"),
              (t.sdk = l(l({}, t.sdk), {
                name: "sentry.javascript.browser",
                packages: u((t.sdk && t.sdk.packages) || [], [
                  { name: "npm:@sentry/browser", version: si },
                ]),
                version: si,
              })),
              e.prototype._prepareEvent.call(this, t, n, i)
            );
          }),
          (t.prototype._sendEvent = function (t) {
            var n = this.getIntegration(ti);
            n && n.addSentryBreadcrumb(t), e.prototype._sendEvent.call(this, t);
          }),
          t
        );
      })(wn),
      ai = [
        new xn(),
        new Tn(),
        new ei(),
        new ti(),
        new Qn(),
        new ni(),
        new ri(),
      ];
    function li(e) {
      if (
        (void 0 === e && (e = {}),
        void 0 === e.defaultIntegrations && (e.defaultIntegrations = ai),
        void 0 === e.release)
      ) {
        var t = tt();
        t.SENTRY_RELEASE &&
          t.SENTRY_RELEASE.id &&
          (e.release = t.SENTRY_RELEASE.id);
      }
      !(function (e, t) {
        !0 === t.debug && kt.enable();
        var n = cn(),
          i = new e(t);
        n.bindClient(i);
      })(oi, e);
    }
    function ci(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function ui(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function hi(e, t, n) {
      return t && ui(e.prototype, t), n && ui(e, n), e;
    }
    function di(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function pi(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n = [],
            i = !0,
            r = !1,
            s = void 0;
          try {
            for (
              var o, a = e[Symbol.iterator]();
              !(i = (o = a.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              i = !0
            );
          } catch (e) {
            (r = !0), (s = e);
          } finally {
            try {
              i || null == a.return || a.return();
            } finally {
              if (r) throw s;
            }
          }
          return n;
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        })()
      );
    }
    var fi = function (e) {
        return null != e ? e.constructor : null;
      },
      mi = function (e, t) {
        return !!(e && t && e instanceof t);
      },
      gi = function (e) {
        return null == e;
      },
      yi = function (e) {
        return fi(e) === Object;
      },
      bi = function (e) {
        return fi(e) === String;
      },
      vi = function (e) {
        return Array.isArray(e);
      },
      wi = function (e) {
        return mi(e, NodeList);
      },
      _i = gi,
      ki = yi,
      Ei = function (e) {
        return fi(e) === Number && !Number.isNaN(e);
      },
      Ti = bi,
      Si = function (e) {
        return fi(e) === Boolean;
      },
      xi = vi,
      Ci = wi,
      Ai = function (e) {
        return mi(e, Element);
      },
      Pi = function (e) {
        return mi(e, Event);
      },
      Oi = function (e) {
        return (
          gi(e) ||
          ((bi(e) || vi(e) || wi(e)) && !e.length) ||
          (yi(e) && !Object.keys(e).length)
        );
      },
      ji = {
        facebook: {
          domain: "facebook.com",
          url: function (e) {
            return "https://graph.facebook.com/?id=".concat(
              e,
              "&fields=og_object{engagement}"
            );
          },
          shareCount: function (e) {
            return e.og_object.engagement.count;
          },
          popup: { width: 640, height: 360 },
        },
        twitter: {
          domain: "twitter.com",
          url: function () {
            return null;
          },
          shareCount: function () {
            return null;
          },
          popup: { width: 640, height: 240 },
        },
        pinterest: {
          domain: "pinterest.com",
          url: function (e) {
            return "https://widgets.pinterest.com/v1/urls/count.json?url=".concat(
              e
            );
          },
          shareCount: function (e) {
            return e.count;
          },
          popup: { width: 830, height: 700 },
        },
        github: {
          domain: "github.com",
          url: function (e, t) {
            return "https://api.github.com/repos/"
              .concat(e)
              .concat(Ti(t) ? "?access_token=".concat(t) : "");
          },
          shareCount: function (e) {
            return e.data.stargazers_count;
          },
        },
        youtube: {
          domain: "youtube.com",
          url: function (e, t) {
            return "https://www.googleapis.com/youtube/v3/channels?part=statistics&id="
              .concat(e, "&key=")
              .concat(t);
          },
          shareCount: function (e) {
            if (!Oi(e.error)) return null;
            var t = pi(e.items, 1)[0];
            return Oi(t) ? null : t.statistics.subscriberCount;
          },
        },
      },
      Ii = {
        debug: !1,
        wrapper: { className: "shr" },
        count: {
          className: "shr__count",
          displayZero: !1,
          format: !0,
          position: "after",
          increment: !0,
        },
        tokens: { github: "", youtube: "" },
        storage: { enabled: !0, key: "shr", ttl: 3e5 },
      };
    function Ni(e) {
      return new Promise(function (t, n) {
        var i = "jsonp_callback_".concat(Math.round(1e5 * Math.random())),
          r = document.createElement("script");
        r.addEventListener("error", function (e) {
          return n(e);
        }),
          (window[i] = function (e) {
            delete window[i], document.body.removeChild(r), t(e);
          });
        var s = new URL(e);
        s.searchParams.set("callback", i),
          r.setAttribute("src", s.toString()),
          document.body.appendChild(r);
      });
    }
    var Li = function () {},
      Mi = (function () {
        function e() {
          var t =
            !!(0 < arguments.length && void 0 !== arguments[0]) && arguments[0];
          ci(this, e),
            (this.enabled = window.console && t),
            this.enabled && this.log("Debugging enabled");
        }
        return (
          hi(e, [
            {
              key: "log",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.log, console)
                  : Li;
              },
            },
            {
              key: "warn",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.warn, console)
                  : Li;
              },
            },
            {
              key: "error",
              get: function () {
                return this.enabled
                  ? Function.prototype.bind.call(console.error, console)
                  : Li;
              },
            },
          ]),
          e
        );
      })();
    function Ri(e, t) {
      return function () {
        return Array.from(document.querySelectorAll(t)).includes(this);
      }.call(e, t);
    }
    function Di(e, t) {
      var n = e.length ? e : [e];
      Array.from(n)
        .reverse()
        .forEach(function (e, n) {
          var i = 0 < n ? t.cloneNode(!0) : t,
            r = e.parentNode,
            s = e.nextSibling;
          i.appendChild(e), s ? r.insertBefore(i, s) : r.appendChild(i);
        });
    }
    function Ui(e, t, n) {
      var i = document.createElement(e);
      return (
        ki(t) &&
          (function (e, t) {
            !Ai(e) ||
              Oi(t) ||
              Object.entries(t)
                .filter(function (e) {
                  var t = pi(e, 2)[1];
                  return !_i(t);
                })
                .forEach(function (t) {
                  var n = pi(t, 2),
                    i = n[0],
                    r = n[1];
                  return e.setAttribute(i, r);
                });
          })(i, t),
        Ti(n) && (i.innerText = n),
        i
      );
    }
    function Fi(e) {
      var t = /\./.test((1.1).toLocaleString()) ? "." : ",",
        n = new RegExp("\\".concat(t, "\\d+$"));
      return Math.round(e).toLocaleString().replace(n, "");
    }
    function $i() {
      for (
        var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length,
          n = Array(1 < t ? t - 1 : 0),
          i = 1;
        i < t;
        i++
      )
        n[i - 1] = arguments[i];
      if (!n.length) return e;
      var r = n.shift();
      return ki(r)
        ? (Object.keys(r).forEach(function (t) {
            ki(r[t])
              ? (!Object.keys(e).includes(t) && Object.assign(e, di({}, t, {})),
                $i(e[t], r[t]))
              : Object.assign(e, di({}, t, r[t]));
          }),
          $i.apply(void 0, [e].concat(n)))
        : e;
    }
    var qi = (function () {
      function e(t, n) {
        var i =
          !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
        ci(this, e),
          (this.enabled = i && e.supported),
          (this.key = t),
          (this.ttl = n);
      }
      return (
        hi(
          e,
          [
            {
              key: "get",
              value: function (t) {
                if (!e.supported || !this.enabled) return null;
                var n = window.localStorage.getItem(this.key);
                if (Oi(n)) return null;
                var i = window.localStorage.getItem(
                  "".concat(this.key, "_ttl")
                );
                if (Oi(i) || i < Date.now()) return null;
                var r = JSON.parse(n);
                return Ti(t) && t.length ? r[t] : r;
              },
            },
            {
              key: "set",
              value: function (t) {
                if (e.supported && this.enabled && ki(t)) {
                  var n = this.get();
                  Oi(n) && (n = {}),
                    $i(n, t),
                    window.localStorage.setItem(this.key, JSON.stringify(n)),
                    window.localStorage.setItem(
                      "".concat(this.key, "_ttl"),
                      Date.now() + this.ttl
                    );
                }
              },
            },
          ],
          [
            {
              key: "supported",
              get: function () {
                try {
                  return (
                    "localStorage" in window &&
                    (window.localStorage.setItem("___test", "___test"),
                    window.localStorage.removeItem("___test"),
                    !0)
                  );
                } catch (e) {
                  return !1;
                }
              },
            },
          ]
        ),
        e
      );
    })();
    var Hi = (function () {
      function e(t, n) {
        var i = this;
        ci(this, e),
          (this.elements = { count: null, trigger: null, popup: null }),
          Ai(t)
            ? (this.elements.trigger = t)
            : Ti(t) && (this.elements.trigger = document.querySelector(t)),
          Ai(this.elements.trigger) &&
            Oi(this.elements.trigger.shr) &&
            ((this.config = $i({}, Ii, n, { networks: ji })),
            (this.console = new Mi(this.config.debug)),
            (this.storage = new qi(
              this.config.storage.key,
              this.config.storage.ttl,
              this.config.storage.enabled
            )),
            this.getCount()
              .then(function (e) {
                return i.updateDisplay(e);
              })
              .catch(function () {}),
            this.listeners(!0),
            (this.elements.trigger.shr = this));
      }
      return (
        hi(
          e,
          [
            {
              key: "destroy",
              value: function () {
                this.listeners(!1);
              },
            },
            {
              key: "listeners",
              value: function () {
                var e = this,
                  t =
                    0 < arguments.length &&
                    void 0 !== arguments[0] &&
                    arguments[0]
                      ? "addEventListener"
                      : "removeEventListener";
                this.elements.trigger[t](
                  "click",
                  function (t) {
                    return e.share(t);
                  },
                  !1
                );
              },
            },
            {
              key: "share",
              value: function (e) {
                var t = this;
                this.openPopup(e);
                var n = this.config.count.increment;
                this.getCount()
                  .then(function (e) {
                    return t.updateDisplay(e, n);
                  })
                  .catch(function () {});
              },
            },
            {
              key: "openPopup",
              value: function (e) {
                if (!Oi(this.network) && this.networkConfig.popup) {
                  Pi(e) && e.preventDefault();
                  var t = this.networkConfig.popup,
                    n = t.width,
                    i = t.height,
                    r = "shr-popup--".concat(this.network);
                  if (this.popup && !this.popup.closed)
                    this.popup.focus(), this.console.log("Popup re-focused.");
                  else {
                    var s =
                        void 0 === window.screenLeft
                          ? window.screen.left
                          : window.screenLeft,
                      o =
                        void 0 === window.screenTop
                          ? window.screen.top
                          : window.screenTop,
                      a = window.screen.width / 2 - n / 2 + s,
                      l = window.screen.height / 2 - i / 2 + o;
                    (this.popup = window.open(
                      this.href,
                      r,
                      "top="
                        .concat(l, ",left=")
                        .concat(a, ",width=")
                        .concat(n, ",height=")
                        .concat(i)
                    )),
                      this.popup && !this.popup.closed && Si(this.popup.closed)
                        ? (this.popup.focus(),
                          this.console.log("Popup opened."))
                        : this.console.error("Popup blocked.");
                  }
                }
              },
            },
            {
              key: "getCount",
              value: function () {
                var e = this,
                  t =
                    !(0 < arguments.length && void 0 !== arguments[0]) ||
                    arguments[0];
                return new Promise(function (n, i) {
                  var r = e.apiUrl;
                  if (Oi(r))
                    i(
                      new Error("No URL available for ".concat(e.network, "."))
                    );
                  else {
                    if (t) {
                      var s = e.storage.get(e.target);
                      if (!Oi(s) && Object.keys(s).includes(e.network)) {
                        var o = s[e.network];
                        return (
                          n(Ei(o) ? o : 0),
                          void e.console.log(
                            "getCount for '"
                              .concat(e.target, "' for '")
                              .concat(e.network, "' resolved from cache.")
                          )
                        );
                      }
                    }
                    Ni(r)
                      .then(function (t) {
                        var i = 0,
                          r =
                            e.elements.trigger.getAttribute("data-shr-display");
                        (i = Oi(r) ? e.networkConfig.shareCount(t) : t[r]),
                          Oi(i)
                            ? (i = 0)
                            : ((i = parseInt(i, 10)), !Ei(i) && (i = 0)),
                          e.storage.set(di({}, e.target, di({}, e.network, i))),
                          n(i);
                      })
                      .catch(i);
                  }
                });
              },
            },
            {
              key: "updateDisplay",
              value: function (e) {
                var t =
                    !!(1 < arguments.length && void 0 !== arguments[1]) &&
                    arguments[1],
                  n = this.config,
                  i = n.count,
                  r = n.wrapper,
                  s = t ? e + 1 : e,
                  o = i.position.toLowerCase();
                if (0 < s || i.displayZero) {
                  var a = function (e) {
                      return Math.round((s / e) * 10) / 10;
                    },
                    l = Fi(s);
                  i.format &&
                    (1e6 < s
                      ? (l = "".concat(a(1e6), "M"))
                      : 1e3 < s && (l = "".concat(a(1e3), "K"))),
                    Ai(this.elements.count)
                      ? (this.elements.count.textContent = l)
                      : (Di(
                          this.elements.trigger,
                          Ui("span", { class: r.className })
                        ),
                        (this.elements.count = Ui(
                          "span",
                          {
                            class: ""
                              .concat(i.className, " ")
                              .concat(i.className, "--")
                              .concat(o),
                          },
                          l
                        )),
                        this.elements.trigger.insertAdjacentElement(
                          "after" === o ? "afterend" : "beforebegin",
                          this.elements.count
                        ));
                }
              },
            },
            {
              key: "href",
              get: function () {
                return Ai(this.elements.trigger)
                  ? this.elements.trigger.href
                  : null;
              },
            },
            {
              key: "network",
              get: function () {
                var e = this;
                if (!Ai(this.elements.trigger)) return null;
                var t = this.config.networks;
                return Object.keys(t).find(function (n) {
                  return (
                    (function (e) {
                      var t = new URL(e).hostname,
                        n = t.split("."),
                        i = n.length;
                      return (
                        2 < i &&
                          ((t = "".concat(n[i - 2], ".").concat(n[i - 1])),
                          2 === n[i - 2].length &&
                            2 === n[i - 1].length &&
                            (t = "".concat(n[i - 3], ".").concat(t))),
                        t
                      );
                    })(e.href) === t[n].domain
                  );
                });
              },
            },
            {
              key: "networkConfig",
              get: function () {
                return Oi(this.network)
                  ? null
                  : this.config.networks[this.network];
              },
            },
            {
              key: "target",
              get: function () {
                if (Oi(this.network)) return null;
                var e = new URL(this.href);
                switch (this.network) {
                  case "facebook":
                    return e.searchParams.get("u");
                  case "github":
                    return e.pathname.substring(1);
                  case "youtube":
                    return e.pathname.split("/").pop();
                  default:
                    return e.searchParams.get("url");
                }
              },
            },
            {
              key: "apiUrl",
              get: function () {
                if (Oi(this.network)) return null;
                var e = this.config.tokens;
                switch (this.network) {
                  case "github":
                    return this.networkConfig.url(this.target, e.github);
                  case "youtube":
                    return this.networkConfig.url(this.target, e.youtube);
                  default:
                    return this.networkConfig.url(
                      encodeURIComponent(this.target)
                    );
                }
              },
            },
          ],
          [
            {
              key: "setup",
              value: function (t) {
                var n =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = null;
                if (
                  (Ti(t)
                    ? (i = Array.from(document.querySelectorAll(t)))
                    : Ai(t)
                    ? (i = [t])
                    : Ci(t)
                    ? (i = Array.from(t))
                    : xi(t) && (i = t.filter(Ai)),
                  Oi(i))
                )
                  return null;
                var r = Object.assign({}, Ii, n);
                return (
                  Ti(t) &&
                    r.watch &&
                    new MutationObserver(function (n) {
                      Array.from(n).forEach(function (n) {
                        Array.from(n.addedNodes).forEach(function (n) {
                          Ai(n) && Ri(n, t) && new e(n, r);
                        });
                      });
                    }).observe(document.body, { childList: !0, subtree: !0 }),
                  i.map(function (t) {
                    return new e(t, n);
                  })
                );
              },
            },
          ]
        ),
        e
      );
    })();
    function Bi(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Vi(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function Wi(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function zi(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function Yi(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? zi(Object(n), !0).forEach(function (t) {
              Wi(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : zi(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Ki = { addCSS: !0, thumbWidth: 15, watch: !0 };
    function Ji(e, t) {
      return function () {
        return Array.from(document.querySelectorAll(t)).includes(this);
      }.call(e, t);
    }
    var Xi = function (e) {
        return null != e ? e.constructor : null;
      },
      Gi = function (e, t) {
        return !!(e && t && e instanceof t);
      },
      Qi = function (e) {
        return null == e;
      },
      Zi = function (e) {
        return Xi(e) === Object;
      },
      er = function (e) {
        return Xi(e) === String;
      },
      tr = function (e) {
        return Array.isArray(e);
      },
      nr = function (e) {
        return Gi(e, NodeList);
      },
      ir = er,
      rr = tr,
      sr = nr,
      or = function (e) {
        return Gi(e, Element);
      },
      ar = function (e) {
        return Gi(e, Event);
      },
      lr = function (e) {
        return (
          Qi(e) ||
          ((er(e) || tr(e) || nr(e)) && !e.length) ||
          (Zi(e) && !Object.keys(e).length)
        );
      };
    function cr(e, t) {
      if (1 > t) {
        var n = (function (e) {
          var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
          return t
            ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0))
            : 0;
        })(t);
        return parseFloat(e.toFixed(n));
      }
      return Math.round(e / t) * t;
    }
    var ur = (function () {
      function e(t, n) {
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          or(t)
            ? (this.element = t)
            : ir(t) && (this.element = document.querySelector(t)),
          or(this.element) &&
            lr(this.element.rangeTouch) &&
            ((this.config = Yi({}, Ki, {}, n)), this.init());
      }
      return (
        (function (e, t, n) {
          t && Vi(e.prototype, t), n && Vi(e, n);
        })(
          e,
          [
            {
              key: "init",
              value: function () {
                e.enabled &&
                  (this.config.addCSS &&
                    ((this.element.style.userSelect = "none"),
                    (this.element.style.webKitUserSelect = "none"),
                    (this.element.style.touchAction = "manipulation")),
                  this.listeners(!0),
                  (this.element.rangeTouch = this));
              },
            },
            {
              key: "destroy",
              value: function () {
                e.enabled &&
                  (this.config.addCSS &&
                    ((this.element.style.userSelect = ""),
                    (this.element.style.webKitUserSelect = ""),
                    (this.element.style.touchAction = "")),
                  this.listeners(!1),
                  (this.element.rangeTouch = null));
              },
            },
            {
              key: "listeners",
              value: function (e) {
                var t = this,
                  n = e ? "addEventListener" : "removeEventListener";
                ["touchstart", "touchmove", "touchend"].forEach(function (e) {
                  t.element[n](
                    e,
                    function (e) {
                      return t.set(e);
                    },
                    !1
                  );
                });
              },
            },
            {
              key: "get",
              value: function (t) {
                if (!e.enabled || !ar(t)) return null;
                var n,
                  i = t.target,
                  r = t.changedTouches[0],
                  s = parseFloat(i.getAttribute("min")) || 0,
                  o = parseFloat(i.getAttribute("max")) || 100,
                  a = parseFloat(i.getAttribute("step")) || 1,
                  l = i.getBoundingClientRect(),
                  c = ((100 / l.width) * (this.config.thumbWidth / 2)) / 100;
                return (
                  0 > (n = (100 / l.width) * (r.clientX - l.left))
                    ? (n = 0)
                    : 100 < n && (n = 100),
                  50 > n
                    ? (n -= (100 - 2 * n) * c)
                    : 50 < n && (n += 2 * (n - 50) * c),
                  s + cr((n / 100) * (o - s), a)
                );
              },
            },
            {
              key: "set",
              value: function (t) {
                e.enabled &&
                  ar(t) &&
                  !t.target.disabled &&
                  (t.preventDefault(),
                  (t.target.value = this.get(t)),
                  (function (e, t) {
                    if (e && t) {
                      var n = new Event(t, { bubbles: !0 });
                      e.dispatchEvent(n);
                    }
                  })(t.target, "touchend" === t.type ? "change" : "input"));
              },
            },
          ],
          [
            {
              key: "setup",
              value: function (t) {
                var n =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = null;
                if (
                  (lr(t) || ir(t)
                    ? (i = Array.from(
                        document.querySelectorAll(
                          ir(t) ? t : 'input[type="range"]'
                        )
                      ))
                    : or(t)
                    ? (i = [t])
                    : sr(t)
                    ? (i = Array.from(t))
                    : rr(t) && (i = t.filter(or)),
                  lr(i))
                )
                  return null;
                var r = Yi({}, Ki, {}, n);
                if (ir(t) && r.watch) {
                  var s = new MutationObserver(function (n) {
                    Array.from(n).forEach(function (n) {
                      Array.from(n.addedNodes).forEach(function (n) {
                        or(n) && Ji(n, t) && new e(n, r);
                      });
                    });
                  });
                  s.observe(document.body, { childList: !0, subtree: !0 });
                }
                return i.map(function (t) {
                  return new e(t, n);
                });
              },
            },
            {
              key: "enabled",
              get: function () {
                return "ontouchstart" in document.documentElement;
              },
            },
          ]
        ),
        e
      );
    })();
    const hr = (e) => (null != e ? e.constructor : null),
      dr = (e, t) => Boolean(e && t && e instanceof t),
      pr = (e) => null == e,
      fr = (e) => hr(e) === Object,
      mr = (e) => hr(e) === String,
      gr = (e) => hr(e) === Function,
      yr = (e) => Array.isArray(e),
      br = (e) => dr(e, NodeList),
      vr = (e) =>
        pr(e) ||
        ((mr(e) || yr(e) || br(e)) && !e.length) ||
        (fr(e) && !Object.keys(e).length);
    var wr = pr,
      _r = fr,
      kr = (e) => hr(e) === Number && !Number.isNaN(e),
      Er = mr,
      Tr = (e) => hr(e) === Boolean,
      Sr = gr,
      xr = yr,
      Cr = br,
      Ar = (e) =>
        null !== e &&
        "object" == typeof e &&
        1 === e.nodeType &&
        "object" == typeof e.style &&
        "object" == typeof e.ownerDocument,
      Pr = (e) => dr(e, Event),
      Or = (e) => dr(e, KeyboardEvent),
      jr = (e) => dr(e, TextTrack) || (!pr(e) && mr(e.kind)),
      Ir = (e) => dr(e, Promise) && gr(e.then),
      Nr = (e) => {
        if (dr(e, window.URL)) return !0;
        if (!mr(e)) return !1;
        let t = e;
        (e.startsWith("http://") && e.startsWith("https://")) ||
          (t = `http://${e}`);
        try {
          return !vr(new URL(t).hostname);
        } catch (e) {
          return !1;
        }
      },
      Lr = vr;
    const Mr = (() => {
      const e = document.createElement("span"),
        t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        },
        n = Object.keys(t).find((t) => void 0 !== e.style[t]);
      return !!Er(n) && t[n];
    })();
    function Rr(e, t) {
      setTimeout(() => {
        try {
          (e.hidden = !0), e.offsetHeight, (e.hidden = !1);
        } catch (e) {}
      }, t);
    }
    const Dr = {
      isIE: Boolean(window.document.documentMode),
      isEdge: window.navigator.userAgent.includes("Edge"),
      isWebkit:
        "WebkitAppearance" in document.documentElement.style &&
        !/Edge/.test(navigator.userAgent),
      isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
      isIos:
        ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) ||
        /(iPad|iPhone|iPod)/gi.test(navigator.platform),
    };
    function Ur(e, t) {
      return t.split(".").reduce((e, t) => e && e[t], e);
    }
    function Fr(e = {}, ...t) {
      if (!t.length) return e;
      const n = t.shift();
      return _r(n)
        ? (Object.keys(n).forEach((t) => {
            _r(n[t])
              ? (Object.keys(e).includes(t) || Object.assign(e, { [t]: {} }),
                Fr(e[t], n[t]))
              : Object.assign(e, { [t]: n[t] });
          }),
          Fr(e, ...t))
        : e;
    }
    function $r(e, t) {
      const n = e.length ? e : [e];
      Array.from(n)
        .reverse()
        .forEach((e, n) => {
          const i = n > 0 ? t.cloneNode(!0) : t,
            r = e.parentNode,
            s = e.nextSibling;
          i.appendChild(e), s ? r.insertBefore(i, s) : r.appendChild(i);
        });
    }
    function qr(e, t) {
      Ar(e) &&
        !Lr(t) &&
        Object.entries(t)
          .filter(([, e]) => !wr(e))
          .forEach(([t, n]) => e.setAttribute(t, n));
    }
    function Hr(e, t, n) {
      const i = document.createElement(e);
      return _r(t) && qr(i, t), Er(n) && (i.innerText = n), i;
    }
    function Br(e, t, n, i) {
      Ar(t) && t.appendChild(Hr(e, n, i));
    }
    function Vr(e) {
      Cr(e) || xr(e)
        ? Array.from(e).forEach(Vr)
        : Ar(e) && Ar(e.parentNode) && e.parentNode.removeChild(e);
    }
    function Wr(e) {
      if (!Ar(e)) return;
      let { length: t } = e.childNodes;
      for (; t > 0; ) e.removeChild(e.lastChild), (t -= 1);
    }
    function zr(e, t) {
      return Ar(t) && Ar(t.parentNode) && Ar(e)
        ? (t.parentNode.replaceChild(e, t), e)
        : null;
    }
    function Yr(e, t) {
      if (!Er(e) || Lr(e)) return {};
      const n = {},
        i = Fr({}, t);
      return (
        e.split(",").forEach((e) => {
          const t = e.trim(),
            r = t.replace(".", ""),
            s = t.replace(/[[\]]/g, "").split("="),
            [o] = s,
            a = s.length > 1 ? s[1].replace(/["']/g, "") : "";
          switch (t.charAt(0)) {
            case ".":
              Er(i.class) ? (n.class = `${i.class} ${r}`) : (n.class = r);
              break;
            case "#":
              n.id = t.replace("#", "");
              break;
            case "[":
              n[o] = a;
          }
        }),
        Fr(i, n)
      );
    }
    function Kr(e, t) {
      if (!Ar(e)) return;
      let n = t;
      Tr(n) || (n = !e.hidden), (e.hidden = n);
    }
    function Jr(e, t, n) {
      if (Cr(e)) return Array.from(e).map((e) => Jr(e, t, n));
      if (Ar(e)) {
        let i = "toggle";
        return (
          void 0 !== n && (i = n ? "add" : "remove"),
          e.classList[i](t),
          e.classList.contains(t)
        );
      }
      return !1;
    }
    function Xr(e, t) {
      return Ar(e) && e.classList.contains(t);
    }
    function Gr(e, t) {
      const { prototype: n } = Element;
      return (
        n.matches ||
        n.webkitMatchesSelector ||
        n.mozMatchesSelector ||
        n.msMatchesSelector ||
        function () {
          return Array.from(document.querySelectorAll(t)).includes(this);
        }
      ).call(e, t);
    }
    function Qr(e) {
      return this.elements.container.querySelectorAll(e);
    }
    function Zr(e) {
      return this.elements.container.querySelector(e);
    }
    function es(e = null, t = !1) {
      Ar(e) &&
        (e.focus({ preventScroll: !0 }),
        t && Jr(e, this.config.classNames.tabFocus));
    }
    const ts = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora",
      },
      ns = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check(e, t, n) {
          const i = Dr.isIPhone && n && ns.playsinline,
            r = ns[e] || "html5" !== t;
          return {
            api: r,
            ui: r && ns.rangeInput && ("video" !== e || !Dr.isIPhone || i),
          };
        },
        pip: !(
          Dr.isIPhone ||
          (!Sr(Hr("video").webkitSetPresentationMode) &&
            (!document.pictureInPictureEnabled ||
              Hr("video").disablePictureInPicture))
        ),
        airplay: Sr(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime(e) {
          if (Lr(e)) return !1;
          const [t] = e.split("/");
          let n = e;
          if (!this.isHTML5 || t !== this.type) return !1;
          Object.keys(ts).includes(n) && (n += `; codecs="${ts[e]}"`);
          try {
            return Boolean(n && this.media.canPlayType(n).replace(/no/, ""));
          } catch (e) {
            return !1;
          }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput: (() => {
          const e = document.createElement("input");
          return (e.type = "range"), "range" === e.type;
        })(),
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== Mr,
        reducedMotion:
          "matchMedia" in window &&
          window.matchMedia("(prefers-reduced-motion)").matches,
      },
      is = (() => {
        let e = !1;
        try {
          const t = Object.defineProperty({}, "passive", {
            get: () => ((e = !0), null),
          });
          window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t);
        } catch (e) {}
        return e;
      })();
    function rs(e, t, n, i = !1, r = !0, s = !1) {
      if (!e || !("addEventListener" in e) || Lr(t) || !Sr(n)) return;
      const o = t.split(" ");
      let a = s;
      is && (a = { passive: r, capture: s }),
        o.forEach((t) => {
          this &&
            this.eventListeners &&
            i &&
            this.eventListeners.push({
              element: e,
              type: t,
              callback: n,
              options: a,
            }),
            e[i ? "addEventListener" : "removeEventListener"](t, n, a);
        });
    }
    function ss(e, t = "", n, i = !0, r = !1) {
      rs.call(this, e, t, n, !0, i, r);
    }
    function os(e, t = "", n, i = !0, r = !1) {
      rs.call(this, e, t, n, !1, i, r);
    }
    function as(e, t = "", n, i = !0, r = !1) {
      const s = (...o) => {
        os(e, t, s, i, r), n.apply(this, o);
      };
      rs.call(this, e, t, s, !0, i, r);
    }
    function ls(e, t = "", n = !1, i = {}) {
      if (!Ar(e) || Lr(t)) return;
      const r = new CustomEvent(t, {
        bubbles: n,
        detail: { ...i, plyr: this },
      });
      e.dispatchEvent(r);
    }
    function cs() {
      this &&
        this.eventListeners &&
        (this.eventListeners.forEach((e) => {
          const { element: t, type: n, callback: i, options: r } = e;
          t.removeEventListener(n, i, r);
        }),
        (this.eventListeners = []));
    }
    function us() {
      return new Promise((e) =>
        this.ready
          ? setTimeout(e, 0)
          : ss.call(this, this.elements.container, "ready", e)
      ).then(() => {});
    }
    function hs(e) {
      Ir(e) && e.then(null, () => {});
    }
    function ds(e) {
      return xr(e) ? e.filter((t, n) => e.indexOf(t) === n) : e;
    }
    function ps(e, t) {
      return xr(e) && e.length
        ? e.reduce((e, n) => (Math.abs(n - t) < Math.abs(e - t) ? n : e))
        : null;
    }
    function fs(e) {
      return !(!window || !window.CSS) && window.CSS.supports(e);
    }
    const ms = [
      [1, 1],
      [4, 3],
      [3, 4],
      [5, 4],
      [4, 5],
      [3, 2],
      [2, 3],
      [16, 10],
      [10, 16],
      [16, 9],
      [9, 16],
      [21, 9],
      [9, 21],
      [32, 9],
      [9, 32],
    ].reduce((e, [t, n]) => ({ ...e, [t / n]: [t, n] }), {});
    function gs(e) {
      if (!(xr(e) || (Er(e) && e.includes(":")))) return !1;
      return (xr(e) ? e : e.split(":")).map(Number).every(kr);
    }
    function ys(e) {
      if (!xr(e) || !e.every(kr)) return null;
      const [t, n] = e,
        i = (e, t) => (0 === t ? e : i(t, e % t)),
        r = i(t, n);
      return [t / r, n / r];
    }
    function bs(e) {
      const t = (e) => (gs(e) ? e.split(":").map(Number) : null);
      let n = t(e);
      if (
        (null === n && (n = t(this.config.ratio)),
        null === n &&
          !Lr(this.embed) &&
          xr(this.embed.ratio) &&
          ({ ratio: n } = this.embed),
        null === n && this.isHTML5)
      ) {
        const { videoWidth: e, videoHeight: t } = this.media;
        n = [e, t];
      }
      return ys(n);
    }
    function vs(e) {
      if (!this.isVideo) return {};
      const { wrapper: t } = this.elements,
        n = bs.call(this, e);
      if (!xr(n)) return {};
      const [i, r] = ys(n),
        s = (100 / i) * r;
      if (
        (fs(`aspect-ratio: ${i}/${r}`)
          ? (t.style.aspectRatio = `${i}/${r}`)
          : (t.style.paddingBottom = `${s}%`),
        this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
      ) {
        const e =
            (100 / this.media.offsetWidth) *
            parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
          n = (e - s) / (e / 50);
        this.fullscreen.active
          ? (t.style.paddingBottom = null)
          : (this.media.style.transform = `translateY(-${n}%)`);
      } else
        this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
      return { padding: s, ratio: n };
    }
    function ws(e, t, n = 0.05) {
      const i = e / t,
        r = ps(Object.keys(ms), i);
      return Math.abs(r - i) <= n ? ms[r] : [e, t];
    }
    const _s = {
      getSources() {
        if (!this.isHTML5) return [];
        return Array.from(this.media.querySelectorAll("source")).filter((e) => {
          const t = e.getAttribute("type");
          return !!Lr(t) || ns.mime.call(this, t);
        });
      },
      getQualityOptions() {
        return this.config.quality.forced
          ? this.config.quality.options
          : _s.getSources
              .call(this)
              .map((e) => Number(e.getAttribute("size")))
              .filter(Boolean);
      },
      setup() {
        if (!this.isHTML5) return;
        const e = this;
        (e.options.speed = e.config.speed.options),
          Lr(this.config.ratio) || vs.call(e),
          Object.defineProperty(e.media, "quality", {
            get() {
              const t = _s.getSources
                .call(e)
                .find((t) => t.getAttribute("src") === e.source);
              return t && Number(t.getAttribute("size"));
            },
            set(t) {
              if (e.quality !== t) {
                if (e.config.quality.forced && Sr(e.config.quality.onChange))
                  e.config.quality.onChange(t);
                else {
                  const n = _s.getSources
                    .call(e)
                    .find((e) => Number(e.getAttribute("size")) === t);
                  if (!n) return;
                  const {
                    currentTime: i,
                    paused: r,
                    preload: s,
                    readyState: o,
                    playbackRate: a,
                  } = e.media;
                  (e.media.src = n.getAttribute("src")),
                    ("none" !== s || o) &&
                      (e.once("loadedmetadata", () => {
                        (e.speed = a), (e.currentTime = i), r || hs(e.play());
                      }),
                      e.media.load());
                }
                ls.call(e, e.media, "qualitychange", !1, { quality: t });
              }
            },
          });
      },
      cancelRequests() {
        this.isHTML5 &&
          (Vr(_s.getSources.call(this)),
          this.media.setAttribute("src", this.config.blankVideo),
          this.media.load(),
          this.debug.log("Cancelled network requests"));
      },
    };
    function ks(e, ...t) {
      return Lr(e)
        ? e
        : e.toString().replace(/{(\d+)}/g, (e, n) => t[n].toString());
    }
    const Es = (e = "", t = "", n = "") =>
        e.replace(
          new RegExp(
            t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
            "g"
          ),
          n.toString()
        ),
      Ts = (e = "") =>
        e
          .toString()
          .replace(
            /\w\S*/g,
            (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
          );
    function Ss(e = "") {
      let t = e.toString();
      return (
        (t = (function (e = "") {
          let t = e.toString();
          return (
            (t = Es(t, "-", " ")),
            (t = Es(t, "_", " ")),
            (t = Ts(t)),
            Es(t, " ", "")
          );
        })(t)),
        t.charAt(0).toLowerCase() + t.slice(1)
      );
    }
    function xs(e) {
      const t = document.createElement("div");
      return t.appendChild(e), t.innerHTML;
    }
    const Cs = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube",
      },
      As = {
        get(e = "", t = {}) {
          if (Lr(e) || Lr(t)) return "";
          let n = Ur(t.i18n, e);
          if (Lr(n)) return Object.keys(Cs).includes(e) ? Cs[e] : "";
          const i = { "{seektime}": t.seekTime, "{title}": t.title };
          return (
            Object.entries(i).forEach(([e, t]) => {
              n = Es(n, e, t);
            }),
            n
          );
        },
      };
    class Ps {
      constructor(e) {
        Bi(this, "get", (e) => {
          if (!Ps.supported || !this.enabled) return null;
          const t = window.localStorage.getItem(this.key);
          if (Lr(t)) return null;
          const n = JSON.parse(t);
          return Er(e) && e.length ? n[e] : n;
        }),
          Bi(this, "set", (e) => {
            if (!Ps.supported || !this.enabled) return;
            if (!_r(e)) return;
            let t = this.get();
            Lr(t) && (t = {}), Fr(t, e);
            try {
              window.localStorage.setItem(this.key, JSON.stringify(t));
            } catch (e) {}
          }),
          (this.enabled = e.config.storage.enabled),
          (this.key = e.config.storage.key);
      }
      static get supported() {
        try {
          if (!("localStorage" in window)) return !1;
          const e = "___test";
          return (
            window.localStorage.setItem(e, e),
            window.localStorage.removeItem(e),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
    }
    function Os(e, t = "text") {
      return new Promise((n, i) => {
        try {
          const i = new XMLHttpRequest();
          if (!("withCredentials" in i)) return;
          i.addEventListener("load", () => {
            if ("text" === t)
              try {
                n(JSON.parse(i.responseText));
              } catch (e) {
                n(i.responseText);
              }
            else n(i.response);
          }),
            i.addEventListener("error", () => {
              throw new Error(i.status);
            }),
            i.open("GET", e, !0),
            (i.responseType = t),
            i.send();
        } catch (e) {
          i(e);
        }
      });
    }
    function js(e, t) {
      if (!Er(e)) return;
      const n = Er(t);
      let i = !1;
      const r = () => null !== document.getElementById(t),
        s = (e, t) => {
          (e.innerHTML = t),
            (n && r()) || document.body.insertAdjacentElement("afterbegin", e);
        };
      if (!n || !r()) {
        const r = Ps.supported,
          o = document.createElement("div");
        if ((o.setAttribute("hidden", ""), n && o.setAttribute("id", t), r)) {
          const e = window.localStorage.getItem(`cache-${t}`);
          if (((i = null !== e), i)) {
            const t = JSON.parse(e);
            s(o, t.content);
          }
        }
        Os(e)
          .then((e) => {
            if (!Lr(e)) {
              if (r)
                try {
                  window.localStorage.setItem(
                    `cache-${t}`,
                    JSON.stringify({ content: e })
                  );
                } catch (e) {}
              s(o, e);
            }
          })
          .catch(() => {});
      }
    }
    const Is = (e) => Math.trunc((e / 60 / 60) % 60, 10);
    function Ns(e = 0, t = !1, n = !1) {
      if (!kr(e)) return Ns(void 0, t, n);
      const i = (e) => `0${e}`.slice(-2);
      let r = Is(e);
      const s = ((o = e), Math.trunc((o / 60) % 60, 10));
      var o;
      const a = ((e) => Math.trunc(e % 60, 10))(e);
      return (
        (r = t || r > 0 ? `${r}:` : ""),
        `${n && e > 0 ? "-" : ""}${r}${i(s)}:${i(a)}`
      );
    }
    const Ls = {
      getIconUrl() {
        const e = new URL(this.config.iconUrl, window.location),
          t = window.location.host
            ? window.location.host
            : window.top.location.host,
          n = e.host !== t || (Dr.isIE && !window.svg4everybody);
        return { url: this.config.iconUrl, cors: n };
      },
      findElements() {
        try {
          return (
            (this.elements.controls = Zr.call(
              this,
              this.config.selectors.controls.wrapper
            )),
            (this.elements.buttons = {
              play: Qr.call(this, this.config.selectors.buttons.play),
              pause: Zr.call(this, this.config.selectors.buttons.pause),
              restart: Zr.call(this, this.config.selectors.buttons.restart),
              rewind: Zr.call(this, this.config.selectors.buttons.rewind),
              fastForward: Zr.call(
                this,
                this.config.selectors.buttons.fastForward
              ),
              mute: Zr.call(this, this.config.selectors.buttons.mute),
              pip: Zr.call(this, this.config.selectors.buttons.pip),
              airplay: Zr.call(this, this.config.selectors.buttons.airplay),
              settings: Zr.call(this, this.config.selectors.buttons.settings),
              captions: Zr.call(this, this.config.selectors.buttons.captions),
              fullscreen: Zr.call(
                this,
                this.config.selectors.buttons.fullscreen
              ),
            }),
            (this.elements.progress = Zr.call(
              this,
              this.config.selectors.progress
            )),
            (this.elements.inputs = {
              seek: Zr.call(this, this.config.selectors.inputs.seek),
              volume: Zr.call(this, this.config.selectors.inputs.volume),
            }),
            (this.elements.display = {
              buffer: Zr.call(this, this.config.selectors.display.buffer),
              currentTime: Zr.call(
                this,
                this.config.selectors.display.currentTime
              ),
              duration: Zr.call(this, this.config.selectors.display.duration),
            }),
            Ar(this.elements.progress) &&
              (this.elements.display.seekTooltip =
                this.elements.progress.querySelector(
                  `.${this.config.classNames.tooltip}`
                )),
            !0
          );
        } catch (e) {
          return (
            this.debug.warn(
              "It looks like there is a problem with your custom controls HTML",
              e
            ),
            this.toggleNativeControls(!0),
            !1
          );
        }
      },
      createIcon(e, t) {
        const n = "http://www.w3.org/2000/svg",
          i = Ls.getIconUrl.call(this),
          r = `${i.cors ? "" : i.url}#${this.config.iconPrefix}`,
          s = document.createElementNS(n, "svg");
        qr(s, Fr(t, { "aria-hidden": "true", focusable: "false" }));
        const o = document.createElementNS(n, "use"),
          a = `${r}-${e}`;
        return (
          "href" in o &&
            o.setAttributeNS("http://www.w3.org/1999/xlink", "href", a),
          o.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a),
          s.appendChild(o),
          s
        );
      },
      createLabel(e, t = {}) {
        const n = As.get(e, this.config);
        return Hr(
          "span",
          {
            ...t,
            class: [t.class, this.config.classNames.hidden]
              .filter(Boolean)
              .join(" "),
          },
          n
        );
      },
      createBadge(e) {
        if (Lr(e)) return null;
        const t = Hr("span", { class: this.config.classNames.menu.value });
        return (
          t.appendChild(
            Hr("span", { class: this.config.classNames.menu.badge }, e)
          ),
          t
        );
      },
      createButton(e, t) {
        const n = Fr({}, t);
        let i = Ss(e);
        const r = {
          element: "button",
          toggle: !1,
          label: null,
          icon: null,
          labelPressed: null,
          iconPressed: null,
        };
        switch (
          (["element", "icon", "label"].forEach((e) => {
            Object.keys(n).includes(e) && ((r[e] = n[e]), delete n[e]);
          }),
          "button" !== r.element ||
            Object.keys(n).includes("type") ||
            (n.type = "button"),
          Object.keys(n).includes("class")
            ? n.class
                .split(" ")
                .some((e) => e === this.config.classNames.control) ||
              Fr(n, { class: `${n.class} ${this.config.classNames.control}` })
            : (n.class = this.config.classNames.control),
          e)
        ) {
          case "play":
            (r.toggle = !0),
              (r.label = "play"),
              (r.labelPressed = "pause"),
              (r.icon = "play"),
              (r.iconPressed = "pause");
            break;
          case "mute":
            (r.toggle = !0),
              (r.label = "mute"),
              (r.labelPressed = "unmute"),
              (r.icon = "volume"),
              (r.iconPressed = "muted");
            break;
          case "captions":
            (r.toggle = !0),
              (r.label = "enableCaptions"),
              (r.labelPressed = "disableCaptions"),
              (r.icon = "captions-off"),
              (r.iconPressed = "captions-on");
            break;
          case "fullscreen":
            (r.toggle = !0),
              (r.label = "enterFullscreen"),
              (r.labelPressed = "exitFullscreen"),
              (r.icon = "enter-fullscreen"),
              (r.iconPressed = "exit-fullscreen");
            break;
          case "play-large":
            (n.class += ` ${this.config.classNames.control}--overlaid`),
              (i = "play"),
              (r.label = "play"),
              (r.icon = "play");
            break;
          default:
            Lr(r.label) && (r.label = i), Lr(r.icon) && (r.icon = e);
        }
        const s = Hr(r.element);
        return (
          r.toggle
            ? (s.appendChild(
                Ls.createIcon.call(this, r.iconPressed, {
                  class: "icon--pressed",
                })
              ),
              s.appendChild(
                Ls.createIcon.call(this, r.icon, { class: "icon--not-pressed" })
              ),
              s.appendChild(
                Ls.createLabel.call(this, r.labelPressed, {
                  class: "label--pressed",
                })
              ),
              s.appendChild(
                Ls.createLabel.call(this, r.label, {
                  class: "label--not-pressed",
                })
              ))
            : (s.appendChild(Ls.createIcon.call(this, r.icon)),
              s.appendChild(Ls.createLabel.call(this, r.label))),
          Fr(n, Yr(this.config.selectors.buttons[i], n)),
          qr(s, n),
          "play" === i
            ? (xr(this.elements.buttons[i]) || (this.elements.buttons[i] = []),
              this.elements.buttons[i].push(s))
            : (this.elements.buttons[i] = s),
          s
        );
      },
      createRange(e, t) {
        const n = Hr(
          "input",
          Fr(
            Yr(this.config.selectors.inputs[e]),
            {
              type: "range",
              min: 0,
              max: 100,
              step: 0.01,
              value: 0,
              autocomplete: "off",
              role: "slider",
              "aria-label": As.get(e, this.config),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": 0,
            },
            t
          )
        );
        return (
          (this.elements.inputs[e] = n),
          Ls.updateRangeFill.call(this, n),
          ur.setup(n),
          n
        );
      },
      createProgress(e, t) {
        const n = Hr(
          "progress",
          Fr(
            Yr(this.config.selectors.display[e]),
            {
              min: 0,
              max: 100,
              value: 0,
              role: "progressbar",
              "aria-hidden": !0,
            },
            t
          )
        );
        if ("volume" !== e) {
          n.appendChild(Hr("span", null, "0"));
          const t = { played: "played", buffer: "buffered" }[e],
            i = t ? As.get(t, this.config) : "";
          n.innerText = `% ${i.toLowerCase()}`;
        }
        return (this.elements.display[e] = n), n;
      },
      createTime(e, t) {
        const n = Yr(this.config.selectors.display[e], t),
          i = Hr(
            "div",
            Fr(n, {
              class: `${n.class ? n.class : ""} ${
                this.config.classNames.display.time
              } `.trim(),
              "aria-label": As.get(e, this.config),
            }),
            "00:00"
          );
        return (this.elements.display[e] = i), i;
      },
      bindMenuItemShortcuts(e, t) {
        ss.call(
          this,
          e,
          "keydown keyup",
          (n) => {
            if (
              !["Space", "ArrowUp", "ArrowDown", "ArrowRight"].includes(n.key)
            )
              return;
            if ((n.preventDefault(), n.stopPropagation(), "keydown" === n.type))
              return;
            const i = Gr(e, '[role="menuitemradio"]');
            if (!i && ["Space", "ArrowRight"].includes(n.key))
              Ls.showMenuPanel.call(this, t, !0);
            else {
              let t;
              "Space" !== n.key &&
                ("ArrowDown" === n.key || (i && "ArrowRight" === n.key)
                  ? ((t = e.nextElementSibling),
                    Ar(t) || (t = e.parentNode.firstElementChild))
                  : ((t = e.previousElementSibling),
                    Ar(t) || (t = e.parentNode.lastElementChild)),
                es.call(this, t, !0));
            }
          },
          !1
        ),
          ss.call(this, e, "keyup", (e) => {
            "Return" === e.key && Ls.focusFirstMenuItem.call(this, null, !0);
          });
      },
      createMenuItem({
        value: e,
        list: t,
        type: n,
        title: i,
        badge: r = null,
        checked: s = !1,
      }) {
        const o = Yr(this.config.selectors.inputs[n]),
          a = Hr(
            "button",
            Fr(o, {
              type: "button",
              role: "menuitemradio",
              class: `${this.config.classNames.control} ${
                o.class ? o.class : ""
              }`.trim(),
              "aria-checked": s,
              value: e,
            })
          ),
          l = Hr("span");
        (l.innerHTML = i),
          Ar(r) && l.appendChild(r),
          a.appendChild(l),
          Object.defineProperty(a, "checked", {
            enumerable: !0,
            get: () => "true" === a.getAttribute("aria-checked"),
            set(e) {
              e &&
                Array.from(a.parentNode.children)
                  .filter((e) => Gr(e, '[role="menuitemradio"]'))
                  .forEach((e) => e.setAttribute("aria-checked", "false")),
                a.setAttribute("aria-checked", e ? "true" : "false");
            },
          }),
          this.listeners.bind(
            a,
            "click keyup",
            (t) => {
              if (!Or(t) || "Space" === t.key) {
                switch (
                  (t.preventDefault(), t.stopPropagation(), (a.checked = !0), n)
                ) {
                  case "language":
                    this.currentTrack = Number(e);
                    break;
                  case "quality":
                    this.quality = e;
                    break;
                  case "speed":
                    this.speed = parseFloat(e);
                }
                Ls.showMenuPanel.call(this, "home", Or(t));
              }
            },
            n,
            !1
          ),
          Ls.bindMenuItemShortcuts.call(this, a, n),
          t.appendChild(a);
      },
      formatTime(e = 0, t = !1) {
        if (!kr(e)) return e;
        return Ns(e, Is(this.duration) > 0, t);
      },
      updateTimeDisplay(e = null, t = 0, n = !1) {
        Ar(e) && kr(t) && (e.innerText = Ls.formatTime(t, n));
      },
      updateVolume() {
        this.supported.ui &&
          (Ar(this.elements.inputs.volume) &&
            Ls.setRange.call(
              this,
              this.elements.inputs.volume,
              this.muted ? 0 : this.volume
            ),
          Ar(this.elements.buttons.mute) &&
            (this.elements.buttons.mute.pressed =
              this.muted || 0 === this.volume));
      },
      setRange(e, t = 0) {
        Ar(e) && ((e.value = t), Ls.updateRangeFill.call(this, e));
      },
      updateProgress(e) {
        if (!this.supported.ui || !Pr(e)) return;
        let t = 0;
        const n = (e, t) => {
          const n = kr(t) ? t : 0,
            i = Ar(e) ? e : this.elements.display.buffer;
          if (Ar(i)) {
            i.value = n;
            const e = i.getElementsByTagName("span")[0];
            Ar(e) && (e.childNodes[0].nodeValue = n);
          }
        };
        if (e)
          switch (e.type) {
            case "timeupdate":
            case "seeking":
            case "seeked":
              (i = this.currentTime),
                (r = this.duration),
                (t =
                  0 === i || 0 === r || Number.isNaN(i) || Number.isNaN(r)
                    ? 0
                    : ((i / r) * 100).toFixed(2)),
                "timeupdate" === e.type &&
                  Ls.setRange.call(this, this.elements.inputs.seek, t);
              break;
            case "playing":
            case "progress":
              n(this.elements.display.buffer, 100 * this.buffered);
          }
        var i, r;
      },
      updateRangeFill(e) {
        const t = Pr(e) ? e.target : e;
        if (Ar(t) && "range" === t.getAttribute("type")) {
          if (Gr(t, this.config.selectors.inputs.seek)) {
            t.setAttribute("aria-valuenow", this.currentTime);
            const e = Ls.formatTime(this.currentTime),
              n = Ls.formatTime(this.duration),
              i = As.get("seekLabel", this.config);
            t.setAttribute(
              "aria-valuetext",
              i.replace("{currentTime}", e).replace("{duration}", n)
            );
          } else if (Gr(t, this.config.selectors.inputs.volume)) {
            const e = 100 * t.value;
            t.setAttribute("aria-valuenow", e),
              t.setAttribute("aria-valuetext", `${e.toFixed(1)}%`);
          } else t.setAttribute("aria-valuenow", t.value);
          Dr.isWebkit &&
            t.style.setProperty("--value", (t.value / t.max) * 100 + "%");
        }
      },
      updateSeekTooltip(e) {
        var t, n;
        if (
          !this.config.tooltips.seek ||
          !Ar(this.elements.inputs.seek) ||
          !Ar(this.elements.display.seekTooltip) ||
          0 === this.duration
        )
          return;
        const i = this.elements.display.seekTooltip,
          r = `${this.config.classNames.tooltip}--visible`,
          s = (e) => Jr(i, r, e);
        if (this.touch) return void s(!1);
        let o = 0;
        const a = this.elements.progress.getBoundingClientRect();
        if (Pr(e)) o = (100 / a.width) * (e.pageX - a.left);
        else {
          if (!Xr(i, r)) return;
          o = parseFloat(i.style.left, 10);
        }
        o < 0 ? (o = 0) : o > 100 && (o = 100);
        const l = (this.duration / 100) * o;
        i.innerText = Ls.formatTime(l);
        const c =
          null === (t = this.config.markers) ||
          void 0 === t ||
          null === (n = t.points) ||
          void 0 === n
            ? void 0
            : n.find(({ time: e }) => e === Math.round(l));
        c && i.insertAdjacentHTML("afterbegin", `${c.label}<br>`),
          (i.style.left = `${o}%`),
          Pr(e) &&
            ["mouseenter", "mouseleave"].includes(e.type) &&
            s("mouseenter" === e.type);
      },
      timeUpdate(e) {
        const t = !Ar(this.elements.display.duration) && this.config.invertTime;
        Ls.updateTimeDisplay.call(
          this,
          this.elements.display.currentTime,
          t ? this.duration - this.currentTime : this.currentTime,
          t
        ),
          (e && "timeupdate" === e.type && this.media.seeking) ||
            Ls.updateProgress.call(this, e);
      },
      durationUpdate() {
        if (!this.supported.ui || (!this.config.invertTime && this.currentTime))
          return;
        if (this.duration >= 2 ** 32)
          return (
            Kr(this.elements.display.currentTime, !0),
            void Kr(this.elements.progress, !0)
          );
        Ar(this.elements.inputs.seek) &&
          this.elements.inputs.seek.setAttribute(
            "aria-valuemax",
            this.duration
          );
        const e = Ar(this.elements.display.duration);
        !e &&
          this.config.displayDuration &&
          this.paused &&
          Ls.updateTimeDisplay.call(
            this,
            this.elements.display.currentTime,
            this.duration
          ),
          e &&
            Ls.updateTimeDisplay.call(
              this,
              this.elements.display.duration,
              this.duration
            ),
          this.config.markers.enabled && Ls.setMarkers.call(this),
          Ls.updateSeekTooltip.call(this);
      },
      toggleMenuButton(e, t) {
        Kr(this.elements.settings.buttons[e], !t);
      },
      updateSetting(e, t, n) {
        const i = this.elements.settings.panels[e];
        let r = null,
          s = t;
        if ("captions" === e) r = this.currentTrack;
        else {
          if (
            ((r = Lr(n) ? this[e] : n),
            Lr(r) && (r = this.config[e].default),
            !Lr(this.options[e]) && !this.options[e].includes(r))
          )
            return void this.debug.warn(`Unsupported value of '${r}' for ${e}`);
          if (!this.config[e].options.includes(r))
            return void this.debug.warn(`Disabled value of '${r}' for ${e}`);
        }
        if ((Ar(s) || (s = i && i.querySelector('[role="menu"]')), !Ar(s)))
          return;
        this.elements.settings.buttons[e].querySelector(
          `.${this.config.classNames.menu.value}`
        ).innerHTML = Ls.getLabel.call(this, e, r);
        const o = s && s.querySelector(`[value="${r}"]`);
        Ar(o) && (o.checked = !0);
      },
      getLabel(e, t) {
        switch (e) {
          case "speed":
            return 1 === t ? As.get("normal", this.config) : `${t}&times;`;
          case "quality":
            if (kr(t)) {
              const e = As.get(`qualityLabel.${t}`, this.config);
              return e.length ? e : `${t}p`;
            }
            return Ts(t);
          case "captions":
            return Ds.getLabel.call(this);
          default:
            return null;
        }
      },
      setQualityMenu(e) {
        if (!Ar(this.elements.settings.panels.quality)) return;
        const t = "quality",
          n =
            this.elements.settings.panels.quality.querySelector(
              '[role="menu"]'
            );
        xr(e) &&
          (this.options.quality = ds(e).filter((e) =>
            this.config.quality.options.includes(e)
          ));
        const i = !Lr(this.options.quality) && this.options.quality.length > 1;
        if (
          (Ls.toggleMenuButton.call(this, t, i),
          Wr(n),
          Ls.checkMenu.call(this),
          !i)
        )
          return;
        const r = (e) => {
          const t = As.get(`qualityBadge.${e}`, this.config);
          return t.length ? Ls.createBadge.call(this, t) : null;
        };
        this.options.quality
          .sort((e, t) => {
            const n = this.config.quality.options;
            return n.indexOf(e) > n.indexOf(t) ? 1 : -1;
          })
          .forEach((e) => {
            Ls.createMenuItem.call(this, {
              value: e,
              list: n,
              type: t,
              title: Ls.getLabel.call(this, "quality", e),
              badge: r(e),
            });
          }),
          Ls.updateSetting.call(this, t, n);
      },
      setCaptionsMenu() {
        if (!Ar(this.elements.settings.panels.captions)) return;
        const e = "captions",
          t =
            this.elements.settings.panels.captions.querySelector(
              '[role="menu"]'
            ),
          n = Ds.getTracks.call(this),
          i = Boolean(n.length);
        if (
          (Ls.toggleMenuButton.call(this, e, i),
          Wr(t),
          Ls.checkMenu.call(this),
          !i)
        )
          return;
        const r = n.map((e, n) => ({
          value: n,
          checked: this.captions.toggled && this.currentTrack === n,
          title: Ds.getLabel.call(this, e),
          badge:
            e.language && Ls.createBadge.call(this, e.language.toUpperCase()),
          list: t,
          type: "language",
        }));
        r.unshift({
          value: -1,
          checked: !this.captions.toggled,
          title: As.get("disabled", this.config),
          list: t,
          type: "language",
        }),
          r.forEach(Ls.createMenuItem.bind(this)),
          Ls.updateSetting.call(this, e, t);
      },
      setSpeedMenu() {
        if (!Ar(this.elements.settings.panels.speed)) return;
        const e = "speed",
          t =
            this.elements.settings.panels.speed.querySelector('[role="menu"]');
        this.options.speed = this.options.speed.filter(
          (e) => e >= this.minimumSpeed && e <= this.maximumSpeed
        );
        const n = !Lr(this.options.speed) && this.options.speed.length > 1;
        Ls.toggleMenuButton.call(this, e, n),
          Wr(t),
          Ls.checkMenu.call(this),
          n &&
            (this.options.speed.forEach((n) => {
              Ls.createMenuItem.call(this, {
                value: n,
                list: t,
                type: e,
                title: Ls.getLabel.call(this, "speed", n),
              });
            }),
            Ls.updateSetting.call(this, e, t));
      },
      checkMenu() {
        const { buttons: e } = this.elements.settings,
          t = !Lr(e) && Object.values(e).some((e) => !e.hidden);
        Kr(this.elements.settings.menu, !t);
      },
      focusFirstMenuItem(e, t = !1) {
        if (this.elements.settings.popup.hidden) return;
        let n = e;
        Ar(n) ||
          (n = Object.values(this.elements.settings.panels).find(
            (e) => !e.hidden
          ));
        const i = n.querySelector('[role^="menuitem"]');
        es.call(this, i, t);
      },
      toggleMenu(e) {
        const { popup: t } = this.elements.settings,
          n = this.elements.buttons.settings;
        if (!Ar(t) || !Ar(n)) return;
        const { hidden: i } = t;
        let r = i;
        if (Tr(e)) r = e;
        else if (Or(e) && "Escape" === e.key) r = !1;
        else if (Pr(e)) {
          const i = Sr(e.composedPath) ? e.composedPath()[0] : e.target,
            s = t.contains(i);
          if (s || (!s && e.target !== n && r)) return;
        }
        n.setAttribute("aria-expanded", r),
          Kr(t, !r),
          Jr(this.elements.container, this.config.classNames.menu.open, r),
          r && Or(e)
            ? Ls.focusFirstMenuItem.call(this, null, !0)
            : r || i || es.call(this, n, Or(e));
      },
      getMenuSize(e) {
        const t = e.cloneNode(!0);
        (t.style.position = "absolute"),
          (t.style.opacity = 0),
          t.removeAttribute("hidden"),
          e.parentNode.appendChild(t);
        const n = t.scrollWidth,
          i = t.scrollHeight;
        return Vr(t), { width: n, height: i };
      },
      showMenuPanel(e = "", t = !1) {
        const n = this.elements.container.querySelector(
          `#plyr-settings-${this.id}-${e}`
        );
        if (!Ar(n)) return;
        const i = n.parentNode,
          r = Array.from(i.children).find((e) => !e.hidden);
        if (ns.transitions && !ns.reducedMotion) {
          (i.style.width = `${r.scrollWidth}px`),
            (i.style.height = `${r.scrollHeight}px`);
          const e = Ls.getMenuSize.call(this, n),
            t = (e) => {
              e.target === i &&
                ["width", "height"].includes(e.propertyName) &&
                ((i.style.width = ""),
                (i.style.height = ""),
                os.call(this, i, Mr, t));
            };
          ss.call(this, i, Mr, t),
            (i.style.width = `${e.width}px`),
            (i.style.height = `${e.height}px`);
        }
        Kr(r, !0), Kr(n, !1), Ls.focusFirstMenuItem.call(this, n, t);
      },
      setDownloadUrl() {
        const e = this.elements.buttons.download;
        Ar(e) && e.setAttribute("href", this.download);
      },
      create(e) {
        const {
          bindMenuItemShortcuts: t,
          createButton: n,
          createProgress: i,
          createRange: r,
          createTime: s,
          setQualityMenu: o,
          setSpeedMenu: a,
          showMenuPanel: l,
        } = Ls;
        (this.elements.controls = null),
          xr(this.config.controls) &&
            this.config.controls.includes("play-large") &&
            this.elements.container.appendChild(n.call(this, "play-large"));
        const c = Hr("div", Yr(this.config.selectors.controls.wrapper));
        this.elements.controls = c;
        const u = { class: "plyr__controls__item" };
        return (
          ds(xr(this.config.controls) ? this.config.controls : []).forEach(
            (o) => {
              if (
                ("restart" === o && c.appendChild(n.call(this, "restart", u)),
                "rewind" === o && c.appendChild(n.call(this, "rewind", u)),
                "play" === o && c.appendChild(n.call(this, "play", u)),
                "fast-forward" === o &&
                  c.appendChild(n.call(this, "fast-forward", u)),
                "progress" === o)
              ) {
                const t = Hr("div", {
                    class: `${u.class} plyr__progress__container`,
                  }),
                  n = Hr("div", Yr(this.config.selectors.progress));
                if (
                  (n.appendChild(
                    r.call(this, "seek", { id: `plyr-seek-${e.id}` })
                  ),
                  n.appendChild(i.call(this, "buffer")),
                  this.config.tooltips.seek)
                ) {
                  const e = Hr(
                    "span",
                    { class: this.config.classNames.tooltip },
                    "00:00"
                  );
                  n.appendChild(e), (this.elements.display.seekTooltip = e);
                }
                (this.elements.progress = n),
                  t.appendChild(this.elements.progress),
                  c.appendChild(t);
              }
              if (
                ("current-time" === o &&
                  c.appendChild(s.call(this, "currentTime", u)),
                "duration" === o && c.appendChild(s.call(this, "duration", u)),
                "mute" === o || "volume" === o)
              ) {
                let { volume: t } = this.elements;
                if (
                  ((Ar(t) && c.contains(t)) ||
                    ((t = Hr(
                      "div",
                      Fr({}, u, { class: `${u.class} plyr__volume`.trim() })
                    )),
                    (this.elements.volume = t),
                    c.appendChild(t)),
                  "mute" === o && t.appendChild(n.call(this, "mute")),
                  "volume" === o && !Dr.isIos)
                ) {
                  const n = { max: 1, step: 0.05, value: this.config.volume };
                  t.appendChild(
                    r.call(this, "volume", Fr(n, { id: `plyr-volume-${e.id}` }))
                  );
                }
              }
              if (
                ("captions" === o && c.appendChild(n.call(this, "captions", u)),
                "settings" === o && !Lr(this.config.settings))
              ) {
                const i = Hr(
                  "div",
                  Fr({}, u, {
                    class: `${u.class} plyr__menu`.trim(),
                    hidden: "",
                  })
                );
                i.appendChild(
                  n.call(this, "settings", {
                    "aria-haspopup": !0,
                    "aria-controls": `plyr-settings-${e.id}`,
                    "aria-expanded": !1,
                  })
                );
                const r = Hr("div", {
                    class: "plyr__menu__container",
                    id: `plyr-settings-${e.id}`,
                    hidden: "",
                  }),
                  s = Hr("div"),
                  o = Hr("div", { id: `plyr-settings-${e.id}-home` }),
                  a = Hr("div", { role: "menu" });
                o.appendChild(a),
                  s.appendChild(o),
                  (this.elements.settings.panels.home = o),
                  this.config.settings.forEach((n) => {
                    const i = Hr(
                      "button",
                      Fr(Yr(this.config.selectors.buttons.settings), {
                        type: "button",
                        class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                        role: "menuitem",
                        "aria-haspopup": !0,
                        hidden: "",
                      })
                    );
                    t.call(this, i, n),
                      ss.call(this, i, "click", () => {
                        l.call(this, n, !1);
                      });
                    const r = Hr("span", null, As.get(n, this.config)),
                      o = Hr("span", {
                        class: this.config.classNames.menu.value,
                      });
                    (o.innerHTML = e[n]),
                      r.appendChild(o),
                      i.appendChild(r),
                      a.appendChild(i);
                    const c = Hr("div", {
                        id: `plyr-settings-${e.id}-${n}`,
                        hidden: "",
                      }),
                      u = Hr("button", {
                        type: "button",
                        class: `${this.config.classNames.control} ${this.config.classNames.control}--back`,
                      });
                    u.appendChild(
                      Hr("span", { "aria-hidden": !0 }, As.get(n, this.config))
                    ),
                      u.appendChild(
                        Hr(
                          "span",
                          { class: this.config.classNames.hidden },
                          As.get("menuBack", this.config)
                        )
                      ),
                      ss.call(
                        this,
                        c,
                        "keydown",
                        (e) => {
                          "ArrowLeft" === e.key &&
                            (e.preventDefault(),
                            e.stopPropagation(),
                            l.call(this, "home", !0));
                        },
                        !1
                      ),
                      ss.call(this, u, "click", () => {
                        l.call(this, "home", !1);
                      }),
                      c.appendChild(u),
                      c.appendChild(Hr("div", { role: "menu" })),
                      s.appendChild(c),
                      (this.elements.settings.buttons[n] = i),
                      (this.elements.settings.panels[n] = c);
                  }),
                  r.appendChild(s),
                  i.appendChild(r),
                  c.appendChild(i),
                  (this.elements.settings.popup = r),
                  (this.elements.settings.menu = i);
              }
              if (
                ("pip" === o && ns.pip && c.appendChild(n.call(this, "pip", u)),
                "airplay" === o &&
                  ns.airplay &&
                  c.appendChild(n.call(this, "airplay", u)),
                "download" === o)
              ) {
                const e = Fr({}, u, {
                  element: "a",
                  href: this.download,
                  target: "_blank",
                });
                this.isHTML5 && (e.download = "");
                const { download: t } = this.config.urls;
                !Nr(t) &&
                  this.isEmbed &&
                  Fr(e, {
                    icon: `logo-${this.provider}`,
                    label: this.provider,
                  }),
                  c.appendChild(n.call(this, "download", e));
              }
              "fullscreen" === o &&
                c.appendChild(n.call(this, "fullscreen", u));
            }
          ),
          this.isHTML5 && o.call(this, _s.getQualityOptions.call(this)),
          a.call(this),
          c
        );
      },
      inject() {
        if (this.config.loadSprite) {
          const e = Ls.getIconUrl.call(this);
          e.cors && js(e.url, "sprite-plyr");
        }
        this.id = Math.floor(1e4 * Math.random());
        let e = null;
        this.elements.controls = null;
        const t = {
          id: this.id,
          seektime: this.config.seekTime,
          title: this.config.title,
        };
        let n = !0;
        Sr(this.config.controls) &&
          (this.config.controls = this.config.controls.call(this, t)),
          this.config.controls || (this.config.controls = []),
          Ar(this.config.controls) || Er(this.config.controls)
            ? (e = this.config.controls)
            : ((e = Ls.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: Ds.getLabel.call(this),
              })),
              (n = !1));
        let i;
        n &&
          Er(this.config.controls) &&
          (e = ((e) => {
            let n = e;
            return (
              Object.entries(t).forEach(([e, t]) => {
                n = Es(n, `{${e}}`, t);
              }),
              n
            );
          })(e)),
          Er(this.config.selectors.controls.container) &&
            (i = document.querySelector(
              this.config.selectors.controls.container
            )),
          Ar(i) || (i = this.elements.container);
        if (
          (i[Ar(e) ? "insertAdjacentElement" : "insertAdjacentHTML"](
            "afterbegin",
            e
          ),
          Ar(this.elements.controls) || Ls.findElements.call(this),
          !Lr(this.elements.buttons))
        ) {
          const e = (e) => {
            const t = this.config.classNames.controlPressed;
            Object.defineProperty(e, "pressed", {
              enumerable: !0,
              get: () => Xr(e, t),
              set(n = !1) {
                Jr(e, t, n);
              },
            });
          };
          Object.values(this.elements.buttons)
            .filter(Boolean)
            .forEach((t) => {
              xr(t) || Cr(t) ? Array.from(t).filter(Boolean).forEach(e) : e(t);
            });
        }
        if ((Dr.isEdge && Rr(i), this.config.tooltips.controls)) {
          const { classNames: e, selectors: t } = this.config,
            n = `${t.controls.wrapper} ${t.labels} .${e.hidden}`,
            i = Qr.call(this, n);
          Array.from(i).forEach((e) => {
            Jr(e, this.config.classNames.hidden, !1),
              Jr(e, this.config.classNames.tooltip, !0);
          });
        }
      },
      setMediaMetadata() {
        try {
          "mediaSession" in navigator &&
            (navigator.mediaSession.metadata = new window.MediaMetadata({
              title: this.config.mediaMetadata.title,
              artist: this.config.mediaMetadata.artist,
              album: this.config.mediaMetadata.album,
              artwork: this.config.mediaMetadata.artwork,
            }));
        } catch (e) {}
      },
      setMarkers() {
        var e, t;
        if (!this.duration || this.elements.markers) return;
        const n =
          null === (e = this.config.markers) ||
          void 0 === e ||
          null === (t = e.points) ||
          void 0 === t
            ? void 0
            : t.filter(({ time: e }) => e > 0 && e < this.duration);
        if (null == n || !n.length) return;
        const i = document.createDocumentFragment(),
          r = document.createDocumentFragment();
        let s = null;
        const o = `${this.config.classNames.tooltip}--visible`,
          a = (e) => Jr(s, o, e);
        n.forEach((e) => {
          const t = Hr("span", { class: this.config.classNames.marker }, ""),
            n = (e.time / this.duration) * 100 + "%";
          s &&
            (t.addEventListener("mouseenter", () => {
              e.label || ((s.style.left = n), (s.innerHTML = e.label), a(!0));
            }),
            t.addEventListener("mouseleave", () => {
              a(!1);
            })),
            t.addEventListener("click", () => {
              this.currentTime = e.time;
            }),
            (t.style.left = n),
            r.appendChild(t);
        }),
          i.appendChild(r),
          this.config.tooltips.seek ||
            ((s = Hr("span", { class: this.config.classNames.tooltip }, "")),
            i.appendChild(s)),
          (this.elements.markers = { points: r, tip: s }),
          this.elements.progress.appendChild(i);
      },
    };
    function Ms(e, t = !0) {
      let n = e;
      if (t) {
        const e = document.createElement("a");
        (e.href = n), (n = e.href);
      }
      try {
        return new URL(n);
      } catch (e) {
        return null;
      }
    }
    function Rs(e) {
      const t = new URLSearchParams();
      return (
        _r(e) &&
          Object.entries(e).forEach(([e, n]) => {
            t.set(e, n);
          }),
        t
      );
    }
    const Ds = {
        setup() {
          if (!this.supported.ui) return;
          if (
            !this.isVideo ||
            this.isYouTube ||
            (this.isHTML5 && !ns.textTracks)
          )
            return void (
              xr(this.config.controls) &&
              this.config.controls.includes("settings") &&
              this.config.settings.includes("captions") &&
              Ls.setCaptionsMenu.call(this)
            );
          var e, t;
          if (
            (Ar(this.elements.captions) ||
              ((this.elements.captions = Hr(
                "div",
                Yr(this.config.selectors.captions)
              )),
              (e = this.elements.captions),
              (t = this.elements.wrapper),
              Ar(e) && Ar(t) && t.parentNode.insertBefore(e, t.nextSibling)),
            Dr.isIE && window.URL)
          ) {
            const e = this.media.querySelectorAll("track");
            Array.from(e).forEach((e) => {
              const t = e.getAttribute("src"),
                n = Ms(t);
              null !== n &&
                n.hostname !== window.location.href.hostname &&
                ["http:", "https:"].includes(n.protocol) &&
                Os(t, "blob")
                  .then((t) => {
                    e.setAttribute("src", window.URL.createObjectURL(t));
                  })
                  .catch(() => {
                    Vr(e);
                  });
            });
          }
          const n = ds(
            (
              navigator.languages || [
                navigator.language || navigator.userLanguage || "en",
              ]
            ).map((e) => e.split("-")[0])
          );
          let i = (
            this.storage.get("language") ||
            this.config.captions.language ||
            "auto"
          ).toLowerCase();
          "auto" === i && ([i] = n);
          let r = this.storage.get("captions");
          if (
            (Tr(r) || ({ active: r } = this.config.captions),
            Object.assign(this.captions, {
              toggled: !1,
              active: r,
              language: i,
              languages: n,
            }),
            this.isHTML5)
          ) {
            const e = this.config.captions.update
              ? "addtrack removetrack"
              : "removetrack";
            ss.call(this, this.media.textTracks, e, Ds.update.bind(this));
          }
          setTimeout(Ds.update.bind(this), 0);
        },
        update() {
          const e = Ds.getTracks.call(this, !0),
            {
              active: t,
              language: n,
              meta: i,
              currentTrackNode: r,
            } = this.captions,
            s = Boolean(e.find((e) => e.language === n));
          this.isHTML5 &&
            this.isVideo &&
            e
              .filter((e) => !i.get(e))
              .forEach((e) => {
                this.debug.log("Track added", e),
                  i.set(e, { default: "showing" === e.mode }),
                  "showing" === e.mode && (e.mode = "hidden"),
                  ss.call(this, e, "cuechange", () => Ds.updateCues.call(this));
              }),
            ((s && this.language !== n) || !e.includes(r)) &&
              (Ds.setLanguage.call(this, n), Ds.toggle.call(this, t && s)),
            this.elements &&
              Jr(
                this.elements.container,
                this.config.classNames.captions.enabled,
                !Lr(e)
              ),
            xr(this.config.controls) &&
              this.config.controls.includes("settings") &&
              this.config.settings.includes("captions") &&
              Ls.setCaptionsMenu.call(this);
        },
        toggle(e, t = !0) {
          if (!this.supported.ui) return;
          const { toggled: n } = this.captions,
            i = this.config.classNames.captions.active,
            r = wr(e) ? !n : e;
          if (r !== n) {
            if (
              (t ||
                ((this.captions.active = r), this.storage.set({ captions: r })),
              !this.language && r && !t)
            ) {
              const e = Ds.getTracks.call(this),
                t = Ds.findTrack.call(
                  this,
                  [this.captions.language, ...this.captions.languages],
                  !0
                );
              return (
                (this.captions.language = t.language),
                void Ds.set.call(this, e.indexOf(t))
              );
            }
            this.elements.buttons.captions &&
              (this.elements.buttons.captions.pressed = r),
              Jr(this.elements.container, i, r),
              (this.captions.toggled = r),
              Ls.updateSetting.call(this, "captions"),
              ls.call(
                this,
                this.media,
                r ? "captionsenabled" : "captionsdisabled"
              );
          }
          setTimeout(() => {
            r &&
              this.captions.toggled &&
              (this.captions.currentTrackNode.mode = "hidden");
          });
        },
        set(e, t = !0) {
          const n = Ds.getTracks.call(this);
          if (-1 !== e)
            if (kr(e))
              if (e in n) {
                if (this.captions.currentTrack !== e) {
                  this.captions.currentTrack = e;
                  const i = n[e],
                    { language: r } = i || {};
                  (this.captions.currentTrackNode = i),
                    Ls.updateSetting.call(this, "captions"),
                    t ||
                      ((this.captions.language = r),
                      this.storage.set({ language: r })),
                    this.isVimeo && this.embed.enableTextTrack(r),
                    ls.call(this, this.media, "languagechange");
                }
                Ds.toggle.call(this, !0, t),
                  this.isHTML5 && this.isVideo && Ds.updateCues.call(this);
              } else this.debug.warn("Track not found", e);
            else this.debug.warn("Invalid caption argument", e);
          else Ds.toggle.call(this, !1, t);
        },
        setLanguage(e, t = !0) {
          if (!Er(e))
            return void this.debug.warn("Invalid language argument", e);
          const n = e.toLowerCase();
          this.captions.language = n;
          const i = Ds.getTracks.call(this),
            r = Ds.findTrack.call(this, [n]);
          Ds.set.call(this, i.indexOf(r), t);
        },
        getTracks(e = !1) {
          return Array.from((this.media || {}).textTracks || [])
            .filter((t) => !this.isHTML5 || e || this.captions.meta.has(t))
            .filter((e) => ["captions", "subtitles"].includes(e.kind));
        },
        findTrack(e, t = !1) {
          const n = Ds.getTracks.call(this),
            i = (e) => Number((this.captions.meta.get(e) || {}).default),
            r = Array.from(n).sort((e, t) => i(t) - i(e));
          let s;
          return (
            e.every((e) => ((s = r.find((t) => t.language === e)), !s)),
            s || (t ? r[0] : void 0)
          );
        },
        getCurrentTrack() {
          return Ds.getTracks.call(this)[this.currentTrack];
        },
        getLabel(e) {
          let t = e;
          return (
            !jr(t) &&
              ns.textTracks &&
              this.captions.toggled &&
              (t = Ds.getCurrentTrack.call(this)),
            jr(t)
              ? Lr(t.label)
                ? Lr(t.language)
                  ? As.get("enabled", this.config)
                  : e.language.toUpperCase()
                : t.label
              : As.get("disabled", this.config)
          );
        },
        updateCues(e) {
          if (!this.supported.ui) return;
          if (!Ar(this.elements.captions))
            return void this.debug.warn("No captions element to render to");
          if (!wr(e) && !Array.isArray(e))
            return void this.debug.warn("updateCues: Invalid input", e);
          let t = e;
          if (!t) {
            const e = Ds.getCurrentTrack.call(this);
            t = Array.from((e || {}).activeCues || [])
              .map((e) => e.getCueAsHTML())
              .map(xs);
          }
          const n = t.map((e) => e.trim()).join("\n");
          if (n !== this.elements.captions.innerHTML) {
            Wr(this.elements.captions);
            const e = Hr("span", Yr(this.config.selectors.caption));
            (e.innerHTML = n),
              this.elements.captions.appendChild(e),
              ls.call(this, this.media, "cuechange");
          }
        },
      },
      Us = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: null,
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.7.2/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
          default: 576,
          options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
          forced: !1,
          onChange: null,
        },
        loop: { active: !1 },
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
        keyboard: { focused: !0, global: !1 },
        tooltips: { controls: !1, seek: !0 },
        captions: { active: !1, language: "auto", update: !1 },
        fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
        storage: { enabled: !0, key: "plyr" },
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "captions",
          "settings",
          "pip",
          "airplay",
          "fullscreen",
        ],
        settings: ["captions", "quality", "speed"],
        i18n: {
          restart: "Restart",
          rewind: "Rewind {seektime}s",
          play: "Play",
          pause: "Pause",
          fastForward: "Forward {seektime}s",
          seek: "Seek",
          seekLabel: "{currentTime} of {duration}",
          played: "Played",
          buffered: "Buffered",
          currentTime: "Current time",
          duration: "Duration",
          volume: "Volume",
          mute: "Mute",
          unmute: "Unmute",
          enableCaptions: "Enable captions",
          disableCaptions: "Disable captions",
          download: "Download",
          enterFullscreen: "Enter fullscreen",
          exitFullscreen: "Exit fullscreen",
          frameTitle: "Player for {title}",
          captions: "Captions",
          settings: "Settings",
          pip: "PIP",
          menuBack: "Go back to previous menu",
          speed: "Speed",
          normal: "Normal",
          quality: "Quality",
          loop: "Loop",
          start: "Start",
          end: "End",
          all: "All",
          reset: "Reset",
          disabled: "Disabled",
          enabled: "Enabled",
          advertisement: "Ad",
          qualityBadge: {
            2160: "4K",
            1440: "HD",
            1080: "HD",
            720: "HD",
            576: "SD",
            480: "SD",
          },
        },
        urls: {
          download: null,
          vimeo: {
            sdk: "https://player.vimeo.com/api/player.js",
            iframe: "https://player.vimeo.com/video/{0}?{1}",
            api: "https://vimeo.com/api/oembed.json?url={0}",
          },
          youtube: {
            sdk: "https://www.youtube.com/iframe_api",
            api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
          },
          googleIMA: {
            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
          },
        },
        listeners: {
          seek: null,
          play: null,
          pause: null,
          restart: null,
          rewind: null,
          fastForward: null,
          mute: null,
          volume: null,
          captions: null,
          download: null,
          fullscreen: null,
          pip: null,
          airplay: null,
          speed: null,
          quality: null,
          loop: null,
          language: null,
        },
        events: [
          "ended",
          "progress",
          "stalled",
          "playing",
          "waiting",
          "canplay",
          "canplaythrough",
          "loadstart",
          "loadeddata",
          "loadedmetadata",
          "timeupdate",
          "volumechange",
          "play",
          "pause",
          "error",
          "seeking",
          "seeked",
          "emptied",
          "ratechange",
          "cuechange",
          "download",
          "enterfullscreen",
          "exitfullscreen",
          "captionsenabled",
          "captionsdisabled",
          "languagechange",
          "controlshidden",
          "controlsshown",
          "ready",
          "statechange",
          "qualitychange",
          "adsloaded",
          "adscontentpause",
          "adscontentresume",
          "adstarted",
          "adsmidpoint",
          "adscomplete",
          "adsallcomplete",
          "adsimpression",
          "adsclick",
        ],
        selectors: {
          editable: "input, textarea, select, [contenteditable]",
          container: ".plyr",
          controls: { container: null, wrapper: ".plyr__controls" },
          labels: "[data-plyr]",
          buttons: {
            play: '[data-plyr="play"]',
            pause: '[data-plyr="pause"]',
            restart: '[data-plyr="restart"]',
            rewind: '[data-plyr="rewind"]',
            fastForward: '[data-plyr="fast-forward"]',
            mute: '[data-plyr="mute"]',
            captions: '[data-plyr="captions"]',
            download: '[data-plyr="download"]',
            fullscreen: '[data-plyr="fullscreen"]',
            pip: '[data-plyr="pip"]',
            airplay: '[data-plyr="airplay"]',
            settings: '[data-plyr="settings"]',
            loop: '[data-plyr="loop"]',
          },
          inputs: {
            seek: '[data-plyr="seek"]',
            volume: '[data-plyr="volume"]',
            speed: '[data-plyr="speed"]',
            language: '[data-plyr="language"]',
            quality: '[data-plyr="quality"]',
          },
          display: {
            currentTime: ".plyr__time--current",
            duration: ".plyr__time--duration",
            buffer: ".plyr__progress__buffer",
            loop: ".plyr__progress__loop",
            volume: ".plyr__volume--display",
          },
          progress: ".plyr__progress",
          captions: ".plyr__captions",
          caption: ".plyr__caption",
        },
        classNames: {
          type: "plyr--{0}",
          provider: "plyr--{0}",
          video: "plyr__video-wrapper",
          embed: "plyr__video-embed",
          videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
          embedContainer: "plyr__video-embed__container",
          poster: "plyr__poster",
          posterEnabled: "plyr__poster-enabled",
          ads: "plyr__ads",
          control: "plyr__control",
          controlPressed: "plyr__control--pressed",
          playing: "plyr--playing",
          paused: "plyr--paused",
          stopped: "plyr--stopped",
          loading: "plyr--loading",
          hover: "plyr--hover",
          tooltip: "plyr__tooltip",
          cues: "plyr__cues",
          marker: "plyr__progress__marker",
          hidden: "plyr__sr-only",
          hideControls: "plyr--hide-controls",
          isIos: "plyr--is-ios",
          isTouch: "plyr--is-touch",
          uiSupported: "plyr--full-ui",
          noTransition: "plyr--no-transition",
          display: { time: "plyr__time" },
          menu: {
            value: "plyr__menu__value",
            badge: "plyr__badge",
            open: "plyr--menu-open",
          },
          captions: {
            enabled: "plyr--captions-enabled",
            active: "plyr--captions-active",
          },
          fullscreen: {
            enabled: "plyr--fullscreen-enabled",
            fallback: "plyr--fullscreen-fallback",
          },
          pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" },
          airplay: {
            supported: "plyr--airplay-supported",
            active: "plyr--airplay-active",
          },
          tabFocus: "plyr__tab-focus",
          previewThumbnails: {
            thumbContainer: "plyr__preview-thumb",
            thumbContainerShown: "plyr__preview-thumb--is-shown",
            imageContainer: "plyr__preview-thumb__image-container",
            timeContainer: "plyr__preview-thumb__time-container",
            scrubbingContainer: "plyr__preview-scrubbing",
            scrubbingContainerShown: "plyr__preview-scrubbing--is-shown",
          },
        },
        attributes: {
          embed: {
            provider: "data-plyr-provider",
            id: "data-plyr-embed-id",
            hash: "data-plyr-embed-hash",
          },
        },
        ads: { enabled: !1, publisherId: "", tagUrl: "" },
        previewThumbnails: { enabled: !1, src: "" },
        vimeo: {
          byline: !1,
          portrait: !1,
          title: !1,
          speed: !0,
          transparent: !1,
          customControls: !0,
          referrerPolicy: null,
          premium: !1,
        },
        youtube: {
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          customControls: !0,
          noCookie: !1,
        },
        mediaMetadata: { title: "", artist: "", album: "", artwork: [] },
        markers: { enabled: !1, points: [] },
      },
      Fs = "picture-in-picture",
      $s = "inline",
      qs = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
      Hs = "audio",
      Bs = "video";
    const Vs = () => {};
    class Ws {
      constructor(e = !1) {
        (this.enabled = window.console && e),
          this.enabled && this.log("Debugging enabled");
      }
      get log() {
        return this.enabled
          ? Function.prototype.bind.call(console.log, console)
          : Vs;
      }
      get warn() {
        return this.enabled
          ? Function.prototype.bind.call(console.warn, console)
          : Vs;
      }
      get error() {
        return this.enabled
          ? Function.prototype.bind.call(console.error, console)
          : Vs;
      }
    }
    class zs {
      constructor(e) {
        Bi(this, "onChange", () => {
          if (!this.enabled) return;
          const e = this.player.elements.buttons.fullscreen;
          Ar(e) && (e.pressed = this.active);
          const t =
            this.target === this.player.media
              ? this.target
              : this.player.elements.container;
          ls.call(
            this.player,
            t,
            this.active ? "enterfullscreen" : "exitfullscreen",
            !0
          );
        }),
          Bi(this, "toggleFallback", (e = !1) => {
            if (
              (e
                ? (this.scrollPosition = {
                    x: window.scrollX || 0,
                    y: window.scrollY || 0,
                  })
                : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
              (document.body.style.overflow = e ? "hidden" : ""),
              Jr(
                this.target,
                this.player.config.classNames.fullscreen.fallback,
                e
              ),
              Dr.isIos)
            ) {
              let t = document.head.querySelector('meta[name="viewport"]');
              const n = "viewport-fit=cover";
              t ||
                ((t = document.createElement("meta")),
                t.setAttribute("name", "viewport"));
              const i = Er(t.content) && t.content.includes(n);
              e
                ? ((this.cleanupViewport = !i), i || (t.content += `,${n}`))
                : this.cleanupViewport &&
                  (t.content = t.content
                    .split(",")
                    .filter((e) => e.trim() !== n)
                    .join(","));
            }
            this.onChange();
          }),
          Bi(this, "trapFocus", (e) => {
            if (Dr.isIos || !this.active || "Tab" !== e.key) return;
            const t = document.activeElement,
              n = Qr.call(
                this.player,
                "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
              ),
              [i] = n,
              r = n[n.length - 1];
            t !== r || e.shiftKey
              ? t === i && e.shiftKey && (r.focus(), e.preventDefault())
              : (i.focus(), e.preventDefault());
          }),
          Bi(this, "update", () => {
            if (this.enabled) {
              let e;
              (e = this.forceFallback
                ? "Fallback (forced)"
                : zs.native
                ? "Native"
                : "Fallback"),
                this.player.debug.log(`${e} fullscreen enabled`);
            } else
              this.player.debug.log(
                "Fullscreen not supported and fallback disabled"
              );
            Jr(
              this.player.elements.container,
              this.player.config.classNames.fullscreen.enabled,
              this.enabled
            );
          }),
          Bi(this, "enter", () => {
            this.enabled &&
              (Dr.isIos && this.player.config.fullscreen.iosNative
                ? this.player.isVimeo
                  ? this.player.embed.requestFullscreen()
                  : this.target.webkitEnterFullscreen()
                : !zs.native || this.forceFallback
                ? this.toggleFallback(!0)
                : this.prefix
                ? Lr(this.prefix) ||
                  this.target[`${this.prefix}Request${this.property}`]()
                : this.target.requestFullscreen({ navigationUI: "hide" }));
          }),
          Bi(this, "exit", () => {
            if (this.enabled)
              if (Dr.isIos && this.player.config.fullscreen.iosNative)
                this.target.webkitExitFullscreen(), hs(this.player.play());
              else if (!zs.native || this.forceFallback)
                this.toggleFallback(!1);
              else if (this.prefix) {
                if (!Lr(this.prefix)) {
                  const e = "moz" === this.prefix ? "Cancel" : "Exit";
                  document[`${this.prefix}${e}${this.property}`]();
                }
              } else
                (document.cancelFullScreen || document.exitFullscreen).call(
                  document
                );
          }),
          Bi(this, "toggle", () => {
            this.active ? this.exit() : this.enter();
          }),
          (this.player = e),
          (this.prefix = zs.prefix),
          (this.property = zs.property),
          (this.scrollPosition = { x: 0, y: 0 }),
          (this.forceFallback = "force" === e.config.fullscreen.fallback),
          (this.player.elements.fullscreen =
            e.config.fullscreen.container &&
            (function (e, t) {
              const { prototype: n } = Element;
              return (
                n.closest ||
                function () {
                  let e = this;
                  do {
                    if (Gr.matches(e, t)) return e;
                    e = e.parentElement || e.parentNode;
                  } while (null !== e && 1 === e.nodeType);
                  return null;
                }
              ).call(e, t);
            })(this.player.elements.container, e.config.fullscreen.container)),
          ss.call(
            this.player,
            document,
            "ms" === this.prefix
              ? "MSFullscreenChange"
              : `${this.prefix}fullscreenchange`,
            () => {
              this.onChange();
            }
          ),
          ss.call(
            this.player,
            this.player.elements.container,
            "dblclick",
            (e) => {
              (Ar(this.player.elements.controls) &&
                this.player.elements.controls.contains(e.target)) ||
                this.player.listeners.proxy(e, this.toggle, "fullscreen");
            }
          ),
          ss.call(this, this.player.elements.container, "keydown", (e) =>
            this.trapFocus(e)
          ),
          this.update();
      }
      static get native() {
        return !!(
          document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled
        );
      }
      get usingNative() {
        return zs.native && !this.forceFallback;
      }
      static get prefix() {
        if (Sr(document.exitFullscreen)) return "";
        let e = "";
        return (
          ["webkit", "moz", "ms"].some(
            (t) =>
              !(
                !Sr(document[`${t}ExitFullscreen`]) &&
                !Sr(document[`${t}CancelFullScreen`])
              ) && ((e = t), !0)
          ),
          e
        );
      }
      static get property() {
        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
      }
      get enabled() {
        return (
          (zs.native || this.player.config.fullscreen.fallback) &&
          this.player.config.fullscreen.enabled &&
          this.player.supported.ui &&
          this.player.isVideo
        );
      }
      get active() {
        if (!this.enabled) return !1;
        if (!zs.native || this.forceFallback)
          return Xr(
            this.target,
            this.player.config.classNames.fullscreen.fallback
          );
        const e = this.prefix
          ? this.target.getRootNode()[`${this.prefix}${this.property}Element`]
          : this.target.getRootNode().fullscreenElement;
        return e && e.shadowRoot
          ? e === this.target.getRootNode().host
          : e === this.target;
      }
      get target() {
        return Dr.isIos && this.player.config.fullscreen.iosNative
          ? this.player.media
          : this.player.elements.fullscreen || this.player.elements.container;
      }
    }
    function Ys(e, t = 1) {
      return new Promise((n, i) => {
        const r = new Image(),
          s = () => {
            delete r.onload, delete r.onerror, (r.naturalWidth >= t ? n : i)(r);
          };
        Object.assign(r, { onload: s, onerror: s, src: e });
      });
    }
    const Ks = {
      addStyleHook() {
        Jr(
          this.elements.container,
          this.config.selectors.container.replace(".", ""),
          !0
        ),
          Jr(
            this.elements.container,
            this.config.classNames.uiSupported,
            this.supported.ui
          );
      },
      toggleNativeControls(e = !1) {
        e && this.isHTML5
          ? this.media.setAttribute("controls", "")
          : this.media.removeAttribute("controls");
      },
      build() {
        if ((this.listeners.media(), !this.supported.ui))
          return (
            this.debug.warn(
              `Basic support only for ${this.provider} ${this.type}`
            ),
            void Ks.toggleNativeControls.call(this, !0)
          );
        Ar(this.elements.controls) ||
          (Ls.inject.call(this), this.listeners.controls()),
          Ks.toggleNativeControls.call(this),
          this.isHTML5 && Ds.setup.call(this),
          (this.volume = null),
          (this.muted = null),
          (this.loop = null),
          (this.quality = null),
          (this.speed = null),
          Ls.updateVolume.call(this),
          Ls.timeUpdate.call(this),
          Ls.durationUpdate.call(this),
          Ks.checkPlaying.call(this),
          Jr(
            this.elements.container,
            this.config.classNames.pip.supported,
            ns.pip && this.isHTML5 && this.isVideo
          ),
          Jr(
            this.elements.container,
            this.config.classNames.airplay.supported,
            ns.airplay && this.isHTML5
          ),
          Jr(this.elements.container, this.config.classNames.isIos, Dr.isIos),
          Jr(
            this.elements.container,
            this.config.classNames.isTouch,
            this.touch
          ),
          (this.ready = !0),
          setTimeout(() => {
            ls.call(this, this.media, "ready");
          }, 0),
          Ks.setTitle.call(this),
          this.poster &&
            Ks.setPoster.call(this, this.poster, !1).catch(() => {}),
          this.config.duration && Ls.durationUpdate.call(this),
          this.config.mediaMetadata && Ls.setMediaMetadata.call(this);
      },
      setTitle() {
        let e = As.get("play", this.config);
        if (
          (Er(this.config.title) &&
            !Lr(this.config.title) &&
            (e += `, ${this.config.title}`),
          Array.from(this.elements.buttons.play || []).forEach((t) => {
            t.setAttribute("aria-label", e);
          }),
          this.isEmbed)
        ) {
          const e = Zr.call(this, "iframe");
          if (!Ar(e)) return;
          const t = Lr(this.config.title) ? "video" : this.config.title,
            n = As.get("frameTitle", this.config);
          e.setAttribute("title", n.replace("{title}", t));
        }
      },
      togglePoster(e) {
        Jr(this.elements.container, this.config.classNames.posterEnabled, e);
      },
      setPoster(e, t = !0) {
        return t && this.poster
          ? Promise.reject(new Error("Poster already set"))
          : (this.media.setAttribute("data-poster", e),
            this.elements.poster.removeAttribute("hidden"),
            us
              .call(this)
              .then(() => Ys(e))
              .catch((t) => {
                throw (e === this.poster && Ks.togglePoster.call(this, !1), t);
              })
              .then(() => {
                if (e !== this.poster)
                  throw new Error(
                    "setPoster cancelled by later call to setPoster"
                  );
              })
              .then(
                () => (
                  Object.assign(this.elements.poster.style, {
                    backgroundImage: `url('${e}')`,
                    backgroundSize: "",
                  }),
                  Ks.togglePoster.call(this, !0),
                  e
                )
              ));
      },
      checkPlaying(e) {
        Jr(
          this.elements.container,
          this.config.classNames.playing,
          this.playing
        ),
          Jr(
            this.elements.container,
            this.config.classNames.paused,
            this.paused
          ),
          Jr(
            this.elements.container,
            this.config.classNames.stopped,
            this.stopped
          ),
          Array.from(this.elements.buttons.play || []).forEach((e) => {
            Object.assign(e, { pressed: this.playing }),
              e.setAttribute(
                "aria-label",
                As.get(this.playing ? "pause" : "play", this.config)
              );
          }),
          (Pr(e) && "timeupdate" === e.type) || Ks.toggleControls.call(this);
      },
      checkLoading(e) {
        (this.loading = ["stalled", "waiting"].includes(e.type)),
          clearTimeout(this.timers.loading),
          (this.timers.loading = setTimeout(
            () => {
              Jr(
                this.elements.container,
                this.config.classNames.loading,
                this.loading
              ),
                Ks.toggleControls.call(this);
            },
            this.loading ? 250 : 0
          ));
      },
      toggleControls(e) {
        const { controls: t } = this.elements;
        if (t && this.config.hideControls) {
          const n = this.touch && this.lastSeekTime + 2e3 > Date.now();
          this.toggleControls(
            Boolean(
              e || this.loading || this.paused || t.pressed || t.hover || n
            )
          );
        }
      },
      migrateStyles() {
        Object.values({ ...this.media.style })
          .filter((e) => !Lr(e) && Er(e) && e.startsWith("--plyr"))
          .forEach((e) => {
            this.elements.container.style.setProperty(
              e,
              this.media.style.getPropertyValue(e)
            ),
              this.media.style.removeProperty(e);
          }),
          Lr(this.media.style) && this.media.removeAttribute("style");
      },
    };
    class Js {
      constructor(e) {
        Bi(this, "firstTouch", () => {
          const { player: e } = this,
            { elements: t } = e;
          (e.touch = !0), Jr(t.container, e.config.classNames.isTouch, !0);
        }),
          Bi(this, "setTabFocus", (e) => {
            const { player: t } = this,
              { elements: n } = t,
              { key: i, type: r, timeStamp: s } = e;
            if ((clearTimeout(this.focusTimer), "keydown" === r && "Tab" !== i))
              return;
            "keydown" === r && (this.lastKeyDown = s);
            const o = s - this.lastKeyDown <= 20;
            ("focus" !== r || o) &&
              ((() => {
                const e = t.config.classNames.tabFocus;
                Jr(Qr.call(t, `.${e}`), e, !1);
              })(),
              "focusout" !== r &&
                (this.focusTimer = setTimeout(() => {
                  const e = document.activeElement;
                  n.container.contains(e) &&
                    Jr(
                      document.activeElement,
                      t.config.classNames.tabFocus,
                      !0
                    );
                }, 10)));
          }),
          Bi(this, "global", (e = !0) => {
            const { player: t } = this;
            t.config.keyboard.global &&
              rs.call(t, window, "keydown keyup", this.handleKey, e, !1),
              rs.call(t, document.body, "click", this.toggleMenu, e),
              as.call(t, document.body, "touchstart", this.firstTouch),
              rs.call(
                t,
                document.body,
                "keydown focus blur focusout",
                this.setTabFocus,
                e,
                !1,
                !0
              );
          }),
          Bi(this, "container", () => {
            const { player: e } = this,
              { config: t, elements: n, timers: i } = e;
            !t.keyboard.global &&
              t.keyboard.focused &&
              ss.call(e, n.container, "keydown keyup", this.handleKey, !1),
              ss.call(
                e,
                n.container,
                "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                (t) => {
                  const { controls: r } = n;
                  r &&
                    "enterfullscreen" === t.type &&
                    ((r.pressed = !1), (r.hover = !1));
                  let s = 0;
                  ["touchstart", "touchmove", "mousemove"].includes(t.type) &&
                    (Ks.toggleControls.call(e, !0), (s = e.touch ? 3e3 : 2e3)),
                    clearTimeout(i.controls),
                    (i.controls = setTimeout(
                      () => Ks.toggleControls.call(e, !1),
                      s
                    ));
                }
              );
            const r = () => {
                if (!e.isVimeo || e.config.vimeo.premium) return;
                const t = n.wrapper,
                  { active: i } = e.fullscreen,
                  [r, s] = bs.call(e),
                  o = fs(`aspect-ratio: ${r} / ${s}`);
                if (!i)
                  return void (o
                    ? ((t.style.width = null), (t.style.height = null))
                    : ((t.style.maxWidth = null), (t.style.margin = null)));
                const [a, l] = [
                    Math.max(
                      document.documentElement.clientWidth || 0,
                      window.innerWidth || 0
                    ),
                    Math.max(
                      document.documentElement.clientHeight || 0,
                      window.innerHeight || 0
                    ),
                  ],
                  c = a / l > r / s;
                o
                  ? ((t.style.width = c ? "auto" : "100%"),
                    (t.style.height = c ? "100%" : "auto"))
                  : ((t.style.maxWidth = c ? (l / s) * r + "px" : null),
                    (t.style.margin = c ? "0 auto" : null));
              },
              s = () => {
                clearTimeout(i.resized), (i.resized = setTimeout(r, 50));
              };
            ss.call(e, n.container, "enterfullscreen exitfullscreen", (t) => {
              const { target: i } = e.fullscreen;
              if (i !== n.container) return;
              if (!e.isEmbed && Lr(e.config.ratio)) return;
              r();
              ("enterfullscreen" === t.type ? ss : os).call(
                e,
                window,
                "resize",
                s
              );
            });
          }),
          Bi(this, "media", () => {
            const { player: e } = this,
              { elements: t } = e;
            if (
              (ss.call(e, e.media, "timeupdate seeking seeked", (t) =>
                Ls.timeUpdate.call(e, t)
              ),
              ss.call(
                e,
                e.media,
                "durationchange loadeddata loadedmetadata",
                (t) => Ls.durationUpdate.call(e, t)
              ),
              ss.call(e, e.media, "ended", () => {
                e.isHTML5 &&
                  e.isVideo &&
                  e.config.resetOnEnd &&
                  (e.restart(), e.pause());
              }),
              ss.call(e, e.media, "progress playing seeking seeked", (t) =>
                Ls.updateProgress.call(e, t)
              ),
              ss.call(e, e.media, "volumechange", (t) =>
                Ls.updateVolume.call(e, t)
              ),
              ss.call(
                e,
                e.media,
                "playing play pause ended emptied timeupdate",
                (t) => Ks.checkPlaying.call(e, t)
              ),
              ss.call(e, e.media, "waiting canplay seeked playing", (t) =>
                Ks.checkLoading.call(e, t)
              ),
              e.supported.ui && e.config.clickToPlay && !e.isAudio)
            ) {
              const n = Zr.call(e, `.${e.config.classNames.video}`);
              if (!Ar(n)) return;
              ss.call(e, t.container, "click", (i) => {
                ([t.container, n].includes(i.target) || n.contains(i.target)) &&
                  ((e.touch && e.config.hideControls) ||
                    (e.ended
                      ? (this.proxy(i, e.restart, "restart"),
                        this.proxy(
                          i,
                          () => {
                            hs(e.play());
                          },
                          "play"
                        ))
                      : this.proxy(
                          i,
                          () => {
                            hs(e.togglePlay());
                          },
                          "play"
                        )));
              });
            }
            e.supported.ui &&
              e.config.disableContextMenu &&
              ss.call(
                e,
                t.wrapper,
                "contextmenu",
                (e) => {
                  e.preventDefault();
                },
                !1
              ),
              ss.call(e, e.media, "volumechange", () => {
                e.storage.set({ volume: e.volume, muted: e.muted });
              }),
              ss.call(e, e.media, "ratechange", () => {
                Ls.updateSetting.call(e, "speed"),
                  e.storage.set({ speed: e.speed });
              }),
              ss.call(e, e.media, "qualitychange", (t) => {
                Ls.updateSetting.call(e, "quality", null, t.detail.quality);
              }),
              ss.call(e, e.media, "ready qualitychange", () => {
                Ls.setDownloadUrl.call(e);
              });
            const n = e.config.events.concat(["keyup", "keydown"]).join(" ");
            ss.call(e, e.media, n, (n) => {
              let { detail: i = {} } = n;
              "error" === n.type && (i = e.media.error),
                ls.call(e, t.container, n.type, !0, i);
            });
          }),
          Bi(this, "proxy", (e, t, n) => {
            const { player: i } = this,
              r = i.config.listeners[n];
            let s = !0;
            Sr(r) && (s = r.call(i, e)), !1 !== s && Sr(t) && t.call(i, e);
          }),
          Bi(this, "bind", (e, t, n, i, r = !0) => {
            const { player: s } = this,
              o = s.config.listeners[i],
              a = Sr(o);
            ss.call(s, e, t, (e) => this.proxy(e, n, i), r && !a);
          }),
          Bi(this, "controls", () => {
            const { player: e } = this,
              { elements: t } = e,
              n = Dr.isIE ? "change" : "input";
            if (
              (t.buttons.play &&
                Array.from(t.buttons.play).forEach((t) => {
                  this.bind(
                    t,
                    "click",
                    () => {
                      hs(e.togglePlay());
                    },
                    "play"
                  );
                }),
              this.bind(t.buttons.restart, "click", e.restart, "restart"),
              this.bind(
                t.buttons.rewind,
                "click",
                () => {
                  (e.lastSeekTime = Date.now()), e.rewind();
                },
                "rewind"
              ),
              this.bind(
                t.buttons.fastForward,
                "click",
                () => {
                  (e.lastSeekTime = Date.now()), e.forward();
                },
                "fastForward"
              ),
              this.bind(
                t.buttons.mute,
                "click",
                () => {
                  e.muted = !e.muted;
                },
                "mute"
              ),
              this.bind(t.buttons.captions, "click", () => e.toggleCaptions()),
              this.bind(
                t.buttons.download,
                "click",
                () => {
                  ls.call(e, e.media, "download");
                },
                "download"
              ),
              this.bind(
                t.buttons.fullscreen,
                "click",
                () => {
                  e.fullscreen.toggle();
                },
                "fullscreen"
              ),
              this.bind(
                t.buttons.pip,
                "click",
                () => {
                  e.pip = "toggle";
                },
                "pip"
              ),
              this.bind(t.buttons.airplay, "click", e.airplay, "airplay"),
              this.bind(
                t.buttons.settings,
                "click",
                (t) => {
                  t.stopPropagation(),
                    t.preventDefault(),
                    Ls.toggleMenu.call(e, t);
                },
                null,
                !1
              ),
              this.bind(
                t.buttons.settings,
                "keyup",
                (t) => {
                  ["Space", "Enter"].includes(t.key) &&
                    ("Enter" !== t.key
                      ? (t.preventDefault(),
                        t.stopPropagation(),
                        Ls.toggleMenu.call(e, t))
                      : Ls.focusFirstMenuItem.call(e, null, !0));
                },
                null,
                !1
              ),
              this.bind(t.settings.menu, "keydown", (t) => {
                "Escape" === t.key && Ls.toggleMenu.call(e, t);
              }),
              this.bind(t.inputs.seek, "mousedown mousemove", (e) => {
                const n = t.progress.getBoundingClientRect(),
                  i = (100 / n.width) * (e.pageX - n.left);
                e.currentTarget.setAttribute("seek-value", i);
              }),
              this.bind(
                t.inputs.seek,
                "mousedown mouseup keydown keyup touchstart touchend",
                (t) => {
                  const n = t.currentTarget,
                    i = "play-on-seeked";
                  if (Or(t) && !["ArrowLeft", "ArrowRight"].includes(t.key))
                    return;
                  e.lastSeekTime = Date.now();
                  const r = n.hasAttribute(i),
                    s = ["mouseup", "touchend", "keyup"].includes(t.type);
                  r && s
                    ? (n.removeAttribute(i), hs(e.play()))
                    : !s && e.playing && (n.setAttribute(i, ""), e.pause());
                }
              ),
              Dr.isIos)
            ) {
              const t = Qr.call(e, 'input[type="range"]');
              Array.from(t).forEach((e) =>
                this.bind(e, n, (e) => Rr(e.target))
              );
            }
            this.bind(
              t.inputs.seek,
              n,
              (t) => {
                const n = t.currentTarget;
                let i = n.getAttribute("seek-value");
                Lr(i) && (i = n.value),
                  n.removeAttribute("seek-value"),
                  (e.currentTime = (i / n.max) * e.duration);
              },
              "seek"
            ),
              this.bind(t.progress, "mouseenter mouseleave mousemove", (t) =>
                Ls.updateSeekTooltip.call(e, t)
              ),
              this.bind(t.progress, "mousemove touchmove", (t) => {
                const { previewThumbnails: n } = e;
                n && n.loaded && n.startMove(t);
              }),
              this.bind(t.progress, "mouseleave touchend click", () => {
                const { previewThumbnails: t } = e;
                t && t.loaded && t.endMove(!1, !0);
              }),
              this.bind(t.progress, "mousedown touchstart", (t) => {
                const { previewThumbnails: n } = e;
                n && n.loaded && n.startScrubbing(t);
              }),
              this.bind(t.progress, "mouseup touchend", (t) => {
                const { previewThumbnails: n } = e;
                n && n.loaded && n.endScrubbing(t);
              }),
              Dr.isWebkit &&
                Array.from(Qr.call(e, 'input[type="range"]')).forEach((t) => {
                  this.bind(t, "input", (t) =>
                    Ls.updateRangeFill.call(e, t.target)
                  );
                }),
              e.config.toggleInvert &&
                !Ar(t.display.duration) &&
                this.bind(t.display.currentTime, "click", () => {
                  0 !== e.currentTime &&
                    ((e.config.invertTime = !e.config.invertTime),
                    Ls.timeUpdate.call(e));
                }),
              this.bind(
                t.inputs.volume,
                n,
                (t) => {
                  e.volume = t.target.value;
                },
                "volume"
              ),
              this.bind(t.controls, "mouseenter mouseleave", (n) => {
                t.controls.hover = !e.touch && "mouseenter" === n.type;
              }),
              t.fullscreen &&
                Array.from(t.fullscreen.children)
                  .filter((e) => !e.contains(t.container))
                  .forEach((n) => {
                    this.bind(n, "mouseenter mouseleave", (n) => {
                      t.controls &&
                        (t.controls.hover =
                          !e.touch && "mouseenter" === n.type);
                    });
                  }),
              this.bind(
                t.controls,
                "mousedown mouseup touchstart touchend touchcancel",
                (e) => {
                  t.controls.pressed = ["mousedown", "touchstart"].includes(
                    e.type
                  );
                }
              ),
              this.bind(t.controls, "focusin", () => {
                const { config: n, timers: i } = e;
                Jr(t.controls, n.classNames.noTransition, !0),
                  Ks.toggleControls.call(e, !0),
                  setTimeout(() => {
                    Jr(t.controls, n.classNames.noTransition, !1);
                  }, 0);
                const r = this.touch ? 3e3 : 4e3;
                clearTimeout(i.controls),
                  (i.controls = setTimeout(
                    () => Ks.toggleControls.call(e, !1),
                    r
                  ));
              }),
              this.bind(
                t.inputs.volume,
                "wheel",
                (t) => {
                  const n = t.webkitDirectionInvertedFromDevice,
                    [i, r] = [t.deltaX, -t.deltaY].map((e) => (n ? -e : e)),
                    s = Math.sign(Math.abs(i) > Math.abs(r) ? i : r);
                  e.increaseVolume(s / 50);
                  const { volume: o } = e.media;
                  ((1 === s && o < 1) || (-1 === s && o > 0)) &&
                    t.preventDefault();
                },
                "volume",
                !1
              );
          }),
          (this.player = e),
          (this.lastKey = null),
          (this.focusTimer = null),
          (this.lastKeyDown = null),
          (this.handleKey = this.handleKey.bind(this)),
          (this.toggleMenu = this.toggleMenu.bind(this)),
          (this.setTabFocus = this.setTabFocus.bind(this)),
          (this.firstTouch = this.firstTouch.bind(this));
      }
      handleKey(e) {
        const { player: t } = this,
          { elements: n } = t,
          {
            key: i,
            type: r,
            altKey: s,
            ctrlKey: o,
            metaKey: a,
            shiftKey: l,
          } = e,
          c = "keydown" === r,
          u = c && i === this.lastKey;
        if (s || o || a || l) return;
        if (!i) return;
        if (c) {
          const r = document.activeElement;
          if (Ar(r)) {
            const { editable: i } = t.config.selectors,
              { seek: s } = n.inputs;
            if (r !== s && Gr(r, i)) return;
            if ("Space" === e.key && Gr(r, 'button, [role^="menuitem"]'))
              return;
          }
          switch (
            ([
              "Space",
              "ArrowLeft",
              "ArrowUp",
              "ArrowRight",
              "ArrowDown",
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "c",
              "f",
              "k",
              "l",
              "m",
            ].includes(i) && (e.preventDefault(), e.stopPropagation()),
            i)
          ) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              u ||
                ((h = parseInt(i, 10)),
                (t.currentTime = (t.duration / 10) * h));
              break;
            case "Space":
            case "k":
              u || hs(t.togglePlay());
              break;
            case "ArrowUp":
              t.increaseVolume(0.1);
              break;
            case "ArrowDown":
              t.decreaseVolume(0.1);
              break;
            case "m":
              u || (t.muted = !t.muted);
              break;
            case "ArrowRight":
              t.forward();
              break;
            case "ArrowLeft":
              t.rewind();
              break;
            case "f":
              t.fullscreen.toggle();
              break;
            case "c":
              u || t.toggleCaptions();
              break;
            case "l":
              t.loop = !t.loop;
          }
          "Escape" === i &&
            !t.fullscreen.usingNative &&
            t.fullscreen.active &&
            t.fullscreen.toggle(),
            (this.lastKey = i);
        } else this.lastKey = null;
        var h;
      }
      toggleMenu(e) {
        Ls.toggleMenu.call(this.player, e);
      }
    }
    var Xs = i(function (e, t) {
      e.exports = (function () {
        var e = function () {},
          t = {},
          n = {},
          i = {};
        function r(e, t) {
          e = e.push ? e : [e];
          var r,
            s,
            o,
            a = [],
            l = e.length,
            c = l;
          for (
            r = function (e, n) {
              n.length && a.push(e), --c || t(a);
            };
            l--;

          )
            (s = e[l]), (o = n[s]) ? r(s, o) : (i[s] = i[s] || []).push(r);
        }
        function s(e, t) {
          if (e) {
            var r = i[e];
            if (((n[e] = t), r)) for (; r.length; ) r[0](e, t), r.splice(0, 1);
          }
        }
        function o(t, n) {
          t.call && (t = { success: t }),
            n.length ? (t.error || e)(n) : (t.success || e)(t);
        }
        function a(t, n, i, r) {
          var s,
            o,
            l = document,
            c = i.async,
            u = (i.numRetries || 0) + 1,
            h = i.before || e,
            d = t.replace(/[\?|#].*$/, ""),
            p = t.replace(/^(css|img)!/, "");
          (r = r || 0),
            /(^css!|\.css$)/.test(d)
              ? (((o = l.createElement("link")).rel = "stylesheet"),
                (o.href = p),
                (s = "hideFocus" in o) &&
                  o.relList &&
                  ((s = 0), (o.rel = "preload"), (o.as = "style")))
              : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d)
              ? ((o = l.createElement("img")).src = p)
              : (((o = l.createElement("script")).src = t),
                (o.async = void 0 === c || c)),
            (o.onload =
              o.onerror =
              o.onbeforeload =
                function (e) {
                  var l = e.type[0];
                  if (s)
                    try {
                      o.sheet.cssText.length || (l = "e");
                    } catch (e) {
                      18 != e.code && (l = "e");
                    }
                  if ("e" == l) {
                    if ((r += 1) < u) return a(t, n, i, r);
                  } else if ("preload" == o.rel && "style" == o.as)
                    return (o.rel = "stylesheet");
                  n(t, l, e.defaultPrevented);
                }),
            !1 !== h(t, o) && l.head.appendChild(o);
        }
        function l(e, t, n) {
          var i,
            r,
            s = (e = e.push ? e : [e]).length,
            o = s,
            l = [];
          for (
            i = function (e, n, i) {
              if (("e" == n && l.push(e), "b" == n)) {
                if (!i) return;
                l.push(e);
              }
              --s || t(l);
            },
              r = 0;
            r < o;
            r++
          )
            a(e[r], i, n);
        }
        function c(e, n, i) {
          var r, a;
          if ((n && n.trim && (r = n), (a = (r ? i : n) || {}), r)) {
            if (r in t) throw "LoadJS";
            t[r] = !0;
          }
          function c(t, n) {
            l(
              e,
              function (e) {
                o(a, e), t && o({ success: t, error: n }, e), s(r, e);
              },
              a
            );
          }
          if (a.returnPromise) return new Promise(c);
          c();
        }
        return (
          (c.ready = function (e, t) {
            return (
              r(e, function (e) {
                o(t, e);
              }),
              c
            );
          }),
          (c.done = function (e) {
            s(e, []);
          }),
          (c.reset = function () {
            (t = {}), (n = {}), (i = {});
          }),
          (c.isDefined = function (e) {
            return e in t;
          }),
          c
        );
      })();
    });
    function Gs(e) {
      return new Promise((t, n) => {
        Xs(e, { success: t, error: n });
      });
    }
    function Qs(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          ls.call(this, this.media, e ? "play" : "pause"));
    }
    const Zs = {
      setup() {
        const e = this;
        Jr(e.elements.wrapper, e.config.classNames.embed, !0),
          (e.options.speed = e.config.speed.options),
          vs.call(e),
          _r(window.Vimeo)
            ? Zs.ready.call(e)
            : Gs(e.config.urls.vimeo.sdk)
                .then(() => {
                  Zs.ready.call(e);
                })
                .catch((t) => {
                  e.debug.warn("Vimeo SDK (player.js) failed to load", t);
                });
      },
      ready() {
        const e = this,
          t = e.config.vimeo,
          { premium: n, referrerPolicy: i, ...r } = t;
        let s = e.media.getAttribute("src"),
          o = "";
        Lr(s)
          ? ((s = e.media.getAttribute(e.config.attributes.embed.id)),
            (o = e.media.getAttribute(e.config.attributes.embed.hash)))
          : (o = (function (e) {
              const t = e.match(
                /^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/
              );
              return t && 5 === t.length ? t[4] : null;
            })(s));
        const a = o ? { h: o } : {};
        n && Object.assign(r, { controls: !1, sidedock: !1 });
        const l = Rs({
            loop: e.config.loop.active,
            autoplay: e.autoplay,
            muted: e.muted,
            gesture: "media",
            playsinline: !this.config.fullscreen.iosNative,
            ...a,
            ...r,
          }),
          c = Lr((u = s))
            ? null
            : kr(Number(u))
            ? u
            : u.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
            ? RegExp.$2
            : u;
        var u;
        const h = Hr("iframe"),
          d = ks(e.config.urls.vimeo.iframe, c, l);
        if (
          (h.setAttribute("src", d),
          h.setAttribute("allowfullscreen", ""),
          h.setAttribute(
            "allow",
            [
              "autoplay",
              "fullscreen",
              "picture-in-picture",
              "encrypted-media",
              "accelerometer",
              "gyroscope",
            ].join("; ")
          ),
          Lr(i) || h.setAttribute("referrerPolicy", i),
          n || !t.customControls)
        )
          h.setAttribute("data-poster", e.poster), (e.media = zr(h, e.media));
        else {
          const t = Hr("div", {
            class: e.config.classNames.embedContainer,
            "data-poster": e.poster,
          });
          t.appendChild(h), (e.media = zr(t, e.media));
        }
        t.customControls ||
          Os(ks(e.config.urls.vimeo.api, d)).then((t) => {
            !Lr(t) &&
              t.thumbnail_url &&
              Ks.setPoster.call(e, t.thumbnail_url).catch(() => {});
          }),
          (e.embed = new window.Vimeo.Player(h, {
            autopause: e.config.autopause,
            muted: e.muted,
          })),
          (e.media.paused = !0),
          (e.media.currentTime = 0),
          e.supported.ui && e.embed.disableTextTrack(),
          (e.media.play = () => (Qs.call(e, !0), e.embed.play())),
          (e.media.pause = () => (Qs.call(e, !1), e.embed.pause())),
          (e.media.stop = () => {
            e.pause(), (e.currentTime = 0);
          });
        let { currentTime: p } = e.media;
        Object.defineProperty(e.media, "currentTime", {
          get: () => p,
          set(t) {
            const { embed: n, media: i, paused: r, volume: s } = e,
              o = r && !n.hasPlayed;
            (i.seeking = !0),
              ls.call(e, i, "seeking"),
              Promise.resolve(o && n.setVolume(0))
                .then(() => n.setCurrentTime(t))
                .then(() => o && n.pause())
                .then(() => o && n.setVolume(s))
                .catch(() => {});
          },
        });
        let f = e.config.speed.selected;
        Object.defineProperty(e.media, "playbackRate", {
          get: () => f,
          set(t) {
            e.embed
              .setPlaybackRate(t)
              .then(() => {
                (f = t), ls.call(e, e.media, "ratechange");
              })
              .catch(() => {
                e.options.speed = [1];
              });
          },
        });
        let { volume: m } = e.config;
        Object.defineProperty(e.media, "volume", {
          get: () => m,
          set(t) {
            e.embed.setVolume(t).then(() => {
              (m = t), ls.call(e, e.media, "volumechange");
            });
          },
        });
        let { muted: g } = e.config;
        Object.defineProperty(e.media, "muted", {
          get: () => g,
          set(t) {
            const n = !!Tr(t) && t;
            e.embed.setVolume(n ? 0 : e.config.volume).then(() => {
              (g = n), ls.call(e, e.media, "volumechange");
            });
          },
        });
        let y,
          { loop: b } = e.config;
        Object.defineProperty(e.media, "loop", {
          get: () => b,
          set(t) {
            const n = Tr(t) ? t : e.config.loop.active;
            e.embed.setLoop(n).then(() => {
              b = n;
            });
          },
        }),
          e.embed
            .getVideoUrl()
            .then((t) => {
              (y = t), Ls.setDownloadUrl.call(e);
            })
            .catch((e) => {
              this.debug.warn(e);
            }),
          Object.defineProperty(e.media, "currentSrc", { get: () => y }),
          Object.defineProperty(e.media, "ended", {
            get: () => e.currentTime === e.duration,
          }),
          Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(
            (t) => {
              const [n, i] = t;
              (e.embed.ratio = ws(n, i)), vs.call(this);
            }
          ),
          e.embed.setAutopause(e.config.autopause).then((t) => {
            e.config.autopause = t;
          }),
          e.embed.getVideoTitle().then((t) => {
            (e.config.title = t), Ks.setTitle.call(this);
          }),
          e.embed.getCurrentTime().then((t) => {
            (p = t), ls.call(e, e.media, "timeupdate");
          }),
          e.embed.getDuration().then((t) => {
            (e.media.duration = t), ls.call(e, e.media, "durationchange");
          }),
          e.embed.getTextTracks().then((t) => {
            (e.media.textTracks = t), Ds.setup.call(e);
          }),
          e.embed.on("cuechange", ({ cues: t = [] }) => {
            const n = t.map((e) =>
              (function (e) {
                const t = document.createDocumentFragment(),
                  n = document.createElement("div");
                return (
                  t.appendChild(n), (n.innerHTML = e), t.firstChild.innerText
                );
              })(e.text)
            );
            Ds.updateCues.call(e, n);
          }),
          e.embed.on("loaded", () => {
            if (
              (e.embed.getPaused().then((t) => {
                Qs.call(e, !t), t || ls.call(e, e.media, "playing");
              }),
              Ar(e.embed.element) && e.supported.ui)
            ) {
              e.embed.element.setAttribute("tabindex", -1);
            }
          }),
          e.embed.on("bufferstart", () => {
            ls.call(e, e.media, "waiting");
          }),
          e.embed.on("bufferend", () => {
            ls.call(e, e.media, "playing");
          }),
          e.embed.on("play", () => {
            Qs.call(e, !0), ls.call(e, e.media, "playing");
          }),
          e.embed.on("pause", () => {
            Qs.call(e, !1);
          }),
          e.embed.on("timeupdate", (t) => {
            (e.media.seeking = !1),
              (p = t.seconds),
              ls.call(e, e.media, "timeupdate");
          }),
          e.embed.on("progress", (t) => {
            (e.media.buffered = t.percent),
              ls.call(e, e.media, "progress"),
              1 === parseInt(t.percent, 10) &&
                ls.call(e, e.media, "canplaythrough"),
              e.embed.getDuration().then((t) => {
                t !== e.media.duration &&
                  ((e.media.duration = t),
                  ls.call(e, e.media, "durationchange"));
              });
          }),
          e.embed.on("seeked", () => {
            (e.media.seeking = !1), ls.call(e, e.media, "seeked");
          }),
          e.embed.on("ended", () => {
            (e.media.paused = !0), ls.call(e, e.media, "ended");
          }),
          e.embed.on("error", (t) => {
            (e.media.error = t), ls.call(e, e.media, "error");
          }),
          t.customControls && setTimeout(() => Ks.build.call(e), 0);
      },
    };
    function eo(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          ls.call(this, this.media, e ? "play" : "pause"));
    }
    function to(e) {
      return e.noCookie
        ? "https://www.youtube-nocookie.com"
        : "http:" === window.location.protocol
        ? "http://www.youtube.com"
        : void 0;
    }
    const no = {
        setup() {
          if (
            (Jr(this.elements.wrapper, this.config.classNames.embed, !0),
            _r(window.YT) && Sr(window.YT.Player))
          )
            no.ready.call(this);
          else {
            const e = window.onYouTubeIframeAPIReady;
            (window.onYouTubeIframeAPIReady = () => {
              Sr(e) && e(), no.ready.call(this);
            }),
              Gs(this.config.urls.youtube.sdk).catch((e) => {
                this.debug.warn("YouTube API failed to load", e);
              });
          }
        },
        getTitle(e) {
          Os(ks(this.config.urls.youtube.api, e))
            .then((e) => {
              if (_r(e)) {
                const { title: t, height: n, width: i } = e;
                (this.config.title = t),
                  Ks.setTitle.call(this),
                  (this.embed.ratio = ws(i, n));
              }
              vs.call(this);
            })
            .catch(() => {
              vs.call(this);
            });
        },
        ready() {
          const e = this,
            t = e.config.youtube,
            n = e.media && e.media.getAttribute("id");
          if (!Lr(n) && n.startsWith("youtube-")) return;
          let i = e.media.getAttribute("src");
          Lr(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
          const r = Lr((s = i))
            ? null
            : s.match(
                /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
              )
            ? RegExp.$2
            : s;
          var s;
          const o = Hr("div", {
            id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
            "data-poster": t.customControls ? e.poster : void 0,
          });
          if (((e.media = zr(o, e.media)), t.customControls)) {
            const t = (e) => `https://i.ytimg.com/vi/${r}/${e}default.jpg`;
            Ys(t("maxres"), 121)
              .catch(() => Ys(t("sd"), 121))
              .catch(() => Ys(t("hq")))
              .then((t) => Ks.setPoster.call(e, t.src))
              .then((t) => {
                t.includes("maxres") ||
                  (e.elements.poster.style.backgroundSize = "cover");
              })
              .catch(() => {});
          }
          e.embed = new window.YT.Player(e.media, {
            videoId: r,
            host: to(t),
            playerVars: Fr(
              {},
              {
                autoplay: e.config.autoplay ? 1 : 0,
                hl: e.config.hl,
                controls: e.supported.ui && t.customControls ? 0 : 1,
                disablekb: 1,
                playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                cc_load_policy: e.captions.active ? 1 : 0,
                cc_lang_pref: e.config.captions.language,
                widget_referrer: window ? window.location.href : null,
              },
              t
            ),
            events: {
              onError(t) {
                if (!e.media.error) {
                  const n = t.data,
                    i =
                      {
                        2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                        5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                        100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                        101: "The owner of the requested video does not allow it to be played in embedded players.",
                        150: "The owner of the requested video does not allow it to be played in embedded players.",
                      }[n] || "An unknown error occured";
                  (e.media.error = { code: n, message: i }),
                    ls.call(e, e.media, "error");
                }
              },
              onPlaybackRateChange(t) {
                const n = t.target;
                (e.media.playbackRate = n.getPlaybackRate()),
                  ls.call(e, e.media, "ratechange");
              },
              onReady(n) {
                if (Sr(e.media.play)) return;
                const i = n.target;
                no.getTitle.call(e, r),
                  (e.media.play = () => {
                    eo.call(e, !0), i.playVideo();
                  }),
                  (e.media.pause = () => {
                    eo.call(e, !1), i.pauseVideo();
                  }),
                  (e.media.stop = () => {
                    i.stopVideo();
                  }),
                  (e.media.duration = i.getDuration()),
                  (e.media.paused = !0),
                  (e.media.currentTime = 0),
                  Object.defineProperty(e.media, "currentTime", {
                    get: () => Number(i.getCurrentTime()),
                    set(t) {
                      e.paused && !e.embed.hasPlayed && e.embed.mute(),
                        (e.media.seeking = !0),
                        ls.call(e, e.media, "seeking"),
                        i.seekTo(t);
                    },
                  }),
                  Object.defineProperty(e.media, "playbackRate", {
                    get: () => i.getPlaybackRate(),
                    set(e) {
                      i.setPlaybackRate(e);
                    },
                  });
                let { volume: s } = e.config;
                Object.defineProperty(e.media, "volume", {
                  get: () => s,
                  set(t) {
                    (s = t),
                      i.setVolume(100 * s),
                      ls.call(e, e.media, "volumechange");
                  },
                });
                let { muted: o } = e.config;
                Object.defineProperty(e.media, "muted", {
                  get: () => o,
                  set(t) {
                    const n = Tr(t) ? t : o;
                    (o = n),
                      i[n ? "mute" : "unMute"](),
                      i.setVolume(100 * s),
                      ls.call(e, e.media, "volumechange");
                  },
                }),
                  Object.defineProperty(e.media, "currentSrc", {
                    get: () => i.getVideoUrl(),
                  }),
                  Object.defineProperty(e.media, "ended", {
                    get: () => e.currentTime === e.duration,
                  });
                const a = i.getAvailablePlaybackRates();
                (e.options.speed = a.filter((t) =>
                  e.config.speed.options.includes(t)
                )),
                  e.supported.ui &&
                    t.customControls &&
                    e.media.setAttribute("tabindex", -1),
                  ls.call(e, e.media, "timeupdate"),
                  ls.call(e, e.media, "durationchange"),
                  clearInterval(e.timers.buffering),
                  (e.timers.buffering = setInterval(() => {
                    (e.media.buffered = i.getVideoLoadedFraction()),
                      (null === e.media.lastBuffered ||
                        e.media.lastBuffered < e.media.buffered) &&
                        ls.call(e, e.media, "progress"),
                      (e.media.lastBuffered = e.media.buffered),
                      1 === e.media.buffered &&
                        (clearInterval(e.timers.buffering),
                        ls.call(e, e.media, "canplaythrough"));
                  }, 200)),
                  t.customControls && setTimeout(() => Ks.build.call(e), 50);
              },
              onStateChange(n) {
                const i = n.target;
                clearInterval(e.timers.playing);
                switch (
                  (e.media.seeking &&
                    [1, 2].includes(n.data) &&
                    ((e.media.seeking = !1), ls.call(e, e.media, "seeked")),
                  n.data)
                ) {
                  case -1:
                    ls.call(e, e.media, "timeupdate"),
                      (e.media.buffered = i.getVideoLoadedFraction()),
                      ls.call(e, e.media, "progress");
                    break;
                  case 0:
                    eo.call(e, !1),
                      e.media.loop
                        ? (i.stopVideo(), i.playVideo())
                        : ls.call(e, e.media, "ended");
                    break;
                  case 1:
                    t.customControls &&
                    !e.config.autoplay &&
                    e.media.paused &&
                    !e.embed.hasPlayed
                      ? e.media.pause()
                      : (eo.call(e, !0),
                        ls.call(e, e.media, "playing"),
                        (e.timers.playing = setInterval(() => {
                          ls.call(e, e.media, "timeupdate");
                        }, 50)),
                        e.media.duration !== i.getDuration() &&
                          ((e.media.duration = i.getDuration()),
                          ls.call(e, e.media, "durationchange")));
                    break;
                  case 2:
                    e.muted || e.embed.unMute(), eo.call(e, !1);
                    break;
                  case 3:
                    ls.call(e, e.media, "waiting");
                }
                ls.call(e, e.elements.container, "statechange", !1, {
                  code: n.data,
                });
              },
            },
          });
        },
      },
      io = {
        setup() {
          this.media
            ? (Jr(
                this.elements.container,
                this.config.classNames.type.replace("{0}", this.type),
                !0
              ),
              Jr(
                this.elements.container,
                this.config.classNames.provider.replace("{0}", this.provider),
                !0
              ),
              this.isEmbed &&
                Jr(
                  this.elements.container,
                  this.config.classNames.type.replace("{0}", "video"),
                  !0
                ),
              this.isVideo &&
                ((this.elements.wrapper = Hr("div", {
                  class: this.config.classNames.video,
                })),
                $r(this.media, this.elements.wrapper),
                (this.elements.poster = Hr("div", {
                  class: this.config.classNames.poster,
                })),
                this.elements.wrapper.appendChild(this.elements.poster)),
              this.isHTML5
                ? _s.setup.call(this)
                : this.isYouTube
                ? no.setup.call(this)
                : this.isVimeo && Zs.setup.call(this))
            : this.debug.warn("No media element found!");
        },
      };
    class ro {
      constructor(e) {
        Bi(this, "load", () => {
          this.enabled &&
            (_r(window.google) && _r(window.google.ima)
              ? this.ready()
              : Gs(this.player.config.urls.googleIMA.sdk)
                  .then(() => {
                    this.ready();
                  })
                  .catch(() => {
                    this.trigger(
                      "error",
                      new Error("Google IMA SDK failed to load")
                    );
                  }));
        }),
          Bi(this, "ready", () => {
            var e;
            this.enabled ||
              ((e = this).manager && e.manager.destroy(),
              e.elements.displayContainer &&
                e.elements.displayContainer.destroy(),
              e.elements.container.remove()),
              this.startSafetyTimer(12e3, "ready()"),
              this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()");
              }),
              this.listeners(),
              this.setupIMA();
          }),
          Bi(this, "setupIMA", () => {
            (this.elements.container = Hr("div", {
              class: this.player.config.classNames.ads,
            })),
              this.player.elements.container.appendChild(
                this.elements.container
              ),
              google.ima.settings.setVpaidMode(
                google.ima.ImaSdkSettings.VpaidMode.ENABLED
              ),
              google.ima.settings.setLocale(this.player.config.ads.language),
              google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                this.player.config.playsinline
              ),
              (this.elements.displayContainer =
                new google.ima.AdDisplayContainer(
                  this.elements.container,
                  this.player.media
                )),
              (this.loader = new google.ima.AdsLoader(
                this.elements.displayContainer
              )),
              this.loader.addEventListener(
                google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                (e) => this.onAdsManagerLoaded(e),
                !1
              ),
              this.loader.addEventListener(
                google.ima.AdErrorEvent.Type.AD_ERROR,
                (e) => this.onAdError(e),
                !1
              ),
              this.requestAds();
          }),
          Bi(this, "requestAds", () => {
            const { container: e } = this.player.elements;
            try {
              const t = new google.ima.AdsRequest();
              (t.adTagUrl = this.tagUrl),
                (t.linearAdSlotWidth = e.offsetWidth),
                (t.linearAdSlotHeight = e.offsetHeight),
                (t.nonLinearAdSlotWidth = e.offsetWidth),
                (t.nonLinearAdSlotHeight = e.offsetHeight),
                (t.forceNonLinearFullSlot = !1),
                t.setAdWillPlayMuted(!this.player.muted),
                this.loader.requestAds(t);
            } catch (e) {
              this.onAdError(e);
            }
          }),
          Bi(this, "pollCountdown", (e = !1) => {
            if (!e)
              return (
                clearInterval(this.countdownTimer),
                void this.elements.container.removeAttribute("data-badge-text")
              );
            this.countdownTimer = setInterval(() => {
              const e = Ns(Math.max(this.manager.getRemainingTime(), 0)),
                t = `${As.get("advertisement", this.player.config)} - ${e}`;
              this.elements.container.setAttribute("data-badge-text", t);
            }, 100);
          }),
          Bi(this, "onAdsManagerLoaded", (e) => {
            if (!this.enabled) return;
            const t = new google.ima.AdsRenderingSettings();
            (t.restoreCustomPlaybackStateOnAdBreakComplete = !0),
              (t.enablePreloading = !0),
              (this.manager = e.getAdsManager(this.player, t)),
              (this.cuePoints = this.manager.getCuePoints()),
              this.manager.addEventListener(
                google.ima.AdErrorEvent.Type.AD_ERROR,
                (e) => this.onAdError(e)
              ),
              Object.keys(google.ima.AdEvent.Type).forEach((e) => {
                this.manager.addEventListener(google.ima.AdEvent.Type[e], (e) =>
                  this.onAdEvent(e)
                );
              }),
              this.trigger("loaded");
          }),
          Bi(this, "addCuePoints", () => {
            Lr(this.cuePoints) ||
              this.cuePoints.forEach((e) => {
                if (0 !== e && -1 !== e && e < this.player.duration) {
                  const t = this.player.elements.progress;
                  if (Ar(t)) {
                    const n = (100 / this.player.duration) * e,
                      i = Hr("span", {
                        class: this.player.config.classNames.cues,
                      });
                    (i.style.left = `${n.toString()}%`), t.appendChild(i);
                  }
                }
              });
          }),
          Bi(this, "onAdEvent", (e) => {
            const { container: t } = this.player.elements,
              n = e.getAd(),
              i = e.getAdData();
            switch (
              (((e) => {
                ls.call(
                  this.player,
                  this.player.media,
                  `ads${e.replace(/_/g, "").toLowerCase()}`
                );
              })(e.type),
              e.type)
            ) {
              case google.ima.AdEvent.Type.LOADED:
                this.trigger("loaded"),
                  this.pollCountdown(!0),
                  n.isLinear() ||
                    ((n.width = t.offsetWidth), (n.height = t.offsetHeight));
                break;
              case google.ima.AdEvent.Type.STARTED:
                this.manager.setVolume(this.player.volume);
                break;
              case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                this.player.ended
                  ? this.loadAds()
                  : this.loader.contentComplete();
                break;
              case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                this.pauseContent();
                break;
              case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                this.pollCountdown(), this.resumeContent();
                break;
              case google.ima.AdEvent.Type.LOG:
                i.adError &&
                  this.player.debug.warn(
                    `Non-fatal ad error: ${i.adError.getMessage()}`
                  );
            }
          }),
          Bi(this, "onAdError", (e) => {
            this.cancel(), this.player.debug.warn("Ads error", e);
          }),
          Bi(this, "listeners", () => {
            const { container: e } = this.player.elements;
            let t;
            this.player.on("canplay", () => {
              this.addCuePoints();
            }),
              this.player.on("ended", () => {
                this.loader.contentComplete();
              }),
              this.player.on("timeupdate", () => {
                t = this.player.currentTime;
              }),
              this.player.on("seeked", () => {
                const e = this.player.currentTime;
                Lr(this.cuePoints) ||
                  this.cuePoints.forEach((n, i) => {
                    t < n &&
                      n < e &&
                      (this.manager.discardAdBreak(),
                      this.cuePoints.splice(i, 1));
                  });
              }),
              window.addEventListener("resize", () => {
                this.manager &&
                  this.manager.resize(
                    e.offsetWidth,
                    e.offsetHeight,
                    google.ima.ViewMode.NORMAL
                  );
              });
          }),
          Bi(this, "play", () => {
            const { container: e } = this.player.elements;
            this.managerPromise || this.resumeContent(),
              this.managerPromise
                .then(() => {
                  this.manager.setVolume(this.player.volume),
                    this.elements.displayContainer.initialize();
                  try {
                    this.initialized ||
                      (this.manager.init(
                        e.offsetWidth,
                        e.offsetHeight,
                        google.ima.ViewMode.NORMAL
                      ),
                      this.manager.start()),
                      (this.initialized = !0);
                  } catch (e) {
                    this.onAdError(e);
                  }
                })
                .catch(() => {});
          }),
          Bi(this, "resumeContent", () => {
            (this.elements.container.style.zIndex = ""),
              (this.playing = !1),
              hs(this.player.media.play());
          }),
          Bi(this, "pauseContent", () => {
            (this.elements.container.style.zIndex = 3),
              (this.playing = !0),
              this.player.media.pause();
          }),
          Bi(this, "cancel", () => {
            this.initialized && this.resumeContent(),
              this.trigger("error"),
              this.loadAds();
          }),
          Bi(this, "loadAds", () => {
            this.managerPromise
              .then(() => {
                this.manager && this.manager.destroy(),
                  (this.managerPromise = new Promise((e) => {
                    this.on("loaded", e), this.player.debug.log(this.manager);
                  })),
                  (this.initialized = !1),
                  this.requestAds();
              })
              .catch(() => {});
          }),
          Bi(this, "trigger", (e, ...t) => {
            const n = this.events[e];
            xr(n) &&
              n.forEach((e) => {
                Sr(e) && e.apply(this, t);
              });
          }),
          Bi(
            this,
            "on",
            (e, t) => (
              xr(this.events[e]) || (this.events[e] = []),
              this.events[e].push(t),
              this
            )
          ),
          Bi(this, "startSafetyTimer", (e, t) => {
            this.player.debug.log(`Safety timer invoked from: ${t}`),
              (this.safetyTimer = setTimeout(() => {
                this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
              }, e));
          }),
          Bi(this, "clearSafetyTimer", (e) => {
            wr(this.safetyTimer) ||
              (this.player.debug.log(`Safety timer cleared from: ${e}`),
              clearTimeout(this.safetyTimer),
              (this.safetyTimer = null));
          }),
          (this.player = e),
          (this.config = e.config.ads),
          (this.playing = !1),
          (this.initialized = !1),
          (this.elements = { container: null, displayContainer: null }),
          (this.manager = null),
          (this.loader = null),
          (this.cuePoints = null),
          (this.events = {}),
          (this.safetyTimer = null),
          (this.countdownTimer = null),
          (this.managerPromise = new Promise((e, t) => {
            this.on("loaded", e), this.on("error", t);
          })),
          this.load();
      }
      get enabled() {
        const { config: e } = this;
        return (
          this.player.isHTML5 &&
          this.player.isVideo &&
          e.enabled &&
          (!Lr(e.publisherId) || Nr(e.tagUrl))
        );
      }
      get tagUrl() {
        const { config: e } = this;
        if (Nr(e.tagUrl)) return e.tagUrl;
        return `https://go.aniview.com/api/adserver6/vast/?${Rs({
          AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
          AV_CHANNELID: "5a0458dc28a06145e4519d21",
          AV_URL: window.location.hostname,
          cb: Date.now(),
          AV_WIDTH: 640,
          AV_HEIGHT: 480,
          AV_CDIM2: e.publisherId,
        })}`;
      }
    }
    function so(e = 0, t = 0, n = 255) {
      return Math.min(Math.max(e, t), n);
    }
    const oo = (e) => {
        const t = [];
        return (
          e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e) => {
            const n = {};
            e.split(/\r\n|\n|\r/).forEach((e) => {
              if (kr(n.startTime)) {
                if (!Lr(e.trim()) && Lr(n.text)) {
                  const t = e.trim().split("#xywh=");
                  ([n.text] = t),
                    t[1] && ([n.x, n.y, n.w, n.h] = t[1].split(","));
                }
              } else {
                const t = e.match(
                  /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                );
                t &&
                  ((n.startTime =
                    60 * Number(t[1] || 0) * 60 +
                    60 * Number(t[2]) +
                    Number(t[3]) +
                    Number(`0.${t[4]}`)),
                  (n.endTime =
                    60 * Number(t[6] || 0) * 60 +
                    60 * Number(t[7]) +
                    Number(t[8]) +
                    Number(`0.${t[9]}`)));
              }
            }),
              n.text && t.push(n);
          }),
          t
        );
      },
      ao = (e, t) => {
        const n = {};
        return (
          e > t.width / t.height
            ? ((n.width = t.width), (n.height = (1 / e) * t.width))
            : ((n.height = t.height), (n.width = e * t.height)),
          n
        );
      };
    class lo {
      constructor(e) {
        Bi(this, "load", () => {
          this.player.elements.display.seekTooltip &&
            (this.player.elements.display.seekTooltip.hidden = this.enabled),
            this.enabled &&
              this.getThumbnails().then(() => {
                this.enabled &&
                  (this.render(),
                  this.determineContainerAutoSizing(),
                  (this.loaded = !0));
              });
        }),
          Bi(
            this,
            "getThumbnails",
            () =>
              new Promise((e) => {
                const { src: t } = this.player.config.previewThumbnails;
                if (Lr(t))
                  throw new Error(
                    "Missing previewThumbnails.src config attribute"
                  );
                const n = () => {
                  this.thumbnails.sort((e, t) => e.height - t.height),
                    this.player.debug.log(
                      "Preview thumbnails",
                      this.thumbnails
                    ),
                    e();
                };
                if (Sr(t))
                  t((e) => {
                    (this.thumbnails = e), n();
                  });
                else {
                  const e = (Er(t) ? [t] : t).map((e) => this.getThumbnail(e));
                  Promise.all(e).then(n);
                }
              })
          ),
          Bi(
            this,
            "getThumbnail",
            (e) =>
              new Promise((t) => {
                Os(e).then((n) => {
                  const i = { frames: oo(n), height: null, urlPrefix: "" };
                  i.frames[0].text.startsWith("/") ||
                    i.frames[0].text.startsWith("http://") ||
                    i.frames[0].text.startsWith("https://") ||
                    (i.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                  const r = new Image();
                  (r.onload = () => {
                    (i.height = r.naturalHeight),
                      (i.width = r.naturalWidth),
                      this.thumbnails.push(i),
                      t();
                  }),
                    (r.src = i.urlPrefix + i.frames[0].text);
                });
              })
          ),
          Bi(this, "startMove", (e) => {
            if (
              this.loaded &&
              Pr(e) &&
              ["touchmove", "mousemove"].includes(e.type) &&
              this.player.media.duration
            ) {
              if ("touchmove" === e.type)
                this.seekTime =
                  this.player.media.duration *
                  (this.player.elements.inputs.seek.value / 100);
              else {
                var t, n;
                const i = this.player.elements.progress.getBoundingClientRect(),
                  r = (100 / i.width) * (e.pageX - i.left);
                (this.seekTime = this.player.media.duration * (r / 100)),
                  this.seekTime < 0 && (this.seekTime = 0),
                  this.seekTime > this.player.media.duration - 1 &&
                    (this.seekTime = this.player.media.duration - 1),
                  (this.mousePosX = e.pageX),
                  (this.elements.thumb.time.innerText = Ns(this.seekTime));
                const s =
                  null === (t = this.player.config.markers) ||
                  void 0 === t ||
                  null === (n = t.points) ||
                  void 0 === n
                    ? void 0
                    : n.find(({ time: e }) => e === Math.round(this.seekTime));
                s &&
                  this.elements.thumb.time.insertAdjacentHTML(
                    "afterbegin",
                    `${s.label}<br>`
                  );
              }
              this.showImageAtCurrentTime();
            }
          }),
          Bi(this, "endMove", () => {
            this.toggleThumbContainer(!1, !0);
          }),
          Bi(this, "startScrubbing", (e) => {
            (wr(e.button) || !1 === e.button || 0 === e.button) &&
              ((this.mouseDown = !0),
              this.player.media.duration &&
                (this.toggleScrubbingContainer(!0),
                this.toggleThumbContainer(!1, !0),
                this.showImageAtCurrentTime()));
          }),
          Bi(this, "endScrubbing", () => {
            (this.mouseDown = !1),
              Math.ceil(this.lastTime) ===
              Math.ceil(this.player.media.currentTime)
                ? this.toggleScrubbingContainer(!1)
                : as.call(this.player, this.player.media, "timeupdate", () => {
                    this.mouseDown || this.toggleScrubbingContainer(!1);
                  });
          }),
          Bi(this, "listeners", () => {
            this.player.on("play", () => {
              this.toggleThumbContainer(!1, !0);
            }),
              this.player.on("seeked", () => {
                this.toggleThumbContainer(!1);
              }),
              this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime;
              });
          }),
          Bi(this, "render", () => {
            (this.elements.thumb.container = Hr("div", {
              class:
                this.player.config.classNames.previewThumbnails.thumbContainer,
            })),
              (this.elements.thumb.imageContainer = Hr("div", {
                class:
                  this.player.config.classNames.previewThumbnails
                    .imageContainer,
              })),
              this.elements.thumb.container.appendChild(
                this.elements.thumb.imageContainer
              );
            const e = Hr("div", {
              class:
                this.player.config.classNames.previewThumbnails.timeContainer,
            });
            (this.elements.thumb.time = Hr("span", {}, "00:00")),
              e.appendChild(this.elements.thumb.time),
              this.elements.thumb.imageContainer.appendChild(e),
              Ar(this.player.elements.progress) &&
                this.player.elements.progress.appendChild(
                  this.elements.thumb.container
                ),
              (this.elements.scrubbing.container = Hr("div", {
                class:
                  this.player.config.classNames.previewThumbnails
                    .scrubbingContainer,
              })),
              this.player.elements.wrapper.appendChild(
                this.elements.scrubbing.container
              );
          }),
          Bi(this, "destroy", () => {
            this.elements.thumb.container &&
              this.elements.thumb.container.remove(),
              this.elements.scrubbing.container &&
                this.elements.scrubbing.container.remove();
          }),
          Bi(this, "showImageAtCurrentTime", () => {
            this.mouseDown
              ? this.setScrubbingContainerSize()
              : this.setThumbContainerSizeAndPos();
            const e = this.thumbnails[0].frames.findIndex(
                (e) =>
                  this.seekTime >= e.startTime && this.seekTime <= e.endTime
              ),
              t = e >= 0;
            let n = 0;
            this.mouseDown || this.toggleThumbContainer(t),
              t &&
                (this.thumbnails.forEach((t, i) => {
                  this.loadedImages.includes(t.frames[e].text) && (n = i);
                }),
                e !== this.showingThumb &&
                  ((this.showingThumb = e), this.loadImage(n)));
          }),
          Bi(this, "loadImage", (e = 0) => {
            const t = this.showingThumb,
              n = this.thumbnails[e],
              { urlPrefix: i } = n,
              r = n.frames[t],
              s = n.frames[t].text,
              o = i + s;
            if (
              this.currentImageElement &&
              this.currentImageElement.dataset.filename === s
            )
              this.showImage(this.currentImageElement, r, e, t, s, !1),
                (this.currentImageElement.dataset.index = t),
                this.removeOldImages(this.currentImageElement);
            else {
              this.loadingImage &&
                this.usingSprites &&
                (this.loadingImage.onload = null);
              const n = new Image();
              (n.src = o),
                (n.dataset.index = t),
                (n.dataset.filename = s),
                (this.showingThumbFilename = s),
                this.player.debug.log(`Loading image: ${o}`),
                (n.onload = () => this.showImage(n, r, e, t, s, !0)),
                (this.loadingImage = n),
                this.removeOldImages(n);
            }
          }),
          Bi(this, "showImage", (e, t, n, i, r, s = !0) => {
            this.player.debug.log(
              `Showing thumb: ${r}. num: ${i}. qual: ${n}. newimg: ${s}`
            ),
              this.setImageSizeAndOffset(e, t),
              s &&
                (this.currentImageContainer.appendChild(e),
                (this.currentImageElement = e),
                this.loadedImages.includes(r) || this.loadedImages.push(r)),
              this.preloadNearby(i, !0)
                .then(this.preloadNearby(i, !1))
                .then(this.getHigherQuality(n, e, t, r));
          }),
          Bi(this, "removeOldImages", (e) => {
            Array.from(this.currentImageContainer.children).forEach((t) => {
              if ("img" !== t.tagName.toLowerCase()) return;
              const n = this.usingSprites ? 500 : 1e3;
              if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                t.dataset.deleting = !0;
                const { currentImageContainer: e } = this;
                setTimeout(() => {
                  e.removeChild(t),
                    this.player.debug.log(
                      `Removing thumb: ${t.dataset.filename}`
                    );
                }, n);
              }
            });
          }),
          Bi(
            this,
            "preloadNearby",
            (e, t = !0) =>
              new Promise((n) => {
                setTimeout(() => {
                  const i = this.thumbnails[0].frames[e].text;
                  if (this.showingThumbFilename === i) {
                    let r;
                    r = t
                      ? this.thumbnails[0].frames.slice(e)
                      : this.thumbnails[0].frames.slice(0, e).reverse();
                    let s = !1;
                    r.forEach((e) => {
                      const t = e.text;
                      if (t !== i && !this.loadedImages.includes(t)) {
                        (s = !0),
                          this.player.debug.log(
                            `Preloading thumb filename: ${t}`
                          );
                        const { urlPrefix: e } = this.thumbnails[0],
                          i = e + t,
                          r = new Image();
                        (r.src = i),
                          (r.onload = () => {
                            this.player.debug.log(
                              `Preloaded thumb filename: ${t}`
                            ),
                              this.loadedImages.includes(t) ||
                                this.loadedImages.push(t),
                              n();
                          });
                      }
                    }),
                      s || n();
                  }
                }, 300);
              })
          ),
          Bi(this, "getHigherQuality", (e, t, n, i) => {
            if (e < this.thumbnails.length - 1) {
              let r = t.naturalHeight;
              this.usingSprites && (r = n.h),
                r < this.thumbContainerHeight &&
                  setTimeout(() => {
                    this.showingThumbFilename === i &&
                      (this.player.debug.log(
                        `Showing higher quality thumb for: ${i}`
                      ),
                      this.loadImage(e + 1));
                  }, 300);
            }
          }),
          Bi(this, "toggleThumbContainer", (e = !1, t = !1) => {
            const n =
              this.player.config.classNames.previewThumbnails
                .thumbContainerShown;
            this.elements.thumb.container.classList.toggle(n, e),
              !e &&
                t &&
                ((this.showingThumb = null),
                (this.showingThumbFilename = null));
          }),
          Bi(this, "toggleScrubbingContainer", (e = !1) => {
            const t =
              this.player.config.classNames.previewThumbnails
                .scrubbingContainerShown;
            this.elements.scrubbing.container.classList.toggle(t, e),
              e ||
                ((this.showingThumb = null),
                (this.showingThumbFilename = null));
          }),
          Bi(this, "determineContainerAutoSizing", () => {
            (this.elements.thumb.imageContainer.clientHeight > 20 ||
              this.elements.thumb.imageContainer.clientWidth > 20) &&
              (this.sizeSpecifiedInCSS = !0);
          }),
          Bi(this, "setThumbContainerSizeAndPos", () => {
            const { imageContainer: e } = this.elements.thumb;
            if (this.sizeSpecifiedInCSS) {
              if (e.clientHeight > 20 && e.clientWidth < 20) {
                const t = Math.floor(e.clientHeight * this.thumbAspectRatio);
                e.style.width = `${t}px`;
              } else if (e.clientHeight < 20 && e.clientWidth > 20) {
                const t = Math.floor(e.clientWidth / this.thumbAspectRatio);
                e.style.height = `${t}px`;
              }
            } else {
              const t = Math.floor(
                this.thumbContainerHeight * this.thumbAspectRatio
              );
              (e.style.height = `${this.thumbContainerHeight}px`),
                (e.style.width = `${t}px`);
            }
            this.setThumbContainerPos();
          }),
          Bi(this, "setThumbContainerPos", () => {
            const e = this.player.elements.progress.getBoundingClientRect(),
              t = this.player.elements.container.getBoundingClientRect(),
              { container: n } = this.elements.thumb,
              i = t.left - e.left + 10,
              r = t.right - e.left - n.clientWidth - 10,
              s = this.mousePosX - e.left - n.clientWidth / 2,
              o = so(s, i, r);
            (n.style.left = `${o}px`),
              n.style.setProperty("--preview-arrow-offset", s - o + "px");
          }),
          Bi(this, "setScrubbingContainerSize", () => {
            const { width: e, height: t } = ao(this.thumbAspectRatio, {
              width: this.player.media.clientWidth,
              height: this.player.media.clientHeight,
            });
            (this.elements.scrubbing.container.style.width = `${e}px`),
              (this.elements.scrubbing.container.style.height = `${t}px`);
          }),
          Bi(this, "setImageSizeAndOffset", (e, t) => {
            if (!this.usingSprites) return;
            const n = this.thumbContainerHeight / t.h;
            (e.style.height = e.naturalHeight * n + "px"),
              (e.style.width = e.naturalWidth * n + "px"),
              (e.style.left = `-${t.x * n}px`),
              (e.style.top = `-${t.y * n}px`);
          }),
          (this.player = e),
          (this.thumbnails = []),
          (this.loaded = !1),
          (this.lastMouseMoveTime = Date.now()),
          (this.mouseDown = !1),
          (this.loadedImages = []),
          (this.elements = { thumb: {}, scrubbing: {} }),
          this.load();
      }
      get enabled() {
        return (
          this.player.isHTML5 &&
          this.player.isVideo &&
          this.player.config.previewThumbnails.enabled
        );
      }
      get currentImageContainer() {
        return this.mouseDown
          ? this.elements.scrubbing.container
          : this.elements.thumb.imageContainer;
      }
      get usingSprites() {
        return Object.keys(this.thumbnails[0].frames[0]).includes("w");
      }
      get thumbAspectRatio() {
        return this.usingSprites
          ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h
          : this.thumbnails[0].width / this.thumbnails[0].height;
      }
      get thumbContainerHeight() {
        if (this.mouseDown) {
          const { height: e } = ao(this.thumbAspectRatio, {
            width: this.player.media.clientWidth,
            height: this.player.media.clientHeight,
          });
          return e;
        }
        return this.sizeSpecifiedInCSS
          ? this.elements.thumb.imageContainer.clientHeight
          : Math.floor(
              this.player.media.clientWidth / this.thumbAspectRatio / 4
            );
      }
      get currentImageElement() {
        return this.mouseDown
          ? this.currentScrubbingImageElement
          : this.currentThumbnailImageElement;
      }
      set currentImageElement(e) {
        this.mouseDown
          ? (this.currentScrubbingImageElement = e)
          : (this.currentThumbnailImageElement = e);
      }
    }
    const co = {
      insertElements(e, t) {
        Er(t)
          ? Br(e, this.media, { src: t })
          : xr(t) &&
            t.forEach((t) => {
              Br(e, this.media, t);
            });
      },
      change(e) {
        Ur(e, "sources.length")
          ? (_s.cancelRequests.call(this),
            this.destroy.call(
              this,
              () => {
                (this.options.quality = []),
                  Vr(this.media),
                  (this.media = null),
                  Ar(this.elements.container) &&
                    this.elements.container.removeAttribute("class");
                const { sources: t, type: n } = e,
                  [{ provider: i = qs.html5, src: r }] = t,
                  s = "html5" === i ? n : "div",
                  o = "html5" === i ? {} : { src: r };
                Object.assign(this, {
                  provider: i,
                  type: n,
                  supported: ns.check(n, i, this.config.playsinline),
                  media: Hr(s, o),
                }),
                  this.elements.container.appendChild(this.media),
                  Tr(e.autoplay) && (this.config.autoplay = e.autoplay),
                  this.isHTML5 &&
                    (this.config.crossorigin &&
                      this.media.setAttribute("crossorigin", ""),
                    this.config.autoplay &&
                      this.media.setAttribute("autoplay", ""),
                    Lr(e.poster) || (this.poster = e.poster),
                    this.config.loop.active &&
                      this.media.setAttribute("loop", ""),
                    this.config.muted && this.media.setAttribute("muted", ""),
                    this.config.playsinline &&
                      this.media.setAttribute("playsinline", "")),
                  Ks.addStyleHook.call(this),
                  this.isHTML5 && co.insertElements.call(this, "source", t),
                  (this.config.title = e.title),
                  io.setup.call(this),
                  this.isHTML5 &&
                    Object.keys(e).includes("tracks") &&
                    co.insertElements.call(this, "track", e.tracks),
                  (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                    Ks.build.call(this),
                  this.isHTML5 && this.media.load(),
                  Lr(e.previewThumbnails) ||
                    (Object.assign(
                      this.config.previewThumbnails,
                      e.previewThumbnails
                    ),
                    this.previewThumbnails &&
                      this.previewThumbnails.loaded &&
                      (this.previewThumbnails.destroy(),
                      (this.previewThumbnails = null)),
                    this.config.previewThumbnails.enabled &&
                      (this.previewThumbnails = new lo(this))),
                  this.fullscreen.update();
              },
              !0
            ))
          : this.debug.warn("Invalid source format");
      },
    };
    class uo {
      constructor(e, t) {
        if (
          (Bi(this, "play", () =>
            Sr(this.media.play)
              ? (this.ads &&
                  this.ads.enabled &&
                  this.ads.managerPromise
                    .then(() => this.ads.play())
                    .catch(() => hs(this.media.play())),
                this.media.play())
              : null
          ),
          Bi(this, "pause", () =>
            this.playing && Sr(this.media.pause) ? this.media.pause() : null
          ),
          Bi(this, "togglePlay", (e) =>
            (Tr(e) ? e : !this.playing) ? this.play() : this.pause()
          ),
          Bi(this, "stop", () => {
            this.isHTML5
              ? (this.pause(), this.restart())
              : Sr(this.media.stop) && this.media.stop();
          }),
          Bi(this, "restart", () => {
            this.currentTime = 0;
          }),
          Bi(this, "rewind", (e) => {
            this.currentTime -= kr(e) ? e : this.config.seekTime;
          }),
          Bi(this, "forward", (e) => {
            this.currentTime += kr(e) ? e : this.config.seekTime;
          }),
          Bi(this, "increaseVolume", (e) => {
            const t = this.media.muted ? 0 : this.volume;
            this.volume = t + (kr(e) ? e : 0);
          }),
          Bi(this, "decreaseVolume", (e) => {
            this.increaseVolume(-e);
          }),
          Bi(this, "airplay", () => {
            ns.airplay && this.media.webkitShowPlaybackTargetPicker();
          }),
          Bi(this, "toggleControls", (e) => {
            if (this.supported.ui && !this.isAudio) {
              const t = Xr(
                  this.elements.container,
                  this.config.classNames.hideControls
                ),
                n = void 0 === e ? void 0 : !e,
                i = Jr(
                  this.elements.container,
                  this.config.classNames.hideControls,
                  n
                );
              if (
                (i &&
                  xr(this.config.controls) &&
                  this.config.controls.includes("settings") &&
                  !Lr(this.config.settings) &&
                  Ls.toggleMenu.call(this, !1),
                i !== t)
              ) {
                const e = i ? "controlshidden" : "controlsshown";
                ls.call(this, this.media, e);
              }
              return !i;
            }
            return !1;
          }),
          Bi(this, "on", (e, t) => {
            ss.call(this, this.elements.container, e, t);
          }),
          Bi(this, "once", (e, t) => {
            as.call(this, this.elements.container, e, t);
          }),
          Bi(this, "off", (e, t) => {
            os(this.elements.container, e, t);
          }),
          Bi(this, "destroy", (e, t = !1) => {
            if (!this.ready) return;
            const n = () => {
              (document.body.style.overflow = ""),
                (this.embed = null),
                t
                  ? (Object.keys(this.elements).length &&
                      (Vr(this.elements.buttons.play),
                      Vr(this.elements.captions),
                      Vr(this.elements.controls),
                      Vr(this.elements.wrapper),
                      (this.elements.buttons.play = null),
                      (this.elements.captions = null),
                      (this.elements.controls = null),
                      (this.elements.wrapper = null)),
                    Sr(e) && e())
                  : (cs.call(this),
                    _s.cancelRequests.call(this),
                    zr(this.elements.original, this.elements.container),
                    ls.call(this, this.elements.original, "destroyed", !0),
                    Sr(e) && e.call(this.elements.original),
                    (this.ready = !1),
                    setTimeout(() => {
                      (this.elements = null), (this.media = null);
                    }, 200));
            };
            this.stop(),
              clearTimeout(this.timers.loading),
              clearTimeout(this.timers.controls),
              clearTimeout(this.timers.resized),
              this.isHTML5
                ? (Ks.toggleNativeControls.call(this, !0), n())
                : this.isYouTube
                ? (clearInterval(this.timers.buffering),
                  clearInterval(this.timers.playing),
                  null !== this.embed &&
                    Sr(this.embed.destroy) &&
                    this.embed.destroy(),
                  n())
                : this.isVimeo &&
                  (null !== this.embed && this.embed.unload().then(n),
                  setTimeout(n, 200));
          }),
          Bi(this, "supports", (e) => ns.mime.call(this, e)),
          (this.timers = {}),
          (this.ready = !1),
          (this.loading = !1),
          (this.failed = !1),
          (this.touch = ns.touch),
          (this.media = e),
          Er(this.media) &&
            (this.media = document.querySelectorAll(this.media)),
          ((window.jQuery && this.media instanceof jQuery) ||
            Cr(this.media) ||
            xr(this.media)) &&
            (this.media = this.media[0]),
          (this.config = Fr(
            {},
            Us,
            uo.defaults,
            t || {},
            (() => {
              try {
                return JSON.parse(this.media.getAttribute("data-plyr-config"));
              } catch (e) {
                return {};
              }
            })()
          )),
          (this.elements = {
            container: null,
            fullscreen: null,
            captions: null,
            buttons: {},
            display: {},
            progress: {},
            inputs: {},
            settings: { popup: null, menu: null, panels: {}, buttons: {} },
          }),
          (this.captions = {
            active: null,
            currentTrack: -1,
            meta: new WeakMap(),
          }),
          (this.fullscreen = { active: !1 }),
          (this.options = { speed: [], quality: [] }),
          (this.debug = new Ws(this.config.debug)),
          this.debug.log("Config", this.config),
          this.debug.log("Support", ns),
          wr(this.media) || !Ar(this.media))
        )
          return void this.debug.error(
            "Setup failed: no suitable element passed"
          );
        if (this.media.plyr)
          return void this.debug.warn("Target already setup");
        if (!this.config.enabled)
          return void this.debug.error("Setup failed: disabled by config");
        if (!ns.check().api)
          return void this.debug.error("Setup failed: no support");
        const n = this.media.cloneNode(!0);
        (n.autoplay = !1), (this.elements.original = n);
        const i = this.media.tagName.toLowerCase();
        let r = null,
          s = null;
        switch (i) {
          case "div":
            if (((r = this.media.querySelector("iframe")), Ar(r))) {
              if (
                ((s = Ms(r.getAttribute("src"))),
                (this.provider = (function (e) {
                  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                    e
                  )
                    ? qs.youtube
                    : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                        e
                      )
                    ? qs.vimeo
                    : null;
                })(s.toString())),
                (this.elements.container = this.media),
                (this.media = r),
                (this.elements.container.className = ""),
                s.search.length)
              ) {
                const e = ["1", "true"];
                e.includes(s.searchParams.get("autoplay")) &&
                  (this.config.autoplay = !0),
                  e.includes(s.searchParams.get("loop")) &&
                    (this.config.loop.active = !0),
                  this.isYouTube
                    ? ((this.config.playsinline = e.includes(
                        s.searchParams.get("playsinline")
                      )),
                      (this.config.youtube.hl = s.searchParams.get("hl")))
                    : (this.config.playsinline = !0);
              }
            } else
              (this.provider = this.media.getAttribute(
                this.config.attributes.embed.provider
              )),
                this.media.removeAttribute(
                  this.config.attributes.embed.provider
                );
            if (Lr(this.provider) || !Object.values(qs).includes(this.provider))
              return void this.debug.error("Setup failed: Invalid provider");
            this.type = Bs;
            break;
          case "video":
          case "audio":
            (this.type = i),
              (this.provider = qs.html5),
              this.media.hasAttribute("crossorigin") &&
                (this.config.crossorigin = !0),
              this.media.hasAttribute("autoplay") &&
                (this.config.autoplay = !0),
              (this.media.hasAttribute("playsinline") ||
                this.media.hasAttribute("webkit-playsinline")) &&
                (this.config.playsinline = !0),
              this.media.hasAttribute("muted") && (this.config.muted = !0),
              this.media.hasAttribute("loop") && (this.config.loop.active = !0);
            break;
          default:
            return void this.debug.error("Setup failed: unsupported type");
        }
        (this.supported = ns.check(
          this.type,
          this.provider,
          this.config.playsinline
        )),
          this.supported.api
            ? ((this.eventListeners = []),
              (this.listeners = new Js(this)),
              (this.storage = new Ps(this)),
              (this.media.plyr = this),
              Ar(this.elements.container) ||
                ((this.elements.container = Hr("div", { tabindex: 0 })),
                $r(this.media, this.elements.container)),
              Ks.migrateStyles.call(this),
              Ks.addStyleHook.call(this),
              io.setup.call(this),
              this.config.debug &&
                ss.call(
                  this,
                  this.elements.container,
                  this.config.events.join(" "),
                  (e) => {
                    this.debug.log(`event: ${e.type}`);
                  }
                ),
              (this.fullscreen = new zs(this)),
              (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                Ks.build.call(this),
              this.listeners.container(),
              this.listeners.global(),
              this.config.ads.enabled && (this.ads = new ro(this)),
              this.isHTML5 &&
                this.config.autoplay &&
                this.once("canplay", () => hs(this.play())),
              (this.lastSeekTime = 0),
              this.config.previewThumbnails.enabled &&
                (this.previewThumbnails = new lo(this)))
            : this.debug.error("Setup failed: no support");
      }
      get isHTML5() {
        return this.provider === qs.html5;
      }
      get isEmbed() {
        return this.isYouTube || this.isVimeo;
      }
      get isYouTube() {
        return this.provider === qs.youtube;
      }
      get isVimeo() {
        return this.provider === qs.vimeo;
      }
      get isVideo() {
        return this.type === Bs;
      }
      get isAudio() {
        return this.type === Hs;
      }
      get playing() {
        return Boolean(this.ready && !this.paused && !this.ended);
      }
      get paused() {
        return Boolean(this.media.paused);
      }
      get stopped() {
        return Boolean(this.paused && 0 === this.currentTime);
      }
      get ended() {
        return Boolean(this.media.ended);
      }
      set currentTime(e) {
        if (!this.duration) return;
        const t = kr(e) && e > 0;
        (this.media.currentTime = t ? Math.min(e, this.duration) : 0),
          this.debug.log(`Seeking to ${this.currentTime} seconds`);
      }
      get currentTime() {
        return Number(this.media.currentTime);
      }
      get buffered() {
        const { buffered: e } = this.media;
        return kr(e)
          ? e
          : e && e.length && this.duration > 0
          ? e.end(0) / this.duration
          : 0;
      }
      get seeking() {
        return Boolean(this.media.seeking);
      }
      get duration() {
        const e = parseFloat(this.config.duration),
          t = (this.media || {}).duration,
          n = kr(t) && t !== 1 / 0 ? t : 0;
        return e || n;
      }
      set volume(e) {
        let t = e;
        Er(t) && (t = Number(t)),
          kr(t) || (t = this.storage.get("volume")),
          kr(t) || ({ volume: t } = this.config),
          t > 1 && (t = 1),
          t < 0 && (t = 0),
          (this.config.volume = t),
          (this.media.volume = t),
          !Lr(e) && this.muted && t > 0 && (this.muted = !1);
      }
      get volume() {
        return Number(this.media.volume);
      }
      set muted(e) {
        let t = e;
        Tr(t) || (t = this.storage.get("muted")),
          Tr(t) || (t = this.config.muted),
          (this.config.muted = t),
          (this.media.muted = t);
      }
      get muted() {
        return Boolean(this.media.muted);
      }
      get hasAudio() {
        return (
          !this.isHTML5 ||
          !!this.isAudio ||
          Boolean(this.media.mozHasAudio) ||
          Boolean(this.media.webkitAudioDecodedByteCount) ||
          Boolean(this.media.audioTracks && this.media.audioTracks.length)
        );
      }
      set speed(e) {
        let t = null;
        kr(e) && (t = e),
          kr(t) || (t = this.storage.get("speed")),
          kr(t) || (t = this.config.speed.selected);
        const { minimumSpeed: n, maximumSpeed: i } = this;
        (t = so(t, n, i)),
          (this.config.speed.selected = t),
          setTimeout(() => {
            this.media && (this.media.playbackRate = t);
          }, 0);
      }
      get speed() {
        return Number(this.media.playbackRate);
      }
      get minimumSpeed() {
        return this.isYouTube
          ? Math.min(...this.options.speed)
          : this.isVimeo
          ? 0.5
          : 0.0625;
      }
      get maximumSpeed() {
        return this.isYouTube
          ? Math.max(...this.options.speed)
          : this.isVimeo
          ? 2
          : 16;
      }
      set quality(e) {
        const t = this.config.quality,
          n = this.options.quality;
        if (!n.length) return;
        let i = [
            !Lr(e) && Number(e),
            this.storage.get("quality"),
            t.selected,
            t.default,
          ].find(kr),
          r = !0;
        if (!n.includes(i)) {
          const e = ps(n, i);
          this.debug.warn(
            `Unsupported quality option: ${i}, using ${e} instead`
          ),
            (i = e),
            (r = !1);
        }
        (t.selected = i),
          (this.media.quality = i),
          r && this.storage.set({ quality: i });
      }
      get quality() {
        return this.media.quality;
      }
      set loop(e) {
        const t = Tr(e) ? e : this.config.loop.active;
        (this.config.loop.active = t), (this.media.loop = t);
      }
      get loop() {
        return Boolean(this.media.loop);
      }
      set source(e) {
        co.change.call(this, e);
      }
      get source() {
        return this.media.currentSrc;
      }
      get download() {
        const { download: e } = this.config.urls;
        return Nr(e) ? e : this.source;
      }
      set download(e) {
        Nr(e) &&
          ((this.config.urls.download = e), Ls.setDownloadUrl.call(this));
      }
      set poster(e) {
        this.isVideo
          ? Ks.setPoster.call(this, e, !1).catch(() => {})
          : this.debug.warn("Poster can only be set for video");
      }
      get poster() {
        return this.isVideo
          ? this.media.getAttribute("poster") ||
              this.media.getAttribute("data-poster")
          : null;
      }
      get ratio() {
        if (!this.isVideo) return null;
        const e = ys(bs.call(this));
        return xr(e) ? e.join(":") : e;
      }
      set ratio(e) {
        this.isVideo
          ? Er(e) && gs(e)
            ? ((this.config.ratio = ys(e)), vs.call(this))
            : this.debug.error(`Invalid aspect ratio specified (${e})`)
          : this.debug.warn("Aspect ratio can only be set for video");
      }
      set autoplay(e) {
        this.config.autoplay = Tr(e) ? e : this.config.autoplay;
      }
      get autoplay() {
        return Boolean(this.config.autoplay);
      }
      toggleCaptions(e) {
        Ds.toggle.call(this, e, !1);
      }
      set currentTrack(e) {
        Ds.set.call(this, e, !1), Ds.setup.call(this);
      }
      get currentTrack() {
        const { toggled: e, currentTrack: t } = this.captions;
        return e ? t : -1;
      }
      set language(e) {
        Ds.setLanguage.call(this, e, !1);
      }
      get language() {
        return (Ds.getCurrentTrack.call(this) || {}).language;
      }
      set pip(e) {
        if (!ns.pip) return;
        const t = Tr(e) ? e : !this.pip;
        Sr(this.media.webkitSetPresentationMode) &&
          this.media.webkitSetPresentationMode(t ? Fs : $s),
          Sr(this.media.requestPictureInPicture) &&
            (!this.pip && t
              ? this.media.requestPictureInPicture()
              : this.pip && !t && document.exitPictureInPicture());
      }
      get pip() {
        return ns.pip
          ? Lr(this.media.webkitPresentationMode)
            ? this.media === document.pictureInPictureElement
            : this.media.webkitPresentationMode === Fs
          : null;
      }
      setPreviewThumbnails(e) {
        this.previewThumbnails &&
          this.previewThumbnails.loaded &&
          (this.previewThumbnails.destroy(), (this.previewThumbnails = null)),
          Object.assign(this.config.previewThumbnails, e),
          this.config.previewThumbnails.enabled &&
            (this.previewThumbnails = new lo(this));
      }
      static supported(e, t, n) {
        return ns.check(e, t, n);
      }
      static loadSprite(e, t) {
        return js(e, t);
      }
      static setup(e, t = {}) {
        let n = null;
        return (
          Er(e)
            ? (n = Array.from(document.querySelectorAll(e)))
            : Cr(e)
            ? (n = Array.from(e))
            : xr(e) && (n = e.filter(Ar)),
          Lr(n) ? null : n.map((e) => new uo(e, t))
        );
      }
    }
    var ho;
    uo.defaults = ((ho = Us), JSON.parse(JSON.stringify(ho)));
    const po = {},
      fo = (e, t = "", n = !1) => e && e.classList[n ? "add" : "remove"](t);
    (() => {
      const e = "plyr.io";
      window.location.host.includes(e) &&
        li({
          dsn: "https://d4ad9866ad834437a4754e23937071e4@sentry.io/305555",
          whitelistUrls: [e].map(
            (e) => new RegExp(`https://(([a-z0-9])+(.))*${e}`)
          ),
        }),
        document.addEventListener("DOMContentLoaded", () => {
          Hi.setup(".js-shr", {
            count: { className: "button__count" },
            wrapper: { className: "button--with-count" },
          });
          const e = new uo("#player-Shawshank", {
            debug: !0,
            title: "The Shawshank Redemption",
            keyboard: { global: !0 },
            tooltips: { controls: !0 },
            captions: { active: !0 },
            previewThumbnails: {
              enabled: !0,
              src: [
              ],
            },
            vimeo: { referrerPolicy: "no-referrer" },
            mediaMetadata: {
              title: "The Shawshank Redemption",
              artwork: [
              ],
            },
            markers: {
              enabled: !0,
              points: [
                {time:425},
                {time:2276},
                {time:7565},
              ],
            },
          });
          const f = new uo("#player-GreenBook", {
            debug: !0,
            title: "GreenBook",
            keyboard: { global: !0 },
            tooltips: { controls: !0 },
            captions: { active: !0 },
            previewThumbnails: {
              enabled: !0,
              src: [
              ],
            },
            vimeo: { referrerPolicy: "no-referrer" },
            mediaMetadata: {
              title: "GreenBook",
              artwork: [
              ],
            },
            markers: {
              enabled: !0,
              points: [
                {time:5554},
              ],
            },
          });  const music_player = new uo("#player-Stitches", {
            debug: !0,
            title: "GreenBook",
            keyboard: { global: !0 },
            tooltips: { controls: !0 },
            captions: { active: !0 },
            previewThumbnails: {
              enabled: !0,
              src: [
              ],
            },
            vimeo: { referrerPolicy: "no-referrer" },
            mediaMetadata: {
              title: "GreenBook",
              artwork: [
              ],
            },
            markers: {
              enabled: !0,
              points: [
                {time:5554},
              ],
            },
          });
          window.player = music_player;
          window.player = e;
          window.player = f;
          const t = document.querySelectorAll("[data-source]"),
            n = Object.keys(po),
            i = Boolean(window.history && window.history.pushState);
          let r = window.location.hash.substring(1);
          const s = r.length;
          function o(e) {
            Array.from(t).forEach((e) => fo(e.parentElement, "active", !1)),
              fo(document.querySelector(`[data-source="${e}"]`), "active", !0),
              Array.from(document.querySelectorAll(".plyr__cite")).forEach(
                (e) => {
                  e.hidden = !0;
                }
              ),
              (document.querySelector(`.plyr__cite--${e}`).hidden = !1);
          }
          function a(t, i) {
            !n.includes(t) ||
              (!i && t === r) ||
              (!r.length && "video" === t) ||
              ((e.source = po[t]), (r = t), o(t));
          }
          Array.from(t).forEach((e) => {
            e.addEventListener("click", () => {
              const t = e.getAttribute("data-source");
              a(t), i && window.history.pushState({ type: t }, "", `#${t}`);
            });
          }),
            window.addEventListener("popstate", (e) => {
              e.state &&
                Object.keys(e.state).includes("type") &&
                a(e.state.type);
            }),
            s || (r = "video"),
            i &&
              n.includes(r) &&
              window.history.replaceState({ type: r }, "", s ? `#${r}` : ""),
            "video" !== r && a(r, !0),
            o(r);
        });
    })();
  })();
