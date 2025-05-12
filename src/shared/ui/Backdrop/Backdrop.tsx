"use client";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { closeModal } from "@/entities/store/modalSlice";
import { RootState } from "@/entities/store/store";
import { hiddenBackdrop } from "@/entities/store/backdropSlice";

export const Backdrop = () => {
  const isVisible = useSelector((state: RootState) => state.backdrop.isVisible);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(hiddenBackdrop());
  };

  return (
    <div
      onClick={handleCloseModal}
      className={twMerge(
        "fixed inset-0 bg-black opacity-0 transition-all pointer-events-none z-20 w-screen h-screen",
        isVisible && "opacity-50 pointer-events-auto"
      )}
    ></div>
  );
};
