const fs = require("fs");
const { buildSchema, buildClientSchema } = require("graphql");

module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "allAuthors",
        fieldName: "all_authors",
        url: "http://localhost:8888/.netlify/functions/Addlolly",
        batch: true,
      },
    },
  ],
};
