"use client";
import Image from "next/image";
import { useState } from "react";
import type { Card } from "@/types/Post";
import Modal from "@/components/Modal";

// export const metadata = {
//   title: "Projects",
// };

export default function Portofolio() {
  const cards: Card[] = [
    {
      id: 1,
      title: "SIMLABKAL",
      image: "/simlabkal.png",
      description:
        "Simlabkal is a web-based application used to manage the calibration ordering process from start to finish, including the ability to track the status of each order.",
      builtWith: ["NuxtJs", "Tailwind CSS", "Hapi.JS", "PostgreSQL"],
    },
    {
      id: 2,
      title: "Rizqy's Blog",
      image: "/blog.png",
      description:
        "My Personal blog where I share my thoughts and experiences in the world of technology and programming.",
      builtWith: ["Nextjs", "Tailwind CSS", "Typescript"],
    },
    {
      id: 3,
      title: "Landing Page MSE",
      image: "/mse.png",
      description:
        "A landing page that showcases the features and services of MSE, a company that specializes in providing led lighting, solar panel and batery solution.",
      builtWith: ["Nextjs", "Tailwind CSS", "Typescript"],
    },
    {
      id: 4,
      title: "Landing Page Saebos",
      image: "/saebos.png",
      description:
        "A landing page that showcases the features and services of Saebos, a company that specializes in providing medical u clip and some of medical equipment.",
      builtWith: ["Nextjs", "Tailwind CSS", "Typescript"],
    },
    {
      id: 5,
      title: "Wedding Webiste",
      image: "/wedding.png",
      description:
        "A wedding website that I created from another website and I have given a little modification.",
      builtWith: ["Nextjs", "Tailwind CSS", "Typescript"],
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [cardSelected, setCardSelected] = useState<Card | null>(null);

  function openModal(card: Card) {
    setCardSelected(card);
    setIsOpen(true);
  }

  return (
    <>
      <h1 className="mb-8 text-4xl font-bold text-black/70 dark:text-slate-100">Projects</h1>
      <div className="flex justify-center gap-2 md:flex-wrap md:justify-between md:gap-0">
        {cards.map((card, key) => (
          <div
            key={key}
            className="mb-8 w-[240px] cursor-pointer shadow-sm shadow-gray-400 transition delay-75 ease-in-out hover:scale-105 dark:shadow-gray-500"
            onClick={openModal.bind(null, card)}
          >
            <Image
              src={card.image}
              alt={card.title}
              width="240"
              height="80"
              className="h-[160px] w-[240px]"
            />
            <p className="py-2 text-center text-sm font-bold text-slate-800 dark:text-slate-100">
              {card.title}
            </p>
          </div>
        ))}

        {cards && cards.length % 2 === 1 && <div className="w-[240px]"></div>}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {cardSelected !== null && (
          <>
            <div className="h-[320px]">
              <Image
                src={cardSelected.image}
                alt={cardSelected.title}
                width={512}
                height={320}
                className="h-[320px]"
              />
            </div>
            <div className="px-3 py-4 dark:bg-slate-800">
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-slate-100">
                {cardSelected?.title}
              </h3>
              <p className="mb-4 text-sm text-slate-800 dark:text-slate-100">
                {cardSelected.description}
              </p>
              <div className="text-sm text-slate-800 dark:text-slate-100">
                <span className="font-light text-opacity-70">Built with:&nbsp;</span>
                {cardSelected?.builtWith.map((item, index) => (
                  <span
                    key={index}
                    className="mr-1 rounded-md bg-slate-500 px-3 py-1 text-xs text-slate-50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
