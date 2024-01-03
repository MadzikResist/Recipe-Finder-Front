(this.webpackJsonpkitchen=this.webpackJsonpkitchen||[]).push([[4],{112:function(n,e,t){n.exports=t.p+"static/media/underweight.2e679746.png"},113:function(n,e,t){n.exports=t.p+"static/media/healthy.aaca6e71.png"},114:function(n,e,t){n.exports=t.p+"static/media/overweight.7ba81ac3.png"},116:function(n,e,t){"use strict";t.r(e);var r=t(14),a=t(3),o=t(0),c=t.n(o),i=t(4),l=t(112),u=t.n(l),s=t(113),p=t.n(s),d=t(114),f=t.n(d),b=t(86),h=t(44);function m(){var n=Object(a.a)(["\n  height: 200px;\n"]);return m=function(){return n},n}function x(){var n=Object(a.a)(["\n  text-align: center;\n"]);return x=function(){return n},n}function v(){var n=Object(a.a)(["\n  margin: 10px 0;\n  color: white;\n"]);return v=function(){return n},n}function g(){var n=Object(a.a)(["\n  color: white;\n  font-size: 1.1rem;\n  width: 100px;\n"]);return g=function(){return n},n}function w(){var n=Object(a.a)(["\n  text-align: center;\n  margin: 40px 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #72ac31;\n"]);return w=function(){return n},n}function E(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return E=function(){return n},n}function j(){var n=Object(a.a)(["\n  display: block;\n  width: 100%;\n  font-size: 1.2rem;\n  margin: 8px 0;\n  padding: 10px 0;\n  background-color: #333;\n  color: #fff;\n  border: 1px solid #333;\n  border-radius: 8px;\n  cursor: pointer;\n  &:hover {\n    //box-shadow: 0 0 40px 40px #72ac31 inset;\n    color: #72ac31;\n    outline: 0;\n  }\n"]);return j=function(){return n},n}function C(){var n=Object(a.a)(["\n  width: 100%;\n  font-size: 1.2rem;\n  padding: 8px 4px;\n  margin-top: 8px;\n  margin-bottom: 16px;\n  border: none;\n  background: transparent;\n  border-bottom: 1px solid yellow;\n  color: white;\n  :focus {\n    outline: none;\n    border: none;\n    border-bottom: 1px solid yellow;\n  }\n"]);return C=function(){return n},n}function O(){var n=Object(a.a)(["\n  height: 75vh;\n  width: 40vw;\n  margin-top: 20vh;\n  position: absolute;\n  z-index: 50;\n  background-color: #141414;\n  opacity: 0.9;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 2px solid #f9b613;\n  border-radius: 0.7em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return O=function(){return n},n}function y(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n"]);return y=function(){return n},n}var z=i.b.div(y()),M=i.b.div(O()),k=i.b.input(C()),V=i.b.button(j()),S=i.b.div(E()),B=i.b.div(w()),Y=i.b.label(g()),A=i.b.p(v()),F=i.b.div(x()),D=i.b.img(m());e.default=function(){var n=Object(o.useState)(),e=Object(r.a)(n,2),t=e[0],a=e[1],i=Object(o.useState)(),l=Object(r.a)(i,2),s=l[0],d=l[1],m=Object(o.useState)(""),x=Object(r.a)(m,2),v=x[0],g=x[1],w=Object(o.useState)(""),E=Object(r.a)(w,2),j=E[0],C=E[1],O=Object(o.useState)(null),y=Object(r.a)(O,2),H=y[0],I=y[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,null),c.a.createElement(z,null,c.a.createElement(b.a,null),c.a.createElement(M,null,c.a.createElement(B,null,"BMI Calculator"),c.a.createElement("form",{onSubmit:function(n){if(n.preventDefault(),0===t||0===s)alert("Please enter a valid weight and height");else{var e=t/(s*s/1e4);g(e.toFixed(2)),e<18.5?(C("You are underweight"),I(u.a)):e>=18.5&&e<24.9?(C("You are a healthy weight"),I(p.a)):(C("You are overweight"),I(f.a))}}},c.a.createElement("div",null,c.a.createElement(Y,null,"Weight (kg)"),c.a.createElement(k,{value:t,onChange:function(n){return a(n.target.value)}})),c.a.createElement("div",null,c.a.createElement(Y,null,"Height (cm)"),c.a.createElement(k,{value:s,onChange:function(n){return d(n.target.value)}})),c.a.createElement(S,null,c.a.createElement(V,{type:"submit"},"Calculate"))),v&&c.a.createElement(B,null,c.a.createElement("h3",null,"Your BMI is: ",v),c.a.createElement(A,null,j)),H&&c.a.createElement(F,null,c.a.createElement(D,{src:H,alt:"body"})))))}},86:function(n,e,t){"use strict";var r=t(3),a=t(0),o=t.n(a),c=t(4),i=t(21),l=t(7);function u(){var n=Object(r.a)(["\n  position: absolute;\n  top: 13px;\n  left: 315px;\n  z-index: 50;\n"]);return u=function(){return n},n}function s(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n"]);return s=function(){return n},n}function p(){var n=Object(r.a)(["\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n"]);return p=function(){return n},n}function d(){var n=Object(r.a)(["\n  height: 50%;\n  box-sizing: border-box;\n  appearance: none;\n  background-color: transparent;\n  border: 2px solid #f9b613;\n  border-radius: 0.6em;\n  color: #72ac31;\n  cursor: pointer;\n  display: flex;\n  align-self: center;\n  font-size: 1rem;\n  line-height: 1;\n  padding: 12px 20px;\n  text-decoration: none;\n  text-align: center;\n  text-transform: uppercase;\n  font-family: 'Montserrat', sans-serif;\n  font-weight: 700;\n  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;\n  width: 200px;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    box-shadow: 0 0 40px 40px #72ac31 inset;\n    color: #fff;\n    outline: 0;\n  }\n"]);return d=function(){return n},n}function f(){var n=Object(r.a)(["\n  width: 40%;\n  height: 50%;\n  border: 2px solid #f9b613;\n  border-radius: 0.6em;\n  padding-left: 8px;\n  background: transparent;\n  color: white;\n  font-size: 1rem;\n  :hover {\n    border: 2px solid #72ac31;\n  }\n  :focus {\n    outline: none;\n    border: 2px solid #72ac31;\n  }\n"]);return f=function(){return n},n}function b(){var n=Object(r.a)(["\n  color: #f9b613;\n  font-size: 1.2rem;\n  text-align: center;\n  transition: all 0.5s ease;\n  transform: translate(-12px, -10px);\n  opacity: 0;\n  ",":hover & {\n    transform: translate(-12px, 0);\n    opacity: 1;\n  }\n"]);return b=function(){return n},n}function h(){var n=Object(r.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  overflow: hidden;\n  color: #72ac31;\n  width: 27px;\n  height: 27px;\n\n  ",":hover & {\n    transform: translate(-50%, -50%) scale(1.1);\n  }\n"]);return h=function(){return n},n}function m(){var n=Object(r.a)(["\n  border: 2px solid #f9b613;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  background: none;\n  padding: 10px;\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n  outline: none;\n  margin-top: 15px;\n"]);return m=function(){return n},n}function x(){var n=Object(r.a)(["\n  text-decoration: none;\n"]);return x=function(){return n},n}function v(){var n=Object(r.a)(["\n  width: 100vw;\n  overflow: hidden;\n  position: absolute;\n  right: 5px;\n  top: 4px;\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  padding: 0 10px;\n  gap: 8px;\n"]);return v=function(){return n},n}var g=c.b.div(v()),w=Object(c.b)(i.b)(x()),E=c.b.button(m()),j=c.b.svg(h(),E),C=c.b.p(b(),w),O=c.b.input(f()),y=c.b.button(d()),z=c.b.div(p()),M=c.b.div(s()),k=Object(c.b)(y)(u());e.a=function(n){var e=n.num,t=n.searchRecipe,r=Object(l.f)();return o.a.createElement(g,null,t&&o.a.createElement(w,{to:"/dashboard"},o.a.createElement(k,null,"Add product")),o.a.createElement(z,null,1!==e&&!t&&o.a.createElement(w,{to:"/dashboard"},o.a.createElement(y,{type:"button"},"Add product")),2!==e&&o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{to:"/search-recipe"},o.a.createElement(y,{type:"button"}," Base recipes")),o.a.createElement(O,{type:"text",placeholder:"Search recipe",onKeyDown:function(n){"Enter"===n.key&&r.push({pathname:"/search-recipe",state:{inputText:n.target.value}})}}))),o.a.createElement(M,null,o.a.createElement(w,{to:"/calculator"},o.a.createElement(E,null,o.a.createElement(j,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},o.a.createElement("path",{fill:"currentColor",d:"M336 0h-288C22.38 0 0 22.38 0 48v416C0 489.6 22.38 512 48 512h288c25.62 0 48-22.38 48-48v-416C384 22.38 361.6 0 336 0zM64 208C64 199.2 71.2 192 80 192h32C120.8 192 128 199.2 128 208v32C128 248.8 120.8 256 112 256h-32C71.2 256 64 248.8 64 240V208zM64 304C64 295.2 71.2 288 80 288h32C120.8 288 128 295.2 128 304v32C128 344.8 120.8 352 112 352h-32C71.2 352 64 344.8 64 336V304zM224 432c0 8.801-7.199 16-16 16h-128C71.2 448 64 440.8 64 432v-32C64 391.2 71.2 384 80 384h128c8.801 0 16 7.199 16 16V432zM224 336c0 8.801-7.199 16-16 16h-32C167.2 352 160 344.8 160 336v-32C160 295.2 167.2 288 176 288h32C216.8 288 224 295.2 224 304V336zM224 240C224 248.8 216.8 256 208 256h-32C167.2 256 160 248.8 160 240v-32C160 199.2 167.2 192 176 192h32C216.8 192 224 199.2 224 208V240zM320 432c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32c0-8.801 7.201-16 16-16h32c8.801 0 16 7.199 16 16V432zM320 336c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32C256 295.2 263.2 288 272 288h32C312.8 288 320 295.2 320 304V336zM320 240C320 248.8 312.8 256 304 256h-32C263.2 256 256 248.8 256 240v-32C256 199.2 263.2 192 272 192h32C312.8 192 320 199.2 320 208V240zM320 144C320 152.8 312.8 160 304 160h-224C71.2 160 64 152.8 64 144v-64C64 71.2 71.2 64 80 64h224C312.8 64 320 71.2 320 80V144z"}))," "),o.a.createElement(C,null,"Calculator")),o.a.createElement(w,{to:"/account"},o.a.createElement(E,null,o.a.createElement(j,{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"user",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},o.a.createElement("path",{fill:"currentColor",d:"M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"}))," "),o.a.createElement(C,null,"Account"))))}}}]);
//# sourceMappingURL=4.3353c8ff.chunk.js.map