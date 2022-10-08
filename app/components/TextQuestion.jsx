const React = require("../../node_modules/react/umd/react.development")

class TextQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.text = props.text;
    }

    render() {
        return <div>
            <h3>{this.text}</h3>
            <input type="text" />
        </div>
    }
}

module.exports = TextQuestion