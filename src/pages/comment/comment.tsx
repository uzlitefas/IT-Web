"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";
import clsx from "clsx";
import { reviews } from "@/constants";
import { ExpandingCards } from "./expendingCard";

export const TeamSoftReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClick = (index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-24 gap-14">
      {/* LEFT SECTION - Reviews */}
      <div className="relative w-full  lg:w-1/2 h-[540px] mt-10">
        {reviews.map((review, index) => {
          const isCurrent = index === currentIndex;
          const isNext = index === (currentIndex + 1) % reviews.length;
          const isOut =
            index === currentIndex - 1 ||
            (currentIndex === 0 && index === reviews.length - 1);

          return (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={clsx(
                "absolute w-full p-6 rounded-3xl mt-30 border border-gray-800 shadow-xl transition-transform duration-500 ease-[cubic-bezier(.8,.2,.1,0.8)] cursor-pointer select-none bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#000000] text-white backdrop-blur-md",
                {
                  "z-10 scale-100 rotate-[-1deg] translate-x-0 cursor-auto select-auto":
                    isCurrent,
                  "z-5 -translate-y-6 translate-x-6 rotate-[4deg] scale-100":
                    isNext,
                  "z-0 translate-y-[-48px] translate-x-14 rotate-[8deg] scale-95":
                    isOut,
                  "z-0 opacity-0 pointer-events-none":
                    !isCurrent && !isNext && !isOut,
                }
              )}
            >
              <div className="mb-3 flex items-center gap-2 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < review.rating ? "fill-yellow-400" : "opacity-30"}
                  />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-gray-300 mb-4">
                {review.content}
              </p>

              <div className="flex items-center gap-4 mt-6">
                <img
                  src={review.avatar}
                  alt={review.name || "Foydalanuvchi"}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
                />
                <div>
                  <h1 className="text-sm font-semibold text-white">
                    {review.name}
                  </h1>
                  <h2 className="text-xs text-gray-400">{review.title}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT SECTION - Expanding Cards */}
      <div className="w-full lg:w-1/2">
        <div className="rounded-3xl overflow-hidden p-4">
          <ExpandingCards />
        </div>
      </div>
    </div>
  );
};

export default TeamSoftReviews;
