import { a as Pe } from "./chunk-T3AYJES5.mjs";
import {
  A as l,
  F as sr,
  H as Ve,
  J as M,
  M as mr,
  O as je,
  P as Y,
  Q as D,
  R as lr,
  S as fr,
  T as cr,
  U as R,
  W as u,
  aa as dr,
  b as he,
  ba as ie,
  c as t,
  ca as c,
  d as Se,
  da as a,
  f as ke,
  fa as pr,
  g as rr,
  ga as gr,
  ha as hr,
  i as tr,
  ia as ye,
  j as Be,
  k as ar,
  l as nr,
  m as ir,
  n as V,
  o as or,
  q as ue,
  r as y,
  s as ne,
  t as Ue,
  u as Ae,
  v as ze,
  w as Ne,
  x as Ge,
  y as _e,
  z as e,
} from "./chunk-BHLRWPII.mjs";
import { c as E } from "./chunk-ELYU6EKT.mjs";
var fe = (r) => r;
var xe = { ms: (r) => 1e3 * r, s: (r) => r / 1e3 };
function Le(r, n) {
  return n ? r * (1e3 / n) : 0;
}
var ur = (r, n, o) =>
    (((1 - 3 * o + 3 * n) * r + (3 * o - 6 * n)) * r + 3 * n) * r,
  $r = 1e-7,
  Qr = 12;
function Kr(r, n, o, i, m) {
  let f,
    d,
    b = 0;
  do (d = n + (o - n) / 2), (f = ur(d, i, m) - r), f > 0 ? (o = d) : (n = d);
  while (Math.abs(f) > $r && ++b < Qr);
  return d;
}
function ce(r, n, o, i) {
  if (r === n && o === i) return fe;
  let m = (f) => Kr(f, 0, 1, r, o);
  return (f) => (f === 0 || f === 1 ? f : ur(m(f), n, i));
}
var li = {
  ease: ce(0.25, 0.1, 0.25, 1),
  "ease-in": ce(0.42, 0, 1, 1),
  "ease-in-out": ce(0.42, 0, 0.58, 1),
  "ease-out": ce(0, 0, 0.58, 1),
};
function yr(r, n) {
  var o = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) &&
      n.indexOf(i) < 0 &&
      (o[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") {
    var m = 0;
    for (i = Object.getOwnPropertySymbols(r); m < i.length; m++)
      n.indexOf(i[m]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, i[m]) &&
        (o[i[m]] = r[i[m]]);
  }
  return o;
}
var oe = {};
Object.defineProperty(oe, "__esModule", { value: !0 });
oe.warning = function () {};
oe.invariant = function () {};
var gi = oe.__esModule,
  hi = oe.warning,
  tt = oe.invariant;
var at = 5;
function we(r, n, o) {
  let i = Math.max(n - at, 0);
  return Le(o - r(i), n - i);
}
var se = { stiffness: 100, damping: 10, mass: 1 },
  nt = (r = se.stiffness, n = se.damping, o = se.mass) =>
    n / (2 * Math.sqrt(r * o));
function it(r, n, o) {
  return (r < n && o >= n) || (r > n && o <= n);
}
var Ze = ({
    stiffness: r = se.stiffness,
    damping: n = se.damping,
    mass: o = se.mass,
    from: i = 0,
    to: m = 1,
    velocity: f = 0,
    restSpeed: d = 2,
    restDistance: b = 0.5,
  } = {}) => {
    f = f ? xe.s(f) : 0;
    let x = { done: !1, hasReachedTarget: !1, current: i, target: m },
      s = m - i,
      h = Math.sqrt(r / o) / 1e3,
      p = nt(r, n, o),
      F;
    if (p < 1) {
      let w = h * Math.sqrt(1 - p * p);
      F = (T) =>
        m -
        Math.exp(-p * h * T) *
          (((p * h * s - f) / w) * Math.sin(w * T) + s * Math.cos(w * T));
    } else F = (w) => m - Math.exp(-h * w) * (s + (h * s - f) * w);
    return (w) => {
      x.current = F(w);
      let T = w === 0 ? f : we(F, w, x.current),
        S = Math.abs(T) <= d,
        I = Math.abs(m - x.current) <= b;
      return (x.done = S && I), (x.hasReachedTarget = it(i, m, x.current)), x;
    };
  },
  xr = ({
    from: r = 0,
    velocity: n = 0,
    power: o = 0.8,
    decay: i = 0.325,
    bounceDamping: m,
    bounceStiffness: f,
    changeTarget: d,
    min: b,
    max: x,
    restDistance: s = 0.5,
    restSpeed: h,
  }) => {
    i = xe.ms(i);
    let p = { hasReachedTarget: !1, done: !1, current: r, target: r },
      F = (g) => (b !== void 0 && g < b) || (x !== void 0 && g > x),
      w = (g) =>
        b === void 0
          ? x
          : x === void 0 || Math.abs(b - g) < Math.abs(x - g)
          ? b
          : x,
      T = o * n,
      S = r + T,
      I = d === void 0 ? S : d(S);
    (p.target = I), I !== S && (T = I - r);
    let B = (g) => -T * Math.exp(-g / i),
      j = (g) => I + B(g),
      _ = (g) => {
        let k = B(g),
          $ = j(g);
        (p.done = Math.abs(k) <= s), (p.current = p.done ? I : $);
      },
      W,
      O,
      z = (g) => {
        F(p.current) &&
          ((W = g),
          (O = Ze({
            from: p.current,
            to: w(p.current),
            velocity: we(j, g, p.current),
            damping: m,
            stiffness: f,
            restDistance: s,
            restSpeed: h,
          })));
      };
    return (
      z(0),
      (g) => {
        let k = !1;
        return (
          !O && W === void 0 && ((k = !0), _(g), z(g)),
          W !== void 0 && g > W
            ? ((p.hasReachedTarget = !0), O(g - W))
            : ((p.hasReachedTarget = !1), !k && _(g), p)
        );
      }
    );
  },
  qe = 10,
  ot = 1e4;
function wr(r) {
  let n,
    o = qe,
    i = r(0),
    m = [i.current];
  for (; !i.done && o < ot; )
    (i = r(o)),
      m.push(i.done ? i.target : i.current),
      n === void 0 && i.hasReachedTarget && (n = o),
      (o += qe);
  let f = o - qe;
  return (
    m.length === 1 && m.push(i.current),
    { keyframes: m, duration: f / 1e3, overshootDuration: (n ?? f) / 1e3 }
  );
}
var st = ["", "X", "Y", "Z"],
  mt = ["translate", "scale", "rotate", "skew"];
var vr = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (r) => r + "deg",
  },
  lt = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (r) => r + "px",
    },
    rotate: vr,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: fe },
    skew: vr,
  },
  ft = new Map(),
  ct = (r) => `--motion-${r}`,
  Er = ["x", "y", "z"];
