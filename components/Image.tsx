import NextImage from 'next/image';
import { Image as ImageType } from '../types';

export type ImageProps = ImageType & {
  className?: string,
};

export const Image = ({
  className,
  ...image
}: ImageProps) => (
  <div className={`image ${className}`}>
    <NextImage {...image} />
  </div>
);
