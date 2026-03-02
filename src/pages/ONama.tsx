import { motion } from "framer-motion";
import { Award, Users, Calendar, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const milestones = [
  { year: "1990", title: "Osnutak društva", description: "DVD Vranjic osnovan je od strane lokalnih entuzijasta." },
  { year: "1990", title: "Prvo vozilo", description: "Nabavka prvog vatrogasnog vozila za brže intervencije." },
  { year: "2017", title: "Novi vatrogasni dom", description: "Otvoren moderni vatrogasni dom u centru Vranjica." },
  { year: "2019", title: "Modernizacija opreme", description: "Nabavka suvremene opreme za gašenje i spašavanje." },
];

const ONama = () => {
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
              O nama
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Više od 30 godina tradicije, hrabrosti i služenja zajednici.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
                Naša priča
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                <p>
                  Dobrovoljno vatrogasno društvo Vranjic osnovano je 1990. godine kao odgovor 
                  na potrebu lokalne zajednice za organiziranom protupožarnom zaštitom. Od tada 
                  pa do danas, naši članovi nesebično služe građanima Vranjica i okolice.
                </p>
                <p>
                  Kroz godine smo se razvijali i modernizirali, ali naše temeljne vrijednosti 
                  ostale su nepromijenjene: hrabrost, zajedništvo i posvećenost služenju drugima.
                </p>
                <p>
                  Danas, DVD Vranjic broji više od 40 aktivnih članova različitih dobnih skupina, 
                  od vatrogasne mladeži do iskusnih veterana. Opremljeni smo suvremenom tehnikom 
                  i kontinuirano ulagamo u edukaciju naših članova.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-10">
                {[
                  { icon: Calendar, value: "30+", label: "Godina" },
                  { icon: Users, value: "40+", label: "Članova" },
                  { icon: Target, value: "100+", label: "Intervencija/god." },
                  { icon: Award, value: "15+", label: "Priznanja" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-2xl text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-8">
                Naša povijest
              </h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative pl-12"
                    >
                      <div className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                      </div>
                      <div className="bg-card rounded-lg p-6 card-shadow border border-border">
                        <span className="text-primary font-display font-bold text-lg">
                          {milestone.year}
                        </span>
                        <h3 className="font-display font-semibold text-foreground mt-1 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ONama;
