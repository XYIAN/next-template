import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import Script from 'next/script';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'XY Next Template',
    description: 'next 15 and react 18',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <PrimeReactProvider>
                <body className={`${geistSans.variable} ${geistMono.variable}`}>
                    {children}
                </body>
            </PrimeReactProvider>
        </html>
    );
}
