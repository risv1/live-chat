
const PremiumFilter = (props: {onHandleFilter: ()=>void, onResetFilter: ()=>void}) => {
  return (
    <div className="mt-14 flex flex-row items-center">
      <div onClick={props.onResetFilter} className="flex justify-center items-center hover:bg-neutral-800 w-full h-12 border-b-2 border-neutral-800 hover:border-blue-500  text-white">
        Free Tier
      </div>
      <div onClick={props.onHandleFilter} className="flex justify-center items-center hover:bg-neutral-800 w-full h-12 border-b-2 border-neutral-800 hover:border-blue-500  text-white">
        Premium Tier
      </div>
    </div>
  );
};

export default PremiumFilter;
