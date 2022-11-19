import React from "react";
import { BiPhoneCall } from "react-icons/bi";

const Call = () => {
  return (
    <div className="d-flex ">
      <div className="txt5 ">
        <BiPhoneCall className="txt10"  />
      </div>
      <div className="mb-5">
        <div className="d-flex justify-content-start">Call Me!</div>
        <div className="txtDecNon">
        <p><a className="txtDecNon gray" href="tel:+91 7019172899">+91 7019172899</a></p>
        </div>
      </div>
    </div>
  );
};

export default Call;
