(this.webpackJsonpnotesapp=this.webpackJsonpnotesapp||[]).push([[9],{136:function(n,e,t){"use strict";var r=t(11),a=t(4),o=t(0),c=t.n(o),i=t(5),l=t(10),u=t(57);function d(){var n=Object(a.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 40;\n  border-radius: 25px;\n  height: 40px;\n  border: 2px solid #F9B613;\n  color: ",";\n  background-color: ",";\n  padding: 0 40px 0 7px;\n  font-size: 1.1rem;\n  width: 220px;\n  transition: transform 0.5s ease;\n  transform: ",";\n  outline: none;\n  @media(min-width: 768px){\n    height: 50px;\n    width: 350px;\n    transform: ",";\n\n  }\n"]);return d=function(){return n},n}function s(){var n=Object(a.a)(["\n  width: 20px;\n  height: 20px;\n  color: #F9B613;\n"]);return s=function(){return n},n}function m(){var n=Object(a.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 50;\n  width: 40px;\n  height: 40px;\n  border: 2px solid #F9B613;\n  border-radius: 50%;\n  background-color: ",";\n  cursor: pointer;\n  outline: none;\n  @media(min-width: 768px){\n      width: 50px;\n      height: 50px;\n      padding: 10px;\n  }\n"]);return m=function(){return n},n}function f(){var n=Object(a.a)(["\n  position: relative;\n  top: 3px;\n  height: 40px;\n  width: 220px;\n  overflow: hidden;\n  @media(min-width: 768px){\n    position: relative;\n    top: 0;\n    right: 0;\n    height: 50px;\n    width: 350px;\n  }\n"]);return f=function(){return n},n}var p=i.b.div(f()),h=i.b.button(m(),(function(n){return n.darkmode?"#231f20":"#EBEBE7"})),b=i.b.svg(s()),x=i.b.input(d(),(function(n){return n.darkmode?"#F9B613":"#000"}),(function(n){return n.darkmode?"#231f20":"#EBEBE7"}),(function(n){return n.show?"translateX(0)":"translateX(220px)"}),(function(n){return n.show?"translateX(0)":"translateX(350px)"}));e.a=function(){var n=Object(l.b)(),e=Object(o.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1],d=Object(l.c)((function(n){return n.inputSentence.show}));Object(o.useEffect)((function(){null!==localStorage.getItem("darkmode")&&i(!0)}),[]);return c.a.createElement(p,null,c.a.createElement(h,{onClick:function(){n(Object(u.b)(!d))},darkmode:a},c.a.createElement(b,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.a.createElement("path",{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}))),c.a.createElement(x,{type:"text",placeholder:"Search...",onChange:function(e){n(Object(u.a)(e.target.value))},show:d,darkmode:a}))}},137:function(n,e,t){"use strict";var r=t(4),a=t(0),o=t.n(a),c=t(5),i=t(10),l=t(65);function u(){var n=Object(r.a)(["\n  width: 22px;\n  height: 22px;\n  color: #F9B613;\n  ",":hover &{\n    transform: scale(1.1);\n  }\n"]);return u=function(){return n},n}function d(){var n=Object(r.a)(["\n  width: 40px;\n  height: 40px;\n  border: 2px solid #F9B613;\n  border-radius: 50%;\n  background: transparent;\n  cursor: pointer;\n  margin-top: 3px;\n  outline: none;\n  :hover::after{\n    transform: translate(-75%,0);\n    opacity: 1;\n  }\n  @media(min-width: 768px){\n      position: static;\n      width: 50px;\n      height: 50px;\n      padding: 10px;\n      margin: 0;\n      &::after{\n        content: 'Sort';\n        position: absolute;\n        top: 70%;\n        color: #F9B613;\n        font-size: 1.2rem;\n        transition: all .5s ease;\n        transform: translate(-75%,-20px);\n        opacity: 0;\n  }\n  }\n"]);return d=function(){return n},n}var s=c.b.button(d()),m=c.b.svg(u(),s);e.a=function(){var n=Object(i.c)((function(n){return n.sort.method})),e=Object(i.b)();return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,{onClick:function(){e(Object(l.F)(!n))}},o.a.createElement(m,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"sort",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},o.a.createElement("path",{fill:"currentColor",d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"}))))}},140:function(n,e,t){"use strict";var r=t(4),a=t(0),o=t.n(a),c=t(5),i=t(20),l=t(10),u=t(65),d=t(136),s=t(137);function m(){var n=Object(r.a)(["\n  color: #F9B613;\n  font-size: 1.2rem;\n  text-align: center;\n  transition: all .5s ease;\n  transform: translateY(-20px);\n  opacity: 0;\n  ",":hover &{\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]);return m=function(){return n},n}function f(){var n=Object(r.a)(["\n  display: none;\n  @media(min-width: 768px){\n    display: block;\n  }\n"]);return f=function(){return n},n}function p(){var n=Object(r.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  overflow: hidden;\n  color: #F9B613;\n  width: 27px;\n  height: 27px;\n  ",":hover &{\n    transform: translate(-50%,-50%) scale(1.1);\n  }\n"]);return p=function(){return n},n}function h(){var n=Object(r.a)(["\n  border: 2px solid #F9B613;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  background: none;\n  padding: 10px;\n  position: relative;\n  border-radius: 50%;\n  overflow: hidden;\n  outline: none;    \n"]);return h=function(){return n},n}function b(){var n=Object(r.a)(["\n  text-decoration: none;\n  color: #000;\n  width: 50px;\n"]);return b=function(){return n},n}function x(){var n=Object(r.a)(["\n  display: none;\n  @media (min-width: 768px) {\n  overflow: hidden;\n  position: absolute;\n  right: 5px;\n  top: 4px;\n  display: flex;\n  align-items: flex-start;\n  height: auto;\n  width: auto;\n  padding: 0 10px;\n  }\n"]);return x=function(){return n},n}var g=c.b.div(x()),v=Object(c.b)(i.b)(b()),E=c.b.button(h()),w=c.b.svg(p(),E),k=c.b.div(f()),j=c.b.p(m(),v);e.a=function(n){var e=n.num,t=Object(l.b)(),r=function(){t(Object(u.e)()),t(Object(u.q)())};return o.a.createElement(k,null,o.a.createElement(g,null,(2===e||3===e)&&o.a.createElement(d.a,null),(2===e||3===e)&&o.a.createElement(s.a,null),o.a.createElement(v,{to:"/add",style:{display:1===e&&"none"}},o.a.createElement(E,{onClick:r},o.a.createElement(w,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"plus",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},o.a.createElement("path",{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}))),o.a.createElement(j,null,"Add")),o.a.createElement(v,{to:"/dashboard",style:{display:2===e&&"none"}},o.a.createElement(E,{onClick:r},o.a.createElement(w,{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"sticky-note",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},o.a.createElement("path",{fill:"currentColor",d:"M448 348.106V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v351.988c0 26.51 21.49 48 48 48h268.118a48 48 0 0 0 33.941-14.059l83.882-83.882A48 48 0 0 0 448 348.106zm-128 80v-76.118h76.118L320 428.106zM400 80v223.988H296c-13.255 0-24 10.745-24 24v104H48V80h352z"}))),o.a.createElement(j,null,"Notes")),o.a.createElement(v,{to:"/public",style:{display:3===e&&"none"}},o.a.createElement(E,{onClick:r},o.a.createElement(w,{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"comments",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},o.a.createElement("path",{fill:"currentColor",d:"M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"})),"                    "),o.a.createElement(j,null,"AllNotes")),o.a.createElement(v,{to:"/account",style:{display:4===e&&"none"}},o.a.createElement(E,{onClick:r},o.a.createElement(w,{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"user",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},o.a.createElement("path",{fill:"currentColor",d:"M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"})),"                    "),o.a.createElement(j,null,"Account")),o.a.createElement(v,{to:"/logout"},o.a.createElement(E,{onClick:r},o.a.createElement(w,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"sign-out-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.a.createElement("path",{fill:"currentColor",d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"}))),o.a.createElement(j,null,"Logout"))))}},142:function(n,e,t){"use strict";var r=t(4),a=t(0),o=t.n(a),c=t(5),i=t(10),l=t(65);function u(){var n=Object(r.a)(["\n  width: 37px;\n  height: 37px;\n  color: #F9B613;\n  transition: transform 10s ease;\n  ",":hover & {\n    transform: rotate(360deg);\n  }\n"]);return u=function(){return n},n}function d(){var n=Object(r.a)(["\n  padding: 3px;\n  background: transparent;\n  cursor: pointer;\n  border: none;\n  z-index: 2;\n  margin-left: 3px;\n  outline: none;\n"]);return d=function(){return n},n}var s=c.b.button(d()),m=c.b.svg(u(),s),f=function(){var n=Object(i.b)(),e=Object(i.c)((function(n){return n.dashmenu.open}));return o.a.createElement(s,{onClick:function(){n(e?Object(l.e)():Object(l.f)())}},o.a.createElement(m,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"cog",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.a.createElement("path",{fill:"currentColor",d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"})))},p=t(11),h=t(20);function b(){var n=Object(r.a)(["\n  text-decoration: none;\n"]);return b=function(){return n},n}function x(){var n=Object(r.a)(["\n  width: 20px;\n  height: 20px;\n  color: #F9B613;\n"]);return x=function(){return n},n}function g(){var n=Object(r.a)(["\n  font-size: 1.5rem;\n  margin-right: 20px;\n  text-align: right;\n  width: 60%;\n  font-family: 'Lato';\n  color: ",";\n"]);return g=function(){return n},n}function v(){var n=Object(r.a)(["\n  border: none;\n  border-bottom: 2px solid #F9B613;\n  outline: none;\n  width: 100%;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 7px 20px 7px 0;\n  cursor: pointer;\n  transition: transform 0.5s ease;\n  :hover{\n     transform: scale(1.1);\n  }\n"]);return v=function(){return n},n}function E(){var n=Object(r.a)(["\n  overflow: hidden;\n  position: absolute;\n  top: 103%;\n  right: 0;\n  width: 70vw;\n  height: 50vh;\n  border: ",";\n  background-color: ",";\n  z-index: 2;\n  display: ",";\n @media (min-width: 768px) {\n    width: 40vw;\n  }\n  @media (min-width: 992px){\n   width: 25vw;\n  }\n  @media (min-width: 560px) \n  and (max-width: 800px)\n  and (orientation: landscape) {\n    height: auto;\n    padding-bottom: 20px;\n  }\n"]);return E=function(){return n},n}var w=c.b.div(E(),(function(n){return n.darkmode?"2px solid #F9B613":"2px solid #000"}),(function(n){return n.darkmode?"#231f20":"#E8EAE3"}),(function(n){return n.open?"block":"none"})),k=c.b.button(v()),j=c.b.p(g(),(function(n){return n.darkmode?"#F9B613":"#000"})),O=c.b.svg(x()),y=Object(c.b)(h.b)(b()),z=function(n){var e=n.num,t=Object(i.b)(),r=Object(i.c)((function(n){return n.dashmenu.open})),c=Object(a.useState)(!1),u=Object(p.a)(c,2),d=u[0],s=u[1];Object(a.useEffect)((function(){null!==localStorage.getItem("darkmode")&&s(!0)}),[]);var m=function(){t(Object(l.e)())};return o.a.createElement(w,{open:r,darkmode:d},o.a.createElement(y,{to:"/logout"},o.a.createElement(k,{onClick:m},o.a.createElement(j,{darkmode:d},"Logout"),o.a.createElement(O,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"sign-out-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.a.createElement("path",{fill:"currentColor",d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"})))),o.a.createElement(y,{to:"/add",style:{display:1===e&&"none"}},o.a.createElement(k,{onClick:m},o.a.createElement(j,{darkmode:d},"Add note"),o.a.createElement(O,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"plus",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},o.a.createElement("path",{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"})))),o.a.createElement(y,{to:"/dashboard",style:{display:2===e&&"none"}},o.a.createElement(k,{onClick:m},o.a.createElement(j,{darkmode:d},"MyNotes"),o.a.createElement(O,{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"sticky-note",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},o.a.createElement("path",{fill:"currentColor",d:"M448 348.106V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v351.988c0 26.51 21.49 48 48 48h268.118a48 48 0 0 0 33.941-14.059l83.882-83.882A48 48 0 0 0 448 348.106zm-128 80v-76.118h76.118L320 428.106zM400 80v223.988H296c-13.255 0-24 10.745-24 24v104H48V80h352z"})))),o.a.createElement(y,{to:"/public",style:{display:3===e&&"none"}},o.a.createElement(k,{onClick:m},o.a.createElement(j,{darkmode:d},"AllNotes"),o.a.createElement(O,{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"comments",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},o.a.createElement("path",{fill:"currentColor",d:"M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"})))),o.a.createElement(y,{to:"/account",style:{display:4===e&&"none"}},o.a.createElement(k,{onClick:m},o.a.createElement(j,{darkmode:d},"Account"),o.a.createElement(O,{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"user",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},o.a.createElement("path",{fill:"currentColor",d:"M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"})))))},C=t(136),B=t(137);function F(){var n=Object(r.a)(["\n  position: absolute;\n  top: 7px;\n  right: 5px;\n  z-index: 3;\n  display: flex;\n  \n  @media (min-width: 768px) {\n    display: none;\n  }\n"]);return F=function(){return n},n}var S=c.b.nav(F());e.a=function(n){var e=n.num;return o.a.createElement(S,null,(2===e||3===e)&&o.a.createElement(C.a,null),(2===e||3===e)&&o.a.createElement(B.a,null),o.a.createElement(f,null),o.a.createElement(z,{num:e}))}},329:function(n,e,t){"use strict";t.r(e);var r=t(11),a=t(4),o=t(0),c=t.n(o),i=t(5),l=t(49),u=t(142),d=t(140),s=t(65),m=t(10),f=t(58),p=t.n(f);function h(){var n=Object(a.a)(["\n  font-size: 1.2rem;\n"]);return h=function(){return n},n}function b(){var n=Object(a.a)(["\n  transition: transform 0.2s ease;\n  transform: ",";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  padding: 2vh 0;\n  z-index: 999;\n  background-color: #E9EAE4;\n  border-bottom: 3px solid #F9B613;\n"]);return b=function(){return n},n}var x=i.b.div(b(),(function(n){return n.show?"translateY(0)":"translateY(-100%)"})),g=i.b.p(h()),v=function(n){var e=n.msg,t=n.show;return c.a.createElement(x,{show:t},c.a.createElement(g,null,e))},E=t(31),w=t.n(E),k=t(9);function j(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]);return j=function(){return n},n}function O(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return O=function(){return n},n}function y(){var n=Object(a.a)(["\n  color: red;\n  padding: 2px 0;\n  font-size: 1rem;\n"]);return y=function(){return n},n}function z(){var n=Object(a.a)(["\n  cursor: pointer;\n  height: 25px;\n  padding: 0 5px;\n  color: #F9B613;\n  border: 1px solid #F9B613;\n  background-color: ",";\n  border-radius: 14px;\n  outline: none;\n  &:hover{\n     border: 3px solid #F9B613;\n  }\n    @media (min-width: 768px) {\n      width: 100px;\n      height: 40px;\n  }\n"]);return z=function(){return n},n}function C(){var n=Object(a.a)(["\n  height: 25px;\n  border: 1px solid #F9B613;\n  background-color: ",";\n  color: ",";\n  border-radius: 14px;\n  outline: none;\n  padding: 0 4px;\n  &:focus{\n     border: 3px solid #F9B613;\n  }\n  @media (min-width: 768px) {\n      width: 300px;\n      height: 40px;\n  }\n"]);return C=function(){return n},n}function B(){var n=Object(a.a)(["\n  font-size: 1.3rem;\n  color: #F9B613;\n  margin-bottom: 5px;\n  @media (min-width: 768px) {\n     margin-right: 6px;\n  }\n"]);return B=function(){return n},n}function F(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;  \n  flex-direction: column;\n"]);return F=function(){return n},n}var S=i.b.div(F()),M=i.b.h1(B()),H=i.b.input(C(),(function(n){return n.dark?"#231f20":"#FFF"}),(function(n){return n.dark?"#F9B613":"#000"})),V=i.b.button(z(),(function(n){return n.dark?"#231f20":"#FFF"})),I=i.b.div(y()),L=i.b.div(O()),A=i.b.div(j()),N=function(n){var e=n.dark,t=Object(k.g)(),a=Object(o.useRef)(null),i=Object(o.useState)(""),l=Object(r.a)(i,2),u=l[0],d=l[1],s=Object(o.useState)(!1),m=Object(r.a)(s,2),f=m[0],p=m[1],h=Object(o.useState)([]),b=Object(r.a)(h,2),x=b[0],g=b[1];return c.a.createElement(S,null,c.a.createElement(v,{msg:u,show:f}),c.a.createElement(A,null,c.a.createElement(M,null,"New name"),c.a.createElement(L,null,c.a.createElement(H,{ref:a,type:"text",dark:e}),c.a.createElement(V,{onClick:function(){var n={name:a.current.value},e=[];(n.name.length>20||n.name.length<3)&&e.push("Required length 3-20"),e.length>=1?g(e):w.a.post("https://notesappserver.herokuapp.com/api/users/changename",n,{headers:{"auth-token":localStorage.getItem("jwtToken")}}).then((function(n){n.data.errors.length>0?g(n.error):(d("Name update succesfully. You will be logged out."),p(!0),g([]),setTimeout((function(){p(!1),t.push("/logout")}),3e3))})).catch((function(n){return console.log(n)}))},dark:e},"Save"))),x.map((function(n,e){return c.a.createElement(I,{key:e},n)})))};function R(){var n=Object(a.a)(["\n  display: none;\n  opacity: 0;\n  position: absolute;\n  top: 101%;\n  right: 0;\n  width: 250px;\n  padding: 10px 5px;\n  text-align: right;\n  background-color: ",";\n  border-radius: 12px;\n  border: 2px solid #F9B613;\n  font-size: 1rem;\n  transition: opacity 0.5s ease;\n  z-index: 15;\n  ",":hover &{\n    display: block;\n    opacity: 1;\n  }\n"]);return R=function(){return n},n}function Y(){var n=Object(a.a)(["\n  border: 2px solid #F9B613;\n  background-color: ",";\n  border-radius: 50%;\n  font-size: 1.2rem;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n"]);return Y=function(){return n},n}function X(){var n=Object(a.a)(["\n  opacity: 0;\n  width: 0;\n  height: 0;\n  &:checked + ","{\n    background-color: #4caf50;\n  }\n  &:checked + ",":before {\n  transform: translateX(14px);\n  }\n  @media(min-width: 768px){\n    &:checked + ",":before {\n    transform: translateX(26px);\n  }\n  }\n  \n"]);return X=function(){return n},n}function D(){var n=Object(a.a)(['\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #af4c4c;\n  transition: .3s;\n  border-radius: 34px;\n  &::before {\n  position: absolute;\n  content: "";\n  height: 20px;\n  width: 20px;\n  left: 4px;\n  bottom: 0;\n  background-color: #fff;\n  transition: .3s;\n  border-radius: 50%;\n  }\n  @media(min-width: 768px){\n   &::before {\n    height: 26px;\n    width: 26px;\n    bottom: 4px;\n    }\n  }\n']);return D=function(){return n},n}function T(){var n=Object(a.a)(["\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  @media(min-width: 768px){\n     width: 60px;\n     height: 34px;\n  }\n"]);return T=function(){return n},n}function q(){var n=Object(a.a)(["\n  font-size: 1.4rem;\n  width: 50%;\n"]);return q=function(){return n},n}function J(){var n=Object(a.a)(["\n  display: ",";\n  width: 90%;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n  padding-bottom: 3px;\n  border-bottom: 1px solid #F9B613 ;\n  @media(min-width: 768px){\n     width: 25%;\n  }\n"]);return J=function(){return n},n}function G(){var n=Object(a.a)(["\nwidth: 100%;\ndisplay: flex;\nbackground: transparent;\ncolor: #F9B613;\nflex-direction: column;\nalign-items: center;\n"]);return G=function(){return n},n}var P=i.b.div(G()),Z=i.b.div(J(),(function(n){return n.mobile?"none":"flex"})),K=i.b.p(q()),Q=i.b.label(T()),U=i.b.span(D()),W=i.b.input(X(),U,U,U),$=i.b.div(Y(),(function(n){return n.dark?"#231f20":"#E9EAE4"})),_=i.b.div(R(),(function(n){return n.dark?"#231f20":"#E9EAE4"}),$),nn=function(n){var e=n.dark,t=Object(o.useRef)(null),r=Object(o.useRef)(null),a=Object(o.useRef)(null),i=Object(o.useRef)(null),l=Object(o.useRef)(null);Object(o.useEffect)((function(){null!==localStorage.getItem("autosave")&&(t.current.checked=!0),null!==localStorage.getItem("alertdelete")&&(r.current.checked=!0),null!==localStorage.getItem("selecttext")&&(a.current.checked=!0),null!==localStorage.getItem("statusnote")&&(i.current.checked=!0),null!==localStorage.getItem("darkmode")&&(l.current.checked=!0)}),[]);return c.a.createElement(P,null,c.a.createElement(Z,null,c.a.createElement(K,null,"Delete alert"),c.a.createElement(Q,null,c.a.createElement(W,{type:"checkbox",onClick:function(){!0===r.current.checked?localStorage.setItem("alertdelete","true"):localStorage.removeItem("alertdelete")},ref:r}),c.a.createElement(U,null)),c.a.createElement($,{dark:e},"?",c.a.createElement(_,{dark:e},"Show/hide delete alert."))),c.a.createElement(Z,null,c.a.createElement(K,null,"Autosave"),c.a.createElement(Q,null,c.a.createElement(W,{type:"checkbox",onClick:function(){!0===t.current.checked?localStorage.setItem("autosave","true"):localStorage.removeItem("autosave")},ref:t}),c.a.createElement(U,null)),c.a.createElement($,{dark:e},"?",c.a.createElement(_,{dark:e},"Save your note automatically after making changes."))),c.a.createElement(Z,null,c.a.createElement(K,null,"Select text note"),c.a.createElement(Q,null,c.a.createElement(W,{type:"checkbox",onClick:function(){!0===a.current.checked?localStorage.setItem("selecttext","true"):localStorage.removeItem("selecttext")},ref:a}),c.a.createElement(U,null)),c.a.createElement($,{dark:e},"?",c.a.createElement(_,{dark:e},"On/off text selection in your notes."))),c.a.createElement(Z,null,c.a.createElement(K,null,"Private"),c.a.createElement(Q,null,c.a.createElement(W,{type:"checkbox",onClick:function(){!0===i.current.checked?localStorage.setItem("statusnote","true"):localStorage.removeItem("statusnote")},ref:i}),c.a.createElement(U,null)),c.a.createElement($,{dark:e},"?",c.a.createElement(_,{dark:e},"Disabling it keeps your notes always public."))),c.a.createElement(Z,null,c.a.createElement(K,null,"Dark mode"),c.a.createElement(Q,null,c.a.createElement(W,{type:"checkbox",onClick:function(){!0===l.current.checked?localStorage.setItem("darkmode","true"):localStorage.removeItem("darkmode"),window.location.reload()},ref:l}),c.a.createElement(U,null)),c.a.createElement($,{dark:e},"?",c.a.createElement(_,{dark:e},"On/off dark mode."))))};function en(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 3px;\n  @media (min-width: 768px) {\n    margin-top: 15px;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(a.a)(["\n  padding: 7px 14px;\n  font-size: 1rem;\n  cursor: pointer;\n  margin-right: 10px;\n  border: 2px solid #BF0413;\n  color: #000;\n  &:hover{\n    background: #F2B705;\n  }\n   @media (min-width: 768px) {\n    font-size: 1.2rem;\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(a.a)(["\n  text-align: center;\n  font-size: 1.2rem;\n  color: #000;\n  @media (min-width: 768px) {\n    font-size: 1.3rem;\n  }\n"]);return rn=function(){return n},n}function an(){var n=Object(a.a)(["\n  display: ",";\n  z-index: 999;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 7px 14px;\n  border: 4px solid #BF0413;\n  background: #F2B705;\n  width: 80%;\n  @media (min-width: 768px) {\n    width: 400px;\n    height: 200px;\n  }\n"]);return an=function(){return n},n}function on(){var n=Object(a.a)(["\n  display: ",";\n  z-index: 998;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  opacity: 0.8;\n  background: #333;\n"]);return on=function(){return n},n}function cn(){var n=Object(a.a)(["\n  margin-left: 10px;\n  color: red;\n  width: 20px;\n  height: 20px;\n  ",":hover &{\n    transform: translateY(1px);\n  }\n"]);return cn=function(){return n},n}function ln(){var n=Object(a.a)(["\n  font-size: 1.2rem;\n  color: red;\n  ",":hover &{\n    transform: translateY(1px);\n  }\n  \n"]);return ln=function(){return n},n}function un(){var n=Object(a.a)(["\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   background-color: ",";\n   padding: 7px 14px;\n   border: 2px solid red;\n   cursor: pointer;\n   margin: 0 auto;\n\n"]);return un=function(){return n},n}var dn=i.b.button(un(),(function(n){return n.dark?"#231f20":"#E8E9E3"})),sn=i.b.p(ln(),dn),mn=i.b.svg(cn(),dn),fn=i.b.div(on(),(function(n){return n.alert?"block":"none"})),pn=i.b.div(an(),(function(n){return n.alert?"flex":"none"})),hn=i.b.p(rn()),bn=i.b.button(tn()),xn=i.b.div(en()),gn=function(n){var e=n.dark,t=Object(k.g)(),a=Object(o.useState)(!1),i=Object(r.a)(a,2),l=i[0],u=i[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(fn,{alert:l}),c.a.createElement(pn,{alert:l},c.a.createElement(hn,null,"Are you sure you want to delete your account? This operation will be irreversible."),c.a.createElement(xn,null,c.a.createElement(bn,{onClick:function(){w.a.delete("https://notesappserver.herokuapp.com/api/users/removeacc",{headers:{"auth-token":localStorage.getItem("jwtToken")}}).then((function(n){u(!1),t.push("/logout")})).catch((function(n){console.log(n)}))}},"Yes"),c.a.createElement(bn,{onClick:function(){u(!1)}},"No"))),c.a.createElement(dn,{onClick:function(){u(!0)},dark:e},c.a.createElement(sn,null,"Delete account"),c.a.createElement(mn,{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash-alt",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},c.a.createElement("path",{fill:"currentColor",d:"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"}))))},vn=t(70);function En(){var n=Object(a.a)(["\n  font-size: 1.7rem;\n  color: #F9B613;\n  margin: 5vh 0;\n  text-align: center;\n  @media (min-width: 768px) {\n    font-size: 2rem;   \n  }\n"]);return En=function(){return n},n}function wn(){var n=Object(a.a)(["\n  padding: 5vh 0 8vh 0;\n  min-height: 100vh;\n  overflow-x: hidden;\n  background-image: ",";\n  background-color: ",";\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: cover;\n"]);return wn=function(){return n},n}var kn=i.b.div(wn(),(function(n){return n.darkmode?"none":"url(".concat(p.a,")")}),(function(n){return n.darkmode&&"#231f20"})),jn=i.b.h1(En());e.default=function(){var n=Object(m.b)(),e=Object(o.useState)(!1),t=Object(r.a)(e,2),a=t[0],i=t[1];return Object(o.useEffect)((function(){null!==localStorage.getItem("darkmode")&&i(!0)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{path:"/dashboard"}),c.a.createElement(u.a,{num:4}),c.a.createElement(d.a,{num:4}),c.a.createElement("div",{onClick:function(){n(Object(s.e)()),n(Object(s.q)())}},c.a.createElement(kn,{darkmode:a},c.a.createElement(jn,null,"Settings"),c.a.createElement(nn,{dark:a}),c.a.createElement(jn,null,"Account"),c.a.createElement(N,{dark:a}),c.a.createElement(jn,{style:{color:"red"}},"DANGER ZONE"),c.a.createElement(gn,{dark:a}))),c.a.createElement(vn.a,{colordata:!0}))}}}]);
//# sourceMappingURL=9.656212b3.chunk.js.map