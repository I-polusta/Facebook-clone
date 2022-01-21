import React, { useEffect, useState } from "react";
import "./Feed.css";
import db, { firebaseConfig } from "./firebase";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

function Feed() {
  const [posts, setPosts] = useState([]);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
