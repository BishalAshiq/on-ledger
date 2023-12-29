"use client";
import React, {useEffect, useState} from "react";
import Kibo from "../../../public/kibo.png";
import BackIcon from "../../../public/back.svg";
import ProCopy from "../../../public/procopy.svg";
import Image from "next/image";
import IndiEditBrands from "./IndiEditBrands";
import axiosInstance from "../../../utils/axios";
import {base_url} from "../../../utils/auth";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const IndividualBrand = ({brandId}) => {
  const router = useRouter();
  const [showBrandSingleProducts, setShowBrandSingleProducts] = useState(false);
  const handleThreeDotsClick = () => {
    setShowBrandSingleProducts(!showBrandSingleProducts);
  };
  const [brand, setBrand] = useState({});
  const [authToken, setAuthToken] = useState({});
  const [open, setOpen] = React.useState(false);
  const [openD, setOpenD] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleCloseD = () => setOpenD(false);
  const handleOpen = () => {
    setOpen(true);
    setSuccess(false);
  };
  const handleOpenD = () => {
    setSuccess(false);
    setOpenD(true);
  };
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    brand_id: "",
    name: "",
    contact_person: "",
    contact_number: "",
    contact_email: "",
    website: "",
    brands_item_count: 0,
    logo: "",
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#066F69",
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };
  const styleDelete = {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: 2,
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#066F69",
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    let token = "";
    if (typeof window !== "undefined") {
      token = localStorage.getItem("refreshToken");
    }
    setAuthToken(token);
    axiosInstance
      .get("brand-details/" + brandId, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        if (result.data.status == 200) {
          let brand = result.data.data;
          setFormData((prevFormData) => ({
            ...prevFormData,
            brand_id: brand.id,
            name: brand.name,
            contact_person: brand.contact_person,
            contact_number: brand.contact_number,
            contact_email: brand.email,
            website: brand.website,
            logo: brand.logo,
            brands_item_count: brand.brands_item_count,
          }));
        }
      });
  }, []);

  const handleFormData = (e) => {
    const {name, value} = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormEdit = (e) => {
    axiosInstance
      .post("/save-brand", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
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

        if (res.data.status == 200) {
          // toast.success(res.data.message, {
          //   position: "top-right",
          //   style: {
          //     background: "white",
          //     color: "black",
          //   },
          // });

          setFormData((prevFormData) => ({
            ...prevFormData,
            brand_id: brand.id,
            name: brand.name,
            contact_person: brand.contact_person,
            contact_number: brand.contact_number,
            contact_email: brand.email,
            website: brand.website,
            brands_item_count: brand.brands_item_count,
          }));
          setSuccess(true);
          // router.push("/");
        }
      });
  };

  const hanleBrandDelete = (e) => {
    const deleteFormData = {
      brandId: brandId,
    };
    axiosInstance
      .post("/delete-brand", deleteFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res) => {
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

        if (res.data.status == 200) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            brand_id: "",
            name: "",
            contact_person: "",
            contact_number: "",
            contact_email: "",
            website: "",
            brands_item_count: 0,
            logo: "",
          }));
          setSuccess(true);
        }
      });
  };
  console.log(base_url, brandId);
  return (
    <div>
      {!showBrandSingleProducts ? (
        <div>
          <div className="individual-product-div">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="indi-brand-head-tags">
                  <div className="indi-brand-ico-tag">
                    <Image src={BackIcon.src} width={20} height={20} alt="" />
                    <label
                      className="form-check-label single-checkbox-text"
                      for="flexCheckDefault"
                    >
                      View all brands - brand details
                    </label>
                    {/* <label
                  className='form-check-label single-checkbox-text'
                  for='flexCheckDefault'>
                  Account
                </label> */}
                  </div>
                  <div className="edit-delete-div">
                    <p
                      className="indu-brand-edit"
                      onClick={handleOpen}
                      // onClick={handleFormEdit}
                    >
                      Save
                    </p>
                    <p
                      className="indu-brand-edits"
                      onClick={handleOpenD}
                      // onClick={hanleBrandDelete}
                    >
                      Delete
                    </p>
                  </div>

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <div className="Modal-header-div">
                        {success == true ? (
                          <>
                            <p className="created-modal-success ">
                              {" "}
                              Changes have been saved successfully!
                            </p>
                          </>
                        ) : (
                          <>
                            <p>Do you wish to save the changes?</p>
                            <div className="created-modal-save-btn-div">
                              <button
                                className="yes-modal-btn"
                                onClick={handleFormEdit}
                              >
                                Yes
                              </button>
                              <button
                                className="no-modal-btn"
                                onClick={handleClose}
                              >
                                No
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                      {/* <Typography
                      id='modal-modal-title'
                      variant='h6'
                      component='h2'>
                      Text in a modal
                    </Typography>
                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </Typography> */}
                    </Box>
                  </Modal>
                  <Modal
                    open={openD}
                    onClose={handleCloseD}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={styleDelete}>
                      <div className="Modal-header-div">
                        {success == true ? (
                          <>
                            <p className="created-modal-success ">
                              {" "}
                              Brand have been deleted successfully!
                            </p>
                          </>
                        ) : (
                          <>
                            <p>
                              Are you sure you want to delete this brand
                              account?{" "}
                            </p>
                            <div className="created-modal-save-btn-div">
                              <button
                                className="yes-modal-btn"
                                onClick={handleCloseD}
                              >
                                Cancel
                              </button>
                              <button
                                className="no-modal-btn"
                                onClick={hanleBrandDelete}
                              >
                                Delete
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                      {/* <Typography
                      id='modal-modal-title'
                      variant='h6'
                      component='h2'>
                      Text in a modal
                    </Typography>
                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </Typography> */}
                    </Box>
                  </Modal>
                </div>
              </div>

              <div className="container">
                <div className="mb-2 row">
                  <div className="col-12 col-md-2 ">
                    <div className="kibo-img-div">
                      <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 pb-2">
                        <div className="kibo-img-div">
                          {formData.logo == "" ? (
                            <></>
                          ) : (
                            <img
                              src={`${base_url}/uploads/${formData.logo}`}
                              className="kibo-img"
                              height={50}
                              width={70}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-10">
                    <input
                      className="kibo-inputs"
                      type="text"
                      placeholder="KIBO"
                      // value={formData.name}
                      name="name"
                      onChange={handleFormData}
                      required
                    />
                  </div>
                </div>
              </div>

              {[
                {
                  title: "Contact person",
                  value: formData.name,
                },
                {
                  title: " Contact number",
                  value: formData.contact_number,
                },
                {
                  title: "Contact email",
                  value: formData.contact_email,
                },
                {
                  title: "Website",
                  value: formData.website,
                },
              ].map((each, index) => (
                <div key={index} className="container">
                  <div className=" row">
                    <div className="col-12 col-md-2 ">
                      <div className="kibo-img-div">
                        <p className="contact-word mb-0 ">{each.title}</p>
                      </div>
                    </div>

                    <div className="col-12 col-md-10">
                      <input
                        className="kibo-inputs"
                        type="text"
                        placeholder="KIBO"
                        value={each.value}
                        name="name"
                        onChange={handleFormData}
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="number-of-div d-flex justify-content-between mt-4 ">
                <div className="d-flex justify-content-between ">
                  <p className="font-weight-bold">Number of Products</p>
                  <p className="pl-4">{formData.brands_item_count}</p>
                </div>
                <p className="indu-brand-edit">View all</p>
              </div>
              <hr className="indi-brand-hr" />
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
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="button-of-div">
                  <button className="reset-btn d-md-none w-100 mt-3">
                    Reset password
                  </button>
                  <button className="reset-btn d-none d-md-block mt-3">
                    Reset password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Only render the BrandSingleProducts component when showBrandSingleProducts is true
        <IndiEditBrands />
      )}
    </div>
  );
};

export default IndividualBrand;
