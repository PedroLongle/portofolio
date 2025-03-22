"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactoFormValues, schema } from "./schema";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/ui/form-input";
import { Spinner } from "@/components/ui/spinner";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  
  const form = useForm<ContactoFormValues>({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });
  
  const onSubmit = async (data: ContactoFormValues) => {
    try {
      setIsLoading(true);
      console.log("submitted data: ", data);
      // In a real application, you would send the data to your API here
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form and show success message
      form.reset();
      setIsSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {isSuccess && (
        <div className="rounded-lg bg-green-100 p-4 mb-6 text-green-700 border border-green-200">
          Thank you for your message! I&apos;ll get back to you soon.
        </div>
      )}
      
      <Form 
        form={form} 
        onSubmit={onSubmit} 
        className="space-y-6"
      >
        <FormInput
          name="name"
          label="Name"
          placeholder="Your name"
        />
        
        <FormInput
          name="email"
          label="Email"
          type="email"
          placeholder="your.email@example.com"
        />
        
        <FormInput
          name="message"
          label="Message"
          multiline
          rows={5}
          placeholder="How can I help you?"
        />
        
        <div>
          <button
              type="submit"
              disabled={isLoading}
              className={"btn btn-primary w-full py-3 rounded-lg"}
          >
              Send Message
              {isLoading && <Spinner />}
            </button>
        </div>
      </Form>
    </div>
  );
} 