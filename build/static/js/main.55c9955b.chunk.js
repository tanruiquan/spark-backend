(this.webpackJsonpspark=this.webpackJsonpspark||[]).push([[0],{16:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(23),r=n(17),a=n(14),i=n(40),o=n(41),l=(n(16),n(15)),j=n(7),u=n(4),d=n(19),b=n(42),h=n(24),O=n(0),p=function(e){var t=e.data,n=e.isFavoritible,s=void 0===n||n,c=["game__question-card--yellow","game__question-card--magenta","game__question-card--cyan"];return Object(O.jsx)("div",{className:"game__question-card--content-container",children:0===Object.keys(t).length?null:Object(O.jsxs)("div",{className:"game__question-card ".concat(c[Math.floor(3*Math.random())]),children:[Object(O.jsxs)("p",{className:"game__question-card--title",children:[" ",t.question," "]}),s?Object(O.jsxs)("div",{className:"game__question-card--icons-container",children:[Object(O.jsx)(d.a,{icon:b.a,className:"game__question-card--icon",size:"3x",onMouseUp:function(){return alert("fav"+t.question)},onTouchEnd:function(){return alert("fav")}}),Object(O.jsx)(d.a,{icon:h.b,className:"game__question-card--icon",size:"3x",onMouseUp:function(){return alert("share"+t.question)},onTouchEnd:function(){return alert("share")}})]}):Object(O.jsx)("p",{children:" "})]})})},m=n(28),x=function(e){var t=e.questions,n=e.isFavoritible,c=Object(s.useState)([]),r=Object(l.a)(c,2),a=r[0],i=r[1],o=Object(s.useState)(0),j=Object(l.a)(o,2),u=j[0],d=j[1];Object(s.useEffect)((function(){i(t.slice(0,5)),b()}),[]);var b=function(){d(u+1),i(t.slice(u,u+5))},h={background:"transparent",border:"none",overflow:"visible",height:"auto",maxWidth:"800px"};return Object(O.jsx)(m.b,{className:"game__question-card--container",children:a.map((function(e){return Object(O.jsx)(m.a,{onSwipe:b,style:h,children:Object(O.jsx)(p,{data:e,isFavoritible:n})},e.id)}))})},g="data:image/png;base64,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",f=function(e){var t=e.action,n=Object(u.f)(),s=void 0===t?function(){n.goBack()}:t;return Object(O.jsxs)("div",{className:"menu__linkbutton--back",onClick:s,children:[Object(O.jsx)(d.a,{icon:h.a})," back"]})},v=function(e){var t="profile"===e.mode?"profile":"game";return Object(O.jsxs)("div",{className:"navbar ".concat(t,"__navbar"),children:[Object(O.jsxs)("div",{className:"game__navbar--back",children:[" ",Object(O.jsx)(f,{})," "]}),Object(O.jsx)("img",{src:g,className:"site__sparklogo game__navbar--logo",alt:"SPARK logo"})]})},y=n(5),A=n.n(y),k=n(12),E=n(20),N=n.n(E),P="/api/questions",T={getAllQuestions:function(){var e=Object(k.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get(P);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAllQuestionsFromCategory:function(){var e=Object(k.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get(P+"/"+t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R="GET_QUESTION",S="GET_QUESTION_SUCCESS",C="GET_QUESTION_FAILURE",Q=function(){return{type:R}},B=function(e){return{type:S,payload:e}},D=function(){return{type:C}};function q(e){return function(){var t=Object(k.a)(A.a.mark((function t(n){var s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(Q()),t.prev=1,t.next=4,T.getAllQuestionsFromCategory(e);case 4:s=t.sent,n(B(s)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(D());case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}var U=Object(a.b)((function(e){return{loading:e.questions.loading,questions:e.questions.questions,hasErrors:e.questions.hasErrors}}))((function(e){var t=e.dispatch,n=e.loading,c=e.questions,r=e.hasErrors;Object(s.useEffect)((function(){t(q("solo"))}),[t]);return Object(O.jsxs)("div",{children:[n?Object(O.jsx)("p",{children:" Loading... "}):r?Object(O.jsx)("p",{children:" Error :( "}):Object(O.jsx)(x,{questions:c,isFavoritible:!1}),Object(O.jsx)(v,{})]})}));function Z(e){var t,n,s;for(s=e.length-1;s>0;s--)t=Math.floor(Math.random()*(s+1)),n=e[s],e[s]=e[t],e[t]=n;return e}var z=n.p+"static/media/mode_deep.04293f89.svg",I=n.p+"static/media/mode_icebreakers.a35ce8ea.svg",J=n.p+"static/media/mode_thisorthat.e728f6b4.svg",K=Object(a.b)((function(e){return{loading:e.questions.loading,questions:e.questions.questions,hasErrors:e.questions.hasErrors}}))((function(e){var t=e.dispatch,n=e.loading,c=e.questions,r=e.hasErrors,a=e.mode;Object(s.useEffect)((function(){t(q(a))}),[t]);return Object(O.jsxs)("div",{children:[n?Object(O.jsx)("p",{children:" Loading... "}):r?Object(O.jsx)("p",{children:" Error :( "}):Object(O.jsx)(x,{questions:Z(c),isFavoritible:!0}),function(){switch(a){case"deep":return Object(O.jsx)("img",{src:z,className:"modeicon"});case"icebreakers":return Object(O.jsx)("img",{src:I,className:"modeicon"});case"this-or-that":return Object(O.jsx)("img",{src:J,className:"modeicon"});default:return null}}(),Object(O.jsx)(v,{})]})})),L=function(e){var t=e.mode,n={color:"white",borderRadius:"10px",background:"linear-gradient(25deg, #292929, #3d3d3d)",padding:"20px 10px"},s={color:"white"},c={display:"flex",padding:"30px 10px"},r={color:"#e5e5e5",width:"15px"},a={color:"white",fontWeight:"600",padding:"0px 50px",justifyContent:"center",flexDirection:"column",display:"flex"},i={color:"white"};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"game__profile--container",children:[Object(O.jsx)("h1",{children:" My Profile "}),Object(O.jsxs)("div",{style:n,children:[Object(O.jsx)("h1",{style:s,children:" Favourites "}),"You have 15 favourited cards"]}),Object(O.jsx)("h1",{style:s,children:" Journey "}),Object(O.jsxs)("div",{style:n,children:[Object(O.jsxs)("div",{style:c,children:[Object(O.jsx)("span",{style:a,children:" 15 July "}),Object(O.jsxs)("span",{style:i,children:[Object(O.jsx)("strong",{children:" What is your favourite building? "})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Angkor Wat, located in northwest Cambodia, is the largest religious structure (temple complex) in the world by land area, measuring 162.6 hectares."]})]}),Object(O.jsx)("hr",{style:r}),Object(O.jsxs)("div",{style:c,children:[Object(O.jsx)("span",{style:a,children:" 19 July "}),Object(O.jsxs)("span",{style:i,children:[Object(O.jsx)("strong",{children:" What is your most loved story? "})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"According to a myth, the construction of Angkor Wat was ordered by Indra to serve as a palace for his son Precha Ket Mealea. According to the 13th-century Chinese traveller Zhou Daguan, some believed that the temple was constructed in a single night by a divine architect."]})]}),Object(O.jsx)("hr",{style:r}),Object(O.jsxs)("div",{style:c,children:[Object(O.jsx)("span",{style:a,children:" 23 July "}),Object(O.jsxs)("span",{style:i,children:[Object(O.jsx)("strong",{children:" What is a fact that more people should know? "})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"As with most other ancient temples in Cambodia, Angkor Wat has faced extensive damage and deterioration by a combination of plant overgrowth, fungi, ground movements, war damage and theft. The war damage to Angkor Wat's temples however has been very limited, compared to the rest of Cambodia's temple ruins, and it has also received the most attentive restoration."]})]})]})]}),Object(O.jsx)(v,{mode:t})]})},M=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:" About "}),Object(O.jsxs)("p",{children:[" ",Object(O.jsx)("strong",{children:" SPARK "})," is an app for creating meaningful conversations. "]}),Object(O.jsxs)("p",{children:[" This app was created for Orbital 2021.  ",Object(O.jsx)("br",{}),"Images are from ",Object(O.jsx)("a",{className:"text__link",href:"https://unsplash.com",children:"Unsplash"}),", Icons from Noun Project, Icons8, Typicons. ",Object(O.jsx)("br",{}),"Check out our ",Object(O.jsx)("a",{className:"text__link",href:"https://sparkblog.netlify.app",children:"blog"})," and Github"]}),Object(O.jsx)("h1",{children:" Privacy "}),Object(O.jsx)("p",{children:"We believe that your self-reflection is most meaningful when it is private. That\u2019s why we do not store any of your data on any server, and there is no account system. Your responses in the Solo mode are only stored in your browser."}),Object(O.jsx)("div",{className:"menu__navigation--container",children:Object(O.jsx)(f,{})})]})},V=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:" Online Game "}),Object(O.jsx)("p",{children:" Choose between (1) Random (2) Create (3) Join. "}),Object(O.jsx)("p",{children:" Coming soon "}),Object(O.jsx)(f,{})]})},G=function(){return Object(O.jsx)("div",{className:"menu__sparklogo--container",children:Object(O.jsx)("img",{src:g,className:"site__sparklogo",alt:"SPARK logo"})})},w=function(e){var t=e.title,n=e.subtitle;return Object(O.jsxs)("div",{className:"menu__linkbutton",children:[Object(O.jsxs)("span",{className:"menu__linkbutton--title",children:[" ",t," "]})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("span",{className:"menu__linkbutton--subtitle",children:[" ",n," "]})]})},H=function(e){var t=e.setPage,n=e.setMode,c=Object(s.useState)("home"),r=Object(l.a)(c,2),a=r[0],i=r[1];switch(a){case"mode":return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"menu__router--container",children:[Object(O.jsxs)(j.b,{to:"/game",onClick:function(){t("game"),n("icebreakers")},children:[" ",Object(O.jsx)(w,{title:"Icebreakers",subtitle:"Get to know anyone!"},"Icebreakers")," "]}),Object(O.jsxs)(j.b,{to:"/game",onClick:function(){t("game"),n("deep")},children:[" ",Object(O.jsx)(w,{title:"Deep Questions",subtitle:"Go deep!"},"Deep")," "]}),Object(O.jsxs)(j.b,{to:"/game",onClick:function(){t("game"),n("this-or-that")},children:[" ",Object(O.jsx)(w,{title:"This or That",subtitle:"Which will you choose?"},"ThisOrThat")," "]}),Object(O.jsxs)(j.b,{to:"/picture",onClick:function(){return t("picture")},children:[" ",Object(O.jsx)(w,{title:"Picture",subtitle:"Testing Picture API"},"Picture")," "]})]}),Object(O.jsx)("div",{className:"menu__navigation--container",children:Object(O.jsx)(f,{action:function(){return i("player")}})})]});case"player":return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"menu__router--container",children:[Object(O.jsxs)(j.b,{to:"/solo",onClick:function(){t("solo"),n("solo")},children:[" ",Object(O.jsx)(w,{title:"Solo",subtitle:"Self journey"},"Solo")," "]}),Object(O.jsxs)(j.b,{to:"/",onClick:function(){return i("mode")},children:[" ",Object(O.jsx)(w,{title:"Group",subtitle:"Group fun!"},"Group")," "]}),Object(O.jsxs)(j.b,{to:"/online",onClick:function(){return t("online")},children:[" ",Object(O.jsx)(w,{title:"Online",subtitle:"Play with friends or strangers!"},"Online")," "]})]}),Object(O.jsx)("div",{className:"menu__navigation--container",children:Object(O.jsx)(f,{action:function(){return i("home")}})})]});default:return Object(O.jsxs)("div",{className:"menu__router--container",children:[Object(O.jsxs)(j.b,{to:"/",onClick:function(){return i("player")},children:[" ",Object(O.jsx)(w,{title:"Play",subtitle:"Spark meaningful conversations"},"Play")," "]}),Object(O.jsxs)(j.b,{to:"/profile",onClick:function(){t("profile"),n("profile")},children:[" ",Object(O.jsx)(w,{title:"Profile",subtitle:"Your profile"},"Profile")," "]}),Object(O.jsxs)(j.b,{to:"/about",onClick:function(){return t("about")},children:[" ",Object(O.jsx)(w,{title:"About"},"About")," "]})]})}},F=function(e){var t=e.data,n=e.question||"";return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{style:{marginBottom:"20px"},children:Object(O.jsxs)("p",{className:"card__picture--question",children:[" ",n," "]})}),0===Object.keys(t).length?null:Object(O.jsxs)("div",{className:"game__picture--container",children:[Object(O.jsxs)("a",{href:t.links.html,target:"_blank",rel:"noreferrer",className:"card__picture",children:[Object(O.jsx)("img",{src:t.urls.small,alt:t.alt_description,className:"card__picture--thumb"}),Object(O.jsxs)("span",{children:[" ",Object(O.jsx)("img",{src:t.urls.regular,alt:t.alt_description,className:"card__picture--full"})," "]})]}),Object(O.jsxs)("p",{children:[" Picture by\xa0",Object(O.jsx)("a",{href:t.links.html,className:"link",children:t.user.name})," from\xa0",Object(O.jsx)("a",{href:"https://unsplash.com",className:"link",children:"Unsplash"})]})]})]})},W={getPictureFromUnsplash:function(){var e=Object(k.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("".concat("/api/pictures","/random"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},_="GET_PICTURE",X="GET_PICTURE_SUCCESS",Y="GET_PICTURE_FAILURE";function $(){return function(){var e=Object(k.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:_}),e.prev=1,e.next=4,W.getPictureFromUnsplash();case 4:n=e.sent,t({type:X,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:Y});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}var ee=Object(a.b)((function(e){return{loading:e.pictures.loading,pictures:e.pictures.pictures,hasErrors:e.pictures.hasErrors}}))((function(e){var t=e.dispatch,n=e.loading,c=e.pictures,r=e.hasErrors;Object(s.useEffect)((function(){t($())}),[t]);return Object(O.jsxs)("div",{className:"game__picture-page",children:[Object(O.jsx)("div",{children:n?Object(O.jsx)("p",{children:" Loading... "}):r?Object(O.jsx)("p",{children:" Error :( "}):Object(O.jsx)(F,{data:c,question:"What is a memory that this picture triggers?"},c.id)}),Object(O.jsx)("div",{onClick:function(){return t($())},className:"game__shuffle--btn",children:Object(O.jsx)(w,{title:"shuffle"})}),Object(O.jsx)(f,{})]})})),te=function(){var e=Object(s.useState)("home"),t=Object(l.a)(e,2),n=(t[0],t[1]),c=Object(s.useState)("none"),r=Object(l.a)(c,2),a=r[0],i=r[1];return Object(O.jsx)(j.a,{children:Object(O.jsx)("div",{className:"site__container",children:Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/online",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(V,{})})}),Object(O.jsx)(u.a,{path:"/picture",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(ee,{})})}),Object(O.jsx)(u.a,{path:"/game",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(K,{mode:a})})}),Object(O.jsx)(u.a,{path:"/solo",children:Object(O.jsx)("div",{className:"game__container",children:Object(O.jsx)(U,{})})}),Object(O.jsx)(u.a,{path:"/about",children:Object(O.jsx)("div",{className:"menu__content--container",children:Object(O.jsxs)("div",{className:"menu__content--data",children:[Object(O.jsx)(G,{}),Object(O.jsx)(M,{})]})})}),Object(O.jsx)(u.a,{path:"/profile",children:Object(O.jsx)("div",{className:"menu__content--container",children:Object(O.jsx)("div",{className:"menu__content--data",children:Object(O.jsx)(L,{mode:a})})})}),Object(O.jsx)(u.a,{path:"/",children:Object(O.jsx)("div",{className:"menu__content--container",children:Object(O.jsxs)("div",{className:"menu__content--data",children:[Object(O.jsx)(G,{}),Object(O.jsx)(H,{setPage:function(e){n(e)},setMode:i})]})})})]})})})},ne=n(13),se={pictures:{},loading:!1,hasErrors:!1};var ce={questions:[],loading:!1,hasErrors:!1};var re=Object(r.combineReducers)({pictures:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(ne.a)(Object(ne.a)({},e),{},{loading:!0});case X:return{pictures:t.payload,loading:!1,hasErrors:!1};case Y:return Object(ne.a)(Object(ne.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(ne.a)(Object(ne.a)({},e),{},{loading:!0});case S:return{questions:t.payload,loading:!1,hasErrors:!1};case C:return Object(ne.a)(Object(ne.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}}}),ae=Object(r.createStore)(re,Object(o.composeWithDevTools)(Object(r.applyMiddleware)(i.a)));Object(c.render)(Object(O.jsx)(a.a,{store:ae,children:Object(O.jsx)(te,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.55c9955b.chunk.js.map