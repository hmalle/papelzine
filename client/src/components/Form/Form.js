
import React from "react";

const Form = props  =>
  <div className="card">
    <div className="card-header text-center">
      <h5>Search</h5>
    </div>
    <div className="card-body">
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
  </div>

export default Form;
