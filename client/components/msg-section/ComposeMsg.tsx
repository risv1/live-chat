import styles from "../../styles/msgs.module.css";
import { useModal } from "../recent-section/ModalContext";
import Message from "../overlay/Message";

const ComposeMsg = () => {

  const { isModalOpen, openModal } = useModal();

  return (
    <div className={styles.msg_compose}>
      <h1 className="text-2xl font-bold text-white">Welcome to your inbox!</h1>
      <h3 className="text-base mt-2 ml-2 text-neutral-500">Have direct conversations on Live Chat.</h3>
      <button className={styles.button} onClick={openModal}>Write a message</button>
      {isModalOpen && <Message />}
    </div>
  );
};

export default ComposeMsg;
