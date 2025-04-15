import Image from "next/image";



export default function Portofolio() {
  const cards = [{
    id: 1,
    title: "SIMLABKAL",
    image: "/simlabkal.png",
    description: "Simlabkal is a digital platform for promoting and facilitating the exchange of knowledge and skills among local communities."
  },
  {
    id: 2,
    title: "This Blog",
    image: "/blog.png",
    description: "Gamification Academy is a platform that promotes and facilitates the development of gamified learning experiences for teachers and students."
  }, {
    id: 3,
    title: "Landing Page MSE",
    image: "/mse.png",
    description: "Learning Management System is a web-based application for managing courses, assessments, and student progress."
  },
  {
    id: 4,
    title: "Landing Page Saebos",
    image: "/saebos.png",
    description: "Website is a digital platform for promoting and facilitating the exchange of knowledge and skills among local communities."
  },
  {
    id: 5,
    title: "Wedding Webiste",
    image: "/wedding.png",
    description: "Website is a digital platform for promoting and facilitating the exchange of knowledge and skills among local communities."
  }
  ]

  // 

  return <div className="flex md:flex-wrap md:justify-between md:gap-0 justify-center gap-2">
    {
      cards.map(card => (
        <div className="rounded-lg cursor-pointer mb-8 w-[240px] shadow-md shadow-gray-400 hover:scale-105 delay-75 transition ease-in-out">
          <Image src={card.image} alt={card.title} width="240" height="80" className="w-[240px] h-[160px] rounded-t-lg" />
          <p className="font-bold border-t text-center shadow-sm text-sm text-slate-600 py-2">{card.title}</p>
        </div>
      ))
    }

    {
      (cards && cards.length % 2 === 1) &&
      (
        <div className="w-[240px]"></div>
      )
    }
  </div>
}
