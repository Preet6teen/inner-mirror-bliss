import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonBaseProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  target?: string;
  rel?: string;
}

const baseStyles =
  "inline-flex items-center justify-center font-sans font-bold tracking-[0.04em] rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

const sizeStyles = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base shadow-md",
};

/**
 * 5. PrimaryButton - Primary Spiritual Violet (#552878)
 */
export function PrimaryButton({
  children,
  className,
  href,
  onClick,
  disabled,
  type = "button",
  size = "md",
  target,
  rel,
  ...props
}: ButtonBaseProps & React.HTMLAttributes<HTMLElement>) {
  const classes = cn(
    baseStyles,
    sizeStyles[size],
    "bg-primary text-white hover:bg-primary-hover hover:shadow-cardHover border border-primary/20",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * 6. SecondaryButton - Lavender Outline / Soft Plum
 */
export function SecondaryButton({
  children,
  className,
  href,
  onClick,
  disabled,
  type = "button",
  size = "md",
  target,
  rel,
  ...props
}: ButtonBaseProps & React.HTMLAttributes<HTMLElement>) {
  const classes = cn(
    baseStyles,
    sizeStyles[size],
    "bg-white/80 hover:bg-lavender-light text-primary border border-lavender hover:border-primary/30 shadow-soft",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * 7. GoldButton - Champagne Gold (#D6B36A)
 */
export function GoldButton({
  children,
  className,
  href,
  onClick,
  disabled,
  type = "button",
  size = "md",
  target,
  rel,
  ...props
}: ButtonBaseProps & React.HTMLAttributes<HTMLElement>) {
  const classes = cn(
    baseStyles,
    sizeStyles[size],
    "bg-gradient-to-r from-[#D6B36A] via-[#E5C682] to-[#C39E52] text-plum hover:brightness-105 hover:shadow-gold shadow-sm font-extrabold border border-gold/40",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * 8. IconButton - Accessible circular or rounded button for icons
 */
export interface IconButtonProps extends ButtonBaseProps {
  icon: React.ReactNode;
  "aria-label": string;
  variant?: "primary" | "secondary" | "gold" | "ghost";
}

export function IconButton({
  icon,
  className,
  href,
  onClick,
  disabled,
  type = "button",
  variant = "secondary",
  size = "md",
  "aria-label": ariaLabel,
  ...props
}: IconButtonProps & React.HTMLAttributes<HTMLElement>) {
  const iconSizeStyles = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
  };

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    secondary: "bg-white text-plum border border-border hover:bg-lavender-light",
    gold: "bg-gold text-plum hover:bg-gold-hover",
    ghost: "bg-transparent text-body hover:bg-lavender-light/50",
  };

  const classes = cn(
    "inline-flex items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-50",
    iconSizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {icon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      {...props}
    >
      {icon}
    </button>
  );
}
