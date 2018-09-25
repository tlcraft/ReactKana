import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function KanaBoard (props) {
    let kanaTable = props.kanaSet.map((row, i) => { 
        return (
            <KanaRow key={i}
                kanaRow={row}
                className="kanaRow"
            />
        );
    });

    return (
        <div className={props.className}>
            <h1>{props.message}</h1>
            <div className="container">
                {kanaTable}
            </div>
        </div>
    );
}

function KanaRow(props) {
    let kanaRow = props.kanaRow.map((k, i) => { 
        return (
            <Kana key={i}
              hira={k.hira}
              kata={k.kata}
              pronunciation={k.eng}
              className="kana"
            />
        );
    });

    return (
        <div className={props.className}>
            <ul>
                {kanaRow}
            </ul>
        </div>
    );
}

function Kana (props) {
    return (
        <li className={props.className}>
            <div className='hira'>
                {props.hira}
            </div>
            <div className='kata'>
                {props.kata}
            </div>
            <div className='pronunciation'>
                {props.pronunciation}
            </div>
        </li>
    );
}

const KANA = [
    [
        {hira: 'あ', kata: 'ア', eng: 'a'},
        {hira: 'い', kata: 'イ', eng: 'i'},
        {hira: 'う', kata: 'ウ', eng: 'u'},
        {hira: 'え', kata: 'エ', eng: 'e'},
        {hira: 'お', kata: 'オ', eng: 'o'},
    ],
    [
        {hira: 'か', kata: 'カ', eng: 'ka'},
        {hira: 'き', kata: 'キ', eng: 'ki'},
        {hira: 'く', kata: 'ク', eng: 'ku'},
        {hira: 'け', kata: 'ケ', eng: 'ke'},
        {hira: 'こ', kata: 'コ', eng: 'ko'},
    ],
    [
        {hira: 'さ', kata: 'サ', eng: 'sa'},
        {hira: 'し', kata: 'シ', eng: 'shi'},
        {hira: 'す', kata: 'ス', eng: 'su'},
        {hira: 'せ', kata: 'セ', eng: 'se'},
        {hira: 'そ', kata: 'ソ', eng: 'so'},
    ],
    [
        {hira: 'た', kata: 'タ', eng: 'ta'},
        {hira: 'ち', kata: 'チ', eng: 'chi'},
        {hira: 'つ', kata: 'ツ', eng: 'tsu'},
        {hira: 'て', kata: 'テ', eng: 'te'},
        {hira: 'と', kata: 'ト', eng: 'to'},
    ],
    [
        {hira: 'な', kata: 'ナ', eng: 'na'},
        {hira: 'に', kata: 'ニ', eng: 'ni'},
        {hira: 'ぬ', kata: 'ヌ', eng: 'nu'},
        {hira: 'ね', kata: 'ネ', eng: 'ne'},
        {hira: 'の', kata: 'ノ', eng: 'no'},
    ],
    [
        {hira: 'は', kata: 'ハ', eng: 'ha'},
        {hira: 'ひ', kata: 'ヒ', eng: 'hi'},
        {hira: 'ふ', kata: 'フ', eng: 'hu'},
        {hira: 'へ', kata: 'ヘ', eng: 'he'},
        {hira: 'ほ', kata: 'ホ', eng: 'ho'},
    ],
    [ 
        {hira: 'ま', kata: 'マ', eng: 'ma'},
        {hira: 'み', kata: 'ミ', eng: 'mi'},
        {hira: 'む', kata: 'ム', eng: 'mu'},
        {hira: 'め', kata: 'メ', eng: 'me'},
        {hira: 'も', kata: 'モ', eng: 'mo'}, 
    ],
    [ 
        {hira: 'や', kata: 'ヤ', eng: 'ya'},
        {hira: '', kata: '', eng: ''},
        {hira: 'ゆ', kata: 'ユ', eng: 'yu'},
        {hira: '', kata: '', eng: ''},
        {hira: 'よ', kata: 'ヨ', eng: 'yo'}, 
    ],
    [ 
        {hira: 'ら', kata: 'ラ', eng: 'ra'},
        {hira: 'り', kata: 'リ', eng: 'ri'},
        {hira: 'る', kata: 'ル', eng: 'ru'},
        {hira: 'れ', kata: 'レ', eng: 're'},
        {hira: 'ろ', kata: 'ロ', eng: 'ro'}, 
    ],
    [ 
        {hira: 'わ', kata: 'ワ', eng: 'wa'},
        {hira: '', kata: '', eng: ''},
        {hira: 'を', kata: 'ヲ', eng: 'wo'},
        {hira: '', kata: '', eng: ''},
        {hira: 'ん', kata: 'ン', eng: 'n'}, 
    ], 
  ];  

  const DAKUON = [
    [ 
        {hira: 'が', kata: 'ガ', eng: 'ga'},
        {hira: 'ぎ', kata: 'ギ', eng: 'gi'},
        {hira: 'ぐ', kata: 'グ', eng: 'gu'},
        {hira: 'げ', kata: 'ゲ', eng: 'ge'},
        {hira: 'ご', kata: 'ゴ', eng: 'go'}, 
    ],
    [ 
        {hira: 'ざ', kata: 'ザ', eng: 'za'},
        {hira: 'じ', kata: 'ジ', eng: 'ji'},
        {hira: 'ず', kata: 'ズ', eng: 'zu'},
        {hira: 'ぜ', kata: 'ゼ', eng: 'ze'},
        {hira: 'ぞ', kata: 'ゾ', eng: 'zo'}, 
    ],
    [ 
        {hira: 'だ', kata: 'ダ', eng: 'da'},
        {hira: 'ぢ', kata: 'ヂ', eng: 'dzi'},
        {hira: 'づ', kata: 'ヅ', eng: 'dzu'},
        {hira: 'で', kata: 'デ', eng: 'de'},
        {hira: 'ど', kata: 'ド', eng: 'do'}, 
    ],
    [ 
        {hira: 'ば', kata: 'バ', eng: 'ba'},
        {hira: 'び', kata: 'ビ', eng: 'bi'},
        {hira: 'ぶ', kata: 'ブ', eng: 'bu'},
        {hira: 'べ', kata: 'ベ', eng: 'be'},
        {hira: 'ぼ', kata: 'ボ', eng: 'bo'}, 
    ],
  ]

  const HANDAKUON = [
    [ 
        {hira: 'ぱ', kata: 'パ', eng: 'pa'},
        {hira: 'ぴ', kata: 'ピ', eng: 'pi'},
        {hira: 'ぷ', kata: 'プ', eng: 'pu'},
        {hira: 'ぺ', kata: 'ペ', eng: 'pe'},
        {hira: 'ぽ', kata: 'ポ', eng: 'po'}, 
    ],  
  ]

  const YOUON = [
    [ 
        {hira: 'きゃ', kata: 'キャ', eng: 'kya'},
        {hira: '', kata: '', eng: ''},
        {hira: 'きゅ', kata: 'キュ', eng: 'kyu'},
        {hira: '', kata: '', eng: ''},
        {hira: 'きょ', kata: 'キョ', eng: 'kyo'}, 
    ],
    [ 
        {hira: 'しゃ', kata: 'シャ', eng: 'sha'},
        {hira: '', kata: '', eng: ''},
        {hira: 'しゅ', kata: 'シュ', eng: 'shu'},
        {hira: '', kata: '', eng: ''},
        {hira: 'しょ', kata: 'ショ', eng: 'sho'}, 
    ],
    [ 
        {hira: 'ちゃ', kata: 'チャ', eng: 'cha'},
        {hira: '', kata: '', eng: ''},
        {hira: 'ちゅ', kata: 'チュ', eng: 'chu'},
        {hira: '', kata: '', eng: ''},
        {hira: 'ちょ', kata: 'チョ', eng: 'cho'}, 
    ],
    [ 
        {hira: 'にゃ', kata: 'ニャ', eng: 'nya'},
        {hira: '', kata: '', eng: ''},
        {hira: 'にゅ', kata: 'ニュ', eng: 'nyu'},
        {hira: '', kata: '', eng: ''},
        {hira: 'にょ', kata: 'ニョ', eng: 'nyo'}, 
    ],
    [ 
        {hira: 'ひゃ', kata: 'ヒャ', eng: 'hya'},
        {hira: '', kata: '', eng: ''},
        {hira: 'ひゅ', kata: 'ヒュ', eng: 'hyu'},
        {hira: '', kata: '', eng: ''},
        {hira: 'ひょ', kata: 'ヒョ', eng: 'hyo'}, 
    ],
    [ 
        {hira: 'みゃ', kata: 'ミャ', eng: 'mya'},
        {hira: '', kata: '', eng: ''},
        {hira: 'みゅ', kata: 'ミュ', eng: 'myu'},
        {hira: '', kata: '', eng: ''},
        {hira: 'みょ', kata: 'ミョ', eng: 'myo'}, 
    ],
    [ 
        {hira: 'りゃ', kata: 'リャ', eng: 'rya'},
        {hira: '', kata: '', eng: ''},
        {hira: 'りゅ', kata: 'リュ', eng: 'ryu'},
        {hira: '', kata: '', eng: ''},
        {hira: 'りょ', kata: 'リョ', eng: 'ryo'}, 
    ],
  ]

  const YOUONDAKUON = [
    [ 
        {hira: 'ぎゃ', kata: 'ギャ', eng: 'gya'},
        {hira: '', kata: '', eng: ''},
        {hira: 'ぎゅ', kata: 'ギュ', eng: 'gyu'},
        {hira: '', kata: '', eng: ''},
        {hira: 'ぎょ', kata: 'ギョ', eng: 'gyo'}, 
    ],
    [ 
        {hira: 'じゃ', kata: 'ジャ', eng: 'ja'},
        {hira: '', kata: '', eng: ''},
        {hira: 'じゅ', kata: 'ジュ', eng: 'ju'},
        {hira: '', kata: '', eng: ''},
        {hira: 'じょ', kata: 'ジョ', eng: 'jo'}, 
    ],
    [ 
        {hira: 'ぢゃ', kata: 'ヂャ', eng: 'ja'},
        {hira: '', kata: '', eng: ''},
        {hira: 'ぢゅ', kata: 'ヂュ', eng: 'ju'},
        {hira: '', kata: '', eng: ''},
        {hira: 'ぢょ', kata: 'ヂョ', eng: 'jo'}, 
    ],
    [ 
        {hira: 'びゃ', kata: 'ビャ', eng: 'bya'},
        {hira: '', kata: '', eng: ''},
        {hira: 'びゅ', kata: 'ビュ', eng: 'byu'},
        {hira: '', kata: '', eng: ''},
        {hira: 'びょ', kata: 'ビョ', eng: 'byo'}, 
    ],
  ]

  const YOUONHANDAKUON = [
    [ 
        {hira: 'ぴゃ', kata: 'ピャ', eng: 'pya'},
        {hira: '', kata: '', eng: ''},
        {hira: 'ぴゅ', kata: 'ピュ', eng: 'pyu'},
        {hira: '', kata: '', eng: ''},
        {hira: 'ぴょ', kata: 'ピョ', eng: 'pyo'}, 
    ],
  ]
　
