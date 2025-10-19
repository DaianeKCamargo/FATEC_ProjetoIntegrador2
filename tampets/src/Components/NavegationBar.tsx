import Link from "next/link";
import Image from "next/image";

export function NavegationBar() {
    return (
        <header>
            <nav className="navbar">
                <Link href="/">
                    <Image src="/logoHome.png" alt="Logo Tampets" width={500} height={200}/>
                </Link>
                 n
            </nav>
        </header>
    );
}

export default NavegationBar;

// https://www.youtube.com/watch?v=S5uQA-2NspY video para finalizar a navbar
