/* eslint-disable jsx-a11y/alt-text */
import { Post as PostType } from '../types';
import { Image } from './Image';

export type PostProps = PostType;

export const Post = ({
  title,
  description,
  image,
}: PostType) => (
  <div className='post'>
    <h3 className='post-title'>{title}</h3>
    {
      image && (
        <Image
          className='post-image'
          {...image}
        />
      )
    }
    {
      description && (
        <span className='post-description'>
          {description}
        </span>
      )
    }
    <div className='post-panel'>
      <button>Like</button>
      <button>Comment</button>
      <button>Share</button>
    </div>
    <div className='post-comments'></div>
  </div>
);
