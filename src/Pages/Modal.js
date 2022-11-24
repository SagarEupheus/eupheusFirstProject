import { Button, Divider, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState, forwardRef } from "react";
import { CgClose } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./modal.css";

const ModalComp = forwardRef((props, refs) => {
  const [show, setshow] = useState(false);

  // open modal
  React.useImperativeHandle(refs, () => ({
    openModel() {
      setshow(true);
    },
  }));
  
  // close modal
  const cancelModal = () => {
    setshow(false);
  };

  // store the value
  const [value, setValue] = useState("");

  const onInputChange = (e) => {
    // console.log({[e.target.name]: e.target.value})
    setValue(e.target.value);
  };

  // onSubmit
  // const onSubmit = async (e) => {
  const onSubmit = (e) => {
    // e.preventDefault();
    // await axios.post("api", user);
    if(value==""){
      toast.warning('Please Enter Coupon Code !',{
        position: toast.POSITION.TOP_RIGHT
    });
    }
    else{
      setValue("")
      toast.success('Done!',{
        position: toast.POSITION.TOP_LEFT
    });
      console.log(value);
    };
    }

  return (
    <>
      <div
        className={`fixed z-50 flex ${
          // logic hide show
          show ? "flex" : "hidden"
        } justify-center items-center w-[100vw] h-[100%] top-0 bg-[#00000040]`}
        onClick={(e) => {
          e.stopPropagation()
          setshow(false)
        }}
      >
        {/* <div className=" flex justify-center items-center " > */}
          
          <div
          onClick={(e) => {
          e.stopPropagation()
            // console.log('abc');
          }}
            className="modal z-[100] w-[390px] h-[220px] m-auto border bg-white"
            style={{ borderRadius: "6px" }}
          >
            <div className="header bg-[#4932d3c2] h-[48px] flex justify-between items-center px-6  ">
              <div
                className="activate inline-block text-white "
              >
                Activate Product
              </div>
              <div className="close inline-block ">
                <CgClose
                  color="white"
                  className="btn cursor-pointer"
                  onClick={cancelModal}
                />
              </div>
            </div>
            <div className="main h-[100px]">
              <p className="text-start px-6 pb-2 text-[#495057] mt-2">
                Enter Coupon Code
              </p>
              <input
                type="text"
                className="modalInput mx-6"
                onChange={onInputChange}
                value={value}
              />
            </div>
            <hr className="hr" />
            <div className="footer flex justify-end ">
              <button
                onClick={cancelModal}
                className="text-center cancelModal cursor-pointer rounded text-[#495057] transition-all w-[80px] mr-2 hover:bg-[whitesmoke]"
              >
                Cancel
              </button>
              <button
                className=" h-[40px] rounded hover:bg-[#6e59fcb8] transition-all w-[140px] mr-4 activateProducts "
                onClick={onSubmit}
              >
                Activate Product
              </button>
            </div>
          </div>
        {/* </div> */}
      </div>
      <ToastContainer />
    </>
  );
});

export default ModalComp;
