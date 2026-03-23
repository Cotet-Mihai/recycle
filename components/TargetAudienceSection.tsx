import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import React from "react";

export default function TargetAudienceSection() {
    return (
        <section className={'flex flex-col py-24 px-10 w-full max-w-7xl mx-auto min-h-screen'}>
            {/* Header */}
            <div className={'flex flex-col sm:flex-row md:items-end justify-between items-center w-full gap-6'}>
                <div className={'flex flex-col gap-2 max-w-2xl'}>
                    {/* Culoarea aurie pentru titlu */}
                    <h2 className={'text-3xl md:text-5xl lg:text-6xl font-serif tracking-tight font-bold text-white'}>
                        Cui ne <span className={'italic text-[#d5b976]'}>adresăm </span>?
                    </h2>
                    <p className={'text-gray-400 text-sm'}>
                        Reciclarea nu e aceeași pentru toți. Fiecare are rolul său,
                        iar noi avem soluții personalizate pentru companii,
                        instituții și persoane fizice.
                    </p>
                </div>

                <div>
                    <Button
                        variant={'outline'}
                        className={'p-6 rounded-full font-bold hover:scale-105 hover:bg-[#d5b976] hover:border-none duration-400 bg-transparent text-white'}
                    >
                        Află mai mult
                    </Button>
                </div>
            </div>

            {/* Cards */}
            <div className={'flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'}>
                {/* Card 1 */}
                <Card className={'relative lg:row-span-2 overflow-hidden rounded-3xl group border-none h-[400px] lg:h-full bg-[#1b2326]'}>
                    <Image
                        src={'/images/phone.png'}
                        alt={'Secțiune despre producatori'}
                        fill
                        className={'object-cover object-[50%_50%] group-hover:scale-105 transition duration-700 opacity-60'}
                    />
                    {/* Overlay pentru text mai lizibil */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1b2326]/80 via-transparent to-transparent" />
                    <div className={'absolute inset-0 flex flex-col items-center px-8 text-center'}>
                        <h3 className={'text-2xl md:text-4xl font-semibold uppercase pt-10 font-serif text-[#d5b976]'}>
                            PRODUCATORI
                        </h3>
                        <p className={'text-sm text-gray-200 mt-3 max-w-[250px]'}>
                            Introduci echipamente electrice și electronice pe piață?
                            Ai nevoie de un partener pentru conformare legală.
                        </p>
                    </div>
                </Card>

                {/* Card 2 */}
                <Card className={'relative lg:row-span-2 overflow-hidden rounded-3xl group border-none h-[400px] lg:h-full bg-[#1b2326]'}>
                    <Image
                        src={'/images/texture.png'}
                        alt={'Secțiune despre distribuitori'}
                        fill
                        className={'object-cover object-[50%_60%] group-hover:scale-105 transition duration-700 opacity-60'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1b2326]/80 via-transparent to-transparent" />
                    <div className={'absolute inset-0 flex flex-col items-center px-8 text-center'}>
                        <h3 className={'text-2xl md:text-4xl font-semibold uppercase pt-10 font-serif text-[#d5b976]'}>
                            distribuitori
                        </h3>
                        <p className={'text-sm text-gray-200 mt-3 max-w-[250px]'}>
                            Vinzi echipamente electrice direct către consumatori?
                            Îți oferim soluții corecte de colectare DEEE.
                        </p>
                    </div>
                </Card>

                {/* Card 3 */}
                <Card className={'relative lg:row-span-1 overflow-hidden rounded-3xl group border-none h-[300px] lg:h-full bg-[#1b2326]'}>
                    <Image
                        src={'/images/texture.png'}
                        alt={'Secțiune despre persoane fizice'}
                        fill
                        className={'object-cover object-[90%_80%] md:object-[50%_80%] group-hover:scale-105 transition duration-700 opacity-60'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#1b2326]/80 via-transparent to-transparent" />
                    <div className={'absolute inset-0 flex flex-col items-center px-8 text-center'}>
                        <h3 className={'text-2xl md:text-3xl font-semibold uppercase pt-10 font-serif text-[#d5b976]'}>
                            persoane fizice
                        </h3>
                        <p className={'text-sm text-gray-200 mt-3'}>
                            Ai aparate vechi? Noi venim <br className="hidden md:block"/> să le preluăm pentru reciclare.
                        </p>
                    </div>
                </Card>

                {/* Card 4 - Imagine decorativă */}
                <Card className={'relative lg:row-span-1 overflow-hidden rounded-3xl group border-none h-[200px] lg:h-full bg-[#1b2326]'}>
                    <Image
                        src={'/images/texture.png'}
                        alt={'Imagine decorativă cu o plantă'}
                        fill
                        className={'object-cover opacity-80 group-hover:scale-110 transition duration-1000'}
                    />
                    {/* Un mic overlay auriu subtil pentru consistență */}
                    <div className="absolute inset-0 bg-[#d5b976]/5 mix-blend-overlay" />
                </Card>
            </div>
        </section>
    )
}