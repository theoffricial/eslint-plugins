/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  pluginsGeneralSidebar: [{
    label: 'Introduction',
    id: "plugins/intro",
    type: 'doc'
  }],
  migrate2typescriptSidebar: [
    {
      type: 'doc',
      id: 'plugins/migrate-to-typescript/getting-started'
    },
    {
      type: "category",
      label: "Rules",
      link: { type: "doc", id: "plugins/migrate-to-typescript/rules/index" },
      items: [
        {
          dirName: "plugins/migrate-to-typescript/rules",
          type: "autogenerated",
        },
      ],
    },
    {
      type: "category",
      label: "Configs",
      items: [
        {
          dirName: "plugins/migrate-to-typescript/configs",
          type: "autogenerated",
        },
      ],
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
