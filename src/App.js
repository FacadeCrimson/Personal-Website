import React from 'react';

class Navbar extends React.Component{
  render(){
    return <div className = "navbar">
    </div>
  }
}

class Main extends React.Component{
  render(){
    const image1 = require("./main-img1.jpeg")
    const image2 = require("./img2.jpg")

    return <div id= "main">
      <img src={image1} alt="El Captain" id="back"></img>
      <h1>Simon Tan</h1>
      <div id="menubutton" onClick={()=>this.props.onClick()}>&#9776;</div>
      <div id="myimage"><img src={image2} alt="me"></img></div>
      <div id="intro">
      
          <div>Hi, I'm Simon!</div>
          I am a developer and data scientist. I have been passionate about exploring new things. Currently, I am living in <a href="https://www.google.com/search?q=vienna+virginia" target="_blank" rel="noopener noreferrer">Vienna, Virginia</a>.
          </div>

      
      <Contact />
    </div>
  }
}

class Contact extends React.Component{
  render(){
    return <div className ="contact">
      <h3>Contact me</h3>
      <ul className="contactmethod">
        <li>Email: simontan@gwu.edu</li>
        <li>Phone: 571-224-8268</li>
        <li>Github: <a href="https://github.com/FacadeCrimson">github.com/FacadeCrimson</a></li>
      </ul>
    </div>
  }
}

class Container extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      style:{},
    };
  }
  handleEnter(){
    this.setState({style:{opacity:1}});
  }

  handleLeave(){
    this.setState({style:{opacity:0}});
  }

  render(){
    const color = this.props.color
    return  <div className="container" id="c1" style={{backgroundColor:color}}>
        {this.props.title? <div className="title">{this.props.title}</div> : null}
        <div className="description" style={this.props.author==="me"?{fontFamily:'Bad Script'}:null}>{this.props.desc}</div>
        {this.props.img? <div className="graph"><img src={this.props.img} alt="sample" onMouseEnter={()=>this.handleEnter()} onMouseLeave={()=>this.handleLeave()}></img></div> : null}
        {this.props.caption? <div className="caption" style={this.state.style}>{this.props.caption}</div> : null}
        {this.props.author? <div className="author" >—— {this.props.author}</div> : null}
  </div>
  }
}

// Contents for Main1, Main2, Main3, Main4 and Main5
// images
const image11 = require("./img11.jpg");
const image12 = require("./img12.jpg");
const image13 = require("./img13.jpeg");
const image14 = require("./img14.jpeg");
const image21 = require("./img21.jpeg");
const image22 = require("./img22.jpg");
const image23 = require("./img23.jpeg");
const image24 = require("./img24.jpeg");
const image25 = require("./img25.jpeg");
const image26 = require("./img26.jpeg");
const image41 = require("./img41.jpeg");
const image42 = require("./img42.jpeg");
const image43 = require("./img43.jpeg");
const image44 = require("./img44.jpg");

// texts
const container11 = <Container title="Early years" desc="I was born in a middle province in China. I spent some of my childhood with my grandparents. I still remember the good local cuisines and happy times playing with my cousins." img={image11} color="#f6eeea"/>;
const container12 = <Container title="Beijing" desc="I went to high school in Beijing. My peers there are more outgoing and excel at various areas. I learnt a lot from them." img={image12} color="#f6eeea"/>;
const container13 = <Container title="Hong Kong" desc="I pursued my Bachelor's degree of Economics and Finance in Hong Kong University of Science and Technology. The scenery there is amazing and those years really broaden my horizons." img={image13} color="#f6eeea"/>;
const container14 = <Container title="Washington D.C." desc="In 2019, I came to Washington, D.C. to carry out my Master degree in Business Analytics at George Washington University. I expect to graduate by the end of 2020." img={image14} color="#f6eeea"/>;
var content1 =[container11,container12,container13,container14]

