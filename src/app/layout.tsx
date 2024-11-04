import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { PrimeReactProvider } from 'primereact/api';

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
    title: 'Training App Example',
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
