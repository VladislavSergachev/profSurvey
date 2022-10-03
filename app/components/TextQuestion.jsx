const React = require("react");

class TextQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
    }

    render() {
        return <div>
            <h1>{this.text}</h1>
            <input type="text" />
        </div>
    }
}

module.exports = TextQuestion