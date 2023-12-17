import { useState } from "react";
import styles from "../../styles/recent.module.css";
import Premium from "../overlay/Premium";
import { useModal } from "./ModalContext";

const PremiumRem = () => {

  const { isModalOpen, openModal } = useModal();

  return (
    <div className={`${styles.premium_rem} bg-neutral-800`}>
      <h1 className="text-xl font-bold mb-1">Subscribe to Premium</h1>
      <p className="text-base mb-2">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <button onClick={openModal} className={`${styles.button} text-white w-20 h-10`}>Subscribe</button>
      {isModalOpen && <Premium />}
    </div>
  );
};

export default PremiumRem;