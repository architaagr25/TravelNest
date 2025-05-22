"use client";

import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1747921339/travel_logo_yjdmw2.png" alt="logo" width={104} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-18 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold "
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="LogIn"
          icon="https://res.cloudinary.com/dqbhvzioe/image/upload/v1747921340/user_uyacqj.svg"
          variant="btn_dark_green"
        />
      </div>

      <div className="lg:hidden">
        <Image
          src="https://res.cloudinary.com/dqbhvzioe/image/upload/v1747921331/menu_ececch.svg"
          alt="menu"
          width={32}
          height={32}
          className="cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 right-5 z-40 flex flex-col gap-4 rounded-lg bg-white p-6 shadow-lg lg:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-gray-800 text-base hover:font-semibold "
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            type="button"
            title="LogIn"
            icon="https://res.cloudinary.com/dqbhvzioe/image/upload/v1747921340/user_uyacqj.svg"
            variant="btn_dark_green"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
