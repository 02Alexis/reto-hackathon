import "./ModalNavbar.scss";

import { motion } from "framer-motion";
import { FaWindowClose } from "react-icons/fa";
import Backdrop from "../BackdropProp/BackdropProp";
import { dropIn } from "../../utils/variantsModal";

const ModalNavbar = ({ onClose, children }) => {
  return (
    <Backdrop onClose={onClose}>
      <motion.div
        className="modal-container"
        onClick={(evt) => evt.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="close-button"
          onClick={onClose}
        >
          <FaWindowClose size={15} className="close-icon" />
        </motion.button>
      </motion.div>
    </Backdrop>
  );
};

export default ModalNavbar;
