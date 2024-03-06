const appHead = {
  defaultTitle: "Resellerindo",
  titleTemplate: "Reserllerindo - %s",
  openGraph: {
    title: "Resellerindo",
    description: "Resellerindo Web App Platform",
    locale: "en_US",
    site_name: "Resellerindo - Platform",
    url: "Resellerindo - Platform",
  },
  additionalMetaTags: [
    {
      name: "description",
      content: "Resellerindo Platform",
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
