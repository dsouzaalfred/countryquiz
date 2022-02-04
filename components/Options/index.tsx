interface OptionsProps {
  label: string;
  value: string;
  className?: string;
}

export const Options = ({ label, value, className }: OptionsProps) => {
  return (
    <label className={className}>
      <input type="radio" className="hidden" name="answer" value={value} />
      <div className="text-gray-700 font-medium tracking-wide text-lg border-solid border-2 p-3 w-full rounded-md cursor-pointer hover:bg-gray-100 label-checked:bg-blue-100">
        {label}
      </div>
    </label>
  );
};
