import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  variant?: 'sprout' | 'sage' | 'forest' | 'outline' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
  children: React.ReactNode;
}

export default function Badge({
  variant = 'sprout',
  size = 'md',
  className,
  children,
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium uppercase tracking-wider rounded-full select-none';

  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
  };

  const variantStyles = {
    sprout: 'bg-sprout/60 text-forest border border-sprout',
    sage: 'bg-sage/15 text-forest border border-sage/30',
    forest: 'bg-forest text-white',
    outline: 'border border-border text-charcoal bg-white/70',
    neutral: 'bg-charcoal/5 text-charcoal border border-charcoal/10',
  };

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {children}
    </span>
  );
}
