"use client";
import React, { useEffect, useState } from "react";
import Downloadicon from "../../../public/downloadicon.svg";
import QrCode from "../../../public/qrcode.svg";
import Image from "next/image";
import axiosInstance from "../../../utils/axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import QRCodeComponent from "./QRCodeComponent";
import qrcode from "qrcode";

const ViewAllItemsData = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const [headers, setHeaders] = useState([]);
  const [columns, setColumns] = useState([]);

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
      const currentURL = "http://oneledger.co/" + copy_url;
      console.log(copy_url);
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
      console.error("Error copying to clipboard:", error);
      setCopySuccess("Copy to clipboard failed");
    }
  };

  const initialSize = 550;
  const handleDownload = async (e, slug) => {
    e.stopPropagation();
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    let value = "https://oneledger.co/" + slug;
    await qrcode.toCanvas(canvas, value, { width: initialSize });

    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${slug}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);
    });
  };
  const handleRowClick = (slug) => {
    // Handle redirection logic here
    window.location.href = "https://oneledger.co/" + slug;
  };
  return (
    <div className='container-fluid'>
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
          {/* <table class='table'>
            <thead>
              <tr>
                <th scope='col'>Brand</th>
                <th scope='col'>Product</th>
                <th scope='col'>Serial</th>
                <th scope='col'>Item</th>
                <th scope='col'>Certification/Tests</th>
                <th scope='col'>Part</th>

                <th scope='col'>QR code</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>KIBO</td>
                <td>Sydeny</td>
                <td>12345…</td>
                <td>Recycled Leather</td>
                <td>GRS</td>
                <td>Upper</td>
                <td>
                  <div className='tabl-icon'>
                    <Image src={QrCode.src} height={20} width={20} alt='' />
                    <Image
                      src={Downloadicon.src}
                      height={25}
                      width={25}
                      alt=''
                    />
                  </div>
                </td>
                <td>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-three-dots'
                    viewBox='0 0 16 16'>
                    <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>KIBO</td>
                <td>Sydeny</td>
                <td>12345…</td>
                <td>Recycled Leather</td>
                <td>GRS</td>
                <td>Upper</td>
                <td>
                  <div className='tabl-icon'>
                    <Image src={QrCode.src} height={20} width={20} alt='' />
                    <Image
                      src={Downloadicon.src}
                      height={25}
                      width={25}
                      alt=''
                    />
                  </div>
                </td>
                <td>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-three-dots'
                    viewBox='0 0 16 16'>
                    <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>KIBO</td>
                <td>Sydeny</td>
                <td>12345…</td>
                <td>Recycled Leather</td>
                <td>GRS</td>
                <td>Upper</td>
                <td>
                  <div className='tabl-icon'>
                    <Image src={QrCode.src} height={20} width={20} alt='' />
                    <Image
                      src={Downloadicon.src}
                      height={25}
                      width={25}
                      alt=''
                    />
                  </div>
                </td>
                <td>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-three-dots'
                    viewBox='0 0 16 16'>
                    <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
                  </svg>
                </td>
              </tr>
              <tr>
                <td>KIBO</td>
                <td>Sydeny</td>
                <td>12345…</td>
                <td>Recycled Leather</td>
                <td>GRS</td>
                <td>Upper</td>
                <td>
                  <div className='tabl-icon'>
                    <Image src={QrCode.src} height={20} width={20} alt='' />
                    <Image
                      src={Downloadicon.src}
                      height={25}
                      width={25}
                      alt=''
                    />
                  </div>
                </td>
                <td>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-three-dots'
                    viewBox='0 0 16 16'>
                    <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table> */}
          <div className='mt-4'>
            <table className='full-table'>
              <thead className=''>
                <tr>
                  {headers.length > 0 &&
                    headers.map((item) => (
                      <th className='table-nav' scope='col'>
                        <span className='table-th'> {item}</span>
                      </th>
                    ))}
                  <th className='table-navs' scope='col'>
                    <span className='table-th'> QR code</span>
                  </th>
                  <th className='table-navs' scope='col'>
                    <span className='table-ths'> QR code</span>
                  </th>

                  {/* <th className='table-navs' scope='col'>
                    <span className='table-ths'> QR code</span>
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
                        onClick={() => handleRowClick(item["slug"])}>
                        {headers.length > 0 &&
                          headers.map((head) => (
                            <td className='data-td'>
                              <span className='data-th-text'>{item[head]}</span>
                            </td>
                          ))}
                        <td>
                          <div className='tabl-icon'>
                            {/* {item.img1} {item.img1} */}
                            <QRCodeComponent
                              value={"https://oneledger.co/" + item["slug"]}
                              size={30}
                              slug={item["product_name"]}
                            />
                            <Image
                              onClick={(e) => copyToClipboard(e, item["slug"])}
                              src={Downloadicon.src}
                              height={35}
                              width={35}
                              alt=''
                            />
                          </div>
                        </td>
                        {/* <td className='tabl-icon'></td> */}
                        {/* <td>
                      <div className='tabl-icon'>
                        QR code and download icon
                      </div>
                    </td> */}
                        <td>
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
    </div>
  );
};

export default ViewAllItemsData;
