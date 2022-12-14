import React from "react";

export default function Footer() {
  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <div className="col-12 border mt-5 px-5 py-4 d-flex justify-content-between footer-wrapper">
          <span className="ms-5 footer-copyright">
            2020 FazzPay. All right reserved.
          </span>
          <div className="me-5 d-flex gap-4 footer-contact">
            <span>+62 5637 8882 9901</span>
            <span>contact@fazzpay.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
