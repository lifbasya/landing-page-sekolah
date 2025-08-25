"use client";
import React from "react";
import { smoothScroll } from "@/app/smoothScroll";

export default function ScrollLink({ to, children, className }) {
  const handleClick = (e) => {
    e.preventDefault();
    smoothScroll(to, 100, 800); // offset 100px, animasi 800ms
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
