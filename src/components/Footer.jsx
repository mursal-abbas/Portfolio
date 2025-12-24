import React from "react";
import { Github, Linkedin, Facebook, Instagram, Globe } from "lucide-react";
import { portfolioData } from "../data/mock";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: portfolioData.social.github, label: "GitHub" },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: "LinkedIn" },
    { icon: Facebook, href: portfolioData.social.facebook, label: "Facebook" },
    {
      icon: Instagram,
      href: portfolioData.social.instagram,
      label: "Instagram",
    },
    { icon: Globe, href: portfolioData.social.portfolio, label: "Portfolio" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {portfolioData.personal.name}. All
              rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
