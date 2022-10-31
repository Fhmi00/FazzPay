import React from "react";
// import Image from "next/image";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Header from "components/header";
import Footer from "components/footer";
import Side from "components/side";
import ReceiverCard from "components/transfer/receiverCard";
import { FiSearch } from "react-icons/fi";
import { getAllUser } from "stores/actions/user";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

export default function SelectReceiver() {
  // const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const getData = () => {
    try {
      dispatch(getAllUser())
      .then ((response) => setData(response.value.data.data))
      .catch ((error) => console.log(error))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])
  // console.log(user);

  return (
    <>
      <Header />
      <div className="container-fluid mt-5">
        <div className="row ms-5">
          <Side />
          <div className="col-8 shadow ms-5 ps-5 py-4">
            <span>Search Receiver</span>
            <InputGroup className="my-3">
              <FiSearch />
              <Form.Control
                placeholder="Search receiver here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            {data.length > 0 ? (
              data.map((item)=> (
                <div key={item.id}>
                  <ReceiverCard data={item}/>
                </div>
              ))
            ):(
              <div>
                <span>data not found</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
