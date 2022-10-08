const React = require("../node_modules/react/umd/react.development")
const ReactDOM = require("../node_modules/react-dom/client.js")
const MotivationData = require("./logic/motivationCalc.js")
const Constants = require("./logic/constants.js")
const SurveyForm = require("./components/SurveyForm.jsx")
const ResultsForm = require("./components/ResultsForm.jsx")



const canvas = document.getElementById("body");
const root = ReactDOM.createRoot(canvas);

var motivComplex = new MotivationData();

function onSurveyFinished(vals) {
    motivComplex.calculateInMotivation(vals[Constants.questionId.WorkSatifactionMark], vals[Constants.questionId.SelfRealizationMark]);
    motivComplex.calculateOutterPositive(vals[Constants.questionId.MoneyAwardMark], vals[Constants.questionId.SelfDevelopMark], vals[Constants.questionId.SocialPrestigeMark]);
    motivComplex.calculateOutterNegative(vals[Constants.questionId.CriticAvoidMark], vals[Constants.questionId.TroubleAvoidMark]);

    let inmotVal = motivComplex.inMotivation.toFixed(2)
    let outposmotVal = motivComplex.outterPositive.toFixed(2)
    let outnegmotVal = motivComplex.outterNegative.toFixed(2)

    let isOptimnal = motivComplex.checkIfComplexOptimal();

    root.render(<ResultsForm inMot={inmotVal} outPos={outposmotVal} outNeg={outnegmotVal} complexType={isOptimnal}/>)
}

root.render(
        <SurveyForm handleSubmit={onSurveyFinished} />
    );
