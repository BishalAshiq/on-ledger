import React from "react";
import DashnavLogo from "../../../public/pageLogomd.png";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";

const dashNav = () => {
  const router = useRouter();
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("refreshToken");

      localStorage.removeItem("userInfo");

      localStorage.removeItem("userId");
    }
    Cookies.remove("refreshToken");
    router.push("/");
  };

  return (
    <div>
      <div className='dashnav-div'>
        <div>
          <Link href='/'>
            <img className='dashnav-img' src={DashnavLogo.src} alt='' />
          </Link>
        </div>

        <div className='dashnav-links'>
          <div className='dashnav-linksa'>
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
          <svg
            onClick={handleLogout}
            xmlns='http://www.w3.org/2000/svg'
            width='25'
            height='25'
            fill='white'
            class='bi bi-box-arrow-right'
            viewBox='0 0 16 16'>
            <path
              fill-rule='evenodd'
              d='M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z'
            />
            <path
              fill-rule='evenodd'
              d='M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default dashNav;
