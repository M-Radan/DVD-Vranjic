import { motion } from "framer-motion";
import { Truck, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const vehicles = [
  {
    id: 1,
    name: "Navalno vozilo",
    model: "Mercedes-Benz Atego",
    year: "2015",
    description: "Glavno navalno vozilo za gašenje požara s kapacitetom vode od 3000 litara.",
    image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Tehničko vozilo",
    model: "MAN TGM",
    year: "2018",
    description: "Vozilo opremljeno alatima za tehničke intervencije i spašavanje.",
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Zapovjedno vozilo",
    model: "Volkswagen Transporter",
    year: "2020",
    description: "Vozilo za koordinaciju intervencija i prijevoz osoblja.",
    image: "https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Autocisterna",
    model: "Iveco Eurocargo",
    year: "2010",
    description: "Vozilo za prijevoz i distribuciju vode na mjestima intervencije.",
    image: "https://images.unsplash.com/photo-1586952519098-05a8f23c6d33?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Kombi vozilo",
    model: "Ford Transit",
    year: "2019",
    description: "Vozilo za prijevoz vatrogasne posade i opreme.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Terensko vozilo",
    model: "Toyota Land Cruiser",
    year: "2017",
    description: "Vozilo za intervencije na teško pristupačnim terenima.",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop",
  },
];

const equipment = [
  "Hidraulični alat za spašavanje",
  "Motorne pile",
  "Potopne pumpe",
  "Oprema za rad na visini",
  "Izolacijski aparati",
  "Termovizijska kamera",
];

const Tehnika = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Tehnika i oprema
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Moderno opremljeni za sve vrste intervencija.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Vozni park
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Naša vozila
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden card-shadow hover:fire-shadow transition-all duration-300 border border-border hover:border-primary/20"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      {vehicle.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Truck className="h-5 w-5 text-primary" />
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {vehicle.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{vehicle.model}</p>
                  <p className="text-muted-foreground text-sm">{vehicle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Oprema
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
              Specijalna oprema
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipment.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <Info className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tehnika;
