import type { ReactNode } from 'react';

import Image from './Image';
import Meta, { Props as MetaProps } from './Meta';
import Nav, { Props as NavProps } from './Nav';
import MailTo, { Props as MailToProps } from './MailTo';

export type Props = Pick<MetaProps, 'title'> & NavProps & MailToProps & {
  description?: string,
  keywords?: string[],
};

const Layout = ({
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

export default Layout;
