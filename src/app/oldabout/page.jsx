"use client";
import React, {useEffect, useState} from "react";
import styles from "../../app/login/login.module.css";
import Nav from "@/component/Navbar/Nav";
import pageLogo from "../../../public/pageLogomd.png";
import pageicon1 from "../../../public/social1.svg";
import pageicon2 from "../../../public/social2.svg";
import pageicon3 from "../../../public/social3.svg";
import pageicon4 from "../../../public/social4.svg";
// import pageicon4 from "../../../../public/social4.svg";
// import certified from "../../../../public/certified.svg";
// import copy from "../../../../public/copy.svg";
// import redix from "../../../../public/redix.png";
import Image from "next/image";
import {useParams} from "next/navigation";
// import axiosInstance from "../../../../utils/axios";
import Link from "next/link";
import pageLogonav from "../../../public/pageLogonavas.png";

const page = () => {
  return (
    <div>
      <div className={styles["background-img"]}>
        <div>
          <Nav />
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <div className="about-main-div">
              <div className="about-div">
                <div className="about-header-tag-img-div">
                  <h3 className="abt-tags">About</h3>
                  <Image
                    className="abt-logo-mob"
                    src={pageLogonav}
                    width={110}
                    height={24}
                    alt=""
                  />
                </div>

                <div className="about-header-des-div">
                  <h6 className="about-header-des-h6">
                    Unlocking ESG Trust and Transparency with ESGLedger
                  </h6>
                  <p className="about-header-des-p">
                    Welcome to ESGLedger, where technology meets the world of
                    ESG (Environmental, Social, and Governance) data. We are a
                    pioneering blockchain-driven platform dedicated to
                    revolutionizing the way we ensure the trustworthiness and
                    transparency of ESG information.
                  </p>
                </div>

                <div className="about-header-des-div">
                  <h6 className="about-header-desc-h6">Our Mission</h6>
                  <p className="about-header-des-p">
                    At ESGLedger, our mission is to bridge the gap between data
                    and trust, preserving the integrity of ESG data while making
                    the ESG market more transparent and secure. We believe that
                    every piece of ESG data has a unique story to tell, and it's
                    our goal to ensure that this narrative is recorded and
                    protected for the benefit of businesses, investors, and
                    society as a whole.
                  </p>
                </div>

                <div className="about-header-des-divs ">
                  <h5 className="about-header-desc-h6">What Sets Us Apart</h5>
                  <h6 className="about-header-des-h6">
                    Blockchain-Powered Authentication
                  </h6>
                  <p className="about-header-des-p">
                    ESGLedger harnesses the power of blockchain technology to
                    offer unparalleled trust and transparency in ESG data. By
                    recording every step of ESG data's journey on an immutable
                    blockchain ledger, we provide a level of confidence that is
                    unmatched in the ESG domain.
                  </p>
                  <div className="">
                    <h6 className="about-header-des-h6">
                      Advanced Data Linking Technology
                    </h6>
                    <p className="about-header-des-p">
                      We employ state-of-the-art data linking technology,
                      including robust NFC (Near Field Communication) tags and
                      QR codes, to connect physical products to blockchain data.
                      These features allow businesses to seamlessly bridge the
                      physical and digital worlds, ensuring the authenticity and
                      provenance of ESG data. Our NFC tags are designed to be
                      tamper-proof, guaranteeing the security and reliability of
                      your ESG data's history.
                    </p>
                  </div>
                </div>

                <div className="about-header-des-div ">
                  <h6 className="about-header-desc-h6">
                    Join Us on the Journey
                  </h6>
                  <p className="about-header-des-p">
                    Whether you're a business aiming to enhance your ESG
                    credibility, an investor seeking trustworthy data, or
                    someone who values the importance of responsible business
                    practices, ESGLedger welcomes you to join us on our journey.
                    Together, we can redefine the ESG landscape by making it
                    more accessible, secure, and connected than ever before.
                  </p>
                </div>
              </div>

              <div className="about-contacts-des-div">
                <Link href="/contactUs">
                  <button className="about-contacts-btn">Contact Us</button>
                </Link>
                <p className="about-contacts-desp">
                  Feel free to reach out to us using the contact information
                  provided below. Whether you're a business leader, investor, or
                  a potential partner, your inquiries and feedback are important
                  to us as we work together to drive ESG trust and transparency.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
        </div>

        <div className="login-footer-banner-full-div ">
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
                    <img className="social-icon" src={pageicon1.src} alt="" />
                    <img className="social-icon" src={pageicon2.src} alt="" />
                    <img className="social-icon" src={pageicon3.src} alt="" />
                    <img className="social-icon" src={pageicon4.src} alt="" />
                  </div>
                </div>
              </div>
              <div className="mobile-version-div">
                <p className="fotter-ptext-mob">
                  For inquiries or more information <br />
                  please contact: enquiries@esgledger.co
                </p>

                <div className="footer-text-icon">
                  <img className="social-icon" src={pageicon4.src} alt="" />
                  <img className="social-icon" src={pageicon3.src} alt="" />
                  <img className="social-icon" src={pageicon2.src} alt="" />
                  <img className="social-icon" src={pageicon1.src} alt="" />

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
