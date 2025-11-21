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
}
export default function CheckDown(
    {label, info, children, name, id}: CheckDownprops ) {
    const [checked, setChecked] = useState(false);

    return (
        <div style={{ marginBottom: "16px" }}>
            <div>
                <Form.Check inline label={label} name={name} className={styles.checkboxContainer}
                type="checkbox" id={id} onChange={(e) => setChecked(e.target.checked)}
                />
                <InfoIcon text={info}/>
            </div>
            
            {checked && (
                <div>
                {children}
                </div>
            )}
        </div>
    );
}