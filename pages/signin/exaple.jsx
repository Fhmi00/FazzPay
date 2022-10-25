import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({});

  const handleSubmit = () => {
    console.log("Login");
    console.log(form);
  };

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="container text-center">
      <div className="mt-2">
        <form className="card p-5">
          <h1>Login</h1>
          <hr />
          <input
            type="email"
            className="form-control my-2"
            name="email"
            placeholder="Input email ..."
            onChange={handleChangeText}
          />
          <input
            type="password"
            className="form-control my-2"
            name="password"
            placeholder="Input password ..."
            onChange={handleChangeText}
          />
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
