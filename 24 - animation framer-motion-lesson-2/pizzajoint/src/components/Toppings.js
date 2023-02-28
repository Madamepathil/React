import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
        stiffness: 20,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const nextVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      scale: 1.5,
      originX: 0,
      transition: { type: "spring", stiffness: 150, delay: 1 },
    },
  };

  return (
    <motion.div
      className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.5, originX: 0, color: "yellow" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <button>Order</button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
