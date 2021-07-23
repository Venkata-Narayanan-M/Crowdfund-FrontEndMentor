import React, { useState } from "react";
import { pledgeData } from "../data.js";

function CardProgress(props) {
  // let [backerDetails, setUpdateCheck] = useState({
  //   donation: pledgeData.donationCollected,
  //   donors: pledgeData.totalDonors,
  //   target: pledgeData.totalTarget,
  // });

  let progressStyle = {
    width: `${(props.pledgeData.donation / props.pledgeData.target) * 100}%`,
  };

  return (
    <>
      <div className="container card-progress">
        <div className="row text-center">
          <div className="col-sm-12 col-md-4 border-separator">
            <span className="cardCol-metrics">
              <p className="cardCol-first-text">
                <h2>${props.pledgeData.donation.toLocaleString()}</h2>
              </p>
              <p className="cardCol-second-text">
                of ${props.pledgeData.target.toLocaleString()} backed
              </p>
            </span>
          </div>
          <div className="col-sm-12 col-md-4 border-separator">
            <span className="cardCol-metrics">
              <p className="cardCol-first-text">
                <h2>{props.pledgeData.donors.toLocaleString()}</h2>
              </p>
              <p className="cardCol-second-text">total backers</p>
            </span>
          </div>
          <div className="col-sm-12 col-md-4">
            <span className="cardCol-metrics">
              <h2>
                <p className="cardCol-first-text"> 56 </p>
              </h2>
              <p className="cardCol-second-text">days left</p>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="progress">
              <div
                className="progress-bar"
                style={progressStyle}
                role="progressbar"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProgress;
