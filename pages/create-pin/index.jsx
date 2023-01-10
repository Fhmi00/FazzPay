import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axiosClient from "utils/axios";
import Cookies from "js-cookie";
import styles from "./pin.module.css";

export default function CreatePin() {
  const [pin, setPin] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
    pin5: "",
    pin6: "",
  });

  const [success, setSuccess] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let allPin = "";
    for (const item in pin) {
      allPin += pin[item];
    }
    const id = Cookies.get("userId");
    try {
      setSuccess(true);
      await axiosClient.patch(`/user/pin/${id}`, { pin: allPin });
    } catch (error) {
      setSuccess(false);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <section className="col-7 vh-100 auth-left-background">
            <div className="d-flex flex-column mx-5 my-5">
              <span className="ms-5 auth-logo">FazzPay</span>
              <div style={{ width: 550, height: 600 }}>
                <Image
                  src="/phone.png"
                  width={550}
                  height={600}
                  layout="responsive"
                  alt="phone"
                />
              </div>
              <span className="ms-5 mb-4 auth-left-title">
                App that Covering Banking Needs.
              </span>
              <div className="col-8 ms-5 auth-left-last">
                <span>
                  FazzPay is an application that focussing in banking needs for
                  all users in the world. Always updated and always following
                  world trends. 5000+ users registered in FazzPay everyday with
                  worldwide users coverage.
                </span>
              </div>
            </div>
          </section>
          <section className="col-5 px-5 py-5">
            <div className="col-10 d-flex flex-column gap-5">
              <div className="d-flex flex-column gap-5 mt-5 auth-desc-wrapper">
                {/* <span className="auth-left-first">
                  Start Accessing Banking Needs With All Devices and All
                  Platforms With 30.000+ Users
                </span>
                <span className="auth-left-second">
                  Transfering money is eassier than ever, you can access FazzPay
                  wherever you are. Desktop, laptop, mobile phone? we cover all
                  of that for you!
                </span> */}
              </div>
              <form onSubmit={handleSubmit}>
                {success ? (
                  <>
                    <div className="w-25">
                      <Image
                        src="/success.png"
                        layout="responsive"
                        width={100}
                        height={100}
                      />
                    </div>
                    <h5 className="">Your PIN Was Successfully Created</h5>
                    <p className="text-secondary py-3">
                      Your PIN was successfully created and you can now access
                      all the features in FazzPay.
                    </p>
                  </>
                ) : (
                  <>
                    <h5 className="">
                      Start Accessing Banking Needs With All Devices and All
                      Platforms With 30.000+ Users
                    </h5>
                    <p className="text-secondary py-3">
                      Transfering money is eassier than ever, you can access
                      FazzPay wherever you are. Desktop, laptop, mobile phone?
                      we cover all of that for you!
                    </p>
                  </>
                )}

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
                        ? styles.buttonDisabled
                        : styles.buttonUnDisabled
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
                    {!success && <>Confirm</>}
                    {success && (
                      <Link href="/dashboard">
                        <a
                          href=""
                          style={{
                            textDecoration: "none",
                            color: "white",
                            fontWeight: 700,
                          }}
                        >
                          Go to dashboard
                        </a>
                      </Link>
                    )}
                  </button>
                </div>
              </form>
              {/* <div className="d-flex flex-row gap-3 fw-input-pin">
                <div className="d-flex align-items-center auth-pin-wrapper">
                  <input maxlength="1" type="text" className="auth-input-pin" />
                </div>
                <div className="d-flex align-items-center auth-pin-wrapper">
                  <input maxlength="1" type="text" className="auth-input-pin" />
                </div>
                <div className="d-flex align-items-center auth-pin-wrapper">
                  <input maxlength="1" type="text" className="auth-input-pin" />
                </div>
                <div className="d-flex align-items-center auth-pin-wrapper">
                  <input maxlength="1" type="text" className="auth-input-pin" />
                </div>
                <div className="d-flex align-items-center auth-pin-wrapper">
                  <input maxlength="1" type="text" className="auth-input-pin" />
                </div>
                <div className="d-flex align-items-center auth-pin-wrapper">
                  <input maxlength="1" type="text" className="auth-input-pin" />
                </div>
              </div> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
