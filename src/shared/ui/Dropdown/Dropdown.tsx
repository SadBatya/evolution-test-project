"use client";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import checkIcon from "./assets/check.svg";
import Image from "next/image";
import { IDocumentType } from "@/shared/types";
import { TypeDocument } from "@/shared/ui";

interface Props {
  value: number;
  onChange: (val: number) => void;
}

const variantDocuments: IDocumentType[] = [
  "Регламент",
  "Инструкция",
  "Распоряжение",
];

export const Dropdown = ({ value, onChange }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [typeDocument, setTypeDocument] = useState<IDocumentType>("Регламент");

  useEffect(() => {
    setTypeDocument(variantDocuments[value - 1]);
  }, [value]);

  const handleChooseType = (type: IDocumentType) => {
    setTypeDocument(type);
    onChange(variantDocuments.indexOf(type) + 1);
    setOpenModal(false);
  };

  return (
    <div className="relative w-full">
      <div
        onClick={() => setOpenModal(!openModal)}
        className="cursor-pointer transition-all w-full hover:bg-[#F5F5F5] p-2 rounded-sm"
      >
        <TypeDocument type={typeDocument} />
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
