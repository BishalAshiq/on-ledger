"use client";
import React, { useState } from "react";
import ViewAllItemsData from "./ViewAllItemsData";

const ViewAllItems = () => {
  const [showDivs, setShowDivs] = useState(true);
  const [showAdditionalComponent, setShowAdditionalComponent] = useState(false);
  const [showPagePreview, setShowPagePreview] = useState(false);

  const handleOpenPagePreview = () => {
    setShowPagePreview(true);
  };

  const handleClosePagePreview = () => {
    setShowPagePreview(false);
  };

  const handleIconClick = () => {
    setShowDivs(!showDivs);
  };

  const handleAddMoreClick = () => {
    setShowAdditionalComponent(!showAdditionalComponent);
  };

  const renderDivs = () => {
    if (showDivs) {
      return (
        <div className='more-two-divs'>
          <div className='row checkbox-div '>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              {/* <div className='d-items-div'>
            <h6>Item</h6>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='#86C6CA'
              class='bi bi-plus-circle-fill'
              viewBox='0 0 16 16'>
              <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
            </svg>
          </div> */}
              <select
                className='form-select form-select-sm select-yp-yong'
                aria-label='Small select example'>
                <option selected>Uper</option>
                <option value='1'>Uper</option>
                <option value='2'>Uper</option>
              </select>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                    // checked
                  />
                  <svg
                    onClick={handleIconClick}
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='#86C6CA'
                    class='bi bi-dash-circle-fill'
                    viewBox='0 0 16 16'>
                    <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z' />
                  </svg>
                </div>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              {/* <div>
            <input type='text' />
          </div> */}
            </div>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 '>
              <div>
                {/* <div class='form-check'>
              <input
                class='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckChecked'
                // checked
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
          <div className='row checkbox-div '>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              {/* <div className='d-items-div'>
            <h6>Item</h6>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='#86C6CA'
              class='bi bi-plus-circle-fill'
              viewBox='0 0 16 16'>
              <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
            </svg>
          </div> */}
              <select
                className='form-select form-select-sm select-yp-yong'
                aria-label='Small select example'>
                <option selected>Tongue</option>
                <option value='1'>Tongue</option>
                <option value='2'>Tongue</option>
              </select>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                    // checked
                  />
                  <svg
                    onClick={handleIconClick}
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='#86C6CA'
                    class='bi bi-dash-circle-fill'
                    viewBox='0 0 16 16'>
                    <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z' />
                  </svg>
                </div>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              {/* <div>
            <input type='text' />
          </div> */}
            </div>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 '>
              <div>
                {/* <div class='form-check'>
              <input
                class='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckChecked'
                // checked
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
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {showPagePreview ? (
        <ViewAllItemsData onClose={handleClosePagePreview} />
      ) : null}

      {showPagePreview ? null : (
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
                  onClick={handleOpenPagePreview}
                  className='view-add-btn'>
                  + Add more
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
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <p>Yes by default</p>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <select
                  class='form-select form-select-sm'
                  aria-label='Small select example'>
                  <option selected>Certification/ Tests</option>
                  <option value='1'>Certification</option>
                  <option value='2'>Tests</option>
                </select>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                    // checked
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='row checkbox-div '>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <h6>Product</h6>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <p>Yes by default</p>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <select
                  class='form-select form-select-sm'
                  aria-label='Small select example'>
                  <option selected>Part</option>
                  <option value='1'>Part2</option>
                  <option value='2'>Part3</option>
                </select>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                    // checked
                  />
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
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <p>Yes by default</p>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <input type='text' className='ser-item-input' />
              </div>
            </div>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 '>
              <div>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                    // checked
                  />
                </div>
              </div>
            </div>
            <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 '>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='#86C6CA'
                  class='bi bi-dash-circle-fill'
                  viewBox='0 0 16 16'>
                  <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z' />
                </svg>
              </div>
            </div>
          </div>

          <div className='row checkbox-div '>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div className='d-items-div'>
                <h6>Item</h6>
                <svg
                  onClick={handleIconClick}
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
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                    // checked
                  />
                </div>
              </div>
            </div>
            <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
              <div>
                <input type='text' className='ser-item-input' />
              </div>
            </div>
            <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 '>
              <div>
                <div class='form-check'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    value=''
                    id='flexCheckChecked'
                    // checked
                  />
                </div>
              </div>
            </div>
            <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1 '>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='#86C6CA'
                  class='bi bi-dash-circle-fill'
                  viewBox='0 0 16 16'>
                  <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z' />
                </svg>
              </div>
            </div>
          </div>
          {renderDivs(
            <div className='more-two-divs'>
              <div className='row checkbox-div '>
                <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
                  {/* <div className='d-items-div'>
              <h6>Item</h6>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='#86C6CA'
                class='bi bi-plus-circle-fill'
                viewBox='0 0 16 16'>
                <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
              </svg>
            </div> */}
                  <select
                    className='form-select form-select-sm select-yp-yong'
                    aria-label='Small select example'>
                    <option selected>Uper</option>
                    <option value='1'>Uper</option>
                    <option value='2'>Uper</option>
                  </select>
                </div>
                <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
                  <div>
                    <div class='form-check'>
                      <input
                        class='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckChecked'
                        // checked
                      />
                      <svg
                        onClick={handleIconClick}
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='#86C6CA'
                        class='bi bi-dash-circle-fill'
                        viewBox='0 0 16 16'>
                        <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
                  {/* <div>
              <input type='text' />
            </div> */}
                </div>
                <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 '>
                  <div>
                    {/* <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckChecked'
                  // checked
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
              <div className='row checkbox-div '>
                <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
                  {/* <div className='d-items-div'>
              <h6>Item</h6>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='#86C6CA'
                class='bi bi-plus-circle-fill'
                viewBox='0 0 16 16'>
                <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
              </svg>
            </div> */}
                  <select
                    className='form-select form-select-sm select-yp-yong'
                    aria-label='Small select example'>
                    <option selected>Tongue</option>
                    <option value='1'>Tongue</option>
                    <option value='2'>Tongue</option>
                  </select>
                </div>
                <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
                  <div>
                    <div class='form-check'>
                      <input
                        class='form-check-input'
                        type='checkbox'
                        value=''
                        id='flexCheckChecked'
                        // checked
                      />
                      <svg
                        onClick={handleIconClick}
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='#86C6CA'
                        class='bi bi-dash-circle-fill'
                        viewBox='0 0 16 16'>
                        <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 '>
                  {/* <div>
              <input type='text' />
            </div> */}
                </div>
                <div className='col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 '>
                  <div>
                    {/* <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckChecked'
                  // checked
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
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ViewAllItems;
