import Link from "next/link";

export interface NavItemInterface {
    url: string;
    label: string;
    isActive?: boolean;
}

export default function NavItem(props: NavItemInterface) { 
     return (
        <>
        <li className="nav-item">
            <Link href={props.url} className={`nav-link ${props.isActive ? 'active' : ''}`}>
                {props.label}
            </Link>
         </li>

        <style jsx>
            {`
                .nav-item {
                    padding: 4px 0px;
                    transition: color 0.3s ease;

                    &.active, &:hover {
                        font-weight: 600;
                        border-bottom: 3px solid #fbbc04;
                    }
                }

            `}
        </style>
        </>
        );
}

