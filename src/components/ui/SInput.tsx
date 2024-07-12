import { FieldError, useFormContext } from "react-hook-form";
import { Input } from "./input";
type TInputProps = {
  type?: string;
  inputName: string;
  label: string;
  placeholder: string;
  error?: FieldError | undefined;
  defaultValue?: number | string ;
};

const SInput = ({
  type,
  inputName,
  label,
  placeholder,
  error,
  defaultValue,
}: TInputProps) => {
  const { register } = useFormContext();
  return (
    <div>
      <label
        htmlFor={inputName}
        className="block text-sm text-gray-700 font-semibold capitalize"
      >
        {label}
      </label>
      <Input
        defaultValue={defaultValue}
        placeholder={placeholder}
        id={inputName}
        type={type ? type : "text"}
        {...register(inputName)}
        className={`mt-1 ${
          error && "outline-red-600 outline-2 outline "
        }focus:outline-red-600 focus:outline`}
      />
      {error && <p className="text-red-600 text-xs mt-1">{error?.message}</p>}
    </div>
  );
};

export default SInput;
