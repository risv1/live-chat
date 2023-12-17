import ChatNav from "@/components/page-sections/ChatNav";
import LeftNav from "@/components/nav-section/LeftNav";
import Post from "@/components/overlay/Post";
import RecentNav from "@/components/recent-section/RecentNav";
import { useState } from "react";

const NotificationsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePost = () => {
    setIsModalOpen(true);
  };

  const closePost = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <LeftNav isModalOpen={isModalOpen} onHandlePost={handlePost} />
        <Post onHandleClose={closePost} open={isModalOpen} />
      </div>
      <div className="flex flex-row">
        <div>
          <ChatNav />
        </div>
        <div className="lg:block hidden">
          <RecentNav />
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;