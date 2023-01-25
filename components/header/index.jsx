import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import axiosClient from "utils/axios";
import Cookies from "js-cookie";
import { FiBell } from "react-icons/fi";

export default function Header() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});

  const togglePopNotif = () => {
    setShow(!show);
  };

  const getData = async () => {
    try {
      const result = await axiosClient.get(
        `/transaction/history?page=1&limit=5&filter=MONTH`
      );
      setData(result.data.data);
    } catch (error) {
      alert(error);
    }
  };

  const getAccount = async () => {
    try {
      const result = await axiosClient.get(
        `/user/profile/${Cookies.get("userId")}`
      );
      setUser(result.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getData();
    getAccount();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 shadow d-flex flex-row justify-content-between px-5 py-4 rounded-bottom">
          <span className="ms-5 header-logo">FazzPay</span>
          <div className="d-flex flex-row me-5 align-items-center gap-3">
            <div className="containerImage">
              <Image
                src={
                  user?.data?.image
                    ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${user.data.image}`
                    : "/noprof.jpg"
                }
                width={50}
                height={50}
                alt="user"
              />
            </div>
            <div className="d-flex flex-column">
              <span className="header-name">
                {user?.data?.firstName} {user?.data?.lastName}
              </span>
              <span className="header-telpnumb">{user?.data?.noTelp}</span>
            </div>
            <FiBell className="header-bell" onClick={togglePopNotif} />
            <div
              className={`containerNotif shadow ${show ? "d-block" : "d-none"}`}
            >
              <ul className="px-0">
                {data.map((elem) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <li className="d-flex gap-4 shadow m-4">
                      <div className="d-flex align-items-center">
                        {elem.type === "send" ? (
                          <i className="bi bi-arrow-down text-danger"></i>
                        ) : (
                          <i className="bi bi-arrow-up text-success"></i>
                        )}
                      </div>
                      <div className="">
                        <p>
                          {elem.type} from {elem.firstName} {elem.lastName}
                        </p>
                        <p>Rp {elem.amount}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
