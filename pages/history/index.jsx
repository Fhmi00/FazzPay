import React from "react";
import Image from "next/image";
import Header from "components/header";
import Side from "components/side";
import Footer from "components/footer";
import Dropdown from "react-bootstrap/Dropdown";
import { getDataUser } from "stores/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function History() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  const getData = () => {
    
  }

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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
