import Head from 'next/head';
import Layout from '../../components/layouts/Layout';

export default function Javascript() {
  return (
    <>
      <Head>
        <title>Javascript Main Site</title>
        <meta name="description" content="Javascript demo site" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container">
          <div className="js p-4">
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col">
                <h1>Javascript</h1>
              </div>
              <div className="col h-100">Logo</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