mt.forEach((r) => {
  st.forEach((n) => {
    Er.push(r + n), ft.set(ct(r + n), lt[r]);
  });
});
var ji = new Set(Er);
var br = (r) => document.createElement("div").animate(r, { duration: 0.001 }),
  Rr = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        br({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!br({ opacity: [0, 1] }).finished,
  },
  Ye = {},
  dt = {};
for (let r in Rr) dt[r] = () => (Ye[r] === void 0 && (Ye[r] = Rr[r]()), Ye[r]);
function Mr(r, n) {
  var o;
  return (
    typeof r == "string"
      ? n
        ? (((o = n[r]) !== null && o !== void 0) ||
            (n[r] = document.querySelectorAll(r)),
          (r = n[r]))
        : (r = document.querySelectorAll(r))
      : r instanceof Element && (r = [r]),
    Array.from(r || [])
  );
}
function Fr(r) {
  let n = new WeakMap();
  return (o = {}) => {
    let i = new Map(),
      m = (d = 0, b = 100, x = 0, s = !1) => {
        let h = `${d}-${b}-${x}-${s}`;
        return (
          i.has(h) ||
            i.set(
              h,
              r(
                Object.assign(
                  {
                    from: d,
                    to: b,
                    velocity: x,
                    restSpeed: s ? 0.05 : 2,
                    restDistance: s ? 0.01 : 0.5,
                  },
                  o
                )
              )
            ),
          i.get(h)
        );
      },
      f = (d) => (n.has(d) || n.set(d, wr(d)), n.get(d));
    return {
      createAnimation: (d, b, x, s, h) => {
        var p, F;
        let w,
          T = d.length;
        if (x && T <= 2 && d.every(pt)) {
          let I = d[T - 1],
            B = T === 1 ? null : d[0],
            j = 0,
            _ = 0,
            W = h?.generator;
          if (W) {
            let { animation: g, generatorStartTime: k } = h,
              $ = g?.startTime || k || 0,
              Q = g?.currentTime || performance.now() - $,
              Z = W(Q).current;
            (_ = (p = B) !== null && p !== void 0 ? p : Z),
              (T === 1 || (T === 2 && d[0] === null)) &&
                (j = we((pe) => W(pe).current, Q, Z));
          } else _ = (F = B) !== null && F !== void 0 ? F : parseFloat(b());
          let O = m(_, I, j, s?.includes("scale")),
            z = f(O);
          (w = Object.assign(Object.assign({}, z), { easing: "linear" })),
            h &&
              ((h.generator = O), (h.generatorStartTime = performance.now()));
        } else w = { easing: "ease", duration: f(m(0, 100)).overshootDuration };
        return w;
      },
    };
  };
}
var pt = (r) => typeof r != "string",
  Pi = Fr(Ze),
  Li = Fr(xr),
  gt = { any: 0, all: 1 };
function ht(r, n, { root: o, margin: i, amount: m = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let f = Mr(r),
    d = new WeakMap(),
    b = (s) => {
      s.forEach((h) => {
        let p = d.get(h.target);
        if (h.isIntersecting !== !!p)
          if (h.isIntersecting) {
            let F = n(h);
            typeof F == "function" ? d.set(h.target, F) : x.unobserve(h.target);
          } else p && (p(h), d.delete(h.target));
      });
    },
    x = new IntersectionObserver(b, {
      root: o,
      rootMargin: i,
      threshold: typeof m == "number" ? m : gt[m],
    });
  return f.forEach((s) => x.observe(s)), () => x.disconnect();
}
var ve = new WeakMap(),
  H;
function ut(r, n) {
  if (n) {
    let { inlineSize: o, blockSize: i } = n[0];
    return { width: o, height: i };
  }
  return r instanceof SVGElement && "getBBox" in r
    ? r.getBBox()
    : { width: r.offsetWidth, height: r.offsetHeight };
}
function yt({ target: r, contentRect: n, borderBoxSize: o }) {
  var i;
  (i = ve.get(r)) === null ||
    i === void 0 ||
    i.forEach((m) => {
      m({
        target: r,
        contentSize: n,
        get size() {
          return ut(r, o);
        },
      });
    });
}
function xt(r) {
  r.forEach(yt);
}
function wt() {
  typeof ResizeObserver < "u" && (H = new ResizeObserver(xt));
}
function vt(r, n) {
  H || wt();
  let o = Mr(r);
  return (
    o.forEach((i) => {
      let m = ve.get(i);
      m || ((m = new Set()), ve.set(i, m)), m.add(n), H?.observe(i);
    }),
    () => {
      o.forEach((i) => {
        let m = ve.get(i);
        m?.delete(n), m?.size || H?.unobserve(i);
      });
    }
  );
}
var be = new Set(),
  de;
function bt() {
  (de = () => {
    let r = { width: E.innerWidth, height: E.innerHeight },
      n = { target: E, size: r, contentSize: r };
    be.forEach((o) => o(n));
  }),
    E.addEventListener("resize", de);
}
function Rt(r) {
  return (
    be.add(r),
    de || bt(),
    () => {
      be.delete(r), !be.size && de && (de = void 0);
    }
  );
}
function Or(r, n) {
  return typeof r == "function" ? Rt(r) : vt(r, n);
}
function De(r, n, o) {
  r.dispatchEvent(new CustomEvent(n, { detail: { originalEvent: o } }));
}
function Tr(r, n, o) {
  r.dispatchEvent(new CustomEvent(n, { detail: { originalEntry: o } }));
}
var Tt = {
    isActive: (r) => !!r.inView,
    subscribe: (r, { enable: n, disable: o }, { inViewOptions: i = {} }) => {
      let { once: m } = i,
        f = yr(i, ["once"]);
      return ht(
        r,
        (d) => {
          if ((n(), Tr(r, "viewenter", d), !m))
            return (b) => {
              o(), Tr(r, "viewleave", b);
            };
        },
        f
      );
    },
  },
  Cr = (r, n, o) => (i) => {
    (!i.pointerType || i.pointerType === "mouse") && (o(), De(r, n, i));
  },
  Ct = {
    isActive: (r) => !!r.hover,
    subscribe: (r, { enable: n, disable: o }) => {
      let i = Cr(r, "hoverstart", n),
        m = Cr(r, "hoverend", o);
      return (
        r.addEventListener("pointerenter", i),
        r.addEventListener("pointerleave", m),
        () => {
          r.removeEventListener("pointerenter", i),
            r.removeEventListener("pointerleave", m);
        }
      );
    },
  },
  Et = {
    isActive: (r) => !!r.press,
    subscribe: (r, { enable: n, disable: o }) => {
      let i = (f) => {
          o(), De(r, "pressend", f), E.removeEventListener("pointerup", i);
        },
        m = (f) => {
          n(), De(r, "pressstart", f), E.addEventListener("pointerup", i);
        };
      return (
        r.addEventListener("pointerdown", m),
        () => {
          r.removeEventListener("pointerdown", m),
            E.removeEventListener("pointerup", i);
        }
      );
    },
  },
  Mt = { inView: Tt, hover: Ct, press: Et },
  qi = ["initial", "animate", ...Object.keys(Mt), "exit"];
var Ft = 100,
  Ot = {
    left: (r) => `translateX(-${r}px)`,
    right: (r) => `translateX(${r}px)`,
    top: (r) => `translateY(-${r}px)`,
    bottom: (r) => `translateY(${r}px)`,
  },
  He =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function";
function G(r) {
  let {
      slots: n,
      gap: o,
      padding: i,
      paddingPerSide: m,
      paddingTop: f,
      paddingRight: d,
      paddingBottom: b,
      paddingLeft: x,
      speed: s,
      hoverFactor: h,
      direction: p,
      alignment: F,
      sizingOptions: w,
      fadeOptions: T,
      style: S,
    } = r,
    {
      fadeContent: I,
      overflow: B,
      fadeWidth: j,
      fadeInset: _,
      fadeAlpha: W,
    } = T,
    { widthType: O, heightType: z } = w,
    g = m ? `${f}px ${d}px ${b}px ${x}px` : `${i}px`,
    k = Ve.current() === Ve.canvas,
    $ = he.count(n),
    Q = $ > 0;
  p === !0 && (p = "left");
  let Z = p === "left" || p === "right",
    pe = Ue(0),
    Te = Ot[p],
    Pr = Ae(pe, Te),
    re = V(null),
    P = ir(() => [ke(), ke()], []),
    [K, Lr] = or({ parent: null, children: null }),
    $e = [],
    Ce = [],
    le = 0,
    Ee = 0;
  k && ((le = $ ? Math.floor(10 / $) : 0), (Ee = 1)),
    !k &&
      Q &&
      K.parent &&
      ((le = Math.round((K.parent / K.children) * 2) + 1),
      (le = Math.min(le, Ft)),
      (Ee = 1));
  let Qe = tr(() => {
      if (Q && re.current) {
        let C = Z ? re.current.offsetWidth : re.current.offsetHeight,
          v = P[0].current
            ? Z
              ? P[0].current.offsetLeft
              : P[0].current.offsetTop
            : 0,
          N =
            (P[1].current
              ? Z
                ? P[1].current.offsetLeft + P[1].current.offsetWidth
                : P[1].current.offsetTop + P[1].current.offsetHeight
              : 0) -
            v +
            o;
        Lr({ parent: C, children: N });
      }
    }, []),
    Ke = k ? { contentVisibility: "auto" } : {};
  if (Q) {
    if (!k) {
      let C = V(!0);
      Be(
        () => (
          ue.read(Qe),
          Or(re.current, ({ contentSize: v }) => {
            !C.current && (v.width || v.height) && ue.read(Qe),
              (C.current = !1);
          })
        ),
        []
      );
    }
    $e = he.map(n, (C, v) => {
      var q, N, X, J;
      let ee;
      v === 0 && (ee = P[0]), v === n.length - 1 && (ee = P[1]);
      let ae = {
        width: O
          ? (q = C.props) === null || q === void 0
            ? void 0
            : q.width
          : "100%",
        height: z
          ? (N = C.props) === null || N === void 0
            ? void 0
            : N.height
          : "100%",
      };
      return e(ne, {
        inherit: "id",
        children: e("li", {
          ref: ee,
          style: ae,
          children: Se(
            C,
            {
              style: {
                ...((X = C.props) === null || X === void 0 ? void 0 : X.style),
                ...ae,
                flexShrink: 0,
                ...Ke,
              },
              layoutId: C.props.layoutId
                ? C.props.layoutId + "-original-" + v
                : void 0,
            },
            (J = C.props) === null || J === void 0 ? void 0 : J.children
          ),
        }),
      });
    });
  }
  if (!k)
    for (let C = 0; C < le; C++)
      Ce = [
        ...Ce,
        ...he.map(n, (v, q) => {
          var N, X, J, ee, ae, We;
          let Hr = {
            width: O
              ? (N = v.props) === null || N === void 0
                ? void 0
                : N.width
              : "100%",
            height: z
              ? (X = v.props) === null || X === void 0
                ? void 0
                : X.height
              : "100%",
          };
          return e(
            ne,
            {
              inherit: "id",
              children: e(
                "li",
                {
                  style: Hr,
                  "aria-hidden": !0,
                  children: Se(
                    v,
                    {
                      key: C + " " + q,
                      style: {
                        ...((J = v.props) === null || J === void 0
                          ? void 0
                          : J.style),
                        width: O
                          ? (ee = v.props) === null || ee === void 0
                            ? void 0
                            : ee.width
                          : "100%",
                        height: z
                          ? (ae = v.props) === null || ae === void 0
                            ? void 0
                            : ae.height
                          : "100%",
                        flexShrink: 0,
                        ...Ke,
                      },
                      layoutId: v.props.layoutId
                        ? v.props.layoutId + "-dupe-" + C
                        : void 0,
                    },
                    (We = v.props) === null || We === void 0
                      ? void 0
                      : We.children
                  ),
                },
                C + "li" + q
              ),
            },
            C + "lg" + q
          );
        }),
      ];
  let L = K.children + K.children * Math.round(K.parent / K.children),
    Me = V(null),
    Fe = V(null),
    ge = V(0),
    Oe = V(!1),
    Xe = Ne(),
    Je = V(null),
    te = V(null);
  if (!k) {
    let C = _e(re);
    He
      ? Be(() => {
          if (!(Xe || !L || !s))
            return (
              (te.current = Je.current.animate(
                { transform: [Te(0), Te(L)] },
                {
                  duration: (Math.abs(L) / s) * 1e3,
                  iterations: 1 / 0,
                  easing: "linear",
                }
              )),
              () => te.current.cancel()
            );
        }, [h, L, s])
      : ze((v) => {
          if (!L || Xe || He) return;
          Me.current === null && (Me.current = v), (v = v - Me.current);
          let N = (Fe.current === null ? 0 : v - Fe.current) * (s / 1e3);
          Oe.current && (N *= h),
            (ge.current += N),
            (ge.current = Ge(0, L, ge.current)),
            (Fe.current = v),
            C && pe.set(ge.current);
        });
  }
  let qr = Z ? "to right" : "to bottom",
    er = j / 2,
    Zr = 100 - j / 2,
    Yr = Bt(_, 0, er),
    Dr = 100 - _,
    Ie = `linear-gradient(${qr}, rgba(0, 0, 0, ${W}) ${Yr}%, rgba(0, 0, 0, 1) ${er}%, rgba(0, 0, 0, 1) ${Zr}%, rgba(0, 0, 0, ${W}) ${Dr}%)`;
  return Q
    ? e("section", {
        style: {
          ...Ir,
          opacity: Ee,
          WebkitMaskImage: I ? Ie : void 0,
          MozMaskImage: I ? Ie : void 0,
          maskImage: I ? Ie : void 0,
          overflow: B ? "visible" : "hidden",
          padding: g,
        },
        ref: re,
        children: l(y.ul, {
          ref: Je,
          style: {
            ...Ir,
            gap: o,
            top: p === "bottom" && Wr(L) ? -L : void 0,
            left: p === "right" && Wr(L) ? -L : void 0,
            placeItems: F,
            position: "relative",
            flexDirection: Z ? "row" : "column",
            ...S,
            transform: He ? void 0 : Pr,
            willChange: k ? "auto" : "transform",
          },
          onMouseEnter: () => {
            (Oe.current = !0), te.current && (te.current.playbackRate = h);
          },
          onMouseLeave: () => {
            (Oe.current = !1), te.current && (te.current.playbackRate = 1);
          },
          children: [$e, Ce],
        }),
      })
    : l("section", {
        style: It,
        children: [
          e("div", { style: Wt, children: "\u2728" }),
          e("p", { style: St, children: "Connect to Content" }),
          e("p", {
            style: kt,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
G.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
mr(G, {
  slots: {
    type: M.Array,
    title: "Children",
    control: { type: M.ComponentInstance },
  },
  speed: {
    type: M.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: M.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: M.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: M.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: M.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: M.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: M.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: M.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: M.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: M.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: M.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(r) {
          return r.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: M.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeInset: {
        type: M.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: M.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: M.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var Ir = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  It = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  Wt = { fontSize: 32, marginBottom: 10 },
  St = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  kt = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  Bt = (r, n, o) => Math.min(Math.max(r, n), o),
  Wr = (r) => typeof r == "number" && !isNaN(r);
ie.loadFonts([]);
var Sr = [{ explicitInter: !0, fonts: [] }],
  kr = [
    ".framer-iesiJ .framer-styles-preset-137azwt:not(.rich-text-wrapper), .framer-iesiJ .framer-styles-preset-137azwt.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: #0088ff; --framer-link-hover-text-decoration: underline; --framer-link-text-color: #0099ff; --framer-link-text-decoration: none; }",
  ],
  Br = "framer-iesiJ";
ie.loadFonts([
  "Inter-SemiBold",
  "Inter-Bold",
  "Inter-BoldItalic",
  "Inter-SemiBoldItalic",
]);
var Ur = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-SemiBold.cyrillic-ext-C7KWUKA7.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-SemiBold.cyrillic-JWV7SOZ6.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-SemiBold.greek-ext-FBKSFTSU.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-SemiBold.greek-EQ3PSENU.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-SemiBold.latin-ext-ULRSO3ZR.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-SemiBold.latin-RDYY2AG2.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-SemiBold.vietnamese-ESQNSEQ3.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Bold.cyrillic-ext-XOTVL7ZR.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Bold.cyrillic-6LOMBC2V.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Bold.greek-ext-WXWSJXLB.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Bold.greek-YRST7ODZ.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Bold.latin-ext-BASA5UL3.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Bold.latin-UCM45LQF.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Bold.vietnamese-OEVJMXEP.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-BoldItalic.cyrillic-ext-PEYDHC3S.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-BoldItalic.cyrillic-7EIL6JWG.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-BoldItalic.greek-ext-3DJOYQMH.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-BoldItalic.greek-TJBTLTT7.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-BoldItalic.latin-ext-FVPCPRBJ.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-BoldItalic.latin-5ZFQS4XK.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-BoldItalic.vietnamese-W2625PGF.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-SemiBoldItalic.cyrillic-ext-MEHHCDC3.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-SemiBoldItalic.cyrillic-YACNRNDE.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-SemiBoldItalic.greek-ext-GFL7KADI.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-SemiBoldItalic.greek-5W77OPRT.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-SemiBoldItalic.latin-ext-OYJJ2W6R.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-SemiBoldItalic.latin-KBLJMBDH.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "italic",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-SemiBoldItalic.vietnamese-5ZFOV65G.woff2",
          weight: "600",
        },
      ],
    },
  ],
  Ar = [
    '.framer-QcAGl .framer-styles-preset-rjnbs2:not(.rich-text-wrapper), .framer-QcAGl .framer-styles-preset-rjnbs2.rich-text-wrapper h5 { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-size: 33px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; }',
  ],
  zr = "framer-QcAGl";
ie.loadFonts(["GF;Mouse Memoirs-regular"]);
var Nr = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Mouse Memoirs",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/mousememoirs/v17/t5tmIRoSNJ-PH0WNNgDYxdSb7TzFrpOHYh4.woff2",
          weight: "400",
        },
      ],
    },
  ],
  Gr = [
    '.framer-rvKXz .framer-styles-preset-64godp:not(.rich-text-wrapper), .framer-rvKXz .framer-styles-preset-64godp.rich-text-wrapper h6 { --framer-font-family: "Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif; --framer-font-size: 88px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; }',
  ],
  _r = "framer-rvKXz";
var Nt = hr(G);
var Gt = {
    FqN7CGrEj: "(max-width: 809px)",
    oAvBb_bW8: "(min-width: 810px) and (max-width: 1439px)",
    WQLkyLRf1: "(min-width: 1440px)",
  },
  me = () => typeof document < "u",
  Vr = "framer-COg4d",
  _t = {
    FqN7CGrEj: "framer-v-10wuu6n",
    oAvBb_bW8: "framer-v-1t9mxuk",
    WQLkyLRf1: "framer-v-72rtr7",
  },
  Vt = (r, n) => `translate(-50%, -50%) ${n}`,
  jr = (r, n) => `translateX(-50%) ${n}`,
  po = Pe(),
  jt = { Desktop: "WQLkyLRf1", Phone: "FqN7CGrEj", Tablet: "oAvBb_bW8" },
  Pt = ({ height: r, id: n, width: o, ...i }) => {
    var m, f;
    return {
      ...i,
      variant:
        (f = (m = jt[i.variant]) !== null && m !== void 0 ? m : i.variant) !==
          null && f !== void 0
          ? f
          : "WQLkyLRf1",
    };
  },
  Lt = rr(function (r, n) {
    let { activeLocale: o, setLocale: i } = sr(),
      { style: m, className: f, layoutId: d, variant: b, ...x } = Pt(r);
    nr(() => {
      let O = Pe(void 0, o);
      if (((document.title = O.title || ""), O.viewport)) {
        var z;
        (z = document.querySelector('meta[name="viewport"]')) === null ||
          z === void 0 ||
          z.setAttribute("content", O.viewport);
      }
      if (O.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((g) => g.startsWith("framer-body-"))
            .map((g) => document.body.classList.remove(g)),
          document.body.classList.add(`${O.bodyClassName}-framer-COg4d`),
          () => {
            document.body.classList.remove(`${O.bodyClassName}-framer-COg4d`);
          }
        );
    }, [void 0, o]);
    let [s, h] = dr(b, Gt, !1),
      p = void 0,
      F = V(null),
      w = () => (s === "FqN7CGrEj" ? !me() : !0),
      T = () => (s === "oAvBb_bW8" ? !0 : !me()),
      S = () => (s === "FqN7CGrEj" ? !0 : !me()),
      I = () => (["oAvBb_bW8", "FqN7CGrEj"].includes(s) ? !0 : !me()),
      B = () => (s === "oAvBb_bW8" ? !me() : !0),
      j = () => (["oAvBb_bW8", "FqN7CGrEj"].includes(s) ? !me() : !0),
      _ = ar(),
      W = [Br, _r, zr];
    return (
      fr({}),
      e(cr.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: _t },
        children: l(ne, {
          id: d ?? _,
          children: [
            e(u, {
              breakpoint: s,
              overrides: {
                FqN7CGrEj: {
                  background: {
                    alt: "",
                    backgroundSize: 1,
                    fit: "tile",
                    intrinsicHeight: 5681,
                    intrinsicWidth: 3302,
                    pixelHeight: 5681,
                    pixelWidth: 3302,
                    positionX: "left",
                    positionY: "top",
                    sizes: "100vw",
                    src: "https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png?scale-down-to=4096",
                    srcSet:
                      "https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png?scale-down-to=1024 595w,https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png?scale-down-to=2048 1190w,https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png?scale-down-to=4096 2380w,https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png 3302w",
                  },
                },
                oAvBb_bW8: {
                  background: {
                    alt: "",
                    backgroundSize: 1,
                    fit: "tile",
                    intrinsicHeight: 5681,
                    intrinsicWidth: 3302,
                    pixelHeight: 5681,
                    pixelWidth: 3302,
                    positionX: "left",
                    positionY: "top",
                    sizes: "100vw",
                    src: "https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png?scale-down-to=4096",
                    srcSet:
                      "https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png?scale-down-to=1024 595w,https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png?scale-down-to=2048 1190w,https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png?scale-down-to=4096 2380w,https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png 3302w",
                  },
                },
              },
              children: l(c, {
                ...x,
                background: {
                  alt: "",
                  fit: "fill",
                  intrinsicHeight: 5681,
                  intrinsicWidth: 3302,
                  pixelHeight: 5681,
                  pixelWidth: 3302,
                  sizes: "100vw",
                  src: "https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png",
                  srcSet:
                    "https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png?scale-down-to=1024 595w,https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png?scale-down-to=2048 1190w,https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png?scale-down-to=4096 2380w,https://framerusercontent.com/images/AlE55k6ufr7mkRCZnPFz5LYAyM.png 3302w",
                },
                className: je(Vr, ...W, "framer-72rtr7", f),
                ref: n ?? F,
                style: { ...m },
                children: [
                  e(u, {
                    breakpoint: s,
                    overrides: {
                      FqN7CGrEj: {
                        background: {
                          alt: "",
                          fit: "stretch",
                          intrinsicHeight: 924,
                          intrinsicWidth: 1440,
                          pixelHeight: 924,
                          pixelWidth: 1440,
                          positionX: "center",
                          positionY: "center",
                          sizes: "138.4615vw",
                          src: "https://framerusercontent.com/images/r5U40s72G22OvdyQpZromK1r4.png",
                          srcSet:
                            "https://framerusercontent.com/images/r5U40s72G22OvdyQpZromK1r4.png?scale-down-to=512 512w,https://framerusercontent.com/images/r5U40s72G22OvdyQpZromK1r4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/r5U40s72G22OvdyQpZromK1r4.png 1440w",
                        },
                      },
                    },
                    children: e(c, {
                      background: {
                        alt: "",
                        fit: "stretch",
                        intrinsicHeight: 924,
                        intrinsicWidth: 1440,
                        pixelHeight: 924,
                        pixelWidth: 1440,
                        positionX: "center",
                        positionY: "center",
                        sizes: "100vw",
                        src: "https://framerusercontent.com/images/r5U40s72G22OvdyQpZromK1r4.png",
                        srcSet:
                          "https://framerusercontent.com/images/r5U40s72G22OvdyQpZromK1r4.png?scale-down-to=512 512w,https://framerusercontent.com/images/r5U40s72G22OvdyQpZromK1r4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/r5U40s72G22OvdyQpZromK1r4.png 1440w",
                      },
                      className: "framer-16tc5bu",
                      "data-framer-name": "BRETTLONGCONCEPT 1",
                      name: "BRETTLONGCONCEPT 1",
                    }),
                  }),
                  e(u, {
                    breakpoint: s,
                    overrides: {
                      FqN7CGrEj: {
                        background: {
                          alt: "",
                          intrinsicHeight: 360,
                          intrinsicWidth: 509,
                          positionX: "center",
                          positionY: "center",
                        },
                      },
                    },
                    children: l("div", {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 2969,
                        intrinsicWidth: 1920,
                      },
                      className: "framer-1uzdz47",
                      "data-framer-name": "Main Frame",
                      name: "Main Frame",
                      children: [
                        e(u, {
                          breakpoint: s,
                          overrides: {
                            FqN7CGrEj: {
                              children: l(t, {
                                children: [
                                  e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0Nob21za3kgUmVndWxhcg==",
                                      "--framer-font-family":
                                        '"Chomsky Regular", "Chomsky Regular Placeholder", sans-serif',
                                      "--framer-font-size":
                                        "93.87815750371472px",
                                      "--framer-line-height": "1em",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: "SOLANA",
                                  }),
                                  e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0Nob21za3kgUmVndWxhcg==",
                                      "--framer-font-family":
                                        '"Chomsky Regular", "Chomsky Regular Placeholder", sans-serif',
                                      "--framer-font-size":
                                        "93.87815750371472px",
                                      "--framer-line-height": "1em",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: "TODAY",
                                  }),
                                ],
                              }),
                              viewBox: "0 0 351 188",
                              viewBoxScale: 0.9,
                            },
                            oAvBb_bW8: {
                              children: l(t, {
                                children: [
                                  e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0Nob21za3kgUmVndWxhcg==",
                                      "--framer-font-family":
                                        '"Chomsky Regular", "Chomsky Regular Placeholder", sans-serif',
                                      "--framer-font-size":
                                        "216.64190193164933px",
                                      "--framer-line-height": "0.9em",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: "SOLANA",
                                  }),
                                  e("p", {
                                    style: {
                                      "--font-selector":
                                        "Q1VTVE9NO0Nob21za3kgUmVndWxhcg==",
                                      "--framer-font-family":
                                        '"Chomsky Regular", "Chomsky Regular Placeholder", sans-serif',
                                      "--framer-font-size":
                                        "216.64190193164933px",
                                      "--framer-line-height": "0.9em",
                                      "--framer-text-alignment": "center",
                                    },
                                    children: "TODAY",
                                  }),
                                ],
                              }),
                              viewBox: "0 0 810 390",
                              viewBoxScale: 0.9,
                            },
                          },
                          children: e(a, {
                            __fromCanvasComponent: !0,
                            children: e(t, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "Q1VTVE9NO0Nob21za3kgUmVndWxhcg==",
                                  "--framer-font-family":
                                    '"Chomsky Regular", "Chomsky Regular Placeholder", sans-serif',
                                  "--framer-font-size": "180px",
                                  "--framer-line-height": "0.9em",
                                  "--framer-text-alignment": "center",
                                },
                                children: "BASE TODAY",
                              }),
                            }),
                            className: "framer-7dr7ye",
                            "data-framer-name": "SOLANA TODAY",
                            fonts: ["CUSTOM;Chomsky Regular"],
                            name: "SOLANA TODAY",
                            verticalAlignment: "center",
                            viewBox: "0 0 1307 162",
                            withExternalLayout: !0,
                          }),
                        }),
                        w() &&
                          e(a, {
                            __fromCanvasComponent: !0,
                            children: e(t, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "22px",
                                  "--framer-font-weight": "600",
                                  "--framer-line-height": "1em",
                                  "--framer-text-alignment": "center",
                                },
                                children: e(R, {
                                  href: "https://pump.fun/57SHHic2f6uFdAfXvwqkomdCC3cnf81VwYbZkBARaCyK",
                                  openInNewTab: !0,
                                  smoothScroll: !1,
                                  children: e("a", {
                                    className: "framer-styles-preset-137azwt",
                                    "data-styles-preset": "nRCse38kI",
                                    children:
                                      "https://pump.fun/57SHHic2f6uFdAfXvwqkomdCC3cnf81VwYbZkBARaCyK",
                                  }),
                                }),
                              }),
                            }),
                            className: "framer-1rz0slb hidden-10wuu6n",
                            "data-framer-name":
                              "Remember, this isn\u2019t financial advice. We\u2019re all here to enjoy the ride and have some fun.",
                            fonts: ["Inter-SemiBold"],
                            name: "Remember, this isn\u2019t financial advice. We\u2019re all here to enjoy the ride and have some fun.",
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                          }),
                        e("div", {
                          className: "framer-fos7yy",
                          "data-border": !0,
                          "data-framer-name": "Frame 41",
                          name: "Frame 41",
                          children: l("div", {
                            className: "framer-1foc3cw",
                            children: [
                              e(R, {
                                href: "https://twitter.com/SirBrettonSOL",
                                openInNewTab: !0,
                                children: e(u, {
                                  breakpoint: s,
                                  overrides: {
                                    FqN7CGrEj: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 301,
                                        intrinsicWidth: 300,
                                        pixelHeight: 301,
                                        pixelWidth: 300,
                                        src: "https://framerusercontent.com/images/iqaOdGF1b6RVkoGTN7EYOOKcJDI.png",
                                      },
                                    },
                                    oAvBb_bW8: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 301,
                                        intrinsicWidth: 300,
                                        pixelHeight: 301,
                                        pixelWidth: 300,
                                        src: "https://framerusercontent.com/images/iqaOdGF1b6RVkoGTN7EYOOKcJDI.png",
                                      },
                                    },
                                  },
                                  children: e(c, {
                                    as: "a",
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 301,
                                      intrinsicWidth: 300,
                                      loading: "lazy",
                                      pixelHeight: 301,
                                      pixelWidth: 300,
                                      src: "https://framerusercontent.com/images/iqaOdGF1b6RVkoGTN7EYOOKcJDI.png",
                                    },
                                    className: "framer-bgejqy framer-lux5qc",
                                    "data-framer-name":
                                      "X_logo_2023_original_1",
                                    name: "X_logo_2023_original_1",
                                  }),
                                }),
                              }),
                              e(u, {
                                breakpoint: s,
                                overrides: {
                                  FqN7CGrEj: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 345,
                                      intrinsicWidth: 300,
                                      pixelHeight: 345,
                                      pixelWidth: 300,
                                      src: "https://framerusercontent.com/images/sfreiwe3El6qRHTftGSq3q4dUXY.png",
                                    },
                                  },
                                  oAvBb_bW8: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 345,
                                      intrinsicWidth: 300,
                                      pixelHeight: 345,
                                      pixelWidth: 300,
                                      src: "https://framerusercontent.com/images/sfreiwe3El6qRHTftGSq3q4dUXY.png",
                                    },
                                  },
                                },
                                children: e(c, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 345,
                                    intrinsicWidth: 300,
                                    loading: "lazy",
                                    pixelHeight: 345,
                                    pixelWidth: 300,
                                    src: "https://framerusercontent.com/images/sfreiwe3El6qRHTftGSq3q4dUXY.png",
                                  },
                                  className: "framer-130dqqc",
                                  "data-framer-name": "Group_26",
                                  name: "Group_26",
                                }),
                              }),
                              e(R, {
                                href: "https://t.me/sirbrettsol",
                                openInNewTab: !0,
                                children: e(u, {
                                  breakpoint: s,
                                  overrides: {
                                    FqN7CGrEj: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 301,
                                        intrinsicWidth: 300,
                                        pixelHeight: 301,
                                        pixelWidth: 300,
                                        src: "https://framerusercontent.com/images/g1DevYx0CiIT2VC28qlOCImy8DY.png",
                                      },
                                    },
                                    oAvBb_bW8: {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 301,
                                        intrinsicWidth: 300,
                                        pixelHeight: 301,
                                        pixelWidth: 300,
                                        src: "https://framerusercontent.com/images/g1DevYx0CiIT2VC28qlOCImy8DY.png",
                                      },
                                    },
                                  },
                                  children: e(c, {
                                    as: "a",
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 301,
                                      intrinsicWidth: 300,
                                      loading: "lazy",
                                      pixelHeight: 301,
                                      pixelWidth: 300,
                                      src: "https://framerusercontent.com/images/g1DevYx0CiIT2VC28qlOCImy8DY.png",
                                    },
                                    className: "framer-vo6zf8 framer-lux5qc",
                                    "data-framer-name": "telegram_1",
                                    name: "telegram_1",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        e(u, {
                          breakpoint: s,
                          overrides: {
                            FqN7CGrEj: {
                              children: e(t, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                    "--framer-font-size": "92px",
                                    "--framer-line-height": "1.1em",
                                    "--framer-text-alignment": "center",
                                  },
                                  children: "MISSING PEPE!",
                                }),
                              }),
                            },
                            oAvBb_bW8: {
                              children: e(t, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                    "--framer-font-size": "179px",
                                    "--framer-line-height": "1em",
                                    "--framer-text-alignment": "center",
                                  },
                                  children: "MISSING PEPE!",
                                }),
                              }),
                            },
                          },
                          children: e(a, {
                            __fromCanvasComponent: !0,
                            children: e(t, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                  "--framer-font-size": "250px",
                                  "--framer-line-height": "1em",
                                  "--framer-text-alignment": "center",
                                },
                                children: "MISSING PEPE!",
                              }),
                            }),
                            className: "framer-ssckb5",
                            "data-framer-name": "MISSING PEPE!",
                            fonts: ["GF;Mouse Memoirs-regular"],
                            name: "MISSING PEPE!",
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                          }),
                        }),
                        w() &&
                          e("div", {
                            className: "framer-18tid2h hidden-10wuu6n",
                            children: e(u, {
                              breakpoint: s,
                              overrides: {
                                oAvBb_bW8: {
                                  children: e(t, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector": "SW50ZXItQm9sZA==",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "30px",
                                        "--framer-font-weight": "700",
                                        "--framer-letter-spacing": "-0.06em",
                                        "--framer-line-height": "1.9em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color": "rgb(255, 0, 0)",
                                      },
                                      children:
                                        "REWARD OFFERED @MrBrettBase on X / Twitter",
                                    }),
                                  }),
                                },
                              },
                              children: e(a, {
                                __fromCanvasComponent: !0,
                                children: e(t, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector": "SW50ZXItQm9sZA==",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-size": "49px",
                                      "--framer-font-weight": "700",
                                      "--framer-letter-spacing": "-0.06em",
                                      "--framer-line-height": "1.9em",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color": "rgb(255, 0, 0)",
                                    },
                                    children:
                                      "REWARD OFFERED @MrBrettBase on X / Twitter",
                                  }),
                                }),
                                className: "framer-1sq61up",
                                "data-framer-name":
                                  "8ixbpPEyKkFTwtyLM8Jj85CCSbDLxJqNxzRJiA8afDSU",
                                fonts: ["Inter-Bold"],
                                name: "8ixbpPEyKkFTwtyLM8Jj85CCSbDLxJqNxzRJiA8afDSU",
                                transformTemplate: Vt,
                                verticalAlignment: "center",
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                        l("div", {
                          className: "framer-1l7yxnr",
                          "data-framer-name": "Frame 42",
                          name: "Frame 42",
                          children: [
                            l("div", {
                              className: "framer-146ef56",
                              "data-framer-name": "PepeMissingPicture",
                              name: "PepeMissingPicture",
                              children: [
                                e(u, {
                                  breakpoint: s,
                                  overrides: {
                                    FqN7CGrEj: {
                                      background: {
                                        alt: "",
                                        fit: "fit",
                                        positionX: "center",
                                        positionY: "center",
                                        sizes: "calc(100vw - 40px)",
                                        src: "https://framerusercontent.com/images/JNLapri4nwvKu3qgglBpUjBOZE.jpg",
                                        srcSet:
                                          "https://framerusercontent.com/images/JNLapri4nwvKu3qgglBpUjBOZE.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/JNLapri4nwvKu3qgglBpUjBOZE.jpg 976w",
                                      },
                                    },
                                    oAvBb_bW8: {
                                      background: {
                                        alt: "",
                                        fit: "fit",
                                        loading: "lazy",
                                        positionX: "center",
                                        positionY: "center",
                                        sizes: "763.8px",
                                        src: "https://framerusercontent.com/images/JNLapri4nwvKu3qgglBpUjBOZE.jpg",
                                        srcSet:
                                          "https://framerusercontent.com/images/JNLapri4nwvKu3qgglBpUjBOZE.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/JNLapri4nwvKu3qgglBpUjBOZE.jpg 976w",
                                      },
                                    },
                                  },
                                  children: e(c, {
                                    background: {
                                      alt: "",
                                      fit: "fit",
                                      loading: "lazy",
                                      positionX: "center",
                                      positionY: "center",
                                      sizes: "791px",
                                      src: "https://framerusercontent.com/images/JNLapri4nwvKu3qgglBpUjBOZE.jpg",
                                      srcSet:
                                        "https://framerusercontent.com/images/JNLapri4nwvKu3qgglBpUjBOZE.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/JNLapri4nwvKu3qgglBpUjBOZE.jpg 976w",
                                    },
                                    className: "framer-1nmfcs5",
                                    "data-framer-name":
                                      "_91408619_55df76d5-2245-41c1-8031-07a4da3f313f 1",
                                    name: "_91408619_55df76d5-2245-41c1-8031-07a4da3f313f 1",
                                  }),
                                }),
                                e(u, {
                                  breakpoint: s,
                                  overrides: {
                                    FqN7CGrEj: {
                                      children: e(t, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7VGltZXMgTmV3IFJvbWFuLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Times New Roman", "Times New Roman Placeholder", sans-serif',
                                            "--framer-font-size": "20px",
                                            "--framer-text-alignment": "left",
                                          },
                                          children:
                                            "Pepe is a charismatic and beloved figure, widely recognized for his vibrant personality and significant contributions to the community.",
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(a, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--framer-font-size": "25px",
                                          "--framer-text-alignment": "center",
                                        },
                                        children: e("span", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7VGltZXMgTmV3IFJvbWFuLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Times New Roman"',
                                            "--framer-font-size": "25px",
                                          },
                                          children:
                                            "Pepe is a charismatic and beloved figure, widely recognized for his vibrant personality and significant contributions to the community.",
                                        }),
                                      }),
                                    }),
                                    className: "framer-11r9iac",
                                    "data-framer-name":
                                      "Pepe is a charismatic and beloved figure, widely recognized for his vibrant personality and significant contributions to the community.",
                                    fonts: ["GF;Times New Roman-regular"],
                                    name: "Pepe is a charismatic and beloved figure, widely recognized for his vibrant personality and significant contributions to the community.",
                                    verticalAlignment: "center",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            e(u, {
                              breakpoint: s,
                              overrides: {
                                FqN7CGrEj: {
                                  children: e(t, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7VGltZXMgTmV3IFJvbWFuLXJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Times New Roman", "Times New Roman Placeholder", sans-serif',
                                        "--framer-font-size": "27px",
                                        "--framer-line-height": "38px",
                                      },
                                      children:
                                        "Pepe, known for his charismatic personality and contributions to the community, has become a prominent figure in the city. His sudden disappearance has not only left a void in the hearts of those who knew him, but it has also sent shockwaves throughout the city. The police, recognizing Pepe\u2019s significance, have prioritized the case, deploying their best resources in the search. As the investigation unfolds, the city holds its breath, hoping for Pepe\u2019s safe return. ",
                                    }),
                                  }),
                                },
                              },
                              children: e(a, {
                                __fromCanvasComponent: !0,
                                children: e(t, {
                                  children: e("p", {
                                    style: {
                                      "--framer-font-size": "35px",
                                      "--framer-line-height": "58px",
                                    },
                                    children: e("span", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7VGltZXMgTmV3IFJvbWFuLXJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Times New Roman"',
                                        "--framer-font-size": "35px",
                                      },
                                      children:
                                        "Pepe, known for his charismatic personality and contributions to the community, has become a prominent figure in the city. His sudden disappearance has not only left a void in the hearts of those who knew him, but it has also sent shockwaves throughout the city. The police, recognizing Pepe\u2019s significance, have prioritized the case, deploying their best resources in the search. As the investigation unfolds, the city holds its breath, hoping for Pepe\u2019s safe return. ",
                                    }),
                                  }),
                                }),
                                className: "framer-rznenw",
                                "data-framer-name":
                                  "Pepe, known for his charismatic personality and contributions to the community, has become a prominent figure in the city. His sudden disappearance has not only left a void in the hearts of those who knew him, but it has also sent shockwaves throughout the city. The police, recognizing Pepe\u2019s significance, have prioritized the case, deploying their best resources in the search. As the investigation unfolds, the city holds its breath, hoping for Pepe\u2019s safe return.",
                                fonts: ["GF;Times New Roman-regular"],
                                name: "Pepe, known for his charismatic personality and contributions to the community, has become a prominent figure in the city. His sudden disappearance has not only left a void in the hearts of those who knew him, but it has also sent shockwaves throughout the city. The police, recognizing Pepe\u2019s significance, have prioritized the case, deploying their best resources in the search. As the investigation unfolds, the city holds its breath, hoping for Pepe\u2019s safe return.",
                                verticalAlignment: "center",
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        e("div", {
                          className: "framer-mlmj0v",
                          "data-framer-name": "Frame 43",
                          name: "Frame 43",
                          children: e(pr, {
                            className: "framer-5g9fmg",
                            "data-framer-name": "Rectangle 29",
                            fill: "rgba(0,0,0,1)",
                            intrinsicHeight: 4,
                            intrinsicWidth: 1300,
                            name: "Rectangle 29",
                            svg: `<svg width="1300" height="4" viewBox="0 0 1300 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.6" width="1300" height="4" transform="matrix(1 0 0 -1 0 4)" fill="black"/>
</svg>
`,
                            withExternalLayout: !0,
                          }),
                        }),
                        e("div", {
                          className: "framer-1pwt7w5",
                          "data-framer-name": "Frame 32",
                          name: "Frame 32",
                          children: e("div", {
                            className: "framer-xr5479",
                            "data-framer-name": "Frame 31",
                            name: "Frame 31",
                            children: e(u, {
                              breakpoint: s,
                              overrides: {
                                FqN7CGrEj: {
                                  children: e(t, {
                                    children: l("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                        "--framer-font-family":
                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                        "--framer-font-size": "38px",
                                        "--framer-line-height": "1em",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-transform": "uppercase",
                                      },
                                      children: [
                                        e("span", {
                                          style: {
                                            "--framer-font-size": "78px",
                                          },
                                          children: "Missing Pepe:",
                                        }),
                                        e("span", {
                                          style: {
                                            "--font-selector": "SW50ZXI=",
                                            "--framer-font-family":
                                              '"Inter", sans-serif',
                                            "--framer-font-size": "78px",
                                          },
                                          children: " ",
                                        }),
                                        e("span", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7SXJpc2ggR3JvdmVyLXJlZ3VsYXI=",
                                            "--framer-font-family":
                                              '"Irish Grover", sans-serif',
                                          },
                                          children: "$",
                                        }),
                                        "MRBrett on the case!",
                                      ],
                                    }),
                                  }),
                                },
                                oAvBb_bW8: {
                                  children: l(t, {
                                    children: [
                                      l("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                          "--framer-font-family":
                                            '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                          "--framer-font-size": "95px",
                                          "--framer-line-height": "1em",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: [
                                          "Missing Pepe:",
                                          e("span", {
                                            style: {
                                              "--font-selector": "SW50ZXI=",
                                              "--framer-font-family":
                                                '"Inter", sans-serif',
                                            },
                                            children: " ",
                                          }),
                                        ],
                                      }),
                                      l("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                          "--framer-font-family":
                                            '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                          "--framer-font-size": "95px",
                                          "--framer-line-height": "1em",
                                          "--framer-text-alignment": "center",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: [
                                          e("span", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7SXJpc2ggR3JvdmVyLXJlZ3VsYXI=",
                                              "--framer-font-family":
                                                '"Irish Grover", sans-serif',
                                            },
                                            children: "$",
                                          }),
                                          "MRBrett on the case!",
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                              },
                              children: e(a, {
                                __fromCanvasComponent: !0,
                                children: e(t, {
                                  children: l("p", {
                                    style: { "--framer-font-size": "100px" },
                                    children: [
                                      e("span", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                          "--framer-font-family":
                                            '"Mouse Memoirs"',
                                          "--framer-font-size": "100px",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: "Missing Pepe:",
                                      }),
                                      e("span", {
                                        style: {
                                          "--font-selector": "SW50ZXI=",
                                          "--framer-font-family": '"Inter"',
                                          "--framer-font-size": "100px",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: " ",
                                      }),
                                      e("span", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7SXJpc2ggR3JvdmVyLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Irish Grover"',
                                          "--framer-font-size": "100px",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: "$",
                                      }),
                                      e("span", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                          "--framer-font-family":
                                            '"Mouse Memoirs"',
                                          "--framer-font-size": "100px",
                                          "--framer-text-transform":
                                            "uppercase",
                                        },
                                        children: "MRBrett on the case!",
                                      }),
                                    ],
                                  }),
                                }),
                                className: "framer-7phhr2",
                                "data-framer-name":
                                  "Missing Pepe: $MRBrett on the case!",
                                fonts: [
                                  "GF;Mouse Memoirs-regular",
                                  "Inter",
                                  "GF;Irish Grover-regular",
                                ],
                                name: "Missing Pepe: $MRBrett on the case!",
                                verticalAlignment: "center",
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                        }),
                        l("div", {
                          className: "framer-mqoikr",
                          "data-framer-name": "Frame 44",
                          name: "Frame 44",
                          children: [
                            e(u, {
                              breakpoint: s,
                              overrides: {
                                FqN7CGrEj: {
                                  children: e(t, {
                                    children: l("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7VGltZXMgTmV3IFJvbWFuLXJlZ3VsYXI=",
                                        "--framer-font-family":
                                          '"Times New Roman", "Times New Roman Placeholder", sans-serif',
                                        "--framer-font-size": "28px",
                                        "--framer-line-height": "39px",
                                      },
                                      children: [
                                        "Mr Brett, driven by the bond of friendship, has embarked on a relentless search for his best friend, Pepe. Understanding the magnitude of the task, Brett is open to all the help he can get in this mission. The unity of their friendship fuels his determination, making every lead, every clue, and every piece of information invaluable in this quest.",
                                        e("span", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7VGltZXMgTmV3IFJvbWFuLTcwMA==",
                                            "--framer-font-weight": "700",
                                          },
                                          children: " ",
                                        }),
                                      ],
                                    }),
                                  }),
                                },
                              },
                              children: e(a, {
                                __fromCanvasComponent: !0,
                                children: e(t, {
                                  children: l("p", {
                                    style: {
                                      "--framer-font-size": "35px",
                                      "--framer-line-height": "58px",
                                    },
                                    children: [
                                      e("span", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7VGltZXMgTmV3IFJvbWFuLXJlZ3VsYXI=",
                                          "--framer-font-family":
                                            '"Times New Roman"',
                                          "--framer-font-size": "35px",
                                        },
                                        children:
                                          "Mr Brett, driven by the bond of friendship, has embarked on a relentless search for his best friend, Pepe. Understanding the magnitude of the task, Brett is open to all the help he can get in this mission. The unity of their friendship fuels his determination, making every lead, every clue, and every piece of information invaluable in this quest.",
                                      }),
                                      e("span", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7VGltZXMgTmV3IFJvbWFuLTcwMA==",
                                          "--framer-font-family":
                                            '"Times New Roman"',
                                          "--framer-font-size": "35px",
                                          "--framer-font-weight": "700",
                                        },
                                        children: " ",
                                      }),
                                    ],
                                  }),
                                }),
                                className: "framer-isfyyf",
                                "data-framer-name":
                                  "Mr Brett, driven by the bond of friendship, has embarked on a relentless search for his best friend, Pepe. Understanding the magnitude of the task, Brett is open to all the help he can get in this mission. The unity of their friendship fuels his determination, making every lead, every clue, and every piece of information invaluable in this quest.",
                                fonts: [
                                  "GF;Times New Roman-regular",
                                  "GF;Times New Roman-700",
                                ],
                                name: "Mr Brett, driven by the bond of friendship, has embarked on a relentless search for his best friend, Pepe. Understanding the magnitude of the task, Brett is open to all the help he can get in this mission. The unity of their friendship fuels his determination, making every lead, every clue, and every piece of information invaluable in this quest.",
                                verticalAlignment: "center",
                                withExternalLayout: !0,
                              }),
                            }),
                            e(u, {
                              breakpoint: s,
                              overrides: {
                                FqN7CGrEj: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 3546,
                                    intrinsicWidth: 3546,
                                    loading: "lazy",
                                    pixelHeight: 3546,
                                    pixelWidth: 3546,
                                    sizes: "calc(100vw - 40px)",
                                    src: "https://framerusercontent.com/images/96dq6jDP06eCjS569N26ND6hes.png",
                                    srcSet:
                                      "https://framerusercontent.com/images/96dq6jDP06eCjS569N26ND6hes.png?scale-down-to=512 512w,https://framerusercontent.com/images/96dq6jDP06eCjS569N26ND6hes.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/96dq6jDP06eCjS569N26ND6hes.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/96dq6jDP06eCjS569N26ND6hes.png 3546w",
                                  },
                                },
                                oAvBb_bW8: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    loading: "lazy",
                                    sizes: "calc(100vw - 80px)",
                                    src: "https://framerusercontent.com/images/8rsc59dPfr23bYlqE60gftdl09E.png",
                                    srcSet:
                                      "https://framerusercontent.com/images/8rsc59dPfr23bYlqE60gftdl09E.png?scale-down-to=512 512w,https://framerusercontent.com/images/8rsc59dPfr23bYlqE60gftdl09E.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/8rsc59dPfr23bYlqE60gftdl09E.png 2048w",
                                  },
                                },
                              },
                              children: e(c, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: "lazy",
                                  sizes: "615px",
                                  src: "https://framerusercontent.com/images/8rsc59dPfr23bYlqE60gftdl09E.png",
                                  srcSet:
                                    "https://framerusercontent.com/images/8rsc59dPfr23bYlqE60gftdl09E.png?scale-down-to=512 512w,https://framerusercontent.com/images/8rsc59dPfr23bYlqE60gftdl09E.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/8rsc59dPfr23bYlqE60gftdl09E.png 2048w",
                                },
                                className: "framer-j1188a",
                                "data-framer-name": "DetectiveBrett2K 1",
                                name: "DetectiveBrett2K 1",
                              }),
                            }),
                          ],
                        }),
                        l("div", {
                          className: "framer-12tidms",
                          "data-framer-name": "Frame 46",
                          name: "Frame 46",
                          children: [
                            e(u, {
                              breakpoint: s,
                              overrides: {
                                FqN7CGrEj: { background: void 0 },
                                oAvBb_bW8: {
                                  background: {
                                    alt: "",
                                    intrinsicHeight: 5080,
                                    intrinsicWidth: 810,
                                    loading: "lazy",
                                    positionX: "center",
                                    positionY: "top",
                                  },
                                },
                              },
                              children: l("div", {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  loading: "lazy",
                                },
                                className: "framer-2uolzb",
                                "data-framer-name": "SirBrettSection1 1",
                                name: "SirBrettSection1 1",
                                children: [
                                  w() &&
                                    l("div", {
                                      className:
                                        "framer-1fcurwe hidden-10wuu6n",
                                      children: [
                                        e(Y, {
                                          children: e(u, {
                                            breakpoint: s,
                                            overrides: {
                                              oAvBb_bW8: {
                                                style: { rotate: -37 },
                                              },
                                            },
                                            children: e(D, {
                                              className:
                                                "framer-1wx1hqp-container",
                                              style: { rotate: 12 },
                                              children: e(G, {
                                                alignment: "center",
                                                direction: "right",
                                                fadeOptions: {
                                                  fadeAlpha: 0,
                                                  fadeContent: !1,
                                                  fadeInset: 0,
                                                  fadeWidth: 0,
                                                  overflow: !1,
                                                },
                                                gap: 0,
                                                height: "100%",
                                                hoverFactor: 1,
                                                id: "F7ly5mQlw",
                                                layoutId: "F7ly5mQlw",
                                                padding: 10,
                                                paddingBottom: 10,
                                                paddingLeft: 10,
                                                paddingPerSide: !1,
                                                paddingRight: 10,
                                                paddingTop: 10,
                                                sizingOptions: {
                                                  heightType: !0,
                                                  widthType: !0,
                                                },
                                                slots: [
                                                  l(y.div, {
                                                    className: "framer-vqskmf",
                                                    "data-border": !0,
                                                    "data-framer-name":
                                                      "Frame 38",
                                                    name: "Frame 38",
                                                    children: [
                                                      e(y.div, {
                                                        className:
                                                          "framer-1e3aj4b",
                                                        "data-framer-name":
                                                          "Frame 33",
                                                        name: "Frame 33",
                                                        children: e(a, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          children: e(t, {
                                                            children: e("p", {
                                                              style: {
                                                                "--font-selector":
                                                                  "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                                "--framer-font-family":
                                                                  '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                                "--framer-font-size":
                                                                  "100px",
                                                                "--framer-text-color":
                                                                  "rgb(22, 22, 22)",
                                                              },
                                                              children:
                                                                "$MRBRETT",
                                                            }),
                                                          }),
                                                          className:
                                                            "framer-97f1sq",
                                                          "data-framer-name":
                                                            "$MRBRETT",
                                                          fonts: [
                                                            "GF;Mouse Memoirs-regular",
                                                          ],
                                                          name: "$MRBRETT",
                                                          verticalAlignment:
                                                            "center",
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      }),
                                                      e(y.div, {
                                                        className:
                                                          "framer-1lv2val",
                                                        "data-framer-name":
                                                          "Frame 34",
                                                        name: "Frame 34",
                                                        children: e(a, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          children: e(t, {
                                                            children: e("p", {
                                                              style: {
                                                                "--font-selector":
                                                                  "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                                "--framer-font-family":
                                                                  '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                                "--framer-font-size":
                                                                  "100px",
                                                                "--framer-text-color":
                                                                  "rgb(22, 22, 22)",
                                                              },
                                                              children:
                                                                "$MRBRETT",
                                                            }),
                                                          }),
                                                          className:
                                                            "framer-zdubbw",
                                                          "data-framer-name":
                                                            "$MRBRETT",
                                                          fonts: [
                                                            "GF;Mouse Memoirs-regular",
                                                          ],
                                                          name: "$MRBRETT",
                                                          verticalAlignment:
                                                            "center",
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      }),
                                                      e(y.div, {
                                                        className:
                                                          "framer-926ujd",
                                                        "data-framer-name":
                                                          "Frame 35",
                                                        name: "Frame 35",
                                                        children: e(a, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          children: e(t, {
                                                            children: e("p", {
                                                              style: {
                                                                "--font-selector":
                                                                  "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                                "--framer-font-family":
                                                                  '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                                "--framer-font-size":
                                                                  "100px",
                                                                "--framer-text-color":
                                                                  "rgb(22, 22, 22)",
                                                              },
                                                              children:
                                                                "$MRBRETT",
                                                            }),
                                                          }),
                                                          className:
                                                            "framer-1djqabi",
                                                          "data-framer-name":
                                                            "$MRBRETT",
                                                          fonts: [
                                                            "GF;Mouse Memoirs-regular",
                                                          ],
                                                          name: "$MRBRETT",
                                                          verticalAlignment:
                                                            "center",
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      }),
                                                      e(y.div, {
                                                        className:
                                                          "framer-1nxfdrl",
                                                        "data-framer-name":
                                                          "Frame 36",
                                                        name: "Frame 36",
                                                        children: e(a, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          children: e(t, {
                                                            children: e("p", {
                                                              style: {
                                                                "--font-selector":
                                                                  "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                                "--framer-font-family":
                                                                  '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                                "--framer-font-size":
                                                                  "100px",
                                                                "--framer-text-color":
                                                                  "rgb(22, 22, 22)",
                                                              },
                                                              children:
                                                                "$MRBRETT",
                                                            }),
                                                          }),
                                                          className:
                                                            "framer-1hhzm5l",
                                                          "data-framer-name":
                                                            "$MRBRETT",
                                                          fonts: [
                                                            "GF;Mouse Memoirs-regular",
                                                          ],
                                                          name: "$MRBRETT",
                                                          verticalAlignment:
                                                            "center",
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      }),
                                                      e(y.div, {
                                                        className:
                                                          "framer-1rhagr2",
                                                        "data-framer-name":
                                                          "Frame 37",
                                                        name: "Frame 37",
                                                        children: e(a, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          children: e(t, {
                                                            children: e("p", {
                                                              style: {
                                                                "--font-selector":
                                                                  "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                                "--framer-font-family":
                                                                  '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                                "--framer-font-size":
                                                                  "100px",
                                                                "--framer-text-color":
                                                                  "rgb(22, 22, 22)",
                                                              },
                                                              children:
                                                                "$MRBRETT",
                                                            }),
                                                          }),
                                                          className:
                                                            "framer-1fybtjo",
                                                          "data-framer-name":
                                                            "$MRBRETT",
                                                          fonts: [
                                                            "GF;Mouse Memoirs-regular",
                                                          ],
                                                          name: "$MRBRETT",
                                                          verticalAlignment:
                                                            "center",
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-bn5v9a",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-11q0yl6",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-12q5ufk",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-12lq4rt",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-vy9xzy",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-13vkrdh",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-13zig4n",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-1vih9w8",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-11enz5h",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-3owhun",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-l4avuk",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-4skpkf",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-2gy7oy",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-1u0e9kz",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-1govsiq",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-zqsdak",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-3zrauz",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                                speed: 100,
                                                style: {
                                                  height: "100%",
                                                  width: "100%",
                                                },
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                        }),
                                        e(Y, {
                                          children: e(u, {
                                            breakpoint: s,
                                            overrides: {
                                              oAvBb_bW8: {
                                                style: { rotate: 31 },
                                              },
                                            },
                                            children: e(D, {
                                              className:
                                                "framer-1hrbmgr-container",
                                              style: { rotate: -15 },
                                              children: e(G, {
                                                alignment: "center",
                                                direction: "left",
                                                fadeOptions: {
                                                  fadeAlpha: 0,
                                                  fadeContent: !1,
                                                  fadeInset: 0,
                                                  fadeWidth: 0,
                                                  overflow: !1,
                                                },
                                                gap: 10,
                                                height: "100%",
                                                hoverFactor: 1,
                                                id: "rtDViZkzZ",
                                                layoutId: "rtDViZkzZ",
                                                padding: 10,
                                                paddingBottom: 10,
                                                paddingLeft: 10,
                                                paddingPerSide: !1,
                                                paddingRight: 10,
                                                paddingTop: 10,
                                                sizingOptions: {
                                                  heightType: !0,
                                                  widthType: !0,
                                                },
                                                slots: [
                                                  l(y.div, {
                                                    className: "framer-vqskmf",
                                                    "data-border": !0,
                                                    "data-framer-name":
                                                      "Frame 38",
                                                    name: "Frame 38",
                                                    children: [
                                                      e(y.div, {
                                                        className:
                                                          "framer-1e3aj4b",
                                                        "data-framer-name":
                                                          "Frame 33",
                                                        name: "Frame 33",
                                                        children: e(a, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          children: e(t, {
                                                            children: e("p", {
                                                              style: {
                                                                "--font-selector":
                                                                  "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                                "--framer-font-family":
                                                                  '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                                "--framer-font-size":
                                                                  "100px",
                                                                "--framer-text-color":
                                                                  "rgb(22, 22, 22)",
                                                              },
                                                              children:
                                                                "$MRBRETT",
                                                            }),
                                                          }),
                                                          className:
                                                            "framer-97f1sq",
                                                          "data-framer-name":
                                                            "$MRBRETT",
                                                          fonts: [
                                                            "GF;Mouse Memoirs-regular",
                                                          ],
                                                          name: "$MRBRETT",
                                                          verticalAlignment:
                                                            "center",
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      }),
                                                      e(y.div, {
                                                        className:
                                                          "framer-1lv2val",
                                                        "data-framer-name":
                                                          "Frame 34",
                                                        name: "Frame 34",
                                                        children: e(a, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          children: e(t, {
                                                            children: e("p", {
                                                              style: {
                                                                "--font-selector":
                                                                  "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                                "--framer-font-family":
                                                                  '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                                "--framer-font-size":
                                                                  "100px",
                                                                "--framer-text-color":
                                                                  "rgb(22, 22, 22)",
                                                              },
                                                              children:
                                                                "$MRBRETT",
                                                            }),
                                                          }),
                                                          className:
                                                            "framer-zdubbw",
                                                          "data-framer-name":
                                                            "$MRBRETT",
                                                          fonts: [
                                                            "GF;Mouse Memoirs-regular",
                                                          ],
                                                          name: "$MRBRETT",
                                                          verticalAlignment:
                                                            "center",
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      }),
                                                      e(y.div, {
                                                        className:
                                                          "framer-926ujd",
                                                        "data-framer-name":
                                                          "Frame 35",
                                                        name: "Frame 35",
                                                        children: e(a, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          children: e(t, {
                                                            children: e("p", {
                                                              style: {
                                                                "--font-selector":
                                                                  "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                                "--framer-font-family":
                                                                  '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                                "--framer-font-size":
                                                                  "100px",
                                                                "--framer-text-color":
                                                                  "rgb(22, 22, 22)",
                                                              },
                                                              children:
                                                                "$MRBRETT",
                                                            }),
                                                          }),
                                                          className:
                                                            "framer-1djqabi",
                                                          "data-framer-name":
                                                            "$MRBRETT",
                                                          fonts: [
                                                            "GF;Mouse Memoirs-regular",
                                                          ],
                                                          name: "$MRBRETT",
                                                          verticalAlignment:
                                                            "center",
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      }),
                                                      e(y.div, {
                                                        className:
                                                          "framer-1nxfdrl",
                                                        "data-framer-name":
                                                          "Frame 36",
                                                        name: "Frame 36",
                                                        children: e(a, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          children: e(t, {
                                                            children: e("p", {
                                                              style: {
                                                                "--font-selector":
                                                                  "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                                "--framer-font-family":
                                                                  '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                                "--framer-font-size":
                                                                  "100px",
                                                                "--framer-text-color":
                                                                  "rgb(22, 22, 22)",
                                                              },
                                                              children:
                                                                "$MRBRETT",
                                                            }),
                                                          }),
                                                          className:
                                                            "framer-1hhzm5l",
                                                          "data-framer-name":
                                                            "$MRBRETT",
                                                          fonts: [
                                                            "GF;Mouse Memoirs-regular",
                                                          ],
                                                          name: "$MRBRETT",
                                                          verticalAlignment:
                                                            "center",
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      }),
                                                      e(y.div, {
                                                        className:
                                                          "framer-1rhagr2",
                                                        "data-framer-name":
                                                          "Frame 37",
                                                        name: "Frame 37",
                                                        children: e(a, {
                                                          __fromCanvasComponent:
                                                            !0,
                                                          children: e(t, {
                                                            children: e("p", {
                                                              style: {
                                                                "--font-selector":
                                                                  "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                                "--framer-font-family":
                                                                  '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                                "--framer-font-size":
                                                                  "100px",
                                                                "--framer-text-color":
                                                                  "rgb(22, 22, 22)",
                                                              },
                                                              children:
                                                                "$MRBRETT",
                                                            }),
                                                          }),
                                                          className:
                                                            "framer-1fybtjo",
                                                          "data-framer-name":
                                                            "$MRBRETT",
                                                          fonts: [
                                                            "GF;Mouse Memoirs-regular",
                                                          ],
                                                          name: "$MRBRETT",
                                                          verticalAlignment:
                                                            "center",
                                                          withExternalLayout:
                                                            !0,
                                                        }),
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-bn5v9a",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-11q0yl6",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-12q5ufk",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-12lq4rt",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-vy9xzy",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-13vkrdh",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-13zig4n",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-1vih9w8",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-11enz5h",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-3owhun",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-l4avuk",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-4skpkf",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-2gy7oy",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-1u0e9kz",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-1govsiq",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-zqsdak",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                      e(a, {
                                                        __fromCanvasComponent:
                                                          !0,
                                                        children: e(t, {
                                                          children: e("p", {
                                                            style: {
                                                              "--font-selector":
                                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                              "--framer-font-family":
                                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                              "--framer-font-size":
                                                                "100px",
                                                              "--framer-text-color":
                                                                "rgb(22, 22, 22)",
                                                            },
                                                            children:
                                                              "$MRBRETT",
                                                          }),
                                                        }),
                                                        className:
                                                          "framer-3zrauz",
                                                        "data-framer-name":
                                                          "$MRBRETT",
                                                        fonts: [
                                                          "GF;Mouse Memoirs-regular",
                                                        ],
                                                        name: "$MRBRETT",
                                                        verticalAlignment:
                                                          "center",
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                                speed: 100,
                                                style: {
                                                  height: "100%",
                                                  width: "100%",
                                                },
                                                width: "100%",
                                              }),
                                            }),
                                          }),
                                        }),
                                        T() &&
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "94px",
                                                  "--framer-text-alignment":
                                                    "center",
                                                },
                                                children: "ABOUT MR BRETT",
                                              }),
                                            }),
                                            className:
                                              "framer-x0m4p3 hidden-72rtr7",
                                            "data-framer-name":
                                              "ABOUT MR BRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "ABOUT MR BRETT",
                                            transformTemplate: jr,
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                      ],
                                    }),
                                  S() &&
                                    e(a, {
                                      __fromCanvasComponent: !0,
                                      children: e(t, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                            "--framer-font-family":
                                              '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                            "--framer-font-size": "55px",
                                            "--framer-text-alignment": "center",
                                          },
                                          children: "ABOUT MR BRETT",
                                        }),
                                      }),
                                      className:
                                        "framer-heencj hidden-72rtr7 hidden-1t9mxuk",
                                      "data-framer-name": "ABOUT MR BRETT",
                                      fonts: ["GF;Mouse Memoirs-regular"],
                                      name: "ABOUT MR BRETT",
                                      verticalAlignment: "center",
                                      withExternalLayout: !0,
                                    }),
                                  I() &&
                                    l("div", {
                                      className: "framer-1ry9bnw hidden-72rtr7",
                                      "data-framer-name": "Frame 61",
                                      name: "Frame 61",
                                      children: [
                                        l("div", {
                                          className: "framer-11vcj37",
                                          "data-framer-name": "Frame 60",
                                          name: "Frame 60",
                                          children: [
                                            e(u, {
                                              breakpoint: s,
                                              overrides: {
                                                FqN7CGrEj: {
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 1024,
                                                    intrinsicWidth: 1024,
                                                    loading: "lazy",
                                                    pixelHeight: 1024,
                                                    pixelWidth: 1024,
                                                    sizes:
                                                      "calc((100vw - 40px) * 1.2)",
                                                    src: "https://framerusercontent.com/images/jVWw5wyy2Dhe0sd8oBHtEz4uU.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/jVWw5wyy2Dhe0sd8oBHtEz4uU.png?scale-down-to=512 512w,https://framerusercontent.com/images/jVWw5wyy2Dhe0sd8oBHtEz4uU.png 1024w",
                                                  },
                                                },
                                                oAvBb_bW8: {
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 1024,
                                                    intrinsicWidth: 1024,
                                                    loading: "lazy",
                                                    pixelHeight: 1024,
                                                    pixelWidth: 1024,
                                                    sizes: "100vw",
                                                    src: "https://framerusercontent.com/images/jVWw5wyy2Dhe0sd8oBHtEz4uU.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/jVWw5wyy2Dhe0sd8oBHtEz4uU.png?scale-down-to=512 512w,https://framerusercontent.com/images/jVWw5wyy2Dhe0sd8oBHtEz4uU.png 1024w",
                                                  },
                                                },
                                              },
                                              children: e(c, {
                                                background: {
                                                  alt: "",
                                                  fit: "fill",
                                                  loading: "lazy",
                                                  src: "https://framerusercontent.com/images/waNwpD2FC32zHZJhqLznpvRQQs.png",
                                                  srcSet:
                                                    "https://framerusercontent.com/images/waNwpD2FC32zHZJhqLznpvRQQs.png?scale-down-to=512 512w,https://framerusercontent.com/images/waNwpD2FC32zHZJhqLznpvRQQs.png 1024w",
                                                },
                                                className: "framer-10oh64",
                                                "data-framer-name":
                                                  "BRETTHOLDINGNEWSPAPEROKQUALITY 1",
                                                name: "BRETTHOLDINGNEWSPAPEROKQUALITY 1",
                                              }),
                                            }),
                                            e(u, {
                                              breakpoint: s,
                                              overrides: {
                                                FqN7CGrEj: {
                                                  children: e(t, {
                                                    children: e("h6", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "55px",
                                                        "--framer-line-height":
                                                          "1em",
                                                        "--framer-text-alignment":
                                                          "center",
                                                      },
                                                      children:
                                                        "Embrace the Mystery",
                                                    }),
                                                  }),
                                                  fonts: [
                                                    "GF;Mouse Memoirs-regular",
                                                  ],
                                                },
                                                oAvBb_bW8: {
                                                  children: e(t, {
                                                    children: e("h6", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "88px",
                                                        "--framer-text-alignment":
                                                          "center",
                                                      },
                                                      children:
                                                        "Embrace the Mystery",
                                                    }),
                                                  }),
                                                  fonts: [
                                                    "GF;Mouse Memoirs-regular",
                                                  ],
                                                },
                                              },
                                              children: e(a, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                  children: e("h6", {
                                                    className:
                                                      "framer-styles-preset-64godp",
                                                    "data-styles-preset":
                                                      "zSqkPCiEj",
                                                    children:
                                                      "Embrace the Mystery",
                                                  }),
                                                }),
                                                className: "framer-122xea5",
                                                "data-framer-name":
                                                  "Embrace the Mystery",
                                                fonts: ["Inter"],
                                                name: "Embrace the Mystery",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            e(u, {
                                              breakpoint: s,
                                              overrides: {
                                                FqN7CGrEj: {
                                                  children: e(t, {
                                                    children: e("h5", {
                                                      style: {
                                                        "--font-selector":
                                                          "SW50ZXItU2VtaUJvbGQ=",
                                                        "--framer-font-family":
                                                          '"Inter", "Inter Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "19px",
                                                        "--framer-font-weight":
                                                          "600",
                                                        "--framer-text-alignment":
                                                          "center",
                                                      },
                                                      children:
                                                        "Take on a journey of mystery and discovery and be a part of something truly unique",
                                                    }),
                                                  }),
                                                  fonts: ["Inter-SemiBold"],
                                                },
                                                oAvBb_bW8: {
                                                  children: e(t, {
                                                    children: e("h5", {
                                                      style: {
                                                        "--font-selector":
                                                          "SW50ZXItU2VtaUJvbGQ=",
                                                        "--framer-font-family":
                                                          '"Inter", "Inter Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "33px",
                                                        "--framer-font-weight":
                                                          "600",
                                                        "--framer-text-alignment":
                                                          "center",
                                                      },
                                                      children:
                                                        "Take on a journey of mystery and discovery and be a part of something truly unique",
                                                    }),
                                                  }),
                                                  fonts: ["Inter-SemiBold"],
                                                },
                                              },
                                              children: e(a, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                  children: e("h5", {
                                                    className:
                                                      "framer-styles-preset-rjnbs2",
                                                    "data-styles-preset":
                                                      "v4pItkoP0",
                                                    children:
                                                      "Take on a journey of mystery and discovery and be a part of something truly unique",
                                                  }),
                                                }),
                                                className: "framer-1hfntdy",
                                                "data-framer-name":
                                                  "Take on a journey of mystery and discovery and be a part of something truly unique",
                                                fonts: ["Inter"],
                                                name: "Take on a journey of mystery and discovery and be a part of something truly unique",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          ],
                                        }),
                                        B() &&
                                          l("div", {
                                            className:
                                              "framer-p30oej hidden-1t9mxuk",
                                            "data-framer-name": "Frame 60",
                                            name: "Frame 60",
                                            children: [
                                              e(u, {
                                                breakpoint: s,
                                                overrides: {
                                                  FqN7CGrEj: {
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      intrinsicHeight: 7404,
                                                      intrinsicWidth: 7396,
                                                      loading: "lazy",
                                                      pixelHeight: 7404,
                                                      pixelWidth: 7396,
                                                      sizes:
                                                        "calc((100vw - 40px) * 1.2)",
                                                      src: "https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png",
                                                      srcSet:
                                                        "https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png?scale-down-to=1024 1022w,https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png?scale-down-to=2048 2045w,https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png?scale-down-to=4096 4091w,https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png 7396w",
                                                    },
                                                  },
                                                },
                                                children: e(c, {
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 7404,
                                                    intrinsicWidth: 7396,
                                                    loading: "lazy",
                                                    pixelHeight: 7404,
                                                    pixelWidth: 7396,
                                                    src: "https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png?scale-down-to=1024 1022w,https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png?scale-down-to=2048 2045w,https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png?scale-down-to=4096 4091w,https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png 7396w",
                                                  },
                                                  className: "framer-1fnxsd6",
                                                  "data-framer-name":
                                                    "BRETTHOLDINGNEWSPAPEROKQUALITY 1",
                                                  name: "BRETTHOLDINGNEWSPAPEROKQUALITY 1",
                                                }),
                                              }),
                                              e(a, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                  children: e("h6", {
                                                    style: {
                                                      "--font-selector":
                                                        "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                      "--framer-font-family":
                                                        '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "55px",
                                                      "--framer-line-height":
                                                        "1em",
                                                      "--framer-text-alignment":
                                                        "center",
                                                    },
                                                    children:
                                                      "Degenerate Gains",
                                                  }),
                                                }),
                                                className: "framer-1ywfxfe",
                                                "data-framer-name":
                                                  "Embrace the Mystery",
                                                fonts: [
                                                  "GF;Mouse Memoirs-regular",
                                                ],
                                                name: "Embrace the Mystery",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                              e(a, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                  children: e("h5", {
                                                    style: {
                                                      "--font-selector":
                                                        "SW50ZXItU2VtaUJvbGQ=",
                                                      "--framer-font-family":
                                                        '"Inter", "Inter Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "19px",
                                                      "--framer-font-weight":
                                                        "600",
                                                      "--framer-text-alignment":
                                                        "center",
                                                    },
                                                    children:
                                                      "Remember, this isn\u2019t financial advice. We\u2019re all here to enjoy the ride and have some fun.",
                                                  }),
                                                }),
                                                className: "framer-1kg23b3",
                                                "data-framer-name":
                                                  "Take on a journey of mystery and discovery and be a part of something truly unique",
                                                fonts: ["Inter-SemiBold"],
                                                name: "Take on a journey of mystery and discovery and be a part of something truly unique",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        B() &&
                                          l("div", {
                                            className:
                                              "framer-1lq2oxo hidden-1t9mxuk",
                                            "data-framer-name": "Frame 60",
                                            name: "Frame 60",
                                            children: [
                                              e(u, {
                                                breakpoint: s,
                                                overrides: {
                                                  FqN7CGrEj: {
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      intrinsicHeight: 1407,
                                                      intrinsicWidth: 1445,
                                                      loading: "lazy",
                                                      pixelHeight: 1407,
                                                      pixelWidth: 1445,
                                                      sizes:
                                                        "calc((100vw - 40px) * 1.2)",
                                                      src: "https://framerusercontent.com/images/GGvEc4CgpVjA0K5wEcyR4kAOZgY.png",
                                                      srcSet:
                                                        "https://framerusercontent.com/images/GGvEc4CgpVjA0K5wEcyR4kAOZgY.png?scale-down-to=512 512w,https://framerusercontent.com/images/GGvEc4CgpVjA0K5wEcyR4kAOZgY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/GGvEc4CgpVjA0K5wEcyR4kAOZgY.png 1445w",
                                                    },
                                                  },
                                                },
                                                children: e(c, {
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    loading: "lazy",
                                                    src: "https://framerusercontent.com/images/waNwpD2FC32zHZJhqLznpvRQQs.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/waNwpD2FC32zHZJhqLznpvRQQs.png?scale-down-to=512 512w,https://framerusercontent.com/images/waNwpD2FC32zHZJhqLznpvRQQs.png 1024w",
                                                  },
                                                  className: "framer-9uwnrg",
                                                  "data-framer-name":
                                                    "BRETTHOLDINGNEWSPAPEROKQUALITY 1",
                                                  name: "BRETTHOLDINGNEWSPAPEROKQUALITY 1",
                                                }),
                                              }),
                                              e(a, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                  children: e("h6", {
                                                    style: {
                                                      "--font-selector":
                                                        "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                      "--framer-font-family":
                                                        '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "55px",
                                                      "--framer-line-height":
                                                        "1em",
                                                      "--framer-text-alignment":
                                                        "center",
                                                    },
                                                    children:
                                                      "Help The Detective",
                                                  }),
                                                }),
                                                className: "framer-16gbj2z",
                                                "data-framer-name":
                                                  "Embrace the Mystery",
                                                fonts: [
                                                  "GF;Mouse Memoirs-regular",
                                                ],
                                                name: "Embrace the Mystery",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                              e(a, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                  children: e("h5", {
                                                    style: {
                                                      "--font-selector":
                                                        "SW50ZXItU2VtaUJvbGQ=",
                                                      "--framer-font-family":
                                                        '"Inter", "Inter Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "19px",
                                                      "--framer-font-weight":
                                                        "600",
                                                      "--framer-text-alignment":
                                                        "center",
                                                    },
                                                    children:
                                                      "We\u2019re rewarding those who join us in solving this mystery with tokens! Stay updated and find out more on our X/ Twitter",
                                                  }),
                                                }),
                                                className: "framer-931dj8",
                                                "data-framer-name":
                                                  "Take on a journey of mystery and discovery and be a part of something truly unique",
                                                fonts: ["Inter-SemiBold"],
                                                name: "Take on a journey of mystery and discovery and be a part of something truly unique",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        w() &&
                                          l("div", {
                                            className:
                                              "framer-x3ywxs hidden-10wuu6n",
                                            "data-framer-name": "Frame 60",
                                            name: "Frame 60",
                                            children: [
                                              e(u, {
                                                breakpoint: s,
                                                overrides: {
                                                  oAvBb_bW8: {
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      intrinsicHeight: 7404,
                                                      intrinsicWidth: 7396,
                                                      loading: "lazy",
                                                      pixelHeight: 7404,
                                                      pixelWidth: 7396,
                                                      sizes:
                                                        "calc(100vw - 9px)",
                                                      src: "https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png",
                                                      srcSet:
                                                        "https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png?scale-down-to=1024 1022w,https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png?scale-down-to=2048 2045w,https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png?scale-down-to=4096 4091w,https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png 7396w",
                                                    },
                                                  },
                                                },
                                                children: e(c, {
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 7404,
                                                    intrinsicWidth: 7396,
                                                    loading: "lazy",
                                                    pixelHeight: 7404,
                                                    pixelWidth: 7396,
                                                    src: "https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png?scale-down-to=1024 1022w,https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png?scale-down-to=2048 2045w,https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png?scale-down-to=4096 4091w,https://framerusercontent.com/images/RuajifngAHVEVVEDI6UyOBn5W4.png 7396w",
                                                  },
                                                  className: "framer-1ooou1q",
                                                  "data-framer-name":
                                                    "BRETTHOLDINGNEWSPAPEROKQUALITY 1",
                                                  name: "BRETTHOLDINGNEWSPAPEROKQUALITY 1",
                                                }),
                                              }),
                                              e(a, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                  children: e("h6", {
                                                    style: {
                                                      "--font-selector":
                                                        "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                      "--framer-font-family":
                                                        '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "88px",
                                                      "--framer-text-alignment":
                                                        "center",
                                                    },
                                                    children:
                                                      "Degenerate Gains",
                                                  }),
                                                }),
                                                className: "framer-1kuh645",
                                                "data-framer-name":
                                                  "Embrace the Mystery",
                                                fonts: [
                                                  "GF;Mouse Memoirs-regular",
                                                ],
                                                name: "Embrace the Mystery",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                              e(a, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                  children: e("h5", {
                                                    style: {
                                                      "--font-selector":
                                                        "SW50ZXItU2VtaUJvbGQ=",
                                                      "--framer-font-family":
                                                        '"Inter", "Inter Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "33px",
                                                      "--framer-font-weight":
                                                        "600",
                                                      "--framer-text-alignment":
                                                        "center",
                                                    },
                                                    children:
                                                      "Remember, this isn\u2019t financial advice. We\u2019re all here to enjoy the ride and have some fun.",
                                                  }),
                                                }),
                                                className: "framer-h4pm36",
                                                "data-framer-name":
                                                  "Take on a journey of mystery and discovery and be a part of something truly unique",
                                                fonts: ["Inter-SemiBold"],
                                                name: "Take on a journey of mystery and discovery and be a part of something truly unique",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        w() &&
                                          l("div", {
                                            className:
                                              "framer-11ud6us hidden-10wuu6n",
                                            "data-framer-name": "Frame 60",
                                            name: "Frame 60",
                                            children: [
                                              e(u, {
                                                breakpoint: s,
                                                overrides: {
                                                  oAvBb_bW8: {
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      intrinsicHeight: 1407,
                                                      intrinsicWidth: 1445,
                                                      loading: "lazy",
                                                      pixelHeight: 1407,
                                                      pixelWidth: 1445,
                                                      sizes: "100vw",
                                                      src: "https://framerusercontent.com/images/GGvEc4CgpVjA0K5wEcyR4kAOZgY.png",
                                                      srcSet:
                                                        "https://framerusercontent.com/images/GGvEc4CgpVjA0K5wEcyR4kAOZgY.png?scale-down-to=512 512w,https://framerusercontent.com/images/GGvEc4CgpVjA0K5wEcyR4kAOZgY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/GGvEc4CgpVjA0K5wEcyR4kAOZgY.png 1445w",
                                                    },
                                                  },
                                                },
                                                children: e(c, {
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 1407,
                                                    intrinsicWidth: 1445,
                                                    loading: "lazy",
                                                    pixelHeight: 1407,
                                                    pixelWidth: 1445,
                                                    src: "https://framerusercontent.com/images/GGvEc4CgpVjA0K5wEcyR4kAOZgY.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/GGvEc4CgpVjA0K5wEcyR4kAOZgY.png?scale-down-to=512 512w,https://framerusercontent.com/images/GGvEc4CgpVjA0K5wEcyR4kAOZgY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/GGvEc4CgpVjA0K5wEcyR4kAOZgY.png 1445w",
                                                  },
                                                  className: "framer-1j5955r",
                                                  "data-framer-name":
                                                    "BRETTHOLDINGNEWSPAPEROKQUALITY 1",
                                                  name: "BRETTHOLDINGNEWSPAPEROKQUALITY 1",
                                                }),
                                              }),
                                              e(a, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                  children: e("h6", {
                                                    style: {
                                                      "--font-selector":
                                                        "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                      "--framer-font-family":
                                                        '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "88px",
                                                      "--framer-text-alignment":
                                                        "center",
                                                    },
                                                    children:
                                                      "Help The Detective",
                                                  }),
                                                }),
                                                className: "framer-16n92j6",
                                                "data-framer-name":
                                                  "Embrace the Mystery",
                                                fonts: [
                                                  "GF;Mouse Memoirs-regular",
                                                ],
                                                name: "Embrace the Mystery",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                              e(a, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                  children: e("h5", {
                                                    style: {
                                                      "--font-selector":
                                                        "SW50ZXItU2VtaUJvbGQ=",
                                                      "--framer-font-family":
                                                        '"Inter", "Inter Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "33px",
                                                      "--framer-font-weight":
                                                        "600",
                                                      "--framer-text-alignment":
                                                        "center",
                                                    },
                                                    children:
                                                      "We\u2019re rewarding those who join us in solving this mystery with tokens! Stay updated and find out more on our X / Twitter, @MrBrettBase",
                                                  }),
                                                }),
                                                className: "framer-uhfu86",
                                                "data-framer-name":
                                                  "Take on a journey of mystery and discovery and be a part of something truly unique",
                                                fonts: ["Inter-SemiBold"],
                                                name: "Take on a journey of mystery and discovery and be a part of something truly unique",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  S() &&
                                    e(Y, {
                                      children: e(D, {
                                        className:
                                          "framer-1an1cnq-container hidden-72rtr7 hidden-1t9mxuk",
                                        style: { rotate: -41 },
                                        children: e(G, {
                                          alignment: "center",
                                          direction: "right",
                                          fadeOptions: {
                                            fadeAlpha: 0,
                                            fadeContent: !0,
                                            fadeInset: 0,
                                            fadeWidth: 0,
                                            overflow: !1,
                                          },
                                          gap: 0,
                                          height: "100%",
                                          hoverFactor: 1,
                                          id: "nHMHQ31TN",
                                          layoutId: "nHMHQ31TN",
                                          padding: 10,
                                          paddingBottom: 0,
                                          paddingLeft: 10,
                                          paddingPerSide: !0,
                                          paddingRight: 10,
                                          paddingTop: 0,
                                          sizingOptions: {
                                            heightType: !0,
                                            widthType: !0,
                                          },
                                          slots: [
                                            l(y.div, {
                                              className: "framer-1g5c3am",
                                              "data-border": !0,
                                              "data-framer-name": "Frame 38",
                                              name: "Frame 38",
                                              children: [
                                                e(y.div, {
                                                  className: "framer-g88hwh",
                                                  "data-framer-name":
                                                    "Frame 33",
                                                  name: "Frame 33",
                                                  children: e(a, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(t, {
                                                      children: e("p", {
                                                        style: {
                                                          "--font-selector":
                                                            "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                          "--framer-font-family":
                                                            '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                          "--framer-font-size":
                                                            "51px",
                                                          "--framer-text-color":
                                                            "rgb(22, 22, 22)",
                                                        },
                                                        children: "$MRBRETT",
                                                      }),
                                                    }),
                                                    className: "framer-10umpwe",
                                                    "data-framer-name":
                                                      "$MRBRETT",
                                                    fonts: [
                                                      "GF;Mouse Memoirs-regular",
                                                    ],
                                                    name: "$MRBRETT",
                                                    verticalAlignment: "center",
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                                e(a, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(t, {
                                                    children: e("p", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "51px",
                                                        "--framer-text-color":
                                                          "rgb(22, 22, 22)",
                                                      },
                                                      children: "$MRBRETT",
                                                    }),
                                                  }),
                                                  className: "framer-ww5nmk",
                                                  "data-framer-name":
                                                    "$MRBRETT",
                                                  fonts: [
                                                    "GF;Mouse Memoirs-regular",
                                                  ],
                                                  name: "$MRBRETT",
                                                  verticalAlignment: "center",
                                                  withExternalLayout: !0,
                                                }),
                                                e(a, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(t, {
                                                    children: e("p", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "51px",
                                                        "--framer-text-color":
                                                          "rgb(22, 22, 22)",
                                                      },
                                                      children: "$MRBRETT",
                                                    }),
                                                  }),
                                                  className: "framer-agka0b",
                                                  "data-framer-name":
                                                    "$MRBRETT",
                                                  fonts: [
                                                    "GF;Mouse Memoirs-regular",
                                                  ],
                                                  name: "$MRBRETT",
                                                  verticalAlignment: "center",
                                                  withExternalLayout: !0,
                                                }),
                                                e(a, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(t, {
                                                    children: e("p", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "51px",
                                                        "--framer-text-color":
                                                          "rgb(22, 22, 22)",
                                                      },
                                                      children: "$MRBRETT",
                                                    }),
                                                  }),
                                                  className: "framer-1kypeh9",
                                                  "data-framer-name":
                                                    "$MRBRETT",
                                                  fonts: [
                                                    "GF;Mouse Memoirs-regular",
                                                  ],
                                                  name: "$MRBRETT",
                                                  verticalAlignment: "center",
                                                  withExternalLayout: !0,
                                                }),
                                                e(a, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(t, {
                                                    children: e("p", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "51px",
                                                        "--framer-text-color":
                                                          "rgb(22, 22, 22)",
                                                      },
                                                      children: "$MRBRETT",
                                                    }),
                                                  }),
                                                  className: "framer-1beci66",
                                                  "data-framer-name":
                                                    "$MRBRETT",
                                                  fonts: [
                                                    "GF;Mouse Memoirs-regular",
                                                  ],
                                                  name: "$MRBRETT",
                                                  verticalAlignment: "center",
                                                  withExternalLayout: !0,
                                                }),
                                                e(a, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(t, {
                                                    children: e("p", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "51px",
                                                        "--framer-text-color":
                                                          "rgb(22, 22, 22)",
                                                      },
                                                      children: "$MRBRETT",
                                                    }),
                                                  }),
                                                  className: "framer-4buvml",
                                                  "data-framer-name":
                                                    "$MRBRETT",
                                                  fonts: [
                                                    "GF;Mouse Memoirs-regular",
                                                  ],
                                                  name: "$MRBRETT",
                                                  verticalAlignment: "center",
                                                  withExternalLayout: !0,
                                                }),
                                                e(a, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(t, {
                                                    children: e("p", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "51px",
                                                        "--framer-text-color":
                                                          "rgb(22, 22, 22)",
                                                      },
                                                      children: "$MRBRETT",
                                                    }),
                                                  }),
                                                  className: "framer-4kv249",
                                                  "data-framer-name":
                                                    "$MRBRETT",
                                                  fonts: [
                                                    "GF;Mouse Memoirs-regular",
                                                  ],
                                                  name: "$MRBRETT",
                                                  verticalAlignment: "center",
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                          speed: 100,
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  S() &&
                                    e(Y, {
                                      children: e(D, {
                                        className:
                                          "framer-1unw3fc-container hidden-72rtr7 hidden-1t9mxuk",
                                        style: { rotate: 24 },
                                        children: e(G, {
                                          alignment: "center",
                                          direction: "right",
                                          fadeOptions: {
                                            fadeAlpha: 0,
                                            fadeContent: !1,
                                            fadeInset: 0,
                                            fadeWidth: 0,
                                            overflow: !0,
                                          },
                                          gap: 0,
                                          height: "100%",
                                          hoverFactor: 1,
                                          id: "M4IQZ4xDn",
                                          layoutId: "M4IQZ4xDn",
                                          padding: 10,
                                          paddingBottom: 100,
                                          paddingLeft: 10,
                                          paddingPerSide: !0,
                                          paddingRight: 10,
                                          paddingTop: 0,
                                          sizingOptions: {
                                            heightType: !0,
                                            widthType: !0,
                                          },
                                          slots: [
                                            l(y.div, {
                                              className: "framer-1g5c3am",
                                              "data-border": !0,
                                              "data-framer-name": "Frame 38",
                                              name: "Frame 38",
                                              children: [
                                                e(y.div, {
                                                  className: "framer-g88hwh",
                                                  "data-framer-name":
                                                    "Frame 33",
                                                  name: "Frame 33",
                                                  children: e(a, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(t, {
                                                      children: e("p", {
                                                        style: {
                                                          "--font-selector":
                                                            "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                          "--framer-font-family":
                                                            '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                          "--framer-font-size":
                                                            "51px",
                                                          "--framer-text-color":
                                                            "rgb(22, 22, 22)",
                                                        },
                                                        children: "$MRBRETT",
                                                      }),
                                                    }),
                                                    className: "framer-10umpwe",
                                                    "data-framer-name":
                                                      "$MRBRETT",
                                                    fonts: [
                                                      "GF;Mouse Memoirs-regular",
                                                    ],
                                                    name: "$MRBRETT",
                                                    verticalAlignment: "center",
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                                e(a, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(t, {
                                                    children: e("p", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "51px",
                                                        "--framer-text-color":
                                                          "rgb(22, 22, 22)",
                                                      },
                                                      children: "$MRBRETT",
                                                    }),
                                                  }),
                                                  className: "framer-ww5nmk",
                                                  "data-framer-name":
                                                    "$MRBRETT",
                                                  fonts: [
                                                    "GF;Mouse Memoirs-regular",
                                                  ],
                                                  name: "$MRBRETT",
                                                  verticalAlignment: "center",
                                                  withExternalLayout: !0,
                                                }),
                                                e(a, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(t, {
                                                    children: e("p", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "51px",
                                                        "--framer-text-color":
                                                          "rgb(22, 22, 22)",
                                                      },
                                                      children: "$MRBRETT",
                                                    }),
                                                  }),
                                                  className: "framer-agka0b",
                                                  "data-framer-name":
                                                    "$MRBRETT",
                                                  fonts: [
                                                    "GF;Mouse Memoirs-regular",
                                                  ],
                                                  name: "$MRBRETT",
                                                  verticalAlignment: "center",
                                                  withExternalLayout: !0,
                                                }),
                                                e(a, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(t, {
                                                    children: e("p", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "51px",
                                                        "--framer-text-color":
                                                          "rgb(22, 22, 22)",
                                                      },
                                                      children: "$MRBRETT",
                                                    }),
                                                  }),
                                                  className: "framer-1kypeh9",
                                                  "data-framer-name":
                                                    "$MRBRETT",
                                                  fonts: [
                                                    "GF;Mouse Memoirs-regular",
                                                  ],
                                                  name: "$MRBRETT",
                                                  verticalAlignment: "center",
                                                  withExternalLayout: !0,
                                                }),
                                                e(a, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(t, {
                                                    children: e("p", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "51px",
                                                        "--framer-text-color":
                                                          "rgb(22, 22, 22)",
                                                      },
                                                      children: "$MRBRETT",
                                                    }),
                                                  }),
                                                  className: "framer-1beci66",
                                                  "data-framer-name":
                                                    "$MRBRETT",
                                                  fonts: [
                                                    "GF;Mouse Memoirs-regular",
                                                  ],
                                                  name: "$MRBRETT",
                                                  verticalAlignment: "center",
                                                  withExternalLayout: !0,
                                                }),
                                                e(a, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(t, {
                                                    children: e("p", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "51px",
                                                        "--framer-text-color":
                                                          "rgb(22, 22, 22)",
                                                      },
                                                      children: "$MRBRETT",
                                                    }),
                                                  }),
                                                  className: "framer-4buvml",
                                                  "data-framer-name":
                                                    "$MRBRETT",
                                                  fonts: [
                                                    "GF;Mouse Memoirs-regular",
                                                  ],
                                                  name: "$MRBRETT",
                                                  verticalAlignment: "center",
                                                  withExternalLayout: !0,
                                                }),
                                                e(a, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(t, {
                                                    children: e("p", {
                                                      style: {
                                                        "--font-selector":
                                                          "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                        "--framer-font-family":
                                                          '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                        "--framer-font-size":
                                                          "51px",
                                                        "--framer-text-color":
                                                          "rgb(22, 22, 22)",
                                                      },
                                                      children: "$MRBRETT",
                                                    }),
                                                  }),
                                                  className: "framer-4kv249",
                                                  "data-framer-name":
                                                    "$MRBRETT",
                                                  fonts: [
                                                    "GF;Mouse Memoirs-regular",
                                                  ],
                                                  name: "$MRBRETT",
                                                  verticalAlignment: "center",
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                          ],
                                          speed: 100,
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            j() &&
                              l("div", {
                                className:
                                  "framer-1vweol hidden-1t9mxuk hidden-10wuu6n",
                                "data-framer-name": "Frame 67",
                                name: "Frame 67",
                                children: [
                                  e(a, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                          "--framer-font-family":
                                            '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                          "--framer-font-size": "100px",
                                          "--framer-text-alignment": "center",
                                        },
                                        children: "ABOUT MR BRETT",
                                      }),
                                    }),
                                    className: "framer-7iqtb3",
                                    "data-framer-name": "ABOUT MR BRETT",
                                    fonts: ["GF;Mouse Memoirs-regular"],
                                    name: "ABOUT MR BRETT",
                                    verticalAlignment: "center",
                                    withExternalLayout: !0,
                                  }),
                                  e("div", {
                                    className: "framer-yjn1yd",
                                    "data-framer-name": "Frame 63",
                                    name: "Frame 63",
                                    children: l("div", {
                                      className: "framer-1wjmlg8",
                                      "data-framer-name": "Frame 61",
                                      name: "Frame 61",
                                      children: [
                                        l("div", {
                                          className: "framer-11f1nr8",
                                          "data-framer-name": "Frame 60",
                                          name: "Frame 60",
                                          children: [
                                            e(c, {
                                              background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 1024,
                                                intrinsicWidth: 1024,
                                                loading: "lazy",
                                                pixelHeight: 1024,
                                                pixelWidth: 1024,
                                                sizes: "220px",
                                                src: "https://framerusercontent.com/images/jVWw5wyy2Dhe0sd8oBHtEz4uU.png",
                                                srcSet:
                                                  "https://framerusercontent.com/images/jVWw5wyy2Dhe0sd8oBHtEz4uU.png?scale-down-to=512 512w,https://framerusercontent.com/images/jVWw5wyy2Dhe0sd8oBHtEz4uU.png 1024w",
                                              },
                                              className: "framer-1ingets",
                                              "data-framer-name":
                                                "BRETTHOLDINGNEWSPAPEROKQUALITY 1",
                                              name: "BRETTHOLDINGNEWSPAPEROKQUALITY 1",
                                            }),
                                            e(a, {
                                              __fromCanvasComponent: !0,
                                              children: e(t, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                    "--framer-font-family":
                                                      '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "50px",
                                                    "--framer-text-alignment":
                                                      "center",
                                                  },
                                                  children:
                                                    "Embrace the Mystery",
                                                }),
                                              }),
                                              className: "framer-16pkv9a",
                                              "data-framer-name":
                                                "Embrace the Mystery",
                                              fonts: [
                                                "GF;Mouse Memoirs-regular",
                                              ],
                                              name: "Embrace the Mystery",
                                              verticalAlignment: "center",
                                              withExternalLayout: !0,
                                            }),
                                            e(a, {
                                              __fromCanvasComponent: !0,
                                              children: e(t, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "SW50ZXItU2VtaUJvbGQ=",
                                                    "--framer-font-family":
                                                      '"Inter", "Inter Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "20px",
                                                    "--framer-font-weight":
                                                      "600",
                                                    "--framer-text-alignment":
                                                      "center",
                                                  },
                                                  children:
                                                    "Take on a journey of mystery and discovery and be a part of something truly unique",
                                                }),
                                              }),
                                              className: "framer-12dr6t8",
                                              "data-framer-name":
                                                "Take on a journey of mystery and discovery and be a part of something truly unique",
                                              fonts: ["Inter-SemiBold"],
                                              name: "Take on a journey of mystery and discovery and be a part of something truly unique",
                                              verticalAlignment: "center",
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        e("div", {
                                          className: "framer-132hh8z",
                                          "data-framer-name": "Group 17",
                                          name: "Group 17",
                                          children: l("div", {
                                            className: "framer-c26fcv",
                                            "data-framer-name": "Frame 60",
                                            name: "Frame 60",
                                            children: [
                                              e(c, {
                                                background: {
                                                  alt: "",
                                                  fit: "fill",
                                                  intrinsicHeight: 7404,
                                                  intrinsicWidth: 7396,
                                                  loading: "lazy",
                                                  pixelHeight: 7404,
                                                  pixelWidth: 7396,
                                                  sizes: "219.7852px",
                                                  src: "https://framerusercontent.com/images/eTEDnQ5h9kbfG5uPfa9R5fgn0OQ.png",
                                                  srcSet:
                                                    "https://framerusercontent.com/images/eTEDnQ5h9kbfG5uPfa9R5fgn0OQ.png?scale-down-to=1024 1022w,https://framerusercontent.com/images/eTEDnQ5h9kbfG5uPfa9R5fgn0OQ.png?scale-down-to=2048 2045w,https://framerusercontent.com/images/eTEDnQ5h9kbfG5uPfa9R5fgn0OQ.png?scale-down-to=4096 4091w,https://framerusercontent.com/images/eTEDnQ5h9kbfG5uPfa9R5fgn0OQ.png 7396w",
                                                },
                                                className: "framer-a68641",
                                                "data-framer-name":
                                                  "BrettJackDanielsHighQuality 1",
                                                name: "BrettJackDanielsHighQuality 1",
                                              }),
                                              e(a, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                  children: e("p", {
                                                    style: {
                                                      "--font-selector":
                                                        "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                      "--framer-font-family":
                                                        '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "50px",
                                                      "--framer-text-alignment":
                                                        "center",
                                                    },
                                                    children:
                                                      "Degenerate Gains",
                                                  }),
                                                }),
                                                className: "framer-1kjdxxo",
                                                "data-framer-name":
                                                  "Degenerate Gains",
                                                fonts: [
                                                  "GF;Mouse Memoirs-regular",
                                                ],
                                                name: "Degenerate Gains",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                              e(a, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                  children: e("p", {
                                                    style: {
                                                      "--font-selector":
                                                        "SW50ZXItU2VtaUJvbGQ=",
                                                      "--framer-font-family":
                                                        '"Inter", "Inter Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "20px",
                                                      "--framer-font-weight":
                                                        "600",
                                                      "--framer-text-alignment":
                                                        "center",
                                                    },
                                                    children:
                                                      "Remember, this isn\u2019t financial advice. We\u2019re all here to enjoy the ride and have some fun.",
                                                  }),
                                                }),
                                                className: "framer-1u2ns7g",
                                                "data-framer-name":
                                                  "Remember, this isn\u2019t financial advice. We\u2019re all here to enjoy the ride and have some fun.",
                                                fonts: ["Inter-SemiBold"],
                                                name: "Remember, this isn\u2019t financial advice. We\u2019re all here to enjoy the ride and have some fun.",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        }),
                                        e("div", {
                                          className: "framer-1vcpz9y",
                                          "data-framer-name": "Group 16",
                                          name: "Group 16",
                                          children: l("div", {
                                            className: "framer-1f1t496",
                                            "data-framer-name": "Frame 60",
                                            name: "Frame 60",
                                            children: [
                                              e(c, {
                                                background: {
                                                  alt: "",
                                                  fit: "fit",
                                                  intrinsicHeight: 1046,
                                                  intrinsicWidth: 1162,
                                                  loading: "lazy",
                                                  pixelHeight: 1046,
                                                  pixelWidth: 1162,
                                                  positionX: "center",
                                                  positionY: "center",
                                                  sizes: "413.6667px",
                                                  src: "https://framerusercontent.com/images/6gT28I0Lvi4No0frZiVwJhPGig.png",
                                                  srcSet:
                                                    "https://framerusercontent.com/images/6gT28I0Lvi4No0frZiVwJhPGig.png?scale-down-to=512 512w,https://framerusercontent.com/images/6gT28I0Lvi4No0frZiVwJhPGig.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/6gT28I0Lvi4No0frZiVwJhPGig.png 1162w",
                                                },
                                                className: "framer-1whyc64",
                                                "data-framer-name": "Vector",
                                                name: "Vector",
                                              }),
                                              e(a, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                  children: e("p", {
                                                    style: {
                                                      "--font-selector":
                                                        "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                      "--framer-font-family":
                                                        '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "50px",
                                                      "--framer-text-alignment":
                                                        "center",
                                                    },
                                                    children:
                                                      "Help the Detective",
                                                  }),
                                                }),
                                                className: "framer-852yp3",
                                                "data-framer-name":
                                                  "Help the Detective",
                                                fonts: [
                                                  "GF;Mouse Memoirs-regular",
                                                ],
                                                name: "Help the Detective",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                              e(a, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                  children: e("p", {
                                                    style: {
                                                      "--font-selector":
                                                        "SW50ZXItU2VtaUJvbGQ=",
                                                      "--framer-font-family":
                                                        '"Inter", "Inter Placeholder", sans-serif',
                                                      "--framer-font-size":
                                                        "20px",
                                                      "--framer-font-weight":
                                                        "600",
                                                      "--framer-text-alignment":
                                                        "center",
                                                    },
                                                    children:
                                                      "We\u2019re rewarding those who join us in solving this mystery with tokens! Stay updated and find out more on our Twitter.",
                                                  }),
                                                }),
                                                className: "framer-4jlq9n",
                                                "data-framer-name":
                                                  "We\u2019re rewarding those who join us in solving this mystery with tokens! Stay updated and find out more on our Twitter, @SirBrett.",
                                                fonts: ["Inter-SemiBold"],
                                                name: "We\u2019re rewarding those who join us in solving this mystery with tokens! Stay updated and find out more on our Twitter, @SirBrett.",
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        l("div", {
                          className: "framer-1vmwo7y",
                          "data-framer-name": "BrettGallerySection",
                          name: "BrettGallerySection",
                          children: [
                            l("div", {
                              className: "framer-vn57fj",
                              "data-framer-name": "Frame 68",
                              name: "Frame 68",
                              children: [
                                e("div", {
                                  className: "framer-16xsy29",
                                  children: e(u, {
                                    breakpoint: s,
                                    overrides: {
                                      FqN7CGrEj: {
                                        children: e(t, {
                                          children: e("p", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                              "--framer-font-family":
                                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                              "--framer-font-size": "81px",
                                              "--framer-text-alignment":
                                                "center",
                                            },
                                            children: "BRETT GALLERY",
                                          }),
                                        }),
                                      },
                                    },
                                    children: e(a, {
                                      __fromCanvasComponent: !0,
                                      children: e(t, {
                                        children: e("p", {
                                          style: {
                                            "--framer-font-size": "100px",
                                            "--framer-text-alignment": "center",
                                          },
                                          children: e("span", {
                                            style: {
                                              "--font-selector":
                                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                              "--framer-font-family":
                                                '"Mouse Memoirs"',
                                              "--framer-font-size": "100px",
                                            },
                                            children: "BRETT GALLERY",
                                          }),
                                        }),
                                      }),
                                      className: "framer-1b8qd3i",
                                      "data-framer-name": "BRETT GALLERY",
                                      fonts: ["GF;Mouse Memoirs-regular"],
                                      name: "BRETT GALLERY",
                                      transformTemplate: jr,
                                      verticalAlignment: "center",
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                }),
                                S() &&
                                  e(Y, {
                                    children: e(D, {
                                      className:
                                        "framer-c8acca-container hidden-72rtr7 hidden-1t9mxuk",
                                      children: e(G, {
                                        alignment: "center",
                                        direction: "left",
                                        fadeOptions: {
                                          fadeAlpha: 0,
                                          fadeContent: !1,
                                          fadeInset: 0,
                                          fadeWidth: 25,
                                          overflow: !1,
                                        },
                                        gap: 10,
                                        height: "100%",
                                        hoverFactor: 1,
                                        id: "A7691kjI4",
                                        layoutId: "A7691kjI4",
                                        padding: 10,
                                        paddingBottom: 10,
                                        paddingLeft: 10,
                                        paddingPerSide: !1,
                                        paddingRight: 10,
                                        paddingTop: 10,
                                        sizingOptions: {
                                          heightType: !0,
                                          widthType: !0,
                                        },
                                        slots: [
                                          l(y.div, {
                                            className: "framer-g1e675",
                                            "data-framer-name": "Frame 69",
                                            name: "Frame 69",
                                            children: [
                                              e(R, {
                                                href: "https://framerusercontent.com/images/HR01rErJUiUk9uonrIis08sqZPw.png?scale-down-to=1024",
                                                children: e(c, {
                                                  as: "a",
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 2e3,
                                                    intrinsicWidth: 2e3,
                                                    pixelHeight: 2e3,
                                                    pixelWidth: 2e3,
                                                    sizes: "250px",
                                                    src: "https://framerusercontent.com/images/HR01rErJUiUk9uonrIis08sqZPw.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/HR01rErJUiUk9uonrIis08sqZPw.png?scale-down-to=512 512w,https://framerusercontent.com/images/HR01rErJUiUk9uonrIis08sqZPw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/HR01rErJUiUk9uonrIis08sqZPw.png 2000w",
                                                  },
                                                  className:
                                                    "framer-r7xh4d framer-lux5qc",
                                                  "data-framer-name":
                                                    "Rectangle 37",
                                                  name: "Rectangle 37",
                                                }),
                                              }),
                                              e(c, {
                                                background: {
                                                  alt: "",
                                                  fit: "fill",
                                                  intrinsicHeight: 2e3,
                                                  intrinsicWidth: 2e3,
                                                  pixelHeight: 2e3,
                                                  pixelWidth: 2e3,
                                                  sizes: "250px",
                                                  src: "https://framerusercontent.com/images/B3oGsNRQ6updRMQqIvlLOa1Wpc.png",
                                                  srcSet:
                                                    "https://framerusercontent.com/images/B3oGsNRQ6updRMQqIvlLOa1Wpc.png?scale-down-to=512 512w,https://framerusercontent.com/images/B3oGsNRQ6updRMQqIvlLOa1Wpc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/B3oGsNRQ6updRMQqIvlLOa1Wpc.png 2000w",
                                                },
                                                className: "framer-1hy5vvr",
                                                "data-framer-name":
                                                  "Rectangle 37",
                                                name: "Rectangle 37",
                                              }),
                                              e(R, {
                                                href: "https://framerusercontent.com/images/3bbA7tgYhTRJIA4ehRZGwrSINms.png?scale-down-to=1024",
                                                children: e(c, {
                                                  as: "a",
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 2e3,
                                                    intrinsicWidth: 2e3,
                                                    pixelHeight: 2e3,
                                                    pixelWidth: 2e3,
                                                    sizes: "250px",
                                                    src: "https://framerusercontent.com/images/3bbA7tgYhTRJIA4ehRZGwrSINms.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/3bbA7tgYhTRJIA4ehRZGwrSINms.png?scale-down-to=512 512w,https://framerusercontent.com/images/3bbA7tgYhTRJIA4ehRZGwrSINms.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/3bbA7tgYhTRJIA4ehRZGwrSINms.png 2000w",
                                                  },
                                                  className:
                                                    "framer-lsoz70 framer-lux5qc",
                                                  "data-framer-name":
                                                    "Rectangle 38",
                                                  name: "Rectangle 38",
                                                }),
                                              }),
                                              e(R, {
                                                href: "https://framerusercontent.com/images/3hiTbVGXUztM0nahNZplXxLOh0k.png?scale-down-to=1024",
                                                children: e(c, {
                                                  as: "a",
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 2e3,
                                                    intrinsicWidth: 2e3,
                                                    pixelHeight: 2e3,
                                                    pixelWidth: 2e3,
                                                    sizes: "250px",
                                                    src: "https://framerusercontent.com/images/3hiTbVGXUztM0nahNZplXxLOh0k.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/3hiTbVGXUztM0nahNZplXxLOh0k.png?scale-down-to=512 512w,https://framerusercontent.com/images/3hiTbVGXUztM0nahNZplXxLOh0k.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/3hiTbVGXUztM0nahNZplXxLOh0k.png 2000w",
                                                  },
                                                  className:
                                                    "framer-nftzyz framer-lux5qc",
                                                  "data-framer-name":
                                                    "Rectangle 38",
                                                  name: "Rectangle 38",
                                                }),
                                              }),
                                              l(y.div, {
                                                className: "framer-ij3w1",
                                                "data-framer-name": "Frame 69",
                                                name: "Frame 69",
                                                children: [
                                                  e(c, {
                                                    background: {
                                                      alt: "",
                                                      fit: "fill",
                                                      intrinsicHeight: 2e3,
                                                      intrinsicWidth: 2e3,
                                                      pixelHeight: 2e3,
                                                      pixelWidth: 2e3,
                                                      sizes: "250px",
                                                      src: "https://framerusercontent.com/images/Bw5vLhfjEjVPQwP3jQ07RFe1qr0.png",
                                                      srcSet:
                                                        "https://framerusercontent.com/images/Bw5vLhfjEjVPQwP3jQ07RFe1qr0.png?scale-down-to=512 512w,https://framerusercontent.com/images/Bw5vLhfjEjVPQwP3jQ07RFe1qr0.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Bw5vLhfjEjVPQwP3jQ07RFe1qr0.png 2000w",
                                                    },
                                                    className: "framer-16jryhh",
                                                    children: e(R, {
                                                      href: "https://framerusercontent.com/images/Bw5vLhfjEjVPQwP3jQ07RFe1qr0.png?scale-down-to=1024",
                                                      children: e(y.a, {
                                                        className:
                                                          "framer-eq7rur framer-lux5qc",
                                                        "data-framer-name":
                                                          "Rectangle 37",
                                                        name: "Rectangle 37",
                                                      }),
                                                    }),
                                                  }),
                                                  e(R, {
                                                    href: "https://framerusercontent.com/images/smhaZV4RkqugLypXmRPuWZYO4.png?scale-down-to=1024",
                                                    children: e(c, {
                                                      as: "a",
                                                      background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 2e3,
                                                        intrinsicWidth: 2e3,
                                                        pixelHeight: 2e3,
                                                        pixelWidth: 2e3,
                                                        sizes: "250px",
                                                        src: "https://framerusercontent.com/images/smhaZV4RkqugLypXmRPuWZYO4.png",
                                                        srcSet:
                                                          "https://framerusercontent.com/images/smhaZV4RkqugLypXmRPuWZYO4.png?scale-down-to=512 512w,https://framerusercontent.com/images/smhaZV4RkqugLypXmRPuWZYO4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/smhaZV4RkqugLypXmRPuWZYO4.png 2000w",
                                                      },
                                                      className:
                                                        "framer-51j1pz framer-lux5qc",
                                                      "data-framer-name":
                                                        "Rectangle 37",
                                                      name: "Rectangle 37",
                                                    }),
                                                  }),
                                                  e(R, {
                                                    href: "https://framerusercontent.com/images/DUR3Ngf3nKXppssZfHuyToVEY.png?scale-down-to=1024",
                                                    children: e(c, {
                                                      as: "a",
                                                      background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 2e3,
                                                        intrinsicWidth: 2e3,
                                                        pixelHeight: 2e3,
                                                        pixelWidth: 2e3,
                                                        sizes: "250px",
                                                        src: "https://framerusercontent.com/images/DUR3Ngf3nKXppssZfHuyToVEY.png",
                                                        srcSet:
                                                          "https://framerusercontent.com/images/DUR3Ngf3nKXppssZfHuyToVEY.png?scale-down-to=512 512w,https://framerusercontent.com/images/DUR3Ngf3nKXppssZfHuyToVEY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/DUR3Ngf3nKXppssZfHuyToVEY.png 2000w",
                                                      },
                                                      className:
                                                        "framer-9s8jh2 framer-lux5qc",
                                                      "data-framer-name":
                                                        "Rectangle 39",
                                                      name: "Rectangle 39",
                                                    }),
                                                  }),
                                                  e(R, {
                                                    href: "https://framerusercontent.com/images/Mn6qnL7pbHBi1be2ZtahkGcbIrk.png?scale-down-to=1024",
                                                    children: e(c, {
                                                      as: "a",
                                                      background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 2e3,
                                                        intrinsicWidth: 2e3,
                                                        pixelHeight: 2e3,
                                                        pixelWidth: 2e3,
                                                        sizes: "250px",
                                                        src: "https://framerusercontent.com/images/Mn6qnL7pbHBi1be2ZtahkGcbIrk.png",
                                                        srcSet:
                                                          "https://framerusercontent.com/images/Mn6qnL7pbHBi1be2ZtahkGcbIrk.png?scale-down-to=512 512w,https://framerusercontent.com/images/Mn6qnL7pbHBi1be2ZtahkGcbIrk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Mn6qnL7pbHBi1be2ZtahkGcbIrk.png 2000w",
                                                      },
                                                      className:
                                                        "framer-1vmxu77 framer-lux5qc",
                                                      "data-framer-name":
                                                        "Rectangle 40",
                                                      name: "Rectangle 40",
                                                    }),
                                                  }),
                                                  e(R, {
                                                    href: "https://framerusercontent.com/images/EdCYVTpQcke4HaDjswKJXsYOy0Q.png?scale-down-to=1024",
                                                    children: e(c, {
                                                      as: "a",
                                                      background: {
                                                        alt: "",
                                                        fit: "fill",
                                                        intrinsicHeight: 2e3,
                                                        intrinsicWidth: 2e3,
                                                        pixelHeight: 2e3,
                                                        pixelWidth: 2e3,
                                                        sizes: "250px",
                                                        src: "https://framerusercontent.com/images/EdCYVTpQcke4HaDjswKJXsYOy0Q.png",
                                                        srcSet:
                                                          "https://framerusercontent.com/images/EdCYVTpQcke4HaDjswKJXsYOy0Q.png?scale-down-to=512 512w,https://framerusercontent.com/images/EdCYVTpQcke4HaDjswKJXsYOy0Q.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/EdCYVTpQcke4HaDjswKJXsYOy0Q.png 2000w",
                                                      },
                                                      className:
                                                        "framer-e3mpqo framer-lux5qc",
                                                      "data-framer-name":
                                                        "Rectangle 40",
                                                      name: "Rectangle 40",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                        speed: 100,
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                B() &&
                                  e(a, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "SW50ZXItU2VtaUJvbGQ=",
                                          "--framer-font-family":
                                            '"Inter", "Inter Placeholder", sans-serif',
                                          "--framer-font-size": "20px",
                                          "--framer-font-weight": "600",
                                          "--framer-text-alignment": "center",
                                        },
                                        children: "click to download",
                                      }),
                                    }),
                                    className: "framer-9ce504 hidden-1t9mxuk",
                                    "data-framer-name":
                                      "Remember, this isn\u2019t financial advice. We\u2019re all here to enjoy the ride and have some fun.",
                                    fonts: ["Inter-SemiBold"],
                                    name: "Remember, this isn\u2019t financial advice. We\u2019re all here to enjoy the ride and have some fun.",
                                    verticalAlignment: "center",
                                    withExternalLayout: !0,
                                  }),
                                w() &&
                                  e(Y, {
                                    children: e(D, {
                                      className:
                                        "framer-1ogpydt-container hidden-10wuu6n",
                                      children: e(G, {
                                        alignment: "center",
                                        direction: "right",
                                        fadeOptions: {
                                          fadeAlpha: 0,
                                          fadeContent: !1,
                                          fadeInset: 0,
                                          fadeWidth: 0,
                                          overflow: !1,
                                        },
                                        gap: 0,
                                        height: "100%",
                                        hoverFactor: 1,
                                        id: "haJDHm2so",
                                        layoutId: "haJDHm2so",
                                        padding: 10,
                                        paddingBottom: 10,
                                        paddingLeft: 10,
                                        paddingPerSide: !1,
                                        paddingRight: 10,
                                        paddingTop: 10,
                                        sizingOptions: {
                                          heightType: !0,
                                          widthType: !0,
                                        },
                                        slots: [
                                          l(y.div, {
                                            className: "framer-zln6it",
                                            "data-framer-name": "Frame 69",
                                            name: "Frame 69",
                                            children: [
                                              e(R, {
                                                href: "https://framerusercontent.com/images/Bw5vLhfjEjVPQwP3jQ07RFe1qr0.png?scale-down-to=1024",
                                                children: e(c, {
                                                  as: "a",
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 2e3,
                                                    intrinsicWidth: 2e3,
                                                    pixelHeight: 2e3,
                                                    pixelWidth: 2e3,
                                                    sizes: "500px",
                                                    src: "https://framerusercontent.com/images/Bw5vLhfjEjVPQwP3jQ07RFe1qr0.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/Bw5vLhfjEjVPQwP3jQ07RFe1qr0.png?scale-down-to=512 512w,https://framerusercontent.com/images/Bw5vLhfjEjVPQwP3jQ07RFe1qr0.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Bw5vLhfjEjVPQwP3jQ07RFe1qr0.png 2000w",
                                                  },
                                                  className:
                                                    "framer-owkfc2 framer-lux5qc",
                                                  "data-framer-name":
                                                    "Rectangle 37",
                                                  name: "Rectangle 37",
                                                }),
                                              }),
                                              e(R, {
                                                href: "https://framerusercontent.com/images/HR01rErJUiUk9uonrIis08sqZPw.png?scale-down-to=1024",
                                                children: e(c, {
                                                  as: "a",
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 2e3,
                                                    intrinsicWidth: 2e3,
                                                    pixelHeight: 2e3,
                                                    pixelWidth: 2e3,
                                                    sizes: "500px",
                                                    src: "https://framerusercontent.com/images/HR01rErJUiUk9uonrIis08sqZPw.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/HR01rErJUiUk9uonrIis08sqZPw.png?scale-down-to=512 512w,https://framerusercontent.com/images/HR01rErJUiUk9uonrIis08sqZPw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/HR01rErJUiUk9uonrIis08sqZPw.png 2000w",
                                                  },
                                                  className:
                                                    "framer-1jyzlwk framer-lux5qc",
                                                  "data-framer-name":
                                                    "Rectangle 37",
                                                  name: "Rectangle 37",
                                                }),
                                              }),
                                              e(R, {
                                                href: "https://framerusercontent.com/images/Mn6qnL7pbHBi1be2ZtahkGcbIrk.png?scale-down-to=1024",
                                                children: e(c, {
                                                  as: "a",
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 2e3,
                                                    intrinsicWidth: 2e3,
                                                    pixelHeight: 2e3,
                                                    pixelWidth: 2e3,
                                                    sizes: "500px",
                                                    src: "https://framerusercontent.com/images/Mn6qnL7pbHBi1be2ZtahkGcbIrk.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/Mn6qnL7pbHBi1be2ZtahkGcbIrk.png?scale-down-to=512 512w,https://framerusercontent.com/images/Mn6qnL7pbHBi1be2ZtahkGcbIrk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Mn6qnL7pbHBi1be2ZtahkGcbIrk.png 2000w",
                                                  },
                                                  className:
                                                    "framer-1dx58fy framer-lux5qc",
                                                  "data-framer-name":
                                                    "Rectangle 40",
                                                  name: "Rectangle 40",
                                                }),
                                              }),
                                              e(R, {
                                                href: "https://framerusercontent.com/images/B3oGsNRQ6updRMQqIvlLOa1Wpc.png?scale-down-to=1024",
                                                children: e(c, {
                                                  as: "a",
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 2e3,
                                                    intrinsicWidth: 2e3,
                                                    pixelHeight: 2e3,
                                                    pixelWidth: 2e3,
                                                    sizes: "500px",
                                                    src: "https://framerusercontent.com/images/B3oGsNRQ6updRMQqIvlLOa1Wpc.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/B3oGsNRQ6updRMQqIvlLOa1Wpc.png?scale-down-to=512 512w,https://framerusercontent.com/images/B3oGsNRQ6updRMQqIvlLOa1Wpc.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/B3oGsNRQ6updRMQqIvlLOa1Wpc.png 2000w",
                                                  },
                                                  className:
                                                    "framer-1gisk5u framer-lux5qc",
                                                  "data-framer-name":
                                                    "Rectangle 37",
                                                  name: "Rectangle 37",
                                                }),
                                              }),
                                              e(R, {
                                                href: "https://framerusercontent.com/images/3hiTbVGXUztM0nahNZplXxLOh0k.png?scale-down-to=1024",
                                                children: e(c, {
                                                  as: "a",
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 2e3,
                                                    intrinsicWidth: 2e3,
                                                    pixelHeight: 2e3,
                                                    pixelWidth: 2e3,
                                                    sizes: "500px",
                                                    src: "https://framerusercontent.com/images/3hiTbVGXUztM0nahNZplXxLOh0k.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/3hiTbVGXUztM0nahNZplXxLOh0k.png?scale-down-to=512 512w,https://framerusercontent.com/images/3hiTbVGXUztM0nahNZplXxLOh0k.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/3hiTbVGXUztM0nahNZplXxLOh0k.png 2000w",
                                                  },
                                                  className:
                                                    "framer-19jdd16 framer-lux5qc",
                                                  "data-framer-name":
                                                    "Rectangle 38",
                                                  name: "Rectangle 38",
                                                }),
                                              }),
                                              e(R, {
                                                href: "https://framerusercontent.com/images/smhaZV4RkqugLypXmRPuWZYO4.png?scale-down-to=1024",
                                                children: e(c, {
                                                  as: "a",
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 2e3,
                                                    intrinsicWidth: 2e3,
                                                    pixelHeight: 2e3,
                                                    pixelWidth: 2e3,
                                                    sizes: "500px",
                                                    src: "https://framerusercontent.com/images/smhaZV4RkqugLypXmRPuWZYO4.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/smhaZV4RkqugLypXmRPuWZYO4.png?scale-down-to=512 512w,https://framerusercontent.com/images/smhaZV4RkqugLypXmRPuWZYO4.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/smhaZV4RkqugLypXmRPuWZYO4.png 2000w",
                                                  },
                                                  className:
                                                    "framer-4eut3l framer-lux5qc",
                                                  "data-framer-name":
                                                    "Rectangle 37",
                                                  name: "Rectangle 37",
                                                }),
                                              }),
                                              e(R, {
                                                href: "https://framerusercontent.com/images/DUR3Ngf3nKXppssZfHuyToVEY.png?scale-down-to=1024",
                                                children: e(c, {
                                                  as: "a",
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 2e3,
                                                    intrinsicWidth: 2e3,
                                                    pixelHeight: 2e3,
                                                    pixelWidth: 2e3,
                                                    sizes: "500px",
                                                    src: "https://framerusercontent.com/images/DUR3Ngf3nKXppssZfHuyToVEY.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/DUR3Ngf3nKXppssZfHuyToVEY.png?scale-down-to=512 512w,https://framerusercontent.com/images/DUR3Ngf3nKXppssZfHuyToVEY.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/DUR3Ngf3nKXppssZfHuyToVEY.png 2000w",
                                                  },
                                                  className:
                                                    "framer-13psbp1 framer-lux5qc",
                                                  "data-framer-name":
                                                    "Rectangle 39",
                                                  name: "Rectangle 39",
                                                }),
                                              }),
                                              e(R, {
                                                href: "https://framerusercontent.com/images/EdCYVTpQcke4HaDjswKJXsYOy0Q.png?scale-down-to=1024",
                                                children: e(c, {
                                                  as: "a",
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 2e3,
                                                    intrinsicWidth: 2e3,
                                                    pixelHeight: 2e3,
                                                    pixelWidth: 2e3,
                                                    sizes: "500px",
                                                    src: "https://framerusercontent.com/images/EdCYVTpQcke4HaDjswKJXsYOy0Q.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/EdCYVTpQcke4HaDjswKJXsYOy0Q.png?scale-down-to=512 512w,https://framerusercontent.com/images/EdCYVTpQcke4HaDjswKJXsYOy0Q.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/EdCYVTpQcke4HaDjswKJXsYOy0Q.png 2000w",
                                                  },
                                                  className:
                                                    "framer-jiqoft framer-lux5qc",
                                                  "data-framer-name":
                                                    "Rectangle 40",
                                                  name: "Rectangle 40",
                                                }),
                                              }),
                                              e(R, {
                                                href: "https://framerusercontent.com/images/3bbA7tgYhTRJIA4ehRZGwrSINms.png?scale-down-to=1024",
                                                children: e(c, {
                                                  as: "a",
                                                  background: {
                                                    alt: "",
                                                    fit: "fill",
                                                    intrinsicHeight: 2e3,
                                                    intrinsicWidth: 2e3,
                                                    pixelHeight: 2e3,
                                                    pixelWidth: 2e3,
                                                    sizes: "500px",
                                                    src: "https://framerusercontent.com/images/3bbA7tgYhTRJIA4ehRZGwrSINms.png",
                                                    srcSet:
                                                      "https://framerusercontent.com/images/3bbA7tgYhTRJIA4ehRZGwrSINms.png?scale-down-to=512 512w,https://framerusercontent.com/images/3bbA7tgYhTRJIA4ehRZGwrSINms.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/3bbA7tgYhTRJIA4ehRZGwrSINms.png 2000w",
                                                  },
                                                  className:
                                                    "framer-h2gazp framer-lux5qc",
                                                  "data-framer-name":
                                                    "Rectangle 38",
                                                  name: "Rectangle 38",
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                        speed: 100,
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                              ],
                            }),
                            w() &&
                              e(Y, {
                                children: e(D, {
                                  className:
                                    "framer-13g17zs-container hidden-10wuu6n",
                                  children: e(G, {
                                    alignment: "center",
                                    direction: "left",
                                    fadeOptions: {
                                      fadeAlpha: 0,
                                      fadeContent: !1,
                                      fadeInset: 0,
                                      fadeWidth: 0,
                                      overflow: !1,
                                    },
                                    gap: 0,
                                    height: "100%",
                                    hoverFactor: 1,
                                    id: "Fx0BftIY8",
                                    layoutId: "Fx0BftIY8",
                                    padding: 10,
                                    paddingBottom: 10,
                                    paddingLeft: 10,
                                    paddingPerSide: !1,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                    sizingOptions: {
                                      heightType: !0,
                                      widthType: !0,
                                    },
                                    slots: [
                                      l(y.div, {
                                        className: "framer-vqskmf",
                                        "data-border": !0,
                                        "data-framer-name": "Frame 38",
                                        name: "Frame 38",
                                        children: [
                                          e(y.div, {
                                            className: "framer-1e3aj4b",
                                            "data-framer-name": "Frame 33",
                                            name: "Frame 33",
                                            children: e(a, {
                                              __fromCanvasComponent: !0,
                                              children: e(t, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                    "--framer-font-family":
                                                      '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "100px",
                                                    "--framer-text-color":
                                                      "rgb(22, 22, 22)",
                                                  },
                                                  children: "$MRBRETT",
                                                }),
                                              }),
                                              className: "framer-97f1sq",
                                              "data-framer-name": "$MRBRETT",
                                              fonts: [
                                                "GF;Mouse Memoirs-regular",
                                              ],
                                              name: "$MRBRETT",
                                              verticalAlignment: "center",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          e(y.div, {
                                            className: "framer-1lv2val",
                                            "data-framer-name": "Frame 34",
                                            name: "Frame 34",
                                            children: e(a, {
                                              __fromCanvasComponent: !0,
                                              children: e(t, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                    "--framer-font-family":
                                                      '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "100px",
                                                    "--framer-text-color":
                                                      "rgb(22, 22, 22)",
                                                  },
                                                  children: "$MRBRETT",
                                                }),
                                              }),
                                              className: "framer-zdubbw",
                                              "data-framer-name": "$MRBRETT",
                                              fonts: [
                                                "GF;Mouse Memoirs-regular",
                                              ],
                                              name: "$MRBRETT",
                                              verticalAlignment: "center",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          e(y.div, {
                                            className: "framer-926ujd",
                                            "data-framer-name": "Frame 35",
                                            name: "Frame 35",
                                            children: e(a, {
                                              __fromCanvasComponent: !0,
                                              children: e(t, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                    "--framer-font-family":
                                                      '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "100px",
                                                    "--framer-text-color":
                                                      "rgb(22, 22, 22)",
                                                  },
                                                  children: "$MRBRETT",
                                                }),
                                              }),
                                              className: "framer-1djqabi",
                                              "data-framer-name": "$MRBRETT",
                                              fonts: [
                                                "GF;Mouse Memoirs-regular",
                                              ],
                                              name: "$MRBRETT",
                                              verticalAlignment: "center",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          e(y.div, {
                                            className: "framer-1nxfdrl",
                                            "data-framer-name": "Frame 36",
                                            name: "Frame 36",
                                            children: e(a, {
                                              __fromCanvasComponent: !0,
                                              children: e(t, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                    "--framer-font-family":
                                                      '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "100px",
                                                    "--framer-text-color":
                                                      "rgb(22, 22, 22)",
                                                  },
                                                  children: "$MRBRETT",
                                                }),
                                              }),
                                              className: "framer-1hhzm5l",
                                              "data-framer-name": "$MRBRETT",
                                              fonts: [
                                                "GF;Mouse Memoirs-regular",
                                              ],
                                              name: "$MRBRETT",
                                              verticalAlignment: "center",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          e(y.div, {
                                            className: "framer-1rhagr2",
                                            "data-framer-name": "Frame 37",
                                            name: "Frame 37",
                                            children: e(a, {
                                              __fromCanvasComponent: !0,
                                              children: e(t, {
                                                children: e("p", {
                                                  style: {
                                                    "--font-selector":
                                                      "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                    "--framer-font-family":
                                                      '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                    "--framer-font-size":
                                                      "100px",
                                                    "--framer-text-color":
                                                      "rgb(22, 22, 22)",
                                                  },
                                                  children: "$MRBRETT",
                                                }),
                                              }),
                                              className: "framer-1fybtjo",
                                              "data-framer-name": "$MRBRETT",
                                              fonts: [
                                                "GF;Mouse Memoirs-regular",
                                              ],
                                              name: "$MRBRETT",
                                              verticalAlignment: "center",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-bn5v9a",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-11q0yl6",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-12q5ufk",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-12lq4rt",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-vy9xzy",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-13vkrdh",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-13zig4n",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-1vih9w8",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-11enz5h",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-3owhun",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-l4avuk",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-4skpkf",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-2gy7oy",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-1u0e9kz",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-1govsiq",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-zqsdak",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                          e(a, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                              children: e("p", {
                                                style: {
                                                  "--font-selector":
                                                    "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                                  "--framer-font-family":
                                                    '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                                  "--framer-font-size": "100px",
                                                  "--framer-text-color":
                                                    "rgb(22, 22, 22)",
                                                },
                                                children: "$MRBRETT",
                                              }),
                                            }),
                                            className: "framer-3zrauz",
                                            "data-framer-name": "$MRBRETT",
                                            fonts: ["GF;Mouse Memoirs-regular"],
                                            name: "$MRBRETT",
                                            verticalAlignment: "center",
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                    speed: 100,
                                    style: { height: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                          ],
                        }),
                        S() &&
                          e(a, {
                            __fromCanvasComponent: !0,
                            children: e(t, {
                              children: e("p", {
                                style: {
                                  "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "22px",
                                  "--framer-font-weight": "600",
                                  "--framer-line-height": "1em",
                                  "--framer-text-alignment": "center",
                                },
                                children: e(R, {
                                  href: "https://pump.fun/57SHHic2f6uFdAfXvwqkomdCC3cnf81VwYbZkBARaCyK",
                                  openInNewTab: !0,
                                  smoothScroll: !1,
                                  children: e("a", {
                                    className: "framer-styles-preset-137azwt",
                                    "data-styles-preset": "nRCse38kI",
                                    children:
                                      "https://pump.fun/57SHHic2f6uFdAfXvwqkomdCC3cnf81VwYbZkBARaCyK",
                                  }),
                                }),
                              }),
                            }),
                            className:
                              "framer-ccutv0 hidden-72rtr7 hidden-1t9mxuk",
                            "data-framer-name":
                              "Remember, this isn\u2019t financial advice. We\u2019re all here to enjoy the ride and have some fun.",
                            fonts: ["Inter-SemiBold"],
                            name: "Remember, this isn\u2019t financial advice. We\u2019re all here to enjoy the ride and have some fun.",
                            verticalAlignment: "center",
                            withExternalLayout: !0,
                          }),
                      ],
                    }),
                  }),
                  e("header", {
                    className: "framer-1nknob2",
                    "data-framer-name": "Header",
                    name: "Header",
                    children: l("div", {
                      className: "framer-19rsdqv",
                      children: [
                        B() &&
                          e(u, {
                            breakpoint: s,
                            overrides: {
                              FqN7CGrEj: {
                                background: {
                                  alt: "",
                                  fit: "fit",
                                  intrinsicHeight: 481,
                                  intrinsicWidth: 1084,
                                  loading: "lazy",
                                  pixelHeight: 961,
                                  pixelWidth: 2168,
                                  positionX: "center",
                                  positionY: "center",
                                  sizes: "85vw",
                                  src: "https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=2048",
                                  srcSet:
                                    "https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=512 512w,https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png 2168w",
                                },
                              },
                            },
                            children: e(c, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 481,
                                intrinsicWidth: 1084,
                                loading: "lazy",
                                pixelHeight: 961,
                                pixelWidth: 2168,
                                sizes: "max((100vw - 90px) / 2, 1px)",
                                src: "https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=2048",
                                srcSet:
                                  "https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=512 512w,https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png 2168w",
                              },
                              className: "framer-664n5t hidden-1t9mxuk",
                            }),
                          }),
                        B() &&
                          e(u, {
                            breakpoint: s,
                            overrides: {
                              FqN7CGrEj: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 826,
                                  intrinsicWidth: 1145,
                                  loading: "lazy",
                                  pixelHeight: 826,
                                  pixelWidth: 1145,
                                  positionX: "center",
                                  positionY: "top",
                                  sizes: "80vw",
                                  src: "https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png",
                                  srcSet:
                                    "https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png?scale-down-to=512 512w,https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png 1145w",
                                },
                              },
                            },
                            children: e(c, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 826,
                                intrinsicWidth: 1145,
                                loading: "lazy",
                                pixelHeight: 826,
                                pixelWidth: 1145,
                                sizes: "max((100vw - 90px) / 2, 1px)",
                                src: "https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png",
                                srcSet:
                                  "https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png?scale-down-to=512 512w,https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png 1145w",
                              },
                              className: "framer-xiiv5n hidden-1t9mxuk",
                            }),
                          }),
                        T() &&
                          e(u, {
                            breakpoint: s,
                            overrides: {
                              oAvBb_bW8: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 826,
                                  intrinsicWidth: 1145,
                                  loading: "lazy",
                                  pixelHeight: 826,
                                  pixelWidth: 1145,
                                  sizes: "810px",
                                  src: "https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png",
                                  srcSet:
                                    "https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png?scale-down-to=512 512w,https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png 1145w",
                                },
                              },
                            },
                            children: e(c, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 826,
                                intrinsicWidth: 1145,
                                loading: "lazy",
                                pixelHeight: 826,
                                pixelWidth: 1145,
                                src: "https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png",
                                srcSet:
                                  "https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png?scale-down-to=512 512w,https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/Kp9HuD2OQpOfpbkkkE6Txny5c.png 1145w",
                              },
                              className:
                                "framer-19h5vqz hidden-72rtr7 hidden-10wuu6n",
                            }),
                          }),
                        T() &&
                          e(u, {
                            breakpoint: s,
                            overrides: {
                              oAvBb_bW8: {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 481,
                                  intrinsicWidth: 1084,
                                  loading: "lazy",
                                  pixelHeight: 961,
                                  pixelWidth: 2168,
                                  sizes: "648px",
                                  src: "https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=2048",
                                  srcSet:
                                    "https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=512 512w,https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png 2168w",
                                },
                              },
                            },
                            children: e(c, {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 481,
                                intrinsicWidth: 1084,
                                loading: "lazy",
                                pixelHeight: 961,
                                pixelWidth: 2168,
                                src: "https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=2048",
                                srcSet:
                                  "https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=512 512w,https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/9MWKbD6k7spPnYhKisSylvvWZE.png 2168w",
                              },
                              className:
                                "framer-1xxxoml hidden-72rtr7 hidden-10wuu6n",
                              "data-framer-name": "Frame_68",
                              name: "Frame_68",
                            }),
                          }),
                      ],
                    }),
                  }),
                  e("div", {
                    className: "framer-8zen69",
                    children: e(u, {
                      breakpoint: s,
                      overrides: {
                        FqN7CGrEj: {
                          children: e(t, {
                            children: l("h5", {
                              style: {
                                "--font-selector":
                                  "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-line-height": "0.7em",
                                "--framer-text-alignment": "left",
                              },
                              children: [
                                e("span", {
                                  style: { "--framer-font-size": "15px" },
                                  children: "MRBRETT 2024",
                                }),
                                e("span", {
                                  style: { "--framer-font-size": "26px" },
                                  children: e("br", {}),
                                }),
                                e("span", {
                                  style: { "--framer-font-size": "15px" },
                                  children: "support@MrBrett.com",
                                }),
                              ],
                            }),
                          }),
                        },
                      },
                      children: e(a, {
                        __fromCanvasComponent: !0,
                        children: e(t, {
                          children: l("h5", {
                            style: {
                              "--font-selector":
                                "R0Y7TW91c2UgTWVtb2lycy1yZWd1bGFy",
                              "--framer-font-family":
                                '"Mouse Memoirs", "Mouse Memoirs Placeholder", sans-serif',
                              "--framer-font-size": "13px",
                              "--framer-text-alignment": "left",
                            },
                            children: [
                              e("span", {
                                style: { "--framer-font-size": "26px" },
                                children: "MRBRETT 2024",
                              }),
                              e("span", {
                                style: { "--framer-font-size": "26px" },
                                children: e("br", {}),
                              }),
                              e("span", {
                                style: { "--framer-font-size": "26px" },
                                children: "support@MrBrett.com",
                              }),
                            ],
                          }),
                        }),
                        className: "framer-1l6wfvx",
                        "data-framer-name":
                          "Take on a journey of mystery and discovery and be a part of something truly unique",
                        fonts: ["GF;Mouse Memoirs-regular"],
                        name: "Take on a journey of mystery and discovery and be a part of something truly unique",
                        verticalAlignment: "center",
                        withExternalLayout: !0,
                      }),
                    }),
                  }),
                ],
              }),
            }),
            e("div", { className: je(Vr, ...W), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  qt = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-COg4d.framer-lux5qc, .framer-COg4d .framer-lux5qc { display: block; }",
    ".framer-COg4d.framer-72rtr7 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1440px; }",
    ".framer-COg4d .framer-16tc5bu { aspect-ratio: 1.5635179153094463 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 921px); position: relative; width: 100%; }",
    ".framer-COg4d .framer-1uzdz47 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 10px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-COg4d .framer-7dr7ye { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: 90%; }",
    ".framer-COg4d .framer-1rz0slb { --framer-paragraph-spacing: 0px; flex: none; height: 70px; position: relative; white-space: pre-wrap; width: 838px; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-fos7yy { --border-bottom-width: 5px; --border-color: #000000; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 549px; height: 60px; justify-content: center; overflow: visible; padding: 10px; position: relative; width: 110%; }",
    ".framer-COg4d .framer-1foc3cw { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-COg4d .framer-bgejqy, .framer-COg4d .framer-vo6zf8 { align-content: center; align-items: center; aspect-ratio: 0.9966777408637874 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: var(--framer-aspect-ratio-supported, 40px); }",
    ".framer-COg4d .framer-130dqqc { align-content: center; align-items: center; aspect-ratio: 0.8695652173913043 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: var(--framer-aspect-ratio-supported, 34px); }",
    ".framer-COg4d .framer-ssckb5 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 1320px; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-18tid2h { flex: none; height: 2%; overflow: hidden; position: relative; width: 1058px; }",
    ".framer-COg4d .framer-1sq61up { --framer-paragraph-spacing: 0px; flex: none; height: 99%; left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); white-space: pre; width: auto; }",
    ".framer-COg4d .framer-1l7yxnr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 59px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-COg4d .framer-146ef56 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: 792px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 804px; }",
    ".framer-COg4d .framer-1nmfcs5 { aspect-ratio: 1.1480406386066764 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 689px); position: relative; width: 791px; }",
    ".framer-COg4d .framer-11r9iac { --framer-paragraph-spacing: 0px; flex: none; height: 87px; position: relative; white-space: pre-wrap; width: 804px; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-rznenw { --framer-paragraph-spacing: 100px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 504px; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-mlmj0v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 26px 10px 26px 10px; position: relative; width: min-content; }",
    ".framer-COg4d .framer-5g9fmg { flex: none; height: 4px; position: relative; width: 1300px; }",
    ".framer-COg4d .framer-1pwt7w5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-COg4d .framer-xr5479, .framer-COg4d .framer-1e3aj4b, .framer-COg4d .framer-1lv2val, .framer-COg4d .framer-926ujd, .framer-COg4d .framer-1nxfdrl, .framer-COg4d .framer-1rhagr2, .framer-COg4d .framer-g88hwh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-COg4d .framer-7phhr2, .framer-COg4d .framer-97f1sq, .framer-COg4d .framer-zdubbw, .framer-COg4d .framer-1djqabi, .framer-COg4d .framer-1hhzm5l, .framer-COg4d .framer-1fybtjo, .framer-COg4d .framer-bn5v9a, .framer-COg4d .framer-11q0yl6, .framer-COg4d .framer-12q5ufk, .framer-COg4d .framer-12lq4rt, .framer-COg4d .framer-vy9xzy, .framer-COg4d .framer-13vkrdh, .framer-COg4d .framer-13zig4n, .framer-COg4d .framer-1vih9w8, .framer-COg4d .framer-11enz5h, .framer-COg4d .framer-3owhun, .framer-COg4d .framer-l4avuk, .framer-COg4d .framer-4skpkf, .framer-COg4d .framer-2gy7oy, .framer-COg4d .framer-1u0e9kz, .framer-COg4d .framer-1govsiq, .framer-COg4d .framer-zqsdak, .framer-COg4d .framer-3zrauz, .framer-COg4d .framer-10umpwe, .framer-COg4d .framer-ww5nmk, .framer-COg4d .framer-agka0b, .framer-COg4d .framer-1kypeh9, .framer-COg4d .framer-1beci66, .framer-COg4d .framer-4buvml, .framer-COg4d .framer-4kv249 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-COg4d .framer-mqoikr { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 46px; height: min-content; justify-content: flex-start; overflow: visible; padding: 35px 0px 35px 0px; position: relative; width: 1251px; }",
    ".framer-COg4d .framer-isfyyf { --framer-paragraph-spacing: 100px; flex: none; height: 655px; position: relative; white-space: pre-wrap; width: 590px; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-j1188a { aspect-ratio: 0.9389312977099237 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 655px); position: relative; width: 615px; }",
    ".framer-COg4d .framer-12tidms { flex: none; height: 1159px; overflow: hidden; position: relative; width: 1440px; }",
    ".framer-COg4d .framer-2uolzb { flex: none; height: 526px; left: 0px; position: absolute; top: 84px; width: 100%; }",
    ".framer-COg4d .framer-1fcurwe { bottom: 0px; flex: none; left: calc(53.12500000000002% - 216.80555555555557% / 2); overflow: visible; position: absolute; top: -186px; width: 217%; }",
    ".framer-COg4d .framer-1wx1hqp-container { flex: none; height: 200px; position: absolute; right: -1px; top: calc(45.64606741573036% - 200px / 2); width: 115%; }",
    ".framer-COg4d .framer-vqskmf { --border-bottom-width: 5px; --border-color: #000000; --border-left-width: 5px; --border-right-width: 5px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; background-color: #f9d63d; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 133px; height: min-content; justify-content: flex-start; overflow: visible; padding: 15px 0px 15px 0px; position: relative; width: min-content; }",
    ".framer-COg4d .framer-1hrbmgr-container { flex: none; height: 200px; left: -8px; position: absolute; top: calc(50.00000000000002% - 200px / 2); width: 115%; }",
    ".framer-COg4d .framer-x0m4p3 { --framer-paragraph-spacing: 0px; bottom: 0px; flex: none; height: auto; left: 52%; position: absolute; transform: translateX(-50%); white-space: pre-wrap; width: 565px; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-heencj { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 0px; position: absolute; top: 98px; white-space: pre-wrap; width: 1fr; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-1ry9bnw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 187px; width: 1fr; }",
    ".framer-COg4d .framer-11vcj37 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 35px 60px 35px 60px; position: relative; width: 100%; }",
    ".framer-COg4d .framer-10oh64, .framer-COg4d .framer-1ooou1q, .framer-COg4d .framer-1j5955r { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 200px); position: relative; width: 100%; }",
    ".framer-COg4d .framer-122xea5, .framer-COg4d .framer-1hfntdy, .framer-COg4d .framer-1ywfxfe, .framer-COg4d .framer-1kg23b3, .framer-COg4d .framer-16gbj2z, .framer-COg4d .framer-931dj8, .framer-COg4d .framer-1l6wfvx { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-p30oej, .framer-COg4d .framer-1lq2oxo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 20px 35px 20px; position: relative; width: 100%; }",
    ".framer-COg4d .framer-1fnxsd6, .framer-COg4d .framer-9uwnrg { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 200px); position: relative; width: 120%; }",
    ".framer-COg4d .framer-x3ywxs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 35px 9px 35px 0px; position: relative; width: 100%; }",
    ".framer-COg4d .framer-1kuh645, .framer-COg4d .framer-h4pm36, .framer-COg4d .framer-16n92j6, .framer-COg4d .framer-uhfu86 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 90%; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-11ud6us { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 35px 0px 35px 0px; position: relative; width: 100%; }",
    ".framer-COg4d .framer-1an1cnq-container, .framer-COg4d .framer-1unw3fc-container { bottom: -2472px; flex: none; height: 100px; left: 1912px; position: absolute; right: -2072px; z-index: 1; }",
    ".framer-COg4d .framer-1g5c3am { --border-bottom-width: 5px; --border-color: #000000; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; background-color: #f9d63d; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: 85px; justify-content: flex-start; overflow: visible; padding: 15px 50px 15px 50px; position: relative; width: min-content; }",
    ".framer-COg4d .framer-1vweol { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 52%; overflow: visible; padding: 0px; position: absolute; transform: translateX(-50%); width: min-content; }",
    ".framer-COg4d .framer-7iqtb3 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 541px; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-yjn1yd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-COg4d .framer-1wjmlg8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1378px; }",
    ".framer-COg4d .framer-11f1nr8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 35px 0px 35px 0px; position: relative; width: 1px; }",
    ".framer-COg4d .framer-1ingets { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 220px); position: relative; width: 220px; }",
    ".framer-COg4d .framer-16pkv9a, .framer-COg4d .framer-1kjdxxo, .framer-COg4d .framer-852yp3 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 414px; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-12dr6t8, .framer-COg4d .framer-4jlq9n { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 352px; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-132hh8z { flex: 1 0 0px; height: 451px; overflow: visible; position: relative; width: 1px; }",
    ".framer-COg4d .framer-c26fcv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; left: 0px; overflow: hidden; padding: 35px 0px 35px 0px; position: absolute; top: 0px; width: 414px; }",
    ".framer-COg4d .framer-a68641 { aspect-ratio: 0.9990234375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 220px); position: relative; width: 220px; }",
    ".framer-COg4d .framer-1u2ns7g { --framer-paragraph-spacing: 0px; flex: none; height: 72px; position: relative; white-space: pre-wrap; width: 352px; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-1vcpz9y { flex: 1 0 0px; height: 475px; overflow: visible; position: relative; width: 1px; }",
    ".framer-COg4d .framer-1f1t496 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 478px; justify-content: center; left: 0px; overflow: hidden; padding: 35px 0px 35px 0px; position: absolute; top: 0px; width: 414px; }",
    ".framer-COg4d .framer-1whyc64 { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }",
    ".framer-COg4d .framer-1vmwo7y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 39px; height: min-content; justify-content: center; overflow: visible; padding: 100px 0px 0px 0px; position: relative; width: 1427px; }",
    ".framer-COg4d .framer-vn57fj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-COg4d .framer-16xsy29 { flex: none; height: 121px; overflow: hidden; position: relative; width: 542px; }",
    ".framer-COg4d .framer-1b8qd3i { --framer-paragraph-spacing: 0px; flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); white-space: pre-wrap; width: 541px; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-c8acca-container { flex: none; height: 277px; position: relative; width: 100%; }",
    ".framer-COg4d .framer-g1e675, .framer-COg4d .framer-zln6it { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 49px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-COg4d .framer-r7xh4d, .framer-COg4d .framer-lsoz70, .framer-COg4d .framer-nftzyz, .framer-COg4d .framer-51j1pz, .framer-COg4d .framer-9s8jh2, .framer-COg4d .framer-1vmxu77, .framer-COg4d .framer-e3mpqo { flex: none; height: 250px; position: relative; text-decoration: none; width: 250px; }",
    ".framer-COg4d .framer-1hy5vvr { flex: none; height: 250px; position: relative; width: 250px; }",
    ".framer-COg4d .framer-ij3w1 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 49px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-COg4d .framer-16jryhh { flex: none; height: 250px; overflow: hidden; position: relative; width: 250px; }",
    ".framer-COg4d .framer-eq7rur { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; text-decoration: none; top: 0px; }",
    ".framer-COg4d .framer-9ce504 { --framer-paragraph-spacing: 0px; flex: none; height: 72px; opacity: 0; position: relative; white-space: pre-wrap; width: 352px; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-1ogpydt-container { flex: none; height: 500px; position: relative; width: 100%; }",
    ".framer-COg4d .framer-owkfc2, .framer-COg4d .framer-1jyzlwk, .framer-COg4d .framer-1dx58fy, .framer-COg4d .framer-19jdd16, .framer-COg4d .framer-4eut3l, .framer-COg4d .framer-13psbp1, .framer-COg4d .framer-jiqoft, .framer-COg4d .framer-h2gazp { flex: none; height: 500px; position: relative; text-decoration: none; width: 500px; }",
    ".framer-COg4d .framer-1gisk5u { align-self: stretch; flex: none; height: auto; position: relative; text-decoration: none; width: 500px; }",
    ".framer-COg4d .framer-13g17zs-container { flex: none; height: 200px; position: relative; width: 300%; z-index: 1; }",
    ".framer-COg4d .framer-ccutv0 { --framer-paragraph-spacing: 0px; flex: none; height: 80px; position: relative; white-space: pre-wrap; width: 347px; word-break: break-word; word-wrap: break-word; }",
    ".framer-COg4d .framer-1nknob2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: 100%; }",
    ".framer-COg4d .framer-19rsdqv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 620px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-COg4d .framer-664n5t { flex: 1 0 0px; height: 300px; position: relative; width: 1px; }",
    ".framer-COg4d .framer-xiiv5n { border-bottom-left-radius: 400px; border-bottom-right-radius: 400px; flex: 1 0 0px; height: 100%; position: relative; width: 1px; }",
    ".framer-COg4d .framer-19h5vqz { border-bottom-right-radius: 100px; flex: 1 0 0px; height: 100%; position: relative; width: 1px; }",
    ".framer-COg4d .framer-1xxxoml { aspect-ratio: 2.2536382536382535 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 89px); overflow: visible; position: relative; width: 80%; }",
    ".framer-COg4d .framer-8zen69 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 20px; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-COg4d.framer-72rtr7, .framer-COg4d .framer-1uzdz47, .framer-COg4d .framer-fos7yy, .framer-COg4d .framer-1foc3cw, .framer-COg4d .framer-bgejqy, .framer-COg4d .framer-130dqqc, .framer-COg4d .framer-vo6zf8, .framer-COg4d .framer-1l7yxnr, .framer-COg4d .framer-146ef56, .framer-COg4d .framer-mlmj0v, .framer-COg4d .framer-1pwt7w5, .framer-COg4d .framer-xr5479, .framer-COg4d .framer-mqoikr, .framer-COg4d .framer-vqskmf, .framer-COg4d .framer-1e3aj4b, .framer-COg4d .framer-1lv2val, .framer-COg4d .framer-926ujd, .framer-COg4d .framer-1nxfdrl, .framer-COg4d .framer-1rhagr2, .framer-COg4d .framer-1ry9bnw, .framer-COg4d .framer-11vcj37, .framer-COg4d .framer-p30oej, .framer-COg4d .framer-1lq2oxo, .framer-COg4d .framer-x3ywxs, .framer-COg4d .framer-11ud6us, .framer-COg4d .framer-1g5c3am, .framer-COg4d .framer-g88hwh, .framer-COg4d .framer-1vweol, .framer-COg4d .framer-yjn1yd, .framer-COg4d .framer-1wjmlg8, .framer-COg4d .framer-11f1nr8, .framer-COg4d .framer-c26fcv, .framer-COg4d .framer-1f1t496, .framer-COg4d .framer-1vmwo7y, .framer-COg4d .framer-vn57fj, .framer-COg4d .framer-g1e675, .framer-COg4d .framer-ij3w1, .framer-COg4d .framer-zln6it, .framer-COg4d .framer-1nknob2, .framer-COg4d .framer-19rsdqv, .framer-COg4d .framer-8zen69 { gap: 0px; } .framer-COg4d.framer-72rtr7 > *, .framer-COg4d .framer-8zen69 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-COg4d.framer-72rtr7 > :first-child, .framer-COg4d .framer-1uzdz47 > :first-child, .framer-COg4d .framer-bgejqy > :first-child, .framer-COg4d .framer-130dqqc > :first-child, .framer-COg4d .framer-vo6zf8 > :first-child, .framer-COg4d .framer-146ef56 > :first-child, .framer-COg4d .framer-1pwt7w5 > :first-child, .framer-COg4d .framer-1ry9bnw > :first-child, .framer-COg4d .framer-11vcj37 > :first-child, .framer-COg4d .framer-p30oej > :first-child, .framer-COg4d .framer-1lq2oxo > :first-child, .framer-COg4d .framer-x3ywxs > :first-child, .framer-COg4d .framer-11ud6us > :first-child, .framer-COg4d .framer-1vweol > :first-child, .framer-COg4d .framer-yjn1yd > :first-child, .framer-COg4d .framer-11f1nr8 > :first-child, .framer-COg4d .framer-c26fcv > :first-child, .framer-COg4d .framer-1f1t496 > :first-child, .framer-COg4d .framer-1vmwo7y > :first-child, .framer-COg4d .framer-vn57fj > :first-child, .framer-COg4d .framer-1nknob2 > :first-child, .framer-COg4d .framer-8zen69 > :first-child { margin-top: 0px; } .framer-COg4d.framer-72rtr7 > :last-child, .framer-COg4d .framer-1uzdz47 > :last-child, .framer-COg4d .framer-bgejqy > :last-child, .framer-COg4d .framer-130dqqc > :last-child, .framer-COg4d .framer-vo6zf8 > :last-child, .framer-COg4d .framer-146ef56 > :last-child, .framer-COg4d .framer-1pwt7w5 > :last-child, .framer-COg4d .framer-1ry9bnw > :last-child, .framer-COg4d .framer-11vcj37 > :last-child, .framer-COg4d .framer-p30oej > :last-child, .framer-COg4d .framer-1lq2oxo > :last-child, .framer-COg4d .framer-x3ywxs > :last-child, .framer-COg4d .framer-11ud6us > :last-child, .framer-COg4d .framer-1vweol > :last-child, .framer-COg4d .framer-yjn1yd > :last-child, .framer-COg4d .framer-11f1nr8 > :last-child, .framer-COg4d .framer-c26fcv > :last-child, .framer-COg4d .framer-1f1t496 > :last-child, .framer-COg4d .framer-1vmwo7y > :last-child, .framer-COg4d .framer-vn57fj > :last-child, .framer-COg4d .framer-1nknob2 > :last-child, .framer-COg4d .framer-8zen69 > :last-child { margin-bottom: 0px; } .framer-COg4d .framer-1uzdz47 > *, .framer-COg4d .framer-bgejqy > *, .framer-COg4d .framer-130dqqc > *, .framer-COg4d .framer-vo6zf8 > *, .framer-COg4d .framer-1vweol > *, .framer-COg4d .framer-vn57fj > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-COg4d .framer-fos7yy > * { margin: 0px; margin-left: calc(549px / 2); margin-right: calc(549px / 2); } .framer-COg4d .framer-fos7yy > :first-child, .framer-COg4d .framer-1foc3cw > :first-child, .framer-COg4d .framer-1l7yxnr > :first-child, .framer-COg4d .framer-mlmj0v > :first-child, .framer-COg4d .framer-xr5479 > :first-child, .framer-COg4d .framer-mqoikr > :first-child, .framer-COg4d .framer-vqskmf > :first-child, .framer-COg4d .framer-1e3aj4b > :first-child, .framer-COg4d .framer-1lv2val > :first-child, .framer-COg4d .framer-926ujd > :first-child, .framer-COg4d .framer-1nxfdrl > :first-child, .framer-COg4d .framer-1rhagr2 > :first-child, .framer-COg4d .framer-1g5c3am > :first-child, .framer-COg4d .framer-g88hwh > :first-child, .framer-COg4d .framer-1wjmlg8 > :first-child, .framer-COg4d .framer-g1e675 > :first-child, .framer-COg4d .framer-ij3w1 > :first-child, .framer-COg4d .framer-zln6it > :first-child, .framer-COg4d .framer-19rsdqv > :first-child { margin-left: 0px; } .framer-COg4d .framer-fos7yy > :last-child, .framer-COg4d .framer-1foc3cw > :last-child, .framer-COg4d .framer-1l7yxnr > :last-child, .framer-COg4d .framer-mlmj0v > :last-child, .framer-COg4d .framer-xr5479 > :last-child, .framer-COg4d .framer-mqoikr > :last-child, .framer-COg4d .framer-vqskmf > :last-child, .framer-COg4d .framer-1e3aj4b > :last-child, .framer-COg4d .framer-1lv2val > :last-child, .framer-COg4d .framer-926ujd > :last-child, .framer-COg4d .framer-1nxfdrl > :last-child, .framer-COg4d .framer-1rhagr2 > :last-child, .framer-COg4d .framer-1g5c3am > :last-child, .framer-COg4d .framer-g88hwh > :last-child, .framer-COg4d .framer-1wjmlg8 > :last-child, .framer-COg4d .framer-g1e675 > :last-child, .framer-COg4d .framer-ij3w1 > :last-child, .framer-COg4d .framer-zln6it > :last-child, .framer-COg4d .framer-19rsdqv > :last-child { margin-right: 0px; } .framer-COg4d .framer-1foc3cw > * { margin: 0px; margin-left: calc(100px / 2); margin-right: calc(100px / 2); } .framer-COg4d .framer-1l7yxnr > * { margin: 0px; margin-left: calc(59px / 2); margin-right: calc(59px / 2); } .framer-COg4d .framer-146ef56 > * { margin: 0px; margin-bottom: calc(15px / 2); margin-top: calc(15px / 2); } .framer-COg4d .framer-mlmj0v > *, .framer-COg4d .framer-xr5479 > *, .framer-COg4d .framer-1e3aj4b > *, .framer-COg4d .framer-1lv2val > *, .framer-COg4d .framer-926ujd > *, .framer-COg4d .framer-1nxfdrl > *, .framer-COg4d .framer-1rhagr2 > *, .framer-COg4d .framer-g88hwh > *, .framer-COg4d .framer-19rsdqv > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-COg4d .framer-1pwt7w5 > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-COg4d .framer-mqoikr > * { margin: 0px; margin-left: calc(46px / 2); margin-right: calc(46px / 2); } .framer-COg4d .framer-vqskmf > * { margin: 0px; margin-left: calc(133px / 2); margin-right: calc(133px / 2); } .framer-COg4d .framer-1ry9bnw > * { margin: 0px; margin-bottom: calc(36px / 2); margin-top: calc(36px / 2); } .framer-COg4d .framer-11vcj37 > *, .framer-COg4d .framer-p30oej > *, .framer-COg4d .framer-1lq2oxo > *, .framer-COg4d .framer-x3ywxs > *, .framer-COg4d .framer-11ud6us > *, .framer-COg4d .framer-11f1nr8 > *, .framer-COg4d .framer-c26fcv > *, .framer-COg4d .framer-1f1t496 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-COg4d .framer-1g5c3am > * { margin: 0px; margin-left: calc(64px / 2); margin-right: calc(64px / 2); } .framer-COg4d .framer-yjn1yd > *, .framer-COg4d .framer-1nknob2 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-COg4d .framer-1wjmlg8 > * { margin: 0px; margin-left: calc(36px / 2); margin-right: calc(36px / 2); } .framer-COg4d .framer-1vmwo7y > * { margin: 0px; margin-bottom: calc(39px / 2); margin-top: calc(39px / 2); } .framer-COg4d .framer-g1e675 > *, .framer-COg4d .framer-ij3w1 > *, .framer-COg4d .framer-zln6it > * { margin: 0px; margin-left: calc(49px / 2); margin-right: calc(49px / 2); } }",
    "@media (min-width: 1440px) { .framer-COg4d .hidden-72rtr7 { display: none !important; } }",
    "@media (min-width: 810px) and (max-width: 1439px) { .framer-COg4d .hidden-1t9mxuk { display: none !important; } .framer-COg4d.framer-72rtr7 { gap: 0px; width: 810px; } .framer-COg4d .framer-16tc5bu { height: var(--framer-aspect-ratio-supported, 518px); } .framer-COg4d .framer-1uzdz47 { padding: 0px; } .framer-COg4d .framer-7dr7ye, .framer-COg4d .framer-ssckb5, .framer-COg4d .framer-mlmj0v { width: 100%; } .framer-COg4d .framer-1rz0slb { height: 63px; width: 649px; } .framer-COg4d .framer-fos7yy { gap: 40px; width: 100%; } .framer-COg4d .framer-1l7yxnr { flex-direction: column; gap: 0px; padding: 0px 20px 0px 20px; } .framer-COg4d .framer-146ef56 { align-content: center; align-items: center; height: min-content; order: 0; } .framer-COg4d .framer-1nmfcs5 { height: var(--framer-aspect-ratio-supported, 665px); order: 0; width: 95%; } .framer-COg4d .framer-11r9iac, .framer-COg4d .framer-rznenw { order: 1; width: 95%; } .framer-COg4d .framer-1pwt7w5 { padding: 0px 40px 0px 40px; width: 100%; } .framer-COg4d .framer-xr5479 { order: 0; width: 100%; } .framer-COg4d .framer-7phhr2 { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-COg4d .framer-mqoikr { align-content: center; align-items: center; flex-direction: column; padding: 0px 40px 0px 40px; width: 100%; } .framer-COg4d .framer-isfyyf { height: auto; width: 100%; } .framer-COg4d .framer-j1188a { height: var(--framer-aspect-ratio-supported, 778px); width: 100%; } .framer-COg4d .framer-12tidms { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; width: 100%; } .framer-COg4d .framer-2uolzb { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: unset; overflow: visible; padding: 0px 0px 20px 0px; position: relative; top: unset; z-index: 1; } .framer-COg4d .framer-1fcurwe { bottom: unset; height: 630px; left: unset; order: 0; position: sticky; top: 0px; width: 100%; will-change: transform; z-index: 1; } .framer-COg4d .framer-1wx1hqp-container { left: -261px; right: -296px; top: 187px; width: unset; z-index: 1; } .framer-COg4d .framer-1hrbmgr-container { left: -279px; right: -278px; top: calc(46.732026143790875% - 200px / 2); width: unset; z-index: 1; } .framer-COg4d .framer-1ry9bnw { left: unset; order: 2; position: relative; top: unset; width: 100%; } .framer-COg4d .framer-11vcj37 { padding: 0px 0px 35px 0px; } .framer-COg4d .framer-10oh64 { height: var(--framer-aspect-ratio-supported, 810px); order: 0; } .framer-COg4d .framer-122xea5 { order: 1; white-space: pre; width: auto; } .framer-COg4d .framer-1hfntdy { order: 2; width: 80%; } .framer-COg4d .framer-1ooou1q { height: var(--framer-aspect-ratio-supported, 801px); } .framer-COg4d .framer-1j5955r { height: var(--framer-aspect-ratio-supported, 810px); } .framer-COg4d .framer-vn57fj { gap: 23px; } .framer-COg4d .framer-1nknob2 { gap: 68px; padding: 40px 0px 0px 0px; width: 810px; } .framer-COg4d .framer-19rsdqv { flex-direction: column; gap: 41px; height: 1234px; } .framer-COg4d .framer-19h5vqz { height: 1px; order: 3; width: 100%; } .framer-COg4d .framer-1xxxoml { height: var(--framer-aspect-ratio-supported, 287px); order: 0; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-COg4d.framer-72rtr7, .framer-COg4d .framer-fos7yy, .framer-COg4d .framer-1l7yxnr, .framer-COg4d .framer-mqoikr, .framer-COg4d .framer-12tidms, .framer-COg4d .framer-2uolzb, .framer-COg4d .framer-vn57fj, .framer-COg4d .framer-1nknob2, .framer-COg4d .framer-19rsdqv { gap: 0px; } .framer-COg4d.framer-72rtr7 > *, .framer-COg4d .framer-1l7yxnr > *, .framer-COg4d .framer-12tidms > *, .framer-COg4d .framer-2uolzb > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-COg4d.framer-72rtr7 > :first-child, .framer-COg4d .framer-1l7yxnr > :first-child, .framer-COg4d .framer-mqoikr > :first-child, .framer-COg4d .framer-12tidms > :first-child, .framer-COg4d .framer-2uolzb > :first-child, .framer-COg4d .framer-vn57fj > :first-child, .framer-COg4d .framer-1nknob2 > :first-child, .framer-COg4d .framer-19rsdqv > :first-child { margin-top: 0px; } .framer-COg4d.framer-72rtr7 > :last-child, .framer-COg4d .framer-1l7yxnr > :last-child, .framer-COg4d .framer-mqoikr > :last-child, .framer-COg4d .framer-12tidms > :last-child, .framer-COg4d .framer-2uolzb > :last-child, .framer-COg4d .framer-vn57fj > :last-child, .framer-COg4d .framer-1nknob2 > :last-child, .framer-COg4d .framer-19rsdqv > :last-child { margin-bottom: 0px; } .framer-COg4d .framer-fos7yy > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-COg4d .framer-fos7yy > :first-child { margin-left: 0px; } .framer-COg4d .framer-fos7yy > :last-child { margin-right: 0px; } .framer-COg4d .framer-mqoikr > * { margin: 0px; margin-bottom: calc(46px / 2); margin-top: calc(46px / 2); } .framer-COg4d .framer-vn57fj > * { margin: 0px; margin-bottom: calc(23px / 2); margin-top: calc(23px / 2); } .framer-COg4d .framer-1nknob2 > * { margin: 0px; margin-bottom: calc(68px / 2); margin-top: calc(68px / 2); } .framer-COg4d .framer-19rsdqv > * { margin: 0px; margin-bottom: calc(41px / 2); margin-top: calc(41px / 2); } }}",
    "@media (max-width: 809px) { .framer-COg4d .hidden-10wuu6n { display: none !important; } .framer-COg4d.framer-72rtr7 { gap: 0px; width: 390px; } .framer-COg4d .framer-16tc5bu { height: var(--framer-aspect-ratio-supported, 345px); width: 138%; } .framer-COg4d .framer-1uzdz47 { padding: 0px; } .framer-COg4d .framer-7dr7ye, .framer-COg4d .framer-16xsy29 { order: 0; } .framer-COg4d .framer-fos7yy { gap: 40px; order: 3; width: 100%; } .framer-COg4d .framer-ssckb5 { order: 4; width: 100%; } .framer-COg4d .framer-1l7yxnr { flex-direction: column; gap: 6px; order: 6; padding: 0px 20px 0px 20px; } .framer-COg4d .framer-146ef56 { align-content: center; align-items: center; height: min-content; order: 0; width: 100%; } .framer-COg4d .framer-1nmfcs5 { height: var(--framer-aspect-ratio-supported, 304px); order: 0; width: 100%; } .framer-COg4d .framer-11r9iac { height: auto; order: 1; width: 100%; } .framer-COg4d .framer-rznenw { order: 1; width: 100%; } .framer-COg4d .framer-mlmj0v { order: 7; width: 100%; } .framer-COg4d .framer-1pwt7w5 { order: 8; padding: 0px 40px 0px 40px; width: 100%; } .framer-COg4d .framer-xr5479 { order: 0; width: 100%; } .framer-COg4d .framer-7phhr2 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-COg4d .framer-mqoikr { align-content: center; align-items: center; flex-direction: column; gap: 14px; order: 9; padding: 10px 20px 20px 20px; width: 100%; } .framer-COg4d .framer-isfyyf { height: auto; order: 0; width: 100%; } .framer-COg4d .framer-j1188a { height: var(--framer-aspect-ratio-supported, 373px); order: 1; width: 100%; } .framer-COg4d .framer-12tidms { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; order: 10; overflow: visible; padding: 0px; width: 100%; } .framer-COg4d .framer-2uolzb { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; left: unset; order: 0; overflow: visible; padding: 0px; position: relative; top: unset; z-index: 1; } .framer-COg4d .framer-heencj { left: unset; order: 3; position: relative; top: unset; width: 100%; } .framer-COg4d .framer-1ry9bnw { gap: 0px; left: unset; order: 4; position: relative; top: unset; width: 100%; } .framer-COg4d .framer-11vcj37, .framer-COg4d .framer-p30oej { padding: 0px 20px 20px 20px; } .framer-COg4d .framer-10oh64 { height: var(--framer-aspect-ratio-supported, 420px); width: 120%; } .framer-COg4d .framer-1fnxsd6, .framer-COg4d .framer-9uwnrg { height: var(--framer-aspect-ratio-supported, 420px); } .framer-COg4d .framer-1lq2oxo { padding: 0px 20px 0px 20px; } .framer-COg4d .framer-1an1cnq-container { bottom: unset; left: unset; order: 0; position: sticky; right: unset; top: 0px; width: 1600px; will-change: transform; } .framer-COg4d .framer-1unw3fc-container { bottom: unset; left: unset; order: 1; position: sticky; right: unset; top: 0px; width: 1600px; will-change: transform; } .framer-COg4d .framer-1vmwo7y { gap: 0px; order: 11; padding: 20px 0px 20px 0px; width: min-content; } .framer-COg4d .framer-vn57fj { gap: 10px; padding: 20px 0px 20px 0px; width: 390px; } .framer-COg4d .framer-1b8qd3i { white-space: pre; width: auto; } .framer-COg4d .framer-c8acca-container, .framer-COg4d .framer-ccutv0 { order: 1; } .framer-COg4d .framer-9ce504 { order: 2; } .framer-COg4d .framer-1nknob2 { padding: 20px 0px 0px 0px; } .framer-COg4d .framer-19rsdqv { flex-direction: column; height: min-content; } .framer-COg4d .framer-664n5t { flex: none; height: 175px; width: 85%; } .framer-COg4d .framer-xiiv5n { border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; flex: none; height: 242px; width: 80%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-COg4d.framer-72rtr7, .framer-COg4d .framer-fos7yy, .framer-COg4d .framer-1l7yxnr, .framer-COg4d .framer-mqoikr, .framer-COg4d .framer-12tidms, .framer-COg4d .framer-2uolzb, .framer-COg4d .framer-1ry9bnw, .framer-COg4d .framer-1vmwo7y, .framer-COg4d .framer-vn57fj, .framer-COg4d .framer-19rsdqv { gap: 0px; } .framer-COg4d.framer-72rtr7 > *, .framer-COg4d .framer-12tidms > *, .framer-COg4d .framer-1ry9bnw > *, .framer-COg4d .framer-1vmwo7y > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-COg4d.framer-72rtr7 > :first-child, .framer-COg4d .framer-1l7yxnr > :first-child, .framer-COg4d .framer-mqoikr > :first-child, .framer-COg4d .framer-12tidms > :first-child, .framer-COg4d .framer-2uolzb > :first-child, .framer-COg4d .framer-1ry9bnw > :first-child, .framer-COg4d .framer-1vmwo7y > :first-child, .framer-COg4d .framer-vn57fj > :first-child, .framer-COg4d .framer-19rsdqv > :first-child { margin-top: 0px; } .framer-COg4d.framer-72rtr7 > :last-child, .framer-COg4d .framer-1l7yxnr > :last-child, .framer-COg4d .framer-mqoikr > :last-child, .framer-COg4d .framer-12tidms > :last-child, .framer-COg4d .framer-2uolzb > :last-child, .framer-COg4d .framer-1ry9bnw > :last-child, .framer-COg4d .framer-1vmwo7y > :last-child, .framer-COg4d .framer-vn57fj > :last-child, .framer-COg4d .framer-19rsdqv > :last-child { margin-bottom: 0px; } .framer-COg4d .framer-fos7yy > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-COg4d .framer-fos7yy > :first-child { margin-left: 0px; } .framer-COg4d .framer-fos7yy > :last-child { margin-right: 0px; } .framer-COg4d .framer-1l7yxnr > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } .framer-COg4d .framer-mqoikr > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-COg4d .framer-2uolzb > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-COg4d .framer-vn57fj > *, .framer-COg4d .framer-19rsdqv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}",
    ...kr,
    ...Gr,
    ...Ar,
    '.framer-COg4d[data-border="true"]::after, .framer-COg4d [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Re = lr(Lt, qt, "framer-COg4d"),
  go = Re;
Re.displayName = "Home";
Re.defaultProps = { height: 6157, width: 1440 };
gr(
  Re,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Chomsky Regular",
          source: "custom",
          url: "https://framerusercontent.com/assets/xUnI4JzWlGwQHZbcDP8VzN3mpU.woff2",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-SemiBold.cyrillic-ext-C7KWUKA7.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-SemiBold.cyrillic-JWV7SOZ6.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-SemiBold.greek-ext-FBKSFTSU.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-SemiBold.greek-EQ3PSENU.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-SemiBold.latin-ext-ULRSO3ZR.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-SemiBold.latin-RDYY2AG2.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-SemiBold.vietnamese-ESQNSEQ3.woff2",
          weight: "600",
        },
        {
          family: "Mouse Memoirs",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/mousememoirs/v17/t5tmIRoSNJ-PH0WNNgDYxdSb7TzFrpOHYh4.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Bold.cyrillic-ext-XOTVL7ZR.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Bold.cyrillic-6LOMBC2V.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Bold.greek-ext-WXWSJXLB.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Bold.greek-YRST7ODZ.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Bold.latin-ext-BASA5UL3.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Bold.latin-UCM45LQF.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Bold.vietnamese-OEVJMXEP.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
        {
          family: "Irish Grover",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/irishgrover/v23/buExpoi6YtLz2QW7LA4flVgf_f5Oaiw4cw.woff2",
          weight: "400",
        },
      ],
    },
    ...Nt,
    ...ye(Sr),
    ...ye(Nr),
    ...ye(Ur),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ho = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"oAvBb_bW8":{"layout":["fixed","auto"]},"FqN7CGrEj":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
        framerImmutableVariables: "true",
        framerIntrinsicHeight: "6157",
        framerIntrinsicWidth: "1440",
        framerResponsiveScreen: "",
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { ho as __FramerMetadata__, go as default };
//# sourceMappingURL=dR7_QZw4JLEEEMDqpPt8X_CXBoggZWSGxYNFlSQxutY.HIZJF4IS.mjs.map
