"use client";
import React, { useEffect, useState } from "react";
import DashNav from "@/component/Navbar/dashNav";
import ViewAllItems from "@/component/DashboardAll/ViewAllItems";
import IssuDetails from "@/component/DashboardAll/IssuDetails";
import ViewAllItemsData from "@/component/DashboardAll/ViewAllItemsData";
import axiosInstance from "../../../utils/axios";
import { useRouter } from "next/navigation";

const page = () => {
    const [activeDiv, setActiveDiv] = useState(2);
    const router = useRouter();
    const handleTextClick = (divId) => {
        // setActiveDiv(divId);
        router.push('/dashboard');
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
                            className={`dashboard-side-bar-li ${activeDiv === 1 ? "active-das" : ""
                                }`}>
                            <h6>Upload new products</h6>
                        </div>
                        <div
                            onClick={() => handleTextClick(2)}
                            className={`dashboard-side-bar-li ${activeDiv === 2 ? "active-das" : ""
                                }`}>
                            <h6>View all products</h6>
                        </div>

                        <div
                            onClick={() => handleTextClick(3)}
                            className={`dashboard-side-bar-li ${activeDiv === 3 ? "active-das" : ""
                                }`}>
                            <h6>Customie data</h6>
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
                                <ViewAllItemsData />

                            </div>
                        </div>
                    )}

                    {activeDiv === 3 && (
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
