"use client";
import React, { useState } from "react";

interface Question {
  id: number;
  quest: string;
  answer: string;
}

interface Props {
  questions: Question[]; // ✅ Accepts an array of questions
}

const Questions = ({ questions }: Props) => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const handleOpen = (id: number): void => {
    setFaqOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full py-6">
      {questions.map((question) => (
        <div
          className="flex flex-col gap-2 py-3 px-2 border-b border-gray-300 items-start"
          key={question.id}
        >
          <div className="flex items-start justify-between w-full">
            <h2 className="text-[18px] md:text-3xl font-bold">{question.quest}</h2>
            <img
              onClick={() => handleOpen(question.id)}
              className="cursor-pointer"
              width={30}
              src={faqOpen === question.id ? "/images/minus.png" : "/images/plus.png"}
              alt={faqOpen === question.id ? "minus" : "plus"}
            />
          </div>
          {faqOpen === question.id && (
            <p className="text-[18px] text-gray-400 font-medium w-[70%]">{question.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
