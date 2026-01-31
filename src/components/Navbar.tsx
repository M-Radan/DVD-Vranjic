import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-dvd-vranjic.png";

const navLinks = [
  { name: "Početna", path: "/" },
  { name: "O nama", path: "/o-nama" },
  { name: "Članovi", path: "/clanovi" },
  { name: "Tehnika", path: "/tehnika" },
  { name: "Kontakt", path: "/kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoImage} 
              alt="DVD Vranjic logo" 
              className="h-14 w-14 object-contain"
            />
            <div className="flex flex-col">
              <span 
                className={`font-display font-bold text-xl leading-tight transition-colors duration-300 ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                DVD Vranjic
              </span>
              <span 
                className={`text-xs font-medium transition-colors duration-300 ${
                  scrolled ? "text-muted-foreground" : "text-primary-foreground/80"
                }`}
              >
                Dobrovoljno vatrogasno društvo
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    window.location.href = link.path;
                  }, 100);
                }}
                className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-300 cursor-pointer ${
                  location.pathname === link.path
                    ? scrolled
                      ? "text-primary bg-primary/10"
                      : "text-primary-foreground bg-primary-foreground/20"
                    : scrolled
                    ? "text-foreground hover:text-primary hover:bg-primary/5"
                    : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/uclani-se">
              <Button 
                variant={scrolled ? "hero" : "heroOutline"} 
                size="lg"
              >
                Učlani se
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.path}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setTimeout(() => {
                          window.location.href = link.path;
                        }, 100);
                      }}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors cursor-pointer ${
                        location.pathname === link.path
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="mt-4"
                >
                  <Link to="/uclani-se">
                    <Button variant="hero" size="lg" className="w-full">
                      Učlani se
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
