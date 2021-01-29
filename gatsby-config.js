module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "lollypop",
        fieldName: "get_lolly",
        url: "/.netlify/functions/Addlolly",
      },
    },
  ],
};
