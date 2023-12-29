"use client";
import React, { useEffect, useState, useRef } from "react";
import Downloadicon from "../../../public/downloadicon.svg";
import QrCode from "../../../public/qrcode.svg";
import Image from "next/image";
import axiosInstance from "../../../utils/axios";
import QRCodeComponent from "../DashboardAll/QRCodeComponent";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import IndividualBrand from "./IndividualBrand";
import CreateBrand from "./CreateBrand";
import Link from "next/link";

const ViewAllItemByBrand = () => {
    const itemsPerPage = 15;
    const [currentPage, setCurrentPage] = useState(1);
    const [brandList, setBrandList] = useState([]);
    const router = useRouter();
    const param = useParams();
    const [totalPages,setTotalPages] = useState(1);
    const [headers, setHeaders] = useState([]);
    const [columns, setColumns] = useState([]);

    const [token, setToken] = useState(null);
    const qrCodeRef = useRef();
    // Step 1: Create a state variable for the new component visibility
    const [showBrandSingleProducts, setShowBrandSingleProducts] = useState(false);
    const [showEditBrand, setShowEditBrand] = useState(false);
    const [brandId, setBrandId] = useState(0);
    const handleThreeDotsClick = () => {
        setShowBrandSingleProducts(!showBrandSingleProducts);
    };

    const handleEditFrom = (brandId) => {
        setBrandId(brandId);
        setShowEditBrand(!showEditBrand);
        setShowBrandSingleProducts(!showBrandSingleProducts);
    };
    console.log(showEditBrand);
    useEffect(() => {
        let token = "";

        if (typeof window !== "undefined") {
            token = localStorage.getItem("refreshToken");
        }

        axiosInstance
            .get("/brand-wise-item-list/" + param.brandid, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                if (res.data.status == 200) {
                    setHeaders(res.data.header);
                    setColumns(res.data.data);
                    setTotalPages(Math.ceil(res.data.data.length / itemsPerPage))
                }
                if (res.data.status == 401) {
                    toast.error(res.data.message, {
                        position: "top-right",
                        style: {
                            background: "white",
                            color: "black",
                        },
                    });
                    localStorage.removeItem("refreshToken");
                    router.push("/");
                }
            });
    }, []);



    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = brandList.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const [copySuccess, setCopySuccess] = useState(null);

    const copyToClipboard = (e, copy_url) => {
        e.stopPropagation();
        try {
            const currentURL = "https://esgledger.co/" + copy_url;

            if (navigator.clipboard) {
                navigator.clipboard.writeText(currentURL);
                setCopySuccess("URL copied to clipboard!");
            } else {
                const textArea = document.createElement("textarea");
                textArea.value = currentURL;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);
                setCopySuccess("URL copied to clipboard!");
                toast.success("URL copied to clipboard!", {
                    position: "top-right",
                    style: {
                        background: "white",
                        color: "black",
                    },
                });
            }
        } catch (error) {
            // Handle errors
            console.error("Error copying to clipboard:", error);
            setCopySuccess("Copy to clipboard failed");
        }
    };

    const handleRowClick = (lsgUniqueId) => {
        // Handle redirection logic here
        // window.location.href = `/products/${lsgUniqueId}`;
    };

    const handleSearch = (keyword) => {
        axiosInstance
            .post("search-brand", {
                keyword: keyword,
            })
            .then((res) => {
                setBrandList(res.data.data);
            });
    };
    return (
        <div className='container-fluid'>

            <div>
                <div className='admin-header-search-div'>
                    <div className='data-search-input-div'>
                        <span>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='currentColor'
                                class='bi bi-search'
                                viewBox='0 0 16 16'>
                                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                            </svg>
                        </span>
                        <input
                            className='data-search-input'
                            type='search'
                            placeholder='Search by “brand name, Item, Product”'
                        />
                    </div>
                </div>



                <div>
                    <div className='mt-4'>
                        <table className='full-table'>
                            <thead>
                                <tr>
                                    {headers.length > 0 &&
                                        headers.map((item) => (
                                            <th className='table-nav' scope='col'>
                                                <span className='table-th'> {item}</span>
                                            </th>
                                        ))}

                                    <th className='table-nav' scope='col'>
                                        <span className='table-th'> QR code</span>
                                    </th>

                                    <th className='table-nav' scope='col'>
                                        <span className='table-th'> Action</span>
                                    </th>

                                </tr>
                                <tr>
                                    <th colSpan={headers.length + 2} className="text-center"></th>
                                </tr>
                            </thead>
                            <tbody >
                                {columns.length > 0 ?
                                    columns.map((item, index) => (
                                        <>
                                            <tr
                                                key={index}
                                                className='data-tr'
                                                onClick={() => handleRowClick(item["slug"])}>
                                                {headers.length > 0 &&
                                                    headers.map((head) => (
                                                        <td className='data-td'>
                                                            <span className='data-th-text'>{item[head] != null ? item[head] : "N/A"}</span>
                                                        </td>
                                                    ))}

                                                <td>
                                                    <div className='tabl-icon '>
                                                        {/* {item.img1} {item.img1} style={{ height: '20px', width: '15px', marginTop: '-10px' }}*/}
                                                        <QRCodeComponent value={'https://esgledger.co/' + item['slug']} size={50} slug={item['slug']} />
                                                    </div>
                                                </td>
                                                <td>

                                                    <svg onClick={(e) => copyToClipboard(e, item['slug'])} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                                    </svg>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td colSpan={headers.length + 2} className="text-center"></td>
                                            </tr>
                                        </>
                                    ))
                                    :
                                    <>
                                        <tr>
                                            <td colSpan={headers.length + 2} className="text-center">No data found</td>
                                        </tr>
                                    </>
                                }
                            </tbody>
                        </table>

                        <div className='pagination'>
                            <svg
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                fill='#86C6CA'
                                class='bi bi-caret-left-fill'
                                viewBox='0 0 16 16'>
                                <path d='m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z' />
                            </svg>

                            <span>{` ${currentPage} / ${totalPages}`}</span>

                            <svg
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                xmlns='http://www.w3.org/2000/svg'
                                width='16'
                                height='16'
                                fill='#86C6CA'
                                class='bi bi-caret-right-fill'
                                viewBox='0 0 16 16'>
                                <path d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z' />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ViewAllItemByBrand;
