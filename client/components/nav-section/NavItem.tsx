import Link from "next/link";
import styles from "../../styles/nav.module.css";
import { ReactNode } from "react";

const NavItem = (props: {
  itemLink: string;
  itemTitle: string;
  children: ReactNode;
}) => {
  return (
    <div className={styles.nav_item}>
      <Link href={props.itemLink} className="text-xl flex flex-row gap-5">
          {props.children}
        <span className="lg:inline-block hidden">
          {props.itemTitle}
        </span>
      </Link>
    </div>
  );
};

export default NavItem;
