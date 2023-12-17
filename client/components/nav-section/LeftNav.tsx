import NavItem from "./NavItem";
import styles from "../../styles/nav.module.css";
import { Home, Search, Bell, Mail, UserRound, Sparkles } from "lucide-react";

const LeftNav = (props: {isModalOpen: boolean, onHandlePost: ()=>void}) => {
  const navSections = [
    ["home", "Home"],
    ["explore", "Explore"],
    ["notifications", "Notifications"],
    ["messages", "Messages"],
    ["premium", "Premium"],
    ["profile", "Profile"],
  ];

  const icons = [<Home />, <Search />, <Bell />, <Mail />, <Sparkles />, <UserRound /> ];

  return (
    <div className={styles.left_nav}>
      <div className="mt-10">
        {navSections.map((section, index) => (
          <NavItem key={section[0]} itemLink={section[0]} itemTitle={section[1]}>
            {icons[index]}
          </NavItem>
        ))}
        <button className={`${styles.button} mb-3`} onClick={props.onHandlePost}>Post</button>
      </div>
    </div>
  );
};

export default LeftNav;