import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Coin from './pages/Coin';
import { makeStyles } from '@mui/styles';
import Context from "./context";

function App() {
  const useStyles = makeStyles(() => ({
    app: {
      backgroundColor: "#121212",
      minHeight: "100vh",
      padding: 0
    }
  }))

  const classes = useStyles();

  return (
    <Context>
      <BrowserRouter>
        <div className={classes.app}>
          <Header />
          <Route path="/" component={Home} exact />
          <Route path="/coins/:id" component={Coin} />
        </div>
      </BrowserRouter>
    </Context>
  );
}

export default App;
