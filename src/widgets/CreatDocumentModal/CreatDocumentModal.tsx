"use client";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { closeModal } from "@/entities/store/modalSlice";
import { RootState } from "@/entities/store/store";
import closeIcon from "./assets/close.svg";
import Image from "next/image";
import { hiddenBackdrop } from "@/entities/store/backdropSlice";

export const CreatDocumentModal = ({
  children,
}: {
  children: string | ReactNode;
}) => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(hiddenBackdrop());
  };

  return (
    <nav
      className={twMerge(
        "max-w-[600px] w-full h-screen bg-white absolute right-0 z-30 transition-all top-0 translate-x-full",
        isOpen && "translate-x-0"
      )}
    >
      <div className="relative text-black h-full flex flex-col">
        <button
          onClick={handleCloseModal}
          className="absolute top-6 right-6 cursor-pointer"
        >
          <Image src={closeIcon} alt="close button" />
        </button>
        {children}
      </div>
    </nav>
  );
};
