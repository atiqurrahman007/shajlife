// components/Carousel.jsx
"use client"
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

export default function Carousel  ({ children }) {
  return (
    <div>
      <ResponsiveCarousel>
          {children}
      </ResponsiveCarousel>
    </div>
  );
}


