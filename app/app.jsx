const React = require("react");
const ReactDOM = require("react-dom/client");
const Router = require("react-router")
const RouterDOM = require("react-router-dom");

const Route = RouterDOM.Route;
const Routes = RouterDOM.Routes;

const NumericQuestion = require("./components/NumericQuestion.jsx");
const TextQuestion = require("./components/TextQuestion.jsx");
const SurveyForm = require("./components/SurveyForm.jsx")

const MotivationComplex = require("./logic/motivationCalc");
const questionIds = require("./logic/questionIDs")

const rootRef = document.getElementById("body");
const root = ReactDOM.createRoot(rootRef);

const form = <SurveyForm handleSubmit={onSubmit} />

function onSubmit(values) {

}

root.render(
    <p>Hello</p> 
)

