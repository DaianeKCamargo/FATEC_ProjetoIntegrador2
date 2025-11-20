
'use client';

import Form from 'react-bootstrap/Form';

type FileInputProps = {
  label: string;
  controlId?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FileInput({
  label,
  controlId,
  className,
  onChange,
}: FileInputProps) {
  return (
    <Form.Group controlId={controlId} className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="file" onChange={onChange} />
    </Form.Group>
  );
}
