"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Recycle } from "lucide-react";
import Image from "next/image";
import { COMPANY } from "@/utils/data";

export default function Footer() {
    return (
        <footer className="relative w-full pt-12 overflow-hidden">
            {/* --- FUNDALUL FOOTER-ULUI (Full width, Industrial Grunge Match) --- */}
            <div className="absolute inset-0 bg-[#02080a] border-t border-white/5">

                {/* 1. Predominantul: Albastru-Verzui (Petrol) - Baza asimetrică */}
                <div
                    className="absolute inset-0 opacity-100"
                    style={{
                        background: `radial-gradient(circle at 20% 100%, #0a2429 0%, #02080a 100%)`
                    }}
                />

                {/* 2. Detaliul Galben Subtil (Ocre/Amber) - Asimetric spre dreapta jos */}
                <div
                    className="absolute bottom-[-50px] left-[75%] -translate-x-1/2 w-[80%] h-[200px] opacity-25 blur-[80px]"
                    style={{
                        background: 'radial-gradient(ellipse at center, #7d5a32 0%, #4a341d 50%, transparent 100%)'
                    }}
                />

                {/* 3. Textura ta principală (texture.jpg) */}
                <div
                    className="absolute inset-0 opacity-30 mix-blend-multiply"
                    style={{
                        backgroundImage: `url('/texture.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom center',
                        filter: 'contrast(1.1) brightness(0.8)'
                    }}
                />

                {/* 4. Stratul de NOISE ORGANIC (Turbulență pentru aspectul pătat) */}
                <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <filter id="footerGrunge">
                            <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.015"
                                numOctaves="4"
                                seed="88"
                            />
                            <feColorMatrix type="saturate" values="0" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#footerGrunge)" />
                    </svg>
                </div>
            </div>

            {/* Containerul de conținut (limitat la max-w-7xl pentru aliniere, dar fundalul e full) */}
            <div className="max-w-7xl mx-auto px-8 lg:px-12 pt-16 pb-8 relative z-10 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

                    {/* Coloana 1: Branding & Social */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-2 group">
                                <Recycle className="h-8 w-8 text-[#7ec636] transition-transform duration-700 group-hover:rotate-180 drop-shadow-[0_0_8px_rgba(126,198,54,0.3)]" />
                                <span className="font-serif text-2xl font-bold tracking-tighter italic text-white">
                                    Eco<span className="text-[#7ec636]">Elite</span>
                                </span>
                            </Link>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Transformăm deșeurile de astăzi în resursele de mâine prin soluții de reciclare inteligente și sustenabile.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Instagram, href: COMPANY.instagram },
                                { icon: Facebook, href: COMPANY.facebook },
                                { icon: Linkedin, href: COMPANY.linkedIn }
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    className="p-3 rounded-xl border border-white/5 bg-white/[0.02] text-gray-400 hover:bg-[#d5b976] hover:text-white hover:border-[#d5b976] transition-all duration-300"
                                >
                                    <social.icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Coloana 2: Navigație (Auriu/Ocru) */}
                    <div className="space-y-6">
                        <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-[#d5b976]">Navigație</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-1 h-1 bg-[#7ec636] rounded-full opacity-0 group-hover:opacity-100 transition-all"/> Acasă</Link></li>
                            <li><Link href="/despre-noi" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-1 h-1 bg-[#7ec636] rounded-full opacity-0 group-hover:opacity-100 transition-all"/> Despre Noi</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2 group"><div className="w-1 h-1 bg-[#7ec636] rounded-full opacity-0 group-hover:opacity-100 transition-all"/> Contact</Link></li>
                        </ul>
                    </div>

                    {/* Coloana 3: Contact */}
                    <div className="space-y-6">
                        <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-[#d5b976]">Contact Direct</h4>
                        <ul className="space-y-5 text-sm text-gray-300 font-medium">
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-[#7ec636]/10 text-[#7ec636]">
                                    <Phone size={16} />
                                </div>
                                <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="group-hover:text-white transition-colors">
                                    {COMPANY.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-[#7ec636]/10 text-[#7ec636]">
                                    <Mail size={16} />
                                </div>
                                <a href={`mailto:${COMPANY.email}`} className="group-hover:text-white transition-colors">
                                    {COMPANY.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-[#7ec636]/10 text-[#7ec636] shrink-0 mt-1">
                                    <MapPin size={16} />
                                </div>
                                <span className="group-hover:text-white transition-colors leading-snug">
                                    {COMPANY.address}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Coloana 4: Utile ANPC */}
                    <div className="space-y-6">
                        <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-[#d5b976]">Legături Utile</h4>
                        <div className="flex flex-col gap-4">
                            <Link href="https://anpc.ro/ce-este-sal/" target="_blank" className="transition-all hover:opacity-80">
                                <Image
                                    src="/images/anpc-sal.png"
                                    alt="ANPC SAL"
                                    width={200}
                                    height={60}
                                    className="rounded-xl border border-white/5 bg-white/[0.02] p-1 opacity-80"
                                />
                            </Link>
                            <Link href="https://consumer-redress.ec.europa.eu/index_en" target="_blank" className="transition-all hover:opacity-80">
                                <Image
                                    src="/images/anpc-sol.png"
                                    alt="ANPC SOL"
                                    width={200}
                                    height={60}
                                    className="rounded-xl border border-white/5 bg-white/[0.02] p-1 opacity-80"
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                        © {new Date().getFullYear()} {COMPANY.name} {COMPANY.legalForm}
                    </p>
                    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                        <Link href="/termeni-si-conditii" className="hover:text-[#7d5a32] transition-colors">Termeni</Link>
                        <Link href="/politica-cookies" className="hover:text-[#7d5a32] transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}