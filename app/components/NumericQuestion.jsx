const React = require("../../node_modules/react/umd/react.development")
const Constants = require("../logic/constants.js")

class NumericQuestion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.text = props.text;
        this.mark = null;

    }

    setMark(val) {
        this.setState((state) => { return { Value: val } });
    }

    onMarkChanged(val) {
        this.mark = val;
        console.log("state is:" + this.state.Value);

        this.props.handleMarkChange(this.mark);
    }



    render() {
        return <div className={Constants.styleClasses.Question}>
            <h3>{this.text}<label style={{ color: 'red' }}>*</label></h3>
            <label>в очень незначительной мере</label>

            <input text="1" onClick={() => { this.onMarkChanged(1); }} type="radio" name={this.props.id} />
            <input text="2" onClick={() => { this.onMarkChanged(2); }} type="radio" name={this.props.id} />

            <input text="3" onClick={() => { this.onMarkChanged(3); }} type="radio" name={this.props.id} />
            <input text="4" onClick={() => { this.onMarkChanged(4); }} type="radio" name={this.props.id} />
            <input text="5" onClick={() => { this.onMarkChanged(5); }} type="radio" name={this.props.id} />
            <label>в очень большой мере</label>

        </div>
    }
}

module.exports = NumericQuestion