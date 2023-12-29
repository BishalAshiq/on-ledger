import React from "react";
import qrCode from "../../../public/qrcode.png";
import DownloadIcon from "../../../public/downloadicon.svg";
import BackIcon from "../../../public/back.svg";
import ProCopy from "../../../public/procopy.svg";
import Image from "next/image";

const BrandSingleProducts = () => {
  return (
    <div className=''>
      <div className='row full-single-product'>
        <div className='col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
          <div>
            <div className='single-product-checkbox-div'>
              <Image src={BackIcon.src} width={20} height={20} alt='' />
              <label
                className='form-check-label single-checkbox-text'
                for='flexCheckDefault'>
                View all brands - item details
              </label>
            </div>

            <div className='single-products-full-div'>
              <div className='row single-products-div'>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                  <h5 className='tag-brands'>Brand</h5>
                </div>
                <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                  <p className='tag-kinbo'>Kibo</p>
                </div>
              </div>

              <div className='row single-products-div'>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                  <h5 className='tag-brands'>Product</h5>
                </div>
                <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                  <p className='tag-kinbo'>Sydney</p>
                </div>
              </div>

              <div className='row single-products-div'>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                  <h5 className='tag-brands'>Serial</h5>
                </div>
                <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                  <p className='tag-kinbo'>1234567890</p>
                </div>
              </div>

              <div className='row single-products-div'>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                  <h5 className='tag-brands'>Item</h5>
                </div>
                <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                  <p className='tag-kinbo'>Recycled Leather</p>
                </div>
              </div>

              <div className='row single-products-div'>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                  <h5 className='tag-brands'>Country of Origin</h5>
                </div>
                <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                  <p className='tag-kinbo'>20231001</p>
                </div>
              </div>

              <div className='row single-products-div'>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                  <h5 className='tag-brands'>Composition</h5>
                </div>
                <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                  <p className='tag-kinbo'>
                    50% recycled leather, 20% recycled PET, 20% polyester, 10%
                    water-based PU
                  </p>
                </div>
              </div>

              <div className='row single-products-div'>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                  <h5 className='tag-brands'>Supplier</h5>
                </div>
                <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                  <p className='tag-kinbo'>Composition Leather</p>
                </div>
              </div>

              <div className='row single-products-div'>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                  <h5 className='tag-brands'>Certification/Tests</h5>
                </div>
                <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                  <p className='tag-kinbo'>GRS</p>
                </div>
              </div>

              <div className='row single-products-div'>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                  <h5 className='tag-brands'>Part</h5>
                </div>
                <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                  <p className='tag-kinbo'>Upper</p>
                </div>
              </div>

              <div className='row single-products-div'>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                  <h5 className='tag-brands'>Hash</h5>
                </div>
                <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                  <p className='tag-kinbo'>1234567890</p>
                </div>
              </div>

              <div className='row single-products-div'>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                  <h5 className='tag-brands'>URL</h5>
                </div>
                <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                  <div className='tag-kinbo-text'>
                    <p className='tag-kinbo'>1234567890 </p>
                    <Image src={ProCopy.src} height={30} width={20} alt='' />
                  </div>
                </div>
              </div>

              <div className='row single-products-div'>
                <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                  <h5 className='tag-brands'>XXXXX</h5>
                </div>
                <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                  <p className='tag-kinbo'>Ssdgga</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
          <div className='qr-download-div'>
            <div>
              <p className='single-product-qr-text'>QR Code</p>
              <Image src={qrCode} width={100} height={100} alt='' />
            </div>
            <Image src={DownloadIcon.src} width={40} height={25} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSingleProducts;
