import { Navbar } from "react-bootstrap";
/*import {Roboto} from 'next/font/google';*/

/*  const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets: ['latin'],
  variable: '--font-roboto',
}); */

 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
