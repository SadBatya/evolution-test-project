"use client";

import { useGetItemsQuery } from "@/entities/store/apiSlice";
import { Document } from "@/shared/ui";

export const ListDocuments = () => {
  const { data: documents, isLoading, error } = useGetItemsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full border-r-transparent animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full text-red-500">
        <p>Произошла ошибка при загрузке данных. Попробуйте снова.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {documents && documents.length > 0 ? (
        documents.map(({ title }, index) => (
          <Document key={index}>{title} </Document>
        ))
      ) : (
        <Document>Список пуст</Document>
      )}
    </div>
  );
};
