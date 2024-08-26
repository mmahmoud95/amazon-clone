import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-center bg-dark text-white vh-100">
        <h1 className="display-1 font-weight-bold py-2">404</h1>
        <div className="bg-danger px-2 text-sm rounded rotate-12 position-absolute " >
          Page Not Found
        </div>
          <Link to="/" className="btn bg-warning py-3">
            <span className="position-relative d-inline-block px-4 py-2 ">
              Go Home
            </span>
          </Link>
      </div>
    </div>
  );
};

export default NotFound;
