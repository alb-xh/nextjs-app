import { useFetch } from '../hooks';
import { Post as PostType } from '../types';
import { Post } from './Post';

export type FeedProps = {
  title: string,
};

export const Feed = ({
  title,
}: FeedProps) => {
  const [isLoading, posts ] = useFetch<PostType[]>('/api/posts');
  if (isLoading || !posts) return (<></>);

  return (
    <div className='feed'>
      <h1 className='feed-title'>
        {title}
      </h1>
      {
        posts.map((post) => (
          <Post
            key={post.id}
            {...post}
          />
        ))
      }
    </div>
  );
}
