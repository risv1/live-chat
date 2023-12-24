import styles from "../../styles/premium.module.css";

const FreeTier = () => {
  return (
    <div className={`${styles.tier_container} bg-neutral-900 rounded-2xl`}>
      <div className="flex justify-center shadow-md shadow-blue-400 bg-neutral-700 rounded-2xl p-3 h-full w-full">
        <h1 className="text-white text-3xl font-bold">Free</h1>
      </div>
      <div className="flex shadow-md shadow-blue-400 bg-neutral-700 rounded-2xl h-full w-full">
        <div className="p-5 h-full w-full ml-5">
          <div className="flex flex-col gap-2">
                <h3 className="font-bold text-white text-2xl">Customization</h3>
                <h3 className="text-neutral-400 text-base">- Roles</h3>
                <h3 className="text-neutral-400 text-base">- Upload avatar</h3>
                <h3 className="text-neutral-400 text-base">- Upload banner</h3>
          </div>
        </div>
      </div>
      <button className="shadow-md shadow-neutral-300 h-10 w-full bg-gray-400 rounded-2xl hover:bg-white">Subscribe</button>
    </div>
  );
};

export default FreeTier;
