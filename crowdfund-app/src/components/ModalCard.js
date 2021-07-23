import React, { useState } from "react";
import ThanksModal from "./ThanksModal";

import { Modal } from "bootstrap";

export default function ModalCard(props) {
  let totalAmount = React.createRef();

  function handleSubmit() {
    // let productsModal = new Modal(document.getElementById("productsModal"));
    if (totalAmount.current.value >= props.data.amount) {
      props.updatePledges(props.data.amount, totalAmount.current.value);
    } else {
      alert("Amount cannot be lower than at least 1 product value");
    }
    // productsModal.hide();
  }

  return (
    <>
      <div
        className={
          "container bordered mb-3 " +
          (props.data.leftItems === 0 ? "text-muted" : "")
        }
      >
        <div className="row mb-2 align-items-center justify-content-between">
          <div className="col-5">
            <span className="float-start product-title">
              {props.data.title}
            </span>{" "}
          </div>
          <div className="col-3">
            <span className="float-end product-subtitle">
              {props.data.subtitle}
            </span>
          </div>
          <div className="col-3">
            {props.data.leftItems >= 0 && (
              <div className="float-end">
                <span className="product-left">
                  {props.data.amount === 25
                    ? props.pledgeData.twentyFiveLeft
                    : props.data.amount === 75
                    ? props.pledgeData.seventyFiveLeft
                    : 0}{" "}
                </span>{" "}
                left{" "}
              </div>
            )}
          </div>
        </div>
        <div className="row mb-2">
          <span>{props.data.description}</span>
        </div>
        {props.data.id === props.showpurchase && (
          <div className="row mb-2 align-items-center p-2 top-border">
            <div className="col-12 col-md-6">
              {props.data.amount > 0 && (
                <span className="enter-pledge-text lean">
                  Enter your pledge
                </span>
              )}
            </div>
            <div className="col-6 col-md-3">
              {props.data.amount > 0 && (
                <span class="text-muted">
                  ${" "}
                  <input
                    type="text"
                    ref={totalAmount}
                    defaultValue={props.data.amount}
                    // {
                    //   "" + (props.data.amount > 0 ? props.data.amount : "")
                    // }
                    className="border-textbox"
                    disabled={props.data.leftItems === 0 ? true : false}
                  />
                </span>
              )}
            </div>
            <div className="col-6 col-md-3">
              {props.data.leftItems === 0 ? (
                <button className="btn btn-primary button-default" disabled>
                  No stock
                </button>
              ) : (
                <button
                  className="btn btn-primary button-default"
                  onClick={props.data.amount > 0 && handleSubmit}
                  data-bs-toggle="modal"
                  data-bs-target="#thanksModal"
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="modal fade" id="thanksModal" role="dialog">
        <ThanksModal />
      </div>
    </>
  );
}
