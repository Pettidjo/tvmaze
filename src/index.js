import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// Components
import Header from './components/header';
import Result from './components/result';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: '',
            result: null
        }
    }

    push = (val) => {
        this.setState({
            search: val
        })
        this.getMoviesFromApiTvMaze();
    }

    getMoviesFromApiTvMaze = () => {
        let url = `http://api.tvmaze.com/search/shows?q=${this.state.search}`;
        return fetch(url)
          .then((response) => response.json())
          .then((data) => {
              this.setState({ result: data });
          });
    }

    render() {
        return (
            <div>
                <Header search={this.push} />
                <Result movies={this.state.result}/>
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));