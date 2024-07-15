interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  className?: string;
}

const SCheckbox = ({ id, checked, onChange, className }: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      className={` h-[16px] w-[16px] rounded-sm ${className}`}
    />
  );
};

export default SCheckbox;
