import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";

export default function UpdateName() {
    return (
      <>
        <Header />
        <div className="container-fluid mt-5">
          <div className="row ms-5">
            <Side />
            <section className="col-8 d-flex flex-column shadow ms-5 gap-2 py-4 px-5">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <button type="button" className="btn btn-primary">continue</button>
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  }