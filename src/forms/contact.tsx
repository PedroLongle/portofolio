"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactFormValues, useValidationSchema } from "./schema";
import { Form } from "@/components/form";
import FormInput from "@/components/form-input";
import { Spinner } from "@/components/spinner";
import { sendMail } from "@/_email";
import Image from "next/image";
import { useTranslations  } from "@/i18n/client";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const formSuccess = useTranslations('formSuccess');
  
  const t = useTranslations('contact.form');
  const schema = useValidationSchema();

  const form = useForm<ContactFormValues>({
    resolver: yupResolver(schema),
    mode: "onSubmit"
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsLoading(true);

      const response = await sendMail({
        email: data.email,
        name: data.name,
        message: data.message,
      });

      if (response?.messageId) {
        console.log("Contact Form Submitted Successfully.");
        form.reset();
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if(isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto relative">
        <button 
          onClick={() => setIsSuccess(false)} 
          className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          aria-label={t('close')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <Image 
            src="/illustrations/mail-sent.svg"
            alt={formSuccess('title')} 
            width={200} 
            height={400}
            style={{ width: '40%', height: 'auto', marginTop: '3.5rem' }}
            priority
          />
        <div className="flex flex-col items-center justify-center gap-2 mt-12 w-full">
          <h1 className="text-2xl font-bold">{formSuccess('title')}</h1>
          <p className="text-sm text-muted-foreground">{formSuccess('subtitle')}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-xl mx-auto">
      <Form 
        form={form} 
        onSubmit={onSubmit} 
        className="space-y-6"
      >
        <FormInput
          name="name"
          label={t('name')}
          placeholder={t('name')}
        />
        
        <FormInput
          name="email"
          label={t('email')}
          type="email"
          placeholder={t('email')}
        />
        
        <FormInput
          name="message"
          label={t('message')}
          multiline
          rows={5}
          placeholder={t('message')}
        />
        
        <div>
          <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary rounded-lg text-xs md:text-base w-full"
          >
              {isLoading ? t('sending') : t('send')}
              {isLoading && <Spinner />}
            </button>
        </div>
      </Form>
    </div>
  );
} 