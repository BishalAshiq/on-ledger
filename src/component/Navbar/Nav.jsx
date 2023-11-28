import Image from "next/image";
import React from "react";
import PageLogo from "../../../public/pageLogonav.png";
import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <div className='full-navbar-div'>
        <div className='row'>
          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
          <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
            <div className='nav-logo-img-div'>
              <img className='nav-logo-img' src={PageLogo.src} alt='' />
            </div>
          </div>

          <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 '>
            <div>
              <div className='nav-items-div'>
                <Link href='/'>Home</Link>
                <Link href='/'>Brands</Link>
                <Link href='/'>About ESGLedger</Link>
                <Link href='/'>Explorer</Link>
                <Link className='contact-nav-a' href='/'>
                  <p>Contact</p>{" "}
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
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
    </div>
  );
};

export default Nav;
