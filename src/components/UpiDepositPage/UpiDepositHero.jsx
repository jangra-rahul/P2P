// "use client";
// import React, { useState } from "react";
// import bgImage from "../../../public/QR.jpg";
// import { Row, Col, Modal, Button } from "react-bootstrap";
// import Image from "next/image";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import scnerr from "../../../public/scener.svg";
// import upilogo from "../../../public/upiLogo.svg";
// import gallery from "../../../public/GalleryIcon.svg";
// import backBg from "../../../public/backbg.jpg";
// import photo from "../../../public/photoIcon.svg";
// import { FiCopy } from "react-icons/fi";
// import { toast, ToastContainer } from "react-toastify";
// import Link from "next/link";

// const UpiDepositHero = () => {
//   const [showModal, setShowModal] = useState(false);

//   const email = "xyz@ok.axics";

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(email);
//     toast.success("Copied to clipboard!", {
//       position: "top-right",
//       autoClose: 2000,
//     });
//   };
//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bgImage.src})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100vh",
//       }}
//       className=" min-vh-100 d-flex flex-column "
//     >
//       <div
//         className="w-100"
//         style={{
//           backgroundImage: `url(${backBg.src})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <div className="container py-4">
//           <Link href="/" className="text-decoration-none text-white">
//             <p className=" text-white fs_19 fw-semibold  mb-0">
//               <FiChevronLeft size={25} />
//               Go Back
//             </p>
//           </Link>
//         </div>
//       </div>
//       <ToastContainer />
//       <div className="container d-flex flex-column flex-grow-1 justify-content-center align-items-center py-3">
//         <Row className="justify-content-center">
//           <Col className="col-12">
//             <div className="box p-0 ">
//               <Row className="p-0">
//                 <Col className="p-lg-0" xs={12} md={12} lg={6}>
//                   <div
//                     style={{ backgroundColor: "#221933 !important" }}
//                     className="card h-100 rounded-4 p-lg-5 p-3"
//                   >
//                     <h5 className=" text-white fw-bold mb-0 fs_19">Scan QR</h5>
//                     <Image
//                       src={scnerr}
//                       className="w-100 object-cover mt-2 h-auto"
//                       alt="Logo"
//                       width={50}
//                       height={50}
//                     />

//                     <h5 className=" text-white fw-bold mb-0 mt-3 fs_19">
//                       Copy UPI ID
//                     </h5>
//                     <div className="bg-white d-flex justify-content-between align-items-center mt-2 p-2 px-3 rounded-2 ">
//                       <p className="mb-0 fs_19 color_gray fw-bold">{email}</p>
//                       <FiCopy
//                         size={18}
//                         onClick={copyToClipboard}
//                         style={{ cursor: "pointer", color: "#6B7280" }}
//                       />
//                     </div>
//                   </div>
//                 </Col>
//                 <Col
//                   xs={12}
//                   md={12}
//                   lg={6}
//                   className="mt-3 ps-0 ps-lg-5 d-flex flex-column justify-content-center align-items-center mt-lg-0"
//                 >
//                   <div className="p-lg-4 p-3 w-100">
//                     <div className="rounded-3 pt-0 pt-lg-3 p-3">
//                       <Image src={upilogo} alt="Logo" width={150} height={90} />

//                       <h5 className="fw-bold color_gray fs_36 mb-0 mt-1">
//                         Deposit via QR/UPI
//                       </h5>
//                       <p className="fs_17 color_gray mt-2">
//                         Scan the QR code or use the UPI ID to make a deposit.
//                         Once the deposit is confirmed, the amount will be
//                         credited to your wallet.
//                       </p>

//                       <h6 className="fw-bold fs_16 color_gray mb-1">
//                         Upload Payment Slip
//                       </h6>
//                       <div
//                         className="d-flex border border-1 mt-1 rounded-2 overflow-hidden w-100"
//                         style={{ maxWidth: "100%" }}
//                       >
//                         <div
//                           className="flex-grow-1 d-flex align-items-center px-3"
//                           style={{
//                             minHeight: "45px",
//                             backgroundColor: "#fff",
//                             fontSize: "14px",
//                             color: "#6B7280",
//                           }}
//                         >
//                           Click to browse to upload slip image
//                         </div>
//                         <label className="m-0 p-1">
//                           <input
//                             type="file"
//                             accept=".jpg,.jpeg,.png,.svg"
//                             hidden
//                             onChange={(e) => {
//                               // Handle upload logic here if needed
//                               console.log("Uploaded file: ", e.target.files[0]);
//                             }}
//                           />
//                           <div
//                             onClick={() => setShowModal(true)}
//                             className="h-100 fw-bold text-white rounded-3 d-flex align-items-center px-4"
//                             style={{
//                               backgroundColor: "#6140A3",
//                               color: "white",
//                               cursor: "pointer",
//                               fontWeight: 500,
//                               fontSize: "14px",
//                             }}
//                           >
//                             Browse
//                           </div>
//                         </label>
//                       </div>
//                       <small className=" color_gray fs_15 d-block mb-3 mt-1 ">
//                         Image must be JPG, PNG, or SVG and under 250KB.
//                       </small>

//                       <div className="d-flex justify-content-between align-items-center mb-2">
//                         <span className="fs_15 fw-bold color_gray fw-medium">
//                           UPI expires in
//                         </span>
//                         <span className="fs_15  color_gray mb-0">
//                           02:50 MINS
//                         </span>
//                       </div>
//                       <div className="progress mb-4" style={{ height: "5px" }}>
//                         <div
//                           className="progress-bar"
//                           role="progressbar"
//                           style={{ width: "45%", backgroundColor: "#374151" }}
//                         ></div>
//                       </div>

