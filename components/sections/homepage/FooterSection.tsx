// components/sections/homepage/FooterSection.tsx
import React from 'react';
import { ItemText } from '@/components/atomic-design/atoms/texts/itemText';

const FooterSection: React.FC = () => {
  return (
    <footer>
      <div className="bg-[#17273F] min-h-60 w-full flex justify-center items-center">
        <ItemText>
          <nav className="justify-center flex space-x-10 text-[#898786] h-1/3 md:space-x-28 xl:space-x-32">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/faqs" className="hover:underline">FaQs</a>
            <a href="/follow-us" className="hover:underline">Follow Us</a>
          </nav>
        </ItemText>
      </div>
      <ItemText>
        <div className="grid grid-cols-1  xl:grid-cols-4  md:grid-cols-4 min-h-96 p-8 text-[#898786]">
          <div className="flex flex-col justify-end xl:order-first md:order-first order-last sm:pt-10">
            <p className="mb-4 w-44">© 2025 wwwmypc, Inc. All rights reserved.</p>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-bold mb-2">Connect with us</h3>
            <ul className="space-y-2">
              <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
              <li><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
              <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
              <li><a href="https://linkedin.com" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-bold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms-of-use" className="hover:underline">Terms of Use</a></li>
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/cookie-policy" className="hover:underline">Cookie Policy</a></li>
              <li><a href="/sitemap" className="hover:underline">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </ItemText>
    </footer>
  );
};

export default FooterSection;