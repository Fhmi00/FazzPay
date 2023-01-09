import React, { useState } from "react";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLock,
} from "react-icons/ai";
import { updatePassword } from "stores/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function ChangePassword() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const user = useSelector((state) => state.user);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(updatePassword(Cookies.get("userId"), form))
      .then((res) => {
        alert(res.value.data.msg);
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
            <span className="profile-personal">Edit Phone Number</span>
            <div className="col-5 profile-personal-desc mt-3 mb-4">
              <p>
                You must enter your current password and then type your new
                password twice.
              </p>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <div className="col-6 d-flex flex-column gap-5 password-wrapper">
                <form action="">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text auth-input-icons">
                      <AiOutlineLock />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control auth-input-icons"
                      name="oldPassword"
                      placeholder="Current password"
                      onChange={handleChangeForm}
                      value={form.oldPassword}
                    />
                    {showPassword ? (
                      <span className="input-group-text auth-input-icons">
                        <AiOutlineEye onClick={toggleShowPassword} />
                      </span>
                    ) : (
                      <span className="input-group-text auth-input-icons">
                        <AiOutlineEyeInvisible onClick={toggleShowPassword} />
                      </span>
                    )}
                  </div>
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text auth-input-icons">
                      <AiOutlineLock />
                    </span>
                    <input
                      type={showPassword1 ? "text" : "password"}
                      className="form-control auth-input-icons"
                      name="newPassword"
                      placeholder="New password"
                      onChange={handleChangeForm}
                      value={form.newPassword}
                    />
                    {showPassword1 ? (
                      <span className="input-group-text auth-input-icons">
                        <AiOutlineEye onClick={toggleShowPassword1} />
                      </span>
                    ) : (
                      <span className="input-group-text auth-input-icons">
                        <AiOutlineEyeInvisible onClick={toggleShowPassword1} />
                      </span>
                    )}
                  </div>
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text auth-input-icons">
                      <AiOutlineLock />
                    </span>
                    <input
                      type={showPassword2 ? "text" : "password"}
                      className="form-control auth-input-icons"
                      name="confirmPassword"
                      placeholder="Repeat new password"
                      onChange={handleChangeForm}
                      value={form.confirmPassword}
                    />
                    {showPassword2 ? (
                      <span className="input-group-text auth-input-icons">
                        <AiOutlineEye onClick={toggleShowPassword2} />
                      </span>
                    ) : (
                      <span className="input-group-text auth-input-icons">
                        <AiOutlineEyeInvisible onClick={toggleShowPassword2} />
                      </span>
                    )}
                  </div>
                  <div className="d-grid">
                    <button
                      disabled={
                        form.oldPassword.length === 0 ||
                        form.confirmPassword.length === 0 ||
                        form.newPassword.length === 0
                      }
                      type="button"
                      className="btn btn-secondary change-btn my-5"
                      onClick={handleSubmit}
                    >
                      {user.isLoading ? (
                        <div className="spinner-border" role="status">
                          <span className="sr-only"></span>
                        </div>
                      ) : (
                        <>Change Password</>
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
