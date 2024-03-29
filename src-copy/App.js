import React, { Component } from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Sidemenu from './Sidemenu.js'
import Footer from './Footer.js'

//記事の情報はApp.jsのarticleListで一括管理し、子のコンポーネントにpropsとして渡す
/*テンプレート
{title:'',time:'',id:'',content:''},
*/
const articleList=[
  {title:'英・EU、修正離脱案で合意',time:'2019/10/17',id:'britain',content:'   欧州連合（EU）と英国は17日、EU離脱案の見直しをめぐる交渉で合意した。\n\n   最大の懸案だった英領北アイルランドの国境管理問題で歩み寄り、妥協点を見いだした。EUは同日の首脳会議で、修正した新たな離脱案を承認する見通し。月末に離脱期限が迫る中、合意が絶望視されていた一時の行き詰まりから一転、「合意なき離脱」回避へ大きく前進する。\n\n   今後は離脱案批准に必要となる英議会と欧州議会双方での承認が焦点となる。英政府は19日に英下院に修正離脱案を諮る予定だが、与党・保守党は過半数に満たない上、閣外協力している北アイルランドの地域政党・民主統一党（DUP）は不支持を表明しており、承認を得られるかは不透明。否決されて離脱期限が再び延期される展開もあり得る。\n\n    合意を受け、ジョンソン英首相は「主権を取り戻す素晴らしい新たな合意を得た」とツイッターで強調。議会に承認を促した。ユンケル欧州委員長も「EUと英国にとって公平でバランスの取れた合意だ」と自賛した。'},
  {title:'即位の礼パレード、延期で政府調整',time:'2019/10/17',id:'parade',content:'   政府は、甚大な被害が出た台風１９号の被災者に配慮するなどとして、２２日に予定している天皇陛下の即位に伴う祝賀パレード「祝賀御列の儀」を当面、延期する方向で調整に入った。\n\n    パレードに先立ち、同日行われる「即位礼正殿の儀」や、パレード後に天皇陛下の即位を国内外の賓客に披露する祝宴「饗宴（きょうえん）の儀」は、予定通り執り行われる見通しだ。政府関係者によると、パレードの開催時期は未定という。当初の計画では、パレードは２２日午後３時半に皇居を出発し、約４・６キロの道のりを進む予定だった。菅義偉官房長官は１５日の会見では、「祝賀御列の儀などの準備については淡々と進めていきたい」と述べていた。'},
  {title:'東京五輪 マラソン・競歩「札幌での実施を検討」ＩＯＣ発表',time:'2019/10/16',id:'marathon',content:'   東京オリンピックのマラソンと競歩について、ＩＯＣ＝国際オリンピック委員会は16日、猛暑の対策として会場を札幌に移すことを検討していると発表しました。\n\n    来年の東京オリンピックでは、猛暑の対策が大きな課題でなかでも屋外で長時間、競技が続くマラソンと競歩は大会の組織委員会が開始時間を招致段階の計画から前倒しするなど、さまざまな対策を検討してきました。\n\n    これについてＩＯＣは、16日、マラソンと競歩の会場を札幌に移すことを検討していると発表しました。\n\n    理由として、オリンピック期間中の気温が札幌では東京に比べて５度から６度低いことをあげています。また、今月30日から東京で行われる大会組織委員会と準備状況などを確認する調整委員会で、東京都や国際陸上競技連盟などと具体的な話し合いをすることを明らかにしました。\n\n    マラソンと競歩は、今月まで中東カタールのドーハで開かれた世界選手権で、気温が40度を超える日中を避けスタートを午後11時半すぎに設定して行われましたが、女子マラソンでは68人のうち完走したのは40人で、４割を超える選手が途中棄権となるなど、猛暑の中で競技が行われることに選手や関係者から不安の声が上がっていました。\n\n   ＩＯＣ＝国際オリンピック委員会のトーマス・バッハ会長は「会場を札幌に移すという今回の大幅な変更の提案は、われわれが暑さに関して深刻な懸念を示していることを表している。オリンピックは、選手たちの一生に一度のパフォーマンスを出す舞台であり、今回の提案は、選手が最高の結果を出せることを可能にする。実行されることを楽しみにしている」とコメントしています。'},
  {title:'台風１９号、死者７０人超に　インフラ寸断、影響長期化',time:'2019/10/15',id:'taihuu',content:'   この台風によって東北や関東など広い範囲で浸水したが、各地で水が引き始め、確認される犠牲者の人数が増えている。１５日は新たに福島県いわき市が、救助中の死者も含めて７人が死亡したと発表。１５日夜までの朝日新聞の集計によると、福島県内の死者数は計２７人に上った。宮城県と神奈川県でそれぞれ１４人が死亡したほか、栃木県や群馬県、長野県、埼玉県など各地で死者が確認されている。東京都日野市でも、水が引いた多摩川の河川敷で男性の遺体が見つかった。ほかにも、福島県で４人、神奈川県と長野県で各３人など、計６県で行方不明者がいる。生存率が著しく下がるとされる「発生から７２時間」が１６日にかけて迫るなか、相模原市の土砂崩れ現場など、自衛隊も加わっての捜索活動が進んでいる。\n\n    家屋被害については、千曲（ちくま）川の堤防が決壊した長野県で少なくとも２２３７棟、阿武隈川の堤防が決壊した福島県で７５３棟が床上浸水した。東日本全体では、床上浸水が１万２９８棟、床下浸水が１万１５５４棟に上った。福島や長野、宮城など、１３都県で計４７７５人がなお避難を続けている。\n\n    河川の堤防も、新たに高倉川（宮城県）や藤田川（福島県）などで決壊が確認された。国管理の２４河川、都道府県管理の２０７河川で水が堤防を越えて浸水したほか、土石流やがけ崩れなどの土砂災害も埼玉や静岡など１９都県の１７０カ所に上っている。\n\n    水道や電気などライフラインにも深刻な影響が出ている。\n\n    厚生労働省によると１５日午後２時現在、１２都県で少なくとも計約１２万８千戸で断水が続いている。広域の冠水や浄水場・ポンプ場の水没などにより、福島県いわき市で約４万５千戸、茨城県常陸大宮市で約１万３千戸が断水している。\n\n    停電も各地で続いており、経済産業省によると１５日午後２時現在、関東甲信と東北の１０都県の計約３万３千戸で停電。千葉県で約１万６千戸、長野県で約１万１千戸が停電している。\n\n    中央道などの高速道路や、北陸新幹線やＪＲ中央線といった鉄道も一部区間で寸断されており、それぞれ復旧作業が進められている。'},
  {title:'ラグビーW杯スコットランド戦　日本勝利の瞬間に最高53.7%',time:'2019/10/15',id:'rugby',content:'    日本テレビが13日に生中継したラグビーW杯「日本―スコットランド」（日本テレビ、後7・30～9・54）の平均視聴率は39.2％（関東地区、ビデオリサーチ調べ）だったことが15日、分かった\n\n   今年放送された全番組を通して、5日に生中継されたラグビーW杯「日本―サモア」（日本テレビ、後7・15～9・34）の32・8％を超えて1位となった。ジャパンの躍進とともに、注目度も上昇している<br><br>&emsp;瞬間最高視聴率は、午後9時41分の53.7％で、日本がスコットランドの猛攻に耐え抜き、ラックから出たボールを山中が蹴り出して史上初の決勝トーナメント進出を決めた場面だった。\n\n   関西地区でも平均視聴率が37・2％、瞬間最高視聴率は52・2％で関東地区と同様にノーサイドの瞬間だった。\n\n    9月20日に生中継された開幕戦「日本―ロシア」（後7・30～9・54）の平均視聴率は、関東地区で18・3％、瞬間最高視聴率は25・5％をマーク。また、同28日にNHK総合で生中継された「日本―アイルランド」の平均視聴率は、関東地区で前半（後4・05～5・08）が15・3％、後半（後5・10～6・31）が22・5％で、瞬間最高視聴率は28・9％を記録した。\n\n    試合は、日本がスコットランドを28―21で破り、1次リーグA組4戦全勝、総勝ち点19として同組1位で準々決勝進出を決めた。1987年に第1回が始まったW杯で、9大会連続出場中の日本の8強入りは史上初の快挙となった。ジェイミー・ジョセフ・ヘッドコーチ（49）、リーチ・マイケル主将（31＝東芝）を中心とした「ONE　TEAM」が、日本のラグビー界に金字塔を打ち立てた。日本は20日の準々決勝で、B組2位の南アフリカと対戦する。'},
  {title:'1',time:'2',id:'3',content:'4'},
  {title:'5',time:'6',id:'7',content:'8'},
  {title:'9',time:'10',id:'11',content:'12'},
  {title:'13',time:'14',id:'15',content:'16'}
]
//最新の三つの記事のタイトルとIDをsidemenuに渡すため
let recentArticleTitles=[];

