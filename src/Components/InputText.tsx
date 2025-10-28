import { Form } from "react-bootstrap";


export interface InputTextProps {
    label: string;
    id: string;
    name: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | undefined;
    
}


export function InputText({ label, id, type, placeholder, value, onChange, error, name }: InputTextProps) {
    return (
        <Form.Group controlId={id}>
            <Form.Label >{label}</Form.Label>
            <Form.Control type={type} 
            name={name}
            placeholder={placeholder} value={value}
            onChange={onChange} isInvalid={!!error} 
            
            />
            <Form.Control.Feedback type='invalid'>
            {error}
            </Form.Control.Feedback>
        </Form.Group>
    );
}
