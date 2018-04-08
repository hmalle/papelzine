import React, { Component } from "react";
import Header from "../components/Header/";
import Form from  "../components/Form/";
import Results from  "../components/Results/";
import Saved from  "../components/Saved/";

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Form></Form>
        <Results></Results>
        <Saved></Saved>
      </div>
    );
  }
}

export default Home;
