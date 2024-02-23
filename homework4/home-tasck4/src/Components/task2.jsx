import React, { Component } from 'react';
import ReactFoto from '../assets/react.svg';

export default class task2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Visible: false,
        };
    }

    Visability = () => {
        this.setState((prevState) => ({ Visible: !prevState.Visible }));
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.Visible !== this.state.Visible) {
            if (this.state.Visible) {
                alert("Відкрився");
            } else {
                alert("Закрився");
            }
        }
    };

    render() {
        return (
            <>
            <button onClick={this.Visability} className='tasck2-btn'>Click</button>
                {this.state.Visible && <div><img src={ ReactFoto } alt="foto" className='tasck2-img'/></div>}
            </>
        )
    }
}



