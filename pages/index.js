import Head from 'next/head';
import Layout from '../components/layouts/Layout';

function getChecklist(arr) {
  return (
    <ul className="fa-ul">
      {arr.map((item, index) => {
        return <li key={index}><span className="fa-li"><i className="fas fa-check-square" /></span>{item}</li>
      })}
    </ul>
  )
}

export default function Home() {
  let colClass = "col";
  let faExtra = 'fa-4x';
  let checkList = ["CSS and Bootstrap Layout", "Javascript Fundamentals", "Javascript Loops","Javascript Functions","Javascript DOM manipulation","Javascript If/Else","Javascript Boolean Logic"];
  return (
    <>
      <Head>
        <title>Javascript Mini-Site Main</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="utf-8" />
        <meta name="description" content="Javascript demo site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container">
          <div className="js p-4">
            <div className="row row-cols-1 row-cols-lg-2 g-1">
              <div className="col order-last order-lg-first">
                <h1>APP NAME</h1>               
                <p className="lead">Description goes here</p>
                {getChecklist(checkList)}
                <button className="btn btn-success" type="button">TRY IT</button>
                <h5 className="stack mt-5">
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
              </div>
              <div className="col order-first order-lg-last">Logo</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
