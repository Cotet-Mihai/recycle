import React from "react";
import Image from "next/image";
import { TreeDeciduous, Leaf, Recycle, ChevronRight } from "lucide-react";
import {Button} from "@/components/ui/button";

export default function EcoReciclareSection() {
    return (
        <section className="relative w-full py-16 px-6 lg:px-12 bg-transparent overflow-hidden">
            {/* Background radial gradient simulating the lighting in the image */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#384b50]/60 via-[#1b2326]/90 to-[#141a1c] z-0 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">

                {/* ================= STÂNGA: De ce să reciclezi? ================= */}
                <div className="flex flex-col lg:pr-12 lg:border-r border-white/10">
                    <h2 className="text-[#d5b976] font-serif text-3xl mb-8">
                        De ce să reciclezi?
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-5">
                            <TreeDeciduous
                                className="w-10 h-10 text-[#7bb831] shrink-0 drop-shadow-md"
                                strokeWidth={1.5}
                            />
                            <div className="flex flex-col mt-1">
                                <h3 className="text-white text-lg font-semibold tracking-wide">
                                    Protejarea Naturii
                                </h3>
                                <p className="text-gray-400/80 text-sm mt-0.5 leading-snug">
                                    Cresterea biodiversitatii pe zone si arii protejate.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <Leaf
                                className="w-10 h-10 text-[#7bb831] shrink-0 drop-shadow-md"
                                strokeWidth={1.5}
                            />
                            <div className="flex flex-col mt-1">
                                <h3 className="text-white text-lg font-semibold tracking-wide">
                                    Reducerea Poluării
                                </h3>
                                <p className="text-gray-400/80 text-sm mt-0.5 leading-snug">
                                    Scaderea in mod dramatic a emisiilor poluante.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5">
                            <Recycle
                                className="w-10 h-10 text-[#7bb831] shrink-0 drop-shadow-md"
                                strokeWidth={1.5}
                            />
                            <div className="flex flex-col mt-1">
                                <h3 className="text-white text-lg font-semibold tracking-wide">
                                    Economie de Resurse
                                </h3>
                                <p className="text-gray-400/80 text-sm mt-0.5 leading-snug">
                                    Protejarea si productia pentru o viata echilibrata.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= DREAPTA: Despre EcoReciclare ================= */}
                <div className="flex flex-col lg:pl-12">

                    <div className="flex items-center gap-6 mb-8">
                        <h2 className="text-[#d5b976] font-serif text-3xl whitespace-nowrap">
                            Despre EcoReciclare
                        </h2>
                        <div className="h-[1px] flex-grow bg-white/10 mt-2" />
                    </div>

                    <div className="flex flex-col-reverse md:flex-row gap-8 items-start">

                        <div className="flex flex-col flex-1 gap-5">
                            <p className="text-white text-xl leading-snug pr-4">
                                Experiență și profesionalism în reciclare
                            </p>
                            <p className="text-gray-400/80 text-sm">
                                Angajamentul nostru pentru un viitor sustenabil
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}