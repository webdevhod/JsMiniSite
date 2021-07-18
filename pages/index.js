import Head from 'next/head';
import Layout from '../components/layouts/Layout';

function getChecklist() {
  let checkList = ["CSS and Bootstrap Layout", "Javascript Fundamentals", "Javascript Loops","Javascript Functions","Javascript DOM manipulation","Javascript If/Else","Javascript Boolean Logic"];
  return (
    <ul className="fa-ul">
      {checkList.map((item, index) => {
        return <li key={index}><span className="fa-li"><i className="fas fa-check-square" /></span>{item}</li>
      })}
    </ul>
  )
}

function getStackIcons() {
  let colClass = "col-3";
  let faExtra = 'fa-4x';
  return (
    <h5 className="stack mt-4">
    <div className="row">
      <div className={`${colClass} stack--html5`}>
        <i className={`fab fa-html5 ${faExtra}`} />
      </div>
      <div className={`${colClass} stack--css3`}>
        <i className={`fab fa-css3-alt ${faExtra}`} />
      </div>
      <div className={`${colClass} stack--bootstrap`}>
        <i className={`fab fa-bootstrap ${faExtra}`} />
      </div>
      <div className={`${colClass} stack--javascript`}>
        <i className={`fab fa-js ${faExtra}`} />
      </div>
    </div>
  </h5>

  );
}

export default function Home() {
  let appName = "Number Shader";
  let description = "This Javascript application will print out numbers between a range, and will highlight the even or odd numbers.";
  return (
    <>
      <Head>
        <title>Javascript Mini-Site Main</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="description" content="Javascript demo site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container">
          <div className="js p-4">
            <div className="row row-cols-1 row-cols-lg-2 g-1">
              <div className="col order-last order-lg-first">
                <div className="logo-container text-center">
                  <i className="fas fa-sort-numeric-up app-logo"></i>
                </div>
                <h1 className="text-uppercase fw-bold text-danger">{appName}</h1>               
                <p className="lead">{description}</p>
                <div className="d-flex mb-4">
                  <button className="btn btn-warning text-uppercase" type="button">TRY IT OUT</button>
                </div>
                {getChecklist()}
                {getStackIcons()}
              </div>
              <div className="col order-first order-lg-last">
                  {/* <h2 className="fw-bold text-danger app-logo-name">{appName}</h2> */}
                {/* <div className="logo-container text-center">
                  <i className="fas fa-sort-numeric-up app-logo"></i>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
