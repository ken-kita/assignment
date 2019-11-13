export default class AI {
  constructor(params) {
    this.playerSymbol = params.playerSymbol
    this.thinkBoardSize = params.thinkBoardSize
  }
  think(squares) {
    // 例として最弱のAI
    // thinkというメソッドを持ち二次元配列を返すメソッドを持つクラスです。
    // このインターフェースを守っていれば、コピペで様々なAIの実装を入れ替える事ができます。
    // これを抽象化と言います。抽象化を強制する仕組みがあるので調べてみてください。
    let nextRow = Math.floor(Math.random() * 10)
    let nextColumn = Math.floor(Math.random() * 10)
    if (squares[nextRow][nextColumn]) {
      for(let i =0 ; i< this.thinkBoardSize.height; i++){
        for(let j = 0; j< this.thinkBoardSize.width; j++) {
          if(!squares[i][j]) return [i,j]
        }
      }
    }
    return [nextRow,nextColumn]
  }
}