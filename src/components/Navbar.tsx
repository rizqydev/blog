import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center border-b">
      <ul className="flex gap-4 py-4 md:w-[850px]">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