//                       <Link
//                         href="/payment-processe"
//                         className="text-decoration-none w-100"
//                       >
//                         <button className="CustomBut w-100 fw-bold">
//                           I have made the payment <FiChevronRight size={18} />
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//         </Row>
//       </div>
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title className=" fw-bold color_gray">Upload Via</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="d-flex flex-column gap-3">
//           <Button
//             style={{ borderColor: "#C4C4C4" }}
//             className="d-flex bg-white py-3 text-black  rounded-4 align-items-center gap-2 justify-content-start"
//             onClick={() => alert("Upload from Gallery")}
//           >
//             <Image src={gallery} alt="Logo" width={25} height={25} /> Upload
//             from Gallery
//           </Button>
//           <Button
//             style={{ borderColor: "#C4C4C4" }}
//             className="d-flex bg-white py-3 text-black  rounded-4 align-items-center gap-2 justify-content-start"
//             onClick={() => alert("Take a Picture")}
//           >
//             <Image src={photo} alt="Logo" width={25} height={25} /> Take a
//             Picture
//           </Button>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default UpiDepositHero;

// components/UpiDepositHero.js
// components/UpiDepositHero.js
"use client";
import React, { useState } from "react";
import bgImage from "../../../public/QR.png";
import { Row, Col, Modal, Button } from "react-bootstrap";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiCopy } from "react-icons/fi";
import scnerr from "../../../public/scener.svg";
import upilogo from "../../../public/upiLogo.svg";
import gallery from "../../../public/GalleryIcon.svg";
import photo from "../../../public/photoIcon.svg";
import { toast, ToastContainer } from "react-toastify";
import Link from "next/link";

const UpiDepositHero = () => {
  const email = "xyz@ok.axics";
  const [showModal, setShowModal] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    toast.success("Copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
    });
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
      className="min-vh-100 d-flex flex-column"
    >
      <div className="w-100" style={{ backgroundColor: "#221933" }}>
        <div className="container py-4">
          <Link href="/" className="text-decoration-none text-white">
            <p className="text-white fs_19 fw-semibold mb-0">
              <FiChevronLeft size={25} /> Go Back
            </p>
          </Link>
        </div>
      </div>
      <ToastContainer />
      <div className="container d-flex flex-column flex-grow-1 justify-content-center align-items-center py-3">
        <Row className="justify-content-center">
          <Col className="col-12">
            <div className="box p-0">
              <Row className="p-0">
                <Col className="p-lg-0" xs={12} md={12} lg={6}>
                  <div
                    style={{ backgroundColor: "#221933 !important" }}
                    className="card h-100 rounded-4 p-lg-5 p-3"
                  >
                    <h5 className="text-white fw-bold mb-0 fs_19">Scan QR</h5>
                    <Image
                      src={scnerr}
                      className="w-100 object-cover mt-2 h-auto"
                      alt="Logo"
                      width={50}
                      height={50}
                    />
                    <h5 className="text-white fw-bold mb-0 mt-3 fs_19">
                      Copy UPI ID
                    </h5>
                    <div className="bg-white d-flex justify-content-between align-items-center mt-2 p-2 px-3 rounded-2">
                      <p className="mb-0 fs_19 color_gray fw-bold">{email}</p>
                      <FiCopy
                        size={18}
                        onClick={copyToClipboard}
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
                      <Image src={upilogo} alt="Logo" width={150} height={90} />
                      <h5 className="fw-bold color_gray fs_36 mb-0 mt-1">
                        Deposit via QR/UPI
                      </h5>
                      <p className="fs_17 color_gray mt-2">
                        Scan the QR code or use the UPI ID to make a deposit.
                        Once the deposit is confirmed, the amount will be
                        credited to your wallet.
                      </p>
                      <h6 className="fw-bold fs_16 color_gray mb-1">
                        Upload Payment Slip
                      </h6>
                      <div
                        className="d-flex border border-1 mt-1 rounded-2 overflow-hidden w-100"
                        style={{ maxWidth: "100%" }}
                      >
                        <div
                          className="flex-grow-1 d-flex align-items-center px-3"
                          style={{
                            minHeight: "45px",
                            backgroundColor: "#fff",
                            fontSize: "14px",
                            color: "#6B7280",
                          }}
                        >
                          Click to browse to upload slip image
                        </div>
                        <label className="m-0 p-1">
                          <input
                            type="file"
                            accept=".jpg,.jpeg,.png,.svg"
                            hidden
                            onChange={(e) => {
                              console.log("Uploaded file: ", e.target.files[0]);
                            }}
                          />
                          <div
                            className="h-100  fw-bold d-md-flex d-none text-white rounded-3  align-items-center px-4"
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
                          <div
                            className="h-100 fw-bold d-flex d-md-none text-white rounded-3  align-items-center px-4"
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
                        </label>
                      </div>
                      <small className="color_gray fs_15 d-block mb-3 mt-1">
                        Image must be JPG, PNG, or SVG and under 250KB.
                      </small>

                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="fs_15 fw-bold color_gray fw-medium">
                          UPI expires in
                        </span>
                        <span className="fs_15 color_gray mb-0">
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

export default UpiDepositHero;
