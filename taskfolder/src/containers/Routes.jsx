import { Router } from "@reach/router";
import Weather from "../components/Weather"
import Quiz from "../components/Quiz"
import Football from "../components/Football"

const Routes = (props) => {


    return (
        <Router>
            <Weather path="/weather"/>
            <Quiz path="/quiz"/>
            <Football path="/Football"/>
        </Router>
    )
};

export default Routes;
