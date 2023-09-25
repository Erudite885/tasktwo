import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type IProps = {
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, className, ...rest }: IProps) => {
  return (
    <button
      {...rest}
      className={twMerge(`p-[8px] rounded-[8px] bg-white`, className)}
    >
      {children}
    </button>
  );
}

export default Button
