import React from "react";
import Image from "next/image";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";
import { FiArrowRight } from "react-icons/fi";
import { BsPencil } from "react-icons/bs";

export default function Menu() {
    return (
      <>
        <Header />
        <div className="container-fluid mt-5">
          <div className="row ms-5">
            <Side />
            <section className="col-8 d-flex flex-column align-items-center shadow ms-5 gap-2 py-5">
              <Image src="/robert.png"
                    width={60}
                    height={60}
                    alt="rob"/>
              <span><BsPencil/> Edit</span>
              <span className="profile-menu-name">Robert Chandler</span>
              <span className="profile-menu-numb">+62 813-9387-7946</span>
              <div className="d-flex flex-column mt-4 gap-3">
                <button type="button" className="btn btn-secondary d-flex justify-content-between align-items-center profile-menu-btn">Personal Information <FiArrowRight/></button>
                <button type="button" className="btn btn-secondary d-flex justify-content-between align-items-center text-start profile-menu-btn">Change Password <FiArrowRight/></button>
                <button type="button" className="btn btn-secondary d-flex justify-content-between align-items-center text-start profile-menu-btn">Change Pin <FiArrowRight/></button>
                <button type="button" className="btn btn-secondary text-start profile-menu-btn">Logout</button>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  }