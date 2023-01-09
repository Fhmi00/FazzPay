import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Link from "next/link";
import { FiGrid, FiArrowUp, FiPlus, FiUser, FiLogOut } from "react-icons/fi";
import axios from "utils/axios";

export default function Side() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formTopup, setFormTopup] = useState({
    amount: "",
  });

  const handleChangeTopupForm = (e) => {
    setFormTopup({ ...formTopup, amount: e.target.value });
  };
  console.log(formTopup);

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

  const handleTopupSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const resultTopup = await axios.post("/transaction/top-up", formTopup);
      window.open(resultTopup.data.data.redirectUrl);
      setIsLoading(false);
      setFormTopup({ amount: "" });
      alert("top up success");
      router.reload();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert("failed");
    }
  };

  return (
    <div className="col-3 d-flex flex-column py-4 px-5 shadow rounded justify-content-between">
      <div className="d-flex flex-column gap-5 sidebar-nav">
        <div className="d-flex flex-row align-items-center mt-3 gap-3">
          <FiGrid />
          <span>
            <Link href="/dashboard">Dashboard</Link>
          </span>
        </div>
        <div className="d-flex flex-row align-items-center gap-3">
          <FiArrowUp />
          <span>
            <Link href="/transfer">Transfer</Link>
          </span>
        </div>
        <div className="d-flex flex-row align-items-center gap-3">
          <FiPlus />
          <span className="btn-top-up" onClick={handleShow}>
            Top Up
          </span>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Top up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    Enter the amount of money, and click continue
                  </Form.Label>
                  <Form.Control
                    type="number"
                    onChange={handleChangeTopupForm}
                    value={formTopup.amount}
                    placeholder="0"
                    required
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                type="submit"
                disabled={!formTopup.amount}
                onClick={handleTopupSubmit}
              >
                {isLoading ? (
                  <Button variant="primary" disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>
                ) : (
                  "continue"
                )}
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="d-flex flex-row align-items-center gap-3">
          <FiUser />
          <span>
            <Link href="/profile/menu">Profile</Link>
          </span>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center gap-3 mt-5 mb-3 sidebar-nav">
        <FiLogOut />
        <Button className="btn-top-up" onClick={logout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
