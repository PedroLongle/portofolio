"use client";

import { ReactNode } from "react";
import NextLink from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

// Define link variants using class-variance-authority
const linkVariants = cva(
  "transition-all duration-200 inline-flex items-center whitespace-normal",
  {
    variants: {
      variant: {
        default: "text-foreground hover:text-primary hover:underline",
        subtle: "text-muted-foreground hover:text-primary hover:underline",
        nav: "text-foreground hover:text-primary",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      weight: "normal",
    },
  }
);

export interface LinkProps extends VariantProps<typeof linkVariants> {
  href: string;
  children: ReactNode;
  className?: string;
  isExternal?: boolean;
  target?: string;
  rel?: string;
}

export default function Link({
  href,
  children,
  className,
  variant,
  weight,
  isExternal = false,
  target,
  rel,
  ...props
}: LinkProps) {
  // Set appropriate target and rel attributes based on:
  // 1. If explicitly provided via props, use those values
  // 2. If isExternal=true and attributes aren't provided, set defaults for external links
  // 3. Otherwise, leave as undefined for internal links
  const targetAttr = target || (isExternal ? "_blank" : undefined);
  const relAttr = rel || (isExternal ? "noopener noreferrer" : undefined);

  return (
    <NextLink
      href={href}
      className={linkVariants({ variant, weight, className })}
      target={targetAttr}
      rel={relAttr}
      {...props}
    >
      <span className="inline-flex items-center gap-1">
        <span>{children}</span>
        {isExternal && (
          <svg
            className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </span>
    </NextLink>
  );
} 