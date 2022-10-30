import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";

export default function PersonalInformation() {
    return (
      <>
        <Header />
        <div className="container-fluid mt-5">
          <div className="row ms-5">
            <Side />
            <section className="col-8 d-flex flex-column shadow ms-5 gap-2 py-4 px-5">
              <span className="profile-personal">Personal Information</span>
              <div className="col-5 profile-personal-desc mt-3 mb-4">
                <p>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
              </div>
              <div className="shadow-sm py-3 px-3">
                <p className="profile-personal-chart">First Name</p>
                <span className="profile-personal-value">Robert</span>
              </div>
              <div className="shadow-sm py-3 px-3">
                <p className="profile-personal-chart">Last Name</p>
                <span className="profile-personal-value">Chandlerrrr</span>
              </div>
              <div className="shadow-sm py-3 px-3">
                <p className="profile-personal-chart">Verified E-mail</p>
                <span className="profile-personal-value">pewdiepie1@gmail.com</span>
              </div>
              <div className="shadow-sm py-3 px-3">
                <p className="profile-personal-chart">Phone Number</p>
                <span className="profile-personal-value">+62 813-9387-7946</span>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  }