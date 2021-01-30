module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "allAuthors",
        fieldName: "get_lollies",
        url:
          "https://virtual-lolly-pop.netlify.app/.netlify/functions/Addlolly",
        refetchInterval: 60,
      },
    },
  ],
};