function App (props) {
    return (
        <div>
            <KanaBoard message="Japanese Hiragana and Katakana Syllabaries" kanaSet={KANA} className="kanaBoard" />
            <KanaBoard message="Dakuon" kanaSet={DAKUON} className="kanaBoard" />
            <KanaBoard message="Han-Dakuon" kanaSet={HANDAKUON} className="kanaBoard" />
            <KanaBoard message="Youon" kanaSet={YOUON} className="kanaBoard" />
            <KanaBoard message="Youon Dakuon" kanaSet={YOUONDAKUON} className="kanaBoard" />
            <KanaBoard message="Youon Han-Dakuon" kanaSet={YOUONHANDAKUON} className="kanaBoard" />
            <GameBoard kanaSet={KANA} />
        </div>
    )
}

class GameBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: props.kanaSet
        };
    }

    handleCardClick() {
        alert("Card Clicked!");
    }

    render() {
        return (
            <div className="gameBoard">
                <h1>Memory Game</h1>
                <Card kana="ぴょ" pronunciation="pyo" onClick={() => this.handleCardClick()} />
            </div>
        );
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            kana: props.kana,
            pronunciation: props.pronunciation,
            onClick: props.onClick
        };
    }

    //TODO onClick return card ID to GameBoard

    render() {
        return (
            <button
             onClick={this.state.onClick}
             className="card"
            >
                {this.state.kana}
                <br/>
                {this.state.pronunciation}
            </button>
        );
    }
}

