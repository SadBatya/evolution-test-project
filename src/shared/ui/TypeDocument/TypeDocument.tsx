import { twMerge } from "tailwind-merge";
import { IDocumentType } from "@/shared/types";

interface Props {
  type: IDocumentType | number | undefined;
}

export const TypeDocument = ({ type }: Props) => {
  let typeText = "";
  let additionalStyles = "";

  if (typeof type === "string") {
    typeText = type;
    if (type === "Инструкция") {
      additionalStyles = "text-[#17D36F] bg-[#EFFFF1] border-[#CAFED8]";
    } else if (type === "Распоряжение") {
      additionalStyles = "text-[#B42318] border-[#FECDCA] bg-[#FEF3F2]";
    }
  } else {
    if (type === 1) {
      typeText = "Регламент";
      additionalStyles = "bg-[#EFF8FF] text-[#175CD3] border-[#B2DDFF]";
    } else if (type === 2) {
      typeText = "Инструкция";
      additionalStyles = "text-[#17D36F] bg-[#EFFFF1] border-[#CAFED8]";
    } else if (type === 3) {
      typeText = "Распоряжение";
      additionalStyles = "text-[#B42318] border-[#FECDCA] bg-[#FEF3F2]";
    }
  }

  return (
    <div
      className={twMerge(
        "text-[#175CD3] w-fit text-xs bg-[#EFF8FF] border border-[#B2DDFF] rounded-sm px-2",
        additionalStyles
      )}
    >
      {typeText}
    </div>
  );
};
