import ChatSearch from "../chat-section/ChatSearch";
import styles from "../../styles/explore.module.css";
import ExploreFilter from "../explore-section/ExploreFilter";

const ExploreNav = () => {
  return (
    <div className={styles.explore_nav}>
      <div className="mr-10">
        <ChatSearch width={'full'} />
      </div>
        <ExploreFilter />
    </div>
  );
};

export default ExploreNav;
