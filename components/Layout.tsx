import type { ReactNode } from 'react';
import Meta from './Meta';
import Nav from './Nav';

type Props = { children?: ReactNode };

const Layout = ({ children }: Props) => (
  <>
    <Meta
      title='My Blog'
      description='My NextJs blog app'
      keywords='NextJs, blog, app'
    />
    <Nav
      links={[
        ['Home', '/'],
        ['About', '/about']
      ]}
    />
    {children}
  </>
);

export default Layout;