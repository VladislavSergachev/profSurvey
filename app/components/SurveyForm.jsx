const React = require("react");


class SurveyForm extends React.Component {  
    /* motivComplex.calculateInMotivation(surveyResults[questionId.WorkSatifactionMark], surveyResults[questionId.SelfRealizationMark]);
    motivComplex.calculateOutterPositive(surveyResults[questionId.MoneyAwardMark], surveyResults[questionId.SelfDevelopMark], surveyResults[questionId.SocialPrestigeMark]);
    motivComplex.calculateOutterNegative(surveyResults[questionId.CriticAvoidMark], surveyResults[questionId.TroubleAvoidMark]); */

    onSurveyFinished(e) {
        this.props.handleSubmit(this.surveyResults);
    }

surveyResults = {};

render()
{
    return <form>
        <TextQuestion text="ФИО" id={questionId.PersonName} />
        <NumericQuestion handleMarkChange={(val) => { surveyResults[questionId.SelfDevelopMark] = val }} text="Стремление к продвижению по работе" id={questionId.SelfDevelopMark} />
        <NumericQuestion handleMarkChange={(val) => { surveyResults[questionId.TroubleAvoidMark] = val }} text="Наказания" id={questionId.TroubleAvoidMark} />
        <NumericQuestion handleMarkChange={(val) => { surveyResults[questionId.CriticAvoidMark] = val }} text="Стремление избежать критики со стороны руководства или коллег" id={questionId.CriticAvoidMark} />
        <NumericQuestion handleMarkChange={(val) => { surveyResults[questionId.SocialPrestigeMark] = val }} text="Соц. престиж" id={questionId.SocialPrestigeMark} />
        <NumericQuestion handleMarkChange={(val) => { surveyResults[questionId.WorkSatifactionMark] = val }} text="Удовлетворение от работы" id={questionId.WorkSatifactionMark} />
        <NumericQuestion handleMarkChange={(val) => { surveyResults[questionId.SelfRealizationMark] = val }} text="Самореализация" id={questionId.SelfRealizationMark} />
        <NumericQuestion handleMarkChange={(val) => { surveyResults[questionId.MoneyAwardMark] = val }} text="Денежный заработок" id={questionId.MoneyAwardMark} />

        <input type="submit"  value="Завершить" onSubmit={(e) => this.onSurveyFinished(e)}/>
    </form>
}
}

module.exports = SurveyForm