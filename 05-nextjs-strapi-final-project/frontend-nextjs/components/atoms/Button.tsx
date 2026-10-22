'use client';

import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'secondary';
  active?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

/**
 * Atom: Button
 * Komponen tombol atomik reusable yang digunakan pada ArticleCard dan ArticleList
 */
export default function Button({
  label,
  onClick,
  variant = 'primary',
  active = false,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const activeClass = active ? 'btn--active' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${activeClass} ${className}`.trim()}
    >
      {label}
    </button>
  );
}
