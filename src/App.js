import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    render() {
        const array = [1, 2, 3, 4, 5].map((value) => <li>{'li-' + value}</li>)
        return (
            <div className="App">
                webpack test
                hello
                body
                <ul>
                    {array}
                </ul>
            </div>
        );
    }
}

export default App;
