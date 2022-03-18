import Head from 'next/head';

type Props = Record<string, string> & { title: string };

const Meta = ({ title, ...meta }: Props) => (
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

export default Meta;