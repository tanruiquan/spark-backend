(this.webpackJsonpspark=this.webpackJsonpspark||[]).push([[0],{42:function(e,t,n){},420:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(82),r=n(51),a=n(40),i=n(192),o=n(193),l=(n(42),n(7)),u=n(6),j=n(9),b=n(63),d=n(194),h=n(84),O=n(0),m=function(e){var t=e.data,n=e.isFavoritible,c=void 0===n||n,s=["game__question-card--yellow","game__question-card--magenta","game__question-card--cyan"];return Object(O.jsx)("div",{className:"game__question-card--content-container",children:0===Object.keys(t).length?null:Object(O.jsxs)("div",{className:"game__question-card ".concat(s[Math.floor(3*Math.random())]),children:[Object(O.jsxs)("p",{className:"game__question-card--title",children:[" ",t.question," "]}),c?Object(O.jsxs)("div",{className:"game__question-card--icons-container",children:[Object(O.jsx)(b.a,{icon:d.a,className:"game__question-card--icon",size:"3x",onMouseUp:function(){return alert("fav"+t.question)},onTouchEnd:function(){return alert("fav")}}),Object(O.jsx)(b.a,{icon:h.b,className:"game__question-card--icon",size:"3x",onMouseUp:function(){return alert("share"+t.question)},onTouchEnd:function(){return alert("share")}})]}):Object(O.jsx)("p",{children:" "})]})})},x=n(121),f=function(e){var t=e.questions,n=e.isFavoritible,s=Object(c.useState)([]),r=Object(l.a)(s,2),a=r[0],i=r[1],o=Object(c.useState)(0),u=Object(l.a)(o,2),j=u[0],b=u[1];Object(c.useEffect)((function(){i(t.slice(0,5)),d()}),[]);var d=function(){b(j+1),i(t.slice(j,j+5))},h={background:"transparent",border:"none",overflow:"visible",height:"auto",maxWidth:"800px"};return Object(O.jsx)(x.b,{className:"game__question-card--container",children:a.map((function(e){return Object(O.jsx)(x.a,{onSwipe:d,style:h,children:Object(O.jsx)(m,{data:e,isFavoritible:n})},e.id)}))})},p=n.p+"static/media/Logo_conversations.0a7776b0.svg",g=function(e){var t=e.action,n=Object(j.f)(),c=void 0===t?function(){n.goBack()}:t;return Object(O.jsxs)("div",{className:"menu__linkbutton--back",onClick:c,children:[Object(O.jsx)(b.a,{icon:h.a})," back"]})},v=function(e){var t="profile"===e.mode?"profile":"game";return Object(O.jsxs)("div",{className:"navbar ".concat(t,"__navbar"),children:[Object(O.jsxs)("div",{className:"game__navbar--back",children:[" ",Object(O.jsx)(g,{})," "]}),Object(O.jsx)("img",{src:p,className:"site__sparklogo game__navbar--logo",alt:"SPARK logo"})]})},_=n(11),y=n.n(_),k=n(24),N=n(44),w=n(41),C=n.n(w);function E(e){var t,n,c;for(c=e.length-1;c>0;c--)t=Math.floor(Math.random()*(c+1)),n=e[c],e[c]=e[t],e[t]=n;return e}var q="/api/questions",S={getAllQuestions:function(){var e=Object(k.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(q);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAllQuestionsFromCategory:function(){var e=Object(k.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(q+"/"+t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getQuestionsFromCategory:function(){var e=Object(k.a)(y.a.mark((function e(t){var n,c,s,r,a,i,o,l,u,j,b,d,h,O,m=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("".concat(q,"/").concat(t,"/1"));case 2:return n=e.sent,e.next=5,C.a.get("".concat(q,"/").concat(t,"/2"));case 5:return c=e.sent,e.next=8,C.a.get("".concat(q,"/").concat(t,"/3"));case 8:for(s=e.sent,r=[],a=m.length,i=new Array(a>1?a-1:0),o=1;o<a;o++)i[o-1]=m[o];return l=[].concat(i),u=l[0],j=l[1],b=l[2],u&&(d=E(n.data).slice(0,u),r=[].concat(Object(N.a)(r),Object(N.a)(d))),j&&(h=E(c.data).slice(0,j),r=[].concat(Object(N.a)(r),Object(N.a)(h))),b&&(O=E(s.data).slice(0,b),r=[].concat(Object(N.a)(r),Object(N.a)(O))),e.abrupt("return",r);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T="GET_QUESTION",I="GET_QUESTION_SUCCESS",P="GET_QUESTION_FAILURE",A=function(){return{type:T}},D=function(e){return{type:I,payload:e}},F=function(){return{type:P}};function R(e){return function(){var t=Object(k.a)(y.a.mark((function t(n){var c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(A()),t.prev=1,t.next=4,S.getAllQuestionsFromCategory(e);case 4:c=t.sent,n(D(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(F());case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}var U=Object(a.b)((function(e){return{loading:e.questions.loading,questions:e.questions.questions,hasErrors:e.questions.hasErrors}}))((function(e){var t=e.dispatch,n=e.loading,s=e.questions,r=e.hasErrors;Object(c.useEffect)((function(){t(R("solo"))}),[t]);return Object(O.jsxs)("div",{children:[n?Object(O.jsx)("p",{children:" Loading... "}):r?Object(O.jsx)("p",{children:" Error :( "}):Object(O.jsx)(f,{questions:s,isFavoritible:!1}),Object(O.jsx)(v,{})]})})),W=n.p+"static/media/mode_deep.99593511.svg",M=n.p+"static/media/mode_icebreakers.00893723.svg",Q=n.p+"static/media/mode_thisorthat.5347fd80.svg",G=Object(a.b)((function(e){return{loading:e.questions.loading,questions:e.questions.questions,hasErrors:e.questions.hasErrors}}))((function(e){var t=e.dispatch,n=e.loading,s=e.questions,r=e.hasErrors,a=e.mode;Object(c.useEffect)((function(){t(R(a))}),[t]);return Object(O.jsxs)("div",{children:[n?Object(O.jsx)("p",{children:" Loading... "}):r?Object(O.jsx)("p",{children:" Error :( "}):Object(O.jsx)(f,{questions:E(s),isFavoritible:!0}),function(){switch(a){case"deep":return Object(O.jsx)("img",{src:W,className:"modeicon"});case"icebreakers":return Object(O.jsx)("img",{src:M,className:"modeicon"});case"this-or-that":return Object(O.jsx)("img",{src:Q,className:"modeicon"});default:return null}}(),Object(O.jsx)(v,{})]})})),J=function(e){var t=e.mode,n={color:"white",borderRadius:"10px",background:"linear-gradient(25deg, #292929, #3d3d3d)",padding:"20px 10px"},c={color:"white"},s={display:"flex",padding:"30px 10px"},r={color:"#e5e5e5",width:"15px"},a={color:"white",fontWeight:"600",padding:"0px 50px",justifyContent:"center",flexDirection:"column",display:"flex"},i={color:"white"};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"game__profile--container",children:[Object(O.jsx)("h1",{children:" My Profile "}),Object(O.jsxs)("div",{style:n,children:[Object(O.jsx)("h1",{style:c,children:" Favourites "}),"You have 15 favourited cards"]}),Object(O.jsx)("h1",{style:c,children:" Journey "}),Object(O.jsxs)("div",{style:n,children:[Object(O.jsxs)("div",{style:s,children:[Object(O.jsx)("span",{style:a,children:" 15 July "}),Object(O.jsxs)("span",{style:i,children:[Object(O.jsx)("strong",{children:" What is your favourite building? "})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Angkor Wat, located in northwest Cambodia, is the largest religious structure (temple complex) in the world by land area, measuring 162.6 hectares."]})]}),Object(O.jsx)("hr",{style:r}),Object(O.jsxs)("div",{style:s,children:[Object(O.jsx)("span",{style:a,children:" 19 July "}),Object(O.jsxs)("span",{style:i,children:[Object(O.jsx)("strong",{children:" What is your most loved story? "})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"According to a myth, the construction of Angkor Wat was ordered by Indra to serve as a palace for his son Precha Ket Mealea. According to the 13th-century Chinese traveller Zhou Daguan, some believed that the temple was constructed in a single night by a divine architect."]})]}),Object(O.jsx)("hr",{style:r}),Object(O.jsxs)("div",{style:s,children:[Object(O.jsx)("span",{style:a,children:" 23 July "}),Object(O.jsxs)("span",{style:i,children:[Object(O.jsx)("strong",{children:" What is a fact that more people should know? "})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"As with most other ancient temples in Cambodia, Angkor Wat has faced extensive damage and deterioration by a combination of plant overgrowth, fungi, ground movements, war damage and theft. The war damage to Angkor Wat's temples however has been very limited, compared to the rest of Cambodia's temple ruins, and it has also received the most attentive restoration."]})]})]})]}),Object(O.jsx)(v,{mode:t})]})},L=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:" About "}),Object(O.jsxs)("p",{children:[" ",Object(O.jsx)("strong",{children:" SPARK "})," is an app for creating meaningful conversations. "]}),Object(O.jsxs)("p",{children:[" This app was created for Orbital 2021.  ",Object(O.jsx)("br",{}),"Images are from ",Object(O.jsx)("a",{className:"text__link",href:"https://unsplash.com",children:"Unsplash"}),", Icons from Noun Project, Icons8, Typicons. ",Object(O.jsx)("br",{}),"Check out our ",Object(O.jsx)("a",{className:"text__link",href:"https://sparkblog.netlify.app",children:"blog"})," and Github"]}),Object(O.jsx)("h1",{children:" Privacy "}),Object(O.jsx)("p",{children:"We believe that your self-reflection is most meaningful when it is private. That\u2019s why we do not store any of your data on any server, and there is no account system. Your responses in the Solo mode are only stored in your browser."}),Object(O.jsx)("div",{className:"menu__navigation--container",children:Object(O.jsx)(g,{})})]})},H=n(195),K=Object(H.io)({autoConnect:!1});K.onAny((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];console.log("Catch-all listener",e,n)}));var Y=K,B=n(209),z=n(208),Z=n.n(z),V=function(e){var t=e.content;return Object(O.jsx)("div",{children:Z.a.emojify(t)})},X=function(e){var t=e.messages;return Object(O.jsx)(B.a,{className:"online__messages",children:t.map((function(e,t){return Object(O.jsx)("div",{children:Object(O.jsx)(V,{content:e.content})},t)}))})},$=function(e){var t=e.text,n=e.setText,c=e.sendMessage;return Object(O.jsxs)("form",{className:"online__chatForm",children:[Object(O.jsx)("input",{autoFocus:!0,className:"online__input",type:"text",placeholder:"Type a message",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?c(e):null}}),Object(O.jsx)("button",{className:"online__button",onClick:function(e){return c(e)},children:"Send"})]})},ee=function(e){var t=e.mode,n=e.setQuestions,s=Object(c.useState)(""),r=Object(l.a)(s,2),a=r[0],i=r[1],o=Object(c.useState)([]),u=Object(l.a)(o,2),b=u[0],d=u[1],h=Object(j.g)().roomCode,m=Object(j.f)();window.onbeforeunload=function(){Y.emit("leave")},window.onload=function(){m.push("/")},Object(c.useEffect)((function(){var e=sessionStorage.getItem("userID");return e&&(Y.auth={userID:e}),Y.connect(),Y.emit("join",h),Y.isHost?S.getQuestionsFromCategory(t,5,4,1).then((function(e){n(e),Y.emit("setQuestions",e)})):Y.on("setQuestions",(function(e){n(e)})),Y.on("session",(function(e){var t=e.userID;Y.auth={userID:t},Y.userID=t})),Y.on("message",(function(e){d((function(t){return t.concat(e)}))})),function(){Y.auth=null,Y.isHost=!1,Y.emit("leave"),Y.off(),m.push("/")}}),[Y]);return Object(O.jsxs)("div",{className:"online__chatContainer",children:[Object(O.jsx)("h1",{children:"Chat Room"}),Object(O.jsx)(X,{messages:b}),Object(O.jsx)($,{text:a,setText:i,sendMessage:function(e){e.preventDefault(),a&&Y.emit("private message",{content:a},(function(){return i("")}))}}),Object(O.jsx)(g,{action:function(){window.confirm("You will not be able to come back, are you sure?")&&(Y.auth=null,Y.isHost=!1,Y.emit("leave"),Y.off(),m.push("/"))}})]})},te=function(e){var t=e.mode,n=Object(c.useState)(""),s=Object(l.a)(n,2),r=s[0],a=s[1],i=Object(c.useState)([]),o=Object(l.a)(i,2),u=o[0],j=o[1],b=Object(c.useState)(0),d=Object(l.a)(b,2),h=d[0],m=d[1];Object(c.useEffect)((function(){0===u.length?a("loading"):h>=u.length?a("no more question"):a(u[h].question)}),[u,h]),Object(c.useEffect)((function(){Y.on("next",(function(){m((function(e){return e+1}))}))}),[]);return Object(O.jsxs)("div",{className:"online__container",children:[r,Object(O.jsx)("button",{onClick:function(){Y.emit("nextQuestion")},children:"Next"}),Object(O.jsx)(ee,{mode:t,setQuestions:j})]})},ne=function(){return Object(O.jsx)("div",{className:"menu__sparklogo--container",children:Object(O.jsx)("img",{src:p,className:"site__sparklogo",alt:"SPARK logo"})})},ce=function(e){var t=e.title,n=e.subtitle;return Object(O.jsxs)("div",{className:"menu__linkbutton",children:[Object(O.jsxs)("span",{className:"menu__linkbutton--title",children:[" ",t," "]})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("span",{className:"menu__linkbutton--subtitle",children:[" ",n," "]})]})},se=function(e){var t=e.setPage,n=e.setMode,s=Object(c.useState)("home"),r=Object(l.a)(s,2),a=r[0],i=r[1];switch(a){case"online":return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"menu__router--container",children:[Object(O.jsx)(u.b,{to:"/create",onClick:function(){t("create"),n("online-room")},children:Object(O.jsx)(ce,{title:"Create",subtitle:"Click here to get your own unique room code"},"Create")}),Object(O.jsx)(u.b,{to:"/join",onClick:function(){t("join"),n("online-room")},children:Object(O.jsx)(ce,{title:"Join",subtitle:"Click here to join an existing room"},"Join")}),Object(O.jsx)(u.b,{to:"/random",onClick:function(){t("random"),n("online-stranger")},children:Object(O.jsx)(ce,{title:"Random",subtitle:"Click here to join a random room"},"Random")}),Object(O.jsx)(u.b,{to:"/chat",onClick:function(){t("chat")},children:Object(O.jsx)(ce,{title:"Chat",subtitle:"This is for testing the chat app"},"Chat")})]}),Object(O.jsx)("div",{className:"menu__navigation--container",children:Object(O.jsx)(g,{action:function(){return i("player")}})})]});case"mode":return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"menu__router--container",children:[Object(O.jsxs)(u.b,{to:"/game",onClick:function(){t("game"),n("icebreakers")},children:[" ",Object(O.jsx)(ce,{title:"Icebreakers",subtitle:"Get to know anyone!"},"Icebreakers")," "]}),Object(O.jsxs)(u.b,{to:"/game",onClick:function(){t("game"),n("deep")},children:[" ",Object(O.jsx)(ce,{title:"Deep Questions",subtitle:"Go deep!"},"Deep")," "]}),Object(O.jsxs)(u.b,{to:"/game",onClick:function(){t("game"),n("this-or-that")},children:[" ",Object(O.jsx)(ce,{title:"This or That",subtitle:"Which will you choose?"},"ThisOrThat")," "]}),Object(O.jsxs)(u.b,{to:"/picture",onClick:function(){return t("picture")},children:[" ",Object(O.jsx)(ce,{title:"Picture",subtitle:"Testing Picture API"},"Picture")," "]})]}),Object(O.jsx)("div",{className:"menu__navigation--container",children:Object(O.jsx)(g,{action:function(){return i("player")}})})]});case"player":return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"menu__router--container",children:[Object(O.jsxs)(u.b,{to:"/solo",onClick:function(){t("solo"),n("solo")},children:[" ",Object(O.jsx)(ce,{title:"Solo",subtitle:"Self journey"},"Solo")," "]}),Object(O.jsxs)(u.b,{to:"/",onClick:function(){return i("mode")},children:[" ",Object(O.jsx)(ce,{title:"Group",subtitle:"Group fun!"},"Group")," "]}),Object(O.jsxs)(u.b,{to:"/",onClick:function(){return i("online")},children:[" ",Object(O.jsx)(ce,{title:"Online",subtitle:"Play with friends or strangers!"},"Online")," "]})]}),Object(O.jsx)("div",{className:"menu__navigation--container",children:Object(O.jsx)(g,{action:function(){return i("home")}})})]});default:return Object(O.jsxs)("div",{className:"menu__router--container",children:[Object(O.jsxs)(u.b,{to:"/",onClick:function(){return i("player")},children:[" ",Object(O.jsx)(ce,{title:"Play",subtitle:"Spark meaningful conversations"},"Play")," "]}),Object(O.jsxs)(u.b,{to:"/profile",onClick:function(){t("profile"),n("profile")},children:[" ",Object(O.jsx)(ce,{title:"Profile",subtitle:"Your profile"},"Profile")," "]}),Object(O.jsxs)(u.b,{to:"/about",onClick:function(){return t("about")},children:[" ",Object(O.jsx)(ce,{title:"About"},"About")," "]})]})}},re=function(e){var t=e.data,n=e.question||"";return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{style:{marginBottom:"20px"},children:Object(O.jsxs)("p",{className:"card__picture--question",children:[" ",n," "]})}),0===Object.keys(t).length?null:Object(O.jsxs)("div",{className:"game__picture",children:[Object(O.jsxs)("a",{href:"".concat(t.links.html,"?utm_source=spark&utm_medium=referral"),target:"_blank",rel:"noreferrer",className:"card__picture",children:[Object(O.jsx)("img",{src:t.urls.small,alt:t.alt_description,className:"card__picture--thumb"}),Object(O.jsxs)("span",{children:[" ",Object(O.jsx)("img",{src:t.urls.regular,alt:t.alt_description,className:"card__picture--full"})," "]})]}),Object(O.jsxs)("p",{children:[" Picture by\xa0",Object(O.jsx)("a",{href:t.links.html,className:"link",children:t.user.name})," from\xa0",Object(O.jsx)("a",{href:"https://unsplash.com",className:"link",children:"Unsplash"})]})]})]})},ae={getPictureFromUnsplash:function(){var e=Object(k.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("".concat("/api/pictures","/random"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},ie="GET_PICTURE",oe="GET_PICTURE_SUCCESS",le="GET_PICTURE_FAILURE";function ue(){return function(){var e=Object(k.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:ie}),e.prev=1,e.next=4,ae.getPictureFromUnsplash();case 4:n=e.sent,t({type:oe,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:le});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}var je=Object(a.b)((function(e){return{loading:e.pictures.loading,pictures:e.pictures.pictures,hasErrors:e.pictures.hasErrors}}))((function(e){var t=e.dispatch,n=e.loading,s=e.pictures,r=e.hasErrors;Object(c.useEffect)((function(){t(ue())}),[t]);return Object(O.jsxs)("div",{className:"game__picture-page",children:[Object(O.jsx)("div",{children:n?Object(O.jsx)("p",{children:" Loading... "}):r?Object(O.jsx)("p",{children:" Error :( "}):Object(O.jsx)(re,{data:s,question:"What is a memory that this picture triggers?"},s.id)}),Object(O.jsx)("div",{onClick:function(){return t(ue())},className:"game__shuffle--btn",children:Object(O.jsx)(ce,{title:"shuffle"})}),Object(O.jsx)(g,{})]})})),be=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)([]),a=Object(l.a)(r,2),i=a[0],o=a[1],u=Object(j.f)();Object(c.useEffect)((function(){return window.onbeforeunload=function(){Y.auth=null,Y.emit("leave"),Y.off(),Y.disconnect()},Y.connect(),Y.on("session",(function(e){var t=e.sessionID,n=e.userID;Y.auth={sessionID:t},Y.userID=n})),Y.emit("join","room"),Y.on("message",(function(e){o((function(t){return t.concat(e)}))})),function(){Y.off(),Y.disconnect(),u.push("/")}}),[Y]);return Object(O.jsx)("div",{className:"online__container",children:Object(O.jsxs)("div",{className:"online__chatContainer",children:[Object(O.jsx)("h1",{children:"This is to test the chat function"}),Object(O.jsx)("div",{children:"Everyone that enters this chat gets push into the same room"}),Object(O.jsx)(X,{messages:i}),Object(O.jsx)($,{text:n,setText:s,sendMessage:function(e){e.preventDefault(),n&&Y.emit("private message",{content:n},(function(){return s("")}))}}),Object(O.jsx)(g,{action:function(){Y.auth=null,Y.emit("leave"),Y.off(),Y.disconnect(),u.push("/")}})]})})},de=function(e){var t=e.handleEnterClick,n=e.inputCode,c=e.handleCodeChange;return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:t,children:[Object(O.jsx)("input",{autoFocus:!0,type:"text",placeholder:"Enter your room code",value:n,onChange:c}),Object(O.jsx)("button",{type:"Submit",children:"Enter"})]})})},he=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(j.f)();Object(c.useEffect)((function(){Y.connect()}),[]);return Object(O.jsxs)("div",{className:"online__join-page",children:[Object(O.jsx)(ne,{}),Object(O.jsx)("h1",{children:"Join Room"}),Object(O.jsx)(de,{handleEnterClick:function(e){e.preventDefault(),Y.emit("joining",n,(function(e){var t=e.error;t?alert(t):r.push("/online/".concat(n))}))},inputCode:n,handleCodeChange:function(e){return s(e.target.value)}}),Object(O.jsx)(g,{})]})},Oe=function(){var e=Object(c.useState)("loading..."),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(j.f)();return Object(c.useEffect)((function(){Y.connect(),Y.emit("create"),Y.once("create",(function(e){s(e)})),Y.once("joining",(function(e){Y.isHost=!0,r.push("/online/".concat(e))}))}),[]),Object(O.jsxs)("div",{className:"online__create-page",children:[Object(O.jsx)(ne,{}),Object(O.jsx)("h1",{children:"Create Room"}),"Your room code is",Object(O.jsx)("h1",{children:n}),"or copy this URL ",Object(O.jsx)("em",{children:"".concat("https://sprkprod-ruiquan.herokuapp.com","/online/").concat(n)}),Object(O.jsx)("h5",{children:"The room will start once one other player joins"}),Object(O.jsx)(g,{})]})},me=function(){var e=Object(j.f)();window.onbeforeunload=function(){Y.emit("leaveWaiting")},Object(c.useEffect)((function(){return Y.connect(),Y.emit("waiting",null,(function(t){t&&(Y.isHost=!0,e.push("/online/".concat(t)))})),Y.once("joining",(function(t){e.push("/online/".concat(t))})),function(){Y.emit("leaveWaiting")}}),[]);return Object(O.jsxs)("div",{className:"online__waiting-page",children:[Object(O.jsx)(ne,{}),Object(O.jsx)("h1",{children:"Waiting Room"}),Object(O.jsx)("h5",{children:"The room will start once one other player joins"}),Object(O.jsx)(g,{action:function(){Y.emit("leaveWaiting"),e.goBack()}})]})},xe=function(){var e=Object(c.useState)("home"),t=Object(l.a)(e,2),n=(t[0],t[1]),s=Object(c.useState)("none"),r=Object(l.a)(s,2),a=r[0],i=r[1];return Object(O.jsx)(u.a,{children:Object(O.jsx)("div",{className:"site__container",children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{path:"/online/:roomCode",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(te,{mode:a})})}),Object(O.jsx)(j.a,{path:"/random",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(me,{})})}),Object(O.jsx)(j.a,{path:"/join",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(he,{})})}),Object(O.jsx)(j.a,{path:"/create",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(Oe,{})})}),Object(O.jsx)(j.a,{path:"/chat",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(be,{})})}),Object(O.jsx)(j.a,{path:"/picture",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(je,{})})}),Object(O.jsx)(j.a,{path:"/game",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(G,{mode:a})})}),Object(O.jsx)(j.a,{path:"/solo",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(U,{})})}),Object(O.jsx)(j.a,{path:"/about",children:Object(O.jsx)("div",{className:"menu__content--container",children:Object(O.jsxs)("div",{className:"menu__content--data",children:[Object(O.jsx)(ne,{}),Object(O.jsx)(L,{})]})})}),Object(O.jsx)(j.a,{path:"/profile",children:Object(O.jsx)("div",{className:"menu__content--container",children:Object(O.jsx)("div",{className:"menu__content--data",children:Object(O.jsx)(J,{mode:a})})})}),Object(O.jsx)(j.a,{path:"/",children:Object(O.jsx)("div",{className:"menu__content--container",children:Object(O.jsxs)("div",{className:"menu__content--data",children:[Object(O.jsx)(ne,{}),Object(O.jsx)(se,{setPage:function(e){n(e)},setMode:i})]})})})]})})})},fe=n(32),pe={pictures:{},loading:!1,hasErrors:!1};var ge={questions:[],loading:!1,hasErrors:!1};var ve=Object(r.combineReducers)({pictures:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:return Object(fe.a)(Object(fe.a)({},e),{},{loading:!0});case oe:return{pictures:t.payload,loading:!1,hasErrors:!1};case le:return Object(fe.a)(Object(fe.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(fe.a)(Object(fe.a)({},e),{},{loading:!0});case I:return{questions:t.payload,loading:!1,hasErrors:!1};case P:return Object(fe.a)(Object(fe.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}}}),_e=Object(r.createStore)(ve,Object(o.composeWithDevTools)(Object(r.applyMiddleware)(i.a)));Object(s.render)(Object(O.jsx)(a.a,{store:_e,children:Object(O.jsx)(xe,{})}),document.getElementById("root"))}},[[420,1,2]]]);
//# sourceMappingURL=main.23aa0fa0.chunk.js.map