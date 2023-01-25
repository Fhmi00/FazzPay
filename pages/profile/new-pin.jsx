import React, { useState } from "react";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { changePin } from "stores/actions/user";

export default function NewPin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [pin, setPin] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
    pin5: "",
    pin6: "",
  });

  const handleChange = (e) => {
    setPin({ ...pin, [e.target.id]: e.target.value });
  };

  const inputFocus = (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus();
      }
    } else {
      const next = e.target.tabIndex;
      if (next < 6) {
        e.target.form.elements[next].focus();
      }
    }
  };

  const handleSubmitPin = (e) => {
    e.preventDefault();
    let allPin = "";
    for (const item in pin) {
      allPin += pin[item];
    }
    dispatch(changePin(Cookies.get("userId"), { pin: allPin }))
      .then((res) => {
        alert(res.value.data.msg);
        setPin({
          pin1: "",
          pin2: "",
          pin3: "",
          pin4: "",
          pin5: "",
          pin6: "",
        });
        router.push("/profile/menu");
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

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
              <form onSubmit={handleSubmitPin}>
                <div className="d-flex gap-4 justify-content-start">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item}>
                      <input
                        type="text"
                        maxLength="1"
                        autoComplete="off"
                        className="form-control text-center"
                        style={{ width: "58px", height: "55px" }}
                        tabIndex={item}
                        id={`pin${item}`}
                        value={pin[`pin${item}`]}
                        onChange={handleChange}
                        onKeyUp={inputFocus}
                      />
                    </div>
                  ))}
                </div>
                <div className="d-grid my-4">
                  <button
                    type="submit"
                    className={`mt-5 btn ${
                      !pin.pin1 ||
                      !pin.pin2 ||
                      !pin.pin3 ||
                      !pin.pin4 ||
                      !pin.pin5 ||
                      !pin.pin6
                        ? "buttonDisabled"
                        : "buttonUnDisabled"
                    }`}
                    disabled={
                      !pin.pin1 ||
                      !pin.pin2 ||
                      !pin.pin3 ||
                      !pin.pin4 ||
                      !pin.pin5 ||
                      !pin.pin6
                    }
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
