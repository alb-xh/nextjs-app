/* eslint-disable jsx-a11y/alt-text */
import Image, { Props as ImageProps } from './Image';

export type Props = {
  id: number,
  title: string,
  description?: string,
  image?: ImageProps,
};

const Post = ({
  title,
  description,
  image,
}: Props) => (
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

export default Post;
