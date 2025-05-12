export interface IDocument {
  id: number;
  title: string;
  type: number;
  description: string;
}

export type IDocumentType = "Регламент" | "Инструкция" | "Распоряжение";
