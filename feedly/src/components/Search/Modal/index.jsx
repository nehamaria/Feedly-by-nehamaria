import React from "react";
import ModalCard from "./ModalCard";

import Portal from "./Portal";

const Modal = ({ isOpen, setIsOpen, children }) => {
  if (!isOpen) return <></>;
  return (
    <Portal>
      <div class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-transparent">
        <div
          className="fixed inset-0 w-full backdrop-filter z-10"
          onClick={() => setIsOpen(false)}
          style={{
            backgroundColor: "rgba(27, 31, 35, 0.867)",
            backdropFilter: "blur(2px)",
          }}
        ></div>
        <div>
          <ModalCard>{children}</ModalCard>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
