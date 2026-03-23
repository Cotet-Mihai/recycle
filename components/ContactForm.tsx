"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY } from "@/utils/data";
import { cn } from "@/lib/utils";

const contact = [
    { icon: Phone, label: "Telefon", val: COMPANY.phone },
    { icon: Mail, label: "Email", val: COMPANY.email },
    { icon: MapPin, label: "Locație", val: COMPANY.address },
]

export default function ContactForm() {
    return (
        <section className="py-24 px-6 lg:px-10 bg-transparent">
            <div className="max-w-7xl mx-auto relative  p-8 lg:p-16 rounded-[3rem] overflow-hidden">


                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10">

                    {/* Coloana 1: Detalii Stanga */}
                    <div className="lg:col-span-4 space-y-16 lg:mt-10">
                        <div className="space-y-6">
                            <span className="text-[#7bb831] uppercase tracking-[0.4em] font-black text-[10px] block">
                                Contact Direct
                            </span>
                            <h2 className="font-serif text-5xl lg:text-4xl font-bold text-white leading-tight">
                                Spune-ne cu ce <br />
                                <span className="italic text-[#d5b976] text-5xl">te ajutăm.</span>
                            </h2>
                            <p className="text-gray-400 text-base leading-relaxed max-w-md">
                                Suntem aici pentru a transforma procesul de reciclare într-o experiență simplă și eficientă.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-10">
                            {contact.map((item, i) => (
                                <div key={i} className="flex items-start gap-6 group">
                                    <div className="mt-1 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-[#d5b976] group-hover:bg-[#d5b976] group-hover:text-[#1b2326] transition-all duration-500 shadow-xl">
                                        <item.icon size={20} strokeWidth={2} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                                            {item.label}
                                        </p>
                                        <p className="text-xl font-bold text-gray-200 tracking-tight group-hover:text-white transition-colors">
                                            {item.val}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Coloana 2: Formularul (Minimalist Dark) */}
                    <div className="lg:col-span-8 bg-black/20 p-8 lg:p-14 rounded-[2.5rem] border border-white/5 shadow-inner">
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

                                {/* Nume */}
                                <div className="group space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black text-[#d5b976]">01</span>
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-focus-within:text-[#d5b976] transition-colors">
                                            Nume Complet
                                        </Label>
                                    </div>
                                    <Input
                                        type="text"
                                        placeholder="Cum vă numiți?"
                                        className="border-0 border-b border-white/10 rounded-none px-0 py-6 text-xl font-medium focus-visible:ring-0 focus-visible:border-[#d5b976] transition-all bg-transparent shadow-none text-white placeholder:text-white/10"
                                    />
                                </div>

                                {/* Email */}
                                <div className="group space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black text-[#d5b976]">02</span>
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-focus-within:text-[#d5b976] transition-colors">
                                            Adresă Email
                                        </Label>
                                    </div>
                                    <Input
                                        type="email"
                                        placeholder="exemplu@mail.ro"
                                        className="border-0 border-b border-white/10 rounded-none px-0 py-6 text-xl font-medium focus-visible:ring-0 focus-visible:border-[#d5b976] transition-all bg-transparent shadow-none text-white placeholder:text-white/10"
                                    />
                                </div>

                                {/* Mesaj */}
                                <div className="group space-y-4 md:col-span-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-black text-[#d5b976]">03</span>
                                        <Label className="text-[10px] font-black uppercase tracking-widest text-gray-500 group-focus-within:text-[#d5b976] transition-colors">
                                            Mesaj / Detalii Proiect
                                        </Label>
                                    </div>
                                    <Textarea
                                        placeholder="Descrieți pe scurt solicitarea dumneavoastră..."
                                        className="border-0 border-b border-white/10 rounded-none px-0 py-4 text-xl font-medium focus-visible:ring-0 focus-visible:border-[#d5b976] transition-all bg-transparent shadow-none min-h-[100px] resize-none text-white placeholder:text-white/10"
                                    />
                                </div>
                            </div>

                            {/* Action Area */}
                            <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-8 border-t border-white/5">
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium max-w-[250px] leading-relaxed">
                                    Prin trimitere, sunteți de acord cu politica noastră de confidențialitate.
                                </p>

                                <div className="flex items-center gap-10 ml-auto group/btn">
                                    <div className="flex flex-col items-end">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#7bb831]">
                                            Ready to go
                                        </span>
                                        <span className="font-serif text-2xl md:text-3xl font-bold text-white group-hover/btn:text-[#d5b976] transition-colors">
                                            Trimite Acum
                                        </span>
                                    </div>

                                    <button
                                        type="submit"
                                        className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#d5b976] transition-all duration-500 hover:scale-110 active:scale-90 shadow-[0_0_30px_rgba(213,185,118,0.2)]"
                                    >
                                        <Send
                                            className="relative z-10 text-[#1b2326]"
                                            size={26}
                                        />
                                        {/* Pulse Effect */}
                                        <div className="absolute inset-0 rounded-full bg-[#d5b976] animate-ping opacity-20 group-hover/btn:opacity-40" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}