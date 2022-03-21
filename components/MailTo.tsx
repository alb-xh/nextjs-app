import type { ReactNode } from 'react';

type Props = {
  email: string;
  children?: ReactNode
};

const MailTo = ({
  email,
  children
}: Props) => (
  <a
    className='mailTo'
    href={`mailto:${email}`}
  >
    {children}
  </a>
);

export default MailTo;