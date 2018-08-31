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
          />
        );
      });

    return (
        <div>
            <h1>Hello World!</h1>
            <p>{props.message}</p>
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

    {hira: 'た', kata: 'タ', eng: 'ta'},
    {hira: 'ち', kata: 'チ', eng: 'chi'},
    {hira: 'つ', kata: 'ツ', eng: 'tsu'},
    {hira: 'て', kata: 'テ', eng: 'te'},
    {hira: 'と', kata: 'ト', eng: 'to'},
  ];

function Kana (props) {
    return (
        <div>
            <div>
                {props.hira}
            </div>
            <div>
                {props.kata}
            </div>
            <div>
                {props.pronunciation}
            </div>
        </div>
    );
}

ReactDOM.render(
    <KanaBoard message="How are you? We're just getting started!" kanaSet={KANA} />,
    document.getElementById('root')
  );
 
  
  /*

  Partial set of：

  Katakana

  カキクケコ
  ガギグゲゴ
  サシスセソ
  ザジズゼゾ
  ラリルレロ
  ハヒフヘホ
  バビブベボ
  パピプペポ
  ナニヌネノ
  マミムメモ
  ヤユヨ
  ンヲ  
  
  Hiragana

  かきくけこ
  がぎぐげご
  さしすせそ
  ざじずぜぞ
  らりるれろ
  はひふへほ
  ばびぶべぼ
  ぱぴぷぺぽ
  なにぬねの
  まみむめも
  やゆよ
  んを
  
  */