import React, { Component } from 'react'

// Advice: コードを書くときにはインデント(文頭スペース)の数とフォーマットに気をつけると
// コードが読みやすくなります。また、そのような整形を行ってくれるツールがあるので活用しましょう。
// ex) prettier, eslintなど

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


/*
コメントでは「ノーダメの」という僕が作った言葉を使っています。これは相手のマークが両端にない列のことを言っています。
例えば、
ノーダメの２は、null X X null
ノーダメの３は、null X X X null
ノーダメの４はnull X X X X null
と言った感じです。
ちなみに以下のようなノーダメの３ができた状況で相手がnullの部分に自分のマークを置かなければ相手は負けます
null null X X X null
null X X X null null

以下のコードはこの考えが基本となっております。

*/

class Board extends React.Component{
  constructor(props) {
    super(props);
  　// Advice: このような配列は一次元で作成しても構いませんが、
    // 二次元配列を利用した方が管理がしやすくなります。
    // 処理速度を早めるためにArrayを一次元にすることはあります。
    // なぜ早くなるかは、アドレスとシーケンシャルスキャンという
    // 概念を知る必要があり、簡単に言うと、データの保存場所
    // を順番になぞる方が、データの保存場所を飛び飛びでアクセス
    // するより早く探索できるというハードウェア上の挙動
    // が関係しています。ただし、現在ではその程度のパフォーマンス
    // チューニングをしなくても、利用に困らないため、可読性を重視しましょう。
    this.state = {
      // Advice: ここでは配列はサイズ99で指定されていますが、100にしましょう
      // 99でも動いてるのは、render(99)で100個目のindexにたまたま要素を
      // 突っ込んでもあとから動かせるからです。
      // これはjavascriptに特徴的な動きですが、一般的なプログラミング言語だと
      // エラーになる事が多いので添字と初期化時のパラメータの対応を間違えないようにしましょう
      squares: Array(99).fill(null),
    };
  }

  componentDidMount() {
    const squares = this.state.squares.slice();
    squares[44]='X';
    squares[45]='O';
    squares[54]='O';
    squares[55]='X';
    this.setState({squares:squares})
 

}
  // Advice: オブジェクト指向的にはthinkはBoardが行う動作というのは違和感があります
  // AIというクラスなどを作ってai.thinkなどと言う風に実際のプログラムを現実に即した
  // 表現にするとコードの可読性が上がります。

