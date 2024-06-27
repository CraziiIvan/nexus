import Input, { TInputProps } from './input';

type TFormFieldProsp = TInputProps & {
    label: string
}

const FormField = ({ id, label, ...props }: TFormFieldProsp) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1">
      <label htmlFor={id} className="text-sm text-neutral-500">{label}</label>
      <Input id={id} {...props}/>
    </div>
  );
};

export default FormField;
