import styles from '../styles/Nav.module.css';

import Link from 'next/link';

type Props = {
  links: [string, string][],
};

const Nav = ({ links}: Props) => (
  <div className={styles.nav}>
    {
      links.map(([ text, href ], i) => (
        <Link
          key={i}
          href={href}
        >
          <a>{text}</a>
        </Link>
      ))
    }
  </div>
);

export default Nav;
