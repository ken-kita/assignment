document.addEventListener('DOMContentLoaded',function(){

//全ての記事のdivに上から順にIDを自動でふる（記事を後から追加してもJavaScriptで作った機能は何もしなくてもつくように）
  var articles=document.getElementsByName('article');
  for(var i=0,len=articles.length;i<len;i++){
    articles.item(i).id='article'+i
  }
//検索で非表示にされていた記事が、「最近の記事」をクリックされた時には表示されるように
  for(var j=0;j<3;j++){

    let recentArticle=document.getElementById('article'+j);
    document.getElementById('recent'+j).addEventListener('click',function(){
      recentArticle.style.display='block'

  },false);
  }
//後から記事を追加されても、「最近の記事」を自動で表示し、リンク先もつける
  document.getElementById('recent0').textContent=document.querySelector('#article0 h2').textContent;
  document.getElementById('recent0').href="#article0"
  document.getElementById('recent1').textContent=document.querySelector('#article1 h2').textContent;
  document.getElementById('recent1').href="#article1"
  document.getElementById('recent2').textContent=document.querySelector('#article2 h2').textContent;
  document.getElementById('recent2').href="#article2"
  //document.getElementById('recent1').textContent=document.querySelector('#result').textContent;
  //document.querySelector('#1').textContent;

//後から記事を追加されても、「記事一覧」を自動で表示し、リンク先もつける
var frag= document.createDocumentFragment();

for(var k=0;k<len;k++){
//記事のタイトルを入手しテクストノードを作る
  var titleAnchor=document.getElementById('article'+k).firstElementChild;
  //var titleHeadline=titleAnchor.firstChild;
  var contentTitle=titleAnchor.textContent;
  var text=document.createTextNode(contentTitle);

//アンカータグの子要素にテクストノードを配置
  var anchor=document.createElement('a');
  anchor.href='#article'+k;
  var text=document.createTextNode(contentTitle);
  anchor.appendChild(text);
//リストの子要素にアンカータグを配置
  var li=document.createElement('li');
  li.appendChild(anchor);
  frag.appendChild(li);
}
document.getElementById('lists').appendChild(frag);

//検索機能（後から追加されても検索対象にできる）
  document.getElementById('btn').addEventListener('click',function(){


/*
    var word= document.getElementById('tx').value;

    var article1=document.getElementById('article1')
    var content1=article1.textContent;
    console.log(article1);
    var num=content1.indexOf(word);
    console.log(num);
    if(num!==-1){
      article1.style.display='block'
    }else {
      article1. style.display='none'
    }
*/


    document.getElementById('result').style.display='block';

    var word= document.getElementById('tx').value;
    //var articles=document.getElementsByName('article');
    for(var i=0,len=articles.length;i<len;i++){
      //articles.item(i).id=i
      var article=document.getElementById('article'+i)
      var content=article.textContent;
      console.log(content);
      var num=content.indexOf(word);
      console.log(num);
      if(num===-1){
        article.style.display='none'
      }else {
        article.style.display='block'
      }

    }



  },false);
},false);
