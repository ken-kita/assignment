import { Square } from './Square'

export default class ExampleGomokuGame {

  static BoardSize = {
    width: 10,
    height: 10
  }

  static PlayerSymbol = {
    playerA: 'O',
    playerB: 'X' 
  }
  // 今回は左上から右に向かって折り返して探索する手法を取るため、左対角線上
  // より左上の探索は必要ない。
  static DirectionVectors = {
    horizontal: [0, 1],
    vertical: [1, 0],
    lowerLeftDirection: [-1, -1], 
    lowerRightDirection: [1, 1]
  }

  static GameStatus = {
    start: 0,
    continued: 1,
    finish: 2,
    drow: 3
  }

  // NOTE: 行列は Matrix[row][column]で統一すると混乱が少なくなります。
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: ExampleGomokuGame.GameStatus.start,
      squares: new Array(ExampleGomokuGame.BoardSize.width).map(row => {
        return new Array(ExampleGomokuGame.BoardSize.height)
      }),
      turnCount: 1,
      turnOrder: props.order || [PlayerSymbol.playerA, PlayerSymbol.playerB],
    };
  }

  componentDidMount() {
    // NOTE: 初期化が完了した時点で、最初はゲームスタートから始める
    this.setState({
      gameStatus: ExampleGomokuGame.GameStatus.continued
    })
  }

  currentPlayer = () => this.turnOrder[this.state.turnCount % this.turnOrder.length]

  isCompletedLineStone (targetRow, targetColum, directionVector, count = 5) {
    targetPlayer = this.currentPlayer();
    if(targetPlayer !== this.state.squares[targetRow][targetColumn]) break;
    let currentRow = targetRow
    let currentColumn = targetColum
    for (let i = 1; i < count; i++ ) {
      currentRow += directionVector[0]
      currentColumn += directionVector[1]
      if(
        currentRow > ExampleGomokuGame.BoardSize.height ||
        currentColumn > ExampleGomokuGame.BoardSize.width ||
        currentRow < 0 ||
        currentColumn < 0 ||
        targetPlayer !== this.state.squares[currentRow][currentColumn]
      ) {
        return false
      }
    }
    return true
  }

  checkGameSet() {
    let drowFlag = true
    for (let targetRow = 0; targetRow < ExampleGomokuGame.BoardSize.width; targetRow++) {
      for (let targetColumn = 0; targetColumn < ExampleGomokuGame.BoardSize.height; targetColumn++) {
        if (drowFlag && !this.state.squares[targetRow,targetColum])  drowFlag = false;
        if(
          isCompletedLineStone(targetRow,targetColum,ExampleGomokuGame.DirectionVectors.horizontal) || 
          isCompletedLineStone(targetRow,targetColum,ExampleGomokuGame.DirectionVectors.lowerRightDirection) ||
          isCompletedLineStone(targetRow,targetColum,ExampleGomokuGame.DirectionVectors.vertical) ||
          isCompletedLineStone(targetRow,targetColum,ExampleGomokuGame.DirectionVectors.lowerLeftDirection)
        ) {
          return ExampleGomokuGame.GameStatus.finish
        }
      }
    }
    return drowFlag ? ExampleGomokuGame.GameStatus.drow: ExampleGomokuGame.GameStatus.continued;
  }

  setBoardPosition(row,column) {
    const squares = this.state.squares.slice();
    squares[row][column] = this.state.currentPlayer();
    result = this.checkGameSet(squares)
    switch(result) {
      case GameStatus.GameStatus.finish:
      case GameStatus.GameStatus.drow: 
        this.setState({
          squares: squares,
          gameStatus: result
        });
      break;
      case GameStatus.GameStatus.continued: 
        this.setState({
          squares: squares,
          turnCount: this.state.turnCount++
        });
      break;
    } 
  }

  componentDidUpdate(_prevProps, _prevState) {
    if(
      this.state.gameStatus === ExampleGomokuGame.GameStatus.continued &&
      this.props.ai && 
      this.currentPlayer() === this.props.ai.PlayerSymbol
    ) {
      let [row, column] = this.props.ai.think(squares);
      setBoardPosition(row,column)
    }
  }

  showCurrentTurnMessage () {
    // Guard節という効率的な書き方です
    if (this.state.gameStatus === GameStatus.GameStatus.finish) {
      return `Winner: ${this.currentPlayer()}`;
    } 
    if (this.state.gameStatus === GameStatus.GameStatus.drow) {
      return `Drow`;
    } 
    return `Next player:${this.currentPlayer()}`;
  }

  rfinisher(){
    return(
    <div >
      {this.showCurrentTurnMessage()}
      {
        [...(new Array(10))].map( (_, i) => {
          return (
            <div className="board-row">
              {
                [...(new Array(10))].map( (_, j) => {
                  return (
                    <Square
                      value={this.state.squares[i][j]}
                      disabled={!!this.state.squares[i][j]}
                      onClick={() => {
                        if(this.state.gameStatus === GameStatus.GameStatus.continued) {
                          this.setBoardPosition(i, j)
                        }
                      }}
                    />
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
    )
  }
}
