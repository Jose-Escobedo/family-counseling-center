'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';


  const handleMobileClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-[#0A2540] px-6 py-4 z-50 shadow-md flex justify-between items-center">
     
      {isHome ? (
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
          className="flex items-center cursor-pointer"
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/gstlogo.png?alt=media&token=3be8e5b0-504e-4ea4-8375-a0b17ad22973"
            alt="Golden Scales Family Therapy Logo"
            width={210}  
            height={70}  
            priority
          />
        </ScrollLink>
      ) : (
        <Link href="/" className="flex items-center">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/gstlogo.png?alt=media&token=3be8e5b0-504e-4ea4-8375-a0b17ad22973"
            alt="Golden Scales Family Therapy Logo"
            width={210}  
            height={70}  
            priority
          />
        </Link>
      )}

      {/* Desktop Menu */}
       <div className="hidden xl:flex space-x-10 text-lg font-semibold">
        <Link href="/about" className="hover:text-[var(--gold)]">About</Link>
        <Link href="/services" className="hover:text-[var(--gold)]">Services</Link>
        <Link href="/guidance" className="hover:text-[var(--gold)]">Guidance</Link>
        <Link href="/rates-insurance" className="hover:text-[var(--gold)]">Rates & Insurance</Link>
        <Link href="/contact" className="hover:text-[var(--gold)]">Contact</Link>
        <Link href="tel:+5551234567" className="hover:text-[var(--gold)]">(555) 123-4567</Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="xl:hidden focus:outline-none z-50"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
  <div
    className="
      absolute top-full left-0 w-full 
      bg-white/70 
      backdrop-blur-md 
      text-[#0A2540] 
      flex flex-col items-center space-y-6 py-6 
      xl:hidden shadow-lg border-t border-gray-200
    "
  >
    <Link href="/about" onClick={handleMobileClick}>About</Link>
    <Link href="/services" onClick={handleMobileClick}>Services</Link>
    <Link href="/guidance" onClick={handleMobileClick}>Guidance</Link>
    <Link href="/rates-insurance" onClick={handleMobileClick}>Rates & Insurance</Link>
    <Link href="/contact" onClick={handleMobileClick}>Contact</Link>
    <Link href="tel:+5551234567" onClick={handleMobileClick}>(555) 123-4567</Link>
  </div>
)}

    </nav>
  );
}
