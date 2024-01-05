import React from "react";
import logo from "../_assets/Footer-logo.svg";
import social from "../_assets/social.svg";
import Image from "next/image";
import "../_assets/about-footer.css";
import { facebook, instagram, linkedin, youtube } from "../_assets";
import Link from "next/link";
import pageLogo from "../../../../public/pageLogomd.png";
import pageicon1 from "../../../../public/social1.svg";
import pageicon2 from "../../../../public/social2.svg";
import pageicon3 from "../../../../public/social3.svg";
import pageicon4 from "../../../../public/social4.svg";

export default function AboutFooter() {
  return (
    <div
      style={{
        position: "relative",
        bottom: "0",
      }}
      className="login-footer-banner-full-div "
    >
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
                  <img className='social-icon' src={pageicon4.src} alt='' />
                </a>
                <a href="https://www.instagram.com/one.chain.io?igsh=MWd6MzM0YmM2YTdjZQ==">
                  <img className='social-icon' src={pageicon3.src} alt='' />
                </a>
                <a href="https://www.linkedin.com/company/one-chain/">
                  <img className='social-icon' src={pageicon2.src} alt='' />
                </a>
                <a href="https://youtube.com/@onechainblockchain?si=u5-F2y3A6kSHVCmQ">
                  <img className='social-icon' src={pageicon1.src} alt='' />
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
                <img className='social-icon' src={pageicon4.src} alt='' />
              </a>
              <a href="https://www.instagram.com/one.chain.io?igsh=MWd6MzM0YmM2YTdjZQ==">
                <img className='social-icon' src={pageicon3.src} alt='' />
              </a>
              <a href="https://www.linkedin.com/company/one-chain/">
                <img className='social-icon' src={pageicon2.src} alt='' />
              </a>
              <a href="https://youtube.com/@onechainblockchain?si=u5-F2y3A6kSHVCmQ">
                <img className='social-icon' src={pageicon1.src} alt='' />
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
  );
}
