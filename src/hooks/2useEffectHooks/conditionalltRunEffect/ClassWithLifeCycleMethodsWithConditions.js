import React, { Component } from 'react';

class ClassWithLifeCycleMethodsWithConditions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name: ''
        }
    }
    componentDidMount() {
        document.title = `Clicked ${this.state.count}times`
    }
    componentDidUpdate(prevProps, preState) {
        if (preState.count !== this.state.count) {
            console.log('Updating document title')
            document.title = `Clicked ${this.state.count} times`
        }
    }
    render() {
        return (
            <div>
                <h1>ClassWithLifeCycleMethodsWithConditions</h1>
                <input type="text" value={this.state.name} onChange={e => { this.setState({ name: e.target.value }) }}></input>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Clicked {this.state.count} times</button>
            </div>
        );
    }
}

export default ClassWithLifeCycleMethodsWithConditions;