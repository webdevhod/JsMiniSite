import Link from "next/link";
import { useRouter } from "next/router";

export default function Header(props) {
  let router = useRouter();
  function getNavLinks() {
    return props.links.map((item, index) => {
      if (router.pathname == item[1]) {
        return (<Link href={`${item[1]}`}><a className="nav-link active" aria-current="page" key={index}>{item[0]}</a></Link>);
      } else {
        return (<Link href={`${item[1]}`}><a className="nav-link" key={index}>{item[0]}</a></Link>);
      }
    })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="#"><a className="navbar-brand">Navbar</a></Link>
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