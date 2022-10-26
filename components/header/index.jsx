import React from "react";
import Image from "next/image";
import { FiBell } from "react-icons/fi";

export default function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 border d-flex flex-row justify-content-between px-5 py-4 rounded-bottom">
          <span className="ms-5">FazzPay</span>
          <div className="d-flex flex-row me-5">
            <Image src="/robert.png" width={50} height={50} alt="rob"></Image>
            <div className="d-flex flex-column">
              <span>Robert Chandler</span>
              <span>+62 8139 3877 7946</span>
            </div>
            <FiBell />
          </div>
        </div>
      </div>
    </div>
  );
}
