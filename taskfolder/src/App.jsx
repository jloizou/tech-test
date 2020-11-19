import Routes from "./containers/Routes"
import styles from './App.module.scss';
import { Link } from "@reach/router";

function App() {
  return (
    <div className="App">
      <div className={styles.head}>
        <h1>James' Miscallaneous Apps!</h1>
        <div className={styles.btnCont}>
          <Link to="/weather">
          <button >Weather</button>
          </Link>
          <Link to="/quiz">
          <button>Quiz</button>
          </Link>
          <Link to="/Football">
          <button>Football</button>
          </Link>
        </div>
      </div>
      
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
