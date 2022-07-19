// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ESLint Extensions",
  tagline:
    "An opinionated set of ESLint extensions that will help you spread high-standards",
  url: "https://uniqorg.github.io",
  baseUrl: "/eslint-plugins/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/eslint-favicon.512x512.png",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "uniqorg", // Usually your GitHub org/user name.
  projectName: "eslint-plugins", // Usually your repo name.
  deploymentBranch: "gh-pages-website-deployment-branch",
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          sidebarPath: require.resolve("./sidebars/main-sidebars.js"),
          breadcrumbs: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "uniqorg/eslint",
        logo: {
          alt: "ESLint Logo",
          src: "img/eslint-logo.svg",
        },
        items: [
          {
            label: "Intro to Plugins",
            type: "docSidebar",
            position: "left",
            sidebarId: "pluginsGeneralSidebar",
          },
          {
            label: "Plugins List",
            type: "dropdown",
            position: "left",
            items: [
              {
                type: "doc",
                label: "migrate-to-typescript",
                docId: "plugins/migrate-to-typescript/intro",
              },
            ],
          },
          // {
          //   label: 'Configs',
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          // },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'left',
          //   dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          //   dropdownActiveClassDisabled: true,
          // },
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Plugins",
                to: "/docs/plugins/intro",
              },
              // {
              //   label: 'Configs (coming soon..)',
              //   to: '/docs/plugins/intro',
              // },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/uniqorg/eslint-plugins",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} uniqorg, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
