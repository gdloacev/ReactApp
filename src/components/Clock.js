import React from 'react';

export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick(){
        this.setState({date: new Date()});
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
       return(<>
            <h4>{this.state.date.toLocaleTimeString()}</h4>
        </>);
    }
}