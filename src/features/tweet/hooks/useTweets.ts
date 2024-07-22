// features/tweet/hooks/useTweets.ts
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Tweet } from "../types";

export const useTweets = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const storedTweets = localStorage.getItem("tweets");
    if (storedTweets) {
      setTweets(JSON.parse(storedTweets));
    }
  }, []);

  const addTweet = (tweetData: Omit<Tweet, "id" | "createdAt">) => {
    const newTweet: Tweet = {
      id: uuidv4(),
      createdAt: new Date(),
      ...tweetData,
    };
    const updatedTweets = [newTweet, ...tweets];
    setTweets(updatedTweets);
    localStorage.setItem("tweets", JSON.stringify(updatedTweets));
  };

  return { tweets, addTweet };
};
