"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import PageLogo from "../../../public/pageLogonav.png";
import PageLogomob from "../../../public/pageLogomd.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import companyLogo from "../../../public/pageLogonavas.png";
import companyLogo1 from "../../../public/pageLogomd.png";

const Nav = () => {
  const [navbarColor, setNavbarColor] = useState(null);
  const [navbarTextColor, setNavbarTextColor] = useState(null);
  const [dropdownColor, setDropdownColor] = useState(null);
  const [buttonColor, setButtonColor] = useState(null);
  const [logoColor, setLogoColor] = useState("black");
  const [logoUrl, setLogoUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (location.pathname === "/landingPage") {
      setLogoUrl(companyLogo);
    } else if (location.pathname === "/") {
      setLogoUrl(companyLogo1);
    } else {
      setLogoUrl(companyLogo);
    }
  }, [location]);

  useEffect(() => {
    switch (location.pathname) {
      case "/landingPage":
        setNavbarColor("white");
        setNavbarTextColor("#404040");
        setDropdownColor("");
        setButtonColor("black");
        break;

      case "/login":
        setNavbarColor("white");
        setNavbarTextColor("#404040");
        setDropdownColor("");
        setButtonColor("black");
        break;
      case "/about":
        setNavbarColor("white");
        setNavbarTextColor("#404040");
        setDropdownColor("");
        setButtonColor("black");
        break;
      case "/brands/login":
        setNavbarColor("white");
        setNavbarTextColor("#404040");
        setDropdownColor("");
        setButtonColor("black");
        break;
      case "/contactUs":
        setNavbarColor("white");
        setNavbarTextColor("#404040");
        setDropdownColor("");
        setButtonColor("black");
        break;
      case "/brands/dashboard":
        setNavbarColor("black");
        setNavbarTextColor("#404040");
        setDropdownColor("");
        setButtonColor("black");
        break;
    }
  }, [location.pathname]);

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
                <Link href='/'>Home</Link>
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
                <Link href='/about'>About ESGLedger</Link>
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
          class='navbar navbar-expand-lg mob-nav fixed-top'
          style={{ backgroundColor: navbarColor }}>
          <div class=''>
            <div className='nav-mob-logo-img-div'>
              <Link href='/landingPage'>
                <img className='nav-mob-logo-img' src={logoUrl.src} alt='' />
              </Link>
              <button
                style={{ backgroundColor: dropdownColor }}
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarTogglerDemo01'
                aria-controls='navbarTogglerDemo01'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='svg-iconic'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'>
                    <path
                      d='M1 1H17.4706'
                      stroke='#066F69'
                      stroke-linecap='round'
                    />
                    <path
                      d='M1 9H17.4706'
                      stroke='#066F69'
                      stroke-linecap='round'
                    />
                    <path
                      d='M1 17H17.4706'
                      stroke='#066F69'
                      stroke-linecap='round'
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
              <div className='nav-items-div-mob'>
                <Link className='contact-nav-a-mov' href='#'>
                  <p> Home</p>
                </Link>
                <Link className='contact-nav-a-mov' href='#'>
                <button
                  className='navbar-toggler'
                  // type='button'
                  // data-bs-toggle='collapse'
                  // data-bs-target='#navbarTogglerDemo02'
                  // aria-controls='navbarTogglerDemo02'
                  // aria-expanded='false'
                  aria-label='Toggle navigation'>
                  <span className=''>
                    {" "}
                    {/* <svg
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
                    </svg> */}
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1H22.6176" stroke="white" stroke-linecap="round" />
                      <path d="M1 11.5H22.6176" stroke="white" stroke-linecap="round" />
                      <path d="M1 22H22.6176" stroke="white" stroke-linecap="round" />
                    </svg>

                  </span>
                  </button>
                </Link>
                <Link className='contact-nav-a-mov' href='#'>
                  <p> About ESGLedger</p>
                </Link>
                <Link className='contact-nav-a-mov' href='#'>
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
                <Link className='contact-nav-a-mov' href='#'>
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
        </nav>
      </div>
    </div>
  );
};

export default Nav;
