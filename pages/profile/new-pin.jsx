import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";

export default function NewPin() {
    return (
      <>
        <Header />
        <div className="container-fluid mt-5">
          <div className="row ms-5">
            <Side />
            <section className="col-8 d-flex flex-column shadow ms-5 gap-2 py-4 px-5">
              <span className="profile-personal">Change Pin</span>
              <div className="col-5 profile-personal-desc mt-3 mb-4">
                <p>Type your new 6 digits security PIN to use in Fazzpay.</p>
              </div>
              <div className="col-6 d-flex flex-column align-items-center py-3">
                <input type="text" placeholder="input pin" />
                <button type="buttton" className="btn btn-primary auth-btn mt-5">Continue</button>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  }