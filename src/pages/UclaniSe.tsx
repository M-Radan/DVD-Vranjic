import { motion } from "framer-motion";
import { UserPlus, Check, Send } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  "Edukacija i stručno usavršavanje",
  "Dio tradicionalne zajednice",
  "Prijateljstva koja traju",
  "Oprema i uniforme",
  "Sudjelovanje na natjecanjima",
  "Humanitarni rad",
];

const UclaniSe = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/dvd-vranjic@st.htnet.hr", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Prijava zaprimljena!",
          description: "Hvala vam na interesu. Kontaktirat ćemo vas uskoro s daljnjim informacijama.",
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      toast({
        title: "Greška pri slanju",
        description: "Molimo pokušajte ponovno ili nas kontaktirajte telefonom.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary-foreground/10 mb-6">
              <UserPlus className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Učlani se
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Postani dio naše obitelji i pomozi u zaštiti zajednice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display font-bold text-3xl text-foreground mb-6">
                Zašto postati član?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Pridruživanjem DVD Vranjic postajete dio tradicije duge preko 90 godina. 
                Bez obzira na dob ili prethodno iskustvo, svima pružamo potpunu obuku 
                i priliku za osobni razvoj.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-2 rounded-full bg-primary/10">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-secondary rounded-xl">
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Tko se može učlaniti?
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Vatrogasna mladež:</strong> djeca od 6 do 18 godina</li>
                  <li>• <strong>Operativni članovi:</strong> osobe od 18 do 65 godina</li>
                  <li>• <strong>Veterani:</strong> svi bivši aktivni članovi</li>
                  <li>• <strong>Potporne članstvo:</strong> svi koji žele pomoći</li>
                </ul>
              </div>
            </motion.div>

            {/* Registration Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-card rounded-xl p-8 card-shadow border border-border">
                <h2 className="font-display font-bold text-2xl text-foreground mb-6">
                  Prijava za članstvo
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* FormSubmit hidden fields */}
                  <input type="hidden" name="_subject" value="Nova prijava za članstvo - DVD Vranjic" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        Ime *
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        placeholder="Vaše ime"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Prezime *
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        placeholder="Vaše prezime"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="vas@email.com"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefon *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+385..."
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="birthYear" className="block text-sm font-medium text-foreground mb-2">
                        Godina rođenja *
                      </label>
                      <Input
                        id="birthYear"
                        name="birthYear"
                        type="number"
                        min="1940"
                        max="2026"
                        required
                        placeholder="2010"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                        Mjesto stanovanja *
                      </label>
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        required
                        placeholder="Vranjic"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-foreground mb-2">
                      Zašto želite postati član?
                    </label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      placeholder="Recite nam više o sebi i Vašoj motivaciji..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      "Slanje prijave..."
                    ) : (
                      <>
                        Pošalji prijavu
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Slanjem prijave pristajete da vas kontaktiramo vezano za članstvo.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UclaniSe;
