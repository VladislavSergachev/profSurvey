const React = require("../../node_modules/react/umd/react.development")
const Constants = require("../logic/constants.js")


class ResultsForm extends React.Component
    {
        constructor(props)
        {
            super(props)
        }
        
        render()
        {
            return <form className={Constants.styleClasses.surveyForm}>
                <h1>Ваши результаты</h1>
                <div>Внутренняя мотивация (ВМ): {this.props.inMot}</div>
                <div>Внешняя положительная мотивация (ВПМ): {this.props.outPos}</div>
                <div>Внешняя отрицательная мотивация (ВОМ): {this.props.outNeg}</div>
                <div>Тип мотивационного комплекса: { (this.props.complexType) ? 'Оптимальный' : 'Неоптимальный'}</div>
                </form>
        }
    }

module.exports = ResultsForm