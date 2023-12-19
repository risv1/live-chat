import LeftNav from "@/components/nav-section/LeftNav";
import Post from "@/components/overlay/Post";
import { useState } from "react";
import Head from "next/head";
import MessagesNav from "@/components/page-sections/MessagesNav";
import ViewMessages from "@/components/msg-section/ViewMessages";


const MessagesPage = () => {
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
        <title>Messages / LC</title>
      </Head>
      <div>
        <LeftNav isModalOpen={isModalOpen} onHandlePost={handlePost} />
        <Post onHandleClose={closePost} open={isModalOpen} />
      </div>
      <div className="flex flex-row">
        <div>
          <MessagesNav />
        </div>
        <div className="lg:block hidden">
          <ViewMessages />
        </div>
      </div>
    </>
  );
};

export default MessagesPage;
