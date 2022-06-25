"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [8708],
  {
    876: (e, t, n) => {
      n.d(t, { Zo: () => m, kt: () => d });
      var o = n(2784);
      function r(e, t, n) {
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
      function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function a(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      var l = o.createContext({}),
        p = function (e) {
          var t = o.useContext(l),
            n = t;
          return e && (n = "function" == typeof e ? e(t) : s(s({}, t), e)), n;
        },
        m = function (e) {
          var t = p(e.components);
          return o.createElement(l.Provider, { value: t }, e.children);
        },
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return o.createElement(o.Fragment, {}, t);
          },
        },
        u = o.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            i = e.originalType,
            l = e.parentName,
            m = a(e, ["components", "mdxType", "originalType", "parentName"]),
            u = p(n),
            d = r,
            f = u["".concat(l, ".").concat(d)] || u[d] || c[d] || i;
          return n
            ? o.createElement(f, s(s({ ref: t }, m), {}, { components: n }))
            : o.createElement(f, s({ ref: t }, m));
        });
      function d(e, t) {
        var n = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var i = n.length,
            s = new Array(i);
          s[0] = u;
          var a = {};
          for (var l in t) hasOwnProperty.call(t, l) && (a[l] = t[l]);
          (a.originalType = e),
            (a.mdxType = "string" == typeof e ? e : r),
            (s[1] = a);
          for (var p = 2; p < i; p++) s[p] = n[p];
          return o.createElement.apply(null, s);
        }
        return o.createElement.apply(null, n);
      }
      u.displayName = "MDXCreateElement";
    },
    1660: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => m,
          contentTitle: () => l,
          default: () => d,
          frontMatter: () => a,
          metadata: () => p,
          toc: () => c,
        });
      var o = n(7896),
        r = n(1461),
        i = (n(2784), n(876)),
        s = ["components"],
        a = {
          id: "no-commonjs-exports",
          title: "no-commonjs-exports",
          tags: ["No CommonJS"],
        },
        l = void 0,
        p = {
          unversionedId:
            "plugins/migrate-to-typescript/rules/no-commonjs-exports",
          id: "plugins/migrate-to-typescript/rules/no-commonjs-exports",
          title: "no-commonjs-exports",
          description: "Rule Details",
          source:
            "@site/docs/plugins/migrate-to-typescript/rules/no-commonjs-exports.md",
          sourceDirName: "plugins/migrate-to-typescript/rules",
          slug: "/plugins/migrate-to-typescript/rules/no-commonjs-exports",
          permalink:
            "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/no-commonjs-exports",
          draft: !1,
          tags: [
            {
              label: "No CommonJS",
              permalink: "/eslint-extensions/docs/tags/no-common-js",
            },
          ],
          version: "current",
          frontMatter: {
            id: "no-commonjs-exports",
            title: "no-commonjs-exports",
            tags: ["No CommonJS"],
          },
          sidebar: "migrate2typescriptSidebar",
          previous: {
            title: "no-commonjs-dynamic-require",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/no-commonjs-dynamic-require",
          },
          next: {
            title: "no-commonjs-module-exports",
            permalink:
              "/eslint-extensions/docs/plugins/migrate-to-typescript/rules/no-commonjs-module-exports",
          },
        },
        m = {},
        c = [
          { value: "Rule Details", id: "rule-details", level: 2 },
          { value: "When to use it", id: "when-to-use-it", level: 3 },
          {
            value: "When <em>not</em> to use it",
            id: "when-not-to-use-it",
            level: 3,
          },
          {
            value: "How to use it manually (not as part of a config)",
            id: "how-to-use-it-manually-not-as-part-of-a-config",
            level: 3,
          },
          { value: "Credit \ud83d\ude4f", id: "credit-", level: 4 },
        ],
        u = { toc: c };
      function d(e) {
        var t = e.components,
          n = (0, r.Z)(e, s);
        return (0, i.kt)(
          "wrapper",
          (0, o.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)("h2", { id: "rule-details" }, "Rule Details"),
          (0, i.kt)(
            "p",
            null,
            "Disallows invocation of commonjs ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "exports"),
            " keyword."
          ),
          (0, i.kt)(
            "p",
            null,
            "Prefer the ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "es"),
            " modules export syntax ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "export"),
            "\nover ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "commonjs"),
            " modules export syntax ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "exports"),
            "."
          ),
          (0, i.kt)(
            "p",
            null,
            "Examples of ",
            (0, i.kt)("strong", { parentName: "p" }, "correct"),
            " code for this rule \u2705"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              "// correct \u2705\nexport const x = 1;\nexport function myFunc() {}\n// default\nexport default = {}\n// TS exclusive examples\nexport interface INum {\n  num: number;\n}\nexport enum EMyEnum {\n  First = 1,\n}\n// typescript wrapper for commonjs export\n// (this is not a native ESM syntax!)\nexport = {}\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            "Examples of ",
            (0, i.kt)("strong", { parentName: "p" }, "incorrect"),
            " code for this rule \u26d4\ufe0f"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              '// incorrect \u26d4\ufe0f\nexports.x = 1;\nexports.x = someVar;\nexports.x = function myFun() => {};\nexports = () => {};\nexports = "primitive";\nexports = someVar;\n'
            )
          ),
          (0, i.kt)("h3", { id: "when-to-use-it" }, "When to use it"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "When prefer the ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "es"),
              " modules style ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "export"),
              "s over ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "exports = { }"),
              "."
            ),
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "While migrating your project/codebase to ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "typescript"),
              " from ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "javascript"),
              "."
            )
          ),
          (0, i.kt)(
            "h3",
            { id: "when-not-to-use-it" },
            "When ",
            (0, i.kt)("em", { parentName: "h3" }, "not"),
            " to use it"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              { parentName: "ul" },
              "On projects that using ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "commonjs"),
              " modules only, commonly these projects are ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "nodejs"),
              " over ",
              (0, i.kt)("inlineCode", { parentName: "li" }, "javascript"),
              " only."
            )
          ),
          (0, i.kt)(
            "h3",
            { id: "how-to-use-it-manually-not-as-part-of-a-config" },
            "How to use it manually (not as part of a config)"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-json" },
              '{\n    // eslintrc.json\n    ...,\n    "rules": {\n        "migrate-to-typescript/no-commonjs-exports": "warn"\n    },\n    ...more properties\n}\n// set to "warn" to push your project into full migration to esm\n// set to "error" when your project is fully esm\n'
            )
          ),
          (0, i.kt)("h4", { id: "credit-" }, "Credit \ud83d\ude4f"),
          (0, i.kt)(
            "sup",
            null,
            (0, i.kt)(
              "p",
              null,
              "Inspired with \ud83d\udc9c ",
              "\xa0",
              (0, i.kt)(
                "a",
                {
                  parentName: "p",
                  href: "https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md",
                },
                "from eslint-plugin-import"
              )
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
