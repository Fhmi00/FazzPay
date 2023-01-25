import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";
import { useRouter } from "next/router";
import { updatePhone } from "stores/actions/user";
import { AiOutlinePhone } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

export default function EditPhoneNumber() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form, setForm] = useState({ noTelp: "" });
  const user = useSelector((state) => state.user);

  const handleSubmit = () => {
    dispatch(updatePhone(Cookies.get("userId")))
      .then((res) => {
        alert(res.value.data.msg);
        router.push("/profile/menu");
      })
      .catch((err) => {
        // alert(err.response.data.msg);
        console.log(err);
      });
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row ms-5">
          <Side />
          <section className="col-8 d-flex flex-column shadow ms-5 gap-2 py-4 px-5">
            <span className="profile-personal">Edit Phone Number</span>
            <div className="col-5 profile-personal-desc mt-3 mb-4">
              <p>
                Add at least one phone number for the transfer ID so you can
                start transfering your money to another user.
              </p>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <div className="col-6 d-flex flex-column gap-5 password-wrapper">
                <form action="">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text auth-input-icons">
                      <AiOutlinePhone />
                    </span>
                    <input
                      className="form-control auth-input-icons"
                      name="noTelp"
                      placeholder="Enter Phone Number"
                      onChange={handleChangeForm}
                      value={form.noTelp}
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-secondary change-btn my-5"
                      disabled={form.noTelp.length === 0}
                      type="button"
                      onClick={handleSubmit}
                    >
                      {user.isLoading ? (
                        <div className="spinner-border" role="status">
                          <span className="sr-only"></span>
                        </div>
                      ) : (
                        <>Edit Phone Number</>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
