(this.webpackJsonphackathon=this.webpackJsonphackathon||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(9),i=n.n(c),r=(n(33),n(34),n(3)),d=n(0);function l(e){return Object(d.jsxs)("div",{className:e.isOpen?"navbarOpen":"navbarClosed",children:[Object(d.jsxs)("div",{className:"navHead",children:[Object(d.jsx)("i",{className:"fas fa-bars navIcon",onClick:function(){return e.setIsOpen(!e.isOpen)}}),Object(d.jsx)("div",{className:e.isOpen?"navHeading":"navHeadingNone",children:"1828042"})]}),Object(d.jsxs)("div",{className:"navBody",children:[Object(d.jsxs)("div",{className:0==e.body?"navMenusActive":"navMenus",onClick:function(){return e.setBody(0)},children:[Object(d.jsx)("i",{class:"fas fa-home navIcon"}),Object(d.jsx)("div",{className:e.isOpen?"navHeading":"navHeadingNone",children:"Home"})]}),Object(d.jsxs)("div",{className:1==e.body?"navMenusActive":"navMenus",onClick:function(){return e.setBody(1)},children:[Object(d.jsx)("i",{class:"fas fa-user navIcon"}),Object(d.jsx)("div",{className:e.isOpen?"navHeading":"navHeadingNone",children:"About Me"})]})]})]})}var o=n(14),h=n(11),j=n(8),b=n(7),O=n(5),m=n.n(O),u=n(12),g=n(13),x=n.n(g);function v(){var e=Object(b.b)(),t=s.a.useState(0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(b.c)((function(e){return e.tableData.tableData})),l=s.a.useState({Meetingid:"",MeetingName:"",Attendees:"",onDate:new Date(""),StartTime:(new Date).toLocaleTimeString(),EndTime:(new Date).toLocaleTimeString()}),O=Object(r.a)(l,2),g=O[0],v=O[1];console.log(g);var p=function(e){console.log(g),v((function(t){return Object(j.a)(Object(j.a)({},t),{},Object(h.a)({},e.target.name,e.target.value))}))},f=function(t,n){e(function(e){var t=[{id:e}];return console.log(t),function(){var e=Object(u.a)(m.a.mark((function e(n){var a,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("http://localhost:8080/Summer_Internship_Backend/delEntry",t);case 3:a=e.sent,s=a.del,n({type:"ROW_DELETE_SUCCESS",payload:s}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n({type:"ROW_DELETE_FAIL",payload:e.t0.message});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}(t)),i.splice(n,1),c(a+1)},N=s.a.useState(""),w=Object(r.a)(N,2),S=w[0],T=w[1],A=s.a.useState([]),y=Object(r.a)(A,2),E=y[0],k=y[1];return s.a.useEffect((function(){console.log(S),console.log(i);var e=i.filter((function(e){return console.log(e.MeetingName.toLowerCase().includes(S)),e.MeetingName.toLowerCase().includes(S)}));k(Object(o.a)(e)),console.log(e),console.log(E)}),[S]),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"bodyHeading",children:"My Meetings"}),Object(d.jsx)("div",{className:"card",style:{marginBottom:"9vh"},children:Object(d.jsxs)("div",{className:"bodyMenu",children:[Object(d.jsxs)("div",{className:"searchBox",children:[Object(d.jsx)("i",{class:"fas fa-search"}),Object(d.jsx)("input",{className:"search",value:S,onChange:function(e){return T(e.target.value)}})]}),Object(d.jsxs)("div",{className:"paddingRight",children:["From: \xa0\xa0\xa0",Object(d.jsx)("input",{className:"date",type:"date"})]}),Object(d.jsxs)("div",{className:"paddingRight",children:["To: \xa0\xa0\xa0",Object(d.jsx)("input",{className:"date",type:"date"})]})]})}),Object(d.jsx)("div",{className:"card",style:{marginTop:"9vh"},children:Object(d.jsxs)("table",{style:{width:"100%"},children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"col theading",children:"Sl. no."}),Object(d.jsx)("td",{className:"col theading",children:"Meeting name"}),Object(d.jsx)("td",{className:"col theading",children:"No of People attending"}),Object(d.jsx)("td",{className:"col theading",children:"Date"}),Object(d.jsx)("td",{className:"col theading",children:"Start time"}),Object(d.jsx)("td",{className:"col theading",children:"End time"}),Object(d.jsx)("td",{className:"col theading",children:"Actions"})]}),""===S?Object(d.jsxs)(d.Fragment,{children:[i.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"col",children:t}),Object(d.jsx)("td",{className:"col",children:e.MeetingName}),Object(d.jsx)("td",{className:"col",children:e.Attendees}),Object(d.jsx)("td",{className:"col",children:e.onDate}),Object(d.jsx)("td",{className:"col",children:e.StartTime}),Object(d.jsx)("td",{className:"col",children:e.EndTime}),Object(d.jsx)("td",{className:"col",children:Object(d.jsx)("i",{className:"fas fa-trash trash",onClick:function(){return f(e.Meetingid,t)}})})]})})),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"col"}),Object(d.jsx)("td",{className:"col",children:Object(d.jsx)("input",{className:"input",name:"MeetingName",value:g.MeetingName,onChange:p})}),Object(d.jsx)("td",{className:"col",children:Object(d.jsx)("input",{className:"input",type:"number",name:"Attendees",value:g.Attendees,onChange:p})}),Object(d.jsx)("td",{className:"col",children:Object(d.jsx)("input",{className:"date",type:"date",name:"onDate",value:g.onDate,onChange:p})}),Object(d.jsx)("td",{className:"col",children:Object(d.jsx)("input",{className:"date",type:"time",name:"StartTime",value:g.StartTime,onChange:p})}),Object(d.jsx)("td",{className:"col",children:Object(d.jsx)("input",{className:"date",type:"time",name:"EndTime",value:g.EndTime,onChange:p})}),Object(d.jsx)("td",{className:"col",children:Object(d.jsx)("button",{className:"addButton",onClick:function(){i.push(g),c(a+1),console.log(i),v({Meetingid:"",MeetingName:"",Attendees:"",onDate:new Date(""),StartTime:(new Date).toLocaleTimeString(),EndTime:(new Date).toLocaleTimeString()})},children:"Add"})})]})]}):Object(d.jsx)(d.Fragment,{children:E.length>0?E.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"col",children:t}),Object(d.jsx)("td",{className:"col",children:e.MeetingName}),Object(d.jsx)("td",{className:"col",children:e.Attendees}),Object(d.jsx)("td",{className:"col",children:e.onDate}),Object(d.jsx)("td",{className:"col",children:e.StartTime}),Object(d.jsx)("td",{className:"col",children:e.EndTime}),Object(d.jsx)("td",{className:"col",children:Object(d.jsx)("i",{className:"fas fa-trash trash",onClick:function(){return f(e.Meetingid,t)}})})]})})):null})]})})]})}function p(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"bodyHeading",children:"About Me"}),Object(d.jsxs)("div",{className:"card",style:{marginBottom:"9vh"},children:[Object(d.jsx)("div",{children:"Name: Abhinav Srivastava"}),Object(d.jsx)("div",{children:"Roll: 1828042"}),Object(d.jsxs)("div",{children:["Github profile: ",Object(d.jsx)("a",{href:"https://github.com/abhinav2000kiit",children:"https://github.com/abhinav2000kiit"})]}),Object(d.jsx)("div",{children:"Skills: HTML, CSS, JS, React, Redux, PHP, Servlet, SQL, NodeJS, C/C++/C#, Python, ML, BlockChain, UI/UX"}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:"Projects:"}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"HighRadius: Made a bill management and invoice generating react application and also used ML for predicting clearing date of account retrievals."}),Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"https://www.pvot.in/",children:"Pvot.in"}),": A React website and PWA development and maintenance with Redux state management and Hooks. Landing page of website design and development. A React website and PWA development and maintenance with Redux state management and Hooks. Landing page of website design and development."]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"https://localwire.me/",children:"Localwire.me"}),": Localwire is a local Odia online news media house. Made an ADMIN PANEL with React here. Also made APIs here. In admin panel, the main target was to use CHART.JS and properly map all their stats in a nice visualisations. Further cleared the bugs of their pre-existing site."]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"https://www.thewriteorder.com/",children:"TheWriterOrder.com"}),": The Writer Order is a publishing house startup incubated by Startup Odisha. A basic website using BOOTSTRAP and combined it with Django backend. The main aim was basically to make a responsive website. Made UI/UX on Figma. Working on converting it into a PWA without using any framework."]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"https://github.com/abhinav2000kiit/tessellart-react",children:"Tessellart.com"}),": A React Website first, by combining with django backend and using APIs to extract data. Further updating the website to PWA."]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"https://github.com/abhinav2000kiit/KIITFEST6FULL",children:"KIITFEST.org"}),":  A group project of my college annual fest website. My role was to give finishing touch to the frontend and also handling the transaction and its securities with PHP."]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"https://fedkiit.com/",children:"FEDKIIT.com"}),": A society\u2019s website which I had to look after the frontend using BOOTSTRAP and JS."]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"https://msackiit.tech/",children:"MSACKIIT.tech"}),": A society\u2019s website which I had to look after the frontend using BOOTSTRAP and JS."]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"https://omega.fedkiit.com/",children:"Omega.fedkiit.com"}),": A society\u2019s event website which I had to look after the frontend using BOOTSTRAP and JS."]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"https://codeinturns.tech/",children:"codeinturns.tech"}),": A society\u2019s event website which I had to look after the frontend using BOOTSTRAP and JS."]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"https://github.com/abhinav2000kiit/orderfest",children:"theorderfest.com"}),": An event website which I had to look after the frontend using BOOTSTRAP and FULLPAGE.JS."]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"https://github.com/avaakash/rrod",children:"RROD.in"}),": A state level event website which I had to design look after the frontend using BOOTSTRAP and JS."]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"https://github.com/abhinav2000kiit/Credit-Managment-Website",children:"The transaction project"}),": My first project which I made while learning and during my firt webdev internship. A website with a SQL DB and PHP where we can exchange amounts between entries."]})]})]})]})}function f(e){return Object(d.jsx)("div",{className:e.isOpen?"bodyOpen":"bodyClosed",children:e.body?Object(d.jsx)(p,{}):Object(d.jsx)(v,{})})}function N(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(0),i=Object(r.a)(c,2),o=i[0],h=i[1];return Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)(l,{isOpen:n,setIsOpen:s,body:o,setBody:h}),Object(d.jsx)(f,{isOpen:n,body:o}),console.log(n)]})}n(61);var w=function(){return Object(d.jsx)(N,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))},T=n(4),A=n(28);var y=Object(T.c)({tableData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tableData:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TABLE_DATA_REQUEST":return{loading:!0};case"TABLE_DATA_SUCCESS":return{loading:!1,tableData:Object(o.a)(t.payload)};case"TABLE_DATA_FAIL":return{loading:!1,error:t.payload};default:return e}},res:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{res:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROW_CREATE_REQUEST":return{sending:!0};case"ROW_CREATE_SUCCESS":return{sending:!1,res:t.payload};case"ROW_CREATE_FAIL":return{sending:!1,error:t.payload};default:return e}},dlt:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{dlt:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROW_DELETE_REQUEST":return{sending:!0};case"ROW_DELETE_SUCCESS":return{sending:!1,dlt:t.payload};case"ROW_DELETE_FAIL":return{sending:!1,error:t.payload};default:return e}}}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,k=Object(T.e)(y,{},E(Object(T.a)(A.a)));i.a.render(Object(d.jsx)(b.a,{store:k,children:Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(w,{})})}),document.getElementById("root")),S()}},[[62,1,2]]]);
//# sourceMappingURL=main.54dfe05b.chunk.js.map