import React, { Component } from 'react';

class Header extends Component {

    state = {
        search: ''
    }

    search = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    aze = () => {
        this.props.search(this.state.search);
    }

    render() {
        return (
            <header className="header">
                <div className="center">
                    <input 
                    onChange={this.search}
                    type="text"/>
                    <button
                    onClick={this.aze}
                    >Go</button>
                </div>
            </header>
        );
    }
}

export default Header;