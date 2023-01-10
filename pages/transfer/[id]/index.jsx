import React from "react";
import Image from "next/image";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";
import { useRouter } from "next/router";
import Cookies from "next-cookies";
import axiosServer from "utils/axiosServer";
import numeral from "numeral";
import { useState } from "react";

const InputAmount = (props) => {
  const router = useRouter();
  const [data, setData] = useState({ value: "", notes: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const formValue = (param) => {
    if (!param) {
      return "";
    }
    return numeral(param).format("0,0");
  };

  const handleNavigate = () => {
    if (Number(props.myData.balance) < Number(data.value.replace(",", ""))) {
      alert("Your Balance is Not Enough");
    } else {
      router.push(
        {
          pathname: `/transfer/${router.query.id}/confirmation`,
          query: {
            amount: data.value.replace(",", ""),
            notes: data.notes,
            receiverId: router.query.id,
            balance: props.myData.balance,
            image: props.detailUser.image,
            firstName: props.detailUser.firstName,
            lastName: props.detailUser.lastName,
            noTelp: props.detailUser.noTelp,
          },
        },
        `/transfer/${router.query.id}/confirmation`
      );
    }
  };

  console.log(props.detailUser.image);

  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row ms-5">
          <Side />
          <div className="col-8 shadow ms-5 ps-5 py-4">
            <span className="transfer-money">Transfer Money</span>
            <div className="d-flex flex-row justify-content-between align-items-center me-5 mt-4">
              <div className="d-flex gap-3">
                <Image
                  alt="user"
                  src={
                    props.detailUser.image
                      ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${props.detailUser.image}`
                      : "/noprof.jpg"
                  }
                  layout="responsive"
                  width={100}
                  height={100}
                />
                <div className="d-flex flex-column gap-2">
                  <span className="transfer-receiver">
                    {props.detailUser.firstName
                      ? props.detailUser.firstName
                      : "No first name"}{" "}
                    {props.detailUser.lastName
                      ? props.detailUser.lastName
                      : "No lastname"}
                  </span>
                  <span className="transfer-receiver-numb">
                    {props.detailUser.noTelp}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-4 my-5">
              <span className="transfer-money-desc">
                Type the amount you want to transfer and then press continue to
                the next steps.
              </span>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-5 gap-5 d-flex flex-column align-items-center mt-4 mb-5">
                <div className="col-2">
                  <input
                    type="text"
                    className="form-control auth-input"
                    name="value"
                    value={formValue(data.value)}
                    onChange={handleChange}
                    placeholder="0.00"
                  />
                </div>
                <span>
                  Rp. {props.myData.balance ? props.myData.balance : 0}{" "}
                  Available
                </span>
                <input
                  type="text"
                  className="form-control auth-input"
                  name="notes"
                  onChange={handleChange}
                  value={data.notes}
                  placeholder="Add some notes"
                />
              </div>
            </div>
            <div className="text-end mt-5 me-5 mb-3">
              <button
                className="btn btn-primary auth-btn"
                onClick={handleNavigate}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InputAmount;

export const getServerSideProps = async (context) => {
  const token = Cookies(context);
  const data = await axiosServer.get(`user/profile/${context.query.id}`, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });

  const myData = await axiosServer.get(`user/profile/${token.userId}`, {
    headers: {
      Authorization: `Bearer ${token.token}`,
    },
  });

  const userId = Cookies(context);

  return {
    props: {
      detailUser: data.data.data,
      myData: myData.data.data,
      userId: userId.userId,
    },
  };
};
