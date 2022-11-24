import { Button, CardActions } from "@mui/material";
import React, { useState ,forwardRef, useImperativeHandle  } from "react";
import "./card.css";
import Modal from "../../Pages/Modal"

const Cards = ({func, img}) => {
  // const [showModal, setshowModal] = useState(false)
  console.log(func+"this is propss")


  return (
    <>
      <div className="max-w-sm gap-4 rounded shadow-lg bg-white overflow-hidden showHide cardGrid ">
        <div
          //   style={{ width: "353px", height: "100%" }}
          className="overflow-hidden"
        >
          <img
            className="w-full homezoomimg hover:transition-all ease-in-out duration-[2s] "
            src={img}
            alt="Cards..."
          />
        </div>
        <div className="px-4 py-2">
          <h4
            className=" text-start font-bold text-xl zoomh4 "
            style={{fontSize:"16px", textAlign:"left",fontWeight:"400" }}
          >
            Zoom StoryBook
          </h4>
          <div
            className=" text-start font-bold text-sm mb-2 zoomSubtitle"
          style={{fontSize:"12px" , textAlign:"left",fontWeight:"400"}}
          >
            <span className="text-start  ">ZOOM-STORYBOOK</span>
            <p className="text-start " style={{fontSize:"10px" , textAlign:"left",fontWeight:"400"}}>Nursery</p>
          </div>
        </div>
      </div>
      <button className="ml-5 rounded w-28 h-9 text-white getNow " onClick={func}>
      {/* <button className="ml-5 rounded w-28 h-9 text-white getNow  " onClick={()=> {props.buttonRef.current.alterToggle()}}> */}
        Get Now
      </button> 
    </>
  );
};

export default Cards;
// // material ui

