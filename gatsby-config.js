module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "lollypop",
        fieldName: "get_lolly",
        url:
          "https://priceless-kirch-c43f8d.netlify.app/.netlify/functions/Addlolly",
      },
    },
  ],
};
