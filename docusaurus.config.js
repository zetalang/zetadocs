const lightCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Zetalang',
  tagline: "Zeta is a programming language designed for CLI applications",
  url: 'https://zetalang.github.io/',
  baseUrl: '/zetadocs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'zetalang', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Zeta language',
      logo: {
        alt: 'My Site Logo',
        src: '/img/logo.svg',
      },
      
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/wY9NsfGFDP',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/zetalang',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/zetalang/zeta',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zeta Lang. Powered by docusaurus`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/zetalang/docs/edit/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
