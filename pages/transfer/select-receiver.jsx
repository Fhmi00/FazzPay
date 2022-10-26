import React from "react";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";
import { FiSearch } from "react-icons/fi";

export default function SelectReceiver() {
  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row ms-5">
          <Side />
          <div className="col-8 shadow ms-5 ps-5 py-4">
            <span>Search Receiver</span>
            <InputGroup className="my-3">
              <FiSearch />
              <Form.Control
                placeholder="Search receiver here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
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
