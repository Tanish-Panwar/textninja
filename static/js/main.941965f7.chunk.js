(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var o=a(1),c=a.n(o),n=a(8),r=a.n(n),l=(a(13),a(4)),s=(a(14),a(0));function i(e){return Object(s.jsx)("div",{className:"container my-3",children:Object(s.jsxs)("div",{className:"container containerAbout",style:{backgroundColor:"light"===e.mode?"dark":"light",color:"dark"===e.mode?"light":"dark",border:"dark"===e.mode?"light":"dark"},children:[Object(s.jsxs)("p",{children:["BE A TEXT NINJA USE TEXT NINJA. Text Ninja is a simple to use text analytics web based application, why \"web\", because you don't need to install it in you phone, And you don't have to give extra memory for this application. It is a lightweight web application, for analyzing your text, It has all necessary features,",Object(s.jsx)("br",{}),"Like:",Object(s.jsx)("br",{})]}),Object(s.jsx)("p",{children:"1. Text Capitalization after full stops."}),Object(s.jsx)("p",{children:"2. Uppercasing each letter of your phrase."}),Object(s.jsx)("p",{children:"3. Lowercasing each letter of your phrase."}),Object(s.jsx)("p",{children:"4. Removing unwanted spaces from your phrase."}),Object(s.jsx)("p",{children:"5. Copying a huge text file without lagging."}),Object(s.jsx)("p",{children:"6. Letter counter for your phrase."}),Object(s.jsx)("p",{children:"7. Words counter for your phrase."}),Object(s.jsx)("p",{children:"8. A Timer, about how much time a normal reader may take to read your phrase."}),Object(s.jsx)("p",{children:"9. Text Preview for you text."}),Object(s.jsx)("p",{children:"10. With Dark mode, so you can even use it at night."}),Object(s.jsx)("p",{children:"11. 3 Major color themes for both dark mode and light mode."})]})})}var d=a(5);function b(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)(d.b,{className:"navbar-brand",to:"/",children:Object(s.jsx)("u",{children:e.title})}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(d.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(d.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(s.jsxs)("div",{className:"ColorPickerContainer",children:[Object(s.jsx)("label",{children:"Color Theme"}),Object(s.jsx)("button",{onClick:e.changeThemeR,className:"colorPicker",id:"Red",children:"R"}),Object(s.jsx)("button",{onClick:e.changeThemeG,className:"colorPicker",id:"Green",children:"G"}),Object(s.jsx)("button",{onClick:e.changeThemeB,className:"colorPicker",id:"Blue",children:"B"})]}),Object(s.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(s.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"light"===e.mode?"Enable dark mode":"Disable dark mode"})]})]})]})})}document.getElementById("navColor");function h(e){var t=Object(o.useState)(""),a=Object(l.a)(t,2),c=a[0],n=a[1],r=Object(o.useState)(""),i=Object(l.a)(r,2),d=i[0],b=i[1],h=Object(o.useState)(""),m=Object(l.a)(h,2),j=m[0],u=m[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"container my-3",children:[Object(s.jsx)("h2",{children:e.heading}),Object(s.jsx)("textarea",{placeholder:"YOUR TEXT GOES HERE-",value:c,onChange:function(e){n(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#16181b70":"#ffffff75",color:"dark"===e.mode?"white":"black"},name:"Your Text",id:"myBox",className:"form-control my-3 glass",cols:"50",rows:"5"}),Object(s.jsx)("div",{className:"ModalSection",children:Object(s.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(s.jsx)("div",{className:"modal-dialog",children:Object(s.jsxs)("div",{className:"modal-content",children:[Object(s.jsx)("div",{className:"modal-header",children:Object(s.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})}),Object(s.jsxs)("div",{className:"modal-body",children:[Object(s.jsx)("input",{value:d,onChange:function(e){return b(e.target.value)},type:"email",className:"form-control",placeholder:"Enter words to replace"}),Object(s.jsx)("input",{value:j,onChange:function(e){return u(e.target.value)},type:"email",className:"form-control",placeholder:"Enter word to replace with"})]}),Object(s.jsx)("div",{className:"modal-footer",children:Object(s.jsx)("button",{type:"button",className:"btn btn-outline-".concat("light"===e.mode?"dark":"light"," mx-2 my-2"),onClick:function(){n(c.replaceAll(d,j)),c.length>0?e.showAlert("Removed all extra spaces","success"):e.showAlert("Enter some text first ","warning")},children:"REPLACE"})})]})})})}),Object(s.jsx)("button",{className:"btn btn-outline-".concat("light"===e.mode?"dark":"light"," mx-2 my-2"),id:"corrector",onClick:function(){var t=c.toUpperCase();n(t),c.length>0?e.showAlert("Converted to Uppercase","success"):e.showAlert("Enter some text first ","warning")},children:"UPPERCASE"}),Object(s.jsx)("button",{className:"btn btn-outline-".concat("light"===e.mode?"dark":"light"," mx-2 my-2"),id:"corrector",onClick:function(){var t=c.split(/[ ]+/);n(t.join(" ")),c.length>0?e.showAlert("Removed all extra spaces","success"):e.showAlert("Enter some text first ","warning")},children:"REMOVE SPACES"}),Object(s.jsx)("button",{className:"btn btn-outline-".concat("light"===e.mode?"dark":"light"," mx-2 my-2"),id:"corrector",onClick:function(){var t=c.split(/\s+/);n(t.join(" ")),c.length>0?e.showAlert("Removed all extra spaces","success"):e.showAlert("Enter some text first ","warning")},children:"REMOVE ENTERS"}),Object(s.jsx)("button",{className:"btn btn-outline-".concat("light"===e.mode?"dark":"light"," mx-2 my-2"),id:"corrector",onClick:function(){var t=document.getElementById("myBox");navigator.clipboard.writeText(t.value),c.length>0?e.showAlert("Copied to clipboard","success"):e.showAlert("Enter some text first ","warning")},children:"COPY TEXT"}),Object(s.jsx)("button",{className:"btn btn-outline-".concat("light"===e.mode?"dark":"light"," mx-2 my-2"),id:"corrector",onClick:function(){var t=[],a=!1;t=c.split(".");for(var o=0;o<t.length;o++){var r=t[0];t[o]=t[o].charAt(1).toUpperCase()+t[o].slice(2),t[0]=r.charAt(0).toUpperCase()+r.slice(1),a=!0}n(!0===a?t.join(". "):c),c.length>0?e.showAlert("Capitalized the text from full stops.","success"):e.showAlert("Enter some text first ","warning")},children:"CAPITALIZE"}),Object(s.jsx)("button",{className:"btn btn-outline-".concat("light"===e.mode?"dark":"light"," mx-2 my-2"),id:"corrector",onClick:function(){var t=c.toLowerCase();n(t),c.length>0?e.showAlert("Converted to Lowercase","success"):e.showAlert("Enter some text first ","warning")},children:"LOWERCASE"}),Object(s.jsx)("button",{className:"btn btn-outline-".concat("light"===e.mode?"dark":"light"," mx-2 my-2"),id:"corrector",onClick:function(){n(""),c.length>0?e.showAlert("Cleared text","success"):e.showAlert("Enter some text first ","warning")},children:"CLEAR TEXT"}),Object(s.jsx)("button",{type:"button",className:"btn btn-outline-".concat("light"===e.mode?"dark":"light"," mx-2 my-2"),"data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"REPLACE TEXT"})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)("div",{className:"container my-3",children:[Object(s.jsx)("h2",{children:"Your Text Summary"}),Object(s.jsx)("p",{children:Object(s.jsxs)("u",{children:["Your phrase has ",c.split(/\s+/).filter((function(e){return 0!==e.length})).length," Words and ",c.length," Characters"]})}),Object(s.jsx)("p",{children:Object(s.jsx)("u",{children:"A normal reader may read this phrase in "+.008*c.split(/\s+/).filter((function(e){return 0!==e.length})).length+" minutes"})}),Object(s.jsx)("hr",{}),Object(s.jsx)("h2",{children:"Text preview"}),Object(s.jsx)("p",{id:"box",children:c.length>0?c:"Enter your text to preview"})]})]})}b.defaultProps={title:"TITLE",aboutText:"About"};var m=function(e){return e.alert&&Object(s.jsxs)("div",{className:"alert a alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),": ",e.alert.msg]})},j=a(2);var u=function(){var e=Object(o.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(o.useState)(null),r=Object(l.a)(n,2),u=r[0],x=r[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(d.a,{basename:"/textninja",children:[Object(s.jsx)(b,{title:"TEXT NINJA",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#16181b",document.body.style.color="#f3f3f3"):(c("light"),document.body.style.backgroundColor="#f3f3f3",document.body.style.color="#16181b")},changeThemeR:function(){"light"===a?(document.body.style.backgroundColor="#ffaeae",document.body.style.color="#000"):(document.body.style.backgroundColor="#230000",document.body.style.color="#fff")},changeThemeG:function(){"light"===a?(document.body.style.backgroundColor="#8affa7",document.body.style.color="#000"):(document.body.style.backgroundColor="#00290a",document.body.style.color="#fff")},changeThemeB:function(){"light"===a?(document.body.style.backgroundColor="#94dbff",document.body.style.color="#000"):(document.body.style.backgroundColor="#001f2e",document.body.style.color="#fff")}}),Object(s.jsx)(m,{alert:u}),Object(s.jsx)("div",{className:"container my-3",children:Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{exact:!0,path:"/about",element:Object(s.jsx)(i,{})}),Object(s.jsx)(j.a,{exact:!0,path:"/",element:Object(s.jsx)(h,{showAlert:function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),1500)},heading:"Enter your text for analyzing.",mode:a})})]})})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,o=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),o(e),c(e),n(e),r(e)}))};r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.941965f7.chunk.js.map