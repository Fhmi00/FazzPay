import React from "react";
import Image from "next/image";

export default function ReceiverCard(props) {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center me-5 mt-4">
              <div className="d-flex gap-3">
                <Image
                  src="/robert.png"
                  width={50}
                  height={50}
                  alt="rob"
                ></Image>
                <div className="d-flex flex-column">
                  <span>{props.data.firstName} {props.data.lastName}</span>
                  <span>{props.data.noTelp}</span>
                </div>
              </div>
        </div>
    )
}