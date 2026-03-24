import Link from "next/link";
import { Menu, Recycle } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { COMPANY } from "@/utils/data";
import {Button} from "@/components/ui/button";

const navigation = [
    { name: "Acasă", href: "/" },
    { name: "Despre noi", href: "/despre-noi" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center">
            {/* --- FUNDALUL HEADER-ULUI (Industrial Grunge Match) --- */}
            <div className="absolute inset-0 -z-10 bg-background overflow-hidden border-b border-foreground/5">

                {/* 1. Predominantul: Albastru-Verzui (Petrol) - Baza asimetrică */}
                <div
                    className="absolute inset-0 opacity-100"
                    style={{
                        background: `radial-gradient(circle at 20% 0%, #0a2429 0%, #02080a 100%)`
                    }}
                />

                {/* 2. Detaliul Galben Subtil (Ocre/Amber) - Poziționat asimetric spre dreapta */}
                <div
                    className="absolute top-[-20px] left-[70%] -translate-x-1/2 w-[60%] h-[100px] opacity-30 blur-[50px]"
                    style={{
                        background: 'radial-gradient(ellipse at center, #7d5a32 0%, #4a341d 50%, transparent 100%)'
                    }}
                />

                {/* 3. Textura ta principală (petele de mizerie din texture.jpg) */}
                <div
                    className="absolute inset-0 opacity-40 mix-blend-multiply"
                    style={{
                        backgroundImage: `url('/texture.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center',
                        filter: 'contrast(1.1) brightness(0.9)'
                    }}
                />

                {/* 4. Stratul de NOISE ORGANIC (Pentru a sparge uniformitatea exact ca în background) */}
                <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <filter id="headerGrunge">
                            <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.02"
                                numOctaves="4"
                                seed="15"
                            />
                            <feColorMatrix type="saturate" values="0" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#headerGrunge)" />
                    </svg>
                </div>

                {/* 5. Vinietă fină jos (Efect de profunzime) */}
            </div>

            <nav className="flex items-center justify-between mx-auto max-w-7xl w-full px-6 lg:px-10">

                {/* 1. Mobile Menu Trigger */}
                <div className="flex md:hidden">
                    <Sheet>
                        <SheetTrigger className="text-foreground/80 hover:text-primary-foreground transition-colors p-2">
                            <Menu size={24} />
                        </SheetTrigger>

                        <SheetContent
                            side="top"
                            className="flex flex-col border-none bg-background text-foreground h-[90vh] rounded-b-[2rem] p-0 overflow-hidden"
                        >
                            {/* Overlay pentru meniul mobil */}
                            <div className="absolute inset-0 opacity-1 pointer-events-none bg-[url('/texture.jpg')] bg-cover" />
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-black" />

                            <SheetHeader className="items-center pt-12 relative z-10">
                                <SheetTitle className="flex items-center gap-2">
                                    <Recycle className="h-8 w-8 text-primary-foreground" />
                                    <span className="font-serif text-3xl font-bold italic tracking-tighter text-foreground">
                                        Eco<span className="text-primary-foreground">Elite</span>
                                    </span>
                                </SheetTitle>
                                <SheetDescription className="text-muted-foreground font-medium tracking-wide">
                                    Din deșeuri, construim viitorul.
                                </SheetDescription>
                            </SheetHeader>

                            <div className="flex flex-col items-center justify-center flex-1 gap-8 py-10 relative z-10">
                                {navigation.map((item) => (
                                    <SheetClose asChild key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-2xl font-serif font-bold text-foreground hover:text-primary-foreground transition-all"
                                        >
                                            {item.name}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </div>

                            <SheetFooter className="flex-col gap-4 pb-12 items-center relative z-10">
                                <SheetClose asChild>
                                    <Link href="/solicitare-oferta" className="w-full max-w-xs rounded-full h-14 font-bold text-base bg-primary border border-primary-foreground/30 text-primary-foreground flex items-center justify-center uppercase tracking-widest hover:bg-primary">
                                        Solicită o ofertă
                                    </Link>
                                </SheetClose>
                                <p className="text-[10px] uppercase font-black tracking-widest text-muted-foreground mt-6">
                                    Suport telefonic:{" "}
                                    <a
                                        href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                                        className="text-foreground"
                                    >
                                        {COMPANY.phone}
                                    </a>
                                </p>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* 2. Logo */}
                <div className="flex md:flex-1">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Recycle className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground filter drop-shadow-[0_0_8px_rgba(126,198,54,0.4)] transition-transform duration-700 group-hover:rotate-180" />
                        <span className="font-serif text-xl md:text-2xl font-bold tracking-tighter italic text-foreground leading-none">
                            Eco<span className="text-primary-foreground">Elite</span>
                        </span>
                    </Link>
                </div>

                {/* 3. Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:gap-x-10">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-foreground transition-all duration-300 relative group py-2"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary-foreground to-transparent opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100" />
                        </Link>
                    ))}
                </div>

                {/* 4. Desktop CTA */}
                <div className="hidden md:flex md:flex-1 md:justify-end">
                    <Button
                        className="relative bg-primary/40 border border-primary-foreground/40 hover:bg-primary hover:border-primary-foreground text-primary-foreground py-2.5 px-6 rounded-2xl font-bold uppercase text-xs tracking-widest transition-all duration-300  shadow-xl"
                    >
                        <Link href="/solicitare-oferta">
                            Contact
                        </Link>
                    </Button>
                </div>
            </nav>
        </header>
    );
}