import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Dave White',
    role: 'Founder',
    description: 'Innovator in automatic gates and access control with over 20 years of experience through AutoGate Electric.',
  },
  {
    name: 'Matt',
    role: 'Lead Developer',
    description: 'Instrumental in bringing the latest version of Invisible Intercom™ to life with purpose-built design and methodology.',
  },
];

export default function TeamSection() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Our Team</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600 font-medium mb-3">{member.role}</p>
            <p className="text-gray-700">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}