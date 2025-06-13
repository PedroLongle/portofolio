import * as yup from "yup";
import { useTranslations } from "@/i18n/client";

// Create a proper custom hook that follows React naming conventions
export function useValidationSchema() {
  const t = useTranslations("validations");
  
  return yup.object({
    name: yup.string()
      .min(2, t('minLength', { 0: 2 }))
      .required(t('required')),
    email: yup.string()
      .email(t('email'))
      .required(t('required')),
    phone: yup.string()
      .test('phone-validation', t('phone'), function(value) {
        if (!value) return false;
        // Remove all non-digit characters except the leading +
        const cleaned = value.replace(/[^\d+]/g, '');
        // Check if it's a valid international phone number
        const phoneRegex = /^\+?\d{7,15}$/;
        return phoneRegex.test(cleaned);
      })
      .required(t('required')),
    message: yup.string()
      .min(10, t('minLength', { 0: 10 }))
      .required(t('required')),
  });
}

// Define the shape of the form values
export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
  