  think(squares){


    var prevent2=[];
    var defaultPlay=[];
    // Advice: クラスの中でクラスのスコープの中に存在しない変数を利用することは
    // カプセル化の原則に反しています。スコープ内の変数に入れるか、
    // 引数で受けとるあるいは、インスタンスのstateとして初期化するようにすることが望ましいです。
    for(let i=0;i<lines4.length;i++){
      const [a,b,c,d]=lines4[i];
        // Advice: 条件文が複数存在するときは改行して並べると可読性が上がります。
        if (squares[a]==null && squares[b]=='O' && squares[b] === squares[c] && squares[d] == null){
          prevent2.push(a,d)
        }else if(squares[a]!=='O' && squares[b]==='X' && squares[c] ==null&& squares[d] !=='O'){
          defaultPlay.push(c)
        }else if(squares[a]!=='O' && squares[b]==null && squares[c] ==='X'&& squares[d] !=='O'){
          defaultPlay.push(b)
        }

    }
    // Advice: ここから下のほとんどのコードはAIの行動パターンだと思うので、
    // 別クラスに切り出すのが良いでしょう。また、コードのif文に対して、
    // 重複するような処理が多いため、多くの場所で、簡略化できるはずです。
    // 実際に修正例をお見せしますが、ご自身でも色々考えてスリムにしてみてください。

    var lastOne=[]
    var prevent5=[];
    for(let j=0;j<lines.length;j++){
      const [a,b,c,d,e]=lines[j];
        if (squares[a]==null && squares[b]=='X' && squares[b] === squares[c] && squares[b] === squares[d]&&squares[b]===squares[e]){
          lastOne.push(a)
        }else if(squares[a]==='X' && squares[b]==null && squares[a] === squares[c] && squares[a] === squares[d]&&squares[a]==squares[e]){
          lastOne.push(b)
        }else if(squares[a]==='X' && squares[a]===squares[b] && squares[c] == null && squares[a] === squares[d]&&squares[a]==squares[e]){
          lastOne.push(c)
        }else if(squares[a]==='X' && squares[a]==squares[b] && squares[a] === squares[c] && squares[d] ==null&&squares[a]===squares[e]){
          lastOne.push(d)
        }else if(squares[a]==='X' && squares[a]==squares[b] && squares[a] === squares[c] && squares[a] === squares[d]&&squares[e]==null){
          lastOne.push(e)
        }else if(squares[a]==null && squares[b]=='O' && squares[b] === squares[c] && squares[b] === squares[d]&&squares[b]===squares[e]){
          prevent5.push(a)
        }else if(squares[a]==='O' && squares[b]==null && squares[a] === squares[c] && squares[a] === squares[d]&&squares[a]==squares[e]){
          prevent5.push(b)
        }else if(squares[a]==='O' && squares[a]===squares[b] && squares[c] == null && squares[a] === squares[d]&&squares[a]==squares[e]){
          prevent5.push(c)
        }else if(squares[a]==='O' && squares[a]==squares[b] && squares[a] === squares[c] && squares[d] ==null&&squares[a]===squares[e]){
          prevent5.push(d)
        }else if(squares[a]==='O' && squares[a]==squares[b] && squares[a] === squares[c] && squares[a] ===squares[d]&&squares[e]==null){
          prevent5.push(e)
        }

    }


    var make4=[];
    var prevent4=[];
    for(let k=0;k<lines6.length;k++){
      const [a,b,c,d,e,f]=lines6[k];
        if(squares[a]==null && squares[b] ==='X'  && squares[c] === squares[b] && squares[d] === squares[b] && squares[e] ==null&&squares[f]==null){
          make4.push(e)
        }else if(squares[a]==null && squares[b] ==null  && squares[c] === 'X' && squares[d] === squares[c] && squares[e] ===squares[c]&& squares[f]==null){
          make4.push(b)
        }else if(squares[a]==null && squares[b] ==='X'  && squares[c] === squares[b] && squares[d] ==null && squares[e] ===squares[b]&& squares[f]==null){
          make4.push(d)
        }else if(squares[a]==null && squares[b] ==='X'  && squares[c] ==null && squares[d] ==squares[b]&& squares[e] ===squares[b]&& squares[f]==null){
          make4.push(c)
        }else if(squares[a]==null && squares[b] ==='O'  && squares[c] === squares[b] && squares[d] === squares[b] && squares[e] ==null&&squares[f]==null){
          prevent4.push(e)
        }else if(squares[a]==null && squares[b] ==null  && squares[c] === 'O' && squares[d] === squares[c] && squares[e] ===squares[c]&& squares[f]==null){
          prevent4.push(b)
        }else if(squares[a]==null && squares[b] ==='O'  && squares[c] === squares[b] && squares[d] ==null && squares[e] ===squares[b]&& squares[f]==null){
          prevent4.push(d)
        }else if(squares[a]==null && squares[b] ==='O'  && squares[c] ==null && squares[d] ==squares[b]&& squares[e] ===squares[b]&& squares[f]==null){
          prevent4.push(c)
        }

    }

    var nullList=[];
    var selectedList=[];
    for (let i=0;i<100;i++){
      if(squares[i]==null){
        nullList.push(i);
      }else if(squares[i]==='O'){
        selectedList.push(i);
      }
    }

    var aroundSelectedNullList=nullList.filter((value)=>{
      return (selectedList.indexOf(value+11)!==-1)||(selectedList.indexOf(value+10)!==-1)||(selectedList.indexOf(value+9)!==-1)||(selectedList.indexOf(value+1)!==-1)||(selectedList.indexOf(value-1)!==-1)||(selectedList.indexOf(value-9)!==-1)||(selectedList.indexOf(value-10)!==-1)||(selectedList.indexOf(value-11)!==-1)
    })




    var chanceZone=this.predictiveAttackThinking(squares,nullList)[0];
    var dangerZone=this.predictiveDefenceThinking(squares,nullList)[0];
    var prospectiveDoubleChanceZone=this.prospectiveChanceZoneThinking(squares,nullList)[0];
    var prospectiveOneChanceZone=this.prospectiveChanceZoneThinking(squares,nullList)[1];
    var prospectiveDoubleDangerZone=this.prospectiveDoubleDangerZoneThinking(squares,aroundSelectedNullList);


    if(lastOne.length!==0){
      this.thinkLastOne(squares,lastOne)
    }else if(prevent5.length!==0){
      this.thinkPrevent5(squares,prevent5)
    }else if(make4.length!==0){
      this.thinkMake4(squares,make4)
    }else if(prevent4.length!==0){
      this.thinkPrevent4(squares,prevent4)
    }else if(chanceZone.length!==0){
      this.thinkChance(squares,chanceZone)
    }else if(dangerZone.length!==0){
      this.thinkDanger(squares,dangerZone)
    }else if(prospectiveDoubleChanceZone.length!==0){
      this.thinkProspectiveChance(squares,prospectiveDoubleChanceZone)
    }else if(prospectiveDoubleDangerZone.length!==0){
      this.thinkProspectiveDanger(squares,prospectiveDoubleDangerZone)
    }else if(prospectiveOneChanceZone.length!==0){
      this.thinkProspectiveChance(squares,prospectiveOneChanceZone)
    }else if(defaultPlay.length!==0){
      this.thinkDefaultPlay(squares,defaultPlay)
    }else if(prevent2.length!==0){
      this.thinkPrevent2(squares,prevent2)
    }else{
      this.thinkRandomplay(squares,nullList)
    }

    lastOne=[]
    prevent5=[];
    make4=[];
    prevent4=[];
    prevent2=[];
    defaultPlay=[]
  }

