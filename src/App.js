import React from 'react';
import axios from 'axios';
import './App.css';
class App extends React.Component{
    state={advice: '',isLoading: false,};
    componentDidMount(){
        this.fetchAdvice();
    }
    fetchAdvice = ()=>{
        this.setState({ isLoading: true });
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const {advice} = response.data.slip;
            this.setState({advice,isLoading: false,});
        })
        .catch((error)=>{
            console.log(error);
        });
    }


    render(){
        const {advice} = this.state;
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice} disabled={this.state.isLoading}>
                        <span>{this.state.isLoading ? "Loading..." : "GIVE ME ADVICE"}</span>
                    </button>
                </div>
            </div>


            
        );
    }
}
export default App;