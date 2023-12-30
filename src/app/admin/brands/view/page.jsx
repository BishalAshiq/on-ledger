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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='23'
                  viewBox='0 0 16 23'
                  fill='none'>
                  <path
                    d='M8 7.5V15M5 10L8 7L11 10'
                    stroke='#150404'
                    stroke-width='1.5'
                  />
                  <rect
                    x='0.75'
                    y='0.75'
                    width='14.5'
                    height='21.5'
                    rx='3.25'
                    stroke='#150404'
                    stroke-width='1.5'
                  />
                </svg>
              </span>
            </div>
            <div
              onClick={() => handleTextClick(2)}
              className={`dashboard-side-bar-li ${
                activeDiv === 2 ? "active-das" : ""
              }`}>
              <h6 className='dash-side-ptext'>View all items</h6>
              <span className='dashboard-icon'>
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
      <div className='dashboard-footer-div'>
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
