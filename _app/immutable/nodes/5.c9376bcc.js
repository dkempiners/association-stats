import{d as be,r as ct,b as ut,w as nt}from"../chunks/paths.068f1e14.js";import{s as oe,C as H,E as ye,Q as Re,F as Ae,h as B,S as qe,d as _,V as se,i as R,M as x,D as re,e as I,N as He,p as ft,f as D,a as V,g as C,c as W,j as U,_ as P,G as M,H as Te,W as ht,I as dt,B as Y,T as he,l as _t,m as gt,a0 as le,X as mt,R as pt,Y as Ie,U as bt}from"../chunks/scheduler.0ec601fd.js";import{S as ie,i as ce,a as y,g as K,t as A,c as X,b as N,d as O,m as G,e as L,k as $t}from"../chunks/index.ba5bb4ea.js";import{c as F,e as j,u as ne,o as ae}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.fb7c9bd6.js";import{S as vt,p as wt}from"../chunks/stores.4978ecf1.js";import{r as kt,g as Et,b as De,T as Ne,s as St,S as ue,c as at,a as Tt,R as Be}from"../chunks/stat-names.7b4d89e8.js";import{s as yt,a as Rt}from"../chunks/utils.b2aba30a.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Oe(r,e,t){if(t||arguments.length===2)for(var l=0,a=e.length,s;l<a;l++)(s||!(l in e))&&(s||(s=Array.prototype.slice.call(e,0,l)),s[l]=e[l]);return r.concat(s||Array.prototype.slice.call(e))}var At=function(r){var e=r.replace(/\[(\d+)\]/g,".$1");return e.startsWith(".")&&(e=e.slice(1)),e.split(".")},Se=function(r,e){for(var t=r,l=0,a=e;l<a.length;l++){var s=a[l];if(t==null)return;t=t[s]}return t},Ge=function(r){var e=Object.create(r);return Object.assign(e,r),e};function qt(r,e){var t=At(e);if(t.some(function(u){return u==="__proto__"}))throw new Error('key cannot include "__proto__"');var l=t.slice(0,t.length-1),a=t[t.length-1],s=be(r,function(u){return Se(u,t)}),n=function(u){r.update(function(f){if(f==null)return f;var i=Array.isArray(f)?Oe([],f,!0):Ge(f);return Se(i,l)[a]=u,i})},o=function(u){r.update(function(f){if(f==null)return f;var i=u(Se(f,t)),c=Array.isArray(f)?Oe([],f,!0):Ge(f);return Se(c,l)[a]=i,c})};return{subscribe:s.subscribe,set:n,update:o}}const ot=(r,e)=>{if(r.subRows===void 0)return[r];if(e[r.id]!==!0)return[r];const t=r.subRows.flatMap(l=>ot(l,e));return[r,...t]},Bt=({initialExpandedIds:r={}}={})=>()=>{const e=kt(r);return{pluginState:{expandedIds:e,getRowState:s=>{var i;const n=qt(e,s.id),o=ct((((i=s.subRows)==null?void 0:i.length)??0)>0),u=be(e,c=>Object.entries(c).filter(([g,b])=>g.startsWith(`${s.id}>`)&&b)),f=be(u,c=>{if(s.subRows===void 0)return!0;const g=s.subRows.filter(b=>b.subRows!==void 0);return c.length===g.length});return{isExpanded:n,canExpand:o,isAllSubRowsExpanded:f}}},deriveRows:s=>be([s,e],([n,o])=>n.flatMap(u=>ot(u,o)))}},it=(r,e)=>{const t=e(r.original);if(t===void 0)return r;const l=Et(t,r);return r.subRows=l.map(a=>it(a,e)),r},Dt=({children:r})=>()=>{const e=r instanceof Function?r:l=>l[r];return{pluginState:{},deriveRows:l=>be(l,a=>a.map(s=>s.isData()?it(s,e):s))}};async function Ct({fetch:r,params:e}){let t=e.year,l=e.week;Number(l)<10&&(l=`0${l}`);let a=e.team;const s=`${ut}/${t}.${l}.${a}.json`,o=await(await r(s)).json();return{year:t,week:e.week,team:a,teamData:o}}const vl=Object.freeze(Object.defineProperty({__proto__:null,load:Ct},Symbol.toStringTag,{value:"Module"}));function Mt(r){let e,t,l='<path fill="currentColor" d="M12 14.95q-.2 0-.375-.062t-.325-.213l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213T12 14.95Z"/>',a=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r[0]],s={};for(let n=0;n<a.length;n+=1)s=H(s,a[n]);return{c(){e=ye("svg"),t=new Re(!0),this.h()},l(n){e=Ae(n,"svg",{viewBox:!0,width:!0,height:!0});var o=B(e);t=qe(o,!0),o.forEach(_),this.h()},h(){t.a=null,se(e,s)},m(n,o){R(n,e,o),t.m(l,e)},p(n,[o]){se(e,s=F(a,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},o&1&&n[0]]))},i:x,o:x,d(n){n&&_(e)}}}function Pt(r,e,t){return r.$$set=l=>{t(0,e=H(H({},e),re(l)))},e=re(e),[e]}class Ht extends ie{constructor(e){super(),ce(this,e,Pt,Mt,oe,{})}}function It(r){let e,t,l='<path fill="currentColor" d="m12 10.775l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.15-.15.325-.213T12 8.4q.2 0 .375.063t.325.212l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-3.9-3.9Z"/>',a=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r[0]],s={};for(let n=0;n<a.length;n+=1)s=H(s,a[n]);return{c(){e=ye("svg"),t=new Re(!0),this.h()},l(n){e=Ae(n,"svg",{viewBox:!0,width:!0,height:!0});var o=B(e);t=qe(o,!0),o.forEach(_),this.h()},h(){t.a=null,se(e,s)},m(n,o){R(n,e,o),t.m(l,e)},p(n,[o]){se(e,s=F(a,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},o&1&&n[0]]))},i:x,o:x,d(n){n&&_(e)}}}function Nt(r,e,t){return r.$$set=l=>{t(0,e=H(H({},e),re(l)))},e=re(e),[e]}class Ot extends ie{constructor(e){super(),ce(this,e,Nt,It,oe,{})}}function Le(r){let e,t,l,a;const s=[Lt,Gt],n=[];function o(u,f){return u[3]?0:1}return e=o(r),t=n[e]=s[e](r),{c(){t.c(),l=I()},l(u){t.l(u),l=I()},m(u,f){n[e].m(u,f),R(u,l,f),a=!0},p(u,f){let i=e;e=o(u),e!==i&&(K(),A(n[i],1,1,()=>{n[i]=null}),X(),t=n[e],t||(t=n[e]=s[e](u),t.c()),y(t,1),t.m(l.parentNode,l))},i(u){a||(y(t),a=!0)},o(u){A(t),a=!1},d(u){u&&_(l),n[e].d(u)}}}function Gt(r){let e,t;return e=new Ht({props:{class:"test-sm"}}),{c(){N(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,a){G(e,l,a),t=!0},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){A(e.$$.fragment,l),t=!1},d(l){L(e,l)}}}function Lt(r){let e,t;return e=new Ot({props:{class:"text-sm"}}),{c(){N(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,a){G(e,l,a),t=!0},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){A(e.$$.fragment,l),t=!1},d(l){L(e,l)}}}function Vt(r){let e,t,l=r[2]&&Le(r);return{c(){l&&l.c(),e=I()},l(a){l&&l.l(a),e=I()},m(a,s){l&&l.m(a,s),R(a,e,s),t=!0},p(a,[s]){a[2]?l?(l.p(a,s),s&4&&y(l,1)):(l=Le(a),l.c(),y(l,1),l.m(e.parentNode,e)):l&&(K(),A(l,1,1,()=>{l=null}),X())},i(a){t||(y(l),t=!0)},o(a){A(l),t=!1},d(a){a&&_(e),l&&l.d(a)}}}function Wt(r,e,t){let l,a=x,s=()=>(a(),a=He(i,c=>t(2,l=c)),i),n,o=x,u=()=>(o(),o=He(f,c=>t(3,n=c)),f);r.$$.on_destroy.push(()=>a()),r.$$.on_destroy.push(()=>o());let{isExpanded:f}=e;u();let{canExpand:i}=e;return s(),r.$$set=c=>{"isExpanded"in c&&u(t(0,f=c.isExpanded)),"canExpand"in c&&s(t(1,i=c.canExpand))},[f,i,l,n]}class jt extends ie{constructor(e){super(),ce(this,e,Wt,Vt,oe,{isExpanded:0,canExpand:1})}}function Ft(r){let e,t,l='<path fill="currentColor" d="m12 19.15l3.875-3.875q.3-.3.7-.3t.7.3q.3.3.3.713t-.3.712l-3.85 3.875q-.575.575-1.425.575t-1.425-.575L6.7 16.7q-.3-.3-.288-.713t.313-.712q.3-.3.713-.3t.712.3L12 19.15Zm0-14.3L8.15 8.7q-.3.3-.7.288t-.7-.288q-.3-.3-.313-.712t.288-.713l3.85-3.85Q11.15 2.85 12 2.85t1.425.575l3.85 3.85q.3.3.288.713t-.313.712q-.3.275-.7.288t-.7-.288L12 4.85Z"/>',a=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r[0]],s={};for(let n=0;n<a.length;n+=1)s=H(s,a[n]);return{c(){e=ye("svg"),t=new Re(!0),this.h()},l(n){e=Ae(n,"svg",{viewBox:!0,width:!0,height:!0});var o=B(e);t=qe(o,!0),o.forEach(_),this.h()},h(){t.a=null,se(e,s)},m(n,o){R(n,e,o),t.m(l,e)},p(n,[o]){se(e,s=F(a,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},o&1&&n[0]]))},i:x,o:x,d(n){n&&_(e)}}}function Zt(r,e,t){return r.$$set=l=>{t(0,e=H(H({},e),re(l)))},e=re(e),[e]}class zt extends ie{constructor(e){super(),ce(this,e,Zt,Ft,oe,{})}}function Qt(r){let e,t,l='<path fill="currentColor" d="m12 17.4l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l3.875-3.875q.575-.575 1.425-.575t1.425.575L17.3 19.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 17.4Zm0-10.8l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-3.875 3.875Q12.85 8.55 12 8.55t-1.425-.575L6.7 4.1q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275L12 6.6Z"/>',a=[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},r[0]],s={};for(let n=0;n<a.length;n+=1)s=H(s,a[n]);return{c(){e=ye("svg"),t=new Re(!0),this.h()},l(n){e=Ae(n,"svg",{viewBox:!0,width:!0,height:!0});var o=B(e);t=qe(o,!0),o.forEach(_),this.h()},h(){t.a=null,se(e,s)},m(n,o){R(n,e,o),t.m(l,e)},p(n,[o]){se(e,s=F(a,[{viewBox:"0 0 24 24"},{width:"1.2em"},{height:"1.2em"},o&1&&n[0]]))},i:x,o:x,d(n){n&&_(e)}}}function Ut(r,e,t){return r.$$set=l=>{t(0,e=H(H({},e),re(l)))},e=re(e),[e]}class Yt extends ie{constructor(e){super(),ce(this,e,Ut,Qt,oe,{})}}function Ve(r,e,t){const l=r.slice();return l[32]=e[t],l}function We(r,e,t){const l=r.slice();return l[37]=e[t],l[39]=t,l}function je(r,e,t){const l=r.slice();return l[41]=e[t],l}function Fe(r,e,t){const l=r.slice();return l[37]=e[t],l[39]=t,l}function Kt(r){let e;return{c(){e=_t("All Stats")},l(t){e=gt(t,"All Stats")},m(t,l){R(t,e,l)},d(t){t&&_(e)}}}function Xt(r){let e,t,l,a,s,n;t=new Be({props:{of:r[37].render()}});let o=[r[40]],u={};for(let f=0;f<o.length;f+=1)u=H(u,o[f]);return{c(){e=D("th"),N(t.$$.fragment),l=V(),this.h()},l(f){e=C(f,"TH",{});var i=B(e);O(t.$$.fragment,i),i.forEach(_),l=W(f),this.h()},h(){P(e,u),le(e,"table-sort-asc",r[45].sort.order=="asc"),le(e,"table-sort-dsc",r[45].sort.order=="desc"),le(e,"table-cell-fit",r[39]==0)},m(f,i){R(f,e,i),G(t,e,null),R(f,l,i),a=!0,s||(n=Te(e,"click",function(){mt(r[45].sort.toggle)&&r[45].sort.toggle.apply(this,arguments)}),s=!0)},p(f,i){r=f;const c={};i[0]&8&&(c.of=r[37].render()),t.$set(c),P(e,u=F(o,[i[1]&512&&r[40]])),le(e,"table-sort-asc",r[45].sort.order=="asc"),le(e,"table-sort-dsc",r[45].sort.order=="desc"),le(e,"table-cell-fit",r[39]==0)},i(f){a||(y(t.$$.fragment,f),a=!0)},o(f){A(t.$$.fragment,f),a=!1},d(f){f&&(_(e),_(l)),L(t),s=!1,n()}}}function Ze(r,e){let t,l,a;return l=new ue({props:{attrs:e[37].attrs(),props:e[37].props(),$$slots:{default:[Xt,({attrs:s,props:n})=>({40:s,45:n}),({attrs:s,props:n})=>[0,(s?512:0)|(n?16384:0)]]},$$scope:{ctx:e}}}),{key:r,first:null,c(){t=I(),N(l.$$.fragment),this.h()},l(s){t=I(),O(l.$$.fragment,s),this.h()},h(){this.first=t},m(s,n){R(s,t,n),G(l,s,n),a=!0},p(s,n){e=s;const o={};n[0]&8&&(o.attrs=e[37].attrs()),n[0]&8&&(o.props=e[37].props()),n[0]&8|n[1]&49664&&(o.$$scope={dirty:n,ctx:e}),l.$set(o)},i(s){a||(y(l.$$.fragment,s),a=!0)},o(s){A(l.$$.fragment,s),a=!1},d(s){s&&_(t),L(l,s)}}}function Jt(r){let e,t=[],l=new Map,a,s,n=j(r[41].cells);const o=i=>i[37].id;for(let i=0;i<n.length;i+=1){let c=Fe(r,n,i),g=o(c);l.set(g,t[i]=Ze(g,c))}let u=[r[35]],f={};for(let i=0;i<u.length;i+=1)f=H(f,u[i]);return{c(){e=D("tr");for(let i=0;i<t.length;i+=1)t[i].c();a=V(),this.h()},l(i){e=C(i,"TR",{});var c=B(e);for(let g=0;g<t.length;g+=1)t[g].l(c);c.forEach(_),a=W(i),this.h()},h(){P(e,f)},m(i,c){R(i,e,c);for(let g=0;g<t.length;g+=1)t[g]&&t[g].m(e,null);R(i,a,c),s=!0},p(i,c){c[0]&8|c[1]&16896&&(n=j(i[41].cells),K(),t=ne(t,c,o,1,i,n,l,e,ae,Ze,null,Fe),X()),P(e,f=F(u,[c[1]&16&&i[35]]))},i(i){if(!s){for(let c=0;c<n.length;c+=1)y(t[c]);s=!0}},o(i){for(let c=0;c<t.length;c+=1)A(t[c]);s=!1},d(i){i&&(_(e),_(a));for(let c=0;c<t.length;c+=1)t[c].d()}}}function ze(r,e){let t,l,a;return l=new ue({props:{rowAttrs:e[41].attrs(),$$slots:{default:[Jt,({rowAttrs:s})=>({35:s}),({rowAttrs:s})=>[0,s?16:0]]},$$scope:{ctx:e}}}),{key:r,first:null,c(){t=I(),N(l.$$.fragment),this.h()},l(s){t=I(),O(l.$$.fragment,s),this.h()},h(){this.first=t},m(s,n){R(s,t,n),G(l,s,n),a=!0},p(s,n){e=s;const o={};n[0]&8&&(o.rowAttrs=e[41].attrs()),n[0]&8|n[1]&32784&&(o.$$scope={dirty:n,ctx:e}),l.$set(o)},i(s){a||(y(l.$$.fragment,s),a=!0)},o(s){A(l.$$.fragment,s),a=!1},d(s){s&&_(t),L(l,s)}}}function xt(r){let e,t,l,a;t=new Be({props:{of:r[37].render()}});let s=[r[40]],n={};for(let o=0;o<s.length;o+=1)n=H(n,s[o]);return{c(){e=D("td"),N(t.$$.fragment),l=V(),this.h()},l(o){e=C(o,"TD",{});var u=B(e);O(t.$$.fragment,u),u.forEach(_),l=W(o),this.h()},h(){P(e,n),le(e,"table-cell-fit",r[39]==0)},m(o,u){R(o,e,u),G(t,e,null),R(o,l,u),a=!0},p(o,u){const f={};u[0]&2&&(f.of=o[37].render()),t.$set(f),P(e,n=F(s,[u[1]&512&&o[40]])),le(e,"table-cell-fit",o[39]==0)},i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){A(t.$$.fragment,o),a=!1},d(o){o&&(_(e),_(l)),L(t)}}}function Qe(r,e){let t,l,a;return l=new ue({props:{attrs:e[37].attrs(),$$slots:{default:[xt,({attrs:s})=>({40:s}),({attrs:s})=>[0,s?512:0]]},$$scope:{ctx:e}}}),{key:r,first:null,c(){t=I(),N(l.$$.fragment),this.h()},l(s){t=I(),O(l.$$.fragment,s),this.h()},h(){this.first=t},m(s,n){R(s,t,n),G(l,s,n),a=!0},p(s,n){e=s;const o={};n[0]&2&&(o.attrs=e[37].attrs()),n[0]&2|n[1]&33280&&(o.$$scope={dirty:n,ctx:e}),l.$set(o)},i(s){a||(y(l.$$.fragment,s),a=!0)},o(s){A(l.$$.fragment,s),a=!1},d(s){s&&_(t),L(l,s)}}}function el(r){let e,t=[],l=new Map,a,s,n,o,u=j(r[32].cells);const f=b=>b[37].id;for(let b=0;b<u.length;b+=1){let v=We(r,u,b),S=f(v);l.set(S,t[b]=Qe(S,v))}let i=[r[35]],c={};for(let b=0;b<i.length;b+=1)c=H(c,i[b]);function g(){return r[18](r[32])}return{c(){e=D("tr");for(let b=0;b<t.length;b+=1)t[b].c();a=V(),this.h()},l(b){e=C(b,"TR",{});var v=B(e);for(let S=0;S<t.length;S+=1)t[S].l(v);v.forEach(_),a=W(b),this.h()},h(){P(e,c)},m(b,v){R(b,e,v);for(let S=0;S<t.length;S+=1)t[S]&&t[S].m(e,null);R(b,a,v),s=!0,n||(o=Te(e,"click",g),n=!0)},p(b,v){r=b,v[0]&2|v[1]&512&&(u=j(r[32].cells),K(),t=ne(t,v,f,1,r,u,l,e,ae,Qe,null,We),X()),P(e,c=F(i,[v[1]&16&&r[35]]))},i(b){if(!s){for(let v=0;v<u.length;v+=1)y(t[v]);s=!0}},o(b){for(let v=0;v<t.length;v+=1)A(t[v]);s=!1},d(b){b&&(_(e),_(a));for(let v=0;v<t.length;v+=1)t[v].d();n=!1,o()}}}function Ue(r,e){let t,l,a;return l=new ue({props:{rowAttrs:e[32].attrs(),rowProps:e[32].props(),$$slots:{default:[el,({rowAttrs:s,rowProps:n})=>({35:s,36:n}),({rowAttrs:s,rowProps:n})=>[0,(s?16:0)|(n?32:0)]]},$$scope:{ctx:e}}}),{key:r,first:null,c(){t=I(),N(l.$$.fragment),this.h()},l(s){t=I(),O(l.$$.fragment,s),this.h()},h(){this.first=t},m(s,n){R(s,t,n),G(l,s,n),a=!0},p(s,n){e=s;const o={};n[0]&2&&(o.rowAttrs=e[32].attrs()),n[0]&2&&(o.rowProps=e[32].props()),n[0]&2|n[1]&32784&&(o.$$scope={dirty:n,ctx:e}),l.$set(o)},i(s){a||(y(l.$$.fragment,s),a=!0)},o(s){A(l.$$.fragment,s),a=!1},d(s){s&&_(t),L(l,s)}}}function tl(r){let e,t,l,a,s,n,o,u,f,i,c,g,b,v,S,E,w=[],T=new Map,h,d,m=[],Z=new Map,z,Q,_e;n=new zt({props:{class:"text-base"}}),f=new Yt({props:{class:"text-base"}});function $e(p){r[17](p)}let ge={name:"all-stats-switch",size:"sm",class:"",$$slots:{default:[Kt]},$$scope:{ctx:r}};r[0]!==void 0&&(ge.checked=r[0]),c=new vt({props:ge}),ft.push(()=>$t(c,"checked",$e));let J=j(r[3]);const ee=p=>p[41].id;for(let p=0;p<J.length;p+=1){let $=je(r,J,p),q=ee($);T.set(q,w[p]=ze(q,$))}let te=j(r[1]);const ve=p=>p[32].id;for(let p=0;p<te.length;p+=1){let $=Ve(r,te,p),q=ve($);Z.set(q,m[p]=Ue(q,$))}let me=[r[4]],de={};for(let p=0;p<me.length;p+=1)de=H(de,me[p]);let pe=[{class:"table table-compact"},r[2]],k={};for(let p=0;p<pe.length;p+=1)k=H(k,pe[p]);return{c(){e=D("div"),t=D("div"),l=D("div"),a=V(),s=D("button"),N(n.$$.fragment),o=V(),u=D("button"),N(f.$$.fragment),i=V(),N(c.$$.fragment),b=V(),v=D("div"),S=D("table"),E=D("thead");for(let p=0;p<w.length;p+=1)w[p].c();h=V(),d=D("tbody");for(let p=0;p<m.length;p+=1)m[p].c();this.h()},l(p){e=C(p,"DIV",{class:!0});var $=B(e);t=C($,"DIV",{class:!0});var q=B(t);l=C(q,"DIV",{class:!0}),B(l).forEach(_),a=W(q),s=C(q,"BUTTON",{type:!0,class:!0});var we=B(s);O(n.$$.fragment,we),we.forEach(_),o=W(q),u=C(q,"BUTTON",{type:!0,class:!0});var ke=B(u);O(f.$$.fragment,ke),ke.forEach(_),i=W(q),O(c.$$.fragment,q),q.forEach(_),b=W($),v=C($,"DIV",{class:!0});var Ce=B(v);S=C(Ce,"TABLE",{class:!0});var Ee=B(S);E=C(Ee,"THEAD",{});var Me=B(E);for(let fe=0;fe<w.length;fe+=1)w[fe].l(Me);Me.forEach(_),h=W(Ee),d=C(Ee,"TBODY",{});var Pe=B(d);for(let fe=0;fe<m.length;fe+=1)m[fe].l(Pe);Pe.forEach(_),Ee.forEach(_),Ce.forEach(_),$.forEach(_),this.h()},h(){U(l,"class","flex-1"),U(s,"type","button"),U(s,"class","btn-icon btn-icon-sm variant-ghost mx-2"),U(u,"type","button"),U(u,"class","btn-icon btn-icon-sm variant-ghost mx-2"),U(t,"class","flex items-center pb-4"),P(d,de),P(S,k),U(v,"class","table-container"),U(e,"class","")},m(p,$){R(p,e,$),M(e,t),M(t,l),M(t,a),M(t,s),G(n,s,null),M(t,o),M(t,u),G(f,u,null),M(t,i),G(c,t,null),M(e,b),M(e,v),M(v,S),M(S,E);for(let q=0;q<w.length;q+=1)w[q]&&w[q].m(E,null);M(S,h),M(S,d);for(let q=0;q<m.length;q+=1)m[q]&&m[q].m(d,null);z=!0,Q||(_e=[Te(s,"click",r[13]),Te(u,"click",r[14])],Q=!0)},p(p,$){const q={};$[1]&32768&&(q.$$scope={dirty:$,ctx:p}),!g&&$[0]&1&&(g=!0,q.checked=p[0],ht(()=>g=!1)),c.$set(q),$[0]&8|$[1]&16912&&(J=j(p[3]),K(),w=ne(w,$,ee,1,p,J,T,E,ae,ze,null,je),X()),$[0]&4098|$[1]&528&&(te=j(p[1]),K(),m=ne(m,$,ve,1,p,te,Z,d,ae,Ue,null,Ve),X()),P(d,de=F(me,[$[0]&16&&p[4]])),P(S,k=F(pe,[{class:"table table-compact"},$[0]&4&&p[2]]))},i(p){if(!z){y(n.$$.fragment,p),y(f.$$.fragment,p),y(c.$$.fragment,p);for(let $=0;$<J.length;$+=1)y(w[$]);for(let $=0;$<te.length;$+=1)y(m[$]);z=!0}},o(p){A(n.$$.fragment,p),A(f.$$.fragment,p),A(c.$$.fragment,p);for(let $=0;$<w.length;$+=1)A(w[$]);for(let $=0;$<m.length;$+=1)A(m[$]);z=!1},d(p){p&&_(e),L(n),L(f),L(c);for(let $=0;$<w.length;$+=1)w[$].d();for(let $=0;$<m.length;$+=1)m[$].d();Q=!1,dt(_e)}}}function ll(r,e,t){let l,a,s,n,o,u,f,{data:i=[]}=e,{defaultHiddenStats:c=[]}=e,g;const b={hide:Rt({initialHiddenColumnIds:c}),sort:Tt({toggleOrder:["desc","asc",void 0]}),sub:Dt({children:k=>k.games}),expand:Bt()};let v=nt(i);Y(r,v,k=>t(21,n=k));const S=at(v,b),E=[],w=S.display({id:"expand",header:"",cell:(k,p)=>{const $=k.row,q=p.pluginStates,{isExpanded:we,canExpand:ke}=q.expand.getRowState($);return De(jt,{isExpanded:we,canExpand:ke})}}),T=S.column({id:"player",header:"Player",accessor:k=>k.total[0]}),h=S.column({id:"pos",header:De(Ne,{text:"Pos",tooltipText:"Position"}),accessor:k=>k.total[1]});E.push(w),E.push(T),E.push(h);const d=E.length-1,m=["GM","GP","GS","MIN","FGM","FGA","FG%","FTM","FTA","FT%","3PTM","3PTA","3PT%","PTS","OREB","DREB","REB","AST","ST","BLK","TO"].map((k,p)=>S.column({id:k,header:De(Ne,{text:k,tooltipText:St[k]}),cell:yt,accessor:$=>$.total[d+p]})),Z=S.createColumns(E.concat(m)),{headerRows:z,rows:Q,tableAttrs:_e,tableBodyAttrs:$e,pluginStates:ge}=S.createViewModel(Z);Y(r,z,k=>t(3,u=k)),Y(r,Q,k=>t(1,a=k)),Y(r,_e,k=>t(2,o=k)),Y(r,$e,k=>t(4,f=k));const{hiddenColumnIds:J}=ge.hide;Y(r,J,k=>t(20,s=k));const{expandedIds:ee}=ge.expand;Y(r,ee,k=>t(19,l=k));function te(k){he(ee,l[k]=!l[k],l)}function ve(){a.forEach(k=>{he(ee,l[k.id]=!0,l)})}function me(){a.forEach(k=>{he(ee,l[k.id]=!1,l)})}function de(k){g=k,t(0,g)}const pe=k=>te(k.id);return r.$$set=k=>{"data"in k&&t(15,i=k.data),"defaultHiddenStats"in k&&t(16,c=k.defaultHiddenStats)},r.$$.update=()=>{r.$$.dirty[0]&32768&&he(v,n=i,n),r.$$.dirty[0]&65537&&(g?he(J,s=[],s):he(J,s=c,s))},[g,a,o,u,f,v,z,Q,_e,$e,J,ee,te,ve,me,i,c,de,pe]}class sl extends ie{constructor(e){super(),ce(this,e,ll,tl,oe,{data:15,defaultHiddenStats:16},null,[-1,-1])}}function Ye(r,e,t){const l=r.slice();return l[14]=e[t],l}function Ke(r,e,t){const l=r.slice();return l[18]=e[t],l}function Xe(r,e,t){const l=r.slice();return l[22]=e[t],l[24]=t,l}function Je(r,e,t){const l=r.slice();return l[18]=e[t],l}function rl(r){let e,t,l,a;t=new Be({props:{of:r[18].render()}});let s=[r[21]],n={};for(let o=0;o<s.length;o+=1)n=H(n,s[o]);return{c(){e=D("th"),N(t.$$.fragment),l=V(),this.h()},l(o){e=C(o,"TH",{});var u=B(e);O(t.$$.fragment,u),u.forEach(_),l=W(o),this.h()},h(){P(e,n)},m(o,u){R(o,e,u),G(t,e,null),R(o,l,u),a=!0},p(o,u){const f={};u&2&&(f.of=o[18].render()),t.$set(f),P(e,n=F(s,[u&2097152&&o[21]]))},i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){A(t.$$.fragment,o),a=!1},d(o){o&&(_(e),_(l)),L(t)}}}function xe(r,e){let t,l,a;return l=new ue({props:{attrs:e[18].attrs(),props:e[18].props(),$$slots:{default:[rl,({attrs:s,props:n})=>({21:s,27:n}),({attrs:s,props:n})=>(s?2097152:0)|(n?134217728:0)]},$$scope:{ctx:e}}}),{key:r,first:null,c(){t=I(),N(l.$$.fragment),this.h()},l(s){t=I(),O(l.$$.fragment,s),this.h()},h(){this.first=t},m(s,n){R(s,t,n),G(l,s,n),a=!0},p(s,n){e=s;const o={};n&2&&(o.attrs=e[18].attrs()),n&2&&(o.props=e[18].props()),n&270532610&&(o.$$scope={dirty:n,ctx:e}),l.$set(o)},i(s){a||(y(l.$$.fragment,s),a=!0)},o(s){A(l.$$.fragment,s),a=!1},d(s){s&&_(t),L(l,s)}}}function nl(r){let e,t=[],l=new Map,a,s,n=j(r[22].cells);const o=i=>i[18].id;for(let i=0;i<n.length;i+=1){let c=Je(r,n,i),g=o(c);l.set(g,t[i]=xe(g,c))}let u=[r[17]],f={};for(let i=0;i<u.length;i+=1)f=H(f,u[i]);return{c(){e=D("tr");for(let i=0;i<t.length;i+=1)t[i].c();a=V(),this.h()},l(i){e=C(i,"TR",{});var c=B(e);for(let g=0;g<t.length;g+=1)t[g].l(c);c.forEach(_),a=W(i),this.h()},h(){P(e,f)},m(i,c){R(i,e,c);for(let g=0;g<t.length;g+=1)t[g]&&t[g].m(e,null);R(i,a,c),s=!0},p(i,c){c&2097154&&(n=j(i[22].cells),K(),t=ne(t,c,o,1,i,n,l,e,ae,xe,null,Je),X()),P(e,f=F(u,[c&131072&&i[17]]))},i(i){if(!s){for(let c=0;c<n.length;c+=1)y(t[c]);s=!0}},o(i){for(let c=0;c<t.length;c+=1)A(t[c]);s=!1},d(i){i&&(_(e),_(a));for(let c=0;c<t.length;c+=1)t[c].d()}}}function et(r,e){let t,l,a;return l=new ue({props:{rowAttrs:e[22].attrs(),$$slots:{default:[nl,({rowAttrs:s})=>({17:s}),({rowAttrs:s})=>s?131072:0]},$$scope:{ctx:e}}}),{key:r,first:null,c(){t=I(),N(l.$$.fragment),this.h()},l(s){t=I(),O(l.$$.fragment,s),this.h()},h(){this.first=t},m(s,n){R(s,t,n),G(l,s,n),a=!0},p(s,n){e=s;const o={};n&2&&(o.rowAttrs=e[22].attrs()),n&268566530&&(o.$$scope={dirty:n,ctx:e}),l.$set(o)},i(s){a||(y(l.$$.fragment,s),a=!0)},o(s){A(l.$$.fragment,s),a=!1},d(s){s&&_(t),L(l,s)}}}function al(r){let e,t,l,a;t=new Be({props:{of:r[18].render()}});let s=[r[21]],n={};for(let o=0;o<s.length;o+=1)n=H(n,s[o]);return{c(){e=D("td"),N(t.$$.fragment),l=V(),this.h()},l(o){e=C(o,"TD",{});var u=B(e);O(t.$$.fragment,u),u.forEach(_),l=W(o),this.h()},h(){P(e,n)},m(o,u){R(o,e,u),G(t,e,null),R(o,l,u),a=!0},p(o,u){const f={};u&8&&(f.of=o[18].render()),t.$set(f),P(e,n=F(s,[u&2097152&&o[21]]))},i(o){a||(y(t.$$.fragment,o),a=!0)},o(o){A(t.$$.fragment,o),a=!1},d(o){o&&(_(e),_(l)),L(t)}}}function tt(r,e){let t,l,a;return l=new ue({props:{attrs:e[18].attrs(),$$slots:{default:[al,({attrs:s})=>({21:s}),({attrs:s})=>s?2097152:0]},$$scope:{ctx:e}}}),{key:r,first:null,c(){t=I(),N(l.$$.fragment),this.h()},l(s){t=I(),O(l.$$.fragment,s),this.h()},h(){this.first=t},m(s,n){R(s,t,n),G(l,s,n),a=!0},p(s,n){e=s;const o={};n&8&&(o.attrs=e[18].attrs()),n&270532616&&(o.$$scope={dirty:n,ctx:e}),l.$set(o)},i(s){a||(y(l.$$.fragment,s),a=!0)},o(s){A(l.$$.fragment,s),a=!1},d(s){s&&_(t),L(l,s)}}}function ol(r){let e,t=[],l=new Map,a,s,n=j(r[14].cells);const o=i=>i[18].id;for(let i=0;i<n.length;i+=1){let c=Ke(r,n,i),g=o(c);l.set(g,t[i]=tt(g,c))}let u=[r[17]],f={};for(let i=0;i<u.length;i+=1)f=H(f,u[i]);return{c(){e=D("tr");for(let i=0;i<t.length;i+=1)t[i].c();a=V(),this.h()},l(i){e=C(i,"TR",{});var c=B(e);for(let g=0;g<t.length;g+=1)t[g].l(c);c.forEach(_),a=W(i),this.h()},h(){P(e,f)},m(i,c){R(i,e,c);for(let g=0;g<t.length;g+=1)t[g]&&t[g].m(e,null);R(i,a,c),s=!0},p(i,c){c&2097160&&(n=j(i[14].cells),K(),t=ne(t,c,o,1,i,n,l,e,ae,tt,null,Ke),X()),P(e,f=F(u,[c&131072&&i[17]]))},i(i){if(!s){for(let c=0;c<n.length;c+=1)y(t[c]);s=!0}},o(i){for(let c=0;c<t.length;c+=1)A(t[c]);s=!1},d(i){i&&(_(e),_(a));for(let c=0;c<t.length;c+=1)t[c].d()}}}function lt(r,e){let t,l,a;return l=new ue({props:{rowAttrs:e[14].attrs(),$$slots:{default:[ol,({rowAttrs:s})=>({17:s}),({rowAttrs:s})=>s?131072:0]},$$scope:{ctx:e}}}),{key:r,first:null,c(){t=I(),N(l.$$.fragment),this.h()},l(s){t=I(),O(l.$$.fragment,s),this.h()},h(){this.first=t},m(s,n){R(s,t,n),G(l,s,n),a=!0},p(s,n){e=s;const o={};n&8&&(o.rowAttrs=e[14].attrs()),n&268566536&&(o.$$scope={dirty:n,ctx:e}),l.$set(o)},i(s){a||(y(l.$$.fragment,s),a=!0)},o(s){A(l.$$.fragment,s),a=!1},d(s){s&&_(t),L(l,s)}}}function il(r){let e,t,l,a=[],s=new Map,n,o,u=[],f=new Map,i,c=j(r[1]);const g=h=>h[22].id;for(let h=0;h<c.length;h+=1){let d=Xe(r,c,h),m=g(d);s.set(m,a[h]=et(m,d))}let b=j(r[3]);const v=h=>h[14].id;for(let h=0;h<b.length;h+=1){let d=Ye(r,b,h),m=v(d);f.set(m,u[h]=lt(m,d))}let S=[r[2]],E={};for(let h=0;h<S.length;h+=1)E=H(E,S[h]);let w=[{class:"table table-compact"},r[0]],T={};for(let h=0;h<w.length;h+=1)T=H(T,w[h]);return{c(){e=D("div"),t=D("table"),l=D("thead");for(let h=0;h<a.length;h+=1)a[h].c();n=V(),o=D("tbody");for(let h=0;h<u.length;h+=1)u[h].c();this.h()},l(h){e=C(h,"DIV",{class:!0});var d=B(e);t=C(d,"TABLE",{class:!0});var m=B(t);l=C(m,"THEAD",{});var Z=B(l);for(let Q=0;Q<a.length;Q+=1)a[Q].l(Z);Z.forEach(_),n=W(m),o=C(m,"TBODY",{});var z=B(o);for(let Q=0;Q<u.length;Q+=1)u[Q].l(z);z.forEach(_),m.forEach(_),d.forEach(_),this.h()},h(){P(o,E),P(t,T),U(e,"class","table-container")},m(h,d){R(h,e,d),M(e,t),M(t,l);for(let m=0;m<a.length;m+=1)a[m]&&a[m].m(l,null);M(t,n),M(t,o);for(let m=0;m<u.length;m+=1)u[m]&&u[m].m(o,null);i=!0},p(h,[d]){d&2228226&&(c=j(h[1]),K(),a=ne(a,d,g,1,h,c,s,l,ae,et,null,Xe),X()),d&2228232&&(b=j(h[3]),K(),u=ne(u,d,v,1,h,b,f,o,ae,lt,null,Ye),X()),P(o,E=F(S,[d&4&&h[2]])),P(t,T=F(w,[{class:"table table-compact"},d&1&&h[0]]))},i(h){if(!i){for(let d=0;d<c.length;d+=1)y(a[d]);for(let d=0;d<b.length;d+=1)y(u[d]);i=!0}},o(h){for(let d=0;d<a.length;d+=1)A(a[d]);for(let d=0;d<u.length;d+=1)A(u[d]);i=!1},d(h){h&&_(e);for(let d=0;d<a.length;d+=1)a[d].d();for(let d=0;d<u.length;d+=1)u[d].d()}}}function cl(r,e,t){let l,a,s,n,o,{data:u}=e,f=nt(u);Y(r,f,w=>t(10,l=w));const i=at(f,{});let c=[i.column({id:"newResult",header:"New Result",accessor:w=>w[0]}),i.column({id:"bench",header:"Bench",accessor:w=>w[1]}),i.column({id:"start",header:"Start",accessor:w=>w[2]}),i.column({id:"newWins",header:"New Wins",accessor:w=>w[3]}),i.column({id:"newLosses",header:"New Losses",accessor:w=>w[4]}),i.column({id:"newTies",header:"New Ties",accessor:w=>w[5]})];const g=i.createColumns(c),{headerRows:b,rows:v,tableAttrs:S,tableBodyAttrs:E}=i.createViewModel(g);return Y(r,b,w=>t(1,s=w)),Y(r,v,w=>t(3,o=w)),Y(r,S,w=>t(0,a=w)),Y(r,E,w=>t(2,n=w)),r.$$set=w=>{"data"in w&&t(9,u=w.data)},r.$$.update=()=>{r.$$.dirty&512&&he(f,l=u,l)},[a,s,n,o,f,b,v,S,E,u]}class ul extends ie{constructor(e){super(),ce(this,e,cl,il,oe,{data:9})}}function st(r,e,t){const l=r.slice();return l[6]=e[t],l}function rt(r){let e,t;return e=new sl({props:{data:r[6],defaultHiddenStats:r[1]}}),{c(){N(e.$$.fragment)},l(l){O(e.$$.fragment,l)},m(l,a){G(e,l,a),t=!0},p(l,a){const s={};a&8&&(s.data=l[6]),a&2&&(s.defaultHiddenStats=l[1]),e.$set(s)},i(l){t||(y(e.$$.fragment,l),t=!0)},o(l){A(e.$$.fragment,l),t=!1},d(l){L(e,l)}}}function fl(r){let e,t,l,a,s,n="Player Stats",o,u,f,i,c="Roster Decisions",g,b,v;document.title=e="Association Stats - "+r[0].year+" - Week "+r[0].week+" - "+r[0].teamData.team.name;let S=j(r[3]),E=[];for(let T=0;T<S.length;T+=1)E[T]=rt(st(r,S,T));const w=T=>A(E[T],1,1,()=>{E[T]=null});return b=new ul({props:{data:r[2]}}),{c(){t=V(),l=D("div"),a=D("section"),s=D("h2"),s.textContent=n,o=V();for(let T=0;T<E.length;T+=1)E[T].c();u=V(),f=D("section"),i=D("h2"),i.textContent=c,g=V(),N(b.$$.fragment),this.h()},l(T){pt("svelte-zihw6d",document.head).forEach(_),t=W(T),l=C(T,"DIV",{class:!0});var d=B(l);a=C(d,"SECTION",{class:!0});var m=B(a);s=C(m,"H2",{class:!0,"data-svelte-h":!0}),Ie(s)!=="svelte-cbz7rt"&&(s.textContent=n),o=W(m);for(let z=0;z<E.length;z+=1)E[z].l(m);m.forEach(_),u=W(d),f=C(d,"SECTION",{class:!0});var Z=B(f);i=C(Z,"H2",{class:!0,"data-svelte-h":!0}),Ie(i)!=="svelte-1969gwp"&&(i.textContent=c),g=W(Z),O(b.$$.fragment,Z),Z.forEach(_),d.forEach(_),this.h()},h(){U(s,"class","h2"),U(a,"class","mb-8"),U(i,"class","h2 mb-4"),U(f,"class","my-8"),U(l,"class","p-4")},m(T,h){R(T,t,h),R(T,l,h),M(l,a),M(a,s),M(a,o);for(let d=0;d<E.length;d+=1)E[d]&&E[d].m(a,null);M(l,u),M(l,f),M(f,i),M(f,g),G(b,f,null),v=!0},p(T,[h]){if((!v||h&1)&&e!==(e="Association Stats - "+T[0].year+" - Week "+T[0].week+" - "+T[0].teamData.team.name)&&(document.title=e),h&10){S=j(T[3]);let m;for(m=0;m<S.length;m+=1){const Z=st(T,S,m);E[m]?(E[m].p(Z,h),y(E[m],1)):(E[m]=rt(Z),E[m].c(),y(E[m],1),E[m].m(a,null))}for(K(),m=S.length;m<E.length;m+=1)w(m);X()}const d={};h&4&&(d.data=T[2]),b.$set(d)},i(T){if(!v){for(let h=0;h<S.length;h+=1)y(E[h]);y(b.$$.fragment,T),v=!0}},o(T){E=E.filter(Boolean);for(let h=0;h<E.length;h+=1)A(E[h]);A(b.$$.fragment,T),v=!1},d(T){T&&(_(t),_(l)),bt(E,T),L(b)}}}function hl(r,e,t){let l,a,s,n;Y(r,wt,u=>t(4,n=u));let{data:o}=e;return r.$$set=u=>{"data"in u&&t(0,o=u.data)},r.$$.update=()=>{r.$$.dirty&1&&o.teamData.categoryStats,r.$$.dirty&17&&t(3,l=o.teamData.playerGameStats.map(u=>u.map(f=>{let i={games:f.games.map(c=>({total:c}))};return n?i.total=f.totalPerGame:i.total=f.total,i}))),r.$$.dirty&1&&t(2,a=o.teamData.rosterDecisions),r.$$.dirty&1&&t(1,s=o.teamData.nonCategoryStats.filter(u=>u!="GM"&&u!="GP"))},[o,s,a,l,n]}class wl extends ie{constructor(e){super(),ce(this,e,hl,fl,oe,{data:0})}}export{wl as component,vl as universal};
