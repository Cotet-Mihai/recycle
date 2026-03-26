import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/components/Header";
import {montserrat} from "@/utils/fonts";
import Footer from "@/components/Footer";
import BackgroundLayer from "@/components/BackgroundLayer";
import React from "react";

export const metadata: Metadata = {
    title: 'Eco Elite | Colectare și Reciclare Deșeuri',
    description: 'Eco Elite oferă servicii profesionale de colectare și reciclare deșeuri pentru persoane fizice și companii. Colectăm metale feroase, neferoase și echipamente electrice. Transport gratuit!',
    keywords: ['reciclare', 'colectare deșeuri', 'metale feroase', 'metale neferoase', 'DEEE', 'echipamente electrice', 'reciclare București', 'transport gratuit'],
    openGraph: {
        title: 'Eco Elite | Colectare și Reciclare Deșeuri',
        description: 'Servicii profesionale de colectare și reciclare pentru un viitor mai verde. Transport gratuit!',
        type: 'website',
    },
}

export default function RootLayout({ children, }: Readonly<{  children: React.ReactNode; }>) {
    return (
        <html
            lang="ro"
            className={`${montserrat.className} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Header/>
                <BackgroundLayer/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}
