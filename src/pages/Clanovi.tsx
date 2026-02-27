import { motion } from "framer-motion";
import { User, Shield, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import hrvojeJakusImage from "@/assets/member-hrvoje-jakus.png";
import marinMilanovicImage from "@/assets/member-marin-milanovic.png";
import ivanMilisicImage from "@/assets/member-ivan-milisic.png";

const vodstvo = [
  { id: 1, name: "Marin Milanović", role: "Zapovjednik", image: marinMilanovicImage },
  { id: 2, name: "Ivan Milišić", role: "Zamjenik zapovjednika", image: ivanMilisicImage },
  { id: 3, name: "Marin Benzon", role: "Tajnik", image: null },
  { id: 4, name: "Hrvoje Jakus", role: "Predsjednik", image: hrvojeJakusImage },
];

const upravniOdbor = [
  { id: 1, name: "Ante Antić", role: "Član upravnog odbora" },
  { id: 2, name: "Ivana Marić", role: "Član upravnog odbora" },
  { id: 3, name: "Josip Perić", role: "Član upravnog odbora" },
  { id: 4, name: "Marina Tomić", role: "Član upravnog odbora" },
  { id: 5, name: "Nikola Radić", role: "Član upravnog odbora" },
];

const sudCasti = [
  { id: 1, name: "Ante Stipić", role: "Predsjednik suda časti" },
  { id: 2, name: "Mara Kovač", role: "Član suda časti" },
  { id: 3, name: "Ivan Jurić", role: "Član suda časti" },
];

const Clanovi = () => {
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
              Naši članovi
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 text-justify">
              Upoznajte vodstvo i upravu našeg društva.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vodstvo */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <Shield className="h-8 w-8 text-primary" />
            <h2 className="font-display font-bold text-3xl text-foreground">
              Vodstvo društva
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {vodstvo.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-card rounded-xl overflow-hidden card-shadow hover:fire-shadow transition-all duration-300 border border-border hover:border-primary/20"
              >
                <div className="aspect-square bg-secondary flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-20 h-20 text-muted-foreground/30" />
                  )}
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upravni odbor 
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <Users className="h-8 w-8 text-primary" />
            <h2 className="font-display font-bold text-3xl text-foreground">
              Upravni odbor
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {upravniOdbor.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card rounded-lg p-5 card-shadow border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>  */}

      {/* Sud časti 
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-10"
          >
            <Award className="h-8 w-8 text-primary" />
            <h2 className="font-display font-bold text-3xl text-foreground">
              Sud časti
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
            {sudCasti.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card rounded-lg p-5 card-shadow border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-accent/20">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground text-sm">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-xs">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>  */}

      <Footer />
    </div>
  );
};

export default Clanovi;
