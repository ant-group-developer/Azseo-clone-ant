'use client';
import { ProgressBar } from '@/components/progressBar';
import ReactQueryClientProvider from '@/providers/QueryClientProvider';
import { config } from '@/style/theme';
import { ConfigProvider } from 'antd';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Suspense } from 'react';
import '../style/globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] });
const boston = localFont({
    src: '../fonts/Boston.otf',
    variable: '--font-boston',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={` ${inter.className} ${boston.variable} antialiased`}
            >
                <ConfigProvider theme={config}>
                    <Suspense fallback={null}>
                        <ReactQueryClientProvider>
                            {children}
                        </ReactQueryClientProvider>
                    </Suspense>
                </ConfigProvider>
                <ProgressBar />
            </body>
        </html>
    );
}
