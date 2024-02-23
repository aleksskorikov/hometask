
import React, { Component } from 'react';

class tasck2 extends Component {
    constructor(props) {
    super(props);

    this.state = {
        formData: {
            input1: '',
            input2: '',
            input3: '',
        },
        Data: '',
        };
    }


    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
        formData: { ...prevState.formData, [name]: value },
        }));
    };

    submitForm = () => {

        const jsonString = JSON.stringify(this.state.formData);
        this.setState({ Data: jsonString });
        console.log(jsonString);
    };

    render() {
        return (
        <>
            <h1 className="tasck2-title">Tasck-2</h1>    
            <form className='tasck2-form'>
                <input type="text" name="input1" value={this.state.formData.input1} onChange={this.handleInput} required className='tasck2-input'/>
                <input type="text" name="input2" value={this.state.formData.input2} onChange={this.handleInput} required className='tasck2-input' />
                <input type="text" name="input3" value={this.state.formData.input3} onChange={this.handleInput} required className='tasck2-input'/>
                <button type="button" onClick={this.submitForm} className='tasck2-btn'> Відправити</button>
            </form>
            <div className='tasck2-datas'>
                <p>Дані у форматі JSON:</p>    
                {this.state.Data && (
                <div>
                    <div className='tasck2-data'>{this.state.Data}</div>
                </div>
                )}
            </div>
        </>
    );
    }
}

export default tasck2;