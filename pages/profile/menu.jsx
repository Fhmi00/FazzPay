import React from "react";
import Image from "next/image";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";
import { FiArrowRight } from "react-icons/fi";
import { BsPencil, BsTrashFill } from "react-icons/bs";
import Link from "next/link";
import axios from "utils/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import {
  getDataUser,
  changePhoto,
  changeProfile,
  deletePhoto,
} from "stores/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Menu() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [form, setForm] = useState({ firstName: "", lastName: "" });
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [updateImage, setUpdateImage] = useState({ image: "" });
  const router = useRouter();

  console.log(user.data);

  useEffect(() => {
    dispatch(getDataUser(Cookies.get("userId")));
  }, []);

  const handleImage = (e) => {
    setUpdateImage({ image: e.target.files[0] });
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpdateImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", updateImage.image);
    dispatch(changePhoto(Cookies.get("userId"), formData))
      .then((res) => {
        alert(res.value.data.msg);
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const deleteImage = (e) => {
    e.preventDefault();
    dispatch(deletePhoto(Cookies.get("userId"))).then((res) => {
      alert(res.value.data.msg);
      window.location.reload();
    });
  };

  const handleProfile = (e) => {
    e.preventDefault();
    dispatch(changeProfile(Cookies.get("userId"), form)).then((res) => {
      alert(res.value.data.msg);
      window.location.reload();
    });
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/logout");
      localStorage.clear();
      Cookies.remove("userId");
      Cookies.remove("token");
      router.push("/signin");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row ms-5">
          <Side />
          <section className="col-8 d-flex flex-column align-items-center shadow ms-5 gap-2 py-5">
            <Image
              src={
                user.data.image
                  ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${user.data.image}`
                  : "/noprof.jpg"
              }
              width={60}
              height={60}
              alt="rob"
            />
            <p
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@getbootstrap"
            >
              <BsPencil /> Edit
            </p>

            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form
                      onSubmit={handleUpdateImage}
                      action=""
                      className="d-flex flex-column gap-5 mb-4"
                    >
                      <input type="file" onChange={handleImage} />
                      {user.data.image ? (
                        <div
                          style={{
                            width: "150px",
                            height: "150px",
                            position: "relative",
                          }}
                        >
                          <Image
                            src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${user.data.image}`}
                            alt="currentimage"
                            width={100}
                            height={100}
                          />
                          <span
                            onClick={deleteImage}
                            style={{
                              cursor: "pointer",
                              position: "absolute",
                              top: 0,
                              right: 0,
                              width: "45px",
                            }}
                            className="text-center"
                          >
                            <BsTrashFill />
                          </span>
                        </div>
                      ) : (
                        <div style={{ width: "50px", height: "50px" }}>
                          <Image
                            src="/noprof.jpg"
                            alt="no-profile"
                            width={100}
                            height={100}
                          />
                        </div>
                      )}
                      <button className="btn btn-primary" type="submit">
                        Edit Image
                      </button>
                    </form>
                    <form onSubmit={handleProfile}>
                      <div className="mb-3">
                        <label className="col-form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          value={form.firstName}
                          onChange={handleChangeForm}
                          name="firstName"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="col-form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          value={form.lastName}
                          onChange={handleChangeForm}
                          name="lastName"
                          placeholder="Enter your last name"
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <span className="profile-menu-name">
              {user.data.firstName ? user.data.firstName : "No firstname"}{" "}
              {user.data.lastName ? user.data.lastName : "no lastname"}
            </span>
            <span className="profile-menu-numb">{user.data.noTelp}</span>
            <div className="d-flex flex-column mt-4 gap-3">
              <button
                type="button"
                className="btn btn-secondary d-flex justify-content-between align-items-center profile-menu-btn"
              >
                <Link href="/profile/personal-information">
                  Personal Information
                </Link>{" "}
                <FiArrowRight />
              </button>
              <button
                type="button"
                className="btn btn-secondary d-flex justify-content-between align-items-center text-start profile-menu-btn"
              >
                <Link href="/profile/change-password">Change Password</Link>
                <FiArrowRight />
              </button>
              <button
                type="button"
                className="btn btn-secondary d-flex justify-content-between align-items-center text-start profile-menu-btn"
              >
                <Link href="/profile/change-pin">Change Pin</Link>
                <FiArrowRight />
              </button>
              <button
                type="button"
                className="btn btn-secondary text-start profile-menu-btn"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
