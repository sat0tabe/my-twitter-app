import type { NextPage } from 'next';
import { TweetFeature } from '../features/tweet';

const Home: NextPage = () => {
  return (
    <div>
      <TweetFeature />
    </div>
  );
};

export default Home;