"use client";

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-black pt-16 pb-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="flex flex-col gap-6">
            <Link href="/">
              <Image src="/travel_logo.png" alt="TripNest Logo" width={120} height={40} />
            </Link>
            <p className="regular-16 text-black max-w-sm">
              Your ultimate companion for unforgettable trekking adventures. Navigate. Share. Explore.
            </p>
          </div>

          <div className=" grid grid-cols-2 md:grid-cols-3 gap-10 w-full md:w-2/3 ">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-16 flex flex-col gap-2 text-black">
                  {columns.links.map((link) => (
                    <Link href="/" key={link} className="hover:underline hover:text-black">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              <ul className="text-sm flex flex-col gap-3 text-black">
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <li key={link.label} className="flex flex-col md:flex-row gap-1">
                    <span className="font-semibold text-black">{link.label}:</span>
                    <span>{link.value}</span>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title={SOCIALS.title}>
              <div className="flex gap-4">
                {SOCIALS.links.map((link) => (
                  <Link href="/" key={link}>
                    <Image src={link} alt="social-icon" width={24} height={24} className="hover:scale-110 transition-transform" />
                  </Link>
                ))}
              </div>
            </FooterColumn>
          </div>
        </div>

        <div className="h-px w-full bg-black" />

        <p className="text-center regular-16 text-black">
          © 2025 TripNest. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="bold-18 font-bold text-black">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;

