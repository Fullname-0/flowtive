"use strict";(()=>{var My=Object.defineProperty;var by=(s,t,e)=>t in s?My(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Bt=(s,t,e)=>by(s,typeof t!="symbol"?t+"":t,e);function hs(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Np(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},io={duration:.5,overwrite:!1,delay:0},Vu,_n,Ue,Mi=1e8,Ce=1/Mi,Pu=Math.PI*2,Ty=Pu/4,wy=0,Op=Math.sqrt,Ey=Math.cos,Ay=Math.sin,on=function(t){return typeof t=="string"},We=function(t){return typeof t=="function"},ds=function(t){return typeof t=="number"},kl=function(t){return typeof t>"u"},Ji=function(t){return typeof t=="object"},Kn=function(t){return t!==!1},Hu=function(){return typeof window<"u"},Pl=function(t){return We(t)||on(t)},Fp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mn=Array.isArray,Iu=/(?:-?\.?\d|\.)+/gi,Gu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,gr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wu=/[+-]=-?[.\d]+/,Bp=/[^,'"\[\]\s]+/gi,Cy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Fe,$i,Du,Xu,oi={},Ul={},kp,zp=function(t){return(Ul=so(t,oi))&&bn},zl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ga=function(t,e){return!e&&console.warn(t)},Vp=function(t,e){return t&&(oi[t]=e)&&Ul&&(Ul[t]=e)||oi},_a=function(){return 0},Ry={suppressEvents:!0,isStart:!0,kill:!1},Il={suppressEvents:!0,kill:!1},Py={suppressEvents:!0},Yu={},Is=[],Lu={},Hp,Zn={},Tu={},Cp=30,Dl=[],qu="",$u=function(t){var e=t[0],n,i;if(Ji(e)||We(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Dl.length;i--&&!Dl[i].targetTest(e););n=Dl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new ju(t[i],n)))||t.splice(i,1);return t},Ds=function(t){return t._gsap||$u(bi(t))[0]._gsap},Zu=function(t,e,n){return(n=t[e])&&We(n)?t[e]():kl(n)&&t.getAttribute&&t.getAttribute(e)||n},On=function(t,e){return(t=t.split(",")).forEach(e)||t},Xe=function(t){return Math.round(t*1e5)/1e5||0},je=function(t){return Math.round(t*1e7)/1e7||0},_r=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Iy=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Nl=function(){var t=Is.length,e=Is.slice(0),n,i;for(Lu={},Is.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ju=function(t){return!!(t._initted||t._startAt||t.add)},Gp=function(t,e,n,i){Is.length&&!_n&&Nl(),t.render(e,n,i||!!(_n&&e<0&&Ju(t))),Is.length&&!_n&&Nl()},Wp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Bp).length<2?e:on(t)?t.trim():t},Xp=function(t){return t},ai=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Dy=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},so=function(t,e){for(var n in e)t[n]=e[n];return t},Rp=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ji(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Ol=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},fa=function(t){var e=t.parent||Fe,n=t.keyframes?Dy(Mn(t.keyframes)):ai;if(Kn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Ly=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Yp=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Vl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Ls=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},fr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Uy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Uu=function(t,e,n,i){return t._startAt&&(_n?t._startAt.revert(Il):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Ny=function s(t){return!t||t._ts&&s(t.parent)},Pp=function(t){return t._repeat?ro(t._tTime,t=t.duration()+t._rDelay)*t:0},ro=function(t,e){var n=Math.floor(t=je(t/e));return t&&n===t?n-1:n},Fl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Hl=function(t){return t._end=je(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ce)||0))},Gl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=je(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Hl(t),n._dirty||fr(n,t)),t},qp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Fl(t.rawTime(),e),(!e._dur||va(0,e.totalDuration(),n)-e._tTime>Ce)&&e.render(n,!0)),fr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ce}},Zi=function(t,e,n,i){return e.parent&&Ls(e),e._start=je((ds(n)?n:n||t!==Fe?Si(t,n,e):t._time)+e._delay),e._end=je(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Yp(t,e,"_first","_last",t._sort?"_start":0),Nu(e)||(t._recent=e),i||qp(t,e),t._ts<0&&Gl(t,t._tTime),t},$p=function(t,e){return(oi.ScrollTrigger||zl("scrollTrigger",e))&&oi.ScrollTrigger.create(e,t)},Zp=function(t,e,n,i,r){if(ed(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!_n&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Hp!==Jn.frame)return Is.push(t),t._lazy=[r,i],1},Oy=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Nu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Fy=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Oy(t)&&!(!t._initted&&Nu(t))||(t._ts<0||t._dp._ts<0)&&!Nu(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=va(0,t._tDur,e),h=ro(l,a),t._yoyo&&h&1&&(o=1-o),h!==ro(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||_n||i||t._zTime===Ce||!e&&t._zTime){if(!t._initted&&Zp(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Ce:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Uu(t,e,n,!0),t._onUpdate&&!n&&ri(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ri(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ls(t,1),!n&&!_n&&(ri(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},By=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},oo=function(t,e,n,i){var r=t._repeat,o=je(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:je(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Gl(t,t._tTime=t._tDur*a),t.parent&&Hl(t),n||fr(t.parent,t),t},Ip=function(t){return t instanceof gn?fr(t):oo(t,t._dur)},ky={_start:0,endTime:_a,totalDuration:_a},Si=function s(t,e,n){var i=t.labels,r=t._recent||ky,o=t.duration()>=Mi?r.endTime(!1):t._dur,a,l,c;return on(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Mn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},pa=function(t,e,n){var i=ds(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Kn(l.vars.inherit)&&l.parent;o.immediateRender=Kn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Ze(e[0],o,e[r+1])},Us=function(t,e){return t||t===0?e(t):e},va=function(t,e,n){return n<t?t:n>e?e:n},yn=function(t,e){return!on(t)||!(e=Cy.exec(t))?"":e[1]},zy=function(t,e,n){return Us(n,function(i){return va(t,e,i)})},Ou=[].slice,Jp=function(t,e){return t&&Ji(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ji(t[0]))&&!t.nodeType&&t!==$i},Vy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return on(i)&&!e||Jp(i,1)?(r=n).push.apply(r,bi(i)):n.push(i)})||n},bi=function(t,e,n){return Ue&&!e&&Ue.selector?Ue.selector(t):on(t)&&!n&&(Du||!ao())?Ou.call((e||Xu).querySelectorAll(t),0):Mn(t)?Vy(t,n):Jp(t)?Ou.call(t,0):t?[t]:[]},Fu=function(t){return t=bi(t)[0]||ga("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return bi(e,n.querySelectorAll?n:n===t?ga("Invalid scope")||Xu.createElement("div"):t)}},Kp=function(t){return t.sort(function(){return .5-Math.random()})},jp=function(t){if(We(t))return t;var e=Ji(t)?t:{each:t},n=pr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return on(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,u,_){var g=(_||e).length,m=o[g],p,b,M,y,A,E,w,R,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,Mi])[1],!v){for(w=-Mi;w<(w=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=o[g]=[],p=l?Math.min(v,g)*h-.5:i%v,b=v===Mi?0:l?g*f/v-.5:i/v|0,w=0,R=Mi,E=0;E<g;E++)M=E%v-p,y=b-(E/v|0),m[E]=A=c?Math.abs(c==="y"?y:M):Op(M*M+y*y),A>w&&(w=A),A<R&&(R=A);i==="random"&&Kp(m),m.max=w-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=yn(e.amount||e.each)||0,n=n&&g<0?am(n):n}return g=(m[d]-m.min)/m.max||0,je(m.b+(n?n(g):g)*m.v)+m.u}},Bu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=je(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ds(n)?0:yn(n))}},Qp=function(t,e){var n=Mn(t),i,r;return!n&&Ji(t)&&(i=n=t.radius||Mi,t.values?(t=bi(t.values),(r=!ds(t[0]))&&(i*=i)):t=Bu(t.increment)),Us(e,n?We(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Mi,h=0,f=t.length,d,u;f--;)r?(d=t[f].x-a,u=t[f].y-l,d=d*d+u*u):d=Math.abs(t[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?t[h]:o,r||h===o||ds(o)?h:h+yn(o)}:Bu(t))},tm=function(t,e,n,i){return Us(Mn(t)?!e:n===!0?!!(n=0):!i,function(){return Mn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Hy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Gy=function(t,e){return function(n){return t(parseFloat(n))+(e||yn(n))}},Wy=function(t,e,n){return nm(t,e,0,1,n)},em=function(t,e,n){return Us(n,function(i){return t[~~e(i)]})},Xy=function s(t,e,n){var i=e-t;return Mn(t)?em(t,s(0,t.length),e):Us(n,function(r){return(i+(r-t)%i)%i+t})},Yy=function s(t,e,n){var i=e-t,r=i*2;return Mn(t)?em(t,s(0,t.length-1),e):Us(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},lo=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Bp:Iu),n+=t.substr(e,i-e)+tm(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},nm=function(t,e,n,i,r){var o=e-t,a=i-n;return Us(r,function(l){return n+((l-t)/o*a||0)})},qy=function s(t,e,n,i){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=on(t),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Mn(t)&&!Mn(e)){for(h=[],f=t.length,d=f-2,c=1;c<f;c++)h.push(s(t[c-1],t[c]));f--,r=function(_){_*=f;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=so(Mn(t)?[]:{},t));if(!h){for(l in e)Qu.call(a,t,l,"get",e[l]);r=function(_){return sd(_,a)||(o?t.p:t)}}}return Us(n,r)},Dp=function(t,e,n){var i=t.labels,r=Mi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ri=function(t,e,n){var i=t.vars,r=i[e],o=Ue,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Is.length&&Nl(),a&&(Ue=a),h=l?r.apply(c,l):r.call(c),Ue=o,h},ua=function(t){return Ls(t),t.scrollTrigger&&t.scrollTrigger.kill(!!_n),t.progress()<1&&ri(t,"onInterrupt"),t},no,im=[],sm=function(t){if(t)if(t=!t.name&&t.default||t,Hu()||t.headless){var e=t.name,n=We(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:_a,render:sd,add:Qu,kill:cx,modifier:lx,rawVars:0},o={targetTest:0,get:0,getSetter:Wl,aliases:{},register:0};if(ao(),t!==i){if(Zn[e])return;ai(i,ai(Ol(t,r),o)),so(i.prototype,so(r,Ol(t,o))),Zn[i.prop=e]=i,t.targetTest&&(Dl.push(i),Yu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Vp(e,i),t.register&&t.register(bn,i,Fn)}else im.push(t)},Ae=255,da={aqua:[0,Ae,Ae],lime:[0,Ae,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ae],navy:[0,0,128],white:[Ae,Ae,Ae],olive:[128,128,0],yellow:[Ae,Ae,0],orange:[Ae,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ae,0,0],pink:[Ae,192,203],cyan:[0,Ae,Ae],transparent:[Ae,Ae,Ae,0]},wu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ae+.5|0},rm=function(t,e,n){var i=t?ds(t)?[t>>16,t>>8&Ae,t&Ae]:0:da.black,r,o,a,l,c,h,f,d,u,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),da[t])i=da[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ae,i&Ae,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ae,t&Ae]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Iu),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=wu(l+1/3,r,o),i[1]=wu(l,r,o),i[2]=wu(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Gu),n&&i.length<4&&(i[3]=1),i}else i=t.match(Iu)||da.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/Ae,o=i[1]/Ae,a=i[2]/Ae,f=Math.max(r,o,a),d=Math.min(r,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===r?(o-a)/u+(o<a?6:0):f===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},om=function(t){var e=[],n=[],i=-1;return t.split(us).forEach(function(r){var o=r.match(gr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Lp=function(t,e,n){var i="",r=(t+i).match(us),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!r)return t;if(r=r.map(function(d){return(d=rm(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=om(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(us,"1").split(gr),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(us),f=c.length-1;a<f;a++)i+=c[a]+r[a];return i+c[f]},us=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in da)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),$y=/hsl[a]?\(/,Ku=function(t){var e=t.join(" "),n;if(us.lastIndex=0,us.test(e))return n=$y.test(e),t[1]=Lp(t[1],n),t[0]=Lp(t[0],n,om(t[1])),!0},ya,Jn=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,f,d,u,_=function g(m){var p=s()-i,b=m===!0,M,y,A,E;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,M=A-o,(M>0||b)&&(E=++f.frame,d=A-f.time*1e3,f.time=A=A/1e3,o+=M+(M>=r?4:r-M),y=1),b||(l=c(g)),y)for(u=0;u<a.length;u++)a[u](A,d,E,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){kp&&(!Du&&Hu()&&($i=Du=window,Xu=$i.document||{},oi.gsap=bn,($i.gsapVersions||($i.gsapVersions=[])).push(bn.version),zp(Ul||$i.GreenSockGlobals||!$i.gsap&&$i||{}),im.forEach(sm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},ya=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ya=0,c=_a},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){r=1e3/(m||240),o=f.time*1e3+r},add:function(m,p,b){var M=p?function(y,A,E,w){m(y,A,E,w),f.remove(M)}:m;return f.remove(m),a[b?"unshift":"push"](M),ao(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&u>=p&&u--},_listeners:a},f}(),ao=function(){return!ya&&Jn.wake()},de={},Zy=/^[\d.\-M][\d.\-,\s]/,Jy=/["']/g,Ky=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Jy,"").trim():+c,i=l.substr(a+1).trim();return e},jy=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Qy=function(t){var e=(t+"").split("("),n=de[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ky(e[1])]:jy(t).split(",").map(Wp)):de._CE&&Zy.test(t)?de._CE("",t):n},am=function(t){return function(e){return 1-t(1-e)}},lm=function s(t,e){for(var n=t._first,i;n;)n instanceof gn?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},pr=function(t,e){return t&&(We(t)?t:de[t]||Qy(t))||e},yr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return On(t,function(a){de[a]=oi[a]=r,de[o=a.toLowerCase()]=n;for(var l in r)de[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=de[a+"."+l]=r[l]}),r},cm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Eu=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Pu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Ay((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:cm(a);return r=Pu/r,l.config=function(c,h){return s(t,c,h)},l},Au=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:cm(n);return i.config=function(r){return s(t,r)},i};On("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;yr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});de.Linear.easeNone=de.none=de.Linear.easeIn;yr("Elastic",Eu("in"),Eu("out"),Eu());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};yr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);yr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});yr("Circ",function(s){return-(Op(1-s*s)-1)});yr("Sine",function(s){return s===1?1:-Ey(s*Ty)+1});yr("Back",Au("in"),Au("out"),Au());de.SteppedEase=de.steps=oi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Ce;return function(a){return((i*va(0,o,a)|0)+r)*n}}};io.ease=de["quad.out"];On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return qu+=s+","+s+"Params,"});var ju=function(t,e){this.id=wy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Zu,this.set=e?e.getSetter:Wl},xa=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,oo(this,+e.duration,1,1),this.data=e.data,Ue&&(this._ctx=Ue,Ue.data.push(this)),ya||Jn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,oo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ao(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Gl(this,n),!r._dp||r.parent||qp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Zi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ce||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Gp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Pp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Pp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ro(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ce?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Fl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ce?0:this._rts,this.totalTime(va(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Hl(this),Uy(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ao(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ce&&(this._tTime-=Ce)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Zi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Kn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Py);var i=_n;return _n=n,Ju(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_n=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ip(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ip(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Si(this,n),Kn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Kn(i)),this._dur||(this._zTime=-Ce),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ce,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ce)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=We(n)?n:Xp,a=function(){var c=i.then;i.then=null,We(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){ua(this)},s}();ai(xa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ce,_prom:0,_ps:!1,_rts:1});var gn=function(s){Np(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Kn(n.sortChildren),Fe&&Zi(n.parent||Fe,hs(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&$p(hs(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return pa(0,arguments,this),this},e.from=function(i,r,o){return pa(1,arguments,this),this},e.fromTo=function(i,r,o,a){return pa(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,fa(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Ze(i,r,Si(this,o),1),this},e.call=function(i,r,o){return Zi(this,Ze.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ze(i,o,Si(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,fa(o).immediateRender=Kn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,f){return a.startAt=o,fa(a).immediateRender=Kn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,f)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:je(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,u,_,g,m,p,b,M,y,A,E,w;if(this!==Fe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,M=this._ts,p=!M,f&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=je(h%m),h===l?(g=this._repeat,d=c):(A=je(h/m),g=~~A,g&&g===A&&(d=c,g--),d>c&&(d=c)),A=ro(this._tTime,m),!a&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),E&&g&1&&(d=c-d,w=1),g!==A&&!this._lock){var R=E&&A&1,v=R===(E&&g&1);if(g<A&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(w?0:je(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;lm(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=By(this,je(a),je(d)),b&&(h-=d-(d=b._start))),this._tTime=h,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&!A&&(ri(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(_=u._next,(u._act||d>=u._start)&&u._ts&&b!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,r,o),d!==this._time||!this._ts&&!p){b=0,_&&(h+=this._zTime=-Ce);break}}u=_}else{u=this._last;for(var x=i<0?i:d;u;){if(_=u._prev,(u._act||x<=u._end)&&u._ts&&b!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(x-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(x-u._start)*u._ts,r,o||_n&&Ju(u)),d!==this._time||!this._ts&&!p){b=0,_&&(h+=this._zTime=x?-Ce:Ce);break}}u=_}}if(b&&!r&&(this.pause(),b.render(d>=a?0:-Ce)._zTime=d>=a?1:-1,this._ts))return this._start=y,Hl(this),this.render(i,r,o);this._onUpdate&&!r&&ri(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ls(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(ri(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(ds(r)||(r=Si(this,r,i)),!(i instanceof xa)){if(Mn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(on(i))return this.addLabel(i,r);if(We(i))i=Ze.delayedCall(0,i);else return this}return this!==i?Zi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ze?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return on(i)?this.removeLabel(i):We(i)?this.killTweensOf(i):(i.parent===this&&Vl(this,i),i===this._recent&&(this._recent=this._last),fr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=je(Jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Si(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Ze.delayedCall(0,r||_a,o);return a.data="isPause",this._hasPause=1,Zi(this,a,Si(this,i))},e.removePause=function(i){var r=this._first;for(i=Si(this,i);r;)r._start===i&&r.data==="isPause"&&Ls(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ps!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=bi(i),l=this._first,c=ds(r),h;l;)l instanceof Ze?Iy(l._targets,a)&&(c?(!Ps||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Si(o,i),l=r,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,_=Ze.to(o,ai({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ce,onStart:function(){if(o.pause(),!u){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&oo(_,m,0,1).render(_._time,!0,!0),u=1}h&&h.apply(_,f||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,ai({startAt:{time:Si(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Dp(this,Si(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Dp(this,Si(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ce)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return fr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),fr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=Mi,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Zi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;oo(o,o===Fe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Fe._ts&&(Gp(Fe,Fl(i,Fe)),Hp=Jn.frame),Jn.frame>=Cp){Cp+=jn.autoSleep||120;var r=Fe._first;if((!r||!r._ts)&&jn.autoSleep&&Jn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Jn.sleep()}}},t}(xa);ai(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var tx=function(t,e,n,i,r,o,a){var l=new Fn(this._pt,t,e,0,1,id,null,r),c=0,h=0,f,d,u,_,g,m,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=lo(i)),o&&(b=[n,i],o(b,t,e),n=b[0],i=b[1]),d=n.match(bu)||[];f=bu.exec(i);)_=f[0],g=i.substring(c,f.index),u?u=(u+1)%5:g.substr(-5)==="rgba("&&(u=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?_r(m,_)-m:parseFloat(_)-m,m:u&&u<4?Math.round:0},c=bu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Wu.test(i)||p)&&(l.e=0),this._pt=l,l},Qu=function(t,e,n,i,r,o,a,l,c,h){We(i)&&(i=i(r||0,t,o));var f=t[e],d=n!=="get"?n:We(f)?c?t[e.indexOf("set")||!We(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,u=We(f)?c?rx:dm:nd,_;if(on(i)&&(~i.indexOf("random(")&&(i=lo(i)),i.charAt(1)==="="&&(_=_r(d,i)+(yn(d)||0),(_||_===0)&&(i=_))),!h||d!==i||ku)return!isNaN(d*i)&&i!==""?(_=new Fn(this._pt,t,e,+d||0,i-(d||0),typeof f=="boolean"?ax:fm,0,u),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!f&&!(e in t)&&zl(e,i),tx.call(this,t,e,d,i,u,l||jn.stringFilter,c))},ex=function(t,e,n,i,r){if(We(t)&&(t=ma(t,r,e,n,i)),!Ji(t)||t.style&&t.nodeType||Mn(t)||Fp(t))return on(t)?ma(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=ma(t[a],r,e,n,i);return o},td=function(t,e,n,i,r,o){var a,l,c,h;if(Zn[t]&&(a=new Zn[t]).init(r,a.rawVars?e[t]:ex(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Fn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==no))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ps,ku,ed=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,u=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,b=p&&p.data==="nested"?p.vars.targets:m,M=t._overwrite==="auto"&&!Vu,y=t.timeline,A,E,w,R,v,x,I,U,k,H,Y,V,Z;if(y&&(!d||!r)&&(r="none"),t._ease=pr(r,io.ease),t._yEase=f?am(pr(f===!0?r:f,io.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(U=m[0]?Ds(m[0]).harness:0,V=U&&i[U.prop],A=Ol(i,Yu),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!u?g.render(-1,!0):g.revert(h&&_?Il:Ry),g._lazy=0),o){if(Ls(t._startAt=Ze.set(m,ai({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Kn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(_n||!a&&!u)&&t._startAt.revert(Il),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),w=ai({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Kn(l),immediateRender:a,stagger:0,parent:p},A),V&&(w[U.prop]=V),Ls(t._startAt=Ze.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(_n?t._startAt.revert(Il):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Ce,Ce);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Kn(l)||l&&!_,E=0;E<m.length;E++){if(v=m[E],I=v._gsap||$u(m)[E]._gsap,t._ptLookup[E]=H={},Lu[I.id]&&Is.length&&Nl(),Y=b===m?E:b.indexOf(v),U&&(k=new U).init(v,V||A,t,Y,b)!==!1&&(t._pt=R=new Fn(t._pt,v,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(B){H[B]=R}),k.priority&&(x=1)),!U||V)for(w in A)Zn[w]&&(k=td(w,A,t,Y,v,b))?k.priority&&(x=1):H[w]=R=Qu.call(t,v,w,"get",A[w],Y,b,0,i.stringFilter);t._op&&t._op[E]&&t.kill(v,t._op[E]),M&&t._pt&&(Ps=t,Fe.killTweensOf(v,H,t.globalTime(e)),Z=!t.parent,Ps=0),t._pt&&l&&(Lu[I.id]=1)}x&&rd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Z,d&&e<=0&&y.render(Mi,!0,!0)},nx=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,d,u;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,u=t._targets.length;u--;){if(h=d[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return ku=1,t.vars[e]="+=0",ed(t,a),ku=0,l?ga(e+" not eligible for reset"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Xe(n)+yn(f.e)),f.b&&(f.b=h.s+yn(f.b))},ix=function(t,e){var n=t[0]?Ds(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=so({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},sx=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Mn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},ma=function(t,e,n,i,r){return We(t)?t.call(e,n,i,r):on(t)&&~t.indexOf("random(")?lo(t):t},hm=qu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",um={};On(hm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return um[s]=1});var Ze=function(s){Np(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:fa(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,b=i.parent||Fe,M=(Mn(n)||Fp(n)?ds(n[0]):"length"in i)?[n]:bi(n),y,A,E,w,R,v,x,I;if(a._targets=M.length?$u(M):ga("GSAP target "+n+" not found. https://gsap.com",!jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,_||d||Pl(c)||Pl(h)){if(i=a.vars,y=a.timeline=new gn({data:"nested",defaults:g||{},targets:b&&b.data==="nested"?b.vars.targets:M}),y.kill(),y.parent=y._dp=hs(a),y._start=0,d||Pl(c)||Pl(h)){if(w=M.length,x=d&&jp(d),Ji(d))for(R in d)~hm.indexOf(R)&&(I||(I={}),I[R]=d[R]);for(A=0;A<w;A++)E=Ol(i,um),E.stagger=0,p&&(E.yoyoEase=p),I&&so(E,I),v=M[A],E.duration=+ma(c,hs(a),A,v,M),E.delay=(+ma(h,hs(a),A,v,M)||0)-a._delay,!d&&w===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),y.to(v,E,x?x(A,v,M):0),y._ease=de.none;y.duration()?c=h=0:a.timeline=0}else if(_){fa(ai(y.vars.defaults,{ease:"none"})),y._ease=pr(_.ease||i.ease||"none");var U=0,k,H,Y;if(Mn(_))_.forEach(function(V){return y.to(M,V,">")}),y.duration();else{E={};for(R in _)R==="ease"||R==="easeEach"||sx(R,_[R],E,_.easeEach);for(R in E)for(k=E[R].sort(function(V,Z){return V.t-Z.t}),U=0,A=0;A<k.length;A++)H=k[A],Y={ease:H.e,duration:(H.t-(A?k[A-1].t:0))/100*c},Y[R]=H.v,y.to(M,Y,U),U+=Y.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return u===!0&&!Vu&&(Ps=hs(a),Fe.killTweensOf(M),Ps=0),Zi(b,hs(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!_&&a._start===je(b._time)&&Kn(f)&&Ny(hs(a))&&b.data!=="nested")&&(a._tTime=-Ce,a.render(Math.max(0,-h)||0)),m&&$p(hs(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-Ce&&!h?l:i<Ce?0:i,d,u,_,g,m,p,b,M,y;if(!c)Fy(this,i,r,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=f,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(d=je(f%g),f===l?(_=this._repeat,d=c):(m=je(f/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(y=this._yEase,d=c-d),m=ro(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&(M&&this._yEase&&lm(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(je(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Zp(this,h?i:d,o,r,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(d/c),this._from&&(this.ratio=b=1-b),!a&&f&&!r&&!m&&(ri(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(b,u.d),u=u._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Uu(this,i,r,o),ri(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&ri(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&Uu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ls(this,1),!r&&!(h&&!a)&&(f||a||p)&&(ri(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){ya||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||ed(this,c),h=this._ease(c/this._dur),nx(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Gl(this,0),this.parent||Yp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ua(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_n),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ps&&Ps.vars.overwrite!==!0)._first||ua(this),this.parent&&o!==this.timeline.totalDuration()&&oo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?bi(i):a,c=this._ptLookup,h=this._pt,f,d,u,_,g,m,p;if((!r||r==="all")&&Ly(a,l))return r==="all"&&(this._pt=0),ua(this);for(f=this._op=this._op||[],r!=="all"&&(on(r)&&(g={},On(r,function(b){return g[b]=1}),r=g),r=ix(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],r==="all"?(f[p]=r,_=d,u={}):(u=f[p]=f[p]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Vl(this,m,"_pt"),delete d[g]),u!=="all"&&(u[g]=1)}return this._initted&&!this._pt&&h&&ua(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return pa(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return pa(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Fe.killTweensOf(i,r,o)},t}(xa);ai(Ze.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});On("staggerTo,staggerFrom,staggerFromTo",function(s){Ze[s]=function(){var t=new gn,e=Ou.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var nd=function(t,e,n){return t[e]=n},dm=function(t,e,n){return t[e](n)},rx=function(t,e,n,i){return t[e](i.fp,n)},ox=function(t,e,n){return t.setAttribute(e,n)},Wl=function(t,e){return We(t[e])?dm:kl(t[e])&&t.setAttribute?ox:nd},fm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ax=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},id=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},sd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},lx=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},cx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Vl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},hx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},rd=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Fn=function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||fm,this.d=l||this,this.set=c||nd,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=hx,this.m=n,this.mt=r,this.tween=i},s}();On(qu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Yu[s]=1});oi.TweenMax=oi.TweenLite=Ze;oi.TimelineLite=oi.TimelineMax=gn;Fe=new gn({sortChildren:!1,defaults:io,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jn.stringFilter=Ku;var mr=[],Ll={},ux=[],Up=0,dx=0,Cu=function(t){return(Ll[t]||ux).map(function(e){return e()})},zu=function(){var t=Date.now(),e=[];t-Up>2&&(Cu("matchMediaInit"),mr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=$i.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Cu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Up=t,Cu("matchMedia"))},pm=function(){function s(e,n){this.selector=n&&Fu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=dx++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){We(n)&&(r=i,i=n,n=We);var o=this,a=function(){var c=Ue,h=o.selector,f;return c&&c!==o&&c.data.push(o),r&&(o.selector=Fu(r)),Ue=o,f=i.apply(o,arguments),We(f)&&o._r.push(f),Ue=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===We?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ue;Ue=null,n(this),Ue=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Ze&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ze)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=mr.length;o--;)mr[o].id===this.id&&mr.splice(o,1)},t.revert=function(n){this.kill(n||{})},s}(),fx=function(){function s(e){this.contexts=[],this.scope=e,Ue&&Ue.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Ji(n)||(n={matches:n});var o=new pm(0,r||this.scope),a=o.conditions={},l,c,h;Ue&&!o.selector&&(o.selector=Ue.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=$i.matchMedia(n[c]),l&&(mr.indexOf(o)<0&&mr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(zu):l.addEventListener("change",zu)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Bl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return sm(i)})},timeline:function(t){return new gn(t)},getTweensOf:function(t,e){return Fe.getTweensOf(t,e)},getProperty:function(t,e,n,i){on(t)&&(t=bi(t)[0]);var r=Ds(t||{}).get,o=n?Xp:Wp;return n==="native"&&(n=""),t&&(e?o((Zn[e]&&Zn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Zn[a]&&Zn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=bi(t),t.length>1){var i=t.map(function(h){return bn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var f=r;f--;)i[f](h)}}t=t[0]||{};var o=Zn[e],a=Ds(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;no._pt=0,f.init(t,n?h+n:h,no,0,[t]),f.render(1,f),no._pt&&sd(1,no)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=bn.to(t,ai((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=pr(t.ease,io.ease)),Rp(io,t||{})},config:function(t){return Rp(jn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Zn[a]&&!oi[a]&&ga(e+" effect requires "+a+" plugin.")}),Tu[e]=function(a,l,c){return n(bi(a),ai(l||{},r),c)},o&&(gn.prototype[e]=function(a,l,c){return this.add(Tu[e](a,Ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){de[t]=pr(e)},parseEase:function(t,e){return arguments.length?pr(t,e):de},getById:function(t){return Fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new gn(t),i,r;for(n.smoothChildTiming=Kn(t.smoothChildTiming),Fe.remove(n),n._dp=0,n._time=n._tTime=Fe._time,i=Fe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Ze&&i.vars.onComplete===i._targets[0]))&&Zi(n,i,i._start-i._delay),i=r;return Zi(Fe,n,0),n},context:function(t,e){return t?new pm(t,e):Ue},matchMedia:function(t){return new fx(t)},matchMediaRefresh:function(){return mr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||zu()},addEventListener:function(t,e){var n=Ll[t]||(Ll[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ll[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Xy,wrapYoyo:Yy,distribute:jp,random:tm,snap:Qp,normalize:Wy,getUnit:yn,clamp:zy,splitColor:rm,toArray:bi,selector:Fu,mapRange:nm,pipe:Hy,unitize:Gy,interpolate:qy,shuffle:Kp},install:zp,effects:Tu,ticker:Jn,updateRoot:gn.updateRoot,plugins:Zn,globalTimeline:Fe,core:{PropTween:Fn,globals:Vp,Tween:Ze,Timeline:gn,Animation:xa,getCache:Ds,_removeLinkedListItem:Vl,reverting:function(){return _n},context:function(t){return t&&Ue&&(Ue.data.push(t),t._ctx=Ue),Ue},suppressOverwrites:function(t){return Vu=t}}};On("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Bl[s]=Ze[s]});Jn.add(gn.updateRoot);no=Bl.to({},{duration:0});var px=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},mx=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=px(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Ru=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(on(r)&&(l={},On(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}mx(a,r)}}}},bn=Bl.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)_n?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ru("roundProps",Bu),Ru("modifiers"),Ru("snap",Qp))||Bl;Ze.version=gn.version=bn.version="3.13.0";kp=1;Hu()&&ao();var gx=de.Power0,_x=de.Power1,yx=de.Power2,xx=de.Power3,vx=de.Power4,Sx=de.Linear,Mx=de.Quad,bx=de.Cubic,Tx=de.Quart,wx=de.Quint,Ex=de.Strong,Ax=de.Elastic,Cx=de.Back,Rx=de.SteppedEase,Px=de.Bounce,Ix=de.Sine,Dx=de.Expo,Lx=de.Circ;var mm,Ns,ho,ud,Mr,Ux,gm,dd,Nx=function(){return typeof window<"u"},ps={},Sr=180/Math.PI,uo=Math.PI/180,co=Math.atan2,_m=1e8,fd=/([A-Z])/g,Ox=/(left|right|width|margin|padding|x)/i,Fx=/[\s,\(]\S/,Ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ad=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Bx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},kx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},zx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},wm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Em=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Vx=function(t,e,n){return t.style[e]=n},Hx=function(t,e,n){return t.style.setProperty(e,n)},Gx=function(t,e,n){return t._gsap[e]=n},Wx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Xx=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Yx=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Be="transform",Qn=Be+"Origin",qx=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in ps&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Ki[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=fs(i,a)}):this.tfm[t]=o.x?o[t]:fs(i,t),t===Qn&&(this.tfm.zOrigin=o.zOrigin);else return Ki.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Be)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qn,e,"")),t=Be}(r||e)&&this.props.push(t,e,r[t])},Am=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},$x=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(fd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=dd(),(!r||!r.isStart)&&!n[Be]&&(Am(n),i.zOrigin&&n[Qn]&&(n[Qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Cm=function(t,e){var n={target:t,props:[],revert:$x,save:qx};return t._gsap||bn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Rm,ld=function(t,e){var n=Ns.createElementNS?Ns.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ns.createElement(t);return n&&n.style?n:Ns.createElement(t)},Ti=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(fd,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,fo(e)||e,1)||""},ym="O,Moz,ms,Ms,Webkit".split(","),fo=function(t,e,n){var i=e||Mr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(ym[o]+t in r););return o<0?null:(o===3?"ms":o>=0?ym[o]:"")+t},cd=function(){Nx()&&window.document&&(mm=window,Ns=mm.document,ho=Ns.documentElement,Mr=ld("div")||{style:{}},Ux=ld("div"),Be=fo(Be),Qn=Be+"Origin",Mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rm=!!fo("perspective"),dd=bn.core.reverting,ud=1)},xm=function(t){var e=t.ownerSVGElement,n=ld("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ho.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ho.removeChild(n),r},vm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Pm=function(t){var e,n;try{e=t.getBBox()}catch{e=xm(t),n=1}return e&&(e.width||e.height)||n||(e=xm(t)),e&&!e.width&&!e.x&&!e.y?{x:+vm(t,["x","cx","x1"])||0,y:+vm(t,["y","cy","y1"])||0,width:0,height:0}:e},Im=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Pm(t))},br=function(t,e){if(e){var n=t.style,i;e in ps&&e!==Qn&&(e=Be),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(fd,"-$1").toLowerCase())):n.removeAttribute(e)}},Os=function(t,e,n,i,r,o){var a=new Fn(t._pt,e,n,0,1,o?Em:wm);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Sm={deg:1,rad:1,turn:1},Zx={grid:1,flex:1},Fs=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Mr.style,l=Ox.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",u=i==="%",_,g,m,p;if(i===o||!r||Sm[i]||Sm[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),p=t.getCTM&&Im(t),(u||o==="%")&&(ps[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Xe(u?r/_*f:r/100*_);if(a[l?"width":"height"]=f+(d?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Ns||!g.appendChild)&&(g=Ns.body),m=g._gsap,m&&u&&m.width&&l&&m.time===Jn.time&&!m.uncache)return Xe(r/m.width*f);if(u&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=f+i,_=t[h],b?t.style[e]=b:br(t,e)}else(u||o==="%")&&!Zx[Ti(g,"display")]&&(a.position=Ti(t,"position")),g===t&&(a.position="static"),g.appendChild(Mr),_=Mr[h],g.removeChild(Mr),a.position="absolute";return l&&u&&(m=Ds(g),m.time=Jn.time,m.width=g[h]),Xe(d?_*r/f:_&&r?f/_*r:0)},fs=function(t,e,n,i){var r;return ud||cd(),e in Ki&&e!=="transform"&&(e=Ki[e],~e.indexOf(",")&&(e=e.split(",")[0])),ps[e]&&e!=="transform"?(r=ba(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Yl(Ti(t,Qn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Xl[e]&&Xl[e](t,e,n)||Ti(t,e)||Zu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Fs(t,e,r,n)+n:r},Jx=function(t,e,n,i){if(!n||n==="none"){var r=fo(e,t,1),o=r&&Ti(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Ti(t,"borderTopColor"))}var a=new Fn(this._pt,t.style,e,0,1,id),l=0,c=0,h,f,d,u,_,g,m,p,b,M,y,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ti(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Ti(t,e)||i,g?t.style[e]=g:br(t,e)),h=[n,i],Ku(h),n=h[0],i=h[1],d=n.match(gr)||[],A=i.match(gr)||[],A.length){for(;f=gr.exec(i);)m=f[0],b=i.substring(l,f.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(u=parseFloat(g)||0,y=g.substr((u+"").length),m.charAt(1)==="="&&(m=_r(u,m)+y),p=parseFloat(m),M=m.substr((p+"").length),l=gr.lastIndex-M.length,M||(M=M||jn.units[e]||y,l===i.length&&(i+=M,a.e+=M)),y!==M&&(u=Fs(t,e,g,M)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:u,c:p-u,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Em:wm;return Wu.test(i)&&(a.e=0),this._pt=a,a},Mm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Kx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Mm[n]||n,e[1]=Mm[i]||i,e.join(" ")},jx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ps[a]&&(l=1,a=a==="transformOrigin"?Qn:Be),br(n,a);l&&(br(n,Be),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ba(n,1),o.uncache=1,Am(i)))}},Xl={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Fn(t._pt,e,n,0,0,jx);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Ma=[1,0,0,1,0,0],Dm={},Lm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},bm=function(t){var e=Ti(t,Be);return Lm(e)?Ma:e.substr(7).match(Gu).map(Xe)},pd=function(t,e){var n=t._gsap||Ds(t),i=t.style,r=bm(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ma:r):(r===Ma&&!t.offsetParent&&t!==ho&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,ho.appendChild(t)),r=bm(t),l?i.display=l:br(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ho.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},hd=function(t,e,n,i,r,o){var a=t._gsap,l=r||pd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],_=l[1],g=l[2],m=l[3],p=l[4],b=l[5],M=e.split(" "),y=parseFloat(M[0])||0,A=parseFloat(M[1])||0,E,w,R,v;n?l!==Ma&&(w=u*m-_*g)&&(R=y*(m/w)+A*(-g/w)+(g*b-m*p)/w,v=y*(-_/w)+A*(u/w)-(u*b-_*p)/w,y=R,A=v):(E=Pm(t),y=E.x+(~M[0].indexOf("%")?y/100*E.width:y),A=E.y+(~(M[1]||M[0]).indexOf("%")?A/100*E.height:A)),i||i!==!1&&a.smooth?(p=y-c,b=A-h,a.xOffset=f+(p*u+b*g)-p,a.yOffset=d+(p*_+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Qn]="0px 0px",o&&(Os(o,a,"xOrigin",c,y),Os(o,a,"yOrigin",h,A),Os(o,a,"xOffset",f,a.xOffset),Os(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+A)},ba=function(t,e){var n=t._gsap||new ju(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Ti(t,Qn)||"0",h,f,d,u,_,g,m,p,b,M,y,A,E,w,R,v,x,I,U,k,H,Y,V,Z,B,W,P,rt,Dt,Wt,q,et;return h=f=d=g=m=p=b=M=y=0,u=_=1,n.svg=!!(t.getCTM&&Im(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Be]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Be]!=="none"?l[Be]:"")),i.scale=i.rotate=i.translate="none"),w=pd(t,n.svg),n.svg&&(n.uncache?(B=t.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),hd(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,w)),A=n.xOrigin||0,E=n.yOrigin||0,w!==Ma&&(I=w[0],U=w[1],k=w[2],H=w[3],h=Y=w[4],f=V=w[5],w.length===6?(u=Math.sqrt(I*I+U*U),_=Math.sqrt(H*H+k*k),g=I||U?co(U,I)*Sr:0,b=k||H?co(k,H)*Sr+g:0,b&&(_*=Math.abs(Math.cos(b*uo))),n.svg&&(h-=A-(A*I+E*k),f-=E-(A*U+E*H))):(et=w[6],Wt=w[7],P=w[8],rt=w[9],Dt=w[10],q=w[11],h=w[12],f=w[13],d=w[14],R=co(et,Dt),m=R*Sr,R&&(v=Math.cos(-R),x=Math.sin(-R),Z=Y*v+P*x,B=V*v+rt*x,W=et*v+Dt*x,P=Y*-x+P*v,rt=V*-x+rt*v,Dt=et*-x+Dt*v,q=Wt*-x+q*v,Y=Z,V=B,et=W),R=co(-k,Dt),p=R*Sr,R&&(v=Math.cos(-R),x=Math.sin(-R),Z=I*v-P*x,B=U*v-rt*x,W=k*v-Dt*x,q=H*x+q*v,I=Z,U=B,k=W),R=co(U,I),g=R*Sr,R&&(v=Math.cos(R),x=Math.sin(R),Z=I*v+U*x,B=Y*v+V*x,U=U*v-I*x,V=V*v-Y*x,I=Z,Y=B),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),u=Xe(Math.sqrt(I*I+U*U+k*k)),_=Xe(Math.sqrt(V*V+et*et)),R=co(Y,V),b=Math.abs(R)>2e-4?R*Sr:0,y=q?1/(q<0?-q:q):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Lm(Ti(t,Be)),Z&&t.setAttribute("transform",Z))),Math.abs(b)>90&&Math.abs(b)<270&&(r?(u*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Xe(u),n.scaleY=Xe(_),n.rotation=Xe(g)+a,n.rotationX=Xe(m)+a,n.rotationY=Xe(p)+a,n.skewX=b+a,n.skewY=M+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Qn]=Yl(c)),n.xOffset=n.yOffset=0,n.force3D=jn.force3D,n.renderTransform=n.svg?tv:Rm?Um:Qx,n.uncache=0,n},Yl=function(t){return(t=t.split(" "))[0]+" "+t[1]},od=function(t,e,n){var i=yn(e);return Xe(parseFloat(e)+parseFloat(Fs(t,"x",n+"px",i)))+i},Qx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Um(t,e)},xr="0deg",Sa="0px",vr=") ",Um=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,u=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,M=n.zOrigin,y="",A=p==="auto"&&t&&t!==1||p===!0;if(M&&(f!==xr||h!==xr)){var E=parseFloat(h)*uo,w=Math.sin(E),R=Math.cos(E),v;E=parseFloat(f)*uo,v=Math.cos(E),o=od(b,o,w*v*-M),a=od(b,a,-Math.sin(E)*-M),l=od(b,l,R*v*-M+M)}m!==Sa&&(y+="perspective("+m+vr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(A||o!==Sa||a!==Sa||l!==Sa)&&(y+=l!==Sa||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+vr),c!==xr&&(y+="rotate("+c+vr),h!==xr&&(y+="rotateY("+h+vr),f!==xr&&(y+="rotateX("+f+vr),(d!==xr||u!==xr)&&(y+="skew("+d+", "+u+vr),(_!==1||g!==1)&&(y+="scale("+_+", "+g+vr),b.style[Be]=y||"translate(0, 0)"},tv=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,u=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,M=parseFloat(o),y=parseFloat(a),A,E,w,R,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=uo,c*=uo,A=Math.cos(l)*f,E=Math.sin(l)*f,w=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=uo,v=Math.tan(c-h),v=Math.sqrt(1+v*v),w*=v,R*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),A*=v,E*=v)),A=Xe(A),E=Xe(E),w=Xe(w),R=Xe(R)):(A=f,R=d,E=w=0),(M&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(M=Fs(u,"x",o,"px"),y=Fs(u,"y",a,"px")),(_||g||m||p)&&(M=Xe(M+_-(_*A+g*w)+m),y=Xe(y+g-(_*E+g*R)+p)),(i||r)&&(v=u.getBBox(),M=Xe(M+i/100*v.width),y=Xe(y+r/100*v.height)),v="matrix("+A+","+E+","+w+","+R+","+M+","+y+")",u.setAttribute("transform",v),b&&(u.style[Be]=v)},ev=function(t,e,n,i,r){var o=360,a=on(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Sr:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=r.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*_m)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*_m)%o-~~(c/o)*o)),t._pt=d=new Fn(t._pt,e,n,i,c,Bx),d.e=h,d.u="deg",t._props.push(n),d},Tm=function(t,e){for(var n in e)t[n]=e[n];return t},nv=function(t,e,n){var i=Tm({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,u,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Be]=e,a=ba(n,1),br(n,Be),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Be],o[Be]=e,a=ba(n,1),o[Be]=c);for(l in ps)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=yn(c),_=yn(h),f=u!==_?Fs(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new Fn(t._pt,a,l,f,d-f,ad),t._pt.u=_||0,t._props.push(l));Tm(a,i)};On("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Xl[t>1?"border"+s:s]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(_){return fs(a,_,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(_,g){return u[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,u,f)}});var md={name:"css",register:cd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,d,u,_,g,m,p,b,M,y,A,E,w,R;ud||cd(),this.styles=this.styles||Cm(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Zn[g]&&td(g,e,n,i,t,r)))){if(u=typeof h,_=Xl[g],u==="function"&&(h=h.call(n,i,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=lo(h)),_)_(this,t,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",us.lastIndex=0,us.test(c)||(m=yn(c),p=yn(h)),p?m!==p&&(c=Fs(t,g,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,r,0,0,g),o.push(g),R.push(g,0,a[g]);else if(u!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],on(c)&&~c.indexOf("random(")&&(c=lo(c)),yn(c+"")||c==="auto"||(c+=jn.units[g]||yn(fs(t,g))||""),(c+"").charAt(1)==="="&&(c=fs(t,g))):c=fs(t,g),d=parseFloat(c),b=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),f=parseFloat(h),g in Ki&&(g==="autoAlpha"&&(d===1&&fs(t,"visibility")==="hidden"&&f&&(d=0),R.push("visibility",0,a.visibility),Os(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Ki[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in ps,M){if(this.styles.save(g),u==="string"&&h.substring(0,6)==="var(--"&&(h=Ti(t,h.substring(4,h.indexOf(")"))),f=parseFloat(h)),y||(A=t._gsap,A.renderTransform&&!e.parseTransform||ba(t,e.parseTransform),E=e.smoothOrigin!==!1&&A.smooth,y=this._pt=new Fn(this._pt,a,Be,0,1,A.renderTransform,A,0,-1),y.dep=1),g==="scale")this._pt=new Fn(this._pt,A,"scaleY",A.scaleY,(b?_r(A.scaleY,b+f):f)-A.scaleY||0,ad),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Qn,0,a[Qn]),h=Kx(h),A.svg?hd(t,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&Os(this,A,"zOrigin",A.zOrigin,p),Os(this,a,g,Yl(c),Yl(h)));continue}else if(g==="svgOrigin"){hd(t,h,1,E,0,this);continue}else if(g in Dm){ev(this,A,g,d,b?_r(d,b+h):h);continue}else if(g==="smoothOrigin"){Os(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){nv(this,h,t);continue}}else g in a||(g=fo(g)||g);if(M||(f||f===0)&&(d||d===0)&&!Fx.test(h)&&g in a)m=(c+"").substr((d+"").length),f||(f=0),p=yn(h)||(g in jn.units?jn.units[g]:m),m!==p&&(d=Fs(t,g,c,p)),this._pt=new Fn(this._pt,M?A:a,g,d,(b?_r(d,b+f):f)-d,!M&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?zx:ad),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=kx);else if(g in a)Jx.call(this,t,g,c,b?b+h:h);else if(g in t)this.add(t,g,c||t[g],b?b+h:h,i,r);else if(g!=="parseTransform"){zl(g,h);continue}M||(g in a?R.push(g,0,a[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),o.push(g)}}w&&rd(this)},render:function(t,e){if(e.tween._time||!dd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:fs,aliases:Ki,getSetter:function(t,e,n){var i=Ki[e];return i&&i.indexOf(",")<0&&(e=i),e in ps&&e!==Qn&&(t._gsap.x||fs(t,"x"))?n&&gm===n?e==="scale"?Wx:Gx:(gm=n||{})&&(e==="scale"?Xx:Yx):t.style&&!kl(t.style[e])?Vx:~e.indexOf("-")?Hx:Wl(t,e)},core:{_removeProperty:br,_getMatrix:pd}};bn.utils.checkPrefix=fo;bn.core.getStyleSaver=Cm;(function(s,t,e,n){var i=On(s+","+t+","+e,function(r){ps[r]=1});On(t,function(r){jn.units[r]="deg",Dm[r]=1}),Ki[i[13]]=s+","+t,On(n,function(r){var o=r.split(":");Ki[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){jn.units[s]="px"});bn.registerPlugin(md);var Jt=bn.registerPlugin(md)||bn,E1=Jt.core.Tween;var Nm=()=>{let s=getComputedStyle(document.documentElement).getPropertyValue("--base--color--primary").trim(),t=getComputedStyle(document.documentElement).getPropertyValue("--base--color--secondary").trim();document.querySelectorAll(".nav-wrapper__link").forEach(e=>{let n=e.querySelectorAll("span");e.addEventListener("mouseenter",()=>{Jt.to(n,{color:iv(),ease:"power4.inOut",stagger:{each:.07,from:"start"},duration:.45})}),e.addEventListener("mouseleave",()=>{Jt.to(n,{color:sv(),ease:"power4.inOut",stagger:{each:.06,from:"start"},duration:.45})})})},iv=()=>getComputedStyle(document.documentElement).getPropertyValue("--base--color--nav-link").trim(),sv=()=>getComputedStyle(document.documentElement).getPropertyValue("--base--color--secondary").trim();var Qi=typeof window<"u",gd=Qi?window:null,vo=Qi?document:null,ke={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},fe={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},Ei={NONE:0,AUTO:1,FORCE:2},kn={replace:0,none:1,blend:2},Om=Symbol(),Ad=Symbol(),Zm=Symbol(),rc=Symbol(),P1=Symbol(),rv=Symbol(),be=1e-11,Jm=1e12,Er=1e3,vd=120,Vs="",Ra=new Map;Ra.set("x","translateX");Ra.set("y","translateY");Ra.set("z","translateZ");var Cd=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Km=Cd.reduce((s,t)=>({...s,[t]:t+"("}),{}),ti=()=>{},ov=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,av=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,lv=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,cv=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,hv=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Fm=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,jm=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,uv=/([a-z])([A-Z])/g,dv=/(\w+)(\([^)]+\)+)/g,fv=/(\*=|\+=|-=)/,Qm={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:vd,loop:0,reversed:!1,alternate:!1,autoplay:!0,duration:Er,delay:0,loopDelay:0,ease:"out(2)",composition:kn.replace,modifier:s=>s,onBegin:ti,onBeforeUpdate:ti,onUpdate:ti,onLoop:ti,onPause:ti,onComplete:ti,onRender:ti},Ye={defaults:Qm,root:vo,scope:null,precision:4,timeScale:1,tickThreshold:200},tg={version:"4.0.2",engine:null};Qi&&(gd.AnimeJS||(gd.AnimeJS=[]),gd.AnimeJS.push(tg));var pv=s=>s.replace(uv,"$1-$2").toLowerCase(),wr=(s,t)=>s.indexOf(t)===0,Ea=Date.now,Ar=Array.isArray,_d=s=>s&&s.constructor===Object,Rd=s=>typeof s=="number"&&!isNaN(s),oc=s=>typeof s=="string",tc=s=>typeof s=="function",he=s=>typeof s>"u",Jl=s=>he(s)||s===null,eg=s=>Qi&&s instanceof SVGElement,ng=s=>ov.test(s),ig=s=>wr(s,"rgb"),sg=s=>wr(s,"hsl"),mv=s=>ng(s)||ig(s)||sg(s),Kl=s=>!Ye.defaults.hasOwnProperty(s),Tr=s=>oc(s)?parseFloat(s):s,mo=Math.pow,rg=Math.sqrt,gv=Math.sin,_v=Math.cos,Aa=Math.abs;var yv=Math.ceil,Ca=Math.floor,xv=Math.asin,vv=Math.max;var Pa=Math.PI,Sd=Math.round,xn=(s,t,e)=>s<t?t:s>e?e:s,Bm={},ze=(s,t)=>{if(t<0)return s;if(!t)return Sd(s);let e=Bm[t];return e||(e=Bm[t]=10**t),Sd(s*e)/e},Sv=(s,t)=>Ar(t)?t.reduce((e,n)=>Aa(n-s)<Aa(e-s)?n:e):t?Sd(s/t)*t:s,zs=(s,t,e)=>s+(t-s)*e,Pd=s=>s===1/0?Jm:s===-1/0?-1e12:s,wa=s=>s<=be?be:Pd(ze(s,11)),Bn=s=>Ar(s)?[...s]:s,Mv=(s,t)=>{let e={...s};for(let n in t){let i=s[n];e[n]=he(i)?t[n]:i}return e},Je=(s,t,e,n="_prev",i="_next")=>{let r=s._head,o=i;for(e&&(r=s._tail,o=n);r;){let a=r[o];t(r),r=a}},Hs=(s,t,e="_prev",n="_next")=>{let i=t[e],r=t[n];i?i[n]=r:s._head=r,r?r[e]=i:s._tail=i,t[e]=null,t[n]=null},yo=(s,t,e,n="_prev",i="_next")=>{let r=s._tail;for(;r&&e&&e(r,t);)r=r[n];let o=r?r[i]:s._head;r?r[i]=t:s._head=t,o?o[n]=t:s._tail=t,t[n]=r,t[i]=o},ec=class{constructor(t=0){this.deltaTime=0,this._currentTime=t,this._elapsedTime=t,this._startTime=t,this._lastTime=t,this._scheduledTime=0,this._frameDuration=ze(Er/vd,0),this._fps=vd,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(t){let e=this._frameDuration,n=+t,i=n<be?be:n,r=ze(Er/i,0);this._fps=i,this._frameDuration=r,this._scheduledTime+=r-e}get speed(){return this._speed}set speed(t){let e=+t;this._speed=e<be?be:e}requestTick(t){let e=this._scheduledTime,n=this._elapsedTime;if(this._elapsedTime+=t-n,n<e)return Ei.NONE;let i=this._frameDuration,r=n-e;return this._scheduledTime+=r<i?i:r,Ei.AUTO}computeDeltaTime(t){let e=t-this._lastTime;return this.deltaTime=e,this._lastTime=t,e}},jl=(s,t,e,n,i)=>{let r=s.parent,o=s.duration,a=s.completed,l=s.iterationDuration,c=s.iterationCount,h=s._currentIteration,f=s._loopDelay,d=s._reversed,u=s._alternate,_=s._hasChildren,g=s._delay,m=s._currentTime,p=g+l,b=t-g,M=xn(m,-g,o),y=xn(b,-g,o),A=b-m,E=y>0,w=y>=o,R=o<=be,v=i===Ei.FORCE,x=0,I=b,U=0;if(c>1){let Z=~~(y/(l+(w?0:f)));s._currentIteration=xn(Z,0,c),w&&s._currentIteration--,x=s._currentIteration%2,I=y%(l+f)||0}let k=d^(u&&x),H=s._ease,Y=w?k?0:o:k?l-I:I;H&&(Y=l*H(Y/l)||0);let V=(r?r.backwards:b<m)?!k:!!k;if(s._currentTime=b,s._iterationTime=Y,s.backwards=V,E&&!s.began?(s.began=!0,!e&&!(r&&(V||!r.began))&&s.onBegin(s)):b<=0&&(s.began=!1),!e&&!_&&E&&s._currentIteration!==h&&s.onLoop(s),v||i===Ei.AUTO&&(t>=g&&t<=p||t<=g&&M>g||t>=p&&M!==o)||Y>=p&&M!==o||Y<=g&&M>0||t<=M&&M===o&&a||w&&!a&&R){if(E&&(s.computeDeltaTime(M),e||s.onBeforeUpdate(s)),!_){let Z=v||(V?A*-1:A)>=Ye.tickThreshold,B=s._offset+(r?r._offset:0)+g+Y,W=s._head,P,rt,Dt,Wt,q=0;for(;W;){let et=W._composition,at=W._currentTime,nt=W._changeDuration,St=W._absoluteStartTime+W._changeDuration,Ut=W._nextRep,bt=W._prevRep,Xt=et!==kn.none;if((Z||(at!==nt||B<=St+(Ut?Ut._delay:0))&&(at!==0||B>=W._absoluteStartTime))&&(!Xt||!W._isOverridden&&(!W._isOverlapped||B<=St)&&(!Ut||Ut._isOverridden||B<=Ut._absoluteStartTime)&&(!bt||bt._isOverridden||B>=bt._absoluteStartTime+bt._changeDuration+W._delay))){let Ht=W._currentTime=xn(Y-W._startTime,0,nt),ct=W._ease(Ht/W._updateDuration),D=W._modifier,ie=W._valueType,Pt=W._tweenType,O=Pt===ke.OBJECT,xt=ie===fe.NUMBER,$t=xt&&O||ct===0||ct===1?-1:Ye.precision,pt,C;if(xt)pt=C=D(ze(zs(W._fromNumber,W._toNumber,ct),$t));else if(ie===fe.UNIT)C=D(ze(zs(W._fromNumber,W._toNumber,ct),$t)),pt=`${C}${W._unit}`;else if(ie===fe.COLOR){let S=W._fromNumbers,z=W._toNumbers,K=ze(xn(D(zs(S[0],z[0],ct)),0,255),0),Q=ze(xn(D(zs(S[1],z[1],ct)),0,255),0),j=ze(xn(D(zs(S[2],z[2],ct)),0,255),0),ht=xn(D(ze(zs(S[3],z[3],ct),$t)),0,1);if(pt=`rgba(${K},${Q},${j},${ht})`,Xt){let ot=W._numbers;ot[0]=K,ot[1]=Q,ot[2]=j,ot[3]=ht}}else if(ie===fe.COMPLEX){pt=W._strings[0];for(let S=0,z=W._toNumbers.length;S<z;S++){let K=D(ze(zs(W._fromNumbers[S],W._toNumbers[S],ct),$t)),Q=W._strings[S+1];pt+=`${Q?K+Q:K}`,Xt&&(W._numbers[S]=K)}}if(Xt&&(W._number=C),!n&&et!==kn.blend){let S=W.property;P=W.target,O?P[S]=pt:Pt===ke.ATTRIBUTE?P.setAttribute(S,pt):(rt=P.style,Pt===ke.TRANSFORM?(P!==Dt&&(Dt=P,Wt=P[rc]),Wt[S]=pt,q=1):Pt===ke.CSS?rt[S]=pt:Pt===ke.CSS_VAR&&rt.setProperty(S,pt)),E&&(U=1)}else W._value=pt}if(q&&W._renderTransforms){let Ht=Vs;for(let ct in Wt)Ht+=`${Km[ct]}${Wt[ct]}) `;rt.transform=Ht,q=0}W=W._next}!e&&U&&s.onRender(s)}!e&&E&&s.onUpdate(s)}return r&&R?!e&&(r.began&&!V&&b>=o&&!a||V&&b<=be&&a)&&(s.onComplete(s),s.completed=!V):E&&w?c===1/0?s._startTime+=s.duration:s._currentIteration>=c-1&&(s.paused=!0,!a&&!_&&(s.completed=!0,!e&&!(r&&(V||!r.began))&&(s.onComplete(s),s._resolve(s)))):s.completed=!1,U},go=(s,t,e,n,i)=>{let r=s._currentIteration;if(jl(s,t,e,n,i),s._hasChildren){let o=s,a=o.backwards,l=n?t:o._iterationTime,c=Ea(),h=0,f=!0;if(!n&&o._currentIteration!==r){let d=o.iterationDuration;Je(o,u=>{if(!a)!u.completed&&!u.backwards&&u._currentTime<u.iterationDuration&&jl(u,d,e,1,Ei.FORCE),u.began=!1,u.completed=!1;else{let _=u.duration,g=u._offset+u._delay,m=g+_;!e&&_<=be&&(!g||m===d)&&u.onComplete(u)}}),e||o.onLoop(o)}Je(o,d=>{let u=ze((l-d._offset)*d._speed,12),_=d._fps<o._fps?d.requestTick(c):i;h+=jl(d,u,e,n,_),!d.completed&&f&&(f=!1)},a),!e&&h&&o.onRender(o),f&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,e||(o.onComplete(o),o._resolve(o))))}},xo={animation:null,update:ti},bv=s=>{let t=xo.animation;return t||(t={duration:be,computeDeltaTime:ti,_offset:0,_delay:0,_head:null,_tail:null},xo.animation=t,xo.update=()=>{s.forEach(e=>{for(let n in e){let i=e[n],r=i._head;if(r){let o=r._valueType,a=o===fe.COMPLEX||o===fe.COLOR?Bn(r._fromNumbers):null,l=r._fromNumber,c=i._tail;for(;c&&c!==r;){if(a)for(let h=0,f=c._numbers.length;h<f;h++)a[h]+=c._numbers[h];else l+=c._number;c=c._prevAdd}r._toNumber=l,r._toNumbers=a}}}),jl(t,1,1,0,Ei.FORCE)}),t},og=Qi?requestAnimationFrame:setImmediate,Tv=Qi?cancelAnimationFrame:clearImmediate,Md=class extends ec{constructor(t){super(t),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=Qm,this.paused=!!(Qi&&vo.hidden),this.reqId=null}update(){let t=this._currentTime=Ea();if(this.requestTick(t)){this.computeDeltaTime(t);let e=this._speed,n=this._fps,i=this._head;for(;i;){let r=i._next;i.paused?(Hs(this,i),this._hasChildren=!!this._tail,i._running=!1,i.completed&&!i._cancelled&&i.cancel()):go(i,(t-i._startTime)*i._speed*e,0,0,i._fps<n?i.requestTick(t):Ei.AUTO),i=r}xo.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&!this.paused&&(this.reqId=og(ag)),this}pause(){return this.paused=!0,wv()}resume(){if(this.paused)return this.paused=!1,Je(this,t=>t.resetTime()),this.wake()}get speed(){return this._speed*(Ye.timeScale===1?1:Er)}set speed(t){this._speed=t*Ye.timeScale,Je(this,e=>e.speed=e._speed)}get timeUnit(){return Ye.timeScale===1?"ms":"s"}set timeUnit(t){let n=t==="s",i=n?.001:1;if(Ye.timeScale!==i){Ye.timeScale=i,Ye.tickThreshold=200*i;let r=n?.001:Er;this.defaults.duration*=r,this._speed*=r}}get precision(){return Ye.precision}set precision(t){Ye.precision=t}},an=(()=>{let s=new Md(Ea());return Qi&&(tg.engine=s,vo.addEventListener("visibilitychange",()=>{s.pauseOnDocumentHidden&&(vo.hidden?s.pause():s.resume())})),s})(),ag=()=>{an._head?(an.reqId=og(ag),an.update()):an.reqId=0},wv=()=>(Tv(an.reqId),an.reqId=0,an),Ev=(s,t,e)=>{let n=s.style.transform,i;if(n){let r=s[rc],o;for(;o=dv.exec(n);){let a=o[1],l=o[2].slice(1,-1);r[a]=l,a===t&&(i=l,e&&(e[t]=l))}}return n&&!he(i)?i:wr(t,"scale")?"1":wr(t,"rotate")||wr(t,"skew")?"0deg":"0px"};function km(s){let t=oc(s)?Ye.root.querySelectorAll(s):s;if(t instanceof NodeList||t instanceof HTMLCollection)return t}function lg(s){if(Jl(s))return[];if(Ar(s)){let e=s.flat(1/0),n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];if(!Jl(o)){let a=km(o);if(a)for(let l=0,c=a.length;l<c;l++){let h=a[l];if(!Jl(h)){let f=!1;for(let d=0,u=n.length;d<u;d++)if(n[d]===h){f=!0;break}f||n.push(h)}}else{let l=!1;for(let c=0,h=n.length;c<h;c++)if(n[c]===o){l=!0;break}l||n.push(o)}}}return n}if(!Qi)return[s];let t=km(s);return t?Array.from(t):[s]}function Id(s){let t=lg(s),e=t.length;if(e)for(let n=0;n<e;n++){let i=t[n];if(!i[Om]){i[Om]=!0;let r=eg(i);(i.nodeType||r)&&(i[Ad]=!0,i[Zm]=r,i[rc]={})}}return t}var Av=["opacity","rotate","overflow","color"],Cv=(s,t)=>{if(Av.includes(t))return!1;if(s.getAttribute(t)||t in s){if(t==="scale"){let e=s.parentNode;return e&&e.tagName==="filter"}return!0}};var Rv=s=>{let t=av.exec(s)||lv.exec(s),e=he(t[4])?1:+t[4];return[+t[1],+t[2],+t[3],e]},Pv=s=>{let t=s.length,e=t===4||t===5;return[+("0x"+s[1]+s[e?1:2]),+("0x"+s[e?2:3]+s[e?2:4]),+("0x"+s[e?3:5]+s[e?3:6]),t===5||t===9?+(+("0x"+s[e?4:7]+s[e?4:8])/255).toFixed(3):1]},yd=(s,t,e)=>(e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*(2/3-e)*6:s),Iv=s=>{let t=cv.exec(s)||hv.exec(s),e=+t[1]/360,n=+t[2]/100,i=+t[3]/100,r=he(t[4])?1:+t[4],o,a,l;if(n===0)o=a=l=i;else{let c=i<.5?i*(1+n):i+n-i*n,h=2*i-c;o=ze(yd(h,c,e+1/3)*255,0),a=ze(yd(h,c,e)*255,0),l=ze(yd(h,c,e-1/3)*255,0)}return[o,a,l,r]},Dv=s=>ig(s)?Rv(s):ng(s)?Pv(s):sg(s)?Iv(s):[0,0,0,1],Tn=(s,t)=>he(s)?t:s,Bs=(s,t,e,n,i)=>{if(tc(s)){let r=()=>{let o=s(t,e,n);return isNaN(+o)?o||0:+o};return i&&(i.func=r),r()}else return s},Dd=(s,t)=>s[Ad]?s[Zm]&&Cv(s,t)?ke.ATTRIBUTE:Cd.includes(t)||Ra.get(t)?ke.TRANSFORM:wr(t,"--")?ke.CSS_VAR:t in s.style?ke.CSS:t in s?ke.OBJECT:ke.ATTRIBUTE:ke.OBJECT,zm=(s,t,e)=>{let n=s.style[t];n&&e&&(e[t]=n);let i=n||getComputedStyle(s[rv]||s).getPropertyValue(t);return i==="auto"?"0":i},_o=(s,t,e,n)=>{let i=he(e)?Dd(s,t):e;return i===ke.OBJECT?s[t]||0:i===ke.ATTRIBUTE?s.getAttribute(t):i===ke.TRANSFORM?Ev(s,t,n):i===ke.CSS_VAR?zm(s,t,n).trimStart():zm(s,t,n)},bd=(s,t,e)=>e==="-"?s-t:e==="+"?s+t:s*t,Ld=()=>({t:fe.NUMBER,n:0,u:null,o:null,d:null,s:null}),Fi=(s,t)=>{if(t.t=fe.NUMBER,t.n=0,t.u=null,t.o=null,t.d=null,t.s=null,!s)return t;let e=+s;if(isNaN(e)){let n=s;n[1]==="="&&(t.o=n[0],n=n.slice(2));let i=n.includes(" ")?!1:jm.exec(n);if(i)return t.t=fe.UNIT,t.n=+i[1],t.u=i[2],t;if(t.o)return t.n=+n,t;if(mv(n))return t.t=fe.COLOR,t.d=Dv(n),t;{let r=n.match(Fm);return t.t=fe.COMPLEX,t.d=r?r.map(Number):[],t.s=n.split(Fm)||[],t}}else return t.n=e,t},Vm=(s,t)=>(t.t=s._valueType,t.n=s._toNumber,t.u=s._unit,t.o=null,t.d=Bn(s._toNumbers),t.s=Bn(s._strings),t),wi=Ld(),nc={_rep:new WeakMap,_add:new Map},Ud=(s,t,e="_rep")=>{let n=nc[e],i=n.get(s);return i||(i={},n.set(s,i)),i[t]?i[t]:i[t]={_head:null,_tail:null}},Lv=(s,t)=>s._isOverridden||s._absoluteStartTime>t._absoluteStartTime,Ql=s=>{s._isOverlapped=1,s._isOverridden=1,s._changeDuration=be,s._currentTime=be},cg=(s,t)=>{let e=s._composition;if(e===kn.replace){let n=s._absoluteStartTime;yo(t,s,Lv,"_prevRep","_nextRep");let i=s._prevRep;if(i){let r=i.parent,o=i._absoluteStartTime+i._changeDuration;if(s.parent.id!==r.id&&r.iterationCount>1&&o+(r.duration-r.iterationDuration)>n){Ql(i);let c=i._prevRep;for(;c&&c.parent.id===r.id;)Ql(c),c=c._prevRep}let a=n-s._delay;if(o>a){let c=i._startTime,h=o-(c+i._updateDuration);i._changeDuration=a-h-c,i._currentTime=i._changeDuration,i._isOverlapped=1,i._changeDuration<be&&Ql(i)}let l=!0;if(Je(r,c=>{c._isOverlapped||(l=!1)}),l){let c=r.parent;if(c){let h=!0;Je(c,f=>{f!==r&&Je(f,d=>{d._isOverlapped||(h=!1)})}),h&&c.cancel()}else r.cancel()}}}else if(e===kn.blend){let n=Ud(s.target,s.property,"_add"),i=bv(nc._add),r=n._head;r||(r={...s},r._composition=kn.replace,r._updateDuration=be,r._startTime=0,r._numbers=Bn(s._fromNumbers),r._number=0,r._next=null,r._prev=null,yo(n,r),yo(i,r));let o=s._toNumber;if(s._fromNumber=r._fromNumber-o,s._toNumber=0,s._numbers=Bn(s._fromNumbers),s._number=0,r._fromNumber=o,s._toNumbers){let a=Bn(s._toNumbers);a&&a.forEach((l,c)=>{s._fromNumbers[c]=r._fromNumbers[c]-l,s._toNumbers[c]=0}),r._fromNumbers=a}yo(n,s,null,"_prevAdd","_nextAdd")}return s},hg=s=>{let t=s._composition;if(t!==kn.none){let e=s.target,n=s.property,o=nc._rep.get(e)[n];if(Hs(o,s,"_prevRep","_nextRep"),t===kn.blend){let a=nc._add,l=a.get(e);if(!l)return;let c=l[n],h=xo.animation;Hs(c,s,"_prevAdd","_nextAdd");let f=c._head;if(f&&f===c._tail){Hs(c,f,"_prevAdd","_nextAdd"),Hs(h,f);let d=!0;for(let u in l)if(l[u]._head){d=!1;break}d&&a.delete(e)}}}return s},Hm=s=>(s.paused=!0,s.began=!1,s.completed=!1,s),Td=s=>(s._cancelled&&(s._hasChildren?Je(s,Td):Je(s,t=>{t._composition!==kn.none&&cg(t,Ud(t.target,t.property))}),s._cancelled=0),s),Uv=0,ic=class extends ec{constructor(t={},e=null,n=0){super(0);let{id:i,delay:r,duration:o,reversed:a,alternate:l,loop:c,loopDelay:h,autoplay:f,frameRate:d,playbackRate:u,onComplete:_,onLoop:g,onPause:m,onBegin:p,onBeforeUpdate:b,onUpdate:M}=t;Ye.scope&&Ye.scope.revertibles.push(this);let y=e?0:an._elapsedTime,A=e?e.defaults:Ye.defaults,E=tc(r)||he(r)?A.delay:+r,w=tc(o)||he(o)?1/0:+o,R=Tn(c,A.loop),v=Tn(h,A.loopDelay),x=R===!0||R===1/0||R<0?1/0:R+1,I=0;if(e)I=n;else{let U=Ea();an.paused&&(an.requestTick(U),U=an._elapsedTime),I=U-an._startTime}this.id=he(i)?++Uv:i,this.parent=e,this.duration=Pd((w+v)*x-v)||be,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=p||A.onBegin,this.onBeforeUpdate=b||A.onBeforeUpdate,this.onUpdate=M||A.onUpdate,this.onLoop=g||A.onLoop,this.onPause=m||A.onPause,this.onComplete=_||A.onComplete,this.iterationDuration=w,this.iterationCount=x,this._autoplay=e?!1:Tn(f,A.autoplay),this._offset=I,this._delay=E,this._loopDelay=v,this._iterationTime=0,this._currentIteration=0,this._resolve=ti,this._running=!1,this._reversed=+Tn(a,A.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=Tn(l,A.alternate),this._prev=null,this._next=null,this._elapsedTime=y,this._startTime=y,this._lastTime=y,this._fps=Tn(d,A.frameRate),this._speed=Tn(u,A.playbackRate)}get cancelled(){return!!this._cancelled}set cancelled(t){t?this.cancel():this.reset(1).play()}get currentTime(){return xn(ze(this._currentTime,Ye.precision),-this._delay,this.duration)}set currentTime(t){let e=this.paused;this.pause().seek(+t),e||this.resume()}get iterationCurrentTime(){return ze(this._iterationTime,Ye.precision)}set iterationCurrentTime(t){this.currentTime=this.iterationDuration*this._currentIteration+t}get progress(){return xn(ze(this._currentTime/this.duration,5),0,1)}set progress(t){this.currentTime=this.duration*t}get iterationProgress(){return xn(ze(this._iterationTime/this.iterationDuration,5),0,1)}set iterationProgress(t){let e=this.iterationDuration;this.currentTime=e*this._currentIteration+e*t}get currentIteration(){return this._currentIteration}set currentIteration(t){this.currentTime=this.iterationDuration*xn(+t,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(t){t?this.reverse():this.play()}get speed(){return super.speed}set speed(t){super.speed=t,this.resetTime()}reset(t=0){return Td(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,go(this,0,1,t,Ei.FORCE),Hm(this),this._hasChildren&&Je(this,Hm),this}init(t=0){this.fps=this._fps,this.speed=this._speed,!t&&this._hasChildren&&go(this,this.duration,1,t,Ei.FORCE),this.reset(t);let e=this._autoplay;return e===!0?this.resume():e&&!he(e.linked)&&e.link(this),this}resetTime(){let t=1/(this._speed*an._speed);return this._startTime=Ea()-(this._currentTime+this._delay)*t,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=be&&!this._hasChildren?go(this,be,0,0,Ei.FORCE):(this._running||(yo(an,this),an._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,an.wake()),this):this}restart(){return this.reset(0).resume()}seek(t,e=0,n=0){Td(this),this.completed=!1;let i=this.paused;return this.paused=!0,go(this,t+this._delay,~~e,~~n,Ei.AUTO),i?this:this.resume()}alternate(){let t=this._reversed,e=this.iterationCount,n=this.iterationDuration,i=e===1/0?Ca(Jm/n):e;return this._reversed=+(this._alternate&&!(i%2)?t:!t),e===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(n*i-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?Je(this,t=>t.cancel(),!0):Je(this,hg),this._cancelled=1,this.pause()}stretch(t){let e=this.duration,n=wa(t);if(e===n)return this;let i=t/e,r=t<=be;return this.duration=r?be:n,this.iterationDuration=r?be:wa(this.iterationDuration*i),this._offset*=i,this._delay*=i,this._loopDelay*=i,this}revert(){go(this,0,1,0,Ei.AUTO);let t=this._autoplay;return t&&t.linked&&t.linked===this&&t.revert(),this.cancel()}complete(){return this.seek(this.duration).cancel()}then(t=ti){let e=this.then,n=()=>{this.then=null,t(this),this.then=e,this._resolve=ti};return new Promise(i=>(this._resolve=()=>i(n()),this.completed&&this._resolve(),this))}};var So=s=>s,ug=(s,t,e)=>(((1-3*e+3*t)*s+(3*e-6*t))*s+3*t)*s,Nv=(s,t,e)=>{let n=0,i=1,r,o,a=0;do o=n+(i-n)/2,r=ug(o,t,e)-s,r>0?i=o:n=o;while(Aa(r)>1e-7&&++a<100);return o},Ov=(s=.5,t=0,e=.5,n=1)=>s===t&&e===n?So:i=>i===0||i===1?i:ug(Nv(i,s,e),t,n),Fv=(s=10,t)=>{let e=t?yv:Ca;return n=>e(xn(n,0,1)*s)*(1/s)},dg=(...s)=>{let t=s.length;if(!t)return So;let e=t-1,n=s[0],i=s[e],r=[0],o=[Tr(n)];for(let a=1;a<e;a++){let l=s[a],c=oc(l)?l.trim().split(" "):[l],h=c[0],f=c[1];r.push(he(f)?a/e:Tr(f)/100),o.push(Tr(h))}return o.push(Tr(i)),r.push(1),function(l){for(let c=1,h=r.length;c<h;c++){let f=r[c];if(l<=f){let d=r[c-1],u=o[c-1];return u+(o[c]-u)*(l-d)/(f-d)}}return o[o.length-1]}},Bv=(s=10,t=1)=>{let e=[0],n=s-1;for(let i=1;i<n;i++){let r=e[i-1],o=i/n,a=(i+1)/n,l=o+(a-o)*Math.random(),c=o*(1-t)+l*t;e.push(xn(c,r,1))}return e.push(1),dg(...e)},kv=Pa/2,Gm=Pa*2,Ta=(s=1.68)=>t=>mo(t,+s),Wm={[Vs]:Ta,Quad:Ta(2),Cubic:Ta(3),Quart:Ta(4),Quint:Ta(5),Sine:s=>1-_v(s*kv),Circ:s=>1-rg(1-s*s),Expo:s=>s?mo(2,10*s-10):0,Bounce:s=>{let t,e=4;for(;s<((t=mo(2,--e))-1)/11;);return 1/mo(4,3-e)-7.5625*mo((t*3-2)/22-s,2)},Back:(s=1.70158)=>t=>(+s+1)*t*t*t-+s*t*t,Elastic:(s=1,t=.3)=>{let e=xn(+s,1,10),n=xn(+t,be,2),i=n/Gm*xv(1/e),r=Gm/n;return o=>o===0||o===1?o:-e*mo(2,-10*(1-o))*gv((1-o-i)*r)}},wd={in:s=>t=>s(t),out:s=>t=>1-s(1-t),inOut:s=>t=>t<.5?s(t*2)/2:1-s(t*-2+2)/2,outIn:s=>t=>t<.5?(1-s(1-t*2))/2:(s(t*2-1)+1)/2},zv=(s,t,e)=>{if(e[s])return e[s];if(s.indexOf("(")<=-1){let i=wd[s]||s.includes("Back")||s.includes("Elastic")?t[s]():t[s];return i?e[s]=i:So}else{let n=s.slice(0,-1).split("("),i=t[n[0]];return i?e[s]=i(...n[1].split(",")):So}},Vv=(()=>{let s={linear:dg,irregular:Bv,steps:Fv,cubicBezier:Ov};for(let t in wd)for(let e in Wm){let n=Wm[e],i=wd[t];s[t+e]=e===Vs||e==="Back"||e==="Elastic"?(r,o)=>i(n(r,o)):i(n)}return s})(),Hv={linear:So},Ed=s=>tc(s)?s:oc(s)?zv(s,Vv,Hv):So,Xm={},Nd=(s,t,e)=>{if(e===ke.TRANSFORM){let n=Ra.get(s);return n||s}else if(e===ke.CSS||e===ke.ATTRIBUTE&&eg(t)&&s in t.style){let n=Xm[s];if(n)return n;{let i=s&&pv(s);return Xm[s]=i,i}}else return s},xd={deg:1,rad:180/Pa,turn:360},Ym={},fg=(s,t,e,n=!1)=>{let i=t.u,r=t.n;if(t.t===fe.UNIT&&i===e)return t;let o=r+i+e,a=Ym[o];if(!he(a)&&!n)t.n=a;else{let l;if(i in xd)l=r*xd[i]/xd[e];else{let h=s.cloneNode(),f=s.parentNode,d=f&&f!==vo?f:vo.body;d.appendChild(h);let u=h.style;u.width=100+i;let _=h.offsetWidth||100;u.width=100+e;let g=h.offsetWidth||100,m=_/g;d.removeChild(h),l=m*r}t.n=l,Ym[o]=l}return t.t,fe.UNIT,t.u=e,t},Od=s=>{if(s._hasChildren)Je(s,Od,!0);else{let t=s;t.pause(),Je(t,e=>{let n=e.property,i=e.target;if(i[Ad]){let r=i.style,o=t._inlineStyles[n];if(e._tweenType===ke.TRANSFORM){let a=i[rc];if(he(o)||o===Vs?delete a[n]:a[n]=o,e._renderTransforms)if(!Object.keys(a).length)r.removeProperty("transform");else{let l=Vs;for(let c in a)l+=Km[c]+a[c]+") ";r.transform=l}}else he(o)||o===Vs?r.removeProperty(n):r[n]=o;t._tail===e&&t.targets.forEach(a=>{a.getAttribute&&a.getAttribute("style")===Vs&&a.removeAttribute("style")})}})}return s},Kt=Ld(),ce=Ld(),ql={func:null},$l=[null],po=[null,null],Zl={to:null},Gv=0,ks,ji,Wv=(s,t)=>{let e={};if(Ar(s)){let n=[].concat(...s.map(i=>Object.keys(i))).filter(Kl);for(let i=0,r=n.length;i<r;i++){let o=n[i],a=s.map(l=>{let c={};for(let h in l){let f=l[h];Kl(h)?h===o&&(c.to=f):c[h]=f}return c});e[o]=a}}else{let n=Tn(t.duration,Ye.defaults.duration);Object.keys(s).map(r=>({o:parseFloat(r)/100,p:s[r]})).sort((r,o)=>r.o-o.o).forEach(r=>{let o=r.o,a=r.p;for(let l in a)if(Kl(l)){let c=e[l];c||(c=e[l]=[]);let h=o*n,f=c.length,d=c[f-1],u={to:a[l]},_=0;for(let g=0;g<f;g++)_+=c[g].duration;f===1&&(u.from=d.to),a.ease&&(u.ease=a.ease),u.duration=h-(f?_:0),c.push(u)}return r});for(let r in e){let o=e[r],a;for(let l=0,c=o.length;l<c;l++){let h=o[l],f=h.ease;h.ease=a||void 0,a=f}o[0].duration||o.shift()}}return e},sc=class extends ic{constructor(t,e,n,i,r=!1,o=0,a=0){super(e,n,i);let l=Id(t),c=l.length,h=e.keyframes,f=h?Mv(Wv(h,e),e):e,{delay:d,duration:u,ease:_,playbackEase:g,modifier:m,composition:p,onRender:b}=f,M=n?n.defaults:Ye.defaults,y=Tn(g,M.playbackEase),A=y?Ed(y):null,E=!he(_)&&!he(_.ease),w=E?_.ease:Tn(_,A?"linear":M.ease),R=E?_.duration:Tn(u,M.duration),v=Tn(d,M.delay),x=m||M.modifier,I=he(p)&&c>=Er?kn.none:he(p)?M.composition:p,U={},k=this._offset+(n?n._offset:0),H=NaN,Y=NaN,V=0,Z=0;for(let B=0;B<c;B++){let W=l[B],P=o||B,rt=a||c,Dt=NaN,Wt=NaN;for(let q in f)if(Kl(q)){let et=Dd(W,q),at=Nd(q,W,et),nt=f[q],St=Ar(nt);if(r&&!St&&(po[0]=nt,po[1]=nt,nt=po),St){let D=nt.length,ie=!_d(nt[0]);D===2&&ie?(Zl.to=nt,$l[0]=Zl,ks=$l):D>2&&ie?(ks=[],nt.forEach((Pt,O)=>{O?O===1?(po[1]=Pt,ks.push(po)):ks.push(Pt):po[0]=Pt})):ks=nt}else $l[0]=nt,ks=$l;let Ut=null,bt=null,Xt=NaN,Ht=0,ct=0;for(let D=ks.length;ct<D;ct++){let ie=ks[ct];_d(ie)?ji=ie:(Zl.to=ie,ji=Zl),ql.func=null;let Pt=Bs(ji.to,W,P,rt,ql),O;_d(Pt)&&!he(Pt.to)?(ji=Pt,O=Pt.to):O=Pt;let xt=Bs(ji.from,W,P,rt),$t=ji.ease,pt=!he($t)&&!he($t.ease),C=pt?$t.ease:$t||w,S=pt?$t.duration:Bs(Tn(ji.duration,D>1?Bs(R,W,P,rt)/D:R),W,P,rt),z=Bs(Tn(ji.delay,ct?0:v),W,P,rt),K=Bs(Tn(ji.composition,I),W,P,rt),Q=Rd(K)?K:kn[K],j=ji.modifier||x,ht=!he(xt),ot=!he(O),Et=Ar(O),Nt=Et||ht&&ot,st=bt?Ht+z:z,lt=k+st;!Z&&(ht||Et)&&(Z=1);let Ct=bt;if(Q!==kn.none){Ut||(Ut=Ud(W,at));let Tt=Ut._head;for(;Tt&&!Tt._isOverridden&&Tt._absoluteStartTime<=lt;)if(Ct=Tt,Tt=Tt._nextRep,Tt&&Tt._absoluteStartTime>=lt)for(;Tt;)Ql(Tt),Tt=Tt._nextRep}if(Nt?(Fi(Et?Bs(O[0],W,P,rt):xt,Kt),Fi(Et?Bs(O[1],W,P,rt,ql):O,ce),Kt.t===fe.NUMBER&&(Ct?Ct._valueType===fe.UNIT&&(Kt.t=fe.UNIT,Kt.u=Ct._unit):(Fi(_o(W,at,et,U),wi),wi.t===fe.UNIT&&(Kt.t=fe.UNIT,Kt.u=wi.u)))):(ot?Fi(O,ce):bt?Vm(bt,ce):Fi(n&&Ct&&Ct.parent.parent===n?Ct._value:_o(W,at,et,U),ce),ht?Fi(xt,Kt):bt?Vm(bt,Kt):Fi(n&&Ct&&Ct.parent.parent===n?Ct._value:_o(W,at,et,U),Kt)),Kt.o&&(Kt.n=bd(Ct?Ct._toNumber:Fi(_o(W,at,et,U),wi).n,Kt.n,Kt.o)),ce.o&&(ce.n=bd(Kt.n,ce.n,ce.o)),Kt.t!==ce.t){if(Kt.t===fe.COMPLEX||ce.t===fe.COMPLEX){let Tt=Kt.t===fe.COMPLEX?Kt:ce,At=Kt.t===fe.COMPLEX?ce:Kt;At.t=fe.COMPLEX,At.s=Bn(Tt.s),At.d=Tt.d.map(()=>At.n)}else if(Kt.t===fe.UNIT||ce.t===fe.UNIT){let Tt=Kt.t===fe.UNIT?Kt:ce,At=Kt.t===fe.UNIT?ce:Kt;At.t=fe.UNIT,At.u=Tt.u}else if(Kt.t===fe.COLOR||ce.t===fe.COLOR){let Tt=Kt.t===fe.COLOR?Kt:ce,At=Kt.t===fe.COLOR?ce:Kt;At.t=fe.COLOR,At.s=Tt.s,At.d=[0,0,0,1]}}if(Kt.u!==ce.u){let Tt=ce.u?Kt:ce;Tt=fg(W,Tt,ce.u?ce.u:Kt.u,!1)}if(ce.d&&Kt.d&&ce.d.length!==Kt.d.length){let Tt=Kt.d.length>ce.d.length?Kt:ce,At=Tt===Kt?ce:Kt;At.d=Tt.d.map((ue,L)=>he(At.d[L])?0:At.d[L]),At.s=Bn(Tt.s)}let Ot=ze(+S||be,12),_t={parent:this,id:Gv++,property:at,target:W,_value:null,_func:ql.func,_ease:Ed(C),_fromNumbers:Bn(Kt.d),_toNumbers:Bn(ce.d),_strings:Bn(ce.s),_fromNumber:Kt.n,_toNumber:ce.n,_numbers:Bn(Kt.d),_number:Kt.n,_unit:ce.u,_modifier:j,_currentTime:0,_startTime:st,_delay:+z,_updateDuration:Ot,_changeDuration:Ot,_absoluteStartTime:lt,_tweenType:et,_valueType:ce.t,_composition:Q,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};Q!==kn.none&&cg(_t,Ut),isNaN(Xt)&&(Xt=_t._startTime),Ht=ze(st+Ot,12),bt=_t,V++,yo(this,_t)}(isNaN(Y)||Xt<Y)&&(Y=Xt),(isNaN(H)||Ht>H)&&(H=Ht),et===ke.TRANSFORM&&(Dt=V-ct,Wt=V)}if(!isNaN(Dt)){let q=0;Je(this,et=>{q>=Dt&&q<Wt&&(et._renderTransforms=1,et._composition===kn.blend&&Je(xo.animation,at=>{at.id===et.id&&(at._renderTransforms=1)})),q++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),Y?(Je(this,B=>{B._startTime-B._delay||(B._delay-=Y),B._startTime-=Y}),H-=Y):Y=0,H||(H=be,this.iterationCount=0),this.targets=l,this.duration=H===be?be:Pd((H+this._loopDelay)*this.iterationCount-this._loopDelay)||be,this.onRender=b||M.onRender,this._ease=A,this._delay=Y,this.iterationDuration=H,this._inlineStyles=U,!this._autoplay&&Z&&this.onRender(this)}stretch(t){let e=this.duration;if(e===wa(t))return this;let n=t/e;return Je(this,i=>{i._updateDuration=wa(i._updateDuration*n),i._changeDuration=wa(i._changeDuration*n),i._currentTime*=n,i._startTime*=n,i._absoluteStartTime*=n}),super.stretch(t)}refresh(){return Je(this,t=>{let e=_o(t.target,t.property,t._tweenType);Fi(e,wi),t._fromNumbers=Bn(wi.d),t._fromNumber=wi.n,t._func&&(Fi(t._func(),ce),t._toNumbers=Bn(ce.d),t._strings=Bn(ce.s),t._toNumber=ce.n)}),this}revert(){return super.revert(),Od(this)}then(t){return super.then(t)}},pg=(s,t)=>new sc(s,t,null,0,!1).init();var mg=["x","y","z"],I1=["perspective","width","height","margin","padding","top","right","bottom","left","borderWidth","fontSize","borderRadius",...mg],D1=[...mg,...Cd.filter(s=>["X","Y","Z"].some(t=>s.endsWith(t)))],L1=Qi&&(he(CSS)||!Object.hasOwnProperty.call(CSS,"registerProperty"));var qm={_head:null,_tail:null},Xv=(s,t,e)=>{let n=qm._head;for(;n;){let i=n._next,r=n.$el===s,o=!t||n.property===t,a=!e||n.parent===e;if(r&&o&&a){let l=n.animation;try{l.commitStyles()}catch{}l.cancel(),Hs(qm,n);let c=n.parent;c&&(c._completed++,c.animations.length===c._completed&&(c.completed=!0,c.muteCallbacks||(c.paused=!0,c.onComplete(c),c._resolve(c))))}n=i}};var Yv=(s=ti)=>new ic({duration:1*Ye.timeScale,onComplete:s},null,0).resume();function qv(s,t,e){let n=Id(s);if(!n.length)return;let[i]=n,r=Dd(i,t),o=Nd(t,i,r),a=_o(i,o);if(he(e))return a;if(Fi(a,wi),wi.t===fe.NUMBER||wi.t===fe.UNIT){if(e===!1)return wi.n;{let l=fg(i,wi,e,!1);return`${ze(l.n,Ye.precision)}${l.u}`}}}var $v=(s,t)=>{if(!he(t))return t.duration=be,t.composition=Tn(t.composition,kn.none),new sc(s,t,null,0,!0).resume()},$m=(s,t,e)=>{let n=!1;return Je(t,i=>{let r=i.target;if(s.includes(r)){let o=i.property,a=i._tweenType,l=Nd(e,r,a);(!l||l&&l===o)&&(i.parent._tail===i&&i._tweenType===ke.TRANSFORM&&i._prev&&i._prev._tweenType===ke.TRANSFORM&&(i._prev._renderTransforms=1),Hs(t,i),hg(i),n=!0)}},!0),n},gg=(s,t,e)=>{let n=lg(s),i=t||an,r=t&&t.controlAnimation&&t;for(let a=0,l=n.length;a<l;a++){let c=n[a];Xv(c,e,r)}let o;if(i._hasChildren){let a=0;Je(i,l=>{if(!l._hasChildren)if(o=$m(n,l,e),o&&!l._head)l.cancel(),Hs(i,l);else{let h=l._offset+l._delay+l.duration;h>a&&(a=h)}l._head?gg(s,l,e):l._hasChildren=!1},!0),he(i.iterationDuration)||(i.iterationDuration=a)}else o=$m(n,i,e);return o&&!i._head&&(i._hasChildren=!1,i.cancel&&i.cancel()),n},Fd=(s,t,e)=>{let n=10**(e||0);return Ca((Math.random()*(t-s+1/n)+s)*n)/n},Zv=s=>s[Fd(0,s.length-1)],Jv=s=>{let t=s.length,e,n;for(;t;)n=Fd(0,--t),e=s[t],s[t]=s[n],s[n]=e;return s},Kv=(s,t)=>(+s).toFixed(t),jv=(s,t,e)=>`${s}`.padStart(t,e),Qv=(s,t,e)=>`${s}`.padEnd(t,e),tS=(s,t,e)=>((s-t)%(e-t)+(e-t))%(e-t)+t,eS=(s,t,e,n,i)=>n+(s-t)/(e-t)*(i-n),nS=s=>s*Pa/180,iS=s=>s*180/Pa,sS=(s,t,e,n)=>{let i=Er/Ye.defaults.frameRate;if(n!==!1){let o=n||an._hasChildren&&an;o&&o.deltaTime&&(i=o.deltaTime)}let r=1-Math.exp(-e*i*.1);return e?e===1?t:(1-r)*s+r*t:s},rS=(s,t=0)=>(...e)=>t?n=>s(...e,n):n=>s(n,...e),_g=s=>(...t)=>{let e=s(...t);return new Proxy(ti,{apply:(n,i,[r])=>e(r),get:(n,i)=>_g((...r)=>{let o=oS[i](...r);return a=>o(e(a))})})},Oi=(s,t=0)=>(...e)=>(e.length<s.length?_g(rS(s,t)):s)(...e),oS={$:Id,get:qv,set:$v,remove:gg,cleanInlineStyles:Od,random:Fd,randomPick:Zv,shuffle:Jv,lerp:sS,sync:Yv,clamp:Oi(xn),round:Oi(ze),snap:Oi(Sv),wrap:Oi(tS),interpolate:Oi(zs,1),mapRange:Oi(eS),roundPad:Oi(Kv),padStart:Oi(jv),padEnd:Oi(Qv),degToRad:Oi(nS),radToDeg:Oi(iS)},aS=(s,t)=>{if(wr(t,"<")){let e=t[1]==="<",n=s._tail,i=n?n._offset+n._delay:0;return e?i:i+n.duration}},lS=(s,t)=>{let e=s.iterationDuration;if(e===be&&(e=0),he(t))return e;if(Rd(+t))return+t;let n=t,i=s?s.labels:null,r=!Jl(i),o=aS(s,n),a=!he(o),l=fv.exec(n);if(l){let c=l[0],h=n.split(c),f=r&&h[0]?i[h[0]]:e,d=a?o:r?f:e,u=+h[1];return bd(d,u,c[0])}else return a?o:r?he(i[n])?e:i[n]:e};var yg=(s,t={})=>{let e=[],n=0,i=t.from,r=t.reversed,o=t.ease,a=!he(o),c=a&&!he(o.ease)?o.ease:a?Ed(o):null,h=t.grid,f=t.axis,d=he(i)||i===0||i==="first",u=i==="center",_=i==="last",g=Ar(s),m=Tr(g?s[0]:s),p=g?Tr(s[1]):0,b=jm.exec((g?s[1]:s)+Vs),M=t.start||0+(g?m:0),y=d?0:Rd(i)?i:0;return(A,E,w,R)=>{if(u&&(y=(w-1)/2),_&&(y=w-1),!e.length){for(let U=0;U<w;U++){if(!h)e.push(Aa(y-U));else{let k=u?(h[0]-1)/2:y%h[0],H=u?(h[1]-1)/2:Ca(y/h[0]),Y=U%h[0],V=Ca(U/h[0]),Z=k-Y,B=H-V,W=rg(Z*Z+B*B);f==="x"&&(W=-Z),f==="y"&&(W=-B),e.push(W)}n=vv(...e)}c&&(e=e.map(U=>c(U/n)*n)),r&&(e=e.map(U=>f?U<0?U*-1:-U:Aa(n-U)))}let v=g?(p-m)/n:m,I=(R?lS(R,he(t.start)?R.iterationDuration:M):M)+(v*ze(e[E],2)||0);return t.modifier&&(I=t.modifier(I)),b&&(I=`${I}${b[2]}`),I}};function ac({target:s=".splt",reveal:t=!1}){let e=[],n=document.querySelectorAll(s);for(let i=0;i<n.length;i++){n[i].setAttribute("id","i"+[i+1]),e.push(n[i].innerHTML);let r=n[i].innerHTML.split("");for(let o=0;o<r.length;o++){let a=document.createElement("span");if(n[i].appendChild(a),a.setAttribute("id","c"+[o+1]),r[o]==" ")a.classList.add("whtSpc");else{a.classList.add("char");let l=document.querySelectorAll(".char");for(let c=0;c<l.length;c++)l[c].style.display="inline-block",l[c].style.overflow="hidden",l[c].style.verticalAlign="top"}if(t==1){let l=document.createElement("span");l.innerHTML=r[o],a.appendChild(l),l.setAttribute("id","r"),l.classList.add("reveal");let c=document.querySelectorAll(".reveal");for(let h=0;h<c.length;h++)c[h].style.display="inherit",c[h].style.overflow="inherit",c[h].style.verticalAlign="inherit"}else a.innerHTML=r[o]}n[i].removeChild(n[i].childNodes[0])}ac.revert=()=>{for(let i=0;i<n.length;i++)n[i].removeAttribute("id"),n[i].innerHTML=e[i]}}var xg=()=>{ac({reveal:!0}),pg(".reveal",{opacity:[0,1],translateY:[150,0],direction:"normal",loop:!1,delay:yg(60,{start:1800}),easing:"cubicBezier(.25,.75,.5,1)"})};function vg(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function cS(s,t,e){return t&&vg(s.prototype,t),e&&vg(s,e),s}var vn,hc,hS,li,Gs,Ws,bo,Mg,Cr,Da,bg,ms,Bi,Tg,wg=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},Eg=1,Mo=[],se=[],ki=[],La=Date.now,Bd=function(t,e){return e},uS=function(){var t=Da.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,se),i.push.apply(i,ki),se=n,ki=i,Bd=function(o,a){return e[o](a)}},_s=function(t,e){return~ki.indexOf(t)&&ki[ki.indexOf(t)+1][e]},Ua=function(t){return!!~bg.indexOf(t)},Vn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},zn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},lc="scrollLeft",cc="scrollTop",kd=function(){return ms&&ms.isPressed||se.cache++},uc=function(t,e){var n=function i(r){if(r||r===0){Eg&&(li.history.scrollRestoration="manual");var o=ms&&ms.isPressed;r=i.v=Math.round(r)||(ms&&ms.iOS?1:0),t(r),i.cacheID=se.cache,o&&Bd("ss",r)}else(e||se.cache!==i.cacheID||Bd("ref"))&&(i.cacheID=se.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},wn={s:lc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:uc(function(s){return arguments.length?li.scrollTo(s,Qe.sc()):li.pageXOffset||Gs[lc]||Ws[lc]||bo[lc]||0})},Qe={s:cc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:wn,sc:uc(function(s){return arguments.length?li.scrollTo(wn.sc(),s):li.pageYOffset||Gs[cc]||Ws[cc]||bo[cc]||0})},Hn=function(t,e){return(e&&e._ctx&&e._ctx.selector||vn.utils.toArray)(t)[0]||(typeof t=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},dS=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},gs=function(t,e){var n=e.s,i=e.sc;Ua(t)&&(t=Gs.scrollingElement||Ws);var r=se.indexOf(t),o=i===Qe.sc?1:2;!~r&&(r=se.push(t)-1),se[r+o]||Vn(t,"scroll",kd);var a=se[r+o],l=a||(se[r+o]=uc(_s(t,n),!0)||(Ua(t)?i:uc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=vn.getProperty(t,"scrollBehavior")==="smooth"),l},dc=function(t,e,n){var i=t,r=t,o=La(),a=o,l=e||50,c=Math.max(500,l*3),h=function(_,g){var m=La();g||m-o>l?(r=i,i=_,a=o,o=m):n?i+=_:i=r+(_-r)/(m-a)*(o-a)},f=function(){r=i=n?0:i,a=o=0},d=function(_){var g=a,m=r,p=La();return(_||_===0)&&_!==i&&h(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:h,reset:f,getVelocity:d}},Ia=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Sg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Ag=function(){Da=vn.core.globals().ScrollTrigger,Da&&Da.core&&uS()},Cg=function(t){return vn=t||wg(),!hc&&vn&&typeof document<"u"&&document.body&&(li=window,Gs=document,Ws=Gs.documentElement,bo=Gs.body,bg=[li,Gs,Ws,bo],hS=vn.utils.clamp,Tg=vn.core.context||function(){},Cr="onpointerenter"in bo?"pointer":"mouse",Mg=qe.isTouch=li.matchMedia&&li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Bi=qe.eventTypes=("ontouchstart"in Ws?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ws?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Eg=0},500),Ag(),hc=1),hc};wn.op=Qe;se.cache=0;var qe=function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){hc||Cg(vn)||console.warn("Please gsap.registerPlugin(Observer)"),Da||Ag();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,u=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,b=n.onDrag,M=n.onPress,y=n.onRelease,A=n.onRight,E=n.onLeft,w=n.onUp,R=n.onDown,v=n.onChangeX,x=n.onChangeY,I=n.onChange,U=n.onToggleX,k=n.onToggleY,H=n.onHover,Y=n.onHoverEnd,V=n.onMove,Z=n.ignoreCheck,B=n.isNormalizer,W=n.onGestureStart,P=n.onGestureEnd,rt=n.onWheel,Dt=n.onEnable,Wt=n.onDisable,q=n.onClick,et=n.scrollSpeed,at=n.capture,nt=n.allowClicks,St=n.lockAxis,Ut=n.onLockAxis;this.target=a=Hn(a)||Ws,this.vars=n,u&&(u=vn.utils.toArray(u)),i=i||1e-9,r=r||0,_=_||1,et=et||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(li.getComputedStyle(bo).lineHeight)||22);var bt,Xt,Ht,ct,D,ie,Pt,O=this,xt=0,$t=0,pt=n.passive||!h&&n.passive!==!1,C=gs(a,wn),S=gs(a,Qe),z=C(),K=S(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Bi[0]==="pointerdown",j=Ua(a),ht=a.ownerDocument||Gs,ot=[0,0,0],Et=[0,0,0],Nt=0,st=function(){return Nt=La()},lt=function(It,ee){return(O.event=It)&&u&&dS(It.target,u)||ee&&Q&&It.pointerType!=="touch"||Z&&Z(It,ee)},Ct=function(){O._vx.reset(),O._vy.reset(),Xt.pause(),f&&f(O)},Ot=function(){var It=O.deltaX=Sg(ot),ee=O.deltaY=Sg(Et),mt=Math.abs(It)>=i,Zt=Math.abs(ee)>=i;I&&(mt||Zt)&&I(O,It,ee,ot,Et),mt&&(A&&O.deltaX>0&&A(O),E&&O.deltaX<0&&E(O),v&&v(O),U&&O.deltaX<0!=xt<0&&U(O),xt=O.deltaX,ot[0]=ot[1]=ot[2]=0),Zt&&(R&&O.deltaY>0&&R(O),w&&O.deltaY<0&&w(O),x&&x(O),k&&O.deltaY<0!=$t<0&&k(O),$t=O.deltaY,Et[0]=Et[1]=Et[2]=0),(ct||Ht)&&(V&&V(O),Ht&&(m&&Ht===1&&m(O),b&&b(O),Ht=0),ct=!1),ie&&!(ie=!1)&&Ut&&Ut(O),D&&(rt(O),D=!1),bt=0},_t=function(It,ee,mt){ot[mt]+=It,Et[mt]+=ee,O._vx.update(It),O._vy.update(ee),c?bt||(bt=requestAnimationFrame(Ot)):Ot()},Tt=function(It,ee){St&&!Pt&&(O.axis=Pt=Math.abs(It)>Math.abs(ee)?"x":"y",ie=!0),Pt!=="y"&&(ot[2]+=It,O._vx.update(It,!0)),Pt!=="x"&&(Et[2]+=ee,O._vy.update(ee,!0)),c?bt||(bt=requestAnimationFrame(Ot)):Ot()},At=function(It){if(!lt(It,1)){It=Ia(It,h);var ee=It.clientX,mt=It.clientY,Zt=ee-O.x,Lt=mt-O.y,Yt=O.isDragging;O.x=ee,O.y=mt,(Yt||(Zt||Lt)&&(Math.abs(O.startX-ee)>=r||Math.abs(O.startY-mt)>=r))&&(Ht=Yt?2:1,Yt||(O.isDragging=!0),Tt(Zt,Lt))}},ue=O.onPress=function(vt){lt(vt,1)||vt&&vt.button||(O.axis=Pt=null,Xt.pause(),O.isPressed=!0,vt=Ia(vt),xt=$t=0,O.startX=O.x=vt.clientX,O.startY=O.y=vt.clientY,O._vx.reset(),O._vy.reset(),Vn(B?a:ht,Bi[1],At,pt,!0),O.deltaX=O.deltaY=0,M&&M(O))},L=O.onRelease=function(vt){if(!lt(vt,1)){zn(B?a:ht,Bi[1],At,!0);var It=!isNaN(O.y-O.startY),ee=O.isDragging,mt=ee&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),Zt=Ia(vt);!mt&&It&&(O._vx.reset(),O._vy.reset(),h&&nt&&vn.delayedCall(.08,function(){if(La()-Nt>300&&!vt.defaultPrevented){if(vt.target.click)vt.target.click();else if(ht.createEvent){var Lt=ht.createEvent("MouseEvents");Lt.initMouseEvent("click",!0,!0,li,1,Zt.screenX,Zt.screenY,Zt.clientX,Zt.clientY,!1,!1,!1,!1,0,null),vt.target.dispatchEvent(Lt)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,f&&ee&&!B&&Xt.restart(!0),Ht&&Ot(),p&&ee&&p(O),y&&y(O,mt)}},dt=function(It){return It.touches&&It.touches.length>1&&(O.isGesturing=!0)&&W(It,O.isDragging)},J=function(){return(O.isGesturing=!1)||P(O)},tt=function(It){if(!lt(It)){var ee=C(),mt=S();_t((ee-z)*et,(mt-K)*et,1),z=ee,K=mt,f&&Xt.restart(!0)}},ut=function(It){if(!lt(It)){It=Ia(It,h),rt&&(D=!0);var ee=(It.deltaMode===1?l:It.deltaMode===2?li.innerHeight:1)*_;_t(It.deltaX*ee,It.deltaY*ee,0),f&&!B&&Xt.restart(!0)}},ft=function(It){if(!lt(It)){var ee=It.clientX,mt=It.clientY,Zt=ee-O.x,Lt=mt-O.y;O.x=ee,O.y=mt,ct=!0,f&&Xt.restart(!0),(Zt||Lt)&&Tt(Zt,Lt)}},Gt=function(It){O.event=It,H(O)},ge=function(It){O.event=It,Y(O)},He=function(It){return lt(It)||Ia(It,h)&&q(O)};Xt=O._dc=vn.delayedCall(d||.25,Ct).pause(),O.deltaX=O.deltaY=0,O._vx=dc(0,50,!0),O._vy=dc(0,50,!0),O.scrollX=C,O.scrollY=S,O.isDragging=O.isGesturing=O.isPressed=!1,Tg(this),O.enable=function(vt){return O.isEnabled||(Vn(j?ht:a,"scroll",kd),o.indexOf("scroll")>=0&&Vn(j?ht:a,"scroll",tt,pt,at),o.indexOf("wheel")>=0&&Vn(a,"wheel",ut,pt,at),(o.indexOf("touch")>=0&&Mg||o.indexOf("pointer")>=0)&&(Vn(a,Bi[0],ue,pt,at),Vn(ht,Bi[2],L),Vn(ht,Bi[3],L),nt&&Vn(a,"click",st,!0,!0),q&&Vn(a,"click",He),W&&Vn(ht,"gesturestart",dt),P&&Vn(ht,"gestureend",J),H&&Vn(a,Cr+"enter",Gt),Y&&Vn(a,Cr+"leave",ge),V&&Vn(a,Cr+"move",ft)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=ct=Ht=!1,O._vx.reset(),O._vy.reset(),z=C(),K=S(),vt&&vt.type&&ue(vt),Dt&&Dt(O)),O},O.disable=function(){O.isEnabled&&(Mo.filter(function(vt){return vt!==O&&Ua(vt.target)}).length||zn(j?ht:a,"scroll",kd),O.isPressed&&(O._vx.reset(),O._vy.reset(),zn(B?a:ht,Bi[1],At,!0)),zn(j?ht:a,"scroll",tt,at),zn(a,"wheel",ut,at),zn(a,Bi[0],ue,at),zn(ht,Bi[2],L),zn(ht,Bi[3],L),zn(a,"click",st,!0),zn(a,"click",He),zn(ht,"gesturestart",dt),zn(ht,"gestureend",J),zn(a,Cr+"enter",Gt),zn(a,Cr+"leave",ge),zn(a,Cr+"move",ft),O.isEnabled=O.isPressed=O.isDragging=!1,Wt&&Wt(O))},O.kill=O.revert=function(){O.disable();var vt=Mo.indexOf(O);vt>=0&&Mo.splice(vt,1),ms===O&&(ms=0)},Mo.push(O),B&&Ua(a)&&(ms=O),O.enable(g)},cS(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();qe.version="3.13.0";qe.create=function(s){return new qe(s)};qe.register=Cg;qe.getAll=function(){return Mo.slice()};qe.getById=function(s){return Mo.filter(function(t){return t.vars.id===s})[0]};wg()&&vn.registerPlugin(qe);var Rt,Eo,ae,Pe,ui,Se,tf,Cc,qa,Va,Oa,fc,En,Dc,qd,Wn,Rg,Pg,Ao,Yg,zd,qg,Gn,$d,$g,Zg,Xs,Zd,ef,Co,nf,Rc,Jd,Vd,pc=1,An=Date.now,Hd=An(),Ri=0,Fa=0,Ig=function(t,e,n){var i=hi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Dg=function(t,e){return e&&(!hi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},fS=function s(){return Fa&&requestAnimationFrame(s)},Lg=function(){return Dc=1},Ug=function(){return Dc=0},ts=function(t){return t},Ba=function(t){return Math.round(t*1e5)/1e5||0},Jg=function(){return typeof window<"u"},Kg=function(){return Rt||Jg()&&(Rt=window.gsap)&&Rt.registerPlugin&&Rt},Ur=function(t){return!!~tf.indexOf(t)},jg=function(t){return(t==="Height"?nf:ae["inner"+t])||ui["client"+t]||Se["client"+t]},Qg=function(t){return _s(t,"getBoundingClientRect")||(Ur(t)?function(){return Ac.width=ae.innerWidth,Ac.height=nf,Ac}:function(){return ys(t)})},pS=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=_s(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?jg(r):t["client"+r])||0}},mS=function(t,e){return!e||~ki.indexOf(t)?Qg(t):function(){return Ac}},es=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=_s(t,n))?o()-Qg(t)()[r]:Ur(t)?(ui[n]||Se[n])-jg(i):t[n]-t["offset"+i])},mc=function(t,e){for(var n=0;n<Ao.length;n+=3)(!e||~e.indexOf(Ao[n+1]))&&t(Ao[n],Ao[n+1],Ao[n+2])},hi=function(t){return typeof t=="string"},Cn=function(t){return typeof t=="function"},ka=function(t){return typeof t=="number"},Rr=function(t){return typeof t=="object"},Na=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Gd=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},To=Math.abs,t_="left",e_="top",sf="right",rf="bottom",Ir="width",Dr="height",Ha="Right",Ga="Left",Wa="Top",Xa="Bottom",tn="padding",Ai="margin",Po="Width",of="Height",ln="px",Ci=function(t){return ae.getComputedStyle(t)},gS=function(t){var e=Ci(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Ng=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ys=function(t,e){var n=e&&Ci(t)[qd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Rt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Pc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},n_=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},_S=function(t){return function(e){return Rt.utils.snap(n_(t),e)}},af=function(t){var e=Rt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},yS=function(t){return function(e,n){return af(n_(t))(e,n.direction)}},gc=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},fn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},dn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},_c=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Og={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},yc={toggleActions:"play",anticipatePin:0},Ic={top:0,left:0,center:.5,bottom:1,right:1},bc=function(t,e){if(hi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Ic?Ic[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},xc=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,f=r.fontSize,d=r.indent,u=r.fontWeight,_=Pe.createElement("div"),g=Ur(n)||_s(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?Se:n,b=t.indexOf("start")!==-1,M=b?c:h,y="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(i===Qe?sf:rf)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=b,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=y,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Tc(_,0,i,b),_},Tc=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Po]=1,r["border"+a+Po]=0,r[n.p]=e+"px",Rt.set(t,r)},re=[],Kd={},$a,Fg=function(){return An()-Ri>34&&($a||($a=requestAnimationFrame(xs)))},wo=function(){(!Gn||!Gn.isPressed||Gn.startX>Se.clientWidth)&&(se.cache++,Gn?$a||($a=requestAnimationFrame(xs)):xs(),Ri||Or("scrollStart"),Ri=An())},Wd=function(){Zg=ae.innerWidth,$g=ae.innerHeight},za=function(t){se.cache++,(t===!0||!En&&!qg&&!Pe.fullscreenElement&&!Pe.webkitFullscreenElement&&(!$d||Zg!==ae.innerWidth||Math.abs(ae.innerHeight-$g)>ae.innerHeight*.25))&&Cc.restart(!0)},Nr={},xS=[],i_=function s(){return dn(Qt,"scrollEnd",s)||Pr(!0)},Or=function(t){return Nr[t]&&Nr[t].map(function(e){return e()})||xS},ci=[],s_=function(t){for(var e=0;e<ci.length;e+=5)(!t||ci[e+4]&&ci[e+4].query===t)&&(ci[e].style.cssText=ci[e+1],ci[e].getBBox&&ci[e].setAttribute("transform",ci[e+2]||""),ci[e+3].uncache=1)},lf=function(t,e){var n;for(Wn=0;Wn<re.length;Wn++)n=re[Wn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Rc=!0,e&&s_(e),e||Or("revert")},r_=function(t,e){se.cache++,(e||!Xn)&&se.forEach(function(n){return Cn(n)&&n.cacheID++&&(n.rec=0)}),hi(t)&&(ae.history.scrollRestoration=ef=t)},Xn,Lr=0,Bg,vS=function(){if(Bg!==Lr){var t=Bg=Lr;requestAnimationFrame(function(){return t===Lr&&Pr(!0)})}},o_=function(){Se.appendChild(Co),nf=!Gn&&Co.offsetHeight||ae.innerHeight,Se.removeChild(Co)},kg=function(t){return qa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Pr=function(t,e){if(ui=Pe.documentElement,Se=Pe.body,tf=[ae,Pe,ui,Se],Ri&&!t&&!Rc){fn(Qt,"scrollEnd",i_);return}o_(),Xn=Qt.isRefreshing=!0,se.forEach(function(i){return Cn(i)&&++i.cacheID&&(i.rec=i())});var n=Or("refreshInit");Yg&&Qt.sort(),e||lf(),se.forEach(function(i){Cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),re.slice(0).forEach(function(i){return i.refresh()}),Rc=!1,re.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Jd=1,kg(!0),re.forEach(function(i){var r=es(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),kg(!1),Jd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),se.forEach(function(i){Cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),r_(ef,1),Cc.pause(),Lr++,Xn=2,xs(2),re.forEach(function(i){return Cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Xn=Qt.isRefreshing=!1,Or("refresh")},jd=0,wc=1,Ya,xs=function(t){if(t===2||!Xn&&!Rc){Qt.isUpdating=!0,Ya&&Ya.update(0);var e=re.length,n=An(),i=n-Hd>=50,r=e&&re[0].scroll();if(wc=jd>r?-1:1,Xn||(jd=r),i&&(Ri&&!Dc&&n-Ri>200&&(Ri=0,Or("scrollEnd")),Oa=Hd,Hd=n),wc<0){for(Wn=e;Wn-- >0;)re[Wn]&&re[Wn].update(0,i);wc=1}else for(Wn=0;Wn<e;Wn++)re[Wn]&&re[Wn].update(0,i);Qt.isUpdating=!1}$a=0},Qd=[t_,e_,rf,sf,Ai+Xa,Ai+Ha,Ai+Wa,Ai+Ga,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ec=Qd.concat([Ir,Dr,"boxSizing","max"+Po,"max"+of,"position",Ai,tn,tn+Wa,tn+Ha,tn+Xa,tn+Ga]),SS=function(t,e,n){Ro(n);var i=t._gsap;if(i.spacerIsNative)Ro(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Xd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=Qd.length,o=e.style,a=t.style,l;r--;)l=Qd[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[rf]=a[sf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ir]=Pc(t,wn)+ln,o[Dr]=Pc(t,Qe)+ln,o[tn]=a[Ai]=a[e_]=a[t_]="0",Ro(i),a[Ir]=a["max"+Po]=n[Ir],a[Dr]=a["max"+of]=n[Dr],a[tn]=n[tn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},MS=/([A-Z])/g,Ro=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Rt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(MS,"-$1").toLowerCase())}},vc=function(t){for(var e=Ec.length,n=t.style,i=[],r=0;r<e;r++)i.push(Ec[r],n[Ec[r]]);return i.t=t,i},bS=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Ac={left:0,top:0},zg=function(t,e,n,i,r,o,a,l,c,h,f,d,u,_){Cn(t)&&(t=t(l)),hi(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?bc("0"+t.substr(3),n):0));var g=u?u.time():0,m,p,b;if(u&&u.seek(0),isNaN(t)||(t=+t),ka(t))u&&(t=Rt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,t)),a&&Tc(a,n,i,!0);else{Cn(e)&&(e=e(l));var M=(t||"0").split(" "),y,A,E,w;b=Hn(e,l)||Se,y=ys(b)||{},(!y||!y.left&&!y.top)&&Ci(b).display==="none"&&(w=b.style.display,b.style.display="block",y=ys(b),w?b.style.display=w:b.style.removeProperty("display")),A=bc(M[0],y[i.d]),E=bc(M[1]||"0",n),t=y[i.p]-c[i.p]-h+A+r-E,a&&Tc(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var R=t+n,v=o._isStart;m="scroll"+i.d2,Tc(o,R,i,v&&R>20||!v&&(f?Math.max(Se[m],ui[m]):o.parentNode[m])<=R+1),f&&(c=ys(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+ln))}return u&&b&&(m=ys(b),u.seek(d),p=ys(b),u._caScrollDist=m[i.p]-p[i.p],t=t/u._caScrollDist*d),u&&u.seek(g),u?t:Math.round(t)},TS=/(webkit|moz|length|cssText|inset)/i,Vg=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===Se){t._stOrig=r.cssText,a=Ci(t);for(o in a)!+o&&!TS.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Rt.core.getCache(t).uncache=1,e.appendChild(t)}},a_=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Sc=function(t,e,n){var i={};i[e.p]="+="+n,Rt.set(t,i)},Hg=function(t,e){var n=gs(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,_={};c=c||n();var g=a_(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){se.cache++,o.tween&&xs()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=Rt.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},fn(t,"wheel",n.wheelHandler),Qt.isTouch&&fn(t,"touchmove",n.wheelHandler),r},Qt=function(){function s(e,n){Eo||s.register(Rt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Zd(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Fa){this.update=this.refresh=this.kill=ts;return}n=Ng(hi(n)||ka(n)||n.nodeType?{trigger:n}:n,yc);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,f=r.scrub,d=r.trigger,u=r.pin,_=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,b=r.onSnapComplete,M=r.once,y=r.snap,A=r.pinReparent,E=r.pinSpacer,w=r.containerAnimation,R=r.fastScrollEnd,v=r.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?wn:Qe,I=!f&&f!==0,U=Hn(n.scroller||ae),k=Rt.core.getCache(U),H=Ur(U),Y=("pinType"in n?n.pinType:_s(U,"pinType")||H&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Z=I&&n.toggleActions.split(" "),B="markers"in n?n.markers:yc.markers,W=H?0:parseFloat(Ci(U)["border"+x.p2+Po])||0,P=this,rt=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Dt=pS(U,H,x),Wt=mS(U,H),q=0,et=0,at=0,nt=gs(U,x),St,Ut,bt,Xt,Ht,ct,D,ie,Pt,O,xt,$t,pt,C,S,z,K,Q,j,ht,ot,Et,Nt,st,lt,Ct,Ot,_t,Tt,At,ue,L,dt,J,tt,ut,ft,Gt,ge;if(P._startClamp=P._endClamp=!1,P._dir=x,m*=45,P.scroller=U,P.scroll=w?w.time.bind(w):nt,Xt=nt(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(Yg=1,n.refreshPriority===-9999&&(Ya=P)),k.tweenScroll=k.tweenScroll||{top:Hg(U,Qe),left:Hg(U,wn)},P.tweenTo=St=k.tweenScroll[x.p],P.scrubDuration=function(mt){dt=ka(mt)&&mt,dt?L?L.duration(mt):L=Rt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:dt,paused:!0,onComplete:function(){return p&&p(P)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),At=0,l||(l=i.vars.id)),y&&((!Rr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Se.style&&Rt.set(H?[Se,ui]:U,{scrollBehavior:"auto"}),se.forEach(function(mt){return Cn(mt)&&mt.target===(H?Pe.scrollingElement||ui:U)&&(mt.smooth=!1)}),bt=Cn(y.snapTo)?y.snapTo:y.snapTo==="labels"?_S(i):y.snapTo==="labelsDirectional"?yS(i):y.directional!==!1?function(mt,Zt){return af(y.snapTo)(mt,An()-et<500?0:Zt.direction)}:Rt.utils.snap(y.snapTo),J=y.duration||{min:.1,max:2},J=Rr(J)?Va(J.min,J.max):Va(J,J),tt=Rt.delayedCall(y.delay||dt/2||.1,function(){var mt=nt(),Zt=An()-et<500,Lt=St.tween;if((Zt||Math.abs(P.getVelocity())<10)&&!Lt&&!Dc&&q!==mt){var Yt=(mt-ct)/C,$e=i&&!I?i.totalProgress():Yt,oe=Zt?0:($e-ue)/(An()-Oa)*1e3||0,Re=Rt.utils.clamp(-Yt,1-Yt,To(oe/2)*oe/.185),nn=Yt+(y.inertia===!1?0:Re),we,Ee,ye=y,ii=ye.onStart,Ie=ye.onInterrupt,Un=ye.onComplete;if(we=bt(nn,P),ka(we)||(we=nn),Ee=Math.max(0,Math.round(ct+we*C)),mt<=D&&mt>=ct&&Ee!==mt){if(Lt&&!Lt._initted&&Lt.data<=To(Ee-mt))return;y.inertia===!1&&(Re=we-Yt),St(Ee,{duration:J(To(Math.max(To(nn-$e),To(we-$e))*.185/oe/.05||0)),ease:y.ease||"power3",data:To(Ee-mt),onInterrupt:function(){return tt.restart(!0)&&Ie&&Ie(P)},onComplete:function(){P.update(),q=nt(),i&&!I&&(L?L.resetTo("totalProgress",we,i._tTime/i._tDur):i.progress(we)),At=ue=i&&!I?i.totalProgress():P.progress,b&&b(P),Un&&Un(P)}},mt,Re*C,Ee-mt-Re*C),ii&&ii(P,St.tween)}}else P.isActive&&q!==mt&&tt.restart(!0)}).pause()),l&&(Kd[l]=P),d=P.trigger=Hn(d||u!==!0&&u),ge=d&&d._gsap&&d._gsap.stRevert,ge&&(ge=ge(P)),u=u===!0?d:Hn(u),hi(a)&&(a={targets:d,className:a}),u&&(_===!1||_===Ai||(_=!_&&u.parentNode&&u.parentNode.style&&Ci(u.parentNode).display==="flex"?!1:tn),P.pin=u,Ut=Rt.core.getCache(u),Ut.spacer?S=Ut.pinState:(E&&(E=Hn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ut.spacerIsNative=!!E,E&&(Ut.spacerState=vc(E))),Ut.spacer=Q=E||Pe.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Ut.pinState=S=vc(u)),n.force3D!==!1&&Rt.set(u,{force3D:!0}),P.spacer=Q=Ut.spacer,Tt=Ci(u),st=Tt[_+x.os2],ht=Rt.getProperty(u),ot=Rt.quickSetter(u,x.a,ln),Xd(u,Q,Tt),K=vc(u)),B){$t=Rr(B)?Ng(B,Og):Og,O=xc("scroller-start",l,U,x,$t,0),xt=xc("scroller-end",l,U,x,$t,0,O),j=O["offset"+x.op.d2];var He=Hn(_s(U,"content")||U);ie=this.markerStart=xc("start",l,He,x,$t,j,0,w),Pt=this.markerEnd=xc("end",l,He,x,$t,j,0,w),w&&(Gt=Rt.quickSetter([ie,Pt],x.a,ln)),!Y&&!(ki.length&&_s(U,"fixedMarkers")===!0)&&(gS(H?Se:U),Rt.set([O,xt],{force3D:!0}),Ct=Rt.quickSetter(O,x.a,ln),_t=Rt.quickSetter(xt,x.a,ln))}if(w){var vt=w.vars.onUpdate,It=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),vt&&vt.apply(w,It||[])})}if(P.previous=function(){return re[re.indexOf(P)-1]},P.next=function(){return re[re.indexOf(P)+1]},P.revert=function(mt,Zt){if(!Zt)return P.kill(!0);var Lt=mt!==!1||!P.enabled,Yt=En;Lt!==P.isReverted&&(Lt&&(ut=Math.max(nt(),P.scroll.rec||0),at=P.progress,ft=i&&i.progress()),ie&&[ie,Pt,O,xt].forEach(function($e){return $e.style.display=Lt?"none":"block"}),Lt&&(En=P,P.update(Lt)),u&&(!A||!P.isActive)&&(Lt?SS(u,Q,S):Xd(u,Q,Ci(u),lt)),Lt||P.update(Lt),En=Yt,P.isReverted=Lt)},P.refresh=function(mt,Zt,Lt,Yt){if(!((En||!P.enabled)&&!Zt)){if(u&&mt&&Ri){fn(s,"scrollEnd",i_);return}!Xn&&rt&&rt(P),En=P,St.tween&&!Lt&&(St.tween.kill(),St.tween=0),L&&L.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(jt){return jt.vars.immediateRender&&jt.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var $e=Dt(),oe=Wt(),Re=w?w.duration():es(U,x),nn=C<=.01||!C,we=0,Ee=Yt||0,ye=Rr(Lt)?Lt.end:n.end,ii=n.endTrigger||d,Ie=Rr(Lt)?Lt.start:n.start||(n.start===0||!d?0:u?"0 0":"0 100%"),Un=P.pinnedContainer=n.pinnedContainer&&Hn(n.pinnedContainer,P),yi=d&&Math.max(0,re.indexOf(P))||0,sn=yi,rn,T,F,$,X,N,it,gt,wt,Mt,kt,zt,Ft;for(B&&Rr(Lt)&&(zt=Rt.getProperty(O,x.p),Ft=Rt.getProperty(xt,x.p));sn-- >0;)N=re[sn],N.end||N.refresh(0,1)||(En=P),it=N.pin,it&&(it===d||it===u||it===Un)&&!N.isReverted&&(Mt||(Mt=[]),Mt.unshift(N),N.revert(!0,!0)),N!==re[sn]&&(yi--,sn--);for(Cn(Ie)&&(Ie=Ie(P)),Ie=Ig(Ie,"start",P),ct=zg(Ie,d,$e,x,nt(),ie,O,P,oe,W,Y,Re,w,P._startClamp&&"_startClamp")||(u?-.001:0),Cn(ye)&&(ye=ye(P)),hi(ye)&&!ye.indexOf("+=")&&(~ye.indexOf(" ")?ye=(hi(Ie)?Ie.split(" ")[0]:"")+ye:(we=bc(ye.substr(2),$e),ye=hi(Ie)?Ie:(w?Rt.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,ct):ct)+we,ii=d)),ye=Ig(ye,"end",P),D=Math.max(ct,zg(ye||(ii?"100% 0":Re),ii,$e,x,nt()+we,Pt,xt,P,oe,W,Y,Re,w,P._endClamp&&"_endClamp"))||-.001,we=0,sn=yi;sn--;)N=re[sn],it=N.pin,it&&N.start-N._pinPush<=ct&&!w&&N.end>0&&(rn=N.end-(P._startClamp?Math.max(0,N.start):N.start),(it===d&&N.start-N._pinPush<ct||it===Un)&&isNaN(Ie)&&(we+=rn*(1-N.progress)),it===u&&(Ee+=rn));if(ct+=we,D+=we,P._startClamp&&(P._startClamp+=we),P._endClamp&&!Xn&&(P._endClamp=D||-.001,D=Math.min(D,es(U,x))),C=D-ct||(ct-=.01)&&.001,nn&&(at=Rt.utils.clamp(0,1,Rt.utils.normalize(ct,D,ut))),P._pinPush=Ee,ie&&we&&(rn={},rn[x.a]="+="+we,Un&&(rn[x.p]="-="+nt()),Rt.set([ie,Pt],rn)),u&&!(Jd&&P.end>=es(U,x)))rn=Ci(u),$=x===Qe,F=nt(),Et=parseFloat(ht(x.a))+Ee,!Re&&D>1&&(kt=(H?Pe.scrollingElement||ui:U).style,kt={style:kt,value:kt["overflow"+x.a.toUpperCase()]},H&&Ci(Se)["overflow"+x.a.toUpperCase()]!=="scroll"&&(kt.style["overflow"+x.a.toUpperCase()]="scroll")),Xd(u,Q,rn),K=vc(u),T=ys(u,!0),gt=Y&&gs(U,$?wn:Qe)(),_?(lt=[_+x.os2,C+Ee+ln],lt.t=Q,sn=_===tn?Pc(u,x)+C+Ee:0,sn&&(lt.push(x.d,sn+ln),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=sn+ln)),Ro(lt),Un&&re.forEach(function(jt){jt.pin===Un&&jt.vars.pinSpacing!==!1&&(jt._subPinOffset=!0)}),Y&&nt(ut)):(sn=Pc(u,x),sn&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=sn+ln)),Y&&(X={top:T.top+($?F-ct:gt)+ln,left:T.left+($?gt:F-ct)+ln,boxSizing:"border-box",position:"fixed"},X[Ir]=X["max"+Po]=Math.ceil(T.width)+ln,X[Dr]=X["max"+of]=Math.ceil(T.height)+ln,X[Ai]=X[Ai+Wa]=X[Ai+Ha]=X[Ai+Xa]=X[Ai+Ga]="0",X[tn]=rn[tn],X[tn+Wa]=rn[tn+Wa],X[tn+Ha]=rn[tn+Ha],X[tn+Xa]=rn[tn+Xa],X[tn+Ga]=rn[tn+Ga],z=bS(S,X,A),Xn&&nt(0)),i?(wt=i._initted,zd(1),i.render(i.duration(),!0,!0),Nt=ht(x.a)-Et+C+Ee,Ot=Math.abs(C-Nt)>1,Y&&Ot&&z.splice(z.length-2,2),i.render(0,!0,!0),wt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),zd(0)):Nt=C,kt&&(kt.value?kt.style["overflow"+x.a.toUpperCase()]=kt.value:kt.style.removeProperty("overflow-"+x.a));else if(d&&nt()&&!w)for(T=d.parentNode;T&&T!==Se;)T._pinOffset&&(ct-=T._pinOffset,D-=T._pinOffset),T=T.parentNode;Mt&&Mt.forEach(function(jt){return jt.revert(!1,!0)}),P.start=ct,P.end=D,Xt=Ht=Xn?ut:nt(),!w&&!Xn&&(Xt<ut&&nt(ut),P.scroll.rec=0),P.revert(!1,!0),et=An(),tt&&(q=-1,tt.restart(!0)),En=0,i&&I&&(i._initted||ft)&&i.progress()!==ft&&i.progress(ft||0,!0).render(i.time(),!0,!0),(nn||at!==P.progress||w||g||i&&!i._initted)&&(i&&!I&&(i._initted||at||i.vars.immediateRender!==!1)&&i.totalProgress(w&&ct<-.001&&!at?Rt.utils.normalize(ct,D,0):at,!0),P.progress=nn||(Xt-ct)/C===at?0:at),u&&_&&(Q._pinOffset=Math.round(P.progress*Nt)),L&&L.invalidate(),isNaN(zt)||(zt-=Rt.getProperty(O,x.p),Ft-=Rt.getProperty(xt,x.p),Sc(O,x,zt),Sc(ie,x,zt-(Yt||0)),Sc(xt,x,Ft),Sc(Pt,x,Ft-(Yt||0))),nn&&!Xn&&P.update(),h&&!Xn&&!pt&&(pt=!0,h(P),pt=!1)}},P.getVelocity=function(){return(nt()-Ht)/(An()-Oa)*1e3||0},P.endAnimation=function(){Na(P.callbackAnimation),i&&(L?L.progress(1):i.paused()?I||Na(i,P.direction<0,1):Na(i,i.reversed()))},P.labelToScroll=function(mt){return i&&i.labels&&(ct||P.refresh()||ct)+i.labels[mt]/i.duration()*C||0},P.getTrailing=function(mt){var Zt=re.indexOf(P),Lt=P.direction>0?re.slice(0,Zt).reverse():re.slice(Zt+1);return(hi(mt)?Lt.filter(function(Yt){return Yt.vars.preventOverlaps===mt}):Lt).filter(function(Yt){return P.direction>0?Yt.end<=ct:Yt.start>=D})},P.update=function(mt,Zt,Lt){if(!(w&&!Lt&&!mt)){var Yt=Xn===!0?ut:P.scroll(),$e=mt?0:(Yt-ct)/C,oe=$e<0?0:$e>1?1:$e||0,Re=P.progress,nn,we,Ee,ye,ii,Ie,Un,yi;if(Zt&&(Ht=Xt,Xt=w?nt():Yt,y&&(ue=At,At=i&&!I?i.totalProgress():oe)),m&&u&&!En&&!pc&&Ri&&(!oe&&ct<Yt+(Yt-Ht)/(An()-Oa)*m?oe=1e-4:oe===1&&D>Yt+(Yt-Ht)/(An()-Oa)*m&&(oe=.9999)),oe!==Re&&P.enabled){if(nn=P.isActive=!!oe&&oe<1,we=!!Re&&Re<1,Ie=nn!==we,ii=Ie||!!oe!=!!Re,P.direction=oe>Re?1:-1,P.progress=oe,ii&&!En&&(Ee=oe&&!Re?0:oe===1?1:Re===1?2:3,I&&(ye=!Ie&&Z[Ee+1]!=="none"&&Z[Ee+1]||Z[Ee],yi=i&&(ye==="complete"||ye==="reset"||ye in i))),v&&(Ie||yi)&&(yi||f||!i)&&(Cn(v)?v(P):P.getTrailing(v).forEach(function(F){return F.endAnimation()})),I||(L&&!En&&!pc?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",oe,i._tTime/i._tDur):(L.vars.totalProgress=oe,L.invalidate().restart())):i&&i.totalProgress(oe,!!(En&&(et||mt)))),u){if(mt&&_&&(Q.style[_+x.os2]=st),!Y)ot(Ba(Et+Nt*oe));else if(ii){if(Un=!mt&&oe>Re&&D+1>Yt&&Yt+1>=es(U,x),A)if(!mt&&(nn||Un)){var sn=ys(u,!0),rn=Yt-ct;Vg(u,Se,sn.top+(x===Qe?rn:0)+ln,sn.left+(x===Qe?0:rn)+ln)}else Vg(u,Q);Ro(nn||Un?z:K),Ot&&oe<1&&nn||ot(Et+(oe===1&&!Un?Nt:0))}}y&&!St.tween&&!En&&!pc&&tt.restart(!0),a&&(Ie||M&&oe&&(oe<1||!Vd))&&qa(a.targets).forEach(function(F){return F.classList[nn||M?"add":"remove"](a.className)}),o&&!I&&!mt&&o(P),ii&&!En?(I&&(yi&&(ye==="complete"?i.pause().totalProgress(1):ye==="reset"?i.restart(!0).pause():ye==="restart"?i.restart(!0):i[ye]()),o&&o(P)),(Ie||!Vd)&&(c&&Ie&&Gd(P,c),V[Ee]&&Gd(P,V[Ee]),M&&(oe===1?P.kill(!1,1):V[Ee]=0),Ie||(Ee=oe===1?1:3,V[Ee]&&Gd(P,V[Ee]))),R&&!nn&&Math.abs(P.getVelocity())>(ka(R)?R:2500)&&(Na(P.callbackAnimation),L?L.progress(1):Na(i,ye==="reverse"?1:!oe,1))):I&&o&&!En&&o(P)}if(_t){var T=w?Yt/w.duration()*(w._caScrollDist||0):Yt;Ct(T+(O._isFlipped?1:0)),_t(T)}Gt&&Gt(-Yt/w.duration()*(w._caScrollDist||0))}},P.enable=function(mt,Zt){P.enabled||(P.enabled=!0,fn(U,"resize",za),H||fn(U,"scroll",wo),rt&&fn(s,"refreshInit",rt),mt!==!1&&(P.progress=at=0,Xt=Ht=q=nt()),Zt!==!1&&P.refresh())},P.getTween=function(mt){return mt&&St?St.tween:L},P.setPositions=function(mt,Zt,Lt,Yt){if(w){var $e=w.scrollTrigger,oe=w.duration(),Re=$e.end-$e.start;mt=$e.start+Re*mt/oe,Zt=$e.start+Re*Zt/oe}P.refresh(!1,!1,{start:Dg(mt,Lt&&!!P._startClamp),end:Dg(Zt,Lt&&!!P._endClamp)},Yt),P.update()},P.adjustPinSpacing=function(mt){if(lt&&mt){var Zt=lt.indexOf(x.d)+1;lt[Zt]=parseFloat(lt[Zt])+mt+ln,lt[1]=parseFloat(lt[1])+mt+ln,Ro(lt)}},P.disable=function(mt,Zt){if(P.enabled&&(mt!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,Zt||L&&L.pause(),ut=0,Ut&&(Ut.uncache=1),rt&&dn(s,"refreshInit",rt),tt&&(tt.pause(),St.tween&&St.tween.kill()&&(St.tween=0)),!H)){for(var Lt=re.length;Lt--;)if(re[Lt].scroller===U&&re[Lt]!==P)return;dn(U,"resize",za),H||dn(U,"scroll",wo)}},P.kill=function(mt,Zt){P.disable(mt,Zt),L&&!Zt&&L.kill(),l&&delete Kd[l];var Lt=re.indexOf(P);Lt>=0&&re.splice(Lt,1),Lt===Wn&&wc>0&&Wn--,Lt=0,re.forEach(function(Yt){return Yt.scroller===P.scroller&&(Lt=1)}),Lt||Xn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,mt&&i.revert({kill:!1}),Zt||i.kill()),ie&&[ie,Pt,O,xt].forEach(function(Yt){return Yt.parentNode&&Yt.parentNode.removeChild(Yt)}),Ya===P&&(Ya=0),u&&(Ut&&(Ut.uncache=1),Lt=0,re.forEach(function(Yt){return Yt.pin===u&&Lt++}),Lt||(Ut.spacer=0)),n.onKill&&n.onKill(P)},re.push(P),P.enable(!1,!1),ge&&ge(P),i&&i.add&&!C){var ee=P.update;P.update=function(){P.update=ee,se.cache++,ct||D||P.refresh()},Rt.delayedCall(.01,P.update),C=.01,ct=D=0}else P.refresh();u&&vS()},s.register=function(n){return Eo||(Rt=n||Kg(),Jg()&&window.document&&s.enable(),Eo=Fa),Eo},s.defaults=function(n){if(n)for(var i in n)yc[i]=n[i];return yc},s.disable=function(n,i){Fa=0,re.forEach(function(o){return o[i?"kill":"disable"](n)}),dn(ae,"wheel",wo),dn(Pe,"scroll",wo),clearInterval(fc),dn(Pe,"touchcancel",ts),dn(Se,"touchstart",ts),gc(dn,Pe,"pointerdown,touchstart,mousedown",Lg),gc(dn,Pe,"pointerup,touchend,mouseup",Ug),Cc.kill(),mc(dn);for(var r=0;r<se.length;r+=3)_c(dn,se[r],se[r+1]),_c(dn,se[r],se[r+2])},s.enable=function(){if(ae=window,Pe=document,ui=Pe.documentElement,Se=Pe.body,Rt&&(qa=Rt.utils.toArray,Va=Rt.utils.clamp,Zd=Rt.core.context||ts,zd=Rt.core.suppressOverwrites||ts,ef=ae.history.scrollRestoration||"auto",jd=ae.pageYOffset||0,Rt.core.globals("ScrollTrigger",s),Se)){Fa=1,Co=document.createElement("div"),Co.style.height="100vh",Co.style.position="absolute",o_(),fS(),qe.register(Rt),s.isTouch=qe.isTouch,Xs=qe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),$d=qe.isTouch===1,fn(ae,"wheel",wo),tf=[ae,Pe,ui,Se],Rt.matchMedia?(s.matchMedia=function(c){var h=Rt.matchMedia(),f;for(f in c)h.add(f,c[f]);return h},Rt.addEventListener("matchMediaInit",function(){return lf()}),Rt.addEventListener("matchMediaRevert",function(){return s_()}),Rt.addEventListener("matchMedia",function(){Pr(0,1),Or("matchMedia")}),Rt.matchMedia().add("(orientation: portrait)",function(){return Wd(),Wd})):console.warn("Requires GSAP 3.11.0 or later"),Wd(),fn(Pe,"scroll",wo);var n=Se.hasAttribute("style"),i=Se.style,r=i.borderTopStyle,o=Rt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ys(Se),Qe.m=Math.round(a.top+Qe.sc())||0,wn.m=Math.round(a.left+wn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Se.setAttribute("style",""),Se.removeAttribute("style")),fc=setInterval(Fg,250),Rt.delayedCall(.5,function(){return pc=0}),fn(Pe,"touchcancel",ts),fn(Se,"touchstart",ts),gc(fn,Pe,"pointerdown,touchstart,mousedown",Lg),gc(fn,Pe,"pointerup,touchend,mouseup",Ug),qd=Rt.utils.checkPrefix("transform"),Ec.push(qd),Eo=An(),Cc=Rt.delayedCall(.2,Pr).pause(),Ao=[Pe,"visibilitychange",function(){var c=ae.innerWidth,h=ae.innerHeight;Pe.hidden?(Rg=c,Pg=h):(Rg!==c||Pg!==h)&&za()},Pe,"DOMContentLoaded",Pr,ae,"load",Pr,ae,"resize",za],mc(fn),re.forEach(function(c){return c.enable(0,1)}),l=0;l<se.length;l+=3)_c(dn,se[l],se[l+1]),_c(dn,se[l],se[l+2])}},s.config=function(n){"limitCallbacks"in n&&(Vd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(fc)||(fc=i)&&setInterval(Fg,i),"ignoreMobileResize"in n&&($d=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(mc(dn)||mc(fn,n.autoRefreshEvents||"none"),qg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Hn(n),o=se.indexOf(r),a=Ur(r);~o&&se.splice(o,a?6:2),i&&(a?ki.unshift(ae,i,Se,i,ui,i):ki.unshift(r,i))},s.clearMatchMedia=function(n){re.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(hi(n)?Hn(n):n).getBoundingClientRect(),a=o[r?Ir:Dr]*i||0;return r?o.right-a>0&&o.left+a<ae.innerWidth:o.bottom-a>0&&o.top+a<ae.innerHeight},s.positionInViewport=function(n,i,r){hi(n)&&(n=Hn(n));var o=n.getBoundingClientRect(),a=o[r?Ir:Dr],l=i==null?a/2:i in Ic?Ic[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/ae.innerWidth:(o.top+l)/ae.innerHeight},s.killAll=function(n){if(re.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Nr.killAll||[];Nr={},i.forEach(function(r){return r()})}},s}();Qt.version="3.13.0";Qt.saveStyles=function(s){return s?qa(s).forEach(function(t){if(t&&t.style){var e=ci.indexOf(t);e>=0&&ci.splice(e,5),ci.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Rt.core.getCache(t),Zd())}}):ci};Qt.revert=function(s,t){return lf(!s,t)};Qt.create=function(s,t){return new Qt(s,t)};Qt.refresh=function(s){return s?za(!0):(Eo||Qt.register())&&Pr(!0)};Qt.update=function(s){return++se.cache&&xs(s===!0?2:0)};Qt.clearScrollMemory=r_;Qt.maxScroll=function(s,t){return es(s,t?wn:Qe)};Qt.getScrollFunc=function(s,t){return gs(Hn(s),t?wn:Qe)};Qt.getById=function(s){return Kd[s]};Qt.getAll=function(){return re.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Qt.isScrolling=function(){return!!Ri};Qt.snapDirectional=af;Qt.addEventListener=function(s,t){var e=Nr[s]||(Nr[s]=[]);~e.indexOf(t)||e.push(t)};Qt.removeEventListener=function(s,t){var e=Nr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Qt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var f=[],d=[],u=Rt.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(_){f.length||u.restart(!0),f.push(_.trigger),d.push(_),r<=f.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Cn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Cn(r)&&(r=r(),fn(Qt,"refresh",function(){return r=t.batchMax()})),qa(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Qt.create(c))}),e};var Gg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Yd=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(qe.isTouch?" pinch-zoom":""):"none",t===ui&&s(Se,e)},Mc={auto:1,scroll:1},wS=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Rt.core.getCache(r),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Se&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Mc[(l=Ci(r)).overflowY]||Mc[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Ur(r)&&(Mc[(l=Ci(r)).overflowY]||Mc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},l_=function(t,e,n,i){return qe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&wS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&fn(Pe,qe.eventTypes[0],Xg,!1,!0)},onDisable:function(){return dn(Pe,qe.eventTypes[0],Xg,!0)}})},ES=/(input|label|select|textarea)/i,Wg,Xg=function(t){var e=ES.test(t.target.tagName);(e||Wg)&&(t._gsapAllow=!0,Wg=e)},AS=function(t){Rr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Hn(t.target)||ui,h=Rt.core.globals().ScrollSmoother,f=h&&h.get(),d=Xs&&(t.content&&Hn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),u=gs(c,Qe),_=gs(c,wn),g=1,m=(qe.isTouch&&ae.visualViewport?ae.visualViewport.scale*ae.visualViewport.width:ae.outerWidth)/ae.innerWidth,p=0,b=Cn(i)?function(){return i(a)}:function(){return i||2.8},M,y,A=l_(c,t.type,!0,r),E=function(){return y=!1},w=ts,R=ts,v=function(){l=es(c,Qe),R=Va(Xs?1:0,l),n&&(w=Va(0,es(c,wn))),M=Lr},x=function(){d._gsap.y=Ba(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},I=function(){if(y){requestAnimationFrame(E);var B=Ba(a.deltaY/2),W=R(u.v-B);if(d&&W!==u.v+u.offset){u.offset=W-u.v;var P=Ba((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",u.cacheID=se.cache,xs()}return!0}u.offset&&x(),y=!0},U,k,H,Y,V=function(){v(),U.isActive()&&U.vars.scrollY>l&&(u()>l?U.progress(1)&&u(l):U.resetTo("scrollY",l))};return d&&Rt.set(d,{y:"+=0"}),t.ignoreCheck=function(Z){return Xs&&Z.type==="touchmove"&&I(Z)||g>1.05&&Z.type!=="touchstart"||a.isGesturing||Z.touches&&Z.touches.length>1},t.onPress=function(){y=!1;var Z=g;g=Ba((ae.visualViewport&&ae.visualViewport.scale||1)/m),U.pause(),Z!==g&&Yd(c,g>1.01?!0:n?!1:"x"),k=_(),H=u(),v(),M=Lr},t.onRelease=t.onGestureStart=function(Z,B){if(u.offset&&x(),!B)Y.restart(!0);else{se.cache++;var W=b(),P,rt;n&&(P=_(),rt=P+W*.05*-Z.velocityX/.227,W*=Gg(_,P,rt,es(c,wn)),U.vars.scrollX=w(rt)),P=u(),rt=P+W*.05*-Z.velocityY/.227,W*=Gg(u,P,rt,es(c,Qe)),U.vars.scrollY=R(rt),U.invalidate().duration(W).play(.01),(Xs&&U.vars.scrollY>=l||P>=l-1)&&Rt.to({},{onUpdate:V,duration:W})}o&&o(Z)},t.onWheel=function(){U._ts&&U.pause(),An()-p>1e3&&(M=0,p=An())},t.onChange=function(Z,B,W,P,rt){if(Lr!==M&&v(),B&&n&&_(w(P[2]===B?k+(Z.startX-Z.x):_()+B-P[1])),W){u.offset&&x();var Dt=rt[2]===W,Wt=Dt?H+Z.startY-Z.y:u()+W-rt[1],q=R(Wt);Dt&&Wt!==q&&(H+=q-Wt),u(q)}(W||B)&&xs()},t.onEnable=function(){Yd(c,n?!1:"x"),Qt.addEventListener("refresh",V),fn(ae,"resize",V),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=_.smooth=!1),A.enable()},t.onDisable=function(){Yd(c,!0),dn(ae,"resize",V),Qt.removeEventListener("refresh",V),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new qe(t),a.iOS=Xs,Xs&&!u()&&u(1),Xs&&Rt.ticker.add(ts),Y=a._dc,U=Rt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:a_(u,u(),function(){return U.pause()})},onUpdate:xs,onComplete:Y.vars.onComplete}),a};Qt.sort=function(s){if(Cn(s))return re.sort(s);var t=ae.pageYOffset||0;return Qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ae.innerHeight}),re.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qt.observe=function(s){return new qe(s)};Qt.normalizeScroll=function(s){if(typeof s>"u")return Gn;if(s===!0&&Gn)return Gn.enable();if(s===!1){Gn&&Gn.kill(),Gn=s;return}var t=s instanceof qe?s:AS(s);return Gn&&Gn.target===t.target&&Gn.kill(),Ur(t.target)&&(Gn=t),t};Qt.core={_getVelocityProp:dc,_inputObserver:l_,_scrollers:se,_proxies:ki,bridge:{ss:function(){Ri||Or("scrollStart"),Ri=An()},ref:function(){return En}}};Kg()&&Rt.registerPlugin(Qt);var Th="176",or={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},L_=0,zf=1,U_=2;var Vf=1,N_=2,as=3,Es=0,qn=1,Li=2,As=0,Hr=1,Hf=2,Gf=3,Wf=4,O_=5,tr=100,F_=101,B_=102,k_=103,z_=104,V_=200,H_=201,G_=202,W_=203,th=204,eh=205,X_=206,Y_=207,q_=208,$_=209,Z_=210,J_=211,K_=212,j_=213,Q_=214,wh=0,Eh=1,Ah=2,Gr=3,Ch=4,Rh=5,Ph=6,Ih=7,Xf=0,t0=1,e0=2,Cs=0,n0=1,i0=2,s0=3,r0=4,o0=5,a0=6,l0=7;var Yf=300,$r=301,Zr=302,Dh=303,Lh=304,Sl=306,nh=1e3,Qs=1001,ih=1002,Ii=1003,c0=1004;var Ml=1005;var Wi=1006,Uh=1007;var lr=1008;var qi=1009,qf=1010,$f=1011,ta=1012,Nh=1013,cr=1014,ls=1015,ea=1016,Oh=1017,Fh=1018,na=1020,Zf=35902,Jf=1021,Kf=1022,Ui=1023,Xo=1026,ia=1027,jf=1028,Bh=1029,Qf=1030,kh=1031;var zh=1033,bl=33776,Tl=33777,wl=33778,El=33779,Vh=35840,Hh=35841,Gh=35842,Wh=35843,Xh=36196,Yh=37492,qh=37496,$h=37808,Zh=37809,Jh=37810,Kh=37811,jh=37812,Qh=37813,tu=37814,eu=37815,nu=37816,iu=37817,su=37818,ru=37819,ou=37820,au=37821,Al=36492,lu=36494,cu=36495,tp=36283,hu=36284,uu=36285,du=36286;var nl=2300,sh=2301,Qc=2302,If=2400,Df=2401,Lf=2402;var h0=3200,u0=3201;var d0=0,f0=1,Rs="",pi="srgb",Wr="srgb-linear",il="linear",Me="srgb";var Vr=7680;var Uf=519,p0=512,m0=513,g0=514,ep=515,_0=516,y0=517,x0=518,v0=519,Nf=35044;var np="300 es",ns=2e3,sl=2001;var ss=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],c_=1234567,tl=Math.PI/180,Yo=180/Math.PI;function sa(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[e&63|128]+Rn[e>>8&255]+"-"+Rn[e>>16&255]+Rn[e>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function le(s,t,e){return Math.max(t,Math.min(e,s))}function ip(s,t){return(s%t+t)%t}function CS(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function RS(s,t,e){return s!==t?(e-s)/(t-s):0}function el(s,t,e){return(1-e)*s+e*t}function PS(s,t,e,n){return el(s,t,1-Math.exp(-e*n))}function IS(s,t=1){return t-Math.abs(ip(s,t*2)-t)}function DS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function LS(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function US(s,t){return s+Math.floor(Math.random()*(t-s+1))}function NS(s,t){return s+Math.random()*(t-s)}function OS(s){return s*(.5-Math.random())}function FS(s){s!==void 0&&(c_=s);let t=c_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function BS(s){return s*tl}function kS(s){return s*Yo}function zS(s){return(s&s-1)===0&&s!==0}function VS(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function HS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function GS(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),u=r((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*f,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*f,a*c);break;case"ZXZ":s.set(l*f,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*_,l*u,a*c);break;case"YXY":s.set(l*u,a*h,l*_,a*c);break;case"ZYZ":s.set(l*_,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Go(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var hr={DEG2RAD:tl,RAD2DEG:Yo,generateUUID:sa,clamp:le,euclideanModulo:ip,mapLinear:CS,inverseLerp:RS,lerp:el,damp:PS,pingpong:IS,smoothstep:DS,smootherstep:LS,randInt:US,randFloat:NS,randFloatSpread:OS,seededRandom:FS,degToRad:BS,radToDeg:kS,isPowerOfTwo:zS,ceilPowerOfTwo:VS,floorPowerOfTwo:HS,setQuaternionFromProperEuler:GS,normalize:Yn,denormalize:Go},qt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},te=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],_=n[8],g=i[0],m=i[3],p=i[6],b=i[1],M=i[4],y=i[7],A=i[2],E=i[5],w=i[8];return r[0]=o*g+a*b+l*A,r[3]=o*m+a*M+l*E,r[6]=o*p+a*y+l*w,r[1]=c*g+h*b+f*A,r[4]=c*m+h*M+f*E,r[7]=c*p+h*y+f*w,r[2]=d*g+u*b+_*A,r[5]=d*m+u*M+_*E,r[8]=d*p+u*y+_*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*r,u=c*r-o*l,_=e*f+n*d+i*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=f*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=u*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(cf.makeScale(t,e)),this}rotate(t){return this.premultiply(cf.makeRotation(-t)),this}translate(t,e){return this.premultiply(cf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},cf=new te;function sp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function rl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function S0(){let s=rl("canvas");return s.style.display="block",s}var h_={};function Cl(s){s in h_||(h_[s]=!0,console.warn(s))}function M0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function b0(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function T0(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var u_=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),d_=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WS(){let s={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Me&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(i.r=Wo(i.r),i.g=Wo(i.g),i.b=Wo(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Rs?il:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Wr]:{primaries:t,whitePoint:n,transfer:il,toXYZ:u_,fromXYZ:d_,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:u_,fromXYZ:d_,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),s}var pe=WS();function ws(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Io,rh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Io===void 0&&(Io=rl("canvas")),Io.width=t.width,Io.height=t.height;let i=Io.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Io}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=rl("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ws(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ws(e[n]/255)*255):e[n]=ws(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},XS=0,qo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=sa(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(hf(i[o].image)):r.push(hf(i[o]))}else r=hf(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function hf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var YS=0,gi=class s extends ss{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Qs,i=Qs,r=Wi,o=lr,a=Ui,l=qi,c=s.DEFAULT_ANISOTROPY,h=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=sa(),this.name="",this.source=new qo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nh:t.x=t.x-Math.floor(t.x);break;case Qs:t.x=t.x<0?0:1;break;case ih:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nh:t.y=t.y-Math.floor(t.y);break;case Qs:t.y=t.y<0?0:1;break;case ih:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};gi.DEFAULT_IMAGE=null;gi.DEFAULT_MAPPING=Yf;gi.DEFAULT_ANISOTROPY=1;var Ve=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,y=(u+1)/2,A=(p+1)/2,E=(h+d)/4,w=(f+g)/4,R=(_+m)/4;return M>y&&M>A?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=E/n,r=w/n):y>A?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=R/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=w/r,i=R/r),this.set(n,i,r,e),this}let b=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-g)/b,this.z=(d-h)/b,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oh=class extends ss{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth?n.depth:1,this.scissor=new Ve(0,0,t,e),this.scissorTest=!1,this.viewport=new Ve(0,0,t,e);let i={width:t,height:e,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);let r=new gi(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new qo(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},rs=class extends oh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ol=class extends gi{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=Qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ah=class extends gi{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=Qs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Di=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],d=r[o+0],u=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==d||c!==u||h!==_){let m=1-a,p=l*d+c*u+h*_+f*g,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let A=Math.sqrt(M),E=Math.atan2(A,p*b);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}let y=a*b;if(l=l*m+d*y,c=c*m+u*y,h=h*m+_*y,f=f*m+g*y,m===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=A,c*=A,h*=A,f*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[o],d=r[o+1],u=r[o+2],_=r[o+3];return t[e]=a*_+h*f+l*u-c*d,t[e+1]=l*_+h*d+c*f-a*u,t[e+2]=c*_+h*u+a*d-l*f,t[e+3]=h*_-a*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(r/2),d=l(n/2),u=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*f+c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f-d*u*_;break;case"YXZ":this._x=d*h*f+c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f+d*u*_;break;case"ZXY":this._x=d*h*f-c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f-d*u*_;break;case"ZYX":this._x=d*h*f-c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f+d*u*_;break;case"YZX":this._x=d*h*f+c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f-d*u*_;break;case"XZY":this._x=d*h*f-c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f+d*u*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(f_.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(f_.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=i+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return uf.copy(this).projectOnVector(t),this.sub(uf)}reflect(t){return this.sub(uf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uf=new G,f_=new Di,er=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zi):zi.fromBufferAttribute(r,o),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lc.copy(n.boundingBox)),Lc.applyMatrix4(t.matrixWorld),this.union(Lc)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Za),Uc.subVectors(this.max,Za),Do.subVectors(t.a,Za),Lo.subVectors(t.b,Za),Uo.subVectors(t.c,Za),Ys.subVectors(Lo,Do),qs.subVectors(Uo,Lo),Fr.subVectors(Do,Uo);let e=[0,-Ys.z,Ys.y,0,-qs.z,qs.y,0,-Fr.z,Fr.y,Ys.z,0,-Ys.x,qs.z,0,-qs.x,Fr.z,0,-Fr.x,-Ys.y,Ys.x,0,-qs.y,qs.x,0,-Fr.y,Fr.x,0];return!df(e,Do,Lo,Uo,Uc)||(e=[1,0,0,0,1,0,0,0,1],!df(e,Do,Lo,Uo,Uc))?!1:(Nc.crossVectors(Ys,qs),e=[Nc.x,Nc.y,Nc.z],df(e,Do,Lo,Uo,Uc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},vs=[new G,new G,new G,new G,new G,new G,new G,new G],zi=new G,Lc=new er,Do=new G,Lo=new G,Uo=new G,Ys=new G,qs=new G,Fr=new G,Za=new G,Uc=new G,Nc=new G,Br=new G;function df(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Br.fromArray(s,r);let a=i.x*Math.abs(Br.x)+i.y*Math.abs(Br.y)+i.z*Math.abs(Br.z),l=t.dot(Br),c=e.dot(Br),h=n.dot(Br);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var qS=new er,Ja=new G,ff=new G,Xr=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):qS.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ja.subVectors(t,this.center);let e=Ja.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ja,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ff.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ja.copy(t.center).add(ff)),this.expandByPoint(Ja.copy(t.center).sub(ff))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ss=new G,pf=new G,Oc=new G,$s=new G,mf=new G,Fc=new G,gf=new G,nr=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ss)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ss.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ss.copy(this.origin).addScaledVector(this.direction,e),Ss.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){pf.copy(t).add(e).multiplyScalar(.5),Oc.copy(e).sub(t).normalize(),$s.copy(this.origin).sub(pf);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Oc),a=$s.dot(this.direction),l=-$s.dot(Oc),c=$s.lengthSq(),h=Math.abs(1-o*o),f,d,u,_;if(h>0)if(f=o*l-a,d=o*a-l,_=r*h,f>=0)if(d>=-_)if(d<=_){let g=1/h;f*=g,d*=g,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(pf).addScaledVector(Oc,d),u}intersectSphere(t,e){Ss.subVectors(t.center,this.origin);let n=Ss.dot(this.direction),i=Ss.dot(Ss)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ss)!==null}intersectTriangle(t,e,n,i,r){mf.subVectors(e,t),Fc.subVectors(n,t),gf.crossVectors(mf,Fc);let o=this.direction.dot(gf),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$s.subVectors(this.origin,t);let l=a*this.direction.dot(Fc.crossVectors($s,Fc));if(l<0)return null;let c=a*this.direction.dot(mf.cross($s));if(c<0||l+c>o)return null;let h=-a*$s.dot(gf);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class s{constructor(t,e,n,i,r,o,a,l,c,h,f,d,u,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,f,d,u,_,g,m)}set(t,e,n,i,r,o,a,l,c,h,f,d,u,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/No.setFromMatrixColumn(t,0).length(),r=1/No.setFromMatrixColumn(t,1).length(),o=1/No.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*h,u=o*f,_=a*h,g=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+u*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,u=l*f,_=c*h,g=c*f;e[0]=d+g*a,e[4]=_*a-u,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=u*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,u=l*f,_=c*h,g=c*f;e[0]=d-g*a,e[4]=-o*f,e[8]=_+u*a,e[1]=u+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,u=o*f,_=a*h,g=a*f;e[0]=l*h,e[4]=_*c-u,e[8]=d*c+g,e[1]=l*f,e[5]=g*c+d,e[9]=u*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,u=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-d*f,e[8]=_*f+u,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*f+_,e[10]=d-g*f}else if(t.order==="XZY"){let d=o*l,u=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+g,e[5]=o*h,e[9]=u*f-_,e[2]=_*f-u,e[6]=a*h,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($S,t,ZS)}lookAt(t,e,n){let i=this.elements;return di.subVectors(t,e),di.lengthSq()===0&&(di.z=1),di.normalize(),Zs.crossVectors(n,di),Zs.lengthSq()===0&&(Math.abs(n.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Zs.crossVectors(n,di)),Zs.normalize(),Bc.crossVectors(di,Zs),i[0]=Zs.x,i[4]=Bc.x,i[8]=di.x,i[1]=Zs.y,i[5]=Bc.y,i[9]=di.y,i[2]=Zs.z,i[6]=Bc.z,i[10]=di.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],_=n[2],g=n[6],m=n[10],p=n[14],b=n[3],M=n[7],y=n[11],A=n[15],E=i[0],w=i[4],R=i[8],v=i[12],x=i[1],I=i[5],U=i[9],k=i[13],H=i[2],Y=i[6],V=i[10],Z=i[14],B=i[3],W=i[7],P=i[11],rt=i[15];return r[0]=o*E+a*x+l*H+c*B,r[4]=o*w+a*I+l*Y+c*W,r[8]=o*R+a*U+l*V+c*P,r[12]=o*v+a*k+l*Z+c*rt,r[1]=h*E+f*x+d*H+u*B,r[5]=h*w+f*I+d*Y+u*W,r[9]=h*R+f*U+d*V+u*P,r[13]=h*v+f*k+d*Z+u*rt,r[2]=_*E+g*x+m*H+p*B,r[6]=_*w+g*I+m*Y+p*W,r[10]=_*R+g*U+m*V+p*P,r[14]=_*v+g*k+m*Z+p*rt,r[3]=b*E+M*x+y*H+A*B,r[7]=b*w+M*I+y*Y+A*W,r[11]=b*R+M*U+y*V+A*P,r[15]=b*v+M*k+y*Z+A*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+r*l*f-i*c*f-r*a*d+n*c*d+i*a*u-n*l*u)+g*(+e*l*u-e*c*d+r*o*d-i*o*u+i*c*h-r*l*h)+m*(+e*c*f-e*a*u-r*o*f+n*o*u+r*a*h-n*c*h)+p*(-i*a*h-e*l*f+e*a*d+i*o*f-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],_=t[12],g=t[13],m=t[14],p=t[15],b=f*m*c-g*d*c+g*l*u-a*m*u-f*l*p+a*d*p,M=_*d*c-h*m*c-_*l*u+o*m*u+h*l*p-o*d*p,y=h*g*c-_*f*c+_*a*u-o*g*u-h*a*p+o*f*p,A=_*f*l-h*g*l-_*a*d+o*g*d+h*a*m-o*f*m,E=e*b+n*M+i*y+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=b*w,t[1]=(g*d*r-f*m*r-g*i*u+n*m*u+f*i*p-n*d*p)*w,t[2]=(a*m*r-g*l*r+g*i*c-n*m*c-a*i*p+n*l*p)*w,t[3]=(f*l*r-a*d*r-f*i*c+n*d*c+a*i*u-n*l*u)*w,t[4]=M*w,t[5]=(h*m*r-_*d*r+_*i*u-e*m*u-h*i*p+e*d*p)*w,t[6]=(_*l*r-o*m*r-_*i*c+e*m*c+o*i*p-e*l*p)*w,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*u+e*l*u)*w,t[8]=y*w,t[9]=(_*f*r-h*g*r-_*n*u+e*g*u+h*n*p-e*f*p)*w,t[10]=(o*g*r-_*a*r+_*n*c-e*g*c-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*u-e*a*u)*w,t[12]=A*w,t[13]=(h*g*i-_*f*i+_*n*d-e*g*d-h*n*m+e*f*m)*w,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*w,t[15]=(o*f*i-h*a*i+h*n*l-e*f*l-o*n*d+e*a*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,d=r*c,u=r*h,_=r*f,g=o*h,m=o*f,p=a*f,b=l*c,M=l*h,y=l*f,A=n.x,E=n.y,w=n.z;return i[0]=(1-(g+p))*A,i[1]=(u+y)*A,i[2]=(_-M)*A,i[3]=0,i[4]=(u-y)*E,i[5]=(1-(d+p))*E,i[6]=(m+b)*E,i[7]=0,i[8]=(_+M)*w,i[9]=(m-b)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=No.set(i[0],i[1],i[2]).length(),o=No.set(i[4],i[5],i[6]).length(),a=No.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Vi.copy(this);let c=1/r,h=1/o,f=1/a;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=f,Vi.elements[9]*=f,Vi.elements[10]*=f,e.setFromRotationMatrix(Vi),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=ns){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),u,_;if(a===ns)u=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===sl)u=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=ns){let l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(o-r),d=(e+t)*c,u=(n+i)*h,_,g;if(a===ns)_=(o+r)*f,g=-2*f;else if(a===sl)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},No=new G,Vi=new Ne,$S=new G(0,0,0),ZS=new G(1,1,1),Zs=new G,Bc=new G,di=new G,p_=new Ne,m_=new Di,os=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return p_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(p_,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return m_.setFromEuler(this),this.setFromQuaternion(m_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};os.DEFAULT_ORDER="XYZ";var $o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},JS=0,g_=new G,Oo=new Di,Ms=new Ne,kc=new G,Ka=new G,KS=new G,jS=new Di,__=new G(1,0,0),y_=new G(0,1,0),x_=new G(0,0,1),v_={type:"added"},QS={type:"removed"},Fo={type:"childadded",child:null},_f={type:"childremoved",child:null},Dn=class s extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=sa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new G,e=new os,n=new Di,i=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new te}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oo.setFromAxisAngle(t,e),this.quaternion.multiply(Oo),this}rotateOnWorldAxis(t,e){return Oo.setFromAxisAngle(t,e),this.quaternion.premultiply(Oo),this}rotateX(t){return this.rotateOnAxis(__,t)}rotateY(t){return this.rotateOnAxis(y_,t)}rotateZ(t){return this.rotateOnAxis(x_,t)}translateOnAxis(t,e){return g_.copy(t).applyQuaternion(this.quaternion),this.position.add(g_.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(__,t)}translateY(t){return this.translateOnAxis(y_,t)}translateZ(t){return this.translateOnAxis(x_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?kc.copy(t):kc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(Ka,kc,this.up):Ms.lookAt(kc,Ka,this.up),this.quaternion.setFromRotationMatrix(Ms),i&&(Ms.extractRotation(i.matrixWorld),Oo.setFromRotationMatrix(Ms),this.quaternion.premultiply(Oo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(v_),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(QS),_f.child=t,this.dispatchEvent(_f),_f.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(v_),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,t,KS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,jS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Dn.DEFAULT_UP=new G(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hi=new G,bs=new G,yf=new G,Ts=new G,Bo=new G,ko=new G,S_=new G,xf=new G,vf=new G,Sf=new G,Mf=new Ve,bf=new Ve,Tf=new Ve,js=class s{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Hi.subVectors(t,e),i.cross(Hi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Hi.subVectors(i,e),bs.subVectors(n,e),yf.subVectors(t,e);let o=Hi.dot(Hi),a=Hi.dot(bs),l=Hi.dot(yf),c=bs.dot(bs),h=bs.dot(yf),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-u-_,_,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ts.x),l.addScaledVector(o,Ts.y),l.addScaledVector(a,Ts.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Mf.setScalar(0),bf.setScalar(0),Tf.setScalar(0),Mf.fromBufferAttribute(t,e),bf.fromBufferAttribute(t,n),Tf.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Mf,r.x),o.addScaledVector(bf,r.y),o.addScaledVector(Tf,r.z),o}static isFrontFacing(t,e,n,i){return Hi.subVectors(n,e),bs.subVectors(t,e),Hi.cross(bs).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),Hi.cross(bs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Bo.subVectors(i,n),ko.subVectors(r,n),xf.subVectors(t,n);let l=Bo.dot(xf),c=ko.dot(xf);if(l<=0&&c<=0)return e.copy(n);vf.subVectors(t,i);let h=Bo.dot(vf),f=ko.dot(vf);if(h>=0&&f<=h)return e.copy(i);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Bo,o);Sf.subVectors(t,r);let u=Bo.dot(Sf),_=ko.dot(Sf);if(_>=0&&u<=_)return e.copy(r);let g=u*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ko,a);let m=h*_-u*f;if(m<=0&&f-h>=0&&u-_>=0)return S_.subVectors(r,i),a=(f-h)/(f-h+(u-_)),e.copy(i).addScaledVector(S_,a);let p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(Bo,o).addScaledVector(ko,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Js={h:0,s:0,l:0},zc={h:0,s:0,l:0};function wf(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var me=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=ip(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wf(o,r,t+1/3),this.g=wf(o,r,t),this.b=wf(o,r,t-1/3)}return pe.toWorkingColorSpace(this,i),this}setStyle(t,e=pi){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pi){let n=w0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}copyLinearToSRGB(t){return this.r=Wo(t.r),this.g=Wo(t.g),this.b=Wo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return pe.fromWorkingColorSpace(Pn.copy(this),t),Math.round(le(Pn.r*255,0,255))*65536+Math.round(le(Pn.g*255,0,255))*256+Math.round(le(Pn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Pn.copy(this),e);let n=Pn.r,i=Pn.g,r=Pn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Pn.copy(this),e),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=pi){pe.fromWorkingColorSpace(Pn.copy(this),t);let e=Pn.r,n=Pn.g,i=Pn.b;return t!==pi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Js),this.setHSL(Js.h+t,Js.s+e,Js.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Js),t.getHSL(zc);let n=el(Js.h,zc.h,e),i=el(Js.s,zc.s,e),r=el(Js.l,zc.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new me;me.NAMES=w0;var tM=0,ir=class extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=sa(),this.name="",this.type="Material",this.blending=Hr,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=eh,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(n.blending=this.blending),this.side!==Es&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==th&&(n.blendSrc=this.blendSrc),this.blendDst!==eh&&(n.blendDst=this.blendDst),this.blendEquation!==tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Yr=class extends ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=Xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var en=new G,Vc=new qt,eM=0,mi=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eM++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Nf,this.updateRanges=[],this.gpuType=ls,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vc.fromBufferAttribute(this,e),Vc.applyMatrix3(t),this.setXY(e,Vc.x,Vc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Go(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Go(e,this.array)),e}setX(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Go(e,this.array)),e}setY(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Go(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Go(e,this.array)),e}setW(t,e){return this.normalized&&(e=Yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Yn(e,this.array),n=Yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Yn(e,this.array),n=Yn(n,this.array),i=Yn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Yn(e,this.array),n=Yn(n,this.array),i=Yn(i,this.array),r=Yn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nf&&(t.usage=this.usage),t}};var al=class extends mi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ll=class extends mi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gi=class extends mi{constructor(t,e,n){super(new Float32Array(t),e,n)}},nM=0,Pi=new Ne,Ef=new Dn,zo=new G,fi=new er,ja=new er,pn=new G,Xi=class s extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=sa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sp(t)?ll:al)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,e,n){return Pi.makeTranslation(t,e,n),this.applyMatrix4(Pi),this}scale(t,e,n){return Pi.makeScale(t,e,n),this.applyMatrix4(Pi),this}lookAt(t){return Ef.lookAt(t),Ef.updateMatrix(),this.applyMatrix4(Ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zo).negate(),this.translate(zo.x,zo.y,zo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gi(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];fi.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ja.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(fi.min,ja.min),fi.expandByPoint(pn),pn.addVectors(fi.max,ja.max),fi.expandByPoint(pn)):(fi.expandByPoint(ja.min),fi.expandByPoint(ja.max))}fi.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)pn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(pn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)pn.fromBufferAttribute(a,c),l&&(zo.fromBufferAttribute(t,c),pn.add(zo)),i=Math.max(i,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new G,l[R]=new G;let c=new G,h=new G,f=new G,d=new qt,u=new qt,_=new qt,g=new G,m=new G;function p(R,v,x){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,v),f.fromBufferAttribute(n,x),d.fromBufferAttribute(r,R),u.fromBufferAttribute(r,v),_.fromBufferAttribute(r,x),h.sub(c),f.sub(c),u.sub(d),_.sub(d);let I=1/(u.x*_.y-_.x*u.y);isFinite(I)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(f,-u.y).multiplyScalar(I),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-_.x).multiplyScalar(I),a[R].add(g),a[v].add(g),a[x].add(g),l[R].add(m),l[v].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let R=0,v=b.length;R<v;++R){let x=b[R],I=x.start,U=x.count;for(let k=I,H=I+U;k<H;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let M=new G,y=new G,A=new G,E=new G;function w(R){A.fromBufferAttribute(i,R),E.copy(A);let v=a[R];M.copy(v),M.sub(A.multiplyScalar(A.dot(v))).normalize(),y.crossVectors(E,v);let I=y.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,I)}for(let R=0,v=b.length;R<v;++R){let x=b[R],I=x.start,U=x.count;for(let k=I,H=I+U;k<H;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new G,r=new G,o=new G,a=new G,l=new G,c=new G,h=new G,f=new G;if(t)for(let d=0,u=t.count;d<u;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),u=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?u=l[g]*a.data.stride+a.offset:u=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[u++]}return new mi(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},M_=new Ne,kr=new nr,Hc=new Xr,b_=new G,Gc=new G,Wc=new G,Xc=new G,Af=new G,Yc=new G,T_=new G,qc=new G,Oe=class extends Dn{constructor(t=new Xi,e=new Yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Yc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Af.fromBufferAttribute(f,t),o?Yc.addScaledVector(Af,h):Yc.addScaledVector(Af.sub(e),h))}e.add(Yc)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hc.copy(n.boundingSphere),Hc.applyMatrix4(r),kr.copy(t.ray).recast(t.near),!(Hc.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Hc,b_)===null||kr.origin.distanceToSquared(b_)>(t.far-t.near)**2))&&(M_.copy(r).invert(),kr.copy(t.ray).applyMatrix4(M_),!(n.boundingBox!==null&&kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,kr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],b=Math.max(m.start,u.start),M=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=b,A=M;y<A;y+=3){let E=a.getX(y),w=a.getX(y+1),R=a.getX(y+2);i=$c(this,p,t,n,c,h,f,E,w,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let m=_,p=g;m<p;m+=3){let b=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);i=$c(this,o,t,n,c,h,f,b,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],b=Math.max(m.start,u.start),M=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=b,A=M;y<A;y+=3){let E=y,w=y+1,R=y+2;i=$c(this,p,t,n,c,h,f,E,w,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let m=_,p=g;m<p;m+=3){let b=m,M=m+1,y=m+2;i=$c(this,o,t,n,c,h,f,b,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function iM(s,t,e,n,i,r,o,a){let l;if(t.side===qn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Es,a),l===null)return null;qc.copy(a),qc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(qc);return c<e.near||c>e.far?null:{distance:c,point:qc.clone(),object:s}}function $c(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Gc),s.getVertexPosition(l,Wc),s.getVertexPosition(c,Xc);let h=iM(s,t,e,n,Gc,Wc,Xc,T_);if(h){let f=new G;js.getBarycoord(T_,Gc,Wc,Xc,f),i&&(h.uv=js.getInterpolatedAttribute(i,a,l,c,f,new qt)),r&&(h.uv1=js.getInterpolatedAttribute(r,a,l,c,f,new qt)),o&&(h.normal=js.getInterpolatedAttribute(o,a,l,c,f,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new G,materialIndex:0};js.getNormal(Gc,Wc,Xc,d.normal),h.face=d,h.barycoord=f}return h}var Zo=class s extends Xi{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,u=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Gi(c,3)),this.setAttribute("normal",new Gi(h,3)),this.setAttribute("uv",new Gi(f,2));function _(g,m,p,b,M,y,A,E,w,R,v){let x=y/w,I=A/R,U=y/2,k=A/2,H=E/2,Y=w+1,V=R+1,Z=0,B=0,W=new G;for(let P=0;P<V;P++){let rt=P*I-k;for(let Dt=0;Dt<Y;Dt++){let Wt=Dt*x-U;W[g]=Wt*b,W[m]=rt*M,W[p]=H,c.push(W.x,W.y,W.z),W[g]=0,W[m]=0,W[p]=E>0?1:-1,h.push(W.x,W.y,W.z),f.push(Dt/w),f.push(1-P/R),Z+=1}}for(let P=0;P<R;P++)for(let rt=0;rt<w;rt++){let Dt=d+rt+Y*P,Wt=d+rt+Y*(P+1),q=d+(rt+1)+Y*(P+1),et=d+(rt+1)+Y*P;l.push(Dt,Wt,et),l.push(Wt,q,et),B+=6}a.addGroup(u,B,v),u+=B,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Jr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ln(s){let t={};for(let e=0;e<s.length;e++){let n=Jr(s[e]);for(let i in n)t[i]=n[i]}return t}function sM(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function rp(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var E0={clone:Jr,merge:Ln},rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yi=class extends ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jr(t.uniforms),this.uniformsGroups=sM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},cl=class extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=ns}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ks=new G,w_=new qt,E_=new qt,In=class extends cl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ks.x,Ks.y).multiplyScalar(-t/Ks.z),Ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ks.x,Ks.y).multiplyScalar(-t/Ks.z)}getViewSize(t,e){return this.getViewBounds(t,w_,E_),e.subVectors(E_,w_)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(tl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Vo=-90,Ho=1,lh=class extends Dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new In(Vo,Ho,t,e);i.layers=this.layers,this.add(i);let r=new In(Vo,Ho,t,e);r.layers=this.layers,this.add(r);let o=new In(Vo,Ho,t,e);o.layers=this.layers,this.add(o);let a=new In(Vo,Ho,t,e);a.layers=this.layers,this.add(a);let l=new In(Vo,Ho,t,e);l.layers=this.layers,this.add(l);let c=new In(Vo,Ho,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===ns)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===sl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},hl=class extends gi{constructor(t=[],e=$r,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ch=class extends rs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new hl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Wi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Zo(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:Jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qn,blending:As});r.uniforms.tEquirect.value=e;let o=new Oe(i,r),a=e.minFilter;return e.minFilter===lr&&(e.minFilter=Wi),new lh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},is=class extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},aM={type:"move"},Jo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,_=.005;c.inputState.pinching&&d>u+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new is;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ul=class extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Cf=new G,lM=new G,cM=new te,ei=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Cf.subVectors(n,e).cross(lM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Cf),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||cM.getNormalMatrix(t),i=this.coplanarPoint(Cf).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zr=new Xr,Zc=new G,Ko=class{constructor(t=new ei,e=new ei,n=new ei,i=new ei,r=new ei,o=new ei){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ns){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],u=i[8],_=i[9],g=i[10],m=i[11],p=i[12],b=i[13],M=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,m-u,y-p).normalize(),n[1].setComponents(l+r,d+c,m+u,y+p).normalize(),n[2].setComponents(l+o,d+h,m+_,y+b).normalize(),n[3].setComponents(l-o,d-h,m-_,y-b).normalize(),n[4].setComponents(l-a,d-f,m-g,y-M).normalize(),e===ns)n[5].setComponents(l+a,d+f,m+g,y+M).normalize();else if(e===sl)n[5].setComponents(a,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(t){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(t.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Zc.x=i.normal.x>0?t.max.x:t.min.x,Zc.y=i.normal.y>0?t.max.y:t.min.y,Zc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var jo=class extends ir{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},hh=new G,uh=new G,A_=new Ne,Qa=new nr,Jc=new Xr,Rf=new G,C_=new G,dl=class extends Dn{constructor(t=new Xi,e=new jo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)hh.fromBufferAttribute(e,i-1),uh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=hh.distanceTo(uh);t.setAttribute("lineDistance",new Gi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jc.copy(n.boundingSphere),Jc.applyMatrix4(i),Jc.radius+=r,t.ray.intersectsSphere(Jc)===!1)return;A_.copy(i).invert(),Qa.copy(t.ray).applyMatrix4(A_);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=u,m=_-1;g<m;g+=c){let p=h.getX(g),b=h.getX(g+1),M=Kc(this,t,Qa,l,p,b,g);M&&e.push(M)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(u),p=Kc(this,t,Qa,l,g,m,_-1);p&&e.push(p)}}else{let u=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=u,m=_-1;g<m;g+=c){let p=Kc(this,t,Qa,l,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){let g=Kc(this,t,Qa,l,_-1,u,_-1);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kc(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(hh.fromBufferAttribute(a,i),uh.fromBufferAttribute(a,r),e.distanceSqToSegment(hh,uh,Rf,C_)>n)return;Rf.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Rf);if(!(c<t.near||c>t.far))return{distance:c,point:C_.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var fl=class extends gi{constructor(t,e,n=cr,i,r,o,a=Ii,l=Ii,c,h=Xo){if(h!==Xo&&h!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}};var Sn=class s extends Xi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,d=e/l,u=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let b=p*d-o;for(let M=0;M<c;M++){let y=M*f-r;_.push(y,-b,0),g.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let M=b+c*p,y=b+c*(p+1),A=b+1+c*(p+1),E=b+1+c*p;u.push(M,y,E),u.push(y,A,E)}this.setIndex(u),this.setAttribute("position",new Gi(_,3)),this.setAttribute("normal",new Gi(g,3)),this.setAttribute("uv",new Gi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var dh=class extends ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fh=class extends ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function jc(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function hM(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var qr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ph=class extends qr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:If,endingEnd:If}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Df:r=t,a=2*e-n;break;case Lf:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Df:o=t,l=2*n-e;break;case Lf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,b=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,M=(-1-u)*m+(1.5+u)*g+.5*_,y=u*m-u*g;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+b*o[c+A]+M*o[l+A]+y*o[f+A];return r}},mh=class extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*f+o[l+d]*h;return r}},gh=class extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},_i=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jc(e,this.TimeBufferType),this.values=jc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:jc(t.times,Array),values:jc(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new gh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ph(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case nl:e=this.InterpolantFactoryMethodDiscrete;break;case sh:e=this.InterpolantFactoryMethodLinear;break;case Qc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nl;case this.InterpolantFactoryMethodLinear:return sh;case this.InterpolantFactoryMethodSmooth:return Qc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&hM(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,d=f-n,u=f+n;for(let _=0;_!==n;++_){let g=e[f+_];if(g!==e[d+_]||g!==e[u+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,d=o*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};_i.prototype.ValueTypeName="";_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=sh;var sr=class extends _i{constructor(t,e,n){super(t,e,n)}};sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=nl;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var _h=class extends _i{constructor(t,e,n,i){super(t,e,n,i)}};_h.prototype.ValueTypeName="color";var yh=class extends _i{constructor(t,e,n,i){super(t,e,n,i)}};yh.prototype.ValueTypeName="number";var xh=class extends qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Di.slerpFlat(r,0,o,c-a,o,c,l);return r}},pl=class extends _i{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new xh(this.times,this.values,this.getValueSize(),t)}};pl.prototype.ValueTypeName="quaternion";pl.prototype.InterpolantFactoryMethodSmooth=void 0;var rr=class extends _i{constructor(t,e,n){super(t,e,n)}};rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=nl;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var vh=class extends _i{constructor(t,e,n,i){super(t,e,n,i)}};vh.prototype.ValueTypeName="vector";var Sh=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],_=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return _}return null}}},A0=new Sh,Mh=class{constructor(t){this.manager=t!==void 0?t:A0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Mh.DEFAULT_MATERIAL_NAME="__DEFAULT";var ml=class extends Dn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new me(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Pf=new Ne,R_=new G,P_=new G,Of=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;R_.setFromMatrixPosition(t.matrixWorld),e.position.copy(R_),P_.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(P_),e.updateMatrixWorld(),Pf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pf),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var gl=class extends cl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ff=class extends Of{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_l=class extends ml{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new Ff}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},yl=class extends ml{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var bh=class extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var op="\\[\\]\\.:\\/",uM=new RegExp("["+op+"]","g"),ap="[^"+op+"]",dM="[^"+op.replace("\\.","")+"]",fM=/((?:WC+[\/:])*)/.source.replace("WC",ap),pM=/(WCOD+)?/.source.replace("WCOD",dM),mM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ap),gM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ap),_M=new RegExp("^"+fM+pM+mM+gM+"$"),yM=["material","materials","bones","map"],Bf=class{constructor(t,e,n){let i=n||De.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},De=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uM,"")}static parseTrackName(t){let e=_M.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);yM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=Bf;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H1=new Float32Array(1);var I_=new Ne,xl=class{constructor(t,e,n=0,i=1/0){this.ray=new nr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new $o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return I_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(I_),this}intersectObject(t,e=!0,n=[]){return kf(t,this,n,e),n.sort(D_),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)kf(t[i],this,n,e);return n.sort(D_),n}};function D_(s,t){return s.distance-t.distance}function kf(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)kf(r[o],t,e,!0)}}var Qo=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vl=class extends ss{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function lp(s,t,e,n){let i=xM(n);switch(e){case Jf:return s*t;case jf:return s*t/i.components*i.byteLength;case Bh:return s*t/i.components*i.byteLength;case Qf:return s*t*2/i.components*i.byteLength;case kh:return s*t*2/i.components*i.byteLength;case Kf:return s*t*3/i.components*i.byteLength;case Ui:return s*t*4/i.components*i.byteLength;case zh:return s*t*4/i.components*i.byteLength;case bl:case Tl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wl:case El:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hh:case Wh:return Math.max(s,16)*Math.max(t,8)/4;case Vh:case Gh:return Math.max(s,8)*Math.max(t,8)/2;case Xh:case Yh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case jh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case tu:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case eu:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case nu:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case iu:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case su:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ru:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ou:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case au:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Al:case lu:case cu:return Math.ceil(s/4)*Math.ceil(t/4)*16;case tp:case hu:return Math.ceil(s/4)*Math.ceil(t/4)*8;case uu:case du:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function xM(s){switch(s){case qi:case qf:return{byteLength:1,components:1};case ta:case $f:case ea:return{byteLength:2,components:1};case Oh:case Fh:return{byteLength:2,components:4};case cr:case Nh:case ls:return{byteLength:4,components:1};case Zf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);function K0(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function vM(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,a),f.length===0)s.bufferSubData(c,0,h);else{f.sort((u,_)=>u.start-_.start);let d=0;for(let u=1;u<f.length;u++){let _=f[d],g=f[u];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let u=0,_=f.length;u<_;u++){let g=f[u];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var SM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,CM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,PM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,WM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ab=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,db=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ab=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Db=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ub=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ob=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ST=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,PT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:SM,alphahash_pars_fragment:MM,alphamap_fragment:bM,alphamap_pars_fragment:TM,alphatest_fragment:wM,alphatest_pars_fragment:EM,aomap_fragment:AM,aomap_pars_fragment:CM,batching_pars_vertex:RM,batching_vertex:PM,begin_vertex:IM,beginnormal_vertex:DM,bsdfs:LM,iridescence_fragment:UM,bumpmap_pars_fragment:NM,clipping_planes_fragment:OM,clipping_planes_pars_fragment:FM,clipping_planes_pars_vertex:BM,clipping_planes_vertex:kM,color_fragment:zM,color_pars_fragment:VM,color_pars_vertex:HM,color_vertex:GM,common:WM,cube_uv_reflection_fragment:XM,defaultnormal_vertex:YM,displacementmap_pars_vertex:qM,displacementmap_vertex:$M,emissivemap_fragment:ZM,emissivemap_pars_fragment:JM,colorspace_fragment:KM,colorspace_pars_fragment:jM,envmap_fragment:QM,envmap_common_pars_fragment:tb,envmap_pars_fragment:eb,envmap_pars_vertex:nb,envmap_physical_pars_fragment:fb,envmap_vertex:ib,fog_vertex:sb,fog_pars_vertex:rb,fog_fragment:ob,fog_pars_fragment:ab,gradientmap_pars_fragment:lb,lightmap_pars_fragment:cb,lights_lambert_fragment:hb,lights_lambert_pars_fragment:ub,lights_pars_begin:db,lights_toon_fragment:pb,lights_toon_pars_fragment:mb,lights_phong_fragment:gb,lights_phong_pars_fragment:_b,lights_physical_fragment:yb,lights_physical_pars_fragment:xb,lights_fragment_begin:vb,lights_fragment_maps:Sb,lights_fragment_end:Mb,logdepthbuf_fragment:bb,logdepthbuf_pars_fragment:Tb,logdepthbuf_pars_vertex:wb,logdepthbuf_vertex:Eb,map_fragment:Ab,map_pars_fragment:Cb,map_particle_fragment:Rb,map_particle_pars_fragment:Pb,metalnessmap_fragment:Ib,metalnessmap_pars_fragment:Db,morphinstance_vertex:Lb,morphcolor_vertex:Ub,morphnormal_vertex:Nb,morphtarget_pars_vertex:Ob,morphtarget_vertex:Fb,normal_fragment_begin:Bb,normal_fragment_maps:kb,normal_pars_fragment:zb,normal_pars_vertex:Vb,normal_vertex:Hb,normalmap_pars_fragment:Gb,clearcoat_normal_fragment_begin:Wb,clearcoat_normal_fragment_maps:Xb,clearcoat_pars_fragment:Yb,iridescence_pars_fragment:qb,opaque_fragment:$b,packing:Zb,premultiplied_alpha_fragment:Jb,project_vertex:Kb,dithering_fragment:jb,dithering_pars_fragment:Qb,roughnessmap_fragment:tT,roughnessmap_pars_fragment:eT,shadowmap_pars_fragment:nT,shadowmap_pars_vertex:iT,shadowmap_vertex:sT,shadowmask_pars_fragment:rT,skinbase_vertex:oT,skinning_pars_vertex:aT,skinning_vertex:lT,skinnormal_vertex:cT,specularmap_fragment:hT,specularmap_pars_fragment:uT,tonemapping_fragment:dT,tonemapping_pars_fragment:fT,transmission_fragment:pT,transmission_pars_fragment:mT,uv_pars_fragment:gT,uv_pars_vertex:_T,uv_vertex:yT,worldpos_vertex:xT,background_vert:vT,background_frag:ST,backgroundCube_vert:MT,backgroundCube_frag:bT,cube_vert:TT,cube_frag:wT,depth_vert:ET,depth_frag:AT,distanceRGBA_vert:CT,distanceRGBA_frag:RT,equirect_vert:PT,equirect_frag:IT,linedashed_vert:DT,linedashed_frag:LT,meshbasic_vert:UT,meshbasic_frag:NT,meshlambert_vert:OT,meshlambert_frag:FT,meshmatcap_vert:BT,meshmatcap_frag:kT,meshnormal_vert:zT,meshnormal_frag:VT,meshphong_vert:HT,meshphong_frag:GT,meshphysical_vert:WT,meshphysical_frag:XT,meshtoon_vert:YT,meshtoon_frag:qT,points_vert:$T,points_frag:ZT,shadow_vert:JT,shadow_frag:KT,sprite_vert:jT,sprite_frag:QT},yt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},cs={basic:{uniforms:Ln([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Ln([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new me(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Ln([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Ln([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Ln([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new me(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Ln([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Ln([yt.points,yt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Ln([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Ln([yt.common,yt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Ln([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Ln([yt.sprite,yt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Ln([yt.common,yt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Ln([yt.lights,yt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};cs.physical={uniforms:Ln([cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var fu={r:0,b:0,g:0},Kr=new os,tw=new Ne;function ew(s,t,e,n,i,r,o){let a=new me(0),l=r===!0?0:1,c,h,f=null,d=0,u=null;function _(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function g(M){let y=!1,A=_(M);A===null?p(a,l):A&&A.isColor&&(p(A,1),y=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,y){let A=_(y);A&&(A.isCubeTexture||A.mapping===Sl)?(h===void 0&&(h=new Oe(new Zo(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Jr(cs.backgroundCube.uniforms),vertexShader:cs.backgroundCube.vertexShader,fragmentShader:cs.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Kr.copy(y.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tw.makeRotationFromEuler(Kr)),h.material.toneMapped=pe.getTransfer(A.colorSpace)!==Me,(f!==A||d!==A.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=A,d=A.version,u=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Oe(new Sn(2,2),new Yi({name:"BackgroundMaterial",uniforms:Jr(cs.background.uniforms),vertexShader:cs.background.vertexShader,fragmentShader:cs.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=pe.getTransfer(A.colorSpace)!==Me,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(fu,rp(s)),n.buffers.color.setClear(fu.r,fu.g,fu.b,y,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:g,addToRenderList:m,dispose:b}}function nw(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(x,I,U,k,H){let Y=!1,V=f(k,U,I);r!==V&&(r=V,c(r.object)),Y=u(x,k,U,H),Y&&_(x,k,U,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(x,I,U,k),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function f(x,I,U){let k=U.wireframe===!0,H=n[x.id];H===void 0&&(H={},n[x.id]=H);let Y=H[I.id];Y===void 0&&(Y={},H[I.id]=Y);let V=Y[k];return V===void 0&&(V=d(l()),Y[k]=V),V}function d(x){let I=[],U=[],k=[];for(let H=0;H<e;H++)I[H]=0,U[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:k,object:x,attributes:{},index:null}}function u(x,I,U,k){let H=r.attributes,Y=I.attributes,V=0,Z=U.getAttributes();for(let B in Z)if(Z[B].location>=0){let P=H[B],rt=Y[B];if(rt===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),P===void 0||P.attribute!==rt||rt&&P.data!==rt.data)return!0;V++}return r.attributesNum!==V||r.index!==k}function _(x,I,U,k){let H={},Y=I.attributes,V=0,Z=U.getAttributes();for(let B in Z)if(Z[B].location>=0){let P=Y[B];P===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(P=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(P=x.instanceColor));let rt={};rt.attribute=P,P&&P.data&&(rt.data=P.data),H[B]=rt,V++}r.attributes=H,r.attributesNum=V,r.index=k}function g(){let x=r.newAttributes;for(let I=0,U=x.length;I<U;I++)x[I]=0}function m(x){p(x,0)}function p(x,I){let U=r.newAttributes,k=r.enabledAttributes,H=r.attributeDivisors;U[x]=1,k[x]===0&&(s.enableVertexAttribArray(x),k[x]=1),H[x]!==I&&(s.vertexAttribDivisor(x,I),H[x]=I)}function b(){let x=r.newAttributes,I=r.enabledAttributes;for(let U=0,k=I.length;U<k;U++)I[U]!==x[U]&&(s.disableVertexAttribArray(U),I[U]=0)}function M(x,I,U,k,H,Y,V){V===!0?s.vertexAttribIPointer(x,I,U,H,Y):s.vertexAttribPointer(x,I,U,k,H,Y)}function y(x,I,U,k){g();let H=k.attributes,Y=U.getAttributes(),V=I.defaultAttributeValues;for(let Z in Y){let B=Y[Z];if(B.location>=0){let W=H[Z];if(W===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(W=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(W=x.instanceColor)),W!==void 0){let P=W.normalized,rt=W.itemSize,Dt=t.get(W);if(Dt===void 0)continue;let Wt=Dt.buffer,q=Dt.type,et=Dt.bytesPerElement,at=q===s.INT||q===s.UNSIGNED_INT||W.gpuType===Nh;if(W.isInterleavedBufferAttribute){let nt=W.data,St=nt.stride,Ut=W.offset;if(nt.isInstancedInterleavedBuffer){for(let bt=0;bt<B.locationSize;bt++)p(B.location+bt,nt.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let bt=0;bt<B.locationSize;bt++)m(B.location+bt);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let bt=0;bt<B.locationSize;bt++)M(B.location+bt,rt/B.locationSize,q,P,St*et,(Ut+rt/B.locationSize*bt)*et,at)}else{if(W.isInstancedBufferAttribute){for(let nt=0;nt<B.locationSize;nt++)p(B.location+nt,W.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let nt=0;nt<B.locationSize;nt++)m(B.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Wt);for(let nt=0;nt<B.locationSize;nt++)M(B.location+nt,rt/B.locationSize,q,P,rt*et,rt/B.locationSize*nt*et,at)}}else if(V!==void 0){let P=V[Z];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(B.location,P);break;case 3:s.vertexAttrib3fv(B.location,P);break;case 4:s.vertexAttrib4fv(B.location,P);break;default:s.vertexAttrib1fv(B.location,P)}}}}b()}function A(){R();for(let x in n){let I=n[x];for(let U in I){let k=I[U];for(let H in k)h(k[H].object),delete k[H];delete I[U]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;let I=n[x.id];for(let U in I){let k=I[U];for(let H in k)h(k[H].object),delete k[H];delete I[U]}delete n[x.id]}function w(x){for(let I in n){let U=n[I];if(U[x.id]===void 0)continue;let k=U[x.id];for(let H in k)h(k[H].object),delete k[H];delete U[x.id]}}function R(){v(),o=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:b}}function iw(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(s.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let _=0;_<f;_++)u+=h[_];e.update(u,n,1)}function l(c,h,f,d){if(f===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sw(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Ui&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let R=w===ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==qi&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ls&&!R)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:A,maxSamples:E}}function rw(s){let t=this,e=null,n=0,i=!1,r=!1,o=new ei,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,M=b*4,y=p.clippingState||null;l.value=y,y=h(_,d,M,u);for(let A=0;A!==M;++A)y[A]=e[A];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,_){let g=f!==null?f.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=u+g*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=u;M!==g;++M,y+=4)o.copy(f[M]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function ow(s){let t=new WeakMap;function e(o,a){return a===Dh?o.mapping=$r:a===Lh&&(o.mapping=Zr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Dh||a===Lh)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ch(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var oa=4,C0=[.125,.215,.35,.446,.526,.582],to=20,cp=new gl,R0=new me,hp=null,up=0,dp=0,fp=!1,Qr=(1+Math.sqrt(5))/2,ra=1/Qr,P0=[new G(-Qr,ra,0),new G(Qr,ra,0),new G(-ra,0,Qr),new G(ra,0,Qr),new G(0,Qr,-ra),new G(0,Qr,ra),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],aw=new G,gu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=aw}=r;hp=this._renderer.getRenderTarget(),up=this._renderer.getActiveCubeFace(),dp=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hp,up,dp),this._renderer.xr.enabled=fp,t.scissorTest=!1,pu(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$r||t.mapping===Zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hp=this._renderer.getRenderTarget(),up=this._renderer.getActiveCubeFace(),dp=this._renderer.getActiveMipmapLevel(),fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wi,minFilter:Wi,generateMipmaps:!1,type:ea,format:Ui,colorSpace:Wr,depthBuffer:!1},i=I0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=I0(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lw(r)),this._blurMaterial=cw(r,t,e)}return i}_compileMaterial(t){let e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,cp)}_sceneToCubeUV(t,e,n,i,r){let l=new In(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(R0),f.toneMapping=Cs,f.autoClear=!1;let _=new Yr({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),g=new Oe(new Zo,_),m=!1,p=t.background;p?p.isColor&&(_.color.copy(p),t.background=null,m=!0):(_.color.copy(R0),m=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let y=this._cubeSize;pu(i,M*y,b>2?y:0,y,y),f.setRenderTarget(i),m&&f.render(g,l),f.render(t,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=u,f.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===$r||t.mapping===Zr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=L0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D0());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;pu(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,cp)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=P0[(i-r-1)%P0.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Oe(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*to-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):to;m>to&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${to}`);let p=[],b=0;for(let w=0;w<to;++w){let R=w/g,v=Math.exp(-R*R/2);p.push(v),w===0?b+=v:w<m&&(b+=2*v)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;let y=this._sizeLods[i],A=3*y*(i>M-oa?i-M+oa:0),E=4*(this._cubeSize-y);pu(e,A,E,3*y,2*y),l.setRenderTarget(e),l.render(f,cp)}};function lw(s){let t=[],e=[],n=[],i=s,r=s-oa+1+C0.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-oa?l=C0[o-s+oa-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,_=6,g=3,m=2,p=1,b=new Float32Array(g*_*u),M=new Float32Array(m*_*u),y=new Float32Array(p*_*u);for(let E=0;E<u;E++){let w=E%3*2/3-1,R=E>2?0:-1,v=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];b.set(v,g*_*E),M.set(d,m*_*E);let x=[E,E,E,E,E,E];y.set(x,p*_*E)}let A=new Xi;A.setAttribute("position",new mi(b,g)),A.setAttribute("uv",new mi(M,m)),A.setAttribute("faceIndex",new mi(y,p)),t.push(A),i>oa&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function I0(s,t,e){let n=new rs(s,t,e);return n.texture.mapping=Sl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pu(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function cw(s,t,e){let n=new Float32Array(to),i=new G(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:to,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function D0(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function L0(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function bp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hw(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Dh||l===Lh,h=l===$r||l===Zr;if(c||h){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new gu(s)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&i(u)?(e===null&&(e=new gu(s)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function uw(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Cl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function dw(s,t,e,n){let i={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let u in d)t.update(d[u],s.ARRAY_BUFFER)}function c(f){let d=[],u=f.index,_=f.attributes.position,g=0;if(u!==null){let b=u.array;g=u.version;for(let M=0,y=b.length;M<y;M+=3){let A=b[M+0],E=b[M+1],w=b[M+2];d.push(A,E,E,w,w,A)}}else if(_!==void 0){let b=_.array;g=_.version;for(let M=0,y=b.length/3-1;M<y;M+=3){let A=M+0,E=M+1,w=M+2;d.push(A,E,E,w,w,A)}}else return;let m=new(sp(d)?ll:al)(d,1);m.version=g;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function fw(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,_){_!==0&&(s.drawElementsInstanced(n,u,r,d*o,_),e.update(u,n,_))}function h(d,u,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=u[p];e.update(m,n,1)}function f(d,u,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,u[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,g,0,_);let p=0;for(let b=0;b<_;b++)p+=u[b]*g[b];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function pw(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function mw(s,t,e){let n=new WeakMap,i=new Ve;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==f){let v=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let u=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;u===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let y=a.attributes.position.count*M,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*A*4*f),w=new ol(E,y,A,f);w.type=ls,w.needsUpdate=!0;let R=M*4;for(let x=0;x<f;x++){let I=m[x],U=p[x],k=b[x],H=y*A*4*x;for(let Y=0;Y<I.count;Y++){let V=Y*R;u===!0&&(i.fromBufferAttribute(I,Y),E[H+V+0]=i.x,E[H+V+1]=i.y,E[H+V+2]=i.z,E[H+V+3]=0),_===!0&&(i.fromBufferAttribute(U,Y),E[H+V+4]=i.x,E[H+V+5]=i.y,E[H+V+6]=i.z,E[H+V+7]=0),g===!0&&(i.fromBufferAttribute(k,Y),E[H+V+8]=i.x,E[H+V+9]=i.y,E[H+V+10]=i.z,E[H+V+11]=k.itemSize===4?i.w:1)}}d={count:f,texture:w,size:new qt(y,A)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let g=0;g<c.length;g++)u+=c[g];let _=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function gw(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var j0=new gi,U0=new fl(1,1),Q0=new ol,ty=new ah,ey=new hl,N0=[],O0=[],F0=new Float32Array(16),B0=new Float32Array(9),k0=new Float32Array(4);function la(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=N0[i];if(r===void 0&&(r=new Float32Array(i),N0[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function cn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function hn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function yu(s,t){let e=O0[t];e===void 0&&(e=new Int32Array(t),O0[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function _w(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function yw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;s.uniform2fv(this.addr,t),hn(e,t)}}function xw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(cn(e,t))return;s.uniform3fv(this.addr,t),hn(e,t)}}function vw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;s.uniform4fv(this.addr,t),hn(e,t)}}function Sw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;k0.set(n),s.uniformMatrix2fv(this.addr,!1,k0),hn(e,n)}}function Mw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;B0.set(n),s.uniformMatrix3fv(this.addr,!1,B0),hn(e,n)}}function bw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(cn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(cn(e,n))return;F0.set(n),s.uniformMatrix4fv(this.addr,!1,F0),hn(e,n)}}function Tw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ww(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;s.uniform2iv(this.addr,t),hn(e,t)}}function Ew(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;s.uniform3iv(this.addr,t),hn(e,t)}}function Aw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;s.uniform4iv(this.addr,t),hn(e,t)}}function Cw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Rw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(cn(e,t))return;s.uniform2uiv(this.addr,t),hn(e,t)}}function Pw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(cn(e,t))return;s.uniform3uiv(this.addr,t),hn(e,t)}}function Iw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(cn(e,t))return;s.uniform4uiv(this.addr,t),hn(e,t)}}function Dw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(U0.compareFunction=ep,r=U0):r=j0,e.setTexture2D(t||r,i)}function Lw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ty,i)}function Uw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ey,i)}function Nw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Q0,i)}function Ow(s){switch(s){case 5126:return _w;case 35664:return yw;case 35665:return xw;case 35666:return vw;case 35674:return Sw;case 35675:return Mw;case 35676:return bw;case 5124:case 35670:return Tw;case 35667:case 35671:return ww;case 35668:case 35672:return Ew;case 35669:case 35673:return Aw;case 5125:return Cw;case 36294:return Rw;case 36295:return Pw;case 36296:return Iw;case 35678:case 36198:case 36298:case 36306:case 35682:return Dw;case 35679:case 36299:case 36307:return Lw;case 35680:case 36300:case 36308:case 36293:return Uw;case 36289:case 36303:case 36311:case 36292:return Nw}}function Fw(s,t){s.uniform1fv(this.addr,t)}function Bw(s,t){let e=la(t,this.size,2);s.uniform2fv(this.addr,e)}function kw(s,t){let e=la(t,this.size,3);s.uniform3fv(this.addr,e)}function zw(s,t){let e=la(t,this.size,4);s.uniform4fv(this.addr,e)}function Vw(s,t){let e=la(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Hw(s,t){let e=la(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Gw(s,t){let e=la(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ww(s,t){s.uniform1iv(this.addr,t)}function Xw(s,t){s.uniform2iv(this.addr,t)}function Yw(s,t){s.uniform3iv(this.addr,t)}function qw(s,t){s.uniform4iv(this.addr,t)}function $w(s,t){s.uniform1uiv(this.addr,t)}function Zw(s,t){s.uniform2uiv(this.addr,t)}function Jw(s,t){s.uniform3uiv(this.addr,t)}function Kw(s,t){s.uniform4uiv(this.addr,t)}function jw(s,t,e){let n=this.cache,i=t.length,r=yu(e,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||j0,r[o])}function Qw(s,t,e){let n=this.cache,i=t.length,r=yu(e,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ty,r[o])}function tE(s,t,e){let n=this.cache,i=t.length,r=yu(e,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ey,r[o])}function eE(s,t,e){let n=this.cache,i=t.length,r=yu(e,i);cn(n,r)||(s.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Q0,r[o])}function nE(s){switch(s){case 5126:return Fw;case 35664:return Bw;case 35665:return kw;case 35666:return zw;case 35674:return Vw;case 35675:return Hw;case 35676:return Gw;case 5124:case 35670:return Ww;case 35667:case 35671:return Xw;case 35668:case 35672:return Yw;case 35669:case 35673:return qw;case 5125:return $w;case 36294:return Zw;case 36295:return Jw;case 36296:return Kw;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return Qw;case 35680:case 36300:case 36308:case 36293:return tE;case 36289:case 36303:case 36311:case 36292:return eE}}var mp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ow(e.type)}},gp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nE(e.type)}},_p=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},pp=/(\w+)(\])?(\[|\.)?/g;function z0(s,t){s.seq.push(t),s.map[t.id]=t}function iE(s,t,e){let n=s.name,i=n.length;for(pp.lastIndex=0;;){let r=pp.exec(n),o=pp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){z0(e,c===void 0?new mp(a,s,t):new gp(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new _p(a),z0(e,f)),e=f}}}var aa=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);iE(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function V0(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var sE=37297,rE=0;function oE(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var H0=new te;function aE(s){pe._getMatrix(H0,pe.workingColorSpace,s);let t=`mat3( ${H0.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(s)){case il:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function G0(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+oE(s.getShaderSource(t),o)}else return i}function lE(s,t){let e=aE(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cE(s,t){let e;switch(t){case n0:e="Linear";break;case i0:e="Reinhard";break;case s0:e="Cineon";break;case r0:e="ACESFilmic";break;case a0:e="AgX";break;case l0:e="Neutral";break;case o0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mu=new G;function hE(){pe.getLuminanceCoefficients(mu);let s=mu.x.toFixed(4),t=mu.y.toFixed(4),e=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rl).join(`
`)}function dE(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fE(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Rl(s){return s!==""}function W0(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function X0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pE=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(s){return s.replace(pE,gE)}var mE=new Map;function gE(s,t){let e=ne[t];if(e===void 0){let n=mE.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yp(e)}var _E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Y0(s){return s.replace(_E,yE)}function yE(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function q0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xE(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===N_?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===as&&(t="SHADOWMAP_TYPE_VSM"),t}function vE(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $r:case Zr:t="ENVMAP_TYPE_CUBE";break;case Sl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function SE(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zr:t="ENVMAP_MODE_REFRACTION";break}return t}function ME(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Xf:t="ENVMAP_BLENDING_MULTIPLY";break;case t0:t="ENVMAP_BLENDING_MIX";break;case e0:t="ENVMAP_BLENDING_ADD";break}return t}function bE(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function TE(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=xE(e),c=vE(e),h=SE(e),f=ME(e),d=bE(e),u=uE(e),_=dE(r),g=i.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rl).join(`
`),p.length>0&&(p+=`
`)):(m=[q0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rl).join(`
`),p=[q0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cs?"#define TONE_MAPPING":"",e.toneMapping!==Cs?ne.tonemapping_pars_fragment:"",e.toneMapping!==Cs?cE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,lE("linearToOutputTexel",e.outputColorSpace),hE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rl).join(`
`)),o=yp(o),o=W0(o,e),o=X0(o,e),a=yp(a),a=W0(a,e),a=X0(a,e),o=Y0(o),a=Y0(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===np?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=b+m+o,y=b+p+a,A=V0(i,i.VERTEX_SHADER,M),E=V0(i,i.FRAGMENT_SHADER,y);i.attachShader(g,A),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(I){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(g).trim(),k=i.getShaderInfoLog(A).trim(),H=i.getShaderInfoLog(E).trim(),Y=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,A,E);else{let Z=G0(i,A,"vertex"),B=G0(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+Z+`
`+B)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||H==="")&&(V=!1);V&&(I.diagnostics={runnable:Y,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(A),i.deleteShader(E),R=new aa(i,g),v=fE(i,g)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,sE)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rE++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=E,this}var wE=0,xp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vp(t),e.set(t,n)),n}},vp=class{constructor(t){this.id=wE++,this.code=t,this.usedTimes=0}};function EE(s,t,e,n,i,r,o){let a=new $o,l=new xp,c=new Set,h=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures,u=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,x,I,U,k){let H=U.fog,Y=k.geometry,V=v.isMeshStandardMaterial?U.environment:null,Z=(v.isMeshStandardMaterial?e:t).get(v.envMap||V),B=Z&&Z.mapping===Sl?Z.image.height:null,W=_[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let P=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,rt=P!==void 0?P.length:0,Dt=0;Y.morphAttributes.position!==void 0&&(Dt=1),Y.morphAttributes.normal!==void 0&&(Dt=2),Y.morphAttributes.color!==void 0&&(Dt=3);let Wt,q,et,at;if(W){let vt=cs[W];Wt=vt.vertexShader,q=vt.fragmentShader}else Wt=v.vertexShader,q=v.fragmentShader,l.update(v),et=l.getVertexShaderID(v),at=l.getFragmentShaderID(v);let nt=s.getRenderTarget(),St=s.state.buffers.depth.getReversed(),Ut=k.isInstancedMesh===!0,bt=k.isBatchedMesh===!0,Xt=!!v.map,Ht=!!v.matcap,ct=!!Z,D=!!v.aoMap,ie=!!v.lightMap,Pt=!!v.bumpMap,O=!!v.normalMap,xt=!!v.displacementMap,$t=!!v.emissiveMap,pt=!!v.metalnessMap,C=!!v.roughnessMap,S=v.anisotropy>0,z=v.clearcoat>0,K=v.dispersion>0,Q=v.iridescence>0,j=v.sheen>0,ht=v.transmission>0,ot=S&&!!v.anisotropyMap,Et=z&&!!v.clearcoatMap,Nt=z&&!!v.clearcoatNormalMap,st=z&&!!v.clearcoatRoughnessMap,lt=Q&&!!v.iridescenceMap,Ct=Q&&!!v.iridescenceThicknessMap,Ot=j&&!!v.sheenColorMap,_t=j&&!!v.sheenRoughnessMap,Tt=!!v.specularMap,At=!!v.specularColorMap,ue=!!v.specularIntensityMap,L=ht&&!!v.transmissionMap,dt=ht&&!!v.thicknessMap,J=!!v.gradientMap,tt=!!v.alphaMap,ut=v.alphaTest>0,ft=!!v.alphaHash,Gt=!!v.extensions,ge=Cs;v.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ge=s.toneMapping);let He={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:Wt,fragmentShader:q,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:bt,batchingColor:bt&&k._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&k.instanceColor!==null,instancingMorph:Ut&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Wr,alphaToCoverage:!!v.alphaToCoverage,map:Xt,matcap:Ht,envMap:ct,envMapMode:ct&&Z.mapping,envMapCubeUVHeight:B,aoMap:D,lightMap:ie,bumpMap:Pt,normalMap:O,displacementMap:d&&xt,emissiveMap:$t,normalMapObjectSpace:O&&v.normalMapType===f0,normalMapTangentSpace:O&&v.normalMapType===d0,metalnessMap:pt,roughnessMap:C,anisotropy:S,anisotropyMap:ot,clearcoat:z,clearcoatMap:Et,clearcoatNormalMap:Nt,clearcoatRoughnessMap:st,dispersion:K,iridescence:Q,iridescenceMap:lt,iridescenceThicknessMap:Ct,sheen:j,sheenColorMap:Ot,sheenRoughnessMap:_t,specularMap:Tt,specularColorMap:At,specularIntensityMap:ue,transmission:ht,transmissionMap:L,thicknessMap:dt,gradientMap:J,opaque:v.transparent===!1&&v.blending===Hr&&v.alphaToCoverage===!1,alphaMap:tt,alphaTest:ut,alphaHash:ft,combine:v.combine,mapUv:Xt&&g(v.map.channel),aoMapUv:D&&g(v.aoMap.channel),lightMapUv:ie&&g(v.lightMap.channel),bumpMapUv:Pt&&g(v.bumpMap.channel),normalMapUv:O&&g(v.normalMap.channel),displacementMapUv:xt&&g(v.displacementMap.channel),emissiveMapUv:$t&&g(v.emissiveMap.channel),metalnessMapUv:pt&&g(v.metalnessMap.channel),roughnessMapUv:C&&g(v.roughnessMap.channel),anisotropyMapUv:ot&&g(v.anisotropyMap.channel),clearcoatMapUv:Et&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(v.sheenRoughnessMap.channel),specularMapUv:Tt&&g(v.specularMap.channel),specularColorMapUv:At&&g(v.specularColorMap.channel),specularIntensityMapUv:ue&&g(v.specularIntensityMap.channel),transmissionMapUv:L&&g(v.transmissionMap.channel),thicknessMapUv:dt&&g(v.thicknessMap.channel),alphaMapUv:tt&&g(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(O||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(Xt||tt),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:St,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Dt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ge,decodeVideoTexture:Xt&&v.map.isVideoTexture===!0&&pe.getTransfer(v.map.colorSpace)===Me,decodeVideoTextureEmissive:$t&&v.emissiveMap.isVideoTexture===!0&&pe.getTransfer(v.emissiveMap.colorSpace)===Me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Li,flipSided:v.side===qn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Gt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&v.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function p(v){let x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)x.push(I),x.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(b(x,v),M(x,v),x.push(s.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function b(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function M(v,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),v.push(a.mask)}function y(v){let x=_[v.type],I;if(x){let U=cs[x];I=E0.clone(U.uniforms)}else I=v.uniforms;return I}function A(v,x){let I;for(let U=0,k=h.length;U<k;U++){let H=h[U];if(H.cacheKey===x){I=H,++I.usedTimes;break}}return I===void 0&&(I=new TE(s,x,v,r),h.push(I)),I}function E(v){if(--v.usedTimes===0){let x=h.indexOf(v);h[x]=h[h.length-1],h.pop(),v.destroy()}}function w(v){l.remove(v)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:R}}function AE(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function CE(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function $0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Z0(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f,d,u,_,g,m){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},s[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),t++,p}function a(f,d,u,_,g,m){let p=o(f,d,u,_,g,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function l(f,d,u,_,g,m){let p=o(f,d,u,_,g,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||CE),n.length>1&&n.sort(d||$0),i.length>1&&i.sort(d||$0)}function h(){for(let f=t,d=s.length;f<d;f++){let u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function RE(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Z0,s.set(n,[o])):i>=r.length?(o=new Z0,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function PE(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new me};break;case"SpotLight":e={position:new G,direction:new G,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new me,groundColor:new me};break;case"RectAreaLight":e={color:new me,position:new G,halfWidth:new G,halfHeight:new G};break}return s[t.id]=e,e}}}function IE(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var DE=0;function LE(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function UE(s){let t=new PE,e=IE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let i=new G,r=new Ne,o=new Ne;function a(c){let h=0,f=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let u=0,_=0,g=0,m=0,p=0,b=0,M=0,y=0,A=0,E=0,w=0;c.sort(LE);for(let v=0,x=c.length;v<x;v++){let I=c[v],U=I.color,k=I.intensity,H=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=U.r*k,f+=U.g*k,d+=U.b*k;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],k);w++}else if(I.isDirectionalLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,B=e.get(I);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,n.directionalShadow[u]=B,n.directionalShadowMap[u]=Y,n.directionalShadowMatrix[u]=I.shadow.matrix,b++}n.directional[u]=V,u++}else if(I.isSpotLight){let V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(U).multiplyScalar(k),V.distance=H,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[g]=V;let Z=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,Z.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[g]=Z.matrix,I.castShadow){let B=e.get(I);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=Y,y++}g++}else if(I.isRectAreaLight){let V=t.get(I);V.color.copy(U).multiplyScalar(k),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=V,m++}else if(I.isPointLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let Z=I.shadow,B=e.get(I);B.shadowIntensity=Z.intensity,B.shadowBias=Z.bias,B.shadowNormalBias=Z.normalBias,B.shadowRadius=Z.radius,B.shadowMapSize=Z.mapSize,B.shadowCameraNear=Z.camera.near,B.shadowCameraFar=Z.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=I.shadow.matrix,M++}n.point[_]=V,_++}else if(I.isHemisphereLight){let V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(k),V.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[p]=V,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==u||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==b||R.numPointShadows!==M||R.numSpotShadows!==y||R.numSpotMaps!==A||R.numLightProbes!==w)&&(n.directional.length=u,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,R.directionalLength=u,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=b,R.numPointShadows=M,R.numSpotShadows=y,R.numSpotMaps=A,R.numLightProbes=w,n.version=DE++)}function l(c,h){let f=0,d=0,u=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let M=c[p];if(M.isDirectionalLight){let y=n.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(M.isSpotLight){let y=n.spot[u];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(M.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function J0(s){let t=new UE(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function NE(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new J0(s),t.set(i,[a])):r>=o.length?(a=new J0(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var OE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BE(s,t,e){let n=new Ko,i=new qt,r=new qt,o=new Ve,a=new dh({depthPacking:u0}),l=new fh,c={},h=e.maxTextureSize,f={[Es]:qn,[qn]:Es,[Li]:Li},d=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:OE,fragmentShader:FE}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let _=new Xi;_.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Oe(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vf;let p=this.type;this.render=function(E,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let v=s.getRenderTarget(),x=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),U=s.state;U.setBlending(As),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=p!==as&&this.type===as,H=p===as&&this.type!==as;for(let Y=0,V=E.length;Y<V;Y++){let Z=E[Y],B=Z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let W=B.getFrameExtents();if(i.multiply(W),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,B.mapSize.y=r.y)),B.map===null||k===!0||H===!0){let rt=this.type!==as?{minFilter:Ii,magFilter:Ii}:{};B.map!==null&&B.map.dispose(),B.map=new rs(i.x,i.y,rt),B.map.texture.name=Z.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();let P=B.getViewportCount();for(let rt=0;rt<P;rt++){let Dt=B.getViewport(rt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),U.viewport(o),B.updateMatrices(Z,rt),n=B.getFrustum(),y(w,R,B.camera,Z,this.type)}B.isPointLightShadow!==!0&&this.type===as&&b(B,R),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,x,I)};function b(E,w){let R=t.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new rs(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(w,null,R,d,g,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(w,null,R,u,g,null)}function M(E,w,R,v){let x=null,I=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)x=I;else if(x=R.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let U=x.uuid,k=w.uuid,H=c[U];H===void 0&&(H={},c[U]=H);let Y=H[k];Y===void 0&&(Y=x.clone(),H[k]=Y,w.addEventListener("dispose",A)),x=Y}if(x.visible=w.visible,x.wireframe=w.wireframe,v===as?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let U=s.properties.get(x);U.light=R}return x}function y(E,w,R,v,x){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===as)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let k=t.update(E),H=E.material;if(Array.isArray(H)){let Y=k.groups;for(let V=0,Z=Y.length;V<Z;V++){let B=Y[V],W=H[B.materialIndex];if(W&&W.visible){let P=M(E,W,v,x);E.onBeforeShadow(s,E,w,R,k,P,B),s.renderBufferDirect(R,null,k,P,E,B),E.onAfterShadow(s,E,w,R,k,P,B)}}}else if(H.visible){let Y=M(E,H,v,x);E.onBeforeShadow(s,E,w,R,k,Y,null),s.renderBufferDirect(R,null,k,Y,E,null),E.onAfterShadow(s,E,w,R,k,Y,null)}}let U=E.children;for(let k=0,H=U.length;k<H;k++)y(U[k],w,R,v,x)}function A(E){E.target.removeEventListener("dispose",A);for(let R in c){let v=c[R],x=E.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}var kE={[wh]:Eh,[Ah]:Ph,[Ch]:Ih,[Gr]:Rh,[Eh]:wh,[Ph]:Ah,[Ih]:Ch,[Rh]:Gr};function zE(s,t){function e(){let L=!1,dt=new Ve,J=null,tt=new Ve(0,0,0,0);return{setMask:function(ut){J!==ut&&!L&&(s.colorMask(ut,ut,ut,ut),J=ut)},setLocked:function(ut){L=ut},setClear:function(ut,ft,Gt,ge,He){He===!0&&(ut*=ge,ft*=ge,Gt*=ge),dt.set(ut,ft,Gt,ge),tt.equals(dt)===!1&&(s.clearColor(ut,ft,Gt,ge),tt.copy(dt))},reset:function(){L=!1,J=null,tt.set(-1,0,0,0)}}}function n(){let L=!1,dt=!1,J=null,tt=null,ut=null;return{setReversed:function(ft){if(dt!==ft){let Gt=t.get("EXT_clip_control");ft?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),dt=ft;let ge=ut;ut=null,this.setClear(ge)}},getReversed:function(){return dt},setTest:function(ft){ft?nt(s.DEPTH_TEST):St(s.DEPTH_TEST)},setMask:function(ft){J!==ft&&!L&&(s.depthMask(ft),J=ft)},setFunc:function(ft){if(dt&&(ft=kE[ft]),tt!==ft){switch(ft){case wh:s.depthFunc(s.NEVER);break;case Eh:s.depthFunc(s.ALWAYS);break;case Ah:s.depthFunc(s.LESS);break;case Gr:s.depthFunc(s.LEQUAL);break;case Ch:s.depthFunc(s.EQUAL);break;case Rh:s.depthFunc(s.GEQUAL);break;case Ph:s.depthFunc(s.GREATER);break;case Ih:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=ft}},setLocked:function(ft){L=ft},setClear:function(ft){ut!==ft&&(dt&&(ft=1-ft),s.clearDepth(ft),ut=ft)},reset:function(){L=!1,J=null,tt=null,ut=null,dt=!1}}}function i(){let L=!1,dt=null,J=null,tt=null,ut=null,ft=null,Gt=null,ge=null,He=null;return{setTest:function(vt){L||(vt?nt(s.STENCIL_TEST):St(s.STENCIL_TEST))},setMask:function(vt){dt!==vt&&!L&&(s.stencilMask(vt),dt=vt)},setFunc:function(vt,It,ee){(J!==vt||tt!==It||ut!==ee)&&(s.stencilFunc(vt,It,ee),J=vt,tt=It,ut=ee)},setOp:function(vt,It,ee){(ft!==vt||Gt!==It||ge!==ee)&&(s.stencilOp(vt,It,ee),ft=vt,Gt=It,ge=ee)},setLocked:function(vt){L=vt},setClear:function(vt){He!==vt&&(s.clearStencil(vt),He=vt)},reset:function(){L=!1,dt=null,J=null,tt=null,ut=null,ft=null,Gt=null,ge=null,He=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},d=new WeakMap,u=[],_=null,g=!1,m=null,p=null,b=null,M=null,y=null,A=null,E=null,w=new me(0,0,0),R=0,v=!1,x=null,I=null,U=null,k=null,H=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Z=0,B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=Z>=1):B.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=Z>=2);let W=null,P={},rt=s.getParameter(s.SCISSOR_BOX),Dt=s.getParameter(s.VIEWPORT),Wt=new Ve().fromArray(rt),q=new Ve().fromArray(Dt);function et(L,dt,J,tt){let ut=new Uint8Array(4),ft=s.createTexture();s.bindTexture(L,ft),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<J;Gt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(dt+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return ft}let at={};at[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(s.DEPTH_TEST),o.setFunc(Gr),Pt(!1),O(zf),nt(s.CULL_FACE),D(As);function nt(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function St(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Ut(L,dt){return f[L]!==dt?(s.bindFramebuffer(L,dt),f[L]=dt,L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=dt),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function bt(L,dt){let J=u,tt=!1;if(L){J=d.get(dt),J===void 0&&(J=[],d.set(dt,J));let ut=L.textures;if(J.length!==ut.length||J[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Gt=ut.length;ft<Gt;ft++)J[ft]=s.COLOR_ATTACHMENT0+ft;J.length=ut.length,tt=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,tt=!0);tt&&s.drawBuffers(J)}function Xt(L){return _!==L?(s.useProgram(L),_=L,!0):!1}let Ht={[tr]:s.FUNC_ADD,[F_]:s.FUNC_SUBTRACT,[B_]:s.FUNC_REVERSE_SUBTRACT};Ht[k_]=s.MIN,Ht[z_]=s.MAX;let ct={[V_]:s.ZERO,[H_]:s.ONE,[G_]:s.SRC_COLOR,[th]:s.SRC_ALPHA,[Z_]:s.SRC_ALPHA_SATURATE,[q_]:s.DST_COLOR,[X_]:s.DST_ALPHA,[W_]:s.ONE_MINUS_SRC_COLOR,[eh]:s.ONE_MINUS_SRC_ALPHA,[$_]:s.ONE_MINUS_DST_COLOR,[Y_]:s.ONE_MINUS_DST_ALPHA,[J_]:s.CONSTANT_COLOR,[K_]:s.ONE_MINUS_CONSTANT_COLOR,[j_]:s.CONSTANT_ALPHA,[Q_]:s.ONE_MINUS_CONSTANT_ALPHA};function D(L,dt,J,tt,ut,ft,Gt,ge,He,vt){if(L===As){g===!0&&(St(s.BLEND),g=!1);return}if(g===!1&&(nt(s.BLEND),g=!0),L!==O_){if(L!==m||vt!==v){if((p!==tr||y!==tr)&&(s.blendEquation(s.FUNC_ADD),p=tr,y=tr),vt)switch(L){case Hr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hf:s.blendFunc(s.ONE,s.ONE);break;case Gf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Hr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Gf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,M=null,A=null,E=null,w.set(0,0,0),R=0,m=L,v=vt}return}ut=ut||dt,ft=ft||J,Gt=Gt||tt,(dt!==p||ut!==y)&&(s.blendEquationSeparate(Ht[dt],Ht[ut]),p=dt,y=ut),(J!==b||tt!==M||ft!==A||Gt!==E)&&(s.blendFuncSeparate(ct[J],ct[tt],ct[ft],ct[Gt]),b=J,M=tt,A=ft,E=Gt),(ge.equals(w)===!1||He!==R)&&(s.blendColor(ge.r,ge.g,ge.b,He),w.copy(ge),R=He),m=L,v=!1}function ie(L,dt){L.side===Li?St(s.CULL_FACE):nt(s.CULL_FACE);let J=L.side===qn;dt&&(J=!J),Pt(J),L.blending===Hr&&L.transparent===!1?D(As):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let tt=L.stencilWrite;a.setTest(tt),tt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),$t(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):St(s.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(L){x!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),x=L)}function O(L){L!==L_?(nt(s.CULL_FACE),L!==I&&(L===zf?s.cullFace(s.BACK):L===U_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):St(s.CULL_FACE),I=L}function xt(L){L!==U&&(V&&s.lineWidth(L),U=L)}function $t(L,dt,J){L?(nt(s.POLYGON_OFFSET_FILL),(k!==dt||H!==J)&&(s.polygonOffset(dt,J),k=dt,H=J)):St(s.POLYGON_OFFSET_FILL)}function pt(L){L?nt(s.SCISSOR_TEST):St(s.SCISSOR_TEST)}function C(L){L===void 0&&(L=s.TEXTURE0+Y-1),W!==L&&(s.activeTexture(L),W=L)}function S(L,dt,J){J===void 0&&(W===null?J=s.TEXTURE0+Y-1:J=W);let tt=P[J];tt===void 0&&(tt={type:void 0,texture:void 0},P[J]=tt),(tt.type!==L||tt.texture!==dt)&&(W!==J&&(s.activeTexture(J),W=J),s.bindTexture(L,dt||at[L]),tt.type=L,tt.texture=dt)}function z(){let L=P[W];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{s.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{s.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{s.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{s.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{s.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{s.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{s.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{s.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{s.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(L){Wt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Wt.copy(L))}function _t(L){q.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function Tt(L,dt){let J=c.get(dt);J===void 0&&(J=new WeakMap,c.set(dt,J));let tt=J.get(L);tt===void 0&&(tt=s.getUniformBlockIndex(dt,L.name),J.set(L,tt))}function At(L,dt){let tt=c.get(dt).get(L);l.get(dt)!==tt&&(s.uniformBlockBinding(dt,tt,L.__bindingPointIndex),l.set(dt,tt))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},W=null,P={},f={},d=new WeakMap,u=[],_=null,g=!1,m=null,p=null,b=null,M=null,y=null,A=null,E=null,w=new me(0,0,0),R=0,v=!1,x=null,I=null,U=null,k=null,H=null,Wt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:St,bindFramebuffer:Ut,drawBuffers:bt,useProgram:Xt,setBlending:D,setMaterial:ie,setFlipSided:Pt,setCullFace:O,setLineWidth:xt,setPolygonOffset:$t,setScissorTest:pt,activeTexture:C,bindTexture:S,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:lt,texImage3D:Ct,updateUBOMapping:Tt,uniformBlockBinding:At,texStorage2D:Nt,texStorage3D:st,texSubImage2D:j,texSubImage3D:ht,compressedTexSubImage2D:ot,compressedTexSubImage3D:Et,scissor:Ot,viewport:_t,reset:ue}}function VE(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return u?new OffscreenCanvas(C,S):rl("canvas")}function g(C,S,z){let K=1,Q=pt(C);if((Q.width>z||Q.height>z)&&(K=z/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let j=Math.floor(K*Q.width),ht=Math.floor(K*Q.height);f===void 0&&(f=_(j,ht));let ot=S?_(j,ht):f;return ot.width=j,ot.height=ht,ot.getContext("2d").drawImage(C,0,0,j,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+ht+")."),ot}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(C,S,z,K,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=S;if(S===s.RED&&(z===s.FLOAT&&(j=s.R32F),z===s.HALF_FLOAT&&(j=s.R16F),z===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.R8UI),z===s.UNSIGNED_SHORT&&(j=s.R16UI),z===s.UNSIGNED_INT&&(j=s.R32UI),z===s.BYTE&&(j=s.R8I),z===s.SHORT&&(j=s.R16I),z===s.INT&&(j=s.R32I)),S===s.RG&&(z===s.FLOAT&&(j=s.RG32F),z===s.HALF_FLOAT&&(j=s.RG16F),z===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RG8UI),z===s.UNSIGNED_SHORT&&(j=s.RG16UI),z===s.UNSIGNED_INT&&(j=s.RG32UI),z===s.BYTE&&(j=s.RG8I),z===s.SHORT&&(j=s.RG16I),z===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RGB8UI),z===s.UNSIGNED_SHORT&&(j=s.RGB16UI),z===s.UNSIGNED_INT&&(j=s.RGB32UI),z===s.BYTE&&(j=s.RGB8I),z===s.SHORT&&(j=s.RGB16I),z===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),z===s.UNSIGNED_INT&&(j=s.RGBA32UI),z===s.BYTE&&(j=s.RGBA8I),z===s.SHORT&&(j=s.RGBA16I),z===s.INT&&(j=s.RGBA32I)),S===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),S===s.RGBA){let ht=Q?il:pe.getTransfer(K);z===s.FLOAT&&(j=s.RGBA32F),z===s.HALF_FLOAT&&(j=s.RGBA16F),z===s.UNSIGNED_BYTE&&(j=ht===Me?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(C,S){let z;return C?S===null||S===cr||S===na?z=s.DEPTH24_STENCIL8:S===ls?z=s.DEPTH32F_STENCIL8:S===ta&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===cr||S===na?z=s.DEPTH_COMPONENT24:S===ls?z=s.DEPTH_COMPONENT32F:S===ta&&(z=s.DEPTH_COMPONENT16),z}function A(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ii&&C.minFilter!==Wi?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function E(C){let S=C.target;S.removeEventListener("dispose",E),R(S),S.isVideoTexture&&h.delete(S)}function w(C){let S=C.target;S.removeEventListener("dispose",w),x(S)}function R(C){let S=n.get(C);if(S.__webglInit===void 0)return;let z=C.source,K=d.get(z);if(K){let Q=K[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(C),Object.keys(K).length===0&&d.delete(z)}n.remove(C)}function v(C){let S=n.get(C);s.deleteTexture(S.__webglTexture);let z=C.source,K=d.get(z);delete K[S.__cacheKey],o.memory.textures--}function x(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let Q=0;Q<S.__webglFramebuffer[K].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[K][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)s.deleteFramebuffer(S.__webglFramebuffer[K]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let z=C.textures;for(let K=0,Q=z.length;K<Q;K++){let j=n.get(z[K]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(C)}let I=0;function U(){I=0}function k(){let C=I;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),I+=1,C}function H(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Y(C,S){let z=n.get(C);if(C.isVideoTexture&&xt(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){let K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,C,S);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function V(C,S){let z=n.get(C);if(C.version>0&&z.__version!==C.version){q(z,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function Z(C,S){let z=n.get(C);if(C.version>0&&z.__version!==C.version){q(z,C,S);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function B(C,S){let z=n.get(C);if(C.version>0&&z.__version!==C.version){et(z,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}let W={[nh]:s.REPEAT,[Qs]:s.CLAMP_TO_EDGE,[ih]:s.MIRRORED_REPEAT},P={[Ii]:s.NEAREST,[c0]:s.NEAREST_MIPMAP_NEAREST,[Ml]:s.NEAREST_MIPMAP_LINEAR,[Wi]:s.LINEAR,[Uh]:s.LINEAR_MIPMAP_NEAREST,[lr]:s.LINEAR_MIPMAP_LINEAR},rt={[p0]:s.NEVER,[v0]:s.ALWAYS,[m0]:s.LESS,[ep]:s.LEQUAL,[g0]:s.EQUAL,[x0]:s.GEQUAL,[_0]:s.GREATER,[y0]:s.NOTEQUAL};function Dt(C,S){if(S.type===ls&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Wi||S.magFilter===Uh||S.magFilter===Ml||S.magFilter===lr||S.minFilter===Wi||S.minFilter===Uh||S.minFilter===Ml||S.minFilter===lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,W[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,W[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,W[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,P[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,P[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ii||S.minFilter!==Ml&&S.minFilter!==lr||S.type===ls&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Wt(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",E));let K=S.source,Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));let j=H(S);if(j!==C.__cacheKey){Q[j]===void 0&&(Q[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[j].usedTimes++;let ht=Q[C.__cacheKey];ht!==void 0&&(Q[C.__cacheKey].usedTimes--,ht.usedTimes===0&&v(S)),C.__cacheKey=j,C.__webglTexture=Q[j].texture}return z}function q(C,S,z){let K=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=s.TEXTURE_3D);let Q=Wt(C,S),j=S.source;e.bindTexture(K,C.__webglTexture,s.TEXTURE0+z);let ht=n.get(j);if(j.version!==ht.__version||Q===!0){e.activeTexture(s.TEXTURE0+z);let ot=pe.getPrimaries(pe.workingColorSpace),Et=S.colorSpace===Rs?null:pe.getPrimaries(S.colorSpace),Nt=S.colorSpace===Rs||ot===Et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let st=g(S.image,!1,i.maxTextureSize);st=$t(S,st);let lt=r.convert(S.format,S.colorSpace),Ct=r.convert(S.type),Ot=M(S.internalFormat,lt,Ct,S.colorSpace,S.isVideoTexture);Dt(K,S);let _t,Tt=S.mipmaps,At=S.isVideoTexture!==!0,ue=ht.__version===void 0||Q===!0,L=j.dataReady,dt=A(S,st);if(S.isDepthTexture)Ot=y(S.format===ia,S.type),ue&&(At?e.texStorage2D(s.TEXTURE_2D,1,Ot,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Ot,st.width,st.height,0,lt,Ct,null));else if(S.isDataTexture)if(Tt.length>0){At&&ue&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,Tt[0].width,Tt[0].height);for(let J=0,tt=Tt.length;J<tt;J++)_t=Tt[J],At?L&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,_t.width,_t.height,lt,Ct,_t.data):e.texImage2D(s.TEXTURE_2D,J,Ot,_t.width,_t.height,0,lt,Ct,_t.data);S.generateMipmaps=!1}else At?(ue&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,st.width,st.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,lt,Ct,st.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,st.width,st.height,0,lt,Ct,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){At&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ot,Tt[0].width,Tt[0].height,st.depth);for(let J=0,tt=Tt.length;J<tt;J++)if(_t=Tt[J],S.format!==Ui)if(lt!==null)if(At){if(L)if(S.layerUpdates.size>0){let ut=lp(_t.width,_t.height,S.format,S.type);for(let ft of S.layerUpdates){let Gt=_t.data.subarray(ft*ut/_t.data.BYTES_PER_ELEMENT,(ft+1)*ut/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,ft,_t.width,_t.height,1,lt,Gt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,_t.width,_t.height,st.depth,lt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Ot,_t.width,_t.height,st.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else At?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,_t.width,_t.height,st.depth,lt,Ct,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,J,Ot,_t.width,_t.height,st.depth,0,lt,Ct,_t.data)}else{At&&ue&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,Tt[0].width,Tt[0].height);for(let J=0,tt=Tt.length;J<tt;J++)_t=Tt[J],S.format!==Ui?lt!==null?At?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,_t.width,_t.height,lt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,J,Ot,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?L&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,_t.width,_t.height,lt,Ct,_t.data):e.texImage2D(s.TEXTURE_2D,J,Ot,_t.width,_t.height,0,lt,Ct,_t.data)}else if(S.isDataArrayTexture)if(At){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ot,st.width,st.height,st.depth),L)if(S.layerUpdates.size>0){let J=lp(st.width,st.height,S.format,S.type);for(let tt of S.layerUpdates){let ut=st.data.subarray(tt*J/st.data.BYTES_PER_ELEMENT,(tt+1)*J/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,lt,Ct,ut)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,lt,Ct,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,st.width,st.height,st.depth,0,lt,Ct,st.data);else if(S.isData3DTexture)At?(ue&&e.texStorage3D(s.TEXTURE_3D,dt,Ot,st.width,st.height,st.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,lt,Ct,st.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,st.width,st.height,st.depth,0,lt,Ct,st.data);else if(S.isFramebufferTexture){if(ue)if(At)e.texStorage2D(s.TEXTURE_2D,dt,Ot,st.width,st.height);else{let J=st.width,tt=st.height;for(let ut=0;ut<dt;ut++)e.texImage2D(s.TEXTURE_2D,ut,Ot,J,tt,0,lt,Ct,null),J>>=1,tt>>=1}}else if(Tt.length>0){if(At&&ue){let J=pt(Tt[0]);e.texStorage2D(s.TEXTURE_2D,dt,Ot,J.width,J.height)}for(let J=0,tt=Tt.length;J<tt;J++)_t=Tt[J],At?L&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,lt,Ct,_t):e.texImage2D(s.TEXTURE_2D,J,Ot,lt,Ct,_t);S.generateMipmaps=!1}else if(At){if(ue){let J=pt(st);e.texStorage2D(s.TEXTURE_2D,dt,Ot,J.width,J.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,Ct,st)}else e.texImage2D(s.TEXTURE_2D,0,Ot,lt,Ct,st);m(S)&&p(K),ht.__version=j.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function et(C,S,z){if(S.image.length!==6)return;let K=Wt(C,S),Q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);let j=n.get(Q);if(Q.version!==j.__version||K===!0){e.activeTexture(s.TEXTURE0+z);let ht=pe.getPrimaries(pe.workingColorSpace),ot=S.colorSpace===Rs?null:pe.getPrimaries(S.colorSpace),Et=S.colorSpace===Rs||ht===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let Nt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,lt=[];for(let tt=0;tt<6;tt++)!Nt&&!st?lt[tt]=g(S.image[tt],!0,i.maxCubemapSize):lt[tt]=st?S.image[tt].image:S.image[tt],lt[tt]=$t(S,lt[tt]);let Ct=lt[0],Ot=r.convert(S.format,S.colorSpace),_t=r.convert(S.type),Tt=M(S.internalFormat,Ot,_t,S.colorSpace),At=S.isVideoTexture!==!0,ue=j.__version===void 0||K===!0,L=Q.dataReady,dt=A(S,Ct);Dt(s.TEXTURE_CUBE_MAP,S);let J;if(Nt){At&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Tt,Ct.width,Ct.height);for(let tt=0;tt<6;tt++){J=lt[tt].mipmaps;for(let ut=0;ut<J.length;ut++){let ft=J[ut];S.format!==Ui?Ot!==null?At?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,0,0,ft.width,ft.height,Ot,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,Tt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,0,0,ft.width,ft.height,Ot,_t,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut,Tt,ft.width,ft.height,0,Ot,_t,ft.data)}}}else{if(J=S.mipmaps,At&&ue){J.length>0&&dt++;let tt=pt(lt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Tt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){At?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,lt[tt].width,lt[tt].height,Ot,_t,lt[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Tt,lt[tt].width,lt[tt].height,0,Ot,_t,lt[tt].data);for(let ut=0;ut<J.length;ut++){let Gt=J[ut].image[tt].image;At?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,0,0,Gt.width,Gt.height,Ot,_t,Gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,Tt,Gt.width,Gt.height,0,Ot,_t,Gt.data)}}else{At?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ot,_t,lt[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Tt,Ot,_t,lt[tt]);for(let ut=0;ut<J.length;ut++){let ft=J[ut];At?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,0,0,Ot,_t,ft.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ut+1,Tt,Ot,_t,ft.image[tt])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),j.__version=Q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function at(C,S,z,K,Q,j){let ht=r.convert(z.format,z.colorSpace),ot=r.convert(z.type),Et=M(z.internalFormat,ht,ot,z.colorSpace),Nt=n.get(S),st=n.get(z);if(st.__renderTarget=S,!Nt.__hasExternalTextures){let lt=Math.max(1,S.width>>j),Ct=Math.max(1,S.height>>j);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,Et,lt,Ct,S.depth,0,ht,ot,null):e.texImage2D(Q,j,Et,lt,Ct,0,ht,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),O(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Q,st.__webglTexture,0,Pt(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Q,st.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(C,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){let K=S.depthTexture,Q=K&&K.isDepthTexture?K.type:null,j=y(S.stencilBuffer,Q),ht=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=Pt(S);O(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,j,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,C)}else{let K=S.textures;for(let Q=0;Q<K.length;Q++){let j=K[Q],ht=r.convert(j.format,j.colorSpace),ot=r.convert(j.type),Et=M(j.internalFormat,ht,ot,j.colorSpace),Nt=Pt(S);z&&O(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,Et,S.width,S.height):O(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt,Et,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Et,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);let Q=K.__webglTexture,j=Pt(S);if(S.depthTexture.format===Xo)O(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===ia)O(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ut(C){let S=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=K}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let K=C.texture.mipmaps;K&&K.length>0?St(S.__webglFramebuffer[0],C):St(S.__webglFramebuffer,C)}else if(z){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=s.createRenderbuffer(),nt(S.__webglDepthbuffer[K],C,!1);else{let Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}else{let K=C.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),nt(S.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(C,S,z){let K=n.get(C);S!==void 0&&at(K.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Ut(C)}function Xt(C){let S=C.texture,z=n.get(C),K=n.get(S);C.addEventListener("dispose",w);let Q=C.textures,j=C.isWebGLCubeRenderTarget===!0,ht=Q.length>1;if(ht||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=S.version,o.memory.textures++),j){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let Et=0;Et<S.mipmaps.length;Et++)z.__webglFramebuffer[ot][Et]=s.createFramebuffer()}else z.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)z.__webglFramebuffer[ot]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(ht)for(let ot=0,Et=Q.length;ot<Et;ot++){let Nt=n.get(Q[ot]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&O(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){let Et=Q[ot];z.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);let Nt=r.convert(Et.format,Et.colorSpace),st=r.convert(Et.type),lt=M(Et.internalFormat,Nt,st,Et.colorSpace,C.isXRRenderTarget===!0),Ct=Pt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,lt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Dt(s.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)at(z.__webglFramebuffer[ot][Et],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et);else at(z.__webglFramebuffer[ot],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let ot=0,Et=Q.length;ot<Et;ot++){let Nt=Q[ot],st=n.get(Nt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),Dt(s.TEXTURE_2D,Nt),at(z.__webglFramebuffer,C,Nt,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),m(Nt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),Dt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)at(z.__webglFramebuffer[Et],C,S,s.COLOR_ATTACHMENT0,ot,Et);else at(z.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,ot,0);m(S)&&p(ot),e.unbindTexture()}C.depthBuffer&&Ut(C)}function Ht(C){let S=C.textures;for(let z=0,K=S.length;z<K;z++){let Q=S[z];if(m(Q)){let j=b(C),ht=n.get(Q).__webglTexture;e.bindTexture(j,ht),p(j),e.unbindTexture()}}}let ct=[],D=[];function ie(C){if(C.samples>0){if(O(C)===!1){let S=C.textures,z=C.width,K=C.height,Q=s.COLOR_BUFFER_BIT,j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=n.get(C),ot=S.length>1;if(ot)for(let Nt=0;Nt<S.length;Nt++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let Et=C.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Nt=0;Nt<S.length;Nt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[Nt]);let st=n.get(S[Nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,st,0)}s.blitFramebuffer(0,0,z,K,0,0,z,K,Q,s.NEAREST),l===!0&&(ct.length=0,D.length=0,ct.push(s.COLOR_ATTACHMENT0+Nt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ct.push(j),D.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let Nt=0;Nt<S.length;Nt++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.RENDERBUFFER,ht.__webglColorRenderbuffer[Nt]);let st=n.get(S[Nt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.TEXTURE_2D,st,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Pt(C){return Math.min(i.maxSamples,C.samples)}function O(C){let S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xt(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function $t(C,S){let z=C.colorSpace,K=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Wr&&z!==Rs&&(pe.getTransfer(z)===Me?(K!==Ui||Q!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=B,this.rebindTextures=bt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=at,this.useMultisampledRTT=O}function HE(s,t){function e(n,i=Rs){let r,o=pe.getTransfer(i);if(n===qi)return s.UNSIGNED_BYTE;if(n===Oh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Zf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qf)return s.BYTE;if(n===$f)return s.SHORT;if(n===ta)return s.UNSIGNED_SHORT;if(n===Nh)return s.INT;if(n===cr)return s.UNSIGNED_INT;if(n===ls)return s.FLOAT;if(n===ea)return s.HALF_FLOAT;if(n===Jf)return s.ALPHA;if(n===Kf)return s.RGB;if(n===Ui)return s.RGBA;if(n===Xo)return s.DEPTH_COMPONENT;if(n===ia)return s.DEPTH_STENCIL;if(n===jf)return s.RED;if(n===Bh)return s.RED_INTEGER;if(n===Qf)return s.RG;if(n===kh)return s.RG_INTEGER;if(n===zh)return s.RGBA_INTEGER;if(n===bl||n===Tl||n===wl||n===El)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===El)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===El)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vh||n===Hh||n===Gh||n===Wh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xh||n===Yh||n===qh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xh||n===Yh)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$h||n===Zh||n===Jh||n===Kh||n===jh||n===Qh||n===tu||n===eu||n===nu||n===iu||n===su||n===ru||n===ou||n===au)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$h)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qh)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tu)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eu)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nu)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===iu)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===su)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ru)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ou)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===au)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Al||n===lu||n===cu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Al)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tp||n===hu||n===uu||n===du)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Al)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===du)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===na?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var GE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Sp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new gi,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Yi({vertexShader:GE,fragmentShader:WE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new Sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mp=class extends ss{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,_=null,g=new Sp,m=e.getContextAttributes(),p=null,b=null,M=[],y=[],A=new qt,E=null,w=new In;w.viewport=new Ve;let R=new In;R.viewport=new Ve;let v=[w,R],x=new bh,I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=M[q];return et===void 0&&(et=new Jo,M[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=M[q];return et===void 0&&(et=new Jo,M[q]=et),et.getGripSpace()},this.getHand=function(q){let et=M[q];return et===void 0&&(et=new Jo,M[q]=et),et.getHandSpace()};function k(q){let et=y.indexOf(q.inputSource);if(et===-1)return;let at=M[et];at!==void 0&&(at.update(q.inputSource,q.frame,c||o),at.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<M.length;q++){let et=y[q];et!==null&&(y[q]=null,M[q].disconnect(et))}I=null,U=null,g.reset(),t.setRenderTarget(p),u=null,d=null,f=null,i=null,b=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,nt=null,St=null;m.depth&&(St=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?ia:Xo,nt=m.stencil?na:cr);let Ut={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};f=new XRWebGLBinding(i,e),d=f.createProjectionLayer(Ut),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new rs(d.textureWidth,d.textureHeight,{format:Ui,type:qi,depthTexture:new fl(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new rs(u.framebufferWidth,u.framebufferHeight,{format:Ui,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Wt.setContext(i),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(q){for(let et=0;et<q.removed.length;et++){let at=q.removed[et],nt=y.indexOf(at);nt>=0&&(y[nt]=null,M[nt].disconnect(at))}for(let et=0;et<q.added.length;et++){let at=q.added[et],nt=y.indexOf(at);if(nt===-1){for(let Ut=0;Ut<M.length;Ut++)if(Ut>=y.length){y.push(at),nt=Ut;break}else if(y[Ut]===null){y[Ut]=at,nt=Ut;break}if(nt===-1)break}let St=M[nt];St&&St.connect(at)}}let V=new G,Z=new G;function B(q,et,at){V.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(at.matrixWorld);let nt=V.distanceTo(Z),St=et.projectionMatrix.elements,Ut=at.projectionMatrix.elements,bt=St[14]/(St[10]-1),Xt=St[14]/(St[10]+1),Ht=(St[9]+1)/St[5],ct=(St[9]-1)/St[5],D=(St[8]-1)/St[0],ie=(Ut[8]+1)/Ut[0],Pt=bt*D,O=bt*ie,xt=nt/(-D+ie),$t=xt*-D;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX($t),q.translateZ(xt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),St[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let pt=bt+xt,C=Xt+xt,S=Pt-$t,z=O+(nt-$t),K=Ht*Xt/C*pt,Q=ct*Xt/C*pt;q.projectionMatrix.makePerspective(S,z,K,Q,pt,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function W(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let et=q.near,at=q.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(at=g.depthFar)),x.near=R.near=w.near=et,x.far=R.far=w.far=at,(I!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,U=x.far),w.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,x.layers.mask=w.layers.mask|R.layers.mask;let nt=q.parent,St=x.cameras;W(x,nt);for(let Ut=0;Ut<St.length;Ut++)W(St[Ut],nt);St.length===2?B(x,w,R):x.projectionMatrix.copy(w.projectionMatrix),P(q,x,nt)};function P(q,et,at){at===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(at.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Yo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let rt=null;function Dt(q,et){if(h=et.getViewerPose(c||o),_=et,h!==null){let at=h.views;u!==null&&(t.setRenderTargetFramebuffer(b,u.framebuffer),t.setRenderTarget(b));let nt=!1;at.length!==x.cameras.length&&(x.cameras.length=0,nt=!0);for(let bt=0;bt<at.length;bt++){let Xt=at[bt],Ht=null;if(u!==null)Ht=u.getViewport(Xt);else{let D=f.getViewSubImage(d,Xt);Ht=D.viewport,bt===0&&(t.setRenderTargetTextures(b,D.colorTexture,D.depthStencilTexture),t.setRenderTarget(b))}let ct=v[bt];ct===void 0&&(ct=new In,ct.layers.enable(bt),ct.viewport=new Ve,v[bt]=ct),ct.matrix.fromArray(Xt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Xt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),bt===0&&(x.matrix.copy(ct.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),nt===!0&&x.cameras.push(ct)}let St=i.enabledFeatures;if(St&&St.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&f){let bt=f.getDepthInformation(at[0]);bt&&bt.isValid&&bt.texture&&g.init(t,bt,i.renderState)}}for(let at=0;at<M.length;at++){let nt=y[at],St=M[at];nt!==null&&St!==void 0&&St.update(nt,et,c||o)}rt&&rt(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),_=null}let Wt=new K0;Wt.setAnimationLoop(Dt),this.setAnimationLoop=function(q){rt=q},this.dispose=function(){}}},jr=new os,XE=new Ne;function YE(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rp(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),M=b.envMap,y=b.envMapRotation;M&&(m.envMap.value=M,jr.copy(y),jr.x*=-1,jr.y*=-1,jr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),m.envMapRotation.value.setFromMatrix4(XE.makeRotationFromEuler(jr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qE(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let y=M.program;n.uniformBlockBinding(b,y)}function c(b,M){let y=i[b.id];y===void 0&&(_(b),y=h(b),i[b.id]=y,b.addEventListener("dispose",m));let A=M.program;n.updateUBOMapping(b,A);let E=t.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function h(b){let M=f();b.__bindingPointIndex=M;let y=s.createBuffer(),A=b.__size,E=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,y),y}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let M=i[b.id],y=b.uniforms,A=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let E=0,w=y.length;E<w;E++){let R=Array.isArray(y[E])?y[E]:[y[E]];for(let v=0,x=R.length;v<x;v++){let I=R[v];if(u(I,E,v,A)===!0){let U=I.__offset,k=Array.isArray(I.value)?I.value:[I.value],H=0;for(let Y=0;Y<k.length;Y++){let V=k[Y],Z=g(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,U+H,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,H),H+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(b,M,y,A){let E=b.value,w=M+"_"+y;if(A[w]===void 0)return typeof E=="number"||typeof E=="boolean"?A[w]=E:A[w]=E.clone(),!0;{let R=A[w];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return A[w]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function _(b){let M=b.uniforms,y=0,A=16;for(let w=0,R=M.length;w<R;w++){let v=Array.isArray(M[w])?M[w]:[M[w]];for(let x=0,I=v.length;x<I;x++){let U=v[x],k=Array.isArray(U.value)?U.value:[U.value];for(let H=0,Y=k.length;H<Y;H++){let V=k[H],Z=g(V),B=y%A,W=B%Z.boundary,P=B+W;y+=W,P!==0&&A-P<Z.storage&&(y+=A-P),U.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=Z.storage}}}let E=y%A;return E>0&&(y+=A-E),b.__size=y,b.__cache={},this}function g(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){let M=b.target;M.removeEventListener("dispose",m);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function p(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}var _u=class{constructor(t={}){let{canvas:e=S0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,b=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=pi;let E=0,w=0,R=null,v=-1,x=null,I=new Ve,U=new Ve,k=null,H=new me(0),Y=0,V=e.width,Z=e.height,B=1,W=null,P=null,rt=new Ve(0,0,V,Z),Dt=new Ve(0,0,V,Z),Wt=!1,q=new Ko,et=!1,at=!1,nt=new Ne,St=new Ne,Ut=new G,bt=new Ve,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function ct(){return R===null?B:1}let D=n;function ie(T,F){return e.getContext(T,F)}try{let T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Th}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ft,!1),D===null){let F="webgl2";if(D=ie(F,T),D===null)throw ie(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Pt,O,xt,$t,pt,C,S,z,K,Q,j,ht,ot,Et,Nt,st,lt,Ct,Ot,_t,Tt,At,ue,L;function dt(){Pt=new uw(D),Pt.init(),At=new HE(D,Pt),O=new sw(D,Pt,t,At),xt=new zE(D,Pt),O.reverseDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),$t=new pw(D),pt=new AE,C=new VE(D,Pt,xt,pt,O,At,$t),S=new ow(y),z=new hw(y),K=new vM(D),ue=new nw(D,K),Q=new dw(D,K,$t,ue),j=new gw(D,Q,K,$t),Ot=new mw(D,O,C),st=new rw(pt),ht=new EE(y,S,z,Pt,O,ue,st),ot=new YE(y,pt),Et=new RE,Nt=new NE(Pt),Ct=new ew(y,S,z,xt,j,u,l),lt=new BE(y,j,O),L=new qE(D,$t,O,xt),_t=new iw(D,Pt,$t),Tt=new fw(D,Pt,$t),$t.programs=ht.programs,y.capabilities=O,y.extensions=Pt,y.properties=pt,y.renderLists=Et,y.shadowMap=lt,y.state=xt,y.info=$t}dt();let J=new Mp(y,D);this.xr=J,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=Pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(V,Z,!1))},this.getSize=function(T){return T.set(V,Z)},this.setSize=function(T,F,$=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=T,Z=F,e.width=Math.floor(T*B),e.height=Math.floor(F*B),$===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(V*B,Z*B).floor()},this.setDrawingBufferSize=function(T,F,$){V=T,Z=F,B=$,e.width=Math.floor(T*$),e.height=Math.floor(F*$),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(rt)},this.setViewport=function(T,F,$,X){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,F,$,X),xt.viewport(I.copy(rt).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(Dt)},this.setScissor=function(T,F,$,X){T.isVector4?Dt.set(T.x,T.y,T.z,T.w):Dt.set(T,F,$,X),xt.scissor(U.copy(Dt).multiplyScalar(B).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(T){xt.setScissorTest(Wt=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){P=T},this.getClearColor=function(T){return T.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,$=!0){let X=0;if(T){let N=!1;if(R!==null){let it=R.texture.format;N=it===zh||it===kh||it===Bh}if(N){let it=R.texture.type,gt=it===qi||it===cr||it===ta||it===na||it===Oh||it===Fh,wt=Ct.getClearColor(),Mt=Ct.getClearAlpha(),kt=wt.r,zt=wt.g,Ft=wt.b;gt?(_[0]=kt,_[1]=zt,_[2]=Ft,_[3]=Mt,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=kt,g[1]=zt,g[2]=Ft,g[3]=Mt,D.clearBufferiv(D.COLOR,0,g))}else X|=D.COLOR_BUFFER_BIT}F&&(X|=D.DEPTH_BUFFER_BIT),$&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Ct.dispose(),Et.dispose(),Nt.dispose(),pt.dispose(),S.dispose(),z.dispose(),j.dispose(),ue.dispose(),L.dispose(),ht.dispose(),J.dispose(),J.removeEventListener("sessionstart",mt),J.removeEventListener("sessionend",Zt),Lt.stop()};function tt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=$t.autoReset,F=lt.enabled,$=lt.autoUpdate,X=lt.needsUpdate,N=lt.type;dt(),$t.autoReset=T,lt.enabled=F,lt.autoUpdate=$,lt.needsUpdate=X,lt.type=N}function ft(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Gt(T){let F=T.target;F.removeEventListener("dispose",Gt),ge(F)}function ge(T){He(T),pt.remove(T)}function He(T){let F=pt.get(T).programs;F!==void 0&&(F.forEach(function($){ht.releaseProgram($)}),T.isShaderMaterial&&ht.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,$,X,N,it){F===null&&(F=Xt);let gt=N.isMesh&&N.matrixWorld.determinant()<0,wt=ii(T,F,$,X,N);xt.setMaterial(X,gt);let Mt=$.index,kt=1;if(X.wireframe===!0){if(Mt=Q.getWireframeAttribute($),Mt===void 0)return;kt=2}let zt=$.drawRange,Ft=$.attributes.position,jt=zt.start*kt,xe=(zt.start+zt.count)*kt;it!==null&&(jt=Math.max(jt,it.start*kt),xe=Math.min(xe,(it.start+it.count)*kt)),Mt!==null?(jt=Math.max(jt,0),xe=Math.min(xe,Mt.count)):Ft!=null&&(jt=Math.max(jt,0),xe=Math.min(xe,Ft.count));let Ke=xe-jt;if(Ke<0||Ke===1/0)return;ue.setup(N,X,wt,$,Mt);let Ge,_e=_t;if(Mt!==null&&(Ge=K.get(Mt),_e=Tt,_e.setIndex(Ge)),N.isMesh)X.wireframe===!0?(xt.setLineWidth(X.wireframeLinewidth*ct()),_e.setMode(D.LINES)):_e.setMode(D.TRIANGLES);else if(N.isLine){let Vt=X.linewidth;Vt===void 0&&(Vt=1),xt.setLineWidth(Vt*ct()),N.isLineSegments?_e.setMode(D.LINES):N.isLineLoop?_e.setMode(D.LINE_LOOP):_e.setMode(D.LINE_STRIP)}else N.isPoints?_e.setMode(D.POINTS):N.isSprite&&_e.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Cl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))_e.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Vt=N._multiDrawStarts,mn=N._multiDrawCounts,ve=N._multiDrawCount,Ni=Mt?K.get(Mt).bytesPerElement:1,eo=pt.get(X).currentProgram.getUniforms();for(let si=0;si<ve;si++)eo.setValue(D,"_gl_DrawID",si),_e.render(Vt[si]/Ni,mn[si])}else if(N.isInstancedMesh)_e.renderInstances(jt,Ke,N.count);else if($.isInstancedBufferGeometry){let Vt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,mn=Math.min($.instanceCount,Vt);_e.renderInstances(jt,Ke,mn)}else _e.render(jt,Ke)};function vt(T,F,$){T.transparent===!0&&T.side===Li&&T.forceSinglePass===!1?(T.side=qn,T.needsUpdate=!0,we(T,F,$),T.side=Es,T.needsUpdate=!0,we(T,F,$),T.side=Li):we(T,F,$)}this.compile=function(T,F,$=null){$===null&&($=T),p=Nt.get($),p.init(F),M.push(p),$.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==$&&T.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let X=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let it=N.material;if(it)if(Array.isArray(it))for(let gt=0;gt<it.length;gt++){let wt=it[gt];vt(wt,$,N),X.add(wt)}else vt(it,$,N),X.add(it)}),p=M.pop(),X},this.compileAsync=function(T,F,$=null){let X=this.compile(T,F,$);return new Promise(N=>{function it(){if(X.forEach(function(gt){pt.get(gt).currentProgram.isReady()&&X.delete(gt)}),X.size===0){N(T);return}setTimeout(it,10)}Pt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let It=null;function ee(T){It&&It(T)}function mt(){Lt.stop()}function Zt(){Lt.start()}let Lt=new K0;Lt.setAnimationLoop(ee),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(T){It=T,J.setAnimationLoop(T),T===null?Lt.stop():Lt.start()},J.addEventListener("sessionstart",mt),J.addEventListener("sessionend",Zt),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(F),F=J.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,F,R),p=Nt.get(T,M.length),p.init(F),M.push(p),St.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(St),at=this.localClippingEnabled,et=st.init(this.clippingPlanes,at),m=Et.get(T,b.length),m.init(),b.push(m),J.enabled===!0&&J.isPresenting===!0){let it=y.xr.getDepthSensingMesh();it!==null&&Yt(it,F,-1/0,y.sortObjects)}Yt(T,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(W,P),Ht=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ht&&Ct.addToRenderList(m,T),this.info.render.frame++,et===!0&&st.beginShadows();let $=p.state.shadowsArray;lt.render($,T,F),et===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,N=m.transmissive;if(p.setupLights(),F.isArrayCamera){let it=F.cameras;if(N.length>0)for(let gt=0,wt=it.length;gt<wt;gt++){let Mt=it[gt];oe(X,N,T,Mt)}Ht&&Ct.render(T);for(let gt=0,wt=it.length;gt<wt;gt++){let Mt=it[gt];$e(m,T,Mt,Mt.viewport)}}else N.length>0&&oe(X,N,T,F),Ht&&Ct.render(T),$e(m,T,F);R!==null&&w===0&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,F),ue.resetDefaultState(),v=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],et===!0&&st.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Yt(T,F,$,X){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){X&&bt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(St);let gt=j.update(T),wt=T.material;wt.visible&&m.push(T,gt,wt,$,bt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){let gt=j.update(T),wt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),bt.copy(T.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),bt.copy(gt.boundingSphere.center)),bt.applyMatrix4(T.matrixWorld).applyMatrix4(St)),Array.isArray(wt)){let Mt=gt.groups;for(let kt=0,zt=Mt.length;kt<zt;kt++){let Ft=Mt[kt],jt=wt[Ft.materialIndex];jt&&jt.visible&&m.push(T,gt,jt,$,bt.z,Ft)}}else wt.visible&&m.push(T,gt,wt,$,bt.z,null)}}let it=T.children;for(let gt=0,wt=it.length;gt<wt;gt++)Yt(it[gt],F,$,X)}function $e(T,F,$,X){let N=T.opaque,it=T.transmissive,gt=T.transparent;p.setupLightsView($),et===!0&&st.setGlobalState(y.clippingPlanes,$),X&&xt.viewport(I.copy(X)),N.length>0&&Re(N,F,$),it.length>0&&Re(it,F,$),gt.length>0&&Re(gt,F,$),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function oe(T,F,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new rs(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?ea:qi,minFilter:lr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));let it=p.state.transmissionRenderTarget[X.id],gt=X.viewport||I;it.setSize(gt.z*y.transmissionResolutionScale,gt.w*y.transmissionResolutionScale);let wt=y.getRenderTarget();y.setRenderTarget(it),y.getClearColor(H),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Ht&&Ct.render($);let Mt=y.toneMapping;y.toneMapping=Cs;let kt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),et===!0&&st.setGlobalState(y.clippingPlanes,X),Re(T,$,X),C.updateMultisampleRenderTarget(it),C.updateRenderTargetMipmap(it),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Ft=0,jt=F.length;Ft<jt;Ft++){let xe=F[Ft],Ke=xe.object,Ge=xe.geometry,_e=xe.material,Vt=xe.group;if(_e.side===Li&&Ke.layers.test(X.layers)){let mn=_e.side;_e.side=qn,_e.needsUpdate=!0,nn(Ke,$,X,Ge,_e,Vt),_e.side=mn,_e.needsUpdate=!0,zt=!0}}zt===!0&&(C.updateMultisampleRenderTarget(it),C.updateRenderTargetMipmap(it))}y.setRenderTarget(wt),y.setClearColor(H,Y),kt!==void 0&&(X.viewport=kt),y.toneMapping=Mt}function Re(T,F,$){let X=F.isScene===!0?F.overrideMaterial:null;for(let N=0,it=T.length;N<it;N++){let gt=T[N],wt=gt.object,Mt=gt.geometry,kt=gt.group,zt=gt.material;zt.allowOverride===!0&&X!==null&&(zt=X),wt.layers.test($.layers)&&nn(wt,F,$,Mt,zt,kt)}}function nn(T,F,$,X,N,it){T.onBeforeRender(y,F,$,X,N,it),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(y,F,$,X,T,it),N.transparent===!0&&N.side===Li&&N.forceSinglePass===!1?(N.side=qn,N.needsUpdate=!0,y.renderBufferDirect($,F,X,N,T,it),N.side=Es,N.needsUpdate=!0,y.renderBufferDirect($,F,X,N,T,it),N.side=Li):y.renderBufferDirect($,F,X,N,T,it),T.onAfterRender(y,F,$,X,N,it)}function we(T,F,$){F.isScene!==!0&&(F=Xt);let X=pt.get(T),N=p.state.lights,it=p.state.shadowsArray,gt=N.state.version,wt=ht.getParameters(T,N.state,it,F,$),Mt=ht.getProgramCacheKey(wt),kt=X.programs;X.environment=T.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(T.isMeshStandardMaterial?z:S).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",Gt),kt=new Map,X.programs=kt);let zt=kt.get(Mt);if(zt!==void 0){if(X.currentProgram===zt&&X.lightsStateVersion===gt)return ye(T,wt),zt}else wt.uniforms=ht.getUniforms(T),T.onBeforeCompile(wt,y),zt=ht.acquireProgram(wt,Mt),kt.set(Mt,zt),X.uniforms=wt.uniforms;let Ft=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ft.clippingPlanes=st.uniform),ye(T,wt),X.needsLights=Un(T),X.lightsStateVersion=gt,X.needsLights&&(Ft.ambientLightColor.value=N.state.ambient,Ft.lightProbe.value=N.state.probe,Ft.directionalLights.value=N.state.directional,Ft.directionalLightShadows.value=N.state.directionalShadow,Ft.spotLights.value=N.state.spot,Ft.spotLightShadows.value=N.state.spotShadow,Ft.rectAreaLights.value=N.state.rectArea,Ft.ltc_1.value=N.state.rectAreaLTC1,Ft.ltc_2.value=N.state.rectAreaLTC2,Ft.pointLights.value=N.state.point,Ft.pointLightShadows.value=N.state.pointShadow,Ft.hemisphereLights.value=N.state.hemi,Ft.directionalShadowMap.value=N.state.directionalShadowMap,Ft.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ft.spotShadowMap.value=N.state.spotShadowMap,Ft.spotLightMatrix.value=N.state.spotLightMatrix,Ft.spotLightMap.value=N.state.spotLightMap,Ft.pointShadowMap.value=N.state.pointShadowMap,Ft.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=zt,X.uniformsList=null,zt}function Ee(T){if(T.uniformsList===null){let F=T.currentProgram.getUniforms();T.uniformsList=aa.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function ye(T,F){let $=pt.get(T);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function ii(T,F,$,X,N){F.isScene!==!0&&(F=Xt),C.resetTextureUnits();let it=F.fog,gt=X.isMeshStandardMaterial?F.environment:null,wt=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Wr,Mt=(X.isMeshStandardMaterial?z:S).get(X.envMap||gt),kt=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,zt=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ft=!!$.morphAttributes.position,jt=!!$.morphAttributes.normal,xe=!!$.morphAttributes.color,Ke=Cs;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ke=y.toneMapping);let Ge=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_e=Ge!==void 0?Ge.length:0,Vt=pt.get(X),mn=p.state.lights;if(et===!0&&(at===!0||T!==x)){let Nn=T===x&&X.id===v;st.setState(X,T,Nn)}let ve=!1;X.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==mn.state.version||Vt.outputColorSpace!==wt||N.isBatchedMesh&&Vt.batching===!1||!N.isBatchedMesh&&Vt.batching===!0||N.isBatchedMesh&&Vt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Vt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Vt.instancing===!1||!N.isInstancedMesh&&Vt.instancing===!0||N.isSkinnedMesh&&Vt.skinning===!1||!N.isSkinnedMesh&&Vt.skinning===!0||N.isInstancedMesh&&Vt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Vt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Vt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Vt.instancingMorph===!1&&N.morphTexture!==null||Vt.envMap!==Mt||X.fog===!0&&Vt.fog!==it||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==st.numPlanes||Vt.numIntersection!==st.numIntersection)||Vt.vertexAlphas!==kt||Vt.vertexTangents!==zt||Vt.morphTargets!==Ft||Vt.morphNormals!==jt||Vt.morphColors!==xe||Vt.toneMapping!==Ke||Vt.morphTargetsCount!==_e)&&(ve=!0):(ve=!0,Vt.__version=X.version);let Ni=Vt.currentProgram;ve===!0&&(Ni=we(X,F,N));let eo=!1,si=!1,ha=!1,Le=Ni.getUniforms(),xi=Vt.uniforms;if(xt.useProgram(Ni.program)&&(eo=!0,si=!0,ha=!0),X.id!==v&&(v=X.id,si=!0),eo||x!==T){xt.buffers.depth.getReversed()?(nt.copy(T.projectionMatrix),b0(nt),T0(nt),Le.setValue(D,"projectionMatrix",nt)):Le.setValue(D,"projectionMatrix",T.projectionMatrix),Le.setValue(D,"viewMatrix",T.matrixWorldInverse);let $n=Le.map.cameraPosition;$n!==void 0&&$n.setValue(D,Ut.setFromMatrixPosition(T.matrixWorld)),O.logarithmicDepthBuffer&&Le.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Le.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,si=!0,ha=!0)}if(N.isSkinnedMesh){Le.setOptional(D,N,"bindMatrix"),Le.setOptional(D,N,"bindMatrixInverse");let Nn=N.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Le.setValue(D,"boneTexture",Nn.boneTexture,C))}N.isBatchedMesh&&(Le.setOptional(D,N,"batchingTexture"),Le.setValue(D,"batchingTexture",N._matricesTexture,C),Le.setOptional(D,N,"batchingIdTexture"),Le.setValue(D,"batchingIdTexture",N._indirectTexture,C),Le.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&Le.setValue(D,"batchingColorTexture",N._colorsTexture,C));let vi=$.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&Ot.update(N,$,Ni),(si||Vt.receiveShadow!==N.receiveShadow)&&(Vt.receiveShadow=N.receiveShadow,Le.setValue(D,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(xi.envMap.value=Mt,xi.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(xi.envMapIntensity.value=F.environmentIntensity),si&&(Le.setValue(D,"toneMappingExposure",y.toneMappingExposure),Vt.needsLights&&Ie(xi,ha),it&&X.fog===!0&&ot.refreshFogUniforms(xi,it),ot.refreshMaterialUniforms(xi,X,B,Z,p.state.transmissionRenderTarget[T.id]),aa.upload(D,Ee(Vt),xi,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(aa.upload(D,Ee(Vt),xi,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Le.setValue(D,"center",N.center),Le.setValue(D,"modelViewMatrix",N.modelViewMatrix),Le.setValue(D,"normalMatrix",N.normalMatrix),Le.setValue(D,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Nn=X.uniformsGroups;for(let $n=0,Mu=Nn.length;$n<Mu;$n++){let dr=Nn[$n];L.update(dr,Ni),L.bind(dr,Ni)}}return Ni}function Ie(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Un(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,F,$){let X=pt.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),pt.get(T.texture).__webglTexture=F,pt.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){let $=pt.get(T);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0};let yi=D.createFramebuffer();this.setRenderTarget=function(T,F=0,$=0){R=T,E=F,w=$;let X=!0,N=null,it=!1,gt=!1;if(T){let Mt=pt.get(T);if(Mt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(Mt.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Mt.__hasExternalTextures)C.rebindTextures(T,pt.get(T.texture).__webglTexture,pt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ft=T.depthTexture;if(Mt.__boundDepthTexture!==Ft){if(Ft!==null&&pt.has(Ft)&&(T.width!==Ft.image.width||T.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}let kt=T.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(gt=!0);let zt=pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(zt[F])?N=zt[F][$]:N=zt[F],it=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?N=pt.get(T).__webglMultisampledFramebuffer:Array.isArray(zt)?N=zt[$]:N=zt,I.copy(T.viewport),U.copy(T.scissor),k=T.scissorTest}else I.copy(rt).multiplyScalar(B).floor(),U.copy(Dt).multiplyScalar(B).floor(),k=Wt;if($!==0&&(N=yi),xt.bindFramebuffer(D.FRAMEBUFFER,N)&&X&&xt.drawBuffers(T,N),xt.viewport(I),xt.scissor(U),xt.setScissorTest(k),it){let Mt=pt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Mt.__webglTexture,$)}else if(gt){let Mt=pt.get(T.texture),kt=F;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.__webglTexture,$,kt)}else if(T!==null&&$!==0){let Mt=pt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,$)}v=-1},this.readRenderTargetPixels=function(T,F,$,X,N,it,gt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){xt.bindFramebuffer(D.FRAMEBUFFER,wt);try{let Mt=T.texture,kt=Mt.format,zt=Mt.type;if(!O.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-X&&$>=0&&$<=T.height-N&&D.readPixels(F,$,X,N,At.convert(kt),At.convert(zt),it)}finally{let Mt=R!==null?pt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(T,F,$,X,N,it,gt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt)if(F>=0&&F<=T.width-X&&$>=0&&$<=T.height-N){xt.bindFramebuffer(D.FRAMEBUFFER,wt);let Mt=T.texture,kt=Mt.format,zt=Mt.type;if(!O.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ft=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ft),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),D.readPixels(F,$,X,N,At.convert(kt),At.convert(zt),0);let jt=R!==null?pt.get(R).__webglFramebuffer:null;xt.bindFramebuffer(D.FRAMEBUFFER,jt);let xe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await M0(D,xe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ft),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.deleteBuffer(Ft),D.deleteSync(xe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,$=0){let X=Math.pow(2,-$),N=Math.floor(T.image.width*X),it=Math.floor(T.image.height*X),gt=F!==null?F.x:0,wt=F!==null?F.y:0;C.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,gt,wt,N,it),xt.unbindTexture()};let sn=D.createFramebuffer(),rn=D.createFramebuffer();this.copyTextureToTexture=function(T,F,$=null,X=null,N=0,it=null){it===null&&(N!==0?(Cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),it=N,N=0):it=0);let gt,wt,Mt,kt,zt,Ft,jt,xe,Ke,Ge=T.isCompressedTexture?T.mipmaps[it]:T.image;if($!==null)gt=$.max.x-$.min.x,wt=$.max.y-$.min.y,Mt=$.isBox3?$.max.z-$.min.z:1,kt=$.min.x,zt=$.min.y,Ft=$.isBox3?$.min.z:0;else{let vi=Math.pow(2,-N);gt=Math.floor(Ge.width*vi),wt=Math.floor(Ge.height*vi),T.isDataArrayTexture?Mt=Ge.depth:T.isData3DTexture?Mt=Math.floor(Ge.depth*vi):Mt=1,kt=0,zt=0,Ft=0}X!==null?(jt=X.x,xe=X.y,Ke=X.z):(jt=0,xe=0,Ke=0);let _e=At.convert(F.format),Vt=At.convert(F.type),mn;F.isData3DTexture?(C.setTexture3D(F,0),mn=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),mn=D.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),mn=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let ve=D.getParameter(D.UNPACK_ROW_LENGTH),Ni=D.getParameter(D.UNPACK_IMAGE_HEIGHT),eo=D.getParameter(D.UNPACK_SKIP_PIXELS),si=D.getParameter(D.UNPACK_SKIP_ROWS),ha=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ge.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ge.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kt),D.pixelStorei(D.UNPACK_SKIP_ROWS,zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ft);let Le=T.isDataArrayTexture||T.isData3DTexture,xi=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){let vi=pt.get(T),Nn=pt.get(F),$n=pt.get(vi.__renderTarget),Mu=pt.get(Nn.__renderTarget);xt.bindFramebuffer(D.READ_FRAMEBUFFER,$n.__webglFramebuffer),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mu.__webglFramebuffer);for(let dr=0;dr<Mt;dr++)Le&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.get(T).__webglTexture,N,Ft+dr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.get(F).__webglTexture,it,Ke+dr)),D.blitFramebuffer(kt,zt,gt,wt,jt,xe,gt,wt,D.DEPTH_BUFFER_BIT,D.NEAREST);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||T.isRenderTargetTexture||pt.has(T)){let vi=pt.get(T),Nn=pt.get(F);xt.bindFramebuffer(D.READ_FRAMEBUFFER,sn),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,rn);for(let $n=0;$n<Mt;$n++)Le?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vi.__webglTexture,N,Ft+$n):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vi.__webglTexture,N),xi?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nn.__webglTexture,it,Ke+$n):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Nn.__webglTexture,it),N!==0?D.blitFramebuffer(kt,zt,gt,wt,jt,xe,gt,wt,D.COLOR_BUFFER_BIT,D.NEAREST):xi?D.copyTexSubImage3D(mn,it,jt,xe,Ke+$n,kt,zt,gt,wt):D.copyTexSubImage2D(mn,it,jt,xe,kt,zt,gt,wt);xt.bindFramebuffer(D.READ_FRAMEBUFFER,null),xt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else xi?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(mn,it,jt,xe,Ke,gt,wt,Mt,_e,Vt,Ge.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(mn,it,jt,xe,Ke,gt,wt,Mt,_e,Ge.data):D.texSubImage3D(mn,it,jt,xe,Ke,gt,wt,Mt,_e,Vt,Ge):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,it,jt,xe,gt,wt,_e,Vt,Ge.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,it,jt,xe,Ge.width,Ge.height,_e,Ge.data):D.texSubImage2D(D.TEXTURE_2D,it,jt,xe,gt,wt,_e,Vt,Ge);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ni),D.pixelStorei(D.UNPACK_SKIP_PIXELS,eo),D.pixelStorei(D.UNPACK_SKIP_ROWS,si),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ha),it===0&&F.generateMipmaps&&D.generateMipmap(mn),xt.unbindTexture()},this.copyTextureToTexture3D=function(T,F,$=null,X=null,N=0){return Cl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,$,X,N)},this.initRenderTarget=function(T){pt.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),xt.unbindTexture()},this.resetState=function(){E=0,w=0,R=null,xt.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var ny={type:"change"},wp={type:"start"},sy={type:"end"},xu=new nr,iy=new ei,$E=Math.cos(70*hr.DEG2RAD),un=new G,ni=2*Math.PI,Te={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tp=1e-6,vu=class extends vl{constructor(t,e=null){super(t,e),this.state=Te.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:or.ROTATE,MIDDLE:or.DOLLY,RIGHT:or.PAN},this.touches={ONE:ar.ROTATE,TWO:ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Di,this._lastTargetPosition=new G,this._quat=new Di().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qo,this._sphericalDelta=new Qo,this._scale=1,this._panOffset=new G,this._rotateStart=new qt,this._rotateEnd=new qt,this._rotateDelta=new qt,this._panStart=new qt,this._panEnd=new qt,this._panDelta=new qt,this._dollyStart=new qt,this._dollyEnd=new qt,this._dollyDelta=new qt,this._dollyDirection=new G,this._mouse=new qt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=JE.bind(this),this._onPointerDown=ZE.bind(this),this._onPointerUp=KE.bind(this),this._onContextMenu=s1.bind(this),this._onMouseWheel=t1.bind(this),this._onKeyDown=e1.bind(this),this._onTouchStart=n1.bind(this),this._onTouchMove=i1.bind(this),this._onMouseDown=jE.bind(this),this._onMouseMove=QE.bind(this),this._interceptControlDown=r1.bind(this),this._interceptControlUp=o1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ny),this.update(),this.state=Te.NONE}update(t=null){let e=this.object.position;un.copy(e).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Te.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=ni:n>Math.PI&&(n-=ni),i<-Math.PI?i+=ni:i>Math.PI&&(i-=ni),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),e.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=un.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(xu.origin.copy(this.object.position),xu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xu.direction))<$E?this.object.lookAt(this.target):(iy.setFromNormalAndCoplanarPoint(this.object.up,this.target),xu.intersectPlane(iy,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tp||this._lastTargetPosition.distanceToSquared(this.target)>Tp?(this.dispatchEvent(ny),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ni/60*this.autoRotateSpeed*t:ni/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){un.setFromMatrixColumn(e,0),un.multiplyScalar(-t),this._panOffset.add(un)}_panUp(t,e){this.screenSpacePanning===!0?un.setFromMatrixColumn(e,1):(un.setFromMatrixColumn(e,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(t),this._panOffset.add(un)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;un.copy(i).sub(this.target);let r=un.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/e.clientHeight),this._rotateUp(ni*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/e.clientHeight),this._rotateUp(ni*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new qt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function ZE(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function JE(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function KE(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sy),this.state=Te.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function jE(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Te.DOLLY;break;case or.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Te.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Te.ROTATE}break;case or.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Te.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Te.PAN}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(wp)}function QE(s){switch(this.state){case Te.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Te.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Te.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function t1(s){this.enabled===!1||this.enableZoom===!1||this.state!==Te.NONE||(s.preventDefault(),this.dispatchEvent(wp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(sy))}function e1(s){this.enabled!==!1&&this._handleKeyDown(s)}function n1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ar.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Te.TOUCH_ROTATE;break;case ar.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Te.TOUCH_PAN;break;default:this.state=Te.NONE}break;case 2:switch(this.touches.TWO){case ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Te.TOUCH_DOLLY_PAN;break;case ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Te.TOUCH_DOLLY_ROTATE;break;default:this.state=Te.NONE}break;default:this.state=Te.NONE}this.state!==Te.NONE&&this.dispatchEvent(wp)}function i1(s){switch(this._trackPointer(s),this.state){case Te.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Te.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Te.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Te.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Te.NONE}}function s1(s){this.enabled!==!1&&s.preventDefault()}function r1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function o1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ry=(s,t)=>{let e=new ul,n=new In(75,t.width/t.height,.1,100);n.position.set(0,0,7),e.add(n);let i=new _u({canvas:s,alpha:!0});i.setSize(t.width,t.height),i.setPixelRatio(Math.min(window.devicePixelRatio,2));let r=new vu(n,s);r.enableDamping=!0,r.minDistance=1,r.maxDistance=20,r.enableRotate=!0,r.enableZoom=!0,e.add(new yl("#ffffff",.5));let o=new _l("#ffffff",.6);return o.position.set(0,0,10),e.add(o),{scene:e,camera:n,renderer:i,controls:r}};var oy=s=>{let t=new jo({color:"#676767"}),e=20,n=[-5,0,5],i=[];return n.forEach(r=>{let a=[],l=new Float32Array(100);for(let d=0;d<100;d++){let u=e/2-d/99*e;a.push(new G(r,u,0)),l[d]=r}let c=new Xi().setFromPoints(a),h=new dl(c,t);s.add(h);let f=new Float32Array(100).fill(0);i.push({mesh:h,geometry:c,waveData:f,baseXPositions:l})}),{interactiveLines:i,lineMaterial:t}};var Su=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=Ep(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=a1.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=Ep()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:Ep())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ep(){return performance.now()}function a1(){this._document.hidden===!1&&this.reset()}var ay=(s,t,e,n,i,r)=>{let o=new Su,a=new G,l=new xl,c=!1,h=new qt;window.addEventListener("mousemove",d=>{let u=new qt(d.clientX/window.innerWidth*2-1,-(d.clientY/window.innerHeight)*2+1);u.equals(h)||(c=!0,h.copy(u))});let f=()=>{o.update();let d=o.getElapsed();l.setFromCamera(r,t);let u=new ei(new G(0,0,1),0);l.ray.intersectPlane(u,a),i.forEach(({geometry:_,waveData:g,baseXPositions:m})=>{let p=_.attributes.position,b=p.count,M=-1,y=1/0;for(let E=0;E<b;E++){let w=p.getY(E),R=Math.abs(a.y-w);Math.abs(a.x-m[E])<.2&&R<y&&(y=R,M=E)}if(c&&y<.1&&M!==-1){c=!1;let E=4,w=.04;for(let R=-E;R<=E;R++){let v=M+R;if(v>=0&&v<g.length){let I=1-(Math.abs(R)/(E+1))**2;g[v]+=w*I}}}let A=!1;for(let E=0;E<b;E++)g[E]>.001&&(A=!0);if(A){for(let E=0;E<b;E++){let w=0;for(let v=0;v<b;v++){let x=Math.abs(E-v);w+=g[v]*Math.exp(-x*.2)*Math.sin(x*.4-d*5)}let R=m[E];p.setX(E,R+w*.5),g[E]*=.9}p.needsUpdate=!0}}),n.update(),e.render(s,t),window.requestAnimationFrame(f)};f()};Jt.registerPlugin(Qt);var ly=(s,t,e)=>{let n=t.children,i=document.querySelector(".letter-target"),r=document.querySelector(".nav-wrapper");Jt.fromTo(s.rotation,{x:hr.degToRad(-35),y:hr.degToRad(-25)},{x:0,y:2*Math.PI,scrollTrigger:{trigger:i,start:"top top",end:"+=50% center",scrub:!0}}),n.forEach((c,h)=>{Jt.set(c.material,{opacity:0}),Jt.to(c.material,{opacity:1,scrollTrigger:{trigger:i,start:"top center",end:"+=40% center",scrub:!0}}),Jt.to(c.position,{z:c.position.z+h*1.5,x:c.position.y+h!==0?h*(h%2===0?1:-1):0,y:c.position.y+h!==0?h*(h%2===0?2.3:-5.8):0,scrollTrigger:{trigger:i,start:"center center",end:"center top",scrub:!0}})});let o=n[0],a=o.material;a.transparent=!0,Jt.to({},{scrollTrigger:{trigger:i,start:"center+=9% center",scrub:!0,onEnter:()=>{a.wireframe=!1},onLeaveBack:()=>{a.wireframe=!0,a.opacity=1}}}),Jt.to(o.scale,{x:50,y:30,z:1,scrollTrigger:{trigger:i,start:"center+=9% center",end:"bottom-=20% center",scrub:!0}});let l=Jt.timeline({scrollTrigger:{trigger:i,start:"center+=6% center",end:"center+=15.5% center",scrub:!0}});l.to(a.color,{r:.92,g:.92,b:.92},-1),l.to(a,{opacity:0},1),Jt.to(e.color,{r:0,g:0,b:0,scrollTrigger:{trigger:i,start:"center+=13.5% center",end:"center+=14% center",scrub:!0}}),Jt.to("body",{backgroundColor:"#ffffff",scrollTrigger:{trigger:i,start:"center+=13.5% center",end:"center+=14% center",scrub:!0}}),Jt.to("body",{"--bg-lines-opacity":.2,"--bg-lines-color":"#888888",scrollTrigger:{trigger:i,start:"center+=13.5% center",end:"center+=14% center",scrub:!0}}),Jt.to("body",{"--bg-lines-opacity":.2,"--bg-lines-color":"#444444",scrollTrigger:{trigger:i,start:"top top",end:"top+=10% top",scrub:!0}}),Jt.to(r,{scrollTrigger:{trigger:i,start:"center+=13.5% center",end:"center+=14% center",onEnter:()=>{document.documentElement.style.setProperty("--base--color--secondary","#565656"),document.documentElement.style.setProperty("--base--color--nav-link","#191102"),r?.classList.add("nav-wrapper--white")},onLeaveBack:()=>{document.documentElement.style.setProperty("--base--color--secondary","#d8d4d5"),document.documentElement.style.setProperty("--base--color--nav-link","#f8ef39"),r?.classList.remove("nav-wrapper--white")}}})};var cy=()=>{let s=new Sn(.6,1.7),t=new Sn(.6,.8),e=new Sn(.6,.72),n=new Sn(.6,.22),i=new Sn(.6,1.5),r=new Sn(.6,.33),o=new Sn(.6,.4),a=new Sn(.6,.4),l=new Sn(.6,.2),c=new Sn(.33,1.5),h=new Sn(.33,1.5),f=new Yr({color:"#676767",side:Li,wireframe:!0,transparent:!0}),d=new Oe(s,f),u=new Oe(t,f),_=new Oe(e,f),g=new Oe(n,f),m=new Oe(i,f),p=new Oe(r,f),b=new Oe(o,f),M=new Oe(a,f),y=new Oe(l,f),A=new Oe(c,f),E=new Oe(h,f);d.position.set(0,.65,0),u.position.set(0,1.5,.4),u.rotation.x=Math.PI/2,_.position.set(0,1.3,.36),_.rotation.x=Math.PI/2,g.position.set(0,1.4,.76),g.rotation.x=.38,m.position.set(0,.55,.33),p.position.set(0,-.2,.165),p.rotation.x=Math.PI/2,b.position.set(0,.9,.53),b.rotation.x=Math.PI/2,M.position.set(0,.7,.53),M.rotation.x=Math.PI/2,y.position.set(0,.8,.73),y.rotation.x=.002,A.rotation.y=Math.PI/2,A.position.set(.3,.55,.165),E.rotation.y=Math.PI/2,E.position.set(-.3,.55,.165);let w=new is;w.add(d,u,_,g,m,p,b,M,y,A,E),w.scale.set(1.5,1.5,1.5);let R=new is;return R.add(w),{wrapperGroup:R,group:w}};var l1=1920,hy=()=>{let s=document.querySelector("canvas.webgl");if(!s)return;let t={width:window.innerWidth,height:window.innerHeight},{scene:e,camera:n,renderer:i,controls:r}=ry(s,t),{interactiveLines:o,lineMaterial:a}=oy(e),{wrapperGroup:l,group:c}=cy();e.add(l);let h=()=>{let d=hr.clamp(t.width/l1,.85,1.2);l.scale.set(d,d,d)},f=new qt;window.addEventListener("mousemove",d=>{f.x=d.clientX/t.width*2-1,f.y=-(d.clientY/t.height)*2+1}),window.addEventListener("resize",()=>{t.width=window.innerWidth,t.height=window.innerHeight,n.aspect=t.width/t.height,n.updateProjectionMatrix(),i.setSize(t.width,t.height),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),h()}),h(),ay(e,n,i,r,o,f),ly(l,c,a)};var uy=(s,t)=>{s=Jt.utils.toArray(s),t=t||{};let e=Jt.timeline({repeat:t.repeat,paused:t.paused,defaults:{ease:"none"},onReverseComplete:()=>e.totalTime(e.rawTime()+e.duration()*100)}),n=s.length,i=s[0].offsetLeft,r=[],o=[],a=[],l=0,c=(t.speed||1)*100,h=t.snap===!1?b=>b:Jt.utils.snap(t.snap||1),f,d,u,_,g,m;for(Jt.set(s,{xPercent:(b,M)=>{let y=o[b]=parseFloat(Jt.getProperty(M,"width","px"));return a[b]=h(parseFloat(Jt.getProperty(M,"x","px"))/y*100+Jt.getProperty(M,"xPercent")),a[b]}}),Jt.set(s,{x:0}),f=s[n-1].offsetLeft+a[n-1]/100*o[n-1]-i+s[n-1].offsetWidth*Jt.getProperty(s[n-1],"scaleX")+(parseFloat(t.paddingRight)||0),m=0;m<n;m++)g=s[m],d=a[m]/100*o[m],u=g.offsetLeft+d-i,_=u+o[m]*Jt.getProperty(g,"scaleX"),e.to(g,{xPercent:h((d-_)/o[m]*100),duration:_/c},0).fromTo(g,{xPercent:h((d-_+f)/o[m]*100)},{xPercent:a[m],duration:(d-_+f-d)/c,immediateRender:!1},_/c).add("label"+m,u/c),r[m]=u/c;function p(b,M){M=M||{},Math.abs(b-l)>n/2&&(b+=b>l?-n:n);let y=Jt.utils.wrap(0,n,b),A=r[y];return A>e.time()!=b>l&&(M.modifiers={time:Jt.utils.wrap(0,e.duration())},A+=e.duration()*(b>l?1:-1)),l=y,M.overwrite=!0,e.tweenTo(A,M)}return e.next=b=>p(l+1,b),e.previous=b=>p(l-1,b),e.current=()=>l,e.toIndex=(b,M)=>p(b,M),e.times=r,e.progress(1,!0).progress(0,!0),t.reversed&&(e.vars.onReverseComplete(),e.reverse()),e};var dy=()=>{let s=Jt.utils.toArray(".heading-section__box"),t=uy(s,{repeat:-1,speed:2})};var c1=({strings:s=["Put your strings here...","and Enjoy!"],typeSpeed:t=100,backSpeed:e=50,backDelay:n=500,startDelay:i=500,cursorChar:r="|",placeholder:o=!1,showCursor:a=!0,disableBackTyping:l=!1,onFinished:c=function(){},loop:h=!0})=>({strings:s,typeSpeed:t,backSpeed:e,cursorChar:r,backDelay:n,placeholder:o,startDelay:i,showCursor:a,loop:h,disableBackTyping:l,onFinished:c}),Ap=(s,t)=>{let e=0,n,i,r=(d,u)=>{e===n&&u.loop&&(e=0),setTimeout(()=>{o(d[e],u)},u.startDelay)},o=(d,u)=>{let _=0,g=d.length,m=setInterval(()=>{if(u.placeholder?s.placeholder+=d[_]:s.textContent+=d[_],++_===g)return a(m,u)},u.typeSpeed)},a=(d,u)=>{if(clearInterval(d),u.disableBackTyping&&e===n-1||!u.loop&&e===n-1)return u.onFinished();setTimeout(()=>l(u),u.backDelay)},l=d=>{let u=d.placeholder?s.placeholder:s.textContent,_=u.length,g=setInterval(()=>{if(d.placeholder?s.placeholder=s.placeholder.substr(0,--_):s.textContent=u.substr(0,--_),_===0)return c(g,d)},d.backSpeed)},c=(d,u)=>{clearInterval(d),++e,r(i,u)},h=(d,u)=>{let _=document.createElement("span");_.classList.add("ityped-cursor"),_.textContent="|",_.textContent=u.cursorChar,d.insertAdjacentElement("afterend",_)};return(d=>{let u=c1(d||{}),_=u.strings;i=_,n=_.length,typeof s=="string"&&(s=document.querySelector(s)),u.showCursor&&h(s,u),r(_,u)})(t)};var fy=()=>{let s=document.querySelector(".contact"),t=document.querySelector(".contact-heading__span")??"",e=document.querySelector(".contact__intro-text")??"";Ap(t,{typeSpeed:200,backDelay:2e3,strings:["hello","hi"]}),Jt.to({},{scrollTrigger:{trigger:s,start:"top-=20% center",onEnter:()=>{Jt.to(e,{opacity:1,delay:1}),Ap(e,{typeSpeed:50,disableBackTyping:!0,showCursor:!1,loop:!0,backDelay:1,backSpeed:1,strings:[" ","Let\u2019s create a stunning website that elevates your brand and engages your audience effectively."]})},onLeaveBack:()=>{Jt.to(e,{opacity:0,duration:.5})}}})};var py=()=>{let s=document.querySelectorAll(".contact__intro-heading--clip span");Jt.timeline({scrollTrigger:{trigger:".contact",start:"top-=20% center",toggleActions:"play none none reverse"}}).fromTo(s,{x:100},{x:0,ease:"power1.out",duration:1.5})};var my=()=>{document.querySelectorAll(".about-us__container-text--fill").forEach(t=>{let e=t.closest(".about-us__container-text--bg");e&&Jt.to(t,{clipPath:"inset(0% 0% 0% 0%)",ease:"none",scrollTrigger:{trigger:e,start:"top center+=15%",end:"bottom center+=15%",scrub:!0}})})};var h1="1.3.4";function yy(s,t,e){return Math.max(s,Math.min(t,e))}function u1(s,t,e){return(1-e)*s+e*t}function d1(s,t,e,n){return u1(s,t,1-Math.exp(-e*n))}function f1(s,t){return(s%t+t)%t}var p1=class{constructor(){Bt(this,"isRunning",!1);Bt(this,"value",0);Bt(this,"from",0);Bt(this,"to",0);Bt(this,"currentTime",0);Bt(this,"lerp");Bt(this,"duration");Bt(this,"easing");Bt(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=yy(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=d1(this.value,this.to,this.lerp*60,s),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function m1(s,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(i,n)},t)}}var g1=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Bt(this,"width",0);Bt(this,"height",0);Bt(this,"scrollHeight",0);Bt(this,"scrollWidth",0);Bt(this,"debouncedResize");Bt(this,"wrapperResizeObserver");Bt(this,"contentResizeObserver");Bt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Bt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Bt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=m1(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},xy=class{constructor(){Bt(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(s,t){return this.events[s]?.push(t)||(this.events[s]=[t]),()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},gy=100/6,ur={passive:!1},_1=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Bt(this,"touchStart",{x:0,y:0});Bt(this,"lastDelta",{x:0,y:0});Bt(this,"window",{width:0,height:0});Bt(this,"emitter",new xy);Bt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Bt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Bt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Bt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=n===1?gy:n===2?this.window.width:1,r=n===1?gy:n===2?this.window.height:1;t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Bt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ur),this.element.addEventListener("touchstart",this.onTouchStart,ur),this.element.addEventListener("touchmove",this.onTouchMove,ur),this.element.addEventListener("touchend",this.onTouchEnd,ur)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,ur),this.element.removeEventListener("touchstart",this.onTouchStart,ur),this.element.removeEventListener("touchmove",this.onTouchMove,ur),this.element.removeEventListener("touchend",this.onTouchEnd,ur)}},_y=s=>Math.min(1,1.001-Math.pow(2,-10*s)),vy=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaMultiplier:o=35,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d="vertical",touchMultiplier:u=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:b=!0,autoRaf:M=!1,anchors:y=!1,autoToggle:A=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:w=!1}={}){Bt(this,"_isScrolling",!1);Bt(this,"_isStopped",!1);Bt(this,"_isLocked",!1);Bt(this,"_preventNextNativeScrollEvent",!1);Bt(this,"_resetVelocityTimeout",null);Bt(this,"__rafID",null);Bt(this,"isTouching");Bt(this,"time",0);Bt(this,"userData",{});Bt(this,"lastVelocity",0);Bt(this,"velocity",0);Bt(this,"direction",0);Bt(this,"options");Bt(this,"targetScroll");Bt(this,"animatedScroll");Bt(this,"animate",new p1);Bt(this,"emitter",new xy);Bt(this,"dimensions");Bt(this,"virtualScroll");Bt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Bt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Bt(this,"onTransitionEnd",s=>{if(s.propertyName.includes("overflow")){let t=this.isHorizontal?"overflow-x":"overflow-y",e=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(e)?this.stop():this.start()}});Bt(this,"onClick",s=>{let e=s.composedPath().find(n=>n instanceof HTMLAnchorElement&&(n.getAttribute("href")?.startsWith("#")||n.getAttribute("href")?.startsWith("/#")||n.getAttribute("href")?.startsWith("./#")));if(e){let n=e.getAttribute("href");if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(r=0),this.scrollTo(r,i)}}});Bt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Bt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof h=="function"&&h?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||r&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();let u=i&&this.options.syncTouch,g=i&&n.type==="touchend"&&Math.abs(d)>5;g&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Bt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Bt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=h1,(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=_y:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:u,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:b,autoRaf:M,anchors:y,autoToggle:A,allowNestedScroll:E,__experimental__naiveDimensions:w},this.dimensions=new g1(s,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new _1(e,{touchMultiplier:u,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:r=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:h=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof s=="string"&&["top","left","start"].includes(s))s=0;else if(typeof s=="string"&&["bottom","right","end"].includes(s))s=this.limit;else{let d;if(typeof s=="string"?d=document.querySelector(s):s instanceof HTMLElement&&s?.nodeType&&(d=s),d){if(this.options.wrapper!==window){let _=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}let u=d.getBoundingClientRect();s=(this.isHorizontal?u.left:u.top)+this.animatedScroll}}if(typeof s=="number"){if(s+=t,s=Math.round(s),this.options.infinite){if(h){this.targetScroll=this.animatedScroll=this.scroll;let d=s-this.animatedScroll;d>this.limit/2?s=s-this.limit:d<-this.limit/2&&(s=s+this.limit)}}else s=yy(0,s,this.limit);if(s===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=f??{},e){this.animatedScroll=this.targetScroll=s,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}h||(this.targetScroll=s),typeof i=="number"&&typeof r!="function"?r=_y:typeof r=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,s,{duration:i,easing:r,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(d,u)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),h&&(this.targetScroll=d),u||this.emit(),u&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(s,{deltaX:t,deltaY:e}){let n=Date.now(),i=s._lenis??(s._lenis={}),r,o,a,l,c,h,f,d,u=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();let A=window.getComputedStyle(s);i.computedStyle=A;let E=A.overflowX,w=A.overflowY;if(r=["auto","overlay","scroll"].includes(E),o=["auto","overlay","scroll"].includes(w),i.hasOverflowX=r,i.hasOverflowY=o,!r&&!o||u==="vertical"&&!o||u==="horizontal"&&!r)return!1;c=s.scrollWidth,h=s.scrollHeight,f=s.clientWidth,d=s.clientHeight,a=c>f,l=h>d,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=h,i.clientWidth=f,i.clientHeight=d}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,h=i.scrollHeight,f=i.clientWidth,d=i.clientHeight;if(!r&&!o||!a&&!l||u==="vertical"&&(!o||!l)||u==="horizontal"&&(!r||!a))return!1;let _;if(u==="horizontal")_="x";else if(u==="vertical")_="y";else{let A=t!==0,E=e!==0;A&&r&&a&&(_="x"),E&&o&&l&&(_="y")}if(!_)return!1;let g,m,p,b,M;if(_==="x")g=s.scrollLeft,m=c-f,p=t,b=r,M=a;else if(_==="y")g=s.scrollTop,m=h-d,p=e,b=o,M=l;else return!1;return(p>0?g<m:g>0)&&b&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?f1(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};var Sy=()=>{let s=new vy({smoothWheel:!0,lerp:.05});s.on("scroll",Qt.update),Jt.ticker.add(t=>{s.raf(t*1e3)}),Jt.ticker.lagSmoothing(0)};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{Jt.registerPlugin(Qt),Sy(),Nm(),xg(),hy(),dy(),fy(),py(),my()});})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

animejs/lib/anime.esm.js:
  (**
   * anime.js - ESM
   * @version v4.0.2
   * @author Julian Garnier
   * @license MIT
   * @copyright (c) 2025 Julian Garnier
   * @see https://animejs.com
   *)

gsap/Observer.js:
  (*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
