/**
import { graphql } from 'gatsby';
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");
const slash = require("slash");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve("./src/templates/page.js");

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            status
            path
            wordpress_id
            wordpress_parent
          }
        }
      }
    }
  `);

  // Check for errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  const { allWordpressPage } = result.data;

  allWordpressPage.edges.forEach(edge => {
    if (edge.node.status === "publish") {
      createPage({
        path: edge.node.path,
        component: slash(pageTemplate),
        // send data to pageTemplate via context
        context: {
          id: edge.node.id,
          parent: edge.node.wordpress_parent,
          wpId: edge.node.wordpress_id,
        },
      });
    }
  });
};
