"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485],{6485:function(n,e,t){t.r(e),t.d(e,{default:function(){return cn}});var r=t(9439),o=t(2791),a=t(9434),i=t(7107),u=t(4507),c=t(4554),l=t(9164),s=t(890),d=t(1889),m=t(7462),f=t(3366),p=t(3733),v=t(4419),h=t(6934),x=t(1402),Z=t(5527),g=t(5878),j=t(1217);function y(n){return(0,j.Z)("MuiCard",n)}(0,g.Z)("MuiCard",["root"]);var b=t(184),C=["className","raised"],w=(0,h.ZP)(Z.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{overflow:"hidden"}})),S=o.forwardRef((function(n,e){var t=(0,x.Z)({props:n,name:"MuiCard"}),r=t.className,o=t.raised,a=void 0!==o&&o,i=(0,f.Z)(t,C),u=(0,m.Z)({},t,{raised:a}),c=function(n){var e=n.classes;return(0,v.Z)({root:["root"]},y,e)}(u);return(0,b.jsx)(w,(0,m.Z)({className:(0,p.Z)(c.root,r),elevation:a?8:void 0,ref:e,ownerState:u},i))}));function k(n){return(0,j.Z)("MuiCardContent",n)}(0,g.Z)("MuiCardContent",["root"]);var N=["className","component"],M=(0,h.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),A=o.forwardRef((function(n,e){var t=(0,x.Z)({props:n,name:"MuiCardContent"}),r=t.className,o=t.component,a=void 0===o?"div":o,i=(0,f.Z)(t,N),u=(0,m.Z)({},t,{component:a}),c=function(n){var e=n.classes;return(0,v.Z)({root:["root"]},k,e)}(u);return(0,b.jsx)(M,(0,m.Z)({as:a,className:(0,p.Z)(c.root,r),ownerState:u,ref:e},i))}));function R(n){return(0,j.Z)("MuiCardActions",n)}(0,g.Z)("MuiCardActions",["root","spacing"]);var W=["disableSpacing","className"],q=(0,h.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,!t.disableSpacing&&e.spacing]}})((function(n){var e=n.ownerState;return(0,m.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),z=o.forwardRef((function(n,e){var t=(0,x.Z)({props:n,name:"MuiCardActions"}),r=t.disableSpacing,o=void 0!==r&&r,a=t.className,i=(0,f.Z)(t,W),u=(0,m.Z)({},t,{disableSpacing:o}),c=function(n){var e=n.classes,t={root:["root",!n.disableSpacing&&"spacing"]};return(0,v.Z)(t,R,e)}(u);return(0,b.jsx)(q,(0,m.Z)({className:(0,p.Z)(c.root,a),ownerState:u,ref:e},i))})),E=t(8022),F=t(4942),I=t(1413),P=t(4708),D=t(4602),O=(0,i.Z)(),_=function(n){var e=n.contact,t=n.onUpdate,a=(0,o.useState)({name:e.name||"",number:e.number||""}),i=(0,r.Z)(a,2),s=i[0],d=i[1],m=function(n){var e=n.target,t=e.name,r=e.value;d((function(n){return(0,I.Z)((0,I.Z)({},n),{},(0,F.Z)({},t,r))}))};return(0,b.jsx)(u.Z,{theme:O,children:(0,b.jsxs)(l.Z,{component:"main",maxWidth:"xs",children:[(0,b.jsx)(P.ZP,{}),(0,b.jsxs)(c.Z,{component:"form",onSubmit:function(){t(s)},noValidate:!0,sx:{mt:1},children:[(0,b.jsx)(D.Z,{type:"text",name:"name",value:s.name,onChange:m,margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",autoComplete:"name",autoFocus:!0}),(0,b.jsx)(D.Z,{type:"text",name:"number",value:s.number,onChange:m,margin:"normal",required:!0,fullWidth:!0,label:"Number",id:"number",autoComplete:"current-password"}),(0,b.jsx)(E.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:1,mb:.5},children:"Save"})]})]})})},L=t(3634),T="NOT_FOUND";var V=function(n,e){return n===e};function B(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?V:r,a=t.maxSize,i=void 0===a?1:a,u=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),l=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:T},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return T}return{get:r,put:function(e,o){r(e)===T&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,c);function s(){var e=l.get(arguments);if(e===T){if(e=n.apply(null,arguments),u){var t=l.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return s.clearCache=function(){return l.clear()},s}function K(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function U(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var a,i=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,s=l.memoizeOptions,d=void 0===s?t:s,m=Array.isArray(d)?d:[d],f=K(r),p=n.apply(void 0,[function(){return i++,c.apply(null,arguments)}].concat(m)),v=n((function(){for(var n=[],e=f.length,t=0;t<e;t++)n.push(f[t].apply(null,arguments));return a=p.apply(null,n)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:p,dependencies:f,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return o}var G=U(B),H=function(n){return n.contacts.contacts},J=function(n){return n.contacts.isLoading},Q=G(H,(function(n){return n.contacts.filter}),(function(n,e){return n?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})):n})),X=t(7840),Y=function(){var n=(0,a.I0)();return(0,b.jsx)(l.Z,{component:"main",maxWidth:"xs",children:(0,b.jsx)(D.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Find contacts by name",name:"filter",type:"text",autoComplete:"email",autoFocus:!0,onChange:function(e){n((0,X.T)(e.target.value))}})})},$=t(8860),nn=(0,i.Z)();function en(){var n=(0,a.I0)(),e=(0,a.v9)(H),t=(0,a.v9)(J),i=(0,o.useState)(null),m=(0,r.Z)(i,2),f=m[0],p=m[1],v=(0,a.v9)(Q),h=function(e){n((0,L.Tk)({id:f.id,info:e})),p(null)};return(0,b.jsx)(u.Z,{theme:nn,children:(0,b.jsxs)("main",{children:[(0,b.jsx)(c.Z,{sx:{bgcolor:"background.paper",pt:4,pb:3},children:(0,b.jsx)(l.Z,{maxWidth:"sm",children:(0,b.jsx)(s.Z,{component:"h1",variant:"h5",align:"center",color:"text.primary",gutterBottom:!0,children:"Contacts"})})}),(0,b.jsx)(Y,{}),t&&(0,b.jsx)($.Z,{}),(0,b.jsx)(l.Z,{sx:{py:8},maxWidth:"lg",children:(0,b.jsx)(d.ZP,{container:!0,spacing:4,children:e&&v.map((function(e){return(0,b.jsx)(d.ZP,{item:!0,xs:12,sm:5,md:6,children:e===f?(0,b.jsx)(_,{contact:f,onUpdate:h}):(0,b.jsxs)(S,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,b.jsxs)(A,{sx:{flexGrow:1},children:[(0,b.jsx)(s.Z,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),(0,b.jsx)(s.Z,{children:e.number})]}),(0,b.jsxs)(z,{children:[(0,b.jsx)(E.Z,{size:"small",onClick:function(){return function(n){p(n)}(e)},children:"Edit"}),(0,b.jsx)(E.Z,{size:"small",onClick:function(){return t=e.id,n((0,L.GK)(t)),void(f&&f.id===t&&p(null));var t},children:"Delete"})]})]})},e.id)}))})})]})})}var tn=t(3044),rn=t(5264),on=t(9145),an=(0,i.Z)(),un=function(n){var e=n.contact,t=(0,a.v9)(H);return(0,b.jsx)(u.Z,{theme:an,children:(0,b.jsxs)(l.Z,{component:"main",maxWidth:"xs",children:[(0,b.jsx)(P.ZP,{}),(0,b.jsxs)(c.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,b.jsx)(tn.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,b.jsx)(on.Z,{})}),(0,b.jsx)(s.Z,{component:"h1",variant:"h5",children:"Add contact"}),(0,b.jsxs)(c.Z,{component:"form",onSubmit:function(n){n.preventDefault();var r=n.target.elements,o=r.name,a=r.number,i={name:o.value,number:a.value},u=t.some((function(n){return n.name===o.value}));u?rn.Notify.warning("".concat(o.value," is already in contacts!")):e(i),o.value="",a.value=""},noValidate:!0,sx:{mt:1},children:[(0,b.jsx)(D.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",type:"name",name:"name",autoComplete:"name",autoFocus:!0}),(0,b.jsx)(D.Z,{margin:"normal",required:!0,fullWidth:!0,name:"number",type:"number",label:"Number",id:"number",autoComplete:"current-password"}),(0,b.jsx)(E.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})]})]})})},cn=function(){var n=(0,a.I0)();return(0,o.useEffect)((function(){n((0,L.K2)())}),[n]),(0,b.jsxs)("div",{children:[(0,b.jsx)(un,{contact:function(e){n((0,L.uK)(e))}}),(0,b.jsx)(en,{})]})}},9145:function(n,e,t){var r=t(4836);e.Z=void 0;var o=r(t(5649)),a=t(184),i=(0,o.default)((0,a.jsx)("path",{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"}),"AddIcCall");e.Z=i}}]);
//# sourceMappingURL=485.d2366780.chunk.js.map