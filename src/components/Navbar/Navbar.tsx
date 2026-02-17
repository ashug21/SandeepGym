"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo3.png"
            alt="Gym Logo"
            width={180}
            height={60}
            priority
          />
        </Link>

        <nav className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/membership">Gallery</Link>
          <Link href="/pricing">Enquiry</Link>

          <Link href="/contact">Client Transformations</Link>
        </nav>

        <div className={styles.actions}></div>
      </div>
    </header>
  );
}
