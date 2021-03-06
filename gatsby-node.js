const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
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
  //   console.log(response.data);

  data.get_lollies.allAuthors.forEach((node) => {
    createPage({
      path: `LollyCreate/${node.lollyPath}`,
      component: path.resolve("./src/template/template.tsx"),
      context: node,
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
