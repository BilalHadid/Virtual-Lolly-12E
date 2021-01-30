module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "allAuthors",
        fieldName: "get_lollies",
        url: "http://localhost:8888/.netlify/functions/Addlolly",
        refetchInterval: 60,
      },
    },
  ],
};
