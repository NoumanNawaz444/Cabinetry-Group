"use client";

import Image from "next/image";
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  date: string; // YYYY-MM-DD
};

const images: GalleryItem[] = [
  { src: "/images/flatpack/image-1.jpeg", alt: "Flat Pack Cabinetry", category: "Flat Pack", date: "2025-09-01" },
  { src: "/images/flatpack/image-2.jpg", alt: "Flat Pack Cabinetry", category: "Flat Pack", date: "2025-08-10" },
  { src: "/images/flatpack/image-3.jpg", alt: "Flat Pack Cabinetry", category: "Flat Pack", date: "2025-05-10" },
  { src: "/images/flatpack/image-4.jpg", alt: "Flat Pack Cabinetry", category: "Flat Pack", date: "2025-06-10" },
  { src: "/images/Edging/image-1.jpeg", alt: "Edging Services", category: "Edging", date: "2025-08-20" },
  { src: "/images/Edging/image-2.jpg", alt: "Edging Services", category: "Edging", date: "2025-05-20" },
  { src: "/images/Edging/image-3.jpg", alt: "Edging Services", category: "Edging", date: "2025-07-15" },
  { src: "/images/Aluminium/image-1.jpg", alt: "Aluminium Glass Doors", category: "Aluminium", date: "2025-06-30" },
  { src: "/images/Aluminium/image-2.jpg", alt: "Aluminium Door Profiles", category: "Aluminium", date: "2025-05-10" },
  { src: "/images/Aluminium/image-3.jpg", alt: "Aluminium Door Profiles", category: "Aluminium", date: "2025-02-03" },
  { src: "/images/vinyl/image-1.jpg", alt: "Vinyl Thermolaminated Doors", category: "Vinyl", date: "2025-09-05" },
  { src: "/images/vinyl/image-2.jpg", alt: "Vinyl Thermolaminated Doors", category: "Vinyl", date: "2025-03-05" },
  { src: "/images/vinyl/image-3.jpg", alt: "Vinyl Thermolaminated Doors", category: "Vinyl", date: "2025-01-05" },
  // Add more images as needed
];

const categories = ["All", "Flat Pack", "Edging", "Vinyl", "Aluminium"];
const sortOptions = ["Newest", "Oldest", "Alphabetical"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Newest");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter and sort
  let filteredImages = images.filter(
    (img) => selectedCategory === "All" || img.category === selectedCategory
  );

  filteredImages.sort((a, b) => {
    if (selectedSort === "Newest") return b.date.localeCompare(a.date);
    if (selectedSort === "Oldest") return a.date.localeCompare(b.date);
    if (selectedSort === "Alphabetical") return a.alt.localeCompare(b.alt);
    return 0;
  });

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filteredImages.length));

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <section className="bg-cover pt-36 relative bg-gradient-to-b from-white from-10% dark:from-darkmode to-herobg to-90% dark:to-darklight overflow-x-hidden" >
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <h2 className="text-midnight_text text-4xl lg:text-[50px] leading-[1.2] md:mx-auto md:max-w-60% text-center relative font-bold dark:text-white">Our Gallery</h2>
        </div>
      </section>
      <div className="max-w-7xl mx-auto">


        {/* Filter & Sort Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sticky top-20 z-10 bg-gray-50 dark:bg-gray-900 py-4 px-2 rounded-lg shadow-sm mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500"
          >
            {sortOptions.map((sort) => (
              <option key={sort} value={sort}>
                {sort}
              </option>
            ))}
          </select>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="relative w-full h-64 overflow-hidden rounded-xl shadow-lg group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white text-lg font-semibold text-center px-2">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white p-2 rounded-full hover:bg-gray-800"
          >
            <X size={24} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-5 text-white p-2 rounded-full hover:bg-gray-800"
          >
            <ChevronLeft size={32} />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={nextImage}
            className="absolute right-5 text-white p-2 rounded-full hover:bg-gray-800"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </main>
  );
}
