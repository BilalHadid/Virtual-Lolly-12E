const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    {
      get_lollies {
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
  console.log("response =", response);

  response.data.get_lollies.allAuthors.forEach((edge) => {
    createPage({
      path: `LollyCreate/${edge.lollyPath}`,
      component: path.resolve("./src/template/template.tsx"),
      context: edge,
    });
  });
};
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/lolly/)) {
    page.matchPath = "/LollyCreate/*";
    createPage(page);
  }
};
