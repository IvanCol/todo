import React from "react";
import Layout from "../hoc/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";
import AuthForm from "../components/AuthForm/AuthForm";

const Authorization = () => {
  return (
    <Layout>
      <Navbar />
      <AuthForm />
    </Layout>
  );
};

export default Authorization;
