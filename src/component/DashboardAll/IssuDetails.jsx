"use client";
import React, { useState } from "react";
import upFile from "../../../public/download.png";
import Image from "next/image";
import axiosInstance from "../../../utils/axios";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

const IssuDetails = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const [headers, setHeaders] = useState([]);
  const [columns, setColumns] = useState([]);
  const totalPages = Math.ceil(columns.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = columns.slice(startIndex, endIndex);
  const [isGenerate, SetIsGenerate] = useState(0);
  const [selectedFileName, setSelectedFileName] = useState("Doc name");

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const router = useRouter();

  const handleDownload = async () => {
    // Make a request to the API endpoint
    try {
      let token = "";
      if (typeof window !== "undefined") {
        token = localStorage.getItem("refreshToken");
      }

      const response = await axiosInstance.get("download-xls", {
        responseType: "blob",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.status == 401) {
        toast.error("Token Failed Please Login", {
          position: "top-right",
          style: {
            background: "white",
            color: "black",
          },
        });
        localStorage.removeItem("refreshToken");
        router.push("/");
      }

      if (response.status == 201) {
        toast.error("Please customize fields first.", {
          position: "top-right",
          style: {
            background: "white",
            color: "black",
          },
        });
      } else {
        const blob = new Blob([response.data], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "brand_cutomize_fields.xlsx";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error("Error downloading CSV:", error);
    }
  };

  const handleFileClick = (e) => {
    e.stopPropagation();
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (e) => {
    SetIsGenerate(1);
    // console.log("handlefile change");
    const selectedFile = e.target.files[0];
    setSelectedFileName(selectedFile.name || "Doc name");
    const formData = new FormData();
    formData.append("csv_file", e.target.files[0]);

    let token = "";

    if (typeof window !== "undefined") {
      token = localStorage.getItem("refreshToken");
    }

    axiosInstance
      .post(`/upload-csv`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status == 200) {
          setHeaders(res.data.header);
          setColumns(res.data.data);
          SetIsGenerate(2);
        }
        if (res.data.status == 201) {
          // toast.error(res.data.message)
          toast.error(res.data.message, {
            position: "top-right",
            style: {
              background: "white",
              color: "black",
            },
          });
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
  };
  const handleDelete = (deleteId) => {
    const formData = {
      id: deleteId,
    };
    let token = "";

    if (typeof window !== "undefined") {
      token = localStorage.getItem("refreshToken");
    }

    axiosInstance
      .post("/delete-item", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status == 200) {
          const indexToDelete = columns.findIndex(
            (item) => item.id === deleteId
          );

          if (indexToDelete !== -1) {
            // Create a new array without the deleted item
            const updatedColumns = [...columns];
            updatedColumns.splice(indexToDelete, 1);

            // Update the state with the new array
            setColumns(updatedColumns);

            toast.success("Item Removed", {
              position: "top-right",
              style: {
                background: "white",
                color: "black",
              },
            });
          }
        }
      });
  };
  return (
    <div className='container-fluid'>
      <div className='issuess-upload-full-div'>
        <h6 className='tag-text pb-2'>Upload product data</h6>
        <div className='issue-upload-full-div'>
          <a className='csvs-a' onClick={handleDownload}>
            Download the CSV template
          </a>
          <div className='issue-upload-div' onClick={handleFileClick}>
            <Image
              className='file-image'
              src={upFile.src}
              width={40}
              height={40}
              alt=''
            />
            <p className='csv-textp'>{selectedFileName}</p>
            <p className='csv-textp2'>
              Only CSV and XLSX formats are supported
            </p>
            <input
              type='file'
              id='fileInput'
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>

      <div className='mt-2'>
        <div className='previe-issue-div pt-1'>
          <h6 className='tag-text'>Preview</h6>
          {isGenerate == 2 && (
            <div className='previe-issue-text'>
              <p className='previe-issue-btn-text'>Clear</p>
              <Link className='previe-issue-btn-link' href='/allitems'>
                <p className='previe-issue-btn'> Mint</p>
              </Link>
            </div>
          )}
        </div>

        <div>
          <div
            className={` issue-data-table-div ${
              isGenerate != 2 ? "issue-box-details" : ""
            }`}>
            {isGenerate == 0 && (
              <div className='no-file-select-div'>
                <p>No File Select</p>
              </div>
            )}

            {isGenerate == 1 && (
              <div className='no-file-select-div'>
                <p>
                  Generating <span className='loading-dot'>...</span>
                </p>
              </div>
            )}
            {isGenerate == 2 && (
              <table className='full-table'>
                <thead>
                  <tr>
                    {headers.length > 0 &&
                      headers.map((item) => (
                        <th className='table-nav' scope='col'>
                          <span className='table-th'> {item}</span>
                        </th>
                      ))}

                    <th className='table-navs' scope='col'>
                      <span className='table-ths'> QR code</span>
                    </th>
                    {/* <th className='table-navs' scope='col'>
                    <p className='table-ths'> QR code</p>
                  </th> */}
                    <th className='table-navs' scope='col'>
                      <span className='table-ths'> QR code</span>
                    </th>
                  </tr>
                  <tr>
                    <th
                      colSpan={headers.length + 2}
                      className='text-center'></th>
                  </tr>
                </thead>
                <tbody>
                  {columns.map((item, index) => (
                    <>
                      <tr key={index} className='data-tr'>
                        {headers.length > 0 &&
                          headers.map((head) => (
                            <td className='data-td'>
                              {/* <p className='data-th-text'>{item.brand}</p> */}
                              <span className='data-th-text'>
                                {item[head] != null ? item[head] : "N/A"}
                              </span>
                            </td>
                          ))}

                        <td className='data-td'>
                          <span
                            className='data-td cursor-pointer text-red'
                            onClick={() => {
                              handleDelete(item.id);
                            }}>
                            Delete
                          </span>
                        </td>

                        <td className='data-td'>
                          <div className='issue-svg-div'>
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
                        </td>
                      </tr>

                      <tr>
                        <td
                          colSpan={columns.length + 2}
                          className='text-center'></td>
                      </tr>
                      <tr>
                        <td
                          colSpan={columns.length + 2}
                          className='text-center'></td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            )}

            {/* <div className='pagination'>
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssuDetails;
