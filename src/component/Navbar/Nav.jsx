import Image from "next/image";
import React from "react";
import PageLogo from "../../../public/pageLogonav.png";
import PageLogomob from "../../../public/pageLogomd.png";
import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <div className='full-navbar-div'>
        <div className='row web-nav'>
          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
          <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
            <div className='nav-logo-img-div'>
              <img className='nav-logo-img' src={PageLogo.src} alt='' />
            </div>
          </div>

          <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 '>
            <div>
              <div className='nav-items-div'>
                <Link href='/'>Home </Link>
                <Link href='/brands/login' className='contact-nav-a'>
                  {" "}
                  Brands{" "}
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
                <Link href='/'>About OneLedger</Link>
                <Link href='/' className='contact-nav-a'>
                  Explorer{" "}
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
                <Link className='contact-nav-a' href='/'>
                  Contact
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

        <div className='mobile-nav-div'>
          <nav class='navbar navbar-expand-lg mob-nav fixed-top'>
            <div class=''>
              <div className='nav-mob-logo-img-div'>
                <Link href='/'>
                  <img
                    className='nav-mob-logo-img'
                    src={PageLogomob.src}
                    alt=''
                  />
                </Link>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarTogglerDemo02'
                  aria-controls='navbarTogglerDemo02'
                  aria-expanded='false'
                  aria-label='Toggle navigation'>
                  <span class='navbar-toggler-icon'></span>
                </button>
              </div>
              <div class='collapse navbar-collapse' id='navbarTogglerDemo02'>
                <div className='nav-items-div'>
                  <Link className='contact-nav-a' href='/'>
                    Home
                  </Link>
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
                  <Link className='contact-nav-a' href='/about'>
                    About ESGLedger
                  </Link>
                  <Link className='contact-nav-a' href='/'>
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
