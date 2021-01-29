module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GET_LOLLIES",
        fieldName: "get_lollies",
        url: "http://localhost:8888/.netlify/functions/Addlolly",
      },
    },
  ],
};
