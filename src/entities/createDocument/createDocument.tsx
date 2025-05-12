"use client";
import { Modal } from "@/widgets/Modal/Modal";
import dataFlowIcon from "./assets/dataflow.svg";
import statusIcon from "./assets/status.svg";
import descriptionIcon from "./assets/description.svg";
import Image from "next/image";
import { Dropdown } from "@/shared/ui";
import { Button } from "@/shared/ui";
import { Controller, useForm } from "react-hook-form";

interface IFormValues {
  id: number;
  title: string;
  type: number;
  description: string;
}

export const CreateDocument = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<IFormValues>({
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      type: 1,
    },
  });

  const onSubmit = (data: IFormValues) => {
    console.log("Form values", data);
  };

  return (
    <Modal>
      <div className="flex border-b-[1px] border-[#E9EAEB] py-5 px-4 gap-1.5 text-[14px] items-center">
        <Image src={dataFlowIcon} alt="create document icon" />
        <span>Документы</span>
        <span className="w-[1px] h-[14px] opacity-50 block bg-black" />
        <span className="opacity-50">Создание документа</span>
      </div>
      <form className="flex flex-col h-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6">
          <input
            {...register("title", { required: "Введите название" })}
            type="text"
            className="text-2xl w-full mb-3 font-semibold placeholder-[#D5D7DA]"
            placeholder="Название"
          />
          <div className="mb-6 flex gap-6 items-center">
            <div className="flex items-center gap-2">
              <Image src={statusIcon} alt="status document icon" />
              <span className="opacity-50 text-nowrap">Тип документа</span>
            </div>
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <Dropdown value={field.value} onChange={field.onChange} />
              )}
            />
          </div>
          <div className="">
            <label className="flex items-center gap-2 mb-3">
              <Image src={descriptionIcon} alt="description document icon" />
              Описание
            </label>
            <textarea
              {...register("description", { required: "Введите название" })}
              className="border border-[#D5D7DA] min-h-[108px] w-full rounded-sm resize-none px-3 py-2"
            ></textarea>
          </div>
        </div>
        <div
          style={{ boxShadow: "0 -2px 16px 0px rgba(97, 97, 97, 0.05)" }}
          className="mt-auto border-t border-[#EAECF0] shadow-md mb-0 py-4 px-6 flex justify-end"
        >
          <Button disabled={!isValid} className="text-white px-4 py-2">
            Создать
          </Button>
        </div>
      </form>
    </Modal>
  );
};
