import Header from '../Header';
import Footer from '../Footer';

export default function Layout(props) {
  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <Header links={props.links} />
      <main className="flex-grow-1 bg-white">
        {props.children}
      </main>
      <Footer />
    </div>
  )
}
