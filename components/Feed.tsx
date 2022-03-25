import {
  useState,
  useEffect,
} from 'react';
import { useInfinateScrolling } from '../hooks';
import { Post as PostType } from '../types';
import { ApiClient } from '../libs';
import { Post } from './Post';

export type FeedProps = {
  title: string,
};

export const Feed = ({
  title,
}: FeedProps) => {
  const [ hasMore, setHasMore ] = useState(true);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ page, setPage ] = useState(1);
  const [ size ] = useState(10);
  const [ posts, setPosts ] = useState<PostType[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const apiClient = new ApiClient();
    apiClient
      .getPosts({ page, size })
      .then((newPosts) => {
        if (!newPosts || !newPosts.length) setHasMore(false);
        else {
          setPosts((posts) => [ ...posts, ...newPosts ]);
          setIsLoading(false);
        }
      });

  }, [ page, size ]);

  const ref = useInfinateScrolling({
    isLoading,
    hasMore,
    setPage,
  });

  return (
    <div className='feed'>
      <h1 className='feed-title'>
        {title}
      </h1>
      {
        posts.map((post, i) => {
          const isLastPost = i === (posts.length - 1);
          return (
            <Post
              key={post.id}
              observerRef={isLastPost ? ref : undefined}
              {...post}
            />
          );
        })
      }
    </div>
  );
}
