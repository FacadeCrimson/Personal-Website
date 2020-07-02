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
  render(){
    const color = this.props.color
    return  <div className="container" id="c1" style={{backgroundColor:color}}>
        <div className="title">{this.props.title}</div>
        <div className="description">{this.props.desc}</div>
        {this.props.img? <div className="graph"><img src={this.props.img} alt="sample"></img></div> : null}
  </div>
  }
}

const image3 = require("./about-img3.jpeg");
const image4 = require("./about-img4.jpeg");
const image5 = require("./about-img5.jpeg");
const container1 = <Container title="Good for you" desc="I was born in China and lived my high school years in Beijing. I pursued my Bachelor's degree of Economics and Finance in Hong Kong University of Science and Technology." img={image3} color="#f6eeea"/>;
const container2 = <Container title="how are you" desc="In 2019, I arrived in Washington, D.C. to carry out my Master degree in Business Analytics at George Washington University." img={image4} color="#f6eeea"/>;
const container3 = <Container title="Hello !" img={image5} color="#f6eeea"/>;
const container4 = <Container title="Japanese" desc="I love Japanese culture very much and even passed Japanese JLPT N1 test. I am intrigued by design, traveling, films, writing, art, armchair philosophy, fabulous food, and even better conversations.
Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me." color="#eeeaf6" />;


