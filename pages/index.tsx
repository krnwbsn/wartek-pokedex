import Head from 'next/head';
import { NextPage } from 'next';
import { defaultPageTitle } from '@utils/constant';
import Layout from '@components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title key="page-title">{defaultPageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <p>test</p>
      </Layout>
    </>
  );
};

export default Home;
