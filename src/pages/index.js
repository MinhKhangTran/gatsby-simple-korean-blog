import React from "react";
import { graphql, Link } from "gatsby";
import { Box, Text } from "@chakra-ui/react";

const index = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  console.log(pageContext.limit);
  console.log(data);
  return (
    <Box w={{ base: "90%", md: "50%" }} mx="auto">
      {/* {posts.map((post) => {
        return <h1>{post.frontmatter.title}</h1>;
      })} */}
    </Box>
  );
};

export const query = graphql`
  query($skip: Int = 0, $limit: Int = 5) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "MMM, DO YYYY")
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
