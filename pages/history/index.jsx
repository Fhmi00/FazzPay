import React from "react";
import Image from "next/image";
import Header from "components/header";
import Side from "components/side";
import Footer from "components/footer";
import axios from "utils/axios"
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { useEffect } from "react";

export default function History() {
  const [histories, setHistories] = useState([]);

  const getAllHistory = async () => {
    try {
      const result = await axios.get(`https://fazzpay-rose.vercel.app/transaction/history?page=1&limit=6  &filter=MONTH`)
      setHistories(result.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllHistory();
  }, {})
    

  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row ms-5">
          <Side />
          <div className="col-8 shadow ms-5 ps-5 py-4">
            <div className="d-flex justify-content-between me-5">
              <span>Transaction History</span>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  -- Select Filter --
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {histories.length > 0 ? (
              histories.map((value, index) => (
                <div className="d-flex flex-row justify-content-between align-items-center me-5 mt-4" key={index}>
              <div className="d-flex gap-3">
                <Image
                  src="/robert.png"
                  width={50}
                  height={50}
                  alt="rob"
                ></Image>
                <div className="d-flex flex-column">
                  <span>{value.firstName}</span>
                  <span>{value.noTelp}</span>
                </div>
              </div>
              <span>{value.amount}</span>
            </div>
              ))
            ):(
              <div>
                <span>You Dont Have Any Transactions</span>
              </div>
            ) }            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
