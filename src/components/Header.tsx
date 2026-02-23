'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaCrown } from 'react-icons/fa6';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-sm py-2'
                    : 'bg-transparent py-4'
                }`}
        >
            <Container>
                <nav className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
                        <div className="bg-primary p-2 rounded-xl shadow-sm text-black group-hover:shadow-md transition-all">
                            <FaCrown className="w-6 h-6" />
                        </div>
                        <span className="manrope text-2xl font-bold tracking-tight text-foreground">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex space-x-8">
                            {menuItems.map(item => (
                                <li key={item.text}>
                                    <Link
                                        href={item.url}
                                        className="text-foreground/70 hover:text-foreground font-medium transition-colors relative group"
                                    >
                                        {item.text}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="#cta"
                            className="text-black bg-primary hover:bg-primary-accent px-6 py-2.5 rounded-xl font-bold shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Download
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors focus:outline-none rounded-xl p-2.5 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 -translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-4"
            >
                <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100">
                    <ul className="flex flex-col space-y-2 p-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link
                                    href={item.url}
                                    className="text-foreground/80 hover:text-primary font-medium block py-2 px-4 rounded-lg hover:bg-gray-50 transition-all"
                                    onClick={toggleMenu}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Link
                                href="#cta"
                                className="text-black bg-primary hover:bg-primary-accent py-3 px-4 rounded-xl font-bold block text-center shadow-sm transition-all"
                                onClick={toggleMenu}
                            >
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
