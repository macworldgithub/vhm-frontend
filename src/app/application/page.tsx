"use client";

import React from "react";

export default function Application() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Application Form
        </h1>
        <p className="text-gray-600 text-center mb-6">
          This is a placeholder for the application form. Replace with actual form fields.
        </p>
        {/* Add form fields here */}
      </div>
    </section>
  );
}
