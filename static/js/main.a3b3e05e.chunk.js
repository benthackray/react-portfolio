(this["webpackJsonpclassroom-demo"]=this["webpackJsonpclassroom-demo"]||[]).push([[0],{11:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t(5),n=t.n(s),i=t(3),r=(t(2),t(0));var l=function(e){var c=e.currentPage,t=e.handlePageChange;return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("div",{className:"name",children:Object(r.jsxs)("h1",{children:[Object(r.jsx)("span",{id:"ben",children:"Ben"}),"Thackray"]})}),Object(r.jsxs)("ul",{className:"nav nav-tabs",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#home",onClick:function(){return t("Home")},className:"Home"===c?"nav-link active":"nav-link",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#about",onClick:function(){return t("About")},className:"About"===c?"nav-link active":"nav-link",children:"Resume"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#blog",onClick:function(){return t("Blog")},className:"Blog"===c?"nav-link active":"nav-link",children:"Portfolio"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#contact",onClick:function(){return t("Contact")},className:"Contact"===c?"nav-link active":"nav-link",children:"Contact"})})]})]})};var j=function(){return Object(r.jsxs)("footer",{children:[Object(r.jsx)("div",{class:"foot",children:Object(r.jsx)("p",{children:"Copyright Ben Thackray 2021"})}),Object(r.jsx)("div",{class:"nav",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://github.com/benthackray",children:"GitHub"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.linkedin.com/in/benjamin-thackray-24a78a211/",children:"LinkedIn"})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://stackexchange.com/users/21554665/ben-thackray",children:"Stack Overflow"})})]})})]})},o=t.p+"static/media/profilePhoto.7283ebdb.png";function h(){return Object(r.jsxs)("div",{id:"bio",children:[Object(r.jsx)("img",{id:"photo",src:o,alt:"profilePhoto"}),Object(r.jsxs)("div",{className:"summary",children:[Object(r.jsx)("h2",{children:"Bio"}),Object(r.jsx)("p",{children:"Ben is a full stack developer from Northwest Philadelphia. He has been coding since May of 2021. In his spare time he writes comedy and plays roller derby. Please, please hire him."})]})]})}var d=t.p+"static/media/benThackrayResume.5d4a7660.pdf";function b(){return Object(r.jsxs)("div",{className:"resume",children:[Object(r.jsx)("h2",{children:"Resume"}),Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:d,download:!0,children:"Download Here"})}),Object(r.jsx)("p",{children:"Ben has skills in HTML, CSS, Javascript, node, SQL, Mongo, React and other programming languages!"})]})}var m=t.p+"static/media/pye_home.e6e80d80.png",O=t.p+"static/media/filmtrivia.8eec6772.png",u=t.p+"static/media/employee_tracker.09869c8a.png",x=t.p+"static/media/pwordgen.e359017e.png",p=t.p+"static/media/planner.7008adea.png";function v(){return Object(r.jsxs)("div",{id:"projects",className:"portfolio",children:[Object(r.jsx)("h2",{children:"Projects"}),Object(r.jsxs)("article",{className:"deck",children:[Object(r.jsx)("div",{id:"firstPhoto",className:"card",children:Object(r.jsxs)("a",{href:"https://cryptic-basin-25278.herokuapp.com/",children:[Object(r.jsx)("img",{src:m,alt:"A fun social pie chart site"}),Object(r.jsx)("p",{children:"Pye"})]})}),Object(r.jsx)("div",{className:"card",children:Object(r.jsxs)("a",{href:"https://sushistarlove.github.io/movie-trivia-jbg/index.html",children:[Object(r.jsx)("img",{src:O,alt:"A fun trivia game for you and your friends"}),Object(r.jsx)("p",{children:"Movie Trivia Game"})]})}),Object(r.jsx)("div",{className:"card",children:Object(r.jsxs)("a",{href:"https://github.com/benthackray/employee-tracker",children:[Object(r.jsx)("img",{src:u,alt:"A node module for keeping track of employees"}),Object(r.jsx)("p",{children:"Employee Tracker"})]})}),Object(r.jsx)("div",{className:"card",children:Object(r.jsxs)("a",{href:"https://benthackray.github.io/passwordGenerator/",children:[Object(r.jsx)("img",{src:x,alt:"A helpful tool for making a secure password"}),Object(r.jsx)("p",{children:"Password Generator"})]})}),Object(r.jsx)("div",{className:"card",children:Object(r.jsxs)("a",{href:"https://benthackray.github.io/workDayScheduler/",children:[Object(r.jsx)("img",{src:p,alt:"A planner to schedule your work day"}),Object(r.jsx)("p",{children:"Daily Planner"})]})})]})]})}function f(){var e=Object(a.useState)(""),c=Object(i.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)(""),l=Object(i.a)(n,2),j=l[0],o=l[1],h=Object(a.useState)(""),d=Object(i.a)(h,2),b=d[0],m=d[1],O=Object(a.useState)(""),u=Object(i.a)(O,2),x=u[0],p=u[1],v=function(e){var c=e.target,t=c.name,a=c.value;"email"===t?s(a):"userName"===t?o(a):m(b)};return Object(r.jsxs)("div",{className:"contact",id:"contact",children:[Object(r.jsx)("h2",{children:"Contact"}),Object(r.jsxs)("form",{className:"form",children:[Object(r.jsx)("input",{value:t,name:"email",onChange:v,type:"email",placeholder:"email"}),Object(r.jsx)("input",{value:j,name:"name",onChange:v,type:"text",placeholder:"name"}),Object(r.jsx)("input",{value:b,name:"message",onChange:v,type:"text",placeholder:"message"}),Object(r.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(t)?(alert("Hello ".concat(j)),o(""),s("")):p("Email is invalid")},children:"Submit"})]}),x&&Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"error-text",children:x})}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Email: mthack92@gmail.com"}),Object(r.jsx)("li",{children:"Phone: (215) 882-9841"})]})]})}function g(){var e=Object(a.useState)("Home"),c=Object(i.a)(e,2),t=c[0],s=c[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{currentPage:t,handlePageChange:function(e){return s(e)}}),"Home"===t?Object(r.jsx)(h,{}):"About"===t?Object(r.jsx)(b,{}):"Blog"===t?Object(r.jsx)(v,{}):Object(r.jsx)(f,{}),Object(r.jsx)(j,{})]})}var k=function(){return Object(r.jsx)(g,{})};n.a.render(Object(r.jsx)(k,{}),document.getElementById("root"))},2:function(e,c,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.a3b3e05e.chunk.js.map