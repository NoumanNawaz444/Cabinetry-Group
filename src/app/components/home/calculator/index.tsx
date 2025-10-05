"use client";
import React, { useState, useEffect } from "react";
import "../../../../app/style/index.css";
import Link from "next/link";
import Image from "next/image";

export default function Calculator() {
  const [activeTab, setActiveTab] = useState("sell");
  const [price, setPrice] = useState(10000);

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  const handlePriceChange = (event: any) => {
    setPrice(event.target.value);
  };

  return (
    <section className="dark:bg-darkmode">
      <div
        className="container px-4 lg:max-w-screen-xl md:max-w-screen-md mx-auto flex flex-col lg:flex-row gap-16 justify-between items-center"
        data-aos="fade-left"
      >
        <div className="max-w-37.5 px-0 mb-8 md:mb-0" data-aos="fade-right">
          <h2
            className="text-4xl mb-4 font-bold text-midnight_text dark:text-white"
            data-aos="fade-left"
          >
            Our Mission
          </h2>
          <p className="text-xl text-gray mb-12" data-aos="fade-left">
            At Cabinetry Group, our mission is clear — to transform ideas into exceptional craftsmanship. Built on a passion for woodworking and a dedication to quality, we strive to exceed expectations and redefine what’s possible in cabinetry design and manufacturing. Every member of our team brings skill, creativity, and precision to their work, ensuring every project reflects our commitment to excellence.
          </p>
          <div className="relative-container flex justify-center">
            <div className=" mb-16 pt-8 flex justify-start items-start w-full">
              <div className="child-container relative flex flex-col items-start">

                {/* Vertical line */}
                <div className="absolute left-1 top-0 bottom-0 w-[2px] bg-blue-400"></div>

                {/* Item 1 */}
                <div
                  className="pl-6 mb-6 relative"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <div className="absolute left-0 top-2 w-3 h-3 bg-blue-400 rounded-full"></div>
                  <p className="text-3xl text-midnight_text dark:text-white font-semibold">
                    Trade Save 3%
                  </p>
                  <p className="text-gray text-base">On orders above $50K</p>
                </div>

                {/* Item 2 */}
                <div
                  className="pl-6 mb-6 relative"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="absolute left-0 top-2 w-3 h-3 bg-blue-400 rounded-full"></div>
                  <p className="text-3xl text-midnight_text dark:text-white font-semibold">
                    Trade Save 5%
                  </p>
                  <p className="text-gray text-base">On orders above $75K</p>
                </div>

                {/* Item 3 */}
                <div
                  className="pl-6 relative"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div className="absolute left-0 top-2 w-3 h-3 bg-blue-400 rounded-full"></div>
                  <p className="text-3xl text-midnight_text dark:text-white font-semibold">
                    Trade Save 8%
                  </p>
                  <p className="text-gray text-base">On orders above $90K</p>
                </div>

              </div>
            </div>
          </div>

          <div data-aos="fade-up">
            <Link
              href="/contact"
              className="text-xl bg-primary py-3 px-8 text-white rounded-lg me-3 mb-2 border border-primary hover:bg-blue-700"
            >
              Contact Now
            </Link>
            
          </div>
        </div>
        <div className="lg:w-auto w-full" data-aos="fade-right">
          <Image
            src="/images/counter/girl-thumbs-up.webp"
            alt="Calculator"
            width={400}
            height={600}
            className="w-full md:h-[700px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
