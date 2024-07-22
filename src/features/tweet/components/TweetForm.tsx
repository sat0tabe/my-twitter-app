import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { Tweet } from '../types';

interface Props {
  onTweetSubmit: (tweet: Omit<Tweet, 'id' | 'createdAt'>) => void;
}

export const TweetForm: React.FC<Props> = ({ onTweetSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    onTweetSubmit({ message });
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="What's happening?"
        variant="outlined"
        fullWidth
        multiline
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Tweet
      </Button>
    </form>
  );
};