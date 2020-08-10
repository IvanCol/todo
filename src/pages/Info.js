import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../hoc/Layout/Layout";
import Information from "../components/Information/Information";

const Info = () => {
  return (
    <Layout>
      <Navbar />
      <Information />
    </Layout>
  );
};

export default Info;
