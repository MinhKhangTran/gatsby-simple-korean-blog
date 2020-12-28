import React from "react";
import { graphql, Link } from "gatsby";
import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const index = ({ data, pageContext, location }) => {
  const posts = data.allMarkdownRemark.edges;
  console.log(pageContext.limit);
  console.log(data);
  console.log(location);
  return (
    <Layout location={location}>
      <SEO title="Home"></SEO>
      <Box w={{ base: "90%", md: "50%" }} mt={4} mx="auto">
        {posts.map((post) => {
          return (
            <Box my={6}>
              <Text color="startup.500">{post.node.frontmatter.date}</Text>
              <Heading fontSize="3xl" color="startup.600">
                {post.node.frontmatter.title}
              </Heading>
              <Link to={post.node.fields.slug}>
                <Text>{post.node.excerpt}</Text>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "MMM, D YYYY")
            title
          }
          html
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default index;
