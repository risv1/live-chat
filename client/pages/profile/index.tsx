import LeftNav from "@/components/nav-section/LeftNav";
import Post from "@/components/overlay/Post";
import RecentNav from "@/components/recent-section/RecentNav";
import { useState } from "react";
import Head from "next/head";
import ProfileNav from "@/components/page-sections/ProfileNav";

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePost = () => {
    setIsModalOpen(true);
  };

  const closePost = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Profile / LC</title>
      </Head>
      <div>
        <LeftNav isModalOpen={isModalOpen} onHandlePost={handlePost} />
        <Post onHandleClose={closePost} open={isModalOpen} />
      </div>
      <div className="flex flex-row">
        <div>
          <ProfileNav />
        </div>
        <div className="lg:block hidden">
          <RecentNav />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;