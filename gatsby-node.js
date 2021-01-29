const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      get_lolly {
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

  data.get_lolly.allAuthors.forEach((edge) => {
    createPage({
      path: `/LollyCreate/${edge.lollyPath}`,
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
