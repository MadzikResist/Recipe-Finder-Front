(this.webpackJsonpkitchen=this.webpackJsonpkitchen||[]).push([[0],{34:function(n,e,t){n.exports=t.p+"static/media/broccoli.9414255e.webp"},35:function(n,e,t){n.exports=t.p+"static/media/carrot.d28a377b.webp"},36:function(n,e,t){n.exports=t.p+"static/media/hotpepper.414da59a.webp"},37:function(n,e,t){n.exports=t.p+"static/media/corn.60a07c81.webp"},38:function(n,e,t){n.exports=t.p+"static/media/pepper.820d2fd3.webp"},39:function(n,e,t){n.exports=t.p+"static/media/potato.cefc0224.webp"},40:function(n,e,t){n.exports=t.p+"static/media/tomato.1c94aa9e.webp"},43:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var a=t(5),r=t.n(a),i=t(11),o=t(14),l=t(0),c=function(){var n=Object(l.useState)(),e=Object(o.a)(n,2),t=e[0],a=e[1],c=Object(l.useState)(!1),u=Object(o.a)(c,2),s=u[0],d=u[1],m=Object(l.useState)(null),p=Object(o.a)(m,2),f=p[0],h=p[1];return Object(l.useEffect)((function(){return function(){a(null),d(!1),h(null)}}),[]),{data:t,fetchData:function(){var n=Object(i.a)(r.a.mark((function n(e){var t,i,o,l,c,u,s,m,p,f;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.url,i=e.onSuccess,o=e.onError,l=e.body,n.prev=1,c=localStorage.getItem("secure_token"),u=JSON.parse(c||"{}"),s=u.tokens,m=(s=void 0===s?{}:s).access,d(!0),n.next=9,fetch("https://recipe-flnder.herokuapp.com/v1/".concat(t),{method:"POST",headers:m?{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(m)}:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(l)});case 9:return p=n.sent,n.next=12,p.json();case 12:if(!(null===(f=n.sent)||void 0===f?void 0:f.code)){n.next=20;break}return console.log("ResDataWithCode",f),h(null===f||void 0===f?void 0:f.message),d(!1),o&&o(null===f||void 0===f?void 0:f.message),console.log("Error",null===f||void 0===f?void 0:f.message),n.abrupt("return");case 20:a(f),i&&i(f),d(!1),n.next=30;break;case 25:n.prev=25,n.t0=n.catch(1),console.log("Error",n.t0),a(null),d(!1);case 30:case"end":return n.stop()}}),n,null,[[1,25]])})));return function(e){return n.apply(this,arguments)}}(),error:f,fetching:s}}},44:function(n,e,t){"use strict";var a=t(3),r=t(0),i=t.n(r),o=t(4),l=t(34),c=t.n(l),u=t(35),s=t.n(u),d=t(36),m=t.n(d),p=t(37),f=t.n(p),h=t(38),b=t.n(h),g=t(39),x=t.n(g),E=t(40),v=t.n(E);function w(){var n=Object(a.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  transform: rotateX(180deg);\n"]);return w=function(){return n},n}function j(){var n=Object(a.a)(["\n  position: absolute;\n  display: block;\n  transform: translate(-50%, -50%);\n\n  &:nth-child(1) {\n    left: 6%;\n    animation: "," 50s linear infinite;\n    animation-delay: -2s;\n  }\n\n  &:nth-child(2) {\n    left: 24%;\n    animation: "," 50s linear infinite;\n    animation-delay: -10s;\n  }\n\n  &:nth-child(3) {\n    left: 42%;\n    animation: "," 50s linear infinite;\n    animation-delay: -7s;\n  }\n\n  &:nth-child(4) {\n    left: 56%;\n    animation: "," 50s linear infinite;\n    animation-delay: -15s;\n  }\n\n  &:nth-child(5) {\n    left: 70%;\n    animation: "," 50s linear infinite;\n    animation-delay: -7s;\n  }\n\n  &:nth-child(6) {\n    left: 84%;\n    animation: "," 50s linear infinite;\n    animation-delay: -25s;\n  }\n\n  &:nth-child(7) {\n    left: 97%;\n    animation: "," 50s linear infinite;\n    animation-delay: -4s;\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(a.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n"]);return O=function(){return n},n}function y(){var n=Object(a.a)(["\n  height: 100vh;\n  width: 100vw;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  background: radial-gradient(#333, #000);\n  overflow: hidden;\n"]);return y=function(){return n},n}function k(){var n=Object(a.a)(["\n  0% {\n    opacity: 1;\n    top: -10%;\n    transform: translateX (20px) rotate(0deg);\n  }\n  20% {\n    opacity: 0.8;\n    transform: translateX (-20px) rotate(45deg);\n  }\n  40% {\n\n    transform: translateX (-20px) rotate(90deg);\n  }\n  60% {\n\n    transform: translateX (-20px) rotate(135deg);\n  }\n  80% {\n\n    transform: translateX (-20px) rotate(180deg);\n  }\n  100% {\n\n    top: 110%;\n    transform: translateX (-20px) rotate(225deg);\n  }\n"]);return k=function(){return n},n}var z=Object(o.c)(k()),S=o.b.section(y()),F=o.b.div(O()),X=o.b.div(j(),z,z,z,z,z,z,z),C=o.b.div(w());e.a=function(){return i.a.createElement(S,null,i.a.createElement(F,null,i.a.createElement(X,null,i.a.createElement("img",{src:v.a,height:"75px",width:"75px"})),i.a.createElement(X,null,i.a.createElement("img",{src:x.a,height:"75px",width:"75px"})),i.a.createElement(X,null,i.a.createElement("img",{src:b.a,height:"75px",width:"75px"})),i.a.createElement(X,null,i.a.createElement("img",{src:c.a,height:"75px",width:"75px"})),i.a.createElement(X,null,i.a.createElement("img",{src:m.a,height:"75px",width:"75px"})),i.a.createElement(X,null,i.a.createElement("img",{src:s.a,height:"75px",width:"75px"})),i.a.createElement(X,null,i.a.createElement("img",{src:f.a,height:"75px",width:"75px"}))),i.a.createElement(C,null,i.a.createElement(X,null,i.a.createElement("img",{src:v.a,height:"75px",width:"75px"})),i.a.createElement(X,null,i.a.createElement("img",{src:x.a,height:"75px",width:"75px"})),i.a.createElement(X,null,i.a.createElement("img",{src:b.a,height:"75px",width:"75px"})),i.a.createElement(X,null,i.a.createElement("img",{src:c.a,height:"75px",width:"75px"})),i.a.createElement(X,null,i.a.createElement("img",{src:m.a,height:"75px",width:"75px"})),i.a.createElement(X,null,i.a.createElement("img",{src:s.a,height:"75px",width:"75px"})),i.a.createElement(X,null,i.a.createElement("img",{src:f.a,height:"75px",width:"75px"}))))}},45:function(n,e,t){"use strict";var a=t(3),r=t(0),i=t.n(r),o=t(4),l=t(44);function c(){var n=Object(a.a)(["\n  //position: absolute;\n  //top: 50%;\n  //left: 50%;\n  //transform: translate(-50%, -50%);\n  //width: 200px;\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border: 8px solid #72ac31;\n  border-radius: 50%;\n  animation: "," 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #72ac31 transparent transparent transparent;\n  &:nth-child(1) {\n    animation-delay: -0.45s;\n  }\n  &:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  &:nth-child(3) {\n    animation-delay: -0.15s;\n  }\n"]);return c=function(){return n},n}function u(){var n=Object(a.a)(["\n  display: inline-block;\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return u=function(){return n},n}function s(){var n=Object(a.a)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return s=function(){return n},n}var d=Object(o.c)(s()),m=o.b.div(u()),p=o.b.div(c(),d);e.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,null),i.a.createElement(m,null,i.a.createElement(p,null),i.a.createElement(p,null),i.a.createElement(p,null),i.a.createElement(p,null)))}},49:function(n,e,t){n.exports=t.p+"static/media/bgReg.dda579e9.webp"},67:function(n,e,t){n.exports=t(82)},82:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(28),o=t.n(i),l=t(3),c=t(21),u=t(7),s=t(5),d=t.n(s),m=t(11),p=t(4);function f(){var n=Object(l.a)(["\n  color: #72AC31;\n"]);return f=function(){return n},n}function h(){var n=Object(l.a)(["\n  font-size: 3rem;\n  margin: 25px 0;\n  letter-spacing: 1px;\n  color: #F9B613;\n  background-color: transparent;\n  @media (min-width: 768px) {\n    font-size: 5rem;\n    margin-bottom: 50px;\n  }\n"]);return h=function(){return n},n}var b=p.b.h1(h()),g=p.b.span(f()),x=function(){return r.a.createElement(b,null,r.a.createElement(g,null,"L"),"ogin")},E=t(46),v=t(49),w=t.n(v);function j(){var n=Object(l.a)(["\n  color: #72AC31;\n"]);return j=function(){return n},n}function O(){var n=Object(l.a)(["\n  font-size: 1.5rem;\n  color: #F9B613;\n  text-decoration: none;\n  @media(min-width: 768px){\n    font-size: 3rem;\n    letter-spacing: 1px;\n  }\n"]);return O=function(){return n},n}var y=Object(p.b)(c.b)(O()),k=p.b.span(j()),z=function(){return r.a.createElement(y,{to:"/register"},r.a.createElement(k,null,"R"),"egister")},S=t(43);function F(){var n=Object(l.a)(["\n  width: 100%;\n"]);return F=function(){return n},n}function X(){var n=Object(l.a)(["\n  width: 50%;\n  height: 60vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: transparent;\n"]);return X=function(){return n},n}function C(){var n=Object(l.a)(["\n  width: 50px;\n  visibility: ",";\n  @media (min-width: 768px) {\n    width: 70px;\n  }\n"]);return C=function(){return n},n}function B(){var n=Object(l.a)(["\n  color: red;\n  font-size: 1.2rem;\n"]);return B=function(){return n},n}function I(){var n=Object(l.a)(["\n  align-self: start;\n  display: flex;\n  flex-direction: column;\n"]);return I=function(){return n},n}function A(){var n=Object(l.a)(["\n  position: relative;\n  z-index: 5;\n"]);return A=function(){return n},n}function J(){var n=Object(l.a)(["\n  width: 80%;\n  font-size: 1.8rem;\n  cursor: pointer;\n  padding: 7px 0;\n  outline: none;\n  color: #fff;\n  border: none;\n  border-radius: 3px;\n  background: transparent;\n  position: relative;\n  overflow: hidden;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 200%;\n    height: 100%;\n    z-index: 1;\n    background: linear-gradient(#72ac31, #f9b613);\n    transition: transform 1s ease;\n  }\n  &:hover::after {\n    transform: translateX(-50%);\n  }\n  @media (min-width: 768px) {\n    width: 50%;\n  }\n"]);return J=function(){return n},n}function T(){var n=Object(l.a)(["\n  display: block;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 40px;\n  border: none;\n  border-bottom: 2px solid #000;\n  outline: none;\n  font-size: 1.2rem;\n  padding-left: 5px;\n  background: transparent;\n  &:focus + ","::after {\n    transform: skew(40deg) rotate(15deg) translate(0, 50%);\n  }\n  &:focus {\n    border-bottom: 2px solid #f9b613;\n  }\n"]);return T=function(){return n},n}function q(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 1.5rem;\n  height: 40px;\n  padding: 5px;\n  transition: opacity 0.8s ease;\n  opacity: 1;\n  overflow: hidden;\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 50%;\n    right: 0;\n    width: 100%;\n    height: 50%;\n    background-color: #f9b613;\n    opacity: 0.4;\n    z-index: 1;\n    transition: transform 1s ease;\n    transform: skew(40deg) rotate(15deg) translate(100%, 50%);\n  }\n"]);return q=function(){return n},n}function P(){var n=Object(l.a)(["\n  position: relative;\n  width: 80%;\n  height: 80px;\n  margin-bottom: 50px;\n"]);return P=function(){return n},n}function D(){var n=Object(l.a)(["\n  color: red;\n  font-size: 1.2rem;\n  position: absolute;\n  top: 102%;\n"]);return D=function(){return n},n}function N(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 40vw;\n"]);return N=function(){return n},n}function R(){var n=Object(l.a)(["\n  width: 100vw;\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  justify-items: center;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: cover;\n"]);return R=function(){return n},n}var W=p.b.div(R(),w.a),_=p.b.form(N()),L=p.b.p(D()),Q=p.b.div(P()),M=p.b.label(q()),$=p.b.input(T(),M),G=p.b.button(J()),H=p.b.p(A()),K=p.b.div(I()),U=p.b.p(B()),V=(p.b.img(C(),(function(n){return n.loadingImg?"visible":"hidden"})),p.b.div(X())),Y=p.b.div(F()),Z=function(){var n=Object(u.f)(),e=Object(E.a)(),t=e.register,i=e.handleSubmit,o=e.errors,l=Object(S.a)(),c=l.fetchData,s=l.error,p=l.fetching,f=function(){var e=Object(m.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c({url:"auth/login",body:{email:t.email.trim(),password:t.password.trim()},onSuccess:function(e){console.log("datalogin",e),localStorage.setItem("secure_token",JSON.stringify(e)),n.push("/dashboard")}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){localStorage.getItem("secure_token")&&n.push("/dashboard")}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null,r.a.createElement(V,null,r.a.createElement(x,null),r.a.createElement(_,{onSubmit:i(f)},r.a.createElement(Q,null,r.a.createElement($,{disabled:p,type:"text",id:"email",name:"email","aria-invalid":o.email?"true":"false",ref:t({required:!0})}),r.a.createElement(M,{htmlFor:"email"},r.a.createElement(H,null,"Email")),o.nick&&r.a.createElement(L,{role:"alert"},"This field is required")),r.a.createElement(Q,null,r.a.createElement($,{disabled:p,type:"password",id:"pass",name:"password","aria-invalid":o.password?"true":"false",ref:t({required:!0})}),r.a.createElement(M,{htmlFor:"pass"},r.a.createElement(H,null,"Password")),o.password&&r.a.createElement(L,{role:"alert"},"This field is required")),r.a.createElement(K,null,s&&r.a.createElement(U,null,s.errors)),r.a.createElement(G,{disabled:p},r.a.createElement(H,null,"Log In")),r.a.createElement(z,null))),r.a.createElement(Y,null)))},nn=t(45);function en(){var n=Object(l.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html {\n    scroll-behavior: smooth;\n\n    ::-webkit-scrollbar {\n      width: 14px;\n      height: 14px;\n    }\n    ::-webkit-scrollbar-thumb {\n      background: linear-gradient(13deg, #72ac31 14%, #f9b613 64%);\n      border-radius: 10px;\n    }\n\n    ::-webkit-scrollbar-thumb:hover {\n      background: linear-gradient(13deg, #F9B613 14%, #72ac31 64%);\n    }\n\n    ::-webkit-scrollbar-track {\n      background: #141414;\n    }\n  }\n"]);return en=function(){return n},n}var tn=Object(a.lazy)((function(){return t.e(6).then(t.bind(null,117))})),an=Object(a.lazy)((function(){return Promise.all([t.e(3),t.e(5)]).then(t.bind(null,119))})),rn=Object(a.lazy)((function(){return t.e(8).then(t.bind(null,120))})),on=Object(a.lazy)((function(){return t.e(9).then(t.bind(null,118))})),ln=Object(a.lazy)((function(){return t.e(7).then(t.bind(null,115))})),cn=Object(a.lazy)((function(){return t.e(4).then(t.bind(null,116))})),un=Object(p.a)(en());var sn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(un,null),r.a.createElement(c.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(nn.a,null)},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(Z,null)),r.a.createElement(u.a,{exact:!0,path:"/register"},r.a.createElement(rn,null)),r.a.createElement(u.a,{exact:!0,path:"/search-recipe"},r.a.createElement(on,null)),r.a.createElement(u.a,{exact:!0,path:"/dashboard"},r.a.createElement(tn,null)),r.a.createElement(u.a,{exact:!0,path:"/account"},r.a.createElement(an,null)),r.a.createElement(u.a,{exact:!0,path:"/recipe/:id"},r.a.createElement(ln,null)),r.a.createElement(u.a,{exact:!0,path:"/calculator"},r.a.createElement(cn,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var dn=t(41),mn=new dn.QueryClient;o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(dn.QueryClientProvider,{client:mn},r.a.createElement(sn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[67,1,2]]]);
//# sourceMappingURL=main.f15a2ea6.chunk.js.map