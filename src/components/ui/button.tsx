import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

export const buttonVariants = cva("rounded-xl flex items-center justify-center disabled:opacity-75 disabled:pointer-events-none", {
  variants: {
    variant: {
      default: "",
      primary: "bg-neutral-100 text-black hover:bg-white",
    },
    size: {
      default: "py-3 px-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, TButtonProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Button;
