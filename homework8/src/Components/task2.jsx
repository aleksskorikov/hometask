
// import React, { Component } from 'react'

// export default class Timer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { seconds: 0 };
//     }

//     tick() {
//         this.setState(state => ({
//         seconds: state.seconds + 1
//         }));
//     }

//     componentDidMount() {
//         this.interval = setInterval(() => this.tick(), 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval);
//     }

//     render() {
//         return (
//         <div>
//             Секунды: {this.state.seconds}
//         </div>
//         );
//     }
//     }
import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    const tick = () => {
        setSeconds(prevSeconds => prevSeconds + 1);
    };

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
        Секунды: {seconds}
        </div>
    );
};

export default Timer;
