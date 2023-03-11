"use strict";(self.webpackChunkreactive_cabbage=self.webpackChunkreactive_cabbage||[]).push([[988],{7653:function(n,e,t){t.d(e,{Z:function(){return u}});var i,r,o=t(9439),a=t(2791),d=t(9434),p=t(5570),c=t(6351),x=t(1093),l=t(168),s=t(8789),f=s.ZP.form(i||(i=(0,l.Z)(["\n  /* margin: 0 auto 50px; */\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    gap: 20px;\n    margin: 0 auto;\n\n    @media screen and (min-width: 320px) and (max-width: 767px) {\n      margin: 0 auto;\n      margin-bottom: 0;\n    }\n  }\n\n  .title {\n    color: rgba(82, 85, 95, 0.7);\n    margin-bottom: 8px;\n    font-size: 12px;\n    line-height: calc(14 / 12);\n    font-weight: 500;\n    text-align: center;\n  }\n  .inputTag {\n    font-weight: 700;\n    width: 125px;\n    height: 44px;\n    /* padding: 22px 0px; */\n    color: #52555f;\n    text-align: center;\n    border: 2px solid white;\n    border-radius: 16px;\n    outline: none;\n    background-color: #f2f5fc;\n    ::-webkit-outer-spin-button,\n    ::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n    :focus {\n      background-color: #fff;\n    }\n    &::placeholder {\n      color: #000;\n      letter-spacing: 0.02em;\n      font-weight: 700;\n      font-size: 12px;\n      line-height: 1.17;\n    }\n    @media screen and (min-width: 768px) {\n      width: 125px;\n      /* padding: 12px 0px; */\n      border-radius: 16px;\n    }\n\n    @media screen and (min-width: 320px) and (max-width: 767px) {\n      width: 140px;\n      height: 44px;\n      padding: 20px 0px;\n      border-radius: 22px 0 0 22px;\n    }\n  }\n  .btn {\n    font-family: 'Roboto';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 12px;\n    background-color: #f2f5fc;\n    width: 125px;\n    height: 44px;\n    padding: 12px 18px;\n    color: rgba(82, 85, 95, 0.7);\n    text-align: left;\n    text-transform: uppercase;\n    border: 2px solid white;\n    border-left: none;\n    border-radius: 16px;\n    outline: none;\n    transition-property: color, background-color, border-color, box-shadow,\n      transform;\n    transition-duration: 250ms;\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover,\n    :focus {\n      color: white;\n      background-color: #ff751d;\n      border-color: #ff751d;\n      box-shadow: 0px 0px 2px 1px #f5f6fb;\n      transform: scale(1.01);\n    }\n    @media screen and (min-width: 768px) {\n      width: 125px;\n      padding: 12px 6px;\n      border-radius: 16px;\n      text-align: center;\n      border-left: 2px solid white;\n    }\n    @media screen and (min-width: 320px) and (max-width: 767px) {\n      width: 140px;\n      height: 44px;\n      border-radius: 0 22px 22px 0;\n    }\n  }\n"]))),h=s.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    gap: 0;\n  }\n"]))),m=t(3329),u=function(){var n,e=(0,d.v9)(c.QM),t=(0,d.I0)(),i=(0,a.useState)(!1),r=(0,o.Z)(i,2),l=r[0],s=r[1],u=(0,a.useRef)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(f,{onSubmit:function(e){e.preventDefault(),n=e.target.balance.value},ref:u,children:[(0,m.jsx)("h2",{className:"title",children:"Balance:"}),(0,m.jsxs)(h,{children:[(0,m.jsx)("input",{onChange:function(e){n=e.target.value},className:"inputTag",type:"number",name:"balance",title:"Please, enter your balance",pattern:"[0-9, .UAH]*",placeholder:"".concat(Number(e).toFixed(2)," UAH"),required:!0}),(0,m.jsx)("button",{type:"submit",className:"btn",onClick:function(){s(!0)},children:"Confirm"})]})]}),l&&(0,m.jsx)(x.Z,{changeBalance:"true",closeModal:function(){s(!1)},dispatch:function(){t((0,p.Fg)(n)),u.current.reset()},text:"SURE",balance:e,onDelete:function(){},children:"Are you sure?"})]})}},8079:function(n,e,t){t.r(e),t.d(e,{HomePage:function(){return g},default:function(){return b}});var i,r,o=t(7689),a=t(1809),d=t(2791),p=["title","titleId"];function c(){return c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},c.apply(this,arguments)}function x(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function l(n,e){var t=n.title,o=n.titleId,a=x(n,p);return d.createElement("svg",c({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":o},a),t?d.createElement("title",{id:o},t):null,i||(i=d.createElement("g",{clipPath:"url(#clip0_19401_294)"},d.createElement("path",{d:"M5 9.2H8V19H5V9.2ZM10.6 5H13.4V19H10.6V5ZM16.2 13H19V19H16.2V13Z",fill:"#52555F"}))),r||(r=d.createElement("defs",null,d.createElement("clipPath",{id:"clip0_19401_294"},d.createElement("rect",{width:24,height:24,fill:"white"})))))}var s=d.forwardRef(l),f=(t.p,t(8226)),h=t(7653),m=t(6214),u=t(3329),g=function(){var n=(0,o.TH)(),e="/income"===n.pathname?1:0,t=(0,f.a)().isLoggedIn,i="/"===n.pathname?"/income":n.pathname,r=(0,o.s0)();return(0,d.useEffect)((function(){r(i)}),[r,t,i]),(0,u.jsx)(u.Fragment,{children:t?(0,u.jsxs)(m.Aq,{children:[(0,u.jsxs)(m.j$,{children:[(0,u.jsx)(h.Z,{}),(0,u.jsxs)(m.p,{to:"/reports",state:{from:n},children:[(0,u.jsx)("span",{children:"Reports"}),(0,u.jsx)(s,{className:"reportsIcon"})]})]}),(0,u.jsxs)(m.dt,{selectedIndex:e,onSelect:function(){},children:[(0,u.jsxs)(m.fq,{children:[(0,u.jsx)(m.g,{children:(0,u.jsx)(m.w2,{to:"expenses",style:{textDecoration:"none"},children:"Expenses"})}),(0,u.jsx)(m.g,{children:(0,u.jsx)(m.w2,{to:"income",style:{textDecoration:"none"},children:"Income"})})]}),(0,u.jsxs)(m.UE,{children:[(0,u.jsx)(a.x4,{children:(0,u.jsx)(o.j3,{})}),(0,u.jsx)(a.x4,{children:(0,u.jsx)(o.j3,{})})]})]})]}):(0,u.jsx)(o.j3,{})})},b=g},6214:function(n,e,t){t.d(e,{Aq:function(){return g},UE:function(){return k},dt:function(){return b},fq:function(){return j},g:function(){return w},j$:function(){return Z},p:function(){return y},w2:function(){return v}});var i,r,o,a,d,p,c,x,l,s,f=t(168),h=t(8789),m=t(1809),u=t(1087),g=(t(8200),h.ZP.div(i||(i=(0,f.Z)(["\n  top: 0;\n  left: 0;\n  height: 526px;\n  background-color: #f5f6fb;\n  border-bottom-left-radius: 10%;\n  width: 100%;\n\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    height: 296px;\n  }\n"])))),b=(0,h.ZP)(m.mQ)(r||(r=(0,f.Z)(["\n  margin: 0 auto;\n  background-color: transparent;\n  @media (min-width: 768px) {\n    max-width: 704px;\n    border-radius: 30px;\n    & .react-tabs__tab-panel--selected {\n      position: relative;\n      top: -24px;\n      border-radius: 0 30px 30px 30px;\n      box-shadow: 0px 50px 60px rgba(170, 178, 197, 0.2);\n      background-color: #ffffff;\n    }\n  }\n  @media (min-width: 1280px) {\n    max-width: 1098px;\n  }\n  & .react-tabs__tab-list {\n    border: none;\n    margin: 0;\n  }\n"]))),w=(0,h.ZP)(m.OK)(o||(o=(0,f.Z)(["\n  z-index: 100;\n  background-color: #f7741d;\n  width: 50%;\n  height: 53px;\n  padding: 19px 12px;\n  text-align: center;\n  transition: background-color 250ms ease;\n\n  @media (min-width: 768px) {\n    background-color: #fefefe;\n    padding: 13px 12px;\n    width: 138px;\n    height: 40px;\n    border-radius: 30px 30px 0 0;\n  }\n  .active {\n    color: #ff751d;\n  }\n"]))),j=(0,h.ZP)(m.td)(a||(a=(0,f.Z)(["\n  display: flex;\n  width: 100%;\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  margin: 0;\n\n  @media (min-width: 768px) {\n    position: relative;\n    width: 276px;\n  }\n\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    bottom: -134px;\n  }\n"]))),v=(0,h.ZP)(u.OL)(d||(d=(0,f.Z)(["\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.17;\n  text-align: center;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  transition: color 250ms ease;\n  @media (min-width: 768px) {\n    margin: 0px 25px;\n    color: black;\n  }\n"]))),y=(0,h.ZP)(u.rU)(p||(p=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 45px;\n  text-align: center;\n  text-decoration: none;\n  font-size: 12px;\n  line-height: 1.9;\n  font-weight: 400;\n  color: rgba(82, 85, 95, 0.7);\n  :hover,\n  :focus {\n    color: #ff751d;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 0;\n  }\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    margin-bottom: 32px;\n  }\n  .reportsIcon {\n    margin-left: 15px;\n    width: 24px;\n    height: 24px;\n    fill: #ff751d;\n\n    :hover .reportsIcon,\n    :focus .reportsIcon {\n      fill: #ff751d;\n    }\n  }\n"]))),Z=h.ZP.div(c||(c=(0,f.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding: 40px 140px 8px;\n  margin-bottom: 32px;\n\n  @media screen and (min-width: 320px) and (max-width: 767px) {\n    flex-direction: column;\n    padding: 40px 16px 8px;\n    flex-wrap: wrap-reverse;\n    margin-bottom: 0;\n    flex-direction: column-reverse;\n  }\n"]))),k=(h.ZP.div(x||(x=(0,f.Z)(["\n  padding-top: 14px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: center;\n  gap: 35px;\n  flex-direction: column-reverse;\n\n  .reportLink {\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    align-items: flex-end;\n    text-decoration: none;\n    font-size: 12px;\n    color: rgba(82, 85, 95, 0.7);\n    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    :hover,\n    :focus {\n      color: #ff751d;\n    }\n  }\n\n  @media (min-width: 768px) {\n    gap: 251px;\n    flex-direction: row;\n    align-items: center;\n    padding-top: 40px;\n    max-width: 704pxpx;\n    margin-bottom: 60px;\n  }\n\n  @media (min-width: 1280px) {\n    width: 1098px;\n    gap: 298px;\n    justify-content: flex-end;\n  }\n"]))),h.ZP.div(l||(l=(0,f.Z)(["\n  position: relative;\n  top: 10px;\n"]))));h.ZP.div(s||(s=(0,f.Z)(["\n  padding: 15px;\n  display: flex;\n"])))}}]);
//# sourceMappingURL=988.c0552255.chunk.js.map