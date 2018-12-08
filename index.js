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
        const hira = k != null ? k.hira : '';
        const kata = k != null ? k.kata : '';
        const eng = k != null ? k.eng : '';

        return (
            <Kana key={i}
            hira={hira}
            kata={kata}
            pronunciation={eng}
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
        null,
        {hira: 'ゆ', kata: 'ユ', eng: 'yu'},
        null,
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
        null,
        {hira: 'を', kata: 'ヲ', eng: 'wo'},
        null,
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
        null,
        {hira: 'きゅ', kata: 'キュ', eng: 'kyu'},
        null,
        {hira: 'きょ', kata: 'キョ', eng: 'kyo'}, 
    ],
    [ 
        {hira: 'しゃ', kata: 'シャ', eng: 'sha'},
        null,
        {hira: 'しゅ', kata: 'シュ', eng: 'shu'},
        null,
        {hira: 'しょ', kata: 'ショ', eng: 'sho'}, 
    ],
    [ 
        {hira: 'ちゃ', kata: 'チャ', eng: 'cha'},
        null,
        {hira: 'ちゅ', kata: 'チュ', eng: 'chu'},
        null,
        {hira: 'ちょ', kata: 'チョ', eng: 'cho'}, 
    ],
    [ 
        {hira: 'にゃ', kata: 'ニャ', eng: 'nya'},
        null,
        {hira: 'にゅ', kata: 'ニュ', eng: 'nyu'},
        null,
        {hira: 'にょ', kata: 'ニョ', eng: 'nyo'}, 
    ],
    [ 
        {hira: 'ひゃ', kata: 'ヒャ', eng: 'hya'},
        null,
        {hira: 'ひゅ', kata: 'ヒュ', eng: 'hyu'},
        null,
        {hira: 'ひょ', kata: 'ヒョ', eng: 'hyo'}, 
    ],
    [ 
        {hira: 'みゃ', kata: 'ミャ', eng: 'mya'},
        null,
        {hira: 'みゅ', kata: 'ミュ', eng: 'myu'},
        null,
        {hira: 'みょ', kata: 'ミョ', eng: 'myo'}, 
    ],
    [ 
        {hira: 'りゃ', kata: 'リャ', eng: 'rya'},
        null,
        {hira: 'りゅ', kata: 'リュ', eng: 'ryu'},
        null,
        {hira: 'りょ', kata: 'リョ', eng: 'ryo'}, 
    ],
  ]

  const YOUONDAKUON = [
    [ 
        {hira: 'ぎゃ', kata: 'ギャ', eng: 'gya'},
        null,
        {hira: 'ぎゅ', kata: 'ギュ', eng: 'gyu'},
        null,
        {hira: 'ぎょ', kata: 'ギョ', eng: 'gyo'}, 
    ],
    [ 
        {hira: 'じゃ', kata: 'ジャ', eng: 'ja'},
        null,
        {hira: 'じゅ', kata: 'ジュ', eng: 'ju'},
        null,
        {hira: 'じょ', kata: 'ジョ', eng: 'jo'}, 
    ],
    [ 
        {hira: 'ぢゃ', kata: 'ヂャ', eng: 'ja'},
        null,
        {hira: 'ぢゅ', kata: 'ヂュ', eng: 'ju'},
        null,
        {hira: 'ぢょ', kata: 'ヂョ', eng: 'jo'}, 
    ],
    [ 
        {hira: 'びゃ', kata: 'ビャ', eng: 'bya'},
        null,
        {hira: 'びゅ', kata: 'ビュ', eng: 'byu'},
        null,
        {hira: 'びょ', kata: 'ビョ', eng: 'byo'}, 
    ],
  ]

  const YOUONHANDAKUON = [
    [ 
        {hira: 'ぴゃ', kata: 'ピャ', eng: 'pya'},
        null,
        {hira: 'ぴゅ', kata: 'ピュ', eng: 'pyu'},
        null,
        {hira: 'ぴょ', kata: 'ピョ', eng: 'pyo'}, 
    ],
  ]
　
