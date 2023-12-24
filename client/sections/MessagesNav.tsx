import styles from "../styles/msgs.module.css";
import ComposeMsg from "../components/msg-section/ComposeMsg";

const MessagesNav = () => {

  return (
    <div className={styles.msgs_nav}>
      <div className={`fixed ${styles.msgs_head} `}>
        <h1 className="text-white ml-7 font-bold text-xl">Messages</h1>
      </div>
      <div className={styles.msgs_loader}>
        <ComposeMsg />
      </div>
    </div>
  );
};

export default MessagesNav;