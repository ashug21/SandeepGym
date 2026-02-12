"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const slides = [
  {
    id: 1,
    src: "/Banner/img1.jpeg",
    alt: "Strength training gym",
    title: "Build Strength. Build Confidence.",
    subtitle: "Personal training • Group classes • 24/7 access",
    cta: { text: "Book Free Session", href: "/contact" },
  },
  {
    id: 2,
    src: "/Banner/img2.png",
    alt: "High intensity workout",
    title: "Push Your Limits",
    subtitle: "Performance-focused coaching and equipment",
    cta: { text: "See Programs", href: "/membership" },
  },
  {
    id: 3,
    src: "/Banner/img3.png",
    alt: "Community training",
    title: "Train Together, Grow Together",
    subtitle: "Community classes, nutrition support, real results",
    cta: { text: "Join Now", href: "/contact" },
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef(null);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, []);

  function startAutoplay() {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
  }

  function stopAutoplay() {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }

  function handleNext() {
    setIndex((prev) => (prev + 1) % slides.length);
    startAutoplay();
  }

  function handlePrev() {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoplay();
  }

  return (
    <section className={styles.hero}>
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`${styles.slide} ${i === index ? styles.active : ""}`}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={styles.image}
            />
          </div>

          <div className={styles.overlay} />

          <div className={styles.content}>
            <h1 className={styles.title}>{s.title}</h1>
            <p className={styles.subtitle}>{s.subtitle}</p>
            <div className={styles.ctaRow}>
              <Link href={s.cta.href} className={styles.primaryBtn}>
                {s.cta.text}
              </Link>
              <Link href="/membership" className={styles.ghostBtn}>
                View Membership
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={handlePrev}
        aria-label="Previous Slide"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={handleNext}
        aria-label="Next Slide"
      >
        ›
      </button>
    </section>
  );
}
