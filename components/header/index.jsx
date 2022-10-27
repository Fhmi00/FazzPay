import React from "react";
import Image from "next/image";
import { FiBell } from "react-icons/fi";

export default function Header() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 shadow d-flex flex-row justify-content-between px-5 py-4 rounded-bottom">
          <span className="ms-5 header-logo">FazzPay</span>
          <div className="d-flex flex-row me-5 align-items-center gap-3">
            <Image src="/robert.png" width={50} height={50} alt="rob"></Image>
            <div className="d-flex flex-column">
              <span className="header-name">Robert Chandler</span>
              <span className="header-telpnumb">+62 8139 3877 7946</span>
            </div>
            <FiBell className="header-bell" />
          </div>
        </div>
      </div>
    </div>
  );
}
