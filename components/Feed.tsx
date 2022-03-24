import Post, { Props as PostProps } from './Post';

export type Props = {
  title: string,
  posts: PostProps[],
};

const Feed = ({
  title,
  posts
}: Props) => (
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

export default Feed;
