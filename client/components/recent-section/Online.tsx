import styles from "../../styles/recent.module.css";
import { Mail } from "lucide-react";

type OnlineUser = {
  id: number;
  name: string;
  message: any;
};

const Online = () => {
  const topics: OnlineUser[] = [
    { id: 1, name: "Person 1", message: <Mail /> },
    { id: 2, name: "Person 2", message: <Mail /> },
    { id: 3, name: "Person 3", message: <Mail /> },
  ];

  return (
    <div className={`${styles.trending} bg-neutral-800 mt-5`}>
      <h1 className="text-xl font-bold">Currently Online</h1>
      <ul className="list-none pl-0">
        {topics.map((topic: OnlineUser) => (
          <li
            key={topic.id}
            className="mt-4 h-12 rounded-xl p-2 hover:bg-neutral-700 flex flex-row items-center"
          >
            <h1 className="text-base font-bold">{topic.name}</h1>
            <div className="ml-auto p-2 hover:bg-neutral-500 rounded-3xl">{topic.message}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Online;
