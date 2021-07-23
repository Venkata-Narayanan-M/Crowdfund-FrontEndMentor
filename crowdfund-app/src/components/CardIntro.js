import React from "react";
import Modal from "./Modal";

function CardIntro(props) {
  return (
    <>
      <div className="card">
        <img src="./images/logo-mastercraft.svg" className="top-icon" />
        <div className="card-body">
          <h5 className="card-title mb-2 text-center">
            Mastercraft Bamboo Monitor Riser
          </h5>
          <h6 className="card-subtitle mt-4 text-center text-muted">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain
          </h6>
          <div className="d-flex flex-wrap p-2 first-card-buttons">
            <a
              href="#"
              className="btn btn-primary btn-lg mt-4 button-default"
              role="button"
              data-bs-toggle="modal"
              data-bs-target="#productsModal"
            >
              Back this project
            </a>
            <button
              className="btn btn-outline-secondary btn-lg mt-4"
              data-bs-toggle="button"
              type="button"
            >
              <i className="far fa-bookmark"></i>
              <span id="toggleBookmark"> Bookmark</span>
            </button>
          </div>
        </div>
      </div>

      <div className="modal fade" id="productsModal" tabindex="-1">
        <Modal pledgeData={props.pledgeData} updateState={props.updateState} />
      </div>
    </>
  );
}

export default CardIntro;
