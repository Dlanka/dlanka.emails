// src/config/site.ts
// ─────────────────────────────────────────────────────────────────
// Central configuration for Madebywimu portfolio.
// Update contact details, social links, and URLs here.
// ─────────────────────────────────────────────────────────────────

export const siteConfig = {
  brand: {
    name: 'Madebywimu',
    tagline: 'Email experiences built for the inbox.',
    description:
      'Freelance email developer specialising in MJML, responsive HTML emails, ' +
      'email signatures, and pixel-perfect design-to-HTML implementation.',
  },

  contact: {
    email: 'hello@madebywimu.com',       // Replace with your real address
    upwork: 'https://www.upwork.com/freelancers/~yourprofile',  // Replace
    github: 'https://github.com/madebywimu',                    // Replace
    twitter: 'https://twitter.com/madebywimu',                  // Replace
    linkedin: 'https://linkedin.com/in/madebywimu',             // Replace
  },

  projects: [
    {
      id: 'orbitflow-launch',
      title: 'OrbitFlow — Product Launch Email',
      category: 'Marketing Email',
      description:
        'A full-featured SaaS product-launch email built with MJML. ' +
        'Responsive single-column layout, feature highlights, and accessible CTA buttons.',
      tech: ['MJML', 'HTML', 'Inline CSS', 'Responsive'],
      sourceFile: 'src/emails/orbitflow-launch.mjml',
      distFile: 'dist/emails/orbitflow-launch.html',
      previewPath: '/preview/orbitflow',
      accentColor: '#4f46e5',
      tags: ['MJML', 'SaaS', 'Product Launch', 'Responsive'],
    },
    {
      id: 'northstar-signature',
      title: 'Northstar Studio — Email Signature',
      category: 'HTML Signature',
      description:
        'A compact, professional HTML email signature using table-based layout ' +
        'and inline CSS. Compatible with Gmail and Outlook. Includes social links and branding.',
      tech: ['HTML', 'Inline CSS', 'Tables', 'Email-safe'],
      sourceFile: 'src/signatures/northstar-signature.html',
      distFile: 'dist/signatures/northstar-signature.html',
      previewPath: '/preview/northstar',
      accentColor: '#0891b2',
      tags: ['Signature', 'Corporate', 'Gmail', 'HTML'],
    },
  ],
} as const;

export type Project = (typeof siteConfig.projects)[number];

