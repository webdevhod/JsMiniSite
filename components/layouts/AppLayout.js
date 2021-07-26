import Head from 'next/head';
import Layout from './Layout';
import Script from 'next/script';

function getStackIcons() {
  return (
    <h5 className="stack mt-4">
      <div className="d-flex gap-2 gap-md-3 gap-lg-4">
          <i className="fab fa-html5 stack__icon stack__icon--html5" />
          <i className="fab fa-css3-alt stack__icon stack__icon--css3" />
          <i className="fab fa-bootstrap stack__icon stack__icon--bootstrap" />
          <i className="fab fa-js stack__icon stack__icon--javascript" />
      </div>
    </h5>
  );
}

export default function AppLayout(props) { 
  function getChecklist(checkList=props.metaData.checkList) {
    return (
      <ul className="fa-ul">
        {checkList.map((item, index) => {
          return <li key={index}><span className="fa-li"><i className="fas fa-check-square" /></span>{item}</li>
        })}
      </ul>
    )
  }
  
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
              <div className="col order-last order-lg-first">
                <div className="logo-container text-center">
                  <i className={`app-logo ${props.metaData.iconClass}`}></i>
                </div>
                <h1 className="text-uppercase fw-bold text-danger">{props.metaData.title}</h1>               
                <p className="lead">{props.metaData.description}</p>
                <div className="d-flex mb-4">
                  <button className="btn btn-warning text-uppercase" type="button" onClick={() => {props.metaData.handleHighlight(true)}}>TRY IT OUT</button>
                </div>
                {getChecklist(props.metaData.checkList)}
                {getStackIcons()}
              </div>
              <div className={`col order-first order-lg-last pt-0 pt-lg-4 mb-5 mb-lg-0 px-3 js__app${props.metaData.highlight ? " js__app--highlight rounded" : ""}`}>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Script src={props.metaData.jsFile} />
    </>
  )
}
