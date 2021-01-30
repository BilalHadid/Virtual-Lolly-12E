const { ApolloServer, gql } = require("apollo-server-lambda");
const faunadb = require("faunadb"),
  axios = require("axios"),
  q = faunadb.query;
const shortid = require("shortid");
const typeDefs = gql`
  type Query {
    allAuthors: [Lolly!]
  }
  type Lolly {
    id: ID!
    Toname: String!
    message: String!
    fromName: String!
    falvourTop: String!
    falvourMid: String!
    falvourBtm: String!
    lollyPath: String!
  }
  type Mutation {
    createLolly(
      Toname: String!
      message: String!
      fromName: String!
      falvourTop: String!
      falvourMid: String!
      falvourBtm: String!
    ): Lolly
  }
`;

const resolvers = {
  Query: {
    allAuthors: async (parents, args, context) => {
      try {
        let client = new faunadb.Client({
          secret: "fnAEArAc6CACBbyQVp-jc-7NQ4YkiFoGeqVgGQZe",
        });
        let result = await client.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection("Lolly"))),
            q.Lambda((x) => q.Get(x))
          )
        );

        return result.data.map((d) => {
          return {
            id: d.ref.id,
            Toname: d.data.Toname,
            message: d.data.message,
            fromName: d.data.fromName,
            falvourTop: d.data.falvourTop,
            falvourMid: d.data.falvourMid,
            falvourBtm: d.data.falvourBtm,
            lollyPath: d.data.lollyPath,
          };
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    createLolly: async (_, args) => {
      console.log("args = ", args);

      const client = new faunadb.Client({
        secret: "fnAEArAc6CACBbyQVp-jc-7NQ4YkiFoGeqVgGQZe",
      });
      const id = shortid.generate();
      args.lollyPath = id;

      const result = await client.query(
        q.Create(q.Collection("Lolly"), {
          data: args,
        })
      );

      axios
        .post(
          "https://virtual-lolly-pop.netlify.app/.netlify/functions/Addlolly"
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        });
      console.log("result", result);
      console.log("result", result.data);
      return result.data;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = server.createHandler();

module.exports = { handler };
