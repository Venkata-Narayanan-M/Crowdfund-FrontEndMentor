import React, { useState } from "react";
import Header from "./components/Header";
import CardIntro from "./components/CardIntro";
import CardProgress from "./components/CardProgress";
import CardProducts from "./components/CardProducts";
import { productData, pledgeData, staticText } from "./data";

function App() {
  let [donation, setDonation] = useState(pledgeData.donationCollected);
  let [donors, setDonors] = useState(pledgeData.totalDonors);
  let [target, setTarget] = useState(pledgeData.totalTarget);
  let [twentyFiveLeft, setTwentyFiveLeft] = useState(
    productData.twentyFive.leftItems
  );
  let [seventyFiveLeft, setSeventyFiveLeft] = useState(
    productData.seventyFive.leftItems
  );

  function updateState(pledgePrice, donation) {
    if (pledgePrice === 25) setTwentyFiveLeft((value) => value - 1);
    if (pledgePrice === 75) setSeventyFiveLeft((value) => value - 1);
    setDonation((value) => value + Number(donation));
    setDonors((value) => value + 1);
  }

  const pledgeDataApp = {
    donation: donation,
    donors: donors,
    target: target,
    twentyFiveLeft: twentyFiveLeft,
    seventyFiveLeft: seventyFiveLeft,
  };

  return (
    <div>
      <Header />
      <div className="d-flex flex-column justify-content-center container-main">
        <div className="p-2 bd-highlight mb-3 col-sm-12">
          <CardIntro pledgeData={pledgeDataApp} updateState={updateState} />
        </div>
        <div className="p-2 bd-highlight mb-3">
          <CardProgress pledgeData={pledgeDataApp} />
        </div>
        <div className="p-2 bd-highlight mb-3  products-container">
          <div className="container bordered p-4">
            <div className="row">
              <h4>About this project</h4>
            </div>
            <div className="row">
              <p className="lead">{staticText}</p>
            </div>
            <div className="row p-4">
              <CardProducts
                data={productData.twentyFive}
                pledgeData={pledgeDataApp}
                updateState={updateState}
              />
            </div>
            <div className="row p-4">
              <CardProducts
                data={productData.seventyFive}
                pledgeData={pledgeDataApp}
                updateState={updateState}
              />
            </div>
            <div className="row p-4">
              <CardProducts
                data={productData.twoHundred}
                pledgeData={pledgeDataApp}
                updateState={updateState}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
