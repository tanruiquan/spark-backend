(this.webpackJsonpspark=this.webpackJsonpspark||[]).push([[0],{46:function(e,t,n){},505:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(91),r=n(56),a=n(45),i=n(223),o=n(224),l=(n(46),n(10)),j=n(8),u=n(7),b=n(69),d=n(225),h=n(92),O=n(0),x=function(e){var t=e.data,n=e.isFavoritible,c=void 0===n||n,s=["game__question-card--yellow","game__question-card--magenta","game__question-card--cyan"];return Object(O.jsx)("div",{className:"game__question-card--content-container",children:0===Object.keys(t).length?null:Object(O.jsxs)("div",{className:"game__question-card ".concat(s[Math.floor(3*Math.random())]),children:[Object(O.jsxs)("p",{className:"game__question-card--title",children:[" ",t.question," "]}),c?Object(O.jsxs)("div",{className:"game__question-card--icons-container",children:[Object(O.jsx)(b.a,{icon:d.a,className:"game__question-card--icon",size:"3x",onMouseUp:function(){return alert("fav"+t.question)},onTouchEnd:function(){return alert("fav")}}),Object(O.jsx)(b.a,{icon:h.b,className:"game__question-card--icon",size:"3x",onMouseUp:function(){return alert("share"+t.question)},onTouchEnd:function(){return alert("share")}})]}):Object(O.jsx)("p",{children:" "})]})})},m=n(136),p=function(e){var t=e.questions,n=e.isFavoritible,s=Object(c.useState)([]),r=Object(l.a)(s,2),a=r[0],i=r[1],o=Object(c.useState)(0),j=Object(l.a)(o,2),u=j[0],b=j[1];Object(c.useEffect)((function(){i(t.slice(0,5)),d()}),[]);var d=function(){b(u+1),i(t.slice(u,u+5))},h={background:"transparent",border:"none",overflow:"visible",height:"auto",maxWidth:"800px"};return Object(O.jsx)(m.b,{className:"game__question-card--container",children:a.map((function(e){return Object(O.jsx)(m.a,{onSwipe:d,style:h,children:Object(O.jsx)(x,{data:e,isFavoritible:n})},e.id)}))})},f=n.p+"static/media/Logo_conversations.0a7776b0.svg",v=function(e){var t=e.action,n=Object(u.f)(),c=void 0===t?function(){n.goBack()}:t;return Object(O.jsxs)("div",{className:"menu__linkbutton--back",onClick:c,children:[Object(O.jsx)(b.a,{icon:h.a})," back"]})},g=function(e){var t="profile"===e.mode?"profile":"game";return Object(O.jsxs)("div",{className:"navbar ".concat(t,"__navbar"),children:[Object(O.jsxs)("div",{className:"game__navbar--back",children:[" ",Object(O.jsx)(v,{})," "]}),Object(O.jsx)("img",{src:f,className:"site__sparklogo game__navbar--logo",alt:"SPARK logo"})]})},_=n(13),y=n.n(_),k=n(35),N=n(70),w=n.n(N),C="/api/questions",E={getAllQuestions:function(){var e=Object(k.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get(C);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAllQuestionsFromCategory:function(){var e=Object(k.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get(C+"/"+t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},q="GET_QUESTION",S="GET_QUESTION_SUCCESS",T="GET_QUESTION_FAILURE",I=function(){return{type:q}},P=function(e){return{type:S,payload:e}},A=function(){return{type:T}};function D(e){return function(){var t=Object(k.a)(y.a.mark((function t(n){var c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(I()),t.prev=1,t.next=4,E.getAllQuestionsFromCategory(e);case 4:c=t.sent,n(P(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(A());case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}var R=Object(a.b)((function(e){return{loading:e.questions.loading,questions:e.questions.questions,hasErrors:e.questions.hasErrors}}))((function(e){var t=e.dispatch,n=e.loading,s=e.questions,r=e.hasErrors;Object(c.useEffect)((function(){t(D("solo"))}),[t]);return Object(O.jsxs)("div",{children:[n?Object(O.jsx)("p",{children:" Loading... "}):r?Object(O.jsx)("p",{children:" Error :( "}):Object(O.jsx)(p,{questions:s,isFavoritible:!1}),Object(O.jsx)(g,{})]})}));function U(e){var t,n,c;for(c=e.length-1;c>0;c--)t=Math.floor(Math.random()*(c+1)),n=e[c],e[c]=e[t],e[t]=n;return e}var F=n.p+"static/media/mode_deep.99593511.svg",M=n.p+"static/media/mode_icebreakers.00893723.svg",G=n.p+"static/media/mode_thisorthat.5347fd80.svg",W=Object(a.b)((function(e){return{loading:e.questions.loading,questions:e.questions.questions,hasErrors:e.questions.hasErrors}}))((function(e){var t=e.dispatch,n=e.loading,s=e.questions,r=e.hasErrors,a=e.mode;Object(c.useEffect)((function(){t(D(a))}),[t]);return Object(O.jsxs)("div",{children:[n?Object(O.jsx)("p",{children:" Loading... "}):r?Object(O.jsx)("p",{children:" Error :( "}):Object(O.jsx)(p,{questions:U(s),isFavoritible:!0}),function(){switch(a){case"deep":return Object(O.jsx)("img",{src:F,className:"modeicon"});case"icebreakers":return Object(O.jsx)("img",{src:M,className:"modeicon"});case"this-or-that":return Object(O.jsx)("img",{src:G,className:"modeicon"});default:return null}}(),Object(O.jsx)(g,{})]})})),J=function(e){var t=e.mode,n={color:"white",borderRadius:"10px",background:"linear-gradient(25deg, #292929, #3d3d3d)",padding:"20px 10px"},c={color:"white"},s={display:"flex",padding:"30px 10px"},r={color:"#e5e5e5",width:"15px"},a={color:"white",fontWeight:"600",padding:"0px 50px",justifyContent:"center",flexDirection:"column",display:"flex"},i={color:"white"};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"game__profile--container",children:[Object(O.jsx)("h1",{children:" My Profile "}),Object(O.jsxs)("div",{style:n,children:[Object(O.jsx)("h1",{style:c,children:" Favourites "}),"You have 15 favourited cards"]}),Object(O.jsx)("h1",{style:c,children:" Journey "}),Object(O.jsxs)("div",{style:n,children:[Object(O.jsxs)("div",{style:s,children:[Object(O.jsx)("span",{style:a,children:" 15 July "}),Object(O.jsxs)("span",{style:i,children:[Object(O.jsx)("strong",{children:" What is your favourite building? "})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Angkor Wat, located in northwest Cambodia, is the largest religious structure (temple complex) in the world by land area, measuring 162.6 hectares."]})]}),Object(O.jsx)("hr",{style:r}),Object(O.jsxs)("div",{style:s,children:[Object(O.jsx)("span",{style:a,children:" 19 July "}),Object(O.jsxs)("span",{style:i,children:[Object(O.jsx)("strong",{children:" What is your most loved story? "})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"According to a myth, the construction of Angkor Wat was ordered by Indra to serve as a palace for his son Precha Ket Mealea. According to the 13th-century Chinese traveller Zhou Daguan, some believed that the temple was constructed in a single night by a divine architect."]})]}),Object(O.jsx)("hr",{style:r}),Object(O.jsxs)("div",{style:s,children:[Object(O.jsx)("span",{style:a,children:" 23 July "}),Object(O.jsxs)("span",{style:i,children:[Object(O.jsx)("strong",{children:" What is a fact that more people should know? "})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"As with most other ancient temples in Cambodia, Angkor Wat has faced extensive damage and deterioration by a combination of plant overgrowth, fungi, ground movements, war damage and theft. The war damage to Angkor Wat's temples however has been very limited, compared to the rest of Cambodia's temple ruins, and it has also received the most attentive restoration."]})]})]})]}),Object(O.jsx)(g,{mode:t})]})},Q=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:" About "}),Object(O.jsxs)("p",{children:[" ",Object(O.jsx)("strong",{children:" SPARK "})," is an app for creating meaningful conversations. "]}),Object(O.jsxs)("p",{children:[" This app was created for Orbital 2021.  ",Object(O.jsx)("br",{}),"Images are from ",Object(O.jsx)("a",{className:"text__link",href:"https://unsplash.com",children:"Unsplash"}),", Icons from Noun Project, Icons8, Typicons. ",Object(O.jsx)("br",{}),"Check out our ",Object(O.jsx)("a",{className:"text__link",href:"https://sparkblog.netlify.app",children:"blog"})," and Github"]}),Object(O.jsx)("h1",{children:" Privacy "}),Object(O.jsx)("p",{children:"We believe that your self-reflection is most meaningful when it is private. That\u2019s why we do not store any of your data on any server, and there is no account system. Your responses in the Solo mode are only stored in your browser."}),Object(O.jsx)("div",{className:"menu__navigation--container",children:Object(O.jsx)(v,{})})]})},L=function(){return Object(O.jsx)("div",{className:"menu__sparklogo--container",children:Object(O.jsx)("img",{src:f,className:"site__sparklogo",alt:"SPARK logo"})})},B=n(226),K=Object(B.io)("https://sheltered-taiga-00354.herokuapp.com",{autoConnect:!1});K.onAny((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];console.log("Catch-all listener",e,n)}));var V=K,Y=(n(303),function(e){var t=e.setView,n=Object(c.useState)(""),s=Object(l.a)(n,2),r=s[0],a=s[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(L,{}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Join Room"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),V.emit("join",r,(function(e){var n=e.error;n?alert(n):(console.log("does it even get here?"),t("chat"))}))},children:[Object(O.jsx)("input",{autoFocus:!0,type:"text",placeholder:"Enter your room code",value:r,onChange:function(e){return a(e.target.value)}}),Object(O.jsx)("button",{type:"Submit",children:"Enter"})]})]}),Object(O.jsx)(v,{})]})}),z=n(240),Z=n(239),H=n.n(Z),X=function(e){var t=e.content;return Object(O.jsx)("div",{children:H.a.emojify(t)})},$=function(e){var t=e.messages;return Object(O.jsx)(z.a,{className:"online__messages",children:t.map((function(e,t){return Object(O.jsx)("div",{children:Object(O.jsx)(X,{content:e.content})},t)}))})},ee=function(e){var t=e.text,n=e.setText,c=e.sendMessage;return Object(O.jsxs)("form",{className:"online__chatForm",children:[Object(O.jsx)("input",{autoFocus:!0,className:"online__input",type:"text",placeholder:"Type a message",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?c(e):null}}),Object(O.jsx)("button",{className:"online__button",onClick:function(e){return c(e)},children:"Send"})]})},te=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),a=Object(l.a)(r,2),i=a[0],o=a[1];Object(c.useEffect)((function(){V.on("message",(function(e){o((function(t){return t.concat(e)}))}))}),[]);var j=Object(u.f)();return Object(O.jsxs)("div",{className:"online__chatContainer",children:[Object(O.jsx)("h1",{children:"Chat Room"}),Object(O.jsx)($,{messages:i}),Object(O.jsx)(ee,{text:n,setText:s,sendMessage:function(e){e.preventDefault(),n&&V.emit("private message",{content:n},(function(){return s("")}))}}),Object(O.jsx)(v,{action:function(){V.disconnect(),j.goBack()}})]})},ne=function(e){var t=e.code,n=e.setView;return Object(c.useEffect)((function(){V.on("joined",(function(){n("chat")}))})),Object(O.jsxs)("div",{children:[Object(O.jsx)(L,{}),Object(O.jsx)("h1",{children:"Create Room"}),Object(O.jsx)("div",{children:"Your room code is"}),t,Object(O.jsx)("div",{children:"The room will start once one other player joins"}),Object(O.jsx)(v,{})]})},ce=function(e){var t=e.page,n=Object(c.useState)("not working"),s=Object(l.a)(n,2),r=s[0],a=s[1],i=Object(c.useState)(t),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(c.useEffect)((function(){V.connect(),V.on("session",(function(e){var t=e.sessionID,n=e.userID;V.auth={sessionID:t},V.userID=n,a(V.userID)})),a(V.userID)}),[V]),"create"===j?Object(O.jsx)(ne,{code:r,setView:u}):"join"===j?Object(O.jsx)(Y,{setView:u}):"chat"===j?Object(O.jsx)(te,{}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:" Online Game "}),Object(O.jsx)("p",{children:" Choose between (1) Random (2) Create (3) Join. "}),Object(O.jsx)("p",{children:" Coming soon "}),Object(O.jsx)(v,{})]})},se=function(e){var t=e.title,n=e.subtitle;return Object(O.jsxs)("div",{className:"menu__linkbutton",children:[Object(O.jsxs)("span",{className:"menu__linkbutton--title",children:[" ",t," "]})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("span",{className:"menu__linkbutton--subtitle",children:[" ",n," "]})]})},re=function(e){var t=e.setPage,n=e.setMode,s=Object(c.useState)("home"),r=Object(l.a)(s,2),a=r[0],i=r[1];switch(a){case"select-room":return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"menu__router--container",children:[Object(O.jsx)(j.b,{to:"/online",onClick:function(){t("create")},children:Object(O.jsx)(se,{title:"Create",subtitle:"Click here to get your own unique room code"},"Create")}),Object(O.jsx)(j.b,{to:"/online",onClick:function(){t("join")},children:Object(O.jsx)(se,{title:"Join",subtitle:"Click here to join an existing room"},"Join")}),Object(O.jsx)(j.b,{to:"/online",onClick:function(){t("online")},children:Object(O.jsx)(se,{title:"Random",subtitle:"Click here to join a random room"},"Random")}),Object(O.jsx)(j.b,{to:"/chat",onClick:function(){t("chat")},children:Object(O.jsx)(se,{title:"Chat",subtitle:"This is for testing the chat app"},"Chat")})]}),Object(O.jsx)("div",{className:"menu__navigation--container",children:Object(O.jsx)(v,{action:function(){return i("player")}})})]});case"mode":return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"menu__router--container",children:[Object(O.jsxs)(j.b,{to:"/game",onClick:function(){t("game"),n("icebreakers")},children:[" ",Object(O.jsx)(se,{title:"Icebreakers",subtitle:"Get to know anyone!"},"Icebreakers")," "]}),Object(O.jsxs)(j.b,{to:"/game",onClick:function(){t("game"),n("deep")},children:[" ",Object(O.jsx)(se,{title:"Deep Questions",subtitle:"Go deep!"},"Deep")," "]}),Object(O.jsxs)(j.b,{to:"/game",onClick:function(){t("game"),n("this-or-that")},children:[" ",Object(O.jsx)(se,{title:"This or That",subtitle:"Which will you choose?"},"ThisOrThat")," "]}),Object(O.jsxs)(j.b,{to:"/picture",onClick:function(){return t("picture")},children:[" ",Object(O.jsx)(se,{title:"Picture",subtitle:"Testing Picture API"},"Picture")," "]})]}),Object(O.jsx)("div",{className:"menu__navigation--container",children:Object(O.jsx)(v,{action:function(){return i("player")}})})]});case"player":return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"menu__router--container",children:[Object(O.jsxs)(j.b,{to:"/solo",onClick:function(){t("solo"),n("solo")},children:[" ",Object(O.jsx)(se,{title:"Solo",subtitle:"Self journey"},"Solo")," "]}),Object(O.jsxs)(j.b,{to:"/",onClick:function(){return i("mode")},children:[" ",Object(O.jsx)(se,{title:"Group",subtitle:"Group fun!"},"Group")," "]}),Object(O.jsxs)(j.b,{to:"/",onClick:function(){return i("select-room")},children:[" ",Object(O.jsx)(se,{title:"Online",subtitle:"Play with friends or strangers!"},"Online")," "]})]}),Object(O.jsx)("div",{className:"menu__navigation--container",children:Object(O.jsx)(v,{action:function(){return i("home")}})})]});default:return Object(O.jsxs)("div",{className:"menu__router--container",children:[Object(O.jsxs)(j.b,{to:"/",onClick:function(){return i("player")},children:[" ",Object(O.jsx)(se,{title:"Play",subtitle:"Spark meaningful conversations"},"Play")," "]}),Object(O.jsxs)(j.b,{to:"/profile",onClick:function(){t("profile"),n("profile")},children:[" ",Object(O.jsx)(se,{title:"Profile",subtitle:"Your profile"},"Profile")," "]}),Object(O.jsxs)(j.b,{to:"/about",onClick:function(){return t("about")},children:[" ",Object(O.jsx)(se,{title:"About"},"About")," "]})]})}},ae=function(e){var t=e.data,n=e.question||"";return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{style:{marginBottom:"20px"},children:Object(O.jsxs)("p",{className:"card__picture--question",children:[" ",n," "]})}),0===Object.keys(t).length?null:Object(O.jsxs)("div",{className:"game__picture",children:[Object(O.jsxs)("a",{href:"".concat(t.links.html,"?utm_source=spark&utm_medium=referral"),target:"_blank",rel:"noreferrer",className:"card__picture",children:[Object(O.jsx)("img",{src:t.urls.small,alt:t.alt_description,className:"card__picture--thumb"}),Object(O.jsxs)("span",{children:[" ",Object(O.jsx)("img",{src:t.urls.regular,alt:t.alt_description,className:"card__picture--full"})," "]})]}),Object(O.jsxs)("p",{children:[" Picture by\xa0",Object(O.jsx)("a",{href:t.links.html,className:"link",children:t.user.name})," from\xa0",Object(O.jsx)("a",{href:"https://unsplash.com",className:"link",children:"Unsplash"})]})]})]})},ie={getPictureFromUnsplash:function(){var e=Object(k.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat("/api/pictures","/random"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},oe="GET_PICTURE",le="GET_PICTURE_SUCCESS",je="GET_PICTURE_FAILURE";function ue(){return function(){var e=Object(k.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:oe}),e.prev=1,e.next=4,ie.getPictureFromUnsplash();case 4:n=e.sent,t({type:le,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:je});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}var be=Object(a.b)((function(e){return{loading:e.pictures.loading,pictures:e.pictures.pictures,hasErrors:e.pictures.hasErrors}}))((function(e){var t=e.dispatch,n=e.loading,s=e.pictures,r=e.hasErrors;Object(c.useEffect)((function(){t(ue())}),[t]);return Object(O.jsxs)("div",{className:"game__picture-page",children:[Object(O.jsx)("div",{children:n?Object(O.jsx)("p",{children:" Loading... "}):r?Object(O.jsx)("p",{children:" Error :( "}):Object(O.jsx)(ae,{data:s,question:"What is a memory that this picture triggers?"},s.id)}),Object(O.jsx)("div",{onClick:function(){return t(ue())},className:"game__shuffle--btn",children:Object(O.jsx)(se,{title:"shuffle"})}),Object(O.jsx)(v,{})]})})),de=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),a=Object(l.a)(r,2),i=a[0],o=a[1];Object(c.useEffect)((function(){V.connect(),V.on("session",(function(e){var t=e.sessionID,n=e.userID;V.auth={sessionID:t},V.userID=n})),setTimeout((function(){return V.emit("join",V.userID,(function(e){var t=e.error;alert(t)}))}),1e3)}),[V]),Object(c.useEffect)((function(){V.on("message",(function(e){o((function(t){return t.concat(e)}))}))}),[]);var j=Object(u.f)();return Object(O.jsxs)("div",{className:"online__chatContainer",children:[Object(O.jsx)("h1",{children:"This is to test the chat function"}),Object(O.jsx)($,{messages:i}),Object(O.jsx)(ee,{text:n,setText:s,sendMessage:function(e){e.preventDefault(),n&&V.emit("private message",{content:n},(function(){return s("")}))}}),Object(O.jsx)(v,{action:function(){V.disconnect(),j.goBack()}})]})},he=function(){var e=Object(c.useState)("home"),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)("none"),a=Object(l.a)(r,2),i=a[0],o=a[1];return Object(O.jsx)(j.a,{children:Object(O.jsx)("div",{className:"site__container",children:Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/chat",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(de,{})})}),Object(O.jsx)(u.a,{path:"/online",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(ce,{page:n})})}),Object(O.jsx)(u.a,{path:"/picture",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(be,{})})}),Object(O.jsx)(u.a,{path:"/game",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(W,{mode:i})})}),Object(O.jsx)(u.a,{path:"/solo",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(R,{})})}),Object(O.jsx)(u.a,{path:"/about",children:Object(O.jsx)("div",{className:"menu__content--container",children:Object(O.jsxs)("div",{className:"menu__content--data",children:[Object(O.jsx)(L,{}),Object(O.jsx)(Q,{})]})})}),Object(O.jsx)(u.a,{path:"/profile",children:Object(O.jsx)("div",{className:"menu__content--container",children:Object(O.jsx)("div",{className:"menu__content--data",children:Object(O.jsx)(J,{mode:i})})})}),Object(O.jsx)(u.a,{path:"/",children:Object(O.jsx)("div",{className:"menu__content--container",children:Object(O.jsxs)("div",{className:"menu__content--data",children:[Object(O.jsx)(L,{}),Object(O.jsx)(re,{setPage:function(e){s(e)},setMode:o})]})})})]})})})},Oe=n(36),xe={pictures:{},loading:!1,hasErrors:!1};var me={questions:[],loading:!1,hasErrors:!1};var pe=Object(r.combineReducers)({pictures:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(Oe.a)(Object(Oe.a)({},e),{},{loading:!0});case le:return{pictures:t.payload,loading:!1,hasErrors:!1};case je:return Object(Oe.a)(Object(Oe.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(Oe.a)(Object(Oe.a)({},e),{},{loading:!0});case S:return{questions:t.payload,loading:!1,hasErrors:!1};case T:return Object(Oe.a)(Object(Oe.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}}}),fe=Object(r.createStore)(pe,Object(o.composeWithDevTools)(Object(r.applyMiddleware)(i.a)));Object(s.render)(Object(O.jsx)(a.a,{store:fe,children:Object(O.jsx)(he,{})}),document.getElementById("root"))}},[[505,1,2]]]);
//# sourceMappingURL=main.571fe9ca.chunk.js.map