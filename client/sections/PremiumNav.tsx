import { useState } from "react";
import styles from "../styles/premium.module.css";
import PremiumFilter from "@/components/premium-section/PremiumFilter";
import PremiumTier from "@/components/premium-section/PremiumTier";
import FreeTier from "@/components/premium-section/FreeTier";

const PremiumNav = () => {

    const [dispPremium, setDispPremium] = useState<boolean>(false);

    const handleFilter = () => {
        setDispPremium(true)
    }

    const handleReset = () => {
        setDispPremium(false)
    }

    return(
    <div className={styles.prem_nav}>
      <div className={`fixed ${styles.prem_head} `}>
        <h1 className="text-white ml-7 font-bold text-xl">Premium</h1>
      </div>
      <div>
        <PremiumFilter onHandleFilter={handleFilter} onResetFilter={handleReset} /> 
      </div>
      <div className="p-5">
        {dispPremium ? (
            <PremiumTier />
        ):(
            <FreeTier />
        )}
      </div>
    </div>
    )
}

export default PremiumNav;