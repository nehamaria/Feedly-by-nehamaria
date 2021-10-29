import React from "react";

const ModalCard = ({children}) => {
  return (
    <div className="m-auto flex items-center justify-center absolute inset-0 ">
      <div className="bg-white z-40 flex flex-col w-1/3">{children}</div>
    </div>
  );
};

export default ModalCard;
