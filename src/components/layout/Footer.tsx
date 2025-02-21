import React, { useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Send,
  Check,
  Globe,
  PhoneCall,
  Mail,
  ChevronUp
} from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
}

interface SocialLink {
  icon: React.ComponentType<{ size?: string | number }>;
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks: { [key: string]: FooterLink[] } = {
    "For Travelers": [
      { name: "Find Experiences", href: "#" },
      { name: "Gift Cards", href: "#" },
      { name: "Travel Insurance", href: "#" },
      { name: "Group Bookings", href: "#" },
      { name: "Travel Blog", href: "#" },
      { name: "Mobile App", href: "#" }
    ],
    "For Guides": [
      { name: "Become a Guide", href: "#" },
      { name: "Guide Resources", href: "#" },
      { name: "Partner Success Stories", href: "#" },
      { name: "Guide Insurance", href: "#" },
      { name: "Guide Academy", href: "#" }
    ],
    "Company": [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Center", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Partner Program", href: "#" }
    ],
    "Support": [
      { name: "Help Center", href: "#" },
      { name: "Safety Information", href: "#" },
      { name: "Cancellation Options", href: "#" },
      { name: "COVID-19 Updates", href: "#" },
      { name: "Report an Issue", href: "#" }
    ]
  };

  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-gray-700">
          {/* Company Info - Takes 2 columns */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">ExperienceBook</h2>
            <p className="text-gray-400 mb-6">
              Connecting travelers with unforgettable local experiences worldwide.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Globe size={20} />
                <span>Available in 190+ countries</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <PhoneCall size={20} />
                <span>24/7 Customer Support</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={20} />
                <span>support@experiencebook.com</span>
              </div>
            </div>
          </div>

          {/* Site Map - Each section takes 1 column */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter and Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b border-gray-700">
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates on new experiences and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className={`px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 ${
                  subscribed 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {subscribed ? <Check size={20} /> : <Send size={20} />}
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookie Settings</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors duration-200">Sitemap</a>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 ExperienceBook. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;