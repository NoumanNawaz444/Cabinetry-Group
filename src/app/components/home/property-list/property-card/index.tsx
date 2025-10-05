import Image from "next/image";
import React from "react";
import Link from "next/link";
import "../../../../style/index.css";
import { ServiceData } from "@/app/types/property/propertyData";

interface PropertyCardProps {
  property: ServiceData;
  viewMode?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, viewMode }) => {

  return (
    <div
      key={property.id}
      className={`bg-white shadow-property dark:bg-darklight rounded-lg overflow-hidden sm:h-[450px]`}
      data-aos="fade-up"
    >
      <Link href={`/properties/properties-list/${property.slug}`} className={`group ${viewMode == "list" && 'flex'}`}>
        <div className={`relative ${viewMode == "list" && 'w-[30%]'}`}>
          <div className={`imageContainer h-[250px] w-full ${viewMode == "list" && 'h-full md:h-52'}`}>
            <Image
              src={property?.service_img}
              alt={`Image of ${property.service_title}`}
              width={400}
              height={250}
              className="w-full h-full object-cover group-hover:scale-125 duration-500"
            />
          </div>
          {/* <p className="absolute top-[10px] left-[10px] py-1 px-4 bg-white rounded-md text-primary items-center">
            {property.service_title}
          </p> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[10px] right-[10px] bg-white p-2 rounded-lg"
            viewBox="0 0 24 24"
            width="38"
            height="38"
            fill="#2F73F2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <div className={`p-5 sm:p-8 dark:text-white text-opacity-50 ${viewMode == "list" && 'w-[70%] flex flex-col justify-center'}`}>

          <div className="flex flex-col gap-1 border-b border-border border-black dark:border-white mb-6">

            <div className="mb-8">
              <p className=" text-black dark:text-white font-extrabold text-2xl">
                {property.service_title}
              </p>
            </div>
            <button className="px-6 py-2 uppercase bg-primary text-white rounded-md hover:bg-blue-700 transition duration-300">
              View It now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
