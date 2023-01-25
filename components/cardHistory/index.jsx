import React from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const CardHistory = (props) => {
  const router = useRouter();
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    alert(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    alert(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ul>
        {currentItems.map((elem) => {
          return (
            <li key={elem.id} className="d-flex justify-content-between mb-5">
              <div key={elem.id} className="d-flex gap-3 align-items-center">
                <div key={elem.id} className="containerImage">
                  <Image
                    src={
                      elem.image
                        ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/${elem.image}`
                        : `/noprof.jpg`
                    }
                    Layout="responsive"
                    width={100}
                    height={100}
                    alt={elem.firstName}
                  />
                </div>
                <div>
                  <h5>
                    {elem.firstName ? elem.firstName : ""}{" "}
                    {elem.lastName ? elem.lastName : ""}
                  </h5>
                  <p className="text-secondary">{elem.type}</p>
                </div>
              </div>
              <div
                className={`price ${
                  elem.type === "send" ? "text-danger" : "text-success"
                }`}
              >
                <p>
                  {elem.type === "send" ? "-" : "+"} Rp {elem.amount}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
};

export default CardHistory;
