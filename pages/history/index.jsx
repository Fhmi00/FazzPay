import React from "react";
import Header from "components/header";
import Side from "components/side";
import Footer from "components/footer";
import axiosClient from "utils/axiosServer";
import CardHistory from "components/cardHistory";
import Cookies from "next-cookies";
import Dropdown from "react-bootstrap/Dropdown";
import { useRouter } from "next/router";

const History = (props) => {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row ms-5">
          <Side />
          <div className="col-8 shadow ms-5 ps-5 py-4">
            <div className="d-flex justify-content-between me-5">
              <span>Transaction History</span>
              <Dropdown className="mb-3" name="history">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  -- Select Filter --
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item value="Week">Week</Dropdown.Item>
                  <Dropdown.Item value="Month">Month</Dropdown.Item>
                  <Dropdown.Item value="Year">Year</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <CardHistory data={props.history} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default History;

export const getServerSideProps = async (context) => {
  const dataUser = Cookies(context);
  const history = await axiosClient.get(
    `/transaction/history?page=1&limit=50&filter=${
      context.query.filter ? context.query.history : ""
    }`,
    {
      headers: {
        Authorization: `Bearer ${dataUser.token}`,
      },
    }
  );
  return {
    props: {
      data: dataUser,
      history: history.data.data,
    },
  };
};
