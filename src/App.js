import CardCard from "./components/card";
import Header from "./components/header";
import styles from './App.css'

function App() {
  return(
    <>
      <div className="header">
        <Header />
      </div>
      <div className="card-container">
        <CardCard />
        <CardCard />
        <CardCard />
        <CardCard />
      </div>
    </>
    
    
  );
}

export default App;
