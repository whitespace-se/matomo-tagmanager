module.exports = {
  siteMetadata: {
    title: "Matomo tagmanager",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-matomo-tagmanager",
      options: {
        containerId: "CNziL8XS",
        domain: "whitespace.analys.co",

        // Include MTM in development.
        //
        // Defaults to false meaning MTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before MTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        // defaultDataLayer: { platform: "gatsby" },

        // Specify optional MTM environment details.
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
  ],
};
