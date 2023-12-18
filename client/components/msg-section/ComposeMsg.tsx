import styles from "../../styles/msgs.module.css";

const ComposeMsg = () => {
  return (
    <div className={styles.msg_compose}>
      <h1 className="text-2xl font-bold text-white">Welcome to your inbox!</h1>
      <h3 className="text-base mt-2 text-neutral-500">Have direct conversations on Live Chat.</h3>
      <button className={styles.button}>Write a message</button>
    </div>
  );
};

export default ComposeMsg;
