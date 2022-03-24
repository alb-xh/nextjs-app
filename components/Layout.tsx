import type { ReactNode } from 'react';

import { Image } from './Image';
import { Meta, MetaProps } from './Meta';
import { Nav, NavProps } from './Nav';
import { MailTo, MailToProps } from './MailTo';

export type Props = Pick<MetaProps, 'title'> & NavProps & MailToProps & {
  description?: string,
  keywords?: string[],
};

export const Layout = ({
  title,
  description,
  keywords,
  links,
  email,
  children,
}: Props) => (
  <>
    <Meta
      title={title}
      description={description || ''}
      keywords={keywords?.join(',') || ''}
    />
    <header>
      <Image
        className='header-logo'
        src='/favicon.ico'
        alt='logo'
        width={48}
        height={48}
      />
      <Nav links={links} />
    </header>
    <main>
      {children}
    </main>
    <footer>
      {
        email &&
        <MailTo email={email}>
          Contact me
        </MailTo>
      }
    </footer>
  </>
);
