"use client";

import { Button } from "@/shared/ui";
import { useDispatch } from "react-redux";
import { openModal } from "@/entities/store/modalSlice";
import { visibleBackdrop } from "@/entities/store/backdropSlice";

export const Header = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
    dispatch(visibleBackdrop());
  };
  return (
    <header className="w-full h-[64px] px-[32px] py-[14px] bg-[#AFAFAF] absolute top-0 flex justify-end">
      <Button onClick={handleOpenModal}>Создать</Button>
    </header>
  );
};
