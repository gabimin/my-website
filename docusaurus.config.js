// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "gabriela",
  tagline: "SOFTWARE DEVELOPMENT",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://gabimin.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/my-website/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "gabimin", // Usually your GitHub org/user name.
  projectName: "my-website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true, // o false, dependiendo de si quieres que tus URLs terminen con una barra

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
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
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/gabimin/my-website/edit/main/",
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/gabimin/my-website/edit/main/",

          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Home",
        logo: {
          alt: "Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docSidebar",
            position: "left",
            label: "Learning",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/gabimin",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://www.linkedin.com/in/gabimin/",
            label: "LinkedIn",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",

        copyright: `Copyright © ${new Date().getFullYear()}`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

  
  (module.exports = config); // Asegúrate de exportar correctamente la configuración
