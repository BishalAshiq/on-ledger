"use client";
import React, { useEffect, useState, useRef } from "react";
import Downloadicon from "../../../public/downloadicon.svg";
import QrCode from "../../../public/qrcode.svg";
import Image from "next/image";
import axiosInstance from "../../../utils/axios";
import QRCodeComponent from "./QRCodeComponent";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ViewAllItemsData = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [headers, setHeaders] = useState([]);
  const [columns, setColumns] = useState([]);
  const qrCodeRef = useRef();
  const [startIndex, setStartIndex] = useState((currentPage - 1) * itemsPerPage);
  const [endIndex, setEndIndex] = useState(startIndex + itemsPerPage);
  const [totalPages, setTotalPages] = useState(1);
  const [currentData, setCurrentData] = useState([]);


  useEffect(() => {
    let token = "";
    if (typeof window !== "undefined") {
      token = localStorage.getItem("refreshToken");
    }

    axiosInstance
      .get("/item-list", {
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
          setCurrentData(res.data.data.slice(startIndex, endIndex));
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



  const handlePageChange = (newPage) => {
    const newStartIndex = (newPage - 1) * itemsPerPage;
    const newEndIndex = newStartIndex + itemsPerPage;

    setCurrentPage(newPage);
    setStartIndex(Math.min(newStartIndex, columns.length - 1));
    setEndIndex(Math.min(newEndIndex, columns.length));
    setCurrentData(columns.slice(newStartIndex, newEndIndex));
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
      }
      toast.success("URL copied to clipboard!", {
        position: "top-right",
        style: {
          background: "white",
          color: "black",
        },
      });
    } catch (error) {
      // Handle errors
      toast.error("URL copied to clipboard!", {
        position: "top-right",
        style: {
          background: "white",
          color: "black",
        },
      });
      setCopySuccess("Copy to clipboard failed");
    }
  };

  const handleRowClick = (lsgUniqueId) => {
    // Handle redirection logic here
    window.location.href = `/${lsgUniqueId}`;
  };

  return (
    <div className="container-fluid">
      <div>
        <div className="data-search-input-div">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
          <input
            className="data-search-input"
            type="search"
            placeholder="Search by “brand name, Item, Product”"
          />
        </div>

        {/* <div>
          <div className='filter-text-select-div'>
            <p className='filter-text-p'>Filter by</p>
            <select
              className='form-select form-select-sm filter-select'
              aria-label='Small select example'>
              <option selected>Issuer</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
            <select
              className='form-select form-select-sm filter-select'
              aria-label='Small select example'>
              <option selected>Program</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
            <select
              className='form-select form-select-sm filter-select'
              aria-label='Small select example'>
              <option selected>Class</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
        </div> */}

        <div>
          <div className="mt-4">
            <table className="full-table">
              <thead>
                <tr>
                  {headers.length > 0 &&
                    headers.map((item) => (
                      <th className="table-nav" scope="col">
                        <span className="table-th"> {item}</span>
                      </th>
                    ))}

                  <th className="table-nav" scope="col">
                    <span className="table-th"> QR code</span>
                  </th>

                  <th className="table-nav" scope="col">
                    <span className="table-th"> Action</span>
                  </th>
                  {/* <th className='table-navs' scope='col'>
                    <p className='table-ths'> Action</p>
                  </th> */}
                  {/* <th className='table-navs' scope='col'>
                    <p className='table-ths'> QR code</p>
                  </th> */}
                </tr>
                <tr>
                  <th colSpan={headers.length + 2} className="text-center"></th>
                </tr>
              </thead>
              <tbody>
                {currentData.length > 0 ? (
                  currentData.map((item, index) => (
                    <>
                      <tr
                        key={index}
                        className="data-tr"
                        onClick={() => handleRowClick(item["slug"])}
                      >
                        {headers.length > 0 &&
                          headers.map((head) => (
                            <td className="data-td">
                              <span className="data-th-text">
                                {item[head] != null ? item[head] : "N/A"}
                              </span>
                            </td>
                          ))}

                        <td>
                          <div className="tabl-icon ">
                            {/* {item.img1} {item.img1} style={{ height: '20px', width: '15px', marginTop: '-10px' }}*/}
                            <QRCodeComponent
                              value={"https://esgledger.co/" + item["slug"]}
                              size={50}
                              slug={item["slug"]}
                            />
                          </div>
                        </td>
                        <td>
                          <svg
                            onClick={(e) => copyToClipboard(e, item["slug"])}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-copy"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                            />
                          </svg>
                        </td>
                        {/* <td>
                      <div className='tabl-icon'>
                        QR code and download icon
                      </div>
                    </td> */}
                        {/* <td>
                        <div className='th-svg-div'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            fill='#155C79'
                            className='bi bi-three-dots'
                            viewBox='0 0 16 16'>
                            <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
                          </svg>
                        </div>
                      </td> */}
                      </tr>
                      <tr>
                        <td
                          colSpan={headers.length + 2}
                          className="text-center"
                        ></td>
                      </tr>
                    </>
                  ))
                ) : (
                  <>
                    <tr>
                      <td colSpan={headers.length + 2} className="text-center">
                        No data found
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>

            <div className="pagination">
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#86C6CA"
                  class="bi bi-caret-left-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </button>

              <span>{` ${currentPage} / ${totalPages}`}</span>
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#86C6CA"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllItemsData;
