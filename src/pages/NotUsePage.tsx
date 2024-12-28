import React from 'react';
import { XCircle, AlertTriangle } from 'lucide-react';

interface ReasonProps {
  title: string;
  description: string;
}

function Reason({ title, description }: ReasonProps) {
  return (
    <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm">
      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function NotUsePage() {
  const seriousReasons = [
    {
      title: "No Power Available",
      description: "Your location has absolutely no access to any form of electrical power, including solar options."
    },
    {
      title: "No Cellular Coverage",
      description: "Your property is in a complete cellular dead zone with no service from any carrier."
    },
    {
      title: "Underwater Installation",
      description: "You're trying to secure an underwater facility (we're working on our submarine version)."
    }
  ];

  const wittyReasons = [
    {
      title: "You're a Carrier Pigeon Enthusiast",
      description: "You firmly believe that carrier pigeons are the future of communication and refuse to accept any alternatives."
    },
    {
      title: "You Love Long Lines",
      description: "You genuinely enjoy watching visitors wait in long queues and consider it a form of entertainment."
    },
    {
      title: "You're a Time Traveler from 1850",
      description: "You've just arrived from the past and are still getting used to the concept of electricity."
    },
    {
      title: "You're a Professional Yodeler",
      description: "Your preferred method of visitor announcement is yodeling from the rooftop."
    }
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h1 className="text-3xl font-bold text-red-900">Do Not Use Invisible Intercom If...</h1>
          </div>
          <p className="text-red-700">
            While we believe in our product, we also believe in transparency. Here are some situations
            where Invisible Intercom might not be the right choice for you.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Serious Considerations</h2>
          <div className="space-y-4">
            {seriousReasons.map((reason) => (
              <Reason key={reason.title} {...reason} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Lighter Notes</h2>
          <div className="space-y-4">
            {wittyReasons.map((reason) => (
              <Reason key={reason.title} {...reason} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}