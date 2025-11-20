import { Form } from "react-bootstrap";

interface InputProps {
    label: string;
    id: string;
    name: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | undefined;
}

export default function Input({id,label, name, type, placeholder, value, onChange, error }: InputProps){
    
    return(
        <Form.Group id={id}>
            <Form.Label >{label}</Form.Label>
            <Form.Control type={type} name={name}   placeholder={placeholder} value={value}
            onChange={onChange} isInvalid={!!error} 
            ></Form.Control>
        </Form.Group>
    )
}