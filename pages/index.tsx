import type { NextPage } from 'next';
import Feed from '../components/Feed';

import { Props } from '../components/Post';
const posts: Props[] = [
  {
    id: 1,
    title: 'My first post',
    description: 'This is my first test post!',
    image: {
      src: '/images/posts/flowers.png',
      alt: 'Image 1',
      width: 500,
      height: 400,
    },
  },
  {
    id: 2,
    title: 'My second post',
    description: 'This is my second test post!',
  },
  {
    id: 3,
    title: 'My third post',
    image: {
      src: '/images/posts/flowers.png',
      alt: 'Image 3',
      width: 500,
      height: 400,
    },
  },
  {
    id: 4,
    title: 'My fourth post',
  }
];

const Home: NextPage = () => (
  <Feed
    title='Feed'
    posts={posts}
  />
);

export default Home;
