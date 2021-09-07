import React, { Component } from 'react'
import classes from './Music.module.css';

export default class Music extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { random: 0 };
        this.state = { random1: 0 };
    }
    handleClick() {
        const min = 10;
        const max = 500;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        const rand1 = Math.floor(Math.random() * (max - min + 1)) + min;
        this.setState({ random: rand });
        this.setState({ random1: rand1 });

        document.getElementById('elem').style.width = `${rand}` + 'px';
        document.getElementById('elem').style.height = `${rand1}` + 'px';        
    }

    render() {
        
        return (
            <>
                <div>
                    <button onClick={this.handleClick.bind(this)}>Жмак</button>
                    <div>Ширина: {this.state.random}</div>
                    <div>Высота: {this.state.random1}</div>
                </div>

                <div id='elem' className={classes.elem}></div>

                
            
            </>
        )
    }
}
