"use client";
import Nav from "@/component/Navbar/Nav";
import React, { Component, useState } from "react";
// import Slider from "react-slick";
import LoginBanner from "../../../public/loginBanner.png";
import Brands from "../../../public/brands.jpeg";
import pageLogo from "../../../public/pageLogomd.png";
import pageicon1 from "../../../public/social1.svg";
import pageicon2 from "../../../public/social2.svg";
import pageicon3 from "../../../public/social3.svg";
import pageicon4 from "../../../public/social4.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../login/login.module.css";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const page = () => {
  const router = useRouter();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    axiosInstance
      .post("/login", formData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status == 200) {
          // router.push("/newsfeed");

          // setCookiesAuthRender(res.data)
          if (typeof window != "undefined") {
            localStorage.setItem("refreshToken", res.data.token);
            localStorage.setItem("userInfo", JSON.stringify(res.data.user));
            localStorage.setItem("fullname", res.data.user.name);

            localStorage.setItem("userId", res.data.user.id);
          }
          Cookies.set("refreshToken", res.data.token, {
            path: "/",
            expires: 7,
          });

          router.push("/dashboard");
        } else if (res.data.status == 401) {
          toast.error("Login failed. Please check your email and password.", {
            position: "top-right",
            style: {
              background: "white",
              color: "black",
            },
          });
        } else {
          toast.error("Login failed. Invalid Credentials.", {
            position: "top-right",
            style: {
              background: "white",
              color: "black",
            },
          });
        }
      });
  };

  return (
    <div className={styles["background-img"]}>
      <div>
        <Nav />
      </div>
      <div className='login-full-div'>
        <div className='hr' />
        <Slider {...settings} className='slider-login'>
          <div>
            <div className='fist-slider-text-div'>
              <h1>
                Unlocking ESG Trust and Transparency with Blockchain integrity
              </h1>
            </div>
          </div>
          <div>
            <div className='login-banner-img-input-divs'>
              <div className=' login-banner-img-input-div'>
                <div className='login-banner-img-div'>
                  <img
                    className='login-banner-img'
                    src={LoginBanner.src}
                    alt=''
                  />
                </div>

                <div className='login-banner-inputs-div'>
                  <h6 className='heading-tag'>Brand Login</h6>
                  <form
                    className='content'
                    onSubmit={handleLogin}
                    method='post'>
                    <div>
                      {" "}
                      <label for='email'>Email</label> <br />
                      <input
                        type='email'
                        id='email'
                        name='email'
                        onChange={handleFormChange}
                        value={formData.email}
                        required
                      />
                    </div>
                    <div>
                      {" "}
                      <label for='email'>Password</label> <br />
                      <input
                        type='password'
                        id='Password'
                        name='password'
                        value={formData.password}
                        required
                        onChange={handleFormChange}
                      />
                    </div>

                    <p className='forget-text'>Forget Password</p>

                    <div className='submit-btn-div'>
                      <button type='submit' className='submit-btn'>
                        Log in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='p-3'>
              <div className=' login-banner-img-input-div'>
                <div className='login-banner-img-div'>
                  <img
                    className='login-banner-img'
                    src={LoginBanner.src}
                    alt=''
                  />
                </div>
                <div className='login-banner-inputs-div'>
                  <div>
                    {" "}
                    <label for='password'>New password</label> <br />
                    <input type='password' id='password' name='Password' />
                  </div>
                  <div className='mt-2'>
                    {" "}
                    <label for='email'>Repeat your new password</label> <br />
                    <input type='password' id='Password' name='password' />
                  </div>

                  <div className='submit-btn-div'>
                    <button className='submit-btn'>Confirm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className='hrs' />

        <div className='pioneeringtext'>
          <p>
            A pioneering blockchain-driven
            <br /> platform under OneChain®
          </p>
        </div>
      </div>

      <div className='login-footer-banner-full-div'>
        <div className='row'>
          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
          <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
            <div className='login-footer-banner-div'>
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
                  <img className='social-icon' src={pageicon1.src} alt='' />
                  <img className='social-icon' src={pageicon2.src} alt='' />
                  <img className='social-icon' src={pageicon3.src} alt='' />
                  <img className='social-icon' src={pageicon4.src} alt='' />
                </div>
              </div>
            </div>
            <div className=''>
              <hr className='f-hr' />
              <p className='f-text'>© 2023 OneChain Ltd.</p>
            </div>
          </div>
          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-3'></div>
        </div>
      </div>
    </div>
  );
};

export default page;

{
  /* <div className='login-footer-div'>
        <div className='login-footer-full-div row'>
          <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'></div>

          <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
            <div className='footer-img-div'>
              <img className='footer-img' src={pageLogo.src} alt='' />
              <p className='fotter-ptext'>
                For inquiries or more information please contact:
                enquiries@esgledger.co
              </p>
            </div>
            <div className='footer-text-div'>
              <p className='footer-textpp'>Join the Community</p>

              <div className='footer-text-icon'>
                <img className='social-icon' src={pageicon1.src} alt='' />
                <img className='social-icon' src={pageicon2.src} alt='' />
                <img className='social-icon' src={pageicon3.src} alt='' />
                <img className='social-icon' src={pageicon4.src} alt='' />
              </div>
            </div>

            <div className=''>
              <hr className='f-hr' />
              <p className='f-text'>© 2023 OneChain Ltd.</p>
            </div>
          </div>

       

          <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'></div>
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
      </div> */
}

{
  /* <div>
        <div className='hr' />
        <div className=' login-banner-img-input-div'>
          <div className='login-banner-img-div'>
            <img className='login-banner-img' src={LoginBanner.src} alt='' />
          </div>
          <div className='login-banner-inputs-div'>
            <h6>Admin Login</h6>

            <div>
              {" "}
              <label for='email'>Email</label> <br />
              <input type='email' id='email' name='email' />
            </div>
            <div>
              {" "}
              <label for='email'>Password</label> <br />
              <input type='password' id='Password' name='password' />
            </div>
            <p>Forget Password</p>

            <input type='submit' />
          </div>
        </div>
        <div className='hrs' />

        <div className='pioneeringtext'>
          <p>
            A pioneering blockchain-driven
            <br /> platform under OneChain®
          </p>
        </div>
      </div> */
}
