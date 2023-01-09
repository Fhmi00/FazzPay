import React from "react";
import Image from "next/image";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";
import Link from "next/link";

export default function TransferMoney() {
  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row ms-5">
          <Side />
          <div className="col-8 shadow ms-5 ps-5 py-4">
            <span className="transfer-money">Transfer Money</span>
            <div className="d-flex flex-row justify-content-between align-items-center me-5 mt-4">
              <div className="d-flex gap-3">
                <Image
                  src="/robert.png"
                  width={50}
                  height={50}
                  alt="rob"
                ></Image>
                <div className="d-flex flex-column gap-2">
                  <span className="transfer-receiver">Robert Chandler</span>
                  <span className="transfer-receiver-numb">
                    +62 8139 3877 7946
                  </span>
                </div>
              </div>
            </div>
            <div className="col-4 my-5">
              <span className="transfer-money-desc">
                Type the amount you want to transfer and then press continue to
                the next steps.
              </span>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-5 gap-5 d-flex flex-column align-items-center mt-4 mb-5">
                <div className="col-2">
                  <input
                    type="text"
                    className="form-control auth-input"
                    placeholder="00"
                  />
                </div>
                <span>Rp120.000 Available</span>
                <input
                  type="email"
                  className="form-control auth-input"
                  placeholder="Add some notes"
                />
              </div>
            </div>
            <div className="text-end mt-5 me-5 mb-3">
              <button className="btn btn-primary auth-btn">
                <Link href="/transfer/confirmation">Continue</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
