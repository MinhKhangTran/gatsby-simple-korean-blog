import React from "react";
import { graphql, Link } from "gatsby";
import { Box, Text } from "@chakra-ui/react";

const index = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Box w={{ base: "90%", md: "50%" }} mx="auto">
      {posts.map((post) => {
        return <h1>{post.frontmatter.title}</h1>;
      })}
    </Box>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      totalCount
      nodes {
        excerpt
        frontmatter {
          date(formatString: "MMM, Do YYYY")
          title
        }
        html
      }
    }
  }
`;

export default index;
