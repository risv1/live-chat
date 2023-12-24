import styles from "../../styles/premium.module.css";

const PremiumTier = () => {
    return(
        <div className={`${styles.tier_container} bg-neutral-900 rounded-2xl`}>
            <div className="flex shadow-md justify-center p-5 shadow-blue-400 bg-neutral-700 rounded-2xl h-full w-full">  
                <h3 className="text-white p-5 text-4xl">W.I.P</h3>
            </div>
            <div className="flex shadow-md justify-center p-5 shadow-blue-400 bg-neutral-700 rounded-2xl h-full w-full">  
                <h3 className="text-white text-3xl">Come back soon!</h3>
            </div>
        </div>
    )
}

export default PremiumTier;