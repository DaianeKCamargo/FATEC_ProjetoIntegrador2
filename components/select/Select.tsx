
'use client';

import Form from 'react-bootstrap/Form';

type SelectProps = {
  options: { value: string; label: string }[]; 
  defaultValue?: string; 
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
};

export default function Select({
  options,
  defaultValue = "Select an option",
  onChange,
  className,
}: SelectProps) {
  return (
    <Form.Select aria-label="Custom select" onChange={onChange} className={className}>
      <option value="">{defaultValue}</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Form.Select>
  );
}
