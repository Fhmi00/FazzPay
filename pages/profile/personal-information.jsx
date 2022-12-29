import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";
// import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function PersonalInformation() {
  // const router = useRouter()

  const userData = useSelector((state) => state.user.data)
  const {firstName, lastName, email, notelp} = userData;

  const personalData = [
    {
      name: "First Name",
      value: firstName,      
    },
    {
      name: "Last Name",
      value: lastName,
    },
    {
      name: "Verified E-mail",
      value: email,
    }
  ]
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
              {personalData.map((data, index)=> (
              <div className="shadow-sm py-3 px-3" key={index}>
                <p className="profile-personal-chart">{data.name}</p>
                <span className="profile-personal-value">{data.value}</span>
              </div>
              ))}
              <div className="shadow-sm py-3 px-3">
                <p className="profile-personal-chart">Phone Number</p>
                {notelp ? (<span className="profile-personal-value">{notelp}</span>) : (<span className="profile-personal-value"><button>Add Phone Number</button></span>) }                
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  }