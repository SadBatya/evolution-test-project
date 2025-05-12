import { Modal } from "@/widgets/Modal/Modal";
import dataFlowIcon from "./assets/dataflow.svg";
import statusIcon from "./assets/status.svg";
import descriptionIcon from "./assets/description.svg";
import Image from "next/image";
import { Dropdown } from "@/shared/ui";
import { Button } from "@/shared/ui";

export const CreateDocument = () => {
  
  return (
    <Modal>
      <div className="flex border-b-[1px] border-[#E9EAEB] py-5 px-4 gap-1.5 text-[14px] items-center">
        <Image src={dataFlowIcon} alt="create document icon" />
        <span>Документы</span>
        <span className="w-[1px] h-[14px] opacity-50 block bg-black" />
        <span className="opacity-50">Создание документа</span>
      </div>
      <div className="p-6">
        <input
          type="text"
          className="text-2xl w-full mb-3 font-semibold placeholder-[#D5D7DA]"
          placeholder="Название"
        />
        <div className="mb-6 flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <Image src={statusIcon} alt="status document icon" />
            <span className="opacity-50 text-nowrap">Тип документа</span>
          </div>
          <Dropdown />
        </div>
        <div className="">
          <label className="flex items-center gap-2 mb-3">
            <Image src={descriptionIcon} alt="description document icon" />
            Описание
          </label>
          <textarea className="border border-[#D5D7DA] min-h-[108px] w-full rounded-sm resize-none px-3 py-2"></textarea>
        </div>
      </div>
      <div className="mt-auto mb-0 py-4 px-6 flex justify-end">
        <Button disabled={true} className="text-white px-4 py-2">
          Создать
        </Button>
      </div>
    </Modal>
  );
};
