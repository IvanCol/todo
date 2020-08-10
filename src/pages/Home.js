import React from "react";
import Layout from "../hoc/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import TablePanel from "../components/TablesPanel/TablesPanel";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <TablePanel />
    </Layout>
  );
};

export default Home;