function App (props) {
    return (
        <div>
            <GameBoard kanaSet={KANA} numberOfCards="20" />
            <KanaBoard message="Japanese Hiragana and Katakana Syllabaries" kanaSet={KANA} className="kanaBoard" />
            <KanaBoard message="Dakuon" kanaSet={DAKUON} className="kanaBoard" />
            <KanaBoard message="Han-Dakuon" kanaSet={HANDAKUON} className="kanaBoard" />
            <KanaBoard message="Youon" kanaSet={YOUON} className="kanaBoard" />
            <KanaBoard message="Youon Dakuon" kanaSet={YOUONDAKUON} className="kanaBoard" />
            <KanaBoard message="Youon Han-Dakuon" kanaSet={YOUONHANDAKUON} className="kanaBoard" />
        </div>
    )
}

class GameBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            kanaSet: props.kanaSet,
            numberOfCards: props.numberOfCards,
            board: randomKanaSet(props.numberOfCards, props.kanaSet),
            cardOneIndex: -1,
            cardTwoIndex: -1,
            missed: 0,
        };

        this.handleNumberOfCardsChange = this.handleNumberOfCardsChange.bind(this);
    }

    newGameClick() {
        const kanaSet = this.state.kanaSet;
        const numOfCards = this.state.numberOfCards;
        this.setState({
            board: randomKanaSet(numOfCards, kanaSet),
            cardOneIndex: -1,
            cardTwoIndex: -1,
            missed: 0,
        });

        //TODO redraw the right cards on the screen
        //this.forceUpdate();
    }

    handleNumberOfCardsChange(event) {
        let newNumber = event.target.value;
        const totalNumOfCards = this.state.board.length;
        if (newNumber > totalNumOfCards) {
            newNumber = totalNumOfCards;
        }
        this.setState({numberOfCards: newNumber});
    }

    isGameOver() {
        let isOver = true;
        const board = this.state.board;

        for( let i = 0; i < board.length; i++ ) {
            if (board[i].isFound === false) {
                isOver = false;
                break;
            }
        }

        return isOver;
    }

    handleCardClick(index) {
        let board = this.state.board;

        if (index >= 0 && index < board.length) {
            const isFound = board[index].isFound;

            //TODO Remove the debug code
            console.log("clicked card. isFound: " + isFound);
            console.log("eng: " + board[index].eng);
            console.log("kana: " + board[index].kana);

            if (isFound === false) {
                board[index].isDisplayed = true;
                this.setState({
                    board: board
                });
                //TODO Fix the UI so cards redraw appropriately
                // this.setState({
                //     board: update(this.state.board, {[index]: {isDisplayed: {$set: true}}})
                // });

                this.processCards(index);
            }
        }
    }

    processCards(index) {        
        let cardOneIndex = this.state.cardOneIndex;
        let cardTwoIndex = this.state.cardTwoIndex;
        let hasTwoCards = cardOneIndex >= 0 && cardTwoIndex >= 0;
        let cardOne = null;
        let cardTwo = null;
        let missed = this.state.missed;
        let board = this.state.board;
        let canCompare;

        if ( hasTwoCards ) {
            cardOneIndex = -1;
            cardTwoIndex = -1;
            hasTwoCards = false;
        }         
        
        if ( cardOneIndex >= 0 ) {
            cardOne = board[cardOneIndex];
        }

        if ( cardTwoIndex >= 0 ) {
            cardTwo = board[cardTwoIndex];
        }

        if ( cardOne === null ) {
            cardOneIndex = index;
            cardOne = board[cardOneIndex];
        } else if ( cardTwo === null ) {
            cardTwoIndex = index;
            cardTwo = board[cardTwoIndex];
            hasTwoCards = true;
        } else {
            console.error("No free cards. Index: " + index);
        }

        // Using type coercion to check for null and undefined with != instead of !==
        canCompare = (cardOne != null && cardOne.isFound === false) && (cardTwo != null && cardTwo.isFound === false) && cardOne.kana !== cardTwo.kana
        console.log("Can Compare: " + canCompare + " hasTwoCards " + hasTwoCards);
        if ( canCompare && hasTwoCards) {
            if (cardOne.eng === cardTwo.eng) {
                board[cardOneIndex].isFound = true;
                board[cardTwoIndex].isFound = true;
                alert("Match!");
            } else {
                board[cardOneIndex].isDisplayed = false;
                board[cardTwoIndex].isDisplayed = false;
                missed++;
                alert("Missed!");
            }
        } else {
            if (cardOne != null && cardOne.isFound === true) {
                cardOne = null;
                cardOneIndex = -1;
            }

            if (cardTwo != null && cardTwo.isFound === true) {
                cardTwo = null;
                cardTwoIndex = -1;
            }
        }

        this.setState({
            board: board,
            cardOneIndex: cardOneIndex,
            cardTwoIndex: cardTwoIndex,
            missed: missed,
        });
    }

    generateCardList() {
        const cardList = this.state.board;
        return cardList.map((c, i) => { 
            const isCardDisplayed = c !== null && c.isDisplayed;

            const kana = isCardDisplayed ? c.kana : ' ';
            const eng = isCardDisplayed ? c.eng : ' ';
            const className = isCardDisplayed ? 'displayed ' : '';

            return (
                <Card key={i}
                    kana={kana}
                    class={className}
                    pronunciation={eng}
                    onCardClick={() => this.handleCardClick(i)}
                />
            );
        });
    }

    render() {        
        const gameOverMessage = this.isGameOver() ? "You won!" : "";
        let cards = this.generateCardList();

        return (
            <div className="gameBoard">
                <h1>Memory Game</h1>
                <form className="numCards">
                    <label>
                        Number of cards to play with:
                        <input type="text" value={this.state.numberOfCards} onChange={this.handleNumberOfCardsChange} />
                    </label>
                </form>
                <div>
                    <button onClick={() => this.newGameClick()}>New Game</button>
                </div>
                <h2>{gameOverMessage}</h2>
                <h2>Misses: {this.state.missed}</h2>
                {cards}
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
            onCardClick: props.onCardClick,
            class: props.class
        };
    }

    render() {
        return (
            <button
             onClick={() => this.state.onCardClick()}
             className={'card ' + this.state.class}
            >
                {this.state.kana}
                <br/>
                {this.state.pronunciation}
            </button>
        );
    }
}

