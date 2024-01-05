"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import ModalFile from "../../../public/modalfile.svg";
import ModalConferm from "../../../public/successfull-modal.svg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};
const styletwo = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};
const stylethree = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};
const page = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [opent, setOpent] = React.useState(false);
  const handleOpent = () => setOpent(true);
  const handleCloset = () => setOpent(false);
  const [openthree, setOpenthree] = React.useState(false);
  const handleOpenthree = () => setOpenthree(true);
  const handleClosethree = () => setOpenthree(false);

  return (
    <div>
      <div className='Modal-1'>
        <Button onClick={handleOpen}>Save CSV button</Button>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box sx={style}>
              <div>
                <div className='mod-f-img-div'>
                  <img className='mod-f-img' src={ModalFile.src} alt='' />
                  <p className='mod-f-uplod-text'>
                    By clicking 'Upload & Mint,'
                  </p>
                  <p className='mod-f-uplod-textp'>
                    your data will be permanently stored on the blockchain, and
                    this action cannot be reverted.
                  </p>
                  <p className='mod-f-uplod-textp2'>
                    Please verify all information for accuracy before
                    proceeding.
                  </p>
                </div>
                <div className='button-div'>
                  <button className='return-m-btn'>RETURN TO EDIT</button>
                  <button className='conferm-m-btn'>CONFIRM TO PROCEED</button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
      <div className='Modal-2'>
        <Button onClick={handleOpent}>Buffer</Button>
        <div>
          <Modal
            open={opent}
            onClose={handleCloset}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box sx={styletwo}>
              <div>
                <div className='mod-f-img-div'>
                  <div className='spinner-border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </div>

                  <p className='mod-f-buffering-text'>
                    Your data is being recorded on the blockchain. Kindly wait a
                    moment.
                  </p>
                </div>
                {/* <div className='button-div'>
                  <button className='return-m-btn'>RETURN TO EDIT</button>
                  <button className='conferm-m-btn'>CONFIRM TO PROCEED</button>
                </div> */}
              </div>
            </Box>
          </Modal>
        </div>
      </div>
      <div className='Modal-3'>
        <Button onClick={handleOpenthree}>Buffer</Button>
        <div>
          <Modal
            open={openthree}
            onClose={handleClosethree}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'>
            <Box sx={stylethree}>
              <div>
                <div className='mod-f-img-div'>
                  <img className='mod-f-img' src={ModalConferm.src} alt='' />

                  <p className='mod-f-succes-text'>
                    Your data is being recorded on the blockchain. Kindly wait a
                    moment.
                  </p>
                </div>
                <div className='button-div'>
                  <button className='conferm-m-btn'>VIEW MY PRODUCTS</button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default page;
