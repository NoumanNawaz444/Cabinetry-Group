"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type Door = {
  collection: string;
  finish: string;
  texture: string;
  color: string;
  customColor: string;
  height: string;
  width: string;
  thickness: string;
  quantity: string;
  glassType: string;
  extras: string;
};

type FormData = {
  customerName: string;
  contactPerson: string;
  address: string;
  phone: string;
  email: string;
  orderDate: string;
  notes: string;
  doors: Door[];
};

export default function VinylProOrderForm() {
  const [formData, setFormData] = useState<FormData>({
    customerName: "",
    contactPerson: "",
    address: "",
    phone: "",
    email: "",
    orderDate: "",
    notes: "",
    doors: [
      {
        collection: "",
        finish: "",
        texture: "",
        color: "",
        customColor: "",
        height: "",
        width: "",
        thickness: "",
        quantity: "",
        glassType: "",
        extras: "",
      },
    ],
  });

  const collections = [
    "C1 Lorne",
    "C1 Montreal",
    "C2 Edmonton",
    "C2 Kingston Finger Pull",
    "C3 Nelson",
    "C3 Duncan",
    "C4 Cambridge",
    "C4 Somerton",
    "C5 Toronto",
    "C5 Vernon",
    "Other",
  ];

  const finishes = ["Vinyl", "Raw (Paint Ready)"];

  const textures = [
    "Satin",
    "Matt",
    "Supermatt",
    "Gloss",
    "Texture",
    "Grain Texture",
  ];

  const colors = [
    "White Lux",
    "Clamshell",
    "Branco",
    "Ink",
    "Linea Wood Dark",
    "Drafted White",
    "Denim",
    "Vongole",
    "Alabastino",
    "Oak",
    "Walnut",
    "Other",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDoorChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedDoors = [...formData.doors];
    updatedDoors[index] = { ...updatedDoors[index], [name]: value };
    setFormData({ ...formData, doors: updatedDoors });
  };

  const addDoor = () => {
    setFormData({
      ...formData,
      doors: [
        ...formData.doors,
        {
          collection: "",
          finish: "",
          texture: "",
          color: "",
          customColor: "",
          height: "",
          width: "",
          thickness: "",
          quantity: "",
          glassType: "",
          extras: "",
        },
      ],
    });
  };

  const removeDoor = (index: number) => {
    const updatedDoors = formData.doors.filter((_, i) => i !== index);
    setFormData({ ...formData, doors: updatedDoors });
  };

  const [btnText, setBtnText] = useState("Submit Order");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBtnText("Submitting...");

    try {
      const response = await fetch("/api/vinylcontact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Order submitted successfully!");
        setFormData({
          customerName: "",
          contactPerson: "",
          address: "",
          phone: "",
          email: "",
          orderDate: "",
          notes: "",
          doors: [
            {
              collection: "",
              finish: "",
              texture: "",
              color: "",
              customColor: "",
              height: "",
              width: "",
              thickness: "",
              quantity: "",
              glassType: "",
              extras: "",
            },
          ],
        });
      } else {
        toast.error("Error submitting order.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error.");
    }

    setBtnText("Submit Order");
  };

  return (
    <div className="py-20">
      <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen py-12 px-4  border-2 border-black/10 ">
        <Toaster position="top-center" />
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10 border-2 border-black/100">
          <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 ">
            VinylPro Doors – Order Form
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Customer Info */}
            <div>
              <h2 className="text-2xl font-extrabold mb-4 text-gray-950">
                Customer Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="customerName" value={formData.customerName} onChange={handleChange} placeholder="Customer / Company Name" required className={inputClass} />
                <input name="contactPerson" value={formData.contactPerson} onChange={handleChange} placeholder="Contact Person" className={inputClass} />
                <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" className={inputClass} />
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className={inputClass} />
                <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required className={inputClass} />
                <input name="orderDate" type="date" value={formData.orderDate} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            {/* Door Details */}
            <div>
              <h2 className="text-2xl font-extrabold mb-4 text-gray-950">Door Details</h2>
              {formData.doors.map((door, index) => (
                <div key={index} className="border border-blue-100 rounded-2xl p-6 mb-6 bg-blue-50/40">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Collection */}
                    <div>
                      <label className="text-gray-950 font-extrabold">Profile Collection</label>
                      <select name="collection" value={door.collection} onChange={(e) => handleDoorChange(index, e)} className={inputClass}>
                        <option value="">Select Collection</option>
                        {collections.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <div className="h-0.5"></div>
                    </div>

                    {/* Finish */}
                    <div>
                      <label className="text-gray-950 font-extrabold">Finish Type</label>
                      <select name="finish" value={door.finish} onChange={(e) => handleDoorChange(index, e)} className={inputClass}>
                        <option value="">Select Finish</option>
                        {finishes.map((f) => (
                          <option key={f} value={f}>{f}</option>
                        ))}
                      </select>
                    </div>

                    {/* Texture */}
                    <div>
                      <label className="text-gray-950 font-extrabold">Surface Texture</label>
                      <select name="texture" value={door.texture} onChange={(e) => handleDoorChange(index, e)} className={inputClass}>
                        <option value="">Select Texture</option>
                        {textures.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    {/* Color */}
                    <div>
                      <label className="text-gray-950 font-extrabold">Colour / Decor</label>
                      <select name="color" value={door.color} onChange={(e) => handleDoorChange(index, e)} className={inputClass}>
                        <option value="">Select Colour</option>
                        {colors.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>

                      {/* Non-jumpy custom field */}
                      <div className={`transition-all duration-300 overflow-hidden ${door.color === "Other" ? "max-h-20 mt-2" : "max-h-0"}`}>
                        <input
                          name="customColor"
                          value={door.customColor}
                          onChange={(e) => handleDoorChange(index, e)}
                          placeholder="Enter custom colour"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Dimensions */}
                    <input name="height" value={door.height} onChange={(e) => handleDoorChange(index, e)} placeholder="Height (mm)" className={inputClass} />
                    <input name="width" value={door.width} onChange={(e) => handleDoorChange(index, e)} placeholder="Width (mm)" className={inputClass} />
                    <input name="thickness" value={door.thickness} onChange={(e) => handleDoorChange(index, e)} placeholder="Thickness (mm)" className={inputClass} />
                    <input name="quantity" value={door.quantity} onChange={(e) => handleDoorChange(index, e)} placeholder="Quantity" className={inputClass} />
                    <input name="glassType" value={door.glassType} onChange={(e) => handleDoorChange(index, e)} placeholder="Glass Type (if any)" className={inputClass} />
                    <input name="extras" value={door.extras} onChange={(e) => handleDoorChange(index, e)} placeholder="Hardware / Extras" className={inputClass} />
                  </div>

                  {formData.doors.length > 1 && (
                    <button type="button" onClick={() => removeDoor(index)} className="text-white font-bold uppercase bg-red-600 rounded-full mt-3 text-sm py-2 px-4 hover:scale-105 transition-all cursor-pointer">
                      Remove Door
                    </button>
                  )}
                </div>
              ))}
              <button type="button" onClick={addDoor} className="text-white font-bold uppercase bg-green-600 rounded-full mt-3 text-sm py-2 px-4 hover:scale-105 transition-all cursor-pointer">
                + Add Another Door
              </button>
            </div>

            {/* Notes */}
            <div>
              <h2 className="text-2xl font-extrabold mb-4 text-gray-950">Additional Information</h2>
              <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Enter any additional notes or instructions" rows={4} className="w-full border border-gray-100 rounded-2xl p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"></textarea>
            </div>

            {/* Submit */}
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold text-lg hover:bg-blue-500 transition-all shadow-md">
              {btnText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const inputClass =
  "w-full border border-gray-100 rounded-2xl p-3  focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white placeholder-gray-300 text-gray-950";
