import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="border-b md:px-0 px-4">
      <div className="flex justify-between md:w-[850px] mx-auto py-4">
        <ul className="flex gap-4 font-semibold text-black/70 dark:text-slate-400">
          <li className="w-20">
            <Link href="/">Home</Link>
          </li>
          <li className="w-20">
            <Link href="/about">About</Link>
          </li>
          <li className="w-20">
            <Link href="/portofolio">Portofolio</Link>
          </li>
        </ul>
        <button onClick={() => {
          setDarkMode(!darkMode)
          document.body.classList.toggle("dark")
        }}>
          {
            darkMode ? (
              <MoonIcon className="h-6" />
            ) : <SunIcon className="h-6" />
          }

        </button>
      </div>
    </div>
  );
}
