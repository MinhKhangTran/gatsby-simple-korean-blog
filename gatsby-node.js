/**
 * Slugs von den nodes bilden
 * 1. createFilePath von source-filesystem
 * 2. onCreateNode Method
 * 3. Create File Path if internal.type ==="MarkdownRemark"
 * 4. CreateNodeField
 *
 * Create Single Pages dynamically
 * 1.Template erstellen
 * 2. Query
 * 3. Loop and create
 *
 * Pagination
 * 1. pageSize and PageCount bestimmen
 * 2. Template
 * 3. Loop over pages and Create
 *
 *
 */

import path, { resolve } from "path";
//  1. createFilePath von source-filesystem
import { createFilePath } from "gatsby-source-filesystem";

//  ======================================== SLUG ==========================
// 2. onCreateNode Method
export const onCreateNode = ({ node, getNode, actions }) => {
  // 3. Create File Path if internal.type ==="MarkdownRemark"
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode });
    // 4. CreateNodeField
    actions.createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

//  ======================================== Create page Dynamically ==========================

const turnPostIntoPages = async ({ actions, graphql }) => {
  // 1.Template erstellen
  const pageTemplate = path.resolve("./src/templates/Post.js");
  // 2. Query
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  // 3. Loop
  data.allMarkdownRemark.edges.forEach((edge) => {
    actions.createPage({
      path: edge.node.fields.slug,
      component: pageTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });

  //  ======================================== Create Pagination==========================
  // 1. pageSize and PageCount bestimmen
  const pageSize = 5;
  const pageCount = Math.ceil(data.allMarkdownRemark.edges.length / pageSize);
  // 2. Template
  const paginateTemplate = path.resolve("./src/pages/index.js");
  // 3. Loop over pages and Create
  for (let i = 0; i < pageCount; i++) {
    let path = "/";
    if (i > 0) {
      path += `/${i + 1}`;
    }
    actions.createPage({
      path,
      component: paginateTemplate,
      context: {
        limit: pageSize,
        skip: i * pageSize,
        pageCount,
        currentPage: i + 1,
      },
    });
  }
};

export async function createPages(params) {
  await Promise.all([turnPostIntoPages(params)]);
}