  //ノーダメの３を一度に２つ作る。これが成功した場合、相手は両方のノーダメの３を封じることはできないので確実に勝てる。
  predictiveAttackThinking(squares,nullList){
    var chanceZone=[];
    var chanceDoubleLines=[];

    nullList.forEach((value)=>{
      squares[value]='X';
      let makeDouble4=[];
      let chanceDoubleLinesNumbers=[];


//ここでlines6を使わずにあえてverticaList6やhorizonListなどに分けているのは、lines6でやるとノーダメの３がダブルカウントされてしまうです、そこでbreakを利用してダブルカウントを防いでいます・
      for(let j=0;j<verticalList6.length;j++){
        const [a,b,c,d,e,f]=verticalList6[j];
          if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] === squares[b] && squares[d] === squares[b] && squares[e] ==null&&squares[f]!=='O'){
            makeDouble4.push(e);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break ;
          }else if(squares[a]!=='O' && squares[b] ==null  && squares[c] === 'X' && squares[d] === squares[c] && squares[e] ===squares[c]&& squares[f]!=='O'){
            makeDouble4.push(b);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break ;
          }else if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] === squares[b] && squares[d] ==null && squares[e] ===squares[b]&& squares[f]!=='O'){
            makeDouble4.push(d);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break ;
          }else if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] ==null && squares[d] ==squares[b]&& squares[e] ===squares[b]&& squares[f]!=='O'){
            makeDouble4.push(c);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break ;
          }
      }

      for(let j=0;j<horizonList6.length;j++){
        const [a,b,c,d,e,f]=horizonList6[j];
          if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] === squares[b] && squares[d] === squares[b] && squares[e] ==null&&squares[f]!=='O'){
            makeDouble4.push(e);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break ;
          }else if(squares[a]!=='O' && squares[b] ==null  && squares[c] === 'X' && squares[d] === squares[c] && squares[e] ===squares[c]&& squares[f]!=='O'){
            makeDouble4.push(b);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break ;
          }else if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] === squares[b] && squares[d] ==null && squares[e] ===squares[b]&& squares[f]!=='O'){
            makeDouble4.push(d);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break ;
          }else if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] ==null && squares[d] ==squares[b]&& squares[e] ===squares[b]&& squares[f]!=='O'){
            makeDouble4.push(c);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }
      }
      for(let j=0;j<diagonalLeftList6.length;j++){
        const [a,b,c,d,e,f]=diagonalLeftList6[j];
          if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] === squares[b] && squares[d] === squares[b] && squares[e] ==null&&squares[f]!=='O'){
            makeDouble4.push(e);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }else if(squares[a]!=='O' && squares[b] ==null  && squares[c] === 'X' && squares[d] === squares[c] && squares[e] ===squares[c]&& squares[f]!=='O'){
            makeDouble4.push(b);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }else if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] === squares[b] && squares[d] ==null && squares[e] ===squares[b]&& squares[f]!=='O'){
            makeDouble4.push(d);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }else if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] ==null && squares[d] ==squares[b]&& squares[e] ===squares[b]&& squares[f]!=='O'){
            makeDouble4.push(c);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }
      }
      for(let j=0;j<diagonalRightList6.length;j++){
        const [a,b,c,d,e,f]=diagonalRightList6[j];
          if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] === squares[b] && squares[d] === squares[b] && squares[e] ==null&&squares[f]!=='O'){
            makeDouble4.push(e);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }else if(squares[a]!=='O' && squares[b] ==null  && squares[c] === 'X' && squares[d] === squares[c] && squares[e] ===squares[c]&& squares[f]!=='O'){
            makeDouble4.push(b);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }else if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] === squares[b] && squares[d] ==null && squares[e] ===squares[b]&& squares[f]!=='O'){
            makeDouble4.push(d);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }else if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] ==null && squares[d] ==squares[b]&& squares[e] ===squares[b]&& squares[f]!=='O'){
            makeDouble4.push(c);
            chanceDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }
      }




      if(makeDouble4.length>1){
        chanceZone.push(value);
        chanceDoubleLines.push(chanceDoubleLinesNumbers);
      }

      squares[value]=null;
    })
