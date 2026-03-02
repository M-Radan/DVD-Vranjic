import { motion } from "framer-motion";
import { Truck, Info } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dacia from "../assets/dacia.jpg";
import iveco7 from "../assets/iveco7.jpg";
import iveco8 from "../assets/iveco8.jpg";
import mercedes4 from "../assets/mercedes4.jpg";
import mercedes6 from "../assets/mercedes6.jpg";
import isuzu from "../assets/isuzu.jpg";
import tam from "../assets/tam.jpg";


const vehicles = [
  {
    id: 1,
    name: "Vozilo za gašenje požara i spašavanje",
    model: "Mercedes-Benz Axor",
    year: "2009",
    description: "Vozilo sa 280KS i spremnikom od 2500 litara vode, nosivosti 18 tona.",
    image: mercedes6,
  },
  {
    id: 2,
    name: "Vozilo za gašenje požara i spašavanje",
    model: "TAM 190 T 15",
    year: "1991",
    description: "Veće navalno vatrogasno vozilo, nosivosti 15 tona, snaga motora 190 KS i spremnikom vode od 4500 litara.",
    image: tam,
  },
  {
    id: 3,
    name: "Vozilo za gašenje požara i spašavanje",
    model: "Mercedes Benz 1834",
    year: "1996",
    description: "Vozilo nosivosti 18 tona, snage motora 450KS i spremnikom vode od 5200 litara.",
    image: mercedes4,
  },
  {
    id: 4,
    name: "Vozilo za gašenje požara i spašavanj",
    model: "Iveco Eurocargo 150E25 E5",
    year: "2015",
    description: "Manje navalno vatrogasno vozilo za gašenje požara, nosivosti 15 tona, snage motora 250 KS i spremnikom vode od 4200 litara.",
    image: iveco7,
  },
  {
    id: 5,
    name: "Vozilo za spašavanje s visina",
    model: "Iveco Daily",
    year: "2019",
    description: "Vozilo opremljeno dizalicom s košarom za spašavanje s visina, nosivosti 3.5 tone i snage motora 190 KS.",
    image: iveco8,
  },
  {
    id: 6,
    name: "Zapovjedno vozilo",
    model: "Isuzu D-Max",
    year: "2023",
    description: "Zapovjedno vozilo za koordinaciju intervencija i snage motora 120 KW.",
    image: isuzu,
  },
   {
    id: 7,
    name: "Zapovjedno vozilo",
    model: "Dacia Spring",
    year: "2021",
    description: "Električno zapovjedno vozilo za koordinaciju intervencija.",
    image: dacia,
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
