import {
  Post as PostType,
  ObserverRef,
} from '../types';
import { Image } from './Image';

export type PostProps = PostType & {
  observerRef?: ObserverRef,
};

export function Post({
  title,
  description,
  image,
  observerRef,
}: PostProps) {
  return (
    <div
      className="post"
      ref={observerRef}
    >
      <h3 className="post-title">{title}</h3>
      {
        image && (
          <Image
            className="post-image"
            {...image}
          />
        )
      }
      {
        description && (
          <span className="post-description">
            {description}
          </span>
        )
      }
      <div className="post-panel">
        <button type="button">Like</button>
        <button type="button">Comment</button>
        <button type="button">Share</button>
      </div>
      <div className="post-comments" />
    </div>
  );
}
