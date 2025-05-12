"use client";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { closeModal } from "@/entities/store/modalSlice";
import { RootState } from "@/entities/store/store";

export const Modal = ({ children }: { children: string | ReactNode }) => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  return (
    <nav
      className={twMerge(
        "max-w-[600px] w-full h-screen bg-white absolute right-0 z-30 transition-all top-0 translate-x-full",
        isOpen && "translate-x-0"
      )}
    >
      <div className="relative">
        <button
          onClick={() => dispatch(closeModal())}
          className="absolute top-2 right-2 cursor-pointer"
        >
          X
        </button>
        {children}
      </div>
    </nav>
  );
};
