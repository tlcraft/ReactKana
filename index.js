import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function KanaBoard (props) {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>{props.message}</p>
        </div>
    );
}

ReactDOM.render(
    <KanaBoard message="How are you? We're just getting started!" />,
    document.getElementById('root')
  );