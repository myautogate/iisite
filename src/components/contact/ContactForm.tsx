import React from 'react';
import { Send } from 'lucide-react';
import PropertyTypeSelect from './PropertyTypeSelect';
import AccessPointsSelect from './AccessPointsSelect';
import Captcha from './Captcha';
import { validateEmail, validatePhone } from '../../utils/validation';

interface ContactFormProps {
  onSubmit?: () => void;
}

interface FormErrors {
  email?: string;
  phone?: string;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = React.useState({
    propertyType: '',
    accessPoints: '',
    email: '',
    phone: '',
    details: ''
  });

  const [errors, setErrors] = React.useState<FormErrors>({});

  const validateField = (name: string, value: string) => {
    if (name === 'email') {
      const result = validateEmail(value);
      if (!result.isValid) {
        setErrors(prev => ({ ...prev, email: result.error }));
      } else {
        setErrors(prev => ({ ...prev, email: undefined }));
      }
    } else if (name === 'phone') {
      const result = validatePhone(value);
      if (!result.isValid) {
        setErrors(prev => ({ ...prev, phone: result.error }));
      } else {
        setErrors(prev => ({ ...prev, phone: undefined }));
        // Update with formatted phone number
        setFormData(prev => ({ ...prev, phone: result.value }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submission
    validateField('email', formData.email);
    validateField('phone', formData.phone);

    // Only submit if there are no errors
    if (!errors.email && !errors.phone) {
      console.log('Form submitted:', formData);
      onSubmit?.();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PropertyTypeSelect value={formData.propertyType} onChange={handleChange} />
      <AccessPointsSelect value={formData.accessPoints} onChange={handleChange} />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          placeholder="Please provide any relevant information about your property..."
          value={formData.details}
          onChange={handleChange}
        />
      </div>

      <Captcha />

      <button
        type="submit"
        className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        Submit Request
      </button>
    </form>
  );
}