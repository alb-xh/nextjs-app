import NextImage from 'next/image';

type Props = {
  className?: string,
  src: string,
  alt: string,
  width: number,
  height: number,
};

const Image = ({
  className,
  ...nextProps
}: Props) => (
  <div className={`image ${className}`}>
    <NextImage {...nextProps }/>
  </div>
);

export default Image;