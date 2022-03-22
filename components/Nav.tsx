import Link from 'next/link';

type Props = {
  links: {
    text: string,
    href: string,
    className?: string,
  }[],
};

const Nav = ({ links }: Props) => (
  <nav>
    {
      links.map(({
        text,
        href,
        className,
      }, i) => (
        <div
          key={i}
          className={`nav-item ${className}`}
        >
          <Link
            href={href}
          >
            <a>{text}</a>
          </Link>
        </div>
      ))
    }
  </nav>
);

export default Nav;
