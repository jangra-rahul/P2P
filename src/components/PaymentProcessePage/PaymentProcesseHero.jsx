"use client";
import React from "react";
import bgImage from "../../../public/QR.jpg";
import processeIcon from "../../../public/processeIcon.svg";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const PaymentProcesseHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
      className=" min-vh-100 d-flex flex-column justify-content-center align-items-center"
    >
      <Row className="w-100 d-flex justify-content-center ">
        <Col xs={12} md={12} lg={8}>
          <div className="box w-100 text-center ">
            <Image
              src={processeIcon}
              width={430}
              className="customW"
              height={330}
            />
            <h5 className=" fs_36 fw-bold mt-3" style={{ color: "#6140A3" }}>
              {" "}
              Payment Order is Being Processed
            </h5>
            <p className=" fs_17 color_gray mt-2">
              <strong>
                Transaction ID: #08fa8da9-9f57-51be-bfed-5d31ff9571d6 You will
                be
              </strong>
              <br />
              notified once your balance is updated.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentProcesseHero;
