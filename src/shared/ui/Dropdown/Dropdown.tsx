"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import checkIcon from "./assets/check.svg";
import Image from "next/image";

interface Props {
  value?: number;
  setValue?: () => void;
}

type IDocument = "Регламент" | "Инструкция" | "Распоряжение";

const variantDocuments: IDocument[] = [
  "Регламент",
  "Инструкция",
  "Распоряжение",
];

export const Dropdown = ({ value, setValue }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [typeDocument, setTypeDocument] = useState<IDocument>("Регламент");

  const handleChooseType = (type: IDocument) => {
    setTypeDocument(type);
    setOpenModal(false);
  };
  return (
    <div className="relative w-full">
      <div
        onClick={() => setOpenModal(!openModal)}
        className="cursor-pointer transition-all w-full hover:bg-[#F5F5F5] p-2 rounded-sm"
      >
        <div
          className={twMerge(
            "text-[#175CD3] w-fit text-xs bg-[#EFF8FF] border border-[#B2DDFF] rounded-sm px-2",
            typeDocument === "Инструкция" &&
              "text-[#17D36F] bg-[#EFFFF1] border-[#CAFED8]",
            typeDocument === "Распоряжение" &&
              "text-[#B42318] border-[#FECDCA] bg-[#FEF3F2]"
          )}
        >
          {typeDocument}
        </div>
      </div>
      <ul
        className={twMerge(
          "absolute w-[192px] text-xs transition-all font-medium bg-white bottom-0 left-0 flex flex-col p-1 shadow-lg rounded-sm translate-y-full opacity-0 pointer-events-none",
          openModal && "opacity-100 pointer-events-auto"
        )}
      >
        {variantDocuments.map((variant, index) => (
          <li
            key={index}
            onClick={() => handleChooseType(variant)}
            className="px-3 py-2 cursor-pointer flex justify-between hover:bg-[#F5F5F5] transition-all"
          >
            {variant}
            {typeDocument === variant && (
              <Image src={checkIcon} alt="checkIcon" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
