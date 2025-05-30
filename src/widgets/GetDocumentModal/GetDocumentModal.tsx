'use client';
import Image from 'next/image';
import { TypeDocument } from '@/shared/ui';
import dataFlowIcon from './assets/dataflow.svg';
import statusIcon from './assets/status.svg';
import descriptionIcon from './assets/description.svg';
import { IDocument } from '@/shared/types';
import { Modal } from '@/shared/ui';

interface Props {
  data: IDocument | undefined;
  isOpen: boolean;
  onClick: () => void;
}

export const GetDocumentModal = ({ data, isOpen, onClick }: Props) => (
  <Modal isOpen={isOpen} onClick={onClick}>
    <div className="flex border-b-[1px] text-black border-[#E9EAEB] py-5 px-4 gap-1.5 text-[14px] items-center">
      <Image src={dataFlowIcon} alt="create document icon" />
      <span>Документы</span>
      <span className="w-[1px] h-[14px] opacity-50 block bg-black" />
      <span className="opacity-50">Создание документа</span>
    </div>
    <form className="flex flex-col text-black justify-between">
      <div className="p-6">
        <input
          readOnly
          defaultValue={data?.title}
          type="text"
          className="text-2xl w-full mb-3 font-semibold placeholder-[#D5D7DA]"
          placeholder="Название"
        />
        <div className="mb-6 flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <Image src={statusIcon} alt="status document icon" />
            <span className="opacity-50 text-nowrap">Тип документа</span>
          </div>
          <TypeDocument type={data?.type} />
        </div>
        <div className="">
          <label className="flex items-center gap-2 mb-3">
            <Image src={descriptionIcon} alt="description document icon" />
            Описание
          </label>
          <textarea
            readOnly
            defaultValue={data?.description}
            className="min-h-[108px] w-full rounded-sm resize-none px-3 py-2"
          ></textarea>
        </div>
      </div>
    </form>
  </Modal>
);
