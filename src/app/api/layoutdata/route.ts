import { NextResponse } from "next/server";

const headerData = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#services",
    submenu: [
      { label: "Services List", href: "#services" },
      { label: "Services Details", href: "/properties/properties-list/flat-pack-cabinetry" },
    ],
  },
  {
    label: "Gallery",
    href: "/Gallery",
  },
  { label: "Contact", href: "/contact" },
];

export const GET = async () => {
  return NextResponse.json({
    headerData
  });
};