function randomKanaSet(numberOfCards, kanaSet) {
    let randomCards = [];
    let rowIndex = 0;
    let colIndex = 0;

    if (kanaSet != null && kanaSet.length > 0) {
        let totalSet = kanaSet.length * kanaSet[0].length;
        if ( numberOfCards <= 0 || numberOfCards > totalSet ) {
            numberOfCards = Math.ceil(totalSet / 4);
        }       

        for ( let i = 0; i < numberOfCards; i++) {
            do {            
                rowIndex = Math.floor(Math.random() * kanaSet.length);
                colIndex = Math.floor(Math.random() * kanaSet[rowIndex].length);
            } while (kanaSet[rowIndex][colIndex] === null)

            randomCards.push({ "kana": kanaSet[rowIndex][colIndex].hira, "eng": kanaSet[rowIndex][colIndex].eng, "isFound": false, "isDisplayed": false });
            randomCards.push({ "kana": kanaSet[rowIndex][colIndex].kata, "eng": kanaSet[rowIndex][colIndex].eng, "isFound": false, "isDisplayed": false });
        }
    }

    return shuffle(randomCards);
}

//Source: https://stackoverflow.com/a/2450976/8094831
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

// TODO
// Play the concentration/memory card game to match hiragana and katakana (display a GameBoard with Card components).
// Cards can be clicked to reveal their value and "flip" over during the matching attempt process.
// Redraw the cards when a new game starts. Draw the face value when a card flips.

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