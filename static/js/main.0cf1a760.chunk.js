(this["webpackJsonpreact-cv-application"]=this["webpackJsonpreact-cv-application"]||[]).push([[0],{42:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},58:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a(0),c=a.n(o),l=a(18),s=a.n(l),r=(a(42),a(52),a(16),a(53),a(27)),i=a(71),d=a(7),h=a(6),u=a(21),p=a(22),j=a(25),b=a(24),m=(a(54),a(10)),x=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(m.a.Group,{controlId:e.controlId,children:[Object(n.jsx)(m.a.Label,{children:e.label}),Object(n.jsx)(m.a.Control,{size:"sm",type:e.type,placeholder:e.placeholder,onChange:e.handleChange,value:(e.type,e.value)})]})})},O=(a(58),a(70),a(15)),g=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={name:n.props.genState.name,email:n.props.genState.email,phone:n.props.genState.phone},n.handleNameChange=function(e){n.setState({name:e.target.value})},n.handleEmailChange=function(e){n.setState({email:e.target.value})},n.handlePhoneChange=function(e){n.setState({phone:e.target.value})},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props.genState),Object(n.jsx)("div",{className:"general row",children:Object(n.jsx)("div",{className:"col-md-6 m-auto",children:Object(n.jsxs)(m.a,{className:"genForm",children:[Object(n.jsx)(x,{value:this.state.name,label:"Name",type:"text",placeholder:"Enter User Name",controlId:"UserName",handleChange:this.handleNameChange}),Object(n.jsx)(x,{value:this.state.email,label:"Email",type:"email",placeholder:"Enter Email Id",controlId:"Email",handleChange:this.handleEmailChange}),Object(n.jsx)(x,{value:this.state.phone,label:"Phone Number",type:"number",placeholder:"Enter Phone Number",controlId:"PhoneNumber",handleChange:this.handlePhoneChange}),Object(n.jsx)(d.b,{className:"navButton",to:"/Education",onClick:function(){return e.props.addGeneral(e.state.name,e.state.email,e.state.phone)},children:"Next>>"})]})})})}}]),a}(o.Component),v=Object(O.b)((function(e){return{genState:e.genReducer}}),(function(e){return{addGeneral:function(t,a,n){e({type:"addGeneral",payload:{payload:{name:t,email:a,phone:n}}.payload})}}}))(g),f=(a(62),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={school:n.props.eduState.school,degree:n.props.eduState.degree,from:n.props.eduState.from,to:n.props.eduState.to},n.handleSchool=function(e){n.setState({school:e.target.value})},n.handleDegree=function(e){n.setState({degree:e.target.value})},n.handleFrom=function(e){n.setState({from:e.target.value})},n.handleTo=function(e){n.setState({to:e.target.value})},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state),Object(n.jsx)("div",{className:"education row",children:Object(n.jsx)("div",{className:"col-md-6 m-auto",children:Object(n.jsxs)(m.a,{className:"genForm",children:[Object(n.jsx)(x,{value:this.state.school,label:"SchoolName",type:"text",placeholder:"Enter School Name",controlId:"SchoolName",handleChange:this.handleSchool}),Object(n.jsx)(x,{value:this.state.degree,label:"Degree",type:"text",placeholder:"Enter Degree Name",controlId:"Degree",handleChange:this.handleDegree}),Object(n.jsx)(x,{value:this.state.from,label:"Study From",type:"date",placeholder:"Study Start From",controlId:"DegreeStart",handleChange:this.handleFrom}),Object(n.jsx)(x,{value:this.state.to,label:"Study To",type:"date",placeholder:"Study Finished On",controlId:"DegreeEnd",handleChange:this.handleTo}),Object(n.jsx)(d.b,{className:"navButton",to:"/Experiance",onClick:function(){return e.props.addEducation(e.state.school,e.state.degree,e.state.from,e.state.to)},children:"Next>>"})]})})})}}]),a}(o.Component)),y=Object(O.b)((function(e){return{eduState:e.eduReducer}}),(function(e){return{addEducation:function(t,a,n,o){e({type:"addEducation",payload:{payload:{school:t,degree:a,from:n,to:o}}.payload})}}}))(f),S=(a(63),a(64),function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)(m.a.Group,{controlId:e.controlId,children:[Object(n.jsx)(m.a.Label,{children:e.label}),Object(n.jsx)(m.a.Control,{as:e.type,rows:3,placeholder:e.placeholder,value:e.value,onChange:e.handleChange})]})})}),C=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={company:n.props.expState.company,position:n.props.expState.position,from:n.props.expState.from,to:n.props.expState.to,tasks:n.props.expState.tasks},n.handleCompany=function(e){n.setState({company:e.target.value})},n.handlePosition=function(e){n.setState({position:e.target.value})},n.handleFrom=function(e){n.setState({from:e.target.value})},n.handleTo=function(e){n.setState({to:e.target.value})},n.handleTask=function(e){n.setState({tasks:e.target.value})},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.state),Object(n.jsx)("div",{className:"experiance row",children:Object(n.jsx)("div",{className:"col-md-6 m-auto",children:Object(n.jsxs)(m.a,{className:"genForm",children:[Object(n.jsx)(x,{value:this.state.company,label:"Company",type:"text",placeholder:"Enter Company Name",controlId:"Company",handleChange:this.handleCompany}),Object(n.jsx)(x,{value:this.state.position,label:"Position",type:"text",placeholder:"Enter Position",controlId:"Position",handleChange:this.handlePosition}),Object(n.jsx)(x,{value:this.state.from,label:"Job From",type:"date",placeholder:"Job Start From",controlId:"JobStart",handleChange:this.handleFrom}),Object(n.jsx)(x,{value:this.state.to,label:"Job To",type:"date",placeholder:"Job Finished On",controlId:"JobEnd",handleChange:this.handleTo}),Object(n.jsx)(S,{value:this.state.tasks,label:"Job Tasks",type:"textarea",placeholder:"Job Tasks",controlId:"JobTask",handleChange:this.handleTask}),Object(n.jsx)(d.b,{className:"navButton",to:"/Summary",onClick:function(){return e.props.addExperiance(e.state.company,e.state.position,e.state.from,e.state.to,e.state.tasks)},children:"Submit"})]})})})}}]),a}(o.Component),N=Object(O.b)((function(e){return{expState:e.expReducer}}),(function(e){return{addExperiance:function(t,a,n,o,c){e({type:"addExperiance",payload:{payload:{company:t,position:a,from:n,to:o,tasks:c}}.payload})}}}))(C),E=a(72),k=(a(65),function(e){function t(e){function t(e){return e<10?"0"+e:e}var a=new Date(e);return[t(a.getDate()),t(a.getMonth()+1),a.getFullYear()].join("/")}return Object(n.jsx)("div",{className:"cardList",children:Object(n.jsxs)(E.a,{className:"cardInner",border:"primary",children:[Object(n.jsx)(E.a.Header,{children:e.header}),Object(n.jsxs)(E.a.Body,{children:[Object(n.jsx)("div",{children:Object.keys(e.details).map((function(a,o){return Object(n.jsxs)("div",{className:"cardBlock",children:[Object(n.jsx)(E.a.Title,{className:"cardTitle",children:a}),Object(n.jsx)(E.a.Text,{className:"cardText",children:"from"===a||"to"===a?t(e.details[a]):e.details[a]})]},a)}))}),Object(n.jsx)(d.b,{to:e.goto,className:"navButton",children:" Edit "})]})]})})}),I=(a(66),Object(O.b)((function(e){return{genState:e.genReducer,eduState:e.eduReducer,expState:e.expReducer}}))((function(e){return console.log(e.genState),Object(n.jsxs)("div",{className:"summary row",children:[Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)(k,{className:"cardList",header:"General Details",goto:"General",details:e.genState})}),Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)(k,{className:"cardList",header:"Education Details",goto:"Education",details:e.eduState})}),Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)(k,{className:"cardList",header:"Experiance Details",goto:"Experiance",details:e.expState})})]})}))),T=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(r.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(n.jsx)(r.a.Brand,{children:Object(n.jsx)(i.a.Link,{children:Object(n.jsx)(d.b,{className:"navClass",to:"/General",children:e.title})})}),Object(n.jsx)(r.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsx)(r.a.Collapse,{id:"responsive-navbar-nav",children:Object(n.jsxs)(i.a,{className:"mr-auto",children:[Object(n.jsx)(i.a.Link,{children:Object(n.jsx)(d.b,{className:"navClass",activeClassName:"navActive",to:"/General",children:"General"})}),Object(n.jsx)(i.a.Link,{children:Object(n.jsx)(d.b,{className:"navClass",activeClassName:"navActive",to:"/Education",children:"Education"})}),Object(n.jsx)(i.a.Link,{children:Object(n.jsx)(d.b,{className:"navClass",activeClassName:"navActive",to:"/Experiance",children:"Experiance"})}),Object(n.jsx)(i.a.Link,{children:Object(n.jsx)(d.b,{className:"navClass",activeClassName:"navActive",to:"/Summary",children:"Summary"})})]})})]}),Object(n.jsx)(h.a,{path:"/General",component:v,exact:!0}),Object(n.jsx)(h.a,{path:"/Education",component:y,exact:!0}),Object(n.jsx)(h.a,{path:"/Experiance",component:N,exact:!0}),Object(n.jsx)(h.a,{path:"/Summary",component:I,exact:!0})]})};a(67);var F=function(){return Object(n.jsx)(d.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(T,{title:"CV Application"})})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),o(e),c(e),l(e)}))},L=a(23),D=a(9),P={name:"Girish",email:"pgirish4u@gmail.com",phone:"31617317377"},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"getGeneral":return Object(D.a)({},e);case"addGeneral":return console.log("add genral"),Object(D.a)(Object(D.a)({},e),{},{name:t.payload.name,email:t.payload.email,phone:t.payload.phone});default:return Object(D.a)({},e)}},J={school:"GEC",degree:"Computer Science",from:"2000-11-20",to:"2004-06-15"},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"getEducation":return Object(D.a)({},e);case"addEducation":return Object(D.a)(Object(D.a)({},e),{},{school:t.payload.school,degree:t.payload.degree,from:t.payload.from,to:t.payload.to});default:return Object(D.a)({},e)}},R={company:"Al-Ahleia",position:"IT Engineer",from:"2006-05-20",to:"2019-06-16",tasks:"Lots of tasks"},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"getExperiance":return Object(D.a)({},e);case"addExperiance":return Object(D.a)(Object(D.a)({},e),{},{company:t.payload.company,position:t.payload.position,from:t.payload.from,to:t.payload.to,tasks:t.payload.tasks});default:return Object(D.a)({},e)}},M=Object(L.c)(Object(L.b)({genReducer:w,eduReducer:B,expReducer:A}));s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(O.a,{store:M,children:Object(n.jsx)(F,{})})}),document.getElementById("root")),G()}},[[68,1,2]]]);
//# sourceMappingURL=main.0cf1a760.chunk.js.map