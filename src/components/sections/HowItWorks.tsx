import React from 'react';

const steps = [
  {
    number: 1,
    title: "Scan QR Code",
    description: "Visitor scans the QR code at the entry point and calls the number"
  },
  {
    number: 2,
    title: "Connect",
    description: "Automatic connection to property owners phone"
  },
  {
    number: 3,
    title: "Gain Access",
    description: "Owner verifies and grants access remotely"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}