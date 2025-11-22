import { useState } from "react";
import { Form } from "react-bootstrap";
import InfoIcon from "@/components/info-icon/InfoIcon";
import styles from '@/styles/log-block.module.css';

 interface CheckDownprops{
  label?: string;
  info: string;
  children: React.ReactNode;
  name: string,
  id: string,
  value?: string,
  error?: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function CheckDown(
    {label, info, children, name, id, value, error, onChange}: CheckDownprops ) {
    const [checked, setChecked] = useState(false);

    return (
        <div style={{ marginBottom: "1.6rem" }}>
            <div>

                <Form.Check inline label={label} name={name} className={styles.checkboxContainer}
                type="checkbox" id={id} value={value}  isInvalid={!!error} onChange={(e) => {
                setChecked(e.target.checked); // interno
                if (onChange) onChange(e);   // externo (formik.handleChange, etc.)
                }}
                />
                <InfoIcon text={info}/>
                {error && (
                    <div className="text-danger" style={{ fontSize: ".875rem" }}>
                        {error}
                    </div>
                )}
            </div>
            
            {checked && (
                <div>
                {children}
                </div>
            )}
        </div>
    );
}