//dangerDoubleLinesも戻り値として返すのはprospectiveChanceZoneThinking()で利用するため
    return [chanceZone,chanceDoubleLines]
  }

//相手が"O"をおけば相手が一度にノーダメの３を二つ作ることができる場所に、あらかじめ"X"を置くことで、ノーダメの３が一度に２つ作られることを防ぐ。
  predictiveDefenceThinking(squares,nullList){
    var dangerZone=[];
    var dangerDoubleLines=[];
    nullList.forEach((value)=>{
      squares[value]='O';
      let nextTurnPrevent4=[];
      let dangerDoubleLinesNumbers=[];


      //ここでlines6を使わずにあえてverticaList6やhorizonListなどに分けているのは、lines6でやるとノーダメの３がダブルカウントされてしまうです、そこでbreakを利用してダブルカウントを防いでいます・

      for(let j=0;j<verticalList6.length;j++){
        const [a,b,c,d,e,f]=verticalList6[j];
          if(squares[a]!=='X' && squares[b] ==='O'  && squares[c] === squares[b] && squares[d] === squares[b] && squares[e] ==null&&squares[f]!=='X'){
            nextTurnPrevent4.push(e);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break ;
          }else if(squares[a]!=='X' && squares[b] ==null  && squares[c] === 'O' && squares[d] === squares[c] && squares[e] ===squares[c]&& squares[f]!=='X'){
            nextTurnPrevent4.push(b);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break ;
          }else if(squares[a]!=='X' && squares[b] ==='O'  && squares[c] === squares[b] && squares[d] ==null && squares[e] ===squares[b]&& squares[f]!=='X'){
            nextTurnPrevent4.push(d);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break ;
          }else if(squares[a]!=='X' && squares[b] ==='O'  && squares[c] ==null && squares[d] ==squares[b]&& squares[e] ===squares[b]&& squares[f]!=='X'){
            nextTurnPrevent4.push(c);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break ;
          }
      }

      for(let j=0;j<horizonList6.length;j++){
        const [a,b,c,d,e,f]=horizonList6[j];
          if(squares[a]!=='X' && squares[b] ==='O'  && squares[c] === squares[b] && squares[d] === squares[b] && squares[e] ==null&&squares[f]!=='X'){
            nextTurnPrevent4.push(e);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break ;
          }else if(squares[a]!=='X' && squares[b] ==null  && squares[c] === 'O' && squares[d] === squares[c] && squares[e] ===squares[c]&& squares[f]!=='X'){
            nextTurnPrevent4.push(b);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break ;
          }else if(squares[a]!=='X' && squares[b] ==='O'  && squares[c] === squares[b] && squares[d] ==null && squares[e] ===squares[b]&& squares[f]!=='X'){
            nextTurnPrevent4.push(d);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break ;
          }else if(squares[a]!=='X' && squares[b] ==='O'  && squares[c] ==null && squares[d] ==squares[b]&& squares[e] ===squares[b]&& squares[f]!=='X'){
            nextTurnPrevent4.push(c);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }
      }
      for(let j=0;j<diagonalLeftList6.length;j++){
        const [a,b,c,d,e,f]=diagonalLeftList6[j];
          if(squares[a]!=='X' && squares[b] ==='O'  && squares[c] === squares[b] && squares[d] === squares[b] && squares[e] ==null&&squares[f]!=='X'){
            nextTurnPrevent4.push(e);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }else if(squares[a]!=='X' && squares[b] ==null  && squares[c] === 'O' && squares[d] === squares[c] && squares[e] ===squares[c]&& squares[f]!=='X'){
            nextTurnPrevent4.push(b);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }else if(squares[a]!=='X' && squares[b] ==='O'  && squares[c] === squares[b] && squares[d] ==null && squares[e] ===squares[b]&& squares[f]!=='X'){
            nextTurnPrevent4.push(d);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }else if(squares[a]!=='X' && squares[b] ==='O'  && squares[c] ==null && squares[d] ==squares[b]&& squares[e] ===squares[b]&& squares[f]!=='X'){
            nextTurnPrevent4.push(c);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }
      }
      for(let j=0;j<diagonalRightList6.length;j++){
        const [a,b,c,d,e,f]=diagonalRightList6[j];
          if(squares[a]!=='X' && squares[b] ==='O'  && squares[c] === squares[b] && squares[d] === squares[b] && squares[e] ==null&&squares[f]!=='X'){
            nextTurnPrevent4.push(e);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }else if(squares[a]!=='X' && squares[b] ==null  && squares[c] === 'O' && squares[d] === squares[c] && squares[e] ===squares[c]&& squares[f]!=='X'){
            nextTurnPrevent4.push(b);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }else if(squares[a]!=='X' && squares[b] ==='O'  && squares[c] === squares[b] && squares[d] ==null && squares[e] ===squares[b]&& squares[f]!=='X'){
            nextTurnPrevent4.push(d);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }else if(squares[a]!=='X' && squares[b] ==='O'  && squares[c] ==null && squares[d] ==squares[b]&& squares[e] ===squares[b]&& squares[f]!=='X'){
            nextTurnPrevent4.push(c);
            dangerDoubleLinesNumbers.push(a,b,c,d,e,f);
            break;
          }
      }




      if(nextTurnPrevent4.length>1){
        dangerZone.push(value);
        dangerDoubleLines.push(dangerDoubleLinesNumbers);
      }

      squares[value]=null;
    })
//dangerDoubleLinesも戻り値として返すのはprospectiveDangerZoneThinking()で利用するため
    return [dangerZone,dangerDoubleLines]
  }

