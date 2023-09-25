import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type IProps = {
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(`p-[8px] rounded-[8px] bg-white`, className)}
    >
      {children}
    </button>
  );
}
