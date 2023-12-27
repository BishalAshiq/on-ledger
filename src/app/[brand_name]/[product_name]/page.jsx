"use client";
import React, { useEffect, useState } from "react";
import styles from "../../login/login.module.css";
import Nav from "@/component/Navbar/Nav";
import pageLogo from "../../../../public/pageLogomds.png";
import pageicon1 from "../../../../public/social1.svg";
import pageicon2 from "../../../../public/social2.svg";
import pageicon3 from "../../../../public/social3.svg";
import pageicon4 from "../../../../public/social4.svg";
// import pageicon4 from "../../../../public/social4.svg";
import certified from "../../../../public/certified.svg";
import copy from "../../../../public/copy.svg";
import redix from "../../../../public/redix.png";
import Image from "next/image";
import { useParams } from "next/navigation";
import axiosInstance from "../../../../utils/axios";
import Link from "next/link";
const page = () => {
  const param = useParams();
  const [item, setItem] = useState({});
  const [attribute, setAttribute] = useState("");
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
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formatted = dateObject.toLocaleDateString("en-US", options);
    return formatted;
  };


  const [activeAccordion, setActiveAccordion] = useState("");
  const [activeAccordion2, setActiveAccordion2] = useState("");
  const [activeAccordion3, setActiveAccordion3] = useState("");
  const [activeAccordion4, setActiveAccordion4] = useState("");
  const [activeAccordion5, setActiveAccordion5] = useState("");

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
      return 'N/A';
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
    <div className='individual'>
      {" "}
      <div className={styles["background-imgs"]}>
        <div className=''>
          <Nav />
        </div>

        <div className='certificate-full-div'>
          <div className='row'>
            <div className='col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>

            <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 '>
              <div className='redix-div'>
                <div className='redix-divs'>
                  <div className='certificate-image-div'>
                    <Image
                      className='certificate-image'
                      src={certified.src}
                      width={44}
                      height={40}
                      alt=''
                    />
                  </div>

                  <div className='certificate-tags-div'>
                    <h2 className='certificate-tags'>ONECHAIN®</h2>
                    <p className='certificate-ptag'>
                      {" "}
                      CERTIFIED BLOCKCHAIN SEAL
                    </p>
                    <p className='certificate-ptag'>
                      {" "}
                      OneChain®區塊鏈認證封印{" "}
                    </p>
                  </div>

                  <div className='mob-certificate-tags-div'>
                    <span className='mob-certificate-tags'>ONECHAIN®</span>
                    <span className='mob-certificate-ptag'>
                      CERTIFIED BLOCKCHAIN SEAL
                    </span>
                    <span className='mob-certificate-ptag'>
                      OneChain®區塊鏈認證封印
                    </span>
                  </div>

                  <div className='certificate-des-div'>
                    <h5 className='certificate-h5Tag'>
                      This Certificate has been securely recorded on the
                      blockchain, ensuring its transparency and immutable
                      record. It is applicable to products produced with the
                      utmost commitment to quality and integrity.
                    </h5>

                    <h5 className='certificate-h5Tag'>
                      此證書已經安全記錄在區塊鏈上，確保了其透明性和不可變記錄。適用於以最高的品質和誠信承諾生產的產品
                    </h5>
                  </div>

                  <div className='certificate-imageSec-div'>
                    <img src={redix.src} alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 '>
              <div className='redix-sec-div'>
                <div className='redixSec-div'>
                  <div className='Blockchain-tagone-div'>
                    <h5 className='Blockchain-tagone'>
                      Blockchain Transaction Hx 區塊鏈上鏈紀錄
                    </h5>
                  </div>
                  <Link
                    className='no-decoration'
                    href={`https://www.onechainscan.io/transaction/${item.block_chain_url}`}
                    target='_blank'>
                    <div className='Blockchain-tagotwo-div'>
                      <Image src={copy.src} width={20} height={20} alt='' />
                      <h5 className='Blockchain-tagotwo'>
                        {item.block_chain_url}
                      </h5>
                    </div>
                  </Link>

                  <div className='Blockchain-tagone-div'>
                    <h5 className='Blockchain-tagone'>
                      Issue Date 區塊鏈上鏈日期
                    </h5>
                  </div>

                  <div className='Blockchain-ptag-div'>
                    <p>{formateDate(item.created_at)}</p>
                  </div>
                  {Object.keys(attribute).map(
                    (key) =>
                      key != "" && (
                        <>
                          {typeof attribute[key] === "object" &&
                            attribute[key] !== null ? (
                            <>
                              <div className=''>
                                <div
                                  className='accordion'
                                  id='accordionExample'>
                                  <div className='accordion-item'>
                                    <div className='accor-tag-div'>
                                      <h6 className='accordion-header'>
                                        <div
                                          className={`accordion-button ${isAccordionExpanded(
                                            `collapse${key}`
                                          )
                                            ? ""
                                            : "collapsed"
                                            }`}
                                          type='button'
                                          data-bs-target={`#collapse${key}`}
                                          aria-expanded={isAccordionExpanded(
                                            `collapse${key}`
                                          )}
                                          aria-controls={`collapse${key}`}
                                          onClick={() =>
                                            handleAccordionClicks(
                                              `collapse${key}`
                                            )
                                          }>
                                          {key}
                                        </div>
                                      </h6>

                                      <div className='chevron-icon'>
                                        {isAccordionExpanded(
                                          `collapse${key}`
                                        ) ? (
                                          <svg
                                            id='chevron-btn-down'
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='16'
                                            height='16'
                                            fill='currentColor'
                                            className='bi bi-chevron-up '
                                            viewBox='0 0 16 16'
                                            onClick={() =>
                                              handleAccordionClicks(
                                                `collapse${key}`
                                              )
                                            }>
                                            <path
                                              fill-rule='evenodd'
                                              d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
                                            />
                                          </svg>
                                        ) : (
                                          <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            width='16'
                                            height='16'
                                            fill='currentColor'
                                            className='bi bi-chevron-down'
                                            viewBox='0 0 16 16'
                                            onClick={() =>
                                              handleAccordionClicks(
                                                `collapse${key}`
                                              )
                                            }>
                                            <path
                                              fill-rule='evenodd'
                                              d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                                            />
                                          </svg>
                                        )}
                                      </div>
                                    </div>

                                    <div
                                      id={`collapse${key}`}
                                      className={`accordion-collapse collapse ${isAccordionExpanded(`collapse${key}`)
                                        ? "show"
                                        : ""
                                        }`}
                                      data-bs-parent='#accordionExample'>
                                      <div className='accordion-body'>
                                        {Object.entries(attribute[key]).map(
                                          ([innerKey, innerValue], index) => (
                                            <>
                                              {innerKey != "" &&
                                                innerValue != "" ? (
                                                <div className='Blockchain-ptag-divs'>
                                                  <p className='block-ptext'>
                                                    {innerKey}{" "}
                                                  </p>
                                                  <h5 className='blockchain-h5'>
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

                              <div className='Blockchain-ptag-divs'>
                                <p className='block-ptext'>{key} </p>
                                <h5 className='blockchain-h5'>
                                  {processString(attribute[key])}
                                </h5>
                              </div>
                             


                          )}
                        </>
                      )
                  )}
                  {/* <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Model No 型號</p>
                    <h5 className='blockchain-h5'>15692</h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Item 物品</p>
                    <h5 className='blockchain-h5'>Wooden Retro Arcade </h5>
                    <h5 className='blockchain-h5'>木製復古遊戲機 </h5>
                  </div>

                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Source 來源</p>
                    <h5 className='blockchain-h5'>
                      Hong Kong Civil Engineering (Slope Maintenance) and
                      Upgrading of Typhoon Downed Trees <br /> 香港本土
                      土木工程(斜坡維修)及颱風倒塌樹木進行升級改造{" "}
                    </h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Product - Front 產品正面</p>
                    <h5 className='blockchain-h5'>
                      Hong Kong Timber - Oak 香港木材 - 橡木
                    </h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Product - Rear 產品背面</p>
                    <h5 className='blockchain-h5'>
                      Hong Kong Timber - Pine 香港木材 - 松木
                    </h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>
                      Other parts of the product 產品其他位置{" "}
                    </p>
                    <h5 className='blockchain-h5'>
                      Hong Kong Timber - Cherry, Taiwan Acacia 香港木材 -
                      櫻桃木, 台灣相思木
                    </h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>
                      Other parts of the product 產品其他位置{" "}
                    </p>
                    <h5 className='blockchain-h5'>
                      Hong Kong Timber - Cherry, Taiwan Acacia 香港木材 -
                      櫻桃木, 台灣相思木
                    </h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Designer 產品設計 </p>
                    <h5 className='blockchain-h5'>
                      RediX Technology Co. Ltd 煒狄科技有限公司
                    </h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Manufacturer 製造商 </p>
                    <h5 className='blockchain-h5'>
                      Methodist Centre 循道衛理中心
                    </h5>
                  </div> */}

                  <div className='Information-full-divs'>
                    <p className='block-ptwotextcs'>Important Information:</p>
                    <ol>
                      <li className='block-ptwotext'>
                        This certificate is non-transferable and is permanently
                        recorded on the blockchain
                      </li>
                      <li className='block-ptwotext'>
                        For any inquiries or conerns, feel free to contact us at
                        enquiries@oneledger.co
                      </li>
                    </ol>
                  </div>

                  <div className='Information-full-div'>
                    <p className='block-ptwotextcs'>重要信息:</p>

                    <ol>
                      <li className='block-ptwotextc'>
                        此證書不可轉讓，已永久記錄在區塊鏈上。
                      </li>
                      <li className='block-ptwotextc cc-mob'>
                        如有任何疑問或關切事項，可電郵至:
                        <span className='block-ptwotext-add'>
                          {" "}
                          enquiries@oneledger.io
                        </span>
                        。
                      </li>
                    </ol>
                  </div>
                  {/* 
                  <div className='Information-full-div'>
                    <p>Important Information:</p>
                    <ul>
                      <ol>
                        1. This certificate is non-transferable and is
                        permanently recorded on the blockchain
                      </ol>
                      <ol>
                        2. For any inquiries or conernsm, feel free to contact
                        us at enquiries@certledger.io
                      </ol>
                    </ul>
                  </div>
                  <div className='Information-full-div'>
                    <p>重要信息:</p>
                    <ul>
                      <ol>1. 此證書不可轉讓，已永久記錄在區塊鏈上。</ol>
                      <ol>
                        2. 如有任何疑問或關切事 項，可電郵至:
                        enquiries@certledger.io
                      </ol>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2'></div>
          </div>
        </div>
        <div className='logins-footer-div'>
          <div className='logins-footer-full-div row'>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
            <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
              <div className='footer-img-div'>
                <img className='footer-img' src={pageLogo.src} alt='' />
                <p className='fotter-ptext'>
                  For inquiries or more information please contact:
                  enquiries@oneledger.co
                </p>
              </div>
            </div>

            <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
              <div className='footer-text-div'>
                <p className='footer-textpp'>Join the Community</p>
                <div className='footer-text-icon'>
                  <Link href='https://www.facebook.com/onechainagency'>
                    <img className='social-icon' src={pageicon4.src} alt='' />
                  </Link>

                  <Link href='https://www.instagram.com/one.chain.io/'>
                    {" "}
                    <img className='social-icon' src={pageicon3.src} alt='' />
                  </Link>
                  <Link href='https://www.linkedin.com/company/77163564/admin/feed/posts/'>
                    {" "}
                    <img className='social-icon' src={pageicon2.src} alt='' />
                  </Link>
                  <Link href='https://www.youtube.com/@onechainblockchain'>
                    {" "}
                    <img className='social-icon' src={pageicon1.src} alt='' />
                  </Link>
                </div>
                <p className='footer-textpps'>Join the Community</p>
              </div>
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
          </div>
          <div className='ffs-div'>
            <div className='row'>
              <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
              <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                <div className=''>
                  <hr className='f-hr' />
                  <p className='f-text'>© 2023 OneChain Ltd.</p>
                  <div className='footer-privacy-div'>
                    <Link className='footer-privacy-text' href='/'>
                      <p>Privacy Policy </p>
                    </Link>
                    <Link className='footer-privacy-text' href='/'>
                      <p>Terms of Service </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
            </div>
          </div>
        </div>

        {/* <div className='logins-footer-div'>
          <div className='logins-footer-full-div row'>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
            <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
              <div className='footer-img-div'>
                <img className='footer-img' src={pageLogo.src} alt='' />
                <p className='fotter-ptext'>
                  For inquiries or more information <br /> please contact:
                  enquiries@oneledger.co
                </p>
              </div>
            </div>

            <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
              <div className='footer-text-div'>
                <p className='footer-textpp'>Join the Community</p>

                <div className='footer-text-icon'>
                  <img className='social-icon' src={pageicon1.src} alt='' />
                  <img className='social-icon' src={pageicon2.src} alt='' />
                  <img className='social-icon' src={pageicon3.src} alt='' />
                  <img className='social-icon' src={pageicon4.src} alt='' />
                </div>
              </div>
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
          </div>
          <div className='ffs-div'>
            <div className='row'>
              <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
              <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                <div className=''>
                  <hr className='f-hr' />
                  <p className='f-text'>© 2023 OneChain Ltd.</p>
                </div>
              </div>
              <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default page;
