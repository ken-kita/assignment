import React, { Component } from 'react'


class Sidemenu extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.buttonClick=this.buttonClick.bind(this);
    this.setButtonOff=this.setButtonOff.bind(this);
  }
//検索されたワードを親のApp.jsのステートに入れるため
  handleChange(e){
    this.props.handleSearchWord(e.target.value);

  }
//検索ボタンが押されたかどうかを親のステートに入れる。これはユーザが検索ワードを入力した時ではなく、検索ボタンを押した時に、合致するものだけを表示する処理を行うため
  buttonClick(){
    this.props.clickSearch()
  }
//ユーザーが検索ボタンを押し検索結果が出された状態で、表示されていない記事へのリンクを、ユーザが「最新の記事」欄から押した時の対応のため
  setButtonOff(){
    this.props.setButtonOff()
  }

  render(){
    const recentArticleTitles=this.props.recentArticleTitles;
    const recentArticleIds=this.props.recentArticleIds;
    const href0='#'+recentArticleIds[0];
    const href1='#'+recentArticleIds[1];
    const href2='#'+recentArticleIds[2];

    return(
      <div className="sidemenu">
        <div className="search-function">
          <h3>キーワード検索</h3>
          <input className="searchWord-input" value={this.props.searchWord} onChange={this.handleChange}/>
          <input className="search-button" type="button" value="検索" onClick={this.buttonClick}/>
        </div>
        <div className="recentArticles">
          <h3>最近の記事</h3>
          <ul>
            <li><a href={href0} onClick={this.setButtonOff}>{recentArticleTitles[0]}</a></li>
            <li><a href={href1} onClick={this.setButtonOff}>{recentArticleTitles[1]}</a></li>
            <li><a href={href2} onClick={this.setButtonOff}>{recentArticleTitles[2]}</a></li>
          </ul>
        </div>
      </div>

    )
  }
}



export default Sidemenu
