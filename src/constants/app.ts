const appHead = {
  defaultTitle: "Beon",
  titleTemplate: "Beon - %s",
  openGraph: {
    title: "Beon",
    description: "Beon Web App Platform",
    locale: "en_US",
    site_name: "Beon - Platform",
    url: "Beon - Platform",
  },
  additionalMetaTags: [
    {
      name: "description",
      content: "Beon Platform",
    },
    { name: "theme-color", content: "#b59916" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "msapplication-navbutton-color", content: "#b59916" },
    { name: "format-detection", content: "telephone=no" },
    { name: "HandheldFriendly", content: "true" },
    { name: "robots", content: "noindex,follow" },
  ],
};

const today = new Date();

export { appHead, today };
