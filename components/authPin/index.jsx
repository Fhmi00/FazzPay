import React, { useState } from "react";
import axios from "utils/axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function AuthPin() {
  const router = useRouter();
  const userId = useSelector((state) => state.user.data.id);

  const [pin, setPin] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
    pin5: "",
    pin6: "",
  });

  const [createPin, setCreatePin] = useState(false);

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
    try {
      e.preventDefault();
      let allPin = "";
      for (const item in pin) {
      allPin += pin[item];
      }
      await axios.patch(`/user/pin/${userId}`, {pin: allPin});
      setCreatePin(true);
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <div className="text-center container">
      {createPin? (
      <form onSubmit={handleSubmit}>
        <div className="d-flex gap-2 justify-content-center">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item}>
              <input
                type="text"
                maxLength="1"
                autoComplete="off"
                className="form-control text-center"
                style={{ width: "40px" }}
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
          <button type="submit" className="btn btn-primary auth-btn">
            Submit
          </button>
        </div>
      </form>
      ) : (
        <div>
          <span className="auth-left-first">Your PIN Was Successfully Created</span>
          <br />
          <span className="auth-left-second">Your PIN was successfully created and you can now access all the features in FazzPay.</span>
          <div className="d-grid my-4">
            <button type="submit" className="btn btn-primary auth-btn" onClick={() => router.push("/dashboard")}>continue</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Reference : https://medium.com/@ahmedaffan311/otp-input-in-react-js-3b36ed67e360