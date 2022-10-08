const React = require("../../node_modules/react/umd/react.development")
const Constants = require("../logic/constants.js")
const TextQuestion = require("./TextQuestion.jsx")
const NumericQuestion = require("./NumericQuestion.jsx")



class SurveyForm extends React.Component {  
        constructor(props) {
            super(props);
            this.surveyResults = {}

            this.countOfQuestions = 7
        }

        validateInput()
        {
            if(Object.keys(this.surveyResults).length === this.countOfQuestions)
                return true;
            
            return false;
        }
        
        render() {
            return <form className={Constants.styleClasses.surveyForm}>

                <ol>
                    <li><TextQuestion text="Фамилия Имя Отчество" id={Constants.questionId.PersonName} /></li>
                    <li><TextQuestion text="Стаж" id={Constants.questionId.Experience} /></li>
                    <li><NumericQuestion handleMarkChange={(val) => { this.surveyResults[Constants.questionId.MoneyAwardMark] = val }} text="Денежный заработок" id={Constants.questionId.MoneyAwardMark} /></li>
                    <li><NumericQuestion handleMarkChange={(val) => { this.surveyResults[Constants.questionId.SelfDevelopMark] = val }} text="Стремление к продвижению по работе" id={Constants.questionId.SelfDevelopMark} /></li>
                    <li><NumericQuestion handleMarkChange={(val) => { this.surveyResults[Constants.questionId.CriticAvoidMark] = val }} text="Стремление избежать критики со стороны руководства или коллег" id={Constants.questionId.CriticAvoidMark} /></li>
                    <li><NumericQuestion handleMarkChange={(val) => { this.surveyResults[Constants.questionId.TroubleAvoidMark] = val }} text="Стремление избежать возможных наказаний/неприятностей" id={Constants.questionId.TroubleAvoidMark} /></li>
                    <li><NumericQuestion handleMarkChange={(val) => { this.surveyResults[Constants.questionId.SocialPrestigeMark] = val }} text="Потребность в достижении социального престижа и уважения со стороны других" id={Constants.questionId.SocialPrestigeMark} /></li>
                    <li><NumericQuestion handleMarkChange={(val) => { this.surveyResults[Constants.questionId.WorkSatifactionMark] = val }} text="Удовлетворение от самого процесса и результата работы" id={Constants.questionId.WorkSatifactionMark} /></li>
                    <li><NumericQuestion handleMarkChange={(val) => { this.surveyResults[Constants.questionId.SelfRealizationMark] = val }} text="Возможность наиболее полной реализации именно в данной деятельности" id={Constants.questionId.SelfRealizationMark} /></li>
                </ol>

                <label style={{ color: 'red' }}>* - обязательные для ввода поля</label>

                <div>
                <button onClick={(e) => {

                    e.preventDefault();

                    if(this.validateInput())
                        this.props.handleSubmit(this.surveyResults, Constants.questionId)
                    else
                        alert("Пожалуйста, заполните ВСЕ обязательные поля.")

                }}> Завершить </button>
                </div>
            </form>
        }
    }

module.exports = SurveyForm