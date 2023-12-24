import LeftNav from "@/components/nav-section/LeftNav";
import Post from "@/components/overlay/Post";
import RecentNav from "@/components/recent-section/RecentNav";
import Head from "next/head";
import ExploreNav from "@/sections/ExploreNav";
import { useState } from "react";

const ExplorePage = () => {
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
        <title>Explore / LC</title>
      </Head>
      <div>
        <LeftNav isModalOpen={isModalOpen} onHandlePost={handlePost} />
        <Post onHandleClose={closePost} open={isModalOpen} />
      </div>
      <div className="flex flex-row">
        <div>
          <ExploreNav />
        </div>
        <div className="lg:block hidden">
          <RecentNav />
        </div>
      </div>
    </>
  );
};

export default ExplorePage;
