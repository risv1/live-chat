import ChatFilter from "../chat-section/ChatFilter";
import styles from "../../styles/chat.module.css";
import ChatPost from "../chat-section/ChatPost";

const ChatNav = () => {
  return (
    <div className={styles.chat_nav}>
      <div className="fixed">
        <ChatFilter  />
      </div>
      <ChatPost />
    </div>
  );
};

export default ChatNav;
