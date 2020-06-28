import React, { Component } from 'react';
import HighScore from './HighScore';
import './css/style.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            overTen: false
        }
    }

    handleButton = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    componentDidUpdate() {
        if(this.state.count > 10 && this.state.count && !this.state.overTen) {
            console.log("Updating over ten");
            this.setState({
                overTen: true
            });
        }
    }

    onReset = () => {
        this.setState({
            count: 0,
            overTen: false
        })
    }

    render() {
        let {count} = this.state;

        return(
            <div>
                <h1 class="test-ee">You clicked the button {count} times</h1>
                <HighScore 
                    overTen={this.state.overTen}
                    onReset={(e) => this.onReset(e)}
                />
                <span>
                    <button onClick={() => this.handleButton()}>Click Me!</button>
                </span>
            </div>
        );
    }
}

export default App;