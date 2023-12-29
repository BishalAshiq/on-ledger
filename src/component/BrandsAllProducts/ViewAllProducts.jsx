"use client";
import React, { useEffect, useState } from "react";
import Downloadicon from "../../../public/downloadicon.svg";
import QrCode from "../../../public/qrcode.svg";
import Image from "next/image";
import axiosInstance from "../../../utils/axios";
import QRCodeComponent from "../DashboardAll/QRCodeComponent";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import BrandSingleProducts from "./BrandSingleProducts";

const ViewAllProducts = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const [headers, setHeaders] = useState([]);
  const [columns, setColumns] = useState([]);

  // Step 1: Create a state variable for the new component visibility
  const [showBrandSingleProducts, setShowBrandSingleProducts] = useState(true);

  // Step 2: Add an event handler to show/hide the BrandSingleProducts component
  const handleThreeDotsClick = () => {
    setShowBrandSingleProducts(!showBrandSingleProducts);
  };

  useEffect(() => {
    axiosInstance.get("/item-list").then((res) => {
      if (res.data.status == 200) {
        setHeaders(res.data.header);
        setColumns(res.data.data);
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

  const totalPages = Math.ceil(columns.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = columns.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const [copySuccess, setCopySuccess] = useState(null);

  const copyToClipboard = (e, copy_url) => {
    e.stopPropagation();
    try {
      // Get the current URL
      const currentURL = "http://esgledger.co/products/" + copy_url;
      console.log(currentURL);
      // Attempt to use the Clipboard API
      if (navigator.clipboard) {
        navigator.clipboard.writeText(currentURL);
        setCopySuccess("URL copied to clipboard!");
      } else {
        // Fallback for non-secure contexts (HTTP)
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

  return (
    <div className='container-fluid'>
      {!showBrandSingleProducts ? (
        <div>
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

          <div>
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
          </div>

          <div>
            <div className='mt-4'>
              <table className='table'>
                <thead>
                  <tr>
                    {headers.length > 0 &&
                      headers.map((item) => (
                        <th className='table-nav' scope='col'>
                          <p className='table-th'> {item}</p>
                        </th>
                      ))}

                    <th className='table-nav' scope='col'>
                      <p className='table-th'> QR code</p>
                    </th>

                    <th className='table-nav' scope='col'>
                      <p className='table-th'> Action</p>
                    </th>
                    <th className='table-navs' scope='col'>
                      <p className='table-ths'> Action</p>
                    </th>
                    {/* <th className='table-navs' scope='col'>
                  <p className='table-ths'> QR code</p>
                </th> */}
                  </tr>
                </thead>
                <tbody>
                  {columns.length > 0 &&
                    columns.map((item, index) => (
                      <>
                        <tr>
                          <td colSpan={9}></td>
                        </tr>
                        <tr
                          key={index}
                          className='data-tr'
                          onClick={() => handleRowClick(item["lsg_unique_id"])}>
                          {headers.length > 0 &&
                            headers.map((head) => (
                              <td className='data-td'>
                                <p className='data-th-text'>{item[head]}</p>
                              </td>
                            ))}

                          <td>
                            <div
                              className='tabl-icon '
                              style={{
                                height: "20px",
                                width: "15px",
                                marginTop: "-10px",
                              }}>
                              {/* {item.img1} {item.img1} */}
                              <QRCodeComponent
                                value={item["lsg_unique_id"]}
                                size={50}
                              />
                            </div>
                          </td>
                          <td>
                            <svg
                              onClick={(e) =>
                                copyToClipboard(e, item["lsg_unique_id"])
                              }
                              xmlns='http://www.w3.org/2000/svg'
                              width='16'
                              height='16'
                              fill='currentColor'
                              class='bi bi-copy'
                              viewBox='0 0 16 16'>
                              <path
                                fill-rule='evenodd'
                                d='M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z'
                              />
                            </svg>
                          </td>
                          {/* <td>
                    <div className='tabl-icon'>
                      QR code and download icon
                    </div>
                  </td> */}
                          <td>
                            <div className='th-svg-div'>
                              <svg
                                onClick={handleThreeDotsClick}
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='#155C79'
                                className='bi bi-three-dots'
                                viewBox='0 0 16 16'>
                                <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
                              </svg>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={9}></td>
                        </tr>
                      </>
                    ))}
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
      ) : (
        // Only render the BrandSingleProducts component when showBrandSingleProducts is true
        <BrandSingleProducts />
      )}
    </div>
  );
};

export default ViewAllProducts;
