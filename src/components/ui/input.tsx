"use client";

import { forwardRef, useState } from "react";
import { Eye, EyeClosed } from "iconoir-react";

export type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

const Input = forwardRef<HTMLInputElement, TInputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    if (type !== "password") {
      return (
        <input
          ref={ref}
          type={type}
          {...props}
          className="mt-1 p-3 w-full placeholder:text-neutral-500 border bg-neutral-950 border-neutral-800 focus:outline outline-white rounded-xl"
        />
      );
    }

    function toggleShowPassword() {
      setShowPassword(!showPassword);
    }

    return (
      <div className="relative flex items-center">
        <input
          ref={ref}
          type={showPassword ? "text" : "password"}
          {...props}
          className="mt-1 p-3 w-full placeholder:text-neutral-700 border bg-neutral-950 border-neutral-800 focus:outline outline-white rounded-xl"
        />
        <button type="button" className="absolute right-3 text-neutral-700" onClick={toggleShowPassword}>
          {showPassword ? <Eye width={20} /> : <EyeClosed width={20} />}
        </button>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
