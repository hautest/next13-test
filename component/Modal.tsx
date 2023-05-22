import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <>
      {open &&
        createPortal(
          <>
            <div
              onClick={() => onClose()}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-16 bg-white rounded-md scrollbar-none">
              {children}
            </div>
          </>,
          document.body
        )}
    </>
  );
};
