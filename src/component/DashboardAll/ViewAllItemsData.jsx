"use client";
import React, { useState } from "react";
import Downloadicon from "../../../public/downloadicon.svg";
import QrCode from "../../../public/qrcode.svg";
import Image from "next/image";

const ViewAllItemsData = () => {
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
    },
    // Add more data as needed
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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
            <table className='table'>
              <thead>
                <tr>
                  <th className='table-nav' scope='col'>
                    <p className='table-th'> Brand</p>
                  </th>
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
                  <th className='table-nav' scope='col'>
                    <p className='table-th'> QR code</p>
                  </th>
                  <th className='table-navs' scope='col'>
                    <p className='table-ths'> QR code</p>
                  </th>
                  {/* <th className='table-navs' scope='col'>
                    <p className='table-ths'> QR code</p>
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr key={index} className='data-tr'>
                    <td className='data-td'>
                      <p className='data-th-text'>{item.brand}</p>
                    </td>
                    <td className='data-td'>
                      <p className='data-th-text'>{item.product}</p>
                    </td>
                    <td className='data-td'>
                      <p className='data-th-texts'>{item.serial}</p>
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
                    <td>
                      <div className='tabl-icon'>
                        {/* {item.img1} {item.img1} */}
                        <Image src={item.img2} width={25} height={25} alt='' />
                        <Image src={item.img1} width={20} height={20} alt='' />
                      </div>
                    </td>

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
