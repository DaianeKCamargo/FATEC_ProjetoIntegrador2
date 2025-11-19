import { PiCopyrightThin } from "react-icons/pi";
import styles from "@/styles/copyright.module.css";

export default function Copiryght() {
    return (
        <div className={styles.direitosautorais}>
            <div className={styles.politicas}>
                <p>Politica de Privacidade</p>
            </div>
            <div className={styles.divisor}>
                <p>|</p>
            </div>
            <div className={styles.copyright}>
                <p><PiCopyrightThin style={{ display: "inline-block", marginRight: "2px" }} /> 2025 Code & Cloud. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}