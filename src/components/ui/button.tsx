import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { forwardRef } from "react";

export const buttonVariants = cva("rounded-xl w-full flex items-center gap-x-2 justify-center disabled:opacity-75 disabled:pointer-events-none transitons-colors duration-300 ease-out", {
  variants: {
    variant: {
      default: "",
      action: "bg-neutral-950 border border-neutral-800 text-sm  w-min rounded-full hover:bg-neutral-900",
      secondary: " bg-transparent border border-neutral-800 hover:bg-neutral-950",
      primary: "bg-neutral-100 text-black hover:bg-white",
    },
    size: {
      default: "py-3 px-5",
      action: "py-2.5 pl-3 pr-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {href?: string};

const Button = forwardRef<HTMLButtonElement, TButtonProps>(
  ({ variant, size, className, href, ...props }, ref) => {
    if (href) {
      return (
        <Link
          className={cn(buttonVariants({ variant, size, className }))}
          href={href}
        >{props.children}</Link>
      );
    }

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
