import ChatFilter from "./ChatFilter";
import styles from "../../styles/chat.module.css";
import ChatPost from "./ChatPost";

const ChatNav = () => {
  return (
    <div className={styles.chat_nav}>
      <div className="fixed">
        <ChatFilter />
      </div>
      <ChatPost />
    </div>
  );
};

export default ChatNav;
