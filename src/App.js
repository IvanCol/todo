import React, { Component } from "react";
import Card from "./containers/Card/Card";
import Layout from "./hoc/Layout/Layout";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Card />
      </Layout>
    );
  }
}
