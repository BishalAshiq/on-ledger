"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import PageLogo from "../../../public/pageLogonav.png";
import PageLogomob from "../../../public/pageLogomd.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import companyLogo from "../../../public/pageLogonav.png";
import companyLogo1 from "../../../public/pageLogomd.png";
import "./mobileNav.css";

const Nav = () => {
  const [navbarColor, setNavbarColor] = useState(null);
  const [navbarTextColor, setNavbarTextColor] = useState(null);
  const [dropdownColor, setDropdownColor] = useState(null);
  const [buttonColor, setButtonColor] = useState(null);
  const [borderColor, setborderColor] = useState(null);
  const [logoColor, setLogoColor] = useState("black");
  const [logoUrl, setLogoUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    switch (location.pathname) {
      case "/landingPage":
        setLogoUrl(companyLogo);
        setNavbarColor("white");
        setNavbarTextColor("#00A5BD");
        setDropdownColor("white");
        setButtonColor("#00A5BD");
        setborderColor("#00A5BD");
        break;
      case "/admin":
        setLogoUrl(companyLogo);
        setNavbarColor("white");
        setNavbarTextColor("#00A5BD");
        setDropdownColor("white");
        setButtonColor("#00A5BD");
        setborderColor("#00A5BD");
        break;
      case "/landingPage":
        setLogoUrl(companyLogo);
        setNavbarColor("white");
        setNavbarTextColor("#00A5BD");
        setDropdownColor("white");
        setButtonColor("#00A5BD");
        setborderColor("#00A5BD");
        break;

      case "/login":
        setLogoUrl(companyLogo);
        setNavbarColor("white");
        setNavbarTextColor("#00A5BD");
        setDropdownColor("white");
        setButtonColor("#00A5BD");
        setborderColor("#00A5BD");
        break;
      case "/about":
        setLogoUrl(companyLogo);
        setNavbarColor("white");
        setNavbarTextColor("#00A5BD");
        setDropdownColor("white");
        setButtonColor("#00A5BD");
        setborderColor("#00A5BD");
        break;
      case "/brands/login":
        setLogoUrl(companyLogo);
        setNavbarColor("white");
        setNavbarTextColor("#00A5BD");
        setDropdownColor("white");
        setButtonColor("#00A5BD");
        setborderColor("#00A5BD");
        break;
      case "/contactUs":
        setLogoUrl(companyLogo);
        setNavbarColor("white");
        setNavbarTextColor("#00A5BD");
        setDropdownColor("white");
        setButtonColor("#00A5BD");
        setborderColor("#00A5BD");
        break;
      default:
        setLogoUrl(PageLogomob);
        setNavbarColor("#00A5BD");
        setNavbarTextColor("#00A5BD");
        setDropdownColor("white");
        setButtonColor("#00A5BD");
        setborderColor("#00A5BD");
        break;
    }
  }, [router.pathname]);

  return (
    <div>
      <div className='full-navbar-div'>
        <div className='row web-nav'>
          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
          <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
            <div className='nav-logo-img-div'>
              <Link href='/'>
                <img className='nav-logo-img' src={PageLogo.src} alt='' />
              </Link>
            </div>
          </div>

          <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 '>
            <div>
              <div className='nav-items-div'>
                <Link href='/admin'>Home</Link>
                <Link className='contact-nav-a' href='/brands/login'>
                  {" "}
                  <p>Brands</p>{" "}
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      height='10'
                      fill='currentColor'
                      class='bi bi-chevron-down'
                      viewBox='0 0 16 16'>
                      <path
                        fill-rule='evenodd'
                        d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                      />
                    </svg>
                  </span>
                </Link>
                <Link
                  style={{
                    whiteSpace: "nowrap",
                  }}
                  href='/about'>
                  About ESGLedger
                </Link>
                <Link
                  className='contact-nav-a'
                  href='https://www.onechainscan.io/'
                  target='_blank'>
                  <p>Explorer</p>{" "}
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      height='10'
                      fill='currentColor'
                      class='bi bi-chevron-down'
                      viewBox='0 0 16 16'>
                      <path
                        fill-rule='evenodd'
                        d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                      />
                    </svg>
                  </span>
                </Link>
                <Link className='contact-nav-a' href='/contactUs'>
                  <p>Contact</p>{" "}
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      height='10'
                      fill='currentColor'
                      class='bi bi-chevron-down'
                      viewBox='0 0 16 16'>
                      <path
                        fill-rule='evenodd'
                        d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
        </div>
      </div>
      <div className='mobile-nav-div'>
        <nav
          className='navbar navbar-expand-lg mob-nav fixed-top'
          style={{ backgroundColor: navbarColor }}>
          <div
            style={{
              width: "100%",
              padding: "0px 10px",
            }}>
            <div className='dsada'>
              <div className='nav-mob-lgo-FULL-div'>
                <div className='nav-mob-lgo-img-link-div'>
                  <Link
                    // style={{
                    //   marginLeft: "50px",
                    // }}
                    href='/landingPage'
                    className=''>
                    <img className='nav-mob-lgo-img' src={logoUrl.src} alt='' />
                  </Link>
                </div>
                <div className='nav-mob-toggle-div'>
                  <button
                    style={{
                      backgroundColor: dropdownColor,
                      border: "none",
                    }}
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarTogglerDemo01'
                    aria-controls='navbarTogglerDemo01'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className=''>
                      <svg
                        style={{ color: buttonColor }}
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        fill='none'>
                        <path
                          d='M1 1H17.4706'
                          stroke={buttonColor}
                          stroke-linecap='round'
                        />
                        <path
                          d='M1 9H17.4706'
                          stroke={buttonColor}
                          stroke-linecap='round'
                        />
                        <path
                          d='M1 17H17.4706'
                          stroke={buttonColor}
                          stroke-linecap='round'
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: navbarColor,
              }}
              className='collapse navbar-collapse '
              id='navbarTogglerDemo01'>
              <div>
                <div
                  // style={{
                  //   display: "flex",
                  //   flexDirection: "column",
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  //   height: "100%",
                  //   textAlign: "center",
                  // }}
                  className='nav-items-div-mob '>
                  <Link className='contact-nav-a-mov' href='/admin'>
                    <p style={{ color: navbarTextColor }}> Home</p>
                  </Link>
                  <Link className='contact-nav-a-mov' href='/brands/login'>
                    {" "}
                    <p style={{ color: navbarTextColor }}>Brands</p>{" "}
                    {/* <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span> */}
                  </Link>
                  <Link className='contact-nav-a-mov' href='/about'>
                    <p style={{ color: navbarTextColor }}> About ESGLedger</p>
                  </Link>
                  <Link className='contact-nav-a-mov' href='#'>
                    <p style={{ color: navbarTextColor }}>Explorer</p>{" "}
                    {/* <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span> */}
                  </Link>
                  <Link className='contact-nav-a-mov' href='/contactUs'>
                    <p style={{ color: navbarTextColor }}>Contact</p>{" "}
                    {/* <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        class="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </span> */}
                  </Link>

                  <div
                    className='navBorder'
                    style={{ borderColor: borderColor }}></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
