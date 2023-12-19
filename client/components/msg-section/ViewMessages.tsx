import styles from "../../styles/msgs.module.css";

const ViewMessages = () => {
  return (
    <div className={styles.msg_view}>
      <div className={styles.msg_load}>
        <h1 className="text-white text-2xl font-bold">Select your message</h1>
        <h3 className="text-neutral-500 text-base">
          Choose from your existing conversations, or <br /> start a new one.
        </h3>
        <button className={styles.button}>New message</button>
      </div>
    </div>
  );
};

export default ViewMessages;
