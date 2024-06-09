import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Newcard = () => {
  return (
    <div className="">
      <div className="col-md-4" >
        <div className="form-control" style={{ border: "5px solid grey" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ display: "flex", height: "100px" }}
              src="./media/circle.png"
              className=""
            />
          </div>
          <h2 className="text-black text-center">Lindsey James</h2>
          <p className="text-center" style={{ color: "grey" }}>
            @lindsey_jam3s
          </p>
          <p style={{display:"flex",justifyContent:"center"}} className="row text-center ms-2">
            Actress,musician,songwriter,and <br></br> artist.DM for work inquires or #tag
            me in <br></br>your message.
          </p>
          <div className="text-center">
            <span style={{ background: "grey", padding: "7px" }}>#art</span>{" "}
            <span style={{ background: "grey", padding: "7px" }}>
              #photography
            </span>{" "}
            <span style={{ background: "grey", padding: "7px" }}>#music</span>
          </div>
          <Button variant="contained" className="form-control bg-secondary  mt-3">Message</Button>
          <Button variant="contained" className="form-control text-white bg-primary  mt-3">
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Newcard;
