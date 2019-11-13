import React from 'react'
import { Square } from './Square'

export default class ExampleGomokuGame extends React.Component {

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
    lowerLeftDirection: [1, -1], 
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
      squares: new Array(ExampleGomokuGame.BoardSize.width).fill(null).map( _row => {
        return new Array(ExampleGomokuGame.BoardSize.height).fill(null)
      }),
      turnCount: 0,
      turnOrder: props.order || [ExampleGomokuGame.PlayerSymbol.playerA, ExampleGomokuGame.PlayerSymbol.playerB],
    };
  }

  componentDidMount() {
    // NOTE: 初期化が完了した時点で、最初はゲームスタートから始める
    let squares = this.state.squares.slice();
    squares[4][4] = ExampleGomokuGame.PlayerSymbol.playerB
    squares[4][5] = ExampleGomokuGame.PlayerSymbol.playerA
    squares[5][4] = ExampleGomokuGame.PlayerSymbol.playerA
    squares[5][5] = ExampleGomokuGame.PlayerSymbol.playerB
    this.setState({
      squares: squares,
      gameStatus: ExampleGomokuGame.GameStatus.continued
    })
  }

  currentPlayer = () => this.state.turnOrder[this.state.turnCount % this.state.turnOrder.length]

  isCompletedLineStone (targetRow, targetColumn, directionVector, count = 5) {
    const targetPlayer = this.currentPlayer();
    if(targetPlayer !== this.state.squares[targetRow][targetColumn]) return false;
    let currentRow = targetRow
    let currentColumn = targetColumn
    for (let i = 1; i < count; i++ ) {
      currentRow += directionVector[0]
      currentColumn += directionVector[1]
      if(
        currentRow >= ExampleGomokuGame.BoardSize.height ||
        currentColumn >= ExampleGomokuGame.BoardSize.width ||
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
        if (drowFlag && !this.state.squares[targetRow][targetColumn]) {
          drowFlag = false;
        }
        if(
          this.isCompletedLineStone(targetRow,targetColumn,ExampleGomokuGame.DirectionVectors.horizontal) || 
          this.isCompletedLineStone(targetRow,targetColumn,ExampleGomokuGame.DirectionVectors.lowerRightDirection) ||
          this.isCompletedLineStone(targetRow,targetColumn,ExampleGomokuGame.DirectionVectors.vertical) ||
          this.isCompletedLineStone(targetRow,targetColumn,ExampleGomokuGame.DirectionVectors.lowerLeftDirection)
        ) {
          return ExampleGomokuGame.GameStatus.finish
        }
      }
    }
    return drowFlag ? ExampleGomokuGame.GameStatus.drow: ExampleGomokuGame.GameStatus.continued;
  }

  setBoardPosition(row,column) {
    const squares = this.state.squares.slice();
    squares[row][column] = this.currentPlayer();
    const result = this.checkGameSet(squares)
    switch(result) {
      case ExampleGomokuGame.GameStatus.finish:
      case ExampleGomokuGame.GameStatus.drow: 
        this.setState({
          squares: squares,
          gameStatus: result
        });
      break;
      case ExampleGomokuGame.GameStatus.continued: 
        this.setState({
          squares: squares,
          turnCount: ++this.state.turnCount
        });
      break;
    } 
  }

  componentDidUpdate(_prevProps, _prevState) {
    if(
      this.state.gameStatus === ExampleGomokuGame.GameStatus.continued &&
      this.props.ai && 
      this.currentPlayer() === this.props.ai.playerSymbol
    ) {
      let [row, column] = this.props.ai.think(this.state.squares);
      this.setBoardPosition(row,column)
    }
  }

  showCurrentTurnMessage () {
    // Guard節という効率的な書き方です
    if (this.state.gameStatus === ExampleGomokuGame.GameStatus.finish) {
      return `Winner: ${this.currentPlayer()}`;
    } 
    if (this.state.gameStatus === ExampleGomokuGame.GameStatus.drow) {
      return `Drow`;
    } 
    return `Next player:${this.currentPlayer()}`;
  }

  render(){
    return(
      <div >
        {this.showCurrentTurnMessage()}
        {
          [...(new Array(ExampleGomokuGame.BoardSize.height))].map( (_, i) => {
            return (
              <div className="board-row" key={i}>
                {
                  [...(new Array(ExampleGomokuGame.BoardSize.width))].map( (_, j) => {
                    return (
                      <Square
                        key={j}
                        value={this.state.squares[i][j]}
                        onClick={() => {
                          if(
                            this.state.gameStatus === ExampleGomokuGame.GameStatus.continued &&
                            !this.state.squares[i][j]
                          ) {
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
