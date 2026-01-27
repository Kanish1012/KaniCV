import React from "react";
import Title from "./Title";
import { BookUserIcon } from "lucide-react";

const Testimonial = () => {
    const cardsData = [
        {
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            name: "Briar Martin",
            handle: "@neilstellar",
            quote: "The AI suggestions instantly improved my resume. It looks clean, professional, and recruiter-ready.",
        },
        {
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            name: "Avery Johnson",
            handle: "@averywrites",
            quote: "I rebuilt my resume in under 10 minutes and started getting interview calls within days.",
        },
        {
            image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
            name: "Jordan Lee",
            handle: "@jordantalks",
            quote: "The ATS-friendly format made a huge difference. Recruiters actually noticed my profile.",
        },
        {
            image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=200",
            name: "Arjun Mehta",
            handle: "@arjunbuilds",
            quote: "As a fresher, I struggled with resume structure. This tool guided me step by step.",
        },
        {
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
            name: "Kwame Adeyemi",
            handle: "@kwametech",
            quote: "The AI perfectly highlighted my skills and experience. It saved me hours of manual edits.",
        },
        {
            image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=200",
            name: "Hiroshi Tanaka",
            handle: "@hirodev",
            quote: "Clear layouts and smart wording suggestions made my resume stand out instantly.",
        },
        {
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
            name: "Lukas Schneider",
            handle: "@lukascodes",
            quote: "Professional design with accurate content. I’d recommend this to any job seeker.",
        },
    ];

    const CreateCard = ({ card }) => (
        <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
            <div className="flex gap-2">
                <img
                    className="size-11 rounded-full"
                    src={card.image}
                    alt={`${card.name} profile`}
                />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p className="font-medium">{card.name}</p>
                        <span className="text-green-500 text-xs">✔</span>
                    </div>
                    <span className="text-xs text-slate-500">
                        {card.handle}
                    </span>
                </div>
            </div>
            <p className="text-sm py-4 text-gray-800">{card.quote}</p>
        </div>
    );

    return (
        <>
            <div
                id="testimonials"
                className="flex flex-col items-center my-10 scroll-mt-12"
            >
                <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-6 py-1.5">
                    <BookUserIcon className="size-4" />
                    <span>Testimonials</span>
                </div>

                <Title
                    title="Don’t just take our word for it"
                    description="Hear what our users say about their experience using our AI resume builder."
                />
            </div>

            {/* Marquee Rows */}
            {[false, true].map((reverse, rowIndex) => (
                <div
                    key={rowIndex}
                    className="w-full mx-auto max-w-5xl overflow-hidden relative"
                >
                    <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                    <div
                        className={`marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5 ${
                            reverse ? "marquee-reverse" : ""
                        }`}
                    >
                        {[...cardsData, ...cardsData].map((card, index) => (
                            <CreateCard
                                key={`${card.name}-${index}`}
                                card={card}
                            />
                        ))}
                    </div>
                    <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
                </div>
            ))}
        </>
    );
};

export default Testimonial;
