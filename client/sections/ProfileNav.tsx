import styles from "../styles/profile.module.css";
import ProfileDetails from "../components/profile-section/ProfileDetails";

const ProfileNav = () => {
    return(
        <div className={styles.prof_nav}>
        <div className={`fixed ${styles.prof_head} `}>
          <h1 className="text-white ml-7 font-bold text-xl">Profile</h1>
        </div>
        <div>
          <ProfileDetails />
        </div>
      </div>
    )
}

export default ProfileNav;