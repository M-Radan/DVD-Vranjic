import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
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
          title: "Poruka poslana!",
          description: "Hvala vam na poruci. Javit ćemo vam se uskoro.",
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
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Kontakt
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Javite nam se za bilo kakva pitanja ili informacije.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display font-bold text-3xl text-foreground mb-8">
                Kontakt informacije
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Adresa</h3>
                    <p className="text-muted-foreground">
                      Krešimirova ulica 62<br />
                      21210 Vranjic, Hrvatska
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Telefon</h3>
                    <a href="tel:021247427" className="text-muted-foreground hover:text-primary transition-colors">
                      021 247-427
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">E-mail</h3>
                    <a href="mailto:dvd-vranjic@st.htnet.hr" className="text-muted-foreground hover:text-primary transition-colors">
                      dvd-vranjic@st.htnet.hr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Radno vrijeme</h3>
                    <p className="text-muted-foreground">
                      0-24, svaki dan
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Box */}
              <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-xl">
                <h3 className="font-display font-bold text-foreground mb-2">
                  Hitni slučajevi
                </h3>
                <p className="text-muted-foreground mb-4">
                  U slučaju požara ili hitne situacije nazovite vatrogasce:
                </p>
                <a 
                  href="tel:193" 
                  className="inline-flex items-center gap-3 text-primary font-display font-bold text-4xl"
                >
                  <Phone className="h-8 w-8" />
                  193
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display font-bold text-3xl text-foreground mb-8">
                Pošaljite nam poruku
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* FormSubmit hidden fields */}
                <input type="hidden" name="_subject" value="Nova poruka s web stranice DVD Vranjic" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Ime i prezime *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Vaše ime"
                      className="h-12"
                    />
                  </div>
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
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Predmet *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="O čemu se radi?"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Poruka *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Vaša poruka..."
                    rows={6}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? (
                    "Slanje..."
                  ) : (
                    <>
                      Pošalji poruku
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
