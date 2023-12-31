"use client";
import React, { useEffect, useState } from "react";
import styles from "../../app/login/login.module.css";
import Nav from "@/component/Navbar/Nav";
import pageLogo from "../../../public/pageLogonav.png";
import pageLogoF from "../../../public/pageLogomds.png";
import pageicon1 from "../../../public/social1.svg";
import pageicon2 from "../../../public/social2.svg";
import pageicon3 from "../../../public/social3.svg";
import pageicon4 from "../../../public/social4.svg";
// import pageicon4 from "../../../../public/social4.svg";
// import certified from "../../../../public/certified.svg";
// import copy from "../../../../public/copy.svg";
// import redix from "../../../../public/redix.png";
import Image from "next/image";
import { useParams } from "next/navigation";
// import axiosInstance from "../../../../utils/axios";
import Link from "next/link";
import pageLogonav from "../../../public/pageLogonav.png";

const page = () => {
  return (
    <div>
      <div className={styles["background-imgs"]}>
        <div>
          <Nav />
        </div>

        <div className='row'>
          <div className='col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2'></div>
          <div className='col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8'>
            <div className='about-main-div'>
              <div className='about-div'>
                <div className='about-header-tag-img-div'>
                  <h3 className='abt-tags'>About</h3>
                  <Image
                    className='abt-logo-mob'
                    src={pageLogonav}
                    width={110}
                    height={24}
                    alt=''
                  />
                </div>

                <div className='about-header-des-div'>
                  <h6 className='about-header-des-h6'>
                    Unlocking Retail Trust and Transparency with Blockchain
                    Integrity
                  </h6>
                  <p className='about-header-des-p'>
                    Welcome to OneLedger, where blockchain technology meets
                    commerce in a seamless fusion of trust and transparency. We
                    are dedicated to revolutionizing the retail industry through
                    the power of blockchain.
                  </p>
                </div>

                <div className='about-header-des-div'>
                  <h6 className='about-header-desc-h6'>Our Mission</h6>
                  <p className='about-header-des-p'>
                    At OneLedger, we envision a future where trust and
                    transparency are the cornerstones of all retail
                    transactions. Our mission is to empower businesses in the
                    retail sector, including wine, fashion, luxury goods, and
                    more, with the transformative capabilities of blockchain
                    technology, reinforced by RFID technology.
                  </p>
                </div>

                <div className='about-header-des-divs '>
                  {/* <h5 className='about-header-desc-h6'>What Sets Us Apart</h5> */}
                  <h6 className='about-header-des-h6'>
                    Unveiling the Power of Blockchain and RFID
                  </h6>
                  <p className='about-header-des-p'>
                    Our platform stands as a testament to the potential of
                    blockchain and RFID technology in revolutionizing the way
                    products are tracked, verified, and experienced. Every
                    interaction with OneLedger is a step towards a more secure,
                    transparent, and technologically advanced retail
                    marketplace.
                  </p>
                  <div className=''>
                    <h6 className='about-header-des-h6'>
                      Why Choose OneLedger?
                    </h6>

                    <ul>
                      <li className='about-header-des-p'>
                        <strong>Blockchain Integrity:</strong> Our certificates
                        and seals are securely recorded on the blockchain,
                        ensuring tamper-proof records and absolute transparency.
                      </li>
                      <li className='about-header-des-p'>
                        <strong> RFID Integration:</strong> We incorporate
                        cutting-edge RFID technology to enhance product tracking
                        and traceability, providing real-time insights into your
                        supply chain.
                      </li>
                      <li className='about-header-des-p'>
                        <strong> Universal Applicability:</strong> OneLedger is
                        designed specifically for the retail industry, catering
                        to all general products, from wine to luxury goods.
                      </li>
                      <li className='about-header-des-p'>
                        <strong>OneChain® Integration:</strong> As a part of the
                        OneChain® ecosystem, we leverage cutting-edge technology
                        to offer a robust and reliable platform.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='about-header-des-div '>
                  <h6 className='about-header-desc-h6'>
                    Join Us on the Journey
                  </h6>
                  <p className='about-header-des-p'>
                    Feel free to reach out to us using the contact information
                    provided below. Whether you're a business leader, investor,
                    or a potential partner, your inquiries and feedback are
                    important to us as we work together to drive trust and
                    transparency in the retail industry.
                  </p>
                </div>
              </div>

              <div className='about-contacts-des-div'>
                <Link href='/contactUs'>
                  <button className='about-contacts-btn'>Contact Us</button>
                </Link>
                <p className='about-contacts-desp'>
                  Feel free to reach out to us using the contact information
                  provided below. Whether you're a business leader, investor, or
                  a potential partner, your inquiries and feedback are important
                  to us as we work together to drive ESG trust and transparency.
                </p>
              </div>
            </div>
          </div>

          <div className='col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2'></div>
        </div>

        <div className='About-footer-banner-full-div '>
          <div className='row '>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
            <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
              <div className='login-footer-banner-div web-view'>
                <div className=''>
                  <img className='footer-img' src={pageLogoF.src} alt='' />
                  <p className='fotter-ptext'>
                    For inquiries or more information <br />
                    please contact: enquiries@esgledger.co
                  </p>
                </div>

                <div className=''>
                  <p className='footer-textpp'>Join the Community</p>

                  <div className='footer-text-icon'>
                    <img className='social-icon' src={pageicon1.src} alt='' />
                    <img className='social-icon' src={pageicon2.src} alt='' />
                    <img className='social-icon' src={pageicon3.src} alt='' />
                    <img className='social-icon' src={pageicon4.src} alt='' />
                  </div>
                </div>
              </div>
              <div className='mobile-version-div'>
                <p className='fotter-ptext-mob'>
                  For inquiries or more information <br />
                  please contact: enquiries@esgledger.co
                </p>

                <div className='footer-text-icon'>
                  <img className='social-icon' src={pageicon4.src} alt='' />
                  <img className='social-icon' src={pageicon3.src} alt='' />
                  <img className='social-icon' src={pageicon2.src} alt='' />
                  <img className='social-icon' src={pageicon1.src} alt='' />

                  {/* <img className='social-icon' src={pageicon3.src} alt='' /> */}
                </div>
                <p className='fotter-joitext-mob'>Join the Community</p>
              </div>
              <div className='f-hr-divweb'>
                <hr className='f-hr' />
                <p className='f-text'>© 2023 OneChain Ltd.</p>
              </div>
            </div>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-3'></div>
          </div>
          <div className='mobile-version-divs'>
            <div>
              <hr className='f-hr' />
              <p className='f-text'>© 2023 OneChain Ltd.</p>
            </div>
            <div className='pol-mob-div'>
              <p className='polmob-text'>Privacy Policy</p>
              <p className='polmob-text'>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
