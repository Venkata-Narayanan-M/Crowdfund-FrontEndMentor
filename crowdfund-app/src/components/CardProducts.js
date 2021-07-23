import React from "react";
import Modal from "./Modal";

export default function CardProducts(props) {
  return (
    <>
      <div
        className={
          "container bordered " +
          (props.data.leftItems === 0 ? "text-muted" : "")
        }
      >
        <div className="row mb-2 align-items-center">
          <div className="col-12 col-md-6 text-start product-title">
            {props.data.title}
          </div>
          <div className=" col-12 col-md-6 text-end product-subtitle">
            {props.data.subtitle}
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <span className="product-description">
              {props.data.description}
            </span>
          </div>
        </div>
        <div className="row mt-2 align-items-center p-2">
          <div className="col-12 col-md-6 text-start ">
            <span className="product-left">
              {props.data.amount === 25
                ? props.pledgeData.twentyFiveLeft
                : props.data.amount === 75
                ? props.pledgeData.seventyFiveLeft
                : 0}
            </span>{" "}
            left
          </div>
          <div className=" col-12 col-md-6 text-end">
            {props.data.leftItems === 0 ? (
              <button className="btn btn-primary mt-4 button-default" disabled>
                Out of stock
              </button>
            ) : (
              <button
                className="btn btn-primary mt-4 button-default"
                data-bs-toggle="modal"
                data-bs-target="#productsModal"
              >
                Select reward
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="modal fade" id="productsModal" tabindex="-1">
        <Modal pledgeData={props.pledgeData} updateState={props.updateState} />
      </div>
    </>
  );
}
