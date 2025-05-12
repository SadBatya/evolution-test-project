interface Props {
  children: string;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: Props) => (
  <button
    className="bg-[#456EFF] hover:bg-[#454bff] transition-all rounded-sm px-4 cursor-pointer"
    onClick={onClick}
  >
    {children}
  </button>
);
