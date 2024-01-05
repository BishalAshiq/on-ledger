"use client";
import React, { useState } from "react";
import DashNav from "@/component/Navbar/dashNav";
import ViewAllItems from "@/component/DashboardAll/ViewAllItems";
import IssuDetails from "@/component/DashboardAll/IssuDetails";
import ViewAllItemsData from "@/component/DashboardAll/ViewAllItemsData";
import IndividualBrand from "@/component/AllAdminBrand/IndividualBrand";
import ViewAllBrands from "@/component/AllAdminBrand/ViewAllBrands";
import BrandList from "@/component/AllAdminBrand/BrandList";
// import "./view.module.css";

const page = () => {
  const [activeDiv, setActiveDiv] = useState(1);

  const handleTextClick = (divId) => {
    setActiveDiv(divId);
  };

  return (
    <div className='m_over-flow'>
      <DashNav />

      <div className='row'>
        <div className='col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2'>
          <div className='dddssa' />
          <div className='dash-sidebar-div'>
            <div
              onClick={() => handleTextClick(1)}
              className={`dashboard-side-bar-li ${
                activeDiv === 1 ? "active-das" : ""
              }`}>
              <h6 className='dash-side-ptext'>View all brands</h6>
              <span className='dashboard-icon'>
                {activeDiv === 1 ? (
                  <svg
                    width='16'
                    height='23'
                    viewBox='0 0 16 23'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <g clip-path='url(#clip0_249_26)'>
                      <path
                        d='M8 7.5V15M5 10L8 7L11 10'
                        stroke='white'
                        stroke-width='1.5'
                      />
                      <rect
                        x='0.75'
                        y='0.75'
                        width='14.5'
                        height='21.5'
                        rx='3.25'
                        stroke='white'
                        stroke-width='1.5'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_249_26'>
                        <rect width='16' height='23' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='26'
                    height='24'
                    fill='currentColor'
                    className='bi bi-file-arrow-up'
                    viewBox='0 0 16 16'>
                    <path d='M8 11a.5.5 0 0 0 .5-.5V6.707l1.146 1.147a.5.5 0 0 0 .708-.708l-2-2a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L7.5 6.707V10.5a.5.5 0 0 0 .5.5' />
                    <path d='M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1' />
                  </svg>
                )}
              </span>
            </div>
            <div
              onClick={() => handleTextClick(2)}
              className={`dashboard-side-bar-li ${
                activeDiv === 2 ? "active-das" : ""
              }`}>
              <h6 className='dash-side-ptext'>View all items</h6>
              <span className='dashboard-icon'>
                {activeDiv === 2 ? (
                  <svg
                    width='19'
                    height='23'
                    viewBox='0 0 19 23'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M1 4H17.4706'
                      stroke='white'
                      stroke-width='2'
                      stroke-linecap='round'
                    />
                    <path
                      d='M1 12H17.4706'
                      stroke='white'
                      stroke-width='2'
                      stroke-linecap='round'
                    />
                    <path
                      d='M1 20H17.4706'
                      stroke='white'
                      stroke-width='2'
                      stroke-linecap='round'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='19'
                    height='18'
                    viewBox='0 0 19 18'
                    fill='none'>
                    <path
                      d='M1 1H17.4706'
                      stroke='#150404'
                      stroke-width='2'
                      stroke-linecap='round'
                    />
                    <path
                      d='M1 9H17.4706'
                      stroke='#150404'
                      stroke-width='2'
                      stroke-linecap='round'
                    />
                    <path
                      d='M1 17H17.4706'
                      stroke='#150404'
                      stroke-width='2'
                      stroke-linecap='round'
                    />
                  </svg>
                )}
              </span>
            </div>
          </div>
        </div>

        <div className='col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10'>
          {activeDiv === 1 && (
            <div>
              <div className=''>
                {/* <IndividualBrand /> */}
                <ViewAllBrands />
              </div>
            </div>
          )}

          {activeDiv === 2 && (
            <div>
              <div className=''>
                <BrandList />
                {/* <ViewAllItemsData /> */}
              </div>
            </div>
          )}
          {activeDiv === 3 && (
            <div>
              <div className=''>
                {/* <BrandList /> */}
                {/* <h1>Hello</h1> */}
                {/* <ViewAllItemsData /> */}
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        style={{ position: "fixed", bottom: 0, width: "100%" }}
        className='dashboard-footer-div'>
        <div className='dashboard-footer'>
          <p className='dashboard-footer-text'>
            © 2023 OneChain Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
