import Link from 'next/link';

type Props = {
  links: [string, string][],
};

const Nav = ({ links }: Props) => (
  <header>
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
  </header>
);

export default Nav;
