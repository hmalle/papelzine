
import React from "react";
import "./Form.css";

const Form = props  =>
  <div className="container" id="form">
    <div className="card">
      <div className="card-header text-center">
        <h5>Search</h5>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Topic</label>
            <input 
              type="text" 
              className="form-control" 
              name="topic" 
              onChange ={props.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Start Year</label>
            <input 
              type="number" 
              value={props.startYear}
              className="form-control" 
              name="startYear" 
              onChange={props.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>End Year</label>
            <input 
              className="form-control" 
              type="number" 
              name="endYear" 
              value={props.startYear}
              onChange={props.handleInputChange}
            />
          </div>
          <input 
            className="btn btn-primary" 
            id="submit-btn"
            type="submit" 
            value="Search" 
            onClick={props.handleFormSubmit}
          />
        </form>
        <br/>
      </div>
    </div>
  </div>

export default Form;
