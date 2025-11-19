import styles from '@/styles/titulo.module.css';

interface TituloProps {
    src: string;
    title: string;
    label: string;
}

export default function Titulo(props: TituloProps) {
    const { src, title, label } = props;

    return (
        <div className={styles.titulo}>
            <img className={styles.imgt} src={src} alt="Fundo Título" />

            <h1 className={styles.escritat}> {title} </h1>

            <p className={styles.escritap}>{label} </p>
        </div>
    );
}