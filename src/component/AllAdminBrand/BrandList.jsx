"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect, useRef, useState} from "react";
import {toast} from "react-toastify";
import axiosInstance from "../../../utils/axios";
import CreateBrand from "./CreateBrand";
import IndividualBrand from "./IndividualBrand";

const BrandList = () => {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const [brandList, setBrandList] = useState([]);
  const router = useRouter();
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
      .get("/brand-list", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status == 200) {
          setBrandList(res.data.data);
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

  const totalPages = Math.ceil(brandList.length / itemsPerPage);

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
    <div className="container-fluid">
      {!showBrandSingleProducts ? (
        <div>
          <div className="admin-header-search-div">
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
                onKeyUp={(e) => {
                  handleSearch(e.target.value);
                }}
                placeholder="Search by “brand name, Item, Product”"
              />
            </div>
            <div className="admin-header-search-btn-div">
              <button
                className="admin-header-search-btn"
                onClick={handleThreeDotsClick}
              >
                Add new brand
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center w-100 mb-3">
            <div className="indi-filter-div d-flex align-items-center w-100">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="#49494a"
                  class="bi bi-sort-down"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
                </svg>
              </span>
              <p className="mb-0">
                Search by ________ total of{" "}
                <span className="filt-twenty">{brandList.length}</span>{" "}
                collections
              </p>
            </div>

            <button
              className="admin-header-search-btn_mb w-25  py-2 d-md-none"
              onClick={handleThreeDotsClick}
            >
              Add new brand
            </button>
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
              <table className=" table full-table">
                <thead className="thead-div">
                  <tr>
                    {/* {headers.length > 0 &&
                     headers.map((item) => (
                       <th className='table-nav' scope='col'>
                         <p className='table-th'> {item}</p>
                       </th>
                     ))} */}
                    <th className="table-nav" scope="col">
                      <span className="table-th"> Brand Name</span>
                    </th>

                    <th className="table-nav" scope="col">
                      <span className="table-th"> No. items</span>
                    </th>
                    <th className="table-navs" scope="col">
                      <span className="table-ths"> No. items</span>
                    </th>
                    {/* <th className='table-navs' scope='col'>
                   <p className='table-ths'> QR code</p>
                 </th> */}
                  </tr>
                  <tr>
                    <th colSpan={6}></th>
                  </tr>
                </thead>
                <tbody>
                  {brandList.length > 0 &&
                    brandList.map((brand, index) => (
                      <>
                        <tr className="data-tr" key={index}>
                          <td className="data-td">
                            <span>{brand.name}</span>
                          </td>

                          <td className="data-td">
                            <span>{brand.brands_item_count}</span>
                          </td>
                          <td className="data-td">
                            <div className="indu-brand-edit text-center">
                              <Link
                                className="view-all-link"
                                href={`/admin/brands/itemlist/${brand.id}`}
                              >
                                View All
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th colSpan={6}></th>
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>

              <div className="pagination">
                <svg
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#86C6CA"
                  class="bi bi-caret-left-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>

                <span>{` ${currentPage} / ${totalPages}`}</span>

                <svg
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#86C6CA"
                  class="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : // Only render the BrandSingleProducts component when showBrandSingleProducts is true

      showEditBrand == true ? (
        <IndividualBrand brandId={brandId} />
      ) : (
        <CreateBrand />
      )}
    </div>
  );
};

export default BrandList;
