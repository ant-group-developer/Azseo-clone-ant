'use client';
import { ProgressBar } from '@/components/progressBar';
import ReactQueryClientProvider from '@/providers/QueryClientProvider';
import { configTheme } from '@/style/theme';
import { AntdRegistry } from '@ant-design/nextjs-registry';
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
                className={`${inter.className} ${boston.variable} antialiased`}
            >
                <AntdRegistry>
                    <ConfigProvider theme={configTheme}>
                        <Suspense fallback={null}>
                            <ReactQueryClientProvider>
                                {children}
                            </ReactQueryClientProvider>
                        </Suspense>
                    </ConfigProvider>
                    <ProgressBar />
                </AntdRegistry>
            </body>
        </html>
    );
}
