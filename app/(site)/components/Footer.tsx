"use client";

import Link from "next/link";
import { AiOutlineCopyrightCircle as CopyIcon } from "react-icons/ai";
import Image from "next/image";
import { socialMediaData } from "@/constants/socialMediaData";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="w-full bg-slate-900 px-3 ">
      <div className="max-w-7xl mx-auto py-10 flex flex-col gap-4 md:flex-row justify-between items-center">
        <div className="md:w-[337px] flex flex-row items-center gap-2">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Shubham"
              width={50}
              height={50}
              loading="lazy"
              className="h-16 object-contain md:object-left"
            />
          </Link>
          <h2 className="font-bold">Shubham Dhyani</h2>
        </div>
        <div className="flex gap-6 items-center text-xl">
          {socialMediaData?.map((social, index) => (
            <a
              key={index}
              href={social?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white md:h-12  md:w-12  h-10 w-10 text-sm md:text-base aspect-square flex items-center justify-center hover:border-orange-500 rounded-full border md:border-2 transition-all hover:text-orange-500 hover:scale-110"
              title={`Follow me on ${social?.title}`}
            >
              <social.icon />
            </a>
          ))}
        </div>
        <div className="md:text-sm text-xs w-full md:w-auto text-center">
          <CopyIcon className="inline-flex" /> Copyright {date?.getFullYear()}{" "}
          <a
            href="https://www.linkedin.com/in/shubham-dhyani-001abc/"
            // 1="noopener noreferrer"
            rel="noreferrer"
            target="_blank"
            className="font-semibold text-orange-500"
          >
            Shubham
          </a>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
