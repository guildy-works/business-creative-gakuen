"use client";

import "./globals.scss";
import Link from "next/link";
import { Header, menuItems } from "./Header";

import '@splidejs/react-splide/css';
import { Footer } from "./Footer";
import { Head } from "next/document";
import { Metadata } from "next";
import { useState } from "react";
import Script from "next/script";
import { resources } from "@/resources";

const gaId = 'G-LNW2KVTFE1'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" >
            <head>
                <title>{resources.siteTitle}</title>
                <meta name="description" content="中四国クリエイティブ学園（CSCC）は、広島・岡山・山口・島根・鳥取・愛媛・香川・徳島・高知のフリーランスと経営者とクリエイターが交流会・セミナー・イベントで人脈を広げスキルアップを目指すオンラインサロンです。"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Zen+Maru+Gothic:wght@900&display=swap" rel="stylesheet" />

                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                    strategy='afterInteractive'
                    async
                />
                <Script id='google-analytics' strategy='afterInteractive'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gaId}');
                    `}
                </Script>
            </head>

            <body className="flex flex-col relative w-svw overflow-x-hidden">
                <Header />
                <main className="w-full overflow-x-hidden">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