//相手の阻止がなければ、次のターンにノーダメの３を一度に二つ作れる場所ができるように、今のターン自分のマークをうつべき場所を考える
  prospectiveChanceZoneThinking(squares,nullList){
    var prospectiveDoubleChanceZone=[];
    var prospectiveOneChanceZone=[];
    //現在nullである場所に"X"を置いてみたと考える
    nullList.forEach((value)=>{
      squares[value]='X';
      var newNullList = nullList.filter((item)=> {
        return item !== value;
      });
      //現在のターンに置いたマークのせいで、次のターンにノーダメの４になるような場所は除外するため。なぜなら、こういう置き方は相手にばれやすく、阻止されてしまうことが多いため。
      let makeBefore4=[];
      for(let i=0;i<lines6.length;i++){
        const [a,b,c,d,e,f]=lines6[i];
          if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] === squares[b] && squares[d] === squares[b] && squares[e] ==null&&squares[f]!=='O'){
            makeBefore4.push(e);
            break ;
          }else if(squares[a]!=='O' && squares[b] ==null  && squares[c] === 'X' && squares[d] === squares[c] && squares[e] ===squares[c]&& squares[f]!=='O'){
            makeBefore4.push(b);
            break ;
          }else if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] === squares[b] && squares[d] ==null && squares[e] ===squares[b]&& squares[f]!=='O'){
            makeBefore4.push(d);
            break ;
          }else if(squares[a]!=='O' && squares[b] ==='X'  && squares[c] ==null && squares[d] ==squares[b]&& squares[e] ===squares[b]&& squares[f]!=='O'){
            makeBefore4.push(c);
            break;
          }
      }
      if(makeBefore4.length>0){
        squares[value]=null;
        return null;
      }else{
        let predictiveAttackThinking=this.predictiveAttackThinking(squares,newNullList);
        let futureChanceZone=predictiveAttackThinking[0];
        //次のターンに、ノーダメの４を一度に２つ作る場所が２つ以上ある場合
        if(futureChanceZone.length>1){
          let isSame='same';


          for(let i=0;i<predictiveAttackThinking[1][0].length;i++){
            if(predictiveAttackThinking[1][1].indexOf(predictiveAttackThinking[1][0][i]===-1)){
              isSame='different';
            }
          }

          var chanceDoubleLines=predictiveAttackThinking[1];
          if (isSame==='different'){
            //次のターンに、ノーダメの４を一度に２つ作る場所が２つ以上ある場合であり、かつ、その二箇所にマークした場合別々の組の２つのノーダメの４ができる場合。
            prospectiveDoubleChanceZone.push(value);
          }else{
            /*次のターンに、ノーダメの４を一度に２つ作る場所が２つ以上ある場合であり、かつ、その二箇所にマークした場合別々の組の２つのノーダメの４ができる場合。
              例えば以下のような状況
               X
              ★　X
              ★　　X
              X

              ここで★の場所に打てばどちらでも、ノーダメの４のいっぽ手前が２つできるが、これらは実質一箇所と考えるべき

            */
            //後から「現在のターンに置いたマークのせいで、次のターンにノーダメの４になるような場所は除外するための処理」を加えたため、上の状況は起こりえなくったので不用説が高いが、一応残した。処理が多くなるようであれば削除すべき
            prospectiveOneChanceZone.push(value);
          }


      }else if(futureChanceZone.length===1){
        //次のターンに、ノーダメの４を一度に２つ作る場所が1つある場合
        prospectiveOneChanceZone.push(value);
      }







      }
      squares[value]=null;



    })
    //２つの返り血を返すのは、のターンに、ノーダメの４を一度に２つ作る場所が２つ以上ある場合の処理を優先させるため
    return [prospectiveDoubleChanceZone,prospectiveOneChanceZone];
  }

  //相手が次のターンにノーダメの３を一度に二つ作れる場所ができるように、今のターン相手のマークをうつを防ぐべく。あらかじめそこに自分のマークをうつ

  prospectiveDoubleDangerZoneThinking(squares,aroundSelectedNullList){
    var prospectiveDoubleDangerZone=[];
    //現在nullである場所に"X"を置いてみたと考える
    //以下の処理はprospectiveDoubleDangerZoneThinking()とほぼ同じ
    aroundSelectedNullList.forEach((value)=>{
      squares[value]='O';
      var newAroundSelectedNullList = aroundSelectedNullList.filter((item)=> {
        return item !== value;
      });
      let predictiveDefenceThinking=this.predictiveDefenceThinking(squares,newAroundSelectedNullList);


      var futureDangerZone=predictiveDefenceThinking[0];
      if (futureDangerZone.length>1){

        let isSame='same';


        for(let i=0;i<predictiveDefenceThinking[1][0].length;i++){
          if(predictiveDefenceThinking[1][1].indexOf(predictiveDefenceThinking[1][0][i]===-1)){
            isSame='different';
          }
        }

        var chanceDoubleLines=predictiveDefenceThinking[1]
        if (isSame==='different'){
          prospectiveDoubleDangerZone.push(value);
        }
      }
      squares[value]=null;



    })
    return prospectiveDoubleDangerZone;
  }
  thinkDanger(squares,dangerZone){
    let randomNumber= Math.floor( Math.random() * dangerZone.length );
    let putHere=dangerZone[randomNumber]
    squares[putHere]='X'
    this.setState({
      squares: squares,
    });
    console.log('defence')


  }

  thinkChance(squares,chanceZone){
    let randomNumber= Math.floor( Math.random() * chanceZone.length );
    let putHere=chanceZone[randomNumber]
    squares[putHere]='X'
    this.setState({
      squares: squares,
    });
    console.log('attack')

  }

  thinkLastOne(squares,lastOne){
    let randomNumber= Math.floor( Math.random() * lastOne.length );
    let putHere=lastOne[randomNumber]
    squares[putHere]='X'
    this.setState({
      squares: squares,
    });

  }
  thinkPrevent5(squares,prevent5){
    let randomNumber= Math.floor( Math.random() * prevent5.length );
    let putHere=prevent5[randomNumber]
    squares[putHere]='X'
    this.setState({
      squares: squares,
    });

  }
  thinkMake4(squares,make4){
    let randomNumber= Math.floor( Math.random() * make4.length );
    let putHere=make4[randomNumber]
    squares[putHere]='X'
    this.setState({
      squares: squares,
    });

  }
  thinkPrevent4(squares,prevent4){
    let randomNumber= Math.floor( Math.random() * prevent4.length );
    let putHere=prevent4[randomNumber]
    squares[putHere]='X'
    this.setState({
      squares: squares,
    });

  }
  thinkProspectiveChance(squares,prospectiveDoubleChanceZone){
    let randomNumber= Math.floor( Math.random() * prospectiveDoubleChanceZone.length );
    let putHere=prospectiveDoubleChanceZone[randomNumber]
    squares[putHere]='X'
    this.setState({
      squares: squares,
    });
    console.log('super attack!!!');

  }
  thinkProspectiveDanger(squares,prospectiveDoubleDangerZone){
    let randomNumber= Math.floor( Math.random() * prospectiveDoubleDangerZone.length );
    let putHere=prospectiveDoubleDangerZone[randomNumber]
    squares[putHere]='X'
    this.setState({
      squares: squares,
    });

  }
  thinkDefaultPlay(squares,defaultPlay){
    let randomNumber= Math.floor( Math.random() * defaultPlay.length );
    let putHere=defaultPlay[randomNumber]
    squares[putHere]='X'
    this.setState({
      squares: squares,
    });
    console.log('default')
  }
  thinkPrevent2(squares,prevent2){
    let randomNumber= Math.floor( Math.random() * prevent2.length );
    let putHere=prevent2[randomNumber]
    squares[putHere]='X'
    this.setState({
      squares: squares,
    });
    console.log('prevent2')

  }
  thinkRandomplay(squares,nullList){
    let randomNumber= Math.floor( Math.random() * nullList.length );
    let putHere=nullList[randomNumber]
    squares[putHere]='X'
    this.setState({
      squares: squares,
    });
    console.log('random')
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }else{
    squares[i]='O';
    this.setState({
      squares: squares,
    });

//ここに機能追加
    this.think(squares);
    }
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }


  render(){
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return(
    <div >
      {status}
      <div className="board-row">
        {/* Advice: この辺りは,forを使うことで楽をする事ができます。 */}
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        {this.renderSquare(9)}
      </div>
      <div className="board-row">
        {this.renderSquare(10)}
        {this.renderSquare(11)}
        {this.renderSquare(12)}
        {this.renderSquare(13)}
        {this.renderSquare(14)}
        {this.renderSquare(15)}
        {this.renderSquare(16)}
        {this.renderSquare(17)}
        {this.renderSquare(18)}
        {this.renderSquare(19)}

      </div>
      <div className="board-row">
        {this.renderSquare(20)}
        {this.renderSquare(21)}
        {this.renderSquare(22)}
        {this.renderSquare(23)}
        {this.renderSquare(24)}
        {this.renderSquare(25)}
        {this.renderSquare(26)}
        {this.renderSquare(27)}
        {this.renderSquare(28)}
        {this.renderSquare(29)}
      </div>
      <div className="board-row">
        {this.renderSquare(30)}
        {this.renderSquare(31)}
        {this.renderSquare(32)}
        {this.renderSquare(33)}
        {this.renderSquare(34)}
        {this.renderSquare(35)}
        {this.renderSquare(36)}
        {this.renderSquare(37)}
        {this.renderSquare(38)}
        {this.renderSquare(39)}
      </div>
      <div className="board-row">
        {this.renderSquare(40)}
        {this.renderSquare(41)}
        {this.renderSquare(42)}
        {this.renderSquare(43)}
        {this.renderSquare(44)}
        {this.renderSquare(45)}
        {this.renderSquare(46)}
        {this.renderSquare(47)}
        {this.renderSquare(48)}
        {this.renderSquare(49)}
      </div>
      <div className="board-row">
        {this.renderSquare(50)}
        {this.renderSquare(51)}
        {this.renderSquare(52)}
        {this.renderSquare(53)}
        {this.renderSquare(54)}
        {this.renderSquare(55)}
        {this.renderSquare(56)}
        {this.renderSquare(57)}
        {this.renderSquare(58)}
        {this.renderSquare(59)}
      </div>
      <div className="board-row">
        {this.renderSquare(60)}
        {this.renderSquare(61)}
        {this.renderSquare(62)}
        {this.renderSquare(63)}
        {this.renderSquare(64)}
        {this.renderSquare(65)}
        {this.renderSquare(66)}
        {this.renderSquare(67)}
        {this.renderSquare(68)}
        {this.renderSquare(69)}
      </div>
      <div className="board-row">
        {this.renderSquare(70)}
        {this.renderSquare(71)}
        {this.renderSquare(72)}
        {this.renderSquare(73)}
        {this.renderSquare(74)}
        {this.renderSquare(75)}
        {this.renderSquare(76)}
        {this.renderSquare(77)}
        {this.renderSquare(78)}
        {this.renderSquare(79)}
      </div>
      <div className="board-row">
        {this.renderSquare(80)}
        {this.renderSquare(81)}
        {this.renderSquare(82)}
        {this.renderSquare(83)}
        {this.renderSquare(84)}
        {this.renderSquare(85)}
        {this.renderSquare(86)}
        {this.renderSquare(87)}
        {this.renderSquare(88)}
        {this.renderSquare(89)}
      </div>
      <div className="board-row">
        {this.renderSquare(90)}
        {this.renderSquare(91)}
        {this.renderSquare(92)}
        {this.renderSquare(93)}
        {this.renderSquare(94)}
        {this.renderSquare(95)}
        {this.renderSquare(96)}
        {this.renderSquare(97)}
        {this.renderSquare(98)}
        {this.renderSquare(99)}
      </div>



    </div>
    )
  }
}

