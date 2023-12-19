import styles from "../../styles/chat.module.css";

const ChatPost = () => {
  return (
    <div className={styles.chat_post_container}>
      <textarea
        placeholder="What is happening?!"
        className={`${styles.textarea} h-16 w-96 mt-4 ml-10 bg-black text-white caret-blue-500`}
      />
      <button className={`${styles.button} ml-3`}></button>
    </div>
  );
};

export default ChatPost;
