"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from 'react';
import { PropertyContext } from "@/context-api/PropertyContext";

const Hero = () => {
  const router = useRouter();
  const [propertiesData, setPropertiesData] = useState<any[]>([])
  const { properties, updateFilter } = useContext(PropertyContext)!;
  const [activeTab, setActiveTab] = useState("sell");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [location, setLocation] = useState("");
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/propertydata')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setPropertiesData(data || [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  const handleSearchSell = () => {
    if (location.trim() === '') {
      setError('Please enter a location to search.');
      return;
    }
    setError('');
    updateFilter('location', location);
    updateFilter('tag', 'sell');
    router.push(`/properties/properties-list`);
  };

  const handleSearchBuy = () => {
    if (location.trim() === '') {
      setError('Please enter a location to search.');
      return;
    }
    setError('');
    updateFilter('location', location);
    updateFilter('tag', 'Buy');
    router.push(`/properties/properties-list`);
  };

  const suggestions = Array.from(new Set(propertiesData.map((item) => item.location)));

  const handleSelect = (value: any) => {
    setLocation(value);
    setShowSuggestions(false);
  };

  return (
    <section className="relative pt-44 pb-0 dark:bg-darklight bg-no-repeat bg-gradient-to-b from-white from-10% dark:from-darkmode to-herobg to-90% dark:to-darklight overflow-x-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md relative z-10">
        <div className="grid lg:grid-cols-12 grid-cols-1">
          <div
            className="flex flex-col col-span-6 justify-center items-start"
            data-aos="fade-right"
          >
            <div className="mb-8">
              <h1 className="md:text-[50px] leading-[1.2] text-4xl  ml-4 text-midnight_text dark:text-white font-bold">
                Smart Storage, <br className="sm:hidden block" /> Timeless Cabinet Design
              </h1>
            </div>
            <div className="max-w-xl ml-4 mb-9 sm:w-full">
              <p>Welcome to Cabinetry Group, where innovation, precision, and craftsmanship combine to create premium cabinetry solutions and custom aluminium door designs that bring style and functionality to every space.</p>
              
            </div>
            <div className="flex flex-col justify-start ml-4 mt-8 mb-12 gap-3">
              <div className="flex space-x-2" data-aos="fade-left">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431L24 9.763l-6 5.847L19.336 24 12 20.019 4.664 24 6 15.61 0 9.763l8.332-1.745z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431L24 9.763l-6 5.847L19.336 24 12 20.019 4.664 24 6 15.61 0 9.763l8.332-1.745z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431L24 9.763l-6 5.847L19.336 24 12 20.019 4.664 24 6 15.61 0 9.763l8.332-1.745z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431L24 9.763l-6 5.847L19.336 24 12 20.019 4.664 24 6 15.61 0 9.763l8.332-1.745z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431L24 9.763l-6 5.847L19.336 24 12 20.019 4.664 24 6 15.61 0 9.763l8.332-1.745z" />
                </svg>
              </div>
              <div data-aos="fade-left">
                <p className="text-lg dark:text-white ">
                  4.9/5
                  <span className="text-gray-400"> - from 658 reviews</span>
                </p>
              </div>
            </div>
          </div>
          <div className="block  col-span-6 lg:absolute xl:-right-60 right-0 bottom-0 -z-1">
            <Image
              src="/images/hero/cabinet.jpg"
              alt="heroimage"
              width={800}
              height={0}
              style={{ width: "100%", height: "calc(100%-80px)" }}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
