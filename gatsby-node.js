const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      lolly_get {
        allAuthors {
          Toname
          message
          fromName
          falvourTop
          falvourMid
          falvourBtm
          lollyPath
        }
      }
    }
  `);
  console.log("response =", data);

  data.lolly_get.allAuthors.forEach((edge) => {
    createPage({
      path: `LollyCreate/${edge.lollyPath}`,
      component: path.resolve("./src/template/template.tsx"),
      context: edge,
    });
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/LollyCreate/)) {
    page.matchPath = "/LollyCreate/*";
    createPage(page);
  }
};