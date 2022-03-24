import Link from 'next/link';

export type NavProps = {
  links: {
    text: string,
    href: string,
    className?: string,
  }[],
};

export const Nav = ({ links }: NavProps) => (
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
