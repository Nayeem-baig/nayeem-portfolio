import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const MyDetails = () => {
  return (
    <div className="d-flex ">
      <div className="">
        <AiOutlineMail className="txt10" />
      </div>
      <div className="">
        <div className="d-flex justify-content-start">Email Me!</div>
        <div className=" ">
          <a className="txtDecNon gray" href="mailto: nayeembaig1602@gmail.com">
            nayeembaig1602@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
