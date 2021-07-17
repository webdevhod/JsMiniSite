export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container p-3">
        <div className="row row-cols-1 row-cols-lg-3 gy-1 gy-lg-0">
          <div className="col d-flex align-items-center order-last order-lg-0">
            © {new Date().getFullYear()} WebDevHod.com
          </div>
          <div className="col d-flex align-items-center justify-content-lg-center order-first order-lg-1">
            <h2>WebDevHod</h2>
          </div>
          <div className="col d-flex align-items-center justify-content-lg-end order-2">
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}