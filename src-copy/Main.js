import React, { Component } from 'react'
import Article from './Article.js'


class Main extends Component{


  render(){

    const searchWord=this.props.searchWord;
    const articleList=this.props.articleList;
    const buttonClicked=this.props.buttonClicked;
//buttonClickedが"on"時のみ表示する
    let resultShow;
    if(buttonClicked==="on"){
      resultShow=
        <h3>検索結果：</h3>
    }else{
      resultShow=null;
    }

    return(

      <main className="main" >
        {resultShow}
        {articleList.map((articleItem)=>{

          return(


            <Article
              key={articleItem.id}
              id={articleItem.id}
              title={articleItem.title}
              time={articleItem.time}
              content={articleItem.content}
              searchWord={searchWord}
              buttonClicked={this.props.buttonClicked}
            />
          )
        })}
      </main>
    )
  }
}

export default Main;
