import{Y as qe,Z as pe,$ as ut,J as me,a0 as ke,r as B,c as P,d as Q,a1 as Ee,w as ie,a2 as Je,e as Oe,t as Ye,a3 as Ae,j as ae,y as Pe,D as re,s as Y,S as g,_ as Ze,P as Ke,a4 as dt,a5 as se,a6 as ve,a7 as ct,g as He,h as Qe,a8 as pt,a9 as mt,p as E,aa as vt,n as Xe,ab as gt,u as ht,ac as yt,l as R,k as bt,z as wt,v as Re,F as ge,B as Ne,A as Me,q as he,ad as Ft,ae as We,af as xt,ag as _t,R as qt,U as Et}from"./index-9677e2f8.js";import{i as Ot,c as et,e as tt,g as ue,a as de,E as $e,b as At,d as Le}from"./index-41153a34.js";import{b as Pt,E as St,a as Ie,c as Vt}from"./index-950dd693.js";function ye(){if(!arguments.length)return[];var i=arguments[0];return Ot(i)?i:[i]}var jt=4;function Be(i){return Pt(i,jt)}const Rt=qe({size:{type:String,values:et},disabled:Boolean}),Nt=qe({...Rt,model:Object,rules:{type:pe(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:Boolean,scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),Mt={validate:(i,e,t)=>(ut(i)||me(i))&&ke(e)&&me(t)};function Wt(){const i=B([]),e=P(()=>{if(!i.value.length)return"0";const s=Math.max(...i.value);return s?`${s}px`:""});function t(s){const a=i.value.indexOf(s);return a===-1&&e.value,a}function n(s,a){if(s&&a){const o=t(a);i.value.splice(o,1,s)}else s&&i.value.push(s)}function r(s){const a=t(s);a>-1&&i.value.splice(a,1)}return{autoLabelWidth:e,registerLabelWidth:n,deregisterLabelWidth:r}}const ee=(i,e)=>{const t=ye(e);return t.length>0?i.filter(n=>n.prop&&t.includes(n.prop)):i},$t="ElForm",Lt=Q({name:$t}),It=Q({...Lt,props:Nt,emits:Mt,setup(i,{expose:e,emit:t}){const n=i,r=[],s=tt(),a=Ee("form"),o=P(()=>{const{labelPosition:v,inline:f}=n;return[a.b(),a.m(s.value||"default"),{[a.m(`label-${v}`)]:v,[a.m("inline")]:f}]}),l=v=>{r.push(v)},m=v=>{v.prop&&r.splice(r.indexOf(v),1)},d=(v=[])=>{n.model&&ee(r,v).forEach(f=>f.resetField())},b=(v=[])=>{ee(r,v).forEach(f=>f.clearValidate())},F=P(()=>!!n.model),O=v=>{if(r.length===0)return[];const f=ee(r,v);return f.length?f:[]},A=async v=>w(void 0,v),c=async(v=[])=>{if(!F.value)return!1;const f=O(v);if(f.length===0)return!0;let y={};for(const _ of f)try{await _.validate("")}catch(q){y={...y,...q}}return Object.keys(y).length===0?!0:Promise.reject(y)},w=async(v=[],f)=>{const y=!Ke(f);try{const _=await c(v);return _===!0&&(f==null||f(_)),_}catch(_){if(_ instanceof Error)throw _;const q=_;return n.scrollToError&&u(Object.keys(q)[0]),f==null||f(!1,q),y&&Promise.reject(q)}},u=v=>{var f;const y=ee(r,v)[0];y&&((f=y.$el)==null||f.scrollIntoView(n.scrollIntoViewOptions))};return ie(()=>n.rules,()=>{n.validateOnRuleChange&&A().catch(v=>dt())},{deep:!0}),Je(Ae,Oe({...Ye(n),emit:t,resetFields:d,clearValidate:b,validateField:w,addField:l,removeField:m,...Wt()})),e({validate:A,validateField:w,resetFields:d,clearValidate:b,scrollToField:u}),(v,f)=>(ae(),Pe("form",{class:Y(g(o))},[re(v.$slots,"default")],2))}});var Bt=Ze(It,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function C(){return C=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},C.apply(this,arguments)}function zt(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,H(i,e)}function be(i){return be=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},be(i)}function H(i,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},H(i,e)}function Ct(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ne(i,e,t){return Ct()?ne=Reflect.construct.bind():ne=function(r,s,a){var o=[null];o.push.apply(o,s);var l=Function.bind.apply(r,o),m=new l;return a&&H(m,a.prototype),m},ne.apply(null,arguments)}function Tt(i){return Function.toString.call(i).indexOf("[native code]")!==-1}function we(i){var e=typeof Map=="function"?new Map:void 0;return we=function(n){if(n===null||!Tt(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return ne(n,arguments,be(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),H(r,n)},we(i)}var Dt=/%[sdj%]/g,Ut=function(){};typeof process<"u"&&process.env;function Fe(i){if(!i||!i.length)return null;var e={};return i.forEach(function(t){var n=t.field;e[n]=e[n]||[],e[n].push(t)}),e}function M(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var r=0,s=t.length;if(typeof i=="function")return i.apply(null,t);if(typeof i=="string"){var a=i.replace(Dt,function(o){if(o==="%%")return"%";if(r>=s)return o;switch(o){case"%s":return String(t[r++]);case"%d":return Number(t[r++]);case"%j":try{return JSON.stringify(t[r++])}catch{return"[Circular]"}break;default:return o}});return a}return i}function Gt(i){return i==="string"||i==="url"||i==="hex"||i==="email"||i==="date"||i==="pattern"}function S(i,e){return!!(i==null||e==="array"&&Array.isArray(i)&&!i.length||Gt(e)&&typeof i=="string"&&!i)}function kt(i,e,t){var n=[],r=0,s=i.length;function a(o){n.push.apply(n,o||[]),r++,r===s&&t(n)}i.forEach(function(o){e(o,a)})}function ze(i,e,t){var n=0,r=i.length;function s(a){if(a&&a.length){t(a);return}var o=n;n=n+1,o<r?e(i[o],s):t([])}s([])}function Jt(i){var e=[];return Object.keys(i).forEach(function(t){e.push.apply(e,i[t]||[])}),e}var Ce=function(i){zt(e,i);function e(t,n){var r;return r=i.call(this,"Async Validation Error")||this,r.errors=t,r.fields=n,r}return e}(we(Error));function Yt(i,e,t,n,r){if(e.first){var s=new Promise(function(F,O){var A=function(u){return n(u),u.length?O(new Ce(u,Fe(u))):F(r)},c=Jt(i);ze(c,t,A)});return s.catch(function(F){return F}),s}var a=e.firstFields===!0?Object.keys(i):e.firstFields||[],o=Object.keys(i),l=o.length,m=0,d=[],b=new Promise(function(F,O){var A=function(w){if(d.push.apply(d,w),m++,m===l)return n(d),d.length?O(new Ce(d,Fe(d))):F(r)};o.length||(n(d),F(r)),o.forEach(function(c){var w=i[c];a.indexOf(c)!==-1?ze(w,t,A):kt(w,t,A)})});return b.catch(function(F){return F}),b}function Zt(i){return!!(i&&i.message!==void 0)}function Kt(i,e){for(var t=i,n=0;n<e.length;n++){if(t==null)return t;t=t[e[n]]}return t}function Te(i,e){return function(t){var n;return i.fullFields?n=Kt(e,i.fullFields):n=e[t.field||i.fullField],Zt(t)?(t.field=t.field||i.fullField,t.fieldValue=n,t):{message:typeof t=="function"?t():t,fieldValue:n,field:t.field||i.fullField}}}function De(i,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];typeof n=="object"&&typeof i[t]=="object"?i[t]=C({},i[t],n):i[t]=n}}return i}var rt=function(e,t,n,r,s,a){e.required&&(!n.hasOwnProperty(e.field)||S(t,a||e.type))&&r.push(M(s.messages.required,e.fullField))},Ht=function(e,t,n,r,s){(/^\s+$/.test(t)||t==="")&&r.push(M(s.messages.whitespace,e.fullField))},te,Qt=function(){if(te)return te;var i="[a-fA-F\\d:]",e=function(y){return y&&y.includeBoundaries?"(?:(?<=\\s|^)(?="+i+")|(?<="+i+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",r=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+t+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+t+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+t+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+t+"$)|(?:^"+r+"$)"),a=new RegExp("^"+t+"$"),o=new RegExp("^"+r+"$"),l=function(y){return y&&y.exact?s:new RegExp("(?:"+e(y)+t+e(y)+")|(?:"+e(y)+r+e(y)+")","g")};l.v4=function(f){return f&&f.exact?a:new RegExp(""+e(f)+t+e(f),"g")},l.v6=function(f){return f&&f.exact?o:new RegExp(""+e(f)+r+e(f),"g")};var m="(?:(?:[a-z]+:)?//)",d="(?:\\S+(?::\\S*)?@)?",b=l.v4().source,F=l.v6().source,O="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",A="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",c="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",w="(?::\\d{2,5})?",u='(?:[/?#][^\\s"]*)?',v="(?:"+m+"|www\\.)"+d+"(?:localhost|"+b+"|"+F+"|"+O+A+c+")"+w+u;return te=new RegExp("(?:^"+v+"$)","i"),te},Ue={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Z={integer:function(e){return Z.number(e)&&parseInt(e,10)===e},float:function(e){return Z.number(e)&&!Z.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!Z.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Ue.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Qt())},hex:function(e){return typeof e=="string"&&!!e.match(Ue.hex)}},Xt=function(e,t,n,r,s){if(e.required&&t===void 0){rt(e,t,n,r,s);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;a.indexOf(o)>-1?Z[o](t)||r.push(M(s.messages.types[o],e.fullField,e.type)):o&&typeof t!==e.type&&r.push(M(s.messages.types[o],e.fullField,e.type))},er=function(e,t,n,r,s){var a=typeof e.len=="number",o=typeof e.min=="number",l=typeof e.max=="number",m=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,d=t,b=null,F=typeof t=="number",O=typeof t=="string",A=Array.isArray(t);if(F?b="number":O?b="string":A&&(b="array"),!b)return!1;A&&(d=t.length),O&&(d=t.replace(m,"_").length),a?d!==e.len&&r.push(M(s.messages[b].len,e.fullField,e.len)):o&&!l&&d<e.min?r.push(M(s.messages[b].min,e.fullField,e.min)):l&&!o&&d>e.max?r.push(M(s.messages[b].max,e.fullField,e.max)):o&&l&&(d<e.min||d>e.max)&&r.push(M(s.messages[b].range,e.fullField,e.min,e.max))},G="enum",tr=function(e,t,n,r,s){e[G]=Array.isArray(e[G])?e[G]:[],e[G].indexOf(t)===-1&&r.push(M(s.messages[G],e.fullField,e[G].join(", ")))},rr=function(e,t,n,r,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||r.push(M(s.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||r.push(M(s.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},h={required:rt,whitespace:Ht,type:Xt,range:er,enum:tr,pattern:rr},nr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(S(t,"string")&&!e.required)return n();h.required(e,t,r,a,s,"string"),S(t,"string")||(h.type(e,t,r,a,s),h.range(e,t,r,a,s),h.pattern(e,t,r,a,s),e.whitespace===!0&&h.whitespace(e,t,r,a,s))}n(a)},ir=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();h.required(e,t,r,a,s),t!==void 0&&h.type(e,t,r,a,s)}n(a)},ar=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(t===""&&(t=void 0),S(t)&&!e.required)return n();h.required(e,t,r,a,s),t!==void 0&&(h.type(e,t,r,a,s),h.range(e,t,r,a,s))}n(a)},sr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();h.required(e,t,r,a,s),t!==void 0&&h.type(e,t,r,a,s)}n(a)},or=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();h.required(e,t,r,a,s),S(t)||h.type(e,t,r,a,s)}n(a)},lr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();h.required(e,t,r,a,s),t!==void 0&&(h.type(e,t,r,a,s),h.range(e,t,r,a,s))}n(a)},fr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();h.required(e,t,r,a,s),t!==void 0&&(h.type(e,t,r,a,s),h.range(e,t,r,a,s))}n(a)},ur=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(t==null&&!e.required)return n();h.required(e,t,r,a,s,"array"),t!=null&&(h.type(e,t,r,a,s),h.range(e,t,r,a,s))}n(a)},dr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();h.required(e,t,r,a,s),t!==void 0&&h.type(e,t,r,a,s)}n(a)},cr="enum",pr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();h.required(e,t,r,a,s),t!==void 0&&h[cr](e,t,r,a,s)}n(a)},mr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(S(t,"string")&&!e.required)return n();h.required(e,t,r,a,s),S(t,"string")||h.pattern(e,t,r,a,s)}n(a)},vr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(S(t,"date")&&!e.required)return n();if(h.required(e,t,r,a,s),!S(t,"date")){var l;t instanceof Date?l=t:l=new Date(t),h.type(e,l,r,a,s),l&&h.range(e,l.getTime(),r,a,s)}}n(a)},gr=function(e,t,n,r,s){var a=[],o=Array.isArray(t)?"array":typeof t;h.required(e,t,r,a,s,o),n(a)},ce=function(e,t,n,r,s){var a=e.type,o=[],l=e.required||!e.required&&r.hasOwnProperty(e.field);if(l){if(S(t,a)&&!e.required)return n();h.required(e,t,r,o,s,a),S(t,a)||h.type(e,t,r,o,s)}n(o)},hr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(S(t)&&!e.required)return n();h.required(e,t,r,a,s)}n(a)},K={string:nr,method:ir,number:ar,boolean:sr,regexp:or,integer:lr,float:fr,array:ur,object:dr,enum:pr,pattern:mr,date:vr,url:ce,hex:ce,email:ce,required:gr,any:hr};function xe(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var _e=xe(),X=function(){function i(t){this.rules=null,this._messages=_e,this.define(t)}var e=i.prototype;return e.define=function(n){var r=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(s){var a=n[s];r.rules[s]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=De(xe(),n)),this._messages},e.validate=function(n,r,s){var a=this;r===void 0&&(r={}),s===void 0&&(s=function(){});var o=n,l=r,m=s;if(typeof l=="function"&&(m=l,l={}),!this.rules||Object.keys(this.rules).length===0)return m&&m(null,o),Promise.resolve(o);function d(c){var w=[],u={};function v(y){if(Array.isArray(y)){var _;w=(_=w).concat.apply(_,y)}else w.push(y)}for(var f=0;f<c.length;f++)v(c[f]);w.length?(u=Fe(w),m(w,u)):m(null,o)}if(l.messages){var b=this.messages();b===_e&&(b=xe()),De(b,l.messages),l.messages=b}else l.messages=this.messages();var F={},O=l.keys||Object.keys(this.rules);O.forEach(function(c){var w=a.rules[c],u=o[c];w.forEach(function(v){var f=v;typeof f.transform=="function"&&(o===n&&(o=C({},o)),u=o[c]=f.transform(u)),typeof f=="function"?f={validator:f}:f=C({},f),f.validator=a.getValidationMethod(f),f.validator&&(f.field=c,f.fullField=f.fullField||c,f.type=a.getType(f),F[c]=F[c]||[],F[c].push({rule:f,value:u,source:o,field:c}))})});var A={};return Yt(F,l,function(c,w){var u=c.rule,v=(u.type==="object"||u.type==="array")&&(typeof u.fields=="object"||typeof u.defaultField=="object");v=v&&(u.required||!u.required&&c.value),u.field=c.field;function f(q,$){return C({},$,{fullField:u.fullField+"."+q,fullFields:u.fullFields?[].concat(u.fullFields,[q]):[q]})}function y(q){q===void 0&&(q=[]);var $=Array.isArray(q)?q:[q];!l.suppressWarning&&$.length&&i.warning("async-validator:",$),$.length&&u.message!==void 0&&($=[].concat(u.message));var N=$.map(Te(u,o));if(l.first&&N.length)return A[u.field]=1,w(N);if(!v)w(N);else{if(u.required&&!c.value)return u.message!==void 0?N=[].concat(u.message).map(Te(u,o)):l.error&&(N=[l.error(u,M(l.messages.required,u.field))]),w(N);var z={};u.defaultField&&Object.keys(c.value).map(function(L){z[L]=u.defaultField}),z=C({},z,c.rule.fields);var k={};Object.keys(z).forEach(function(L){var W=z[L],oe=Array.isArray(W)?W:[W];k[L]=oe.map(f.bind(null,L))});var T=new i(k);T.messages(l.messages),c.rule.options&&(c.rule.options.messages=l.messages,c.rule.options.error=l.error),T.validate(c.value,c.rule.options||l,function(L){var W=[];N&&N.length&&W.push.apply(W,N),L&&L.length&&W.push.apply(W,L),w(W.length?W:null)})}}var _;if(u.asyncValidator)_=u.asyncValidator(u,c.value,y,c.source,l);else if(u.validator){try{_=u.validator(u,c.value,y,c.source,l)}catch(q){console.error==null||console.error(q),l.suppressValidatorError||setTimeout(function(){throw q},0),y(q.message)}_===!0?y():_===!1?y(typeof u.message=="function"?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):_ instanceof Array?y(_):_ instanceof Error&&y(_.message)}_&&_.then&&_.then(function(){return y()},function(q){return y(q)})},function(c){d(c)},o)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!K.hasOwnProperty(n.type))throw new Error(M("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var r=Object.keys(n),s=r.indexOf("message");return s!==-1&&r.splice(s,1),r.length===1&&r[0]==="required"?K.required:K[this.getType(n)]||void 0},i}();X.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");K[e]=t};X.warning=Ut;X.messages=_e;X.validators=K;const yr=["","error","validating","success"],br=qe({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:pe([String,Array])},required:{type:Boolean,default:void 0},rules:{type:pe([Object,Array])},error:String,validateStatus:{type:String,values:yr},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:et}}),Ge="ElLabelWrap";var wr=Q({name:Ge,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(i,{slots:e}){const t=se(Ae,void 0),n=se(ve);n||ct(Ge,"usage: <el-form-item><label-wrap /></el-form-item>");const r=Ee("form"),s=B(),a=B(0),o=()=>{var d;if((d=s.value)!=null&&d.firstElementChild){const b=window.getComputedStyle(s.value.firstElementChild).width;return Math.ceil(Number.parseFloat(b))}else return 0},l=(d="update")=>{Xe(()=>{e.default&&i.isAutoWidth&&(d==="update"?a.value=o():d==="remove"&&(t==null||t.deregisterLabelWidth(a.value)))})},m=()=>l("update");return He(()=>{m()}),Qe(()=>{l("remove")}),pt(()=>m()),ie(a,(d,b)=>{i.updateAll&&(t==null||t.registerLabelWidth(d,b))}),mt(P(()=>{var d,b;return(b=(d=s.value)==null?void 0:d.firstElementChild)!=null?b:null}),m),()=>{var d,b;if(!e)return null;const{isAutoWidth:F}=i;if(F){const O=t==null?void 0:t.autoLabelWidth,A=n==null?void 0:n.hasLabel,c={};if(A&&O&&O!=="auto"){const w=Math.max(0,Number.parseInt(O,10)-a.value),u=t.labelPosition==="left"?"marginRight":"marginLeft";w&&(c[u]=`${w}px`)}return E("div",{ref:s,class:[r.be("item","label-wrap")],style:c},[(d=e.default)==null?void 0:d.call(e)])}else return E(vt,{ref:s},[(b=e.default)==null?void 0:b.call(e)])}}});const Fr=["role","aria-labelledby"],xr=Q({name:"ElFormItem"}),_r=Q({...xr,props:br,setup(i,{expose:e}){const t=i,n=gt(),r=se(Ae,void 0),s=se(ve,void 0),a=tt(void 0,{formItem:!1}),o=Ee("form-item"),l=ht().value,m=B([]),d=B(""),b=yt(d,100),F=B(""),O=B();let A,c=!1;const w=P(()=>{if((r==null?void 0:r.labelPosition)==="top")return{};const p=We(t.labelWidth||(r==null?void 0:r.labelWidth)||"");return p?{width:p}:{}}),u=P(()=>{if((r==null?void 0:r.labelPosition)==="top"||r!=null&&r.inline)return{};if(!t.label&&!t.labelWidth&&z)return{};const p=We(t.labelWidth||(r==null?void 0:r.labelWidth)||"");return!t.label&&!n.label?{marginLeft:p}:{}}),v=P(()=>[o.b(),o.m(a.value),o.is("error",d.value==="error"),o.is("validating",d.value==="validating"),o.is("success",d.value==="success"),o.is("required",oe.value||t.required),o.is("no-asterisk",r==null?void 0:r.hideRequiredAsterisk),(r==null?void 0:r.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[o.m("feedback")]:r==null?void 0:r.statusIcon}]),f=P(()=>ke(t.inlineMessage)?t.inlineMessage:(r==null?void 0:r.inlineMessage)||!1),y=P(()=>[o.e("error"),{[o.em("error","inline")]:f.value}]),_=P(()=>t.prop?me(t.prop)?t.prop:t.prop.join("."):""),q=P(()=>!!(t.label||n.label)),$=P(()=>t.for||(m.value.length===1?m.value[0]:void 0)),N=P(()=>!$.value&&q.value),z=!!s,k=P(()=>{const p=r==null?void 0:r.model;if(!(!p||!t.prop))return ue(p,t.prop).value}),T=P(()=>{const{required:p}=t,x=[];t.rules&&x.push(...ye(t.rules));const j=r==null?void 0:r.rules;if(j&&t.prop){const V=ue(j,t.prop).value;V&&x.push(...ye(V))}if(p!==void 0){const V=x.map((I,U)=>[I,U]).filter(([I])=>Object.keys(I).includes("required"));if(V.length>0)for(const[I,U]of V)I.required!==p&&(x[U]={...I,required:p});else x.push({required:p})}return x}),L=P(()=>T.value.length>0),W=p=>T.value.filter(j=>!j.trigger||!p?!0:Array.isArray(j.trigger)?j.trigger.includes(p):j.trigger===p).map(({trigger:j,...V})=>V),oe=P(()=>T.value.some(p=>p.required)),it=P(()=>{var p;return b.value==="error"&&t.showMessage&&((p=r==null?void 0:r.showMessage)!=null?p:!0)}),Se=P(()=>`${t.label||""}${(r==null?void 0:r.labelSuffix)||""}`),D=p=>{d.value=p},at=p=>{var x,j;const{errors:V,fields:I}=p;(!V||!I)&&console.error(p),D("error"),F.value=V?(j=(x=V==null?void 0:V[0])==null?void 0:x.message)!=null?j:`${t.prop} is required`:"",r==null||r.emit("validate",t.prop,!1,F.value)},st=()=>{D("success"),r==null||r.emit("validate",t.prop,!0,"")},ot=async p=>{const x=_.value;return new X({[x]:p}).validate({[x]:k.value},{firstFields:!0}).then(()=>(st(),!0)).catch(V=>(at(V),Promise.reject(V)))},Ve=async(p,x)=>{if(c||!t.prop)return!1;const j=Ke(x);if(!L.value)return x==null||x(!1),!1;const V=W(p);return V.length===0?(x==null||x(!0),!0):(D("validating"),ot(V).then(()=>(x==null||x(!0),!0)).catch(I=>{const{fields:U}=I;return x==null||x(!1,U),j?!1:Promise.reject(U)}))},le=()=>{D(""),F.value="",c=!1},je=async()=>{const p=r==null?void 0:r.model;if(!p||!t.prop)return;const x=ue(p,t.prop);c=!0,x.value=Be(A),await Xe(),le(),c=!1},lt=p=>{m.value.includes(p)||m.value.push(p)},ft=p=>{m.value=m.value.filter(x=>x!==p)};ie(()=>t.error,p=>{F.value=p||"",D(p?"error":"")},{immediate:!0}),ie(()=>t.validateStatus,p=>D(p||""));const fe=Oe({...Ye(t),$el:O,size:a,validateState:d,labelId:l,inputIds:m,isGroup:N,hasLabel:q,addInputId:lt,removeInputId:ft,resetField:je,clearValidate:le,validate:Ve});return Je(ve,fe),He(()=>{t.prop&&(r==null||r.addField(fe),A=Be(k.value))}),Qe(()=>{r==null||r.removeField(fe)}),e({size:a,validateMessage:F,validateState:d,validate:Ve,clearValidate:le,resetField:je}),(p,x)=>{var j;return ae(),Pe("div",{ref_key:"formItemRef",ref:O,class:Y(g(v)),role:g(N)?"group":void 0,"aria-labelledby":g(N)?g(l):void 0},[E(g(wr),{"is-auto-width":g(w).width==="auto","update-all":((j=g(r))==null?void 0:j.labelWidth)==="auto"},{default:R(()=>[g(q)?(ae(),bt(wt(g($)?"label":"div"),{key:0,id:g(l),for:g($),class:Y(g(o).e("label")),style:Re(g(w))},{default:R(()=>[re(p.$slots,"label",{label:g(Se)},()=>[ge(Ne(g(Se)),1)])]),_:3},8,["id","for","class","style"])):Me("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),he("div",{class:Y(g(o).e("content")),style:Re(g(u))},[re(p.$slots,"default"),E(Ft,{name:`${g(o).namespace.value}-zoom-in-top`},{default:R(()=>[g(it)?re(p.$slots,"error",{key:0,error:F.value},()=>[he("div",{class:Y(g(y))},Ne(F.value),3)]):Me("v-if",!0)]),_:3},8,["name"])],6)],10,Fr)}}});var nt=Ze(_r,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const qr=xt(Bt,{FormItem:nt}),J=_t(nt);const Er={class:"upload"},Or={class:"input"},Ar={__name:"upload",setup(i){const e=Oe({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",num:"",size:"",description:""}),t=[],n=(l,m)=>{console.log(l,m),e.name=m.name,e.size=m.size},r=(l,m)=>{console.log(l,m),e.name="",e.size="",e.num="",e.resource=""},s=B(""),a=l=>{console.log(222),console.log(l),s.value=l},o=()=>{console.log(s.value),Et.post("upload/confirm",{f1:s.value,name:e.name||s.value.name,description:e.description,size:e.size||s.value.size,status:e.resource},{headers:{"Content-Type":"multipart/form-data"}}).then(l=>{Le({message:"上传成功",type:"success"})}).catch(l=>{Le({message:"上传失败",type:"warning"})})};return(l,m)=>(ae(),Pe("div",Er,[E(g(At),{class:"box-card"},{default:R(()=>[E(g(qr),{model:e,"label-width":"120px",style:{width:"700px"}},{default:R(()=>[E(g(J),{label:"文件名"},{default:R(()=>[E(g(de),{modelValue:e.name,"onUpdate:modelValue":m[0]||(m[0]=d=>e.name=d)},null,8,["modelValue"])]),_:1}),E(g(J),{label:"数据大小"},{default:R(()=>[E(g(de),{modelValue:e.size,"onUpdate:modelValue":m[1]||(m[1]=d=>e.size=d)},null,8,["modelValue"])]),_:1}),E(g(J),{label:"文件描述"},{default:R(()=>[he("div",Or,[E(g(de),{type:"textarea",modelValue:e.description,"onUpdate:modelValue":m[2]||(m[2]=d=>e.description=d)},null,8,["modelValue"])])]),_:1}),E(g(J),{label:"可共享"},{default:R(()=>[E(g(St),{modelValue:e.resource,"onUpdate:modelValue":m[3]||(m[3]=d=>e.resource=d)},{default:R(()=>[E(g(Ie),{label:"是",value:1}),E(g(Ie),{label:"否",value:0})]),_:1},8,["modelValue"])]),_:1}),E(g(J),{style:{display:"flex","align-items":"center",height:"60px",width:"500px"}},{default:R(()=>[E(g(Vt),{ref:"upload","file-list":t,"onUpdate:fileList":m[4]||(m[4]=d=>t=d),class:"upload-demo",action:"",limit:1,style:{display:"flex"},"on-success":n,"on-remove":r,"before-upload":a},{default:R(()=>[E(g($e),{type:"primary"},{default:R(()=>[ge("选择文件")]),_:1})]),_:1},512),E(g($e),{style:{"margin-left":"40px"},type:"success",onClick:o},{default:R(()=>[ge("确认上传")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]))}},jr=qt(Ar,[["__scopeId","data-v-cc643d5f"]]);export{jr as default};
