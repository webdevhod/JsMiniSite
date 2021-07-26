import Head from 'next/head';
import Layout from './Layout';
import {useEffect, useState} from 'react';
import Prism from 'prismjs';
import prismLineNumbers from '../js/prism-line-numbers';
import axios from "axios";

export default function CodeLayout(props) { 
  let [code, setCode] = useState("");
 
  function getJsFile(path=`http://localhost:3000${props.metaData.jsFile}`) {
    try {
      axios.get(path)
      .then(response => {
        return response.data;
      })
      .then(text => {
        setCode(text)
      })
    } catch(error) {
        console.log(error)
      }
  }

  useEffect(() => {
    getJsFile();
  }, []);

  useEffect(() => {
    prismLineNumbers();
    Prism.highlightAll();
  }, [code]);
  
  return (
    <>
      <Head>
        <title>{props.metaData.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content={props.metaData.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout links={props.metaData.links}>
        <div className="container">
          <div className="js p-4">
            <div className="row row-cols-1 row-cols-lg-2 g-1">
              <div className="col col-lg-8">
                <pre className="line-numbers">
                  <code className="language-javascript">
                    {code}
                  </code>
                </pre>
              </div>
              <div className="col col-lg-4">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
