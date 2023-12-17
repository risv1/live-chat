import styles from "../../styles/recent.module.css";
import { Search } from "lucide-react";
import PremiumRem from "./PremiumRem";
import TrendingTopics from "./TrendingTopics";

const RecentNav = () => {
  return (
    <>
      <div className={styles.recent_nav}>
        <div className="bg-neutral-800 flex flex-row rounded-3xl w-80 ml-7 h-10 mt-1">
          <div className="flex items-center justify-center ml-2">
            <Search color="#ffffff" />
          </div>
          <input
            type="text"
            className="ml-2 bg-transparent border-none focus:outline-none text-white"
            placeholder="Search"
          />
        </div>
        <div>
            <PremiumRem />
            <TrendingTopics />
        </div>
      </div>
    </>
  );
};

export default RecentNav;
