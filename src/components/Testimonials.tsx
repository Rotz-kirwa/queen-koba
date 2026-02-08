import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { quote: "Finally, even glowing skin without fear!", handle: "@melaninqueenke" },
  { quote: "Hydrated, radiant, proudly Kenyan.", handle: "@nairobiglow" },
  { quote: "Safe and effective. My skin has never been this clear.", handle: "@africanroyalty" },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="section-spacing">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-body mb-4">Royal Reviews</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            Loved by <span className="italic text-gold-gradient">Queens</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary fill-primary" />
              ))}
            </div>
            <span className="font-body text-sm text-muted-foreground">4.8/5 from 200+ Queens</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.handle}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="luxury-card text-center"
            >
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <p className="font-display text-xl italic mb-4 leading-relaxed">"{t.quote}"</p>
              <p className="font-body text-sm text-primary tracking-wide">{t.handle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
