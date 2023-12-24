import styles from "../../styles/profile.module.css";
import { signIn, useSession } from "next-auth/react";
import SignedIn from "./SignedIn";

const ProfileDetails = () => {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <div className="">
        <SignedIn />;
      </div>
    );
  } else {
    return (
      <div className={`mt-12 ${styles.prof_det}`}>
        <h1 className="text-2xl font-bold">Not signed in</h1>
        <h3 className="text-base text-neutral-500">Sign in to view profile</h3>
        <button className={styles.button} onClick={() => signIn()}>
          Sign in to view
        </button>
      </div>
    );
  }
};

export default ProfileDetails;