const container26 = <Container title="Online Grocery Store"  desc="I construct the frontend with Next.js. For the backend, I adopt Node.js, Express and MongoDB. The website has essential functionality of search, filter, log in/out, comment, view history, cart and a portal for site statistics as well as listing and stock management." img={image26} caption="" color="#eeeaf6"/>;
const container21 = <Container title="Personal Website"  desc="This website is built using React and complementary HTML, CSS and Javascript. I find the logic handling and component reusing functions of React extremely helpful." img={image21} caption="" color="#eeeaf6"/>;
const container22 = <Container title="Full-Stack Capstone"  desc="I design and build all API endpoints and database structures for simulation of stock trading. I utilize Flask, PostgreSQL, authorization, deployment and testing knowledge to implement role-based actions." img={image22} caption="" color="#eeeaf6"/>;
const container23 = <Container title="Web API for Booking"  desc="Compose the normalised data models and model interactions with automated database migrations. Implement controllers that handle data and render view. " img={image23} caption="" color="#eeeaf6"/>;
const container24 = <Container title="Kaggle House Prices Dataset Analysis"  desc="Pre-process data with scaling, transformation, binning, categorical encoding, imputation and feature selection. Carefully tune the parameters of GBM and XGBoost. Determine the best model for house prices prediction." img={image24} caption="" color="#eeeaf6"/>;
const container25 = <Container title="Chicago Traffic Crash Dataset Modelling"  desc="We construct a dimensional database for the dataset in PostgreSQL. Then, we leverage SQL queries and Spark SQL to extract, transform and analyse information regarding predetermined questions." img={image25} caption="" color="#eeeaf6"/>;
var content2 = [container26,container21,container22,container23,container24,container25];

const container41 = <Container title="Japanese"  desc="I love Japanese pop culture. Be it music, anime, game, idol or just food, the contents they produce are eccentric and awe-inspiring. No wonder I even achieved JLPT N1 proficiency in Japanese." img={image41} caption="In Hakone where we saw Mount Fuji" color="#eeeaf6"/>;
const container42 = <Container title="Hiking"  desc="Hiking is my favourite outdoor activity. Surrounded by nature for half a day, it is both mind-clearing and fulling. National parks are wonders." img={image42} caption="Great Falls Park near D.C." color="#eeeaf6"/>;
const container43 = <Container title="Movies" desc="Watching movies is something I enjoy. I would usually check their rating before commiting my time and I am really tired of blockbusters, as they lack everything except graphics." img={image43} caption="Check A.V. Club for their best of the decade" color="#eeeaf6" />;
const container44 = <Container title="MTG" desc="I love playing Magic the Gathering. Every week I would play some drafts or cubes ever since university. I still think there are tons of tricks to master." img={image44} caption="Baneslayer Angel intrigues me most." color="#eeeaf6" />;
var content4 =[container41,container42,container43,container44]

const container51 = <Container desc="Success is liking yourself, liking what you do, and liking how you do it." author="Maya Angelou" color="#f6eeea" />
const container52 = <Container desc="Winning does not tempt that man. This is how he grows: by being defeated, decisively, by constantly greater beings." author="Rainer Maria Rilke" color="#f6eeea" />
const container53 = <Container desc="Every time I go jogging, I would set the end at a restaurant or supermarket that I would visit. Associating jogging with a goal reduces stress and increases willingness." author="me" color="#f6eeea" />
const container54 = <Container desc="Imitation of idols is a powerful process of shaping actions. I call this 'style learning' and people should use it consciously." author="me" color="#f6eeea" />
const container55 = <Container desc="We need to be extremely careful in choosing environments. When faced with such decisions, I would often examine friends who I am similar to and people I admire to imagine what will their choices be." author="me" color="#f6eeea" />
const container56 = <Container desc="God, grant me the serenity to accept the things I cannot change, courage to change the things I can, and wisdom to know the difference." author="Reinhold Niebuhr" color="#f6eeea" />

var content5 = [container51,container52,container53,container54,container55,container56]

