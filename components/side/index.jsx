import React from "react";
import Link from "next/link";
import { FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut } from "react-icons/fi";

export default function Side() {
  return (
    <div className="col-3 d-flex flex-column py-4 px-5 shadow rounded justify-content-between">
      <div className="d-flex flex-column gap-5">
        <div className="d-flex flex-row align-items-center mt-3 gap-3">
          <FiGrid />
          <span>
            <Link href="/dashboard">Dashboard</Link>
          </span>
        </div>
        <div className="d-flex flex-row align-items-center gap-3">
          <FiArrowUp />
          <span>
            <Link href="transfer/select-receiver">Transfer</Link>
          </span>
        </div>
        <div className="d-flex flex-row align-items-center gap-3">
          <FiPlus />
          <span>Top Up</span>
        </div>
        <div className="d-flex flex-row align-items-center gap-3">
          <FiUser />
          <span>Profile</span>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center gap-3 mt-5 mb-3">
        <FiLogOut />
        <span>Logout</span>
      </div>
    </div>
  );
}
