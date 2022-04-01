import React from "react";

import { motion } from "framer-motion";

const svgVariant = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

const pathVariant = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { ease: "easeInOut", duration: 2 },
  },
};

const Header = () => {
  return (
    <header>
      <motion.div
        className="logo"
        drag
        dragConstraints={{
          left: 0,
          bottom: 0,
          top: 0,
          right: 0,
        }}
        dragElastic={0.7}
      >
        <motion.svg
          variants={svgVariant}
          initial="hidden"
          animate="visible"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariant}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariant}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div
        className="title"
        initial={{ y: "-200px" }}
        animate={{ y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          type: "spring",
          stiffness: 120,
        }}
      >
        <motion.h1
          drag
          dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
          dragElastic={0.7}
        >
          Pizza Joint
        </motion.h1>
      </motion.div>
    </header>
  );
};

export default Header;
