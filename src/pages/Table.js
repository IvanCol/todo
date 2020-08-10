import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Layout from "../hoc/Layout/Layout";
import Card from "../components/Card/Card";

const Table = () => {
  return (
    <Layout>
      <Navbar />
      <Card />
    </Layout>
  );
};

export default Table;
