import styles from "../../styles/explore.module.css";

const ExploreFilter = () => {
    return(
        <div className="flex flex-row mt-2">
            <div className={styles.explore_tab}>For you</div>
            <div className={styles.explore_tab}>Online</div>
        </div>
    )
}

export default ExploreFilter;