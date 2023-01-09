import React from "react";
import Image from "next/image";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";
import ListUser from "components/listUser";
import axiosServer from "utils/axiosServer";
import Cookies from "next-cookies";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";

const Transfer = (props) => {
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row ms-5">
          <Side />
          <div className="col-8 shadow ms-5 ps-5 py-4">
            <span>Search Receiver</span>
            <form>
              <div className="d-flex">
                <button type="submit" className="btn-transfer">
                  <FiSearch />
                </button>
                <input
                  type="text"
                  placeholder="Search.."
                  className="input-transfer"
                  name="name"
                />
              </div>
            </form>
            <ListUser data={props.listUser} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Transfer;

export async function getServerSideProps(context) {
  const dataCookies = Cookies(context);
  const resultData = await axiosServer.get(
    `/user?page=1&limit=50&search=${
      context.query.name ? context.query.name : ""
    }&sort=firstName ASC`,
    {
      headers: {
        Authorization: `Bearer ${dataCookies.token}`,
      },
    }
  );

  return {
    props: {
      listUser: resultData.data.status === 200 ? resultData.data.data : [],
      pagination:
        resultData.data.status === 200 ? resultData.data.pagination : {},
      searchReceiver:
        resultData.data.status === 200 ? resultData.data.data : [],
    },
  };
}
