(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/main-img1.e0f31d10.jpeg"},function(e,t,n){e.exports=n.p+"static/media/img2.3efaeab7.jpg"},function(e,t,n){e.exports=n.p+"static/media/about-img3.92dad526.jpeg"},function(e,t,n){e.exports=n.p+"static/media/about-img4.2406bcce.jpeg"},function(e,t,n){e.exports=n.p+"static/media/img41.d7ce3eed.jpeg"},function(e,t,n){e.exports=n.p+"static/media/img42.5cbe5e58.jpeg"},function(e,t,n){e.exports=n.p+"static/media/img43.85056f30.jpeg"},function(e,t,n){e.exports=n.p+"static/media/img44.6d8910a6.jpg"},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),s=n.n(o),i=(n(13),n(14),n(5)),c=n(1),l=n(2),u=n(4),m=n(3),p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"})}}]),n}(r.a.Component),d=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=n(15),a=n(16);return r.a.createElement("div",{id:"main"},r.a.createElement("img",{src:t,alt:"El Captain",id:"back"}),r.a.createElement("h1",null,"Simon Tan"),r.a.createElement("div",{id:"menubutton",onClick:function(){return e.props.onClick()}},"\u2630"),r.a.createElement("div",{id:"myimage"},r.a.createElement("img",{src:a,alt:"me"})),r.a.createElement("div",{id:"intro"},r.a.createElement("div",null,"Hi, I'm Simon!"),"I am a developer and data scientist. I have been passionate about exploring new things. Currently, I am living in ",r.a.createElement("a",{href:"https://www.google.com/search?q=vienna+virginia",target:"_blank",rel:"noopener noreferrer"},"Vienna, Virginia"),"."),r.a.createElement(h,null))}}]),a}(r.a.Component),h=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("h3",null,"Contact me"),r.a.createElement("ul",{className:"contactmethod"},r.a.createElement("li",null,"Email: simontan@gwu.edu"),r.a.createElement("li",null,"Phone: 571-224-8268"),r.a.createElement("li",null,"Github: ",r.a.createElement("a",{href:"https://github.com/FacadeCrimson"},"github.com/FacadeCrimson"))))}}]),n}(r.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={style:{}},a}return Object(l.a)(n,[{key:"handleEnter",value:function(){this.setState({style:{opacity:1}})}},{key:"handleLeave",value:function(){this.setState({style:{opacity:0}})}},{key:"render",value:function(){var e=this,t=this.props.color;return r.a.createElement("div",{className:"container",id:"c1",style:{backgroundColor:t}},r.a.createElement("div",{className:"title"},this.props.title),r.a.createElement("div",{className:"description"},this.props.desc),this.props.img?r.a.createElement("div",{className:"graph"},r.a.createElement("img",{src:this.props.img,alt:"sample",onMouseEnter:function(){return e.handleEnter()},onMouseLeave:function(){return e.handleLeave()}})):null,this.props.caption?r.a.createElement("div",{className:"caption",style:this.state.style},this.props.caption):null)}}]),n}(r.a.Component),v=n(17),y=n(18),E=n(19),b=n(20),g=n(21),k=n(22),j=[r.a.createElement(f,{title:"Good for you",desc:"I was born in China and lived my high school years in Beijing. I pursued my Bachelor's degree of Economics and Finance in Hong Kong University of Science and Technology.",img:v,color:"#f6eeea"}),r.a.createElement(f,{title:"how are you",desc:"In 2019, I arrived in Washington, D.C. to carry out my Master degree in Business Analytics at George Washington University.",img:y,color:"#f6eeea"}),r.a.createElement(f,{title:"Hello !",img:b,color:"#f6eeea"})],O=[r.a.createElement(f,{title:"Japanese",desc:"I love Japanese culture and even passed Japanese JLPT N1 test.",img:E,caption:"Photo was taken in Hakone",color:"#f6eeea"}),r.a.createElement(f,{title:"Hiking",desc:"I love hiking and even passed Japanese JLPT N1 test.",img:b,caption:"Photo was taken in Hakone",color:"#f6eeea"}),r.a.createElement(f,{title:"Movies",desc:"I love movies but I am tired of blockbusters.",img:g,caption:"Check A.V. Club for their best of the decade.",color:"#f6eeea"}),r.a.createElement(f,{title:"MTG",desc:"I love playing Magic the Gathering. Every week I would play some drafts or cubes since university. I still think there are tons of tricks to master.",img:k,caption:"Baneslayer Angel intrigues me most.",color:"#f6eeea"}),r.a.createElement(f,{title:"Japanese",desc:"I am intrigued by traveling, writing, art, fabulous food, and even better conversations.\nSeeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me.",color:"#f6eeea"})];function C(e,t,n){var a=document.getElementById(n);t.pos=t.state.position,t.left=a.style.left?parseInt(a.style.left,10):0,t.offsetX=e.clientX-t.left,t.move=M.bind(null,t,n),a.addEventListener("mousemove",t.move)}function x(e,t,n){var a=document.getElementById(n);t.pos=t.state.position,t.left=a.style.left?parseInt(a.style.left,10):0,t.offsetX=e.targetTouches[0].clientX-t.left,t.tmove=S.bind(null,t,n),a.addEventListener("touchmove",t.tmove)}function M(e,t,n){document.getElementById(t).style.left="".concat(n.pageX-e.offsetX,"px")}function S(e,t,n){document.getElementById(t).style.left="".concat(n.targetTouches[0].pageX-e.offsetX,"px")}function T(e,t){document.getElementById(t).removeEventListener("mousemove",e.move),e.setState({position:e.pos+e.left})}function N(e,t){document.getElementById(t).removeEventListener("touchmove",e.tmove),e.setState({position:e.pos+e.left})}function I(e,t){var n=e.state.position,a="translateX("+(n+200).toString()+"px)";document.getElementById(t).style.transform=a,e.setState({position:n+200})}function w(e,t){var n=e.state.position,a="translateX("+(n-200).toString()+"px)";document.getElementById(t).style.transform=a,e.setState({position:n-200})}var L=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={position:0},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"main1",onMouseEnter:function(){return e.props.onMouseEnter()},onMouseLeave:function(){return e.props.onMouseLeave()},style:this.props.style1},r.a.createElement("div",{id:"leftarrow",style:this.props.styleText,onClick:function(){return I(e,"m1")}},"\u21e6"),r.a.createElement("div",{id:"rightarrow",style:this.props.styleText,onClick:function(){return w(e,"m1")}},"\u21e8"),r.a.createElement("div",{className:"header"},r.a.createElement("span",{className:"mainlabel"},"About me"),r.a.createElement("span",{className:"hint",style:this.props.styleText,onClick:function(){return e.props.onClick(1)}},"\u2926")),r.a.createElement("span",{className:"hint2",style:this.props.styleText},"\u2939 You could scroll this by mouse, trackpad or touch! \u2935"),r.a.createElement("div",{className:"maincontent",id:"m1",style:this.props.styleText,onMouseDown:function(t){return C(t,e,"m1")},onMouseUp:function(){return T(e,"m1")},onTouchStart:function(t){return x(t,e,"m1")},onTouchEnd:function(){return N(e,"m1")}},j))}}]),n}(r.a.Component),B=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={position:0},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"main2",onMouseEnter:function(){return e.props.onMouseEnter()},onMouseLeave:function(){return e.props.onMouseLeave()},style:this.props.style2},r.a.createElement("div",{id:"leftarrow",style:this.props.styleText,onClick:function(){return I(e,"m2")}},"\u21e6"),r.a.createElement("div",{id:"rightarrow",style:this.props.styleText,onClick:function(){return w(e,"m2")}},"\u21e8"),r.a.createElement("div",{className:"header"},r.a.createElement("span",{className:"mainlabel"},"Experience"),r.a.createElement("span",{className:"hint",style:this.props.styleText,onClick:function(){return e.props.onClick(2)}},"\u2926")),r.a.createElement("span",{className:"hint2",style:this.props.styleText},"\u2939 You could scroll this by mouse, trackpad or touch! \u2935"),r.a.createElement("div",{className:"maincontent",id:"m2",style:this.props.styleText,onMouseDown:function(t){return C(t,e,"m2")},onMouseUp:function(){return T(e,"m2")},onTouchStart:function(t){return x(t,e,"m2")},onTouchEnd:function(){return N(e,"m2")}},null))}}]),n}(r.a.Component),H=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"main3",onMouseEnter:function(){return e.props.onMouseEnter()},onMouseLeave:function(){return e.props.onMouseLeave()},style:this.props.style3},r.a.createElement("div",{className:"header"},r.a.createElement("span",{className:"mainlabel"},"Skill"),r.a.createElement("span",{className:"hint",style:this.props.styleText,onClick:function(){return e.props.onClick(1)}},"\u2926")),r.a.createElement("span",{className:"hint2",style:this.props.styleText},"\u2939 You could scroll this by mouse, trackpad or touch! \u2935"),r.a.createElement(F,{style:this.props.styleText}))}}]),n}(r.a.Component),D=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){for(var e=parseInt(this.props.star),t="",n="",a=0;a<e;a++)t+="\u2605";for(var o=0;o<5-e;o++)n+="\u2605";return r.a.createElement("li",null,this.props.name,r.a.createElement("span",{className:"stars"},t),r.a.createElement("span",{className:"notstars"},n))}}]),n}(r.a.Component),F=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"skillcontent",style:this.props.style},r.a.createElement("div",{className:"skills"},r.a.createElement("ul",null,r.a.createElement(D,{name:"Python",star:"5"}),r.a.createElement(D,{name:"HTML",star:"5"}),r.a.createElement(D,{name:"CSS",star:"5"}),r.a.createElement(D,{name:"React",star:"5"}),r.a.createElement(D,{name:"R",star:"5"}),r.a.createElement(D,{name:"MVC pattern",star:"5"}),r.a.createElement(D,{name:"RESTful API",star:"5"}),r.a.createElement(D,{name:"Bootstrap",star:"5"}))),r.a.createElement("div",{className:"skills"},r.a.createElement("ul",null,r.a.createElement(D,{name:"MYSQL",star:"5"}),r.a.createElement(D,{name:"Database",star:"4"}),r.a.createElement(D,{name:"Statistics",star:"4"}),r.a.createElement(D,{name:"Machine Learning",star:"4"}),r.a.createElement(D,{name:"Deep Learning",star:"2"})))))}}]),n}(r.a.Component),J=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={position:0},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"main4",onMouseEnter:function(){return e.props.onMouseEnter()},onMouseLeave:function(){return e.props.onMouseLeave()},style:this.props.style4},r.a.createElement("div",{id:"leftarrow",style:this.props.styleText,onClick:function(){return I(e,"m4")}},"\u21e6"),r.a.createElement("div",{id:"rightarrow",style:this.props.styleText,onClick:function(){return w(e,"m4")}},"\u21e8"),r.a.createElement("div",{className:"header"},r.a.createElement("span",{className:"mainlabel"},"Hobby"),r.a.createElement("span",{className:"hint",style:this.props.styleText,onClick:function(){return e.props.onClick(4)}},"\u2926")),r.a.createElement("span",{className:"hint2",style:this.props.styleText},"\u2939 You could scroll this by mouse, trackpad or touch! \u2935"),r.a.createElement("div",{className:"maincontent",id:"m4",style:this.props.styleText,onMouseDown:function(t){return C(t,e,"m4")},onMouseUp:function(){return T(e,"m4")},onTouchStart:function(t){return x(t,e,"m4")},onTouchEnd:function(){return N(e,"m4")}},O))}}]),n}(r.a.Component),X=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"sidebar",style:this.props.style},r.a.createElement("div",{className:"menu"},"Menu"),r.a.createElement("div",{className:"item",onClick:function(){return e.props.onClick(1)}},"About"),r.a.createElement("div",{className:"item",onClick:function(){return e.props.onClick(2)}},"Experience"),r.a.createElement("div",{className:"item",onClick:function(){return e.props.onClick(3)}},"Skills"),r.a.createElement("div",{className:"item",onClick:function(){return e.props.onClick(4)}},"Hobby"),r.a.createElement("div",{id:"closebutton",onClick:function(){return e.props.close()}},"\xd7"))}}]),n}(r.a.Component),A=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={menu:!1},a}return Object(l.a)(n,[{key:"openSidebar",value:function(){this.setState({menu:!0}),this.menuDisplay={zIndex:6}}},{key:"closeSidebar",value:function(){this.setState({menu:!1}),this.menuDisplay={zIndex:0}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"first"},r.a.createElement(p,null),r.a.createElement(d,{onClick:function(){return e.openSidebar()}}),r.a.createElement(X,{onClick:function(t){window.scroll({top:1200,left:0,behavior:"smooth"}),e.props.onClick(t)},style:this.menuDisplay,close:function(){return e.closeSidebar()}}))}}]),n}(r.a.Component),P=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"response"},r.a.createElement("form",{className:"form",action:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSddmWyx1_aJvYSIxH7sIcquntxErMgQGCygpDT-k152qnHsWA/formResponse",method:"post",target:"hidden_iframe"},r.a.createElement("label",null,"Title"),r.a.createElement("input",{name:"entry.2093844086",type:"text",pattern:".{3,}",required:!0,title:"3 characters minimum"}),r.a.createElement("label",null,"Feedback"),r.a.createElement("textarea",{name:"entry.315161779",cols:"17",rows:"5",required:!0}),r.a.createElement("label",null,"Email (Optional)"),r.a.createElement("input",{name:"entry.1086420941",type:"email"}),r.a.createElement("input",{type:"submit",value:"Send"})))}}]),n}(r.a.Component),G=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).changeStyle=function(e){var t;a.props.set(e);var n="style"+e.toString();a.setState((t={},Object(i.a)(t,n,{transform:"scale(1)",zIndex:5}),Object(i.a)(t,"styleText",{opacity:1}),Object(i.a)(t,"current",e),t));for(var r=1;r<5;r++)if(r!==e){var o="style"+r.toString();a.setState(Object(i.a)({},o,{opacity:0}))}document.getElementById("showform").style.zIndex=0},a.resetStyle=function(e){var t,n="rotate(36.85deg) translate("+(60*e-60).toString()+"px,"+(80*e-80).toString()+"px)",r="style"+e.toString();a.setState((t={},Object(i.a)(t,r,{transform:n}),Object(i.a)(t,"styleText",{}),Object(i.a)(t,"current",void 0),t));for(var o=1;o<5;o++)if(o!==e){var s="style"+o.toString();a.setState(Object(i.a)({},s,{opacity:1}))}document.getElementById("showform").style.zIndex=6,a.props.reset()},a.closeForm=function(e){e.stopPropagation(),document.getElementById("response").style.display="none";var t=document.getElementById("showform");t.innerHTML="&nbsp;\u270e",t.removeEventListener("click",a.closeForm,!1)},a.state={current:void 0,style1:{},style2:{},style3:{},style4:{},styleText:{}},a}return Object(l.a)(n,[{key:"handleMouseOver",value:function(e){this.timeID=setTimeout(this.changeStyle,800,e)}},{key:"handleMouseLeave",value:function(e){clearTimeout(this.timeID),this.state.current&&this.resetStyle(e)}},{key:"showForm",value:function(){document.getElementById("response").style.display="block";var e=document.getElementById("showform");e.innerHTML="&nbsp;&times",e.addEventListener("click",this.closeForm,!1)}},{key:"render",value:function(){var e=this;return this.props.current!==this.state.current&&this.changeStyle(this.props.current),r.a.createElement("div",{id:"mainbottom"},r.a.createElement("div",{id:"instruction"},"\u293a Hover on the tabs to open it!"),r.a.createElement("div",{id:"showform",onClick:function(){return e.showForm()}},"\xa0\u270e"),r.a.createElement(P,null),r.a.createElement(L,{onMouseEnter:function(){return e.handleMouseOver(1)},onMouseLeave:function(){return e.handleMouseLeave(1)},onClick:function(t){return e.resetStyle(t)},style1:this.state.style1,styleText:1===this.state.current?this.state.styleText:{}}),r.a.createElement(B,{onMouseEnter:function(){return e.handleMouseOver(2)},onMouseLeave:function(){return e.handleMouseLeave(2)},onClick:function(t){return e.resetStyle(t)},style2:this.state.style2,styleText:2===this.state.current?this.state.styleText:{}}),r.a.createElement(H,{onMouseEnter:function(){return e.handleMouseOver(3)},onMouseLeave:function(){return e.handleMouseLeave(3)},onClick:function(t){return e.resetStyle(t)},style3:this.state.style3,styleText:3===this.state.current?this.state.styleText:{}}),r.a.createElement(J,{onMouseEnter:function(){return e.handleMouseOver(4)},onMouseLeave:function(){return e.handleMouseLeave(4)},onClick:function(t){return e.resetStyle(t)},style4:this.state.style4,styleText:4===this.state.current?this.state.styleText:{}}))}}]),n}(r.a.Component),W=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"second"},r.a.createElement(p,null),r.a.createElement(G,{current:this.props.current,reset:function(){return e.props.reset()},set:function(t){return e.props.set(t)}}))}}]),n}(r.a.Component),Y=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"foot"},r.a.createElement("div",{className:"ending"},r.a.createElement("hr",null),r.a.createElement("div",{className:"endingtext"},"\xa9 2020 Simon Tan")))}}]),n}(r.a.Component),q=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).current=function(e){a.setState({current:e})},a.reset=function(){a.setState({current:void 0})},a.state={current:void 0},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(A,{onClick:function(t){return e.current(t)}}),r.a.createElement(W,{current:this.state.current,reset:function(){return e.reset()},set:function(t){return e.current(t)}}),r.a.createElement(Y,null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0a1a0eb6.chunk.js.map