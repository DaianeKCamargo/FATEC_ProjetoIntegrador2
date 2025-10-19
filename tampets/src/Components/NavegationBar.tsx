import Link from "next/link";
import Image from "next/image";

export function NavegationBar() {
    return (
        <header>
            <nav className="navbar">
                <Link href="/">
                    <Image src="/logoHome.png" alt="Logo Tampets" width={500} height={200}/>
                </Link>
            </nav>
        </header>
    );
}

export default NavegationBar;
