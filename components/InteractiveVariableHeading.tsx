import React from "react";

interface HeadingProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "span" | "div";
  className?: string;
  style?: React.CSSProperties;
  radius?: number;
  baseWeight?: number;
  activeWeight?: number;
}

export default function InteractiveVariableHeading({ text, as: Component = "h2", className, style }: HeadingProps) {
  return <Component className={className} style={style}>{text}</Component>;
}
