import React,{Component} from 'react';
import './App.scss'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="main">
                <p>Hello World</p>
                <div className="box">我是第二个div</div>
            </div>
        );
    }
}

export default App;

// ReactDom.render(<App />,document.getElementById('root'));