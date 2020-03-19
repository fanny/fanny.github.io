module.exports = {
  title: 'Fanny Vieira',
  tagline: 'Colector of interesting links, OSS contributor, software developer, and music lover.',
  url: 'https://fanny.github.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'fanny',
  projectName: 'fanny.github.io',
  themeConfig: {
    navbar: {
      title: 'Fanny Vieira',
      links: [
        {
          to: 'docs/resume',
          activeBasePath: 'resume',
          label: 'Resume',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'docs/bucket-list', label: 'Bucket List', position: 'left'},
        {
          href: 'https://github.com/fanny',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Professional',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/fanny-vieira/',
            },
            {
              label: 'Spectrum Chat',
              href: 'https://spectrum.chat/users/fannyvieira',
            },
            {
              label: 'Github',
              href: 'https://github.com/fanny',
            },
            {
              label: 'Dev.To',
              href: 'https://dev.to/fannyvieira',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@fannyvieira',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/fannyvieiira',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/fannyvieiira',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/fanny.vieiira/',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          postsPerPage: 5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
