import styles from "../../styles/recent.module.css";
import ChatSearch from "../chat-section/ChatSearch";
import PremiumRem from "./PremiumRem";
import TrendingTopics from "./TrendingTopics";
import { useRouter } from "next/router";

const RecentNav = () => {
  const router = useRouter();

  const isExplorePage = router.pathname !== "/explore";

  return (
    <>
      <div className={styles.recent_nav}>
        {isExplorePage && (
          <ChatSearch width={80} />
        )}
        <div>
          <PremiumRem />
          {isExplorePage && <TrendingTopics />}
        </div>
      </div>
    </>
  );
};

export default RecentNav;
