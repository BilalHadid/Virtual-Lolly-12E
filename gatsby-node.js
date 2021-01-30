const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  //   const { createPage } = actions;

  const { data } = await graphql(`
    {
      all_authors {
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

  data.all_authors.allAuthors.forEach((node) => {
    actions.createPage({
      path: `LollyCreate/${node.lollyPath}`,
      component: path.resolve("./src/template/template.tsx"),
      context: node,
    });
  });
};
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/Lolly/)) {
    page.matchPath = "/LollyCreate/*";
    createPage(page);
  }
};
