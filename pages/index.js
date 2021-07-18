import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import {useEffect} from 'react';

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
                <p className="lead">Enter numeric values for start and end, and click run. </p>
                <form>
                  <div className="row row-cols-2">
                    <div className="col">
                      <label htmlFor="startValue" className="form-label">Start</label>
                      <input type="number" className="form-control" id="startValue" min="0" max="499" value="0" />
                    </div>
                    <div className="col">
                      <label htmlFor="endValue" className="form-label">End</label>
                      <input type="number" className="form-control" id="endValue" min="1" max="500" value="10" />
                    </div>
                  </div>
                </form>
                <div className="options mt-3 d-flex flex-column align-items-end">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="odd" id="even" defaultChecked />
                    <label className="form-check-label" htmlFor="even">
                      Even
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="odd" id="odd" />
                    <label className="form-check-label" htmlFor="odd">
                      Odd&nbsp;
                    </label>
                  </div>
                  <button type="button" className="btn btn-danger border-2 mt-2">Run</button>
                </div>
                <table className="table mt-3 d-none" id="results">
                  <thead>
                    <tr>
                      <th scope="col">Results</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0</td>
                    </tr>
                    <tr className="table-primary">
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
