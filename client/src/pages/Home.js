import React, { Component } from "react";
import api from "../utils/api";
import Header from "../components/Header/";
import Form from  "../components/Form/";
import Results from  "../components/Results/";
import Saved from  "../components/Saved/";

class Home extends Component {
  state={
    eprints: [],
    query:"",
    startYear:"",
    endYear:"",
    message:"Search for eprints",
  };
  
  handleInputChange = event => {
    const {name,value} = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getEprints();
  };

  getEprints = () => {
    api.getEprints({
      query: this.state.query,
      startYear: this.state.startYear,
      endYear: this.state.endYear,
    }).then(res=> this.setState({
      eprints: res.data,
      message: !res.data.length 
        ?"No new articles found, Try a different query"
        :""
    })).catch(err => console.log(err));
  }

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