class Main1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      position:0,
    };
  }

  add=(e)=>
  {
    const el=document.getElementById("m1")
    this.pos = this.state.position
    this.left = el.style.left? parseInt(el.style.left, 10):0
    this.offsetX=e.clientX-this.left
    el.addEventListener('mousemove',this.move)
  }

  tadd=(e)=>
  {
    const el=document.getElementById("m1")
    this.pos = this.state.position
    this.left = el.style.left? parseInt(el.style.left, 10):0
    this.offsetX=e.targetTouches[0].clientX-this.left
    el.addEventListener('touchmove',this.tmove)
  }

  move=(e)=>
  {
    const el=document.getElementById("m1");
    el.style.left = `${e.pageX-this.offsetX}px`
  }

  tmove=(e)=>
  {
    const el=document.getElementById("m1");
    el.style.left = `${e.targetTouches[0].pageX-this.offsetX}px`
  }

  remove=()=>{
    const el=document.getElementById("m1");
    el.removeEventListener('mousemove',this.move)
    this.setState({position:this.pos+this.left})
  }

  tremove=()=>{
    const el=document.getElementById("m1");
    el.removeEventListener('touchmove',this.move)
    this.setState({position:this.pos+this.left})
  }
  
  handleLClick(){
    const position = this.state.position
    if(position>=0){
      return;
    }
    var newpos = 'translateX('+(position+200).toString()+'px)'
    var target = document.getElementById("m1");
    target.style.transform = newpos;
    this.setState({position:position+200});
  }

  handleRClick(){
    const content = document.getElementById("m1")
    const length = content.offsetWidth;
    const position = this.state.position;
    if(position<(-length+500)){
      return;
    }
    var newpos = 'translateX('+(position-200).toString()+'px)'
    var target = document.getElementById("m1");
    target.style.transform = newpos;
    this.setState({position:position-200});
  }

  render(){
    return <div id = "main1" onMouseEnter={()=>this.props.onMouseEnter()} onMouseLeave={()=>this.props.onMouseLeave()} style={this.props.style1}>
      <div id="leftarrow" style={this.props.styleText}  onClick={()=>this.handleLClick()}>&#8678;</div>
      <div id="rightarrow" style={this.props.styleText} onClick={()=>this.handleRClick()}>&#8680;</div>
      <div className="header"><span className = "mainlabel" >About me</span><span className = "hint" style={this.props.styleText} onClick={()=>this.props.onClick(1)}>&#10534;</span></div>
      <span className="hint2" style={this.props.styleText}>⤹ You could scroll this by mouse, trackpad or touch! ⤵</span>
      <div className = "maincontent" id="m1" style={this.props.styleText} onMouseDown={(e)=>this.add(e)} onMouseUp={(e)=>this.remove(e)} onTouchStart={(e)=>this.tadd(e)} onTouchEnd={(e)=>this.tremove(e)}>
          {container1}
          {container2}
          {container3}
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

  add=(e)=>
  {
    const el=document.getElementById("m2")
    this.pos = this.state.position
    this.left = el.style.left? parseInt(el.style.left, 10):0
    this.offsetX=e.clientX-this.left
    el.addEventListener('mousemove',this.move)
  }

  tadd=(e)=>
  {
    const el=document.getElementById("m2")
    this.pos = this.state.position
    this.left = el.style.left? parseInt(el.style.left, 10):0
    this.offsetX=e.targetTouches[0].clientX-this.left
    el.addEventListener('touchmove',this.tmove)
  }

  move=(e)=>
  {
    const el=document.getElementById("m2");
    el.style.left = `${e.pageX-this.offsetX}px`
  }

  tmove=(e)=>
  {
    const el=document.getElementById("m2");
    el.style.left = `${e.targetTouches[0].pageX-this.offsetX}px`
  }

  remove=()=>{
    const el=document.getElementById("m2");
    el.removeEventListener('mousemove',this.move)
    this.setState({position:this.pos+this.left})
  }


  tremove=()=>{
    const el=document.getElementById("m2");
    el.removeEventListener('touchmove',this.move)
    this.setState({position:this.pos+this.left})
  }

  handleLClick(){
    const position = this.state.position
    if(position>=0){
      return;
    }
    var newpos = 'translateX('+(position+200).toString()+'px)'
    var target = document.getElementById("m2");
    target.style.transform = newpos;
    this.setState({position:position+200});
  }

  handleRClick(){
    const content = document.getElementById("m2")
    const length = content.offsetWidth;
    const position = this.state.position;
    if(position<(-length+500)){
      return;
    }
    var newpos = 'translateX('+(position-200).toString()+'px)'
    var target = document.getElementById("m2");
    target.style.transform = newpos;
    this.setState({position:position-200});
  }

  render(){
    return <div id = "main2" onMouseEnter={()=>this.props.onMouseEnter()} onMouseLeave={()=>this.props.onMouseLeave()} style={this.props.style2}>
      <div id="leftarrow" style={this.props.styleText}  onClick={()=>this.handleLClick()}>&#8678;</div>
      <div id="rightarrow" style={this.props.styleText} onClick={()=>this.handleRClick()}>&#8680;</div>
      <div className="header">
        <span className = "mainlabel" >Experience</span>
        <span className = "hint" style={this.props.styleText} onClick={()=>this.props.onClick(1)}>&#10534;</span>
      </div>
      <span className="hint2" style={this.props.styleText}>⤹ You could scroll this by mouse, trackpad or touch! ⤵</span>
      <div className = "maincontent" id="m2" style={this.props.styleText} onMouseDown={(e)=>this.add(e)} onMouseUp={(e)=>this.remove(e)} onTouchStart={(e)=>this.tadd(e)} onTouchEnd={(e)=>this.tremove(e)}>
          {container1}
          {container2}
          {container3}
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
      <span className="hint2" style={this.props.styleText}>⤹ You could scroll this by mouse, trackpad or touch! ⤵</span>
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
          <Skillitem name="Python" star="5"></Skillitem>
          <Skillitem name="HTML" star="5"></Skillitem>
          <Skillitem name="CSS" star="5"></Skillitem>
          <Skillitem name="React" star="5"></Skillitem>
          <Skillitem name="R" star="5"></Skillitem>
          <Skillitem name="MVC pattern" star="5"></Skillitem>
          <Skillitem name="RESTful API" star="5"></Skillitem>
          <Skillitem name="Bootstrap" star="5"></Skillitem>
        </ul>
        </div>
      <div className = "skills">
        <ul>
        <Skillitem name="MYSQL" star="5"></Skillitem>
        <Skillitem name="Database" star="4"></Skillitem>
        <Skillitem name="Statistics" star="4"></Skillitem>
        <Skillitem name="Machine Learning" star="4"></Skillitem>
        <Skillitem name="Deep Learning" star="2"></Skillitem>
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

  add=(e)=>
  {
    const el=document.getElementById("m4")
    this.pos = this.state.position
    this.left = el.style.left? parseInt(el.style.left, 10):0
    this.offsetX=e.clientX-this.left
    el.addEventListener('mousemove',this.move)
  }

  tadd=(e)=>
  {
    const el=document.getElementById("m4")
    this.pos = this.state.position
    this.left = el.style.left? parseInt(el.style.left, 10):0
    this.offsetX=e.targetTouches[0].clientX-this.left
    el.addEventListener('touchmove',this.tmove)
  }

  move=(e)=>
  {
    const el=document.getElementById("m4");
    el.style.left = `${e.pageX-this.offsetX}px`
  }

  tmove=(e)=>
  {
    const el=document.getElementById("m4");
    el.style.left = `${e.targetTouches[0].pageX-this.offsetX}px`
  }

  remove=()=>{
    const el=document.getElementById("m4");
    el.removeEventListener('mousemove',this.move)
    this.setState({position:this.pos+this.left})
  }


  tremove=()=>{
    const el=document.getElementById("m4");
    el.removeEventListener('touchmove',this.move)
    this.setState({position:this.pos+this.left})
  }

  handleLClick(){
    const position = this.state.position
    if(position>=0){
      return;
    }
    var newpos = 'translateX('+(position+200).toString()+'px)'
    var target = document.getElementById("m4");
    target.style.transform = newpos;
    this.setState({position:position+200});
  }

  handleRClick(){
    const content = document.getElementById("m4")
    const length = content.offsetWidth;
    const position = this.state.position;
    if(position<(-length+500)){
      return;
    }
    var newpos = 'translateX('+(position-200).toString()+'px)'
    var target = document.getElementById("m4");
    target.style.transform = newpos;
    this.setState({position:position-200});
  }

  render(){
    return <div id = "main4" onMouseEnter={()=>this.props.onMouseEnter()} onMouseLeave={()=>this.props.onMouseLeave()} style={this.props.style4}>
      <div id="leftarrow" style={this.props.styleText}  onClick={()=>this.handleLClick()}>&#8678;</div>
      <div id="rightarrow" style={this.props.styleText} onClick={()=>this.handleRClick()}>&#8680;</div>
      <div className="header">
        <span className = "mainlabel" >Hobby</span>
        <span className = "hint" style={this.props.styleText} onClick={()=>this.props.onClick(1)}>&#10534;</span>
      </div>
      <span className="hint2" style={this.props.styleText}>⤹ You could scroll this by mouse, trackpad or touch! ⤵</span>
      <div className = "maincontent" id="m4" style={this.props.styleText} onMouseDown={(e)=>this.add(e)} onMouseUp={(e)=>this.remove(e)} onTouchStart={(e)=>this.tadd(e)} onTouchEnd={(e)=>this.tremove(e)}>
          {container4}
        </div> 
      </div>
  }
}

class Sidebar extends React.Component{
  render(){
    return <div className = "sidebar" style={this.props.style}>
      <div className = "menu">Menu</div>
      <div className = "item" onClick={()=>this.props.onClick(1)}>About</div>
      <div className = "item" onClick={()=>this.props.onClick(2)}>Experience</div>
      <div className = "item" onClick={()=>this.props.onClick(3)}>Skills</div>
      <div className = "item" onClick={()=>this.props.onClick(4)}>Hobby</div>
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
      <form className="form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSddmWyx1_aJvYSIxH7sIcquntxErMgQGCygpDT-k152qnHsWA/formResponse" method="post" onsubmit="submitted=!0" target="hidden_iframe">
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
      styleText:{},
    };
  }

  changeStyle = (i)=>{
    this.props.set(i);
    var trans = 'scale(1)';
    var style ="style"+i.toString()
    this.setState({[style]: {transform:trans,zIndex:5}, styleText:{opacity:1},current:i});
    for(var j=1;j<5;j++){
      if(j!==i){
        var otherStyle ="style"+j.toString()
        this.setState({[otherStyle]:{opacity:0}})
      }
    }
  }

  resetStyle =(i)=>{
    var trans = 'rotate(36.85deg) translate('+(i*60-60).toString()+'px,'+(i*80-80).toString()+'px)';
    var style ="style"+i.toString()
    this.setState({[style]: {transform:trans}, styleText:{},current:undefined});
    for(var j=1;j<5;j++){
      if(j!==i){
        var otherStyle ="style"+j.toString()
        this.setState({[otherStyle]:{opacity:1}})
      }
    }
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

  render(){
    if(this.props.current!==this.state.current){
      this.changeStyle(this.props.current);
    }
    return <div id = "mainbottom">
      <div id="instruction">⤺ Hover on the tabs to open it!</div>
      <Response></Response>
       <Main1 onMouseEnter={()=>this.handleMouseOver(1)} onMouseLeave={()=>this.handleMouseLeave(1)} onClick={(i)=>this.resetStyle(i)} style1={this.state.style1} styleText={this.state.current===1 ? this.state.styleText : {}}/>
      <Main2 onMouseEnter={()=>this.handleMouseOver(2)} onMouseLeave={()=>this.handleMouseLeave(2)} onClick={(i)=>this.resetStyle(i)} style2={this.state.style2} styleText={this.state.current===2 ? this.state.styleText : {}}/>
      <Main3 onMouseEnter={()=>this.handleMouseOver(3)} onMouseLeave={()=>this.handleMouseLeave(3)} onClick={(i)=>this.resetStyle(i)} style3={this.state.style3} styleText={this.state.current===3 ? this.state.styleText : {}}/>
      <Main4 onMouseEnter={()=>this.handleMouseOver(4)} onMouseLeave={()=>this.handleMouseLeave(4)} onClick={(i)=>this.resetStyle(i)} style4={this.state.style4} styleText={this.state.current===4 ? this.state.styleText : {}}/>
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
