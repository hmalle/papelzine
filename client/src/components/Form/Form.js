
import React from "react";
import "./Form.css";

const Form = props  =>
  <div className="container">
    <h3>Search</h3>
    <form>
      <div className="form-group">
        <label>Topic</label>
        <input type="text" className="form-control" name="topic" />
      </div>

      <div className="form-group">
        <label>Start Year</label>
        <input type="text" className="form-control" name="startYear" />
      </div>

      <div className="form-group">
        <label>End Year</label>
        <input className="form-control" type="text" name="endYear" />
      </div>

      <input className="btn btn-primary" type="submit" value="Search" />
    </form>
    <br/>
  </div>

export default Form;
