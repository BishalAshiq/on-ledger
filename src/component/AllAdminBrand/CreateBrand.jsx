"use client";
import React, { useState } from "react";

import Kibo from "../../../public/kibo.png";
import BackIcon from "../../../public/back.svg";
import { toast } from "react-toastify";

import Image from "next/image";
import axiosInstance from "../../../utils/axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useRouter } from "next/navigation";

// Modal
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

const CreateBrand = () => {
  const router = useRouter();
  // Step 1: Create a state variable for the new component visibility
  const [showBrandSingleProducts, setShowBrandSingleProducts] = useState(false);

  // Step 2: Add an event handler to show/hide the BrandSingleProducts component
  const handleThreeDotsClick = () => {
    setShowBrandSingleProducts(!showBrandSingleProducts);
  };

  const [imageSrc, setImageSrc] = useState(""); // Set the initial image source

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openD, setOpenD] = React.useState(false);
  const handleOpenD = () => setOpenD(true);
  const handleCloseD = () => setOpenD(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setFiles(file);
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
  const [files, setFiles] = useState();
  const [formData, setFormData] = useState({
    name: "",
    contact_person: "",
    contact_number: "",
    contact_email: "",
    website: "",
    password: "",
  });
  const handleFormData = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  console.log(formData);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let token = "";
    if (typeof window !== "undefined") {
      token = localStorage.getItem("refreshToken");
    }
    const brandFormData = new FormData();
    brandFormData.append("logo", files);
    brandFormData.append("name", formData.name);
    brandFormData.append("contact_person", formData.contact_person);
    brandFormData.append("contact_number", formData.contact_number);
    brandFormData.append("contact_email", formData.contact_email);
    brandFormData.append("website", formData.website);
    brandFormData.append("password", formData.password);

    axiosInstance
      .post("/save-brand", brandFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.status == 200) {
          toast.success(res.data.message, {
            position: "top-right",
            style: {
              background: "white",
              color: "black",
            },
          });
          router.push("/admin/brands/view");
        }

        if (res.data.status == 201) {
          toast.success(res.data.message, {
            position: "top-right",
            style: {
              background: "white",
              color: "black",
            },
          });
          // router.push("/admin/brands/view");
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
  console.log(files);
  return (
    <div>
      <div className="individual-product-div">
        <form method="post" onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 d-none d-md-block col-lg-12 col-xl-12">
              <div className="indi-brand-head-tags">
                <div className="indi-brand-ico-tag">
                  <Image src={BackIcon} width={20} height={20} alt="" />
                  <label
                    className="form-check-label single-checkbox-text"
                    for="flexCheckDefault"
                  >
                    View all brands - add new brand
                  </label>
                  {/* <label
                  className='form-check-label single-checkbox-text'
                  for='flexCheckDefault'>
                  Account
                </label> */}
                </div>

                {/* <div className='edit-delete-div'>
                  <p className='indu-brand-edit' onClick={handleOpen}>
                    Save
                  </p>
                  <p className='indu-brand-edits' onClick={handleOpenD}>
                    Delete
                  </p>
                </div> */}

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <div className="Modal-header-div">
                      <p>Do you wish to save the changes?</p>
                      <div className="created-modal-save-btn-div">
                        <button className="yes-modal-btn">Yes</button>
                        <button className="no-modal-btn">No</button>
                      </div>
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
                      <p>
                        Are you sure you want to delete this brand account?{" "}
                      </p>
                      <div className="created-modal-save-btn-div">
                        <button className="yes-modal-btn">Cancel</button>
                        <button className="no-modal-btn">Delete</button>
                      </div>
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

            <div className="d-flex flex-column d-md-none  align-items-center ">
              <div className="">
                <div className="kibo-imgs-div">
                  {imageSrc != "" ? (
                    <Image
                      className="kibo-imgs"
                      src={imageSrc}
                      height={80}
                      width={100}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="indi-brand-ico-tag mt-4">
                <Image src={BackIcon} width={20} height={20} alt="" />
                <label
                  className="form-check-label single-checkbox-text"
                  for="flexCheckDefault"
                >
                  View all brands - add new brand
                  <hr />
                </label>
              </div>

              <div className="">
                {/* <input className='kibo-inputs' type='text' placeholder='KIBO' /> */}
                <div className="kibo-upload-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#88C9D7"
                    class="bi bi-upload"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                  </svg>
                  <span className="kibo-upload">
                    <label htmlFor="fileInput">Upload Image</label>
                    <input
                      type="file"
                      id="fileInput"
                      style={{ display: "none" }}
                      onChange={handleImageUpload}
                      accept="image/jpeg, image/jpg, image/png"
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-2 col-sm-2 d-none d-md-block col-md-2 col-lg-2 col-xl-2 pb-2">
              <div className="kibo-imgs-div">
                {imageSrc != "" ? (
                  <Image
                    className="kibo-imgs"
                    src={imageSrc}
                    height={50}
                    width={100}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="col-10 col-sm-10 d-none d-md-block col-md-10 col-lg-10 col-xl-10">
              {/* <input className='kibo-inputs' type='text' placeholder='KIBO' /> */}
              <div className="kibo-upload-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#88C9D7"
                  class="bi bi-upload"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                </svg>
                <span className="kibo-upload">
                  <label htmlFor="fileInput">Upload Image</label>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                    accept="image/jpeg, image/jpg, image/png"
                  />
                </span>
              </div>
            </div>

            {[
              {
                title: "Name *",
                value: formData.name,
                type: "text",
                name: "name"
              },
              {
                title: "Contact person",
                value: formData.contact_person,
                type: "text",
                name: "contact_person"
              },
              {
                title: "Contact number",
                value: formData.contact_number,
                type: "text",
                name: "contact_number"
              },
              {
                title: "Contact email",
                value: formData.contact_email,
                type: "text",
                name: "contact_email"
              },
              {
                title: "Website",
                value: formData.website,
                type: "text",
                name: "website"
              },
              {
                title: "Password",
                value: formData.password,
                type: "password",
                name: "password"
              },
            ].map((each, index) => (
              <div key={index} className="container">
                <div className=" row">
                  <div className="col-12 col-md-2">
                    <div className="kibo-img-div">
                      <p className="contact-word mb-0 mb-lg-3 text-nowrap">
                        {each.title}
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-10">
                    <input
                      className="kibo-inputs"
                      type={each.type}
                      placeholder=""
                      value={formData.value}
                      name={each.name}
                      onChange={handleFormData}

                      required
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* <hr className='indi-brand-hr' /> */}
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
                  Create account
                </button>
                <button className="reset-btn d-none d-md-block mt-3">
                  Create account
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBrand;
