import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { TButtonProps } from "./button";

export const buttonVariants = cva(
  "rounded-full relative flex items-center justify-center w-14 h-14 before:content-[''] before:absolute before:-inset-px before:bg-gradient-to-b before:rounded-full before:-z-10 disabled:opacity-75 disabled:pointer-events-none active:scale-95",
  {
    variants: {
      variant: {
        default: " bg-neutral-900 text-neutral-400 from-neutral-800 to-neutral-900",
        primary: "bg-neutral-50 from-white to-neutral-50 text-neutral-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const TransButton = forwardRef<HTMLButtonElement, TButtonProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export default TransButton;
