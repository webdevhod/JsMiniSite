import { useRouter } from "next/router";

export default function Header(props) {
  let router = useRouter();
  
  function getNavLinks() {
    return props.links.map((item, index) => {
      if (router.pathname == item[1]) {
        return (<a className="nav-link active" href={`${item[1]}`} key={index} aria-current="page">{item[0]}</a>);
      } else {
        return (<a className="nav-link" href={`${item[1]}`} key={index}>{item[0]}</a>);
      }
    })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {getNavLinks()}
          </div>
        </div>
      </div>
    </nav>
  );
}