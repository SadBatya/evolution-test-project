export const Document = ({ children }: { children: string }) => (
  <div className="text-black py-3 hover:bg-[#F5F5F5] transition-all cursor-pointer px-6 w-[400px] border border-[#AFAFAF] rounded-[6px]">
    {children}
  </div>
);
