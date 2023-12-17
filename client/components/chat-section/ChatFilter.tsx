import styles from "../../styles/chat.module.css";

const ChatFilter = () => {
    return(
        <div className={styles.chat_tabs_container}>
            <div className={styles.chat_tabs}>For you</div>
            <div className={styles.chat_tabs}>Following</div>
        </div>
    )
}

export default ChatFilter;