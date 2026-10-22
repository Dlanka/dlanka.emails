// src/config/site.ts
// ─────────────────────────────────────────────────────────────────
// Central configuration for Darshaka Lanka portfolio.
// Update contact details, social links, and URLs here.
// ─────────────────────────────────────────────────────────────────

export const siteConfig = {
  brand: {
    name: "Darshaka Lanka",
    role: "Senior Frontend & Email Developer",
    tagline: "Email experiences built for the inbox.",
    description:
      "Freelance email developer specialising in MJML, responsive HTML emails, " +
      "email signatures, and pixel-perfect design-to-HTML implementation.",
    mainPortfolio: "https://darshaka-lanka.pages.dev/",
  },

  contact: {
    email: "dwlanka.pro@gmail.com",
    mainPortfolio: "https://darshaka-lanka.pages.dev/",
    upwork: "https://www.upwork.com/freelancers/~01ec7a2813e79f8a68",
    github: "https://github.com/Dlanka",
    linkedin: "https://www.linkedin.com/in/darshaka-lanka-2150b8102",
  },

  projects: [
    {
      id: "orbitflow-launch",
      title: "OrbitFlow — Product Launch Email",
      category: "Marketing Email",
      description:
        "A full-featured SaaS product-launch email built with MJML. " +
        "Responsive single-column layout, feature highlights, and accessible CTA buttons.",
      tech: ["MJML", "HTML", "Inline CSS", "Responsive"],
      sourceFile: "src/emails/orbitflow-launch.mjml",
      distFile: "dist/emails/orbitflow-launch.html",
      previewPath: "/preview/orbitflow",
      accentColor: "#4f46e5",
      tags: ["MJML", "SaaS", "Product Launch", "Responsive"],
    },
    {
      id: "northstar-signature",
      title: "Northstar Studio — Email Signature",
      category: "HTML Signature",
      description:
        "A compact, professional HTML email signature using table-based layout " +
        "and inline CSS. Compatible with Gmail and Outlook. Includes social links and branding.",
      tech: ["HTML", "Inline CSS", "Tables", "Email-safe"],
      sourceFile: "src/signatures/northstar-signature.html",
      distFile: "dist/signatures/northstar-signature.html",
      previewPath: "/preview/northstar",
      accentColor: "#0891b2",
      tags: ["Signature", "Corporate", "Gmail", "HTML"],
    },
    {
      id: "ingoude-signature",
      title: "Ingoude Company — Corporate Signature",
      category: "HTML Signature",
      description:
        "Modern Canva-style corporate email signature with decorative blue banner, " +
        "circular avatar framing, custom icons, and email-safe HTML table structure.",
      tech: ["HTML", "Inline CSS", "Canva to HTML", "Email-safe"],
      sourceFile: "src/signatures/ingoude-signature.html",
      distFile: "dist/signatures/ingoude-signature.html",
      previewPath: "/preview/ingoude",
      accentColor: "#0050c8",
      tags: ["Signature", "Canva to HTML", "Corporate", "Responsive"],
    },
  ],
} as const;

export type Project = (typeof siteConfig.projects)[number];
