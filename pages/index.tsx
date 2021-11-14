import Head from 'next/head';
import { NextPage } from 'next';
import { defaultPageTitle } from '@utils/constant';
import Layout from '@components/Layout';
import Card from '@components/Card';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title key="page-title">{defaultPageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Card color="#fff111" />
        <Card color="#fff111" />
        <Card color="#fff111" />
        <Card color="#fff111" />
      </Layout>
    </>
  );
};

export default Home;
