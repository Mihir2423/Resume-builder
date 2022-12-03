import React from "react";
import { Link } from "react-router-dom";

function Step5(props) {
  return (
    <div
      className={
        props.state === 5 ? "tab-pane active px-3 py-2" : "tab-pane px-3 py-2"
      }
      id="basictab6"
      style={{ minHeight: 360 }}
    >
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="mb-2 col-12">
              <label htmlFor="comment" className="form-label">
                Comment
              </label>
              <textarea
                id=""
                className="form-control"
                rows={3}
                defaultValue={""}
                name="clientComment"
              />
            </div>
          </div>
          <div className="text-center">
            <h2 className="mt-0">
              <i className="mdi mdi-check-all" />
            </h2>
            <h3 className="mt-0">Thank you !</h3>
          </div>
        </div>{" "}
      </div>{" "}
      <ul className="pager wizard mb-0 list-inline mt-2">
        <li className="previous list-inline-item">
          <button
            type="button"
            className="btn btn-light"
            onClick={props.onClick2}
          >
            <i className="mdi mdi-arrow-left me-1" /> Back to Profile
          </button>
        </li>
        <li className="next list-inline-item float-end">
          <Link to="/template">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Step5;
