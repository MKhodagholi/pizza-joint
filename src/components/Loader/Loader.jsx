import React from "react";

import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { yoyo: Infinity, duration: 0.5 },
      y: { yoyo: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
  animationTwo: {
    y: [0, -30],
    x: 0,
    transition: {
      y: { yoyo: Infinity, duration: 0.25, ease: "easeOut" },
    },
  },
};

const changeLoaderVariant = {
  hover: {
    color: "#fffb00",
    scale: 1.2,
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <motion.div
        className="change-loader"
        onClick={() => {
          cycleAnimation();
        }}
        variants={changeLoaderVariant}
        whileHover="hover"
      >
        Change Loader
      </motion.div>
    </>
  );
};

export default Loader;
