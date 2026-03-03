"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = ({ isDark }) => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "252fd7d9-dbad-4a76-854c-233dbce120f0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setResult("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      setResult("⚠️ Network error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="w-full px-[12%] py-16 scroll-mt-24 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none transition-all duration-500"
    >
      <h4 className="text-center mb-2 text-lg font-ovo tracking-wide">
        Connect with me
      </h4>

      <h2 className="text-center text-4xl sm:text-5xl font-ovo font-semibold">
        Get in Touch
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-gray-300 font-ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, feel free to send a message.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-white/70 bg-white dark:bg-darkHover/30 outline-none focus:ring-2 focus:ring-black/40 transition"
          />

          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-white/70 bg-white dark:bg-darkHover/30 outline-none focus:ring-2 focus:ring-black/40 transition"
          />
        </div>

        <textarea
          name="message"
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 rounded-lg border border-gray-300 dark:border-white/70 bg-white dark:bg-darkHover/30 outline-none focus:ring-2 focus:ring-black/40 transition"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="py-3 px-8 flex items-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-transparent dark:border dark:border-white dark:hover:bg-darkHover"
        >
          {loading ? "Sending..." : "Submit Now"}

          <Image
            src={isDark ? assets.right_arrow_white : assets.right_arrow}
            alt="arrow"
            className="w-4"
          />
        </button>

        {result && (
          <p className="text-center mt-4 text-sm font-medium animate-fadeIn">
            {result}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;