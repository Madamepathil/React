import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  visible: {
    opacity: 1,
  },
  hideen: {
    opacity: 0,
  },
};

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.2,
      type: "spring",
      stiffness: 100,
    },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <div>
          <motion.div
            className="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="modal" variants={modal}>
              <p>wnat to make another pizza</p>
              <Link to="/">
                <button>Start Again</button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
