import React from "react";
import Header from "components/header";
import Side from "components/side";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row ms-5">
          <Side />
        </div>
      </div>
      <div>Dashboard</div>
    </>
  );
}
