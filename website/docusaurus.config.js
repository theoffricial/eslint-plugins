// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Migrate to TypeScript',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/eslint-favicon.512x512.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'uniqorg', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'migrate-to-typescript-plugin',
        logo: {
          alt: 'ESLint Logo',
          src: 'img/eslint-logo.svg',
        },
        items: [
          {
            label: 'Docs',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                label: 'Rules',
                type: 'doc',
                docId: 'rules/intro',
              },
              {
                type: 'doc',
                label: 'Configs',
                docId: 'configs/intro'
              },
            ]
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Docs',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     // {
      //     //   title: 'Community',
      //     //   items: [
      //     //     {
      //     //       label: 'Stack Overflow',
      //     //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //     //     },
      //     //     {
      //     //       label: 'Discord',
      //     //       href: 'https://discordapp.com/invite/docusaurus',
      //     //     },
      //     //     {
      //     //       label: 'Twitter',
      //     //       href: 'https://twitter.com/docusaurus',
      //     //     },
      //     //   ],
      //     // },
      //     // {
      //     //   title: 'More',
      //     //   items: [
      //     //     {
      //     //       label: 'Blog',
      //     //       to: '/blog',
      //     //     },
      //     //     {
      //     //       label: 'GitHub',
      //     //       href: 'https://github.com/facebook/docusaurus',
      //     //     },
      //     //   ],
      //     // },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Migrate to Typescript, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
