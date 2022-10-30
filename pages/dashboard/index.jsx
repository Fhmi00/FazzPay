import React from "react";
import Image from "next/image";
import Header from "components/header";
import Side from "components/side";
import Footer from "components/footer";
import HandleChart from "components/chart";
import { FiArrowDown, FiArrowUp, FiPlus } from "react-icons/fi";


export default function Dashboard() {
  
 
  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row ms-5">
          <Side />
          <div className="col-8 ms-5">
            <section className="col-12 shadow d-flex flex-row justify-content-between align-items-center px-4 py-3 dashboard-balance">
              <div className="d-flex flex-column gap-3">
                <>                
                <span className="dashboard-balance-balance">Balance</span>
                <span className="dashboard-balance-amount">10</span>
                <span className="dashboard-balance-telpnumb">+62123654789</span>
                </>
              </div>
              <div className="d-flex flex-column gap-3">
                <button className="btn text-light px-4 py-2 btn-dashboard-balance">
                  <FiArrowUp /> Transfer
                </button>
                <button className="btn text-light px-4 py-2 btn-dashboard-balance">
                  <FiPlus /> Top Up
                </button>
              </div>
            </section>
            <div className="d-flex mt-4">
              <section className="col-6 me-5 shadow px-5 py-4">
                <div className="d-flex flex-row justify-content-between">
                  <div className="d-flex flex-column gap-2">
                    <FiArrowDown className="dashboard-logo-income" />
                    <span className="dashboard-income">Income</span>
                    <span className="dashboard-income-value">Rp2.120.000</span>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <FiArrowUp className="dashboard-logo-expense" />
                    <span className="dashboard-income">expense</span>
                    <span className="dashboard-income-value">Rp2.120.000</span>
                  </div>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <HandleChart/>
                </div>
              </section>
              <section className="col-5 ms-5 shadow ps-5 py-4 dashboard-history-wrapper">
                <span className="dashboard-history">Transaction History</span>
                <div className="d-flex flex-row justify-content-between align-items-center me-5 mt-4">
                  <div className="d-flex gap-3">
                    <Image
                      src="/robert.png"
                      width={50}
                      height={50}
                      alt="rob"
                    ></Image>
                    <div className="d-flex flex-column gap-2">
                      <span className="dashboard-transaction-name">
                        Robert Chandler
                      </span>
                      <span className="dashboard-transaction-type">accept</span>
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
