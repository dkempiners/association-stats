import{b as Le,w as de}from"../chunks/paths.91b73e70.js";import{s as ge,C as oe,f as v,a as R,g as y,h as H,d,c as B,_ as Y,j as M,i as A,G as w,B as me,T as $e,e as X,M as fe,N as ie,R as Ue,Y as ae,U as pe}from"../chunks/scheduler.0ec601fd.js";import{S as ze,i as Pe,g as K,c as Q,a as b,t as k,b as q,d as L,m as U,e as F}from"../chunks/index.ba5bb4ea.js";import{e as P,u as ue,o as he,c as ce}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.c6acfb20.js";import{S as Fe,R as Je,B as Ke}from"../chunks/BreakdownTable.b52364cd.js";import{c as ke,S as _e,b as Qe,s as Xe,T as Ze,R as Ve}from"../chunks/stat-names.25eafb91.js";import{c as xe,s as et}from"../chunks/utils.5bcfa25e.js";import{p as tt}from"../chunks/stores.def94d3c.js";async function lt({fetch:c,params:l}){let e=l.year,s=l.week;Number(s)<10&&(s=`0${s}`);const o=`${Le}/${e}.${s}.json`,i=await(await c(o)).json();return{year:e,week:l.week,weekData:i}}const $t=Object.freeze(Object.defineProperty({__proto__:null,load:lt},Symbol.toStringTag,{value:"Module"}));function we(c,l,e){const s=c.slice();return s[20]=l[e],s}function Se(c,l,e){const s=c.slice();return s[24]=l[e],s}function Ce(c,l,e){const s=c.slice();return s[28]=l[e],s}function ve(c,l,e){const s=c.slice();return s[24]=l[e],s}function st(c){let l,e,s,o;e=new Ve({props:{of:c[24].render()}});let r=[c[27]],i={};for(let t=0;t<r.length;t+=1)i=oe(i,r[t]);return{c(){l=v("th"),q(e.$$.fragment),s=R(),this.h()},l(t){l=y(t,"TH",{});var u=H(l);L(e.$$.fragment,u),u.forEach(d),s=B(t),this.h()},h(){Y(l,i)},m(t,u){A(t,l,u),U(e,l,null),A(t,s,u),o=!0},p(t,u){const f={};u[0]&64&&(f.of=t[24].render()),e.$set(f),Y(l,i=ce(r,[u[0]&134217728&&t[27]]))},i(t){o||(b(e.$$.fragment,t),o=!0)},o(t){k(e.$$.fragment,t),o=!1},d(t){t&&(d(l),d(s)),F(e)}}}function ye(c){let l,e;return l=new _e({props:{attrs:c[24].attrs(),props:c[24].props(),$$slots:{default:[st,({attrs:s,props:o})=>({27:s,33:o}),({attrs:s,props:o})=>[s?134217728:0,o?4:0]]},$$scope:{ctx:c}}}),{c(){q(l.$$.fragment)},l(s){L(l.$$.fragment,s)},m(s,o){U(l,s,o),e=!0},p(s,o){const r={};o[0]&64&&(r.attrs=s[24].attrs()),o[0]&64&&(r.props=s[24].props()),o[0]&134217792|o[1]&8&&(r.$$scope={dirty:o,ctx:s}),l.$set(r)},i(s){e||(b(l.$$.fragment,s),e=!0)},o(s){k(l.$$.fragment,s),e=!1},d(s){F(l,s)}}}function Ee(c,l){let e,s=l[0],o,r,i=ye(l);return{key:c,first:null,c(){e=X(),i.c(),o=X(),this.h()},l(t){e=X(),i.l(t),o=X(),this.h()},h(){this.first=e},m(t,u){A(t,e,u),i.m(t,u),A(t,o,u),r=!0},p(t,u){l=t,u[0]&1&&ge(s,s=l[0])?(K(),k(i,1,1,fe),Q(),i=ye(l),i.c(),b(i,1),i.m(o.parentNode,o)):i.p(l,u)},i(t){r||(b(i),r=!0)},o(t){k(i),r=!1},d(t){t&&(d(e),d(o)),i.d(t)}}}function at(c){let l,e=[],s=new Map,o,r,i=P(c[28].cells);const t=n=>n[24].id;for(let n=0;n<i.length;n+=1){let a=ve(c,i,n),h=t(a);s.set(h,e[n]=Ee(h,a))}let u=[c[23]],f={};for(let n=0;n<u.length;n+=1)f=oe(f,u[n]);return{c(){l=v("tr");for(let n=0;n<e.length;n+=1)e[n].c();o=R(),this.h()},l(n){l=y(n,"TR",{});var a=H(l);for(let h=0;h<e.length;h+=1)e[h].l(a);a.forEach(d),o=B(n),this.h()},h(){Y(l,f)},m(n,a){A(n,l,a);for(let h=0;h<e.length;h+=1)e[h]&&e[h].m(l,null);A(n,o,a),r=!0},p(n,a){a[0]&134217793&&(i=P(n[28].cells),K(),e=ue(e,a,t,1,n,i,s,l,he,Ee,null,ve),Q()),Y(l,f=ce(u,[a[0]&8388608&&n[23]]))},i(n){if(!r){for(let a=0;a<i.length;a+=1)b(e[a]);r=!0}},o(n){for(let a=0;a<e.length;a+=1)k(e[a]);r=!1},d(n){n&&(d(l),d(o));for(let a=0;a<e.length;a+=1)e[a].d()}}}function Te(c,l){let e,s,o;return s=new _e({props:{rowAttrs:l[28].attrs(),$$slots:{default:[at,({rowAttrs:r})=>({23:r}),({rowAttrs:r})=>[r?8388608:0]]},$$scope:{ctx:l}}}),{key:c,first:null,c(){e=X(),q(s.$$.fragment),this.h()},l(r){e=X(),L(s.$$.fragment,r),this.h()},h(){this.first=e},m(r,i){A(r,e,i),U(s,r,i),o=!0},p(r,i){l=r;const t={};i[0]&64&&(t.rowAttrs=l[28].attrs()),i[0]&8388673|i[1]&8&&(t.$$scope={dirty:i,ctx:l}),s.$set(t)},i(r){o||(b(s.$$.fragment,r),o=!0)},o(r){k(s.$$.fragment,r),o=!1},d(r){r&&d(e),F(s,r)}}}function rt(c){let l,e,s,o;e=new Ve({props:{of:c[24].render()}});let r=[c[27]],i={};for(let t=0;t<r.length;t+=1)i=oe(i,r[t]);return{c(){l=v("td"),q(e.$$.fragment),s=R(),this.h()},l(t){l=y(t,"TD",{});var u=H(l);L(e.$$.fragment,u),u.forEach(d),s=B(t),this.h()},h(){Y(l,i)},m(t,u){A(t,l,u),U(e,l,null),A(t,s,u),o=!0},p(t,u){const f={};u[0]&256&&(f.of=t[24].render()),e.$set(f),Y(l,i=ce(r,[u[0]&134217728&&t[27]]))},i(t){o||(b(e.$$.fragment,t),o=!0)},o(t){k(e.$$.fragment,t),o=!1},d(t){t&&(d(l),d(s)),F(e)}}}function De(c,l){let e,s,o;return s=new _e({props:{attrs:l[24].attrs(),$$slots:{default:[rt,({attrs:r})=>({27:r}),({attrs:r})=>[r?134217728:0]]},$$scope:{ctx:l}}}),{key:c,first:null,c(){e=X(),q(s.$$.fragment),this.h()},l(r){e=X(),L(s.$$.fragment,r),this.h()},h(){this.first=e},m(r,i){A(r,e,i),U(s,r,i),o=!0},p(r,i){l=r;const t={};i[0]&256&&(t.attrs=l[24].attrs()),i[0]&134217984|i[1]&8&&(t.$$scope={dirty:i,ctx:l}),s.$set(t)},i(r){o||(b(s.$$.fragment,r),o=!0)},o(r){k(s.$$.fragment,r),o=!1},d(r){r&&d(e),F(s,r)}}}function nt(c){let l,e=[],s=new Map,o,r,i=P(c[20].cells);const t=n=>n[24].id;for(let n=0;n<i.length;n+=1){let a=Se(c,i,n),h=t(a);s.set(h,e[n]=De(h,a))}let u=[c[23]],f={};for(let n=0;n<u.length;n+=1)f=oe(f,u[n]);return{c(){l=v("tr");for(let n=0;n<e.length;n+=1)e[n].c();o=R(),this.h()},l(n){l=y(n,"TR",{});var a=H(l);for(let h=0;h<e.length;h+=1)e[h].l(a);a.forEach(d),o=B(n),this.h()},h(){Y(l,f)},m(n,a){A(n,l,a);for(let h=0;h<e.length;h+=1)e[h]&&e[h].m(l,null);A(n,o,a),r=!0},p(n,a){a[0]&134217984&&(i=P(n[20].cells),K(),e=ue(e,a,t,1,n,i,s,l,he,De,null,Se),Q()),Y(l,f=ce(u,[a[0]&8388608&&n[23]]))},i(n){if(!r){for(let a=0;a<i.length;a+=1)b(e[a]);r=!0}},o(n){for(let a=0;a<e.length;a+=1)k(e[a]);r=!1},d(n){n&&(d(l),d(o));for(let a=0;a<e.length;a+=1)e[a].d()}}}function Ae(c,l){let e,s,o;return s=new _e({props:{rowAttrs:l[20].attrs(),$$slots:{default:[nt,({rowAttrs:r})=>({23:r}),({rowAttrs:r})=>[r?8388608:0]]},$$scope:{ctx:l}}}),{key:c,first:null,c(){e=X(),q(s.$$.fragment),this.h()},l(r){e=X(),L(s.$$.fragment,r),this.h()},h(){this.first=e},m(r,i){A(r,e,i),U(s,r,i),o=!0},p(r,i){l=r;const t={};i[0]&256&&(t.rowAttrs=l[20].attrs()),i[0]&8388864|i[1]&8&&(t.$$scope={dirty:i,ctx:l}),s.$set(t)},i(r){o||(b(s.$$.fragment,r),o=!0)},o(r){k(s.$$.fragment,r),o=!1},d(r){r&&d(e),F(s,r)}}}function ot(c){let l,e,s,o=[],r=new Map,i,t,u=[],f=new Map,n,a=P(c[6]);const h=_=>_[28].id;for(let _=0;_<a.length;_+=1){let m=Ce(c,a,_),$=h(m);r.set($,o[_]=Te($,m))}let V=P(c[8]);const ee=_=>_[20].id;for(let _=0;_<V.length;_+=1){let m=we(c,V,_),$=ee(m);f.set($,u[_]=Ae($,m))}let N=[c[7]],W={};for(let _=0;_<N.length;_+=1)W=oe(W,N[_]);let z=[{class:"table table-compact"},c[5]],G={};for(let _=0;_<z.length;_+=1)G=oe(G,z[_]);return{c(){l=v("div"),e=v("table"),s=v("thead");for(let _=0;_<o.length;_+=1)o[_].c();i=R(),t=v("tbody");for(let _=0;_<u.length;_+=1)u[_].c();this.h()},l(_){l=y(_,"DIV",{class:!0});var m=H(l);e=y(m,"TABLE",{class:!0});var $=H(e);s=y($,"THEAD",{});var J=H(s);for(let E=0;E<o.length;E+=1)o[E].l(J);J.forEach(d),i=B($),t=y($,"TBODY",{});var D=H(t);for(let E=0;E<u.length;E+=1)u[E].l(D);D.forEach(d),$.forEach(d),m.forEach(d),this.h()},h(){Y(t,W),Y(e,G),M(l,"class","table-container py-4")},m(_,m){A(_,l,m),w(l,e),w(e,s);for(let $=0;$<o.length;$+=1)o[$]&&o[$].m(s,null);w(e,i),w(e,t);for(let $=0;$<u.length;$+=1)u[$]&&u[$].m(t,null);n=!0},p(_,m){m[0]&142606401&&(a=P(_[6]),K(),o=ue(o,m,h,1,_,a,r,s,he,Te,null,Ce),Q()),m[0]&142606592&&(V=P(_[8]),K(),u=ue(u,m,ee,1,_,V,f,t,he,Ae,null,we),Q()),Y(t,W=ce(N,[m[0]&128&&_[7]])),Y(e,G=ce(z,[{class:"table table-compact"},m[0]&32&&_[5]]))},i(_){if(!n){for(let m=0;m<a.length;m+=1)b(o[m]);for(let m=0;m<V.length;m+=1)b(u[m]);n=!0}},o(_){for(let m=0;m<o.length;m+=1)k(o[m]);for(let m=0;m<u.length;m+=1)k(u[m]);n=!1},d(_){_&&d(l);for(let m=0;m<o.length;m+=1)o[m].d();for(let m=0;m<u.length;m+=1)u[m].d()}}}function ct(c,l,e){let s,o,r,i,t,u,f,n=fe,a=()=>(n(),n=ie(r,g=>e(5,f=g)),r),h,V=fe,ee=()=>(V(),V=ie(s,g=>e(6,h=g)),s),N,W=fe,z=()=>(W(),W=ie(i,g=>e(7,N=g)),i),G,_=fe,m=()=>(_(),_=ie(o,g=>e(8,G=g)),o);c.$$.on_destroy.push(()=>n()),c.$$.on_destroy.push(()=>V()),c.$$.on_destroy.push(()=>W()),c.$$.on_destroy.push(()=>_());let{data:$=[]}=l,{teams:J={}}=l,{categoryStats:D=[]}=l,E=de(J);me(c,E,g=>e(17,t=g));let re=D,Z=de($);me(c,Z,g=>e(18,u=g));let O=ke(Z);function te(g,p,T){const j=g.column(xe(T,se=>se[0])),I=1,le=["GM","GP"].concat(p).map((se,Ye)=>g.column({id:se,header:Qe(Ze,{text:se,tooltipText:Xe[se]}),cell:et,accessor:qe=>qe[I+Ye]})),ne=I+le.length,We=g.column({id:"score",header:"Score",accessor:se=>se[ne]});return g.createColumns([j].concat(le).concat([We]))}let S=te(O,D,E),C=O.createViewModel(S);return c.$$set=g=>{"data"in g&&e(11,$=g.data),"teams"in g&&e(12,J=g.teams),"categoryStats"in g&&e(13,D=g.categoryStats)},c.$$.update=()=>{c.$$.dirty[0]&57345&&re!==D&&(e(15,O=ke(Z)),e(0,S=te(O,D,E)),e(16,C=O.createViewModel(S)),e(14,re=D)),c.$$.dirty[0]&65536&&ee(e(4,{headerRows:s,rows:o,tableAttrs:r,tableBodyAttrs:i}=C,s,m(e(3,o)),a(e(2,r)),z(e(1,i)))),c.$$.dirty[0]&2048&&$e(Z,u=$,u),c.$$.dirty[0]&4096&&$e(E,t=J,t)},[S,i,r,o,s,f,h,N,G,E,Z,$,J,D,re,O,C]}class be extends ze{constructor(l){super(),Pe(this,l,ct,ot,ge,{data:11,teams:12,categoryStats:13},null,[-1,-1])}}function Re(c,l,e){const s=c.slice();return s[9]=l[e],s}function Be(c,l,e){const s=c.slice();return s[9]=l[e],s}function Ie(c,l,e){const s=c.slice();return s[9]=l[e],s}function Me(c){let l,e,s="Regular Season",o,r,i=P(c[1].regular),t=[];for(let f=0;f<i.length;f+=1)t[f]=He(Ie(c,i,f));const u=f=>k(t[f],1,1,()=>{t[f]=null});return{c(){l=v("section"),e=v("h4"),e.textContent=s,o=R();for(let f=0;f<t.length;f+=1)t[f].c();this.h()},l(f){l=y(f,"SECTION",{class:!0});var n=H(l);e=y(n,"H4",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-o2vl7a"&&(e.textContent=s),o=B(n);for(let a=0;a<t.length;a+=1)t[a].l(n);n.forEach(d),this.h()},h(){M(e,"class","h4"),M(l,"class","my-4")},m(f,n){A(f,l,n),w(l,e),w(l,o);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(l,null);r=!0},p(f,n){if(n&194){i=P(f[1].regular);let a;for(a=0;a<i.length;a+=1){const h=Ie(f,i,a);t[a]?(t[a].p(h,n),b(t[a],1)):(t[a]=He(h),t[a].c(),b(t[a],1),t[a].m(l,null))}for(K(),a=i.length;a<t.length;a+=1)u(a);Q()}},i(f){if(!r){for(let n=0;n<i.length;n+=1)b(t[n]);r=!0}},o(f){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)k(t[n]);r=!1},d(f){f&&d(l),pe(t,f)}}}function He(c){let l,e;return l=new be({props:{data:c[9].rows,teams:c[7],categoryStats:c[6]}}),{c(){q(l.$$.fragment)},l(s){L(l.$$.fragment,s)},m(s,o){U(l,s,o),e=!0},p(s,o){const r={};o&2&&(r.data=s[9].rows),o&128&&(r.teams=s[7]),o&64&&(r.categoryStats=s[6]),l.$set(r)},i(s){e||(b(l.$$.fragment,s),e=!0)},o(s){k(l.$$.fragment,s),e=!1},d(s){F(l,s)}}}function Ne(c){let l,e,s="Championship",o,r,i=P(c[1].championship),t=[];for(let f=0;f<i.length;f+=1)t[f]=Ge(Be(c,i,f));const u=f=>k(t[f],1,1,()=>{t[f]=null});return{c(){l=v("section"),e=v("h4"),e.textContent=s,o=R();for(let f=0;f<t.length;f+=1)t[f].c();this.h()},l(f){l=y(f,"SECTION",{class:!0});var n=H(l);e=y(n,"H4",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-1j7g5da"&&(e.textContent=s),o=B(n);for(let a=0;a<t.length;a+=1)t[a].l(n);n.forEach(d),this.h()},h(){M(e,"class","h4"),M(l,"class","my-4")},m(f,n){A(f,l,n),w(l,e),w(l,o);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(l,null);r=!0},p(f,n){if(n&194){i=P(f[1].championship);let a;for(a=0;a<i.length;a+=1){const h=Be(f,i,a);t[a]?(t[a].p(h,n),b(t[a],1)):(t[a]=Ge(h),t[a].c(),b(t[a],1),t[a].m(l,null))}for(K(),a=i.length;a<t.length;a+=1)u(a);Q()}},i(f){if(!r){for(let n=0;n<i.length;n+=1)b(t[n]);r=!0}},o(f){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)k(t[n]);r=!1},d(f){f&&d(l),pe(t,f)}}}function Ge(c){let l,e;return l=new be({props:{data:c[9].rows,teams:c[7],categoryStats:c[6]}}),{c(){q(l.$$.fragment)},l(s){L(l.$$.fragment,s)},m(s,o){U(l,s,o),e=!0},p(s,o){const r={};o&2&&(r.data=s[9].rows),o&128&&(r.teams=s[7]),o&64&&(r.categoryStats=s[6]),l.$set(r)},i(s){e||(b(l.$$.fragment,s),e=!0)},o(s){k(l.$$.fragment,s),e=!1},d(s){F(l,s)}}}function Oe(c){let l,e,s="Consolation",o,r,i=P(c[1].consolation),t=[];for(let f=0;f<i.length;f+=1)t[f]=je(Re(c,i,f));const u=f=>k(t[f],1,1,()=>{t[f]=null});return{c(){l=v("section"),e=v("h4"),e.textContent=s,o=R();for(let f=0;f<t.length;f+=1)t[f].c();this.h()},l(f){l=y(f,"SECTION",{class:!0});var n=H(l);e=y(n,"H4",{class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-tixfku"&&(e.textContent=s),o=B(n);for(let a=0;a<t.length;a+=1)t[a].l(n);n.forEach(d),this.h()},h(){M(e,"class","h4"),M(l,"class","my-4")},m(f,n){A(f,l,n),w(l,e),w(l,o);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(l,null);r=!0},p(f,n){if(n&194){i=P(f[1].consolation);let a;for(a=0;a<i.length;a+=1){const h=Re(f,i,a);t[a]?(t[a].p(h,n),b(t[a],1)):(t[a]=je(h),t[a].c(),b(t[a],1),t[a].m(l,null))}for(K(),a=i.length;a<t.length;a+=1)u(a);Q()}},i(f){if(!r){for(let n=0;n<i.length;n+=1)b(t[n]);r=!0}},o(f){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)k(t[n]);r=!1},d(f){f&&d(l),pe(t,f)}}}function je(c){let l,e;return l=new be({props:{data:c[9].rows,teams:c[7],categoryStats:c[6]}}),{c(){q(l.$$.fragment)},l(s){L(l.$$.fragment,s)},m(s,o){U(l,s,o),e=!0},p(s,o){const r={};o&2&&(r.data=s[9].rows),o&128&&(r.teams=s[7]),o&64&&(r.categoryStats=s[6]),l.$set(r)},i(s){e||(b(l.$$.fragment,s),e=!0)},o(s){k(l.$$.fragment,s),e=!1},d(s){F(l,s)}}}function ft(c){let l,e,s,o,r,i="Matchups",t,u,f,n,a,h,V="Team Stats",ee,N,W,z,G,_="Roto",m,$,J,D,E,re="Breakdown",Z,O,te;document.title=l="Association Stats - "+c[0].year+" - Week "+c[0].week;let S=c[1].regular.length>0&&Me(c),C=c[1].championship.length>0&&Ne(c),g=c[1].consolation.length>0&&Oe(c);return N=new Fe({props:{data:c[2].rows,teams:c[7],defaultHiddenStats:c[5]}}),$=new Je({props:{data:c[3].rows,teams:c[7],categoryStats:c[6]}}),O=new Ke({props:{data:c[4].rows,teams:c[7]}}),{c(){e=R(),s=v("div"),o=v("section"),r=v("h2"),r.textContent=i,t=R(),S&&S.c(),u=R(),C&&C.c(),f=R(),g&&g.c(),n=R(),a=v("section"),h=v("h2"),h.textContent=V,ee=R(),q(N.$$.fragment),W=R(),z=v("section"),G=v("h2"),G.textContent=_,m=R(),q($.$$.fragment),J=R(),D=v("section"),E=v("h2"),E.textContent=re,Z=R(),q(O.$$.fragment),this.h()},l(p){Ue("svelte-18zmfcl",document.head).forEach(d),e=B(p),s=y(p,"DIV",{class:!0});var j=H(s);o=y(j,"SECTION",{class:!0});var I=H(o);r=y(I,"H2",{class:!0,"data-svelte-h":!0}),ae(r)!=="svelte-pzl9nc"&&(r.textContent=i),t=B(I),S&&S.l(I),u=B(I),C&&C.l(I),f=B(I),g&&g.l(I),I.forEach(d),n=B(j),a=y(j,"SECTION",{class:!0});var x=H(a);h=y(x,"H2",{class:!0,"data-svelte-h":!0}),ae(h)!=="svelte-h6m575"&&(h.textContent=V),ee=B(x),L(N.$$.fragment,x),x.forEach(d),W=B(j),z=y(j,"SECTION",{class:!0});var le=H(z);G=y(le,"H2",{class:!0,"data-svelte-h":!0}),ae(G)!=="svelte-v3onhn"&&(G.textContent=_),m=B(le),L($.$$.fragment,le),le.forEach(d),J=B(j),D=y(j,"SECTION",{class:!0});var ne=H(D);E=y(ne,"H2",{class:!0,"data-svelte-h":!0}),ae(E)!=="svelte-z6r2j8"&&(E.textContent=re),Z=B(ne),L(O.$$.fragment,ne),ne.forEach(d),j.forEach(d),this.h()},h(){M(r,"class","h2"),M(o,"class","mb-8"),M(h,"class","h2"),M(a,"class","my-8"),M(G,"class","h2 mb-4"),M(z,"class","my-8"),M(E,"class","h2 mb-4"),M(D,"class","my-8"),M(s,"class","p-4")},m(p,T){A(p,e,T),A(p,s,T),w(s,o),w(o,r),w(o,t),S&&S.m(o,null),w(o,u),C&&C.m(o,null),w(o,f),g&&g.m(o,null),w(s,n),w(s,a),w(a,h),w(a,ee),U(N,a,null),w(s,W),w(s,z),w(z,G),w(z,m),U($,z,null),w(s,J),w(s,D),w(D,E),w(D,Z),U(O,D,null),te=!0},p(p,[T]){(!te||T&1)&&l!==(l="Association Stats - "+p[0].year+" - Week "+p[0].week)&&(document.title=l),p[1].regular.length>0?S?(S.p(p,T),T&2&&b(S,1)):(S=Me(p),S.c(),b(S,1),S.m(o,u)):S&&(K(),k(S,1,1,()=>{S=null}),Q()),p[1].championship.length>0?C?(C.p(p,T),T&2&&b(C,1)):(C=Ne(p),C.c(),b(C,1),C.m(o,f)):C&&(K(),k(C,1,1,()=>{C=null}),Q()),p[1].consolation.length>0?g?(g.p(p,T),T&2&&b(g,1)):(g=Oe(p),g.c(),b(g,1),g.m(o,null)):g&&(K(),k(g,1,1,()=>{g=null}),Q());const j={};T&4&&(j.data=p[2].rows),T&128&&(j.teams=p[7]),T&32&&(j.defaultHiddenStats=p[5]),N.$set(j);const I={};T&8&&(I.data=p[3].rows),T&128&&(I.teams=p[7]),T&64&&(I.categoryStats=p[6]),$.$set(I);const x={};T&16&&(x.data=p[4].rows),T&128&&(x.teams=p[7]),O.$set(x)},i(p){te||(b(S),b(C),b(g),b(N.$$.fragment,p),b($.$$.fragment,p),b(O.$$.fragment,p),te=!0)},o(p){k(S),k(C),k(g),k(N.$$.fragment,p),k($.$$.fragment,p),k(O.$$.fragment,p),te=!1},d(p){p&&(d(e),d(s)),S&&S.d(),C&&C.d(),g&&g.d(),F(N),F($),F(O)}}}function it(c,l,e){let s,o,r,i;me(c,tt,h=>e(8,i=h));let{data:t}=l,u,f,n,a;return c.$$set=h=>{"data"in h&&e(0,t=h.data)},c.$$.update=()=>{c.$$.dirty&1&&e(7,s=t.weekData.teams),c.$$.dirty&1&&e(6,o=t.weekData.categoryStats),c.$$.dirty&257&&(e(1,u=t.weekData.matchups),i?(e(2,f=t.weekData.perGame.teamStats),e(3,n=t.weekData.perGame.roto),e(4,a=t.weekData.perGame.breakdown)):(e(2,f=t.weekData.totals.teamStats),e(3,n=t.weekData.totals.roto),e(4,a=t.weekData.totals.breakdown))),c.$$.dirty&1&&e(5,r=t.weekData.nonCategoryStats.filter(h=>h!="GM"&&h!="GP"))},[t,u,f,n,a,r,o,s,i]}class kt extends ze{constructor(l){super(),Pe(this,l,it,ft,ge,{data:0})}}export{kt as component,$t as universal};