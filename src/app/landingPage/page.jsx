"use client";
import Nav from "@/component/Navbar/Nav";
import React, { Component, useState } from "react";
// import Slider from "react-slick";
import LoginBanner from "../../../public/loginBanner.png";

import pageLogo from "../../../public/pageLogomd.png";
import pageicon1 from "../../../public/social1.svg";
import pageicon2 from "../../../public/social2.svg";
import pageicon3 from "../../../public/social3.svg";
import pageicon4 from "../../../public/social4.svg";

import styles from "../login/login.module.css";

import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <div className={styles["background-img"]}>
      <div>
        <Nav />
      </div>
      <div className='landing-page-login-full-div'>
        <div className='hr' />
        <div className='slider-login'>
          <div>
            <div className='fist-slider-text-div'>
              <h1 className='fist-slider-text-tag'>
                Unlocking ESG Trust and Transparency with Blockchain Integrity
              </h1>
            </div>
          </div>
        </div>
        <div className='hrs' />

        <div className='pioneeringtext'>
          <p>A pioneering blockchain-driven platform under OneChain®</p>
        </div>
      </div>

      <div className='login-footer-banner-full-div '>
        <div className='row '>
          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
          <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
            <div className='login-footer-banner-div web-view'>
              <div className=''>
                <img className='footer-img' src={pageLogo.src} alt='' />
                <p className='fotter-ptext'>
                  For inquiries or more information <br />
                  please contact: enquiries@esgledger.co
                </p>
              </div>

              <div className=''>
                <p className='footer-textpp'>Join the Community</p>

                <div className='footer-text-icon'>
                  <a href='https://www.facebook.com/onechainhk'>
                    <img className='social-icon' src={pageicon4.src} alt='' />
                  </a>
                  <a href='https://www.instagram.com/one.chain.io?igsh=MWd6MzM0YmM2YTdjZQ=='>
                    <img className='social-icon' src={pageicon3.src} alt='' />
                  </a>
                  <a href='https://www.linkedin.com/company/one-chain/'>
                    <img className='social-icon' src={pageicon2.src} alt='' />
                  </a>
                  <a href='https://youtube.com/@onechainblockchain?si=u5-F2y3A6kSHVCmQ'>
                    <img className='social-icon' src={pageicon1.src} alt='' />
                  </a>
                </div>
              </div>
            </div>
            <div className='mobile-version-div'>
              <p className='fotter-ptext-mob'>
                For inquiries or more information <br />
                please contact: enquiries@esgledger.co
              </p>

              <div className='footer-text-icon'>
                <a href='https://www.facebook.com/onechainhk'>
                  <img className='social-icon' src={pageicon4.src} alt='' />
                </a>
                <a href='https://www.instagram.com/one.chain.io?igsh=MWd6MzM0YmM2YTdjZQ=='>
                  <img className='social-icon' src={pageicon3.src} alt='' />
                </a>
                <a href='https://www.linkedin.com/company/one-chain/'>
                  <img className='social-icon' src={pageicon2.src} alt='' />
                </a>
                <a href='https://youtube.com/@onechainblockchain?si=u5-F2y3A6kSHVCmQ'>
                  <img className='social-icon' src={pageicon1.src} alt='' />
                </a>
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
  );
};

export default page;
