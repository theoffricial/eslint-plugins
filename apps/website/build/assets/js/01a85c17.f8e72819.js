"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [4013],
  {
    4736: (e, t, a) => {
      a.d(t, { Z: () => _ });
      var r = a(1461),
        n = a(2784),
        l = a(6277),
        s = a(3982),
        i = a(7963),
        c = a(9817),
        m = a(1077);
      const o = "sidebar_RYHo",
        u = "sidebarItemTitle_sRjx",
        g = "sidebarItemList_uMtB",
        d = "sidebarItem_rygH",
        E = "sidebarItemLink_EKgd",
        b = "sidebarItemLinkActive_hRXJ";
      function p(e) {
        var t = e.sidebar;
        return n.createElement(
          "aside",
          { className: "col col--3" },
          n.createElement(
            "nav",
            {
              className: (0, l.Z)(o, "thin-scrollbar"),
              "aria-label": (0, m.I)({
                id: "theme.blog.sidebar.navAriaLabel",
                message: "Blog recent posts navigation",
                description:
                  "The ARIA label for recent posts in the blog sidebar",
              }),
            },
            n.createElement(
              "div",
              { className: (0, l.Z)(u, "margin-bottom--md") },
              t.title
            ),
            n.createElement(
              "ul",
              { className: (0, l.Z)(g, "clean-list") },
              t.items.map(function (e) {
                return n.createElement(
                  "li",
                  { key: e.permalink, className: d },
                  n.createElement(
                    c.Z,
                    {
                      isNavLink: !0,
                      to: e.permalink,
                      className: E,
                      activeClassName: b,
                    },
                    e.title
                  )
                );
              })
            )
          )
        );
      }
      var v = a(7548);
      function f(e) {
        var t = e.sidebar;
        return n.createElement(
          "ul",
          { className: "menu__list" },
          t.items.map(function (e) {
            return n.createElement(
              "li",
              { key: e.permalink, className: "menu__list-item" },
              n.createElement(
                c.Z,
                {
                  isNavLink: !0,
                  to: e.permalink,
                  className: "menu__link",
                  activeClassName: "menu__link--active",
                },
                e.title
              )
            );
          })
        );
      }
      function h(e) {
        return n.createElement(v.Zo, { component: f, props: e });
      }
      function k(e) {
        var t = e.sidebar,
          a = (0, i.i)();
        return null != t && t.items.length
          ? "mobile" === a
            ? n.createElement(h, { sidebar: t })
            : n.createElement(p, { sidebar: t })
          : null;
      }
      var N = ["sidebar", "toc", "children"];
      function _(e) {
        var t = e.sidebar,
          a = e.toc,
          i = e.children,
          c = (0, r.Z)(e, N),
          m = t && t.items.length > 0;
        return n.createElement(
          s.Z,
          c,
          n.createElement(
            "div",
            { className: "container margin-vert--lg" },
            n.createElement(
              "div",
              { className: "row" },
              n.createElement(k, { sidebar: t }),
              n.createElement(
                "main",
                {
                  className: (0, l.Z)("col", {
                    "col--7": m,
                    "col--9 col--offset-1": !m,
                  }),
                  itemScope: !0,
                  itemType: "http://schema.org/Blog",
                },
                i
              ),
              a && n.createElement("div", { className: "col col--2" }, a)
            )
          )
        );
      }
    },
    3938: (e, t, a) => {
      a.r(t), a.d(t, { default: () => u });
      var r = a(2784),
        n = a(6277),
        l = a(4103),
        s = a(328),
        i = a(211),
        c = a(4736),
        m = a(2861),
        o = a(4390);
      function u(e) {
        var t = e.tags,
          a = e.sidebar,
          u = (0, l.M)();
        return r.createElement(
          s.FG,
          {
            className: (0, n.Z)(
              i.k.wrapper.blogPages,
              i.k.page.blogTagsListPage
            ),
          },
          r.createElement(s.d, { title: u }),
          r.createElement(o.Z, { tag: "blog_tags_list" }),
          r.createElement(
            c.Z,
            { sidebar: a },
            r.createElement("h1", null, u),
            r.createElement(m.Z, { tags: t })
          )
        );
      }
    },
    2321: (e, t, a) => {
      a.d(t, { Z: () => m });
      var r = a(2784),
        n = a(6277),
        l = a(9817);
      const s = "tag_qE9H",
        i = "tagRegular_aHXt",
        c = "tagWithCount_UC8q";
      function m(e) {
        var t = e.permalink,
          a = e.label,
          m = e.count;
        return r.createElement(
          l.Z,
          { href: t, className: (0, n.Z)(s, m ? c : i) },
          a,
          m && r.createElement("span", null, m)
        );
      }
    },
    2861: (e, t, a) => {
      a.d(t, { Z: () => c });
      var r = a(2784),
        n = a(4103),
        l = a(2321);
      const s = "tag_YYDp";
      function i(e) {
        var t = e.letterEntry;
        return r.createElement(
          "article",
          null,
          r.createElement("h2", null, t.letter),
          r.createElement(
            "ul",
            { className: "padding--none" },
            t.tags.map(function (e) {
              return r.createElement(
                "li",
                { key: e.permalink, className: s },
                r.createElement(l.Z, e)
              );
            })
          ),
          r.createElement("hr", null)
        );
      }
      function c(e) {
        var t = e.tags,
          a = (0, n.P)(t);
        return r.createElement(
          "section",
          { className: "margin-vert--lg" },
          a.map(function (e) {
            return r.createElement(i, { key: e.letter, letterEntry: e });
          })
        );
      }
    },
    4103: (e, t, a) => {
      a.d(t, { M: () => n, P: () => l });
      var r = a(1077),
        n = function () {
          return (0, r.I)({
            id: "theme.tags.tagsPageTitle",
            message: "Tags",
            description: "The title of the tag list page",
          });
        };
      function l(e) {
        var t = {};
        return (
          Object.values(e).forEach(function (e) {
            var a = (function (e) {
              return e[0].toUpperCase();
            })(e.label);
            null != t[a] || (t[a] = []), t[a].push(e);
          }),
          Object.entries(t)
            .sort(function (e, t) {
              var a = e[0],
                r = t[0];
              return a.localeCompare(r);
            })
            .map(function (e) {
              return {
                letter: e[0],
                tags: e[1].sort(function (e, t) {
                  return e.label.localeCompare(t.label);
                }),
              };
            })
        );
      }
    },
  },
]);
