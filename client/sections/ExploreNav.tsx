import ChatSearch from "../components/chat-section/ChatSearch";
import styles from "../styles/explore.module.css";
import ExploreFilter from "../components/explore-section/ExploreFilter";

const ExploreNav = () => {
  return (
    <div className={styles.explore_nav}>
      <div className="mr-10">
        <ChatSearch width={96} />
      </div>
        <ExploreFilter />
    </div>
  );
};

export default ExploreNav;
