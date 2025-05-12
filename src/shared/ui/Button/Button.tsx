import { twMerge } from "tailwind-merge";

interface Props {
  children: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = ({
  children,
  onClick,
  className,
  disabled,
  loading,
}: Props) => (
  <button
    disabled={disabled}
    className={twMerge(
      "bg-[#456EFF] hover:bg-[#454bff] transition-all rounded-sm px-4 cursor-pointer",
      "disabled:bg-[#F5F5F5] disabled:border-[#E9EAEB] disabled:text-[#A4A7AE] disabled:hover:none disabled:cursor-not-allowed",
      className
    )}
    onClick={onClick}
  >
    {loading ? (
      <div className="w-4 h-4 border-2 border-t-2 border-blue-500 my-0.5 mx-6 border-solid rounded-full border-r-transparent animate-spin" />
    ) : (
      children
    )}
  </button>
);
