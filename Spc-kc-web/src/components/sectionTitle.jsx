import React from "react";

/**
 * SectionTitle - A standard section title component using Tailwind CSS.
 * @param {string} title - The main title text.
 * @param {string} [subtitle] - Optional subtitle or highlight text.
 * @param {string} [className] - Optional extra classes for the wrapper.
 */
export default function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div className={`text-center my-8 ${className}`}>
      {subtitle && (
        <div className="text-sm md:text-base font-semibold text-blue-700 uppercase tracking-widest mb-2">
          {subtitle}
        </div>
      )}
      <h1 className="text-2xl capitalize md:text-5xl font-bold text-gray-900 mb-2">
        {title}
      </h1>
      <div className="w-16 h-1 mx-auto bg-blue-600 rounded mb-2" />
    </div>
  );
}
