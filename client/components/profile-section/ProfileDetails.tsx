import styles from "../../styles/profile.module.css";
import { signIn, useSession } from "next-auth/react";
import SignedIn from "./SignedIn";
import { io, Socket } from "socket.io-client";
import { v4 as randomUUID } from 'uuid';
import { useEffect, useState } from "react";

const ProfileDetails = () => {
  const { status, data: session } = useSession();
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    if (session && !socket) {
      const newSocket = io('http://localhost:8000');
      newSocket.emit('connection', { username: session?.user?.name, userId: randomUUID() });
      setSocket(newSocket);
      console.log(socket)
    }
  }, [status, session, socket]);

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
        <button className={styles.button} onClick={()=>signIn()}>
          Sign in to view
        </button>
      </div>
    );
  }
};

export default ProfileDetails;
