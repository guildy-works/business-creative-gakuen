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

const gaId = 'G-LNW2KVTFE1'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja" >
            <head>
                <title>{"つながるラボ"}</title>
                <meta name="description" content="つながるラボは中四国地方専用のビジネスオンラインコミュニティです。フリーランス、経営者、大学生や社会人、独立を目指す方が集まり、人脈作りやスキルアップ、集客、地域課題解決に取り組みます。無料プランから始められ、イベントやセミナーも充実！LINE登録でお得なキャンペーン実施中！"/>
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
