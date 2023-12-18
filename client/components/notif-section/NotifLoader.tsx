import styles from "../../styles/notif.module.css";

const NotifLoader = () => {

  const notifications = true;

  return (
    <>
      {notifications ? (
        <div className={styles.notif_load}>
          <h1 className="text-white text-2xl font-bold">
            Nothing to see here -<br />
            yet
          </h1>
          <h3 className="text-base text-neutral-500">
            Get notified of your logins and mentions
          </h3>
        </div>
      ):(
        <div className={styles.notif_load}>
            <h1 className="text-white text-2xl font-bold">Error fetching notifications</h1>
        </div>
      )}
    </>
  );
};

export default NotifLoader;
