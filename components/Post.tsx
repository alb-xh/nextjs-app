/* eslint-disable jsx-a11y/alt-text */
import { MutableRefObject } from 'react';
import {
  Post as PostType,
  ObserverRef
} from '../types';
import { Image } from './Image';

export type PostProps = PostType & {
  observerRef?: ObserverRef,
};

export function Post ({
  title,
  description,
  image,
  observerRef,
}: PostProps) {
  return (
    <div
      className='post'
      ref={observerRef}
    >
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
  ) ;
};
