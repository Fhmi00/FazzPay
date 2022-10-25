import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

export default function Signup() {
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
                <span className="auth-left-first">
                  Start Accessing Banking Needs With All Devices and All
                  Platforms With 30.000+ Users
                </span>
                <span className="auth-left-second">
                  Transfering money is eassier than ever, you can access FazzPay
                  wherever you are. Desktop, laptop, mobile phone? we cover all
                  of that for you!
                </span>
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text auth-input-icons">
                  <FiUser />
                </span>
                <input
                  type="text"
                  className="form-control auth-input"
                  placeholder="Enter your firstname"
                />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text auth-input-icons">
                  <FiUser />
                </span>
                <input
                  type="text"
                  className="form-control auth-input"
                  placeholder="Enter your lastname"
                />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text auth-input-icons">
                  <FiMail />
                </span>
                <input
                  type="email"
                  className="form-control auth-input"
                  placeholder="Enter Your E-mail"
                />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text auth-input-icons">
                  <FiLock />
                </span>
                <input
                  type="password"
                  className="form-control auth-input"
                  placeholder="Create your password"
                />
              </div>
              <div className="d-grid">
                <button className="btn btn-primary auth-btn">Login</button>
              </div>
              <div className="text-center">
                <p className="auth-right-last">
                  Already have an account? Lets{" "}
                  <span className="auth-nav">
                    <Link href="/signin"> Login</Link>
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
