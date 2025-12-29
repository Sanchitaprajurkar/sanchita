import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const AboutSection = ({ mousePos, profilePic }) => {
  // Respect user reduced motion preference
  const shouldReduceMotion = useReducedMotion(); // [web:21][web:30]

  // Scroll-based parallax for the background text
  const { scrollY, scrollYProgress } = useScroll(); // [web:29]
  const xText = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    [0.04, 0.08, 0.02]
  );
  const skewText = useTransform(scrollYProgress, [0, 1], [0, -4]);

  // Scroll parallax for image (fallback to no motion when reduced)
  const yImage = shouldReduceMotion
    ? 0
    : useTransform(scrollY, [0, 400], [0, 40]); // [web:13][web:29]

  // Variants for orchestrated entrance animations
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut",
        duration: 0.7,
      },
    },
  }; // [web:26][web:28]

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-[#F9F6F3] py-40 overflow-hidden border-t border-[#D4AF37]/10">
      {/* 1. LARGE BACKGROUND TYPOGRAPHY (The 'Couture' Look) */}
      <motion.div
        style={
          shouldReduceMotion
            ? {}
            : { x: xText, opacity: opacityText, skewX: skewText }
        }
        className="absolute top-20 left-0 whitespace-nowrap pointer-events-none select-none"
      >
        <h2 className="text-[25vw] font-serif leading-none text-[#2C1810] opacity-[0.03]">
          L'ESSENCE • L'ART • LA VIE
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative">
        <div className="flex flex-col lg:flex-row gap-20 items-end">
          {/* 2. THE GALLERY PIECE (Left Side) */}
          <div className="relative w-full lg:w-1/2">
            {/* Minimalist Floating Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="absolute -top-10 left-0 z-40 bg-white/80 backdrop-blur-md p-4 border border-[#D4AF37]/30 border-l-2 shadow-sm rounded-sm"
            >
              <p className="text-[10px] tracking-[0.5em] uppercase text-[#2C1810]">
                Subject No. 01
              </p>
              <p className="font-serif italic text-[#D4AF37]">
                The Creative Soul
              </p>
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="relative aspect-[3/4] w-full max-w-[450px] mx-auto lg:mx-0 overflow-hidden shadow-[30px_30px_0px_rgba(212,175,55,0.05)]"
            >
              <motion.img
                src={profilePic}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s]"
                style={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: yImage,
                      }
                }
              />
              {/* Overlay Gradient with subtle scroll offset */}
              <motion.div
                style={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: useTransform(scrollY, [0, 400], [10, -10]),
                      }
                }
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2C1810]/40 via-transparent to-transparent opacity-60"
              />
            </motion.div>

            {/* Decorative Gold Thread */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-[#D4AF37]/40" />
          </div>

          {/* 3. THE EDITORIAL COPY (Right Side) */}
          <div className="w-full lg:w-1/2 lg:pb-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-10"
            >
              <motion.div variants={itemVariants} className="space-y-2">
                <h3 className="text-dustyRose font-sans text-xs tracking-[0.6em] uppercase">
                  Biography
                </h3>
                <h2 className="font-serif text-5xl md:text-7xl text-[#2C1810] leading-tight">
                  Curating <span className="italic">Digital</span> <br />
                  High-Fashion.
                </h2>
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                {/* Vertical Decorative Line */}
                <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D4AF37] to-transparent" />

                <p className="text-[#6B645E] text-xl font-light leading-relaxed font-serif italic">
                  "I believe code is the invisible thread in the fabric of
                  design. Like a Parisian atelier, I craft digital experiences
                  that are measured twice and cut once—balancing the{" "}
                  <span className="text-[#2C1810] font-normal not-italic">
                    logic of engineering
                  </span>{" "}
                  with the{" "}
                  <span className="text-[#2C1810] font-normal not-italic">
                    whimsy of art
                  </span>
                  ."
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-8 py-6 border-y border-[#2C1810]/5"
              >
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-[#2C1810]/40 mb-2">
                    Philosophy
                  </p>
                  <p className="text-sm text-[#2C1810]">
                    Minimalisme Émouvant
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-[#2C1810]/40 mb-2">
                    Location
                  </p>
                  <p className="text-sm text-[#2C1810]">
                    Paris ✈ Remote Worldwide
                  </p>
                </div>
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={shouldReduceMotion ? {} : { gap: "2rem" }}
                className="relative flex items-center gap-4 group text-[#2C1810] py-4"
              >
                <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold">
                  Read the full story
                </span>

                <motion.div
                  layout
                  className="h-[1px] w-12 bg-[#2C1810] group-hover:w-24 transition-all duration-500"
                />

                {!shouldReduceMotion && (
                  <motion.span
                    animate={{ y: [0, -3, 0], rotate: [0, -10, 0] }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="text-xs text-[#D4AF37] origin-center hidden sm:inline-block"
                  >
                    ✶
                  </motion.span>
                )}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 4. FLOATING ACCENT ELEMENTS */}
      {!shouldReduceMotion && (
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-20 right-[10%] hidden lg:block opacity-20"
        >
          <span className="font-signature text-8xl text-[#D4AF37]">
            Sanchita
          </span>
        </motion.div>
      )}
    </section>
  );
};

export default AboutSection;