function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// functions for Main1, Main2, Main3, Main4 and Main5
function add(e, main, id){
    const el=document.getElementById(id)
    main.pos = main.state.position
    main.left = el.style.left? parseInt(el.style.left, 10):0
    main.offsetX=e.clientX-main.left
    main.move = move.bind(null,main,id)
    el.addEventListener('mousemove', main.move)
}

function tadd(e, main, id){
  const el=document.getElementById(id)
  main.pos = main.state.position
  main.left = el.style.left? parseInt(el.style.left, 10):0
  main.offsetX=e.targetTouches[0].clientX-main.left
  main.tmove = tmove.bind(null,main,id)
  el.addEventListener('touchmove',main.tmove)
}

function move(main, id, e){
  const el=document.getElementById(id)
  el.style.left = `${e.pageX-main.offsetX}px`
}

function tmove(main, id, e){
  const el=document.getElementById(id)
  el.style.left = `${e.targetTouches[0].pageX-main.offsetX}px`
}

function remove(main, id){
  const el=document.getElementById(id)
  el.removeEventListener('mousemove', main.move)
  main.setState({position:main.pos+main.left})
}

function tremove(main, id){
  const el=document.getElementById(id)
  el.removeEventListener('touchmove',main.tmove)
  main.setState({position:main.pos+main.left})
}

function handleLClick(main, id){
  const position = main.state.position
  var newpos = 'translateX('+(position+200).toString()+'px)'
  var target = document.getElementById(id)
  target.style.transform = newpos
  main.setState({position:position+200})
}

function handleRClick(main, id){
  const position = main.state.position
  var newpos = 'translateX('+(position-200).toString()+'px)'
  const target = document.getElementById(id)
  target.style.transform = newpos
  main.setState({position:position-200})
}

// Main contents
class Main1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      position:0,
    };
  }

  render(){
    return <div id = "main1" onMouseEnter={()=>this.props.onMouseEnter()} onMouseLeave={()=>this.props.onMouseLeave()} style={this.props.style1}>
      <div id="leftarrow" style={this.props.styleText}  onClick={()=>handleLClick(this, "m1")}>&#8678;</div>
      <div id="rightarrow" style={this.props.styleText} onClick={()=>handleRClick(this, "m1")}>&#8680;</div>
      <div className="header">
        <span className = "mainlabel" >About me</span>
        <span className = "hint" style={this.props.styleText} onClick={()=>this.props.onClick(1)}>&#10534;</span>
      </div>
      <span className="hint2" style={this.props.styleText}>⤹ You could scroll this by mouse, trackpad or touch! ⤵</span>
      <div className = "maincontent" id="m1" style={this.props.styleText} onMouseDown={(e)=>add(e,this,"m1")} onMouseUp={()=>remove(this,"m1")} onTouchStart={(e)=>tadd(e,this,"m1")} onTouchEnd={()=>tremove(this,"m1")}>
          {content1}
        </div>    
      </div>
  }
}

class Main2 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      position:0,
    };
  }

  render(){
    return <div id = "main2" onMouseEnter={()=>this.props.onMouseEnter()} onMouseLeave={()=>this.props.onMouseLeave()} style={this.props.style2}>
      <div id="leftarrow" style={this.props.styleText}  onClick={()=>handleLClick(this, "m2")}>&#8678;</div>
      <div id="rightarrow" style={this.props.styleText} onClick={()=>handleRClick(this, "m2")}>&#8680;</div>
      <div className="header">
        <span className = "mainlabel" >Project</span>
        <span className = "hint" style={this.props.styleText} onClick={()=>this.props.onClick(2)}>&#10534;</span>
      </div>
      <span className="hint2" style={this.props.styleText}>⤹ You could scroll this by mouse, trackpad or touch! ⤵</span>
      <div className = "maincontent" id="m2" style={this.props.styleText} onMouseDown={(e)=>add(e,this,"m2")} onMouseUp={()=>remove(this,"m2")} onTouchStart={(e)=>tadd(e,this,"m2")} onTouchEnd={()=>tremove(this,"m2")}>
          {content2}
        </div> 
      </div>
  }
}

