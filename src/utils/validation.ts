import { z } from 'zod';

// Email validation with detailed error message
export const emailSchema = z
  .string()
  .email('Please enter a valid email address (e.g., name@example.com)');

// US phone validation (formats: XXX-XXX-XXXX, (XXX) XXX-XXXX, or XXXXXXXXXX)
export const phoneSchema = z
  .string()
  .regex(
    /^(\+1|1)?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    'Please enter a valid US phone number'
  )
  .transform((val) => {
    // Normalize to XXX-XXX-XXXX format
    const digits = val.replace(/\D/g, '').slice(-10);
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  });

// Validate and format email
export const validateEmail = (email: string) => {
  const result = emailSchema.safeParse(email);
  return {
    isValid: result.success,
    error: result.success ? null : result.error.errors[0].message,
    value: result.success ? result.data : null
  };
};

// Validate and format phone
export const validatePhone = (phone: string) => {
  const result = phoneSchema.safeParse(phone);
  return {
    isValid: result.success,
    error: result.success ? null : result.error.errors[0].message,
    value: result.success ? result.data : null
  };
};