import React from "react";
import bgImage from "../../../public/QR.jpg";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import crossIcon from "../../../public/More.png";
import upiLogo from "../../../public/upiLogowith.svg";
import banckLogo from "../../../public/banckLogowith.svg";
import Link from "next/link";

const DepositTypeHero = () => {
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
      <div className="container py-3">
        <Row className="justify-content-center">
          <Col xs={12} md={12} lg={10}>
            <div className="box position-relative ">
              <div className="position-absolute positionClass me-3 mt-3">
                <Image
                  style={{ cursor: "pointer" }}
                  src={crossIcon}
                  alt="Logo"
                  width={30}
                  height={30}
                />
              </div>
              <h4 className="color_gray  mb-0 fw-bold fs_32">
                How would you like to make your deposit?
              </h4>
              <p className="fs_19 color_gray mt-2">
                Continue with UPI ID or Bank account to make a deposit. Once the
                deposit is confirmed, Amount will be credited to you wallet.
              </p>
              <Row>
                <Col xs={12} md={12} lg={6}>
                  <div className="card rounded-3 p-3">
                    <Image
                      src={upiLogo}
                      className="w-100 object-cover h-auto"
                      alt="Logo"
                      width={50}
                      height={50}
                    />
                    <h5 className="fw-bold color_gray fs_22 mb-0 mt-3">UPI </h5>
                    <p className="fs_17 color_gray mt-2">
                      Scan a QR code or use UPI ID to make an instant deposit.
                    </p>
                    <Link
                      className="text-decoration-none w-100 text-white"
                      href="/upi-transfer"
                    >
                      <button className="CustomBut w-100">
                        Deposit via UPI
                      </button>
                    </Link>
                  </div>
                </Col>
                <Col xs={12} md={12} lg={6} className="mt-3 mt-lg-0">
                  <div className="card rounded-3 p-3">
                    <Image
                      src={banckLogo}
                      className="w-100 object-cover h-auto"
                      alt="Logo"
                      width={50}
                      height={50}
                    />
                    <h5 className="fw-bold color_gray fs_22 mb-0 mt-3">
                      Bank Transfers{" "}
                    </h5>
                    <p className="fs_17 color_gray mt-2">
                      Manually transfer funds to our account and upload the
                      payment receipt.
                    </p>
                    <Link
                      className="text-decoration-none w-100 text-white"
                      href="/bank-transfer"
                    >
                      <button className="CustomBut w-100">
                        Deposit via Bank Transfer
                      </button>
                    </Link>
                  </div>
                </Col>
              </Row>
              <div className="d-md-flex justify-content-between align-items-center mt-4">
                <i className="fs_16 mb-0 color_gray">
                  Transaction ID:{" "}
                  <strong> #08fa8da9-9f57-51be-bfed-5d31ff9571d6</strong>
                </i>
                <p
                  style={{ color: "#6140A3" }}
                  className=" fs_16 mt-1 mt-md-0 fw-bold mb-0"
                >
                  Amount: $1,000
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DepositTypeHero;
