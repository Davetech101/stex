"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimateSection= ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateSection