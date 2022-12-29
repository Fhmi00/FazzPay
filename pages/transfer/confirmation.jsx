import React from "react";
import Image from "next/image";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";

export default function TransferMoneyConfirmation() {
    return (
      <>
        <Header />
        <div className="container-fluid mt-5">
          <div className="row ms-5">
            <Side />
          </div>
        </div>
        <Footer />
      </>
    );
  }