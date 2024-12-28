import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import UseCaseCard from '../components/foryou/UseCaseCard';
import NotForYouCard from '../components/foryou/NotForYouCard';
import { useCases } from '../data/useCases';
import { notForYouCases } from '../data/notForYouCases';

export default function ForYouPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <h1 className="text-3xl font-bold text-green-900">Is Invisible Intercom For You?</h1>
          </div>
          <p className="text-green-700">
            Find out if Invisible Intercom is the perfect solution for your needs. Here are common situations
            where our system excels.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Perfect For Your Needs If...</h2>
          <div className="space-y-4">
            {useCases.map((useCase) => (
              <UseCaseCard key={useCase.title} {...useCase} />
            ))}
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h2 className="text-2xl font-bold text-red-900">Not For You If...</h2>
          </div>
          <p className="text-red-700">
            While we believe in our product, we also believe in transparency. Here are some situations
            where Invisible Intercom might not be the right choice.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6">Serious Considerations</h3>
          <div className="space-y-4">
            {notForYouCases.serious.map((reason) => (
              <NotForYouCard key={reason.title} {...reason} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6">Lighter Notes</h3>
          <div className="space-y-4">
            {notForYouCases.witty.map((reason) => (
              <NotForYouCard key={reason.title} {...reason} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}