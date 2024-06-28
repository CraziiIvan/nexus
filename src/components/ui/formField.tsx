import { forwardRef } from 'react';
import Input, { TInputProps } from './input';

type TFormFieldProps = TInputProps & {
    label: string;
    error?: string;
};

const FormField = forwardRef<HTMLInputElement, TFormFieldProps>(({ label, error, id, ...props }, ref) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1 relative">
      <label htmlFor={id} className="text-sm text-neutral-500">{label}</label>
      <Input id={id} ref={ref} {...props} />
      {error && <div className="text-xs text-red-500 text-end animate-error">{error}</div>}
    </div>
  );
})

export default FormField;
