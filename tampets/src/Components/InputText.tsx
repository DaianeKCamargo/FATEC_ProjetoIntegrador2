import { Form } from "react-bootstrap";

export interface InputTextProps {
    label: string;
    id: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function InputText({ label, ...props }: InputTextProps) {
    return (
        <Form.Group controlId={props.id}>
            <Form.Label >{label}</Form.Label>
            <Form.Control {...props} />
        </Form.Group>
    );
}
