"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [4869],
  {
    876: (t, e, n) => {
      n.d(e, { Zo: () => c, kt: () => g });
      var r = n(2784);
      function i(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function a(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? a(Object(n), !0).forEach(function (e) {
                i(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      function s(t, e) {
        if (null == t) return {};
        var n,
          r,
          i = (function (t, e) {
            if (null == t) return {};
            var n,
              r,
              i = {},
              a = Object.keys(t);
            for (r = 0; r < a.length; r++)
              (n = a[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (i[n] = t[n]));
        }
        return i;
      }
      var p = r.createContext({}),
        l = function (t) {
          var e = r.useContext(p),
            n = e;
          return t && (n = "function" == typeof t ? t(e) : o(o({}, e), t)), n;
        },
        c = function (t) {
          var e = l(t.components);
          return r.createElement(p.Provider, { value: e }, t.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (t) {
            var e = t.children;
            return r.createElement(r.Fragment, {}, e);
          },
        },
        d = r.forwardRef(function (t, e) {
          var n = t.components,
            i = t.mdxType,
            a = t.originalType,
            p = t.parentName,
            c = s(t, ["components", "mdxType", "originalType", "parentName"]),
            d = l(n),
            g = i,
            y = d["".concat(p, ".").concat(g)] || d[g] || u[g] || a;
          return n
            ? r.createElement(y, o(o({ ref: e }, c), {}, { components: n }))
            : r.createElement(y, o({ ref: e }, c));
        });
      function g(t, e) {
        var n = arguments,
          i = e && e.mdxType;
        if ("string" == typeof t || i) {
          var a = n.length,
            o = new Array(a);
          o[0] = d;
          var s = {};
          for (var p in e) hasOwnProperty.call(e, p) && (s[p] = e[p]);
          (s.originalType = t),
            (s.mdxType = "string" == typeof t ? t : i),
            (o[1] = s);
          for (var l = 2; l < a; l++) o[l] = n[l];
          return r.createElement.apply(null, o);
        }
        return r.createElement.apply(null, n);
      }
      d.displayName = "MDXCreateElement";
    },
    9379: (t, e, n) => {
      n.r(e),
        n.d(e, {
          assets: () => c,
          contentTitle: () => p,
          default: () => g,
          frontMatter: () => s,
          metadata: () => l,
          toc: () => u,
        });
      var r = n(7896),
        i = n(1461),
        a = (n(2784), n(876)),
        o = ["components"],
        s = {
          sidebar_position: 1,
          displayed_sidebar: "migrate2typescriptSidebar",
        },
        p = "Tutorial Intro",
        l = {
          unversionedId: "plugins/migrate-to-typescript/intro",
          id: "plugins/migrate-to-typescript/intro",
          title: "Tutorial Intro",
          description:
            "Let's discover eslint-plugin-migrate-to-typescript in less than 5 minutes.",
          source: "@site/docs/plugins/migrate-to-typescript/intro.md",
          sourceDirName: "plugins/migrate-to-typescript",
          slug: "/plugins/migrate-to-typescript/intro",
          permalink:
            "/eslint-extensions/docs/plugins/migrate-to-typescript/intro",
          draft: !1,
          tags: [],
          version: "current",
          sidebarPosition: 1,
          frontMatter: {
            sidebar_position: 1,
            displayed_sidebar: "migrate2typescriptSidebar",
          },
          sidebar: "migrate2typescriptSidebar",
        },
        c = {},
        u = [
          { value: "Getting Started", id: "getting-started", level: 2 },
          { value: "What you&#39;ll need", id: "what-youll-need", level: 3 },
          {
            value: "Add plugin to your existing eslintrc",
            id: "add-plugin-to-your-existing-eslintrc",
            level: 2,
          },
        ],
        d = { toc: u };
      function g(t) {
        var e = t.components,
          n = (0, i.Z)(t, o);
        return (0, a.kt)(
          "wrapper",
          (0, r.Z)({}, d, n, { components: e, mdxType: "MDXLayout" }),
          (0, a.kt)("h1", { id: "tutorial-intro" }, "Tutorial Intro"),
          (0, a.kt)(
            "p",
            null,
            "Let's discover ",
            (0, a.kt)(
              "inlineCode",
              { parentName: "p" },
              "eslint-plugin-migrate-to-typescript"
            ),
            " in ",
            (0, a.kt)("strong", { parentName: "p" }, "less than 5 minutes"),
            "."
          ),
          (0, a.kt)("h2", { id: "getting-started" }, "Getting Started"),
          (0, a.kt)(
            "p",
            null,
            "Get started by ",
            (0, a.kt)(
              "strong",
              { parentName: "p" },
              "install plugin in your project"
            ),
            "."
          ),
          (0, a.kt)(
            "p",
            null,
            "with ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "npm")
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "# eslint-plugins depends on (peer-deps) your\n# project to have eslint and @typescript-eslint/parser\nnpm install --save-dev eslint @typescript-eslint/parser\nnpm install --save-dev eslint-plugin-migrate-to-typescript\n"
            )
          ),
          (0, a.kt)(
            "p",
            null,
            "Or with ",
            (0, a.kt)("inlineCode", { parentName: "p" }, "yarn")
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-sh" },
              "yarn add -D eslint @typescript-eslint/parser\nyarn add -D eslint-plugin-migrate-to-typescript\n"
            )
          ),
          (0, a.kt)("h3", { id: "what-youll-need" }, "What you'll need"),
          (0, a.kt)(
            "ul",
            null,
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "Using ",
              (0, a.kt)(
                "inlineCode",
                { parentName: "li" },
                "@typescript-eslint/parser"
              ),
              " as your ",
              (0, a.kt)("inlineCode", { parentName: "li" }, "eslint"),
              " parser."
            ),
            (0, a.kt)(
              "li",
              { parentName: "ul" },
              "depends on ",
              (0, a.kt)(
                "a",
                { parentName: "li", href: "https://nodejs.org/en/download/" },
                "Node.js"
              ),
              ", supported versions for ",
              (0, a.kt)(
                "inlineCode",
                { parentName: "li" },
                "@typescript-eslint/parser"
              ),
              " are:"
            )
          ),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-json" },
              '// from @typescript-eslint/parser 5.x.x package.json\n  "engines": {\n    "node": "^12.22.0 || ^14.17.0 || >=16.0.0"\n  },\n'
            )
          ),
          (0, a.kt)(
            "h2",
            { id: "add-plugin-to-your-existing-eslintrc" },
            "Add plugin to your existing eslintrc"
          ),
          (0, a.kt)("p", null, "For npm configuration"),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-json" },
              '// package.json\n{\n  ...,\n  "eslintConfig": {\n    ...,\n    "parser": "@typescript-eslint/parser",\n    "plugins": [..., "migrate-to-typescript"],\n    "extends": [\n      ...,\n      // for projects that starting/in the middle of migration to typescript\n      "migrate-to-typescript/js-with-ts",\n      // or\n      // for projects that are fully working with typescript\n      "migrate-to-typescript/ts-only",\n      // or\n      // for projects (mostly front-end) that written with js and using ts for type-checking or type-generating\n      "migrate-to-typescript/js-only-and-ts-for-type-checking",\n    ]\n  }\n}\n'
            )
          ),
          (0, a.kt)("p", null, "For eslintrc.json"),
          (0, a.kt)(
            "pre",
            null,
            (0, a.kt)(
              "code",
              { parentName: "pre", className: "language-json" },
              '// eslintrc.json\n{\n  ...,\n  "parser": "@typescript-eslint/parser",\n  "plugins": [..., "migrate-to-typescript"],\n  "extends": [\n    ...,\n    // for projects that starting/in the middle of migration to typescript\n    "migrate-to-typescript/js-with-ts",\n    // or\n    // for projects that are fully working with typescript\n    "migrate-to-typescript/ts-only",\n    // or\n    // for projects (mostly front-end) that written with js and using ts for type-checking or type-generating\n    "migrate-to-typescript/js-only-and-ts-for-type-checking",\n  ],\n  ...\n}\n'
            )
          )
        );
      }
      g.isMDXComponent = !0;
    },
  },
]);
