"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [3631],
  {
    4736: (e, t, a) => {
      a.d(t, { Z: () => Z });
      var l = a(1461),
        r = a(2784),
        n = a(6277),
        i = a(3982),
        s = a(7963),
        o = a(9817),
        m = a(1077);
      const c = "sidebar_RYHo",
        u = "sidebarItemTitle_sRjx",
        d = "sidebarItemList_uMtB",
        g = "sidebarItem_rygH",
        p = "sidebarItemLink_EKgd",
        h = "sidebarItemLinkActive_hRXJ";
      function v(e) {
        var t = e.sidebar;
        return r.createElement(
          "aside",
          { className: "col col--3" },
          r.createElement(
            "nav",
            {
              className: (0, n.Z)(c, "thin-scrollbar"),
              "aria-label": (0, m.I)({
                id: "theme.blog.sidebar.navAriaLabel",
                message: "Blog recent posts navigation",
                description:
                  "The ARIA label for recent posts in the blog sidebar",
              }),
            },
            r.createElement(
              "div",
              { className: (0, n.Z)(u, "margin-bottom--md") },
              t.title
            ),
            r.createElement(
              "ul",
              { className: (0, n.Z)(d, "clean-list") },
              t.items.map(function (e) {
                return r.createElement(
                  "li",
                  { key: e.permalink, className: g },
                  r.createElement(
                    o.Z,
                    {
                      isNavLink: !0,
                      to: e.permalink,
                      className: p,
                      activeClassName: h,
                    },
                    e.title
                  )
                );
              })
            )
          )
        );
      }
      var E = a(7548);
      function b(e) {
        var t = e.sidebar;
        return r.createElement(
          "ul",
          { className: "menu__list" },
          t.items.map(function (e) {
            return r.createElement(
              "li",
              { key: e.permalink, className: "menu__list-item" },
              r.createElement(
                o.Z,
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
      function f(e) {
        return r.createElement(E.Zo, { component: b, props: e });
      }
      function _(e) {
        var t = e.sidebar,
          a = (0, s.i)();
        return null != t && t.items.length
          ? "mobile" === a
            ? r.createElement(f, { sidebar: t })
            : r.createElement(v, { sidebar: t })
          : null;
      }
      var N = ["sidebar", "toc", "children"];
      function Z(e) {
        var t = e.sidebar,
          a = e.toc,
          s = e.children,
          o = (0, l.Z)(e, N),
          m = t && t.items.length > 0;
        return r.createElement(
          i.Z,
          o,
          r.createElement(
            "div",
            { className: "container margin-vert--lg" },
            r.createElement(
              "div",
              { className: "row" },
              r.createElement(_, { sidebar: t }),
              r.createElement(
                "main",
                {
                  className: (0, n.Z)("col", {
                    "col--7": m,
                    "col--9 col--offset-1": !m,
                  }),
                  itemScope: !0,
                  itemType: "http://schema.org/Blog",
                },
                s
              ),
              a && r.createElement("div", { className: "col col--2" }, a)
            )
          )
        );
      }
    },
    2156: (e, t, a) => {
      a.d(t, { Z: () => i });
      var l = a(2784),
        r = a(1077),
        n = a(7066);
      function i(e) {
        var t = e.metadata,
          a = t.previousPage,
          i = t.nextPage;
        return l.createElement(
          "nav",
          {
            className: "pagination-nav",
            "aria-label": (0, r.I)({
              id: "theme.blog.paginator.navAriaLabel",
              message: "Blog list page navigation",
              description: "The ARIA label for the blog pagination",
            }),
          },
          a &&
            l.createElement(n.Z, {
              permalink: a,
              title: l.createElement(
                r.Z,
                {
                  id: "theme.blog.paginator.newerEntries",
                  description:
                    "The label used to navigate to the newer blog posts page (previous page)",
                },
                "Newer Entries"
              ),
            }),
          i &&
            l.createElement(n.Z, {
              permalink: i,
              title: l.createElement(
                r.Z,
                {
                  id: "theme.blog.paginator.olderEntries",
                  description:
                    "The label used to navigate to the older blog posts page (next page)",
                },
                "Older Entries"
              ),
              isNext: !0,
            })
        );
      }
    },
    2727: (e, t, a) => {
      a.d(t, { Z: () => Z });
      var l = a(2784),
        r = a(6277),
        n = a(1077),
        i = a(9817),
        s = a(77),
        o = a(7239),
        m = a(958),
        c = a(5742),
        u = a(5893),
        d = a(6643);
      function g(e) {
        return e.href
          ? l.createElement(i.Z, e)
          : l.createElement(l.Fragment, null, e.children);
      }
      function p(e) {
        var t = e.author,
          a = t.name,
          r = t.title,
          n = t.url,
          i = t.imageURL,
          s = t.email,
          o = n || (s && "mailto:" + s) || void 0;
        return l.createElement(
          "div",
          { className: "avatar margin-bottom--sm" },
          i &&
            l.createElement(
              g,
              { href: o, className: "avatar__photo-link" },
              l.createElement("img", {
                className: "avatar__photo",
                src: i,
                alt: a,
              })
            ),
          a &&
            l.createElement(
              "div",
              {
                className: "avatar__intro",
                itemProp: "author",
                itemScope: !0,
                itemType: "https://schema.org/Person",
              },
              l.createElement(
                "div",
                { className: "avatar__name" },
                l.createElement(
                  g,
                  { href: o, itemProp: "url" },
                  l.createElement("span", { itemProp: "name" }, a)
                )
              ),
              r &&
                l.createElement(
                  "small",
                  { className: "avatar__subtitle", itemProp: "description" },
                  r
                )
            )
        );
      }
      const h = "authorCol_ljC9",
        v = "imageOnlyAuthorRow_t0d_",
        E = "imageOnlyAuthorCol_Dzki";
      function b(e) {
        var t = e.authors,
          a = e.assets;
        if (0 === t.length) return null;
        var n = t.every(function (e) {
          return !e.name;
        });
        return l.createElement(
          "div",
          {
            className: (0, r.Z)(
              "margin-top--md margin-bottom--sm",
              n ? v : "row"
            ),
          },
          t.map(function (e, t) {
            var i;
            return l.createElement(
              "div",
              { className: (0, r.Z)(!n && "col col--6", n ? E : h), key: t },
              l.createElement(p, {
                author: Object.assign({}, e, {
                  imageURL:
                    null != (i = a.authorsImageUrls[t]) ? i : e.imageURL,
                }),
              })
            );
          })
        );
      }
      const f = "blogPostTitle_tV5U",
        _ = "blogPostData_KwLJ",
        N = "blogPostDetailsFull_loWg";
      function Z(e) {
        var t,
          a,
          g =
            ((a = (0, o.c)().selectMessage),
            function (e) {
              var t = Math.ceil(e);
              return a(
                t,
                (0, n.I)(
                  {
                    id: "theme.blog.post.readingTime.plurals",
                    description:
                      'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
                    message: "One min read|{readingTime} min read",
                  },
                  { readingTime: t }
                )
              );
            }),
          p = (0, s.C)().withBaseUrl,
          h = e.children,
          v = e.frontMatter,
          E = e.assets,
          Z = e.metadata,
          k = e.truncated,
          P = e.isBlogPostPage,
          T = void 0 !== P && P,
          w = Z.date,
          y = Z.formattedDate,
          I = Z.permalink,
          L = Z.tags,
          x = Z.readingTime,
          R = Z.title,
          C = Z.editUrl,
          F = Z.authors,
          A = null != (t = E.image) ? t : v.image,
          U = !T && k,
          B = L.length > 0,
          M = T ? "h1" : "h2";
        return l.createElement(
          "article",
          {
            className: T ? void 0 : "margin-bottom--xl",
            itemProp: "blogPost",
            itemScope: !0,
            itemType: "http://schema.org/BlogPosting",
          },
          l.createElement(
            "header",
            null,
            l.createElement(
              M,
              { className: f, itemProp: "headline" },
              T ? R : l.createElement(i.Z, { itemProp: "url", to: I }, R)
            ),
            l.createElement(
              "div",
              { className: (0, r.Z)(_, "margin-vert--md") },
              l.createElement(
                "time",
                { dateTime: w, itemProp: "datePublished" },
                y
              ),
              void 0 !== x && l.createElement(l.Fragment, null, " \xb7 ", g(x))
            ),
            l.createElement(b, { authors: F, assets: E })
          ),
          A &&
            l.createElement("meta", {
              itemProp: "image",
              content: p(A, { absolute: !0 }),
            }),
          l.createElement(
            "div",
            {
              id: T ? m.blogPostContainerID : void 0,
              className: "markdown",
              itemProp: "articleBody",
            },
            l.createElement(c.Z, null, h)
          ),
          (B || k) &&
            l.createElement(
              "footer",
              { className: (0, r.Z)("row docusaurus-mt-lg", T && N) },
              B &&
                l.createElement(
                  "div",
                  { className: (0, r.Z)("col", { "col--9": U }) },
                  l.createElement(d.Z, { tags: L })
                ),
              T &&
                C &&
                l.createElement(
                  "div",
                  { className: "col margin-top--sm" },
                  l.createElement(u.Z, { editUrl: C })
                ),
              U &&
                l.createElement(
                  "div",
                  { className: (0, r.Z)("col text--right", { "col--3": B }) },
                  l.createElement(
                    i.Z,
                    {
                      to: Z.permalink,
                      "aria-label": (0, n.I)(
                        {
                          message: "Read more about {title}",
                          id: "theme.blog.post.readMoreLabel",
                          description:
                            "The ARIA label for the link to full blog posts from excerpts",
                        },
                        { title: R }
                      ),
                    },
                    l.createElement(
                      "b",
                      null,
                      l.createElement(
                        n.Z,
                        {
                          id: "theme.blog.post.readMore",
                          description:
                            "The label used in blog post item excerpts to link to full blog posts",
                        },
                        "Read More"
                      )
                    )
                  )
                )
            )
        );
      }
    },
    5893: (e, t, a) => {
      a.d(t, { Z: () => d });
      var l = a(2784),
        r = a(1077),
        n = a(211),
        i = a(7896),
        s = a(1461),
        o = a(6277);
      const m = "iconEdit_taBP";
      var c = ["className"];
      function u(e) {
        var t = e.className,
          a = (0, s.Z)(e, c);
        return l.createElement(
          "svg",
          (0, i.Z)(
            {
              fill: "currentColor",
              height: "20",
              width: "20",
              viewBox: "0 0 40 40",
              className: (0, o.Z)(m, t),
              "aria-hidden": "true",
            },
            a
          ),
          l.createElement(
            "g",
            null,
            l.createElement("path", {
              d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z",
            })
          )
        );
      }
      function d(e) {
        var t = e.editUrl;
        return l.createElement(
          "a",
          {
            href: t,
            target: "_blank",
            rel: "noreferrer noopener",
            className: n.k.common.editThisPage,
          },
          l.createElement(u, null),
          l.createElement(
            r.Z,
            {
              id: "theme.common.editThisPage",
              description: "The link label to edit the current page",
            },
            "Edit this page"
          )
        );
      }
    },
    7066: (e, t, a) => {
      a.d(t, { Z: () => i });
      var l = a(2784),
        r = a(6277),
        n = a(9817);
      function i(e) {
        var t = e.permalink,
          a = e.title,
          i = e.subLabel,
          s = e.isNext;
        return l.createElement(
          n.Z,
          {
            className: (0, r.Z)(
              "pagination-nav__link",
              s ? "pagination-nav__link--next" : "pagination-nav__link--prev"
            ),
            to: t,
          },
          i &&
            l.createElement(
              "div",
              { className: "pagination-nav__sublabel" },
              i
            ),
          l.createElement("div", { className: "pagination-nav__label" }, a)
        );
      }
    },
    2321: (e, t, a) => {
      a.d(t, { Z: () => m });
      var l = a(2784),
        r = a(6277),
        n = a(9817);
      const i = "tag_qE9H",
        s = "tagRegular_aHXt",
        o = "tagWithCount_UC8q";
      function m(e) {
        var t = e.permalink,
          a = e.label,
          m = e.count;
        return l.createElement(
          n.Z,
          { href: t, className: (0, r.Z)(i, m ? o : s) },
          a,
          m && l.createElement("span", null, m)
        );
      }
    },
    6643: (e, t, a) => {
      a.d(t, { Z: () => m });
      var l = a(2784),
        r = a(6277),
        n = a(1077),
        i = a(2321);
      const s = "tags_q74f",
        o = "tag_lSC7";
      function m(e) {
        var t = e.tags;
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            "b",
            null,
            l.createElement(
              n.Z,
              {
                id: "theme.tags.tagsListLabel",
                description: "The label alongside a tag list",
              },
              "Tags:"
            )
          ),
          l.createElement(
            "ul",
            { className: (0, r.Z)(s, "padding--none", "margin-left--sm") },
            t.map(function (e) {
              var t = e.label,
                a = e.permalink;
              return l.createElement(
                "li",
                { key: a, className: o },
                l.createElement(i.Z, { label: t, permalink: a })
              );
            })
          )
        );
      }
    },
    7239: (e, t, a) => {
      a.d(t, { c: () => m });
      var l = a(2784),
        r = a(7614),
        n = ["zero", "one", "two", "few", "many", "other"];
      function i(e) {
        return n.filter(function (t) {
          return e.includes(t);
        });
      }
      var s = {
        locale: "en",
        pluralForms: i(["one", "other"]),
        select: function (e) {
          return 1 === e ? "one" : "other";
        },
      };
      function o() {
        var e = (0, r.Z)().i18n.currentLocale;
        return (0, l.useMemo)(
          function () {
            try {
              return (
                (t = e),
                (a = new Intl.PluralRules(t)),
                {
                  locale: t,
                  pluralForms: i(a.resolvedOptions().pluralCategories),
                  select: function (e) {
                    return a.select(e);
                  },
                }
              );
            } catch (l) {
              return (
                console.error(
                  'Failed to use Intl.PluralRules for locale "' +
                    e +
                    '".\nDocusaurus will fallback to the default (English) implementation.\nError: ' +
                    l.message +
                    "\n"
                ),
                s
              );
            }
            var t, a;
          },
          [e]
        );
      }
      function m() {
        var e = o();
        return {
          selectMessage: function (t, a) {
            return (function (e, t, a) {
              var l = e.split("|");
              if (1 === l.length) return l[0];
              l.length > a.pluralForms.length &&
                console.error(
                  "For locale=" +
                    a.locale +
                    ", a maximum of " +
                    a.pluralForms.length +
                    " plural forms are expected (" +
                    a.pluralForms.join(",") +
                    "), but the message contains " +
                    l.length +
                    ": " +
                    e
                );
              var r = a.select(t),
                n = a.pluralForms.indexOf(r);
              return l[Math.min(n, l.length - 1)];
            })(a, t, e);
          },
        };
      }
    },
  },
]);