class Main3 extends React.Component{
  render(){
    return <div id = "main3" onMouseEnter={()=>this.props.onMouseEnter()} onMouseLeave={()=>this.props.onMouseLeave()} style={this.props.style3}>
      <div className="header">
        <span className = "mainlabel" >Skill</span>
        <span className = "hint" style={this.props.styleText} onClick={()=>this.props.onClick(1)}>&#10534;</span>
      </div>
      <Skills style={this.props.styleText}/>
      </div>
  }
}

class Skillitem extends React.Component{
  render(){
    const star=parseInt(this.props.star);
    var stars="";
    var notstars="";
    for(let i=0;i<star;i++){
      stars=stars+"★"
    }
    for(let i=0;i<5-star;i++){
      notstars=notstars+"★"
    }
  return <li>{this.props.name}<span className="stars">{stars}</span><span className="notstars">{notstars}</span></li>
  }
}

class Skills extends React.Component{
  render(){
    return<div>
      <div className="skillcontent" style={this.props.style}>
      <div className = "skills">
        <ul>
          <Skillitem name="JavaScript" star="5"></Skillitem>
          <Skillitem name="HTML" star="5"></Skillitem>
          <Skillitem name="CSS" star="5"></Skillitem>
          <Skillitem name="React (Next.js)" star="4"></Skillitem>
          <Skillitem name="Node.js" star="4"></Skillitem>
          <Skillitem name="Express" star="4"></Skillitem>
          <Skillitem name="Flask" star="4"></Skillitem>
          <Skillitem name="MVC Pattern" star="4"></Skillitem>
          <Skillitem name="RESTful API" star="4"></Skillitem>
          <Skillitem name="Unix shell" star="3"></Skillitem>
          <Skillitem name="Git" star="4"></Skillitem>
          <Skillitem name="AWS" star="2"></Skillitem>
        </ul>
        </div>
      <div className = "skills">
        <ul>
        <Skillitem name="Python" star="5"></Skillitem>
        <Skillitem name="R" star="5"></Skillitem>
        <Skillitem name="MySQL" star="5"></Skillitem>
        <Skillitem name="PostgreSQL" star="5"></Skillitem>
        <Skillitem name="MongoDB" star="4"></Skillitem>
        <Skillitem name="Statistics" star="4"></Skillitem>
        <Skillitem name="Excel" star="4"></Skillitem>
        <Skillitem name="Tableau" star="3"></Skillitem>
        <Skillitem name="Machine Learning" star="4"></Skillitem>
        <Skillitem name="Deep Learning" star="2"></Skillitem>
        <Skillitem name="Time Series" star="4"></Skillitem>
        <Skillitem name="Digital Analytics" star="3"></Skillitem>
        </ul>
      </div>
      </div>
    </div>
  }
}

class Main4 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      position:0,
    };
  }

  render(){
    return <div id = "main4" onMouseEnter={()=>this.props.onMouseEnter()} onMouseLeave={()=>this.props.onMouseLeave()} style={this.props.style4}>
      <div id="leftarrow" style={this.props.styleText}  onClick={()=>handleLClick(this, "m4")}>&#8678;</div>
      <div id="rightarrow" style={this.props.styleText} onClick={()=>handleRClick(this, "m4")}>&#8680;</div>
      <div className="header">
        <span className = "mainlabel" >Hobby</span>
        <span className = "hint" style={this.props.styleText} onClick={()=>this.props.onClick(4)}>&#10534;</span>
      </div>
      <span className="hint2" style={this.props.styleText}>⤹ You could scroll this by mouse, trackpad or touch! ⤵</span>
      <div className = "maincontent" id="m4" style={this.props.styleText} onMouseDown={(e)=>add(e,this,"m4")} onMouseUp={()=>remove(this,"m4")} onTouchStart={(e)=>tadd(e,this,"m4")} onTouchEnd={()=>tremove(this,"m4")}>
          {content4}
        </div> 
      </div>
  }
}

