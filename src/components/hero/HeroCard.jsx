import { motion } from "framer-motion";

const HeroCard = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -bottom-10 -left-10 bg-white/70 backdrop-blur-xl rounded-xl shadow-lg p-4 w-64 hidden md:block"
    >
      <p className="text-xs text-charcoal/60 mb-2">
        Currently exploring
      </p>

      <ul className="space-y-1 text-sm text-charcoal">
        <li>✦ React & UI Engineering</li>
        <li>✦ Calm UX Design</li>
        <li>✦ AI-assisted products</li>
      </ul>
    </motion.div>
  );
};

export default HeroCard;
