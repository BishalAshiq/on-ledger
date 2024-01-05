import React from "react";
import qrcode from "qrcode";
import Link from "next/link";

const Navbar = ({activeDiv}) => {
    return (
        <div className="dash-sidebar-div">
            <Link
                href={"/brands/upload"}
                className={`dashboard-side-bar-li ${
                    activeDiv === 1 ? "active-das" : ""
                }`}
            >
                <h6 className="dash-side-ptext mt-2 text-nowrap">
                    Upload new products
                </h6>
            </Link>
            <Link
                href={"/brands/view"}
                className={`dashboard-side-bar-li ${
                    activeDiv === 2 ? "active-das" : ""
                }`}
            >
                <h6 className="dash-side-ptext">View all products</h6>
            </Link>

            <Link
                href={"/brands/custom"}
                className={`dashboard-side-bar-li ${
                    activeDiv === 3 ? "active-das" : ""
                }`}
            >
                <h6 className="dash-side-ptext">Customize data</h6>
            </Link>
        </div>
    );
};

export default Navbar;