class Main5 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      position:0,
    };
  }
  content5 = shuffle(content5)
  render(){
    return <div id = "main5" onMouseEnter={()=>this.props.onMouseEnter()} onMouseLeave={()=>this.props.onMouseLeave()} style={this.props.style5}>
      <div id="leftarrow" style={this.props.styleText}  onClick={()=>handleLClick(this, "m5")}>&#8678;</div>
      <div id="rightarrow" style={this.props.styleText} onClick={()=>handleRClick(this, "m5")}>&#8680;</div>
      <div className="header">
        <span className = "mainlabel" >Musing</span>
        <span className = "hint" style={this.props.styleText} onClick={()=>this.props.onClick(5)}>&#10534;</span>
      </div>
      <span className="hint2" style={this.props.styleText}>⤹ You could scroll this by mouse, trackpad or touch! ⤵</span>
      <div className = "maincontent" id="m5" style={this.props.styleText} onMouseDown={(e)=>add(e,this,"m5")} onMouseUp={()=>remove(this,"m5")} onTouchStart={(e)=>tadd(e,this,"m5")} onTouchEnd={()=>tremove(this,"m5")}>
          {content5}
        </div> 
      </div>
  }
}


class Sidebar extends React.Component{
  render(){
    return <div className = "sidebar" style={this.props.style}>
      <div className = "menu">Menu</div>
      <div className = "item" onClick={()=>this.props.onClick(1)}>About</div>
      <div className = "item" onClick={()=>this.props.onClick(2)}>Project</div>
      <div className = "item" onClick={()=>this.props.onClick(3)}>Skill</div>
      <div className = "item" onClick={()=>this.props.onClick(4)}>Hobby</div>
      <div className = "item" onClick={()=>this.props.onClick(5)}>Musing</div>
      <div id = "closebutton" onClick={()=>this.props.close()}>&times;</div>
    </div>
  }
}

class First extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      menu:false,
    };
  }

  openSidebar(){
    this.setState({menu:true,})
    this.menuDisplay={zIndex:6,}
  }

  closeSidebar(){
    this.setState({menu:false,})
    this.menuDisplay={zIndex:0,}
  }

  render(){
    return <div className = "first">
      <Navbar />
      <Main onClick={()=>this.openSidebar()}/>
      <Sidebar onClick={(i)=>{window.scroll({top: 1200,left: 0,behavior: 'smooth'} );this.props.onClick(i)}} style={this.menuDisplay} close={()=>this.closeSidebar()}/>
    </div>
  }
}

class Response extends React.Component{
  render(){
    return <div id="response">
      <form className="form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSddmWyx1_aJvYSIxH7sIcquntxErMgQGCygpDT-k152qnHsWA/formResponse" method="post" target="hidden_iframe">
        <label>Title</label>
          <input name="entry.2093844086" type="text" pattern=".{3,}"  required title="3 characters minimum"/>

          <label>Feedback</label>
          <textarea name="entry.315161779" cols="17" rows="5" required ></textarea>

          <label>Email (Optional)</label>
          <input name="entry.1086420941" type="email" />

          <input type="submit" value="Send" />

      </form>
      </div>
}
}

