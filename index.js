import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function KanaBoard (props) {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>{props.message}</p>
            <KanaRow />
        </div>
    );
}

function KanaRow (props) {
    return (
        <Kana character="つ" pronunciation="tsu"/>
    )
}

function Kana (props) {
    return (
        <div>
            <div>
                {props.character}
            </div>
            <div>
                {props.pronunciation}
            </div>
        </div>
    );
}

ReactDOM.render(
    <KanaBoard message="How are you? We're just getting started!" />,
    document.getElementById('root')
  );