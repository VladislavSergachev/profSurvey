class TextQuestion extends React.Component
    {
        constructor(props)
        {
            super(props);
            text = props.text;
        }
        
        render()
        {
            <text>{text}</text>
        }
    }
    const canvas = document.getElementById("body");
    const root = ReactDOM.createRoot(canvas);
    root.render(
        <body>
            <TextQuestion text="First question"/>
        </body>
        );