for (let i=0;i<3;i++){
  let title=articleList[i].title;
  recentArticleTitles.push(title);

}
let recentArticleIds=[];
for (let i=0;i<3;i++){
  let id=articleList[i].id;
  recentArticleIds.push(id);
}


class App extends Component {
  constructor(props){
    super(props);
    this.setSearchWord=this.setSearchWord.bind(this);
    this.setButtonClicked=this.setButtonClicked.bind(this);
    this.setButtonOff=this.setButtonOff.bind(this);
    this.state={searchWord:'',buttonClicked:"off"}

  }
  setSearchWord(searchWord){
    this.setState({searchWord:searchWord,buttonClicked:"off"});

  }
  setButtonClicked(){
    this.setState({buttonClicked:"on"})
  }
  setButtonOff(){
    this.setState({buttonClicked:"off"})
  }

  render() {

    return (
      <div>
        <Header/>
        <div className="wrapper clearfix">
          <Main searchWord={this.state.searchWord}
                buttonClicked={this.state.buttonClicked}
                articleList={articleList}
          />
          <Sidemenu handleSearchWord={this.setSearchWord}
                    clickSearch={this.setButtonClicked}
                    setButtonOff={this.setButtonOff}
                    recentArticleTitles={recentArticleTitles}
                    recentArticleIds={recentArticleIds}/>

        </div>
        <Footer />
      </div>
    )
  }
}

export default App
