module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "LollyGet",
        fieldName: "lolly_get",
        url: "http://localhost:8888/.netlify/functions/Addlolly",
      },
    },
  ],
};