class MainBottom extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      current:undefined,
      style1:{},
      style2:{},
      style3:{},
      style4:{},
      style5:{},
      styleText:{},
    };
  }

  changeStyle = (i)=>{
    this.props.set(i);
    var trans = 'scale(1)';
    var style ="style"+i.toString()
    this.setState({[style]: {transform:trans,zIndex:6}, styleText:{opacity:1},current:i});
    for(var j=1;j<6;j++){
      if(j!==i){
        var otherStyle ="style"+j.toString()
        this.setState({[otherStyle]:{opacity:0}})
      }
    }
    var button =document.getElementById("showform");
    button.style.zIndex=0;
  }

  resetStyle =(i)=>{
    var trans = 'rotate(36.85deg) translate('+(i*60-60).toString()+'px,'+(i*80-80).toString()+'px)';
    var style ="style"+i.toString()
    this.setState({[style]: {transform:trans}, styleText:{},current:undefined});
    for(var j=1;j<6;j++){
      if(j!==i){
        var otherStyle ="style"+j.toString()
        this.setState({[otherStyle]:{opacity:1}})
      }
    }
    var button =document.getElementById("showform");
    button.style.zIndex=6;
    this.props.reset();
  }
  
  handleMouseOver(i){
    this.timeID = setTimeout(this.changeStyle, 800,i);
  }

  handleMouseLeave(i){
    clearTimeout(this.timeID);
    if(this.state.current){
      this.resetStyle(i);
    }
  }

  showForm(){
    var form =document.getElementById("response");
    form.style.display="block";
    var button = document.getElementById("showform")
    button.innerHTML = "&nbsp;&times"
    button.addEventListener('click', this.closeForm,false)
  }

  closeForm = (e)=>{
    e.stopPropagation();
    var form =document.getElementById("response");
    form.style.display="none";
    var button = document.getElementById("showform")
    button.innerHTML = "&nbsp;✎"
    button.removeEventListener('click', this.closeForm,false)
  }

  render(){
    if(this.props.current!==this.state.current){
      this.changeStyle(this.props.current);
    }
    return <div id = "mainbottom">
      <div id="instruction">⤺ Hover on the tabs to open it!</div>
      <div id="showform" onClick={()=>this.showForm()}>&nbsp;✎</div>
      <Response></Response>
        <Main1 onMouseEnter={()=>this.handleMouseOver(1)} onMouseLeave={()=>this.handleMouseLeave(1)} onClick={(i)=>this.resetStyle(i)} style1={this.state.style1} styleText={this.state.current===1 ? this.state.styleText : {}}/>
        <Main2 onMouseEnter={()=>this.handleMouseOver(2)} onMouseLeave={()=>this.handleMouseLeave(2)} onClick={(i)=>this.resetStyle(i)} style2={this.state.style2} styleText={this.state.current===2 ? this.state.styleText : {}}/>
        <Main3 onMouseEnter={()=>this.handleMouseOver(3)} onMouseLeave={()=>this.handleMouseLeave(3)} onClick={(i)=>this.resetStyle(i)} style3={this.state.style3} styleText={this.state.current===3 ? this.state.styleText : {}}/>
        <Main4 onMouseEnter={()=>this.handleMouseOver(4)} onMouseLeave={()=>this.handleMouseLeave(4)} onClick={(i)=>this.resetStyle(i)} style4={this.state.style4} styleText={this.state.current===4 ? this.state.styleText : {}}/>
        <Main5 onMouseEnter={()=>this.handleMouseOver(5)} onMouseLeave={()=>this.handleMouseLeave(5)} onClick={(i)=>this.resetStyle(i)} style5={this.state.style5} styleText={this.state.current===5 ? this.state.styleText : {}}/>
    </div>
  }
}

class Second extends React.Component{

  render(){
  return <div className = "second">
    <Navbar />
    <MainBottom current={this.props.current} reset={()=>this.props.reset()} set={(i)=>this.props.set(i)}/>
  </div>
  }
}

class Foot extends React.Component{
  render(){
    return <div className = "foot">
      <div className="ending">
        <hr></hr>
        <div className="endingtext">© 2020 Simon Tan</div>
      </div>
    </div>
    }
}

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      current:undefined,
    };
  }

  current = (i)=>{
    this.setState({current:i,})
  }

  reset = ()=>{
    this.setState({current:undefined,})
  }

  render(){
  return (
    <div>
    <First onClick={(i)=>this.current(i)}/>
    <Second current={this.state.current} reset={()=>this.reset()} set={(i)=>this.current(i)} />
    <Foot />
    </div>
  )
}
} 

export default App;
