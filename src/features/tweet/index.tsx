"use client"

import { TweetForm } from './components/TweetForm';
import { useTweets } from './hooks/useTweets';
import { Tweet } from './types';

// コンポーネントの先頭部分は変更なし
export const TweetFeature = () => {
  const { tweets, addTweet } = useTweets();

  const handleTweetSubmit = (tweetData: Omit<Tweet, 'id' | 'createdAt'>) => {
    addTweet(tweetData);
  };

  return (
    <div>
      <TweetForm onTweetSubmit={handleTweetSubmit} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tweets.map((tweet) => (
          <li key={tweet.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <p>{tweet.message}</p>
            <small>{tweet.createdAt.toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};