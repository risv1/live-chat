import styles from "../../styles/profile.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const ProfileDetails = () => {
    const {data: session} = useSession();

    const { push } = useRouter();
    const handleLogin = () => {
        push("/login");
    }


    if(session){
        return <h1 className="text-white text-2xl mt-20">Signed In</h1>
    }
    return(
        <div className={styles.prof_det}>
            <h1 className="text-2xl font-bold">Not signed in</h1>
            <h3 className="text-base text-neutral-500">Sign in to view profile</h3>
            <button className={styles.button} onClick={handleLogin}>Sign in to view</button>
        </div>
    )
}   

export default ProfileDetails;