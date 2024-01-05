"use client";
import React, {useEffect, useState} from "react";
import styles from "./brandsProduct.module.css";
import Nav from "@/component/Navbar/Nav";
import checkdash from "../../../../public/checkdash.svg";
import pageLogo from "../../../../public/pageLogomd.png";
import pageicon1 from "../../../../public/social1.svg";
import pageicon2 from "../../../../public/social2.svg";
import pageicon3 from "../../../../public/social3.svg";
import pageicon4 from "../../../../public/social4.svg";
// import pageicon4 from "../../../../public/social4.svg";
import certified from "../../../../public/certified.svg";
import copy from "../../../../public/copy.svg";
import redix from "../../../../public/redix.png";
import NoImage from "../../../../public/no-image.jpg";
import Image from "next/image";
import {useParams} from "next/navigation";
import axiosInstance from "../../../../utils/axios";
import Link from "next/link";
import {base_url} from "../../../../utils/auth";
const page = () => {
  const param = useParams();
  const [item, setItem] = useState({});
  const [attribute, setAttribute] = useState("");
  const [column, setColumn] = useState("");

  useEffect(() => {
    axiosInstance
      .get("item-details/" + param.brand_name + "/" + param.product_name)
      .then((res) => {
        setItem(res.data.data);
        console.log(res.data.data);

        setAttribute(res.data.final_data);
      });
  }, []);

  const formateDate = (dateString) => {
    // const dateString = '2023-11-22T18:32:49.000000Z';
    const dateObject = new Date(dateString);

    // Format the date as "d M, Y"
    const options = {day: "numeric", month: "short", year: "numeric"};
    const formatted = dateObject.toLocaleDateString("en-US", options);
    return formatted;
  };

  const [activeAccordion, setActiveAccordion] = useState("");
  const [activeAccordion2, setActiveAccordion2] = useState("");
  const [activeAccordion3, setActiveAccordion3] = useState("");
  const [activeAccordion4, setActiveAccordion4] = useState("");
  const [activeAccordion5, setActiveAccordion5] = useState("");

  const handleAccordionClick = (accordionId) => {
    setActiveAccordion((prevAccordion) =>
      prevAccordion === accordionId ? "" : accordionId
    );
  };

  const isAccordionExpanded = (accordionId) => {
    return activeAccordion === accordionId;
  };

  // const toggleAccordion = (accordionId) => {
  //   if (isAccordionExpanded(accordionId)) {
  //     setActiveAccordion("");
  //   } else {
  //     setActiveAccordion(accordionId);
  //   }
  // };

  const handleAccordionClicks = (accordionId) => {
    setActiveAccordion((prevAccordion) =>
      prevAccordion === accordionId ? null : accordionId
    );
  };
  const isAccordionExpanded2 = (accordionId) => {
    return activeAccordion2 === accordionId;
  };

  const toggleAccordion2 = (accordionId) => {
    if (isAccordionExpanded2(accordionId)) {
      setActiveAccordion2("");
    } else {
      setActiveAccordion2(accordionId);
    }
  };

  const handleAccordionClick3 = (accordionId) => {
    setActiveAccordion3((prevAccordion3) =>
      prevAccordion3 === accordionId ? "" : accordionId
    );
  };

  const isAccordionExpanded3 = (accordionId) => {
    return activeAccordion3 === accordionId;
  };

  const toggleAccordion3 = (accordionId) => {
    if (isAccordionExpanded3(accordionId)) {
      setActiveAccordion3("");
    } else {
      setActiveAccordion3(accordionId);
    }
  };
  const handleAccordionClick4 = (accordionId) => {
    setActiveAccordion4((prevAccordion4) =>
      prevAccordion4 === accordionId ? "" : accordionId
    );
  };

  const isAccordionExpanded4 = (accordionId) => {
    return activeAccordion4 === accordionId;
  };

  const toggleAccordion4 = (accordionId) => {
    if (isAccordionExpanded4(accordionId)) {
      setActiveAccordion4("");
    } else {
      setActiveAccordion4(accordionId);
    }
  };
  const handleAccordionClick5 = (accordionId) => {
    setActiveAccordion5((prevAccordion5) =>
      prevAccordion5 === accordionId ? "" : accordionId
    );
  };

  const isAccordionExpanded5 = (accordionId) => {
    return activeAccordion5 === accordionId;
  };

  // const toggleAccordion5 = (accordionId) => {
  //   if (isAccordionExpanded5(accordionId)) {
  //     setActiveAccordion5("");
  //   } else {
  //     setActiveAccordion5(accordionId);
  //   }
  // };

  const processString = (inputString) => {
    // Split the string by "/"
    if (inputString != null) {
      const values = inputString.split("/");

      if (values.length > 0) {
        const processedValues = values.map((value, index) => (
          <React.Fragment key={index}>
            {value} <br />
          </React.Fragment>
        ));
        return processedValues;
      } else {
        return values;
      }
    } else {
      return inputString;
    }
  };

  const [activeAccordions, setActiveAccordions] = useState([]);

  const toggleAccordion = (key) => {
    if (activeAccordions.includes(key)) {
      setActiveAccordions(activeAccordions.filter((item) => item !== key));
    } else {
      setActiveAccordions([...activeAccordions, key]);
    }
  };
  return (
    <div className="individual">
      {" "}
      <div className={styles["background-img"]}>
        <div>
          <Nav />
        </div>

        <div className="certificate-full-div">
          <div className="row mt-4">
            <div className="col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>

            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <div className=" redix-div">
                <div className="redix-divs">
                  <div className="certificate-image-div">
                    <Image
                      className="certificate-image"
                      src={certified.src}
                      width={44}
                      height={40}
                      alt=""
                    />
                  </div>

                  <div className="certificate-tags-div">
                    <h2
                      style={{
                        whiteSpace: "nowrap",
                      }}
                      className="certificate-tags"
                    >
                      THE BLOCKCHAIN CERTIFICATE
                    </h2>
                    <span className="certificate-ptag ">區塊鏈防偽證書</span>
                    <span className="certificate-ptag mt-2">by OneChain®</span>
                  </div>

                  <div className="certificate-des-div">
                    <h5 className="certificate-h5Tag">
                      This Certificate has been securely recorded on the
                      blockchain, ensuring its transparency and immutable
                      record. It is applicable to products produced in strict
                      compliance with ESG requirements as listed below.
                    </h5>

                    <h5 className="certificate-h5Tag">
                      此證書已安全記錄於區塊鏈上，確保其透明性和不可變紀錄。適用於嚴格符合以下列出的ESG要求的產品
                    </h5>
                  </div>

                  <div className="certificate-imageSec-div">
                    {item?.brand_details?.logo != null ? (
                      <img
                        src={`${base_url}/uploads/${item?.brand_details?.logo}`}
                        className="certificate-image-img"
                      />
                    ) : (
                      <>
                        <img src={NoImage.src} alt="" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 ">
              <div className="redix-sec-div">
                <div className="redixSec-div">
                  <div className="Blockchain-tagone-div">
                    <h5 className="Blockchain-tagone">
                      Blockchain Transaction Hx 區塊鏈上鏈紀錄
                    </h5>
                  </div>
                  <Link
                    className="no-decoration"
                    href={`https://www.onechainscan.io/transaction/${item.block_chain_url}`}
                    target="_blank"
                  >
                    <div className="Blockchain-tagotwo-div">
                      <Image src={copy.src} width={20} height={20} alt="" />
                      <h5 className="Blockchain-tagotwo">
                        {item.block_chain_url}
                      </h5>
                    </div>
                  </Link>
                  <div className="Blockchain-tagone-div">
                    <h5 className="Blockchain-tagone">
                      Issue Date 區塊鏈上鏈日期
                    </h5>
                  </div>

                  <div className="Blockchain-ptag-div">
                    <p>{formateDate(item.created_at)}</p>
                  </div>

                  {Object.keys(attribute).map(
                    (key) =>
                      key != "" && (
                        <>
                          {typeof attribute[key] === "object" &&
                          attribute[key] !== null ? (
                            <>
                              <div className="">
                                <div
                                  className="accordion"
                                  id="accordionExample"
                                >
                                  <div className="accordion-item">
                                    <div className="accor-tag-div">
                                      {/* <h6 className='accordion-header'> */}
                                      <div
                                        className={`accordion-button ${
                                          isAccordionExpanded(`collapse${key}`)
                                            ? ""
                                            : "collapsed"
                                        }`}
                                        type="button"
                                        data-bs-target={`#collapse${key}`}
                                        aria-expanded={isAccordionExpanded(
                                          `collapse${key}`
                                        )}
                                        aria-controls={`collapse${key}`}
                                        onClick={() =>
                                          handleAccordionClicks(
                                            `collapse${key}`
                                          )
                                        }
                                      >
                                        <span className="kwy"> {key}</span>
                                      </div>
                                      {/* </h6> */}

                                      <div className="chevron-icon">
                                        {isAccordionExpanded(
                                          `collapse${key}`
                                        ) ? (
                                          <svg
                                            id="chevron-btn-down"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-chevron-up "
                                            viewBox="0 0 16 16"
                                            onClick={() =>
                                              handleAccordionClicks(
                                                `collapse${key}`
                                              )
                                            }
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                                            />
                                          </svg>
                                        ) : (
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-chevron-down"
                                            viewBox="0 0 16 16"
                                            onClick={() =>
                                              handleAccordionClicks(
                                                `collapse${key}`
                                              )
                                            }
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                            />
                                          </svg>
                                        )}
                                      </div>
                                    </div>

                                    <div
                                      id={`collapse${key}`}
                                      className={`accordion-collapse collapse ${
                                        isAccordionExpanded(`collapse${key}`)
                                          ? "show"
                                          : ""
                                      }`}
                                      data-bs-parent="#accordionExample"
                                    >
                                      <div className="accordion-body">
                                        {Object.entries(attribute[key]).map(
                                          ([innerKey, innerValue], index) => (
                                            <>
                                              {innerKey != "" &&
                                              innerValue != "" ? (
                                                <div className="Blockchain-ptag-divs">
                                                  <p className="block-ptext">
                                                    {innerKey}{" "}
                                                  </p>
                                                  <h5 className="blockchain-h5">
                                                    {innerValue} <br />{" "}
                                                  </h5>
                                                </div>
                                              ) : (
                                                <></>
                                              )}
                                            </>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="Blockchain-ptag-divs">
                              <p className="block-ptext">{key} </p>
                              <h5 className="blockchain-h5">
                                {processString(attribute[key])}
                              </h5>
                            </div>
                          )}
                        </>
                      )
                  )}

                  <div className="Information-full-divs">
                    <p>Important Information:</p>
                    <ol className="">
                      <li className="block-ptwotext">
                        This certificate is non-transferable and is permanently
                        recorded on the blockchain
                      </li>
                      <li className="block-ptwotext">
                        For any inquiries or concerns, feel free to contact us
                        at enquiries@esgledger.co
                      </li>
                    </ol>
                  </div>

                  <div className="Information-full-div">
                    <p className="block-ptwotextcs">重要信息:</p>

                    <ol>
                      <li className="block-ptwotextc">
                        此證書不可轉讓，已永久記錄在區塊鏈上。
                      </li>
                      <li className="block-ptwotextc cc-mob">
                        如有任何疑問或關切事項 可電郵至:
                        <span className="block-ptwotext-add">
                          enquiries@esgledger.co
                        </span>
                        。
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
          </div>
        </div>

        <div className="redix-footer-banner-full-div ">
          <div className="row ">
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2"></div>
            <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
              <div className="login-footer-banner-div web-view">
                <div className="">
                  <img className="footer-img" src={pageLogo.src} alt="" />
                  <p className="fotter-ptext">
                    For inquiries or more information <br />
                    please contact: enquiries@esgledger.co
                  </p>
                </div>

                <div className="">
                  <p className="footer-textpp">Join the Community</p>

                  <div className="footer-text-icon">
                    <a href="https://www.facebook.com/onechainhk">
                      <img className="social-icon" src={pageicon4.src} alt="" />
                    </a>
                    <a href="https://www.instagram.com/one.chain.io?igsh=MWd6MzM0YmM2YTdjZQ==">
                      <img className="social-icon" src={pageicon3.src} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/company/one-chain/">
                      <img className="social-icon" src={pageicon2.src} alt="" />
                    </a>
                    <a href="https://youtube.com/@onechainblockchain?si=u5-F2y3A6kSHVCmQ">
                      <img className="social-icon" src={pageicon1.src} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mobile-version-div">
                <p className="fotter-ptext-mob">
                  For inquiries or more information <br />
                  please contact: enquiries@esgledger.co
                </p>

                <div className="footer-text-icon">
                  <a href="https://www.facebook.com/onechainhk">
                    <img className="social-icon" src={pageicon4.src} alt="" />
                  </a>
                  <a href="https://www.instagram.com/one.chain.io?igsh=MWd6MzM0YmM2YTdjZQ==">
                    <img className="social-icon" src={pageicon3.src} alt="" />
                  </a>
                  <a href="https://www.linkedin.com/company/one-chain/">
                    <img className="social-icon" src={pageicon2.src} alt="" />
                  </a>
                  <a href="https://youtube.com/@onechainblockchain?si=u5-F2y3A6kSHVCmQ">
                    <img className="social-icon" src={pageicon1.src} alt="" />
                  </a>
                  {/* <img className='social-icon' src={pageicon3.src} alt='' /> */}
                </div>
                <p className="fotter-joitext-mob">Join the Community</p>
              </div>
              <div className="f-hr-divweb">
                <hr className="f-hr" />
                <p className="f-text">© 2023 OneChain Ltd.</p>
              </div>
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-3"></div>
          </div>
          <div className="mobile-version-divs">
            <div>
              <hr className="f-hr" />
              <p className="f-text">© 2023 OneChain Ltd.</p>
            </div>
            <div className="pol-mob-div">
              <p className="polmob-text">Privacy Policy</p>
              <p className="polmob-text">Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
