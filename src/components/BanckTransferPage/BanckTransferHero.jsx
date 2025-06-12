"use client";
import React, { useState } from "react";
import bgImage from "../../../public/QR.jpg";
import { Row, Col, Modal, Button } from "react-bootstrap";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import banklogo from "../../../public/bankLogo.svg";
import editIcon from "../../../public/editIcon.svg";
import ssIcon from "../../../public/ssIcon.svg";
import gallery from "../../../public/GalleryIcon.svg";
import photo from "../../../public/photoIcon.svg";
import { FiCopy } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import backBg from "../../../public/backbg.jpg";

import Link from "next/link";

const BanckTransferHero = () => {
  const email = "xyz@ok.axics";
  const accountName = "FinX Payments";
  const banckName = "Feddral";
  const ifscCode = "FED1234567";
  const accountNumber = "FED1234567";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    toast.success("Copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
    });
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
      className=" min-vh-100 d-flex flex-column "
    >
      <div
        className="w-100"
        style={{
          backgroundImage: `url(${backBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container py-4">
          <Link
            href="/upi-transfer"
            className="text-decoration-none text-white"
          >
            <p className=" text-white fs_19 fw-semibold  mb-0">
              <FiChevronLeft size={25} />
              Go Back
            </p>
          </Link>
        </div>
      </div>
      <ToastContainer />
      <div className="container d-flex flex-column flex-grow-1 justify-content-center align-items-center py-3">
        <Row className="justify-content-center">
          <Col className="col-12">
            <div className="box p-0 ">
              <Row className="p-0">
                <Col className="p-lg-0" xs={12} md={12} lg={6}>
                  <div
                    // style={{ backgroundColor: "#221933 !important" }}
                    className="card h-100 bg_clr rounded-4 p-lg-5 p-3"
                  >
                    <h5 className=" text-white fw-bold mb-0 mt-3 fs_17">
                      Account Name
                    </h5>
                    <div className="bg-white d-flex justify-content-between align-items-center mt-2 p-2 px-3 rounded-2 ">
                      <p className="mb-0 fs_17 color_gray fw-bold">
                        {accountName}
                      </p>
                      <FiCopy
                        size={18}
                        onClick={() =>
                          copyToClipboard(accountName, "Account Name")
                        }
                        style={{ cursor: "pointer", color: "#6B7280" }}
                      />
                    </div>
                    <h5 className=" text-white fw-bold mb-0 mt-4 pt-2 fs_17">
                      Bank Name
                    </h5>
                    <div className="bg-white d-flex justify-content-between align-items-center mt-2 p-2 px-3 rounded-2 ">
                      <p className="mb-0 fs_17 color_gray fw-bold">
                        {banckName}
                      </p>
                      <FiCopy
                        size={18}
                        onClick={() => copyToClipboard(bankName, "Bank Name")}
                        style={{ cursor: "pointer", color: "#6B7280" }}
                      />
                    </div>
                    <h5 className=" text-white fw-bold mb-0 mt-4 pt-2 fs_17">
                      IFSC Code
                    </h5>
                    <div className="bg-white d-flex justify-content-between align-items-center mt-2 p-2 px-3 rounded-2 ">
                      <p className="mb-0 fs_17 color_gray fw-bold">
                        {ifscCode}
                      </p>
                      <FiCopy
                        size={18}
                        onClick={() => copyToClipboard(ifscCode, "IFSC Code")}
                        style={{ cursor: "pointer", color: "#6B7280" }}
                      />
                    </div>
                    <h5 className=" text-white fw-bold mb-0 mt-4 pt-2 fs_17">
                      Account Number
                    </h5>
                    <div className="bg-white d-flex justify-content-between align-items-center mt-2 p-2 px-3 rounded-2 ">
                      <p className="mb-0 fs_17 color_gray fw-bold">
                        {accountNumber}
                      </p>
                      <FiCopy
                        size={18}
                        onClick={() =>
                          copyToClipboard(accountNumber, "Account Number")
                        }
                        style={{ cursor: "pointer", color: "#6B7280" }}
                      />
                    </div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={12}
                  lg={6}
                  className="mt-3 ps-0 ps-lg-5 d-flex flex-column justify-content-center align-items-center mt-lg-0"
                >
                  <div className="p-lg-4 p-3 w-100">
                    <div className="rounded-3 pt-0 pt-lg-3 p-3">
                      <Image
                        src={banklogo}
                        alt="Logo"
                        width={150}
                        height={90}
                      />

                      <h5 className="fw-bold color_gray fs_36 mb-0 mt-1">
                        Deposit via Bank Transfer
                      </h5>
                      <p className="fs_17 color_gray mt-2">
                        Please make a NEFT/IMPS transfer to the Below bank
                        account. Once done, upload the payment receipt for
                        verification.
                      </p>

                      <h6 className="fw-bold fs_16 color_gray mb-1">
                        Upload Payment Slip here
                      </h6>
                      <div
                        className="d-flex border border-1 align-items-center mt-1 rounded-2 overflow-hidden w-100"
                        style={{ maxWidth: "100%" }}
                      >
                        {previewUrl && (
                          <div className="mt-1 ps-2 pb-1">
                            <Image
                              src={previewUrl}
                              alt="Preview"
                              width={30}
                              height={30}
                              style={{
                                borderRadius: "10px",
                              }}
                            />
                          </div>
                        )}

                        <div
                          className="flex-grow-1 d-flex align-items-center px-3"
                          style={{
                            minHeight: "45px",
                            backgroundColor: "#fff",
                            fontSize: "14px",
                            color: "#6B7280",
                          }}
                        >
                          {selectedFile
                            ? selectedFile.name
                            : "Click to browse to upload slip image"}
                        </div>
                        <label className="m-0 p-1">
                          <input
                            type="file"
                            accept="image/*"
                            hidden
                            id="galleryInput"
                            onChange={handleFileChange}
                          />
                          {previewUrl ? (
                            <>
                              {" "}
                              <Image
                                src={editIcon}
                                alt="Logo"
                                width={30}
                                height={30}
                              />
                            </>
                          ) : (
                            <div
                              className="h-100 py-2 fw-bold d-md-flex d-none text-white rounded-3  align-items-center px-4"
                              style={{
                                backgroundColor: "#6140A3",
                                color: "white",
                                cursor: "pointer",
                                fontWeight: 500,
                                fontSize: "14px",
                              }}
                            >
                              Browse
                            </div>
                          )}
                        </label>

                        {previewUrl ? (
                          <></>
                        ) : (
                          <div
                            className="h-100 fw-bold py-2 my-1 me-1 d-flex d-md-none text-white rounded-3  align-items-center px-4"
                            style={{
                              backgroundColor: "#6140A3",
                              color: "white",
                              cursor: "pointer",
                              fontWeight: 500,
                              fontSize: "14px",
                            }}
                            onClick={() => setShowModal(true)}
                          >
                            Browse
                          </div>
                        )}
                      </div>
                      <small className=" color_gray fs_15 d-block mb-3 mt-1 ">
                        Image must be JPG, PNG, or SVG and under 250KB.
                      </small>

                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fs_15 fw-bold color_gray fw-medium">
                          UPI expires in
                        </span>
                        <span className="fs_15  color_gray mb-0">
                          02:50 MINS
                        </span>
                      </div>
                      <div className="progress mb-4" style={{ height: "5px" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "45%", backgroundColor: "#374151" }}
                        ></div>
                      </div>

                      <Link
                        href="/payment-processe"
                        className="text-decoration-none w-100"
                      >
                        <button className="CustomBut w-100 fw-bold">
                          I have made the payment <FiChevronRight size={18} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
      <Modal centered show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold color_gray">Upload Via</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column gap-3">
          <Button
            style={{ borderColor: "#C4C4C4" }}
            className="d-flex bg-white py-3 text-black rounded-4 align-items-center gap-2 justify-content-start"
            onClick={() => document.getElementById("galleryInput").click()}
          >
            <Image src={gallery} alt="Gallery" width={25} height={25} /> Upload
            from Gallery
          </Button>
          <Button
            style={{ borderColor: "#C4C4C4" }}
            className="d-flex bg-white py-3 text-black rounded-4 align-items-center gap-2 justify-content-start"
            onClick={() => document.getElementById("cameraInput").click()}
          >
            <Image src={photo} alt="Camera" width={25} height={25} /> Take a
            Picture
          </Button>
        </Modal.Body>
      </Modal>

      <input
        type="file"
        accept="image/*"
        capture="environment"
        hidden
        id="cameraInput"
        onChange={(e) =>
          console.log("Captured from camera:", e.target.files[0])
        }
      />
      <input
        type="file"
        accept="image/*"
        hidden
        id="galleryInput"
        onChange={(e) =>
          console.log("Uploaded from gallery:", e.target.files[0])
        }
      />
    </div>
  );
};

export default BanckTransferHero;
