"use client";

import { useState } from "react";
import { GetDocumentModal } from "@/widgets";
import { IDocument } from "@/shared/types";
import { useDispatch } from "react-redux";
import { visibleBackdrop } from "@/entities/store/backdropSlice";

interface Props {
  data?: IDocument;
  children: string[] | string;
}

export const Document = ({ children, data }: Props) => {
  const [openModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  console.log(openModal, "openModal");

  const handleOpenModal = () => {
    setIsOpenModal(true);
    dispatch(visibleBackdrop());
  };
  return (
    <>
      <div
        onClick={handleOpenModal}
        className="text-black py-3 hover:bg-[#F5F5F5] transition-all cursor-pointer px-6 w-[400px] border border-[#AFAFAF] rounded-[6px]"
      >
        {children}
      </div>
      <GetDocumentModal
        data={data}
        isOpen={openModal}
        onClick={() => setIsOpenModal(false)}
      />
    </>
  );
};
