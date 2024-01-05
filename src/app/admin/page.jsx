"use client";
import Nav from "@/component/Navbar/Nav";
import { useState } from "react";
// import Slider from "react-slick";
// import LoginBanner from "../../../public/loginBanner.png";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Brands from "../../../public/loginBanner.png";
import LoginBanner from "../../../public/loginBannermob.png";
import pageLogo from "../../../public/pageLogomds.png";
import pageicon1 from "../../../public/social1.svg";
import pageicon2 from "../../../public/social2.svg";
import pageicon3 from "../../../public/social3.svg";
import pageicon4 from "../../../public/social4.svg";
import axiosInstance from "../../../utils/axios";
import styles from "../login/login.module.css";
import Link from "next/link";

const page = () => {
  const router = useRouter();

  // var settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

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

          router.push("/admin/brands/view");
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
        <div className='hradm' />
        <div className='slider-login'>
          <div>
            <div className='login-banner-img-input-divs'>
              <div className=' login-banner-img-input-div'>
                <div className='login-banner-img-div'>
                  <img className='login-banner-img' src={Brands.src} alt='' />
                  <img
                    className='login-banner-img-mob'
                    src={LoginBanner.src}
                    alt=''
                  />
                </div>

                <div className='login-banner-full-inputs-div'>
                  <div className='admin-close-div'>
                    <Link href='/landingPage'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='27'
                        height='27'
                        viewBox='0 0 27 27'
                        fill='none'>
                        <circle
                          cx='13.4287'
                          cy='13.4286'
                          r='9.5'
                          transform='rotate(43.2297 13.4287 13.4286)'
                          fill='#86C6CA'
                        />
                        <path
                          d='M19.1726 16.1445L16.5922 18.8895L7.78257 10.6081L10.363 7.86311L19.1726 16.1445ZM19.5642 9.71384L10.0998 19.782L7.3192 17.1681L16.7836 7.09998L19.5642 9.71384Z'
                          fill='white'
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className='login-banner-inputs-div'>
                    <h6 className='heading-tag'>Admin Login</h6>
                    <form
                      className='content'
                      onSubmit={handleLogin}
                      method='post'>
                      <div>
                        {" "}
                        <label className='bname' for='email'>
                          Email
                        </label>{" "}
                        <br />
                        <input
                          className='brand-inp'
                          type='email'
                          id='email'
                          name='email'
                          onChange={handleFormChange}
                          value={formData.email}
                          required
                        />
                      </div>
                      <div className='password-inpi'>
                        {" "}
                        <label className='bname' for='email'>
                          Password
                        </label>{" "}
                        <br />
                        <input
                          className='brand-inp'
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
              <div className='hradm' />

              <div className='pioneeringtexts-admin'>
                <p>
                  A pioneering blockchain-driven
                  <br /> platform under OneChain®
                </p>
              </div>
            </div>
          </div>
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