// TODO
// Gather a random list of five kana
// Using that list draw cards upside down (generate a new list of "cards" by creating separate hiragana and katakana objects)
// Play the concentration/memory card game to match hiragana and katakana (display a GameBoard with Card components)
// GameBoard will hold the state, Cards will begin as buttons which can be clicked to reveal their value
// Matching cards will update to an isMatched state of true and stop rendering or being interactive
// Add a start and restart button

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
 
  
  /*

  Hiragana
  
  あいうえお
  かきくけこ  
  さしすせそ  
  たちつてと  
  なにぬねの
  はひふへほ  
  まみむめも
  やゆよ
  らりるれろ
  わをん

　がぎぐげご
　ざじずぜぞ
　だぢづでど
　ばびぶべぼ
  ぱぴぷぺぽ

  きゃきゅきょ
  しゃしゅしょ
  ちゃちゅちょ
  にゃにゅにょ
  ひゃひゅひょ
  みゃみゅみょ
  りゃりゅりょ
  ぎゃぎゅぎょ
  じゃじゅじょ
  ぢゃぢゅぢょ
  びゃびゅびょ
  ぴゃぴゅぴょ
  
　Katakana

  アイウエオ
  カキクケコ  
  サシスセソ  
  タチツテト  
  ナニヌネノ
  ハヒフヘホ 
  マミムメモ
  ヤユヨ
  ラリルレロ
  ワヲン  
  
　ガギグゲゴ
　ザジズゼゾ
  ダヂヅデド
　バビブベボ
  パピプペポ

　キャキュキョ
　シャシュショ
　チャチュチョ
　ニャニュニョ
　ヒャヒュヒョ
　ミャミュミョ
　リャリュリョ
　ギャギュギョ
　ジャジュジョ
　ヂャヂュヂョ
　ビャビュビョ
　ピャピュピョ

  */