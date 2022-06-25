"use strict";
(self.webpackChunksite = self.webpackChunksite || []).push([
  [490],
  {
    242: (e, t, a) => {
      a.r(t), a.d(t, { default: () => d });
      var s = a(2784),
        l = a(6277),
        r = a(1077),
        n = a(7239),
        g = a(328),
        o = a(211),
        c = a(9817),
        i = a(4736),
        m = a(2727),
        u = a(2156),
        p = a(4390);
      function d(e) {
        var t,
          a = e.tag,
          d = e.items,
          h = e.sidebar,
          b = e.listMetadata,
          f =
            ((t = (0, n.c)().selectMessage),
            function (e) {
              return t(
                e,
                (0, r.I)(
                  {
                    id: "theme.blog.post.plurals",
                    description:
                      'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
                    message: "One post|{count} posts",
                  },
                  { count: e }
                )
              );
            }),
          E = (0, r.I)(
            {
              id: "theme.blog.tagTitle",
              description: "The title of the page for a blog tag",
              message: '{nPosts} tagged with "{tagName}"',
            },
            { nPosts: f(a.count), tagName: a.label }
          );
        return s.createElement(
          g.FG,
          {
            className: (0, l.Z)(
              o.k.wrapper.blogPages,
              o.k.page.blogTagPostListPage
            ),
          },
          s.createElement(g.d, { title: E }),
          s.createElement(p.Z, { tag: "blog_tags_posts" }),
          s.createElement(
            i.Z,
            { sidebar: h },
            s.createElement(
              "header",
              { className: "margin-bottom--xl" },
              s.createElement("h1", null, E),
              s.createElement(
                c.Z,
                { href: a.allTagsPath },
                s.createElement(
                  r.Z,
                  {
                    id: "theme.tags.tagsPageLink",
                    description:
                      "The label of the link targeting the tag list page",
                  },
                  "View All Tags"
                )
              )
            ),
            d.map(function (e) {
              var t = e.content;
              return s.createElement(
                m.Z,
                {
                  key: t.metadata.permalink,
                  frontMatter: t.frontMatter,
                  assets: t.assets,
                  metadata: t.metadata,
                  truncated: !0,
                },
                s.createElement(t, null)
              );
            }),
            s.createElement(u.Z, { metadata: b })
          )
        );
      }
    },
  },
]);
