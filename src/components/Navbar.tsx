"use client";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="border-b px-4 dark:border-slate-500 md:px-0">
      <div className="mx-auto flex justify-between py-4 md:w-[850px]">
        <ul className="flex items-center gap-8  text-black/70 dark:text-slate-100">
          <li className="font-bold">
            <Link href="/" className="text-3xl">
              &lt;/rn&gt;
            </Link>
          </li>
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
        <button
          onClick={() => {
            setDarkMode(!darkMode);
            document.body.classList.toggle("dark");
          }}
        >
          {darkMode ? <MoonIcon className="h-6" /> : <SunIcon className="h-6" />}
        </button>
      </div>
    </div>
  );
}
