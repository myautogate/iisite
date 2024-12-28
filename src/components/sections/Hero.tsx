import React from 'react';
import { Link } from 'react-router-dom';
import RotatingWords from '../ui/RotatingWords';

const rotatingWords = ['simple', 'easy', 'reliable', 'low cost', 'convenient'];

export default function Hero() {
  return (
    <section className="pt-24 pb-12 px-4 text-center bg-white">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">
          <RotatingWords 
            words={rotatingWords} 
            className="text-blue-600"
          /> 
          Visitor Access Control
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Transform any gate or door into a remotely controlled entry point with a low cost io, QR code and phone number.
          No app required (even tho we have one coming soon...)
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
            Get Started
          </button>
          <Link 
            to="/system" 
            className="border border-black px-8 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}