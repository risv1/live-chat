import { signOut, useSession } from "next-auth/react";
import styles from "../../styles/profile.module.css";
import Image from "next/image";

const SignedIn = () => {
  const { data: session } = useSession();
  const userImage = session?.user?.image;

  const handleSignOut = () => {
    const isConfirmed = window.confirm("Are you sure you want to sign out?");

    if (isConfirmed) {
      signOut();
    }
  };

  return (
    <div className={styles.prof_det}>
      <div className="bg-neutral-500 w-full h-40"></div>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          {userImage && (
              <Image
                src={userImage}
                width={60}
                height={60}
                alt="UserImage"
                className="rounded-full"
              />
          )}
          <div>
            <h3 className="text-2xl font-bold text-white">{session?.user?.name}</h3>
            <h3 className="text-lg text-gray-500">{session?.user?.email}</h3>
          </div>
        </div>
      </div>
      <button
          className={`${styles.signOutButton} bg-blue-500 text-white px-4 py-2 rounded-md`}
          onClick={handleSignOut}
        >
          Sign out
        </button>
    </div>
  );
};

export default SignedIn;
