import React from "react";

export default function ThanksModal() {
  return (
    <>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">
          <div className="modal-header d-flex flex-column align-items-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <img src="./images/icon-check.svg" class="img fluid " />
            <h2
              className="modal-title p-4 mt-2 mb-4 text-center"
              id="thanksModalLabel"
            >
              Thank you for your support !
            </h2>
          </div>
          <div className="modal-body d-flex p-4">
            <p className="text-center display-6">
              Your pledge brings us one step close to sharing Mastercraft Bamboo
              Monitor Riser worldwide. You will get an email once our campaign
              is completed.
            </p>
          </div>
          <div className="modal-footer d-flex flex-row align-items-center text-center p-4 ">
            <button
              type="button"
              className="btn btn-primary mb-2 mt-4 button-default"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
