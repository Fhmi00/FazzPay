import React from "react";
import Image from "next/image";
import Header from "components/header";
import Side from "components/side";
import Footer from "components/footer";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row ms-5">
          <Side />
          <div className="col-8 ms-5">
            <section className="col-12 shadow d-flex flex-row justify-content-between align-items-center px-3 py-3">
              <div className="d-flex flex-column gap-3">
                <span>Balance</span>
                <span>120.000</span>
                <span>+62123654789</span>
              </div>
              <div className="d-flex flex-column gap-3">
                <button>Transfer</button>
                <button>Top Up</button>
              </div>
            </section>
            <div className="d-flex mt-4">
              <section className="col-6 me-5 shadow px-5 py-4">
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-column">
                    <FiArrowDown />
                    <span>Income</span>
                    <span>Rp2.120.000</span>
                  </div>
                  <div className="d-flex flex-column">
                    <FiArrowUp />
                    <span>Income</span>
                    <span>Rp2.120.000</span>
                  </div>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Image
                    src="/graphic.png"
                    width={350}
                    height={300}
                    alt="rob"
                  />
                </div>
              </section>
              <section className="col-5 ms-5 shadow ps-5 py-4">
                <span>Transaction History</span>
                <div className="d-flex flex-row justify-content-between align-items-center me-5 mt-4">
                  <div className="d-flex gap-3">
                    <Image
                      src="/robert.png"
                      width={50}
                      height={50}
                      alt="rob"
                    ></Image>
                    <div className="d-flex flex-column">
                      <span>Robert Chandler</span>
                      <span>+62 8139 3877 7946</span>
                    </div>
                  </div>
                  <span>+Rp50.000</span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
