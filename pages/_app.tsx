import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Layout from '../components/Layout';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout
    title='My Blog'
    description='My NextJs blog app'
    keywords={[
      'NextJs',
      'blog',
      'app',
    ]}
    links={[
      ['Home', '/'],
      ['About', '/about']
    ]}
    email='albano.xhafaj10@gmail.com'
  >
    <Component {...pageProps} />
  </Layout>
);

export default App;
