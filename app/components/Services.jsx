import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="services">
      <h4 className="text-center mb-2 text-lg font-ovo">What I Offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
       I build modern, scalable web applications using the MERN stack — from intuitive frontends to secure backends.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10 sm">
        {
            serviceData.map(({icon, title, description, link}, index) => (
              <div key={index} 
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500">
                <Image src={icon} className="w-10" alt="" />
                <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                <p className="text-sm text-gray-600 leading-5">{description}</p>
                <a href={link} className="flex items-center gap-2 text-sm mt-5">
                  Read more <Image src={assets.right_arrow} className="w-4" alt="" />
                </a>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default Services;
