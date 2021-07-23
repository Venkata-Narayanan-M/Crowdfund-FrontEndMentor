import React, { useState } from "react";
import { productData, pledgeData } from "../data.js";
import ModalCard from "./ModalCard.js";

export default function Modal(props) {
  let [selectedOption, updateSelection] = useState("");

  function handleChange(event) {
    updateSelection(event.target.value);
  }

  function updatePledges(pledgePrice, donation) {
    props.updateState(pledgePrice, donation);
  }
  return (
    <>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header d-flex flex-column">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              data-bs-target="#thanksModal"
              aria-label="Close"
            ></button>
            <h5 className="modal-title" id="exampleModalLabel">
              <p>Back this project</p>
            </h5>
            <p className="lean" id="exampleModalSubTitle">
              Want to support us in bringing MastercraftBamboo Monitor Riser out
              in the world?
            </p>
          </div>
          <div className="modal-body">
            <div className="container">
              <div>
                <input
                  type="radio"
                  name="money"
                  value="zero"
                  disabled={
                    productData.twentyFive.leftItems === 0 ? true : false
                  }
                  onChange={handleChange}
                  className="form-check-input"
                ></input>
                <ModalCard
                  data={productData.zero}
                  pledgeData={props.pledgeData}
                  updatePledges={updatePledges}
                  showpurchase={selectedOption}
                />
              </div>

              <div>
                <input
                  type="radio"
                  name="money"
                  value="twentyFive"
                  disabled={
                    productData.twentyFive.leftItems === 0 ? true : false
                  }
                  onChange={handleChange}
                  className="form-check-input"
                ></input>
                <ModalCard
                  data={productData.twentyFive}
                  pledgeData={props.pledgeData}
                  updatePledges={updatePledges}
                  showpurchase={selectedOption}
                />
              </div>

              <div>
                <input
                  type="radio"
                  name="money"
                  value="seventyFive"
                  disabled={
                    productData.seventyFive.leftItems === 0 ? true : false
                  }
                  onChange={handleChange}
                  className="form-check-input"
                ></input>
                <ModalCard
                  data={productData.seventyFive}
                  pledgeData={props.pledgeData}
                  updatePledges={updatePledges}
                  showpurchase={selectedOption}
                />
              </div>

              <div>
                <input
                  type="radio"
                  name="money"
                  value="twoHundred"
                  disabled={
                    productData.twoHundred.leftItems === 0 ? true : false
                  }
                  onChange={handleChange}
                  className="form-check-input"
                ></input>
                <ModalCard
                  data={productData.twoHundred}
                  pledgeData={props.pledgeData}
                  updatePledges={updatePledges}
                  showpurchase={selectedOption}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
