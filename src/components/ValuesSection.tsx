import { motion } from "framer-motion";
import { Flame, Users, Truck, Award, Heart, Target } from "lucide-react";

const values = [
  {
    icon: Flame,
    title: "Spremnost",
    description: "Uvijek spremni za brzu intervenciju u bilo koje doba dana ili noći.",
  },
  {
    icon: Users,
    title: "Zajedništvo",
    description: "Snaga tima i uzajamna podrška temelj su našeg uspjeha.",
  },
  {
    icon: Heart,
    title: "Volontiranje",
    description: "Nesebično posvećeni služenju zajednice bez očekivanja nagrade.",
  },
  {
    icon: Award,
    title: "Profesionalnost",
    description: "Kontinuirana edukacija i vrhunska opremljenost za sve izazove.",
  },
  {
    icon: Target,
    title: "Prevencija",
    description: "Educiramo građane o protupožarnoj zaštiti i sigurnosti.",
  },
  {
    icon: Truck,
    title: "Oprema",
    description: "Moderno opremljeni s najnovijom vatrogasnom tehnikom.",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Naše vrijednosti
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Što nas čini posebnima
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Naša posvećenost zajednici i visoki standardi definirani su temeljnim 
            vrijednostima koje njegujemo od samog osnutka.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl p-8 card-shadow hover:fire-shadow transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="p-4 rounded-xl bg-primary/10 w-fit mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
