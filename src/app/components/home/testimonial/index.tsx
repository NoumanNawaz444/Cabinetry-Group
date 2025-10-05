"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  designation: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Stephanie Sue",
    designation: "Interior Designer",
    text: "Cabinetry Group transformed my kitchen with their custom cabinets. Quality and craftsmanship are unmatched!",
  },
  {
    id: 2,
    name: "Mark Johnson",
    designation: "Homeowner",
    text: "Their team delivered exactly what I envisioned. Every detail was perfect. Highly recommend!",
  },
  {
    id: 3,
    name: "Linda Parker",
    designation: "Architect",
    text: "Professional and reliable service. The cabinets look stunning and are built to last.",
  },
  {
    id: 4,
    name: "James Smith",
    designation: "Contractor",
    text: "Great experience working with Cabinetry Group. Their designs are innovative and functional.",
  },
  {
    id: 5,
    name: "Emily Davis",
    designation: "Interior Enthusiast",
    text: "I love the attention to detail. Every cabinet fits perfectly and elevates the space.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true); // fade-in new testimonial
      }, 500); // fade duration
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const changeTestimonial = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 500);
  };

  const prevTestimonial = () => {
    changeTestimonial(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const nextTestimonial = () => {
    changeTestimonial((currentIndex + 1) % testimonials.length);
  };

  return (
    <section className="px-4 md:px-0 dark:bg-darkmode">
      <div className="container lg:max-w-screen-xl md:max-w-screen-md px-8 mx-auto py-12 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Fixed Image */}
        <div className="flex-1 lg:block hidden" data-aos="fade-right">
          <Image
            src="/images/testimonial/vector-smart.png"
            alt="testimonial"
            width={451}
            height={470}
            quality={100}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Testimonial Content */}
        <div className="flex-1" data-aos="fade-left">
          <Image
            src="/images/testimonial/quote.svg"
            alt="quote"
            className="mb-4 md:mb-6"
            height={135}
            width={135}
          />

          <div
            className={`transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-lg md:text-2xl text-gray mb-6 md:mb-12">
              {testimonials[currentIndex].text}
            </p>
            <p className="text-lg md:text-2xl font-semibold">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-gray text-lg md:text-xl">
              {testimonials[currentIndex].designation}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="px-4 py-2 bg-midnight_text text-white rounded hover:bg-gray-700 transition"
            >
              Previous
            </button>
            <button
              onClick={nextTestimonial}
              className="px-4 py-2 bg-midnight_text text-white rounded hover:bg-gray-700 transition"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
