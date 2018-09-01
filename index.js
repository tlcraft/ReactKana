import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function KanaBoard (props) {
    let kana = props.kanaSet.map((k, i) => { 
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
        <div>
            <h1>{props.message}</h1>
            {kana}
        </div>
    );
}

const KANA = [
    {hira: 'あ', kata: 'ア', eng: 'a'},
    {hira: 'い', kata: 'イ', eng: 'i'},
    {hira: 'う', kata: 'ウ', eng: 'u'},
    {hira: 'え', kata: 'エ', eng: 'e'},
    {hira: 'お', kata: 'オ', eng: 'o'},

    {hira: 'か', kata: 'カ', eng: 'ka'},
    {hira: 'き', kata: 'キ', eng: 'ki'},
    {hira: 'く', kata: 'ク', eng: 'ku'},
    {hira: 'け', kata: 'ケ', eng: 'ke'},
    {hira: 'こ', kata: 'コ', eng: 'ko'},
    
    {hira: 'さ', kata: 'サ', eng: 'sa'},
    {hira: 'し', kata: 'シ', eng: 'shi'},
    {hira: 'す', kata: 'ス', eng: 'su'},
    {hira: 'せ', kata: 'セ', eng: 'se'},
    {hira: 'そ', kata: 'ソ', eng: 'so'},

    {hira: 'た', kata: 'タ', eng: 'ta'},
    {hira: 'ち', kata: 'チ', eng: 'chi'},
    {hira: 'つ', kata: 'ツ', eng: 'tsu'},
    {hira: 'て', kata: 'テ', eng: 'te'},
    {hira: 'と', kata: 'ト', eng: 'to'},

    //TODO Complete array
  ];

// function KanaRow(props) {
//     // TODO Group kana together
// }

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
    <KanaBoard message="Japanese Hiragana and Katakana Syllabaries" kanaSet={KANA} />,
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
  わを
  ん

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
  ワヲ
  ン  
  
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