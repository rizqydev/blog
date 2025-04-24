"use client";
import Image from "next/image";
import { useState } from "react";
import type { Card } from "@/types/Post";

// export const metadata = {
//   title: "Projects",
// };

function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`fixed inset-0 z-10 flex min-h-screen items-center justify-center overflow-y-auto p-4 transition-opacity duration-300 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>
        <div
          className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-300 sm:w-full sm:max-w-lg ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function Portofolio() {
  const cards: Card[] = [
    {
      id: 1,
      title: "SIMLABKAL",
      image: "/simlabkal.png",
      description:
        "Simlabkal is a digital platform for promoting and facilitating the exchange of knowledge and skills among local communities.",
    },
    {
      id: 2,
      title: "Rizqy's Blog",
      image: "/blog.png",
      description:
        "Gamification Academy is a platform that promotes and facilitates the development of gamified learning experiences for teachers and students.",
    },
    {
      id: 3,
      title: "Landing Page MSE",
      image: "/mse.png",
      description:
        "Learning Management System is a web-based application for managing courses, assessments, and student progress.",
    },
    {
      id: 4,
      title: "Landing Page Saebos",
      image: "/saebos.png",
      description:
        "Website is a digital platform for promoting and facilitating the exchange of knowledge and skills among local communities.",
    },
    {
      id: 5,
      title: "Wedding Webiste",
      image: "/wedding.png",
      description:
        "Website is a digital platform for promoting and facilitating the exchange of knowledge and skills among local communities.",
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
            className="mb-8 w-[240px] cursor-pointer shadow-sm shadow-gray-400 transition delay-75 ease-in-out hover:scale-105"
            onClick={openModal.bind(null, card)}
          >
            <Image
              src={card.image}
              alt={card.title}
              width="240"
              height="80"
              className="h-[160px] w-[240px]"
            />
            <p className="border-t py-2 text-center text-sm font-bold text-slate-800 dark:text-slate-100">
              {card.title}
            </p>
          </div>
        ))}

        {cards && cards.length % 2 === 1 && <div className="w-[240px]"></div>}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {cardSelected !== null && (
          <>
            <h3 className="mb-4 text-lg font-bold">{cardSelected?.title}</h3>
            <Image
              src={cardSelected.image}
              alt={cardSelected.title}
              width="480"
              height="320"
              className="h-[320px] w-[480px]"
            />
            <p className="mt-4 text-sm text-slate-800 dark:text-slate-100">
              {cardSelected.description}
            </p>
          </>
        )}
      </Modal>
    </>
  );
}
