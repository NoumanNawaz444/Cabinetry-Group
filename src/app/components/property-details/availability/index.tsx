import React from 'react';
import Link from 'next/link';

export default function Availability() {
    return (
        <div className='bg-[#F0F6FA] dark:bg-[#111929] lg:py-24 py-16'>
            <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
                <p className='mb-[16px] text-[24px] sm:text-[36px] justify-center flex font-bold'>
                    Our Services
                </p>
                <p className='mb-10 sm:mb-3.75 text-base sm:text-xl text-gray justify-center flex'>
                    Explore our range of premium cabinetry services designed for every space.
                </p>

                <div className="overflow-x-auto">
                    <table className="w-full text-center text-sm sm:text-lg text-gray">
                        <thead>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <th className="py-2 sm:py-4 px-2 text-center">Service</th>
                                <th className="py-2 sm:py-4 px-2 text-center">Materials</th>
                                <th className="py-2 sm:py-4 px-2 text-center">Scope/Size</th>
                                <th className="py-2 sm:py-4 px-2 text-center">Duration</th>
                                <th className="py-2 sm:py-4 px-2 text-center">Availability</th>
                                <th className="py-2 sm:py-4 px-2 text-center">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Flat Pack Cabinetry</td>
                                <td className="py-2 sm:py-4 px-2">MDF, Plywood</td>
                                <td className="py-2 sm:py-4 px-2">Kitchens, Wardrobes, Offices</td>
                                <td className="py-2 sm:py-4 px-2">1–3 Days</td>
                                <td className="py-2 sm:py-4 px-2">Available</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/services/flat-pack-cabinetry" className='flex items-center justify-center hover:text-primary'>
                                        View More
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Edging Service</td>
                                
                                <td className="py-2 sm:py-4 px-2">Veneer, PVC, Acrylic</td>
                                <td className="py-2 sm:py-4 px-2">Custom Cabinets, Doors, Panels</td>
                                <td className="py-2 sm:py-4 px-2">Same Day – 2 Days</td>
                                <td className="py-2 sm:py-4 px-2">Available</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/services/edging-service" className='flex items-center justify-center hover:text-primary'>
                                        View More
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Vinyl & Thermolaminated Doors</td>
                                <td className="py-2 sm:py-4 px-2">Vinyl, MDF, Plywood</td>
                                <td className="py-2 sm:py-4 px-2">Kitchens, Wardrobes, Offices</td>
                                <td className="py-2 sm:py-4 px-2">2–5 Days</td>
                                <td className="py-2 sm:py-4 px-2">Available</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/services/vinyl-thermolaminated-doors" className='flex items-center justify-center hover:text-primary'>
                                        View More
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Aluminium Glass Doors</td>
                                
                                <td className="py-2 sm:py-4 px-2">Aluminium, Glass</td>
                                <td className="py-2 sm:py-4 px-2">Cabinet Doors, Wall Panels</td>
                                <td className="py-2 sm:py-4 px-2">3–6 Days</td>
                                <td className="py-2 sm:py-4 px-2">Available</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/services/aluminium-glass-doors" className='flex items-center justify-center hover:text-primary'>
                                        View More
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                            <tr className='border-b border-border dark:border-dark_border'>
                                <td className="py-2 sm:py-4 px-2">Aluminium Door Profiles</td>
                                
                                <td className="py-2 sm:py-4 px-2">Aluminium, Stainless Steel</td>
                                <td className="py-2 sm:py-4 px-2">Cabinet Doors, Panels</td>
                                <td className="py-2 sm:py-4 px-2">2–5 Days</td>
                                <td className="py-2 sm:py-4 px-2">Available</td>
                                <td className="py-2 sm:py-4 px-2">
                                    <Link href="/services/aluminium-door-profiles" className='flex items-center justify-center hover:text-primary'>
                                        View More
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
