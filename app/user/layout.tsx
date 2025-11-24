// layouts/UserLayout.tsx
import "@/app/globals.css";
import { Noto_Sans_JP } from 'next/font/google';
import ConditionalFooter from '@/components/footer/CoditionalFooter';
import ConditionalCopyright from '@/components/footer/CoditionalCopyright';
import ConditionalNavbarLogin from '../../components/navbar/ConditionalNavbarLogin';

// Fonte
const notoSansJp = Noto_Sans_JP({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function UserLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={notoSansJp.className}>
                <ConditionalNavbarLogin />
                {children}
            </body>
        </html>
    );
}
