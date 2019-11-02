import React, { Component } from 'react'


class Article extends Component{
  constructor(props){
    super(props);
    this.clicked=this.clicked.bind(this);
    this.mouseOver=this.mouseOver.bind(this);
    this.mouseOut=this.mouseOut.bind(this);
    this.returnClicked=this.returnClicked.bind(this);
    this.state=({className:'normal-article'})
  }
  clicked(){
    this.setState({className:'clicked-article'})
  }
//記事のタイトルと「続きを読む」にhoverが使えないので代用として
  mouseOver(e){
    e.target.className='lowOpacity'
  }
  mouseOut(e){
    e.target.className='normalOpacity'
  }

  returnClicked(){
    this.setState({className:'normal-article'})
  }

  render(){
    let className=this.state.className;
    const buttonClicked=this.props.buttonClicked;
    const searchWord=this.props.searchWord;
    const articleId=this.props.id;
    const returnHref="#"+articleId;

//検索ボタンがクリックされた状態で、検索ワードを含まない記事は非表示にする処理
    const articleTitle=this.props.title;
    const articleTime=this.props.time;
    const articleContent=this.props.content
    const num1=articleTitle.indexOf(searchWord);
    const num2=articleContent.indexOf(searchWord);
    let searchedContent;
    if(buttonClicked==="on"&&num1===-1&&num2===-1){
      searchedContent=null;
    } else {
      searchedContent=
           <div className= {className}  id={articleId}>
             <h2 onClick={this.clicked} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>{articleTitle}</h2>
             <time className="date">{articleTime}</time>
             <p className='article-text'>{articleContent}</p>
             <p onClick={this.clicked} className="article-continue"><span onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>...続きを読む</span></p>
             <button className="article-return" onClick={this.returnClicked}><a href={returnHref}>戻る</a></button>
           </div>;;
    }


    return(
      <div >{searchedContent}</div>
    )
  }
}

export default Article
