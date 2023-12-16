import NavItem from "./NavItem";
import styles from "../../styles/nav.module.css";
import { Home, Search, Bell, Mail, UserRound, Sparkles } from "lucide-react";
import { useState } from "react";

const LeftNav = () => {
  const navSections = [
    ["home", "Home"],
    ["explore", "Explore"],
    ["notifications", "Notifications"],
    ["messages", "Messages"],
    ["premium", "Premium"],
    ["profile", "Profile"],
  ];

  const icons = [<Home />, <Search />, <Bell />, <Mail />, <Sparkles />, <UserRound /> ];

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePost = () => {
    setIsModalOpen(true)
  }

  return (
    <div className={styles.left_nav}>
      <div className="mt-10">
        {navSections.map((section, index) => (
          <NavItem key={section[0]} itemLink={section[0]} itemTitle={section[1]}>
            {icons[index]}
          </NavItem>
        ))}
        <button className={styles.button}>Post</button>
      </div>
    </div>
  );
};

export default LeftNav;
