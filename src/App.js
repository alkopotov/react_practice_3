import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { useRef } from 'react';

function App() {

  let headerRef = useRef()
  let footerRef = useRef()

  function autoScroll(target){
    target.current.scrollIntoView()
  }

  return (
    <div>
      <Header autoScroll={autoScroll} ref={{headerRef, footerRef}}/>
      <ProductList/>
      <Footer autoScroll={autoScroll} ref={{headerRef, footerRef}}/>
    </div>
  );
}

export default App;
