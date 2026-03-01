"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = (isDark) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "252fd7d9-dbad-4a76-854c-233dbce120f0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };
  return (
    <div
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
      id="contact"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">
          <input
            name="name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white dark:border-white/90 dark:bg-darkHover/30"
            type="text"
            placeholder="Enter your name"
            required
          />
          <input
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-lg bg-white  dark:border-white/90 dark:bg-darkHover/30"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:border-white/90 dark:bg-darkHover/30"
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now
          <Image
            src={isDark ? assets.right_arrow : assets.right_arrow_white}
            alt=""
            className="w-4"
          />
        </button>

        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