/** 
 * 
 *  Advice: 括弧で括られてない実装は全てこのファイルにおける狭義のglobal(top level)スコープに
 *  なっていますが、ここでは、初期化に関わるプログラム以外は実行しない方が良いでしょう。
 *  理由は関数やクラスなどの定義以外は、上から順番に実行されていきますが、ファイルを複数読み込む
 *  とき、何か実行しているものがある場合それがバグを起こすと、１つ１つファイルの中身を読まないと
 *  バグが特定しにくくなるからです。実際は関数やクラスのコンストラクターを使って、必要になるまで
 *  実行を保留するように作ると、呼び出した先で後々必要な処理のみをプログラムに含めることができます。
 *  また以下の処理はほとんどの場合、簡略化する事ができそうなので、色々考えてみてください。
 *
 **/


//５列リスト

const horizonBasic=[0,1,2,3,4,5];
const horizonLeaders=[]
for (let i=0;i<10;i++){
  let additionalHorizon=horizonBasic.map((value)=>{
    return value+10*i;
  });
  Array.prototype.push.apply(horizonLeaders,additionalHorizon);
}
const horizonList=horizonLeaders.map((value)=>{
  return [value,value+1,value+2,value+3,value+4]
})



const verticalLeaders=[];
for (let i=0;i<60;i++){
  verticalLeaders.push(i)
}

