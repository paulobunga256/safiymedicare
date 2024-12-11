import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useAppSelector } from '../hooks/useAppSelector';

const iconComponents = {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
};

export default function Footer() {
  const { socialLinks } = useAppSelector((state) => state.socialLinks);
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
            {socialLinks.map((link) => {
              const IconComponent = iconComponents[link.icon as keyof typeof iconComponents];
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#666666] hover:text-[#999999] transition-colors duration-200"
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
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