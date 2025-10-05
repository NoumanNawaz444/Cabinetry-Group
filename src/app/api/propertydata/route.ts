
import { ServiceData } from "@/app/types/property/propertyData";
import { NextResponse } from "next/server";

const property: ServiceData[] = [
  {
    id: '1',
    service_img: "/images/properties/prop-1.jpg",
    service_title: "Flat Pack Cabinetry",
    category: "cabinetry",
    category_img: "/images/property_option/apartment.svg",
    description: "Durable and stylish flat pack cabinetry, designed for easy assembly and a seamless finish.",
    slug: "flat-pack-cabinetry"
  },
  {
    id: '2',
    service_img: "/images/properties/prop-2.jpg",
    service_title: "Edging Service",
    category: "edging",
    category_img: "/images/property_option/apartment.svg",
    description: "Professional edging solutions including beveled edges, ensuring precision and a polished look.",
    slug: "edging-service"
  },
  {
    id: '3',
    service_img: "/images/properties/prop-3.jpg",
    service_title: "Vinyl Thermolaminated Doors & Wall Panels",
    category: "vinyl-doors",
    category_img: "/images/property_option/apartment.svg",
    description: "Premium vinyl thermolaminated doors and wall panels offering durability, elegance, and versatility.",
    slug: "vinyl-thermolaminated-doors"
  },
  {
    id: '4',
    service_img: "/images/properties/prop-4.jpg",
    service_title: "Aluminium Glass Doors",
    category: "aluminium",
    category_img: "/images/property_option/apartment.svg",
    description: "High-quality aluminium glass doors designed to combine strength, style, and functionality.",
    slug: "aluminium-glass-doors"
  },
  {
    id: '5',
    service_img: "/images/properties/prop-5.jpg",
    service_title: "Aluminium Door Profiles",
    category: "aluminium",
    category_img: "/images/property_option/apartment.svg",
    description: "Custom aluminium door profiles tailored for modern interiors and long-lasting performance.",
    slug: "aluminium-door-profiles"
  },

  
];

export async function GET() {
  return NextResponse.json(property);
}
