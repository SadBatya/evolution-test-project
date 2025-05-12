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
      typeText = "Тип 1";
      additionalStyles = "text-[#FF6347] bg-[#FFE4E1] border-[#FFB6C1]";
    } else if (type === 2) {
      typeText = "Тип 2";
      additionalStyles = "text-[#FFD700] bg-[#FFFACD] border-[#FFECB3]";
    } else if (type === 3) {
      typeText = "Тип 3";
      additionalStyles = "text-[#32CD32] bg-[#F0FFF0] border-[#98FB98]";
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
