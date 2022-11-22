/* empty css              */(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Il=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mg(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Tg(i){var e=i.default;if(typeof e=="function"){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var Gs=function(i){return i&&i.Math==Math&&i},Hn=Gs(typeof globalThis=="object"&&globalThis)||Gs(typeof window=="object"&&window)||Gs(typeof self=="object"&&self)||Gs(typeof Il=="object"&&Il)||function(){return this}()||Function("return this")(),_c={},Gn=function(i){try{return!!i()}catch{return!0}},Ag=Gn,Oi=!Ag(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),Eg=Gn,xc=!Eg(function(){var i=function(){}.bind();return typeof i!="function"||i.hasOwnProperty("prototype")}),Cg=xc,Ws=Function.prototype.call,Gt=Cg?Ws.bind(Ws):function(){return Ws.apply(Ws,arguments)},xd={},yd={}.propertyIsEnumerable,bd=Object.getOwnPropertyDescriptor,Dg=bd&&!yd.call({1:2},1);xd.f=Dg?function(e){var t=bd(this,e);return!!t&&t.enumerable}:yd;var wd=function(i,e){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:e}},Sd=xc,Md=Function.prototype,Fl=Md.call,Rg=Sd&&Md.bind.bind(Fl,Fl),bn=Sd?Rg:function(i){return function(){return Fl.apply(i,arguments)}},Td=bn,Pg=Td({}.toString),Lg=Td("".slice),yc=function(i){return Lg(Pg(i),8,-1)},Ig=bn,Fg=Gn,Ng=yc,_o=Object,Og=Ig("".split),Bg=Fg(function(){return!_o("z").propertyIsEnumerable(0)})?function(i){return Ng(i)=="String"?Og(i,""):_o(i)}:_o,to=function(i){return i==null},kg=to,Ug=TypeError,Ad=function(i){if(kg(i))throw Ug("Can't call method on "+i);return i},zg=Bg,Vg=Ad,bc=function(i){return zg(Vg(i))},Nl=typeof document=="object"&&document.all,Hg=typeof Nl>"u"&&Nl!==void 0,Ed={all:Nl,IS_HTMLDDA:Hg},Cd=Ed,Gg=Cd.all,Wt=Cd.IS_HTMLDDA?function(i){return typeof i=="function"||i===Gg}:function(i){return typeof i=="function"},lu=Wt,Dd=Ed,Wg=Dd.all,Rs=Dd.IS_HTMLDDA?function(i){return typeof i=="object"?i!==null:lu(i)||i===Wg}:function(i){return typeof i=="object"?i!==null:lu(i)},xo=Hn,$g=Wt,jg=function(i){return $g(i)?i:void 0},Wn=function(i,e){return arguments.length<2?jg(xo[i]):xo[i]&&xo[i][e]},qg=bn,Rd=qg({}.isPrototypeOf),Xg=Wn,Kg=Xg("navigator","userAgent")||"",Pd=Hn,yo=Kg,cu=Pd.process,uu=Pd.Deno,fu=cu&&cu.versions||uu&&uu.version,hu=fu&&fu.v8,an,Ra;hu&&(an=hu.split("."),Ra=an[0]>0&&an[0]<4?1:+(an[0]+an[1]));!Ra&&yo&&(an=yo.match(/Edge\/(\d+)/),(!an||an[1]>=74)&&(an=yo.match(/Chrome\/(\d+)/),an&&(Ra=+an[1])));var Yg=Ra,du=Yg,Zg=Gn,Ld=!!Object.getOwnPropertySymbols&&!Zg(function(){var i=Symbol();return!String(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&du&&du<41}),Jg=Ld,Id=Jg&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Qg=Wn,e0=Wt,t0=Rd,n0=Id,i0=Object,Fd=n0?function(i){return typeof i=="symbol"}:function(i){var e=Qg("Symbol");return e0(e)&&t0(e.prototype,i0(i))},r0=String,no=function(i){try{return r0(i)}catch{return"Object"}},s0=Wt,a0=no,o0=TypeError,fn=function(i){if(s0(i))return i;throw o0(a0(i)+" is not a function")},l0=fn,c0=to,wc=function(i,e){var t=i[e];return c0(t)?void 0:l0(t)},bo=Gt,wo=Wt,So=Rs,u0=TypeError,f0=function(i,e){var t,n;if(e==="string"&&wo(t=i.toString)&&!So(n=bo(t,i))||wo(t=i.valueOf)&&!So(n=bo(t,i))||e!=="string"&&wo(t=i.toString)&&!So(n=bo(t,i)))return n;throw u0("Can't convert object to primitive value")},Sc={exports:{}},pu=Hn,h0=Object.defineProperty,Mc=function(i,e){try{h0(pu,i,{value:e,configurable:!0,writable:!0})}catch{pu[i]=e}return e},d0=Hn,p0=Mc,mu="__core-js_shared__",m0=d0[mu]||p0(mu,{}),Tc=m0,gu=Tc;(Sc.exports=function(i,e){return gu[i]||(gu[i]=e!==void 0?e:{})})("versions",[]).push({version:"3.26.1",mode:"global",copyright:"\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"});var g0=Ad,v0=Object,_0=function(i){return v0(g0(i))},x0=bn,y0=_0,b0=x0({}.hasOwnProperty),Bi=Object.hasOwn||function(e,t){return b0(y0(e),t)},w0=bn,S0=0,M0=Math.random(),T0=w0(1 .toString),Nd=function(i){return"Symbol("+(i===void 0?"":i)+")_"+T0(++S0+M0,36)},A0=Hn,E0=Sc.exports,vu=Bi,C0=Nd,_u=Ld,Od=Id,Xi=E0("wks"),Ai=A0.Symbol,xu=Ai&&Ai.for,D0=Od?Ai:Ai&&Ai.withoutSetter||C0,Fr=function(i){if(!vu(Xi,i)||!(_u||typeof Xi[i]=="string")){var e="Symbol."+i;_u&&vu(Ai,i)?Xi[i]=Ai[i]:Od&&xu?Xi[i]=xu(e):Xi[i]=D0(e)}return Xi[i]},R0=Gt,yu=Rs,bu=Fd,P0=wc,L0=f0,I0=Fr,F0=TypeError,N0=I0("toPrimitive"),O0=function(i,e){if(!yu(i)||bu(i))return i;var t=P0(i,N0),n;if(t){if(e===void 0&&(e="default"),n=R0(t,i,e),!yu(n)||bu(n))return n;throw F0("Can't convert object to primitive value")}return e===void 0&&(e="number"),L0(i,e)},B0=O0,k0=Fd,Bd=function(i){var e=B0(i,"string");return k0(e)?e:e+""},U0=Hn,wu=Rs,Ol=U0.document,z0=wu(Ol)&&wu(Ol.createElement),V0=function(i){return z0?Ol.createElement(i):{}},H0=Oi,G0=Gn,W0=V0,kd=!H0&&!G0(function(){return Object.defineProperty(W0("div"),"a",{get:function(){return 7}}).a!=7}),$0=Oi,j0=Gt,q0=xd,X0=wd,K0=bc,Y0=Bd,Z0=Bi,J0=kd,Su=Object.getOwnPropertyDescriptor;_c.f=$0?Su:function(e,t){if(e=K0(e),t=Y0(t),J0)try{return Su(e,t)}catch{}if(Z0(e,t))return X0(!j0(q0.f,e,t),e[t])};var io={},Q0=Oi,ev=Gn,tv=Q0&&ev(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42}),nv=Rs,iv=String,rv=TypeError,Ot=function(i){if(nv(i))return i;throw rv(iv(i)+" is not an object")},sv=Oi,av=kd,ov=tv,$s=Ot,Mu=Bd,lv=TypeError,Mo=Object.defineProperty,cv=Object.getOwnPropertyDescriptor,To="enumerable",Ao="configurable",Eo="writable";io.f=sv?ov?function(e,t,n){if($s(e),t=Mu(t),$s(n),typeof e=="function"&&t==="prototype"&&"value"in n&&Eo in n&&!n[Eo]){var r=cv(e,t);r&&r[Eo]&&(e[t]=n.value,n={configurable:Ao in n?n[Ao]:r[Ao],enumerable:To in n?n[To]:r[To],writable:!1})}return Mo(e,t,n)}:Mo:function(e,t,n){if($s(e),t=Mu(t),$s(n),av)try{return Mo(e,t,n)}catch{}if("get"in n||"set"in n)throw lv("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var uv=Oi,fv=io,hv=wd,Ud=uv?function(i,e,t){return fv.f(i,e,hv(1,t))}:function(i,e,t){return i[e]=t,i},zd={exports:{}},Bl=Oi,dv=Bi,Vd=Function.prototype,pv=Bl&&Object.getOwnPropertyDescriptor,Ac=dv(Vd,"name"),mv=Ac&&function(){}.name==="something",gv=Ac&&(!Bl||Bl&&pv(Vd,"name").configurable),vv={EXISTS:Ac,PROPER:mv,CONFIGURABLE:gv},_v=bn,xv=Wt,kl=Tc,yv=_v(Function.toString);xv(kl.inspectSource)||(kl.inspectSource=function(i){return yv(i)});var Hd=kl.inspectSource,bv=Hn,wv=Wt,Tu=bv.WeakMap,Sv=wv(Tu)&&/native code/.test(String(Tu)),Mv=Sc.exports,Tv=Nd,Au=Mv("keys"),Av=function(i){return Au[i]||(Au[i]=Tv(i))},Gd={},Ev=Sv,Wd=Hn,Cv=Rs,Dv=Ud,Co=Bi,Do=Tc,Rv=Av,Pv=Gd,Eu="Object already initialized",Ul=Wd.TypeError,Lv=Wd.WeakMap,Pa,ps,La,Iv=function(i){return La(i)?ps(i):Pa(i,{})},Fv=function(i){return function(e){var t;if(!Cv(e)||(t=ps(e)).type!==i)throw Ul("Incompatible receiver, "+i+" required");return t}};if(Ev||Do.state){var dn=Do.state||(Do.state=new Lv);dn.get=dn.get,dn.has=dn.has,dn.set=dn.set,Pa=function(i,e){if(dn.has(i))throw Ul(Eu);return e.facade=i,dn.set(i,e),e},ps=function(i){return dn.get(i)||{}},La=function(i){return dn.has(i)}}else{var Ki=Rv("state");Pv[Ki]=!0,Pa=function(i,e){if(Co(i,Ki))throw Ul(Eu);return e.facade=i,Dv(i,Ki,e),e},ps=function(i){return Co(i,Ki)?i[Ki]:{}},La=function(i){return Co(i,Ki)}}var Nv={set:Pa,get:ps,has:La,enforce:Iv,getterFor:Fv},Ov=Gn,Bv=Wt,js=Bi,zl=Oi,kv=vv.CONFIGURABLE,Uv=Hd,$d=Nv,zv=$d.enforce,Vv=$d.get,wa=Object.defineProperty,Hv=zl&&!Ov(function(){return wa(function(){},"length",{value:8}).length!==8}),Gv=String(String).split("String"),Wv=zd.exports=function(i,e,t){String(e).slice(0,7)==="Symbol("&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!js(i,"name")||kv&&i.name!==e)&&(zl?wa(i,"name",{value:e,configurable:!0}):i.name=e),Hv&&t&&js(t,"arity")&&i.length!==t.arity&&wa(i,"length",{value:t.arity});try{t&&js(t,"constructor")&&t.constructor?zl&&wa(i,"prototype",{writable:!1}):i.prototype&&(i.prototype=void 0)}catch{}var n=zv(i);return js(n,"source")||(n.source=Gv.join(typeof e=="string"?e:"")),i};Function.prototype.toString=Wv(function(){return Bv(this)&&Vv(this).source||Uv(this)},"toString");var $v=Wt,jv=io,qv=zd.exports,Xv=Mc,Kv=function(i,e,t,n){n||(n={});var r=n.enumerable,s=n.name!==void 0?n.name:e;if($v(t)&&qv(t,s,n),n.global)r?i[e]=t:Xv(e,t);else{try{n.unsafe?i[e]&&(r=!0):delete i[e]}catch{}r?i[e]=t:jv.f(i,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return i},jd={},Yv=Math.ceil,Zv=Math.floor,Jv=Math.trunc||function(e){var t=+e;return(t>0?Zv:Yv)(t)},Qv=Jv,qd=function(i){var e=+i;return e!==e||e===0?0:Qv(e)},e_=qd,t_=Math.max,n_=Math.min,i_=function(i,e){var t=e_(i);return t<0?t_(t+e,0):n_(t,e)},r_=qd,s_=Math.min,a_=function(i){return i>0?s_(r_(i),9007199254740991):0},o_=a_,Xd=function(i){return o_(i.length)},l_=bc,c_=i_,u_=Xd,Cu=function(i){return function(e,t,n){var r=l_(e),s=u_(r),a=c_(n,s),o;if(i&&t!=t){for(;s>a;)if(o=r[a++],o!=o)return!0}else for(;s>a;a++)if((i||a in r)&&r[a]===t)return i||a||0;return!i&&-1}},f_={includes:Cu(!0),indexOf:Cu(!1)},h_=bn,Ro=Bi,d_=bc,p_=f_.indexOf,m_=Gd,Du=h_([].push),g_=function(i,e){var t=d_(i),n=0,r=[],s;for(s in t)!Ro(m_,s)&&Ro(t,s)&&Du(r,s);for(;e.length>n;)Ro(t,s=e[n++])&&(~p_(r,s)||Du(r,s));return r},v_=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],__=g_,x_=v_,y_=x_.concat("length","prototype");jd.f=Object.getOwnPropertyNames||function(e){return __(e,y_)};var Kd={};Kd.f=Object.getOwnPropertySymbols;var b_=Wn,w_=bn,S_=jd,M_=Kd,T_=Ot,A_=w_([].concat),E_=b_("Reflect","ownKeys")||function(e){var t=S_.f(T_(e)),n=M_.f;return n?A_(t,n(e)):t},Ru=Bi,C_=E_,D_=_c,R_=io,P_=function(i,e,t){for(var n=C_(e),r=R_.f,s=D_.f,a=0;a<n.length;a++){var o=n[a];!Ru(i,o)&&!(t&&Ru(t,o))&&r(i,o,s(e,o))}},L_=Gn,I_=Wt,F_=/#|\.prototype\./,Ps=function(i,e){var t=O_[N_(i)];return t==k_?!0:t==B_?!1:I_(e)?L_(e):!!e},N_=Ps.normalize=function(i){return String(i).replace(F_,".").toLowerCase()},O_=Ps.data={},B_=Ps.NATIVE="N",k_=Ps.POLYFILL="P",U_=Ps,Po=Hn,z_=_c.f,V_=Ud,H_=Kv,G_=Mc,W_=P_,$_=U_,$n=function(i,e){var t=i.target,n=i.global,r=i.stat,s,a,o,l,c,u;if(n?a=Po:r?a=Po[t]||G_(t,{}):a=(Po[t]||{}).prototype,a)for(o in e){if(c=e[o],i.dontCallGetSet?(u=z_(a,o),l=u&&u.value):l=a[o],s=$_(n?o:t+(r?".":"#")+o,i.forced),!s&&l!==void 0){if(typeof c==typeof l)continue;W_(c,l)}(i.sham||l&&l.sham)&&V_(c,"sham",!0),H_(a,o,c,i)}},qs=Gt,Lo=fn,j_=Ot,Yd=function(e,t){var n=j_(this),r=Lo(n.get),s=Lo(n.has),a=Lo(n.set),o,l;return qs(s,n,e)?(o=qs(r,n,e),"update"in t&&(o=t.update(o,e,n),qs(a,n,e,o)),o):(l=t.insert(e,n),qs(a,n,e,l),l)},q_=$n,X_=Yd;q_({target:"Map",proto:!0,real:!0,forced:!0},{emplace:X_});var K_=$n,Y_=Yd;K_({target:"WeakMap",proto:!0,real:!0,forced:!0},{emplace:Y_});var Z_=Fr,J_=Z_("toStringTag"),Zd={};Zd[J_]="z";var Q_=String(Zd)==="[object z]",ex=Q_,tx=Wt,Sa=yc,nx=Fr,ix=nx("toStringTag"),rx=Object,sx=Sa(function(){return arguments}())=="Arguments",ax=function(i,e){try{return i[e]}catch{}},Jd=ex?Sa:function(i){var e,t,n;return i===void 0?"Undefined":i===null?"Null":typeof(t=ax(e=rx(i),ix))=="string"?t:sx?Sa(e):(n=Sa(e))=="Object"&&tx(e.callee)?"Arguments":n},ox=bn,lx=Gn,Qd=Wt,cx=Jd,ux=Wn,fx=Hd,ep=function(){},hx=[],tp=ux("Reflect","construct"),Ec=/^\s*(?:class|function)\b/,dx=ox(Ec.exec),px=!Ec.exec(ep),Kr=function(e){if(!Qd(e))return!1;try{return tp(ep,hx,e),!0}catch{return!1}},np=function(e){if(!Qd(e))return!1;switch(cx(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return px||!!dx(Ec,fx(e))}catch{return!0}};np.sham=!0;var mx=!tp||lx(function(){var i;return Kr(Kr.call)||!Kr(Object)||!Kr(function(){i=!0})||i})?np:Kr,gx=mx,vx=no,_x=TypeError,xx=function(i){if(gx(i))return i;throw _x(vx(i)+" is not a constructor")},Pu=Ot,yx=xx,bx=to,wx=Fr,Sx=wx("species"),ro=function(i,e){var t=Pu(i).constructor,n;return t===void 0||bx(n=Pu(t)[Sx])?e:yx(n)},Mx=yc,Tx=bn,Ax=function(i){if(Mx(i)==="Function")return Tx(i)},Lu=Ax,Ex=fn,Cx=xc,Dx=Lu(Lu.bind),Rx=function(i,e){return Ex(i),e===void 0?i:Cx?Dx(i,e):function(){return i.apply(e,arguments)}},ip={},Px=Fr,Lx=ip,Ix=Px("iterator"),Fx=Array.prototype,Nx=function(i){return i!==void 0&&(Lx.Array===i||Fx[Ix]===i)},Ox=Jd,Iu=wc,Bx=to,kx=ip,Ux=Fr,zx=Ux("iterator"),rp=function(i){if(!Bx(i))return Iu(i,zx)||Iu(i,"@@iterator")||kx[Ox(i)]},Vx=Gt,Hx=fn,Gx=Ot,Wx=no,$x=rp,jx=TypeError,sp=function(i,e){var t=arguments.length<2?$x(i):e;if(Hx(t))return Gx(Vx(t,i));throw jx(Wx(i)+" is not iterable")},qx=Gt,Fu=Ot,Xx=wc,Kx=function(i,e,t){var n,r;Fu(i);try{if(n=Xx(i,"return"),!n){if(e==="throw")throw t;return t}n=qx(n,i)}catch(s){r=!0,n=s}if(e==="throw")throw t;if(r)throw n;return Fu(n),t},Yx=Rx,Zx=Gt,Jx=Ot,Qx=no,ey=Nx,ty=Xd,Nu=Rd,ny=sp,iy=rp,Ou=Kx,ry=TypeError,Ma=function(i,e){this.stopped=i,this.result=e},Bu=Ma.prototype,ki=function(i,e,t){var n=t&&t.that,r=!!(t&&t.AS_ENTRIES),s=!!(t&&t.IS_RECORD),a=!!(t&&t.IS_ITERATOR),o=!!(t&&t.INTERRUPTED),l=Yx(e,n),c,u,h,f,d,g,m,p=function(y){return c&&Ou(c,"normal",y),new Ma(!0,y)},v=function(y){return r?(Jx(y),o?l(y[0],y[1],p):l(y[0],y[1])):o?l(y,p):l(y)};if(s)c=i.iterator;else if(a)c=i;else{if(u=iy(i),!u)throw ry(Qx(i)+" is not iterable");if(ey(u)){for(h=0,f=ty(i);f>h;h++)if(d=v(i[h]),d&&Nu(Bu,d))return d;return new Ma(!1)}c=ny(i,u)}for(g=s?i.next:c.next;!(m=Zx(g,c)).done;){try{d=v(m.value)}catch(y){Ou(c,"throw",y)}if(typeof d=="object"&&d&&Nu(Bu,d))return d}return new Ma(!1)},sy=$n,ay=Wn,oy=Gt,ly=fn,cy=Ot,uy=ro,fy=ki;sy({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(e){var t=cy(this),n=new(uy(t,ay("Set")))(t),r=ly(n.delete);return fy(e,function(s){oy(r,n,s)}),n}});var hy=$n,dy=Wn,ku=Gt,Uu=fn,py=Ot,my=ro,gy=ki;hy({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(e){var t=py(this),n=new(my(t,dy("Set"))),r=Uu(t.has),s=Uu(n.add);return gy(e,function(a){ku(r,t,a)&&ku(s,n,a)}),n}});var vy=$n,_y=Gt,xy=fn,yy=Ot,by=ki;vy({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(e){var t=yy(this),n=xy(t.has);return!by(e,function(r,s){if(_y(n,t,r)===!0)return s()},{INTERRUPTED:!0}).stopped}});var wy=$n,Sy=Wn,My=Gt,Ty=fn,Ay=Wt,Ey=Ot,Cy=sp,Dy=ki;wy({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(e){var t=Cy(this),n=Ey(e),r=n.has;return Ay(r)||(n=new(Sy("Set"))(e),r=Ty(n.has)),!Dy(t,function(s,a){if(My(r,n,s)===!1)return a()},{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}});var Ry=$n,Py=Gt,Ly=fn,Iy=Ot,Fy=ki;Ry({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(e){var t=Iy(this),n=Ly(t.has);return!Fy(e,function(r,s){if(Py(n,t,r)===!1)return s()},{INTERRUPTED:!0}).stopped}});var Ny=$n,Oy=Wn,By=fn,ky=Ot,Uy=ro,zy=ki;Ny({target:"Set",proto:!0,real:!0,forced:!0},{union:function(e){var t=ky(this),n=new(Uy(t,Oy("Set")))(t);return zy(e,By(n.add),{that:n}),n}});var Vy=$n,Hy=Wn,zu=Gt,Vu=fn,Gy=Ot,Wy=ro,$y=ki;Vy({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(e){var t=Gy(this),n=new(Wy(t,Hy("Set")))(t),r=Vu(n.delete),s=Vu(n.add);return $y(e,function(a){zu(r,n,a)||zu(s,n,a)}),n}});var jy={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(Il,function(){var t=function(){function n(d){return a.appendChild(d.dom),d}function r(d){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===d?"block":"none";s=d}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(d){d.preventDefault(),r(++s%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,u=n(new t.Panel("FPS","#0ff","#002")),h=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=n(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:a,addPanel:n,showPanel:r,begin:function(){o=(performance||Date).now()},end:function(){c++;var d=(performance||Date).now();if(h.update(d-o,200),d>l+1e3&&(u.update(1e3*c/(d-l),100),l=d,c=0,f)){var g=performance.memory;f.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return d},update:function(){o=this.end()},domElement:a,setMode:r}};return t.Panel=function(n,r,s){var a=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,f=3*c,d=2*c,g=3*c,m=15*c,p=74*c,v=30*c,y=document.createElement("canvas");y.width=u,y.height=h,y.style.cssText="width:80px;height:48px";var x=y.getContext("2d");return x.font="bold "+9*c+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=s,x.fillRect(0,0,u,h),x.fillStyle=r,x.fillText(n,f,d),x.fillRect(g,m,p,v),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(g,m,p,v),{dom:y,update:function(_,M){a=Math.min(a,_),o=Math.max(o,_),x.fillStyle=s,x.globalAlpha=1,x.fillRect(0,0,u,m),x.fillStyle=r,x.fillText(l(_)+" "+n+" ("+l(a)+"-"+l(o)+")",f,d),x.drawImage(y,g+c,m,p-c,v,g,m,p-c,v),x.fillRect(g+p-c,m,c,v),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(g+p-c,m,c,l((1-_/M)*v))}}},t})})(jy);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cc="146",qy=0,Hu=1,Xy=2,ap=1,Ky=2,rs=3,Pi=0,Nt=1,Fn=2,oi=0,pr=1,Ia=2,Gu=3,Wu=4,Yy=5,ur=100,Zy=101,Jy=102,$u=103,ju=104,Qy=200,eb=201,tb=202,nb=203,op=204,lp=205,ib=206,rb=207,sb=208,ab=209,ob=210,lb=0,cb=1,ub=2,Vl=3,fb=4,hb=5,db=6,pb=7,cp=0,mb=1,gb=2,Un=0,vb=1,_b=2,xb=3,yb=4,bb=5,up=300,xr=301,yr=302,Hl=303,Gl=304,so=306,br=1e3,Kt=1001,Fa=1002,_t=1003,Wl=1004,$l=1005,Ft=1006,fp=1007,Nr=1008,Li=1009,wb=1010,Sb=1011,hp=1012,Mb=1013,Mi=1014,ii=1015,ms=1016,Tb=1017,Ab=1018,mr=1020,Eb=1021,Cb=1022,Yt=1023,Db=1024,Rb=1025,Ei=1026,wr=1027,Pb=1028,Lb=1029,Ib=1030,Fb=1031,Nb=1033,Io=33776,Fo=33777,No=33778,Oo=33779,qu=35840,Xu=35841,Ku=35842,Yu=35843,Ob=36196,Zu=37492,Ju=37496,Qu=37808,ef=37809,tf=37810,nf=37811,rf=37812,sf=37813,af=37814,of=37815,lf=37816,cf=37817,uf=37818,ff=37819,hf=37820,df=37821,pf=36492,gs=2300,Sr=2301,Bo=2302,mf=2400,gf=2401,vf=2402,Bb=2500,kb=0,Dc=1,Na=2,Ii=3e3,Ge=3001,Ub=3200,zb=3201,Rc=0,Vb=1,Rn="srgb",Ti="srgb-linear",ko=7680,Hb=519,jl=35044,_f="300 es",ql=1035;class Or{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xf=1234567;const os=Math.PI/180,vs=180/Math.PI;function on(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Rt(i,e,t){return Math.max(e,Math.min(t,i))}function Pc(i,e){return(i%e+e)%e}function Gb(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Wb(i,e,t){return i!==e?(t-i)/(e-i):0}function ls(i,e,t){return(1-t)*i+t*e}function $b(i,e,t,n){return ls(i,e,1-Math.exp(-t*n))}function jb(i,e=1){return e-Math.abs(Pc(i,e*2)-e)}function qb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Kb(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yb(i,e){return i+Math.random()*(e-i)}function Zb(i){return i*(.5-Math.random())}function Jb(i){i!==void 0&&(xf=i);let e=xf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qb(i){return i*os}function e1(i){return i*vs}function Xl(i){return(i&i-1)===0&&i!==0}function dp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Oa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function t1(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),d=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var n1=Object.freeze({__proto__:null,DEG2RAD:os,RAD2DEG:vs,generateUUID:on,clamp:Rt,euclideanModulo:Pc,mapLinear:Gb,inverseLerp:Wb,lerp:ls,damp:$b,pingpong:jb,smoothstep:qb,smootherstep:Xb,randInt:Kb,randFloat:Yb,randFloatSpread:Zb,seededRandom:Jb,degToRad:Qb,radToDeg:e1,isPowerOfTwo:Xl,ceilPowerOfTwo:dp,floorPowerOfTwo:Oa,setQuaternionFromProperEuler:t1,normalize:qe,denormalize:Nn});class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],m=r[0],p=r[3],v=r[6],y=r[1],x=r[4],_=r[7],M=r[2],C=r[5],P=r[8];return s[0]=a*m+o*y+l*M,s[3]=a*p+o*x+l*C,s[6]=a*v+o*_+l*P,s[1]=c*m+u*y+h*M,s[4]=c*p+u*x+h*C,s[7]=c*v+u*_+h*P,s[2]=f*m+d*y+g*M,s[5]=f*p+d*x+g*C,s[8]=f*v+d*_+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(r*c-u*n)*m,e[2]=(o*n-r*a)*m,e[3]=f*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-o*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(a*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*a+n*c,r[6]=t*o+n*u,r[1]=-n*s+t*l,r[4]=-n*a+t*c,r[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function pp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ta(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Uo={[Rn]:{[Ti]:Ci},[Ti]:{[Rn]:Ta}},en={legacyMode:!0,get workingColorSpace(){return Ti},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Uo[e]&&Uo[e][t]!==void 0){const n=Uo[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ut={r:0,g:0,b:0},tn={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function zo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ks(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,en.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ti){return this.r=e,this.g=t,this.b=n,en.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ti){if(e=Pc(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=zo(a,s,e+1/3),this.g=zo(a,s,e),this.b=zo(a,s,e-1/3)}return en.toWorkingColorSpace(this,r),this}setStyle(e,t=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,en.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,en.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,en.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,en.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Rn){const n=mp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return en.fromWorkingColorSpace(Ks(this,ut),e),Rt(ut.r*255,0,255)<<16^Rt(ut.g*255,0,255)<<8^Rt(ut.b*255,0,255)<<0}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ti){en.fromWorkingColorSpace(Ks(this,ut),t);const n=ut.r,r=ut.g,s=ut.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ti){return en.fromWorkingColorSpace(Ks(this,ut),t),e.r=ut.r,e.g=ut.g,e.b=ut.b,e}getStyle(e=Rn){return en.fromWorkingColorSpace(Ks(this,ut),e),e!==Rn?`color(${e} ${ut.r} ${ut.g} ${ut.b})`:`rgb(${ut.r*255|0},${ut.g*255|0},${ut.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(tn),tn.h+=e,tn.s+=t,tn.l+=n,this.setHSL(tn.h,tn.s,tn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(tn),e.getHSL(Xs);const n=ls(tn.h,Xs.h,t),r=ls(tn.s,Xs.s,t),s=ls(tn.l,Xs.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Me.NAMES=mp;let Yi;class gp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=_s("canvas")),Yi.width=e.width,Yi.height=e.height;const n=Yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ci(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class vp{constructor(e=null){this.isSource=!0,this.uuid=on(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vo(r[a].image)):s.push(Vo(r[a]))}else s=Vo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let i1=0;class It extends Or{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Kt,r=Kt,s=Ft,a=Nr,o=Yt,l=Li,c=1,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=on(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==up)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=up;class $e{constructor(e=0,t=0,n=0,r=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],m=l[2],p=l[6],v=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(d+1)/2,M=(v+1)/2,C=(u+f)/4,P=(h+m)/4,b=(g+p)/4;return x>_&&x>M?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=C/n,s=P/n):_>M?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=C/r,s=b/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=P/s,r=b/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-m)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ln extends Or{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new It(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ft,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _p extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class r1 extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_t,this.minFilter=_t,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ci{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],d=s[a+1],g=s[a+2],m=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==d||u!==g){let p=1-o;const v=l*f+c*d+u*g+h*m,y=v>=0?1:-1,x=1-v*v;if(x>Number.EPSILON){const M=Math.sqrt(x),C=Math.atan2(M,v*y);p=Math.sin(p*C)/M,o=Math.sin(o*C)/M}const _=o*y;if(l=l*p+f*_,c=c*p+d*_,u=u*p+g*_,h=h*p+m*_,p===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-o*d,e[t+2]=c*g+u*d+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,u=l*n+o*t-s*r,h=l*r+s*n-a*t,f=-s*t-a*n-o*r;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ho=new R,yf=new ci;class Ui{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)pi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(pi)}else n.boundingBox===null&&n.computeBoundingBox(),Go.copy(n.boundingBox),Go.applyMatrix4(e.matrixWorld),this.union(Go);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),Ys.subVectors(this.max,Yr),Zi.subVectors(e.a,Yr),Ji.subVectors(e.b,Yr),Qi.subVectors(e.c,Yr),qn.subVectors(Ji,Zi),Xn.subVectors(Qi,Ji),mi.subVectors(Zi,Qi);let t=[0,-qn.z,qn.y,0,-Xn.z,Xn.y,0,-mi.z,mi.y,qn.z,0,-qn.x,Xn.z,0,-Xn.x,mi.z,0,-mi.x,-qn.y,qn.x,0,-Xn.y,Xn.x,0,-mi.y,mi.x,0];return!Wo(t,Zi,Ji,Qi,Ys)||(t=[1,0,0,0,1,0,0,0,1],!Wo(t,Zi,Ji,Qi,Ys))?!1:(Zs.crossVectors(qn,Xn),t=[Zs.x,Zs.y,Zs.z],Wo(t,Zi,Ji,Qi,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return pi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new R,new R,new R,new R,new R,new R,new R,new R],pi=new R,Go=new Ui,Zi=new R,Ji=new R,Qi=new R,qn=new R,Xn=new R,mi=new R,Yr=new R,Ys=new R,Zs=new R,gi=new R;function Wo(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){gi.fromArray(i,s);const o=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const s1=new Ui,Zr=new R,$o=new R;class Br{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):s1.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Zr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add($o)),this.expandByPoint(Zr.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new R,jo=new R,Js=new R,Kn=new R,qo=new R,Qs=new R,Xo=new R;class Lc{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.direction).multiplyScalar(t).add(this.origin),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){jo.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(jo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Js),o=Kn.dot(this.direction),l=-Kn.dot(Js),c=Kn.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(Js).multiplyScalar(f).add(jo),d}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),r=Tn.dot(Tn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,r,s){qo.subVectors(t,e),Qs.subVectors(n,e),Xo.crossVectors(qo,Qs);let a=this.direction.dot(Xo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,e);const l=o*this.direction.dot(Qs.crossVectors(Kn,Qs));if(l<0)return null;const c=o*this.direction.dot(qo.cross(Kn));if(c<0||l+c>a)return null;const u=-o*Kn.dot(Xo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie{constructor(){Ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,a,o,l,c,u,h,f,d,g,m,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=f,v[3]=d,v[7]=g,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ie().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/er.setFromMatrixColumn(e,0).length(),s=1/er.setFromMatrixColumn(e,1).length(),a=1/er.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,m=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-m*c,t[9]=-o*l,t[2]=m-f*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f+m*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=m+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f-m*o,t[4]=-a*h,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=m-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,m=o*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,g=o*l,m=o*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=a*l,d=a*c,g=o*l,m=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=a*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=o*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a1,e,o1)}lookAt(e,t,n){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Yn.crossVectors(n,Ut),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Yn.crossVectors(n,Ut)),Yn.normalize(),ea.crossVectors(Ut,Yn),r[0]=Yn.x,r[4]=ea.x,r[8]=Ut.x,r[1]=Yn.y,r[5]=ea.y,r[9]=Ut.y,r[2]=Yn.z,r[6]=ea.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],v=n[14],y=n[3],x=n[7],_=n[11],M=n[15],C=r[0],P=r[4],b=r[8],A=r[12],L=r[1],H=r[5],Y=r[9],U=r[13],O=r[2],G=r[6],J=r[10],ne=r[14],$=r[3],F=r[7],N=r[11],ee=r[15];return s[0]=a*C+o*L+l*O+c*$,s[4]=a*P+o*H+l*G+c*F,s[8]=a*b+o*Y+l*J+c*N,s[12]=a*A+o*U+l*ne+c*ee,s[1]=u*C+h*L+f*O+d*$,s[5]=u*P+h*H+f*G+d*F,s[9]=u*b+h*Y+f*J+d*N,s[13]=u*A+h*U+f*ne+d*ee,s[2]=g*C+m*L+p*O+v*$,s[6]=g*P+m*H+p*G+v*F,s[10]=g*b+m*Y+p*J+v*N,s[14]=g*A+m*U+p*ne+v*ee,s[3]=y*C+x*L+_*O+M*$,s[7]=y*P+x*H+_*G+M*F,s[11]=y*b+x*Y+_*J+M*N,s[15]=y*A+x*U+_*ne+M*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],v=e[15];return g*(+s*l*h-r*c*h-s*o*f+n*c*f+r*o*d-n*l*d)+m*(+t*l*d-t*c*f+s*a*f-r*a*d+r*c*u-s*l*u)+p*(+t*c*h-t*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+v*(-r*o*u-t*l*h+t*o*f+r*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],v=e[15],y=h*p*c-m*f*c+m*l*d-o*p*d-h*l*v+o*f*v,x=g*f*c-u*p*c-g*l*d+a*p*d+u*l*v-a*f*v,_=u*m*c-g*h*c+g*o*d-a*m*d-u*o*v+a*h*v,M=g*h*l-u*m*l-g*o*f+a*m*f+u*o*p-a*h*p,C=t*y+n*x+r*_+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=y*P,e[1]=(m*f*s-h*p*s-m*r*d+n*p*d+h*r*v-n*f*v)*P,e[2]=(o*p*s-m*l*s+m*r*c-n*p*c-o*r*v+n*l*v)*P,e[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*d-n*l*d)*P,e[4]=x*P,e[5]=(u*p*s-g*f*s+g*r*d-t*p*d-u*r*v+t*f*v)*P,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*v-t*l*v)*P,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*d+t*l*d)*P,e[8]=_*P,e[9]=(g*h*s-u*m*s-g*n*d+t*m*d+u*n*v-t*h*v)*P,e[10]=(a*m*s-g*o*s+g*n*c-t*m*c-a*n*v+t*o*v)*P,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*d-t*o*d)*P,e[12]=M*P,e[13]=(u*m*r-g*h*r+g*n*f-t*m*f-u*n*p+t*h*p)*P,e[14]=(g*o*r-a*m*r-g*n*l+t*m*l+a*n*p-t*o*p)*P,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*f+t*o*f)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,g=s*h,m=a*u,p=a*h,v=o*h,y=l*c,x=l*u,_=l*h,M=n.x,C=n.y,P=n.z;return r[0]=(1-(m+v))*M,r[1]=(d+_)*M,r[2]=(g-x)*M,r[3]=0,r[4]=(d-_)*C,r[5]=(1-(f+v))*C,r[6]=(p+y)*C,r[7]=0,r[8]=(g+x)*P,r[9]=(p-y)*P,r[10]=(1-(f+m))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=er.set(r[0],r[1],r[2]).length();const a=er.set(r[4],r[5],r[6]).length(),o=er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nn.copy(this);const c=1/s,u=1/a,h=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,t.setFromRotationMatrix(nn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(a+s)/(a-s),d=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a){const o=this.elements,l=1/(t-e),c=1/(n-r),u=1/(a-s),h=(t+e)*l,f=(n+r)*c,d=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const er=new R,nn=new Ie,a1=new R(0,0,0),o1=new R(1,1,1),Yn=new R,ea=new R,Ut=new R,bf=new Ie,wf=new ci;class Ls{constructor(e=0,t=0,n=0,r=Ls.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wf.setFromEuler(this),this.setFromQuaternion(wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ls.DefaultOrder="XYZ";Ls.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class xp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l1=0;const Sf=new R,tr=new ci,An=new Ie,ta=new R,Jr=new R,c1=new R,u1=new ci,Mf=new R(1,0,0),Tf=new R(0,1,0),Af=new R(0,0,1),f1={type:"added"},Ef={type:"removed"};class ke extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DefaultUp.clone();const e=new R,t=new Ls,n=new ci,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Qt}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=ke.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ke.DefaultMatrixWorldAutoUpdate,this.layers=new xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(Mf,e)}rotateY(e){return this.rotateOnAxis(Tf,e)}rotateZ(e){return this.rotateOnAxis(Af,e)}translateOnAxis(e,t){return Sf.copy(e).applyQuaternion(this.quaternion),this.position.add(Sf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mf,e)}translateY(e){return this.translateOnAxis(Tf,e)}translateZ(e){return this.translateOnAxis(Af,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ta.copy(e):ta.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Jr,ta,this.up):An.lookAt(ta,Jr,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(An),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(f1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ef)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ef)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,c1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,u1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ke.DefaultUp=new R(0,1,0);ke.DefaultMatrixAutoUpdate=!0;ke.DefaultMatrixWorldAutoUpdate=!0;const rn=new R,En=new R,Ko=new R,Cn=new R,nr=new R,ir=new R,Cf=new R,Yo=new R,Zo=new R,Jo=new R;class Ln{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){rn.subVectors(r,t),En.subVectors(n,t),Ko.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(En),l=rn.dot(Ko),c=En.dot(En),u=En.dot(Ko),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Cn),Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Cn),l.set(0,0),l.addScaledVector(s,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l}static isFrontFacing(e,t,n,r){return rn.subVectors(n,t),En.subVectors(e,t),rn.cross(En).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),rn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ln.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;nr.subVectors(r,n),ir.subVectors(s,n),Yo.subVectors(e,n);const l=nr.dot(Yo),c=ir.dot(Yo);if(l<=0&&c<=0)return t.copy(n);Zo.subVectors(e,r);const u=nr.dot(Zo),h=ir.dot(Zo);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(nr,a);Jo.subVectors(e,s);const d=nr.dot(Jo),g=ir.dot(Jo);if(g>=0&&d<=g)return t.copy(s);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ir,o);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return Cf.subVectors(s,r),o=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(Cf,o);const v=1/(p+m+f);return a=m*v,o=f*v,t.copy(n).addScaledVector(nr,a).addScaledVector(ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let h1=0;class vn extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:h1++}),this.uuid=on(),this.name="",this.type="Material",this.blending=pr,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=op,this.blendDst=lp,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class On extends vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new R,na=new ue;class Lt{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=jl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)na.fromBufferAttribute(this,t),na.applyMatrix3(e),this.setXY(t,na.x,na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),r=qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class yp extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bp extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let d1=0;const qt=new Ie,Qo=new ke,rr=new R,zt=new Ui,Qr=new Ui,mt=new R;class Bt extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pp(e)?bp:yp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Qo.lookAt(e),Qo.updateMatrix(),this.applyMatrix4(Qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Qr.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(zt.min,Qr.min),zt.expandByPoint(mt),mt.addVectors(zt.max,Qr.max),zt.expandByPoint(mt)):(zt.expandByPoint(Qr.min),zt.expandByPoint(Qr.max))}zt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)mt.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(e,c),mt.add(rr)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<o;L++)c[L]=new R,u[L]=new R;const h=new R,f=new R,d=new R,g=new ue,m=new ue,p=new ue,v=new R,y=new R;function x(L,H,Y){h.fromArray(r,L*3),f.fromArray(r,H*3),d.fromArray(r,Y*3),g.fromArray(a,L*2),m.fromArray(a,H*2),p.fromArray(a,Y*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);const U=1/(m.x*p.y-p.x*m.y);!isFinite(U)||(v.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(U),y.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(U),c[L].add(v),c[H].add(v),c[Y].add(v),u[L].add(y),u[H].add(y),u[Y].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let L=0,H=_.length;L<H;++L){const Y=_[L],U=Y.start,O=Y.count;for(let G=U,J=U+O;G<J;G+=3)x(n[G+0],n[G+1],n[G+2])}const M=new R,C=new R,P=new R,b=new R;function A(L){P.fromArray(s,L*3),b.copy(P);const H=c[L];M.copy(H),M.sub(P.multiplyScalar(P.dot(H))).normalize(),C.crossVectors(b,H);const U=C.dot(u[L])<0?-1:1;l[L*4]=M.x,l[L*4+1]=M.y,l[L*4+2]=M.z,l[L*4+3]=U}for(let L=0,H=_.length;L<H;++L){const Y=_[L],U=Y.start,O=Y.count;for(let G=U,J=U+O;G<J;G+=3)A(n[G+0]),A(n[G+1]),A(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new R,s=new R,a=new R,o=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){o.isInterleavedBufferAttribute?d=l[m]*o.data.stride+o.offset:d=l[m]*u;for(let v=0;v<u;v++)f[g++]=c[d++]}return new Lt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Df=new Ie,sr=new Lc,el=new Br,Zn=new R,Jn=new R,Qn=new R,tl=new R,nl=new R,il=new R,ia=new R,ra=new R,sa=new R,aa=new ue,oa=new ue,la=new ue,rl=new R,ca=new R;class nt extends ke{constructor(e=new Bt,t=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(s),e.ray.intersectsSphere(el)===!1)||(Df.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Df),n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const v=d[m],y=r[v.materialIndex],x=Math.max(v.start,g.start),_=Math.min(o.count,Math.min(v.start+v.count,g.start+g.count));for(let M=x,C=_;M<C;M+=3){const P=o.getX(M),b=o.getX(M+1),A=o.getX(M+2);a=ua(this,y,e,sr,l,c,u,h,f,P,b,A),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),p=Math.min(o.count,g.start+g.count);for(let v=m,y=p;v<y;v+=3){const x=o.getX(v),_=o.getX(v+1),M=o.getX(v+2);a=ua(this,r,e,sr,l,c,u,h,f,x,_,M),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const v=d[m],y=r[v.materialIndex],x=Math.max(v.start,g.start),_=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let M=x,C=_;M<C;M+=3){const P=M,b=M+1,A=M+2;a=ua(this,y,e,sr,l,c,u,h,f,P,b,A),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let v=m,y=p;v<y;v+=3){const x=v,_=v+1,M=v+2;a=ua(this,r,e,sr,l,c,u,h,f,x,_,M),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function p1(i,e,t,n,r,s,a,o){let l;if(e.side===Nt?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side!==Fn,o),l===null)return null;ca.copy(o),ca.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ca);return c<t.near||c>t.far?null:{distance:c,point:ca.clone(),object:i}}function ua(i,e,t,n,r,s,a,o,l,c,u,h){Zn.fromBufferAttribute(r,c),Jn.fromBufferAttribute(r,u),Qn.fromBufferAttribute(r,h);const f=i.morphTargetInfluences;if(s&&f){ia.set(0,0,0),ra.set(0,0,0),sa.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=f[g],v=s[g];p!==0&&(tl.fromBufferAttribute(v,c),nl.fromBufferAttribute(v,u),il.fromBufferAttribute(v,h),a?(ia.addScaledVector(tl,p),ra.addScaledVector(nl,p),sa.addScaledVector(il,p)):(ia.addScaledVector(tl.sub(Zn),p),ra.addScaledVector(nl.sub(Jn),p),sa.addScaledVector(il.sub(Qn),p)))}Zn.add(ia),Jn.add(ra),Qn.add(sa)}i.isSkinnedMesh&&(i.boneTransform(c,Zn),i.boneTransform(u,Jn),i.boneTransform(h,Qn));const d=p1(i,e,t,n,Zn,Jn,Qn,rl);if(d){o&&(aa.fromBufferAttribute(o,c),oa.fromBufferAttribute(o,u),la.fromBufferAttribute(o,h),d.uv=Ln.getUV(rl,Zn,Jn,Qn,aa,oa,la,new ue)),l&&(aa.fromBufferAttribute(l,c),oa.fromBufferAttribute(l,u),la.fromBufferAttribute(l,h),d.uv2=Ln.getUV(rl,Zn,Jn,Qn,aa,oa,la,new ue));const g={a:c,b:u,c:h,normal:new R,materialIndex:0};Ln.getNormal(Zn,Jn,Qn,g.normal),d.face=g}return d}class zi extends Bt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(h,2));function g(m,p,v,y,x,_,M,C,P,b,A){const L=_/P,H=M/b,Y=_/2,U=M/2,O=C/2,G=P+1,J=b+1;let ne=0,$=0;const F=new R;for(let N=0;N<J;N++){const ee=N*H-U;for(let Q=0;Q<G;Q++){const ie=Q*L-Y;F[m]=ie*y,F[p]=ee*x,F[v]=O,c.push(F.x,F.y,F.z),F[m]=0,F[p]=0,F[v]=C>0?1:-1,u.push(F.x,F.y,F.z),h.push(Q/P),h.push(1-N/b),ne+=1}}for(let N=0;N<b;N++)for(let ee=0;ee<P;ee++){const Q=f+ee+G*N,ie=f+ee+G*(N+1),le=f+(ee+1)+G*(N+1),z=f+(ee+1)+G*N;l.push(Q,ie,z),l.push(ie,le,z),$+=6}o.addGroup(d,$,A),d+=$,f+=ne}}static fromJSON(e){return new zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=Mr(i[t]);for(const r in n)e[r]=n[r]}return e}function m1(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const Ba={clone:Mr,merge:Dt};var g1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ct extends vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g1,this.fragmentShader=v1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=m1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wp extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pt extends wp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(os*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=90,or=1;class _1 extends ke{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Pt(ar,or,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(1,0,0)),this.add(r);const s=new Pt(ar,or,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const a=new Pt(ar,or,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new R(0,1,0)),this.add(a);const o=new Pt(ar,or,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new R(0,-1,0)),this.add(o);const l=new Pt(ar,or,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const c=new Pt(ar,or,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Un,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Sp extends It{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x1 extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Sp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zi(5,5,5),s=new ct({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:oi});s.uniforms.tEquirect.value=t;const a=new nt(r,s),o=t.minFilter;return t.minFilter===Nr&&(t.minFilter=Ft),new _1(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const sl=new R,y1=new R,b1=new Qt;class _i{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=sl.subVectors(n,t).cross(y1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(sl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||b1.getNormalMatrix(e),r=this.coplanarPoint(sl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Br,fa=new R;class Ic{constructor(e=new _i,t=new _i,n=new _i,r=new _i,s=new _i,a=new _i){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],v=n[13],y=n[14],x=n[15];return t[0].setComponents(o-r,h-l,m-f,x-p).normalize(),t[1].setComponents(o+r,h+l,m+f,x+p).normalize(),t[2].setComponents(o+s,h+c,m+d,x+v).normalize(),t[3].setComponents(o-s,h-c,m-d,x-v).normalize(),t[4].setComponents(o-a,h-u,m-g,x-y).normalize(),t[5].setComponents(o+a,h+u,m+g,x+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(fa.x=r.normal.x>0?e.max.x:e.min.x,fa.y=r.normal.y>0?e.max.y:e.min.y,fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mp(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function w1(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class Is extends Bt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,d=[],g=[],m=[],p=[];for(let v=0;v<u;v++){const y=v*f-a;for(let x=0;x<c;x++){const _=x*h-s;g.push(_,-y,0),m.push(0,0,1),p.push(x/o),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<o;y++){const x=y+c*v,_=y+c*(v+1),M=y+1+c*(v+1),C=y+1+c*v;d.push(x,_,C),d.push(_,M,C)}this.setIndex(d),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(m,3)),this.setAttribute("uv",new St(p,2))}static fromJSON(e){return new Is(e.width,e.height,e.widthSegments,e.heightSegments)}}var S1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,M1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,A1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D1="vec3 transformed = vec3( position );",R1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P1=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,L1=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,I1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,V1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,H1=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,G1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,W1=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,J1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q1=`#ifdef USE_ENVMAP
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
#endif`,ew=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tw=`#ifdef USE_ENVMAP
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
#endif`,nw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aw=`#ifdef USE_GRADIENTMAP
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
}`,ow=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,fw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,hw=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,dw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,mw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,vw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,_w=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,xw=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ww=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Aw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ew=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Fw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Nw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ow=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Bw=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Hw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Gw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ww=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$w=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Xw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tS=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nS=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,iS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,aS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oS=`#ifdef USE_SKINNING
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
#endif`,lS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,dS=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,pS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,mS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,gS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,vS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,_S=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,xS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,yS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ES=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,CS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,DS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,RS=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,IS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,OS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,kS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,zS=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,WS=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,jS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,XS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,YS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,QS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,eM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ee={alphamap_fragment:S1,alphamap_pars_fragment:M1,alphatest_fragment:T1,alphatest_pars_fragment:A1,aomap_fragment:E1,aomap_pars_fragment:C1,begin_vertex:D1,beginnormal_vertex:R1,bsdfs:P1,iridescence_fragment:L1,bumpmap_pars_fragment:I1,clipping_planes_fragment:F1,clipping_planes_pars_fragment:N1,clipping_planes_pars_vertex:O1,clipping_planes_vertex:B1,color_fragment:k1,color_pars_fragment:U1,color_pars_vertex:z1,color_vertex:V1,common:H1,cube_uv_reflection_fragment:G1,defaultnormal_vertex:W1,displacementmap_pars_vertex:$1,displacementmap_vertex:j1,emissivemap_fragment:q1,emissivemap_pars_fragment:X1,encodings_fragment:K1,encodings_pars_fragment:Y1,envmap_fragment:Z1,envmap_common_pars_fragment:J1,envmap_pars_fragment:Q1,envmap_pars_vertex:ew,envmap_physical_pars_fragment:hw,envmap_vertex:tw,fog_vertex:nw,fog_pars_vertex:iw,fog_fragment:rw,fog_pars_fragment:sw,gradientmap_pars_fragment:aw,lightmap_fragment:ow,lightmap_pars_fragment:lw,lights_lambert_fragment:cw,lights_lambert_pars_fragment:uw,lights_pars_begin:fw,lights_toon_fragment:dw,lights_toon_pars_fragment:pw,lights_phong_fragment:mw,lights_phong_pars_fragment:gw,lights_physical_fragment:vw,lights_physical_pars_fragment:_w,lights_fragment_begin:xw,lights_fragment_maps:yw,lights_fragment_end:bw,logdepthbuf_fragment:ww,logdepthbuf_pars_fragment:Sw,logdepthbuf_pars_vertex:Mw,logdepthbuf_vertex:Tw,map_fragment:Aw,map_pars_fragment:Ew,map_particle_fragment:Cw,map_particle_pars_fragment:Dw,metalnessmap_fragment:Rw,metalnessmap_pars_fragment:Pw,morphcolor_vertex:Lw,morphnormal_vertex:Iw,morphtarget_pars_vertex:Fw,morphtarget_vertex:Nw,normal_fragment_begin:Ow,normal_fragment_maps:Bw,normal_pars_fragment:kw,normal_pars_vertex:Uw,normal_vertex:zw,normalmap_pars_fragment:Vw,clearcoat_normal_fragment_begin:Hw,clearcoat_normal_fragment_maps:Gw,clearcoat_pars_fragment:Ww,iridescence_pars_fragment:$w,output_fragment:jw,packing:qw,premultiplied_alpha_fragment:Xw,project_vertex:Kw,dithering_fragment:Yw,dithering_pars_fragment:Zw,roughnessmap_fragment:Jw,roughnessmap_pars_fragment:Qw,shadowmap_pars_fragment:eS,shadowmap_pars_vertex:tS,shadowmap_vertex:nS,shadowmask_pars_fragment:iS,skinbase_vertex:rS,skinning_pars_vertex:sS,skinning_vertex:aS,skinnormal_vertex:oS,specularmap_fragment:lS,specularmap_pars_fragment:cS,tonemapping_fragment:uS,tonemapping_pars_fragment:fS,transmission_fragment:hS,transmission_pars_fragment:dS,uv_pars_fragment:pS,uv_pars_vertex:mS,uv_vertex:gS,uv2_pars_fragment:vS,uv2_pars_vertex:_S,uv2_vertex:xS,worldpos_vertex:yS,background_vert:bS,background_frag:wS,backgroundCube_vert:SS,backgroundCube_frag:MS,cube_vert:TS,cube_frag:AS,depth_vert:ES,depth_frag:CS,distanceRGBA_vert:DS,distanceRGBA_frag:RS,equirect_vert:PS,equirect_frag:LS,linedashed_vert:IS,linedashed_frag:FS,meshbasic_vert:NS,meshbasic_frag:OS,meshlambert_vert:BS,meshlambert_frag:kS,meshmatcap_vert:US,meshmatcap_frag:zS,meshnormal_vert:VS,meshnormal_frag:HS,meshphong_vert:GS,meshphong_frag:WS,meshphysical_vert:$S,meshphysical_frag:jS,meshtoon_vert:qS,meshtoon_frag:XS,points_vert:KS,points_frag:YS,shadow_vert:ZS,shadow_frag:JS,sprite_vert:QS,sprite_frag:eM},se={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Qt},uv2Transform:{value:new Qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qt}}},gn={basic:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Dt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Dt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Dt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Dt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Dt([se.points,se.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Dt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Dt([se.common,se.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Dt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Dt([se.sprite,se.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Dt([se.common,se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Dt([se.lights,se.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};gn.physical={uniforms:Dt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};function tM(i,e,t,n,r,s,a){const o=new Me(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(p,v){let y=!1,x=v.isScene===!0?v.background:null;x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x));const _=i.xr,M=_.getSession&&_.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?m(o,l):x&&x.isColor&&(m(x,1),y=!0),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===so)?(u===void 0&&(u=new nt(new zi(1,1,1),new ct({name:"BackgroundCubeMaterial",uniforms:Mr(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,(h!==x||f!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new nt(new Is(2,2),new ct({name:"BackgroundMaterial",uniforms:Mr(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,v){n.buffers.color.setClear(p.r,p.g,p.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(o,l)},render:g}}function nM(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function h(O,G,J,ne,$){let F=!1;if(a){const N=m(ne,J,G);c!==N&&(c=N,d(c.object)),F=v(O,ne,J,$),F&&y(O,ne,J,$)}else{const N=G.wireframe===!0;(c.geometry!==ne.id||c.program!==J.id||c.wireframe!==N)&&(c.geometry=ne.id,c.program=J.id,c.wireframe=N,F=!0)}$!==null&&t.update($,34963),(F||u)&&(u=!1,b(O,G,J,ne),$!==null&&i.bindBuffer(34963,t.get($).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(O){return n.isWebGL2?i.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function m(O,G,J){const ne=J.wireframe===!0;let $=o[O.id];$===void 0&&($={},o[O.id]=$);let F=$[G.id];F===void 0&&(F={},$[G.id]=F);let N=F[ne];return N===void 0&&(N=p(f()),F[ne]=N),N}function p(O){const G=[],J=[],ne=[];for(let $=0;$<r;$++)G[$]=0,J[$]=0,ne[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:ne,object:O,attributes:{},index:null}}function v(O,G,J,ne){const $=c.attributes,F=G.attributes;let N=0;const ee=J.getAttributes();for(const Q in ee)if(ee[Q].location>=0){const le=$[Q];let z=F[Q];if(z===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(z=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(z=O.instanceColor)),le===void 0||le.attribute!==z||z&&le.data!==z.data)return!0;N++}return c.attributesNum!==N||c.index!==ne}function y(O,G,J,ne){const $={},F=G.attributes;let N=0;const ee=J.getAttributes();for(const Q in ee)if(ee[Q].location>=0){let le=F[Q];le===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(le=O.instanceColor));const z={};z.attribute=le,le&&le.data&&(z.data=le.data),$[Q]=z,N++}c.attributes=$,c.attributesNum=N,c.index=ne}function x(){const O=c.newAttributes;for(let G=0,J=O.length;G<J;G++)O[G]=0}function _(O){M(O,0)}function M(O,G){const J=c.newAttributes,ne=c.enabledAttributes,$=c.attributeDivisors;J[O]=1,ne[O]===0&&(i.enableVertexAttribArray(O),ne[O]=1),$[O]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,G),$[O]=G)}function C(){const O=c.newAttributes,G=c.enabledAttributes;for(let J=0,ne=G.length;J<ne;J++)G[J]!==O[J]&&(i.disableVertexAttribArray(J),G[J]=0)}function P(O,G,J,ne,$,F){n.isWebGL2===!0&&(J===5124||J===5125)?i.vertexAttribIPointer(O,G,J,$,F):i.vertexAttribPointer(O,G,J,ne,$,F)}function b(O,G,J,ne){if(n.isWebGL2===!1&&(O.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const $=ne.attributes,F=J.getAttributes(),N=G.defaultAttributeValues;for(const ee in F){const Q=F[ee];if(Q.location>=0){let ie=$[ee];if(ie===void 0&&(ee==="instanceMatrix"&&O.instanceMatrix&&(ie=O.instanceMatrix),ee==="instanceColor"&&O.instanceColor&&(ie=O.instanceColor)),ie!==void 0){const le=ie.normalized,z=ie.itemSize,X=t.get(ie);if(X===void 0)continue;const Ce=X.buffer,de=X.type,xe=X.bytesPerElement;if(ie.isInterleavedBufferAttribute){const oe=ie.data,Be=oe.stride,Te=ie.offset;if(oe.isInstancedInterleavedBuffer){for(let ve=0;ve<Q.locationSize;ve++)M(Q.location+ve,oe.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ve=0;ve<Q.locationSize;ve++)_(Q.location+ve);i.bindBuffer(34962,Ce);for(let ve=0;ve<Q.locationSize;ve++)P(Q.location+ve,z/Q.locationSize,de,le,Be*xe,(Te+z/Q.locationSize*ve)*xe)}else{if(ie.isInstancedBufferAttribute){for(let oe=0;oe<Q.locationSize;oe++)M(Q.location+oe,ie.meshPerAttribute);O.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let oe=0;oe<Q.locationSize;oe++)_(Q.location+oe);i.bindBuffer(34962,Ce);for(let oe=0;oe<Q.locationSize;oe++)P(Q.location+oe,z/Q.locationSize,de,le,z*xe,z/Q.locationSize*oe*xe)}}else if(N!==void 0){const le=N[ee];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(Q.location,le);break;case 3:i.vertexAttrib3fv(Q.location,le);break;case 4:i.vertexAttrib4fv(Q.location,le);break;default:i.vertexAttrib1fv(Q.location,le)}}}}C()}function A(){Y();for(const O in o){const G=o[O];for(const J in G){const ne=G[J];for(const $ in ne)g(ne[$].object),delete ne[$];delete G[J]}delete o[O]}}function L(O){if(o[O.id]===void 0)return;const G=o[O.id];for(const J in G){const ne=G[J];for(const $ in ne)g(ne[$].object),delete ne[$];delete G[J]}delete o[O.id]}function H(O){for(const G in o){const J=o[G];if(J[O.id]===void 0)continue;const ne=J[O.id];for(const $ in ne)g(ne[$].object),delete ne[$];delete J[O.id]}}function Y(){U(),u=!0,c!==l&&(c=l,d(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:L,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:_,disableUnusedAttributes:C}}function iM(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function rM(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),p=i.getParameter(36347),v=i.getParameter(36348),y=i.getParameter(36349),x=f>0,_=a||e.has("OES_texture_float"),M=x&&_,C=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:C}}function sM(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new _i,o=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||r;return r=f,t=u(h,d,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,v=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,x=y*4;let _=v.clippingState||null;l.value=_,_=u(g,f,x,d);for(let M=0;M!==x;++M)_[M]=t[M];v.clippingState=_,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const v=d+m*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<v)&&(p=new Float32Array(v));for(let x=0,_=d;x!==m;++x,_+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function aM(i){let e=new WeakMap;function t(a,o){return o===Hl?a.mapping=xr:o===Gl&&(a.mapping=yr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Hl||o===Gl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new x1(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Fs extends wp{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fr=4,Rf=[.125,.215,.35,.446,.526,.582],bi=20,al=new Fs,Pf=new Me;let ol=null;const xi=(1+Math.sqrt(5))/2,cr=1/xi,Lf=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,xi,cr),new R(0,xi,-cr),new R(cr,0,xi),new R(-cr,0,xi),new R(xi,cr,0),new R(-xi,cr,0)];class If{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){ol=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ol),e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ol=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:ms,format:Yt,encoding:Ii,depthBuffer:!1},r=Ff(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ff(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oM(s)),this._blurMaterial=lM(s,e,t)}return r}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,al)}_sceneToCubeUV(e,t,n,r){const o=new Pt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Pf),u.toneMapping=Un,u.autoClear=!1;const d=new On({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new nt(new zi,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(Pf),m=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):y===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const x=this._cubeSize;ha(r,y*x,v>2?x:0,x,x),u.setRenderTarget(r),m&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===xr||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Of()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new nt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ha(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,al)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lf[(r-1)%Lf.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new nt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*bi-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):bi;p>bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bi}`);const v=[];let y=0;for(let P=0;P<bi;++P){const b=P/m,A=Math.exp(-b*b/2);v.push(A),P===0?y+=A:P<p&&(y+=2*A)}for(let P=0;P<v.length;P++)v[P]=v[P]/y;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=v,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const _=this._sizeLods[r],M=3*_*(r>x-fr?r-x+fr:0),C=4*(this._cubeSize-_);ha(t,M,C,3*_,2*_),l.setRenderTarget(t),l.render(h,al)}}function oM(i){const e=[],t=[],n=[];let r=i;const s=i-fr+1+Rf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-fr?l=Rf[a-i+fr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,m=3,p=2,v=1,y=new Float32Array(m*g*d),x=new Float32Array(p*g*d),_=new Float32Array(v*g*d);for(let C=0;C<d;C++){const P=C%3*2/3-1,b=C>2?0:-1,A=[P,b,0,P+2/3,b,0,P+2/3,b+1,0,P,b,0,P+2/3,b+1,0,P,b+1,0];y.set(A,m*g*C),x.set(f,p*g*C);const L=[C,C,C,C,C,C];_.set(L,v*g*C)}const M=new Bt;M.setAttribute("position",new Lt(y,m)),M.setAttribute("uv",new Lt(x,p)),M.setAttribute("faceIndex",new Lt(_,v)),e.push(M),r>fr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ff(i,e,t){const n=new ln(i,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function lM(i,e,t){const n=new Float32Array(bi),r=new R(0,1,0);return new ct({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Nf(){return new ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Of(){return new ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Fc(){return`

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
	`}function cM(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Hl||l===Gl,u=l===xr||l===yr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new If(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new If(i));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function uM(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function fM(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,v=m.length;p<v;p++)e.update(m[p],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const y=d.array;m=d.version;for(let x=0,_=y.length;x<_;x+=3){const M=y[x+0],C=y[x+1],P=y[x+2];f.push(M,C,C,P,P,M)}}else{const y=g.array;m=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const M=x+0,C=x+1,P=x+2;f.push(M,C,C,P,P,M)}}const p=new(pp(f)?bp:yp)(f,1);p.version=m;const v=s.get(h);v&&e.remove(v),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function hM(i,e,t,n){const r=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(s,d,o,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let m,p;if(r)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,o,f*l,g),t.update(d,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function dM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function pM(i,e){return i[0]-e[0]}function mM(i,e){return Math.abs(e[1])-Math.abs(i[1])}function gM(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new $e,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==m){let G=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",G)};p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let A=0;x===!0&&(A=1),_===!0&&(A=2),M===!0&&(A=3);let L=u.attributes.position.count*A,H=1;L>e.maxTextureSize&&(H=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const Y=new Float32Array(L*H*4*m),U=new _p(Y,L,H,m);U.type=ii,U.needsUpdate=!0;const O=A*4;for(let J=0;J<m;J++){const ne=C[J],$=P[J],F=b[J],N=L*H*4*J;for(let ee=0;ee<ne.count;ee++){const Q=ee*O;x===!0&&(a.fromBufferAttribute(ne,ee),Y[N+Q+0]=a.x,Y[N+Q+1]=a.y,Y[N+Q+2]=a.z,Y[N+Q+3]=0),_===!0&&(a.fromBufferAttribute($,ee),Y[N+Q+4]=a.x,Y[N+Q+5]=a.y,Y[N+Q+6]=a.z,Y[N+Q+7]=0),M===!0&&(a.fromBufferAttribute(F,ee),Y[N+Q+8]=a.x,Y[N+Q+9]=a.y,Y[N+Q+10]=a.z,Y[N+Q+11]=F.itemSize===4?a.w:1)}}p={count:m,texture:U,size:new ue(L,H)},s.set(u,p),u.addEventListener("dispose",G)}let v=0;for(let x=0;x<d.length;x++)v+=d[x];const y=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let m=n[u.id];if(m===void 0||m.length!==g){m=[];for(let _=0;_<g;_++)m[_]=[_,0];n[u.id]=m}for(let _=0;_<g;_++){const M=m[_];M[0]=_,M[1]=d[_]}m.sort(mM);for(let _=0;_<8;_++)_<g&&m[_][1]?(o[_][0]=m[_][0],o[_][1]=m[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(pM);const p=u.morphAttributes.position,v=u.morphAttributes.normal;let y=0;for(let _=0;_<8;_++){const M=o[_],C=M[0],P=M[1];C!==Number.MAX_SAFE_INTEGER&&P?(p&&u.getAttribute("morphTarget"+_)!==p[C]&&u.setAttribute("morphTarget"+_,p[C]),v&&u.getAttribute("morphNormal"+_)!==v[C]&&u.setAttribute("morphNormal"+_,v[C]),r[_]=P,y+=P):(p&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),v&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const x=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function vM(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Tp=new It,Ap=new _p,Ep=new r1,Cp=new Sp,Bf=[],kf=[],Uf=new Float32Array(16),zf=new Float32Array(9),Vf=new Float32Array(4);function kr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Bf[r];if(s===void 0&&(s=new Float32Array(r),Bf[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ao(i,e){let t=kf[e];t===void 0&&(t=new Int32Array(e),kf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _M(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function yM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ht(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function bM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function wM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Vf.set(n),i.uniformMatrix2fv(this.addr,!1,Vf),dt(t,n)}}function SM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;zf.set(n),i.uniformMatrix3fv(this.addr,!1,zf),dt(t,n)}}function MM(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ht(t,n))return;Uf.set(n),i.uniformMatrix4fv(this.addr,!1,Uf),dt(t,n)}}function TM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function AM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function EM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function CM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function DM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function RM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ht(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function PM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ht(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function LM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ht(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function IM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Tp,r)}function FM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ep,r)}function NM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Cp,r)}function OM(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ap,r)}function BM(i){switch(i){case 5126:return _M;case 35664:return xM;case 35665:return yM;case 35666:return bM;case 35674:return wM;case 35675:return SM;case 35676:return MM;case 5124:case 35670:return TM;case 35667:case 35671:return AM;case 35668:case 35672:return EM;case 35669:case 35673:return CM;case 5125:return DM;case 36294:return RM;case 36295:return PM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return OM}}function kM(i,e){i.uniform1fv(this.addr,e)}function UM(i,e){const t=kr(e,this.size,2);i.uniform2fv(this.addr,t)}function zM(i,e){const t=kr(e,this.size,3);i.uniform3fv(this.addr,t)}function VM(i,e){const t=kr(e,this.size,4);i.uniform4fv(this.addr,t)}function HM(i,e){const t=kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function GM(i,e){const t=kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function WM(i,e){const t=kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $M(i,e){i.uniform1iv(this.addr,e)}function jM(i,e){i.uniform2iv(this.addr,e)}function qM(i,e){i.uniform3iv(this.addr,e)}function XM(i,e){i.uniform4iv(this.addr,e)}function KM(i,e){i.uniform1uiv(this.addr,e)}function YM(i,e){i.uniform2uiv(this.addr,e)}function ZM(i,e){i.uniform3uiv(this.addr,e)}function JM(i,e){i.uniform4uiv(this.addr,e)}function QM(i,e,t){const n=this.cache,r=e.length,s=ao(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Tp,s[a])}function eT(i,e,t){const n=this.cache,r=e.length,s=ao(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ep,s[a])}function tT(i,e,t){const n=this.cache,r=e.length,s=ao(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Cp,s[a])}function nT(i,e,t){const n=this.cache,r=e.length,s=ao(t,r);ht(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ap,s[a])}function iT(i){switch(i){case 5126:return kM;case 35664:return UM;case 35665:return zM;case 35666:return VM;case 35674:return HM;case 35675:return GM;case 35676:return WM;case 5124:case 35670:return $M;case 35667:case 35671:return jM;case 35668:case 35672:return qM;case 35669:case 35673:return XM;case 5125:return KM;case 36294:return YM;case 36295:return ZM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return QM;case 35679:case 36299:case 36307:return eT;case 35680:case 36300:case 36308:case 36293:return tT;case 36289:case 36303:case 36311:case 36292:return nT}}class rT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=BM(t.type)}}class sT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=iT(t.type)}}class aT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ll=/(\w+)(\])?(\[|\.)?/g;function Hf(i,e){i.seq.push(e),i.map[e.id]=e}function oT(i,e,t){const n=i.name,r=n.length;for(ll.lastIndex=0;;){const s=ll.exec(n),a=ll.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Hf(t,c===void 0?new rT(o,i,e):new sT(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new aT(o),Hf(t,h)),t=h}}}class Aa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);oT(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Gf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let lT=0;function cT(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function uT(i){switch(i){case Ii:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Wf(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+cT(i.getShaderSource(e),a)}else return r}function fT(i,e){const t=uT(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function hT(i,e){let t;switch(e){case vb:t="Linear";break;case _b:t="Reinhard";break;case xb:t="OptimizedCineon";break;case yb:t="ACESFilmic";break;case bb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dT(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function pT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function mT(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ss(i){return i!==""}function $f(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(i){return i.replace(gT,vT)}function vT(i,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Kl(t)}const _T=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(i){return i.replace(_T,xT)}function xT(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xf(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yT(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ap?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ky?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rs&&(e="SHADOWMAP_TYPE_VSM"),e}function bT(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xr:case yr:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wT(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function ST(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cp:e="ENVMAP_BLENDING_MULTIPLY";break;case mb:e="ENVMAP_BLENDING_MIX";break;case gb:e="ENVMAP_BLENDING_ADD";break}return e}function MT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function TT(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=yT(t),c=bT(t),u=wT(t),h=ST(t),f=MT(t),d=t.isWebGL2?"":dT(t),g=pT(s),m=r.createProgram();let p,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(ss).join(`
`),p.length>0&&(p+=`
`),v=[d,g].filter(ss).join(`
`),v.length>0&&(v+=`
`)):(p=[Xf(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),v=[d,Xf(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ee.tonemapping_pars_fragment:"",t.toneMapping!==Un?hT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,fT("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),a=Kl(a),a=$f(a,t),a=jf(a,t),o=Kl(o),o=$f(o,t),o=jf(o,t),a=qf(a),o=qf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===_f?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=y+p+a,_=y+v+o,M=Gf(r,35633,x),C=Gf(r,35632,_);if(r.attachShader(m,M),r.attachShader(m,C),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),i.debug.checkShaderErrors){const A=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(M).trim(),H=r.getShaderInfoLog(C).trim();let Y=!0,U=!0;if(r.getProgramParameter(m,35714)===!1){Y=!1;const O=Wf(r,M,"vertex"),G=Wf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+O+`
`+G)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(L===""||H==="")&&(U=!1);U&&(this.diagnostics={runnable:Y,programLog:A,vertexShader:{log:L,prefix:p},fragmentShader:{log:H,prefix:v}})}r.deleteShader(M),r.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new Aa(r,m)),P};let b;return this.getAttributes=function(){return b===void 0&&(b=mT(r,m)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=lT++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=C,this}let AT=0;class ET{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new CT(e),t.set(e,n)),n}}class CT{constructor(e){this.id=AT++,this.code=e,this.usedTimes=0}}function DT(i,e,t,n,r,s,a){const o=new xp,l=new ET,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b,A,L,H,Y){const U=H.fog,O=Y.geometry,G=b.isMeshStandardMaterial?H.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),ne=!!J&&J.mapping===so?J.image.height:null,$=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const F=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,N=F!==void 0?F.length:0;let ee=0;O.morphAttributes.position!==void 0&&(ee=1),O.morphAttributes.normal!==void 0&&(ee=2),O.morphAttributes.color!==void 0&&(ee=3);let Q,ie,le,z;if($){const Be=gn[$];Q=Be.vertexShader,ie=Be.fragmentShader}else Q=b.vertexShader,ie=b.fragmentShader,l.update(b),le=l.getVertexShaderID(b),z=l.getFragmentShaderID(b);const X=i.getRenderTarget(),Ce=b.alphaTest>0,de=b.clearcoat>0,xe=b.iridescence>0;return{isWebGL2:u,shaderID:$,shaderName:b.type,vertexShader:Q,fragmentShader:ie,defines:b.defines,customVertexShaderID:le,customFragmentShaderID:z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:f,outputEncoding:X===null?i.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Ii,map:!!b.map,matcap:!!b.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:ne,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Vb,tangentSpaceNormalMap:b.normalMapType===Rc,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===Ge,clearcoat:de,clearcoatMap:de&&!!b.clearcoatMap,clearcoatRoughnessMap:de&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!b.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!b.iridescenceMap,iridescenceThicknessMap:xe&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===pr,alphaMap:!!b.alphaMap,alphaTest:Ce,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!O.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!U,useFog:b.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ee,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:Un,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fn,flipSided:b.side===Nt,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)A.push(L),A.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(v(A,b),y(A,b),A.push(i.outputEncoding)),A.push(b.customProgramCacheKey),A.join()}function v(b,A){b.push(A.precision),b.push(A.outputEncoding),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.combine),b.push(A.vertexUvs),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function y(b,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.map&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.lightMap&&o.enable(7),A.aoMap&&o.enable(8),A.emissiveMap&&o.enable(9),A.bumpMap&&o.enable(10),A.normalMap&&o.enable(11),A.objectSpaceNormalMap&&o.enable(12),A.tangentSpaceNormalMap&&o.enable(13),A.clearcoat&&o.enable(14),A.clearcoatMap&&o.enable(15),A.clearcoatRoughnessMap&&o.enable(16),A.clearcoatNormalMap&&o.enable(17),A.iridescence&&o.enable(18),A.iridescenceMap&&o.enable(19),A.iridescenceThicknessMap&&o.enable(20),A.displacementMap&&o.enable(21),A.specularMap&&o.enable(22),A.roughnessMap&&o.enable(23),A.metalnessMap&&o.enable(24),A.gradientMap&&o.enable(25),A.alphaMap&&o.enable(26),A.alphaTest&&o.enable(27),A.vertexColors&&o.enable(28),A.vertexAlphas&&o.enable(29),A.vertexUvs&&o.enable(30),A.vertexTangents&&o.enable(31),A.uvsVertexOnly&&o.enable(32),b.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.physicallyCorrectLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.specularIntensityMap&&o.enable(15),A.specularColorMap&&o.enable(16),A.transmission&&o.enable(17),A.transmissionMap&&o.enable(18),A.thicknessMap&&o.enable(19),A.sheen&&o.enable(20),A.sheenColorMap&&o.enable(21),A.sheenRoughnessMap&&o.enable(22),A.decodeVideoTexture&&o.enable(23),A.opaque&&o.enable(24),b.push(o.mask)}function x(b){const A=g[b.type];let L;if(A){const H=gn[A];L=Ba.clone(H.uniforms)}else L=b.uniforms;return L}function _(b,A){let L;for(let H=0,Y=c.length;H<Y;H++){const U=c[H];if(U.cacheKey===A){L=U,++L.usedTimes;break}}return L===void 0&&(L=new TT(i,A,b,s),c.push(L)),L}function M(b){if(--b.usedTimes===0){const A=c.indexOf(b);c[A]=c[c.length-1],c.pop(),b.destroy()}}function C(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:_,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:P}}function RT(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function PT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Kf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,d,g,m,p){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},i[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=d,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=m,v.group=p),e++,v}function o(h,f,d,g,m,p){const v=a(h,f,d,g,m,p);d.transmission>0?n.push(v):d.transparent===!0?r.push(v):t.push(v)}function l(h,f,d,g,m,p){const v=a(h,f,d,g,m,p);d.transmission>0?n.unshift(v):d.transparent===!0?r.unshift(v):t.unshift(v)}function c(h,f){t.length>1&&t.sort(h||PT),n.length>1&&n.sort(f||Kf),r.length>1&&r.sort(f||Kf)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function LT(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Yf,i.set(n,[a])):r>=s.length?(a=new Yf,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function IT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Me};break;case"SpotLight":t={position:new R,direction:new R,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function FT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let NT=0;function OT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function BT(i,e){const t=new IT,n=FT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new R);const s=new R,a=new Ie,o=new Ie;function l(u,h){let f=0,d=0,g=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let m=0,p=0,v=0,y=0,x=0,_=0,M=0,C=0,P=0,b=0;u.sort(OT);const A=h!==!0?Math.PI:1;for(let H=0,Y=u.length;H<Y;H++){const U=u[H],O=U.color,G=U.intensity,J=U.distance,ne=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=O.r*G*A,d+=O.g*G*A,g+=O.b*G*A;else if(U.isLightProbe)for(let $=0;$<9;$++)r.probe[$].addScaledVector(U.sh.coefficients[$],G);else if(U.isDirectionalLight){const $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity*A),U.castShadow){const F=U.shadow,N=n.get(U);N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,r.directionalShadow[m]=N,r.directionalShadowMap[m]=ne,r.directionalShadowMatrix[m]=U.shadow.matrix,_++}r.directional[m]=$,m++}else if(U.isSpotLight){const $=t.get(U);$.position.setFromMatrixPosition(U.matrixWorld),$.color.copy(O).multiplyScalar(G*A),$.distance=J,$.coneCos=Math.cos(U.angle),$.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),$.decay=U.decay,r.spot[v]=$;const F=U.shadow;if(U.map&&(r.spotLightMap[P]=U.map,P++,F.updateMatrices(U),U.castShadow&&b++),r.spotLightMatrix[v]=F.matrix,U.castShadow){const N=n.get(U);N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,r.spotShadow[v]=N,r.spotShadowMap[v]=ne,C++}v++}else if(U.isRectAreaLight){const $=t.get(U);$.color.copy(O).multiplyScalar(G),$.halfWidth.set(U.width*.5,0,0),$.halfHeight.set(0,U.height*.5,0),r.rectArea[y]=$,y++}else if(U.isPointLight){const $=t.get(U);if($.color.copy(U.color).multiplyScalar(U.intensity*A),$.distance=U.distance,$.decay=U.decay,U.castShadow){const F=U.shadow,N=n.get(U);N.shadowBias=F.bias,N.shadowNormalBias=F.normalBias,N.shadowRadius=F.radius,N.shadowMapSize=F.mapSize,N.shadowCameraNear=F.camera.near,N.shadowCameraFar=F.camera.far,r.pointShadow[p]=N,r.pointShadowMap[p]=ne,r.pointShadowMatrix[p]=U.shadow.matrix,M++}r.point[p]=$,p++}else if(U.isHemisphereLight){const $=t.get(U);$.skyColor.copy(U.color).multiplyScalar(G*A),$.groundColor.copy(U.groundColor).multiplyScalar(G*A),r.hemi[x]=$,x++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const L=r.hash;(L.directionalLength!==m||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==y||L.hemiLength!==x||L.numDirectionalShadows!==_||L.numPointShadows!==M||L.numSpotShadows!==C||L.numSpotMaps!==P)&&(r.directional.length=m,r.spot.length=v,r.rectArea.length=y,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=C+P-b,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=b,L.directionalLength=m,L.pointLength=p,L.spotLength=v,L.rectAreaLength=y,L.hemiLength=x,L.numDirectionalShadows=_,L.numPointShadows=M,L.numSpotShadows=C,L.numSpotMaps=P,r.version=NT++)}function c(u,h){let f=0,d=0,g=0,m=0,p=0;const v=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const _=u[y];if(_.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),f++}else if(_.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),g++}else if(_.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),o.identity(),a.copy(_.matrixWorld),a.premultiply(v),o.extractRotation(a),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const M=r.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),d++}else if(_.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:r}}function Zf(i,e){const t=new BT(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function kT(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Zf(i,e),t.set(s,[l])):a>=o.length?(l=new Zf(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class UT extends vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ub,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zT extends vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HT=`uniform sampler2D shadow_pass;
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
}`;function GT(i,e,t){let n=new Ic;const r=new ue,s=new ue,a=new $e,o=new UT({depthPacking:zb}),l=new zT,c={},u=t.maxTextureSize,h={0:Nt,1:Pi,2:Fn},f=new ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:VT,fragmentShader:HT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new nt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ap,this.render=function(_,M,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||_.length===0)return;const P=i.getRenderTarget(),b=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),L=i.state;L.setBlending(oi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let H=0,Y=_.length;H<Y;H++){const U=_[H],O=U.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const G=O.getFrameExtents();if(r.multiply(G),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,O.mapSize.y=s.y)),O.map===null){const ne=this.type!==rs?{minFilter:_t,magFilter:_t}:{};O.map=new ln(r.x,r.y,ne),O.map.texture.name=U.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const J=O.getViewportCount();for(let ne=0;ne<J;ne++){const $=O.getViewport(ne);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),L.viewport(a),O.updateMatrices(U,ne),n=O.getFrustum(),x(M,C,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===rs&&v(O,C),O.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(P,b,A)};function v(_,M){const C=e.update(m);f.defines.VSM_SAMPLES!==_.blurSamples&&(f.defines.VSM_SAMPLES=_.blurSamples,d.defines.VSM_SAMPLES=_.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new ln(r.x,r.y)),f.uniforms.shadow_pass.value=_.map.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,i.setRenderTarget(_.mapPass),i.clear(),i.renderBufferDirect(M,null,C,f,m,null),d.uniforms.shadow_pass.value=_.mapPass.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,i.setRenderTarget(_.map),i.clear(),i.renderBufferDirect(M,null,C,d,m,null)}function y(_,M,C,P,b,A){let L=null;const H=C.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(H!==void 0?L=H:L=C.isPointLight===!0?l:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const Y=L.uuid,U=M.uuid;let O=c[Y];O===void 0&&(O={},c[Y]=O);let G=O[U];G===void 0&&(G=L.clone(),O[U]=G),L=G}return L.visible=M.visible,L.wireframe=M.wireframe,A===rs?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:h[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,C.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(C.matrixWorld),L.nearDistance=P,L.farDistance=b),L}function x(_,M,C,P,b){if(_.visible===!1)return;if(_.layers.test(M.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&b===rs)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,_.matrixWorld);const H=e.update(_),Y=_.material;if(Array.isArray(Y)){const U=H.groups;for(let O=0,G=U.length;O<G;O++){const J=U[O],ne=Y[J.materialIndex];if(ne&&ne.visible){const $=y(_,ne,P,C.near,C.far,b);i.renderBufferDirect(C,null,H,$,_,J)}}}else if(Y.visible){const U=y(_,Y,P,C.near,C.far,b);i.renderBufferDirect(C,null,H,U,_,null)}}const L=_.children;for(let H=0,Y=L.length;H<Y;H++)x(L[H],M,C,P,b)}}function WT(i,e,t){const n=t.isWebGL2;function r(){let I=!1;const W=new $e;let te=null;const ce=new $e(0,0,0,0);return{setMask:function(ge){te!==ge&&!I&&(i.colorMask(ge,ge,ge,ge),te=ge)},setLocked:function(ge){I=ge},setClear:function(ge,ze,pt,yt,fi){fi===!0&&(ge*=yt,ze*=yt,pt*=yt),W.set(ge,ze,pt,yt),ce.equals(W)===!1&&(i.clearColor(ge,ze,pt,yt),ce.copy(W))},reset:function(){I=!1,te=null,ce.set(-1,0,0,0)}}}function s(){let I=!1,W=null,te=null,ce=null;return{setTest:function(ge){ge?Ce(2929):de(2929)},setMask:function(ge){W!==ge&&!I&&(i.depthMask(ge),W=ge)},setFunc:function(ge){if(te!==ge){switch(ge){case lb:i.depthFunc(512);break;case cb:i.depthFunc(519);break;case ub:i.depthFunc(513);break;case Vl:i.depthFunc(515);break;case fb:i.depthFunc(514);break;case hb:i.depthFunc(518);break;case db:i.depthFunc(516);break;case pb:i.depthFunc(517);break;default:i.depthFunc(515)}te=ge}},setLocked:function(ge){I=ge},setClear:function(ge){ce!==ge&&(i.clearDepth(ge),ce=ge)},reset:function(){I=!1,W=null,te=null,ce=null}}}function a(){let I=!1,W=null,te=null,ce=null,ge=null,ze=null,pt=null,yt=null,fi=null;return{setTest:function(Ze){I||(Ze?Ce(2960):de(2960))},setMask:function(Ze){W!==Ze&&!I&&(i.stencilMask(Ze),W=Ze)},setFunc:function(Ze,Sn,$t){(te!==Ze||ce!==Sn||ge!==$t)&&(i.stencilFunc(Ze,Sn,$t),te=Ze,ce=Sn,ge=$t)},setOp:function(Ze,Sn,$t){(ze!==Ze||pt!==Sn||yt!==$t)&&(i.stencilOp(Ze,Sn,$t),ze=Ze,pt=Sn,yt=$t)},setLocked:function(Ze){I=Ze},setClear:function(Ze){fi!==Ze&&(i.clearStencil(Ze),fi=Ze)},reset:function(){I=!1,W=null,te=null,ce=null,ge=null,ze=null,pt=null,yt=null,fi=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,m=[],p=null,v=!1,y=null,x=null,_=null,M=null,C=null,P=null,b=null,A=!1,L=null,H=null,Y=null,U=null,O=null;const G=i.getParameter(35661);let J=!1,ne=0;const $=i.getParameter(7938);$.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec($)[1]),J=ne>=1):$.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=ne>=2);let F=null,N={};const ee=i.getParameter(3088),Q=i.getParameter(2978),ie=new $e().fromArray(ee),le=new $e().fromArray(Q);function z(I,W,te){const ce=new Uint8Array(4),ge=i.createTexture();i.bindTexture(I,ge),i.texParameteri(I,10241,9728),i.texParameteri(I,10240,9728);for(let ze=0;ze<te;ze++)i.texImage2D(W+ze,0,6408,1,1,0,6408,5121,ce);return ge}const X={};X[3553]=z(3553,3553,1),X[34067]=z(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(2929),l.setFunc(Vl),st(!1),xt(Hu),Ce(2884),Je(oi);function Ce(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function de(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function xe(I,W){return d[I]!==W?(i.bindFramebuffer(I,W),d[I]=W,n&&(I===36009&&(d[36160]=W),I===36160&&(d[36009]=W)),!0):!1}function oe(I,W){let te=m,ce=!1;if(I)if(te=g.get(W),te===void 0&&(te=[],g.set(W,te)),I.isWebGLMultipleRenderTargets){const ge=I.texture;if(te.length!==ge.length||te[0]!==36064){for(let ze=0,pt=ge.length;ze<pt;ze++)te[ze]=36064+ze;te.length=ge.length,ce=!0}}else te[0]!==36064&&(te[0]=36064,ce=!0);else te[0]!==1029&&(te[0]=1029,ce=!0);ce&&(t.isWebGL2?i.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Be(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const Te={[ur]:32774,[Zy]:32778,[Jy]:32779};if(n)Te[$u]=32775,Te[ju]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(Te[$u]=I.MIN_EXT,Te[ju]=I.MAX_EXT)}const ve={[Qy]:0,[eb]:1,[tb]:768,[op]:770,[ob]:776,[sb]:774,[ib]:772,[nb]:769,[lp]:771,[ab]:775,[rb]:773};function Je(I,W,te,ce,ge,ze,pt,yt){if(I===oi){v===!0&&(de(3042),v=!1);return}if(v===!1&&(Ce(3042),v=!0),I!==Yy){if(I!==y||yt!==A){if((x!==ur||C!==ur)&&(i.blendEquation(32774),x=ur,C=ur),yt)switch(I){case pr:i.blendFuncSeparate(1,771,1,771);break;case Ia:i.blendFunc(1,1);break;case Gu:i.blendFuncSeparate(0,769,0,1);break;case Wu:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case pr:i.blendFuncSeparate(770,771,1,771);break;case Ia:i.blendFunc(770,1);break;case Gu:i.blendFuncSeparate(0,769,0,1);break;case Wu:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,M=null,P=null,b=null,y=I,A=yt}return}ge=ge||W,ze=ze||te,pt=pt||ce,(W!==x||ge!==C)&&(i.blendEquationSeparate(Te[W],Te[ge]),x=W,C=ge),(te!==_||ce!==M||ze!==P||pt!==b)&&(i.blendFuncSeparate(ve[te],ve[ce],ve[ze],ve[pt]),_=te,M=ce,P=ze,b=pt),y=I,A=null}function at(I,W){I.side===Fn?de(2884):Ce(2884);let te=I.side===Nt;W&&(te=!te),st(te),I.blending===pr&&I.transparent===!1?Je(oi):Je(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const ce=I.stencilWrite;c.setTest(ce),ce&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ce(32926):de(32926)}function st(I){L!==I&&(I?i.frontFace(2304):i.frontFace(2305),L=I)}function xt(I){I!==qy?(Ce(2884),I!==H&&(I===Hu?i.cullFace(1029):I===Xy?i.cullFace(1028):i.cullFace(1032))):de(2884),H=I}function Qe(I){I!==Y&&(J&&i.lineWidth(I),Y=I)}function Ne(I,W,te){I?(Ce(32823),(U!==W||O!==te)&&(i.polygonOffset(W,te),U=W,O=te)):de(32823)}function Tt(I){I?Ce(3089):de(3089)}function At(I){I===void 0&&(I=33984+G-1),F!==I&&(i.activeTexture(I),F=I)}function E(I,W,te){te===void 0&&(F===null?te=33984+G-1:te=F);let ce=N[te];ce===void 0&&(ce={type:void 0,texture:void 0},N[te]=ce),(ce.type!==I||ce.texture!==W)&&(F!==te&&(i.activeTexture(te),F=te),i.bindTexture(I,W||X[I]),ce.type=I,ce.texture=W)}function w(){const I=N[F];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function S(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(I){ie.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ie.copy(I))}function _e(I){le.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),le.copy(I))}function Fe(I,W){let te=h.get(W);te===void 0&&(te=new WeakMap,h.set(W,te));let ce=te.get(I);ce===void 0&&(ce=i.getUniformBlockIndex(W,I.name),te.set(I,ce))}function Ue(I,W){const ce=h.get(W).get(I);u.get(I)!==ce&&(i.uniformBlockBinding(W,ce,I.__bindingPointIndex),u.set(I,ce))}function Ye(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},F=null,N={},d={},g=new WeakMap,m=[],p=null,v=!1,y=null,x=null,_=null,M=null,C=null,P=null,b=null,A=!1,L=null,H=null,Y=null,U=null,O=null,ie.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ce,disable:de,bindFramebuffer:xe,drawBuffers:oe,useProgram:Be,setBlending:Je,setMaterial:at,setFlipSided:st,setCullFace:xt,setLineWidth:Qe,setPolygonOffset:Ne,setScissorTest:Tt,activeTexture:At,bindTexture:E,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:D,texImage2D:Se,texImage3D:fe,updateUBOMapping:Fe,uniformBlockBinding:Ue,texStorage2D:q,texStorage3D:me,texSubImage2D:Z,texSubImage3D:ae,compressedTexSubImage2D:pe,compressedTexSubImage3D:re,scissor:be,viewport:_e,reset:Ye}}function $T(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,w){return v?new OffscreenCanvas(E,w):_s("canvas")}function x(E,w,S,D){let Z=1;if((E.width>D||E.height>D)&&(Z=D/Math.max(E.width,E.height)),Z<1||w===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ae=w?Oa:Math.floor,pe=ae(Z*E.width),re=ae(Z*E.height);m===void 0&&(m=y(pe,re));const q=S?y(pe,re):m;return q.width=pe,q.height=re,q.getContext("2d").drawImage(E,0,0,pe,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+pe+"x"+re+")."),q}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function _(E){return Xl(E.width)&&Xl(E.height)}function M(E){return o?!1:E.wrapS!==Kt||E.wrapT!==Kt||E.minFilter!==_t&&E.minFilter!==Ft}function C(E,w){return E.generateMipmaps&&w&&E.minFilter!==_t&&E.minFilter!==Ft}function P(E){i.generateMipmap(E)}function b(E,w,S,D,Z=!1){if(o===!1)return w;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae=w;return w===6403&&(S===5126&&(ae=33326),S===5131&&(ae=33325),S===5121&&(ae=33321)),w===33319&&(S===5126&&(ae=33328),S===5131&&(ae=33327),S===5121&&(ae=33323)),w===6408&&(S===5126&&(ae=34836),S===5131&&(ae=34842),S===5121&&(ae=D===Ge&&Z===!1?35907:32856),S===32819&&(ae=32854),S===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function A(E,w,S){return C(E,S)===!0||E.isFramebufferTexture&&E.minFilter!==_t&&E.minFilter!==Ft?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function L(E){return E===_t||E===Wl||E===$l?9728:9729}function H(E){const w=E.target;w.removeEventListener("dispose",H),U(w),w.isVideoTexture&&g.delete(w)}function Y(E){const w=E.target;w.removeEventListener("dispose",Y),G(w)}function U(E){const w=n.get(E);if(w.__webglInit===void 0)return;const S=E.source,D=p.get(S);if(D){const Z=D[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&O(E),Object.keys(D).length===0&&p.delete(S)}n.remove(E)}function O(E){const w=n.get(E);i.deleteTexture(w.__webglTexture);const S=E.source,D=p.get(S);delete D[w.__cacheKey],a.memory.textures--}function G(E){const w=E.texture,S=n.get(E),D=n.get(w);if(D.__webglTexture!==void 0&&(i.deleteTexture(D.__webglTexture),a.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]),S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z]);else{if(i.deleteFramebuffer(S.__webglFramebuffer),S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let Z=0,ae=w.length;Z<ae;Z++){const pe=n.get(w[Z]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(w[Z])}n.remove(w),n.remove(E)}let J=0;function ne(){J=0}function $(){const E=J;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),J+=1,E}function F(E){const w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.wrapR||0),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.encoding),w.join()}function N(E,w){const S=n.get(E);if(E.isVideoTexture&&Tt(E),E.isRenderTargetTexture===!1&&E.version>0&&S.__version!==E.version){const D=E.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(S,E,w);return}}t.bindTexture(3553,S.__webglTexture,33984+w)}function ee(E,w){const S=n.get(E);if(E.version>0&&S.__version!==E.version){de(S,E,w);return}t.bindTexture(35866,S.__webglTexture,33984+w)}function Q(E,w){const S=n.get(E);if(E.version>0&&S.__version!==E.version){de(S,E,w);return}t.bindTexture(32879,S.__webglTexture,33984+w)}function ie(E,w){const S=n.get(E);if(E.version>0&&S.__version!==E.version){xe(S,E,w);return}t.bindTexture(34067,S.__webglTexture,33984+w)}const le={[br]:10497,[Kt]:33071,[Fa]:33648},z={[_t]:9728,[Wl]:9984,[$l]:9986,[Ft]:9729,[fp]:9985,[Nr]:9987};function X(E,w,S){if(S?(i.texParameteri(E,10242,le[w.wrapS]),i.texParameteri(E,10243,le[w.wrapT]),(E===32879||E===35866)&&i.texParameteri(E,32882,le[w.wrapR]),i.texParameteri(E,10240,z[w.magFilter]),i.texParameteri(E,10241,z[w.minFilter])):(i.texParameteri(E,10242,33071),i.texParameteri(E,10243,33071),(E===32879||E===35866)&&i.texParameteri(E,32882,33071),(w.wrapS!==Kt||w.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,10240,L(w.magFilter)),i.texParameteri(E,10241,L(w.minFilter)),w.minFilter!==_t&&w.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");if(w.type===ii&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===ms&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(E,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Ce(E,w){let S=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",H));const D=w.source;let Z=p.get(D);Z===void 0&&(Z={},p.set(D,Z));const ae=F(w);if(ae!==E.__cacheKey){Z[ae]===void 0&&(Z[ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,S=!0),Z[ae].usedTimes++;const pe=Z[E.__cacheKey];pe!==void 0&&(Z[E.__cacheKey].usedTimes--,pe.usedTimes===0&&O(w)),E.__cacheKey=ae,E.__webglTexture=Z[ae].texture}return S}function de(E,w,S){let D=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(D=35866),w.isData3DTexture&&(D=32879);const Z=Ce(E,w),ae=w.source;t.bindTexture(D,E.__webglTexture,33984+S);const pe=n.get(ae);if(ae.version!==pe.__version||Z===!0){t.activeTexture(33984+S),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);const re=M(w)&&_(w.image)===!1;let q=x(w.image,re,!1,u);q=At(w,q);const me=_(q)||o,Se=s.convert(w.format,w.encoding);let fe=s.convert(w.type),be=b(w.internalFormat,Se,fe,w.encoding,w.isVideoTexture);X(D,w,me);let _e;const Fe=w.mipmaps,Ue=o&&w.isVideoTexture!==!0,Ye=pe.__version===void 0||Z===!0,I=A(w,q,me);if(w.isDepthTexture)be=6402,o?w.type===ii?be=36012:w.type===Mi?be=33190:w.type===mr?be=35056:be=33189:w.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ei&&be===6402&&w.type!==hp&&w.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Mi,fe=s.convert(w.type)),w.format===wr&&be===6402&&(be=34041,w.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=mr,fe=s.convert(w.type))),Ye&&(Ue?t.texStorage2D(3553,1,be,q.width,q.height):t.texImage2D(3553,0,be,q.width,q.height,0,Se,fe,null));else if(w.isDataTexture)if(Fe.length>0&&me){Ue&&Ye&&t.texStorage2D(3553,I,be,Fe[0].width,Fe[0].height);for(let W=0,te=Fe.length;W<te;W++)_e=Fe[W],Ue?t.texSubImage2D(3553,W,0,0,_e.width,_e.height,Se,fe,_e.data):t.texImage2D(3553,W,be,_e.width,_e.height,0,Se,fe,_e.data);w.generateMipmaps=!1}else Ue?(Ye&&t.texStorage2D(3553,I,be,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,Se,fe,q.data)):t.texImage2D(3553,0,be,q.width,q.height,0,Se,fe,q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ue&&Ye&&t.texStorage3D(35866,I,be,Fe[0].width,Fe[0].height,q.depth);for(let W=0,te=Fe.length;W<te;W++)_e=Fe[W],w.format!==Yt?Se!==null?Ue?t.compressedTexSubImage3D(35866,W,0,0,0,_e.width,_e.height,q.depth,Se,_e.data,0,0):t.compressedTexImage3D(35866,W,be,_e.width,_e.height,q.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage3D(35866,W,0,0,0,_e.width,_e.height,q.depth,Se,fe,_e.data):t.texImage3D(35866,W,be,_e.width,_e.height,q.depth,0,Se,fe,_e.data)}else{Ue&&Ye&&t.texStorage2D(3553,I,be,Fe[0].width,Fe[0].height);for(let W=0,te=Fe.length;W<te;W++)_e=Fe[W],w.format!==Yt?Se!==null?Ue?t.compressedTexSubImage2D(3553,W,0,0,_e.width,_e.height,Se,_e.data):t.compressedTexImage2D(3553,W,be,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?t.texSubImage2D(3553,W,0,0,_e.width,_e.height,Se,fe,_e.data):t.texImage2D(3553,W,be,_e.width,_e.height,0,Se,fe,_e.data)}else if(w.isDataArrayTexture)Ue?(Ye&&t.texStorage3D(35866,I,be,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,Se,fe,q.data)):t.texImage3D(35866,0,be,q.width,q.height,q.depth,0,Se,fe,q.data);else if(w.isData3DTexture)Ue?(Ye&&t.texStorage3D(32879,I,be,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,Se,fe,q.data)):t.texImage3D(32879,0,be,q.width,q.height,q.depth,0,Se,fe,q.data);else if(w.isFramebufferTexture){if(Ye)if(Ue)t.texStorage2D(3553,I,be,q.width,q.height);else{let W=q.width,te=q.height;for(let ce=0;ce<I;ce++)t.texImage2D(3553,ce,be,W,te,0,Se,fe,null),W>>=1,te>>=1}}else if(Fe.length>0&&me){Ue&&Ye&&t.texStorage2D(3553,I,be,Fe[0].width,Fe[0].height);for(let W=0,te=Fe.length;W<te;W++)_e=Fe[W],Ue?t.texSubImage2D(3553,W,0,0,Se,fe,_e):t.texImage2D(3553,W,be,Se,fe,_e);w.generateMipmaps=!1}else Ue?(Ye&&t.texStorage2D(3553,I,be,q.width,q.height),t.texSubImage2D(3553,0,0,0,Se,fe,q)):t.texImage2D(3553,0,be,Se,fe,q);C(w,me)&&P(D),pe.__version=ae.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function xe(E,w,S){if(w.image.length!==6)return;const D=Ce(E,w),Z=w.source;t.bindTexture(34067,E.__webglTexture,33984+S);const ae=n.get(Z);if(Z.version!==ae.__version||D===!0){t.activeTexture(33984+S),i.pixelStorei(37440,w.flipY),i.pixelStorei(37441,w.premultiplyAlpha),i.pixelStorei(3317,w.unpackAlignment),i.pixelStorei(37443,0);const pe=w.isCompressedTexture||w.image[0].isCompressedTexture,re=w.image[0]&&w.image[0].isDataTexture,q=[];for(let W=0;W<6;W++)!pe&&!re?q[W]=x(w.image[W],!1,!0,c):q[W]=re?w.image[W].image:w.image[W],q[W]=At(w,q[W]);const me=q[0],Se=_(me)||o,fe=s.convert(w.format,w.encoding),be=s.convert(w.type),_e=b(w.internalFormat,fe,be,w.encoding),Fe=o&&w.isVideoTexture!==!0,Ue=ae.__version===void 0||D===!0;let Ye=A(w,me,Se);X(34067,w,Se);let I;if(pe){Fe&&Ue&&t.texStorage2D(34067,Ye,_e,me.width,me.height);for(let W=0;W<6;W++){I=q[W].mipmaps;for(let te=0;te<I.length;te++){const ce=I[te];w.format!==Yt?fe!==null?Fe?t.compressedTexSubImage2D(34069+W,te,0,0,ce.width,ce.height,fe,ce.data):t.compressedTexImage2D(34069+W,te,_e,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(34069+W,te,0,0,ce.width,ce.height,fe,be,ce.data):t.texImage2D(34069+W,te,_e,ce.width,ce.height,0,fe,be,ce.data)}}}else{I=w.mipmaps,Fe&&Ue&&(I.length>0&&Ye++,t.texStorage2D(34067,Ye,_e,q[0].width,q[0].height));for(let W=0;W<6;W++)if(re){Fe?t.texSubImage2D(34069+W,0,0,0,q[W].width,q[W].height,fe,be,q[W].data):t.texImage2D(34069+W,0,_e,q[W].width,q[W].height,0,fe,be,q[W].data);for(let te=0;te<I.length;te++){const ge=I[te].image[W].image;Fe?t.texSubImage2D(34069+W,te+1,0,0,ge.width,ge.height,fe,be,ge.data):t.texImage2D(34069+W,te+1,_e,ge.width,ge.height,0,fe,be,ge.data)}}else{Fe?t.texSubImage2D(34069+W,0,0,0,fe,be,q[W]):t.texImage2D(34069+W,0,_e,fe,be,q[W]);for(let te=0;te<I.length;te++){const ce=I[te];Fe?t.texSubImage2D(34069+W,te+1,0,0,fe,be,ce.image[W]):t.texImage2D(34069+W,te+1,_e,fe,be,ce.image[W])}}}C(w,Se)&&P(34067),ae.__version=Z.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function oe(E,w,S,D,Z){const ae=s.convert(S.format,S.encoding),pe=s.convert(S.type),re=b(S.internalFormat,ae,pe,S.encoding);n.get(w).__hasExternalTextures||(Z===32879||Z===35866?t.texImage3D(Z,0,re,w.width,w.height,w.depth,0,ae,pe,null):t.texImage2D(Z,0,re,w.width,w.height,0,ae,pe,null)),t.bindFramebuffer(36160,E),Ne(w)?f.framebufferTexture2DMultisampleEXT(36160,D,Z,n.get(S).__webglTexture,0,Qe(w)):(Z===3553||Z>=34069&&Z<=34074)&&i.framebufferTexture2D(36160,D,Z,n.get(S).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(E,w,S){if(i.bindRenderbuffer(36161,E),w.depthBuffer&&!w.stencilBuffer){let D=33189;if(S||Ne(w)){const Z=w.depthTexture;Z&&Z.isDepthTexture&&(Z.type===ii?D=36012:Z.type===Mi&&(D=33190));const ae=Qe(w);Ne(w)?f.renderbufferStorageMultisampleEXT(36161,ae,D,w.width,w.height):i.renderbufferStorageMultisample(36161,ae,D,w.width,w.height)}else i.renderbufferStorage(36161,D,w.width,w.height);i.framebufferRenderbuffer(36160,36096,36161,E)}else if(w.depthBuffer&&w.stencilBuffer){const D=Qe(w);S&&Ne(w)===!1?i.renderbufferStorageMultisample(36161,D,35056,w.width,w.height):Ne(w)?f.renderbufferStorageMultisampleEXT(36161,D,35056,w.width,w.height):i.renderbufferStorage(36161,34041,w.width,w.height),i.framebufferRenderbuffer(36160,33306,36161,E)}else{const D=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Z=0;Z<D.length;Z++){const ae=D[Z],pe=s.convert(ae.format,ae.encoding),re=s.convert(ae.type),q=b(ae.internalFormat,pe,re,ae.encoding),me=Qe(w);S&&Ne(w)===!1?i.renderbufferStorageMultisample(36161,me,q,w.width,w.height):Ne(w)?f.renderbufferStorageMultisampleEXT(36161,me,q,w.width,w.height):i.renderbufferStorage(36161,q,w.width,w.height)}}i.bindRenderbuffer(36161,null)}function Te(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const D=n.get(w.depthTexture).__webglTexture,Z=Qe(w);if(w.depthTexture.format===Ei)Ne(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,D,0,Z):i.framebufferTexture2D(36160,36096,3553,D,0);else if(w.depthTexture.format===wr)Ne(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,D,0,Z):i.framebufferTexture2D(36160,33306,3553,D,0);else throw new Error("Unknown depthTexture format")}function ve(E){const w=n.get(E),S=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(S)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,E)}else if(S){w.__webglDepthbuffer=[];for(let D=0;D<6;D++)t.bindFramebuffer(36160,w.__webglFramebuffer[D]),w.__webglDepthbuffer[D]=i.createRenderbuffer(),Be(w.__webglDepthbuffer[D],E,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),Be(w.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function Je(E,w,S){const D=n.get(E);w!==void 0&&oe(D.__webglFramebuffer,E,E.texture,36064,3553),S!==void 0&&ve(E)}function at(E){const w=E.texture,S=n.get(E),D=n.get(w);E.addEventListener("dispose",Y),E.isWebGLMultipleRenderTargets!==!0&&(D.__webglTexture===void 0&&(D.__webglTexture=i.createTexture()),D.__version=w.version,a.memory.textures++);const Z=E.isWebGLCubeRenderTarget===!0,ae=E.isWebGLMultipleRenderTargets===!0,pe=_(E)||o;if(Z){S.__webglFramebuffer=[];for(let re=0;re<6;re++)S.__webglFramebuffer[re]=i.createFramebuffer()}else{if(S.__webglFramebuffer=i.createFramebuffer(),ae)if(r.drawBuffers){const re=E.texture;for(let q=0,me=re.length;q<me;q++){const Se=n.get(re[q]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&Ne(E)===!1){const re=ae?w:[w];S.__webglMultisampledFramebuffer=i.createFramebuffer(),S.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,S.__webglMultisampledFramebuffer);for(let q=0;q<re.length;q++){const me=re[q];S.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(36161,S.__webglColorRenderbuffer[q]);const Se=s.convert(me.format,me.encoding),fe=s.convert(me.type),be=b(me.internalFormat,Se,fe,me.encoding,E.isXRRenderTarget===!0),_e=Qe(E);i.renderbufferStorageMultisample(36161,_e,be,E.width,E.height),i.framebufferRenderbuffer(36160,36064+q,36161,S.__webglColorRenderbuffer[q])}i.bindRenderbuffer(36161,null),E.depthBuffer&&(S.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(S.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(Z){t.bindTexture(34067,D.__webglTexture),X(34067,w,pe);for(let re=0;re<6;re++)oe(S.__webglFramebuffer[re],E,w,36064,34069+re);C(w,pe)&&P(34067),t.unbindTexture()}else if(ae){const re=E.texture;for(let q=0,me=re.length;q<me;q++){const Se=re[q],fe=n.get(Se);t.bindTexture(3553,fe.__webglTexture),X(3553,Se,pe),oe(S.__webglFramebuffer,E,Se,36064+q,3553),C(Se,pe)&&P(3553)}t.unbindTexture()}else{let re=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?re=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,D.__webglTexture),X(re,w,pe),oe(S.__webglFramebuffer,E,w,36064,re),C(w,pe)&&P(re),t.unbindTexture()}E.depthBuffer&&ve(E)}function st(E){const w=_(E)||o,S=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let D=0,Z=S.length;D<Z;D++){const ae=S[D];if(C(ae,w)){const pe=E.isWebGLCubeRenderTarget?34067:3553,re=n.get(ae).__webglTexture;t.bindTexture(pe,re),P(pe),t.unbindTexture()}}}function xt(E){if(o&&E.samples>0&&Ne(E)===!1){const w=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],S=E.width,D=E.height;let Z=16384;const ae=[],pe=E.stencilBuffer?33306:36096,re=n.get(E),q=E.isWebGLMultipleRenderTargets===!0;if(q)for(let me=0;me<w.length;me++)t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+me,36161,null),t.bindFramebuffer(36160,re.__webglFramebuffer),i.framebufferTexture2D(36009,36064+me,3553,null,0);t.bindFramebuffer(36008,re.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,re.__webglFramebuffer);for(let me=0;me<w.length;me++){ae.push(36064+me),E.depthBuffer&&ae.push(pe);const Se=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Se===!1&&(E.depthBuffer&&(Z|=256),E.stencilBuffer&&(Z|=1024)),q&&i.framebufferRenderbuffer(36008,36064,36161,re.__webglColorRenderbuffer[me]),Se===!0&&(i.invalidateFramebuffer(36008,[pe]),i.invalidateFramebuffer(36009,[pe])),q){const fe=n.get(w[me]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,fe,0)}i.blitFramebuffer(0,0,S,D,0,0,S,D,Z,9728),d&&i.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let me=0;me<w.length;me++){t.bindFramebuffer(36160,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+me,36161,re.__webglColorRenderbuffer[me]);const Se=n.get(w[me]).__webglTexture;t.bindFramebuffer(36160,re.__webglFramebuffer),i.framebufferTexture2D(36009,36064+me,3553,Se,0)}t.bindFramebuffer(36009,re.__webglMultisampledFramebuffer)}}function Qe(E){return Math.min(h,E.samples)}function Ne(E){const w=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(E){const w=a.render.frame;g.get(E)!==w&&(g.set(E,w),E.update())}function At(E,w){const S=E.encoding,D=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ql||S!==Ii&&(S===Ge?o===!1?e.has("EXT_sRGB")===!0&&D===Yt?(E.format=ql,E.minFilter=Ft,E.generateMipmaps=!1):w=gp.sRGBToLinear(w):(D!==Yt||Z!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",S)),w}this.allocateTextureUnit=$,this.resetTextureUnits=ne,this.setTexture2D=N,this.setTexture2DArray=ee,this.setTexture3D=Q,this.setTextureCube=ie,this.rebindTextures=Je,this.setupRenderTarget=at,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ne}function jT(i,e,t){const n=t.isWebGL2;function r(s,a=null){let o;if(s===Li)return 5121;if(s===Tb)return 32819;if(s===Ab)return 32820;if(s===wb)return 5120;if(s===Sb)return 5122;if(s===hp)return 5123;if(s===Mb)return 5124;if(s===Mi)return 5125;if(s===ii)return 5126;if(s===ms)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Eb)return 6406;if(s===Yt)return 6408;if(s===Db)return 6409;if(s===Rb)return 6410;if(s===Ei)return 6402;if(s===wr)return 34041;if(s===Pb)return 6403;if(s===Cb)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ql)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Lb)return 36244;if(s===Ib)return 33319;if(s===Fb)return 33320;if(s===Nb)return 36249;if(s===Io||s===Fo||s===No||s===Oo)if(a===Ge)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Io)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===No)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Io)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===No)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Oo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qu||s===Xu||s===Ku||s===Yu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===qu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ku)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Yu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ob)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zu||s===Ju)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Zu)return a===Ge?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ju)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qu||s===ef||s===tf||s===nf||s===rf||s===sf||s===af||s===of||s===lf||s===cf||s===uf||s===ff||s===hf||s===df)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Qu)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ef)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tf)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nf)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rf)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sf)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===af)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===of)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lf)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cf)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===uf)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ff)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hf)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===df)return a===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===pf)return a===Ge?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===mr?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class qT extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ri extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XT={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const y=new ri;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[m.jointName]=y,c.add(y)}const v=c.joints[m.jointName];p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(XT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class KT extends It{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:Ei,u!==Ei&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ei&&(n=Mi),n===void 0&&u===wr&&(n=mr),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1}}class YT extends Or{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const v=[],y=[],x=new Pt;x.layers.enable(1),x.viewport=new $e;const _=new Pt;_.layers.enable(2),_.viewport=new $e;const M=[x,_],C=new qT;C.layers.enable(1),C.layers.enable(2);let P=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let N=v[F];return N===void 0&&(N=new cl,v[F]=N),N.getTargetRaySpace()},this.getControllerGrip=function(F){let N=v[F];return N===void 0&&(N=new cl,v[F]=N),N.getGripSpace()},this.getHand=function(F){let N=v[F];return N===void 0&&(N=new cl,v[F]=N),N.getHandSpace()};function A(F){const N=y.indexOf(F.inputSource);if(N===-1)return;const ee=v[N];ee!==void 0&&ee.dispatchEvent({type:F.type,data:F.inputSource})}function L(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",H);for(let F=0;F<v.length;F++){const N=y[F];N!==null&&(y[F]=null,v[F].disconnect(N))}P=null,b=null,e.setRenderTarget(m),f=null,h=null,u=null,r=null,p=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",L),r.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const N={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,N),r.updateRenderState({baseLayer:f}),p=new ln(f.framebufferWidth,f.framebufferHeight,{format:Yt,type:Li,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let N=null,ee=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,N=g.stencil?wr:Ei,ee=g.stencil?mr:Mi);const ie={colorFormat:32856,depthFormat:Q,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(ie),r.updateRenderState({layers:[h]}),p=new ln(h.textureWidth,h.textureHeight,{format:Yt,type:Li,depthTexture:new KT(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const le=e.properties.get(p);le.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),$.setContext(r),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function H(F){for(let N=0;N<F.removed.length;N++){const ee=F.removed[N],Q=y.indexOf(ee);Q>=0&&(y[Q]=null,v[Q].dispatchEvent({type:"disconnected",data:ee}))}for(let N=0;N<F.added.length;N++){const ee=F.added[N];let Q=y.indexOf(ee);if(Q===-1){for(let le=0;le<v.length;le++)if(le>=y.length){y.push(ee),Q=le;break}else if(y[le]===null){y[le]=ee,Q=le;break}if(Q===-1)break}const ie=v[Q];ie&&ie.dispatchEvent({type:"connected",data:ee})}}const Y=new R,U=new R;function O(F,N,ee){Y.setFromMatrixPosition(N.matrixWorld),U.setFromMatrixPosition(ee.matrixWorld);const Q=Y.distanceTo(U),ie=N.projectionMatrix.elements,le=ee.projectionMatrix.elements,z=ie[14]/(ie[10]-1),X=ie[14]/(ie[10]+1),Ce=(ie[9]+1)/ie[5],de=(ie[9]-1)/ie[5],xe=(ie[8]-1)/ie[0],oe=(le[8]+1)/le[0],Be=z*xe,Te=z*oe,ve=Q/(-xe+oe),Je=ve*-xe;N.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Je),F.translateZ(ve),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const at=z+ve,st=X+ve,xt=Be-Je,Qe=Te+(Q-Je),Ne=Ce*X/st*at,Tt=de*X/st*at;F.projectionMatrix.makePerspective(xt,Qe,Ne,Tt,at,st)}function G(F,N){N===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(N.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;C.near=_.near=x.near=F.near,C.far=_.far=x.far=F.far,(P!==C.near||b!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,b=C.far);const N=F.parent,ee=C.cameras;G(C,N);for(let ie=0;ie<ee.length;ie++)G(ee[ie],N);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),F.matrix.copy(C.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const Q=F.children;for(let ie=0,le=Q.length;ie<le;ie++)Q[ie].updateMatrixWorld(!0);ee.length===2?O(C,x,_):C.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(F){h!==null&&(h.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)};let J=null;function ne(F,N){if(c=N.getViewerPose(l||a),d=N,c!==null){const ee=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Q=!1;ee.length!==C.cameras.length&&(C.cameras.length=0,Q=!0);for(let ie=0;ie<ee.length;ie++){const le=ee[ie];let z=null;if(f!==null)z=f.getViewport(le);else{const Ce=u.getViewSubImage(h,le);z=Ce.viewport,ie===0&&(e.setRenderTargetTextures(p,Ce.colorTexture,h.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(p))}let X=M[ie];X===void 0&&(X=new Pt,X.layers.enable(ie),X.viewport=new $e,M[ie]=X),X.matrix.fromArray(le.transform.matrix),X.projectionMatrix.fromArray(le.projectionMatrix),X.viewport.set(z.x,z.y,z.width,z.height),ie===0&&C.matrix.copy(X.matrix),Q===!0&&C.cameras.push(X)}}for(let ee=0;ee<v.length;ee++){const Q=y[ee],ie=v[ee];Q!==null&&ie!==void 0&&ie.update(Q,N,l||a)}J&&J(F,N),d=null}const $=new Mp;$.setAnimationLoop(ne),this.setAnimationLoop=function(F){J=F},this.dispose=function(){}}}function ZT(i,e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?o(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Nt&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Nt&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Nt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function JT(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(35375):0;function l(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function c(y,x){let _=r[y.id];_===void 0&&(g(y),_=u(y),r[y.id]=_,y.addEventListener("dispose",p));const M=x.program;n.updateUBOMapping(y,M);const C=e.render.frame;s[y.id]!==C&&(f(y),s[y.id]=C)}function u(y){const x=h();y.__bindingPointIndex=x;const _=i.createBuffer(),M=y.__size,C=y.usage;return i.bindBuffer(35345,_),i.bufferData(35345,M,C),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=r[y.id],_=y.uniforms,M=y.__cache;i.bindBuffer(35345,x);for(let C=0,P=_.length;C<P;C++){const b=_[C];if(d(b,C,M)===!0){const A=b.value,L=b.__offset;typeof A=="number"?(b.__data[0]=A,i.bufferSubData(35345,L,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):A.toArray(b.__data),i.bufferSubData(35345,L,b.__data))}}i.bindBuffer(35345,null)}function d(y,x,_){const M=y.value;if(_[x]===void 0)return typeof M=="number"?_[x]=M:_[x]=M.clone(),!0;if(typeof M=="number"){if(_[x]!==M)return _[x]=M,!0}else{const C=_[x];if(C.equals(M)===!1)return C.copy(M),!0}return!1}function g(y){const x=y.uniforms;let _=0;const M=16;let C=0;for(let P=0,b=x.length;P<b;P++){const A=x[P],L=m(A);if(A.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=_,P>0){C=_%M;const H=M-C;C!==0&&H-L.boundary<0&&(_+=M-C,A.__offset=_)}_+=L.storage}return C=_%M,C>0&&(_+=M-C),y.__size=_,y.__cache={},this}function m(y){const x=y.value,_={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function p(y){const x=y.target;x.removeEventListener("dispose",p);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function v(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:v}}function QT(){const i=_s("canvas");return i.style.display="block",i}function Dp(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:QT(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ii,this.physicallyCorrectLights=!1,this.toneMapping=Un,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let p=!1,v=0,y=0,x=null,_=-1,M=null;const C=new $e,P=new $e;let b=null,A=e.width,L=e.height,H=1,Y=null,U=null;const O=new $e(0,0,A,L),G=new $e(0,0,A,L);let J=!1;const ne=new Ic;let $=!1,F=!1,N=null;const ee=new Ie,Q=new ue,ie=new R,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function z(){return x===null?H:1}let X=t;function Ce(T,k){for(let j=0;j<T.length;j++){const B=T[j],K=e.getContext(B,k);if(K!==null)return K}return null}try{const T={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cc}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",Fe,!1),X===null){const k=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&k.shift(),X=Ce(k,T),X===null)throw Ce(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let de,xe,oe,Be,Te,ve,Je,at,st,xt,Qe,Ne,Tt,At,E,w,S,D,Z,ae,pe,re,q,me;function Se(){de=new uM(X),xe=new rM(X,de,i),de.init(xe),re=new jT(X,de,xe),oe=new WT(X,de,xe),Be=new dM,Te=new RT,ve=new $T(X,de,oe,Te,xe,re,Be),Je=new aM(m),at=new cM(m),st=new w1(X,xe),q=new nM(X,de,st,xe),xt=new fM(X,st,Be,q),Qe=new vM(X,xt,st,Be),Z=new gM(X,xe,ve),w=new sM(Te),Ne=new DT(m,Je,at,de,xe,q,w),Tt=new ZT(m,Te),At=new LT,E=new kT(de,xe),D=new tM(m,Je,at,oe,Qe,u,a),S=new GT(m,Qe,xe),me=new JT(X,Be,xe,oe),ae=new iM(X,de,Be,xe),pe=new hM(X,de,Be,xe),Be.programs=Ne.programs,m.capabilities=xe,m.extensions=de,m.properties=Te,m.renderLists=At,m.shadowMap=S,m.state=oe,m.info=Be}Se();const fe=new YT(m,X);this.xr=fe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const T=de.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=de.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(T){T!==void 0&&(H=T,this.setSize(A,L,!1))},this.getSize=function(T){return T.set(A,L)},this.setSize=function(T,k,j){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=T,L=k,e.width=Math.floor(T*H),e.height=Math.floor(k*H),j!==!1&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(A*H,L*H).floor()},this.setDrawingBufferSize=function(T,k,j){A=T,L=k,H=j,e.width=Math.floor(T*j),e.height=Math.floor(k*j),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(O)},this.setViewport=function(T,k,j,B){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,k,j,B),oe.viewport(C.copy(O).multiplyScalar(H).floor())},this.getScissor=function(T){return T.copy(G)},this.setScissor=function(T,k,j,B){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,k,j,B),oe.scissor(P.copy(G).multiplyScalar(H).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(T){oe.setScissorTest(J=T)},this.setOpaqueSort=function(T){Y=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor.apply(D,arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha.apply(D,arguments)},this.clear=function(T=!0,k=!0,j=!0){let B=0;T&&(B|=16384),k&&(B|=256),j&&(B|=1024),X.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Fe,!1),At.dispose(),E.dispose(),Te.dispose(),Je.dispose(),at.dispose(),Qe.dispose(),q.dispose(),me.dispose(),Ne.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ce),fe.removeEventListener("sessionend",ge),N&&(N.dispose(),N=null),ze.stop()};function be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Be.autoReset,k=S.enabled,j=S.autoUpdate,B=S.needsUpdate,K=S.type;Se(),Be.autoReset=T,S.enabled=k,S.autoUpdate=j,S.needsUpdate=B,S.type=K}function Fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ue(T){const k=T.target;k.removeEventListener("dispose",Ue),Ye(k)}function Ye(T){I(T),Te.remove(T)}function I(T){const k=Te.get(T).programs;k!==void 0&&(k.forEach(function(j){Ne.releaseProgram(j)}),T.isShaderMaterial&&Ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,j,B,K,we){k===null&&(k=le);const Ae=K.isMesh&&K.matrixWorld.determinant()<0,Re=yg(T,k,j,B,K);oe.setMaterial(B,Ae);let De=j.index;const Ve=j.attributes.position;if(De===null){if(Ve===void 0||Ve.count===0)return}else if(De.count===0)return;let Le=1;B.wireframe===!0&&(De=xt.getWireframeAttribute(j),Le=2),q.setup(K,B,Re,j,De);let Oe,it=ae;De!==null&&(Oe=st.get(De),it=pe,it.setIndex(Oe));const hi=De!==null?De.count:Ve.count,$i=j.drawRange.start*Le,ji=j.drawRange.count*Le,hn=we!==null?we.start*Le:0,He=we!==null?we.count*Le:1/0,qi=Math.max($i,hn),ot=Math.min(hi,$i+ji,hn+He)-1,jt=Math.max(0,ot-qi+1);if(jt!==0){if(K.isMesh)B.wireframe===!0?(oe.setLineWidth(B.wireframeLinewidth*z()),it.setMode(1)):it.setMode(4);else if(K.isLine){let jn=B.linewidth;jn===void 0&&(jn=1),oe.setLineWidth(jn*z()),K.isLineSegments?it.setMode(1):K.isLineLoop?it.setMode(2):it.setMode(3)}else K.isPoints?it.setMode(0):K.isSprite&&it.setMode(4);if(K.isInstancedMesh)it.renderInstances(qi,jt,K.count);else if(j.isInstancedBufferGeometry){const jn=Math.min(j.instanceCount,j._maxInstanceCount);it.renderInstances(qi,jt,jn)}else it.render(qi,jt)}},this.compile=function(T,k){function j(B,K,we){B.transparent===!0&&B.side===Fn?(B.side=Nt,B.needsUpdate=!0,$t(B,K,we),B.side=Pi,B.needsUpdate=!0,$t(B,K,we),B.side=Fn):$t(B,K,we)}f=E.get(T),f.init(),g.push(f),T.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(m.physicallyCorrectLights),T.traverse(function(B){const K=B.material;if(K)if(Array.isArray(K))for(let we=0;we<K.length;we++){const Ae=K[we];j(Ae,T,B)}else j(K,T,B)}),g.pop(),f=null};let W=null;function te(T){W&&W(T)}function ce(){ze.stop()}function ge(){ze.start()}const ze=new Mp;ze.setAnimationLoop(te),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(T){W=T,fe.setAnimationLoop(T),T===null?ze.stop():ze.start()},fe.addEventListener("sessionstart",ce),fe.addEventListener("sessionend",ge),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(k),k=fe.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,k,x),f=E.get(T,g.length),f.init(),g.push(f),ee.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ne.setFromProjectionMatrix(ee),F=this.localClippingEnabled,$=w.init(this.clippingPlanes,F,k),h=At.get(T,d.length),h.init(),d.push(h),pt(T,k,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(Y,U),$===!0&&w.beginShadows();const j=f.state.shadowsArray;if(S.render(j,T,k),$===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),D.render(h,T),f.setupLights(m.physicallyCorrectLights),k.isArrayCamera){const B=k.cameras;for(let K=0,we=B.length;K<we;K++){const Ae=B[K];yt(h,T,Ae,Ae.viewport)}}else yt(h,T,k);x!==null&&(ve.updateMultisampleRenderTarget(x),ve.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(m,T,k),q.resetDefaultState(),_=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function pt(T,k,j,B){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ne.intersectsSprite(T)){B&&ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ee);const Ae=Qe.update(T),Re=T.material;Re.visible&&h.push(T,Ae,Re,j,ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Be.render.frame&&(T.skeleton.update(),T.skeleton.frame=Be.render.frame),!T.frustumCulled||ne.intersectsObject(T))){B&&ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ee);const Ae=Qe.update(T),Re=T.material;if(Array.isArray(Re)){const De=Ae.groups;for(let Ve=0,Le=De.length;Ve<Le;Ve++){const Oe=De[Ve],it=Re[Oe.materialIndex];it&&it.visible&&h.push(T,Ae,it,j,ie.z,Oe)}}else Re.visible&&h.push(T,Ae,Re,j,ie.z,null)}}const we=T.children;for(let Ae=0,Re=we.length;Ae<Re;Ae++)pt(we[Ae],k,j,B)}function yt(T,k,j,B){const K=T.opaque,we=T.transmissive,Ae=T.transparent;f.setupLightsView(j),we.length>0&&fi(K,k,j),B&&oe.viewport(C.copy(B)),K.length>0&&Ze(K,k,j),we.length>0&&Ze(we,k,j),Ae.length>0&&Ze(Ae,k,j),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function fi(T,k,j){const B=xe.isWebGL2;N===null&&(N=new ln(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?ms:Li,minFilter:Nr,samples:B&&s===!0?4:0})),m.getDrawingBufferSize(Q),B?N.setSize(Q.x,Q.y):N.setSize(Oa(Q.x),Oa(Q.y));const K=m.getRenderTarget();m.setRenderTarget(N),m.clear();const we=m.toneMapping;m.toneMapping=Un,Ze(T,k,j),m.toneMapping=we,ve.updateMultisampleRenderTarget(N),ve.updateRenderTargetMipmap(N),m.setRenderTarget(K)}function Ze(T,k,j){const B=k.isScene===!0?k.overrideMaterial:null;for(let K=0,we=T.length;K<we;K++){const Ae=T[K],Re=Ae.object,De=Ae.geometry,Ve=B===null?Ae.material:B,Le=Ae.group;Re.layers.test(j.layers)&&Sn(Re,k,j,De,Ve,Le)}}function Sn(T,k,j,B,K,we){T.onBeforeRender(m,k,j,B,K,we),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(m,k,j,B,T,we),K.transparent===!0&&K.side===Fn?(K.side=Nt,K.needsUpdate=!0,m.renderBufferDirect(j,k,B,K,T,we),K.side=Pi,K.needsUpdate=!0,m.renderBufferDirect(j,k,B,K,T,we),K.side=Fn):m.renderBufferDirect(j,k,B,K,T,we),T.onAfterRender(m,k,j,B,K,we)}function $t(T,k,j){k.isScene!==!0&&(k=le);const B=Te.get(T),K=f.state.lights,we=f.state.shadowsArray,Ae=K.state.version,Re=Ne.getParameters(T,K.state,we,k,j),De=Ne.getProgramCacheKey(Re);let Ve=B.programs;B.environment=T.isMeshStandardMaterial?k.environment:null,B.fog=k.fog,B.envMap=(T.isMeshStandardMaterial?at:Je).get(T.envMap||B.environment),Ve===void 0&&(T.addEventListener("dispose",Ue),Ve=new Map,B.programs=Ve);let Le=Ve.get(De);if(Le!==void 0){if(B.currentProgram===Le&&B.lightsStateVersion===Ae)return au(T,Re),Le}else Re.uniforms=Ne.getUniforms(T),T.onBuild(j,Re,m),T.onBeforeCompile(Re,m),Le=Ne.acquireProgram(Re,De),Ve.set(De,Le),B.uniforms=Re.uniforms;const Oe=B.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=w.uniform),au(T,Re),B.needsLights=wg(T),B.lightsStateVersion=Ae,B.needsLights&&(Oe.ambientLightColor.value=K.state.ambient,Oe.lightProbe.value=K.state.probe,Oe.directionalLights.value=K.state.directional,Oe.directionalLightShadows.value=K.state.directionalShadow,Oe.spotLights.value=K.state.spot,Oe.spotLightShadows.value=K.state.spotShadow,Oe.rectAreaLights.value=K.state.rectArea,Oe.ltc_1.value=K.state.rectAreaLTC1,Oe.ltc_2.value=K.state.rectAreaLTC2,Oe.pointLights.value=K.state.point,Oe.pointLightShadows.value=K.state.pointShadow,Oe.hemisphereLights.value=K.state.hemi,Oe.directionalShadowMap.value=K.state.directionalShadowMap,Oe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Oe.spotShadowMap.value=K.state.spotShadowMap,Oe.spotLightMatrix.value=K.state.spotLightMatrix,Oe.spotLightMap.value=K.state.spotLightMap,Oe.pointShadowMap.value=K.state.pointShadowMap,Oe.pointShadowMatrix.value=K.state.pointShadowMatrix);const it=Le.getUniforms(),hi=Aa.seqWithValue(it.seq,Oe);return B.currentProgram=Le,B.uniformsList=hi,Le}function au(T,k){const j=Te.get(T);j.outputEncoding=k.outputEncoding,j.instancing=k.instancing,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function yg(T,k,j,B,K){k.isScene!==!0&&(k=le),ve.resetTextureUnits();const we=k.fog,Ae=B.isMeshStandardMaterial?k.environment:null,Re=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Ii,De=(B.isMeshStandardMaterial?at:Je).get(B.envMap||Ae),Ve=B.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Le=!!B.normalMap&&!!j.attributes.tangent,Oe=!!j.morphAttributes.position,it=!!j.morphAttributes.normal,hi=!!j.morphAttributes.color,$i=B.toneMapped?m.toneMapping:Un,ji=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,hn=ji!==void 0?ji.length:0,He=Te.get(B),qi=f.state.lights;if($===!0&&(F===!0||T!==M)){const kt=T===M&&B.id===_;w.setState(B,T,kt)}let ot=!1;B.version===He.__version?(He.needsLights&&He.lightsStateVersion!==qi.state.version||He.outputEncoding!==Re||K.isInstancedMesh&&He.instancing===!1||!K.isInstancedMesh&&He.instancing===!0||K.isSkinnedMesh&&He.skinning===!1||!K.isSkinnedMesh&&He.skinning===!0||He.envMap!==De||B.fog===!0&&He.fog!==we||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==w.numPlanes||He.numIntersection!==w.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==Le||He.morphTargets!==Oe||He.morphNormals!==it||He.morphColors!==hi||He.toneMapping!==$i||xe.isWebGL2===!0&&He.morphTargetsCount!==hn)&&(ot=!0):(ot=!0,He.__version=B.version);let jt=He.currentProgram;ot===!0&&(jt=$t(B,k,K));let jn=!1,Xr=!1,mo=!1;const Et=jt.getUniforms(),di=He.uniforms;if(oe.useProgram(jt.program)&&(jn=!0,Xr=!0,mo=!0),B.id!==_&&(_=B.id,Xr=!0),jn||M!==T){if(Et.setValue(X,"projectionMatrix",T.projectionMatrix),xe.logarithmicDepthBuffer&&Et.setValue(X,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,Xr=!0,mo=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const kt=Et.map.cameraPosition;kt!==void 0&&kt.setValue(X,ie.setFromMatrixPosition(T.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Et.setValue(X,"isOrthographic",T.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||K.isSkinnedMesh)&&Et.setValue(X,"viewMatrix",T.matrixWorldInverse)}if(K.isSkinnedMesh){Et.setOptional(X,K,"bindMatrix"),Et.setOptional(X,K,"bindMatrixInverse");const kt=K.skeleton;kt&&(xe.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),Et.setValue(X,"boneTexture",kt.boneTexture,ve),Et.setValue(X,"boneTextureSize",kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const go=j.morphAttributes;if((go.position!==void 0||go.normal!==void 0||go.color!==void 0&&xe.isWebGL2===!0)&&Z.update(K,j,B,jt),(Xr||He.receiveShadow!==K.receiveShadow)&&(He.receiveShadow=K.receiveShadow,Et.setValue(X,"receiveShadow",K.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(di.envMap.value=De,di.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Xr&&(Et.setValue(X,"toneMappingExposure",m.toneMappingExposure),He.needsLights&&bg(di,mo),we&&B.fog===!0&&Tt.refreshFogUniforms(di,we),Tt.refreshMaterialUniforms(di,B,H,L,N),Aa.upload(X,He.uniformsList,di,ve)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Aa.upload(X,He.uniformsList,di,ve),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Et.setValue(X,"center",K.center),Et.setValue(X,"modelViewMatrix",K.modelViewMatrix),Et.setValue(X,"normalMatrix",K.normalMatrix),Et.setValue(X,"modelMatrix",K.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const kt=B.uniformsGroups;for(let vo=0,Sg=kt.length;vo<Sg;vo++)if(xe.isWebGL2){const ou=kt[vo];me.update(ou,jt),me.bind(ou,jt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jt}function bg(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function wg(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,k,j){Te.get(T.texture).__webglTexture=k,Te.get(T.depthTexture).__webglTexture=j;const B=Te.get(T);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=j===void 0,B.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){const j=Te.get(T);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,j=0){x=T,v=k,y=j;let B=!0,K=null,we=!1,Ae=!1;if(T){const De=Te.get(T);De.__useDefaultFramebuffer!==void 0?(oe.bindFramebuffer(36160,null),B=!1):De.__webglFramebuffer===void 0?ve.setupRenderTarget(T):De.__hasExternalTextures&&ve.rebindTextures(T,Te.get(T.texture).__webglTexture,Te.get(T.depthTexture).__webglTexture);const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const Le=Te.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(K=Le[k],we=!0):xe.isWebGL2&&T.samples>0&&ve.useMultisampledRTT(T)===!1?K=Te.get(T).__webglMultisampledFramebuffer:K=Le,C.copy(T.viewport),P.copy(T.scissor),b=T.scissorTest}else C.copy(O).multiplyScalar(H).floor(),P.copy(G).multiplyScalar(H).floor(),b=J;if(oe.bindFramebuffer(36160,K)&&xe.drawBuffers&&B&&oe.drawBuffers(T,K),oe.viewport(C),oe.scissor(P),oe.setScissorTest(b),we){const De=Te.get(T.texture);X.framebufferTexture2D(36160,36064,34069+k,De.__webglTexture,j)}else if(Ae){const De=Te.get(T.texture),Ve=k||0;X.framebufferTextureLayer(36160,36064,De.__webglTexture,j||0,Ve)}_=-1},this.readRenderTargetPixels=function(T,k,j,B,K,we,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Te.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){oe.bindFramebuffer(36160,Re);try{const De=T.texture,Ve=De.format,Le=De.type;if(Ve!==Yt&&re.convert(Ve)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Le===ms&&(de.has("EXT_color_buffer_half_float")||xe.isWebGL2&&de.has("EXT_color_buffer_float"));if(Le!==Li&&re.convert(Le)!==X.getParameter(35738)&&!(Le===ii&&(xe.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-B&&j>=0&&j<=T.height-K&&X.readPixels(k,j,B,K,re.convert(Ve),re.convert(Le),we)}finally{const De=x!==null?Te.get(x).__webglFramebuffer:null;oe.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(T,k,j=0){const B=Math.pow(2,-j),K=Math.floor(k.image.width*B),we=Math.floor(k.image.height*B);ve.setTexture2D(k,0),X.copyTexSubImage2D(3553,j,0,0,T.x,T.y,K,we),oe.unbindTexture()},this.copyTextureToTexture=function(T,k,j,B=0){const K=k.image.width,we=k.image.height,Ae=re.convert(j.format),Re=re.convert(j.type);ve.setTexture2D(j,0),X.pixelStorei(37440,j.flipY),X.pixelStorei(37441,j.premultiplyAlpha),X.pixelStorei(3317,j.unpackAlignment),k.isDataTexture?X.texSubImage2D(3553,B,T.x,T.y,K,we,Ae,Re,k.image.data):k.isCompressedTexture?X.compressedTexSubImage2D(3553,B,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,Ae,k.mipmaps[0].data):X.texSubImage2D(3553,B,T.x,T.y,Ae,Re,k.image),B===0&&j.generateMipmaps&&X.generateMipmap(3553),oe.unbindTexture()},this.copyTextureToTexture3D=function(T,k,j,B,K=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=T.max.x-T.min.x+1,Ae=T.max.y-T.min.y+1,Re=T.max.z-T.min.z+1,De=re.convert(B.format),Ve=re.convert(B.type);let Le;if(B.isData3DTexture)ve.setTexture3D(B,0),Le=32879;else if(B.isDataArrayTexture)ve.setTexture2DArray(B,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,B.flipY),X.pixelStorei(37441,B.premultiplyAlpha),X.pixelStorei(3317,B.unpackAlignment);const Oe=X.getParameter(3314),it=X.getParameter(32878),hi=X.getParameter(3316),$i=X.getParameter(3315),ji=X.getParameter(32877),hn=j.isCompressedTexture?j.mipmaps[0]:j.image;X.pixelStorei(3314,hn.width),X.pixelStorei(32878,hn.height),X.pixelStorei(3316,T.min.x),X.pixelStorei(3315,T.min.y),X.pixelStorei(32877,T.min.z),j.isDataTexture||j.isData3DTexture?X.texSubImage3D(Le,K,k.x,k.y,k.z,we,Ae,Re,De,Ve,hn.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Le,K,k.x,k.y,k.z,we,Ae,Re,De,hn.data)):X.texSubImage3D(Le,K,k.x,k.y,k.z,we,Ae,Re,De,Ve,hn),X.pixelStorei(3314,Oe),X.pixelStorei(32878,it),X.pixelStorei(3316,hi),X.pixelStorei(3315,$i),X.pixelStorei(32877,ji),K===0&&B.generateMipmaps&&X.generateMipmap(Le),oe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ve.setTextureCube(T,0):T.isData3DTexture?ve.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ve.setTexture2DArray(T,0):ve.setTexture2D(T,0),oe.unbindTexture()},this.resetState=function(){v=0,y=0,x=null,oe.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class e2 extends Dp{}e2.prototype.isWebGL1Renderer=!0;class t2 extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class n2{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new R;class Nc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),r=qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Jf=new R,Qf=new $e,eh=new $e,i2=new R,th=new Ie;class r2 extends nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;Qf.fromBufferAttribute(r.attributes.skinIndex,e),eh.fromBufferAttribute(r.attributes.skinWeight,e),Jf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=eh.getComponent(s);if(a!==0){const o=Qf.getComponent(s);th.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(i2.copy(Jf).applyMatrix4(th),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rp extends ke{constructor(){super(),this.isBone=!0,this.type="Bone"}}class s2 extends It{constructor(e=null,t=1,n=1,r,s,a,o,l,c=_t,u=_t,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nh=new Ie,a2=new Ie;class Oc{constructor(e=[],t=[]){this.uuid=on(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:a2;nh.multiplyMatrices(o,t[s]),nh.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Oc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=dp(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new s2(t,e,e,Yt,ii);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Rp),this.bones.push(a),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class ih extends Lt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rh=new Ie,sh=new Ie,da=[],o2=new Ie,es=new nt;class l2 extends nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ih(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let r=0;r<n;r++)this.setMatrixAt(r,o2)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,rh),sh.multiplyMatrices(n,rh),es.matrixWorld=sh,es.raycast(e,da);for(let a=0,o=da.length;a<o;a++){const l=da[a];l.instanceId=s,l.object=this,t.push(l)}da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ih(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Pp extends vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ah=new R,oh=new R,lh=new Ie,ul=new Lc,pa=new Br;class Bc extends ke{constructor(e=new Bt,t=new Pp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ah.fromBufferAttribute(t,r-1),oh.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ah.distanceTo(oh);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),pa.radius+=s,e.ray.intersectsSphere(pa)===!1)return;lh.copy(r).invert(),ul.copy(e.ray).applyMatrix4(lh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,u=new R,h=new R,f=new R,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const v=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let x=v,_=y-1;x<_;x+=d){const M=g.getX(x),C=g.getX(x+1);if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,C),ul.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(f);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let x=v,_=y-1;x<_;x+=d){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),ul.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const ch=new R,uh=new R;class c2 extends Bc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)ch.fromBufferAttribute(t,r),uh.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+ch.distanceTo(uh);e.setAttribute("lineDistance",new St(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class u2 extends Bc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Lp extends vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fh=new Ie,Yl=new Lc,ma=new Br,ga=new R;class f2 extends ke{constructor(e=new Bt,t=new Lp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(r),ma.radius+=s,e.ray.intersectsSphere(ma)===!1)return;fh.copy(r).invert(),Yl.copy(e.ray).applyMatrix4(fh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,m=d;g<m;g++){const p=c.getX(g);ga.fromBufferAttribute(h,p),hh(ga,p,l,r,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,m=d;g<m;g++)ga.fromBufferAttribute(h,g),hh(ga,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hh(i,e,t,n,r,s,a){const o=Yl.distanceSqToPoint(i);if(o<t){const l=new R;Yl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class kc extends Bt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new St(s,3)),this.setAttribute("normal",new St(s.slice(),3)),this.setAttribute("uv",new St(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new R,_=new R,M=new R;for(let C=0;C<t.length;C+=3)d(t[C+0],x),d(t[C+1],_),d(t[C+2],M),l(x,_,M,y)}function l(y,x,_,M){const C=M+1,P=[];for(let b=0;b<=C;b++){P[b]=[];const A=y.clone().lerp(_,b/C),L=x.clone().lerp(_,b/C),H=C-b;for(let Y=0;Y<=H;Y++)Y===0&&b===C?P[b][Y]=A:P[b][Y]=A.clone().lerp(L,Y/H)}for(let b=0;b<C;b++)for(let A=0;A<2*(C-b)-1;A++){const L=Math.floor(A/2);A%2===0?(f(P[b][L+1]),f(P[b+1][L]),f(P[b][L])):(f(P[b][L+1]),f(P[b+1][L+1]),f(P[b+1][L]))}}function c(y){const x=new R;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(y),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function u(){const y=new R;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const _=p(y)/2/Math.PI+.5,M=v(y)/Math.PI+.5;a.push(_,1-M)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){const x=a[y+0],_=a[y+2],M=a[y+4],C=Math.max(x,_,M),P=Math.min(x,_,M);C>.9&&P<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),M<.2&&(a[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,x){const _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){const y=new R,x=new R,_=new R,M=new R,C=new ue,P=new ue,b=new ue;for(let A=0,L=0;A<s.length;A+=9,L+=6){y.set(s[A+0],s[A+1],s[A+2]),x.set(s[A+3],s[A+4],s[A+5]),_.set(s[A+6],s[A+7],s[A+8]),C.set(a[L+0],a[L+1]),P.set(a[L+2],a[L+3]),b.set(a[L+4],a[L+5]),M.copy(y).add(x).add(_).divideScalar(3);const H=p(M);m(C,L+0,y,H),m(P,L+2,x,H),m(b,L+4,_,H)}}function m(y,x,_,M){M<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=M/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function v(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(e){return new kc(e.vertices,e.indices,e.radius,e.details)}}class Uc extends kc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Uc(e.radius,e.detail)}}class oo extends vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vi extends oo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ei(i,e,t){return Ip(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function va(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ip(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function h2(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function dh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function Fp(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class Ns{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class d2 extends Ns{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mf,endingEnd:mf}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case gf:s=e,o=2*t-n;break;case vf:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gf:a=e,l=2*n-t;break;case vf:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),m=g*g,p=m*g,v=-f*p+2*f*m-f*g,y=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,x=(-1-d)*p+(1.5+d)*m+.5*g,_=d*p-d*m;for(let M=0;M!==o;++M)s[M]=v*a[u+M]+y*a[c+M]+x*a[l+M]+_*a[h+M];return s}}class p2 extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}}class m2 extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new m2(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new p2(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new d2(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case Sr:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return Bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=ei(n,s,a),this.values=ei(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Ip(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=ei(this.times),t=ei(this.values),n=this.getValueSize(),r=this.getInterpolation()===Bo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=ei(e,0,a),this.values=ei(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=ei(this.times,0),t=ei(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Sr;class Ur extends wn{}Ur.prototype.ValueTypeName="bool";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=gs;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class Np extends wn{}Np.prototype.ValueTypeName="color";class xs extends wn{}xs.prototype.ValueTypeName="number";class g2 extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)ci.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Fi extends wn{InterpolantFactoryMethodLinear(e){return new g2(this.times,this.values,this.getValueSize(),e)}}Fi.prototype.ValueTypeName="quaternion";Fi.prototype.DefaultInterpolation=Sr;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;class zr extends wn{}zr.prototype.ValueTypeName="string";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=gs;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends wn{}ys.prototype.ValueTypeName="vector";class v2{constructor(e,t=-1,n,r=Bb){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(x2(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(wn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=h2(l);l=dh(l,1,u),c=dh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new xs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,m){if(d.length!==0){const p=[],v=[];Fp(d,p,v,g),p.length!==0&&m.push(new h(f,p,v))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(const m in d){const p=[],v=[];for(let y=0;y!==f[g].morphTargets.length;++y){const x=f[g];p.push(x.time),v.push(x.morphTarget===m?1:0)}r.push(new xs(".morphTargetInfluence["+m+"]",p,v))}l=d.length*a}else{const d=".bones["+t[h].name+"]";n(ys,d+".position",f,"pos",r),n(Fi,d+".quaternion",f,"rot",r),n(ys,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _2(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xs;case"vector":case"vector2":case"vector3":case"vector4":return ys;case"color":return Np;case"quaternion":return Fi;case"bool":case"boolean":return Ur;case"string":return zr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function x2(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_2(i.type);if(i.times===void 0){const t=[],n=[];Fp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Tr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class y2{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const b2=new y2;class Os{constructor(e){this.manager=e!==void 0?e:b2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Dn={};class w2 extends Error{constructor(e,t){super(e),this.response=t}}class Op extends Os{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Tr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:n,onError:r});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Dn[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(v){y();function y(){h.read().then(({done:x,value:_})=>{if(x)v.close();else{m+=_.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let C=0,P=u.length;C<P;C++){const b=u[C];b.onProgress&&b.onProgress(M)}v.enqueue(_),y()}})}}});return new Response(p)}else throw new w2(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Tr.add(e,c);const u=Dn[e];delete Dn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Dn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Dn[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class S2 extends Os{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Tr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=_s("img");function l(){u(),Tr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class M2 extends Os{constructor(e){super(e)}load(e,t,n,r){const s=new It,a=new S2(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class lo extends ke{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const fl=new Ie,ph=new R,mh=new R;class zc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ic,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(ph),mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mh),t.updateMatrixWorld(),fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class T2 extends zc{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class A2 extends lo{constructor(e,t,n=0,r=Math.PI/3,s=0,a=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new T2}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gh=new Ie,ts=new R,hl=new R;class E2 extends zc{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ts.setFromMatrixPosition(e.matrixWorld),n.position.copy(ts),hl.copy(n.position),hl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hl),n.updateMatrixWorld(),r.makeTranslation(-ts.x,-ts.y,-ts.z),gh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gh)}}class C2 extends lo{constructor(e,t,n=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new E2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class D2 extends zc{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class co extends lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.target=new ke,this.shadow=new D2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vc extends lo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Di{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class R2 extends Os{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Tr.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Tr.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class P2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vh(){return(typeof performance>"u"?Date:performance).now()}const Hc="\\[\\]\\.:\\/",L2=new RegExp("["+Hc+"]","g"),Gc="[^"+Hc+"]",I2="[^"+Hc.replace("\\.","")+"]",F2=/((?:WC+[\/:])*)/.source.replace("WC",Gc),N2=/(WCOD+)?/.source.replace("WCOD",I2),O2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),B2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),k2=new RegExp("^"+F2+N2+O2+B2+"$"),U2=["material","materials","bones","map"];class z2{constructor(e,t,n){const r=n||je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class je{constructor(e,t,n){this.path=t,this.parsedPath=n||je.parseTrackName(t),this.node=je.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new je.Composite(e,t,n):new je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L2,"")}static parseTrackName(e){const t=k2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);U2.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=je.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}je.Composite=z2;je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};je.prototype.GetterByBindingType=[je.prototype._getValue_direct,je.prototype._getValue_array,je.prototype._getValue_arrayElement,je.prototype._getValue_toArray];je.prototype.SetterByBindingTypeAndVersioning=[[je.prototype._setValue_direct,je.prototype._setValue_direct_setNeedsUpdate,je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[je.prototype._setValue_array,je.prototype._setValue_array_setNeedsUpdate,je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[je.prototype._setValue_arrayElement,je.prototype._setValue_arrayElement_setNeedsUpdate,je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[je.prototype._setValue_fromArray,je.prototype._setValue_fromArray_setNeedsUpdate,je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cc);const ka={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Bs{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const V2=new Fs(-1,1,1,-1,0,1),Wc=new Bt;Wc.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3));Wc.setAttribute("uv",new St([0,2,0,0,2,0],2));class Bp{constructor(e){this._mesh=new nt(Wc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,V2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class bs extends Bs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ba.clone(e.uniforms),this.material=new ct({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _h extends Bs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class H2 extends Bs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class kp{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new ue);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],ka===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),bs===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new bs(ka),this.clock=new P2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_h!==void 0&&(a instanceof _h?n=!0:a instanceof H2&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Fs(-1,1,1,-1,0,1);const Up=new Bt;Up.setAttribute("position",new St([-1,3,0,-1,-1,0,3,-1,0],3));Up.setAttribute("uv",new St([0,2,0,0,2,0],2));class G2 extends Bs{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Me}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=r}}const xh={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ni extends Bs{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new Me(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ln(s,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new ln(s,a);f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new ln(s,a);d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}xh===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const o=xh;this.highPassUniforms=Ba.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ct({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new ue(s,a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,ka===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=ka;this.copyUniforms=Ba.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new ct({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Ia,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Me,this.oldClearAlpha=1,this.basic=new On,this.fsQuad=new Bp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.texSize.value=new ue(n,r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ni.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ni.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new ct({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ct({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ni.BlurDirectionX=new ue(1,0);Ni.BlurDirectionY=new ue(0,1);const Mt=new Set,zp=new Set,Vr=new Set,yh=i=>{let e;const t=new Set,n=(l,c)=>{const u=typeof l=="function"?l(e):l;if(!Object.is(u,e)){const h=e;e=c??typeof u!="object"?u:Object.assign({},e,u),t.forEach(f=>f(e,h))}},r=()=>e,o={setState:n,getState:r,subscribe:l=>(t.add(l),()=>t.delete(l)),destroy:()=>t.clear()};return e=i(n,r,o),o},W2=i=>i?yh(i):yh;var ks,he,Vp,cs,bh,Hp,Ua={},Gp=[],$2=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Bn(i,e){for(var t in e)i[t]=e[t];return i}function Wp(i){var e=i.parentNode;e&&e.removeChild(i)}function xn(i,e,t){var n,r,s,a={};for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:a[s]=e[s];if(arguments.length>2&&(a.children=arguments.length>3?ks.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(s in i.defaultProps)a[s]===void 0&&(a[s]=i.defaultProps[s]);return us(i,a,n,r,null)}function us(i,e,t,n,r){var s={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++Vp};return r==null&&he.vnode!=null&&he.vnode(s),s}function $p(){return{current:null}}function ft(i){return i.children}function cn(i,e){this.props=i,this.context=e}function ws(i,e){if(e==null)return i.__?ws(i.__,i.__.__k.indexOf(i)+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?ws(i):null}function jp(i){var e,t;if((i=i.__)!=null&&i.__c!=null){for(i.__e=i.__c.base=null,e=0;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null){i.__e=i.__c.base=t.__e;break}return jp(i)}}function Zl(i){(!i.__d&&(i.__d=!0)&&cs.push(i)&&!za.__r++||bh!==he.debounceRendering)&&((bh=he.debounceRendering)||setTimeout)(za)}function za(){for(var i;za.__r=cs.length;)i=cs.sort(function(e,t){return e.__v.__b-t.__v.__b}),cs=[],i.some(function(e){var t,n,r,s,a,o;e.__d&&(a=(s=(t=e).__v).__e,(o=t.__P)&&(n=[],(r=Bn({},s)).__v=s.__v+1,$c(o,s,r,t.__n,o.ownerSVGElement!==void 0,s.__h!=null?[a]:null,n,a??ws(s),s.__h),Yp(n,s),s.__e!=a&&jp(s)))})}function qp(i,e,t,n,r,s,a,o,l,c){var u,h,f,d,g,m,p,v=n&&n.__k||Gp,y=v.length;for(t.__k=[],u=0;u<e.length;u++)if((d=t.__k[u]=(d=e[u])==null||typeof d=="boolean"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?us(null,d,null,null,d):Array.isArray(d)?us(ft,{children:d},null,null,null):d.__b>0?us(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)!=null){if(d.__=t,d.__b=t.__b+1,(f=v[u])===null||f&&d.key==f.key&&d.type===f.type)v[u]=void 0;else for(h=0;h<y;h++){if((f=v[h])&&d.key==f.key&&d.type===f.type){v[h]=void 0;break}f=null}$c(i,d,f=f||Ua,r,s,a,o,l,c),g=d.__e,(h=d.ref)&&f.ref!=h&&(p||(p=[]),f.ref&&p.push(f.ref,null,d),p.push(h,d.__c||g,d)),g!=null?(m==null&&(m=g),typeof d.type=="function"&&d.__k===f.__k?d.__d=l=Xp(d,l,i):l=Kp(i,d,f,v,g,l),typeof t.type=="function"&&(t.__d=l)):l&&f.__e==l&&l.parentNode!=i&&(l=ws(f))}for(t.__e=m,u=y;u--;)v[u]!=null&&Jp(v[u],v[u]);if(p)for(u=0;u<p.length;u++)Zp(p[u],p[++u],p[++u])}function Xp(i,e,t){for(var n,r=i.__k,s=0;r&&s<r.length;s++)(n=r[s])&&(n.__=i,e=typeof n.type=="function"?Xp(n,e,t):Kp(t,n,n,r,n.__e,e));return e}function zn(i,e){return e=e||[],i==null||typeof i=="boolean"||(Array.isArray(i)?i.some(function(t){zn(t,e)}):e.push(i)),e}function Kp(i,e,t,n,r,s){var a,o,l;if(e.__d!==void 0)a=e.__d,e.__d=void 0;else if(t==null||r!=s||r.parentNode==null)e:if(s==null||s.parentNode!==i)i.appendChild(r),a=null;else{for(o=s,l=0;(o=o.nextSibling)&&l<n.length;l+=1)if(o==r)break e;i.insertBefore(r,s),a=s}return a!==void 0?a:r.nextSibling}function j2(i,e,t,n,r){var s;for(s in t)s==="children"||s==="key"||s in e||Va(i,s,null,t[s],n);for(s in e)r&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||t[s]===e[s]||Va(i,s,e[s],t[s],n)}function wh(i,e,t){e[0]==="-"?i.setProperty(e,t):i[e]=t==null?"":typeof t!="number"||$2.test(e)?t:t+"px"}function Va(i,e,t,n,r){var s;e:if(e==="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||wh(i.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||wh(i.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in i?e.toLowerCase().slice(2):e.slice(2),i.l||(i.l={}),i.l[e+s]=t,t?n||i.addEventListener(e,s?Mh:Sh,s):i.removeEventListener(e,s?Mh:Sh,s);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e.indexOf("-")==-1?i.removeAttribute(e):i.setAttribute(e,t))}}function Sh(i){this.l[i.type+!1](he.event?he.event(i):i)}function Mh(i){this.l[i.type+!0](he.event?he.event(i):i)}function $c(i,e,t,n,r,s,a,o,l){var c,u,h,f,d,g,m,p,v,y,x,_,M,C,P,b=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(l=t.__h,o=e.__e=t.__e,e.__h=null,s=[o]),(c=he.__b)&&c(e);try{e:if(typeof b=="function"){if(p=e.props,v=(c=b.contextType)&&n[c.__c],y=c?v?v.props.value:c.__:n,t.__c?m=(u=e.__c=t.__c).__=u.__E:("prototype"in b&&b.prototype.render?e.__c=u=new b(p,y):(e.__c=u=new cn(p,y),u.constructor=b,u.render=X2),v&&v.sub(u),u.props=p,u.state||(u.state={}),u.context=y,u.__n=n,h=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),b.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Bn({},u.__s)),Bn(u.__s,b.getDerivedStateFromProps(p,u.__s))),f=u.props,d=u.state,h)b.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(b.getDerivedStateFromProps==null&&p!==f&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(p,y),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(p,u.__s,y)===!1||e.__v===t.__v){for(u.props=p,u.state=u.__s,e.__v!==t.__v&&(u.__d=!1),u.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(A){A&&(A.__=e)}),x=0;x<u._sb.length;x++)u.__h.push(u._sb[x]);u._sb=[],u.__h.length&&a.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(p,u.__s,y),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(f,d,g)})}if(u.context=y,u.props=p,u.__v=e,u.__P=i,_=he.__r,M=0,"prototype"in b&&b.prototype.render){for(u.state=u.__s,u.__d=!1,_&&_(e),c=u.render(u.props,u.state,u.context),C=0;C<u._sb.length;C++)u.__h.push(u._sb[C]);u._sb=[]}else do u.__d=!1,_&&_(e),c=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++M<25);u.state=u.__s,u.getChildContext!=null&&(n=Bn(Bn({},n),u.getChildContext())),h||u.getSnapshotBeforeUpdate==null||(g=u.getSnapshotBeforeUpdate(f,d)),P=c!=null&&c.type===ft&&c.key==null?c.props.children:c,qp(i,Array.isArray(P)?P:[P],e,t,n,r,s,a,o,l),u.base=e.__e,e.__h=null,u.__h.length&&a.push(u),m&&(u.__E=u.__=null),u.__e=!1}else s==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=q2(t.__e,e,t,n,r,s,a,l);(c=he.diffed)&&c(e)}catch(A){e.__v=null,(l||s!=null)&&(e.__e=o,e.__h=!!l,s[s.indexOf(o)]=null),he.__e(A,e,t)}}function Yp(i,e){he.__c&&he.__c(e,i),i.some(function(t){try{i=t.__h,t.__h=[],i.some(function(n){n.call(t)})}catch(n){he.__e(n,t.__v)}})}function q2(i,e,t,n,r,s,a,o){var l,c,u,h=t.props,f=e.props,d=e.type,g=0;if(d==="svg"&&(r=!0),s!=null){for(;g<s.length;g++)if((l=s[g])&&"setAttribute"in l==!!d&&(d?l.localName===d:l.nodeType===3)){i=l,s[g]=null;break}}if(i==null){if(d===null)return document.createTextNode(f);i=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,f.is&&f),s=null,o=!1}if(d===null)h===f||o&&i.data===f||(i.data=f);else{if(s=s&&ks.call(i.childNodes),c=(h=t.props||Ua).dangerouslySetInnerHTML,u=f.dangerouslySetInnerHTML,!o){if(s!=null)for(h={},g=0;g<i.attributes.length;g++)h[i.attributes[g].name]=i.attributes[g].value;(u||c)&&(u&&(c&&u.__html==c.__html||u.__html===i.innerHTML)||(i.innerHTML=u&&u.__html||""))}if(j2(i,f,h,r,o),u)e.__k=[];else if(g=e.props.children,qp(i,Array.isArray(g)?g:[g],e,t,n,r&&d!=="foreignObject",s,a,s?s[0]:t.__k&&ws(t,0),o),s!=null)for(g=s.length;g--;)s[g]!=null&&Wp(s[g]);o||("value"in f&&(g=f.value)!==void 0&&(g!==i.value||d==="progress"&&!g||d==="option"&&g!==h.value)&&Va(i,"value",g,h.value,!1),"checked"in f&&(g=f.checked)!==void 0&&g!==i.checked&&Va(i,"checked",g,h.checked,!1))}return i}function Zp(i,e,t){try{typeof i=="function"?i(e):i.current=e}catch(n){he.__e(n,t)}}function Jp(i,e,t){var n,r;if(he.unmount&&he.unmount(i),(n=i.ref)&&(n.current&&n.current!==i.__e||Zp(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){he.__e(s,e)}n.base=n.__P=null,i.__c=void 0}if(n=i.__k)for(r=0;r<n.length;r++)n[r]&&Jp(n[r],e,t||typeof i.type!="function");t||i.__e==null||Wp(i.__e),i.__=i.__e=i.__d=void 0}function X2(i,e,t){return this.constructor(i,t)}function Ar(i,e,t){var n,r,s;he.__&&he.__(i,e),r=(n=typeof t=="function")?null:t&&t.__k||e.__k,s=[],$c(e,i=(!n&&t||e).__k=xn(ft,null,[i]),r||Ua,Ua,e.ownerSVGElement!==void 0,!n&&t?[t]:r?null:e.firstChild?ks.call(e.childNodes):null,s,!n&&t?t:r?r.__e:e.firstChild,n),Yp(s,i)}function Qp(i,e){Ar(i,e,Qp)}function K2(i,e,t){var n,r,s,a=Bn({},i.props);for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:a[s]=e[s];return arguments.length>2&&(a.children=arguments.length>3?ks.call(arguments,2):t),us(i.type,a,n||i.key,r||i.ref,null)}function em(i,e){var t={__c:e="__cC"+Hp++,__:i,Consumer:function(n,r){return n.children(r)},Provider:function(n){var r,s;return this.getChildContext||(r=[],(s={})[e]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&r.some(Zl)},this.sub=function(a){r.push(a);var o=a.componentWillUnmount;a.componentWillUnmount=function(){r.splice(r.indexOf(a),1),o&&o.call(a)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}ks=Gp.slice,he={__e:function(i,e,t,n){for(var r,s,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(i)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(i,n||{}),a=r.__d),a)return r.__E=r}catch(o){i=o}throw i}},Vp=0,cn.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Bn({},this.state),typeof i=="function"&&(i=i(Bn({},t),this.props)),i&&Bn(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),Zl(this))},cn.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),Zl(this))},cn.prototype.render=ft,cs=[],za.__r=0,Hp=0;var ui,Ke,dl,Th,Er=0,tm=[],Ea=[],Ah=he.__b,Eh=he.__r,Ch=he.diffed,Dh=he.__c,Rh=he.unmount;function Hi(i,e){he.__h&&he.__h(Ke,i,Er||e),Er=0;var t=Ke.__H||(Ke.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({__V:Ea}),t.__[i]}function Hr(i){return Er=1,jc(am,i)}function jc(i,e,t){var n=Hi(ui++,2);if(n.t=i,!n.__c&&(n.__=[t?t(e):am(void 0,e),function(s){var a=n.__N?n.__N[0]:n.__[0],o=n.t(a,s);a!==o&&(n.__N=[o,n.__[1]],n.__c.setState({}))}],n.__c=Ke,!Ke.u)){Ke.u=!0;var r=Ke.shouldComponentUpdate;Ke.shouldComponentUpdate=function(s,a,o){if(!n.__c.__H)return!0;var l=n.__c.__H.__.filter(function(u){return u.__c});if(l.every(function(u){return!u.__N}))return!r||r.call(this,s,a,o);var c=!1;return l.forEach(function(u){if(u.__N){var h=u.__[0];u.__=u.__N,u.__N=void 0,h!==u.__[0]&&(c=!0)}}),!(!c&&n.__c.props===s)&&(!r||r.call(this,s,a,o))}}return n.__N||n.__}function Ss(i,e){var t=Hi(ui++,3);!he.__s&&Xc(t.__H,e)&&(t.__=i,t.i=e,Ke.__H.__h.push(t))}function Gr(i,e){var t=Hi(ui++,4);!he.__s&&Xc(t.__H,e)&&(t.__=i,t.i=e,Ke.__h.push(t))}function gr(i){return Er=5,uo(function(){return{current:i}},[])}function nm(i,e,t){Er=6,Gr(function(){return typeof i=="function"?(i(e()),function(){return i(null)}):i?(i.current=e(),function(){return i.current=null}):void 0},t==null?t:t.concat(i))}function uo(i,e){var t=Hi(ui++,7);return Xc(t.__H,e)?(t.__V=i(),t.i=e,t.__h=i,t.__V):t.__}function im(i,e){return Er=8,uo(function(){return i},e)}function rm(i){var e=Ke.context[i.__c],t=Hi(ui++,9);return t.c=i,e?(t.__==null&&(t.__=!0,e.sub(Ke)),e.props.value):i.__}function qc(i,e){he.useDebugValue&&he.useDebugValue(e?e(i):i)}function Y2(i){var e=Hi(ui++,10),t=Hr();return e.__=i,Ke.componentDidCatch||(Ke.componentDidCatch=function(n,r){e.__&&e.__(n,r),t[1](n)}),[t[0],function(){t[1](void 0)}]}function sm(){var i=Hi(ui++,11);if(!i.__){for(var e=Ke.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var t=e.__m||(e.__m=[0,0]);i.__="P"+t[0]+"-"+t[1]++}return i.__}function Z2(){for(var i;i=tm.shift();)if(i.__P&&i.__H)try{i.__H.__h.forEach(Ca),i.__H.__h.forEach(Jl),i.__H.__h=[]}catch(e){i.__H.__h=[],he.__e(e,i.__v)}}he.__b=function(i){Ke=null,Ah&&Ah(i)},he.__r=function(i){Eh&&Eh(i),ui=0;var e=(Ke=i.__c).__H;e&&(dl===Ke?(e.__h=[],Ke.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=Ea,t.__N=t.i=void 0})):(e.__h.forEach(Ca),e.__h.forEach(Jl),e.__h=[])),dl=Ke},he.diffed=function(i){Ch&&Ch(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(tm.push(e)!==1&&Th===he.requestAnimationFrame||((Th=he.requestAnimationFrame)||J2)(Z2)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==Ea&&(t.__=t.__V),t.i=void 0,t.__V=Ea})),dl=Ke=null},he.__c=function(i,e){e.some(function(t){try{t.__h.forEach(Ca),t.__h=t.__h.filter(function(n){return!n.__||Jl(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],he.__e(n,t.__v)}}),Dh&&Dh(i,e)},he.unmount=function(i){Rh&&Rh(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{Ca(n)}catch(r){e=r}}),t.__H=void 0,e&&he.__e(e,t.__v))};var Ph=typeof requestAnimationFrame=="function";function J2(i){var e,t=function(){clearTimeout(n),Ph&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,100);Ph&&(e=requestAnimationFrame(t))}function Ca(i){var e=Ke,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),Ke=e}function Jl(i){var e=Ke;i.__c=i.__(),Ke=e}function Xc(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function am(i,e){return typeof e=="function"?e(i):e}function om(i,e){for(var t in e)i[t]=e[t];return i}function Ql(i,e){for(var t in i)if(t!=="__source"&&!(t in e))return!0;for(var n in e)if(n!=="__source"&&i[n]!==e[n])return!0;return!1}function pl(i,e){return i===e&&(i!==0||1/i==1/e)||i!=i&&e!=e}function Ha(i){this.props=i}function lm(i,e){function t(r){var s=this.props.ref,a=s==r.ref;return!a&&s&&(s.call?s(null):s.current=null),e?!e(this.props,r)||!a:Ql(this.props,r)}function n(r){return this.shouldComponentUpdate=t,xn(i,r)}return n.displayName="Memo("+(i.displayName||i.name)+")",n.prototype.isReactComponent=!0,n.__f=!0,n}(Ha.prototype=new cn).isPureReactComponent=!0,Ha.prototype.shouldComponentUpdate=function(i,e){return Ql(this.props,i)||Ql(this.state,e)};var Lh=he.__b;he.__b=function(i){i.type&&i.type.__f&&i.ref&&(i.props.ref=i.ref,i.ref=null),Lh&&Lh(i)};var Q2=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function cm(i){function e(t){var n=om({},t);return delete n.ref,i(n,t.ref||null)}return e.$$typeof=Q2,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(i.displayName||i.name)+")",e}var Ih=function(i,e){return i==null?null:zn(zn(i).map(e))},um={map:Ih,forEach:Ih,count:function(i){return i?zn(i).length:0},only:function(i){var e=zn(i);if(e.length!==1)throw"Children.only";return e[0]},toArray:zn},eA=he.__e;he.__e=function(i,e,t,n){if(i.then){for(var r,s=e;s=s.__;)if((r=s.__c)&&r.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),r.__c(i,e)}eA(i,e,t,n)};var Fh=he.unmount;function fm(i,e,t){return i&&(i.__c&&i.__c.__H&&(i.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),i.__c.__H=null),(i=om({},i)).__c!=null&&(i.__c.__P===t&&(i.__c.__P=e),i.__c=null),i.__k=i.__k&&i.__k.map(function(n){return fm(n,e,t)})),i}function hm(i,e,t){return i&&(i.__v=null,i.__k=i.__k&&i.__k.map(function(n){return hm(n,e,t)}),i.__c&&i.__c.__P===e&&(i.__e&&t.insertBefore(i.__e,i.__d),i.__c.__e=!0,i.__c.__P=t)),i}function fs(){this.__u=0,this.t=null,this.__b=null}function dm(i){var e=i.__.__c;return e&&e.__a&&e.__a(i)}function pm(i){var e,t,n;function r(s){if(e||(e=i()).then(function(a){t=a.default||a},function(a){n=a}),n)throw n;if(!t)throw e;return xn(t,s)}return r.displayName="Lazy",r.__f=!0,r}function hr(){this.u=null,this.o=null}he.unmount=function(i){var e=i.__c;e&&e.__R&&e.__R(),e&&i.__h===!0&&(i.type=null),Fh&&Fh(i)},(fs.prototype=new cn).__c=function(i,e){var t=e.__c,n=this;n.t==null&&(n.t=[]),n.t.push(t);var r=dm(n.__v),s=!1,a=function(){s||(s=!0,t.__R=null,r?r(o):o())};t.__R=a;var o=function(){if(!--n.__u){if(n.state.__a){var c=n.state.__a;n.__v.__k[0]=hm(c,c.__c.__P,c.__c.__O)}var u;for(n.setState({__a:n.__b=null});u=n.t.pop();)u.forceUpdate()}},l=e.__h===!0;n.__u++||l||n.setState({__a:n.__b=n.__v.__k[0]}),i.then(a,a)},fs.prototype.componentWillUnmount=function(){this.t=[]},fs.prototype.render=function(i,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=fm(this.__b,t,n.__O=n.__P)}this.__b=null}var r=e.__a&&xn(ft,null,i.fallback);return r&&(r.__h=null),[xn(ft,null,e.__a?null:i.children),r]};var Nh=function(i,e,t){if(++t[1]===t[0]&&i.o.delete(e),i.props.revealOrder&&(i.props.revealOrder[0]!=="t"||!i.o.size))for(t=i.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;i.u=t=t[2]}};function tA(i){return this.getChildContext=function(){return i.context},i.children}function nA(i){var e=this,t=i.i;e.componentWillUnmount=function(){Ar(null,e.l),e.l=null,e.i=null},e.i&&e.i!==t&&e.componentWillUnmount(),i.__v?(e.l||(e.i=t,e.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,r){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),Ar(xn(tA,{context:e.context},i.__v),e.l)):e.l&&e.componentWillUnmount()}function mm(i,e){var t=xn(nA,{__v:i,i:e});return t.containerInfo=e,t}(hr.prototype=new cn).__a=function(i){var e=this,t=dm(e.__v),n=e.o.get(i);return n[0]++,function(r){var s=function(){e.props.revealOrder?(n.push(r),Nh(e,i,n)):r()};t?t(s):s()}},hr.prototype.render=function(i){this.u=null,this.o=new Map;var e=zn(i.children);i.revealOrder&&i.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return i.children},hr.prototype.componentDidUpdate=hr.prototype.componentDidMount=function(){var i=this;this.o.forEach(function(e,t){Nh(i,t,e)})};var gm=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,iA=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,rA=typeof document<"u",sA=function(i){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(i)};function vm(i,e,t){return e.__k==null&&(e.textContent=""),Ar(i,e),typeof t=="function"&&t(),i?i.__c:null}function _m(i,e,t){return Qp(i,e),typeof t=="function"&&t(),i?i.__c:null}cn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(i){Object.defineProperty(cn.prototype,i,{configurable:!0,get:function(){return this["UNSAFE_"+i]},set:function(e){Object.defineProperty(this,i,{configurable:!0,writable:!0,value:e})}})});var Oh=he.event;function aA(){}function oA(){return this.cancelBubble}function lA(){return this.defaultPrevented}he.event=function(i){return Oh&&(i=Oh(i)),i.persist=aA,i.isPropagationStopped=oA,i.isDefaultPrevented=lA,i.nativeEvent=i};var xm,Bh={configurable:!0,get:function(){return this.class}},kh=he.vnode;he.vnode=function(i){var e=i.type,t=i.props,n=t;if(typeof e=="string"){var r=e.indexOf("-")===-1;for(var s in n={},t){var a=t[s];rA&&s==="children"&&e==="noscript"||s==="value"&&"defaultValue"in t&&a==null||(s==="defaultValue"&&"value"in t&&t.value==null?s="value":s==="download"&&a===!0?a="":/ondoubleclick/i.test(s)?s="ondblclick":/^onchange(textarea|input)/i.test(s+e)&&!sA(t.type)?s="oninput":/^onfocus$/i.test(s)?s="onfocusin":/^onblur$/i.test(s)?s="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s)?s=s.toLowerCase():r&&iA.test(s)?s=s.replace(/[A-Z0-9]/g,"-$&").toLowerCase():a===null&&(a=void 0),/^oninput$/i.test(s)&&(s=s.toLowerCase(),n[s]&&(s="oninputCapture")),n[s]=a)}e=="select"&&n.multiple&&Array.isArray(n.value)&&(n.value=zn(t.children).forEach(function(o){o.props.selected=n.value.indexOf(o.props.value)!=-1})),e=="select"&&n.defaultValue!=null&&(n.value=zn(t.children).forEach(function(o){o.props.selected=n.multiple?n.defaultValue.indexOf(o.props.value)!=-1:n.defaultValue==o.props.value})),i.props=n,t.class!=t.className&&(Bh.enumerable="className"in t,t.className!=null&&(n.class=t.className),Object.defineProperty(n,"className",Bh))}i.$$typeof=gm,kh&&kh(i)};var Uh=he.__r;he.__r=function(i){Uh&&Uh(i),xm=i.__c};var ym={ReactCurrentDispatcher:{current:{readContext:function(i){return xm.__n[i.__c].props.value}}}},cA="17.0.2";function bm(i){return xn.bind(null,i)}function Kc(i){return!!i&&i.$$typeof===gm}function wm(i){return Kc(i)?K2.apply(null,arguments):i}function Sm(i){return!!i.__k&&(Ar(null,i),!0)}function Mm(i){return i&&(i.base||i.nodeType===1&&i)||null}var Tm=function(i,e){return i(e)},Am=function(i,e){return i(e)},Em=ft;function Yc(i){i()}function Cm(i){return i}function Dm(){return[!1,Yc]}var Rm=Gr;function Pm(i,e){var t=e(),n=Hr({h:{__:t,v:e}}),r=n[0].h,s=n[1];return Gr(function(){r.__=t,r.v=e,pl(r.__,e())||s({h:r})},[i,t,e]),Ss(function(){return pl(r.__,r.v())||s({h:r}),i(function(){pl(r.__,r.v())||s({h:r})})},[i]),t}var uA={useState:Hr,useId:sm,useReducer:jc,useEffect:Ss,useLayoutEffect:Gr,useInsertionEffect:Rm,useTransition:Dm,useDeferredValue:Cm,useSyncExternalStore:Pm,startTransition:Yc,useRef:gr,useImperativeHandle:nm,useMemo:uo,useCallback:im,useContext:rm,useDebugValue:qc,version:"17.0.2",Children:um,render:vm,hydrate:_m,unmountComponentAtNode:Sm,createPortal:mm,createElement:xn,createContext:em,createFactory:bm,cloneElement:wm,createRef:$p,Fragment:ft,isValidElement:Kc,findDOMNode:Mm,Component:cn,PureComponent:Ha,memo:lm,forwardRef:cm,flushSync:Am,unstable_batchedUpdates:Tm,StrictMode:Em,Suspense:fs,SuspenseList:hr,lazy:pm,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ym};const fA=Object.freeze(Object.defineProperty({__proto__:null,Children:um,PureComponent:Ha,StrictMode:Em,Suspense:fs,SuspenseList:hr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ym,cloneElement:wm,createFactory:bm,createPortal:mm,default:uA,findDOMNode:Mm,flushSync:Am,forwardRef:cm,hydrate:_m,isValidElement:Kc,lazy:pm,memo:lm,render:vm,startTransition:Yc,unmountComponentAtNode:Sm,unstable_batchedUpdates:Tm,useDeferredValue:Cm,useInsertionEffect:Rm,useSyncExternalStore:Pm,useTransition:Dm,version:cA,Component:cn,Fragment:ft,createContext:em,createElement:xn,createRef:$p,useCallback:im,useContext:rm,useDebugValue:qc,useEffect:Ss,useErrorBoundary:Y2,useId:sm,useImperativeHandle:nm,useLayoutEffect:Gr,useMemo:uo,useReducer:jc,useRef:gr,useState:Hr},Symbol.toStringTag,{value:"Module"}));var Lm={exports:{}},Im={};const Fm=Tg(fA);var Nm={exports:{}},Om={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cr=Fm;function hA(i,e){return i===e&&(i!==0||1/i===1/e)||i!==i&&e!==e}var dA=typeof Object.is=="function"?Object.is:hA,pA=Cr.useState,mA=Cr.useEffect,gA=Cr.useLayoutEffect,vA=Cr.useDebugValue;function _A(i,e){var t=e(),n=pA({inst:{value:t,getSnapshot:e}}),r=n[0].inst,s=n[1];return gA(function(){r.value=t,r.getSnapshot=e,ml(r)&&s({inst:r})},[i,t,e]),mA(function(){return ml(r)&&s({inst:r}),i(function(){ml(r)&&s({inst:r})})},[i]),vA(t),t}function ml(i){var e=i.getSnapshot;i=i.value;try{var t=e();return!dA(i,t)}catch{return!0}}function xA(i,e){return e()}var yA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?xA:_A;Om.useSyncExternalStore=Cr.useSyncExternalStore!==void 0?Cr.useSyncExternalStore:yA;(function(i){i.exports=Om})(Nm);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=Fm,bA=Nm.exports;function wA(i,e){return i===e&&(i!==0||1/i===1/e)||i!==i&&e!==e}var SA=typeof Object.is=="function"?Object.is:wA,MA=bA.useSyncExternalStore,TA=fo.useRef,AA=fo.useEffect,EA=fo.useMemo,CA=fo.useDebugValue;Im.useSyncExternalStoreWithSelector=function(i,e,t,n,r){var s=TA(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=EA(function(){function l(d){if(!c){if(c=!0,u=d,d=n(d),r!==void 0&&a.hasValue){var g=a.value;if(r(g,d))return h=g}return h=d}if(g=h,SA(u,d))return g;var m=n(d);return r!==void 0&&r(g,m)?g:(u=d,h=m)}var c=!1,u,h,f=t===void 0?null:t;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,t,n,r]);var o=MA(i,s[0],s[1]);return AA(function(){a.hasValue=!0,a.value=o},[o]),CA(o),o};(function(i){i.exports=Im})(Lm);const DA=Mg(Lm.exports),{useSyncExternalStoreWithSelector:RA}=DA;function et(i,e=i.getState,t){const n=RA(i.subscribe,i.getState,i.getServerState||i.getState,e,t);return qc(n),n}const zh=i=>{const e=typeof i=="function"?W2(i):i,t=(n,r)=>et(e,n,r);return Object.assign(t,e),t},Us=i=>i?zh(i):zh,Ga=i=>e=>{try{const t=i(e);return t instanceof Promise?t:{then(n){return Ga(n)(t)},catch(n){return this}}}catch(t){return{then(n){return this},catch(n){return Ga(n)(t)}}}},PA=(i,e)=>(t,n,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:p=>p,version:0,merge:(p,v)=>({...v,...p}),...e},a=!1;const o=new Set,l=new Set;let c;try{c=s.getStorage()}catch{}if(!c)return i((...p)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(...p)},n,r);const u=Ga(s.serialize),h=()=>{const p=s.partialize({...n()});let v;const y=u({state:p,version:s.version}).then(x=>c.setItem(s.name,x)).catch(x=>{v=x});if(v)throw v;return y},f=r.setState;r.setState=(p,v)=>{f(p,v),h()};const d=i((...p)=>{t(...p),h()},n,r);let g;const m=()=>{var p;if(!c)return;a=!1,o.forEach(y=>y(n()));const v=((p=s.onRehydrateStorage)==null?void 0:p.call(s,n()))||void 0;return Ga(c.getItem.bind(c))(s.name).then(y=>{if(y)return s.deserialize(y)}).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==s.version){if(s.migrate)return s.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var x;return g=s.merge(y,(x=n())!=null?x:d),t(g,!0),h()}).then(()=>{v?.(g,void 0),a=!0,l.forEach(y=>y(g))}).catch(y=>{v?.(void 0,y)})};return r.persist={setOptions:p=>{s={...s,...p},p.getStorage&&(c=p.getStorage())},clearStorage:()=>{c?.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>m(),hasHydrated:()=>a,onHydrate:p=>(o.add(p),()=>{o.delete(p)}),onFinishHydration:p=>(l.add(p),()=>{l.delete(p)})},m(),g||d},Zc=PA;function Zt(i){for(var e=arguments.length,t=Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+i+(t.length?" "+t.map(function(r){return"'"+r+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Dr(i){return!!i&&!!i[We]}function Vn(i){var e;return!!i&&(function(t){if(!t||typeof t!="object")return!1;var n=Object.getPrototypeOf(t);if(n===null)return!0;var r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===zA}(i)||Array.isArray(i)||!!i[qh]||!!(!((e=i.constructor)===null||e===void 0)&&e[qh])||Jc(i)||Qc(i))}function Rr(i,e,t){t===void 0&&(t=!1),Wr(i)===0?(t?Object.keys:ru)(i).forEach(function(n){t&&typeof n=="symbol"||e(n,i[n],i)}):i.forEach(function(n,r){return e(r,n,i)})}function Wr(i){var e=i[We];return e?e.i>3?e.i-4:e.i:Array.isArray(i)?1:Jc(i)?2:Qc(i)?3:0}function ec(i,e){return Wr(i)===2?i.has(e):Object.prototype.hasOwnProperty.call(i,e)}function LA(i,e){return Wr(i)===2?i.get(e):i[e]}function Bm(i,e,t){var n=Wr(i);n===2?i.set(e,t):n===3?(i.delete(e),i.add(t)):i[e]=t}function IA(i,e){return i===e?i!==0||1/i==1/e:i!=i&&e!=e}function Jc(i){return kA&&i instanceof Map}function Qc(i){return UA&&i instanceof Set}function vt(i){return i.o||i.t}function eu(i){if(Array.isArray(i))return Array.prototype.slice.call(i);var e=VA(i);delete e[We];for(var t=ru(e),n=0;n<t.length;n++){var r=t[n],s=e[r];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[r]={configurable:!0,writable:!0,enumerable:s.enumerable,value:i[r]})}return Object.create(Object.getPrototypeOf(i),e)}function tu(i,e){return e===void 0&&(e=!1),nu(i)||Dr(i)||!Vn(i)||(Wr(i)>1&&(i.set=i.add=i.clear=i.delete=FA),Object.freeze(i),e&&Rr(i,function(t,n){return tu(n,!0)},!0)),i}function FA(){Zt(2)}function nu(i){return i==null||typeof i!="object"||Object.isFrozen(i)}function _n(i){var e=nc[i];return e||Zt(18,i),e}function NA(i,e){nc[i]||(nc[i]=e)}function Wa(){return Ts}function gl(i,e){e&&(_n("Patches"),i.u=[],i.s=[],i.v=e)}function $a(i){tc(i),i.p.forEach(OA),i.p=null}function tc(i){i===Ts&&(Ts=i.l)}function Vh(i){return Ts={p:[],l:Ts,h:i,m:!0,_:0}}function OA(i){var e=i[We];e.i===0||e.i===1?e.j():e.O=!0}function vl(i,e){e._=e.p.length;var t=e.p[0],n=i!==void 0&&i!==t;return e.h.g||_n("ES5").S(e,i,n),n?(t[We].P&&($a(e),Zt(4)),Vn(i)&&(i=ja(e,i),e.l||qa(e,i)),e.u&&_n("Patches").M(t[We].t,i,e.u,e.s)):i=ja(e,t,[]),$a(e),e.u&&e.v(e.u,e.s),i!==Um?i:void 0}function ja(i,e,t){if(nu(e))return e;var n=e[We];if(!n)return Rr(e,function(s,a){return Hh(i,n,e,s,a,t)},!0),e;if(n.A!==i)return e;if(!n.P)return qa(i,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var r=n.i===4||n.i===5?n.o=eu(n.k):n.o;Rr(n.i===3?new Set(r):r,function(s,a){return Hh(i,n,r,s,a,t)}),qa(i,r,!1),t&&i.u&&_n("Patches").R(n,t,i.u,i.s)}return n.o}function Hh(i,e,t,n,r,s){if(Dr(r)){var a=ja(i,r,s&&e&&e.i!==3&&!ec(e.D,n)?s.concat(n):void 0);if(Bm(t,n,a),!Dr(a))return;i.m=!1}if(Vn(r)&&!nu(r)){if(!i.h.F&&i._<1)return;ja(i,r),e&&e.A.l||qa(i,r)}}function qa(i,e,t){t===void 0&&(t=!1),i.h.F&&i.m&&tu(e,t)}function _l(i,e){var t=i[We];return(t?vt(t):i)[e]}function Gh(i,e){if(e in i)for(var t=Object.getPrototypeOf(i);t;){var n=Object.getOwnPropertyDescriptor(t,e);if(n)return n;t=Object.getPrototypeOf(t)}}function Pn(i){i.P||(i.P=!0,i.l&&Pn(i.l))}function xl(i){i.o||(i.o=eu(i.t))}function Ms(i,e,t){var n=Jc(e)?_n("MapSet").N(e,t):Qc(e)?_n("MapSet").T(e,t):i.g?function(r,s){var a=Array.isArray(r),o={i:a?1:0,A:s?s.A:Wa(),P:!1,I:!1,D:{},l:s,t:r,k:null,o:null,j:null,C:!1},l=o,c=ic;a&&(l=[o],c=as);var u=Proxy.revocable(l,c),h=u.revoke,f=u.proxy;return o.k=f,o.j=h,f}(e,t):_n("ES5").J(e,t);return(t?t.A:Wa()).p.push(n),n}function BA(i){return Dr(i)||Zt(22,i),function e(t){if(!Vn(t))return t;var n,r=t[We],s=Wr(t);if(r){if(!r.P&&(r.i<4||!_n("ES5").K(r)))return r.t;r.I=!0,n=Wh(t,s),r.I=!1}else n=Wh(t,s);return Rr(n,function(a,o){r&&LA(r.t,a)===o||Bm(n,a,e(o))}),s===3?new Set(n):n}(i)}function Wh(i,e){switch(e){case 2:return new Map(i);case 3:return Array.from(i)}return eu(i)}function km(){function i(o,l){function c(){this.constructor=o}r(o,l),o.prototype=(c.prototype=l.prototype,new c)}function e(o){o.o||(o.D=new Map,o.o=new Map(o.t))}function t(o){o.o||(o.o=new Set,o.t.forEach(function(l){if(Vn(l)){var c=Ms(o.A.h,l,o);o.p.set(l,c),o.o.add(c)}else o.o.add(l)}))}function n(o){o.O&&Zt(3,JSON.stringify(vt(o)))}var r=function(o,l){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,u){c.__proto__=u}||function(c,u){for(var h in u)u.hasOwnProperty(h)&&(c[h]=u[h])})(o,l)},s=function(){function o(c,u){return this[We]={i:2,l:u,A:u?u.A:Wa(),P:!1,I:!1,o:void 0,D:void 0,t:c,k:this,C:!1,O:!1},this}i(o,Map);var l=o.prototype;return Object.defineProperty(l,"size",{get:function(){return vt(this[We]).size}}),l.has=function(c){return vt(this[We]).has(c)},l.set=function(c,u){var h=this[We];return n(h),vt(h).has(c)&&vt(h).get(c)===u||(e(h),Pn(h),h.D.set(c,!0),h.o.set(c,u),h.D.set(c,!0)),this},l.delete=function(c){if(!this.has(c))return!1;var u=this[We];return n(u),e(u),Pn(u),u.t.has(c)?u.D.set(c,!1):u.D.delete(c),u.o.delete(c),!0},l.clear=function(){var c=this[We];n(c),vt(c).size&&(e(c),Pn(c),c.D=new Map,Rr(c.t,function(u){c.D.set(u,!1)}),c.o.clear())},l.forEach=function(c,u){var h=this;vt(this[We]).forEach(function(f,d){c.call(u,h.get(d),d,h)})},l.get=function(c){var u=this[We];n(u);var h=vt(u).get(c);if(u.I||!Vn(h)||h!==u.t.get(c))return h;var f=Ms(u.A.h,h,u);return e(u),u.o.set(c,f),f},l.keys=function(){return vt(this[We]).keys()},l.values=function(){var c,u=this,h=this.keys();return(c={})[_a]=function(){return u.values()},c.next=function(){var f=h.next();return f.done?f:{done:!1,value:u.get(f.value)}},c},l.entries=function(){var c,u=this,h=this.keys();return(c={})[_a]=function(){return u.entries()},c.next=function(){var f=h.next();if(f.done)return f;var d=u.get(f.value);return{done:!1,value:[f.value,d]}},c},l[_a]=function(){return this.entries()},o}(),a=function(){function o(c,u){return this[We]={i:3,l:u,A:u?u.A:Wa(),P:!1,I:!1,o:void 0,t:c,k:this,p:new Map,O:!1,C:!1},this}i(o,Set);var l=o.prototype;return Object.defineProperty(l,"size",{get:function(){return vt(this[We]).size}}),l.has=function(c){var u=this[We];return n(u),u.o?!!u.o.has(c)||!(!u.p.has(c)||!u.o.has(u.p.get(c))):u.t.has(c)},l.add=function(c){var u=this[We];return n(u),this.has(c)||(t(u),Pn(u),u.o.add(c)),this},l.delete=function(c){if(!this.has(c))return!1;var u=this[We];return n(u),t(u),Pn(u),u.o.delete(c)||!!u.p.has(c)&&u.o.delete(u.p.get(c))},l.clear=function(){var c=this[We];n(c),vt(c).size&&(t(c),Pn(c),c.o.clear())},l.values=function(){var c=this[We];return n(c),t(c),c.o.values()},l.entries=function(){var c=this[We];return n(c),t(c),c.o.entries()},l.keys=function(){return this.values()},l[_a]=function(){return this.values()},l.forEach=function(c,u){for(var h=this.values(),f=h.next();!f.done;)c.call(u,f.value,f.value,this),f=h.next()},o}();NA("MapSet",{N:function(o,l){return new s(o,l)},T:function(o,l){return new a(o,l)}})}var $h,Ts,iu=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",kA=typeof Map<"u",UA=typeof Set<"u",jh=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Um=iu?Symbol.for("immer-nothing"):(($h={})["immer-nothing"]=!0,$h),qh=iu?Symbol.for("immer-draftable"):"__$immer_draftable",We=iu?Symbol.for("immer-state"):"__$immer_state",_a=typeof Symbol<"u"&&Symbol.iterator||"@@iterator",zA=""+Object.prototype.constructor,ru=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(i){return Object.getOwnPropertyNames(i).concat(Object.getOwnPropertySymbols(i))}:Object.getOwnPropertyNames,VA=Object.getOwnPropertyDescriptors||function(i){var e={};return ru(i).forEach(function(t){e[t]=Object.getOwnPropertyDescriptor(i,t)}),e},nc={},ic={get:function(i,e){if(e===We)return i;var t=vt(i);if(!ec(t,e))return function(r,s,a){var o,l=Gh(s,a);return l?"value"in l?l.value:(o=l.get)===null||o===void 0?void 0:o.call(r.k):void 0}(i,t,e);var n=t[e];return i.I||!Vn(n)?n:n===_l(i.t,e)?(xl(i),i.o[e]=Ms(i.A.h,n,i)):n},has:function(i,e){return e in vt(i)},ownKeys:function(i){return Reflect.ownKeys(vt(i))},set:function(i,e,t){var n=Gh(vt(i),e);if(n?.set)return n.set.call(i.k,t),!0;if(!i.P){var r=_l(vt(i),e),s=r?.[We];if(s&&s.t===t)return i.o[e]=t,i.D[e]=!1,!0;if(IA(t,r)&&(t!==void 0||ec(i.t,e)))return!0;xl(i),Pn(i)}return i.o[e]===t&&typeof t!="number"&&(t!==void 0||e in i.o)||(i.o[e]=t,i.D[e]=!0,!0)},deleteProperty:function(i,e){return _l(i.t,e)!==void 0||e in i.t?(i.D[e]=!1,xl(i),Pn(i)):delete i.D[e],i.o&&delete i.o[e],!0},getOwnPropertyDescriptor:function(i,e){var t=vt(i),n=Reflect.getOwnPropertyDescriptor(t,e);return n&&{writable:!0,configurable:i.i!==1||e!=="length",enumerable:n.enumerable,value:t[e]}},defineProperty:function(){Zt(11)},getPrototypeOf:function(i){return Object.getPrototypeOf(i.t)},setPrototypeOf:function(){Zt(12)}},as={};Rr(ic,function(i,e){as[i]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),as.deleteProperty=function(i,e){return as.set.call(this,i,e,void 0)},as.set=function(i,e,t){return ic.set.call(this,i[0],e,t,i[0])};var HA=function(){function i(t){var n=this;this.g=jh,this.F=!0,this.produce=function(r,s,a){if(typeof r=="function"&&typeof s!="function"){var o=s;s=r;var l=n;return function(m){var p=this;m===void 0&&(m=o);for(var v=arguments.length,y=Array(v>1?v-1:0),x=1;x<v;x++)y[x-1]=arguments[x];return l.produce(m,function(_){var M;return(M=s).call.apply(M,[p,_].concat(y))})}}var c;if(typeof s!="function"&&Zt(6),a!==void 0&&typeof a!="function"&&Zt(7),Vn(r)){var u=Vh(n),h=Ms(n,r,void 0),f=!0;try{c=s(h),f=!1}finally{f?$a(u):tc(u)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(m){return gl(u,a),vl(m,u)},function(m){throw $a(u),m}):(gl(u,a),vl(c,u))}if(!r||typeof r!="object"){if((c=s(r))===void 0&&(c=r),c===Um&&(c=void 0),n.F&&tu(c,!0),a){var d=[],g=[];_n("Patches").M(r,c,d,g),a(d,g)}return c}Zt(21,r)},this.produceWithPatches=function(r,s){if(typeof r=="function")return function(c){for(var u=arguments.length,h=Array(u>1?u-1:0),f=1;f<u;f++)h[f-1]=arguments[f];return n.produceWithPatches(c,function(d){return r.apply(void 0,[d].concat(h))})};var a,o,l=n.produce(r,s,function(c,u){a=c,o=u});return typeof Promise<"u"&&l instanceof Promise?l.then(function(c){return[c,a,o]}):[l,a,o]},typeof t?.useProxies=="boolean"&&this.setUseProxies(t.useProxies),typeof t?.autoFreeze=="boolean"&&this.setAutoFreeze(t.autoFreeze)}var e=i.prototype;return e.createDraft=function(t){Vn(t)||Zt(8),Dr(t)&&(t=BA(t));var n=Vh(this),r=Ms(this,t,void 0);return r[We].C=!0,tc(n),r},e.finishDraft=function(t,n){var r=t&&t[We],s=r.A;return gl(s,n),vl(void 0,s)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!jh&&Zt(20),this.g=t},e.applyPatches=function(t,n){var r;for(r=n.length-1;r>=0;r--){var s=n[r];if(s.path.length===0&&s.op==="replace"){t=s.value;break}}r>-1&&(n=n.slice(r+1));var a=_n("Patches").$;return Dr(t)?a(t,n):this.produce(t,function(o){return a(o,n)})},i}(),Vt=new HA,GA=Vt.produce;Vt.produceWithPatches.bind(Vt);Vt.setAutoFreeze.bind(Vt);Vt.setUseProxies.bind(Vt);Vt.applyPatches.bind(Vt);Vt.createDraft.bind(Vt);Vt.finishDraft.bind(Vt);const WA=i=>(e,t,n)=>(n.setState=(r,s,...a)=>{const o=typeof r=="function"?GA(r):r;return e(o,s,...a)},i(n.setState,t,n)),zs=WA;var $A=function(){function i(){this.keyToValue=new Map,this.valueToKey=new Map}return i.prototype.set=function(e,t){this.keyToValue.set(e,t),this.valueToKey.set(t,e)},i.prototype.getByKey=function(e){return this.keyToValue.get(e)},i.prototype.getByValue=function(e){return this.valueToKey.get(e)},i.prototype.clear=function(){this.keyToValue.clear(),this.valueToKey.clear()},i}(),zm=function(){function i(e){this.generateIdentifier=e,this.kv=new $A}return i.prototype.register=function(e,t){this.kv.getByValue(e)||(t||(t=this.generateIdentifier(e)),this.kv.set(t,e))},i.prototype.clear=function(){this.kv.clear()},i.prototype.getIdentifier=function(e){return this.kv.getByValue(e)},i.prototype.getValue=function(e){return this.kv.getByKey(e)},i}(),jA=globalThis&&globalThis.__extends||function(){var i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])},i(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");i(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),qA=function(i){jA(e,i);function e(){var t=i.call(this,function(n){return n.name})||this;return t.classToAllowedProps=new Map,t}return e.prototype.register=function(t,n){typeof n=="object"?(n.allowProps&&this.classToAllowedProps.set(t,n.allowProps),i.prototype.register.call(this,t,n.identifier)):i.prototype.register.call(this,t,n)},e.prototype.getAllowedProps=function(t){return this.classToAllowedProps.get(t)},e}(zm),XA=globalThis&&globalThis.__read||function(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],a;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(o){a={error:o}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(a)throw a.error}}return s};function KA(i){if("values"in Object)return Object.values(i);var e=[];for(var t in i)i.hasOwnProperty(t)&&e.push(i[t]);return e}function YA(i,e){var t=KA(i);if("find"in t)return t.find(e);for(var n=t,r=0;r<n.length;r++){var s=n[r];if(e(s))return s}}function Pr(i,e){Object.entries(i).forEach(function(t){var n=XA(t,2),r=n[0],s=n[1];return e(s,r)})}function Da(i,e){return i.indexOf(e)!==-1}function Xh(i,e){for(var t=0;t<i.length;t++){var n=i[t];if(e(n))return n}}var ZA=function(){function i(){this.transfomers={}}return i.prototype.register=function(e){this.transfomers[e.name]=e},i.prototype.findApplicable=function(e){return YA(this.transfomers,function(t){return t.isApplicable(e)})},i.prototype.findByName=function(e){return this.transfomers[e]},i}(),JA=function(i){return Object.prototype.toString.call(i).slice(8,-1)},Vm=function(i){return typeof i>"u"},QA=function(i){return i===null},As=function(i){return typeof i!="object"||i===null||i===Object.prototype?!1:Object.getPrototypeOf(i)===null?!0:i.constructor===Object&&Object.getPrototypeOf(i)===Object.prototype},rc=function(i){return As(i)&&Object.keys(i).length===0},li=function(i){return Array.isArray(i)},eE=function(i){return typeof i=="string"},tE=function(i){return typeof i=="number"&&!isNaN(i)},nE=function(i){return typeof i=="boolean"},iE=function(i){return i instanceof RegExp},Xa=function(i){return i instanceof Map},Ka=function(i){return i instanceof Set},Hm=function(i){return JA(i)==="Symbol"},rE=function(i){return i instanceof Date&&!isNaN(i.valueOf())},sE=function(i){return i instanceof Error},Kh=function(i){return typeof i=="number"&&isNaN(i)},Yh=function(i){return nE(i)||QA(i)||Vm(i)||tE(i)||eE(i)||Hm(i)},aE=function(i){return typeof i=="bigint"},oE=function(i){return i===1/0||i===-1/0},lE=function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},cE=function(i){return i instanceof URL},Gm=function(i){return i.replace(/\./g,"\\.")},yl=function(i){return i.map(String).map(Gm).join(".")},hs=function(i){for(var e=[],t="",n=0;n<i.length;n++){var r=i.charAt(n),s=r==="\\"&&i.charAt(n+1)===".";if(s){t+=".",n++;continue}var a=r===".";if(a){e.push(t),t="";continue}t+=r}var o=t;return e.push(o),e},sc=globalThis&&globalThis.__assign||function(){return sc=Object.assign||function(i){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i},sc.apply(this,arguments)},ac=globalThis&&globalThis.__read||function(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],a;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(o){a={error:o}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(a)throw a.error}}return s},oc=globalThis&&globalThis.__spreadArray||function(i,e){for(var t=0,n=e.length,r=i.length;t<n;t++,r++)i[r]=e[t];return i};function pn(i,e,t,n){return{isApplicable:i,annotation:e,transform:t,untransform:n}}var Wm=[pn(Vm,"undefined",function(){return null},function(){}),pn(aE,"bigint",function(i){return i.toString()},function(i){return typeof BigInt<"u"?BigInt(i):(console.error("Please add a BigInt polyfill."),i)}),pn(rE,"Date",function(i){return i.toISOString()},function(i){return new Date(i)}),pn(sE,"Error",function(i,e){var t={name:i.name,message:i.message};return e.allowedErrorProps.forEach(function(n){t[n]=i[n]}),t},function(i,e){var t=new Error(i.message);return t.name=i.name,t.stack=i.stack,e.allowedErrorProps.forEach(function(n){t[n]=i[n]}),t}),pn(iE,"regexp",function(i){return""+i},function(i){var e=i.slice(1,i.lastIndexOf("/")),t=i.slice(i.lastIndexOf("/")+1);return new RegExp(e,t)}),pn(Ka,"set",function(i){return oc([],ac(i.values()))},function(i){return new Set(i)}),pn(Xa,"map",function(i){return oc([],ac(i.entries()))},function(i){return new Map(i)}),pn(function(i){return Kh(i)||oE(i)},"number",function(i){return Kh(i)?"NaN":i>0?"Infinity":"-Infinity"},Number),pn(function(i){return i===0&&1/i===-1/0},"number",function(){return"-0"},Number),pn(cE,"URL",function(i){return i.toString()},function(i){return new URL(i)})];function ho(i,e,t,n){return{isApplicable:i,annotation:e,transform:t,untransform:n}}var $m=ho(function(i,e){if(Hm(i)){var t=!!e.symbolRegistry.getIdentifier(i);return t}return!1},function(i,e){var t=e.symbolRegistry.getIdentifier(i);return["symbol",t]},function(i){return i.description},function(i,e,t){var n=t.symbolRegistry.getValue(e[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),uE=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce(function(i,e){return i[e.name]=e,i},{}),jm=ho(lE,function(i){return["typed-array",i.constructor.name]},function(i){return oc([],ac(i))},function(i,e){var t=uE[e[1]];if(!t)throw new Error("Trying to deserialize unknown typed array");return new t(i)});function qm(i,e){if(i?.constructor){var t=!!e.classRegistry.getIdentifier(i.constructor);return t}return!1}var Xm=ho(qm,function(i,e){var t=e.classRegistry.getIdentifier(i.constructor);return["class",t]},function(i,e){var t=e.classRegistry.getAllowedProps(i.constructor);if(!t)return sc({},i);var n={};return t.forEach(function(r){n[r]=i[r]}),n},function(i,e,t){var n=t.classRegistry.getValue(e[1]);if(!n)throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");return Object.assign(Object.create(n.prototype),i)}),Km=ho(function(i,e){return!!e.customTransformerRegistry.findApplicable(i)},function(i,e){var t=e.customTransformerRegistry.findApplicable(i);return["custom",t.name]},function(i,e){var t=e.customTransformerRegistry.findApplicable(i);return t.serialize(i)},function(i,e,t){var n=t.customTransformerRegistry.findByName(e[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(i)}),fE=[Xm,$m,Km,jm],Zh=function(i,e){var t=Xh(fE,function(r){return r.isApplicable(i,e)});if(t)return{value:t.transform(i,e),type:t.annotation(i,e)};var n=Xh(Wm,function(r){return r.isApplicable(i,e)});if(n)return{value:n.transform(i,e),type:n.annotation}},Ym={};Wm.forEach(function(i){Ym[i.annotation]=i});var hE=function(i,e,t){if(li(e))switch(e[0]){case"symbol":return $m.untransform(i,e,t);case"class":return Xm.untransform(i,e,t);case"custom":return Km.untransform(i,e,t);case"typed-array":return jm.untransform(i,e,t);default:throw new Error("Unknown transformation: "+e)}else{var n=Ym[e];if(!n)throw new Error("Unknown transformation: "+e);return n.untransform(i,t)}},xa=function(i,e){for(var t=i.keys();e>0;)t.next(),e--;return t.next().value};function Zm(i){if(Da(i,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(Da(i,"prototype"))throw new Error("prototype is not allowed as a property");if(Da(i,"constructor"))throw new Error("constructor is not allowed as a property")}var dE=function(i,e){return Zm(e),e.forEach(function(t){i=i[t]}),i},lc=function(i,e,t){if(Zm(e),e.length===0)return t(i);for(var n=i,r=0;r<e.length-1;r++){var s=e[r];if(li(n)){var a=+s;n=n[a]}else if(As(n))n=n[s];else if(Ka(n)){var o=+s;n=xa(n,o)}else if(Xa(n)){var l=r===e.length-2;if(l)break;var o=+s,c=+e[++r]==0?"key":"value",u=xa(n,o);switch(c){case"key":n=u;break;case"value":n=n.get(u);break}}}var h=e[e.length-1];if((li(n)||As(n))&&(n[h]=t(n[h])),Ka(n)){var f=xa(n,+h),d=t(f);f!==d&&(n.delete(f),n.add(d))}if(Xa(n)){var o=+e[e.length-2],g=xa(n,o),c=+h==0?"key":"value";switch(c){case"key":{var m=t(g);n.set(m,n.get(g)),m!==g&&n.delete(g);break}case"value":{n.set(g,t(n.get(g)));break}}}return i},In=globalThis&&globalThis.__read||function(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],a;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(o){a={error:o}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(a)throw a.error}}return s},si=globalThis&&globalThis.__spreadArray||function(i,e){for(var t=0,n=e.length,r=i.length;t<n;t++,r++)i[r]=e[t];return i};function cc(i,e,t){if(t===void 0&&(t=[]),!!i){if(!li(i)){Pr(i,function(a,o){return cc(a,e,si(si([],In(t)),In(hs(o))))});return}var n=In(i,2),r=n[0],s=n[1];s&&Pr(s,function(a,o){cc(a,e,si(si([],In(t)),In(hs(o))))}),e(r,t)}}function pE(i,e,t){return cc(e,function(n,r){i=lc(i,r,function(s){return hE(s,n,t)})}),i}function mE(i,e){function t(a,o){var l=dE(i,hs(o));a.map(hs).forEach(function(c){i=lc(i,c,function(){return l})})}if(li(e)){var n=In(e,2),r=n[0],s=n[1];r.forEach(function(a){i=lc(i,hs(a),function(){return i})}),s&&Pr(s,t)}else Pr(e,t);return i}var gE=function(i,e){return As(i)||li(i)||Xa(i)||Ka(i)||qm(i,e)};function vE(i,e,t){var n=t.get(i);n?n.push(e):t.set(i,[e])}function _E(i){var e={},t=void 0;return i.forEach(function(n){if(!(n.length<=1)){var r=In(n.map(function(o){return o.map(String)}).sort(function(o,l){return o.length-l.length})),s=r[0],a=r.slice(1);s.length===0?t=a.map(yl):e[yl(s)]=a.map(yl)}}),t?rc(e)?[t]:[t,e]:rc(e)?void 0:e}var Jm=function(i,e,t,n,r){var s;if(n===void 0&&(n=[]),r===void 0&&(r=[]),Yh(i)||vE(i,n,e),!gE(i,t)){var a=Zh(i,t);return a?{transformedValue:a.value,annotations:[a.type]}:{transformedValue:i}}if(Da(r,i))return{transformedValue:null};var o=Zh(i,t),l=(s=o?.value)!==null&&s!==void 0?s:i;Yh(i)||(r=si(si([],In(r)),[i]));var c=li(l)?[]:{},u={};return Pr(l,function(h,f){var d=Jm(h,e,t,si(si([],In(n)),[f]),r);c[f]=d.transformedValue,li(d.annotations)?u[f]=d.annotations:As(d.annotations)&&Pr(d.annotations,function(g,m){u[Gm(f)+"."+m]=g})}),rc(u)?{transformedValue:c,annotations:o?[o.type]:void 0}:{transformedValue:c,annotations:o?[o.type,u]:u}};function Qm(i){return Object.prototype.toString.call(i).slice(8,-1)}function xE(i){return Qm(i)!=="Object"?!1:i.constructor===Object&&Object.getPrototypeOf(i)===Object.prototype}function Jh(i){return Qm(i)==="Array"}function yE(i,e,t,n,r){const s={}.propertyIsEnumerable.call(n,e)?"enumerable":"nonenumerable";s==="enumerable"&&(i[e]=t),r&&s==="nonenumerable"&&Object.defineProperty(i,e,{value:t,enumerable:!1,writable:!0,configurable:!0})}function uc(i,e={}){if(Jh(i))return i.map(r=>uc(r,e));if(!xE(i))return i;const t=Object.getOwnPropertyNames(i),n=Object.getOwnPropertySymbols(i);return[...t,...n].reduce((r,s)=>{if(Jh(e.props)&&!e.props.includes(s))return r;const a=i[s],o=uc(a,e);return yE(r,s,o,i,e.nonenumerable),r},{})}var wi=globalThis&&globalThis.__assign||function(){return wi=Object.assign||function(i){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i},wi.apply(this,arguments)},bE=globalThis&&globalThis.__read||function(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],a;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(o){a={error:o}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(a)throw a.error}}return s},wE=globalThis&&globalThis.__spreadArray||function(i,e){for(var t=0,n=e.length,r=i.length;t<n;t++,r++)i[r]=e[t];return i},yn=function(){function i(){this.classRegistry=new qA,this.symbolRegistry=new zm(function(e){var t;return(t=e.description)!==null&&t!==void 0?t:""}),this.customTransformerRegistry=new ZA,this.allowedErrorProps=[]}return i.prototype.serialize=function(e){var t=new Map,n=Jm(e,t,this),r={json:n.transformedValue};n.annotations&&(r.meta=wi(wi({},r.meta),{values:n.annotations}));var s=_E(t);return s&&(r.meta=wi(wi({},r.meta),{referentialEqualities:s})),r},i.prototype.deserialize=function(e){var t=e.json,n=e.meta,r=uc(t);return n?.values&&(r=pE(r,n.values,this)),n?.referentialEqualities&&(r=mE(r,n.referentialEqualities)),r},i.prototype.stringify=function(e){return JSON.stringify(this.serialize(e))},i.prototype.parse=function(e){return this.deserialize(JSON.parse(e))},i.prototype.registerClass=function(e,t){this.classRegistry.register(e,t)},i.prototype.registerSymbol=function(e,t){this.symbolRegistry.register(e,t)},i.prototype.registerCustom=function(e,t){this.customTransformerRegistry.register(wi({name:t},e))},i.prototype.allowErrorProps=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];(e=this.allowedErrorProps).push.apply(e,wE([],bE(t)))},i.defaultInstance=new i,i.serialize=i.defaultInstance.serialize.bind(i.defaultInstance),i.deserialize=i.defaultInstance.deserialize.bind(i.defaultInstance),i.stringify=i.defaultInstance.stringify.bind(i.defaultInstance),i.parse=i.defaultInstance.parse.bind(i.defaultInstance),i.registerClass=i.defaultInstance.registerClass.bind(i.defaultInstance),i.registerSymbol=i.defaultInstance.registerSymbol.bind(i.defaultInstance),i.registerCustom=i.defaultInstance.registerCustom.bind(i.defaultInstance),i.allowErrorProps=i.defaultInstance.allowErrorProps.bind(i.defaultInstance),i}();yn.serialize;yn.deserialize;yn.stringify;yn.parse;var SE=0;function V(i,e,t,n,r){var s,a,o={};for(a in e)a=="ref"?s=e[a]:o[a]=e[a];var l={type:i,props:o,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--SE,__source:r,__self:n};if(typeof i=="function"&&(s=i.defaultProps))for(a in s)o[a]===void 0&&(o[a]=s[a]);return he.vnode&&he.vnode(l),l}const[Es,ai,ME,TE]=[.5,-.5,.3,-.3],Ya=30,Qh=["Laser","Autopilot","Hammer","ATK\xD72","placeholder2","placeholder3","placeholder4","placeholder5","placeholder6"],AE={Laser:15,Autopilot:100,Hammer:100*15,"ATK\xD72":100*15**2,placeholder2:100*15**3,placeholder3:100*15**4,placeholder4:100*15**5,placeholder5:100*15**6,placeholder6:100*15**7},fc=({upgrades:i})=>({Laser:i.Laser+1*(i["ATK\xD72"]+1),Autopilot:void 0,Hammer:i.Hammer===0?void 0:2e3*(i["ATK\xD72"]+1),"ATK\xD72":void 0,placeholder2:void 0,placeholder3:void 0,placeholder4:void 0,placeholder5:void 0,placeholder6:void 0}),eg=({upgrades:i})=>({Laser:1,Autopilot:void 0,Hammer:i.Hammer===0?void 0:Math.ceil(50/i.Hammer),"ATK\xD72":void 0,placeholder2:void 0,placeholder3:void 0,placeholder4:void 0,placeholder5:void 0,placeholder6:void 0}),su=(i,e)=>e.upgrades[i]===0&&e.money<Lr(i,e)*2/3,ed=i=>i.completedTutorials.has("nextStage"),EE=()=>!1,Lr=(i,{upgrades:e})=>AE[i]*2**e[i],tg={wasd:V(ft,{children:["You have become a ",V("b",{children:"fighter"})," pilot that shoots ",V("b",{children:"laser"})," beams. This world is peaceful, so your first mission is to protect farmers from harmful ",V("b",{children:"birds"}),".",V("br",{}),"The controls are simple, ",V("b",{children:[V("i",{class:"ti ti-keyboard"})," WASD to move"]})," and aim your targets."]}),upgrade:V(ft,{children:["You can now buy ",V("b",{children:[V("i",{class:"ti ti-chevrons-up"})," upgrades"]})," for your aircraft! To do so, ",V("b",{children:"click"})," on the button in the ",V("b",{children:"top left"})," corner of the screen."]}),nextStage:V(ft,{children:["You can now move on to the ",V("b",{children:[V("i",{class:"ti ti-map-2"})," next stage"]}),"! To do so, ",V("b",{children:"click"})," the button in the ",V("b",{children:"top right"})," corner of the screen."]}),backToPreviousStage:V(ft,{children:["If you're finding this stage too ",V("b",{children:"difficult"}),", go back to the previous stage and ",V("b",{children:"try again"})," after you get more upgrades."]}),weatherEffect:V(ft,{children:["We need to kill a ",V("b",{children:[V("i",{class:"ti ti-ufo"})," UFO"]})," in order to stop the ",V("b",{children:[V("i",{class:"ti ti-cloud-rain"})," rain"]}),". The UFO has a device that can manipulate the weather, and the rain is interfering with the ",V("b",{children:"autopilot"})," system."]})},CE={aliensComing:["Aliens Are Coming To Invade Earth","According to recent reports, aliens are planning to invade Earth. We should be prepared to fight against them and protect our planet. There are many reasons why aliens would want to invade Earth. Our planet is abundant in resources that they may need, and they may view us as a threat to their own species. Whatever their reasons, we cannot allow them to take over our planet. We need to be prepared to fight against the aliens when they come. We should have weapons and defences ready, and we should all be trained in how to use them. We also need to be prepared to evacuate if necessary. It is vital that we protect our planet from the aliens. We need to be prepared to fight them, and we need to be willing to do whatever it takes to win."],hammer:["UFO Researchers Develop Device That Can Float Hammers In Air",'A team of UFO researchers say they have invented a device that can float hammers in mid-air. The team says the device uses "anti - gravity" technology to achieve the feat. The device, which the team has dubbed the "Hammer levitator", consists of a frame made of aluminum tubing, with a ring of magnets mounted on the top. The device is placed over a hammer, and when it is turned on, the magnets create a magnetic field that levitates the hammer. The device is the latest invention from a team of UFO researchers that has been making headlines in recent years for their unorthodox methods. The team says they are now working on a device that they believe could allow humans to fly.'],ending1:["Scientists Have Found The Way To Move To A Higher World","Scientists have finally reached the Singularity, and as a result, they have been able to move to a higher world. In this new world, there are beings that do not exist in this one. The breakthrough is the result of invading the residence of the aliens, which allowed the scientists to access their technology. The scientists were able to use this technology to move to the new world, and they are now working to take over the world. The beings in this new world are not happy about this, and they are fighting back. The scientists are using their technology to fight back, and they believe that they will eventually be able to take over the world. They are using their technology to create armies, and they are prepared to fight against the beings in this new world. The scientists are determined to take over the world, and they are prepared to do whatever it takes."]};km();const ng="acgSaveData";let ig=!1;const ya=(i=Math.random())=>i*Ya*60*6,tt=Us()(Zc(zs((i,e)=>({gameSessionId:crypto.randomUUID(),stage:"Earth",stageTransitingTo:null,money:0,upgrades:Object.fromEntries(Qh.map(t=>[t,0])),completedTutorials:new Set,availableNews:new Set,openedNews:new Set,availableTutorials:new Set,weatherEffectWillBeEnabledIn:{},weatherEffectWillBeEnabledInLessThan:{},canTranscend:!1,transcending:!1,transcendence:0,cheated:!1,addMoney:t=>{i(n=>{n.money+=t}),document.title=`ACG final project $${e().money}`,e().money>=Lr(Qh[0],e())&&e().addTutorial("upgrade"),su("Hammer",e())||e().addNews("hammer")},buyUpgrade:t=>{i(n=>{n.money-=Lr(t,e()),n.upgrades[t]++}),document.title=`ACG final project $${e().money}`,e().upgrades.Autopilot>0&&e().addNews("aliensComing"),e().completeTutorial("upgrade")},completeTutorial:t=>{i(n=>{n.completedTutorials.add(t),t==="nextStage"&&n.availableTutorials.add("backToPreviousStage")})},addNews:t=>{e().availableNews.has(t)||i(n=>{n.availableNews.add(t)})},addTutorial:t=>{i(n=>{n.availableTutorials.add(t)})},setStageTransitingTo:t=>{e().stage!==t&&i(n=>{n.stageTransitingTo=t})},completeStageTransition:()=>{i(t=>{t.stageTransitingTo!==null&&(t.stage=t.stageTransitingTo,t.stageTransitingTo=null)}),e().stage==="Earth"?e().completeTutorial("backToPreviousStage"):e().stage==="Universe"&&e().completeTutorial("nextStage")},countdown:()=>{!ed(e())||(i(t=>{t.weatherEffectWillBeEnabledIn[t.stage]??=ya(),t.weatherEffectWillBeEnabledInLessThan[t.stage]??=ya(1),t.weatherEffectWillBeEnabledIn[t.stage]--,t.weatherEffectWillBeEnabledInLessThan[t.stage]--}),e().getWeather()?.enabled&&e().addTutorial("weatherEffect"))},getWeather:()=>{if(!ed(e()))return null;const t=(e().weatherEffectWillBeEnabledIn[e().stage]??Number.MAX_SAFE_INTEGER)<=0;return e().stage==="Earth"?{name:"Rain",enabled:t}:null},stopWeatherEffect:()=>{i(t=>{t.weatherEffectWillBeEnabledIn[t.stage]=ya(),t.weatherEffectWillBeEnabledInLessThan[t.stage]=ya(1)})},defeatedFinalBoss:()=>{e().addNews("ending1"),i(t=>{t.canTranscend=!0})},transcend:()=>{i(t=>{t.transcending=!0})},cancelTranscending:()=>{i(t=>{t.transcending=!1})},confirmTranscending:()=>{i(t=>{!t.transcending||(t.stageTransitingTo=null,t.stage="Earth",t.transcending=!1,t.transcendence++,t.canTranscend=!1)})},cheat:()=>{i(t=>{t.cheated=!0})}})),{name:ng,version:6,serialize:i=>{if(ig)throw new Error("destroyed");return yn.stringify(i)},deserialize:i=>yn.parse(i)}));window.store=new Proxy(tt,{get(i,e,t){return ye().cheat(),Reflect.get(i,e,t)}});const ye=tt.getState,$r=tt.subscribe,DE=()=>{tt.destroy(),ig=!0,localStorage.removeItem(ng)};if(location.hostname.endsWith(".github.io")){localStorage.userId??=crypto.randomUUID();const i=e=>{fetch("https://oijeofiwjef.net/acg",{method:"POST",body:JSON.stringify({userId:localStorage.userId,event:e,...tt.getState()})})};setInterval(()=>i(),1e3*60),i("start"),document.addEventListener("visibilitychange",()=>{i(document.visibilityState)})}const po=i=>Object.entries(i),Za=i=>Object.values(i),rg=i=>Object.keys(i),sg=i=>Object.fromEntries(i),Cs=async i=>{const e={};for(const[t,n]of Object.entries(i))e[t]=await n;return e},un=(i,e)=>{for(const[t,n]of Object.entries(e))if(Object.getPrototypeOf(n)===Object.prototype)for(const[r,s]of Object.entries(n))Array.isArray(s)?i[t][r](...s):i[t][r](s);else Array.isArray(n)?i[t](...n):i[t](n);return i};function Ja(i,e){if(Object.is(i,e))return!0;if(typeof i!="object"||i===null||typeof e!="object"||e===null)return!1;const t=Object.keys(i);if(t.length!==Object.keys(e).length)return!1;for(let n=0;n<t.length;n++)if(!Object.prototype.hasOwnProperty.call(e,t[n])||!Object.is(i[t[n]],e[t[n]]))return!1;return!0}const hc=25,RE=(i,e)=>{const t=Lr(i,ye()),n=ye().upgrades[i],r=ye().money,s=n>=hc?new $e(255,0,0,1):r>=t?new $e(0,220,220,1):new $e(128,128,128,1),a=n>=hc?1:r/t;let o="linear-gradient(90deg,";for(let l=0;l<=1;l+=.05){const c=s.clone(),u=(Math.sin(l*2-Date.now()*.004+e)+1)/2;c.x+=u*70,c.y+=u*70,c.z+=u*70,l>a?c.w=0:c.w=.5,o+=`rgba(${c.toArray().join(",")}) ${l*100}%,`}return`${o.slice(0,-1)})`},PE=()=>{const i=et(tt,e=>po(e.upgrades).filter((t,n,r)=>n<2||r[n-1][1]>0||r[n-2][1]>0).map(([t])=>t),Ja);return V("div",{class:"absolute left-1 top-1 w-56",children:[V("div",{class:"px-3 pt-1 pb-3 window",children:[V("h2",{class:"mb-2 tracking-wide",children:[V("i",{class:"ti ti-chevrons-up"})," Upgrades"]}),i.map((e,t)=>V(LE,{name:e,rowNumber:t},e))]}),ye().canTranscend&&V("div",{class:"px-3 pt-1 pb-3 window gold mt-1",children:[V("p",{class:"text-xs mb-2",children:"You have reached the point of singularity and can transcended to a higher plane of existence."}),V("button",{class:"w-full",tabIndex:-1,onClick:()=>{ye().transcend()},children:"Show Bonus"})]})]})},LE=i=>{const e=et(tt,u=>u.buyUpgrade),[t,n]=Hr(!1),r=et(tt,u=>u.getWeather()),s=et(tt,u=>Lr(i.name,u)),a=et(tt,u=>su(i.name,u)),o=et(tt,u=>u.upgrades[i.name]),l=et(tt,u=>s>u.money||o>=hc),c=gr(null);return Gr(()=>{const u=setInterval(()=>{!c.current||(c.current.style.background=RE(i.name,i.rowNumber))},16.666666666666668);return()=>{clearTimeout(u)}},[c]),V("div",{ref:c,class:"relative block hover:cursor-pointer mb-1 backdrop-blur-3xl drop-shadow-md select-none border-opacity-40 border-[1px] rounded-sm border-t-gray-400 border-l-gray-400 border-b-gray-600 border-r-gray-600",disabled:l,onMouseDown:()=>{l||e(i.name)},onMouseEnter:()=>{n(!0)},onMouseLeave:()=>{n(!1)},children:[V("div",{class:"px-2 hover:bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_10%)]",children:[V("span",{class:"inline-block w-28 tracking-wider",children:a?"???":i.name}),V("span",{class:"float-right tracking-tight",children:[o,i.name==="Autopilot"&&r?.enabled&&V("b",{class:"text-red-400",children:" (-5)"})]})]}),t&&V(IE,{name:i.name})]})},IE=i=>{const e=et(tt,a=>Lr(i.name,a)),t=et(tt,a=>fc(a)[i.name]),n=et(tt,a=>eg(a)[i.name]),r=et(tt,a=>a.money),s=et(tt,a=>su(i.name,a));return V("div",{class:"absolute left-full top-0 ml-7 px-6 py-1 backdrop-blur-3xl bg-[linear-gradient(240deg,rgba(31,37,46,0.4)_0%,rgba(30,36,44,0.4)_100%)] whitespace-nowrap pointer-events-none rounded-sm [font-size:80%]",children:V("table",{children:[V("tr",{children:[V("td",{class:"font-bold tracking-wider pr-2 text-right",children:"Price"}),V("td",{children:[V("i",{class:"ti ti-moneybag"})," ",r," / ",e]})]}),!s&&V(ft,{children:[t&&V("tr",{children:[V("td",{class:"tracking-wider text-right pr-2",children:"Damage"}),V("td",{children:[V("i",{class:"ti ti-swords"})," ",t]})]}),n&&V("tr",{children:[V("td",{class:"tracking-wider text-right pr-2",children:"Interval"}),V("td",{children:[V("i",{class:"ti ti-hourglass"})," ",n]})]})]})]})})},FE=Us()(zs(i=>({paused:!1,object:null,version:0,objectPools:{},setObject:e=>{i(t=>{t.object=e})},stop:()=>{i(e=>{e.paused=!0})},resume:()=>{i(e=>{e.paused=!1})},refreshDebugger:()=>{i(e=>{e.version++})},setObjectPoolSize:(e,t)=>{i(n=>{n.objectPools[e]=t})}}))),NE=Us()(Zc(zs((i,e)=>({renderingOptions:{},getRenderingOption:(t,n=!0)=>(i(r=>{t in r.renderingOptions||(r.renderingOptions[t]=n)}),e().renderingOptions[t]),setRenderingOption:(t,n)=>{i(r=>{r.renderingOptions[t]=n})}})),{name:"acgRenderingOptions",version:1,serialize:i=>yn.stringify(i),deserialize:i=>yn.parse(i)})),dr=NE.getState().getRenderingOption,OE=FE.getState().setObjectPoolSize,BE=()=>V(ft,{}),kE=(i,e,t)=>()=>!1;var UE="4.0.0";function zE(i){return i===void 0}function Jt(i){return typeof i=="boolean"}function VE(i,e){for(var t in e)e.hasOwnProperty(t)&&zE(i[t])&&(i[t]=e[t]);return i}function HE(i,e,t){var n;return i.length>e&&(t==null?(t="&hellip;",n=3):n=t.length,i=i.substring(0,e-n)+t),i}function Xe(i,e){for(var t=i.length-1;t>=0;t--)i[t]===e&&i.splice(t,1)}function vi(i,e){for(var t=i.length-1;t>=0;t--)e(i[t])===!0&&i.splice(t,1)}function ds(i){throw new Error("Unhandled case for value: '".concat(i,"'"))}var vr=/[A-Za-z]/,wt=/[\d]/,sn=/\s/,bl=/['"]/,GE=/[\x00-\x1F\x7F]/,WE=/A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC/.source,$E=/\u2700-\u27bf\udde6-\uddff\ud800-\udbff\udc00-\udfff\ufe0e\ufe0f\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0\ud83c\udffb-\udfff\u200d\u3299\u3297\u303d\u3030\u24c2\ud83c\udd70-\udd71\udd7e-\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01-\ude02\ude1a\ude2f\ude32-\ude3a\ude50-\ude51\u203c\u2049\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe\u00a9\u00ae\u2122\u2139\udc04\u2600-\u26FF\u2b05\u2b06\u2b07\u2b1b\u2b1c\u2b50\u2b55\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\udccf\u2935\u2934\u2190-\u21ff/.source,jE=/\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F/.source,qE=WE+$E+jE,XE=/0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/.source,ag=qE+XE,Ri=new RegExp("[".concat(ag,"]")),og=function(){function i(e){e===void 0&&(e={}),this.tagName="",this.attrs={},this.innerHTML="",this.tagName=e.tagName||"",this.attrs=e.attrs||{},this.innerHTML=e.innerHtml||e.innerHTML||""}return i.prototype.setTagName=function(e){return this.tagName=e,this},i.prototype.getTagName=function(){return this.tagName||""},i.prototype.setAttr=function(e,t){var n=this.getAttrs();return n[e]=t,this},i.prototype.getAttr=function(e){return this.getAttrs()[e]},i.prototype.setAttrs=function(e){return Object.assign(this.getAttrs(),e),this},i.prototype.getAttrs=function(){return this.attrs||(this.attrs={})},i.prototype.setClass=function(e){return this.setAttr("class",e)},i.prototype.addClass=function(e){for(var t=this.getClass(),n=t?t.split(sn):[],r=e.split(sn),s;s=r.shift();)n.indexOf(s)===-1&&n.push(s);return this.getAttrs().class=n.join(" "),this},i.prototype.removeClass=function(e){for(var t=this.getClass(),n=t?t.split(sn):[],r=e.split(sn),s;n.length&&(s=r.shift());){var a=n.indexOf(s);a!==-1&&n.splice(a,1)}return this.getAttrs().class=n.join(" "),this},i.prototype.getClass=function(){return this.getAttrs().class||""},i.prototype.hasClass=function(e){return(" "+this.getClass()+" ").indexOf(" "+e+" ")!==-1},i.prototype.setInnerHTML=function(e){return this.innerHTML=e,this},i.prototype.setInnerHtml=function(e){return this.setInnerHTML(e)},i.prototype.getInnerHTML=function(){return this.innerHTML||""},i.prototype.getInnerHtml=function(){return this.getInnerHTML()},i.prototype.toAnchorString=function(){var e=this.getTagName(),t=this.buildAttrsStr();return t=t?" "+t:"",["<",e,t,">",this.getInnerHtml(),"</",e,">"].join("")},i.prototype.buildAttrsStr=function(){if(!this.attrs)return"";var e=this.getAttrs(),t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+'="'+e[n]+'"');return t.join(" ")},i}();function KE(i,e,t){var n,r;t==null?(t="&hellip;",r=3,n=8):(r=t.length,n=t.length);var s=function(y){var x={},_=y,M=_.match(/^([a-z]+):\/\//i);return M&&(x.scheme=M[1],_=_.substr(M[0].length)),M=_.match(/^(.*?)(?=(\?|#|\/|$))/i),M&&(x.host=M[1],_=_.substr(M[0].length)),M=_.match(/^\/(.*?)(?=(\?|#|$))/i),M&&(x.path=M[1],_=_.substr(M[0].length)),M=_.match(/^\?(.*?)(?=(#|$))/i),M&&(x.query=M[1],_=_.substr(M[0].length)),M=_.match(/^#(.*?)$/i),M&&(x.fragment=M[1]),x},a=function(y){var x="";return y.scheme&&y.host&&(x+=y.scheme+"://"),y.host&&(x+=y.host),y.path&&(x+="/"+y.path),y.query&&(x+="?"+y.query),y.fragment&&(x+="#"+y.fragment),x},o=function(y,x){var _=x/2,M=Math.ceil(_),C=-1*Math.floor(_),P="";return C<0&&(P=y.substr(C)),y.substr(0,M)+t+P};if(i.length<=e)return i;var l=e-r,c=s(i);if(c.query){var u=c.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);u&&(c.query=c.query.substr(0,u[1].length),i=a(c))}if(i.length<=e||(c.host&&(c.host=c.host.replace(/^www\./,""),i=a(c)),i.length<=e))return i;var h="";if(c.host&&(h+=c.host),h.length>=l)return c.host.length==e?(c.host.substr(0,e-r)+t).substr(0,l+n):o(h,l).substr(0,l+n);var f="";if(c.path&&(f+="/"+c.path),c.query&&(f+="?"+c.query),f)if((h+f).length>=l){if((h+f).length==e)return(h+f).substr(0,e);var d=l-h.length;return(h+o(f,d)).substr(0,l+n)}else h+=f;if(c.fragment){var g="#"+c.fragment;if((h+g).length>=l){if((h+g).length==e)return(h+g).substr(0,e);var m=l-h.length;return(h+o(g,m)).substr(0,l+n)}else h+=g}if(c.scheme&&c.host){var p=c.scheme+"://";if((h+p).length<l)return(p+h).substr(0,e)}if(h.length<=e)return h;var v="";return l>0&&(v=h.substr(-1*Math.floor(l/2))),(h.substr(0,Math.ceil(l/2))+t+v).substr(0,l+n)}function YE(i,e,t){if(i.length<=e)return i;var n,r;t==null?(t="&hellip;",n=8,r=3):(n=t.length,r=t.length);var s=e-r,a="";return s>0&&(a=i.substr(-1*Math.floor(s/2))),(i.substr(0,Math.ceil(s/2))+t+a).substr(0,s+n)}function ZE(i,e,t){return HE(i,e,t)}var JE=function(){function i(e){e===void 0&&(e={}),this.newWindow=!1,this.truncate={},this.className="",this.newWindow=e.newWindow||!1,this.truncate=e.truncate||{},this.className=e.className||""}return i.prototype.build=function(e){return new og({tagName:"a",attrs:this.createAttrs(e),innerHtml:this.processAnchorText(e.getAnchorText())})},i.prototype.createAttrs=function(e){var t={href:e.getAnchorHref()},n=this.createCssClass(e);return n&&(t.class=n),this.newWindow&&(t.target="_blank",t.rel="noopener noreferrer"),this.truncate&&this.truncate.length&&this.truncate.length<e.getAnchorText().length&&(t.title=e.getAnchorHref()),t},i.prototype.createCssClass=function(e){var t=this.className;if(t){for(var n=[t],r=e.getCssClassSuffixes(),s=0,a=r.length;s<a;s++)n.push(t+"-"+r[s]);return n.join(" ")}else return""},i.prototype.processAnchorText=function(e){return e=this.doTruncate(e),e},i.prototype.doTruncate=function(e){var t=this.truncate;if(!t||!t.length)return e;var n=t.length,r=t.location;return r==="smart"?KE(e,n):r==="middle"?YE(e,n):ZE(e,n)},i}(),dc=function(i,e){return dc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},dc(i,e)};function Vs(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");dc(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var gt=function(){return gt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},gt.apply(this,arguments)},Hs=function(){function i(e){this._=null,this.matchedText="",this.offset=0,this.tagBuilder=e.tagBuilder,this.matchedText=e.matchedText,this.offset=e.offset}return i.prototype.getMatchedText=function(){return this.matchedText},i.prototype.setOffset=function(e){this.offset=e},i.prototype.getOffset=function(){return this.offset},i.prototype.getCssClassSuffixes=function(){return[this.type]},i.prototype.buildTag=function(){return this.tagBuilder.build(this)},i}(),QE="(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|northwesternmutual|travelersinsurance|verm\xF6gensberatung|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbah1a3hjkrd|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|verm\xF6gensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--mgbcpq6gpa1a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbaakc7dvf|xn--mgbc0a9azcg|xn--nqv7fs00ema|americanfamily|bananarepublic|cancerresearch|cookingchannel|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--h2breg3eve|xn--jlq480n2rg|xn--jlq61u9w7b|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|xn--rvc1e0am3e|international|lifeinsurance|travelchannel|wolterskluwer|xn--cckwcxetd|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--h2brj9c8c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|scholarships|versicherung|xn--3e0b707e|xn--45br5cyl|xn--4dbrk0ce|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbgu82a|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|foodnetwork|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--3bst00m|xn--3ds443g|xn--3hcrj9c|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--mgbbh1a|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--otu796d|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nextdirect|properties|protection|prudential|realestate|republican|restaurant|schaeffler|tatamotors|technology|university|vlaanderen|volkswagen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--q7ce6a|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|alfaromeo|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|frontdoor|furniture|goldpoint|hisamitsu|homedepot|homegoods|homesense|institute|insurance|kuokgroup|lancaster|landrover|lifestyle|marketing|marshalls|melbourne|microsoft|panasonic|passagens|pramerica|richardli|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--ngbrx|xn--nqv7f|xn--p1acf|xn--qxa6a|xn--tckwe|xn--vhquv|yodobashi|\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|builders|business|capetown|catering|catholic|cipriani|cityeats|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|etisalat|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|guardian|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|maserati|mckinsey|memorial|merckmsd|mortgage|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|showtime|softbank|software|stcgroup|supplies|training|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|avianca|banamex|bauhaus|bentley|bestbuy|booking|brother|bugatti|capital|caravan|careers|channel|charity|chintai|citadel|clubmed|college|cologne|comcast|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|grocery|guitars|hamburg|hangout|hitachi|holiday|hosting|hoteles|hotmail|hyundai|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lanxess|lasalle|latrobe|leclerc|limited|lincoln|markets|monster|netbank|netflix|network|neustar|okinawa|oldnavy|organic|origins|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|singles|staples|storage|support|surgery|systems|temasek|theater|theatre|tickets|tiffany|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|xfinity|yamaxun|youtube|zuerich|\u043A\u0430\u0442\u043E\u043B\u0438\u043A|\u0627\u062A\u0635\u0627\u0644\u0627\u062A|\u0627\u0644\u0628\u062D\u0631\u064A\u0646|\u0627\u0644\u062C\u0632\u0627\u0626\u0631|\u0627\u0644\u0639\u0644\u064A\u0627\u0646|\u067E\u0627\u06A9\u0633\u062A\u0627\u0646|\u0643\u0627\u062B\u0648\u0644\u064A\u0643|\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE|abarth|abbott|abbvie|africa|agency|airbus|airtel|alipay|alsace|alstom|amazon|anquan|aramco|author|bayern|beauty|berlin|bharti|bostik|boston|broker|camera|career|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hotels|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kinder|kindle|kosher|lancia|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|monash|mormon|moscow|museum|mutual|nagoya|natura|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|pictet|quebec|racing|realty|reisen|repair|report|review|rocher|rogers|ryukyu|safety|sakura|sanofi|school|schule|search|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|vuelos|walter|webcam|xihuan|yachts|yandex|zappos|\u043C\u043E\u0441\u043A\u0432\u0430|\u043E\u043D\u043B\u0430\u0439\u043D|\u0627\u0628\u0648\u0638\u0628\u064A|\u0627\u0631\u0627\u0645\u0643\u0648|\u0627\u0644\u0627\u0631\u062F\u0646|\u0627\u0644\u0645\u063A\u0631\u0628|\u0627\u0645\u0627\u0631\u0627\u062A|\u0641\u0644\u0633\u0637\u064A\u0646|\u0645\u0644\u064A\u0633\u064A\u0627|\u092D\u093E\u0930\u0924\u092E\u094D|\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8|\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|bosch|build|canon|cards|chase|cheap|cisco|citic|click|cloud|coach|codes|crown|cymru|dabur|dance|deals|delta|drive|dubai|earth|edeka|email|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|irish|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|linde|lipsy|loans|locus|lotte|lotto|macys|mango|media|miami|money|movie|music|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|rugby|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|sport|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|\u05D9\u05E9\u05E8\u05D0\u05DC|\u0627\u06CC\u0631\u0627\u0646|\u0628\u0627\u0632\u0627\u0631|\u0628\u06BE\u0627\u0631\u062A|\u0633\u0648\u062F\u0627\u0646|\u0633\u0648\u0631\u064A\u0629|\u0647\u0645\u0631\u0627\u0647|\u092D\u093E\u0930\u094B\u0924|\u0938\u0902\u0917\u0920\u0928|\u09AC\u09BE\u0982\u09B2\u09BE|\u0C2D\u0C3E\u0C30\u0C24\u0C4D|\u0D2D\u0D3E\u0D30\u0D24\u0D02|\u5609\u91CC\u5927\u9152\u5E97|aarp|able|adac|aero|akdn|ally|amex|arab|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|dvag|erni|fage|fail|fans|farm|fast|fiat|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|hgtv|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kids|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|loft|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|read|reit|rent|rest|rich|room|rsvp|ruhr|safe|sale|sarl|save|saxo|scot|seat|seek|sexy|shaw|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|\u0434\u0435\u0442\u0438|\u0441\u0430\u0439\u0442|\u0628\u0627\u0631\u062A|\u0628\u064A\u062A\u0643|\u0680\u0627\u0631\u062A|\u062A\u0648\u0646\u0633|\u0634\u0628\u0643\u0629|\u0639\u0631\u0627\u0642|\u0639\u0645\u0627\u0646|\u0645\u0648\u0642\u0639|\u092D\u093E\u0930\u0924|\u09AD\u09BE\u09B0\u09A4|\u09AD\u09BE\u09F0\u09A4|\u0A2D\u0A3E\u0A30\u0A24|\u0AAD\u0ABE\u0AB0\u0AA4|\u0B2D\u0B3E\u0B30\u0B24|\u0CAD\u0CBE\u0CB0\u0CA4|\u0DBD\u0D82\u0D9A\u0DCF|\u30A2\u30DE\u30BE\u30F3|\u30B0\u30FC\u30B0\u30EB|\u30AF\u30E9\u30A6\u30C9|\u30DD\u30A4\u30F3\u30C8|\u7EC4\u7EC7\u673A\u6784|\u96FB\u8A0A\u76C8\u79D1|\u9999\u683C\u91CC\u62C9|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|cbs|ceo|cfa|cfd|com|cpa|crs|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gay|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|ibm|ice|icu|ifm|inc|ing|ink|int|ist|itv|jcb|jio|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|llc|llp|lol|lpl|ltd|man|map|mba|med|men|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|one|ong|onl|ooo|org|ott|ovh|pay|pet|phd|pid|pin|pnc|pro|pru|pub|pwc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|sca|scb|ses|sew|sex|sfr|ski|sky|soy|spa|srl|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|\u0431\u0435\u043B|\u043A\u043E\u043C|\u049B\u0430\u0437|\u043C\u043A\u0434|\u043C\u043E\u043D|\u043E\u0440\u0433|\u0440\u0443\u0441|\u0441\u0440\u0431|\u0443\u043A\u0440|\u0570\u0561\u0575|\u05E7\u05D5\u05DD|\u0639\u0631\u0628|\u0642\u0637\u0631|\u0643\u0648\u0645|\u0645\u0635\u0631|\u0915\u0949\u092E|\u0928\u0947\u091F|\u0E04\u0E2D\u0E21|\u0E44\u0E17\u0E22|\u0EA5\u0EB2\u0EA7|\u30B9\u30C8\u30A2|\u30BB\u30FC\u30EB|\u307F\u3093\u306A|\u4E2D\u6587\u7F51|\u4E9A\u9A6C\u900A|\u5929\u4E3B\u6559|\u6211\u7231\u4F60|\u65B0\u52A0\u5761|\u6DE1\u9A6C\u9521|\u8BFA\u57FA\u4E9A|\u98DE\u5229\u6D66|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|\u03B5\u03BB|\u03B5\u03C5|\u0431\u0433|\u0435\u044E|\u0440\u0444|\u10D2\u10D4|\uB2F7\uB137|\uB2F7\uCEF4|\uC0BC\uC131|\uD55C\uAD6D|\u30B3\u30E0|\u4E16\u754C|\u4E2D\u4FE1|\u4E2D\u56FD|\u4E2D\u570B|\u4F01\u4E1A|\u4F5B\u5C71|\u4FE1\u606F|\u5065\u5EB7|\u516B\u5366|\u516C\u53F8|\u516C\u76CA|\u53F0\u6E7E|\u53F0\u7063|\u5546\u57CE|\u5546\u5E97|\u5546\u6807|\u5609\u91CC|\u5728\u7EBF|\u5927\u62FF|\u5A31\u4E50|\u5BB6\u96FB|\u5E7F\u4E1C|\u5FAE\u535A|\u6148\u5584|\u624B\u673A|\u62DB\u8058|\u653F\u52A1|\u653F\u5E9C|\u65B0\u95FB|\u65F6\u5C1A|\u66F8\u7C4D|\u673A\u6784|\u6E38\u620F|\u6FB3\u9580|\u70B9\u770B|\u79FB\u52A8|\u7F51\u5740|\u7F51\u5E97|\u7F51\u7AD9|\u7F51\u7EDC|\u8054\u901A|\u8C37\u6B4C|\u8D2D\u7269|\u901A\u8CA9|\u96C6\u56E2|\u98DF\u54C1|\u9910\u5385|\u9999\u6E2F)",e3=new RegExp("^"+QE+"$"),t3=/[\/?#]/,n3=/[-+&@#/%=~_()|'$*\[\]{}\u2713]/,lg=/[?!:,.;^]/,cg=/https?:\/\//i,i3=new RegExp("^"+cg.source,"i"),r3=new RegExp(lg.source+"$"),s3=/^(javascript|vbscript):/i,a3=/^[A-Za-z][-.+A-Za-z0-9]*:(\/\/)?([^:/]*)/,o3=/^(?:\/\/)?([^/#?:]+)/;function wl(i){return vr.test(i)}function td(i){return vr.test(i)||wt.test(i)||i==="+"||i==="-"||i==="."}function ni(i){return Ri.test(i)}function Sl(i){return i==="_"||ni(i)}function nd(i){return Ri.test(i)||n3.test(i)||lg.test(i)}function Ml(i){return t3.test(i)}function ug(i){return e3.test(i.toLowerCase())}function l3(i){if(s3.test(i))return!1;var e=i.match(a3);if(!e)return!1;var t=!!e[1],n=e[2];return t?!0:!(n.indexOf(".")===-1||!vr.test(n))}function c3(i){var e=i.match(o3);if(!e)return!1;var t=e[0],n=t.split(".");if(n.length<2)return!1;var r=n[n.length-1];return!!ug(r)}var u3=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,f3=/[:/?#]/;function h3(i){var e=i.split(f3,1)[0];return u3.test(e)}var d3=/^(https?:\/\/)?(www\.)?/i,p3=/^\/\//,m3=function(i){Vs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="url",n.url="",n.urlMatchType="scheme",n.protocolRelativeMatch=!1,n.stripPrefix={scheme:!0,www:!0},n.stripTrailingSlash=!0,n.decodePercentEncoding=!0,n.protocolPrepended=!1,n.urlMatchType=t.urlMatchType,n.url=t.url,n.protocolRelativeMatch=t.protocolRelativeMatch,n.stripPrefix=t.stripPrefix,n.stripTrailingSlash=t.stripTrailingSlash,n.decodePercentEncoding=t.decodePercentEncoding,n}return e.prototype.getType=function(){return"url"},e.prototype.getUrlMatchType=function(){return this.urlMatchType},e.prototype.getUrl=function(){var t=this.url;return!this.protocolRelativeMatch&&this.urlMatchType!=="scheme"&&!this.protocolPrepended&&(t=this.url="http://"+t,this.protocolPrepended=!0),t},e.prototype.getAnchorHref=function(){var t=this.getUrl();return t.replace(/&amp;/g,"&")},e.prototype.getAnchorText=function(){var t=this.getMatchedText();return this.protocolRelativeMatch&&(t=_3(t)),this.stripPrefix.scheme&&(t=g3(t)),this.stripPrefix.www&&(t=v3(t)),this.stripTrailingSlash&&(t=x3(t)),this.decodePercentEncoding&&(t=y3(t)),t},e}(Hs);function g3(i){return i.replace(i3,"")}function v3(i){return i.replace(d3,"$1")}function _3(i){return i.replace(p3,"")}function x3(i){return i.charAt(i.length-1)==="/"&&(i=i.slice(0,-1)),i}function y3(i){var e=i.replace(/%22/gi,"&quot;").replace(/%26/gi,"&amp;").replace(/%27/gi,"&#39;").replace(/%3C/gi,"&lt;").replace(/%3E/gi,"&gt;");try{return decodeURIComponent(e)}catch{return e}}var b3=/^mailto:/i,w3=new RegExp("[".concat(ag,"!#$%&'*+/=?^_`{|}~-]"));function S3(i){return Ri.test(i)}function Tl(i){return w3.test(i)}function M3(i){var e=i.split(".").pop()||"";return ug(e)}var T3=function(i){Vs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="email",n.email="",n.email=t.email,n}return e.prototype.getType=function(){return"email"},e.prototype.getEmail=function(){return this.email},e.prototype.getAnchorHref=function(){return"mailto:"+this.email},e.prototype.getAnchorText=function(){return this.email},e}(Hs);function id(i){return i==="_"||Ri.test(i)}function A3(i){return i.length<=140}var E3=["twitter","facebook","instagram","tiktok"],C3=function(i){Vs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="hashtag",n.serviceName="twitter",n.hashtag="",n.serviceName=t.serviceName,n.hashtag=t.hashtag,n}return e.prototype.getType=function(){return"hashtag"},e.prototype.getServiceName=function(){return this.serviceName},e.prototype.getHashtag=function(){return this.hashtag},e.prototype.getAnchorHref=function(){var t=this.serviceName,n=this.hashtag;switch(t){case"twitter":return"https://twitter.com/hashtag/"+n;case"facebook":return"https://www.facebook.com/hashtag/"+n;case"instagram":return"https://instagram.com/explore/tags/"+n;case"tiktok":return"https://www.tiktok.com/tag/"+n;default:throw ds(t),new Error("Invalid hashtag service: ".concat(t))}},e.prototype.getAnchorText=function(){return"#"+this.hashtag},e.prototype.getCssClassSuffixes=function(){var t=i.prototype.getCssClassSuffixes.call(this),n=this.getServiceName();return n&&t.push(n),t},e}(Hs),D3={twitter:/^@\w{1,15}$/,instagram:/^@[_\w]{1,30}$/,soundcloud:/^@[-a-z0-9_]{3,25}$/,tiktok:/^@[.\w]{1,23}[\w]$/},R3=/[-\w.]/;function rd(i){return R3.test(i)}function P3(i,e){var t=D3[e];return t.test(i)}var L3=["twitter","instagram","soundcloud","tiktok"],I3=function(i){Vs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="mention",n.serviceName="twitter",n.mention="",n.mention=t.mention,n.serviceName=t.serviceName,n}return e.prototype.getType=function(){return"mention"},e.prototype.getMention=function(){return this.mention},e.prototype.getServiceName=function(){return this.serviceName},e.prototype.getAnchorHref=function(){switch(this.serviceName){case"twitter":return"https://twitter.com/"+this.mention;case"instagram":return"https://instagram.com/"+this.mention;case"soundcloud":return"https://soundcloud.com/"+this.mention;case"tiktok":return"https://www.tiktok.com/@"+this.mention;default:throw new Error("Unknown service name to point mention to: "+this.serviceName)}},e.prototype.getAnchorText=function(){return"@"+this.mention},e.prototype.getCssClassSuffixes=function(){var t=i.prototype.getCssClassSuffixes.call(this),n=this.getServiceName();return n&&t.push(n),t},e}(Hs),F3=/[-. ]/,N3=/[-. ()]/,O3=/[,;]/,B3=/(?:(?:(?:(\+)?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-. ]?(?:\d[-. ]?){6,12}\d+))([,;]+[0-9]+#?)*/,k3=/(0([1-9]-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})/,U3=new RegExp("^".concat(B3.source,"|").concat(k3.source,"$"));function sd(i){return F3.test(i)}function Al(i){return O3.test(i)}function z3(i){var e=i.charAt(0)==="+"||N3.test(i);return e&&U3.test(i)}var V3=function(i){Vs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="phone",n.number="",n.plusSign=!1,n.number=t.number,n.plusSign=t.plusSign,n}return e.prototype.getType=function(){return"phone"},e.prototype.getPhoneNumber=function(){return this.number},e.prototype.getNumber=function(){return this.getPhoneNumber()},e.prototype.getAnchorHref=function(){return"tel:"+(this.plusSign?"+":"")+this.number},e.prototype.getAnchorText=function(){return this.matchedText},e}(Hs);function H3(i,e){for(var t=e.tagBuilder,n=e.stripPrefix,r=e.stripTrailingSlash,s=e.decodePercentEncoding,a=e.hashtagServiceName,o=e.mentionServiceName,l=[],c=i.length,u=[],h=0;h<c;h++){var f=i.charAt(h);if(u.length===0)p(f);else for(var d=u.length-1;d>=0;d--){var g=u[d];switch(g.state){case 11:C(g,f);break;case 12:P(g,f);break;case 0:v(g,f);break;case 1:y(g,f);break;case 2:x(g,f);break;case 3:_(g,f);break;case 4:M(g,f);break;case 5:b(g,f);break;case 6:A(g,f);break;case 7:L(g,f);break;case 13:H(g,f);break;case 14:Y(g,f);break;case 8:U(g,f);break;case 9:O(g,f);break;case 10:G(g,f);break;case 15:J(g,f);break;case 16:ne(g,f);break;case 17:$(g,f);break;case 18:F(g,f);break;case 19:N(g,f);break;case 20:ee(g,f);break;case 21:Q(g,f);break;case 22:ie(g,f);break;case 23:le(g,f);break;case 24:z(g,f);break;case 25:X(g,f);break;case 26:Ce(g,f);break;case 27:de(g,f);break;case 28:xe(g,f);break;case 29:oe(g,f);break;case 30:Be(g,f);break;case 31:Te(g,f);break;case 32:Je(g,f);break;case 33:at(g,f);break;case 34:st(g,f);break;case 35:xt(g,f);break;case 36:Qe(g,f);break;case 37:ve(g,f);break;case 38:Ne(g,f);break;case 39:Tt(g,f);break;case 40:At(g,f);break;case 41:E(g,f);break;default:ds(g.state)}}}for(var m=u.length-1;m>=0;m--)u.forEach(function(S){return w(S)});return l;function p(S){if(S==="#")u.push(q3(h,28));else if(S==="@")u.push(X3(h,30));else if(S==="/")u.push(Cl(h,11));else if(S==="+")u.push(Dl(h,37));else if(S==="(")u.push(Dl(h,32));else{if(wt.test(S)&&(u.push(Dl(h,38)),u.push($3(h,13))),S3(S)){var D=S.toLowerCase()==="m"?15:22;u.push(j3(h,D))}wl(S)&&u.push(El(h,0)),Ri.test(S)&&u.push(Cl(h,5))}}function v(S,D){D===":"?S.state=2:D==="-"?S.state=1:td(D)||Xe(u,S)}function y(S,D){D==="-"||(D==="/"?(Xe(u,S),u.push(Cl(h,11))):td(D)?S.state=0:Xe(u,S))}function x(S,D){D==="/"?S.state=3:D==="."?Xe(u,S):ni(D)?(S.state=5,wl(D)&&u.push(El(h,0))):Xe(u,S)}function _(S,D){D==="/"?S.state=4:nd(D)?(S.state=10,S.acceptStateReached=!0):w(S)}function M(S,D){D==="/"?S.state=10:ni(D)?(S.state=5,S.acceptStateReached=!0):Xe(u,S)}function C(S,D){D==="/"?S.state=12:Xe(u,S)}function P(S,D){ni(D)?S.state=5:Xe(u,S)}function b(S,D){D==="."?S.state=7:D==="-"?S.state=6:D===":"?S.state=8:Ml(D)?S.state=10:Sl(D)||w(S)}function A(S,D){D==="-"||(D==="."?w(S):ni(D)?S.state=5:w(S))}function L(S,D){D==="."?w(S):ni(D)?(S.state=5,S.acceptStateReached=!0):w(S)}function H(S,D){D==="."?S.state=14:D===":"?S.state=8:wt.test(D)||(Ml(D)?S.state=10:Ri.test(D)?Xe(u,S):w(S))}function Y(S,D){wt.test(D)?(S.octetsEncountered++,S.octetsEncountered===4&&(S.acceptStateReached=!0),S.state=13):w(S)}function U(S,D){wt.test(D)?S.state=9:w(S)}function O(S,D){wt.test(D)||(Ml(D)?S.state=10:w(S))}function G(S,D){nd(D)||w(S)}function J(S,D){D.toLowerCase()==="a"?S.state=16:ie(S,D)}function ne(S,D){D.toLowerCase()==="i"?S.state=17:ie(S,D)}function $(S,D){D.toLowerCase()==="l"?S.state=18:ie(S,D)}function F(S,D){D.toLowerCase()==="t"?S.state=19:ie(S,D)}function N(S,D){D.toLowerCase()==="o"?S.state=20:ie(S,D)}function ee(S,D){D.toLowerCase()===":"?S.state=21:ie(S,D)}function Q(S,D){Tl(D)?S.state=22:Xe(u,S)}function ie(S,D){D==="."?S.state=23:D==="@"?S.state=24:Tl(D)?S.state=22:Xe(u,S)}function le(S,D){D==="."||D==="@"?Xe(u,S):Tl(D)?S.state=22:Xe(u,S)}function z(S,D){ni(D)?S.state=25:Xe(u,S)}function X(S,D){D==="."?S.state=27:D==="-"?S.state=26:Sl(D)||w(S)}function Ce(S,D){D==="-"||D==="."?w(S):Sl(D)?S.state=25:w(S)}function de(S,D){D==="."||D==="-"?w(S):ni(D)?(S.state=25,S.acceptStateReached=!0):w(S)}function xe(S,D){id(D)?(S.state=29,S.acceptStateReached=!0):Xe(u,S)}function oe(S,D){id(D)||w(S)}function Be(S,D){rd(D)?(S.state=31,S.acceptStateReached=!0):Xe(u,S)}function Te(S,D){rd(D)||(Ri.test(D)?Xe(u,S):w(S))}function ve(S,D){wt.test(D)?S.state=38:(Xe(u,S),p(D))}function Je(S,D){wt.test(D)?S.state=33:Xe(u,S),p(D)}function at(S,D){wt.test(D)?S.state=34:Xe(u,S)}function st(S,D){wt.test(D)?S.state=35:Xe(u,S)}function xt(S,D){D===")"?S.state=36:Xe(u,S)}function Qe(S,D){wt.test(D)?S.state=38:sd(D)?S.state=39:Xe(u,S)}function Ne(S,D){S.acceptStateReached=!0,Al(D)?S.state=40:D==="#"?S.state=41:wt.test(D)||(D==="("?S.state=32:sd(D)?S.state=39:(w(S),wl(D)&&u.push(El(h,0))))}function Tt(S,D){wt.test(D)?S.state=38:D==="("?S.state=32:(w(S),p(D))}function At(S,D){Al(D)||(D==="#"?S.state=41:wt.test(D)?S.state=38:w(S))}function E(S,D){Al(D)?S.state=40:wt.test(D)?Xe(u,S):w(S)}function w(S){if(Xe(u,S),!!S.acceptStateReached){var D=S.startIdx,Z=i.slice(S.startIdx,h);if(Z=W3(Z),S.type==="url"){var ae=i.charAt(S.startIdx-1);if(ae==="@")return;var pe=S.matchType;if(pe==="scheme"){var re=cg.exec(Z);if(re&&(D=D+re.index,Z=Z.slice(re.index)),!l3(Z))return}else if(pe==="tld"){if(!c3(Z))return}else if(pe==="ipV4"){if(!h3(Z))return}else ds(pe);l.push(new m3({tagBuilder:t,matchedText:Z,offset:D,urlMatchType:pe,url:Z,protocolRelativeMatch:Z.slice(0,2)==="//",stripPrefix:n,stripTrailingSlash:r,decodePercentEncoding:s}))}else if(S.type==="email")M3(Z)&&l.push(new T3({tagBuilder:t,matchedText:Z,offset:D,email:Z.replace(b3,"")}));else if(S.type==="hashtag")A3(Z)&&l.push(new C3({tagBuilder:t,matchedText:Z,offset:D,serviceName:a,hashtag:Z.slice(1)}));else if(S.type==="mention")P3(Z,o)&&l.push(new I3({tagBuilder:t,matchedText:Z,offset:D,serviceName:o,mention:Z.slice(1)}));else if(S.type==="phone"){if(Z=Z.replace(/ +$/g,""),z3(Z)){var q=Z.replace(/[^0-9,;#]/g,"");l.push(new V3({tagBuilder:t,matchedText:Z,offset:D,number:q,plusSign:Z.charAt(0)==="+"}))}}else ds(S)}}}var G3=/[\(\{\[]/,ad=/[\)\}\]]/,od={")":"(","}":"{","]":"["};function W3(i){for(var e={"(":0,"{":0,"[":0},t=0;t<i.length;t++){var n=i.charAt(t);G3.test(n)?e[n]++:ad.test(n)&&e[od[n]]--}for(var r=i.length-1,s;r>=0;)if(s=i.charAt(r),ad.test(s)){var a=od[s];if(e[a]<0)e[a]++,r--;else break}else if(r3.test(s))r--;else break;return i.slice(0,r+1)}function El(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"scheme"}}function Cl(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"tld"}}function $3(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"ipV4",octetsEncountered:1}}function j3(i,e){return{type:"email",startIdx:i,state:e,acceptStateReached:!1}}function q3(i,e){return{type:"hashtag",startIdx:i,state:e,acceptStateReached:!1}}function X3(i,e){return{type:"mention",startIdx:i,state:e,acceptStateReached:!1}}function Dl(i,e){return{type:"phone",startIdx:i,state:e,acceptStateReached:!1}}function K3(i,e){for(var t=e.onOpenTag,n=e.onCloseTag,r=e.onText,s=e.onComment,a=e.onDoctype,o=new mn,l=0,c=i.length,u=0,h=0,f=o;l<c;){var d=i.charAt(l);switch(u){case 0:g(d);break;case 1:m(d);break;case 2:v(d);break;case 3:p(d);break;case 4:y(d);break;case 5:x(d);break;case 6:_(d);break;case 7:M(d);break;case 8:C(d);break;case 9:P(d);break;case 10:b(d);break;case 11:A(d);break;case 12:L(d);break;case 13:H();break;case 14:Y(d);break;case 15:U(d);break;case 16:O(d);break;case 17:G(d);break;case 18:J(d);break;case 19:ne(d);break;case 20:$(d);break;default:ds(u)}l++}h<l&&Q();function g(z){z==="<"&&N()}function m(z){z==="!"?u=13:z==="/"?(u=2,f=new mn(gt(gt({},f),{isClosing:!0}))):z==="<"?N():vr.test(z)?(u=3,f=new mn(gt(gt({},f),{isOpening:!0}))):(u=0,f=o)}function p(z){sn.test(z)?(f=new mn(gt(gt({},f),{name:ie()})),u=4):z==="<"?N():z==="/"?(f=new mn(gt(gt({},f),{name:ie()})),u=12):z===">"?(f=new mn(gt(gt({},f),{name:ie()})),ee()):!vr.test(z)&&!wt.test(z)&&z!==":"&&F()}function v(z){z===">"?F():vr.test(z)?u=3:F()}function y(z){sn.test(z)||(z==="/"?u=12:z===">"?ee():z==="<"?N():z==="="||bl.test(z)||GE.test(z)?F():u=5)}function x(z){sn.test(z)?u=6:z==="/"?u=12:z==="="?u=7:z===">"?ee():z==="<"?N():bl.test(z)&&F()}function _(z){sn.test(z)||(z==="/"?u=12:z==="="?u=7:z===">"?ee():z==="<"?N():bl.test(z)?F():u=5)}function M(z){sn.test(z)||(z==='"'?u=8:z==="'"?u=9:/[>=`]/.test(z)?F():z==="<"?N():u=10)}function C(z){z==='"'&&(u=11)}function P(z){z==="'"&&(u=11)}function b(z){sn.test(z)?u=4:z===">"?ee():z==="<"&&N()}function A(z){sn.test(z)?u=4:z==="/"?u=12:z===">"?ee():z==="<"?N():(u=4,le())}function L(z){z===">"?(f=new mn(gt(gt({},f),{isClosing:!0})),ee()):u=4}function H(z){i.substr(l,2)==="--"?(l+=2,f=new mn(gt(gt({},f),{type:"comment"})),u=14):i.substr(l,7).toUpperCase()==="DOCTYPE"?(l+=7,f=new mn(gt(gt({},f),{type:"doctype"})),u=20):F()}function Y(z){z==="-"?u=15:z===">"?F():u=16}function U(z){z==="-"?u=18:z===">"?F():u=16}function O(z){z==="-"&&(u=17)}function G(z){z==="-"?u=18:u=16}function J(z){z===">"?ee():z==="!"?u=19:z==="-"||(u=16)}function ne(z){z==="-"?u=17:z===">"?ee():u=16}function $(z){z===">"?ee():z==="<"&&N()}function F(){u=0,f=o}function N(){u=1,f=new mn({idx:l})}function ee(){var z=i.slice(h,f.idx);z&&r(z,h),f.type==="comment"?s(f.idx):f.type==="doctype"?a(f.idx):(f.isOpening&&t(f.name,f.idx),f.isClosing&&n(f.name,f.idx)),F(),h=l+1}function Q(){var z=i.slice(h,l);r(z,h),h=l+1}function ie(){var z=f.idx+(f.isClosing?2:1);return i.slice(z,l).toLowerCase()}function le(){l--}}var mn=function(){function i(e){e===void 0&&(e={}),this.idx=e.idx!==void 0?e.idx:-1,this.type=e.type||"tag",this.name=e.name||"",this.isOpening=!!e.isOpening,this.isClosing=!!e.isClosing}return i}(),Y3=function(){function i(e){e===void 0&&(e={}),this.version=i.version,this.urls={},this.email=!0,this.phone=!0,this.hashtag=!1,this.mention=!1,this.newWindow=!0,this.stripPrefix={scheme:!0,www:!0},this.stripTrailingSlash=!0,this.decodePercentEncoding=!0,this.truncate={length:0,location:"end"},this.className="",this.replaceFn=null,this.context=void 0,this.sanitizeHtml=!1,this.tagBuilder=null,this.urls=Z3(e.urls),this.email=Jt(e.email)?e.email:this.email,this.phone=Jt(e.phone)?e.phone:this.phone,this.hashtag=e.hashtag||this.hashtag,this.mention=e.mention||this.mention,this.newWindow=Jt(e.newWindow)?e.newWindow:this.newWindow,this.stripPrefix=J3(e.stripPrefix),this.stripTrailingSlash=Jt(e.stripTrailingSlash)?e.stripTrailingSlash:this.stripTrailingSlash,this.decodePercentEncoding=Jt(e.decodePercentEncoding)?e.decodePercentEncoding:this.decodePercentEncoding,this.sanitizeHtml=e.sanitizeHtml||!1;var t=this.mention;if(t!==!1&&L3.indexOf(t)===-1)throw new Error("invalid `mention` cfg '".concat(t,"' - see docs"));var n=this.hashtag;if(n!==!1&&E3.indexOf(n)===-1)throw new Error("invalid `hashtag` cfg '".concat(n,"' - see docs"));this.truncate=Q3(e.truncate),this.className=e.className||this.className,this.replaceFn=e.replaceFn||this.replaceFn,this.context=e.context||this}return i.link=function(e,t){var n=new i(t);return n.link(e)},i.parse=function(e,t){var n=new i(t);return n.parse(e)},i.prototype.parse=function(e){var t=this,n=["a","style","script"],r=0,s=[];return K3(e,{onOpenTag:function(a){n.indexOf(a)>=0&&r++},onText:function(a,o){if(r===0){var l=/(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,c=a.split(l),u=o;c.forEach(function(h,f){if(f%2===0){var d=t.parseText(h,u);s.push.apply(s,d)}u+=h.length})}},onCloseTag:function(a){n.indexOf(a)>=0&&(r=Math.max(r-1,0))},onComment:function(a){},onDoctype:function(a){}}),s=this.compactMatches(s),s=this.removeUnwantedMatches(s),s},i.prototype.compactMatches=function(e){e.sort(function(l,c){return l.getOffset()-c.getOffset()});for(var t=0;t<e.length-1;){var n=e[t],r=n.getOffset(),s=n.getMatchedText().length,a=r+s;if(t+1<e.length){if(e[t+1].getOffset()===r){var o=e[t+1].getMatchedText().length>s?t:t+1;e.splice(o,1);continue}if(e[t+1].getOffset()<a){e.splice(t+1,1);continue}}t++}return e},i.prototype.removeUnwantedMatches=function(e){return this.hashtag||vi(e,function(t){return t.getType()==="hashtag"}),this.email||vi(e,function(t){return t.getType()==="email"}),this.phone||vi(e,function(t){return t.getType()==="phone"}),this.mention||vi(e,function(t){return t.getType()==="mention"}),this.urls.schemeMatches||vi(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="scheme"}),this.urls.tldMatches||vi(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="tld"}),this.urls.ipV4Matches||vi(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="ipV4"}),e},i.prototype.parseText=function(e,t){t===void 0&&(t=0),t=t||0;for(var n=H3(e,{tagBuilder:this.getTagBuilder(),stripPrefix:this.stripPrefix,stripTrailingSlash:this.stripTrailingSlash,decodePercentEncoding:this.decodePercentEncoding,hashtagServiceName:this.hashtag,mentionServiceName:this.mention||"twitter"}),r=0,s=n.length;r<s;r++)n[r].setOffset(t+n[r].getOffset());return n},i.prototype.link=function(e){if(!e)return"";this.sanitizeHtml&&(e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"));for(var t=this.parse(e),n=[],r=0,s=0,a=t.length;s<a;s++){var o=t[s];n.push(e.substring(r,o.getOffset())),n.push(this.createMatchReturnVal(o)),r=o.getOffset()+o.getMatchedText().length}return n.push(e.substring(r)),n.join("")},i.prototype.createMatchReturnVal=function(e){var t;if(this.replaceFn&&(t=this.replaceFn.call(this.context,e)),typeof t=="string")return t;if(t===!1)return e.getMatchedText();if(t instanceof og)return t.toAnchorString();var n=e.buildTag();return n.toAnchorString()},i.prototype.getTagBuilder=function(){var e=this.tagBuilder;return e||(e=this.tagBuilder=new JE({newWindow:this.newWindow,truncate:this.truncate,className:this.className})),e},i.version=UE,i}();function Z3(i){return i==null&&(i=!0),Jt(i)?{schemeMatches:i,tldMatches:i,ipV4Matches:i}:{schemeMatches:Jt(i.schemeMatches)?i.schemeMatches:!0,tldMatches:Jt(i.tldMatches)?i.tldMatches:!0,ipV4Matches:Jt(i.ipV4Matches)?i.ipV4Matches:!0}}function J3(i){return i==null&&(i=!0),Jt(i)?{scheme:i,www:i}:{scheme:Jt(i.scheme)?i.scheme:!0,www:Jt(i.www)?i.www:!0}}function Q3(i){return typeof i=="number"?{length:i,location:"end"}:VE(i||{},{length:Number.POSITIVE_INFINITY,location:"end"})}Ee.snoise=`
//
// Description : Array and textureless GLSL 2D/3D/4D simplex 
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20201014 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
// 

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
  }

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+10.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

// Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
		+ i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;class fg{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}dot4(e,t,n,r,s){return e[0]*t+e[1]*n+e[2]*r+e[3]*s}noise(e,t){let n,r,s;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,g=e-f,m=t-d;let p,v;g>m?(p=1,v=0):(p=0,v=1);const y=g-p+u,x=m-v+u,_=g-1+2*u,M=m-1+2*u,C=l&255,P=c&255,b=this.perm[C+this.perm[P]]%12,A=this.perm[C+p+this.perm[P+v]]%12,L=this.perm[C+1+this.perm[P+1]]%12;let H=.5-g*g-m*m;H<0?n=0:(H*=H,n=H*H*this.dot(this.grad3[b],g,m));let Y=.5-y*y-x*x;Y<0?r=0:(Y*=Y,r=Y*Y*this.dot(this.grad3[A],y,x));let U=.5-_*_-M*M;return U<0?s=0:(U*=U,s=U*U*this.dot(this.grad3[L],_,M)),70*(n+r+s)}noise3d(e,t,n){let r,s,a,o;const l=.3333333333333333,c=(e+t+n)*l,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(n+c),d=1/6,g=(u+h+f)*d,m=u-g,p=h-g,v=f-g,y=e-m,x=t-p,_=n-v;let M,C,P,b,A,L;y>=x?x>=_?(M=1,C=0,P=0,b=1,A=1,L=0):y>=_?(M=1,C=0,P=0,b=1,A=0,L=1):(M=0,C=0,P=1,b=1,A=0,L=1):x<_?(M=0,C=0,P=1,b=0,A=1,L=1):y<_?(M=0,C=1,P=0,b=0,A=1,L=1):(M=0,C=1,P=0,b=1,A=1,L=0);const H=y-M+d,Y=x-C+d,U=_-P+d,O=y-b+2*d,G=x-A+2*d,J=_-L+2*d,ne=y-1+3*d,$=x-1+3*d,F=_-1+3*d,N=u&255,ee=h&255,Q=f&255,ie=this.perm[N+this.perm[ee+this.perm[Q]]]%12,le=this.perm[N+M+this.perm[ee+C+this.perm[Q+P]]]%12,z=this.perm[N+b+this.perm[ee+A+this.perm[Q+L]]]%12,X=this.perm[N+1+this.perm[ee+1+this.perm[Q+1]]]%12;let Ce=.6-y*y-x*x-_*_;Ce<0?r=0:(Ce*=Ce,r=Ce*Ce*this.dot3(this.grad3[ie],y,x,_));let de=.6-H*H-Y*Y-U*U;de<0?s=0:(de*=de,s=de*de*this.dot3(this.grad3[le],H,Y,U));let xe=.6-O*O-G*G-J*J;xe<0?a=0:(xe*=xe,a=xe*xe*this.dot3(this.grad3[z],O,G,J));let oe=.6-ne*ne-$*$-F*F;return oe<0?o=0:(oe*=oe,o=oe*oe*this.dot3(this.grad3[X],ne,$,F)),32*(r+s+a+o)}noise4d(e,t,n,r){const s=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let u,h,f,d,g;const m=(e+t+n+r)*l,p=Math.floor(e+m),v=Math.floor(t+m),y=Math.floor(n+m),x=Math.floor(r+m),_=(p+v+y+x)*c,M=p-_,C=v-_,P=y-_,b=x-_,A=e-M,L=t-C,H=n-P,Y=r-b,U=A>L?32:0,O=A>H?16:0,G=L>H?8:0,J=A>Y?4:0,ne=L>Y?2:0,$=H>Y?1:0,F=U+O+G+J+ne+$,N=a[F][0]>=3?1:0,ee=a[F][1]>=3?1:0,Q=a[F][2]>=3?1:0,ie=a[F][3]>=3?1:0,le=a[F][0]>=2?1:0,z=a[F][1]>=2?1:0,X=a[F][2]>=2?1:0,Ce=a[F][3]>=2?1:0,de=a[F][0]>=1?1:0,xe=a[F][1]>=1?1:0,oe=a[F][2]>=1?1:0,Be=a[F][3]>=1?1:0,Te=A-N+c,ve=L-ee+c,Je=H-Q+c,at=Y-ie+c,st=A-le+2*c,xt=L-z+2*c,Qe=H-X+2*c,Ne=Y-Ce+2*c,Tt=A-de+3*c,At=L-xe+3*c,E=H-oe+3*c,w=Y-Be+3*c,S=A-1+4*c,D=L-1+4*c,Z=H-1+4*c,ae=Y-1+4*c,pe=p&255,re=v&255,q=y&255,me=x&255,Se=o[pe+o[re+o[q+o[me]]]]%32,fe=o[pe+N+o[re+ee+o[q+Q+o[me+ie]]]]%32,be=o[pe+le+o[re+z+o[q+X+o[me+Ce]]]]%32,_e=o[pe+de+o[re+xe+o[q+oe+o[me+Be]]]]%32,Fe=o[pe+1+o[re+1+o[q+1+o[me+1]]]]%32;let Ue=.6-A*A-L*L-H*H-Y*Y;Ue<0?u=0:(Ue*=Ue,u=Ue*Ue*this.dot4(s[Se],A,L,H,Y));let Ye=.6-Te*Te-ve*ve-Je*Je-at*at;Ye<0?h=0:(Ye*=Ye,h=Ye*Ye*this.dot4(s[fe],Te,ve,Je,at));let I=.6-st*st-xt*xt-Qe*Qe-Ne*Ne;I<0?f=0:(I*=I,f=I*I*this.dot4(s[be],st,xt,Qe,Ne));let W=.6-Tt*Tt-At*At-E*E-w*w;W<0?d=0:(W*=W,d=W*W*this.dot4(s[_e],Tt,At,E,w));let te=.6-S*S-D*D-Z*Z-ae*ae;return te<0?g=0:(te*=te,g=te*te*this.dot4(s[Fe],S,D,Z,ae)),27*(u+h+f+d+g)}}class eC extends Os{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new sC(t)}),this.register(function(t){return new hC(t)}),this.register(function(t){return new dC(t)}),this.register(function(t){return new oC(t)}),this.register(function(t){return new lC(t)}),this.register(function(t){return new cC(t)}),this.register(function(t){return new uC(t)}),this.register(function(t){return new rC(t)}),this.register(function(t){return new fC(t)}),this.register(function(t){return new aC(t)}),this.register(function(t){return new nC(t)}),this.register(function(t){return new pC(t)}),this.register(function(t){return new mC(t)})}load(e,t,n,r){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=Di.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Op(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Di.decodeText(new Uint8Array(e,0,4))===hg){try{a[Pe.KHR_BINARY_GLTF]=new gC(e)}catch(u){r&&r(u);return}s=JSON.parse(a[Pe.KHR_BINARY_GLTF].content)}else s=JSON.parse(Di.decodeText(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new DC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const u=this.pluginCallbacks[c](l);o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const u=s.extensionsUsed[c],h=s.extensionsRequired||[];switch(u){case Pe.KHR_MATERIALS_UNLIT:a[u]=new iC;break;case Pe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:a[u]=new xC;break;case Pe.KHR_DRACO_MESH_COMPRESSION:a[u]=new vC(s,this.dracoLoader);break;case Pe.KHR_TEXTURE_TRANSFORM:a[u]=new _C;break;case Pe.KHR_MESH_QUANTIZATION:a[u]=new yC;break;default:h.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function tC(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Pe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class nC{constructor(e){this.parser=e,this.name=Pe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Me(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new co(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new C2(u),c.distance=h;break;case"spot":c=new A2(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class iC{constructor(){this.name=Pe.KHR_MATERIALS_UNLIT}getMaterialType(){return On}extendParams(e,t,n){const r=[];e.color=new Me(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Ge))}return Promise.all(r)}}class rC{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class sC{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ue(o,o)}return Promise.all(s)}}class aC{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class oC{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ge)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class lC{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class cC{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Me(o[0],o[1],o[2]),Promise.all(s)}}class uC{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class fC{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Vi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Me(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ge)),Promise.all(s)}}class hC{constructor(e){this.parser=e,this.name=Pe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class dC{constructor(e){this.parser=e,this.name=Pe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class pC{constructor(e){this.name=Pe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}}class mC{constructor(e){this.name=Pe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==Xt.TRIANGLES&&c.mode!==Xt.TRIANGLE_STRIP&&c.mode!==Xt.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const m=new Ie,p=new R,v=new ci,y=new R(1,1,1),x=new l2(g.geometry,g.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),x.setMatrixAt(_,m.compose(p,v,y));for(const _ in l)_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);ke.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const hg="glTF",ns=12,ld={JSON:1313821514,BIN:5130562};class gC{constructor(e){this.name=Pe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ns);if(this.header={magic:Di.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-ns,r=new DataView(e,ns);let s=0;for(;s<n;){const a=r.getUint32(s,!0);s+=4;const o=r.getUint32(s,!0);if(s+=4,o===ld.JSON){const l=new Uint8Array(e,ns+s,a);this.content=Di.decodeText(l)}else if(o===ld.BIN){const l=ns+s;this.body=e.slice(l,l+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class vC{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Pe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=mc[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=mc[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Ds[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){r.decodeDracoFile(u,function(f){for(const d in f.attributes){const g=f.attributes[d],m=l[d];m!==void 0&&(g.normalized=m)}h(f)},o,c)})})}}class _C{constructor(){this.name=Pe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class pc extends oo{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),r=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),a=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new Me().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(l){for(const c in o)l.uniforms[c]=o[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",r).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",a)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(l){o.specular.value=l}},specularMap:{get:function(){return o.specularMap.value},set:function(l){o.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(l){o.glossiness.value=l}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(l){o.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class xC{constructor(){this.name=Pe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return pc}extendParams(e,t,n){const r=t.extensions[this.name];e.color=new Me(1,1,1),e.opacity=1;const s=[];if(Array.isArray(r.diffuseFactor)){const a=r.diffuseFactor;e.color.fromArray(a),e.opacity=a[3]}if(r.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",r.diffuseTexture,Ge)),e.emissive=new Me(0,0,0),e.glossiness=r.glossinessFactor!==void 0?r.glossinessFactor:1,e.specular=new Me(1,1,1),Array.isArray(r.specularFactor)&&e.specular.fromArray(r.specularFactor),r.specularGlossinessTexture!==void 0){const a=r.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",a)),s.push(n.assignTexture(e,"specularMap",a,Ge))}return Promise.all(s)}createMaterial(e){const t=new pc(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Rc,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class yC{constructor(){this.name=Pe.KHR_MESH_QUANTIZATION}}class dg extends Ns{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,h=(n-t)/u,f=h*h,d=f*h,g=e*c,m=g-c,p=-2*d+3*f,v=d-f,y=1-p,x=v-f+h;for(let _=0;_!==o;_++){const M=a[m+_+o],C=a[m+_+l]*u,P=a[g+_+o],b=a[g+_]*u;s[_]=y*M+x*C+p*P+v*b}return s}}const bC=new ci;class wC extends dg{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return bC.fromArray(s).normalize().toArray(s),s}}const Xt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cd={9728:_t,9729:Ft,9984:Wl,9985:fp,9986:$l,9987:Nr},ud={33071:Kt,33648:Fa,10497:br},fd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},SC={CUBICSPLINE:void 0,LINEAR:Sr,STEP:gs},Rl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MC(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new oo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pi})),i.DefaultMaterial}function is(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function TC(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function AC(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function EC(i){const e=i.extensions&&i.extensions[Pe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+hd(e.attributes):t=i.indices+":"+hd(i.attributes)+":"+i.mode,t}function hd(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function gc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function CC(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class DC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tC,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new M2(this.options.manager):this.textureLoader=new R2(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Op(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};is(s,o,r),yi(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Pe.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(Di.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0)return Promise.resolve(null);const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=fd[r.type],c=Ds[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let m,p;if(d&&d!==h){const v=Math.floor(f/d),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+v+":"+r.count;let x=t.cache.get(y);x||(m=new c(o,v*d,r.count*d/u),x=new n2(m,d/u),t.cache.add(y,x)),p=new Nc(x,l,f%d/u,g)}else o===null?m=new c(r.count*l):m=new c(o,f,r.count*l),p=new Lt(m,l,g);if(r.sparse!==void 0){const v=fd.SCALAR,y=Ds[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,_=r.sparse.values.byteOffset||0,M=new y(a[1],x,r.sparse.count*v),C=new c(a[2],_,r.sparse.count*l);o!==null&&(p=new Lt(p.array.slice(),p.itemSize,p.normalized));for(let P=0,b=M.length;P<b;P++){const A=M[P];if(p.setX(A,C[P*l]),l>=2&&p.setY(A,C[P*l+1]),l>=3&&p.setZ(A,C[P*l+2]),l>=4&&p.setW(A,C[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"";const f=(s.samplers||{})[a.sampler]||{};return u.magFilter=cd[f.magFilter]||Ft,u.minFilter=cd[f.minFilter]||Nr,u.wrapS=ud[f.wrapS]||br,u.wrapT=ud[f.wrapT]||br,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(m){const p=new It(m);p.needsUpdate=!0,f(p)}),t.load(Di.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||CC(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Pe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Pe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[Pe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.encoding=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Lp,vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Pp,vn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return oo}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[Pe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const h=r[Pe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else if(l[Pe.KHR_MATERIALS_UNLIT]){const h=r[Pe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Me(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.fromArray(f),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Ge)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Fn);const u=s.alphaMode||Rl.OPAQUE;if(u===Rl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Rl.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==On&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ue(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&a!==On&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==On&&(o.emissive=new Me().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&a!==On&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ge)),Promise.all(c).then(function(){let h;return a===pc?h=r[Pe.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):h=new a(o),s.name&&(h.name=s.name),yi(h,s),t.associations.set(h,{materials:e}),s.extensions&&is(r,h,s),h})}createUniqueName(e){const t=je.sanitizeNodeName(e||"");let n=t;for(let r=1;this.nodeNamesUsed[n];++r)n=t+"_"+r;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[Pe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return dd(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=EC(c),h=r[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[Pe.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=dd(new Bt,c,t),r[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?MC(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const m=u[d],p=a[d];let v;const y=c[d];if(p.mode===Xt.TRIANGLES||p.mode===Xt.TRIANGLE_STRIP||p.mode===Xt.TRIANGLE_FAN||p.mode===void 0)v=s.isSkinnedMesh===!0?new r2(m,y):new nt(m,y),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),p.mode===Xt.TRIANGLE_STRIP?v.geometry=pd(v.geometry,Dc):p.mode===Xt.TRIANGLE_FAN&&(v.geometry=pd(v.geometry,Na));else if(p.mode===Xt.LINES)v=new c2(m,y);else if(p.mode===Xt.LINE_STRIP)v=new Bc(m,y);else if(p.mode===Xt.LINE_LOOP)v=new u2(m,y);else if(p.mode===Xt.POINTS)v=new f2(m,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(v.geometry.morphAttributes).length>0&&AC(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),yi(v,s),p.extensions&&is(r,v,p),t.assignFinalMaterial(v),h.push(v)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return h[0];const f=new ri;t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Pt(n1.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Fs(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(r){return n.inverseBindMatrices=r,n})}loadAnimation(e){const n=this.json.animations[e],r=[],s=[],a=[],o=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],f=n.samplers[h.sampler],d=h.target,g=d.node,m=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;r.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),a.push(this.getDependency("accessor",p)),o.push(f),l.push(d)}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2],d=c[3],g=c[4],m=[];for(let v=0,y=u.length;v<y;v++){const x=u[v],_=h[v],M=f[v],C=d[v],P=g[v];if(x===void 0)continue;x.updateMatrix();let b;switch(ti[P.path]){case ti.weights:b=xs;break;case ti.rotation:b=Fi;break;case ti.position:case ti.scale:default:b=ys;break}const A=x.name?x.name:x.uuid,L=C.interpolation!==void 0?SC[C.interpolation]:Sr,H=[];ti[P.path]===ti.weights?x.traverse(function(U){U.morphTargetInfluences&&H.push(U.name?U.name:U.uuid)}):H.push(A);let Y=M.array;if(M.normalized){const U=gc(Y.constructor),O=new Float32Array(Y.length);for(let G=0,J=Y.length;G<J;G++)O[G]=Y[G]*U;Y=O}for(let U=0,O=H.length;U<O;U++){const G=new b(H[U]+"."+ti[P.path],_.array,Y,L);C.interpolation==="CUBICSPLINE"&&(G.createInterpolant=function(ne){const $=this instanceof Fi?wC:dg;return new $(this.times,this.values,this.getValueSize()/3,ne)},G.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(G)}}const p=n.name?n.name:"animation_"+e;return new v2(p,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(!!o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,n=this.extensions,r=this,s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"";return function(){const o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),Promise.all(o)}().then(function(o){let l;if(s.isBone===!0?l=new Rp:o.length>1?l=new ri:o.length===1?l=o[0]:l=new ke,l!==o[0])for(let c=0,u=o.length;c<u;c++)l.add(o[c]);if(s.name&&(l.userData.name=s.name,l.name=a),yi(l,s),s.extensions&&is(n,l,s),s.matrix!==void 0){const c=new Ie;c.fromArray(s.matrix),l.applyMatrix4(c)}else s.translation!==void 0&&l.position.fromArray(s.translation),s.rotation!==void 0&&l.quaternion.fromArray(s.rotation),s.scale!==void 0&&l.scale.fromArray(s.scale);return r.associations.has(l)||r.associations.set(l,{}),r.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,r=this.json.scenes[e],s=this,a=new ri;r.name&&(a.name=s.createUniqueName(r.name)),yi(a,r),r.extensions&&is(n,a,r);const o=r.nodes||[],l=[];for(let c=0,u=o.length;c<u;c++)l.push(pg(o[c],a,t,s));return Promise.all(l).then(function(){const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof vn||f instanceof It)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(a),a})}}function pg(i,e,t,n){const r=t.nodes[i];return n.getDependency("node",i).then(function(s){if(r.skin===void 0)return s;let a;return n.getDependency("skin",r.skin).then(function(o){a=o;const l=[];for(let c=0,u=a.joints.length;c<u;c++)l.push(n.getDependency("node",a.joints[c]));return Promise.all(l)}).then(function(o){return s.traverse(function(l){if(!l.isMesh)return;const c=[],u=[];for(let h=0,f=o.length;h<f;h++){const d=o[h];if(d){c.push(d);const g=new Ie;a.inverseBindMatrices!==void 0&&g.fromArray(a.inverseBindMatrices.array,h*16),u.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',a.joints[h])}l.bind(new Oc(c,u),l.matrixWorld)}),s})}).then(function(s){e.add(s);const a=[];if(r.children){const o=r.children;for(let l=0,c=o.length;l<c;l++){const u=o[l];a.push(pg(u,s,t,n))}}return Promise.all(a)})}function RC(i,e,t){const n=e.attributes,r=new Ui;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){const u=gc(Ds[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new R,l=new R;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const m=gc(Ds[f.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new Br;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function dd(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=mc[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return yi(i,e),RC(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?TC(i,e.targets,t):i})}function pd(i,e){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Na)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s}const Gi=async(i,e)=>{if(!dr(i))return new ke;const t=(await new Promise((n,r)=>new eC().load(i,n,s=>{Ht.getState().setLoadingMessage(i,`Loading ${i} (${s.loaded}/${s.total})`)},r))).scene.children[0].children[0];return Ht.getState().removeLoadingMessage(i),e!==null&&t.scale.multiplyScalar(e/new Ui().setFromObject(t).getSize(new R).y),t},PC=async()=>{const i=await Gi("models/low-poly_airplane.glb",.05);i.userData.velocity=new ue(0,0);const e=new fg;Mt.add(n=>{i.rotation.set(i.userData.velocity.x*.3+e.noise(0,n*3e-4)*(4/180*Math.PI),Math.PI*.5+e.noise(1,n*3e-4)*(4/180*Math.PI),e.noise(2,n*3e-4)*(4/180*Math.PI))});const t=new Set;return window.addEventListener("keydown",n=>{t.add(n.code)}),window.addEventListener("keyup",n=>{t.delete(n.code)}),window.addEventListener("blur",()=>{t.clear()}),Vr.add(()=>{if(ye().stageTransitingTo===null&&(t.has("KeyD")&&!t.has("KeyA")&&(i.userData.velocity.x=Math.min(1,Math.max(-.2,i.userData.velocity.x)+.05)),t.has("KeyA")&&!t.has("KeyD")&&(i.userData.velocity.x=Math.max(-1,Math.min(.2,i.userData.velocity.x)-.05)),t.has("KeyW")&&!t.has("KeyS")&&(i.userData.velocity.y=Math.min(1,Math.max(-.2,i.userData.velocity.y)+.05)),t.has("KeyS")&&!t.has("KeyW")&&(i.userData.velocity.y=Math.max(-1,Math.min(.2,i.userData.velocity.y)-.05)),(t.size===0||t.has("KeyA")&&t.has("KeyD")||t.has("KeyW")&&t.has("KeyS"))&&i.userData.velocity.multiplyScalar(.8),i.userData.velocity.length()>1&&i.userData.velocity.normalize(),i.position.setZ(Math.min(Es,Math.max(ai,i.position.z+i.userData.velocity.x*.015))),i.position.setX(Math.min(ME,Math.max(TE,i.position.x+i.userData.velocity.y*.01))),t.has("Space")&&EE()?i.position.y=Math.min(.5,i.position.y+.005):i.position.y=Math.max(0,i.position.y-.005),(ye().getWeather()?.enabled?ye().upgrades.Autopilot-5:ye().upgrades.Autopilot)>0&&t.size===0&&i.userData.autopilotTarget)){const n=.1*ye().upgrades.Autopilot;Math.abs(i.userData.autopilotTarget.position.z-i.position.z)>.02&&(i.userData.velocity.x=Math.min(1,Math.max(-1,i.userData.velocity.x+Math.sign(i.userData.autopilotTarget.position.z-i.position.z)*n)))}}),i};function LC(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function IC(i){const e=new Map,t=new Map,n=i.clone();return mg(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,a=e.get(r),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function mg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)mg(i.children[n],e.children[n],t)}const FC=new Proxy({},{get:(i,e,t)=>Reflect.get(i,e,t)??1});class jr extends ke{mesh;#t;#i;#n;#e=new Set;#r=new Set;#s=new Set;constructor(e,t){super(),this.name=`${e}${FC[e]++}`,this.#n=t;let n;t.traverse(r=>{r instanceof nt&&(n=r)}),this.#t=n===void 0,this.mesh=n??new nt,this.#i=this.#t?null:this.mesh.geometry.attributes.position.clone()}withVertexAnimation(e,t={}){return this.#t?this:(Mt.add(()=>{!this.parent||this.children.length===0||(e(this.mesh.geometry.attributes.position,this.#i),this.mesh.geometry.attributes.position.needsUpdate=!0,t.computeVertexNormals!==!1&&this.mesh.geometry.computeVertexNormals())}),this)}onClone(e){return this.#r.add(e),this}onAllocate(e){return this.#s.add(e),this}allocate(){const e=(()=>{for(const n of this.#e)return this.#e.delete(n),n;const t=IC(this.#n);return t.free=()=>{t.parent&&t.removeFromParent(),this.#e.add(t)},t.getOriginalScale=()=>this.#n.scale.clone(),OE(this.name,this.children.length+this.#e.size+1),this.#r.forEach(n=>n(t)),t})();return this.#s.forEach(t=>{Object.assign(e.userData,t(e))}),this.add(e),e}}const md=async i=>{const e=new jr("bird",un(await Gi("models/low_polygon_art__white_eagle_bird.glb",.1),{rotateX:-Math.PI/2,rotateZ:-Math.PI/2,scale:{multiplyScalar:.3}}));if(i){let t=0;const n=new Map;e.withVertexAnimation((r,s)=>{if(t++%2!==0)return;const a=t%32;r.copy(n.emplace(a,{insert:()=>{for(let o=0;o<r.count;o++){const l=LC(Math.abs(r.getX(o)),3.5,17)*10*Math.sin(a/32*Math.PI*2)*.8;r.setY(o,s.getY(o)+l*.7),r.setZ(o,s.getZ(o)+l)}return r.clone()}}))},{computeVertexNormals:!1})}return e};function NC(i,e){if(e===kb)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Na||e===Dc){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Na)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const OC=`
in vec2 vUv;

void main() {
    float x = vUv.x * (1.5 - vUv.y * 1.3);
    gl_FragColor = vec4(1.0, 1.0, 1.0, smoothstep(0.01, 0.3, vUv.y) * (1.0 - step(0.3, abs(x))) * min(1.0, sin(abs(x) * 30.0) + vUv.y * 5.0) * 0.2);
}
`,BC=`
out vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}
`,kC=`
uniform sampler2D texture1;
uniform sampler2D texture2;
in vec2 vUv;

void main() {
    gl_FragColor = texture2D(texture1, vUv);
    vec4 color2 = texture2D(texture2, vUv);
    gl_FragColor.rgb = pow(gl_FragColor.rgb + color2.rgb * color2.a, /* TODO: I don't know why but using this filter makes the canvas darker, so I've corrected it here. */vec3(1.0 / 1.9));
}
`,UC=`
out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,gg=1,qr=i=>(i.traverse(e=>{e.layers.set(gg)}),i),zC=(i,e,t)=>{const n=new kp(i);n.renderToScreen=!1,n.addPass(t),n.addPass(new Ni(new ue(256,256),3,0,0));const r=new bs(new ct({uniforms:{texture1:{value:null},texture2:{value:n.renderTarget2.texture}},vertexShader:UC,fragmentShader:kC,defines:{}}),"texture1");return r.needsSwap=!0,zp.add(()=>{e.layers.disableAll(),e.layers.enable(gg),n.render(),e.layers.enableAll()}),window.addEventListener("resize",()=>{n.setSize(window.innerWidth,window.innerHeight)}),r},VC=.005,gd=2,HC=i=>{const t=new nt(NC(new Bt().setFromPoints(Array(120).fill(0).flatMap(()=>[new R(i.position.x,0,i.position.z+.1),new R(i.position.x,0,i.position.z-.1)])),Dc),new ct({vertexShader:BC,fragmentShader:OC,transparent:!0}));return t.geometry.setAttribute("uv",new Lt(new Float32Array(Array(120).fill(0).flatMap((n,r)=>[-1,r/(120-1),1,r/(120-1)])),2)),Vr.add(n=>{if(n%gd==0)return;const r=t.geometry.attributes.position;for(let s=r.count-1;s>=2;s--)r.setX(s,r.getX(s-2)-VC*gd),r.setY(s,r.getY(s-2)),r.setZ(s,r.getZ(s-2));r.setX(0,i.position.x),r.setY(0,i.position.y),r.setZ(0,i.position.z+.1),r.setX(1,i.position.x),r.setY(1,i.position.y),r.setZ(1,i.position.z-.1),t.geometry.attributes.position.needsUpdate=!0,t.geometry.computeVertexNormals()}),qr(t),$r((n,r)=>{if(n.stage===r.stage)return;const s=t.geometry.attributes.position;for(let a=0;a<s.count;a++)s.setX(a,i.position.x),s.setZ(a,i.position.z)}),t},vg=(i,e)=>{i.traverse(t=>{t instanceof nt&&(t.material.onBeforeCompile=n=>{Object.assign(n.uniforms,e.uniforms??{}),t.userData.shader=n,e.vertexShader?.trim()&&(n.vertexShader=n.vertexShader.replace(/void\s*main\s*\(\s*\)/,"void super()")+e.vertexShader),e.fragmentShader?.trim()&&(n.fragmentShader=n.fragmentShader.replace(/void\s*main\s*\(\s*\)/,"void super()")+e.fragmentShader)})})},GC=(i,e)=>{i.traverse(t=>{t instanceof nt&&(t.material=e)})},vd=async()=>{const i=await Gi("models/planet_megatropolis.glb",2);return vg(i,{fragmentShader:`
uniform float time;

void main() {
super();
// gl_FragColor.rgb *= 1.0 + (sin(time * 0.006) + 1.0) / 2.0 * 10.0;
}`}),new jr("enemyPlanet",qr(i)).onClone(e=>{Mt.add(t=>{e.rotation.set(0,t*1e-4,0)})})},WC=`
#include <snoise>

in vec2 pos;
uniform float time;

void main() {
    gl_FragColor = vec4(vec3(73.0, 150.0, 209.0) / 255.0 + snoise(pos * 8.0 + vec2(0.0, 0.0003) * time) * 0.15, 0.8 - smoothstep(0.3, 0.55, length(pos)));
}
`,$C=`
out vec2 pos;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    pos = position.xy;
}
`,jC=()=>{const i={time:{value:0}};return Mt.add(e=>{i.time.value=e}),un(new nt(new Is,new ct({transparent:!0,uniforms:i,vertexShader:$C,fragmentShader:WC})),{rotateX:-Math.PI/2,scale:{setScalar:4},position:{setY:-.13}})},qC=`

void main() {
    gl_FragColor += vec4(0.1, 0.1, 0.15, 1.0);
}
`,XC=`

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,KC=async i=>{const e=await Gi("models/hammer.glb",.03);e.position.set(-.01,0,-.06);const t={stage:{value:ye().stage}};$r(r=>{t.stage.value=r.stage}),GC(e,new ct({uniforms:t,vertexShader:XC,fragmentShader:qC})),qr(e);const n=new jr("hammer",new ke().add(e)).onClone(r=>{Mt.add(s=>{r.rotation.x+=Math.random()*.05,r.rotation.y=s*.01,r.rotation.z=Math.PI/2})}).onAllocate(()=>{const r=(Math.random()-.5)*2*Math.PI/4;return{time:0,velocity:new R(Math.cos(r),Math.sin(r),0)}});return Vr.add(r=>{const s=eg(ye()).Hammer;s&&r%s===0&&n.allocate().position.copy(i.position);for(const a of n.children)a.userData.time++,a.position.x+=a.userData.velocity.x*.01,a.position.y=Math.sin(a.userData.time*.15)*.03,a.position.z+=a.userData.velocity.y*.01,(a.position.x>4||Math.abs(a.position.z)>1)&&a.free()}),n},YC=`
in vec2 pos;
uniform float time;
uniform float count;

void main() {
    float opacityY = (sin(pos.y * 30.0 - time * 0.08) + 1.0) / 2.0;
    float opacityX;

    // red lasers
    opacityX = smoothstep(0.005, 0.0, abs(pos.x));
    if (count >= 1.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x - 0.1)); }
    if (count >= 2.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x + 0.1)); }
    if (count >= 3.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x - 0.05)); }
    if (count >= 4.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x + 0.05)); }
    gl_FragColor = vec4(1.0, 0.3, 1.0, opacityY * opacityX);

    // white lasers
    if (count >= 5.0) {
        float opacityX2 = smoothstep(0.005 * (count - 4.0), 0.005 * (count - 5.0), abs(pos.x + cos(time * 0.08) * 0.02));
        gl_FragColor += opacityX2 * vec4(1.0, 1.0, 1.0, opacityY);
    }
}
`,ZC=`
out vec2 pos;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    pos = position.xy;
}
`,JC=i=>{const e={time:{value:0},count:{value:0}};Mt.add(n=>{e.time.value=n,e.count.value=ye().upgrades.Laser,un(t,{position:{setX:i.position.x+1,setY:i.position.y+.01,setZ:i.position.z}})});const t=un(new nt(new Is(1,1),new ct({blending:Ia,transparent:!0,uniforms:e,vertexShader:ZC,fragmentShader:YC})),{rotateY:-Math.PI/2,rotateX:-Math.PI/2,scale:{set:[.25,2,0]},position:{set:[1,.01,0]}});return qr(t),t.renderOrder=1,t},QC=()=>{const i=new ri;let e=Date.now();return(async()=>{const t=new jr("newspaper",un(await Gi("models/y2k_newspaper_article.glb",.1),{rotateY:Math.PI/2,rotateX:Math.PI*.3,scale:{multiplyScalar:2},position:{set:[.8,.5,.5]}})).withVertexAnimation((r,s)=>{for(let a=0;a<r.count;a++)r.setY(a,s.getY(a)+Math.sin(r.getX(a)*Math.PI*2+Date.now()*.006)*.03+Math.sin(r.getZ(a)*Math.PI*2+Date.now()*.006)*.01)});i.add(t),t.mesh.material.depthTest=!1,t.mesh.material.transparent=!0,t.mesh.renderOrder=3;for(let r=0;r<30;r++)t.allocate();const n=new fg;Mt.add(()=>{if(t.parent===null)return;const r=.1;for(const[s,a]of t.children.entries()){const o=(Date.now()-e)*.006*(1+n.noise(s,3)*.3);a.rotation.y=n.noise(s,5),a.rotation.z=1*o,a.position.set(n.noise(s,4)*.5+.2,.3+(Math.cos(o)-o*.5-1)*r+(n.noise(s,1)+1)*.3,.5+(Math.sin(o)-o*.8)*r+(n.noise(s,2)+1)*.3)}})})().catch(console.error),i.visible=!1,$r((t,n)=>{if(t.availableNews===n.availableNews)return;const r=[...t.availableNews.difference(n.availableNews)][0];!r||(e=Date.now(),i.visible=!0,vc.getState().showNews(CE[r]),setTimeout(()=>{i.visible=!1},1e4))}),i},eD=`
#include <snoise>

uniform sampler2D tDiffuse;
uniform float aspect;
uniform float time;
uniform bool blur;

uniform vec2 mouse0;
uniform vec2 mouse1;
uniform vec2 mouse2;
uniform vec2 mouse3;
uniform vec2 mouse4;
uniform vec2 mouse5;
uniform vec2 mouse6;
uniform vec2 mouse7;
uniform vec2 mouse8;
uniform vec2 mouse9;

in vec2 vUv;

#define scale 1.4

// https://www.desmos.com/calculator/ejrfpu9pyi
float dropletY(float x, float a) {
    return mod(x, a) < 1.0 ? sqrt(mod(x, a)) + floor(x/a) : floor(x/a) + 1.0;
}

// https://iquilezles.org/articles/distfunctions2d/
float sdSegment( in vec2 p, in vec2 a, in vec2 b ) {
    vec2 pa = p-a, ba = b-a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return length( pa - ba*h );
}

#define PI 3.1415926535897932384626433832795

#define horizontalDropletDistributionCycle (2.0 * PI / 300.0)

float horizontalDropletDistribution(float x) {
    return max(0.0, (cos(x * 300.0) - 0.5) * 2.0);
}

float movingDropletVolume(vec2 p, float i) {
    float prob = horizontalDropletDistribution(p.x);
    if (prob == 0.0) { return 0.0; }
    p = vec2(p.x + i * horizontalDropletDistributionCycle / 4.0, p.y);
    float y = dropletY(time * 0.001 + 3.9 * floor(vUv.x / horizontalDropletDistributionCycle - 0.5) + p.y * 2.0, /* cycle of dripping */15.0 + i) * 0.25;
    float noise = snoise(vec3((p + vec2(0.0, y)) * vec2(aspect, 1.0) * 10.0 / scale, i * 1000.0));
    return smoothstep(0.01, 1.0, prob * pow(noise, /* higher = sparser droplets */ 10.0));
}

float fixedDropletVolume(vec2 p) {
    float noise = snoise(p * vec2(aspect, 1.0) * 60.0 / scale) + snoise((p * vec2(aspect, 1.0) + vec2(100.0, 0.0)) * 60.0 / scale);
    return smoothstep(0.01, 1.0, pow(noise, /* higher = sparser droplets */ 6.0));
}

float dropletVolume(vec2 p) {
    float vol = 0.0;
    for (float i = 0.0; i < 4.0; i += 1.0) {
        vol += movingDropletVolume(p + snoise(p) * 0.05, i);
    }
    return vol + fixedDropletVolume(p)
        // splash
        + smoothstep(0.5, 0.6, pow(snoise(vec3(p * vec2(aspect, 1.0) * 8.0, time * 0.0005)), 8.0)) * 0.05
        + smoothstep(0.5, 0.6, pow(snoise(vec3(p * vec2(aspect, 1.0) * 8.0, time * 0.0005 + 100.0)), 8.0)) * 0.05
        + smoothstep(0.5, 0.6, pow(snoise(vec3(p * vec2(aspect, 1.0) * 8.0, time * 0.0005 + 200.0)), 8.0)) * 0.05;
}

vec2 dropletGradient(vec2 p) {
    float base = dropletVolume(p);
    if (base == 0.0) { return vec2(0.0); }
    return vec2(
        base - dropletVolume(p + vec2(0.0005 * scale, 0.0)),
        base - dropletVolume(p + vec2(0.0, 0.0005 * scale))
    );
}

void main() {
    if (dropletVolume(vUv) > 0.01) {
        gl_FragColor = pow(texture2D(tDiffuse, vUv + dropletGradient(vUv) * /* lower = transparent */9.0), vec4(vec3(/* lower = brighter */ 0.9), 1.0));
    } else {
        gl_FragColor = texture2D(tDiffuse, vUv);

        // blur
        if (blur) {
            gl_FragColor = vec4(
                texture2D(tDiffuse, vUv + vec2(-0.0028,  0.0028) / vec2(aspect, 1.0)) +
                texture2D(tDiffuse, vUv + vec2(-0.0040,  0.0000) / vec2(aspect, 1.0)) +
                texture2D(tDiffuse, vUv + vec2(-0.0028, -0.0028) / vec2(aspect, 1.0)) +
                texture2D(tDiffuse, vUv + vec2( 0.0000,  0.0040) / vec2(aspect, 1.0)) +
                texture2D(tDiffuse, vUv) +
                texture2D(tDiffuse, vUv + vec2( 0.0000, -0.0040) / vec2(aspect, 1.0)) +
                texture2D(tDiffuse, vUv + vec2( 0.0028,  0.0028) / vec2(aspect, 1.0)) +
                texture2D(tDiffuse, vUv + vec2( 0.0040,  0.0000) / vec2(aspect, 1.0)) +
                texture2D(tDiffuse, vUv + vec2( 0.0028, -0.0028) / vec2(aspect, 1.0))
            ) / 9.0;
        }

        gl_FragColor = pow(gl_FragColor, vec4(vec3(0.7), 1.0));

        float opacity = 1.0;

        if (mouse8.x >= 0.0 && mouse9.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse8 * vec2(aspect, 1.0), mouse9 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse7.x >= 0.0 && mouse8.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse7 * vec2(aspect, 1.0), mouse8 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse6.x >= 0.0 && mouse7.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse6 * vec2(aspect, 1.0), mouse7 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse5.x >= 0.0 && mouse6.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse5 * vec2(aspect, 1.0), mouse6 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse4.x >= 0.0 && mouse5.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse4 * vec2(aspect, 1.0), mouse5 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse3.x >= 0.0 && mouse4.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse3 * vec2(aspect, 1.0), mouse4 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.7; }
        if (mouse2.x >= 0.0 && mouse3.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse2 * vec2(aspect, 1.0), mouse3 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.5; }
        if (mouse1.x >= 0.0 && mouse2.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse1 * vec2(aspect, 1.0), mouse2 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.3; }
        if (mouse0.x >= 0.0 && mouse1.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse0 * vec2(aspect, 1.0), mouse1 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.1; }

        opacity = max(0.0, opacity);

        gl_FragColor = mix(texture2D(tDiffuse, vUv), gl_FragColor, opacity);
    }
}
`,tD=`
out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,nD=(i,e)=>{const t=new bs({uniforms:{blur:{value:e},tDiffuse:{value:null},aspect:{value:window.innerWidth/window.innerHeight},time:{value:0},mouse0:{value:new ue(.5,.5)},mouse1:{value:new ue(.5,.5)},mouse2:{value:new ue(.5,.5)},mouse3:{value:new ue(.5,.5)},mouse4:{value:new ue(.5,.5)},mouse5:{value:new ue(.5,.5)},mouse6:{value:new ue(.5,.5)},mouse7:{value:new ue(.5,.5)},mouse8:{value:new ue(.5,.5)},mouse9:{value:new ue(.5,.5)}},vertexShader:tD,fragmentShader:eD}),n=()=>{t.uniforms.mouse9.value.copy(t.uniforms.mouse8.value),t.uniforms.mouse8.value.copy(t.uniforms.mouse7.value),t.uniforms.mouse7.value.copy(t.uniforms.mouse6.value),t.uniforms.mouse6.value.copy(t.uniforms.mouse5.value),t.uniforms.mouse5.value.copy(t.uniforms.mouse4.value),t.uniforms.mouse4.value.copy(t.uniforms.mouse3.value),t.uniforms.mouse3.value.copy(t.uniforms.mouse2.value),t.uniforms.mouse2.value.copy(t.uniforms.mouse1.value),t.uniforms.mouse1.value.copy(t.uniforms.mouse0.value),t.uniforms.mouse0.value.set(-1,-1)};return window.addEventListener("mousemove",r=>{t.uniforms.mouse0.value.set(r.pageX/window.innerWidth,1-r.pageY/window.innerHeight),t.uniforms.mouse0.value.distanceTo(t.uniforms.mouse1.value)>.1&&n()}),setInterval(()=>{n()},100),Mt.add(r=>{t.uniforms.aspect.value=i.aspect,t.uniforms.time.value=r}),t.enabled=ye().getWeather()?.name==="Rain"&&!!ye().getWeather()?.enabled,$r((r,s)=>{r.weatherEffectWillBeEnabledIn!==s.weatherEffectWillBeEnabledIn&&(t.enabled=ye().getWeather()?.name==="Rain"&&!!ye().getWeather()?.enabled)}),t},iD=`
uniform sampler2D tDiffuse;
in vec2 vUv;
uniform float time;  // in [0, 2]

void main() {
    if (time < 0.5) {
        // fade in
        gl_FragColor = mix(texture2D(tDiffuse, vUv), vec4(0.0, 0.0, 0.0, 1.0), time);
    } else {
        // fade out
        gl_FragColor = mix(texture2D(tDiffuse, vUv), vec4(0.0, 0.0, 0.0, 1.0), 2.0 - time);
    }
}
`,rD=`
out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,sD=()=>{let i=!1;const e=new bs({uniforms:{tDiffuse:{value:null},time:{value:0}},vertexShader:rD,fragmentShader:iD});return{pass:e,play:t=>{if(i)return;i=!0;let n=0;const r=(s,a)=>{n<1?n=Math.min(1,n+a*.001):n===1?(n+=a*.001,t(),ye().completeStageTransition()):n<2?n=Math.min(2,n+a*.001):(Mt.delete(r),i=!1),e.uniforms.time.value=n};Mt.add(r)}}},aD=`
uniform float time;
in float worldPosY;

void main() {
    super();
    if (worldPosY > 0.0) {
        gl_FragColor.rgb = gl_FragColor.rgb * (1.0 + (sin(time * 0.01 + worldPosY * 300.0) + 1.0) / 2.0 * 2.0);
    }
}
`,oD=`
out float worldPosY;
uniform float distortion;  // [0, 1]

void main() {
    super();
    vec4 worldPos = modelMatrix * vec4(position, 1.);
    worldPosY = worldPos.y;
    gl_Position.x += sin(worldPos.y * 600.0) * distortion * 0.1;
}
`,Qa=async()=>{const i={time:{value:0},distortion:{value:0}};Mt.add(t=>{i.time.value=t});const e=un(await Gi("models/ufo.glb",.2),{rotateX:-Math.PI/2,position:{set:[.5,0,0]}});return vg(e,{uniforms:i,vertexShader:oD,fragmentShader:aD}),new jr("ufo",e).onClone(t=>{Mt.add(n=>{t.rotation.set(-Math.PI/2+Math.sin(n*.01)*.05,Math.cos(n*.01)*.05,0)})})},lD={createModel:()=>{const i=new ke;return Gi("models/sky_pano_-_grand_canyon_yuma_point.glb",4).then(e=>{Mt.add(t=>{e.rotation.y=t*1e-4}),i.add(un(e,{rotateX:-Math.PI/2,position:{setY:-.5}}),new Vc(16777215,.025),un(new co(16117434,1.6),{position:{set:[.3,1,-1]}}),dr("fog")?jC():new ke)}).catch(console.error),i},visible:()=>ye().availableNews.has("aliensComing"),createEnemyPools:async()=>{const i=await Cs({alive:md(!0).then(e=>e.onAllocate(t=>({name:"Bird",time:0,hp:15*(1+Math.random())*500**ye().transcendence,update:()=>{t.position.x-=.01},onKilled:()=>{i.dead.allocate().position.copy(t.position)},radius:.03,money:1*500**ye().transcendence}))),dead:md(!1).then(e=>e.onAllocate(()=>({time:0}))),weatherAlive:Qa().then(e=>e.onAllocate(t=>({name:"Weather Effect UFO",time:0,hp:1500*500**ye().transcendence,update:()=>{},onKilled:()=>{i.weatherDead.allocate().position.copy(t.position),ye().stopWeatherEffect(),ye().completeTutorial("weatherEffect")},radius:.03,money:1e3*500**ye().transcendence}))),weatherDead:Qa().then(e=>e.onAllocate(()=>({time:0}))),spawn:e=>{e%5===0&&i.alive.allocate().position.set(2,0,e*.06%1*(Es-ai)+ai),ye().getWeather()?.enabled&&i.weatherAlive.children.length===0&&i.weatherAlive.allocate().position.set(1,0,Math.random()*(Es-ai)+ai)}});return i}},cD=`
#include <snoise>

uniform vec2 u_resolution;
uniform float time;

void main() {
    vec2 st = (gl_FragCoord.xy / u_resolution.xy) * 2.0;

    // colored stars
    vec3 color =
        (vec3(0.0, 1.0, 1.0) * pow((snoise(st) + 1.0) / 2.0 * 0.5, 2.0) +
        vec3(0.0, 0.0, 1.0) * pow((snoise(st + 100.0) + 1.0) / 2.0 * 0.5, 0.5))
        * pow((snoise(vec3(st * 123.45678, time * 0.001)) + 1.0) / 2.0, 2.0) * 0.5 * 0.5;

    // white dusts
    color += pow((snoise((vec2((st.x - 1.0) * (st.y + 1.0) * 4.0 + 1.0, st.y) + vec2(0.0, time * 0.0001)) * 123.45678 * 0.4) + 1.0) / 2.0, 20.0) * 0.3;

    gl_FragColor = vec4(color * 1.5, 1.0);
}
`,uD=`

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,fD={createModel:()=>{const i={u_resolution:{value:new ue(window.innerWidth,window.innerHeight)},time:{value:0}};return Mt.add(e=>{i.time.value=e}),window.addEventListener("resize",()=>{i.u_resolution.value.set(window.innerWidth,window.innerHeight)}),new ke().add(new nt(new zi(4,4,4),new ct({uniforms:i,side:Nt,vertexShader:uD,fragmentShader:cD})),new Vc(11184895,.2),un(new co(16117434,.4),{position:{set:[.3,1,-1]}}))},visible:()=>ye().availableNews.has("aliensComing"),createEnemyPools:async()=>{const i=await Cs({alive:Qa().then(e=>e.onAllocate(t=>({name:"UFO",time:0,hp:300*(1+Math.random())*500**ye().transcendence,update:()=>{t.userData.time%80<=3?t.scale.copy(t.getOriginalScale().multiply(new R(1,1-t.userData.time%80/3,1))):t.userData.time%80===4?(t.position.x-=.35+Math.random()*.2,t.position.z=Math.max(ai,Math.min(Es,t.position.z+(Math.random()-.5)*.2))):t.userData.time%80<=7?t.scale.copy(t.getOriginalScale().multiply(new R(1,(t.userData.time%80-4)/3,1))):t.position.x-=.005},onKilled:()=>{i.dead.allocate().position.copy(t.position)},radius:.03,money:100*500**ye().transcendence}))),dead:Qa().then(e=>e.onAllocate(()=>({time:0}))),spawn:e=>{e%31===0&&ye().availableNews.has("aliensComing")&&i.alive.allocate().position.set(2,0,e*.06%1*(Es-ai)+ai)}});return i}},hD=`
#include <snoise>

uniform vec2 u_resolution;
uniform float time;

void main() {
    vec2 st = (gl_FragCoord.xy / u_resolution.xy) * 2.0;

    // colored stars
    vec3 color =
        (vec3(0.0, 1.0, 1.0) * pow((snoise(st) + 1.0) / 2.0 * 0.5, 2.0) +
        vec3(0.0, 0.0, 1.0) * pow((snoise(st + 100.0) + 1.0) / 2.0 * 0.5, 0.5))
        * pow((snoise(vec3(st * 123.45678, time * 0.001)) + 1.0) / 2.0, 2.0) * 0.5 * 0.5;

    // white dusts
    color += pow((snoise((vec2((st.x - 1.0) * (st.y + 1.0) * 4.0 + 1.0, st.y) + vec2(0.0, time * 0.0001)) * 123.45678 * 0.4) + 1.0) / 2.0, 20.0) * 0.3;

    gl_FragColor = vec4(color * 1.5, 1.0);
}
`,dD=`

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,pD={createModel:()=>{const i={u_resolution:{value:new ue(window.innerWidth,window.innerHeight)},time:{value:0}};return Mt.add(e=>{i.time.value=e}),window.addEventListener("resize",()=>{i.u_resolution.value.set(window.innerWidth,window.innerHeight)}),qr(new ke().add(new nt(new zi(8,8,8),new ct({uniforms:i,side:Nt,vertexShader:dD,fragmentShader:hD})),new Vc(11184895,.2),un(new co(16117434,.4),{position:{set:[.3,1,-1]}})))},visible:()=>ye().availableNews.has("aliensComing")&&ye().upgrades["ATK\xD72"]>0,createEnemyPools:async()=>{const i=await Cs({alive:vd().then(e=>e.onAllocate(t=>({name:"Planet",time:0,hp:15e4*500**ye().transcendence,update:()=>{},onKilled:()=>{i.dead.allocate().position.copy(t.position),ye().defeatedFinalBoss()},radius:1,money:1e4*500**ye().transcendence}))),dead:vd().then(e=>e.onAllocate(()=>({time:0}))),spawn:e=>{i.alive.children.length===0&&!ye().canTranscend&&i.alive.allocate().position.set(4,0,0)}});return i}},eo={Earth:lD,Universe:fD,Final:pD};km();const _d=new Map(rg(tg).map((i,e)=>[i,e])),mD=()=>{const i=et(tt,e=>[...e.availableTutorials.difference(e.completedTutorials)].sort((t,n)=>_d.get(t)-_d.get(n))[0]);return V("div",{style:{opacity:i===void 0?"0":"1"},class:"absolute w-full text-center top-[70%] text-white bg-slate-800 bg-opacity-70 select-none [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none z-10",children:i&&V(ft,{children:[V("i",{class:"ti ti-message-report"})," ",V("span",{class:"[&>b]:text-orange-300",children:tg[i]})]})})},vc=Us()(Zc(zs((i,e)=>({news:null,showNews:t=>{i(n=>{n.news=[...t]})},hideNews:()=>{i(t=>{t.news=null})}})),{name:"acgDOMStore",version:1,serialize:i=>yn.stringify(i),deserialize:i=>yn.parse(i)})),Ht=Us()(zs((i,e)=>({loadingMessage:new Map,enemyStatus:null,powerSaveMode:!1,setLoadingMessage:(t,n)=>{i(r=>{r.loadingMessage.set(t,n)})},removeLoadingMessage:t=>{i(n=>{n.loadingMessage.delete(t)})},setEnemyStatus:t=>{i(n=>{n.enemyStatus=t,n.enemyStatus.hp=Math.max(0,Math.round(n.enemyStatus.hp))})},updatePowerSaveModeState:()=>{i(t=>{t.powerSaveMode=document.visibilityState==="hidden"||!document.hasFocus()})}})));Ht.getState().updatePowerSaveModeState();document.addEventListener("visibilitychange",()=>{Ht.getState().updatePowerSaveModeState()});window.addEventListener("blur",()=>{Ht.getState().updatePowerSaveModeState()});window.addEventListener("focus",()=>{Ht.getState().updatePowerSaveModeState()});const _g=i=>{i.style.opacity="0",setTimeout(()=>{i.close()},300)},Pl=i=>{i.target===i.currentTarget&&_g(i.currentTarget)},gD=Array(1e4).fill(0).map(()=>Array(Math.floor(Math.random()*6)+2).fill(0).map(()=>"abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)]).join("")).join(" "),vD=()=>{const i=et(Ht,e=>e.enemyStatus,Ja);return i?V("div",{class:"px-3 pt-1 pb-3 window mt-1 mb-1",children:[V("h2",{class:"mb-2 tracking-wide",children:[V("i",{class:"ti ti-chart-line"})," Enemy Stats"]}),V("div",{children:V("table",{class:"tracking-wide",children:[V("tr",{children:[V("td",{class:"pr-1",children:V("i",{class:"ti ti-float-none"})}),V("td",{children:i.name})]}),V("tr",{children:[V("td",{class:"pr-1",children:V("i",{class:"ti ti-heart"})}),V("td",{children:i.hp})]}),V("tr",{children:[V("td",{class:"pr-1",children:V("i",{class:"ti ti-moneybag"})}),V("td",{children:i.money})]})]})})]}):V(ft,{})},Ll=i=>{i.style.transition="opacity ease 0.3s",i.style.opacity="0",i.showModal(),i.style.opacity="1"},_D=()=>{const i=et(vc),e=gr(null),t=gr(null),n=gr(null),[r,s]=Hr(""),a=et(tt,()=>sg(po(eo).map(([d,g])=>[d,g.visible()])),Ja),o=et(Ht,d=>d.loadingMessage),l=et(tt,d=>d.getWeather(),Ja),c=et(tt,d=>Math.ceil((d.weatherEffectWillBeEnabledInLessThan[d.stage]??Number.MAX_SAFE_INTEGER)/Ya/60)),u=et(tt,d=>d.transcending),h=et(Ht,d=>d.powerSaveMode),f=et(tt,d=>d.stage);return Ss(()=>{for(const d of["./audio/credit.html","./models/credit.html","./font/credit.html","./lib_credit.html","./lib_credit2.html"])fetch(d).then(g=>g.text()).then(g=>{s(m=>m+Y3.link(g))}).catch(console.error)},[]),Ss(()=>{i.news!==null&&setTimeout(()=>{!e.current||(Ll(e.current),e.current.addEventListener("close",()=>{vc.getState().hideNews(),ye().addTutorial("nextStage")},{once:!0}))},2e3)},[i.news]),u?V("div",{class:"absolute window w-full h-full",children:V("div",{class:"m-auto w-fit h-fit text-center p-[30vh]",children:[V("h2",{children:"Transcending..."}),V("p",{class:"my-4",children:"Enemies in the next world will have 500x the HP and money."}),V("div",{class:"float-right",children:[V("span",{class:"gold",children:V("button",{class:"px-8",onClick:()=>{ye().confirmTranscending()},children:"Confirm"})}),V("button",{class:"px-8 ml-2",onClick:()=>{ye().cancelTranscending()},children:"Cancel"})]})]})}):V(ft,{children:[V(PE,{}),V(mD,{}),h&&V("div",{class:"absolute text-center w-full top-[45%] select-none [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none z-10",children:V("div",{class:"relative py-3 px-8 mx-auto w-fit text-white bg-slate-800 bg-opacity-70 rounded-sm",children:[V("h2",{class:"tracking-wide",children:"Power Save Mode"}),V("p",{class:"[font-size:60%] text-gray-200 tracking-wide",children:["Power Save Mode stops rendering the game,",V("br",{}),"but the game still runs in the background."]})]})}),V("div",{class:"absolute right-1 top-1 min-w-[13rem]",children:[Za(a).some(d=>d)&&V("div",{class:"px-3 pt-1 pb-3 window",children:[V("h2",{class:"mb-2 tracking-wide",children:[V("i",{class:"ti ti-map-2"})," Stages"]}),V("div",{children:rg(eo).map(d=>V("button",{tabIndex:-1,class:"w-full mb-1"+(f===d?" button-primary":""),onClick:()=>{ye().setStageTransitingTo(d)},disabled:!a[d]||f===d,children:a[d]?d:"???"}))})]}),l!==null&&V("div",{class:"px-3 pt-1 pb-3 window mt-1 mb-1",children:[V("h2",{class:"mb-2 tracking-wide",children:[V("i",{class:"ti ti-sun"})," Weather"]}),V("div",{children:V("table",{children:[V("tr",{children:[V("td",{class:"pr-1",children:!l.enabled&&">"}),V("td",{class:"tracking-wider "+(l.enabled?"":"font-bold"),children:"Normal"})]}),V("tr",{children:[V("td",{class:"pr-1",children:l.enabled&&">"}),V("td",{class:"tracking-wider "+(l.enabled?"font-bold":""),children:[l.name,!l.enabled&&V("span",{class:"text-gray-300",children:[" (in ","<"+c," min",c!==1&&"s",")"]})]})]})]})})]}),V(vD,{})]}),V(BE,{}),V("dialog",{class:"window",ref:n,onClick:Pl,children:[V("p",{children:"Are you sure you want to reset your save data?"}),V("div",{class:"float-right mt-4",children:[V("button",{class:"px-4 button-primary",onClick:()=>{DE(),location.reload()},children:"Yes"}),V("button",{class:"px-4 ml-2",onClick:()=>{_g(n.current)},children:"Cancel"})]})]}),V("div",{class:"absolute left-1 bottom-1 px-5 pb-1 window tracking-wide",children:[V("span",{class:"cursor-pointer hover:text-gray-200",onClick:()=>{Ll(t.current)},children:[V("i",{class:"ti ti-license"})," Credit"]}),V("span",{class:"cursor-pointer text-red-400 hover:text-red-500 ml-5",onClick:()=>{!n.current||Ll(n.current)},children:[V("i",{class:"ti ti-eraser"})," Reset Progress"]})]}),V("dialog",{ref:t,class:"window p-2",onClick:Pl,children:V("div",{class:"p-5",children:[V("h1",{class:"text-xl mb-2 tracking-wider w-full text-center",children:"Credits"}),V("ul",{dangerouslySetInnerHTML:{__html:r??""},class:"w-full h-full block [&_li]:mb-2 [&_h2]:font-bold [&_a]:text-violet-300 select-text list-disc ml-5"})]})}),V("dialog",{ref:e,class:"bg-gray-100 w-[400px] h-[620px] p-5 box-border shadow-2xl select-none [font-family:KottaOne]",onClick:Pl,children:i.news&&V("div",{class:"[line-height:1.2] [font-size:12px] text-justify overflow-y-hidden h-full",children:[V("h2",{class:"text-lg tracking-wide font-bold mb-4 [border-bottom:3px_solid_rgb(130,130,130)] text-center",children:i.news[0]}),V("span",{children:i.news[1]}),V("span",{class:"text-gray-500",children:[" ",gD]})]})}),o.size>0&&V("div",{class:"text-white absolute top-[35%] left-0 w-full text-center whitespace-pre",children:[...o.values()].join(`
`)})]})};Ar(V(_D,{}),document.body);{const i=new BroadcastChannel("acg");i.addEventListener("message",e=>{e.data==="hello"&&(location.href="./tab_already_open.html")}),i.postMessage("hello")}const _r=new t2,Ir=i=>(_r.add(i),i),rt=Ir(await PC());_r.add(HC(rt),JC(rt));for(const[i,e]of po(eo)){const t=Ir(e.createModel());t.visible=ye().stage===i,$r((n,r)=>{n.stage!==r.stage&&(t.visible=n.stage===i)})}const kn=un(new Pt(70,window.innerWidth/window.innerHeight,.01,10),{position:{set:[-.5,.6,0]}}),ba=await Cs({hammers:KC(rt).then(Ir),enemies:Cs(sg(po(eo).map(([i,e])=>[i,e.createEnemyPools().then(t=>{for(const n of Za(t))n instanceof ke&&Ir(n);return t})])))});{const i=Za(ba.enemies).flatMap(r=>r.weatherAlive?[r.alive,r.weatherAlive]:[r.alive]),e=Za(ba.enemies).flatMap(r=>r.weatherDead?[r.dead,r.weatherDead]:[r.dead]),t=Ir(new jr("hitEffect",qr(new nt(new Uc(.006),new On({color:16738047}))))),n=new WeakMap;$r((r,s)=>{if(!(r.stage===s.stage&&r.transcendence===s.transcendence)){for(const a of i.flatMap(o=>o.children))n.get(a)?.free();for(const a of[...i.flatMap(o=>o.children),...e.flatMap(o=>o.children)])a.free()}}),Vr.add(r=>{ba.enemies[ye().stage].spawn(r);for(const a of i.flatMap(o=>o.children)){a.userData.update();for(const o of ba.hammers?.children??[])o.position.distanceTo(a.position)<a.userData.radius+.02&&(a.userData.hp-=fc(ye()).Hammer??0,o.free());Math.abs(a.position.z-rt.position.z)<a.userData.radius&&Math.abs(a.position.y-rt.position.y)<a.userData.radius&&a.position.x>rt.position.x?(n.emplace(a,{insert:()=>t.allocate()}).position.copy(a.position).setZ(rt.position.z),a.userData.hp-=fc(ye()).Laser,Ht.getState().setEnemyStatus({hp:a.userData.hp,name:a.userData.name,money:a.userData.money})):n.has(a)&&(n.get(a).free(),n.delete(a)),(a.position.x<-1||a.userData.hp<=0)&&(a.userData.hp<=0&&(a.userData.onKilled(),ye().addMoney(a.userData.money)),a.free(),n.get(a)?.free(),n.delete(a)),a.userData.time++}for(const a of e.flatMap(o=>o.children))a.position.y-=.001*a.userData.time,a.rotateZ(.1*(Math.random()-.5)),a.userData.time++,a.userData.time>100&&a.free();const s=(a,o)=>a.length===0?void 0:a.reduce((l,c)=>o(l)<o(c)?l:c,a[0]);(!rt.userData.autopilotTarget||!i.flatMap(a=>a.children).includes(rt.userData.autopilotTarget)||rt.userData.autopilotTarget.position.x<rt.position.x)&&(rt.userData.autopilotTarget=s(i.flatMap(a=>a.children).filter(a=>a.position.x>rt.position.x+.3&&a.userData.name!=="Weather Effect UFO"),a=>a.position.x)),ye().countdown()})}Ht.getState().setLoadingMessage("loadingModels","Loading models...");await new Promise(i=>setTimeout(i,0));Ir(QC());const Wi=new Dp({antialias:!0});Wi.outputEncoding=Ge;Wi.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(Wi.domElement);const Si=new kp(Wi),xg=sD();{const i=new G2(_r,kn);Si.addPass(i),dr("unrealbloom")&&Si.addPass(new Ni(new ue(256,256),.2,0,0)),dr("selective unrealbloom")&&Si.addPass(zC(Wi,kn,i)),dr("rain")&&Si.addPass(nD(kn,dr("rain.blur"))),Si.addPass(xg.pass)}Vr.add(()=>{ye().stageTransitingTo!==null&&(rt.position.x+=.01+Math.max(0,rt.position.x)*.08,_r.rotateY(.02),_r.rotateZ(-.003),rt.position.x>2&&xg.play(()=>{rt.position.x=0,_r.rotation.set(0,0,0)}))});window.addEventListener("resize",()=>{kn.aspect=window.innerWidth/window.innerHeight,kn.updateProjectionMatrix(),Wi.setSize(window.innerWidth,window.innerHeight),Si.setSize(window.innerWidth,window.innerHeight)});const xD=null;{const i=kE(),e={render:0,update:0};let t=0;Wi.setAnimationLoop(n=>{const r=!Ht.getState().powerSaveMode;if(xD?.update(),i()||ye().transcending)e.update=e.render=Date.now();else{const s=Math.floor((n-e.update)/(1e3/Ya));e.update+=s*(1e3/Ya);for(let o=0;o<s;o++)Vr.forEach(l=>l(t)),t++;const a=n-e.render;e.render=n,r&&Mt.forEach(o=>o(n,a)),r&&(kn.position.z=rt.position.z,kn.lookAt(ye().stage==="Final"?new R(.5,0,rt.position.z):new R(0,0,rt.position.z)),kn.rotation.x+=rt.userData.velocity.x*.05,kn.rotation.y-=Math.abs(rt.userData.velocity.y*.02))}r&&(zp.forEach(s=>s()),Si.render())})}Ht.getState().removeLoadingMessage("loadingModels");ye().addTutorial("wasd");window.addEventListener("keyup",i=>{["KeyW","KeyS","KeyA","KeyD"].includes(i.code)&&ye().availableTutorials.has("wasd")&&ye().completeTutorial("wasd")});window.dispatchEvent(new UIEvent("resize"));
