import styles from "../../styles/recent.module.css";
import ChatSearch from "../chat-section/ChatSearch";
import Online from "./Online";
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
          <div className="fixed w-96 bg-black h-12">
            <ChatSearch width={80} />
          </div>
        )}
        <div className="mt-14 mb-3">
          <PremiumRem />
          {isExplorePage && <TrendingTopics />}
          {isExplorePage && <Online />}
        </div>
      </div>
    </>
  );
};

export default RecentNav;
