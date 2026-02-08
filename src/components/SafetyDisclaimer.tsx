import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle } from "lucide-react";

const SafetyDisclaimer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto luxury-card border-muted/50"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-display text-lg font-semibold mb-3">Safety & Usage Notice</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-body leading-relaxed">
                <li>• Patch test recommended before first use on a small skin area.</li>
                <li>• Results may vary based on individual skin type and consistency of use.</li>
                <li>• Queen Koba is not a permanent skin-lightening product — it clarifies and evens tone safely.</li>
                <li>• For external use only. Avoid contact with eyes.</li>
                <li>• Consult a dermatologist if you have sensitive or reactive skin conditions.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SafetyDisclaimer;
