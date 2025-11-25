import styles from "@/styles/albumpage.module.css";


interface AlbumPageProps {
    title?: string;
    photos: string[];
}

export default function AlbumPage({ title = "Álbum", photos }: AlbumPageProps) {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {photos.map((src, i) => (
                    <div key={i} className={styles.card}>
                        <img src={src} alt={`Foto ${i + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

