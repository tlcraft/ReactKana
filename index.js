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
            {kanaTable}
        </div>
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

function KanaRow(props) {
    let kana = props.kanaRow.map((k, i) => { 
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
            {kana}
        </div>
    );
}

function Kana (props) {
    return (
        <div className={props.className}>
            <div className='hira'>
                {props.hira}
            </div>
            <div className='kata'>
                {props.kata}
            </div>
            <div className='pronunciation'>
                {props.pronunciation}
            </div>
        </div>
    );
}

ReactDOM.render(
    <KanaBoard message="Japanese Hiragana and Katakana Syllabaries" kanaSet={KANA} className="kanaBoard" />,
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