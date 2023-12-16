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
      <Link href={props.itemLink} className="text-2xl flex flex-row gap-5">
        <div className="mt-1">
          {props.children}
        </div>
        <span className="lg:inline-block hidden">
          {props.itemTitle}
        </span>
      </Link>
    </div>
  );
};

export default NavItem;
