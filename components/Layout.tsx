import type { ReactNode } from 'react';
import Meta from './Meta';

type Props = { children?: ReactNode };

const Layout = ({ children }: Props) => (
  <>
    <Meta
      title='My Blog'
      description='My NextJs blog app'
      keywords='NextJs, blog, app'
    />
    {children}
  </>
);

export default Layout;