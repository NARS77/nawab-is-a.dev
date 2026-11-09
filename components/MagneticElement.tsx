import React from "react";

interface ElementProps {
  children: React.ReactNode;
  className?: string;
  pullFactor?: number;
  as?: React.ElementType;
}

export default function MagneticElement({ children, className = "", as: Component = "div" }: ElementProps) {
  return <Component className={`inline-block ${className}`}>{children}</Component>;
}
