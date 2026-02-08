import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Queen Koba - radiant melanin-rich skin" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative container mx-auto px-4 py-32 md:py-0">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-6"
          >
            Premium Kenyan Skincare
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-6"
          >
            Reveal Your{" "}
            <span className="text-gold-gradient font-semibold italic">Royal</span>{" "}
            Melanin Glow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg font-body"
          >
            Safe. Natural. Powerful. Crafted in Kenya for queens who deserve radiant, even, healthy skin — without toxins.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
            >
              Start Your Royal Routine →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
