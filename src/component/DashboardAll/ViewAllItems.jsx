"use client";
import React, { useState } from "react";
import ViewAllItemsData from "./ViewAllItemsData";
import { useRouter } from "next/navigation";
import axiosInstance from "../../../utils/axios";
import { toast } from "react-toastify";

const ViewAllItems = () => {
  const [showDivs, setShowDivs] = useState(true);
  const [showAdditionalComponent, setShowAdditionalComponent] = useState(false);
  const [showPagePreview, setShowPagePreview] = useState(false);
  const router = useRouter();
  const [brand, setBrand] = useState("");
  const [product, setProduct] = useState("");


  const handleOpenPagePreview = () => {
    setShowPagePreview(true);
  };

  const handleClosePagePreview = () => {
    setShowPagePreview(false);
  };

  // const handleIconClick = () => {
  //   setShowDivs(!showDivs);
  // };

  const handleAddMoreClick = () => {
    setShowAdditionalComponent(!showAdditionalComponent);
  };


  const handleIconClick = (id) => {
    console.log(id);
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  const handleInputChange = (id, value) => {
    console.log(id, value);
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, text: value } : row
    );
    setRows(updatedRows);
  };

  const handleCheckboxChange = (id) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, checked: !row.checked } : row
    );
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    const newRow = { id: rows.length + 1 + 4, text: '', checked: false };
    setRows([...rows, newRow]);
  };

  const [items, setItems] = useState({
    0: [
      { id: 1, text: "", isChecked: false },
      // Add more initial items as needed
    ]
  });
  const [itemst, setItemst] = useState([{
    id: 0, text: "", isChecked: false
  }]);

  const [formData, setFormData] = useState([
    { id: 1, text: 'Brand Name', checked: true },
    { id: 2, text: 'Product No', checked: true },
    { id: 3, text: 'Serial', checked: true }
  ]);
  const [category, setCategory] = useState([
    { id: 1, text: "", checked: false },
  ]);

  const [subCategory, setSubCategory] = useState([
    {
      // id: 1, text: "", index: '', checked: false
    },
  ]);

  const handleAddClickt = (currindex) => {
    const newId = itemst.length;
    const newIndex = currindex + 1;
    setItemst([...itemst, { id: newId, text: "", isChecked: false }]);
  };
  const handleDeleteClickt = (id) => {
    const updatedItemst = itemst.filter((itemt) => itemt.id !== id);
    setItemst(updatedItemst);
  };

  const handleFormChange = (id, value) => {
    const rowExists = formData.some((row) => row.id === id);

    if (rowExists) {

      const updatedRows = formData.map((row) =>
        row.id === id ? { ...row, text: value } : row
      );
      setFormData(updatedRows);
    } else {

      const newRow = { id, text: value, checked: false };
      setFormData([...formData, newRow]);
    }
    if (id == 1) {
      console.log(id, value);
      setBrand(value)
    }

    if (id == 2) {
      setProduct(value)
    }
  }

  const handleFormCheckboxChange = (id) => {
    const rowExists = formData.some((row) => row.id === id);

    if (rowExists) {
      const updatedRows = formData.map((row) =>
        row.id === id ? { ...row, checked: !row.checked } : row
      );
      setFormData(updatedRows);
    } else {
      const newRow = { id, checked: true, text: '' }; // Assuming you want to set text to an empty string for new rows
      setFormData([...formData, newRow]);
    }
  };


  const handleAddClick = (index) => {
    const newId = (items[index] || []).length + 1;
    setItems((prevItems) => {
      const updatedItems = { ...prevItems };
      updatedItems[index] = [
        ...(updatedItems[index] || []),
        { id: newId, text: "", isChecked: false },
      ];
      return updatedItems;
    });
  };


  const handleDeleteClick = (id, currindex) => {
    setItems((prevItems) => {
      const updatedItems = { ...prevItems };
      updatedItems[currindex] = updatedItems[currindex].filter((item) => item.id !== id);
      return updatedItems;
    });
  };






  const handleCategoryChange = (id, value) => {
    const rowExists = category.some((row) => row.id === id);

    if (rowExists) {
      const updatedRows = category.map((row) =>
        row.id === id ? { ...row, text: value } : row
      );
      setCategory(updatedRows);
    } else {
      const newRow = { id, text: value, checked: false };
      setCategory([...category, newRow]);
    }


  };


  const handleCategoryCheckboxChange = (id) => {
    const rowExists = category.some((row) => row.id === id);

    if (rowExists) {
      const updatedRows = category.map((row) =>
        row.id == id ? { ...row, checked: !row.checked } : row
      );
      setCategory(updatedRows);
    } else {
      const newRow = { id, checked: true, text: "" };
      setCategory([...category, newRow]);
    }
  };


  const handleSubCategoryChange = (id, value, currIndex) => {
    const rowExists = subCategory.some((row) => row.id === id && row.index == currIndex);

    if (rowExists) {
      const updatedRows = subCategory.map((row) =>
        row.id === id && row.index == currIndex ? { ...row, text: value, index: currIndex } : row
      );
      setSubCategory(updatedRows);
    } else {
      const newRow = { id, text: value, checked: false, index: currIndex };
      setSubCategory([...subCategory, newRow]);
    }


  };


  const handleSubCategoryCheckboxChange = (id, currIndex) => {
    const rowExists = subCategory.some((row) => row.id === id && row.index == currIndex);

    if (rowExists) {
      const updatedRows = subCategory.map((row) =>
        row.id == id && row.index == currIndex ? { ...row, checked: !row.checked, index: currIndex } : row
      );
      setSubCategory(updatedRows);
    } else {
      const newRow = { id, checked: true, text: "", index: currIndex };
      setSubCategory([...subCategory, newRow]);
    }
  };
  const [rows, setRows] = useState([{ id: 5, text: "", checked: false }]);
  const handleCustomizeForm = (e) => {
    e.preventDefault();


    const merged = [...rows];

    formData.forEach((formItem) => {
      const existingIndex = merged.findIndex((row) => row.id === formItem.id);

      if (existingIndex !== -1) {
        // Update existing row
        merged[existingIndex] = { ...merged[existingIndex], ...formItem };
      } else {
        // Add new row
        merged.push(formItem);
      }
    });

    const mergedData = {
      product_name: product,
      brand_name: brand,
      rows: merged,
      category: category,
      subCategory: subCategory,

    };

    let token = "";
    if (typeof window !== "undefined") {
      token = localStorage.getItem("refreshToken");
    }
    axiosInstance.post("/cutomize-data", mergedData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.data.status == 200) {
        toast.success(res.data.message, {
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



  return (
    <div>
      <form onSubmit={handleCustomizeForm}>
        <div className='ViewAll-Items-div'>
          <div className='row checkbox-div'>
            <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 '>
              <div className='check-div'>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                    checked
                  />
                </div>

                <span>View all items - customise data field</span>
              </div>
            </div>

            <div className='col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 '>
              <div className='view-addbtn-div'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='#86C6CA'
                    class='bi bi-exclamation-circle-fill'
                    viewBox='0 0 16 16'>
                    <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z' />
                  </svg>
                </span>
                <button
                  type='submit'
                  className='view-add-btn'>
                  +  Save Customize Data
                </button>
              </div>
            </div>
          </div>

          <div className='row checkbox-div '>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <h6>Brand</h6>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center'>
              <div>
                <p>Yes by default</p>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              {/* <div>
                  <input
                    type='text'
                    className='ser-item-input'
                    name='brand_name'
                    onChange={(e) => handleFormChange(1, e.target.value)}
                  />
                </div> */}
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                {/* <div class='form-check'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      value='1'
                      id='flexCheckChecked'
                      name='brand_name_show'
                      onChange={(e) =>
                        handleFormCheckboxChange(1, e.target.value)
                      }
                    />
                  </div> */}
              </div>
            </div>
          </div>

          <div className='row checkbox-div '>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <h6>Product/Model No</h6>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center'>
              <div>
                <p>Yes by default</p>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              {/* <div>
                  <input
                    type='text'
                    className='ser-item-input'
                    name='product_name'
                    onChange={(e) => handleFormChange(2, e.target.value)}
                  />
                </div> */}
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <div class='form-check'>
                  {/* <input
                      class='form-check-input'
                      type='checkbox'
                      value='1'
                      id='flexCheckChecked'
                      name='product_name_show'
                      onChange={(e) =>
                        handleFormCheckboxChange(2, e.target.value)
                      }
                    /> */}
                </div>
              </div>
            </div>
          </div>

          <div className='row checkbox-div '>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <h6>Serial</h6>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center '>
              <div>
                <p>Yes by default</p>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              {/* <div>
                  <input
                    type='text'
                    className='ser-item-input'
                    name='serial'
                    onChange={(e) => handleFormChange(3, e.target.value)}
                  />
                </div> */}
            </div>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 '>
              <div>
                {/* <div class='form-check'>
                    <input
                      class='form-check-input'
                      type='checkbox'
                      value='1'
                      id='flexCheckChecked'
                      name='serial_show'
                      onChange={(e) =>
                        handleFormCheckboxChange(3, e.target.value)
                      }
                    />
                  </div> */}
              </div>
            </div>
            <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 '>
              {/* <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='#86C6CA'
                    class='bi bi-dash-circle-fill'
                    viewBox='0 0 16 16'>
                    <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z' />
                  </svg>
                </div> */}
            </div>
          </div>



          {itemst.map((itemt, index) => (
            <>
              <div key={itemt.id} className='row checkbox-div pb-10'>
                <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
                  <div className='d-items-div'>
                    <h6>Add new item</h6>

                  </div>
                </div>

                <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center'>
                  <div>
                    <svg
                      onClick={(e) => {
                        handleAddClick(index)
                      }}
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='#86C6CA'
                      class='bi bi-plus-circle-fill'
                      viewBox='0 0 16 16'>
                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
                    </svg>
                  </div>
                </div>

                <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
                  <div>
                    <input type='text' className='ser-item-input' name='item'
                      onChange={(e) => handleCategoryChange(index, e.target.value)}
                    />
                  </div>
                </div>

                <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 '>
                  <div>
                    <div class='form-check'>
                      <input
                        class='form-check-input'
                        type='checkbox'
                        value='1'
                        id='flexCheckChecked'
                        name='item_show'
                        onChange={(e) =>
                          handleCategoryCheckboxChange(index, e.target.value)
                        }

                      />
                    </div>
                  </div>
                </div>

                <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 '>
                  <div>
                    {
                      index > 0 ?

                        <svg
                          onClick={() => handleDeleteClickt(itemt.id)}
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='#86C6CA'
                          class='bi bi-dash-circle-fill'
                          viewBox='0 0 16 16'>
                          <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z' />
                        </svg>

                        :
                        <svg
                          onClick={(e) => {
                            handleAddClickt(index)
                          }}
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='#86C6CA'
                          class='bi bi-plus-circle-fill'
                          viewBox='0 0 16 16'>
                          <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
                        </svg>
                    }
                    {/* <svg
                    
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='#86C6CA'
                      class='bi bi-plus-circle-fill'
                      viewBox='0 0 16 16'>
                      <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
                    </svg> */}
                  </div>
                </div>
              </div>
              {
                items[index]?.length > 0 ?
                  items[index].map((item, iIndex) => (
                    <div key={item.id} className='row checkbox-div pb-10'>
                      <div className='col-3 col-sm-1 col-md-1 col-lg-1 col-xl-1 '>

                      </div>
                      <div className='col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 '>
                        <div className='d-items-div'>
                          <h6>Add new sub item</h6>

                        </div>
                      </div>
                      <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
                      </div>
                      <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
                        <input
                          type='text'
                          className='ser-item-input'
                          onChange={(e) => handleSubCategoryChange(item.id, e.target.value, index)}
                        />
                      </div>
                      <div className='col-3 col-sm-2 col-md-2 col-lg-2 col-xl-2 '>
                        <div>
                          <div class='form-check'>
                            <input
                              class='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckChecked'
                              onChange={() => handleSubCategoryCheckboxChange(item.id, index)}
                            // checked
                            />


                          </div>
                        </div>
                      </div>

                      <div className='col-3 col-sm-1 col-md-1 col-lg-1 col-xl-1 '>
                        <svg
                          onClick={() => handleDeleteClick(item.id, index)}
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='#86C6CA'
                          class='bi bi-dash-circle-fill'
                          viewBox='0 0 16 16'>
                          <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z' />
                        </svg>
                      </div>
                      <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 '>
                        <div></div>
                      </div>
                      <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 '></div>
                    </div>
                  )) : <></>
              }
            </>
          ))}


        </div>
      </form>
    </div>
  );
};

export default ViewAllItems;
