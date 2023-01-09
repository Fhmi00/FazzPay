import React, { useEffect } from "react";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { getDataUser } from "stores/actions/user";

export default function PersonalInformation() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getDataUser(Cookies.get("userId")));
  }, []);
  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row ms-5">
          <Side />
          <section className="col-8 d-flex flex-column shadow ms-5 gap-2 py-4 px-5">
            <span className="profile-personal">Personal Information</span>
            <div className="col-5 profile-personal-desc mt-3 mb-4">
              <p>
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </p>
            </div>
            <div className="shadow-sm py-3 px-3">
              <p className="profile-personal-chart">First name</p>
              <span className="profile-personal-value">
                {user.data.firstName}
              </span>
            </div>
            <div className="shadow-sm py-3 px-3">
              <p className="profile-personal-chart">Last name</p>
              <span className="profile-personal-value">
                {user.data.lastName}
              </span>
            </div>
            <div className="shadow-sm py-3 px-3">
              <p className="profile-personal-chart">Verified E-mail</p>
              <span className="profile-personal-value">{user.data.email}</span>
            </div>
            <div className="shadow-sm py-3 px-3">
              <p className="profile-personal-chart">Phone Number</p>
              <span className="profile-personal-value">{user.data.noTelp}</span>
              <span className="ms-3 profile-personal-value">
                <button
                  type="button"
                  onClick={() => router.push("/profile/manage-phonenumber")}
                >
                  Add Phone Number
                </button>
              </span>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
