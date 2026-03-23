import React from 'react';
import Image from 'next/image';
import { ArrowRight } from "lucide-react";
import {Button} from "@/components/ui/button";

const heroCards = [
    {
        title: "Colectare",
        subtitle: "Selectivă",
        description: "Servicii de colectare și sortare a deșeurilor",
        img: "/images/hero-card.png",
    },
    {
        title: "Reciclare",
        subtitle: "Industrială",
        description: "Soluții eficiente pentru companii",
        img: "/images/hero-card-2.png",
    },
    {
        title: "Reciclare",
        subtitle: "Electronică",
        description: "Reciclarea sigură a echipamentelor electrice",
        img: "/images/hero-card-3.png",
    },
];

export default function HeroSection() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-10 overflow-hidden">
            {/* 1. Imaginea Principală cu Mască Organică */}
            <div className="absolute top-0 left-0 w-full h-[85vh] -z-20 shadow-black drop-shadow-dark shadow-2xl drop-shadow-2xl">
                <Image
                    src="/images/valley.png"
                    alt="Valley"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050c0e]/40 to-[#050c0e]" />
            </div>

            <div className="mx-auto max-w-7xl">
                {/* 2. Textul Principal */}
                <div className="mb-24 space-y-6 max-w-2xl">
                    <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight">
                        Reciclează pentru <br />
                        un <span className="text-[#e2b35a] italic">viitor sustenabil</span>
                    </h1>
                    <p className="text-gray-300 text-lg font-medium tracking-wide">
                        Soluții premium de reciclare pentru un mediu curat
                    </p>

                    <div className={'w-full flex gap-5'}>
                        <Button
                            className={'bg-[#1a3d34] border border-[#7ec636]/40 text-[#7ec636] p-6 rounded-full font-bold uppercase hover:scale-105 duration-300 hover:bg-[#234e43] hover:border-[#7ec636] shadow-xl'}
                        >
                            Solicită o ofertă
                        </Button>
                        <Button
                            variant={'outline'}
                            className={'p-6 rounded-full font-bold hover:scale-105 hover:bg-[#d5b976] hover:border-none duration-400 bg-transparent text-white'}
                        >
                            Află mai mult
                        </Button>
                    </div>
                </div>

                {/* 3. Cardurile cu Imagine ca Fundal */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {heroCards.map((card, idx) => (
                        <div
                            key={idx}
                            className="relative group h-[450px] overflow-hidden rounded-xl border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#e2b35a]/30"
                        >
                            {/* IMAGINEA DE FUNDAL A CARDULUI */}
                            <div className="absolute inset-0 -z-10">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay întunecat pentru lizibilitate (Vignette) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050c0e] via-[#050c0e]/20 to-black/40" />

                                {/* Overlay textura de zgomot */}
                                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
                            </div>

                            {/* CONȚINUTUL CARDULUI (Poziționat deasupra imaginii) */}
                            <div className="relative h-full p-8 flex flex-col items-center text-center justify-between z-10">

                                {/* Header Card */}
                                <div className="w-full">
                                    <h3 className="text-2xl font-bold text-white">
                                        {card.title} <br />
                                        <span className="text-[#e2b35a] italic font-serif font-medium">{card.subtitle}</span>
                                    </h3>
                                    {/* Linie aurie sub titlu */}
                                    <div className="mt-4 mx-auto w-12 h-[1px] bg-[#e2b35a]/50" />
                                </div>

                                {/* Body Card */}
                                <div className="flex flex-col items-center gap-6">
                                    <p className="text-gray-200 text-sm leading-relaxed max-w-[220px] drop-shadow-md">
                                        {card.description}
                                    </p>

                                    <button className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7ec636] hover:text-white transition-all group/btn">
                                        Vezi detalii
                                        <div className="w-8 h-8 rounded-full border border-[#7ec636]/30 bg-[#7ec636]/10 flex items-center justify-center group-hover/btn:bg-[#7ec636] group-hover/btn:text-black transition-all">
                                            <ArrowRight size={14} />
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Efect de strălucire la hover pe margini */}
                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors pointer-events-none rounded-xl" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}