import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <img alt="not found"
      src={"https://doyouconvert.com/wp-content/uploads/2018/04/404_Error.jpg"}
      style={{
        width: 400,
        height: 400,
        display: "block",
        margin: "auto",
        position: "relative"
      }}
    />
    <center>
      <Link to="/">Return to Home Page</Link>
    </center>
  </div>
);
export default NotFound;
