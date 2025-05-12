"use client";

import { Button } from "@/shared/ui";
import { useDispatch } from "react-redux";
import { openModal } from "@/entities/store/modalSlice";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="w-full h-[64px] px-[32px] py-[14px] bg-[#AFAFAF] absolute top-0 flex justify-end">
      <Button onClick={() => dispatch(openModal())}>Создать</Button>
    </header>
  );
};
