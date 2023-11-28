import React from "react";
import styles from "../login/login.module.css";
import Nav from "@/component/Navbar/Nav";
import pageLogo from "../../../public/pageLogomd.png";
import pageicon1 from "../../../public/social1.svg";
import pageicon2 from "../../../public/social2.svg";
import pageicon3 from "../../../public/social3.svg";
import pageicon4 from "../../../public/social4.svg";
// import pageicon4 from "../../../public/social4.svg";
import certified from "../../../public/certified.svg";
import copy from "../../../public/copy.svg";
import redix from "../../../public/redix.png";
import Image from "next/image";

const page = () => {
  return (
    <div className='individual'>
      {" "}
      <div className={styles["background-img"]}>
        <div className=''>
          <Nav />
        </div>

        <div className='certificate-full-div'>
          <div className='row'>
            <div className='col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>

            <div className='col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 '>
              <div className='redix-div'>
                <div className='redix-divs'>
                  <div className='certificate-image-div'>
                    <Image
                      className='certificate-image'
                      src={certified.src}
                      width={44}
                      height={40}
                      alt=''
                    />
                  </div>

                  <div className='certificate-tags-div'>
                    <h2 className='certificate-tags'>
                      THE BLOCKCHAIN CERTIFICATE
                    </h2>
                    <p className='certificate-ptag'>區塊鏈防偽證書</p>
                    <p className='certificate-ptag'>by OneChain®</p>
                  </div>

                  <div className='certificate-des-div'>
                    <h5 className='certificate-h5Tag'>
                      This Certificate has been securely recorded on the
                      blockchain, ensuring its transparency and immutable
                      record. It is applicable to products produced in strict
                      compliance with ESG requirements as listed below.
                    </h5>

                    <h5 className='certificate-h5Tag'>
                      此證書已安全記錄於區塊鏈上，確保其透明性和不可變紀錄。適用於嚴格符合以下列出的ESG要求的產品
                    </h5>
                  </div>

                  <div className='certificate-imageSec-div'>
                    <img src={redix.src} alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 '>
              <div className='redix-sec-div'>
                <div className='redixSec-div'>
                  <div className='Blockchain-tagone-div'>
                    <h5 className='Blockchain-tagone'>
                      Blockchain Transaction Hx 區塊鏈上鏈紀錄
                    </h5>
                  </div>

                  <div className='Blockchain-tagotwo-div'>
                    <Image src={copy.src} width={20} height={20} alt='' />
                    <h5 className='Blockchain-tagotwo'>
                      f3e516e349300a615665fbcefaf63a53cdcdc9b0a
                      d88824d34d7eb2ec3f7255e
                    </h5>
                  </div>

                  <div className='Blockchain-tagone-div'>
                    <h5 className='Blockchain-tagone'>
                      Issue Date 區塊鏈上鏈日期
                    </h5>
                  </div>

                  <div className='Blockchain-ptag-div'>
                    <p>30-10-2023</p>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Model No 型號</p>
                    <h5 className='blockchain-h5'>15692</h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Item 物品</p>
                    <h5 className='blockchain-h5'>Wooden Retro Arcade </h5>
                    <h5 className='blockchain-h5'>木製復古遊戲機 </h5>
                  </div>

                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Source 來源</p>
                    <h5 className='blockchain-h5'>
                      Hong Kong Civil Engineering (Slope Maintenance) and
                      Upgrading of Typhoon Downed Trees <br /> 香港本土
                      土木工程(斜坡維修)及颱風倒塌樹木進行升級改造{" "}
                    </h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Product - Front 產品正面</p>
                    <h5 className='blockchain-h5'>
                      Hong Kong Timber - Oak 香港木材 - 橡木
                    </h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Product - Rear 產品背面</p>
                    <h5 className='blockchain-h5'>
                      Hong Kong Timber - Pine 香港木材 - 松木
                    </h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>
                      Other parts of the product 產品其他位置{" "}
                    </p>
                    <h5 className='blockchain-h5'>
                      Hong Kong Timber - Cherry, Taiwan Acacia 香港木材 -
                      櫻桃木, 台灣相思木
                    </h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>
                      Other parts of the product 產品其他位置{" "}
                    </p>
                    <h5 className='blockchain-h5'>
                      Hong Kong Timber - Cherry, Taiwan Acacia 香港木材 -
                      櫻桃木, 台灣相思木
                    </h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Designer 產品設計 </p>
                    <h5 className='blockchain-h5'>
                      RediX Technology Co. Ltd 煒狄科技有限公司
                    </h5>
                  </div>
                  <div className='Blockchain-ptag-divs'>
                    <p className='block-ptext'>Manufacturer 製造商 </p>
                    <h5 className='blockchain-h5'>
                      Methodist Centre 循道衛理中心
                    </h5>
                  </div>

                  <div className='Information-full-div'>
                    <p>Important Information:</p>
                    <p>
                      {" "}
                      1. This certificate is non-transferable and is permanently
                      recorded on the blockchain
                    </p>
                    <p className='block-ptwotext'>
                      {" "}
                      2. For any inquiries or conernsm, feel free to contact us
                      at enquiries@certledger.io
                    </p>
                  </div>

                  <div className='Information-full-div'>
                    <p>重要信息:</p>
                    <p> 1. 此證書不可轉讓，已永久記錄在區塊鏈上。</p>
                    <p className='block-ptwotext'>
                      {" "}
                      2. 如有任何疑問或關切事 項，可電郵至:
                      enquiries@certledger.io
                    </p>
                  </div>
                  {/* 
                  <div className='Information-full-div'>
                    <p>Important Information:</p>
                    <ul>
                      <ol>
                        1. This certificate is non-transferable and is
                        permanently recorded on the blockchain
                      </ol>
                      <ol>
                        2. For any inquiries or conernsm, feel free to contact
                        us at enquiries@certledger.io
                      </ol>
                    </ul>
                  </div>
                  <div className='Information-full-div'>
                    <p>重要信息:</p>
                    <ul>
                      <ol>1. 此證書不可轉讓，已永久記錄在區塊鏈上。</ol>
                      <ol>
                        2. 如有任何疑問或關切事 項，可電郵至:
                        enquiries@certledger.io
                      </ol>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2'></div>
          </div>
        </div>

        <div className='logins-footer-div'>
          <div className='logins-footer-full-div row'>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
            <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
              <div className='footer-img-div'>
                <img className='footer-img' src={pageLogo.src} alt='' />
                <p className='fotter-ptext'>
                  For inquiries or more information please contact:
                  enquiries@esgledger.co
                </p>
              </div>
            </div>

            <div className='col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
              <div className='footer-text-div'>
                <p className='footer-textpp'>Join the Community</p>

                <div className='footer-text-icon'>
                  <img className='social-icon' src={pageicon1.src} alt='' />
                  <img className='social-icon' src={pageicon2.src} alt='' />
                  <img className='social-icon' src={pageicon3.src} alt='' />
                  <img className='social-icon' src={pageicon4.src} alt='' />
                </div>
              </div>
            </div>

            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
          </div>
          <div className='ffs-div'>
            <div className='row'>
              <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
              <div className='col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
                <div className=''>
                  <hr className='f-hr' />
                  <p className='f-text'>© 2023 OneChain Ltd.</p>
                </div>
              </div>
              <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
