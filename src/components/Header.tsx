import { useState, useEffect } from 'react';
import { Landmark } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // 50% visible = section active
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { name: t('Header.navItems.about'), href: '#about', id: 'about' },
    { name: t('Header.navItems.skills'), href: '#skills', id: 'skills' },
    { name: t('Header.navItems.experience'), href: '#experience', id: 'experience' },
    { name: t('Header.navItems.projects'), href: '#projects', id: 'projects' },
    { name: t('Header.navItems.contact'), href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-smooth animate-fade-in-down ${
        isScrolled ? 'glass backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary font-script">
            ꧁༺ 𝐈𝐦𝐚𝐧𝐞 𝐓𝐚𝐲𝐞𝐛𝐢 ༻꧂
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative group transition-smooth hover:scale-110 animate-fade-in-down ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-primary transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <div className="md:hidden">
              <button
                className="text-foreground hover:text-primary transition-smooth hover:scale-110 animate-fade-in-down"
                aria-label={t('Header.menu')}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
