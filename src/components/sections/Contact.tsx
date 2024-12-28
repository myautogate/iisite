import React from 'react';
import ContactForm from '../contact/ContactForm';
import Modal from '../ui/Modal';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Transform your property access control today with Invisible Intercom
        </p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Contact Us
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Contact Invisible Intercom"
        >
          <ContactForm onSubmit={() => setIsModalOpen(false)} />
        </Modal>
      </div>
    </section>
  );
}