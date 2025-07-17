"use client";

import Link from 'next/link'
import { useTranslations } from "next-intl";

const links = [
    {
        id: 'service',
        title: 'Le service',
        href: '#services',
    },
    {
        id: 'experiences',
        title: 'Les expériences',
        href: '#experiences',
    },
    {
        id: 'avis',
        title: 'Les avis',
        href: '#avis',
    }
]

export default function FooterSection() {
    const t = useTranslations("footer");
    return (
        <footer className="border-b bg-white py-12 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-wrap justify-between gap-6">
                    <span className="text-muted-foreground order-last block text-center text-sm md:order-first">{t("copyright", { year: new Date().getFullYear() })}</span>
                    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block duration-150">
                                <span>{t(`links.${link.id}`)}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
