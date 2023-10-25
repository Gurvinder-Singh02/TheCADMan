// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TheCADMan',
  tagline: 'CAD Learning Hub',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pizofreude.github.io',
  // url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/TheCADMan/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pizofreude', // Usually your GitHub org/user name.
  projectName: 'TheCADMan', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages', // Usually gh-pages branch

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // customDocsPath: './website',  // Add the customDocsPath option!!!!! IT DOESNT WORK
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pizofreude/TheCADMan/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pizofreude/TheCADMan/tree/main/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'TheCADMan',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Resources',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/pizofreude/TheCADMan',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
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
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/19436798/pizofreude',
              },
              {
                label: 'GrabCAD',
                href: 'https://grabcad.com/abdul.hafeez.sadon-1',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hafeezhaqq',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/pizofreude/TheCADMan',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TheCADMan. Built with Docusaurus. Maintained by <a href="https://github.com/pizofreude/TheCADMan">Pizofreude</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

// // docusaurus.config.js
// module.exports = {
//   ...config, // Spread the existing config object
//   plugins: [
//     [
//       '@docusaurus/plugin-content-docs',
//       {
//         customDocsPath: './website', // Add the customDocsPath option
//       },
//     ],
//   ],
// };

