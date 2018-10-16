import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AsyncSelect from 'react-select/lib/Async';

class App extends Component {
    constructor() {
        super();
        this.colourOptions = [
            {label: 'red', value: 'red'},
            {label: 'aqua', value: 'aqua'},
            {label: 'black', value: 'black'},
            {label: 'blue', value: 'blue'},
            {label: 'fuchsia', value: 'fuchsia'},
            {label: 'gray', value: 'gray'},
            {label: 'green', value: 'green'},
            {label: 'lime', value: 'lime'},
            {label: 'maroon', value: 'maroon'},
            {label: 'navy', value: 'navy'},
            {label: 'olive', value: 'olive'},
            {label: 'orange', value: 'orange'},
            {label: 'purple', value: 'purple'},
        ];

        this.state = {
            inputValue: '',
            selectedValue: this.colourOptions[0]
        };
    }

    filterColors = (inputValue) =>
        this.colourOptions.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()));

    loadOptions = (inputValue, callback) => {
        setTimeout(() => {
            callback(this.filterColors(inputValue));
        }, 1000);
    };

    handleInputChange = (newValue) => {
        this.setState(prevState => {
            return {
                ...prevState,
                inputValue: newValue
            }
        });
        return newValue;
    };

    onChange = (selected, action) => {
        this.setState(prevState => {
            return {
                ...prevState,
                selectedValue: selected
            }
        });
        console.log('selected', selected);
        console.log('action', action);
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        select your color
                    </p>
                    <div style={{color: '#000'}}>
                        <pre>default selected value is red, update react-select selected value by setting props value</pre>
                        <pre>inputValue: "{this.state.inputValue}"</pre>
                        <pre style={{color: this.state.selectedValue.value}}>
                            selectedValue: "{this.state.selectedValue.value}"
                        </pre>
                        <AsyncSelect
                            cacheOptions
                            loadOptions={this.loadOptions}
                            defaultOptions={[{label: 'hui vam', value: 'hui vam a ne cvet'}]}
                            onInputChange={this.handleInputChange}
                            onChange={this.onChange}
                            value={this.state.selectedValue}
                        />
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
