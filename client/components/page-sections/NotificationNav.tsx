import styles from "../../styles/notif.module.css";
import NotifLoader from "../notif-section/NotifLoader";

const NotificationNav = () => {
  return (
    <div className={styles.notif_nav}>
      <div className={`fixed ${styles.notif_head} `}>
        <h1 className="text-white ml-5 font-bold text-xl">Notifications</h1>
      </div>
      <div className={styles.notif_loader}>
        <NotifLoader />
      </div>
    </div>
  );
};

export default NotificationNav;
