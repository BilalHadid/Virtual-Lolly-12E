module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "lollypop",
        fieldName: "get_lolly",
        url: "http://localhost:8888/.netlify/functions/Addlolly",
      },
    },
  ],
};
