import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { TButtonProps } from "./button";
import Link from "next/link";

export const buttonVariants = cva(
  "rounded-full relative flex items-center justify-center  before:content-[''] before:absolute before:-inset-px before:bg-gradient-to-b before:rounded-full before:-z-10 disabled:opacity-75 disabled:pointer-events-none active:scale-95",
  {
    variants: {
      variant: {
        default: " bg-neutral-900 text-neutral-200 from-neutral-700 to-neutral-800",
        primary: "bg-neutral-200 from-neutral-100 to-neutral-200 text-neutral-800",
        header: " bg-white/25 from-white to-white/20"
      },
      size: {
        default: "w-12 h-12",
        small: "w-10 h-10 "
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    },
  }
);

type TTransButtonProps = TButtonProps & {
  href: string
}

const ActionButton = forwardRef<HTMLButtonElement, TTransButtonProps>(
  ({ variant, className, href , children,...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        <Link href={href}>
          {children}
        </Link>
      </button>
    );
  }
);

export default ActionButton;
