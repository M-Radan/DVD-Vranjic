import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logoImage from "@/assets/logo-dvd-vranjic.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="DVD Vranjic logo" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="font-display font-bold text-xl">DVD Vranjic</h3>
                <p className="text-sm text-primary-foreground/70">Dobrovoljno vatrogasno društvo</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Služimo zajednici Vranjica od 1990. godine. Naša misija je zaštita života, imovine i okoliša.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.facebook.com/dvd.vranjic/?locale=hr_HR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/dvd_vranjic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Brzi linkovi</h4>
            <ul className="space-y-3">
              {[
                { name: "O nama", path: "/o-nama" },
                { name: "Članovi", path: "/clanovi" },
                { name: "Tehnika", path: "/tehnika" },
                { name: "Učlani se", path: "/uclani-se" },
              ].map((link) => (
                <li key={link.path}>
                  <a 
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      window.location.href = link.path;
                    }}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Krešimirova ulica 62<br />21210 Vranjic, Hrvatska
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a 
                  href="tel:021247427" 
                  className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  021 247-427
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a 
                  href="mailto:dvd-vranjic@st.htnet.hr" 
                  className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  dvd-vranjic@st.htnet.hr
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Hitni slučajevi</h4>
            <div className="bg-primary/20 border border-primary/30 rounded-lg p-6">
              <p className="text-primary-foreground/70 text-sm mb-4">
                U slučaju požara ili druge hitne situacije nazovite:
              </p>
              <a 
                href="tel:193" 
                className="flex items-center gap-3 text-primary font-display font-bold text-3xl hover:text-fire-light transition-colors"
              >
                <Phone className="h-8 w-8" />
                193
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2026 DVD Vranjic. Sva prava pridržana.
            </p>
            <div className="flex gap-6">
              <Link 
                to="/privatnost" 
                className="text-primary-foreground/50 hover:text-primary transition-colors text-sm"
              >
                Politika privatnosti
              </Link>
              <Link 
                to="/uvjeti" 
                className="text-primary-foreground/50 hover:text-primary transition-colors text-sm"
              >
                Uvjeti korištenja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
