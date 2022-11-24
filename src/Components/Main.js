// import { Grid } from "@mui/material";
// import { Box } from "@mui/system";
import React, { useRef } from "react";
import Cards from "./Cards/Cards";
import ModelComp from "../Pages/Modal";

const img1 ="https://eupwebdata.s3.ap-south-1.amazonaws.com/nectar/E-Book+Cover/sst/Semester_Book_5_Sem_1.jpg";

const Main = () => {
  const modalRef = useRef();
  // passing ref through props drilling
  const propsFuncref = () => {
    modalRef.current.openModel();
  };
  
  return (
    <div className="bg-[#EDF4F8] pt-10 mt-10">
      <div className="w-full flex  flex-wrap px-8 justify-center items-center sm:py-[35px] sm:px-[40px] ">
        <div className=" w-full sm:w-full xs:w-full md:w-6/12 lg:w-3/12 pr-0 sm:pr-8 ">
          <Cards
            img={img1}
            // props 
            func={propsFuncref}
            bookname="Zoom StoryBook"
            booktitle="Zoom StoryBook"
            kclass="NURSERY"
          />
        </div>
        <div className="w-full sm:w-full xs:w-full md:w-6/12 lg:w-3/12 pr-0 sm:pr-8">
          <Cards
            img={img1}
            func={propsFuncref}
            bookname="Zoom StoryBook"
            booktitle="Zoom StoryBook"
            kclass="NURSERY"
          />
        </div>
        <div className=" w-full sm:w-full xs:w-full md:w-6/12 lg:w-3/12 pr-0 sm:pr-8">
          <Cards
            img={img1}
            func={propsFuncref}
            bookname="Zoom StoryBook"
            booktitle="Zoom StoryBook"
            kclass="NURSERY"
          />
        </div>
        <div className="w-full sm:w-full xs:w-full md:w-6/12 lg:w-3/12 pr-0 sm:pr-8">
          <Cards
            img={img1}
            func={propsFuncref}
            bookname="Zoom StoryBook"
            booktitle="Zoom StoryBook"
            kclass="NURSERY"
          />
        </div>
        <div className=" w-full sm:w-full xs:w-full md:w-6/12 lg:w-3/12 pr-0 sm:pr-8">
          <Cards
            img={img1}
            func={propsFuncref}
            bookname="Zoom StoryBook"
            booktitle="Zoom StoryBook"
            kclass="NURSERY"
          />
        </div>
        <div className="w-full sm:w-full xs:w-full md:w-6/12 lg:w-3/12 pr-0 sm:pr-8">
          <Cards
            img={img1}
            func={propsFuncref}
            bookname="Zoom StoryBook"
            booktitle="Zoom StoryBook"
            kclass="NURSERY"
          />
        </div>
        <div className=" w-full sm:w-full xs:w-full md:w-6/12 lg:w-3/12 pr-0 sm:pr-8">
          <Cards
            img={img1}
            func={propsFuncref}
            bookname="Zoom StoryBook"
            booktitle="Zoom StoryBook"
            kclass="NURSERY"
          />
        </div>
        <div className="w-full sm:w-full xs:w-full md:w-6/12 lg:w-3/12 pr-0 sm:pr-8">
          <Cards
            img={img1}
            func={propsFuncref}
            bookname="Zoom StoryBook"
            booktitle="Zoom StoryBook"
            kclass="NURSERY"
          />
        </div>
        <ModelComp ref={modalRef} />
      </div>
    </div>
  );
};

export default Main;
