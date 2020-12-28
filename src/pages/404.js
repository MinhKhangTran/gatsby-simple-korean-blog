import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Error = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Error"></SEO>
      Error
    </Layout>
  );
};

export default Error;