const verticalList=verticalLeaders.map((value)=>{
  return [value,value+10,value+20,value+30,value+40]
})



const diagonalLeftBasic=[0,1,2,3,4,5];
const diagonalLeftLeaders=[];
for (let i=0;i<6;i++){
  let additionalDiagonalLeft=diagonalLeftBasic.map((value)=>{
    return value+10*i;
  });
  Array.prototype.push.apply(diagonalLeftLeaders,additionalDiagonalLeft);
}


const diagonalLeftList=diagonalLeftLeaders.map((value)=>{
  return [value,value+11,value+22,value+33,value+44]
})



const diagonalRightLeaders=diagonalLeftLeaders.map((value)=>{
  return value+4
})
const diagonalRightList=diagonalRightLeaders.map((value)=>{
  return [value,value+9,value+18,value+27,value+36]
})

//以上が５列リスト








//4列リスト
const horizonBasic4=[0,1,2,3,4,5,6];
const horizonLeaders4=[]
for (let i=0;i<10;i++){
  let additionalHorizon4=horizonBasic4.map((value)=>{
    return value+10*i;
  });
  Array.prototype.push.apply(horizonLeaders4,additionalHorizon4);
}

const horizonList4=horizonLeaders4.map((value)=>{
  return [value,value+1,value+2,value+3]
})




