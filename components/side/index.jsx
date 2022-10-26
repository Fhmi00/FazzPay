import React from "react";
import { FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut } from "react-icons/fi";

export default function Side() {
  return (
    <>
      <div className="col-3 d-flex flex-column shadow rounded py-4 px-5 gap-5">
        <div className="d-flex flex-row align-items-center mt-3 gap-3">
          <FiGrid />
          <span>Dashboard</span>
        </div>
        <div className="d-flex flex-row align-items-center gap-3">
          <FiArrowUp />
          <span>Transfer</span>
        </div>
        <div className="d-flex flex-row align-items-center gap-3">
          <FiPlus />
          <span>Top Up</span>
        </div>
        <div className="d-flex flex-row align-items-center gap-3">
          <FiUser />
          <span>Profile</span>
        </div>
        <div className="d-flex flex-row align-items-center gap-3 mb-3">
          <FiLogOut />
          <span>Logout</span>
        </div>
      </div>
    </>
  );
}
