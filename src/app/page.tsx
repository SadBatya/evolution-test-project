import { ListDocuments } from "@/widgets/ListDocuments/ListDocuments";

export default function Home() {
  return (
    <section className="w-full h-screen bg-white pt-[128px] pl-[120px]">
      <h1 className="text-[#252B37] mb-6 text-[24px] font-medium">Документы</h1>
      <ListDocuments />
    </section>
  );
}
