"use client";
import React, { useState } from "react";
import upFile from "../../../public/upFile.svg";
import Image from "next/image";

const IssuDetails = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    // Your data here
    // Example data for testing
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
    {
      brand: "KIBO",
      product: "Sydney",
      serial: "12345",
      item: "Recycled Leather",
      certification: "GRS",
      img1: "/downloadicon.svg",
      img2: "/qrcode.svg",
      part: "Upper",
      delete: "Delete",
    },
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='container-fluid mt-4'>
      <div>
        <h6>Upload recipients and certificates data</h6>
        <div className='issue-upload-full-div'>
          <div className='issue-upload-div'>
            <a className='csv-a'>Download the CSV template</a>
            <Image src={upFile.src} width={80} height={80} alt='' />
            <p className='csv-textp'>Drag or upload an excel file here.</p>
            <p className='csv-textp2'>
              Only CSV and XLSX formats are supported
            </p>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <div className='previe-issue-div'>
          <h6>Preview</h6>
          <div className='previe-issue-text'>
            <p className='previe-issue-btn-text'>Clear</p>
            <button className='previe-issue-btn'>Mint</button>
          </div>
        </div>

        <div>
          <div className='mt-4 issue-data-table-div'>
            <table className='table'>
              <thead>
                <tr>
                  <th className='table-nav' scope='col'>
                    <p className='table-th'> Product</p>
                  </th>
                  <th className='table-nav' scope='col'>
                    <p className='table-th'> Serial</p>
                  </th>
                  <th className='table-nav' scope='col'>
                    <p className='table-th'> Item</p>
                  </th>

                  <th className='table-nav' scope='col'>
                    <p className='table-th'> Certification/Tests</p>
                  </th>
                  <th className='table-nav' scope='col'>
                    <p className='table-th'> Part</p>
                  </th>

                  <th className='table-navs' scope='col'>
                    <p className='table-ths'> QR code</p>
                  </th>
                  {/* <th className='table-navs' scope='col'>
                    <p className='table-ths'> QR code</p>
                  </th> */}
                  <th className='table-navs' scope='col'>
                    <p className='table-ths'> QR code</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr key={index} className='data-tr'>
                    <td className='data-td'>
                      {/* <p className='data-th-text'>{item.brand}</p> */}
                      <p className='data-th-text'>{item.product}</p>
                    </td>

                    <td className='data-td'>
                      <p className='data-th-text'>{item.serial}</p>
                    </td>
                    <td className='data-td'>
                      <p className='data-th-text'>{item.item}</p>
                    </td>
                    <td className='data-td'>
                      <p className='data-th-text'>{item.certification}</p>
                    </td>
                    <td className='data-td'>
                      <p className='data-th-text'>{item.part}</p>
                    </td>
                    <td className='data-td'>
                      <p className='data-th-text-delete'>{item.delete}</p>
                    </td>

                    <td>
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
                ))}
              </tbody>
            </table>

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
