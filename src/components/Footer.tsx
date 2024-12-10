import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: <Twitter size={20} />, href: 'https://twitter.com/villagecare' },
  { icon: <Facebook size={20} />, href: 'https://facebook.com/villagecare' },
  { icon: <Instagram size={20} />, href: 'https://instagram.com/villagecare' },
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/company/villagecare' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] px-5 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-5">
          {/* Logo */}
          <div className="text-[#808080] text-2xl font-bold">
            Safiy Medical Care
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#666666] hover:text-[#999999] transition-colors duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Address */}
          <div className="text-[#999999] text-sm">
            Kiwanga, Seeta, Mukono District 
          </div>

          {/* Divider */}
          <div className="w-full max-w-[200px] h-px bg-[#333333]" />

          {/* Copyright */}
          <div className="text-[#999999] text-xs">
            © {currentYear} Safiy Medical Care. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}