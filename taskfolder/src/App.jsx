import Routes from "./containers/Routes"
import styles from './App.scss';
import { Link } from "@reach/router";

function App() {
  return (
    <div className="App">
      <div className={styles.head}>
        <h1>This is the header</h1>
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
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
