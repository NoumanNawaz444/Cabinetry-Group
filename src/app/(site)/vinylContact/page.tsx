
import React from "react";
import { Metadata } from "next";
import HeroSub from "@/app/components/shared/hero-sub";
import ContactInfo from "@/app/components/contact/contact-info";
import ContactForm from "@/app/components/contact/form";
import Location from "@/app/components/contact/office-location";
import VinylProOrderForm from "@/app/components/VinyproContact";
export const metadata: Metadata = {
  title: "Contact | Cabinatry Group",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Build your perfect door, your way."
        description="Submit your custom VinylPro Doors order with all the details — size, finish, texture, and design — and we’ll craft it to perfection."
        breadcrumbLinks={breadcrumbLinks}
      />
      {/* <ContactInfo /> */}
      <VinylProOrderForm />
      <Location />
    </>
  );
};

export default page;
