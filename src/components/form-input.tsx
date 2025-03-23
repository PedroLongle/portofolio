"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { XCircle } from "lucide-react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  name: string;
  multiline?: boolean;
  rows?: number;
}

export default function FormInput({
  label,
  name,
  multiline = false,
  rows = 5,
  ...props
}: FormInputProps) {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  const InputComponent = multiline ? "textarea" : "input";

  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <InputComponent
        id={name}
        {...register(name)}
        {...props}
        rows={multiline ? rows : undefined}
        className={`w-full px-4 py-3 rounded-lg border bg-zinc-800  ${
          error ? "border-red-500" : "border-none"
        } focus:outline-0  transition`}
      />
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-1 overflow-hidden"
          >
            <div className="flex items-center text-red-500 text-sm gap-1">
              <XCircle className="h-4 w-4 mr-1 flex-shrink-0" />
              <span>{error}.</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 