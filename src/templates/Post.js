import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

const Post = ({ data, pageContext, location }) => {
  console.log(pageContext);
  // console.log(data);
  const prev = data.prev;
  const next = data.next;
  return (
    <Layout location={location}>
      <Box w={{ base: "90%", md: "50%" }} mt={6} mx="auto">
        <Text color="startup.500">{data.markdownRemark.frontmatter.date}</Text>
        <Heading fontSize="3xl" color="startup.600">
          {data.markdownRemark.frontmatter.title}
        </Heading>
        <Text as="p">
          <p dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Text>
        <Flex mt={4} color="startup.500">
          <Text>
            {prev && (
              <Link to={prev.fields.slug}>← {prev.frontmatter.title}</Link>
            )}
          </Text>
          <Spacer></Spacer>
          <Text>
            {next && (
              <Link to={next.fields.slug}>{next.frontmatter.title} →</Link>
            )}
          </Text>
        </Flex>
      </Box>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($slug: String!, $prevPostId: String, $nextPostId: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "MMM, D YYYY")
        title
      }
      html
    }
    prev: markdownRemark(id: { eq: $prevPostId }) {
      frontmatter {
        date(formatString: "MMM, D YYYY")
        title
      }
      fields {
        slug
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      frontmatter {
        date(formatString: "MMM, D YYYY")
        title
      }
      fields {
        slug
      }
    }
  }
`;
export default Post;
