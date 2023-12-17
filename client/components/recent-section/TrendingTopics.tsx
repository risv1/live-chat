import styles from "../../styles/recent.module.css";

type Topic = {
    id: number,
    name: string,
    times: number,
}

const TrendingTopics = () => {
    
    const topics: Topic[] = [
      { id: 1, name: "#Topic 1", times: 12 },
      { id: 2, name: "#Topic 2", times: 12 },
      { id: 3, name: "#Topic 3", times: 12 },
    ];
  
    return (
      <div className={`${styles.trending} bg-neutral-800 mt-5`}>
        <h1 className="text-xl font-bold">What's happening</h1>
        <ul className="list-none pl-0"> 
          {topics.map((topic: Topic) => (
            <li key={topic.id} className="mt-4 rounded-xl p-2 hover:bg-neutral-700"> 
              <h1 className="text-base font-bold">{topic.name}</h1>
              <p className="text-base text-gray-400">{topic.times} posts</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default TrendingTopics;