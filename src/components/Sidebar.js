import React from 'react'
import Emitter from '../services/emitter';

import '../styles/Sidebar.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        document.addEventListener('INPUT_FROM_MAIN', (event) => {
            console.log(event)
            this.setState({ sidebar: event.detail.new })
        });
    }
    state = { sidebar: 'Default sidebar' };

    render() {
        return (
            <div className="sidebar">
                <h3>{this.state.sidebar}</h3>
                <div>Sidebar listens on new input all the time</div>
            </div>
        )
    }
}

export default Sidebar