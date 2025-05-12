"use client";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { closeModal } from "@/entities/store/modalSlice";
import { RootState } from "@/entities/store/store";

export const Backdrop = () => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(closeModal())}
      className={twMerge(
        "fixed inset-0 bg-black opacity-0 transition-all pointer-events-none z-20 w-screen h-screen",
        isOpen && "opacity-50 pointer-events-auto"
      )}
    ></div>
  );
};
