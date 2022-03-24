import Head from 'next/head';

export type MetaProps = Record<string, string> & {
  title: string
};

export const Meta = ({ title, ...meta }: MetaProps) => (
  <Head>
    <meta charSet='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    {
      Object.entries(meta).map(([ name, content ], i) => (
        <meta
          key={i}
          name={name}
          content={content}
        />
      ))
    }
    <title>{title}</title>
  </Head>
);
