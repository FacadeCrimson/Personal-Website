import React from 'react';

class Navbar extends React.Component{
  render(){
    return <div className = "navbar">
    </div>
  }
}


class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      style:{zIndex:5},
      arrow:{},
      img:1,
    };
  }

  mouseover=()=>this.setState({arrow:{opacity:0.2}});
  
  mouseleave=()=>this.setState({arrow:{}});

  click=(i)=>{
    var newImg = undefined;
    switch(i){
    case 4:
      newImg = 1;break;
    default:
      newImg = i+1;break;
  }
    this.setState({img:newImg})
  }

  render(){
    const image = require("./main-img"+this.state.img.toString()+".jpeg")

    return <div id= "main" style={this.props.view ?this.state.style:{}}>
      <h1>Simon Tan's Personal Website</h1>
      <div id="leftarrow" style={this.props.view ?this.state.arrow:{zIndex:-2}} onMouseOver={()=>this.mouseover()} onMouseLeave={()=>this.mouseleave()} onClick={()=>this.click(this.state.img)}>&#8678;</div>
      <div id="rightarrow" style={this.props.view ?this.state.arrow:{zIndex:-2}} onMouseOver={()=>this.mouseover()} onMouseLeave={()=>this.mouseleave()} onClick={()=>this.click(this.state.img)}>&#8680;</div>
      <div id="menubutton" onClick={()=>this.props.onClick()}>&#9776;</div>
      <div id="intro">I am a developer and datascientist. I have been passionate about exploring new things. Currently, I am living in <a href="https://www.google.com/search?q=vienna+virginia" target="_blank">Vienna, Virginia</a>.
      and I am pursuing my Master degree in Business Analytics at <a href="https://www.gwu.edu/" target="_blank">George Washington University</a>. </div>
      <img src={image}></img>
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

class Main1 extends React.Component{
  render(){
    return <div id = "main1" onMouseOver={()=>this.props.onMouseOver()} onMouseLeave={()=>this.props.onMouseLeave()} style={this.props.style1}>
      <span className = "mainlabel" >About me</span>
      <span className = "hint" style={this.props.styleText} onClick={()=>this.props.onClick(1)}>&#10534;</span>
      <span className = "maincontent" style={this.props.styleText}>"How are you?"</span>
      </div>
  }
}

class Main2 extends React.Component{
  render(){
    return <div id = "main2" onMouseOver={()=>this.props.onMouseOver()} onMouseLeave={()=>this.props.onMouseLeave()} style={this.props.style2}>
      <span className = "mainlabel" >Experience</span>
      <span className = "hint" style={this.props.styleText} onClick={()=>this.props.onClick(2)}>&#10534;</span>
      <span className = "maincontent" style={this.props.styleText}>"How are you?"</span>
      </div>
  }
}

class Main3 extends React.Component{
  render(){
    return <div id = "main3" onMouseOver={()=>this.props.onMouseOver()} onMouseLeave={()=>this.props.onMouseLeave()} style={this.props.style3}>
      <span className = "mainlabel" >Skills</span>
      <span className = "hint" style={this.props.styleText} onClick={()=>this.props.onClick(3)}>&#10534;</span>
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
      <div class="maincontent" style={this.props.style}>
      <div className = "skills">
        <ul>
          <Skillitem name="Python" star="5"></Skillitem>
          <Skillitem name="HTML" star="5"></Skillitem>
          <Skillitem name="CSS" star="5"></Skillitem>
          <Skillitem name="React" star="5"></Skillitem>
          <Skillitem name="R" star="5"></Skillitem>
          <Skillitem name="Python" star="5"></Skillitem>
          <Skillitem name="Python" star="5"></Skillitem>
          <Skillitem name="Python" star="5"></Skillitem>
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
  render(){
    return <div id = "main4" onMouseOver={()=>this.props.onMouseOver()} onMouseLeave={()=>this.props.onMouseLeave()} style={this.props.style4}>
      <span className = "mainlabel" >Hobby</span>
      <span className = "hint" style={this.props.styleText} onClick={()=>this.props.onClick(4)}>&#10534;</span>
      <span className = "maincontent" style={this.props.styleText}>"How are you?"</span>
      </div>
  }
}

class Sidebar extends React.Component{
  render(){
    if(this.props.view){
      return(
        <div className = "sidebar" style={this.props.style}>
      <div className = "menu">Menu</div>
      <div className = "item" onClick={()=>this.props.return()}>Return</div>
      </div>
      )
    }
    return <div className = "sidebar" style={this.props.style}>
      <div className = "menu">Menu</div>
      <div className = "item" onClick={()=>this.props.onClick(1)}>About</div>
      <div className = "item" onClick={()=>this.props.onClick(2)}>Experience</div>
      <div className = "item" onClick={()=>this.props.onClick(3)}>Skills</div>
      <div className = "item" onClick={()=>this.props.onClick(4)}>Hobby</div>
      <div className = "item" onClick={()=>this.props.show()}>Pictures</div>
      <div id = "closebutton" onClick={()=>this.props.close()}>&times;</div>
    </div>
  }
}

class First extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      view:false,
      menu:false,
    };
  }

  changeStyle = (i)=>{
    var trans = 'scale(1)';
    var style ="style"+i.toString()
    this.setState({[style]: {transform:trans}, styleText:{opacity:1},current:i});
    for(var j=1;j<5;j++){
      if(j!==i){
        var otherStyle ="style"+j.toString()
        this.setState({[otherStyle]:{opacity:0}})
      }
    }
  }

  resetStyle =(i)=>{
    var trans = 'scale(1.25) rotate(36.85deg) translate('+(i*3-3).toString()+'vw,'+(i*4-4).toString()+'vw)';
    var style ="style"+i.toString()
    this.setState({[style]: {transform:trans}, styleText:{},current:undefined});
    for(var j=1;j<5;j++){
      if(j!==i){
        var otherStyle ="style"+j.toString()
        this.setState({[otherStyle]:{opacity:1}})
      }
    }
  }

  show(){
    this.setState({view:true,style1:{opacity:0},
      style2:{opacity:0},
      style3:{opacity:0},
      style4:{opacity:0}})
  }

  return(){
    this.setState({view:false,style1:{opacity:1},
      style2:{opacity:1},
      style3:{opacity:1},
      style4:{opacity:1}})
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
      <Main view={this.state.view} onClick={()=>this.openSidebar()}/>
      <Sidebar onClick={(i)=>{window.scroll({top: 0,left: 0,behavior: 'smooth'} );this.changeStyle(i)}} show={()=>{window.scroll({top: 0,left: 0,behavior: 'smooth'} );this.show()}} view={this.state.view} return={()=>this.return()} style={this.menuDisplay} close={()=>this.closeSidebar()}/>
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
    var trans = 'scale(1)';
    var style ="style"+i.toString()
    this.setState({[style]: {transform:trans}, styleText:{opacity:1},current:i});
    for(var j=1;j<5;j++){
      if(j!==i){
        var otherStyle ="style"+j.toString()
        this.setState({[otherStyle]:{opacity:0}})
      }
    }
  }

  resetStyle =(i)=>{
    var trans = 'scale(1.25) rotate(36.85deg) translate('+(i*3-3).toString()+'vw,'+(i*4-4).toString()+'vw)';
    var style ="style"+i.toString()
    this.setState({[style]: {transform:trans}, styleText:{},current:undefined});
    for(var j=1;j<5;j++){
      if(j!==i){
        var otherStyle ="style"+j.toString()
        this.setState({[otherStyle]:{opacity:1}})
      }
    }
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
    return <div id = "mainbottom">
       <Main1 onMouseOver={()=>this.handleMouseOver(1)} onMouseLeave={()=>this.handleMouseLeave(1)} onClick={(i)=>this.resetStyle(i)} style1={this.state.style1} styleText={this.state.current===1 ? this.state.styleText : {}}/>
      <Main2 onMouseOver={()=>this.handleMouseOver(2)} onMouseLeave={()=>this.handleMouseLeave(2)} onClick={(i)=>this.resetStyle(i)} style2={this.state.style2} styleText={this.state.current===2 ? this.state.styleText : {}}/>
      <Main3 onMouseOver={()=>this.handleMouseOver(3)} onMouseLeave={()=>this.handleMouseLeave(3)} onClick={(i)=>this.resetStyle(i)} style3={this.state.style3} styleText={this.state.current===3 ? this.state.styleText : {}}/>
      <Main4 onMouseOver={()=>this.handleMouseOver(4)} onMouseLeave={()=>this.handleMouseLeave(4)} onClick={(i)=>this.resetStyle(i)} style4={this.state.style4} styleText={this.state.current===4 ? this.state.styleText : {}}/>
    </div>
  }
}

class Second extends React.Component{
  render(){
  return <div className = "second">
    <Navbar />
    <MainBottom />
  </div>
  }
}

function App() {
  
  return (
    <div>
    <First />
    <Second />
    </div>
  )
} 

export default App;
