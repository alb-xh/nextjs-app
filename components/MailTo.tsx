import type { ReactNode } from 'react';

export type MailToProps = {
  email: string,
  children?: ReactNode,
};

export const MailTo = ({
  email,
  children
}: MailToProps) => (
  <a
    className='mailTo'
    href={`mailto:${email}`}
  >
    {children}
  </a>
);
