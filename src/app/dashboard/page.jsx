"use client";
import React, { useState } from "react";
import DashNav from "@/component/Navbar/dashNav";
import ViewAllItems from "@/component/DashboardAll/ViewAllItems";
import IssuDetails from "@/component/DashboardAll/IssuDetails";

const page = () => {
  const [activeDiv, setActiveDiv] = useState(1);

  const handleTextClick = (divId) => {
    setActiveDiv(divId);
  };
  return (
    <div>
      <div>
        <DashNav />
      </div>

      <div className='row'>
        <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
          <div className='dddssa' />
          <div className='dash-sidebar-div'>
            <div
              onClick={() => handleTextClick(1)}
              className={`dashboard-side-bar-li ${
                activeDiv === 1 ? "active-das" : ""
              }`}>
              <h6>View all brands</h6>
            </div>
            <div
              onClick={() => handleTextClick(2)}
              className={`dashboard-side-bar-li ${
                activeDiv === 2 ? "active-das" : ""
              }`}>
              <h6>View all items</h6>
            </div>
          </div>
        </div>

        <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
          {activeDiv === 1 && (
            <div>
              <div className=''>
                <IssuDetails />
              </div>
            </div>
          )}

          {activeDiv === 2 && (
            <div>
              <div className=''>
                <ViewAllItems />
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
