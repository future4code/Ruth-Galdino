import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MatchCards from './components/MatchCards';
import './App.css';

function App() {
  //const [currentPage, setCurrentPage] = useState(false)

  return (
    <div className="App">

      
    <Header/>
    <Footer/>
    
    <MatchCards/>

  
           
    </div> 

  );
}


export default App;