const verticalLeaders4=[];
for (let i=0;i<70;i++){
  verticalLeaders4.push(i)
}

const verticalList4=verticalLeaders4.map((value)=>{
  return [value,value+10,value+20,value+30]
})


const diagonalLeftBasic4=[0,1,2,3,4,5,6];
const diagonalLeftLeaders4=[];
for (let i=0;i<7;i++){
  let additionalDiagonalLeft4=diagonalLeftBasic4.map((value)=>{
    return value+10*i;
  });
  Array.prototype.push.apply(diagonalLeftLeaders4,additionalDiagonalLeft4);
}


const diagonalLeftList4=diagonalLeftLeaders4.map((value)=>{
  return [value,value+11,value+22,value+33]
})


const diagonalRightLeaders4=diagonalLeftLeaders4.map((value)=>{
  return value+3
})
const diagonalRightList4=diagonalRightLeaders4.map((value)=>{
  return [value,value+9,value+18,value+27]
})


const lines4=verticalList4.concat(horizonList4,diagonalLeftList4,diagonalRightList4);

//以上が４列リスト




//6列リスト
const horizonBasic6=[0,1,2,3,4];
const horizonLeaders6=[]
for (let i=0;i<10;i++){
  let additionalHorizon6=horizonBasic6.map((value)=>{
    return value+10*i;
  });
  Array.prototype.push.apply(horizonLeaders6,additionalHorizon6);
}

const horizonList6=horizonLeaders6.map((value)=>{
  return [value,value+1,value+2,value+3,value+4,value+5]
})


const verticalLeaders6=[];
for (let i=0;i<50;i++){
  verticalLeaders6.push(i)
}

const verticalList6=verticalLeaders6.map((value)=>{
  return [value,value+10,value+20,value+30,value+40,value+50]
})


const diagonalLeftBasic6=[0,1,2,3,4];
const diagonalLeftLeaders6=[];
for (let i=0;i<5;i++){
  let additionalDiagonalLeft6=diagonalLeftBasic6.map((value)=>{
    return value+10*i;
  });
  Array.prototype.push.apply(diagonalLeftLeaders6,additionalDiagonalLeft6);
}


const diagonalLeftList6=diagonalLeftLeaders6.map((value)=>{
  return [value,value+11,value+22,value+33,value+44,value+55]
})



const diagonalRightLeaders6=diagonalLeftLeaders6.map((value)=>{
  return value+5
})
const diagonalRightList6=diagonalRightLeaders6.map((value)=>{
  return [value,value+9,value+18,value+27,value+36,value+45]
})


const lines6=verticalList6.concat(horizonList6,diagonalLeftList6,diagonalRightList6);

//以上が6列リスト



  const lines = verticalList.concat(horizonList,diagonalLeftList,diagonalRightList);
function calculateWinner(squares) {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d, e] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]) {
      return squares[a];
    }

  }
  return null;
}


export default Board
