import React, { useState } from "react";
import Modal from "./Modal";
import styles from "../../styles/premium.module.css";
import { useModal } from "../recent-section/ModalContext";

const Premium = () => {
  const { isModalOpen, closeModal } = useModal();
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (tabId: any) => {
    setSelectedTab(tabId);
  };

  const cancelSelect = () => {
    if (selectedTab) {
      setSelectedTab(null);
    }else{
      closeModal()
    }
  };

  const subscribeButtonClassName = selectedTab
    ? styles.subscribeActive
    : styles.subscribeInactive;

  return (
    <Modal open={isModalOpen} onClose={closeModal}>
      <div className="flex justify-center flex-col">
        <h1 className="text-2xl text-white font-bold">
          Choose the right subscription for you
        </h1>
        <div className="flex flex-row align-center justify-center gap-2">
          <div
            id="Free"
            className={`${styles.prem_tabs} ${
              selectedTab === "Free" && styles.activeTab
            } mt-3`}
            onClick={() => handleTabClick("Free")}
          >
            <h1 className="text-xl text-white">Free Tier</h1>
          </div>
          <div
            id="Paid"
            className={`${styles.prem_tabs} ${
              selectedTab === "Paid" && styles.activeTab
            } mt-3`}
            onClick={() => handleTabClick("Paid")}
          >
            <h1 className="text-xl text-white">Premium Tier</h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button
            className={`${subscribeButtonClassName} rounded-2xl h-10 w-40 mt-3`}
          >
            Subscribe
          </button>
          <button
            className="bg-red-500 rounded-2xl w-40 h-10 mt-1"
            onClick={cancelSelect}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Premium;
