import React from "react";


const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-secondaryColor to-mainColor text-white hover:opacity-90 transition-opacity py-2 px-3 rounded">
      <a href={"/reemcv.pdf"} download className="btn">
        download CV
      </a>
    </div>
  );
};

export default CTA;
