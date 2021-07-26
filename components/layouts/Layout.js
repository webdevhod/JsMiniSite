import Header from '../Header';
import Footer from '../Footer';
import Script from 'next/script';

export default function Layout(props) {
  return (
    <>
      <div className="d-flex flex-column vh-100 justify-content-between">
        <Header links={props.links} />
        <main className="flex-grow-1 bg-white">
          {props.children}
        </main>
        <Footer />
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
    </>
  )
}
