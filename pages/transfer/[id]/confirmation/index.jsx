import React from "react";
import Image from "next/image";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";
import styles from "./confirmation.module.css";
import { useState } from "react";
import axiosClient from "utils/axios";
import { useRouter } from "next/router";
import moment from "moment";

const Confirmation = () => {
  const router = useRouter();
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

  const handlePin = (e) => {
    e.preventDefault();
    let allPin = "";
    for (const item in pin) {
      allPin += pin[item];
    }
    axiosClient
      .get(`/user/pin/${allPin}`)
      .then(() => {
        axiosClient
          .post("/transaction/transfer", {
            receiverId: router.query.receiverId,
            amount: router.query.amount,
            notes: router.query.notes,
          })
          .then((res) => {
            console.log(res.value);
            alert("Success Transfer");
            router.push("/dashboard");
          })
          .catch((err) => {
            console.log(err);
          });
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
          <div className="col-8 shadow ms-5 ps-5 py-4">
            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div
                    className="modal-header d-flex align-items-start"
                    style={{ borderBottom: "none" }}
                  >
                    <div className="d-flex flex-column">
                      <p className="" id="staticBackdropLabel">
                        Enter PIN to transfer
                      </p>
                      <p>
                        Enter your 6 digits PIN for confirmation to continue
                        transferring money.{" "}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true"></span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {" "}
                    <div className="d-flex gap-4 justify-content-start">
                      <form onSubmit={handlePin}>
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
                              : "btn-primary"
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
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <h5>Transfer To</h5>
              <div className="shadow p-3 rounded my-2">
                <div className="d-flex gap-3">
                  <div className={styles.containerUser}>
                    <Image
                      alt="profile"
                      src={
                        router.query.image
                          ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${router.query.image}`
                          : `/noprof.jpg`
                      }
                      layout="responsive"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <p>
                      {router.query.firstName} {router.query.lastName}
                    </p>
                    <p>{router.query.noTelp}</p>
                  </div>
                </div>
              </div>
              <h5>Details</h5>
              <div className="shadow p-3 rounded">
                <p>Amount</p>
                <p>Rp. {router.query.amount}</p>
              </div>
              <div className="shadow p-3 rounded">
                <p>Balance Left</p>
                <p>
                  Rp.{" "}
                  {Number(router.query.balance) - Number(router.query.amount)}
                </p>
              </div>
              <div className="shadow p-3 rounded my-2">
                <p>Date & Time</p>
                <p>{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
              </div>
              <div className="shadow p-3 rounded my-2">
                <p>Notes</p>
                <p>{router.query.notes}</p>
              </div>
              <div className="text-end my-4">
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Confirmation;
