"use client";
import React, { useState } from "react";

import Kibo from "../../../public/kibo.png";
import BackIcon from "../../../public/back.svg";
import ProCopy from "../../../public/procopy.svg";
import Image from "next/image";

const IndiEditBrands = () => {
  // Step 1: Create a state variable for the new component visibility
  const [showBrandSingleProducts, setShowBrandSingleProducts] = useState(false);

  // Step 2: Add an event handler to show/hide the BrandSingleProducts component
  const handleThreeDotsClick = () => {
    setShowBrandSingleProducts(!showBrandSingleProducts);
  };

  const [imageSrc, setImageSrc] = useState("/kibo.png"); // Set the initial image source

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadstart = () => console.log("Loading started");
      reader.onprogress = () => console.log("Loading in progress");
      reader.onloadend = () => {
        console.log("Loading finished");
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <div className='individual-product-div'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <div className='indi-brand-head-tags'>
              <div className='indi-brand-ico-tag'>
                <Image src={BackIcon} width={20} height={20} alt='' />
                <label
                  className='form-check-label single-checkbox-text'
                  for='flexCheckDefault'>
                  View all brands - brand details
                </label>
                {/* <label
                  className='form-check-label single-checkbox-text'
                  for='flexCheckDefault'>
                  Account
                </label> */}
              </div>
              <div className='edit-delete-div'>
                <p className='indu-brand-edit'>Save</p>
                <p className='indu-brand-edits'>Delete</p>
              </div>
            </div>
          </div>

          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-imgs-div'>
              <Image
                className='kibo-imgs'
                src={imageSrc}
                height={50}
                width={70}
                alt=''
              />
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            {/* <input className='kibo-inputs' type='text' placeholder='KIBO' /> */}
            <div className='kibo-upload-icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='#88C9D7'
                class='bi bi-upload'
                viewBox='0 0 16 16'>
                <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5' />
                <path d='M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z' />
              </svg>
              <span className='kibo-upload'>
                <label htmlFor='fileInput'>Upload Image</label>
                <input
                  type='file'
                  id='fileInput'
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </span>
            </div>
          </div>

          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p className='contact-word'>Contact person</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <input className='kibo-inputs' type='text' placeholder='KIBO' />
          </div>

          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p className='contact-word'>Contact number</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <input
              className='kibo-inputs'
              type='number'
              placeholder='+852 24210010'
            />
          </div>

          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p className='contact-word'>Contact email</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <input
              className='kibo-inputs'
              type='email'
              placeholder='hello@kibo.eco'
            />
          </div>

          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p className='contact-word'>Website</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <input
              className='kibo-inputs'
              type='text'
              placeholder='https://kibo.eco/'
            />
          </div>

          <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p className='contact-word'>Number of products</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <div className='number-of-div'>
              <p>100</p>
              <p className='indu-brand-edit'>View all</p>
            </div>
          </div>
          <hr className='indi-brand-hr' />
          {/* <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2'>
            <div className='kibo-img-div'>
              <p className='contact-word'>Number of items</p>
            </div>
          </div>
          <div className='col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10'>
            <div className='number-of-div'>
              <p>500</p>
              <p className='indu-brand-edit'>View all</p>
            </div>
          </div> */}
          {/* <hr className='indi-brand-hr' /> */}
          <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            {/* <div className='button-of-div'>
              <button className='reset-btn'>Reset password</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiEditBrands;
