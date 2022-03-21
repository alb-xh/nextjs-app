import type { ReactNode } from 'react';
import Image from 'next/image';

import Meta from './Meta';
import Nav from './Nav';
import MailTo from './MailTo';

type Props = {
  title: string,
  description?: string,
  keywords?: string[],
  links: [string, string][],
  email?: string,
  children?: ReactNode,
}
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
        src='/favicon.ico'
        alt='logo'
        width={48}
        height={48}
      />
      <Nav links={links} />
    </header>

    {children}
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
