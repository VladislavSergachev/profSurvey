const React = require("react");

class NumericQuestion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.text = props.text;
        this.mark = null;

    }

    onMarkChanged(val) {
        this.mark = val;
        console.log("state is:" + this.state.Value);

        this.props.handleMarkChange(this.mark);
    }

    render() {
        return <div>
            <h1>{this.text}</h1>
            <label>Мало</label>

            <input value="1" onClick={() => { this.onMarkChanged(1); console.log(1) }} type="radio" name={this.props.id} />
            <input value="2" onClick={() => { this.onMarkChanged(2); console.log(2) }} type="radio" name={this.props.id} />

            <input value="3" onClick={() => { this.onMarkChanged(3); console.log(3) }} type="radio" name={this.props.id} />
            <input value="4" onClick={() => { this.onMarkChanged(4); console.log(4) }} type="radio" name={this.props.id} />
            <input value="5" onClick={() => { this.onMarkChanged(5); console.log(5) }} type="radio" name={this.props.id} />
            <label>Много</label>

        </div>
    }

    
}

module.exports = NumericQuestion