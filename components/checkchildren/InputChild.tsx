import { Form } from "react-bootstrap";
import styles from '@/styles/log-block.module.css';

interface InputProps {
    label: string;
    id: string;
    name: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | undefined;
    classname?: string;
}

export default function InputChild({ id, label, name, type, placeholder, value, onChange, error, classname }: InputProps) {
    const isFile = type === "file";
    return (
        <Form.Group id={id}>
            <Form.Label
                className={styles.checkChilLabel}>
                {label}
            </Form.Label>

            <Form.Control
                type={type}
                name={name}
                placeholder={placeholder}
                {...(!isFile && { value })}
                onChange={onChange}
                isInvalid={!!error}
                className={classname ? classname : styles.checkChilInput}
            />
            <Form.Control.Feedback
                type='invalid'>
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    )
}